/**
 * Browser-like interaction tests for the standalone Mobile Computing reviewer.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const repositoryRoot = path.dirname(fileURLToPath(import.meta.url));
const reviewerDirectory = path.join(repositoryRoot, "Mobile Computing");

function assert(condition, message) {
  if (!condition) throw new Error(`FAIL: ${message}`);
  console.log(`PASS: ${message}`);
}

function createTestDom(html) {
  return new JSDOM(html, {
    url: "https://mobile-reviewer.local/",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(window) {
      window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
      window.IntersectionObserver = class {
        constructor(callback) { this.callback = callback; }
        observe(element) { this.callback([{ isIntersecting: true, target: element }], this); }
        unobserve() {}
        disconnect() {}
      };
      window.HTMLElement.prototype.scrollIntoView = function scrollIntoView() {};
      window.scrollTo = function scrollTo() {};
      if (window.HTMLDialogElement) {
        window.HTMLDialogElement.prototype.showModal = function showModal() { this.setAttribute("open", ""); };
        window.HTMLDialogElement.prototype.close = function close() { this.removeAttribute("open"); };
      }
    },
  });
}

async function main() {
  const htmlSource = fs.readFileSync(path.join(reviewerDirectory, "index.html"), "utf8");
  const dataSource = fs.readFileSync(path.join(reviewerDirectory, "data.js"), "utf8");
  const executableHtml = htmlSource.replace('<script src="data.js"></script>', `<script>${dataSource}</script>`);
  const dom = createTestDom(executableHtml);
  const { window } = dom;
  const { document, reviewerData } = window;

  assert(document.querySelectorAll("#topicGrid .topic-card").length === reviewerData.topics.length, "all Mobile topic cards render on boot");
  assert(document.querySelectorAll("#glossaryGrid .glossary-card").length === reviewerData.glossary.length, "all Mobile glossary entries render on boot");
  assert(document.querySelectorAll("#stageList [data-stage-index]").length === 5, "five form-pipeline stages render");
  assert(document.querySelectorAll("#layerList [data-layer-index]").length === 3, "three mobile-system layers render");

  document.querySelector('[data-module-filter="m3"]').click();
  assert(document.querySelectorAll("#topicGrid .topic-card").length === 3, "module filtering shows the three web-form lessons");
  document.querySelector('[data-open-topic="web-form-safety"]').click();
  assert(document.querySelector("#topicDialog").hasAttribute("open"), "web-form safety guide opens in the dialog");
  assert(document.querySelectorAll("#topicDialogBody .lesson-code").length === 1, "annotated code block renders");
  assert(document.querySelectorAll("#topicDialogBody .lesson-sources a[href^='https://']").length === 3, "authoritative source links render with HTTPS URLs");

  document.querySelector("#topicDialogBody [data-dialog-studied]").click();
  assert(JSON.parse(window.localStorage.getItem("mobileStudied")).includes("web-form-safety"), "topic progress persists under a Mobile-specific key");
  assert(window.localStorage.getItem("sia1Studied") === null, "Mobile progress does not write SIA keys");

  const form = document.querySelector("#capstoneForm");
  const username = document.querySelector("#capstoneUsername");
  const email = document.querySelector("#capstoneEmail");
  const topics = [...document.querySelectorAll('#capstoneForm input[name="topics"]')];
  const submitter = document.querySelector("#capstoneSubmit");
  assert(!form.checkValidity(), "native constraints reject missing required fields");
  username.value = "Student";
  email.value = "not-an-email";
  assert(!form.checkValidity(), "native constraints reject a malformed email address");
  username.value = '<img src=x onerror="window.injected=true">';
  email.value = "student@example.com";
  topics.forEach((control) => { control.checked = true; });
  const snapshot = new window.FormData(form);
  assert(snapshot.getAll("topics").length === 2, "FormData preserves repeated checkbox values");
  assert(!snapshot.has("disabledExample"), "FormData omits disabled controls");
  form.requestSubmit(submitter);
  assert(document.querySelector("#capstoneStatus").dataset.state === "loading", "native submit path used by button or Enter exposes a loading state");
  await new Promise((resolve) => window.setTimeout(resolve, 450));
  const successStatus = document.querySelector("#capstoneStatus");
  assert(successStatus.dataset.state === "success", "button or submit-event path reaches success feedback");
  assert(successStatus.textContent.includes("<img") && !successStatus.querySelector("img") && !window.injected, "HTML-looking input remains literal non-executable text");
  assert(username.value === "" && email.value === "", "capstone resets only after success");

  username.value = "Student";
  email.value = "student@offline.test";
  form.dispatchEvent(new window.SubmitEvent("submit", { bubbles: true, cancelable: true, submitter }));
  await new Promise((resolve) => window.setTimeout(resolve, 450));
  assert(document.querySelector("#capstoneStatus").dataset.state === "error", "simulated offline submission exposes an error state");
  assert(email.value === "student@offline.test", "capstone preserves values after failure for retry");

  document.querySelector('#scenarioCard [data-scenario-option="1"]').click();
  assert(Boolean(document.querySelector("#scenarioCard .feedback")), "scenario choice reveals explanatory feedback");
  assert(JSON.parse(window.localStorage.getItem("mobileScenarioProgress")).completed.length === 1, "scenario completion persists under a Mobile-specific key");

  const cardBefore = document.querySelector("#flashcard").textContent;
  document.querySelector("#flashcard").click();
  assert(document.querySelector("#flashcard").textContent !== cardBefore, "flashcard flips between retrieval prompt and answer");

  document.querySelector('[data-practice-tab="quiz"]').click();
  const testSelect = document.querySelector("#testSelect");
  testSelect.value = "2";
  testSelect.dispatchEvent(new window.Event("change", { bubbles: true }));
  assert(document.querySelectorAll("#quizQuestions .quiz-question").length === 6, "the web-form module test renders six questions");

  const glossarySearch = document.querySelector("#glossarySearch");
  glossarySearch.value = "FormData";
  glossarySearch.dispatchEvent(new window.Event("input", { bubbles: true }));
  assert(document.querySelectorAll("#glossaryGrid .glossary-card").length === 1, "glossary search narrows to FormData");

  const globalSearch = document.querySelector("#globalSearch");
  globalSearch.value = "inputmode";
  globalSearch.dispatchEvent(new window.Event("input", { bubbles: true }));
  assert(document.querySelectorAll("#quickResults [data-search-type]").length > 0, "global search finds enriched form content");

  dom.window.close();
  console.log("MOBILE_INTERACTION_SUITE_PASSED");
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
