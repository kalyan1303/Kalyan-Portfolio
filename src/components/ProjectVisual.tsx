import type { ReactElement } from "react";
import type { Project } from "../data/portfolio";

type ProjectVisualProps = {
  visual: Project["visual"];
  title: string;
};

function ApiNodes() {
  return (
    <>
      <path className="visual-wire" d="M87 104h65m76 0h76m75 0h70" />
      <rect className="visual-node" x="26" y="74" width="61" height="60" rx="13" />
      <rect className="visual-node visual-node--bright" x="152" y="74" width="76" height="60" rx="13" />
      <rect className="visual-node" x="304" y="74" width="76" height="60" rx="13" />
      <rect className="visual-node visual-node--bright" x="450" y="74" width="48" height="60" rx="13" />
      <circle className="visual-dot" cx="56" cy="104" r="8" />
      <path className="visual-glyph" d="m177 95 10 9-10 9m26-18-10 18" />
      <path className="visual-glyph" d="M326 92h31m-31 12h31m-31 12h21" />
      <path className="visual-glyph" d="m467 104 7 7 13-15" />
      <text className="visual-caption" x="25" y="158">CLIENT</text>
      <text className="visual-caption" x="152" y="158">API LAYER</text>
      <text className="visual-caption" x="304" y="158">DATA</text>
      <text className="visual-caption" x="447" y="158">OK</text>
    </>
  );
}

function ComplaintFlow() {
  return (
    <>
      <rect className="visual-node" x="28" y="46" width="206" height="132" rx="14" />
      <rect className="visual-panel" x="48" y="64" width="166" height="25" rx="6" />
      <circle className="visual-dot" cx="63" cy="76" r="4" />
      <path className="visual-glyph" d="M77 76h112" />
      <rect className="visual-panel" x="48" y="101" width="166" height="18" rx="4" />
      <rect className="visual-panel" x="48" y="128" width="112" height="18" rx="4" />
      <path className="visual-wire" d="M234 111h56m0 0v-38h48m-48 38v38h48" />
      <rect className="visual-node visual-node--bright" x="338" y="49" width="152" height="49" rx="12" />
      <rect className="visual-node" x="338" y="123" width="152" height="49" rx="12" />
      <circle className="visual-dot" cx="360" cy="73" r="5" />
      <path className="visual-glyph" d="M375 73h93" />
      <circle className="visual-dot visual-dot--cyan" cx="360" cy="147" r="5" />
      <path className="visual-glyph" d="M375 147h93" />
      <text className="visual-caption" x="49" y="164">CASE PORTAL</text>
      <text className="visual-caption" x="338" y="191">WORKFLOW</text>
    </>
  );
}

function IntegrationFlow() {
  return (
    <>
      <path className="visual-wire" d="M130 105h260M260 56v98" />
      <rect className="visual-node" x="29" y="73" width="101" height="64" rx="14" />
      <rect className="visual-node visual-node--bright" x="210" y="73" width="100" height="64" rx="14" />
      <rect className="visual-node" x="390" y="73" width="101" height="64" rx="14" />
      <circle className="visual-orbit" cx="260" cy="105" r="41" />
      <circle className="visual-dot" cx="260" cy="105" r="7" />
      <path className="visual-glyph" d="M58 97h44m-44 14h32m-3-27 13 13-13 13" />
      <path className="visual-glyph" d="M417 94h45m-45 12h45m-45 12h31" />
      <text className="visual-caption" x="43" y="160">ENFORCE APP</text>
      <text className="visual-caption" x="221" y="160">API LAYER</text>
      <text className="visual-caption" x="413" y="160">INTEGRATION</text>
    </>
  );
}

function AgendaFlow() {
  return (
    <>
      <rect className="visual-node" x="26" y="47" width="143" height="137" rx="12" />
      <rect className="visual-node visual-node--bright" x="46" y="68" width="102" height="22" rx="5" />
      <path className="visual-glyph" d="M47 108h95M47 128h70M47 148h80" />
      <circle className="visual-dot" cx="54" cy="78" r="4" />
      <path className="visual-wire" d="M169 116h54m0 0 22-27 23 27 25-27 22 27h45" />
      <rect className="visual-node" x="360" y="51" width="132" height="128" rx="12" />
      <path className="visual-glyph" d="M382 82h87m-87 20h68m-68 20h76m-76 20h53" />
      <circle className="visual-dot visual-dot--cyan" cx="372" cy="82" r="4" />
      <circle className="visual-dot" cx="372" cy="102" r="4" />
      <circle className="visual-dot visual-dot--cyan" cx="372" cy="122" r="4" />
      <text className="visual-caption" x="47" y="204">MEETINGS & AGENDAS</text>
      <text className="visual-caption" x="361" y="204">DOCUMENT FLOW</text>
    </>
  );
}

