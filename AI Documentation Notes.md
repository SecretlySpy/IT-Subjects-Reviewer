# AI Documentation Notes

> Machine-readable static analysis of the **IT-Subjects-Reviewer** repository.
> Generated per the workflow defined in `AGENTS.md` (QA → Static Analysis → Documentation).
> Field labels are uniform throughout: **Purpose**, **Inputs**, **Outputs**, **Dependencies**, **Behavior**.

---

## 0. Project Summary

- **Purpose:** A self-contained, single-page interactive study dashboard for a "Networking 2" course. It presents topic cards, a comparison/flow detail panel, an animated packet-path visualization, flashcards, scored practice tests, and a searchable glossary.
- **Inputs:** Static content data declared in `Networking 2/data.js`; user interaction (clicks, keyboard, search input); `localStorage` for persisted progress.
- **Outputs:** Rendered DOM in the browser; persisted progress keys in `localStorage`.
- **Dependencies:** No runtime framework or CDN for the shipped app. The primary app (`index.html` + `data.js`) is plain HTML/CSS/vanilla JS. A secondary, **non-wired** React variant (`NetworkingTwoBeginnerGuide.jsx`) exists but has no build pipeline in this repo. `jsdom` is the only declared npm dependency (used only by tooling/diagnostics intent).
- **Behavior:** Open `Networking 2/index.html` in a browser → `data.js` loads global content arrays → inline script boots the UI and wires all interactivity. Everything runs client-side.

### Repository Layout (source files; `node_modules/` excluded)

| Path | Role |
|------|------|
| `Networking 2/index.html` | Primary application: markup, embedded CSS (`<style>`), embedded vanilla-JS app logic (`<script>`). |
| `Networking 2/data.js` | Content datastore. Declares global arrays and exposes `reviewerData` via `globalThis` / `module.exports`. |
| `Networking 2/NetworkingTwoBeginnerGuide.jsx` | Alternative React + Tailwind + `lucide-react` implementation of the same content. **Not built or referenced** by the shipped app. |
| `html-diagnostics.js` | Node QA/diagnostic script. Consolidates former `fix4/5/6.js` one-liners. |
| `eslint.config.mjs` | Minimal flat ESLint config (`no-undef: error`). |
| `package.json` | Declares `jsdom ^29.1.1`. No scripts defined. |
| `README.md`, `assets/readme-hero.svg` | Documentation assets. |

---

## 1. Module: `Networking 2/data.js` (Content Datastore)

- **Purpose:** Define all study content as plain data, decoupled from rendering. Single source of truth consumed by both the vanilla app and the React variant.
- **Inputs:** None (static literals).
- **Outputs:**
  - Top-level `const` bindings in classic-script global lexical scope: `topics`, `glossary`, `flashcards`, `practiceTests`, `pathSteps`, `studySteps`. These are visible to the subsequent inline classic script in `index.html`.
  - `reviewerData` object aggregating all six arrays.
  - `globalThis.reviewerData` (browser/global access) and `module.exports = reviewerData` (Node/React-variant access).
- **Dependencies:** None.
- **Behavior:** Pure declaration file; no side effects beyond assigning `globalThis.reviewerData` and `module.exports`.

### 1.1 Data Shapes (contract for all consumers)

| Array | Count | Element shape |
|-------|------:|---------------|
| `topics` | 15 | `{ id, unit, title, color, subtitle, beginner, terms[], keyPoints[], compare:{ headers[], rows[][] }, flow:[ [title, text], ... ] }` |
| `glossary` | 293 | `[ term, definition ]` (2-tuple) |
| `flashcards` | 300 | `{ topic, front, back }` |
| `practiceTests` | 15 | `{ title, description, questions:[ { q, options[], answer:Number(index), explain }, ... ] }` (30 questions each → 450 total) |
| `pathSteps` | 5 | `[ title, text, activeNodes:Number[], activeWires:Number[] ]` |
| `studySteps` | 4 | `[ title, text ]` |

