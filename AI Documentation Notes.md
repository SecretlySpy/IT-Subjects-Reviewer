# Module / File: Networking 2/data.js

## Function: module initialization
- **Purpose**: Publish the complete Networking 2 learning-content contract for both UI implementations.
- **Inputs**: None.
- **Outputs**: `globalThis.reviewerData` containing `topics`, `glossary`, `flashcards`, `practiceTests`, `pathSteps`, and `studySteps`.
- **Dependencies**: JavaScript global scope.
- **Behavior**: Declares 15 topics, 293 glossary entries, 300 flashcards, 15 practice tests with 450 questions, five packet-path steps, and four study steps, then exposes them as one object.
- **Side Effects**: Assigns `globalThis.reviewerData`.

## Feature / Capability: Networking content model
- **Purpose**: Provide one data source for the offline HTML reviewer and React reference component.
- **Data Shapes**:
  - `topics[]`: `{ id, unit, title, color, subtitle, beginner, terms[], keyPoints[], compare, flow[] }`.
  - `glossary[]`: `[term, definition]`.
  - `flashcards[]`: `{ topic, front, back }`.
  - `practiceTests[]`: `{ title, description, questions[] }`.
  - `questions[]`: `{ q, options[], answer, explain }`.
- **Operational Mechanics**: The classic script runs before either consumer reads `globalThis.reviewerData`.

# Module / File: Networking 2/index.html

## Function: readStoredJson
- **Purpose**: Parse saved JSON without allowing malformed progress to stop startup.
- **Inputs**:
  - `key` (`string`): Local-storage key.
  - `fallback` (`unknown`): Safe default value.
- **Outputs**: Parsed JSON or `fallback`.
- **Dependencies**: `localStorage`, `JSON`.
- **Behavior**: Reads the key, substitutes serialized fallback when absent, and catches parsing or storage errors.
- **Side Effects**: Reads browser storage.

## Function: $
- **Purpose**: Select the first DOM element matching a CSS selector.
- **Inputs**:
  - `selector` (`string`): CSS selector.
  - `root` (`ParentNode`): Search root; defaults to `document`.
- **Outputs**: `Element|null`.
- **Dependencies**: DOM `querySelector`.
- **Behavior**: Delegates one selector lookup to the supplied root.
- **Side Effects**: None.

## Function: $$
- **Purpose**: Select all matching DOM elements as an array.
- **Inputs**:
  - `selector` (`string`): CSS selector.
  - `root` (`ParentNode`): Search root; defaults to `document`.
- **Outputs**: `Element[]`.
- **Dependencies**: DOM `querySelectorAll`.
- **Behavior**: Converts the returned `NodeList` to an array.
- **Side Effects**: None.

## Function: escapeHtml
- **Purpose**: Encode data-driven text before it enters `innerHTML`.
- **Inputs**:
  - `value` (`unknown`): Value to encode.
- **Outputs**: Escaped `string`.
- **Dependencies**: String replacement APIs.
- **Behavior**: Encodes ampersand, angle brackets, double quotes, and single quotes.
- **Side Effects**: None.

## Function: saveProgress
- **Purpose**: Persist Networking 2 learning progress.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `state`, `localStorage`.
- **Behavior**: Serializes studied topic IDs, best quiz score, and viewed-card count.
- **Side Effects**: Writes `networking2Studied`, `networking2BestScore`, and `networking2SeenCards`.

## Function: showToast
- **Purpose**: Display temporary status feedback.
- **Inputs**:
  - `title` (`string`): Toast heading.
  - `detail` (`string`): Supporting message.
- **Outputs**: `void`.
- **Dependencies**: `escapeHtml`, DOM, timers.
- **Behavior**: Replaces toast markup, shows it, and schedules dismissal.
- **Side Effects**: Updates DOM and timer state.

## Function: applyTheme
- **Purpose**: Apply and persist the selected Networking 2 theme.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `state.theme`, DOM, `localStorage`.
- **Behavior**: Updates the body theme, toggle icon, and accessible label.
- **Side Effects**: Writes `networking2Theme` and changes DOM attributes.

## Function: updateScrollProgress
- **Purpose**: Project document scroll position onto the progress indicator.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `window`, document dimensions, DOM.
- **Behavior**: Calculates a guarded 0–100 percentage and updates the bar width.
- **Side Effects**: Changes inline style.

## Function: attachRevealEffects
- **Purpose**: Observe newly rendered reveal elements.
- **Inputs**:
  - `root` (`ParentNode`): Render subtree; defaults to `document`.
- **Outputs**: `void`.
- **Dependencies**: `IntersectionObserver`, `dataset`, reduced-motion preference.
- **Behavior**: Marks elements once, reveals visible items, and unobserves completed targets.
- **Side Effects**: Creates an observer and changes DOM classes/data attributes.

## Function: initRevealEffects
- **Purpose**: Initialize reveal animation handling for initial markup.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `attachRevealEffects`.
- **Behavior**: Applies reveal behavior to the document.
- **Side Effects**: Registers observation.

## Function: iconSvg
- **Purpose**: Return inline SVG markup for a named interface icon.
- **Inputs**:
  - `name` (`string`): Icon identifier.
- **Outputs**: SVG `string`.
- **Dependencies**: Internal icon path map.
- **Behavior**: Selects a known icon definition and falls back safely.
- **Side Effects**: None.

## Function: topicIcon
- **Purpose**: Resolve the icon associated with a topic.
- **Inputs**:
  - `topic` (`object`): Topic record.
- **Outputs**: SVG `string`.
- **Dependencies**: Topic-to-icon map, `iconSvg`.
- **Behavior**: Maps the topic ID to a semantic icon name.
- **Side Effects**: None.

## Function: renderTopicCards
- **Purpose**: Render topic summaries and study controls.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `topics`, `state`, `escapeHtml`, `topicIcon`, DOM.
- **Behavior**: Filters topics, replaces card markup, binds open/mark actions, and attaches reveals.
- **Side Effects**: Replaces DOM and registers listeners.

## Function: renderTopicDetail
- **Purpose**: Render the selected topic’s explanation, comparison, flow, and terms.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `state.activeTopic`, `topics`, `escapeHtml`, DOM.
- **Behavior**: Projects the active topic and detail tab into the detail panel.
- **Side Effects**: Replaces DOM and binds tab/study controls.

