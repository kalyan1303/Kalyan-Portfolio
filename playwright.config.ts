import { defineConfig, devices } from "@playwright/test";

const previewPort = (globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
}).process?.env?.PORT ?? "4173";
const baseURL = `http://127.0.0.1:${previewPort}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL,
    trace: "retain-on-failure",
    ...devices["Desktop Chrome"],
  },
  webServer: {
    command: `node ./node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port ${previewPort} --strictPort`,
    url: baseURL,
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