- **Field notes:**
  - `topic.color` ∈ {`blue`, `rose`, `green`, `amber`, `violet`, `cyan`} → maps to CSS accent classes / Tailwind tone classes.
  - `topic.id` is the join key used for the active-topic state, icon lookup, and (in the React variant) section anchors.
  - `question.answer` is the zero-based index into `question.options`.
  - `pathSteps[i][2]` references SVG node ids `node0..node3`; `pathSteps[i][3]` references wire ids `wire1..wire3`.

---

## 2. Module: `Networking 2/index.html` — Embedded Application

Single inline `<script>` (classic, non-module). Reads the globals from `data.js`. Below: shared state, then functions grouped by responsibility.

### 2.1 Global State & Utilities

#### `state` (object)
- **Purpose:** Central mutable UI state for the whole app.
- **Inputs:** Initialized from `data.js` globals and `localStorage`.
- **Outputs:** Read/written by nearly all render/init functions.
- **Dependencies:** `topics`, `readStoredJson`, `localStorage`.
- **Behavior:** Holds `activeTopic`, `detailTab`, `studied` (Set, filtered to valid topic ids), `bestScore`, `seenCards`, `cardIndex`, `cardFlipped`, `cardFilter`, `selectedTest`, `answers`, `submitted`, `pathStep`, `pathPaused`, `pathTimer`, `theme`, `revealObserver`, `glossaryLetter`.

#### `readStoredJson(key, fallback)`
- **Purpose:** Safely parse a JSON value from `localStorage`.
- **Inputs:** `key:String`, `fallback:any`.
- **Outputs:** Parsed value, or `fallback` on missing/invalid JSON.
- **Dependencies:** `localStorage`, `JSON`.
- **Behavior:** `try` parse; `catch` returns `fallback`. Side-effect free.

#### `$ (selector, root=document)` / `$$ (selector, root=document)`
- **Purpose:** Query-selector shorthands.
- **Inputs:** CSS `selector`, optional `root` element.
- **Outputs:** `$` → first `Element|null`; `$$` → `Element[]` (array, not NodeList).
- **Dependencies:** DOM.
- **Behavior:** Thin wrappers over `querySelector` / `querySelectorAll` + `Array.from`.

#### `escapeHtml(value)`
- **Purpose:** Prevent HTML injection when interpolating data into `innerHTML`.
- **Inputs:** `value:any` (coerced via `String`).
- **Outputs:** Escaped string (`&`, `<`, `>`, `"`, `'`).
- **Dependencies:** None.
- **Behavior:** Single `replace` with a character-map. **Security-relevant**: every dynamic value rendered into `innerHTML` is routed through this.

#### `saveProgress()`
- **Purpose:** Persist progress.
- **Inputs:** `state.studied`, `state.bestScore`, `state.seenCards`.
- **Outputs:** Writes `localStorage` keys `networking2Studied` (JSON array), `networking2BestScore`, `networking2SeenCards`.
- **Dependencies:** `localStorage`, `JSON`.
- **Behavior:** Serialize-and-store; no return.

#### `showToast(title, detail)`
- **Purpose:** Transient status notification.
- **Inputs:** `title`, `detail` strings.
- **Outputs:** Mutates `#toast` DOM + `.show` class.
- **Dependencies:** `escapeHtml`, `#toast`.
- **Behavior:** Sets content, adds `.show`, clears prior timer (`showToast.timer`), auto-hides after 2600 ms.

### 2.2 Theme, Scroll, Reveal Animations

#### `applyTheme()`
- **Purpose:** Apply and persist light/dark theme.
- **Inputs:** `state.theme`.
- **Outputs:** Sets `document.body.dataset.theme`, persists `networking2Theme`, swaps `#themeToggle` icon.
- **Dependencies:** `localStorage`, DOM.
- **Behavior:** Idempotent for a given `state.theme`.