## Function: renderProgress
- **Purpose**: Update Networking 2 completion statistics.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `state`, `topics`, DOM.
- **Behavior**: Calculates topic completion and writes studied, score, card, and bar values.
- **Side Effects**: Updates DOM text and styles.

## Function: renderStudyAccordion
- **Purpose**: Render the four-pass study guide.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `studySteps`, `escapeHtml`, DOM.
- **Behavior**: Builds accordion items and binds exclusive open/close behavior.
- **Side Effects**: Replaces DOM and registers listeners.

## Function: renderPathStep
- **Purpose**: Display the active packet-path step.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `pathSteps`, `state.pathStep`, SVG nodes, DOM.
- **Behavior**: Updates labels and highlights matching nodes, wires, and controls.
- **Side Effects**: Changes DOM text and classes.

## Function: initPathControls
- **Purpose**: Build and animate the packet-path walkthrough.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `pathSteps`, `renderPathStep`, timers.
- **Behavior**: Creates step buttons, binds manual selection/play-pause, and starts a 4.2-second loop.
- **Side Effects**: Registers listeners and a repeating timer.

## Function: filteredCards
- **Purpose**: Return cards matching the selected Networking topic.
- **Inputs**: None.
- **Outputs**: `object[]`.
- **Dependencies**: `flashcards`, `state.cardFilter`.
- **Behavior**: Returns all cards or filters by topic.
- **Side Effects**: None.

## Function: renderCardTopicOptions
- **Purpose**: Populate the Networking flashcard filter.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `flashcards`, `escapeHtml`, DOM.
- **Behavior**: Builds one option per distinct topic plus All.
- **Side Effects**: Replaces select options.

## Function: renderFlashcard
- **Purpose**: Render the normalized current card and selected face.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `filteredCards`, `state`, `escapeHtml`, `renderProgress`.
- **Behavior**: Wraps the index, renders front/back, and updates the counter.
- **Side Effects**: Updates DOM and normalizes `state.cardIndex`.

## Function: changeCard
- **Purpose**: Move through the Networking flashcard deck.
- **Inputs**:
  - `step` (`number`): Signed card movement.
- **Outputs**: `void`.
- **Dependencies**: `state`, `saveProgress`, `renderFlashcard`.
- **Behavior**: Moves the index, resets the face, increments views, saves, and renders.
- **Side Effects**: Mutates state and browser storage.

## Function: initFlashcards
- **Purpose**: Wire all Networking flashcard controls and keyboard shortcuts.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Flashcard render/change helpers, DOM.
- **Behavior**: Binds filtering, flipping, navigation, shuffling, and keyboard actions.
- **Side Effects**: Registers event listeners.

## Function: renderTestOptions
- **Purpose**: Populate the Networking practice-test selector.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `practiceTests`, `escapeHtml`, DOM.
- **Behavior**: Builds test options and resets answers when the selection changes.
- **Side Effects**: Updates DOM and state.

## Function: renderQuiz
- **Purpose**: Render Networking questions, choices, correctness, and explanations.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `practiceTests`, `state.answers`, `escapeHtml`, DOM.
- **Behavior**: Creates choice controls and reveals correct/incorrect states after submission.
- **Side Effects**: Replaces DOM and registers choice listeners.

## Function: submitQuiz
- **Purpose**: Score the active Networking test.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `practiceTests`, `state`, persistence and render helpers.
- **Behavior**: Counts correct answers, computes a percentage, preserves the best score, saves, and reveals feedback.
- **Side Effects**: Mutates state, browser storage, and DOM.

## Function: initQuiz
- **Purpose**: Initialize Networking test selection, submission, and reset.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Quiz helpers, DOM.
- **Behavior**: Renders initial controls and binds submit/reset buttons.
- **Side Effects**: Registers listeners.

## Function: initPracticeTabs
- **Purpose**: Switch between Networking flashcards and tests.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `[data-practice-tab]`, `.hidden`.
- **Behavior**: Keeps tab selection and panel visibility mutually exclusive.
- **Side Effects**: Changes classes and ARIA states.

## Function: renderGlossary
- **Purpose**: Render Networking terms matching letter and text filters.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `glossary`, search input, `state.glossaryLetter`, `escapeHtml`.
- **Behavior**: Applies case-insensitive filters, renders cards or an empty state, and attaches reveals.
- **Side Effects**: Replaces DOM.

## Function: renderLetterChips
- **Purpose**: Build available first-letter glossary filters.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `glossary`, `state.glossaryLetter`, `renderGlossary`.
- **Behavior**: Renders All plus present letters and binds selection.
- **Side Effects**: Replaces DOM and registers listeners.

## Function: renderGlobalSearch
- **Purpose**: Search Networking topics and glossary entries together.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Search input, `topics`, `glossary`, render helpers.
- **Behavior**: Builds a capped result list and routes topic or term selections.
- **Side Effects**: Updates dropdown, state, fields, and scroll position.

## Function: initGlobalSearch
- **Purpose**: Wire Networking quick-find input and outside-click dismissal.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `renderGlobalSearch`, DOM.
- **Behavior**: Binds input/focus rendering and document-level dismissal.
- **Side Effects**: Registers listeners.

## Function: initNavigation
- **Purpose**: Initialize mobile navigation and scroll-spy.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Menu controls, `IntersectionObserver`.
- **Behavior**: Toggles mobile menu state and highlights the section near the viewport center.
- **Side Effects**: Registers listeners/observer and changes classes/ARIA.

## Function: initThemeAndProgress
- **Purpose**: Initialize theme switching and scroll progress.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `applyTheme`, `updateScrollProgress`, window events.
- **Behavior**: Applies restored theme and binds theme, scroll, and resize handlers.
- **Side Effects**: Registers listeners and writes theme on changes.

## Function: initBackToTop
- **Purpose**: Control the Networking back-to-top button.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Window position and scrolling API.
- **Behavior**: Shows the control after a threshold and scrolls to the top on activation.
- **Side Effects**: Registers listeners and changes scroll position.

## Function: populateHeroStats
- **Purpose**: Fill Networking headline content counts.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Data-array lengths, DOM.
- **Behavior**: Counts topics, glossary entries, and all practice questions.
- **Side Effects**: Updates DOM text.