function FormsFlow() {
  return (
    <>
      <rect className="visual-node" x="27" y="45" width="180" height="141" rx="13" />
      <rect className="visual-node visual-node--bright" x="48" y="65" width="138" height="25" rx="6" />
      <path className="visual-glyph" d="M51 111h40m-40 23h93m-93 23h66" />
      <rect className="visual-panel" x="101" y="103" width="83" height="17" rx="4" />
      <rect className="visual-panel" x="149" y="127" width="35" height="17" rx="4" />
      <path className="visual-wire" d="M207 115h54m0 0 30-37h80m-80 37 30 42h80" />
      <rect className="visual-node" x="371" y="54" width="119" height="45" rx="11" />
      <rect className="visual-node visual-node--bright" x="371" y="135" width="119" height="45" rx="11" />
      <path className="visual-glyph" d="M392 77h76m-76 80h53" />
      <circle className="visual-dot" cx="383" cy="77" r="4" />
      <circle className="visual-dot visual-dot--cyan" cx="383" cy="157" r="4" />
      <text className="visual-caption" x="47" y="204">DYNAMIC FORM</text>
      <text className="visual-caption" x="371" y="204">VALIDATE & SAVE</text>
    </>
  );
}

function GrantFlow() {
  return (
    <>
      <path className="visual-wire" d="M146 106h76m76 0h76" />
      <rect className="visual-node" x="26" y="65" width="120" height="82" rx="14" />
      <rect className="visual-node visual-node--bright" x="222" y="65" width="76" height="82" rx="14" />
      <rect className="visual-node" x="374" y="65" width="120" height="82" rx="14" />
      <path className="visual-glyph" d="M50 96h71m-71 15h52m-52 15h60" />
      <circle className="visual-orbit" cx="260" cy="105" r="21" />
      <path className="visual-glyph" d="M251 105h18m-9-9v18" />
      <path className="visual-glyph" d="M397 93h69m-69 15h53m-53 15h62" />
      <text className="visual-caption" x="32" y="170">GRANT & CONTRACT</text>
      <text className="visual-caption" x="222" y="170">VALIDATE</text>
      <text className="visual-caption" x="381" y="170">INVOICE FLOW</text>
    </>
  );
}

function TestingFlow() {
  return (
    <>
      <rect className="visual-node" x="25" y="47" width="225" height="137" rx="12" />
      <path className="visual-glyph" d="M27 72h221" />
      <circle className="visual-dot" cx="45" cy="60" r="4" />
      <circle className="visual-dot visual-dot--cyan" cx="59" cy="60" r="4" />
      <rect className="visual-panel" x="44" y="87" width="187" height="17" rx="5" />
      <rect className="visual-panel" x="44" y="115" width="132" height="17" rx="5" />
      <rect className="visual-panel" x="44" y="143" width="160" height="17" rx="5" />
      <circle className="visual-dot visual-dot--cyan" cx="55" cy="95" r="4" />
      <circle className="visual-dot" cx="55" cy="123" r="4" />
      <circle className="visual-dot visual-dot--cyan" cx="55" cy="151" r="4" />
      <path className="visual-wire" d="M250 116h42m0 0 26-26h34m-60 26 26 26h34" />
      <rect className="visual-node visual-node--bright" x="352" y="65" width="142" height="48" rx="11" />
      <rect className="visual-node" x="352" y="120" width="142" height="48" rx="11" />
      <path className="visual-glyph" d="M375 89h80m-80 55h55" />
      <circle className="visual-dot visual-dot--cyan" cx="365" cy="89" r="4" />
      <circle className="visual-dot" cx="365" cy="144" r="4" />
      <text className="visual-caption" x="44" y="204">BROWSER RUN</text>
      <text className="visual-caption" x="352" y="191">RESULTS & ARTIFACTS</text>
    </>
  );
}

const illustration: Record<Project["visual"], () => ReactElement> = {
  api: ApiNodes,
  complaint: ComplaintFlow,
  integration: IntegrationFlow,
  agenda: AgendaFlow,
  forms: FormsFlow,
  grants: GrantFlow,
  testing: TestingFlow,
};

export function ProjectVisual({ visual, title }: ProjectVisualProps) {
  const Illustration = illustration[visual];

  return (
    <div className="project-visual" role="img" aria-label={`Abstract illustration for ${title}`}>
      <svg viewBox="0 0 520 220" aria-hidden="true" focusable="false">
        <path className="visual-backdrop" d="M0 176c96-42 135-33 225-21s191 13 295-20v85H0z" />
        <Illustration />
      </svg>
      <span className="project-visual__note">Illustrative visual · no production data</span>
    </div>
  );
}