#### `updateScrollProgress()`
- **Purpose:** Drive the top scroll-progress bar.
- **Inputs:** `window.scrollY`, document/viewport heights.
- **Outputs:** Sets `#scrollProgress` width (0–100%).
- **Dependencies:** DOM, `window`.
- **Behavior:** Clamps to [0,100]; guards divide-by-zero when `max <= 0`.

#### `attachRevealEffects(root=document)`
- **Purpose:** Register scroll-reveal animation on eligible elements.
- **Inputs:** `root` element; reads `state.revealObserver`.
- **Outputs:** Adds `.reveal` (+ `.in-view` if already visible) and `--reveal-index` style; observes off-screen elements.
- **Dependencies:** `IntersectionObserver` (via `state.revealObserver`), `$$`.
- **Behavior:** Idempotent per element via `dataset.revealReady` guard. Elements already in viewport are revealed immediately; others are observed. Falls back to immediate reveal if no observer.

#### `initRevealEffects()`
- **Purpose:** Create the shared `IntersectionObserver` and run the first reveal pass.
- **Inputs:** None.
- **Outputs:** Assigns `state.revealObserver`; calls `attachRevealEffects()`.
- **Dependencies:** `IntersectionObserver`.
- **Behavior:** On intersect, adds `.in-view` then **unobserves** (one-shot). Guard `if (!entry.isIntersecting) return;` — asserted by `html-diagnostics.js`.

### 2.3 Topic Rendering

#### `iconSvg(name)` / `topicIcon(topic)`
- **Purpose:** Provide inline SVG icon markup per topic.
- **Inputs:** `iconSvg`: icon `name`; `topicIcon`: a `topic` (maps `topic.id` → icon name).
- **Outputs:** SVG markup string.
- **Dependencies:** Internal path/name maps; default `globe`.
- **Behavior:** Pure string builders.

#### `renderTopicCards()`
- **Purpose:** Render the topic-card grid and bind selection.
- **Inputs:** `topics`, `state.activeTopic`, `state.studied`.
- **Outputs:** Replaces `#topicCards` innerHTML; attaches click handlers; triggers reveal.
- **Dependencies:** `escapeHtml`, `topicIcon`, `renderTopicDetail`, `attachRevealEffects`.
- **Behavior:** Clicking a card sets `state.activeTopic` and re-renders cards + detail.

#### `renderTopicDetail()`
- **Purpose:** Render the sticky detail panel for the active topic (Overview / Compare / Flow tabs).
- **Inputs:** `state.activeTopic`, `state.detailTab`, `state.studied`.
- **Outputs:** Replaces `#topicDetail` innerHTML; binds tab + "Mark studied" handlers; reveal.
- **Dependencies:** `topics.find`, `escapeHtml`, `saveProgress`, `renderTopicCards`, `renderProgress`, `showToast`.
- **Behavior:** Tab buttons switch `state.detailTab`. "Mark studied" toggles membership in `state.studied`, persists, and re-renders cards/detail/progress with a toast.

#### `renderProgress()`
- **Purpose:** Update progress meter and stat counters.
- **Inputs:** `state.studied.size`, `state.bestScore`, `state.seenCards`, `topics.length`.
- **Outputs:** Updates `#studiedCount`, `#quizBest`, `#cardSeen`, `#progressFill` width.
- **Dependencies:** DOM.
- **Behavior:** Width = `round(studied / total * 100)%`.

#### `renderStudyAccordion()`
- **Purpose:** Render the "Four pass review" accordion from `studySteps`.
- **Inputs:** `studySteps`.
- **Outputs:** Replaces `#studyAccordion` innerHTML; binds open/close toggles (first item open).
- **Dependencies:** `escapeHtml`.
- **Behavior:** Each header toggles `.open` on its `.accordion-item`.

### 2.4 Packet-Path Visualization