## Function: initPressEffects
- **Purpose**: Add pointer ripple feedback to interactive controls.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Pointer events, DOM geometry.
- **Behavior**: Creates a positioned ripple span and removes it after animation.
- **Side Effects**: Registers a document listener and temporarily mutates DOM.

## Function: scrollToInitialHash
- **Purpose**: Honor a deep-link hash after initial rendering.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `window.location.hash`, scrolling API, timers.
- **Behavior**: Reveals and scrolls to the target after layout settles.
- **Side Effects**: Changes scroll position.

## Function: boot
- **Purpose**: Initialize the complete Networking offline reviewer.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Every Networking initialization and render helper.
- **Behavior**: Runs theme, reveal, navigation, topics, visualization, practice, glossary, and hash initialization in dependency-safe order.
- **Side Effects**: Fully renders the application and registers all runtime behavior.

## Feature / Capability: Networking offline reviewer
- **Purpose**: Offer zero-build topic review, packet-path visualization, flashcards, scored tests, glossary search, theme selection, and progress persistence.
- **Data Flow**: `data.js` → `globalThis.reviewerData` → inline `state` → render helpers → DOM; progress actions → Networking-specific local-storage keys.
- **Integration Points**: `data.js`, browser DOM APIs, `localStorage`, `IntersectionObserver`, Google Fonts with system-font fallback.

# Module / File: Networking 2/NetworkingTwoBeginnerGuide.jsx

## Function: Badge
- **Purpose**: Render compact Networking label content.
- **Inputs**:
  - `children` (`ReactNode`): Label content.
- **Outputs**: React element.
- **Dependencies**: React, Tailwind CSS.
- **Behavior**: Wraps content in badge styling.
- **Side Effects**: None.

## Function: Card
- **Purpose**: Render a reusable Networking surface.
- **Inputs**:
  - `children` (`ReactNode`): Card content.
  - `className` (`string`): Optional classes.
- **Outputs**: React element.
- **Dependencies**: React, Tailwind CSS.
- **Behavior**: Combines base and caller-supplied classes.
- **Side Effects**: None.

## Function: SectionHeader
- **Purpose**: Render a numbered Networking topic heading.
- **Inputs**:
  - `topic` (`object`): Topic data.
  - `index` (`number`): Display order.
- **Outputs**: React element.
- **Dependencies**: `iconMap`, `toneMap`.
- **Behavior**: Displays topic identity, icon, unit, title, and summary.
- **Side Effects**: None.

## Function: CompareTable
- **Purpose**: Render topic comparison data as a table.
- **Inputs**:
  - `compare` (`object`): Headers and rows.
- **Outputs**: React element.
- **Dependencies**: React.
- **Behavior**: Maps headers and cells into accessible table markup.
- **Side Effects**: None.

## Function: Flow
- **Purpose**: Render ordered Networking process steps.
- **Inputs**:
  - `steps` (`Array<[string,string]>`): Labels and explanations.
- **Outputs**: React element.
- **Dependencies**: React.
- **Behavior**: Maps each pair into a visual flow item.
- **Side Effects**: None.

## Function: TopicSection
- **Purpose**: Compose one complete Networking topic section.
- **Inputs**:
  - `topic` (`object`): Topic content.
  - `index` (`number`): Display order.
- **Outputs**: React element.
- **Dependencies**: `SectionHeader`, `CompareTable`, `Flow`.
- **Behavior**: Displays beginner text, terms, takeaways, comparisons, and flow.
- **Side Effects**: None.

## Function: FlashcardDeck
- **Purpose**: Provide stateful Networking flashcard practice.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React hooks, `flashcards`.
- **Behavior**: Filters topics, normalizes index, flips cards, and provides navigation.
- **Side Effects**: Updates React component state.

## Function: setTopic
- **Purpose**: Change the React flashcard topic.
- **Inputs**:
  - `topic` (`string`): Selected topic.
- **Outputs**: `void`.
- **Dependencies**: FlashcardDeck setters.
- **Behavior**: Sets the filter and resets index/face.
- **Side Effects**: Updates React state.

## Function: move
- **Purpose**: Move the React Networking card index.
- **Inputs**:
  - `step` (`number`): Signed movement.
- **Outputs**: `void`.
- **Dependencies**: FlashcardDeck state.
- **Behavior**: Advances the index and resets the face.
- **Side Effects**: Updates React state.

## Function: PracticeTest
- **Purpose**: Render and score one Networking React test.
- **Inputs**:
  - `test` (`object`): Practice-test record.
- **Outputs**: React element.
- **Dependencies**: React hooks.
- **Behavior**: Records answers, reveals correctness, and calculates the score.
- **Side Effects**: Updates React state.

## Function: reset
- **Purpose**: Clear a React Networking practice attempt.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: PracticeTest setters.
- **Behavior**: Clears answers and submission state.
- **Side Effects**: Updates React state.

## Function: PracticeZone
- **Purpose**: Select and render Networking practice tests.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: `practiceTests`, `PracticeTest`.
- **Behavior**: Maintains test selection and delegates test rendering.
- **Side Effects**: Updates React state.

## Function: GlossaryPanel
- **Purpose**: Provide live Networking glossary search.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React hooks, `glossary`.
- **Behavior**: Memoizes case-insensitive term/definition filtering and renders results.
- **Side Effects**: Updates query state.

## Function: NetworkingTwoBeginnerGuide
- **Purpose**: Export the complete Networking React reference reviewer.
- **Inputs**: None.
- **Outputs**: React application tree.
- **Dependencies**: React, Tailwind CSS, `lucide-react`, shared data components.
- **Behavior**: Composes navigation, hero, all topics, practice, and glossary.
- **Side Effects**: Updates mobile-navigation state.

# Module / File: Systems Integration and Architecture 1/data.js

## Function: buildQuestionSet
- **Purpose**: Generate one deterministic twenty-question module test from glossary definitions.
- **Inputs**:
  - `entries` (`Array<[string,string]>`): One module’s twenty glossary entries.
  - `moduleIndex` (`number`): Module position used to rotate correct answers.
- **Outputs**: `Question[]` with `q`, four `options`, valid `answer`, and `explain`.
- **Dependencies**: Array mapping and glossary tuple shape.
- **Behavior**: Uses three same-module definition offsets as plausible distractors and rotates the correct option across positions.
- **Side Effects**: None.

