/**
 * reviewer-interaction-tests.js
 *
 * Browser-like smoke tests for the Systems Integration and Architecture 1
 * offline reviewer. The suite executes the real data and inline runtime in
 * JSDOM, then exercises important user paths without changing repository files.
 *
 * Run with:
 *   node reviewer-interaction-tests.js
 */

// Load file-system helpers for read-only source access.
const fs = require("fs");

// Load path helpers for Windows, macOS, and Linux compatibility.
const path = require("path");

// Load JSDOM to execute the offline reviewer in a browser-like document.
const { JSDOM } = require("jsdom");

// Resolve the repository and new reviewer paths.
const repositoryRoot = __dirname;

// Resolve the HTML source used by the offline reviewer.
const htmlPath = path.join(
  repositoryRoot,
  "Systems Integration and Architecture 1",
  "index.html"
);

// Resolve the shared learning-data source.
const dataPath = path.join(
  repositoryRoot,
  "Systems Integration and Architecture 1",
  "data.js"
);

/**
 * Record a passing condition or throw a precise failure.
 * @param {boolean} condition - Assertion result.
 * @param {string} message - User behavior being verified.
 * @returns {void}
 */
function assert(condition, message) {
  if (!condition) {
    throw new Error(`FAIL: ${message}`);
  }
  console.log(`PASS: ${message}`);
}

/**
 * Create the test DOM and supply small browser API shims JSDOM does not include.
 * @param {string} html - HTML source without executable script tags.
 * @returns {JSDOM} Configured test document.
 */
function createTestDom(html) {
  return new JSDOM(html, {
    url: "https://sia-reviewer.local/",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(window) {
      window.matchMedia = () => ({
        matches: false,
        addListener() {},
        removeListener() {},
      });
      window.IntersectionObserver = class {
        constructor(callback) {
          this.callback = callback;
        }

        observe(element) {
          this.callback(
            [{ isIntersecting: true, target: element }],
            this
          );
        }

        unobserve() {}

        disconnect() {}
      };
      window.HTMLElement.prototype.scrollIntoView = function scrollIntoView() {};
      window.scrollTo = function scrollTo() {};
      if (window.HTMLDialogElement) {
        window.HTMLDialogElement.prototype.showModal = function showModal() {
          this.setAttribute("open", "");
        };
        window.HTMLDialogElement.prototype.close = function close() {
          this.removeAttribute("open");
        };
      }
    },
  });
}

/**
 * Execute the complete interaction smoke suite.
 * @returns {void}
 */
