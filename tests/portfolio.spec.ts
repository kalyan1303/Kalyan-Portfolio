import { expect, test } from "@playwright/test";

test("primary navigation and skip link reach semantic sections", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Skip to content" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  await page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "Selected work" })
    .click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.getByRole("heading", { name: /The work behind/ })).toBeVisible();
});

test("project details open as a dialog and close with Escape", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Read project details" }).first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "AQMDCore RESTful Web API" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});

test("SCAQMD enterprise work and ENFTestHub independent direction are present", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator(".project-card");
  await expect(cards).toHaveCount(7);
  await expect(page.getByText("Enterprise client · South Coast AQMD (SCAQMD)")).toBeVisible();
  await expect(page.getByRole("heading", { name: "GMS · Grant Management System" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Browser Automation Testing Workbench" })).toBeVisible();
  await expect(page.getByText("Independent · ENFTestHub").first()).toBeVisible();
  await expect(page.getByText("Illustrative visual · no production data").first()).toBeVisible();
});

test("resume downloads and contact destinations are present", async ({ page }) => {
  await page.goto("/");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: /View resume/ }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("Kalyan-Bavisetti-Resume.pdf");
  await expect(page.getByRole("link", { name: /bavisettikalyan109@gmail.com/ })).toHaveAttribute(
    "href",
    "mailto:bavisettikalyan109@gmail.com",
  );
  await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/bavisetti-kalyan-5165aa246/",
  );
  await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/kalyan1303",
  );
});

test("hero shows Kalyan's role and interactive avatar controls", async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
      configurable: true,
      value: function (this: HTMLCanvasElement, ...args: unknown[]) {
        if (args[0] === "webgl2") return null;
        return Reflect.apply(original, this, args);
      },
    });
    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        cancel: () => undefined,
        speak: (utterance: SpeechSynthesisUtterance) => {
          utterance.onstart?.(new Event("start") as SpeechSynthesisEvent);
        },
      },
    });
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Kalyan Beyond the Code." })).toBeVisible();
  await expect(page.getByText("Fullstack Developer", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("4+ years of experience").first()).toBeVisible();

  await page.getByRole("button", { name: "Tell me about Kalyan" }).click();
  await expect(page.getByText("Kalyan is speaking")).toBeVisible();
  await page.getByRole("button", { name: "Stop speaking" }).click();
  await expect(page.getByText("Speech stopped")).toBeVisible();

  await page.getByRole("button", { name: "Rotate 360°" }).click();
  await expect(page.locator(".fallback-avatar.is-spinning")).toBeVisible();
});

test("mobile navigation works without horizontal page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "About" })
    .click();
  await expect(page).toHaveURL(/#about$/);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});

test("reduced motion uses the static visual and keeps content available", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("img", { name: "Stylized holographic avatar illustration" })).toBeVisible();
  await expect(page.getByText("Static visual · reduced motion")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Kalyan Beyond the Code." })).toBeVisible();
});

test("unsupported WebGL has a static fallback", async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
      configurable: true,
      value: function (this: HTMLCanvasElement, ...args: unknown[]) {
        if (args[0] === "webgl2") return null;
        return Reflect.apply(original, this, args);
      },
    });
  });
  await page.goto("/");
  await expect(page.getByText("3D preview unavailable")).toBeVisible();
  await expect(page.getByRole("heading", { name: /^Kalyan/ })).toBeVisible();
});

test("supported browsers render the 3D scene or show its fallback", async ({ page }) => {
  await page.goto("/");
  const supported = await page.evaluate(() =>
    Boolean(document.createElement("canvas").getContext("webgl2")),
  );
  if (supported) {
    await expect(page.locator("canvas").first()).toBeVisible();
  } else {
    await expect(page.getByText("3D preview unavailable")).toBeVisible();
  }
});

test("local assets load and page navigation does not request missing files", async ({ page }) => {
  const failedResponses: string[] = [];
  const baseURL = test.info().project.use.baseURL as string;
  const expectedOrigin = new URL(baseURL).origin;
  page.on("response", (response) => {
    if (response.url().startsWith(expectedOrigin + "/") && response.status() >= 400) {
      failedResponses.push(response.url() + " (" + response.status() + ")");
    }
  });
  await page.goto("/");
  await page.getByRole("link", { name: /Explore my work/ }).click();
  await page.getByRole("button", { name: "Read project details" }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Close project details" }).click();
  await expect.poll(() => failedResponses).toEqual([]);
});