## Function: module initialization
- **Purpose**: Publish the complete SIA 1 Module 1 learning-content contract.
- **Inputs**: None.
- **Outputs**: `globalThis.reviewerData`.
- **Dependencies**: `buildQuestionSet`, an immediately invoked private function scope, and `globalThis`.
- **Behavior**: Creates course metadata, three modules, 14 topics, 60 glossary entries, 54 generated flashcards, three generated 20-question tests, four blueprint stages, three model layers, 18 scenarios, and four study steps inside a private scope so their `const` names cannot collide with the inline classic script.
- **Side Effects**: Assigns `globalThis.reviewerData`.

## Feature / Capability: SIA content model
- **Purpose**: Keep HTML and React learning content synchronized.
- **Data Shapes**:
  - `course`: `{ id, title, shortTitle, moduleLabel, description }`.
  - `modules[]`: `{ id, label, title, objective }`.
  - `topics[]`: Existing shared topic shape plus `moduleId` and `example`.
  - `blueprintStages[]`: `{ id, title, question, summary, includes[], example }`.
  - `modelLayers[]`: `{ id, label, question, description, constructs[], example }`.
  - `scenarios[]`: `{ id, moduleId, category, prompt, options[], answer, explanation }`.
- **Operational Mechanics**: Glossary entries 0–19 map to Module 1.1, 20–39 to 1.2, and 40–59 to 1.3.

# Module / File: Systems Integration and Architecture 1/index.html

## Function: $
- **Purpose**: Select the first element matching a CSS selector.
- **Inputs**:
  - `selector` (`string`): CSS selector.
  - `root` (`ParentNode`): Search root.
- **Outputs**: `Element|null`.
- **Dependencies**: DOM.
- **Behavior**: Delegates to `querySelector`.
- **Side Effects**: None.

## Function: $$
- **Purpose**: Return all matching elements as an array.
- **Inputs**:
  - `selector` (`string`): CSS selector.
  - `root` (`ParentNode`): Search root.
- **Outputs**: `Element[]`.
- **Dependencies**: DOM.
- **Behavior**: Converts `querySelectorAll` output to an array.
- **Side Effects**: None.

## Function: escapeHtml
- **Purpose**: Encode all data-driven text used in HTML templates.
- **Inputs**:
  - `value` (`unknown`): Value to encode.
- **Outputs**: Escaped `string`.
- **Dependencies**: String APIs.
- **Behavior**: Encodes HTML-sensitive characters.
- **Side Effects**: None.

## Function: storageGet
- **Purpose**: Read SIA progress without allowing storage restrictions to break the app.
- **Inputs**:
  - `key` (`string`): Storage key.
- **Outputs**: `string|null`.
- **Dependencies**: `localStorage`.
- **Behavior**: Returns the stored string or null after any error.
- **Side Effects**: Reads browser storage.

## Function: storageSet
- **Purpose**: Write SIA progress with graceful failure feedback.
- **Inputs**:
  - `key` (`string`): Storage key.
  - `value` (`string`): Serialized value.
- **Outputs**: `void`.
- **Dependencies**: `localStorage`, `showToast`.
- **Behavior**: Writes the value and reports session-only progress if storage is blocked.
- **Side Effects**: Writes browser storage or shows a toast.

## Function: readStoredJson
- **Purpose**: Parse persisted SIA JSON defensively.
- **Inputs**:
  - `key` (`string`): Storage key.
  - `fallback` (`unknown`): Safe default.
- **Outputs**: Parsed value or fallback.
- **Dependencies**: `storageGet`, `JSON`.
- **Behavior**: Parses present data and catches malformed values.
- **Side Effects**: Reads browser storage.

## Function: safeCount
- **Purpose**: Normalize saved counts.
- **Inputs**:
  - `value` (`unknown`): Candidate number.
- **Outputs**: Non-negative integer.
- **Dependencies**: Number APIs.
- **Behavior**: Floors finite non-negative values and otherwise returns zero.
- **Side Effects**: None.

## Function: saveProgress
- **Purpose**: Persist all SIA learning progress.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `state`, `storageSet`.
- **Behavior**: Serializes studied topics, best score, card views, and completed/correct scenario IDs.
- **Side Effects**: Writes `sia1Studied`, `sia1BestScore`, `sia1SeenCards`, and `sia1ScenarioProgress`.

## Function: showToast
- **Purpose**: Announce temporary SIA status feedback.
- **Inputs**:
  - `title` (`string`): Heading.
  - `detail` (`string`): Explanation.
- **Outputs**: `void`.
- **Dependencies**: `escapeHtml`, DOM, timer.
- **Behavior**: Renders safe text, shows the toast, and resets its dismissal timer.
- **Side Effects**: Updates DOM and timer state.

## Function: applyTheme
- **Purpose**: Apply and persist the SIA theme.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `state.theme`, `storageSet`, DOM.
- **Behavior**: Sets body theme, toggle glyph, and accessible label.
- **Side Effects**: Writes `sia1Theme` and changes DOM.

## Function: updateScrollProgress
- **Purpose**: Update reading progress and back-to-top visibility.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Window/document dimensions.
- **Behavior**: Calculates a guarded percentage and compares scroll position with a viewport threshold.
- **Side Effects**: Changes inline style and classes.

## Function: attachRevealEffects
- **Purpose**: Reveal newly rendered SIA elements once they enter the viewport.
- **Inputs**:
  - `root` (`ParentNode`): Subtree to inspect.
- **Outputs**: `void`.
- **Dependencies**: `IntersectionObserver`, reduced-motion media query.
- **Behavior**: Reveals immediately for reduced motion or observes unprepared elements once.
- **Side Effects**: Creates an observer and changes DOM classes/data attributes.

## Function: populateHeroStats
- **Purpose**: Fill SIA hero totals from source data.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Data arrays, DOM.
- **Behavior**: Writes topic, card, question, and scenario totals.
- **Side Effects**: Updates DOM.

## Function: renderProgress
- **Purpose**: Render persistent SIA progress indicators.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `state`, `topics`, DOM.
- **Behavior**: Computes topic percentage and shows best quiz, scenario accuracy, and card views.
- **Side Effects**: Updates DOM text and styles.