#### `renderPathStep()`
- **Purpose:** Reflect the current `state.pathStep` into the SVG map and captions.
- **Inputs:** `pathSteps[state.pathStep]` → `[title, text, activeNodes, activeWires]`.
- **Outputs:** Updates `#pathStepTag/Title/Text`, toggles `.active` on step buttons, `node0..3`, `wire1..3`.
- **Dependencies:** DOM, `$`.
- **Behavior:** Pure projection of `state.pathStep` onto the DOM.

#### `initPathControls()`
- **Purpose:** Build step buttons and start the auto-advance loop.
- **Inputs:** `pathSteps`.
- **Outputs:** Fills `#pathSteps`; sets `state.pathTimer` (`setInterval`, 4200 ms); binds step-button clicks and `#pathToggle` play/pause.
- **Dependencies:** `renderPathStep`, `setInterval`.
- **Behavior:** Auto-advances modulo `pathSteps.length` unless `state.pathPaused`. Toggle flips pause state and swaps the play/pause icon + aria-label.

### 2.5 Flashcards

#### `filteredCards()`
- **Purpose:** Return flashcards for the active topic filter.
- **Inputs:** `state.cardFilter`, `flashcards`.
- **Outputs:** Filtered array (or full set when `"All"`).
- **Dependencies:** None.
- **Behavior:** Pure filter.

#### `renderCardTopicOptions()`
- **Purpose:** Populate the flashcard topic `<select>`.
- **Inputs:** Distinct `flashcards[].topic` values, prefixed with `"All"`.
- **Outputs:** `#cardTopic` options.
- **Dependencies:** `escapeHtml`.
- **Behavior:** Pure render.

#### `renderFlashcard()`
- **Purpose:** Render the current card face.
- **Inputs:** `filteredCards()`, `state.cardIndex`, `state.cardFlipped`.
- **Outputs:** Updates `#flashcard` (front/back), `.flipped` class, `#cardCounter`; calls `renderProgress`.
- **Dependencies:** `escapeHtml`, `renderProgress`.
- **Behavior:** `cardIndex` is normalized with wrap-around modulo; no-ops if no cards match.

#### `changeCard(step)`
- **Purpose:** Advance/rewind cards and count a "seen" card.
- **Inputs:** `step:Number` (±1).
- **Outputs:** Mutates `state.cardIndex`, resets `cardFlipped`, increments `seenCards`, persists, re-renders.
- **Dependencies:** `saveProgress`, `renderFlashcard`.
- **Behavior:** Wrap-around handled by `renderFlashcard`.

#### `initFlashcards()`
- **Purpose:** Wire all flashcard controls.
- **Inputs:** DOM controls (`#cardTopic`, `#flipCard`, `#flashcard`, `#prevCard`, `#nextCard`, `#shuffleCards`).
- **Outputs:** Event listeners + initial render.
- **Dependencies:** `renderCardTopicOptions`, `renderFlashcard`, `changeCard`, `filteredCards`, `saveProgress`.
- **Behavior:** Click/Enter/Space flips; ArrowLeft/Right navigate; Shuffle picks a random index and counts a view. Topic change resets index + flip.

### 2.6 Practice Tests (Quiz)

#### `renderTestOptions()`
- **Purpose:** Populate test selector and bind change.
- **Inputs:** `practiceTests`.
- **Outputs:** `#testSelect` options; on change resets `answers`/`submitted` and re-renders.
- **Dependencies:** `escapeHtml`, `renderQuiz`.
- **Behavior:** Switching tests clears prior answers.

#### `renderQuiz()`
- **Purpose:** Render questions, choices, and (post-submit) correctness + explanations.
- **Inputs:** `practiceTests[state.selectedTest]`, `state.answers`, `state.submitted`.
- **Outputs:** Replaces `#quizQuestions`; binds choice clicks; reveal.
- **Dependencies:** `escapeHtml`, `attachRevealEffects`.
- **Behavior:** Before submit, clicking a choice records `state.answers[qIndex]`. After submit, correct option gets `.correct`, wrong selection gets `.incorrect`, and `.revealed` shows explanations. Choice clicks are ignored once `state.submitted`.