function main() {
  // Read the two real runtime sources.
  const htmlSource = fs.readFileSync(htmlPath, "utf8");
  const dataSource = fs.readFileSync(dataPath, "utf8");

  // Inline the real data source so JSDOM uses the browser's classic-script scope.
  const executableHtml = htmlSource.replace(
    '<script src="data.js"></script>',
    `<script>${dataSource}</script>`
  );

  // Create the document; parsing now executes data and runtime scripts in real order.
  const dom = createTestDom(executableHtml);

  // Reference the simulated browser and document.
  const { window } = dom;
  const { document } = window;

  // Confirm initial rendering totals.
  assert(
    document.querySelectorAll("#topicGrid .topic-card").length === 14,
    "all 14 topic cards render on boot"
  );
  assert(
    document.querySelectorAll("#glossaryGrid .glossary-card").length === 60,
    "all 60 glossary cards render on boot"
  );
  assert(
    document.querySelectorAll(
      "#moduleFilters [data-module-filter]"
    ).length === 4,
    "all-module plus three module filters render"
  );
  assert(
    document.querySelectorAll("#stageList [data-stage-index]").length === 4,
    "four blueprint controls render"
  );
  assert(
    document.querySelectorAll("#layerList [data-layer-index]").length === 3,
    "three model-layer controls render"
  );
  assert(
    document.querySelectorAll(
      "#scenarioCard [data-scenario-option]"
    ).length === 4,
    "scenario choices render"
  );

  // Exercise topic filtering and detail presentation.
  document.querySelector('[data-module-filter="m1-3"]').click();
  assert(
    document.querySelectorAll("#topicGrid .topic-card").length === 2,
    "module filtering shows the two modelling topics"
  );
  document.querySelector("#topicGrid [data-open-topic]").click();
  assert(
    document.querySelector("#topicDialog").hasAttribute("open"),
    "topic guide opens in the dialog"
  );

  // Exercise topic progress and storage-key isolation.
  document
    .querySelector("#topicDialogBody [data-dialog-studied]")
    .click();
  const storedStudied = JSON.parse(
    window.localStorage.getItem("sia1Studied")
  );
  assert(
    Array.isArray(storedStudied) && storedStudied.length === 1,
    "studied-topic progress persists under the SIA key"
  );
  assert(
    window.localStorage.getItem("networking2Studied") === null,
    "SIA progress does not write Networking 2 keys"
  );

  // Exercise scenario feedback and progress persistence.
  document
    .querySelector('#scenarioCard [data-scenario-option="0"]')
    .click();
  assert(
    Boolean(document.querySelector("#scenarioCard .feedback")),
    "scenario answer reveals immediate feedback"
  );
  const scenarioProgress = JSON.parse(
    window.localStorage.getItem("sia1ScenarioProgress")
  );
  assert(
    scenarioProgress.completed.length === 1 &&
      scenarioProgress.correct.length === 1,
    "scenario completion and correctness persist"
  );

  // Exercise flashcard flipping.
  const cardBefore = document.querySelector("#flashcard").textContent;
  document.querySelector("#flashcard").click();
  const cardAfter = document.querySelector("#flashcard").textContent;
  assert(
    cardBefore !== cardAfter && cardAfter.includes("Answer"),
    "flashcard flips from question to answer"
  );

  // Exercise practice tabs and module-test rendering.
  document.querySelector('[data-practice-tab="quiz"]').click();
  assert(
    !document.querySelector("#quizPanel").classList.contains("hidden"),
    "practice tabs reveal the module test"
  );
  assert(
    document.querySelectorAll("#quizQuestions .quiz-question").length ===
      20,
    "selected module test renders 20 questions"
  );

  // Exercise glossary filtering.
  const glossarySearch = document.querySelector("#glossarySearch");
  glossarySearch.value = "governance";
  glossarySearch.dispatchEvent(
    new window.Event("input", { bubbles: true })
  );
  const filteredGlossaryCount = document.querySelectorAll(
    "#glossaryGrid .glossary-card"
  ).length;
  assert(
    filteredGlossaryCount > 0 && filteredGlossaryCount < 60,
    "glossary search narrows results"
  );

  // Exercise theme persistence.
  const originalTheme = document.body.dataset.theme;
  document.querySelector("#themeToggle").click();
  assert(
    document.body.dataset.theme !== originalTheme,
    "theme toggle changes the active theme"
  );
  assert(
    window.localStorage.getItem("sia1Theme") ===
      document.body.dataset.theme,
    "theme preference persists under the SIA key"
  );

  // Exercise cross-content global search.
  const globalSearch = document.querySelector("#globalSearch");
  globalSearch.value = "metadata";
  globalSearch.dispatchEvent(
    new window.Event("input", { bubbles: true })
  );
  assert(
    document.querySelector("#quickResults").classList.contains("open"),
    "global search opens matching results"
  );
  assert(
    document.querySelectorAll(
      "#quickResults [data-search-type]"
    ).length > 0,
    "global search returns topic or glossary matches"
  );

  // Close the simulated browser and report the terminal success marker.
  dom.window.close();
  console.log("JSDOM_INTERACTION_SUITE_PASSED");
}

// Run the suite and allow thrown assertions to produce a nonzero exit code.
main();