## Function: renderModuleFilters
- **Purpose**: Render all-topic and three-module topic filters.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `modules`, `state.moduleFilter`, `renderTopicCards`.
- **Behavior**: Builds controls, marks the active one, and binds selection.
- **Side Effects**: Replaces DOM, changes state, and registers listeners.

## Function: filteredTopics
- **Purpose**: Return topics matching the selected SIA module.
- **Inputs**: None.
- **Outputs**: `object[]`.
- **Dependencies**: `topics`, `state.moduleFilter`.
- **Behavior**: Returns all topics or filters by `moduleId`.
- **Side Effects**: None.

## Function: renderTopicCards
- **Purpose**: Render SIA topic summaries and study actions.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `filteredTopics`, `modules`, `state`, `escapeHtml`.
- **Behavior**: Creates cards, labels study status, binds guide/study controls, and reveals them.
- **Side Effects**: Replaces DOM and registers listeners.

## Function: toggleStudied
- **Purpose**: Toggle and persist one SIA topic’s completion.
- **Inputs**:
  - `topicId` (`string`): Valid topic identifier.
- **Outputs**: `void`.
- **Dependencies**: `validTopicIds`, `state`, persistence/render helpers.
- **Behavior**: Rejects unknown IDs, toggles set membership, saves, refreshes progress/cards/dialog, and announces status.
- **Side Effects**: Mutates state, storage, and DOM.

## Function: openTopic
- **Purpose**: Render one complete SIA topic in an accessible dialog.
- **Inputs**:
  - `topicId` (`string`): Topic identifier.
  - `show` (`boolean`): Whether to open a closed dialog.
- **Outputs**: `void`.
- **Dependencies**: `topics`, `modules`, `escapeHtml`, native dialog API.
- **Behavior**: Builds beginner text, example, takeaways, terms, comparison, flow, and study control.
- **Side Effects**: Replaces dialog DOM, registers a listener, and may open the dialog.

## Function: renderStudySteps
- **Purpose**: Render the SIA four-pass study loop.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `studySteps`, `escapeHtml`.
- **Behavior**: Maps steps to four structured cards.
- **Side Effects**: Replaces DOM.

## Function: renderBlueprint
- **Purpose**: Render the four-stage EIA reference-architecture explorer.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `blueprintStages`, `state.blueprintIndex`, `escapeHtml`.
- **Behavior**: Renders path, tabs, selected-stage detail, and guarded previous/next controls.
- **Side Effects**: Replaces DOM, mutates stage index, and registers listeners.

## Function: renderModelLens
- **Purpose**: Render conceptual, logical, and physical model-layer detail.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `modelLayers`, `state.modelLayerIndex`, `renderModelMatch`.
- **Behavior**: Builds layer tabs, selected constructs/example, and the companion matching activity.
- **Side Effects**: Replaces DOM, mutates selection, and registers listeners.

## Function: renderModelMatch
- **Purpose**: Render one model-construct classification prompt.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `modelMatchItems`, `modelLayers`, matching state.
- **Behavior**: Shows three layer choices, immediate correctness, and cyclic next/restart control.
- **Side Effects**: Replaces DOM, mutates match state, and registers listeners.

## Function: filteredScenarios
- **Purpose**: Return scenarios for the active category.
- **Inputs**: None.
- **Outputs**: `object[]`.
- **Dependencies**: `scenarios`, `state.scenarioFilter`.
- **Behavior**: Returns all scenarios or filters by category.
- **Side Effects**: None.

## Function: renderScenarioFilters
- **Purpose**: Render All, Data Realms, Governance, and Model Layers filters.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `scenarios`, scenario state, `renderScenario`.
- **Behavior**: Builds unique categories and resets the active scenario when changed.
- **Side Effects**: Replaces DOM, mutates state, and registers listeners.

## Function: renderScenario
- **Purpose**: Render one applied SIA decision challenge with feedback.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `filteredScenarios`, `modules`, scenario state, persistence helpers.
- **Behavior**: Normalizes the index, renders choices, records completed/correct IDs, reveals explanation, and supports navigation.
- **Side Effects**: Replaces DOM, mutates state/storage, and registers listeners.

## Function: filteredCards
- **Purpose**: Return SIA cards matching the selected module title.
- **Inputs**: None.
- **Outputs**: `object[]`.
- **Dependencies**: `flashcards`, `state.cardTopic`.
- **Behavior**: Returns all cards or filters by `topic`.
- **Side Effects**: None.

## Function: renderCardTopicOptions
- **Purpose**: Populate the SIA card-topic selector.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `flashcards`, `escapeHtml`.
- **Behavior**: Builds All plus one option for each distinct module title.
- **Side Effects**: Replaces select options.

## Function: renderFlashcard
- **Purpose**: Render the normalized current SIA card face.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `filteredCards`, card state, `escapeHtml`.
- **Behavior**: Handles empty decks, wraps indexes, and renders question/answer plus counter.
- **Side Effects**: Updates DOM and normalizes `state.cardIndex`.

## Function: changeCard
- **Purpose**: Navigate SIA flashcards and count views.
- **Inputs**:
  - `step` (`number`): Signed movement.
- **Outputs**: `void`.
- **Dependencies**: Card state, persistence/render helpers.
- **Behavior**: Moves the index, resets the face, increments views, saves, and renders.
- **Side Effects**: Mutates state/storage/DOM.

## Function: renderTestOptions
- **Purpose**: Populate the three SIA module-test options.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `practiceTests`, `escapeHtml`.
- **Behavior**: Builds one option per module test and marks the selected index.
- **Side Effects**: Replaces select options.

## Function: renderQuiz
- **Purpose**: Render the active twenty-question SIA test.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `practiceTests`, quiz state, `escapeHtml`.
- **Behavior**: Renders choices, selection states, correctness, explanations, and answer handlers.
- **Side Effects**: Replaces DOM and mutates answers through listeners.

## Function: submitQuiz
- **Purpose**: Score the selected SIA test.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `practiceTests`, quiz state, persistence/render helpers.
- **Behavior**: Counts correct answers, computes percentage, preserves best score, saves, renders, and announces.
- **Side Effects**: Mutates state/storage/DOM.