#### `submitQuiz()`
- **Purpose:** Score the active test.
- **Inputs:** `state.answers` vs `question.answer`.
- **Outputs:** Sets `state.submitted`, updates `state.bestScore` (max), persists, updates `#quizScore`, re-renders quiz + progress, toast.
- **Dependencies:** `saveProgress`, `renderQuiz`, `renderProgress`, `showToast`.
- **Behavior:** Score = `round(correct / total * 100)`.

#### `initQuiz()`
- **Purpose:** Wire submit/reset and initial render.
- **Inputs:** `#submitQuiz`, `#resetQuiz`.
- **Outputs:** Listeners + initial `renderQuiz`.
- **Dependencies:** `renderTestOptions`, `submitQuiz`, `renderQuiz`.
- **Behavior:** Reset clears answers/submitted and resets score label.

#### `initPracticeTabs()`
- **Purpose:** Toggle Flashcards vs Practice-test panels.
- **Inputs:** `[data-practice-tab]` buttons.
- **Outputs:** Toggles `.active` on tabs and `.hidden` on `#flashcardPanel` / `#quizPanel`.
- **Dependencies:** `.hidden` CSS rule (asserted by `html-diagnostics.js`).
- **Behavior:** Mutually exclusive panel visibility.

### 2.7 Glossary & Search

#### `renderGlossary()`
- **Purpose:** Render glossary cards filtered by letter and/or text query.
- **Inputs:** `#glossarySearch` value, `state.glossaryLetter`, `glossary`.
- **Outputs:** Replaces `#glossaryGrid`; reveal; empty-state card when no matches.
- **Dependencies:** `escapeHtml`, `attachRevealEffects`.
- **Behavior:** Letter filter on `term.startsWith`; text filter on `"term definition"` substring (case-insensitive).

#### `renderLetterChips()`
- **Purpose:** Render A–Z (present-letters only) filter chips + "All".
- **Inputs:** Distinct first letters of `glossary` terms.
- **Outputs:** `#letterChips`; binds chip clicks.
- **Dependencies:** `renderGlossary`.
- **Behavior:** Selecting a chip sets `state.glossaryLetter` and re-renders chips + grid.

#### `renderGlobalSearch()`
- **Purpose:** Quick-find dropdown spanning topics + glossary.
- **Inputs:** `#globalSearch` value, `topics`, `glossary`.
- **Outputs:** Fills `#quickResults`; toggles `.open`; binds result clicks.
- **Dependencies:** `escapeHtml`, `renderTopicCards`, `renderTopicDetail`, `renderGlossary`.
- **Behavior:** Up to 4 topic + 5 term matches (capped at 7 total). Topic result → activates topic and smooth-scrolls to `#dashboard`. Term result → fills glossary search and scrolls to `#glossary`. Empty query closes the panel.

#### `initGlobalSearch()`
- **Purpose:** Wire quick-find input + outside-click close.
- **Inputs:** `#globalSearch`.
- **Outputs:** `input`/`focus` listeners; document click closes dropdown when clicking outside `.quick-find`.
- **Dependencies:** `renderGlobalSearch`.
- **Behavior:** Standard dismiss-on-outside-click.

### 2.8 Navigation, Chrome, Boot

#### `initNavigation()`
- **Purpose:** Mobile menu toggle + scroll-spy active nav link.
- **Inputs:** `#menuToggle`, `#mobileMenu`, sections `dashboard/visual/practice/glossary`.
- **Outputs:** Menu open/close (+ `body.menu-open`, aria, icon swap); `IntersectionObserver` toggles `.nav-link.active`.
- **Dependencies:** `IntersectionObserver`, `$$`.
- **Behavior:** Observer `rootMargin: -40% 0px -55% 0px` marks the centered section active.