## Function: renderGlossaryFilters
- **Purpose**: Render SIA glossary module filters.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `modules`, glossary state, `renderGlossary`.
- **Behavior**: Builds All and three module controls and binds selection.
- **Side Effects**: Replaces DOM, mutates state, and registers listeners.

## Function: renderGlossary
- **Purpose**: Render SIA terms matching module and text filters.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `glossary`, `modules`, search input, `escapeHtml`.
- **Behavior**: Maps each 20-entry range to a module, filters case-insensitively, and renders cards or an empty state.
- **Side Effects**: Replaces DOM and attaches reveals.

## Function: renderGlobalSearch
- **Purpose**: Search SIA topics and glossary terms together.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `topics`, `glossary`, search input, topic/glossary render helpers.
- **Behavior**: Caps matches, renders a result box, opens topics, or routes terms to filtered glossary results.
- **Side Effects**: Replaces DOM, changes fields/state, opens dialogs, and scrolls.

## Function: initControls
- **Purpose**: Bind stable SIA controls that are not replaced by render functions.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Theme, menu, dialog, search, flashcard, quiz, tab, scroll, and keyboard helpers.
- **Behavior**: Registers all persistent UI event handlers, including accessible keyboard card navigation.
- **Side Effects**: Registers listeners and triggers state/DOM/storage changes during use.

## Function: initNavigationObserver
- **Purpose**: Highlight the SIA section near the viewport center.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `IntersectionObserver`, section IDs, nav links.
- **Behavior**: Observes six sections and toggles active links for intersecting entries.
- **Side Effects**: Creates an observer and changes classes.

## Function: boot
- **Purpose**: Initialize the complete SIA offline reviewer.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Every SIA render and initialization helper.
- **Behavior**: Applies theme, renders all learning areas, binds controls/navigation, attaches reveals, and updates scrolling state.
- **Side Effects**: Fully renders and activates the application.

## Feature / Capability: SIA offline reviewer
- **Purpose**: Provide a zero-build responsive reviewer for all three supplied Module 1 lessons.
- **Capabilities**: Fourteen topic guides, module filtering, progress, EIA blueprint, model-layer lens and matching, 18 scenarios, 54 cards, three 20-question tests, 60-term glossary, global search, dark mode, reduced-motion support, and keyboard access.
- **Data Flow**: `data.js` → `globalThis.reviewerData` → validated `state` → render functions → DOM; progress actions → isolated `sia1*` keys.
- **Responsive Mechanics**: Grid breakpoints at 980, 700, and 440 pixels; horizontal overflow is constrained; mobile brand/tools and typography are compressed; decorative artwork is clipped inside its column.

# Module / File: Systems Integration and Architecture 1/SystemsIntegrationArchitectureOneBeginnerGuide.jsx

## Function: Chip
- **Purpose**: Render a reusable compact label.
- **Inputs**:
  - `children` (`ReactNode`): Label content.
- **Outputs**: React element.
- **Dependencies**: React, Tailwind CSS.
- **Behavior**: Wraps content in shared chip styling.
- **Side Effects**: None.

## Function: Panel
- **Purpose**: Render a reusable bordered content surface.
- **Inputs**:
  - `children` (`ReactNode`): Panel content.
  - `className` (`string`): Optional classes.
- **Outputs**: React element.
- **Dependencies**: React, Tailwind CSS.
- **Behavior**: Combines base surface classes with caller classes.
- **Side Effects**: None.

## Function: readStoredJson
- **Purpose**: Restore JSON safely in browsers while tolerating SSR and blocked storage.
- **Inputs**:
  - `key` (`string`): Storage key.
  - `fallback` (`unknown`): Default.
- **Outputs**: Parsed value or fallback.
- **Dependencies**: `window`, `localStorage`, `JSON`.
- **Behavior**: Returns fallback without accessing storage during SSR and catches runtime errors.
- **Side Effects**: Reads browser storage.

## Function: TopicDetail
- **Purpose**: Render one expanded React SIA topic.
- **Inputs**:
  - `topic` (`object`): Topic record.
  - `studied` (`boolean`): Completion state.
  - `onToggle` (`Function`): Completion callback.
  - `onClose` (`Function`): Close callback.
- **Outputs**: React element.
- **Dependencies**: `modules`, `Chip`, `Panel`.
- **Behavior**: Displays example, key points, terms, table, flow, and actions.
- **Side Effects**: Calls supplied callbacks on user action.

## Function: TopicDashboard
- **Purpose**: Provide React module filtering, topic cards, detail, and completion.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React hooks, `topics`, `modules`, `TopicDetail`.
- **Behavior**: Validates restored IDs, memoizes filtering, persists studied IDs, and renders cards/details.
- **Side Effects**: Updates React state and `sia1Studied`.

## Function: toggleStudied
- **Purpose**: Toggle one React SIA topic ID.
- **Inputs**:
  - `topicId` (`string`): Topic identifier.
- **Outputs**: `void`.
- **Dependencies**: TopicDashboard state setter.
- **Behavior**: Copies the Set and toggles membership.
- **Side Effects**: Updates React state, which triggers persistence.

## Function: BlueprintExplorer
- **Purpose**: Render the React four-stage EIA blueprint.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React state, `blueprintStages`, `Panel`.
- **Behavior**: Maintains selected stage and displays its summary, inclusions, and example.
- **Side Effects**: Updates React state.

## Function: ModelLens
- **Purpose**: Render React model-layer detail and construct matching.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React state, `modelLayers`, `Panel`.
- **Behavior**: Switches layers, evaluates three representative matches, and cycles prompts.
- **Side Effects**: Updates React state.

## Function: ScenarioLab
- **Purpose**: Render all React SIA scenario challenges.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React hooks, `scenarios`, `Panel`.
- **Behavior**: Filters categories, records selection/completion, reveals explanations, cycles challenges, and persists completion IDs.
- **Side Effects**: Updates React state and `sia1ScenarioProgress`.

## Function: choose
- **Purpose**: Record one React scenario choice.
- **Inputs**:
  - `optionIndex` (`number`): Selected option.
- **Outputs**: `void`.
- **Dependencies**: ScenarioLab setters and active scenario.
- **Behavior**: Stores selection and adds the scenario ID to completed progress.
- **Side Effects**: Updates React state.

## Function: Flashcards
- **Purpose**: Render React SIA card filtering, flipping, and navigation.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React hooks, `flashcards`, `Chip`, `Panel`.
- **Behavior**: Memoizes filtered cards, wraps the index, and resets face on moves/filter changes.
- **Side Effects**: Updates React state.

## Function: move
- **Purpose**: Navigate the React SIA flashcard deck.
- **Inputs**:
  - `step` (`number`): Signed movement.
- **Outputs**: `void`.
- **Dependencies**: Flashcards state.
- **Behavior**: Moves from the normalized index and resets the face.
- **Side Effects**: Updates React state.

## Function: ModuleTest
- **Purpose**: Render and score one React SIA module test.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React state, `practiceTests`, `Panel`.
- **Behavior**: Selects tests, records answers, calculates score, reveals explanations, and resets attempts.
- **Side Effects**: Updates React state.

## Function: PracticeZone
- **Purpose**: Compose React flashcard and test practice.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: `Flashcards`, `ModuleTest`.
- **Behavior**: Places both practice tools in a responsive grid.
- **Side Effects**: None beyond child behavior.

## Function: Glossary
- **Purpose**: Provide React SIA glossary module and text filtering.
- **Inputs**: None.
- **Outputs**: React element.
- **Dependencies**: React hooks, `glossary`, `modules`, `Panel`.
- **Behavior**: Maps glossary ranges to modules, memoizes filtering, and renders results.
- **Side Effects**: Updates query/filter state.

## Function: SystemsIntegrationArchitectureOneBeginnerGuide
- **Purpose**: Export the complete SIA React reference reviewer.
- **Inputs**: None.
- **Outputs**: React application tree.
- **Dependencies**: React, Tailwind CSS, shared SIA components and data.
- **Behavior**: Composes sticky navigation, hero, topics, blueprint, models, scenarios, practice, glossary, and study loop.
- **Side Effects**: Updates local dark-mode state; child components may persist progress.

# Module / File: html-diagnostics.js

## Function: pass
- **Purpose**: Print a passing diagnostic.
- **Inputs**:
  - `message` (`string`): Success text.
- **Outputs**: `true`.
- **Dependencies**: Console.
- **Behavior**: Prints a prefixed success line.
- **Side Effects**: Writes stdout.

## Function: fail
- **Purpose**: Print a failing diagnostic.
- **Inputs**:
  - `message` (`string`): Failure text.
- **Outputs**: `false`.
- **Dependencies**: Console.
- **Behavior**: Prints a prefixed failure line.
- **Side Effects**: Writes stderr.

## Function: readSource
- **Purpose**: Read one required UTF-8 source file.
- **Inputs**:
  - `filePath` (`string`): Absolute path.
- **Outputs**: File `string` or `null`.
- **Dependencies**: Node `fs`.
- **Behavior**: Reports missing files and otherwise reads text.
- **Side Effects**: Reads disk and may print a failure.

## Function: extractStyleBlock
- **Purpose**: Extract the first inline CSS block.
- **Inputs**:
  - `html` (`string`): HTML source.
- **Outputs**: CSS `string`.
- **Dependencies**: Regular expressions.
- **Behavior**: Returns captured style content or an empty string.
- **Side Effects**: None.

## Function: extractInlineScripts
- **Purpose**: Extract inline JavaScript while excluding `src` scripts.
- **Inputs**:
  - `html` (`string`): HTML source.
- **Outputs**: `string[]`.
- **Dependencies**: Regular expressions.
- **Behavior**: Iterates every inline script match.
- **Side Effects**: None.

## Function: extractIds
- **Purpose**: Extract literal HTML `id` values without matching data attributes.
- **Inputs**:
  - `html` (`string`): HTML source.
- **Outputs**: `string[]`.
- **Dependencies**: Regular expressions.
- **Behavior**: Matches whitespace-prefixed `id` attributes.
- **Side Effects**: None.

## Function: checkHtmlContract
- **Purpose**: Validate each reviewer’s structural HTML/CSS/script contract.
- **Inputs**:
  - `reviewer` (`object`): Diagnostic configuration.
  - `html` (`string`): Source.
- **Outputs**: `boolean[]`.
- **Dependencies**: Extraction helpers and reviewer expectations.
- **Behavior**: Checks doctype, `.hidden`, observer guard, script order, duplicate IDs, and required IDs.
- **Side Effects**: Prints results.

## Function: checkJavaScriptSyntax
- **Purpose**: Parse data and inline scripts without executing browser code.
- **Inputs**:
  - `dataSource` (`string`): Data script.
  - `inlineScripts` (`string[]`): Runtime blocks.
- **Outputs**: `boolean`.
- **Dependencies**: Node `vm`.
- **Behavior**: Compiles each script and reports the first syntax error.
- **Side Effects**: Prints result.

## Function: checkClassicGlobalCollisions
- **Purpose**: Detect top-level lexical names that would prevent separate classic scripts from sharing the browser global scope.
- **Inputs**:
  - `dataSource` (`string`): Shared data JavaScript.
  - `inlineScripts` (`string[]`): Inline reviewer runtime blocks.
- **Outputs**: `boolean`.
- **Dependencies**: Node `vm`, `pass`, `fail`.
- **Behavior**: Compiles the concatenated data and inline sources as one classic-script scope so duplicate `const` or `let` declarations fail before deployment.
- **Side Effects**: Prints the collision result.

## Function: evaluateReviewerData
- **Purpose**: Evaluate a data script in an isolated context.
- **Inputs**:
  - `source` (`string`): Data JavaScript.
- **Outputs**: `reviewerData` object or `null`.
- **Dependencies**: Node `vm`.
- **Behavior**: Provides isolated `globalThis`, enforces a timeout, and returns the published contract.
- **Side Effects**: Executes isolated data initialization and may print failure.

## Function: countQuestions
- **Purpose**: Count questions across all tests.
- **Inputs**:
  - `tests` (`object[]`): Test records.
- **Outputs**: `number`.
- **Dependencies**: Array APIs.
- **Behavior**: Safely sums valid `questions` arrays.
- **Side Effects**: None.

## Function: checkContentCounts
- **Purpose**: Enforce exact reviewer content totals.
- **Inputs**:
  - `reviewer` (`object`): Expected counts.
  - `data` (`object`): Evaluated data.