#### `initThemeAndProgress()`
- **Purpose:** Apply theme; bind theme toggle; bind scroll/resize progress.
- **Inputs:** `#themeToggle`, `window` events.
- **Outputs:** Theme application + toggle handler (with toast); passive scroll/resize → `updateScrollProgress`.
- **Dependencies:** `applyTheme`, `updateScrollProgress`, `showToast`.
- **Behavior:** Toggle flips `state.theme` between `light`/`dark`.

#### `initBackToTop()`
- **Purpose:** Show/hide and handle the back-to-top button.
- **Inputs:** `#backToTop`, `window.scrollY`.
- **Outputs:** Toggles `.visible` past 60% viewport height; smooth-scrolls to top on click.
- **Dependencies:** DOM, `window`.
- **Behavior:** Threshold captured once at init.

#### `populateHeroStats()`
- **Purpose:** Fill hero counters.
- **Inputs:** `topics.length`, `glossary.length`, total questions across `practiceTests`.
- **Outputs:** `#heroTopicCount`, `#heroGlossaryCount`, `#heroQuestionCount`.
- **Dependencies:** DOM.
- **Behavior:** Static counts computed at boot.

#### `initPressEffects()`
- **Purpose:** Material-style ripple on interactive controls.
- **Inputs:** `pointerdown` events on `.btn/.choice-btn/.tab-btn/.detail-tab/.step-btn/.icon-btn`.
- **Outputs:** Appends a `.ripple-circle` span removed on `animationend`.
- **Dependencies:** DOM.
- **Behavior:** Purely cosmetic.

#### `scrollToInitialHash()`
- **Purpose:** Honor a `#hash` deep link on load.
- **Inputs:** `window.location.hash`.
- **Outputs:** Reveals + scrolls the target into view.
- **Dependencies:** `updateScrollProgress`, `$$`.
- **Behavior:** Runs on `requestAnimationFrame` and again at 300 ms to survive late reveal/layout.

#### `boot()`
- **Purpose:** Application entry point; orchestrates init order.
- **Inputs:** None.
- **Outputs:** Fully wired, rendered UI.
- **Dependencies:** All `init*`/`render*` functions above.
- **Behavior:** Order: theme/progress → reveal → press effects → back-to-top → hero stats → topic cards/detail → progress → study accordion → path controls → practice tabs → flashcards → quiz → letter chips → glossary (+ search listener) → global search → navigation → initial-hash scroll. Invoked immediately at script end.

---

## 3. Module: `html-diagnostics.js` (QA Tooling)

- **Purpose:** Static smoke-check of `Networking 2/index.html`. Consolidates the retired `fix4/5/6.js` scripts.
- **Inputs:** Reads `Networking 2/index.html` from disk. No CLI args.
- **Outputs:** Console report; `process.exit(0)` if all checks pass, else `1`.
- **Dependencies:** Node core `fs`, `path`. (Does **not** use `jsdom`.)
- **Behavior / checks:**
  1. `checkObserverGuard(html)` — asserts literal `if (!entry.isIntersecting) return;` is present.
  2. `checkHiddenClass(css)` — asserts `.hidden` exists in the extracted `<style>` block.
  3. `listGlossaryRules(css)` — lists every CSS line mentioning `glossary`.
- **Helpers:** `readHtml()` (exits 1 if file missing), `extractStyleBlock(html)` (regex-extracts first `<style>…</style>`).
- **Current result (verified this run):** All checks pass; exit code `0`.

---

## 4. Module: `Networking 2/NetworkingTwoBeginnerGuide.jsx` (Unwired React Variant)