- **Outputs**: `boolean[]`.
- **Dependencies**: `countQuestions`, `pass`, `fail`.
- **Behavior**: Compares every configured array/question total.
- **Side Effects**: Prints results.

## Function: checkUniqueIds
- **Purpose**: Validate record IDs.
- **Inputs**:
  - `records` (`object[]`): ID-bearing records.
  - `label` (`string`): Collection name.
- **Outputs**: `boolean`.
- **Dependencies**: Set/array APIs.
- **Behavior**: Finds missing, blank, and duplicate identifiers.
- **Side Effects**: Prints result.

## Function: checkSharedDataShapes
- **Purpose**: Validate common topic, glossary, and flashcard contracts.
- **Inputs**:
  - `data` (`object`): Evaluated reviewer data.
- **Outputs**: `boolean[]`.
- **Dependencies**: Shared data schema.
- **Behavior**: Checks required topic fields, glossary tuples, and flashcard strings.
- **Side Effects**: Prints results.

## Function: checkAnswerIndexes
- **Purpose**: Validate quiz and scenario answer indexes and explanations.
- **Inputs**:
  - `data` (`object`): Evaluated reviewer data.
- **Outputs**: `boolean[]`.
- **Dependencies**: Test/scenario schemas.
- **Behavior**: Ensures option arrays, in-range integer answers, and explanation strings.
- **Side Effects**: Prints results.

## Function: checkSiaRelationships
- **Purpose**: Validate SIA module references and model-layer definitions.
- **Inputs**:
  - `data` (`object`): Evaluated reviewer data.
- **Outputs**: `boolean[]`.
- **Dependencies**: SIA schemas.
- **Behavior**: Verifies topic/scenario `moduleId` values and non-empty layer construct lists.
- **Side Effects**: Prints results.

## Function: runReviewerDiagnostics
- **Purpose**: Execute all configured checks for one reviewer.
- **Inputs**:
  - `reviewer` (`object`): Configuration.
- **Outputs**: `boolean`.
- **Dependencies**: All diagnostic helpers, Node `path`.
- **Behavior**: Reads sources, checks structure and individual syntax, checks shared classic-script scope, evaluates data, validates counts/shapes/relationships, and aggregates results.
- **Side Effects**: Reads files and writes console output.

## Function: main
- **Purpose**: Run diagnostics for Networking 2 and SIA 1.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: `REVIEWERS`, `runReviewerDiagnostics`, process API.
- **Behavior**: Runs both configurations, prints a final result, and sets exit code 0 or 1.
- **Side Effects**: Writes console output and sets `process.exitCode`.

# Module / File: reviewer-interaction-tests.js

## Function: assert
- **Purpose**: Record a passing behavior or fail the smoke suite.
- **Inputs**:
  - `condition` (`boolean`): Assertion result.
  - `message` (`string`): Behavior description.
- **Outputs**: `void`.
- **Dependencies**: Console, Error.
- **Behavior**: Throws on false and prints PASS on true.
- **Side Effects**: Writes stdout or throws.

## Function: createTestDom
- **Purpose**: Construct a browser-like SIA test document.
- **Inputs**:
  - `html` (`string`): Complete markup with the data source already inlined into its original script position.
- **Outputs**: `JSDOM`.
- **Dependencies**: `jsdom`.
- **Behavior**: Uses a stable URL, enables parser-driven script execution, and supplies media-query, IntersectionObserver, scrolling, and dialog shims before scripts run.
- **Side Effects**: Creates an isolated DOM and executes its classic scripts in browser order.

## Function: main
- **Purpose**: Exercise critical SIA user paths against the real runtime.
- **Inputs**: None.
- **Outputs**: `void`.
- **Dependencies**: Node `fs`/`path`, JSDOM, SIA HTML/data.
- **Behavior**: Replaces the external `data.js` tag with its real source, lets JSDOM parse both classic scripts in page order, then verifies totals, module filters, dialogs, storage isolation, scenarios, cards, tests, glossary, theme persistence, and global search.
- **Side Effects**: Reads source files, executes code in JSDOM, writes test output, and mutates isolated storage/DOM.

# Module / File: package.json

## Function: npm test
- **Purpose**: Run the complete repeatable QA suite.
- **Inputs**: None.
- **Outputs**: Process exit code 0 on success or nonzero on failure.
- **Dependencies**: Node.js, `html-diagnostics.js`, `reviewer-interaction-tests.js`, `jsdom`.
- **Behavior**: Runs repository diagnostics first and interaction tests only if diagnostics pass.
- **Side Effects**: Reads source files and writes console output.

# Module / File: Repository Architecture

## Function: end-to-end reviewer data flow
- **Purpose**: Describe systemic operational mechanics shared across the repository.
- **Inputs**:
  - `data.js` (`classic JavaScript`): Learning content and contracts.
  - User events (`DOM or React events`): Study interactions.
- **Outputs**: Rendered offline or React reviewer state.
- **Dependencies**: Browser APIs for HTML implementations; React/Tailwind host for JSX implementations.
- **Behavior**: Data publishes through `globalThis.reviewerData`; consumers create local state; render functions/components project state; progress actions persist course-isolated keys.
- **Side Effects**: HTML consumers mutate DOM/storage; React consumers update hooks and selected storage.

## Feature / Capability: Persistence isolation
- **Networking Keys**: `networking2Studied`, `networking2BestScore`, `networking2SeenCards`, `networking2Theme`.
- **SIA Keys**: `sia1Studied`, `sia1BestScore`, `sia1SeenCards`, `sia1ScenarioProgress`, `sia1Theme`.
- **Invariant**: Each reviewer validates restored identifiers/counts and never writes the other course’s keys.

## Feature / Capability: Current QA status
- **Result**: `QA_PASSED`.
- **Automated Evidence**: `npm test` passes repository diagnostics, classic-script global-collision checks, and the parser-driven JSDOM interaction suite.
- **Static Evidence**: `node --check` passes both data files and both QA scripts; `git diff --check` reports no whitespace errors.
- **Visual Evidence**: Desktop 1440×1200 and responsive 500×900 Edge screenshots render correctly; mobile CSS constrains horizontal overflow and supplies 700/440-pixel refinements.
- **Regression Evidence**: Networking 2 retains 15 topics, 293 terms, 300 cards, 15 tests, and 450 valid questions.