- **Purpose:** Alternative React presentation of the same content, styled with Tailwind utility classes and `lucide-react` icons.
- **Inputs:** Imports `./data.js` for its side effect, then reads `globalThis.reviewerData` into `topics/glossary/practiceTests/flashcards`.
- **Outputs:** Default-exported React component tree.
- **Dependencies:** `react`, `lucide-react`, Tailwind CSS — **none are declared in `package.json`**, and no bundler/build config exists in this repo. Treat as reference/secondary, not part of the runtime build.
- **Behavior / components:**
  - Presentational: `Badge`, `Card`, `SectionHeader`, `CompareTable`, `Flow`, `TopicSection`.
  - Stateful (hooks): `FlashcardDeck` (topic filter + index + flip), `PracticeTest` (answers + submitted), `PracticeZone` (selected test), `GlossaryPanel` (live `useMemo` text filter).
  - Root: `NetworkingTwoBeginnerGuide` (default export) with a mobile-nav `open` state, renders all topic sections + practice + glossary.
  - `iconMap`/`toneMap` mirror the vanilla app's `topic.id`→icon and `topic.color`→class mappings.

---

## 5. Systemic Operational Mechanics

### 5.1 Data Flow
1. Browser loads `index.html`.
2. `<script src="data.js">` executes first → declares `topics/glossary/flashcards/practiceTests/pathSteps/studySteps` in the shared classic-script global scope and sets `globalThis.reviewerData`.
3. Inline `<script>` reads those globals directly, builds `state`, then `boot()` renders and wires the UI.
4. User interactions mutate `state` → targeted `render*` functions re-emit `innerHTML`/class changes.
5. Progress-bearing actions (`mark studied`, card navigation/shuffle, quiz submit) call `saveProgress()` → `localStorage`.

### 5.2 Persistence Keys (`localStorage`)
| Key | Type | Written by |
|-----|------|-----------|
| `networking2Studied` | JSON `string[]` of topic ids | `saveProgress` |
| `networking2BestScore` | number-as-string | `saveProgress` |
| `networking2SeenCards` | number-as-string | `saveProgress` |
| `networking2Theme` | `"light"`/`"dark"` | `applyTheme` |

### 5.3 Control Flow / Eventing
- Single entry point `boot()`; no router.
- Re-render strategy is **full innerHTML replacement** per section, with event handlers re-bound after each render (handlers are not delegated except the document-level ripple and outside-click closers).
- Three `IntersectionObserver` instances: reveal animations, nav scroll-spy, and immediate-visibility checks within `attachRevealEffects`.
- One `setInterval` (packet-path auto-advance, 4200 ms), pausable via `#pathToggle`.

### 5.4 Architecture Notes & Constraints
- **Zero runtime dependencies** for the shipped app; fully offline-capable except the Google Fonts `<link>` (Inter) which degrades gracefully to system fonts.
- **XSS posture:** all dynamic interpolation into `innerHTML` passes through `escapeHtml`. Maintain this invariant for any new render code.
- **Idempotency:** `attachRevealEffects` guards via `dataset.revealReady`; `applyTheme`/`renderPathStep` are safe to re-invoke.
- **Coupling:** `data.js` shapes (Section 1.1) are a hard contract for `index.html` AND the React variant. Changing a field name requires updating both consumers.

---

## 6. QA Status (this analysis run)

- **Diagnostics:** `node html-diagnostics.js` → all checks pass, exit `0`.
- **Logic/edge review:** card index wrap-around, divide-by-zero guard in scroll progress, `studied` set filtered to valid ids on load, JSON parse guarded — no defects found in reviewed paths.
- **Integration:** `data.js` globals correctly consumed by `index.html`; counts surfaced in hero stats match data (`topics=15`, `glossary=293`, questions=`450`).
- **Gate:** PASS — no failures; documentation produced per `AGENTS.md`.

---
*Maintenance note:* When code changes land, re-run `node html-diagnostics.js`, then revise the affected Section 2/3/4 entries and any changed counts in Section 1.1 / 5. Keep field labels (`Purpose/Inputs/Outputs/Dependencies/Behavior`) uniform.
