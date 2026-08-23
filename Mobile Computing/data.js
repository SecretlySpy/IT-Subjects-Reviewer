/**
 * Shared learning content for the Mobile Computing reviewer.
 */

(() => {

const course = {
  id: "cs409",
  title: "Mobile Computing & Modern JavaScript",
  shortTitle: "CS409",
  moduleLabel: "Module",
  description: "Mobile computing concepts and evolution, Modern JavaScript with ES6, interactive mobile web forms, the JavaScript language fundamentals underneath them, and the modern mobile web platform.",
};

const modules = [
  {
    id: "m1",
    label: "1",
    title: "Mobile Computing Concepts",
    objective: "Understand ubiquitous connectivity, pervasiveness of mobile devices, and mobile evolution.",
  },
  {
    id: "m2",
    label: "2",
    title: "Modern JavaScript with ES6",
    objective: "Learn modern JS features including variable scoping, arrow functions, destructuring, promises, and classes.",
  },
  {
    id: "m3",
    label: "3",
    title: "Interactive Mobile Web Forms",
    objective: "Build, process, validate, and safely present data from an accessible mobile-first web form.",
  },
  {
    id: "m4",
    label: "4",
    title: "JavaScript Language Fundamentals",
    objective: "Understand how an engine executes a script, and the type, control-flow, and binding rules underneath modern syntax.",
  },
  {
    id: "m5",
    label: "5",
    title: "Modern Mobile Web Platform",
    objective: "Ship installable, offline-capable web applications that meet measurable performance and security targets.",
  },
];

const sources = {
  javascript: { title: "JavaScript language overview", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview" },
  formData: { title: "FormData", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/API/FormData" },
  submit: { title: "HTMLFormElement: submit event", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event" },
  validation: { title: "Using HTML form validation and the Constraint Validation API", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation" },
  labels: { title: "Labeling Controls", publisher: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/tutorials/forms/labels/" },
  errors: { title: "Understanding Error Identification", publisher: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html" },
  xss: { title: "DOM based XSS Prevention Cheat Sheet", publisher: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html" },
  ecma262: { title: "ECMAScript Language Specification", publisher: "Ecma International (TC39)", url: "https://tc39.es/ecma262/" },
  v8: { title: "V8 JavaScript engine documentation", publisher: "V8 / Google", url: "https://v8.dev/docs" },
  sameOrigin: { title: "Same-origin policy", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" },
  equality: { title: "Equality comparisons and sameness", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness" },
  loops: { title: "Loops and iteration", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration" },
  thisRef: { title: "this - JavaScript reference", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" },
  serviceWorkers: { title: "Service Workers", publisher: "W3C Candidate Recommendation", url: "https://www.w3.org/TR/service-workers/" },
  manifest: { title: "Web Application Manifest", publisher: "W3C", url: "https://www.w3.org/TR/appmanifest/" },
  vitals: { title: "Web Vitals", publisher: "web.dev (Google)", url: "https://web.dev/articles/vitals" },
  responsive: { title: "Responsive design", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
  wcag: { title: "Web Content Accessibility Guidelines (WCAG) 2.2", publisher: "W3C Recommendation", url: "https://www.w3.org/TR/WCAG22/" },
  permissions: { title: "Permissions API", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API" },
};

const topics = [
  {
    id: "mc-intro",
    moduleId: "m1",
    unit: "1.1",
    title: "Introduction & Pervasiveness",
    color: "blue",
    subtitle: "The dawn of ubiquitous connectivity.",
    beginner: "Mobile devices have entered all spheres of personal, social, and professional life. They do much more than communication, acting as tools for entertainment, research, finance, and business.",
    example: "97.6% of the world's population has access to a smartphone, making them the primary medium of modern existence.",
    terms: [
      "Ubiquitous Connectivity",
      "Media & Entertainment",
      "Discovery & Social",
      "Finance & Utility"
    ],
    keyPoints: [
      "Mobile devices have fundamentally changed communication.",
      "The smartphone revolution is a paradigm shift in business and personal life.",
      "Hundreds of billions of apps are downloaded annually, creating massive revenue.",
      "The mobile OS market is a duopoly dominated by Android (~70%) and iOS (~28%)."
    ],
    compare: {
      headers: ["Activity Category", "Purpose", "Example"],
      rows: [
        ["Media & Entertainment", "Access rich content anywhere", "Streaming, gaming"],
        ["Discovery & Social", "Global connection & tracking", "Social media, location services"],
        ["Finance & Utility", "Secure online management", "Banking, shopping"],
      ],
    },
    flow: [
      ["Connect", "Establish ubiquitous connectivity globally."],
      ["Engage", "Integrate into work culture and the internet generation."],
      ["Evolve", "Transform from simple tasks to complex media and utility hubs."],
    ],
  },
  {
    id: "mc-concepts",
    moduleId: "m1",
    unit: "1.2",
    title: "Three Main Concepts",
    color: "cyan",
    subtitle: "Communication, Hardware, and Software.",
    beginner: "Mobile computing relies on three pillars: the invisible waves that carry data, the physical devices we hold, and the operating systems that run the applications.",
    example: "When you send a photo on WhatsApp, the Software processes it, the Hardware transmits it via a Receptor Medium, and the Communication infrastructure (cell towers) routes it using unguided radio waves.",
    terms: [
      "Mobile Communication",
      "Mobile Hardware",
      "Mobile Software",
      "Full-Duplex Operation",
      "Receptor Medium"
    ],
    keyPoints: [
      "Mobile Communication uses unguided/unbounded media (radio waves) to carry signals.",
      "Mobile Hardware includes devices like laptops, smartphones, tablets, and PDAs.",
      "Hardware must have a Receptor Medium to sense signals and often operates in Full-Duplex (sending/receiving simultaneously).",
      "Mobile Software acts as the OS and application layer, ensuring users aren't tied to a fixed location.",
    ],
    compare: {
      headers: ["Concept", "Description", "Key Elements"],
      rows: [
        ["Communication", "Infrastructure for data transfer", "Protocols, bandwidth, unguided media"],
        ["Hardware", "Physical devices accessing the service", "Smartphones, tablets, PDAs"],
        ["Software", "Operating systems and apps", "Android, iOS, app distribution"],
      ],
    },
    flow: [
      ["Hardware", "Device connects to the network via a receptor medium."],
      ["Software", "OS manages the application request for data."],
      ["Communication", "Signal is transmitted over the air via protocols."],
    ],
  },
  {
    id: "mc-evolution",
    moduleId: "m1",
    unit: "1.3",
    title: "Evolution & Impact",
    color: "violet",
    subtitle: "From 1G analog signals to modern global connectivity.",
    beginner: "Mobile networks evolved from basic voice calls in the 80s to high-speed data that powers the modern internet. This mobility brings immense freedom but also new health and social challenges.",
    example: "The shift from 1G's basic analog voice to 4G LTE's high-speed broadband enabled the modern app economy, like video streaming and ridesharing.",
    terms: [
      "1G Systems",
      "2G & GSM",
      "EDGE",
      "4G LTE",
      "Electromagnetic Radiation",
      "HEV Light"
    ],
    keyPoints: [
      "1G (1981) introduced analog signals for basic voice.",
      "2G & GSM brought digital signals and a global standard.",
      "EDGE expanded networks for basic data.",
      "4G LTE enabled high-speed data for massive capacity.",
      "Advantages include location flexibility, time-saving, and enhanced productivity.",
      "Disadvantages include electromagnetic radiation, eye strain, text neck, addiction, and distraction hazards."
    ],
    compare: {
      headers: ["Impact Type", "Aspect", "Detail"],
      rows: [
        ["Advantage", "Productivity", "Work from anywhere, slashing travel time."],
        ["Advantage", "Streamlining", "Secure links, video conferencing."],
        ["Disadvantage", "Health", "HEV light eye strain, text neck, radiation risks."],
        ["Disadvantage", "Psycho-Social", "Addiction, disconnection from reality, distraction hazards."],
      ],
    },
    flow: [
      ["Voice", "1G analog basic communication."],
      ["Digital", "2G/GSM introduces digital voice and basic SMS."],
      ["Data", "EDGE brings basic data transfer."],
      ["Broadband", "4G LTE powers high-speed internet and the app economy."],
    ],
  },
  {
    id: "es6-basics",
    moduleId: "m2",
    unit: "2.1",
    title: "ES6 Basics: History & Scoping",
    color: "amber",
    subtitle: "ECMAScript standard and modern variable declarations.",
    beginner: "JavaScript was standardized by ECMA in 1997. ES6 (2015) was a massive update that introduced block-scoped variables (let and const) to fix the confusing behavior of the old 'var' keyword.",
    example: "Using 'var' inside a for-loop leaks the variable to the outside function, often causing bugs in timeouts. Using 'let' binds the variable specifically to each iteration of the loop.",
    terms: [
      "ECMAScript",
      "TC39",
      "let",
      "const",
      "Hoisting",
      "Temporal Dead Zone (TDZ)"
    ],
    keyPoints: [
      "JS was created in 1995 (Mocha/LiveScript) and standardized as ECMAScript in 1997.",
      "TC39 is the committee that authors the ECMAScript specification.",
      "var is function-scoped; let and const are block-scoped.",
      "const variables cannot be reassigned, but the objects they hold can be mutated (use Object.freeze to lock).",
      "Hoisting moves declarations to the top. let/const are hoisted but not initialized, resulting in the Temporal Dead Zone (TDZ)."
    ],
    compare: {
      headers: ["Keyword", "Scope", "Reassignment"],
      rows: [
        ["var", "Function", "Allowed"],
        ["let", "Block", "Allowed"],
        ["const", "Block", "Prevented (but objects are mutable)"],
      ],
    },
    flow: [
      ["Proposal", "TC39 moves an idea through stages (Strawman to Finished)."],
      ["Declare", "Use const by default, let if rebinding is needed."],
      ["Scope", "Variables stay inside their curly braces {}. "],
    ],
  },
  {
    id: "es6-functions",
    moduleId: "m2",
    unit: "2.2",
    title: "Arrow Functions & Iteration",
    color: "green",
    subtitle: "Concise syntax, lexical 'this', and the for...of loop.",
    beginner: "Arrow functions let you write shorter code and fix the notorious 'this' keyword problem by picking up 'this' from their surroundings instead of creating a new context.",
    example: "Inside a setTimeout within a class method, a traditional function loses the class 'this' (it points to Window). An arrow function remembers the class 'this'.",
    terms: [
      "Arrow Function",
      "Lexical this",
      "Implicit Return",
      "for...of",
      "Default Arguments"
    ],
    keyPoints: [
      "Arrow functions drop the 'function' keyword and add '=>'.",
      "They have implicit returns when dropping curly braces.",
      "Arrow functions inherit 'this' from their lexical scope, removing the need for .bind(this).",
      "Do NOT use arrow functions for DOM event listeners if you need 'this' to point to the clicked element.",
      "for...of loop makes iterating over arrays, strings, and NodeLists trivial without index counters.",
      "Default arguments allow falling back to a default value right in the function signature."
    ],
    compare: {
      headers: ["Feature", "Traditional", "ES6"],
      rows: [
        ["Function", "function() { return 1; }", "() => 1"],
        ["Context", "this changes based on caller", "this is inherited lexically"],
        ["Looping", "for (var i=0; i<x; i++)", "for (const item of items)"],
        ["Defaults", "if (x === undefined) x = 10;", "function(x = 10)"],
      ],
    },
    flow: [
      ["Define", "Use () => {} syntax for callbacks."],
      ["Return", "Drop braces for implicit one-liners."],
      ["Iterate", "Use for...of to loop through the data directly."],
    ],
  },
  {
    id: "es6-objects",
    moduleId: "m2",
    unit: "2.3",
    title: "Destructuring, Spread, and Rest",
    color: "rose",
    subtitle: "Unpacking data and handling variable arguments.",
    beginner: "Destructuring lets you extract multiple properties from an object or array into standalone variables in a single line. Spread and Rest use the '...' syntax to unpack or pack arrays.",
    example: "Instead of writing `const name = user.name; const age = user.age;`, you can just write `const { name, age } = user;`.",
    terms: [
      "Destructuring",
      "Spread Operator",
      "Rest Parameter",
      "Template Literals",
      "Enhanced Object Literals"
    ],
    keyPoints: [
      "Object destructuring matches keys; array destructuring matches positions.",
      "You can rename variables during destructuring (`first: fName`) and set defaults (`width = 200`).",
      "The Spread Operator (...) expands an iterable into individual elements (great for combining or copying arrays).",
      "The Rest Parameter (...) gathers multiple arguments into a single array inside function parameters.",
      "Template literals use backticks (`) for multi-line strings and variable interpolation (${val}).",
      "Enhanced Object Literals allow dropping the value if it matches the key name (`{ name }` instead of `{ name: name }`)."
    ],
    compare: {
      headers: ["Syntax", "Usage", "Example"],
      rows: [
        ["Destructuring", "Extract values", "const { x } = obj;"],
        ["Spread", "Expand array/object", "const arr = [...oldArr, 4];"],
        ["Rest", "Gather arguments", "function sum(...numbers)"],
        ["Template Lit", "Interpolation", "`Hello ${name}`"],
      ],
    },
    flow: [
      ["Extract", "Destructure what you need from complex objects."],
      ["Combine", "Use Spread to merge defaults with new config objects."],
      ["Format", "Use Template Literals to cleanly output the final string."],
    ],
  },
  {
    id: "es6-async",
    moduleId: "m2",
    unit: "2.4",
    title: "Promises, Async/Await & Classes",
    color: "blue",
    subtitle: "Handling asynchronous code and object-oriented patterns.",
    beginner: "Promises are like getting a buzzer at a busy restaurant; you can do other things until the buzzer rings. Async/await makes this asynchronous wait look like regular top-to-bottom code.",
    example: "Instead of chaining `.then()` multiple times for an API request, you simply `const res = await fetch(url);` inside an async function.",
    terms: [
      "Promise",
      "resolve / reject",
      ".then() / .catch()",
      "async / await",
      "class",
      "constructor"
    ],
    keyPoints: [
      "A Promise represents the eventual completion or failure of an asynchronous operation.",
      "fetch() API natively returns a Promise.",
      "Create custom promises with `new Promise((resolve, reject) => { ... })`.",
      "async/await (ES8) is syntactic sugar over Promises, allowing linear-looking code.",
      "ES6 Classes are syntactic sugar over prototype-based inheritance.",
      "Use `class`, `constructor()`, and `extends` for subclasses, calling `super()` to inherit."
    ],
    compare: {
      headers: ["Pattern", "Strengths", "Weaknesses"],
      rows: [
        ["Callbacks", "Simple for basic tasks", "Callback hell / Pyramids of doom"],
        ["Promises", "Chainable, clear error handling", "Syntax can get verbose with many .then()"],
        ["Async/Await", "Reads like synchronous code", "Requires async wrapper function"],
        ["ES6 Classes", "Familiar OOP syntax", "Hides the true prototypal nature of JS"],
      ],
    },
    flow: [
      ["Request", "Initiate a Promise (e.g., fetch API)."],
      ["Wait", "Use await to pause execution until the Promise resolves."],
      ["Handle", "Process the resolved data or catch the rejected error."],
      ["Structure", "Wrap complex business logic into an ES6 Class."],
    ],
  },
  {
    id: "web-form-foundations",
    moduleId: "m3",
    unit: "3.1",
    estimatedMinutes: 35,
    title: "Mobile-First HTML Form Foundations",
    color: "cyan",
    subtitle: "Build semantic controls that work with touch, keyboards, and assistive technology.",
    beginner: "A form is a conversation with the browser. Labels ask clear questions, inputs give users a place to answer, and useful attributes help phones show the right keyboard or saved information.",
    example: "A registration form pairs every visible label with an input, uses name for submission keys, and keeps an action URL as a non-JavaScript fallback.",
    objectives: [
      "Build a semantic registration form with explicit labels and named controls.",
      "Choose input types, autocomplete tokens, and keyboard hints for mobile users.",
      "Explain how progressive enhancement keeps a form useful when JavaScript fails.",
    ],
    terms: ["Semantic Form", "Accessible Name", "autocomplete", "inputmode"],
    keyPoints: [
      "A label for value must match the input id; name provides the submission key.",
      "Placeholders are examples, not replacements for persistent labels.",
      "Input types add semantics and constraints; inputmode only hints at a virtual keyboard.",
      "A deferred script can enhance a form without making HTML parsing depend on script placement.",
    ],
    compare: {
      headers: ["Attribute", "Purpose", "Mobile benefit"],
      rows: [
        ["id + label for", "Connect visible text to a control", "Larger tap area and accessible name"],
        ["name", "Define the submitted key", "Reliable FormData extraction"],
        ["type", "Add input semantics and validation", "Suitable keyboard where supported"],
        ["autocomplete", "Identify expected personal data", "Less typing and memory load"],
      ],
    },
    flow: [
      ["Structure", "Group related controls in a form."],
      ["Label", "Connect visible instructions to each control."],
      ["Optimize", "Add types, autocomplete, and keyboard hints."],
      ["Enhance", "Load behavior with a deferred script."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Accessible registration form",
        language: "html",
        code: `<form id="registerForm" action="/register" method="post">
  <label for="username">Username</label>
  <input id="username" name="username" autocomplete="username" required>

  <label for="email">Email address</label>
  <input id="email" name="email" type="email" autocomplete="email" required>

  <fieldset>
    <legend>Topics</legend>
    <label><input type="checkbox" name="topics" value="apps"> Apps</label>
    <label><input type="checkbox" name="topics" value="security"> Security</label>
  </fieldset>

  <button type="submit">Create account</button>
</form>
<div id="outputMessage" role="status" aria-live="polite"></div>
<script src="app.js" defer><\/script>`,
        caption: "The action preserves a fallback path; JavaScript progressively enhances it.",
      },
      { kind: "callout", tone: "warning", title: "Common mistake", text: "An id can connect a label and support DOM selection, but a control without name is omitted from FormData." },
      { kind: "callout", tone: "note", title: "Predict before revealing", text: "A placeholder disappears during typing, so it cannot replace a persistent visible label." },
    ],
    sources: [sources.labels, sources.validation],
  },
  {
    id: "web-formdata",
    moduleId: "m3",
    unit: "3.2",
    estimatedMinutes: 45,
    title: "Event-Driven JavaScript and FormData",
    color: "amber",
    subtitle: "Handle every submission path and preserve repeated values.",
    beginner: "JavaScript waits for the form to submit, pauses the browser's normal navigation, and packages eligible named answers into FormData. Clicking the button and pressing Enter reach the same handler.",
    example: "Two checked topic boxes share one name, so getAll('topics') preserves both values while get('topics') returns only the first.",
    objectives: [
      "Handle native submission paths with one form-level submit listener.",
      "Extract single and repeated FormData entries without data loss.",
      "Choose const, let, and arrow functions based on their actual semantics.",
    ],
    terms: ["Submit Event", "preventDefault()", "FormData", "Successful Form Control", "Object.fromEntries()"],
    keyPoints: [
      "var remains valid JavaScript, but const and let provide predictable block scope for new code.",
      "Arrow functions close over surrounding this; they are not universal replacements for traditional functions.",
      "Listen for submit on the form so button and Enter-key submission share one path.",
      "Disabled, unnamed, and unchecked controls are not successful controls.",
      "Use getAll() for repeated names; Object.fromEntries() cannot preserve duplicate keys.",
    ],
    compare: {
      headers: ["Control", "Included?", "Reason"],
      rows: [
        ["Named text input", "Yes", "Successful named control"],
        ["Disabled input", "No", "Disabled controls are excluded"],
        ["Unnamed input", "No", "No submission key exists"],
        ["Repeated checkbox name", "Yes, multiple", "Read with getAll()"],
      ],
    },
    flow: [
      ["Validate", "The browser checks native constraints."],
      ["Submit", "The valid form emits one submit event."],
      ["Intercept", "preventDefault replaces navigation only when needed."],
      ["Extract", "FormData snapshots successful controls."],
      ["Process", "Application rules produce feedback."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Capture repeated form values",
        language: "javascript",
        code: `const form = document.querySelector('#registerForm');
const output = document.querySelector('#outputMessage');

if (form instanceof HTMLFormElement && output) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form, event.submitter);
    const username = String(formData.get('username') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const topics = formData.getAll('topics').map(String);
    console.log({ username, email, topics });
  });
}`,
        caption: "Runtime guards handle missing elements; getAll retains every selected topic.",
      },
      { kind: "callout", tone: "warning", title: "Duplicate-key trap", text: "Object.fromEntries is concise only when every control name is unique. Use getAll or explicit accumulation for checkbox groups." },
      { kind: "callout", tone: "note", title: "Predict before revealing", text: "Pressing Enter in a text field reaches the form submit listener, even though the submit button was not clicked." },
    ],
    sources: [sources.javascript, sources.submit, sources.formData],
  },
  {
    id: "web-form-safety",
    moduleId: "m3",
    unit: "3.3",
    estimatedMinutes: 45,
    title: "Validation, Accessibility, and Safe DOM Output",
    color: "rose",
    subtitle: "Protect user work, explain recovery, and keep input out of executable HTML.",
    beginner: "A good form points to errors in words, keeps the user's answers, and treats everything typed as text rather than browser instructions.",
    example: "The username <img src=x onerror=alert(1)> must appear literally in a confirmation, not create an image element.",
    objectives: [
      "Separate browser validation, application rules, and server-side trust boundaries.",
      "Provide accessible loading, error, and success feedback without discarding input.",
      "Render user-controlled values as text so they cannot become executable markup.",
    ],
    terms: ["Constraint Validation", "DOM-based XSS", "textContent"],
    keyPoints: [
      "Client-side validation improves feedback but never replaces server validation.",
      "Errors must identify the field and problem in text, not color alone.",
      "Use textContent and createElement for user-controlled strings instead of innerHTML.",
      "Preserve values on failure and reset only after confirmed success.",
      "A role=status live region can announce non-urgent results without stealing focus.",
    ],
    compare: {
      headers: ["State", "Interface response", "Data handling"],
      rows: [
        ["Loading", "Prevent duplicate submission and announce progress", "Keep values"],
        ["Error", "Identify the problem and recovery", "Preserve answers"],
        ["Success", "Announce confirmation", "Reset after success"],
        ["Offline", "Explain the failed connection", "Allow retry"],
      ],
    },
    flow: [
      ["Check", "Run browser and application constraints."],
      ["Protect", "Send requests to a server that validates again."],
      ["Report", "Describe status and errors in text."],
      ["Render", "Insert untrusted values with textContent."],
      ["Recover", "Preserve or reset based on the result."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Safe confirmation output",
        language: "javascript",
        code: `const message = document.createElement('p');
message.textContent = \`Welcome, \${username}. We will contact \${email}.\`;
output.replaceChildren(message);

// Reset only after the simulated operation succeeds.
form.reset();`,
        caption: "textContent keeps the interpolated values in a text context.",
      },
      { kind: "callout", tone: "security", title: "Security boundary", text: "If user input creates an element or runs an event handler, the application has used an unsafe HTML sink." },
      { kind: "callout", tone: "note", title: "Predict before revealing", text: "preventDefault changes navigation behavior; it does not make client data trustworthy." },
    ],
    sources: [sources.validation, sources.errors, sources.xss],
  },
  {
    id: "js-engines",
    moduleId: "m4",
    unit: "4.1",
    estimatedMinutes: 40,
    title: "JavaScript Engines and Execution",
    color: "teal",
    subtitle: "Parse, compile, profile, optimise - while the page is already running.",
    beginner: "Your script is not read line by line from the text you wrote. An engine inside the browser turns it into machine code, watches which parts run often, and rewrites those parts to be faster while the page is still running.",
    example: "Chrome and Opera run V8, Firefox runs SpiderMonkey, and Safari runs JavaScriptCore. The same script gets a different optimiser in each, which is why feature-support tables are written per engine.",
    objectives: [
      "Name the stages an engine takes a script through and say why execution starts before optimisation finishes.",
      "Distinguish ECMAScript the specification from JavaScript in a host environment.",
      "State what in-browser JavaScript may not do, and why each restriction exists.",
      "Define an origin precisely and predict what the same-origin policy blocks.",
    ],
    terms: ["JavaScript Engine", "Just-in-Time Compilation", "Abstract Syntax Tree", "Deoptimisation", "Origin", "Same-Origin Policy"],
    keyPoints: [
      "The pipeline is parse to an abstract syntax tree, baseline compile, profile at runtime, then optimise hot functions.",
      "Execution begins before optimisation, which is why a page becomes interactive quickly and then gets faster.",
      "If a later call violates the types an optimised function assumed, the engine deoptimises back to the general version.",
      "ECMAScript is the standard maintained by TC39; JavaScript is that language plus whatever objects the host adds - DOM and fetch in a browser, files and sockets in Node.js.",
      "An origin is the triple of scheme, host, and port; any difference in any one of the three is a different origin.",
      "In-browser JavaScript cannot read arbitrary files, cannot use camera or microphone or location without permission, and cannot read a document from another origin.",
    ],
    compare: {
      headers: ["Stage", "What it produces", "Why it exists"],
      rows: [
        ["Parse", "Abstract syntax tree", "Turn text into a structure the engine can walk"],
        ["Baseline compile", "Bytecode, quickly", "Start running without waiting for optimisation"],
        ["Profile", "Type and call-frequency data", "Find the functions worth optimising"],
        ["Optimise", "Specialised machine code", "Near-native speed for steady-state work"],
        ["Deoptimise", "Back to the general version", "An assumption about types turned out false"],
      ],
    },
    flow: [
      ["Source", "The script arrives with the page."],
      ["Parse", "The engine builds an abstract syntax tree."],
      ["Baseline", "Fast bytecode so execution can begin immediately."],
      ["Profile", "The engine watches hot functions and their argument types."],
      ["Optimise", "Hot functions are recompiled, and deoptimised if the types change."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "What counts as the same origin",
        language: "javascript",
        code: `// An origin is scheme + host + port. All three must match.

// https://example.com/a  vs  https://example.com/b   -> SAME origin
// https://example.com    vs  http://example.com      -> different scheme
// https://example.com    vs  https://api.example.com -> different host
// https://example.com    vs  https://example.com:8443-> different port

// A cross-origin read only works if the SERVER opts in:
//   Access-Control-Allow-Origin: https://example.com
// The restriction is enforced by the browser, not by the server.`,
        caption: "Subdomains are different hosts. This is the rule that stops a page you open from reading your webmail in another tab.",
      },
      { kind: "callout", tone: "note", title: "Why deoptimisation is not a failure", text: "The engine speculated that a function always receives numbers, compiled for that, then saw a string. Backing out is the correct response - it is what keeps a dynamically typed language safe to optimise aggressively." },
    ],
    sources: [sources.ecma262, sources.v8, sources.sameOrigin],
  },
  {
    id: "js-types",
    moduleId: "m4",
    unit: "4.2",
    estimatedMinutes: 45,
    title: "Data Types, Variables, and Coercion",
    color: "amber",
    subtitle: "Types belong to values, not to variables - and the language will convert them behind your back.",
    beginner: "A JavaScript variable does not have a type; the value inside it does, and it can change. That flexibility is convenient until the language quietly converts one type into another and a comparison gives an answer you did not expect.",
    example: "'5' == 5 is true because loose equality converts before comparing. '5' === 5 is false because strict equality checks the type first and never converts.",
    objectives: [
      "Separate primitive values from objects and predict how each compares.",
      "Distinguish null from undefined by how each comes to exist.",
      "Predict the result of == versus === and justify preferring strict equality.",
      "Explain what const actually prevents.",
    ],
    terms: ["Dynamic Typing", "Primitive Value", "Type Coercion", "Strict Equality", "NaN", "typeof"],
    keyPoints: [
      "Primitives are string, number, boolean, null, undefined, symbol, and bigint. They are immutable and compare by value.",
      "Everything else is an object - arrays and functions included - and objects compare by reference, so two identical-looking arrays are not equal.",
      "undefined means declared but never assigned; null is an assigned value meaning deliberately empty.",
      "typeof null returns 'object' - a bug preserved since 1995 because fixing it would break existing pages.",
      "Numbers are IEEE 754 doubles, so 0.1 + 0.2 is not exactly 0.3 and NaN is the only value not equal to itself.",
      "const prevents reassigning the binding, not mutating the value; a const array can still be pushed to.",
    ],
    compare: {
      headers: ["Expression", "Result", "Why"],
      rows: [
        ["'5' == 5", "true", "Loose equality coerces to a common type first"],
        ["'5' === 5", "false", "Strict equality compares type before value"],
        ["typeof null", "'object'", "A preserved 1995 bug; null is a primitive"],
        ["NaN === NaN", "false", "NaN is not equal to itself; use Number.isNaN"],
        ["[1,2] === [1,2]", "false", "Objects compare by reference, not contents"],
      ],
    },
    flow: [
      ["Declare", "A name is bound; let and const enter the temporal dead zone."],
      ["Assign", "A value of any type may be stored under that name."],
      ["Compare", "== converts first; === checks type first and never converts."],
      ["Reassign", "const forbids rebinding; the value it points at may still change."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Coercion, the two absences, and floating point",
        language: "javascript",
        code: `'5' == 5;          // true  - == converts before comparing
'5' === 5;         // false - === compares type first

typeof undefined;  // 'undefined' - declared, never assigned
typeof null;       // 'object'    - a preserved bug, not a real object
null == undefined; // true  - == treats both as "empty"
null === undefined;// false - different types

NaN === NaN;             // false
Number.isNaN(NaN);       // true  - which is why this function exists

0.1 + 0.2 === 0.3;       // false - IEEE 754 doubles
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;  // true - compare with tolerance`,
        caption: "Every line here is specification-correct. Using === by default removes the first class of surprise; NaN and floating point need explicit handling either way.",
      },
      {
        kind: "code",
        title: "What const actually freezes",
        language: "javascript",
        code: `const list = [1, 2];
list.push(3);      // allowed - the VALUE may change
// list = [];      // TypeError - the BINDING may not

console.log(a);    // undefined - var is hoisted and initialised
var a = 1;

console.log(b);    // ReferenceError - let is in the temporal dead zone
let b = 1;`,
        caption: "The temporal dead zone turns a silent undefined into an immediate error, which is the whole reason let and const are preferred over var.",
      },
      { kind: "callout", tone: "warning", title: "The one that catches everyone", text: "An empty array and an empty object are both truthy. Testing if (items) asks whether the array exists, not whether it holds anything - test items.length === 0 instead." },
    ],
    sources: [sources.equality, sources.javascript, sources.ecma262],
  },
  {
    id: "js-control-flow",
    moduleId: "m4",
    unit: "4.3",
    estimatedMinutes: 40,
    title: "Control Flow and Loops",
    color: "green",
    subtitle: "Branching, repetition, and choosing the loop that states your intent.",
    beginner: "Control flow is how a program chooses what to do next. An if statement picks a branch, a loop repeats work, and the tricky part is knowing which values JavaScript treats as true or false.",
    example: "for...of on an array gives you the values in order. for...in on the same array gives you '0', '1', '2' as strings, includes inherited properties, and does not guarantee order - it was designed for objects.",
    objectives: [
      "List the falsy values and predict how a non-boolean condition is evaluated.",
      "Choose between an if-else chain and a switch, and explain the cost of a missing break.",
      "Choose correctly between for, for...in, and for...of for a given collection.",
      "Express an iteration with map, filter, or reduce when that states intent more clearly.",
    ],
    terms: ["Truthy and Falsy", "Switch Fall-Through", "for...in", "for...of", "map / filter / reduce"],
    keyPoints: [
      "The falsy values are false, 0, -0, 0n, the empty string, null, undefined, and NaN. Everything else is truthy.",
      "An if...else if...else chain is simply a series of if statements, each nested in the previous else.",
      "switch compares with strict equality; omitting break falls through into the next case, which is occasionally deliberate and usually a bug.",
      "A for loop initialises once, tests before every iteration, and updates after the body - so it can run zero times.",
      "while tests before the body; do...while runs the body once before testing.",
      "map transforms, filter selects, and reduce folds - each says what the loop is for in a way a bare for loop does not.",
    ],
    compare: {
      headers: ["Loop", "Yields", "Use it for"],
      rows: [
        ["for (let i = 0; ...)", "An index you control", "Counting, stepping, reverse iteration"],
        ["for...in", "Property keys, as strings", "Objects - not arrays"],
        ["for...of", "Values, in order", "Arrays, strings, Maps, Sets"],
        ["forEach", "Each element, no result", "A side effect per element"],
        ["map / filter / reduce", "A new array or one value", "Transform, select, or fold"],
      ],
    },
    flow: [
      ["Initialise", "let i = 0 - runs once, before anything else."],
      ["Test", "Evaluated before every iteration, including the first."],
      ["Body", "The work being repeated."],
      ["Update", "i++ - runs after the body, before the next test."],
      ["Exit", "The test fails and control leaves the loop."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Choosing the right loop",
        language: "javascript",
        code: `const scores = [10, 20, 30];

for (const key in scores) {
  console.log(key, typeof key);   // '0' string, '1' string, '2' string
}                                 // keys as strings - meant for objects

for (const value of scores) {
  console.log(value);             // 10, 20, 30 - values, in order
}                                 // the right choice for an array

const doubled = scores.map(n => n * 2);                 // [20, 40, 60]
const large   = scores.filter(n => n > 15);             // [20, 30]
const total   = scores.reduce((sum, n) => sum + n, 0);  // 60`,
        caption: "for...in includes inherited properties and yields string keys, so it belongs on objects. The array methods make the purpose of the loop visible at a glance.",
      },
      { kind: "callout", tone: "note", title: "switch versus a long else-if chain", text: "Use switch when you are testing one value against several constants; it reads more clearly and the intent is obvious. Use an else-if chain when each branch tests a different condition, because switch can only compare one subject." },
    ],
    sources: [sources.loops, sources.javascript],
  },
  {
    id: "js-functions-objects",
    moduleId: "m4",
    unit: "4.4",
    estimatedMinutes: 50,
    title: "Functions, Objects, and this",
    color: "rose",
    subtitle: "What this refers to is decided by the call, not by the code.",
    beginner: "A function is reusable code you can call by name. An object groups related data with the functions that work on it. The confusing part is the word this, because what it refers to depends on how the function was called, not on where it was written.",
    example: "Inside a method, a plain callback passed to forEach loses this. An arrow function has no this of its own and inherits the method's, which is exactly why arrows are the right choice for callbacks.",
    objectives: [
      "Distinguish parameters from arguments and explain why JavaScript does not enforce arity.",
      "Predict the value of this from the call site for all four invocation forms.",
      "Explain why an arrow function is right for a callback and wrong for a method.",
      "Describe how prototype chain lookup implements inheritance.",
    ],
    terms: ["Parameter vs Argument", "Closure", "this Binding", "Prototype Chain", "Constructor Function"],
    keyPoints: [
      "Function declarations are hoisted in full and may be called before their definition line; function expressions are not.",
      "Parameters are the names in the definition; arguments are the values at the call. Missing parameters are undefined and extra arguments are ignored.",
      "return sends a value back and ends the function immediately; a function with no return returns undefined.",
      "A closure is a function that keeps access to the variables of the scope where it was created, even after that scope finished.",
      "this is decided by the call site: the object before the dot, undefined for a plain call in strict mode, the new object under new, or whatever call/apply/bind supplied.",
      "An ES6 class is syntax over the same prototype mechanism - methods still live on the prototype and are shared by every instance rather than copied.",
    ],
    compare: {
      headers: ["Call form", "What this becomes", "Typical use"],
      rows: [
        ["obj.fn()", "obj - the object before the dot", "A method"],
        ["fn()", "undefined in strict mode", "A plain helper function"],
        ["new Fn()", "The newly constructed object", "A constructor"],
        ["fn.call(x) / bind(x)", "x - whatever you supplied", "Borrowing or fixing a receiver"],
        ["() => {}", "No own this; inherited lexically", "A callback inside a method"],
      ],
    },
    flow: [
      ["Define", "A declaration, an expression, or an arrow."],
      ["Call", "The call site decides what this will be."],
      ["Execute", "Parameters bind to arguments; the body runs."],
      ["Return", "A value goes back, or undefined if none was given."],
      ["Close over", "Any inner function keeps access to the surrounding scope."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "The classic this bug, and two fixes",
        language: "javascript",
        code: `const counter = {
  count: 0,
  items: ['a', 'b', 'c'],

  broken() {
    this.items.forEach(function () {
      this.count++;      // 'this' is NOT counter - plain call, undefined
    });                  // TypeError in strict mode
  },

  arrowFix() {
    this.items.forEach(() => {
      this.count++;      // arrow inherits this from arrowFix
    });
  },

  bindFix() {
    this.items.forEach(function () {
      this.count++;
    }.bind(this));       // explicit binding also works
  },
};`,
        caption: "The arrow is preferred because the intent is local: use the same this as the surrounding method. Note that arrowFix itself must stay a normal method - a method needs its own this.",
      },
      {
        kind: "code",
        title: "Constructor function and class build the same thing",
        language: "javascript",
        code: `function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.describe = function () {
  return this.title + ' by ' + this.author;
};

class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  describe() { return this.title + ' by ' + this.author; }
}

// In BOTH cases describe lives on the prototype and is shared by every
// instance. The class form is syntax, not a different object system.`,
        caption: "Property lookup walks from the object to its prototype and onward until the property is found or the chain ends. That walk is how inheritance works in JavaScript.",
      },
      { kind: "callout", tone: "warning", title: "The with statement", text: "Older tutorials demonstrate a with block as shorthand for repeatedly naming an object. It is unusable in modern code: the specification forbids it in strict mode, and every module and class body is strict by default. Destructuring - const { title, author } = book - expresses the same intent safely." },
    ],
    sources: [sources.thisRef, sources.javascript, sources.ecma262],
  },
  {
    id: "web-pwa",
    moduleId: "m5",
    unit: "5.1",
    estimatedMinutes: 45,
    title: "Progressive Web Apps and Offline",
    color: "violet",
    subtitle: "A programmable network proxy is what makes offline possible.",
    beginner: "A progressive web app is a website that behaves like an installed app: it has an icon, opens without browser chrome, and keeps working when the network does not. A service worker is the piece that makes the offline part possible.",
    example: "A news feed uses stale-while-revalidate: the cached articles paint instantly while a fresh copy is fetched in the background. An account balance uses network-only, because a stale figure is worse than an honest error.",
    objectives: [
      "Explain what the manifest and the service worker each contribute to an installable app.",
      "Choose a caching strategy from the freshness requirement of the asset.",
      "Explain why a service worker must hold no state in memory.",
      "Describe how background sync changes what happens to a form submitted offline.",
    ],
    terms: ["Progressive Web App", "Service Worker", "Web App Manifest", "Caching Strategy", "Background Sync", "IndexedDB"],
    keyPoints: [
      "A web app manifest is JSON declaring name, icons, theme colour, start URL, and display mode - it is what lets the browser offer installation.",
      "A service worker runs in the background with no DOM access and acts as a programmable network proxy for pages in its scope.",
      "It requires a secure context: HTTPS, or localhost for development.",
      "The browser terminates it when idle and restarts it on the next event, so it must keep no state in memory.",
      "Background sync defers a failed request until connectivity returns, so a form submitted in a tunnel is delivered without the user retrying.",
      "IndexedDB provides structured client-side storage far larger than localStorage, and is asynchronous so it does not block the main thread.",
    ],
    compare: {
      headers: ["Strategy", "Behaviour", "Right for"],
      rows: [
        ["Cache-first", "Serve from cache, network only on a miss", "Fingerprinted CSS, JS, fonts, icons"],
        ["Network-first", "Try the network, fall back to cache", "Content that must be fresh"],
        ["Stale-while-revalidate", "Serve cached now, refresh in the background", "Feeds, article lists, avatars"],
        ["Network-only", "Never serve a cached answer", "Authentication and payment"],
        ["Cache-only", "Never touch the network", "Assets that genuinely never change"],
      ],
    },
    flow: [
      ["Register", "The page registers the service worker over HTTPS."],
      ["Install", "The worker pre-caches the shell it needs to boot offline."],
      ["Activate", "Old caches are cleaned up and the worker takes control."],
      ["Intercept", "Every request from pages in scope raises a fetch event."],
      ["Respond", "The worker serves from cache, from network, or a fallback."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Stale-while-revalidate in a fetch handler",
        language: "javascript",
        code: `self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('v1').then(async (cache) => {
      const cached = await cache.match(event.request);

      // Refresh in the background whether or not we had a hit.
      const network = fetch(event.request).then((response) => {
        cache.put(event.request, response.clone());
        return response;
      });

      // Serve the cached copy instantly if we have one; otherwise wait.
      return cached || network;
    })
  );
});`,
        caption: "The user sees content immediately and the cache is updated for next time. The trade-off is explicit: the first render may be one revision behind.",
      },
      { kind: "callout", tone: "note", title: "The design principle", text: "The network is an enhancement, not a prerequisite. A well-built mobile application renders, allows interaction, and queues work whether or not a connection exists - and tells the user honestly which of those is happening." },
      { kind: "callout", tone: "security", title: "Secure context is not optional", text: "Service workers, geolocation, and camera access all require HTTPS by design. A service worker can rewrite every response a site returns, so allowing one over plain HTTP would hand that power to anyone on the network path." },
    ],
    sources: [sources.serviceWorkers, sources.manifest, sources.vitals],
  },
  {
    id: "web-performance",
    moduleId: "m5",
    unit: "5.2",
    estimatedMinutes: 50,
    title: "Performance, Responsiveness, and Security",
    color: "blue",
    subtitle: "Three measurable numbers, and the security facts that carry weight.",
    beginner: "A mobile page has to paint quickly, respond to a tap without lag, and not jump around while loading. Those three things have agreed names, agreed measurements, and agreed targets.",
    example: "An image without width and height attributes lets the page reflow when it finally loads. That reflow is exactly what Cumulative Layout Shift measures, and declaring the dimensions costs nothing.",
    objectives: [
      "Name each Core Web Vital, what it measures, and its good threshold.",
      "Explain why the metrics are assessed at the 75th percentile rather than the mean.",
      "Distinguish responsive from adaptive layout and justify mobile-first ordering.",
      "State why client-side storage cannot be treated as a secret store.",
    ],
    terms: ["Largest Contentful Paint", "Interaction to Next Paint", "Cumulative Layout Shift", "Mobile-First CSS", "Secure Context"],
    keyPoints: [
      "Largest Contentful Paint measures loading; good is 2.5 seconds or less.",
      "Interaction to Next Paint measures responsiveness across the whole page lifetime; good is 200 milliseconds or less. It replaced First Input Delay as a stable Core Web Vital in 2024.",
      "Cumulative Layout Shift measures visual stability; good is 0.1 or less.",
      "All three are assessed at the 75th percentile of real page loads, because an average conceals the slow devices mobile users actually carry.",
      "Responsive design adapts continuously with fluid grids and media queries; adaptive design serves distinct layouts at fixed breakpoints.",
      "Mobile-first means writing the small-screen rules as the base and layering enhancements with min-width queries.",
      "localStorage, IndexedDB, and caches are readable by any script running on the origin, so tokens need short lifetimes and server-side revocation rather than obfuscation.",
    ],
    compare: {
      headers: ["Metric", "Measures", "Good threshold"],
      rows: [
        ["LCP", "Loading - when main content appears", "2.5 s or less"],
        ["INP", "Responsiveness across the page lifetime", "200 ms or less"],
        ["CLS", "Visual stability - unexpected movement", "0.1 or less"],
        ["All three", "Assessed at", "75th percentile of real loads"],
      ],
    },
    flow: [
      ["Measure", "Collect real-user data, not a lab average."],
      ["Rank", "Take the 75th percentile so slow devices still count."],
      ["Diagnose", "Attribute each failing metric to a concrete cause."],
      ["Fix", "Reserve image space, defer work, shrink the critical path."],
      ["Protect", "HTTPS, in-context permissions, and no secrets in client storage."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Mobile-first CSS, and reserving space to protect CLS",
        language: "html",
        code: `<!-- width and height let the browser reserve space before the image
     loads, which is the single most effective fix for layout shift. -->
<img src="hero.avif" width="1200" height="675" alt="" loading="lazy">

<style>
  /* Base rules are the SMALL-screen rules - no media query needed. */
  .grid { display: grid; gap: 1rem; grid-template-columns: 1fr; }

  /* Enhancements layer upward with min-width. */
  @media (min-width: 48rem) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* A fingertip is far coarser than a pointer. */
  .btn { min-height: 44px; min-width: 44px; }
</style>`,
        caption: "Writing the small-screen case as the base keeps desktop assumptions out of the mobile path entirely, and usually produces less CSS overall.",
      },
      { kind: "callout", tone: "security", title: "Client storage is not a secret store", text: "Anything in localStorage, IndexedDB, or a cache is readable by any script that achieves execution on the origin - including one injected through an XSS defect. The answer is short-lived tokens and server-side revocation, not a cleverer hiding place." },
      { kind: "callout", tone: "note", title: "Ask for permission in context", text: "Request camera, location, or notification access at the moment the capability is needed, not on first launch. A prompt with no visible purpose is usually declined, and a declined permission is far harder to recover than an unasked one." },
    ],
    sources: [sources.vitals, sources.responsive, sources.wcag, sources.permissions],
  },
];

const glossary = [
  ["Ubiquitous Connectivity", "The concept that internet and network access is available anywhere at any time."],
  ["Full-Duplex", "Operation capable of sending and receiving signals simultaneously."],
  ["Receptor Medium", "The hardware capability to sense and receive radio signals."],
  ["ECMAScript", "The official standardized language specification that JavaScript implements."],
  ["TC39", "The Ecma International committee responsible for evolving ECMAScript."],
  ["Temporal Dead Zone (TDZ)", "The time between a variable entering scope and being initialized, where accessing it throws an error."],
  ["Hoisting", "JavaScript mechanism where variable and function declarations are moved to the top of their scope."],
  ["Lexical this", "When an arrow function inherits 'this' from its surrounding context rather than creating its own."],
  ["Promise", "An object representing the eventual completion or failure of an asynchronous operation."],
  ["Destructuring", "Syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables."],
  ["Semantic Form", "A form built with native HTML elements whose structure communicates the purpose and relationships of its controls."],
  ["Accessible Name", "The programmatic name assistive technology uses to identify an interface control."],
  ["autocomplete", "An attribute that identifies a field's expected purpose so the browser can offer appropriate saved information."],
  ["inputmode", "A hint that asks a mobile browser to show a suitable virtual keyboard without adding validation rules."],
  ["Submit Event", "The form-level event produced by supported submission paths such as a button, Enter key, or requestSubmit()."],
  ["preventDefault()", "An Event method that cancels the browser action associated with an event when application code replaces it."],
  ["FormData", "A browser interface representing key/value entries produced by successful form controls."],
  ["Successful Form Control", "A control eligible to contribute a name/value entry during form submission."],
  ["Object.fromEntries()", "A method that creates an object from key/value pairs but cannot retain repeated values under one key."],
  ["Constraint Validation", "Browser checks driven by input types and attributes such as required, pattern, min, and max."],
  ["DOM-based XSS", "Cross-site scripting caused when client code sends attacker-controlled data into an executable DOM context."],
  ["textContent", "A DOM property that writes text without parsing the value as HTML markup."],
  ["JavaScript Engine", "The program inside a browser that parses, compiles, and executes JavaScript - V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari."],
  ["Just-in-Time Compilation", "Compiling to machine code during execution, profiling hot functions, and re-optimising them for the types actually observed."],
  ["Abstract Syntax Tree", "The structured representation an engine builds from source text before compiling it."],
  ["Deoptimisation", "Discarding optimised machine code when a later call violates the type assumptions it was compiled under."],
  ["Origin", "The triple of scheme, host, and port. Any difference in any one of the three is a different origin."],
  ["Same-Origin Policy", "The browser rule preventing a document from one origin reading the contents of a document from another unless the far side opts in."],
  ["Dynamic Typing", "Types belong to values rather than variables, so the same name may hold a number and later a string."],
  ["Primitive Value", "An immutable value compared by content: string, number, boolean, null, undefined, symbol, bigint."],
  ["Type Coercion", "Automatic conversion of a value to another type, notably by == and by non-boolean conditions."],
  ["Strict Equality", "The === operator, which compares type first and never converts."],
  ["NaN", "The result of an invalid numeric operation, and the only value not equal to itself."],
  ["typeof", "An operator reporting the type of a value; it famously returns 'object' for null."],
  ["Truthy and Falsy", "Falsy values are false, 0, -0, 0n, the empty string, null, undefined, and NaN. Everything else, including an empty array, is truthy."],
  ["Switch Fall-Through", "Execution continuing into the next case because break was omitted."],
  ["for...in", "A loop over enumerable property keys, including inherited ones, yielding strings. Intended for objects."],
  ["for...of", "A loop over the values of any iterable, in order. The correct loop for an array."],
  ["Parameter vs Argument", "Parameters are the names in a function definition; arguments are the values supplied at the call."],
  ["Closure", "A function that keeps access to the variables of the scope where it was created, even after that scope has finished."],
  ["this Binding", "The rule that this is decided by the call site rather than by where the function was written."],
  ["Prototype Chain", "The lookup path from an object to its prototype and onward, which is how inheritance works in JavaScript."],
  ["Constructor Function", "A function invoked with new, where this becomes the newly created object."],
  ["Progressive Web App", "A web application meeting platform criteria for installation and offline operation."],
  ["Service Worker", "A background script with no DOM access acting as a programmable network proxy for pages in its scope."],
  ["Web App Manifest", "A JSON document declaring name, icons, theme colour, start URL, and display mode."],
  ["Caching Strategy", "The rule a service worker applies per request: cache-first, network-first, stale-while-revalidate, cache-only, or network-only."],
  ["Background Sync", "Deferring a failed request until connectivity returns, so offline work is delivered without the user retrying."],
  ["IndexedDB", "Asynchronous structured client-side storage, far larger than localStorage and non-blocking."],
  ["Largest Contentful Paint", "The Core Web Vital for loading; good is 2.5 seconds or less at the 75th percentile."],
  ["Interaction to Next Paint", "The Core Web Vital for responsiveness across the page lifetime; good is 200 milliseconds or less."],
  ["Cumulative Layout Shift", "The Core Web Vital for visual stability; good is 0.1 or less."],
  ["Mobile-First CSS", "Writing small-screen rules as the base and layering enhancements with min-width queries."],
  ["Secure Context", "HTTPS or localhost, required for service workers, geolocation, camera, and other powerful APIs."],
];

const flashcards = [
  { topic: "mc-intro", front: "What does ubiquitous connectivity mean?", back: "Network access is available across locations and contexts rather than being tied to one fixed workstation." },
  { topic: "mc-concepts", front: "What are the three main concepts of Mobile Computing?", back: "Mobile Communication, Mobile Hardware, and Mobile Software." },
  { topic: "mc-evolution", front: "Which network generation introduced digital mobile signals as a global standard?", back: "2G and GSM." },
  { topic: "es6-basics", front: "What is the scope of variables declared with let or const?", back: "Block scope." },
  { topic: "es6-basics", front: "Does const make an object immutable?", back: "No. It prevents rebinding the variable; the object's properties may still change." },
  { topic: "es6-functions", front: "What does lexical this mean for an arrow function?", back: "The arrow closes over this from its surrounding scope instead of receiving a new this from the caller." },
  { topic: "es6-objects", front: "What does spread syntax (...) do?", back: "It expands iterable values or object properties into another literal or call." },
  { topic: "es6-async", front: "What is the synchronous-looking syntax built on Promises?", back: "async and await." },
  { topic: "web-form-foundations", front: "Which two attributes explicitly connect a visible label to an input?", back: "The label for attribute and the input id must match." },
  { topic: "web-form-foundations", front: "What does name contribute that id does not?", back: "name supplies the key used by form submission and FormData." },
  { topic: "web-form-foundations", front: "Does inputmode validate a value?", back: "No. It only hints at a suitable virtual keyboard." },
  { topic: "web-formdata", front: "Why listen for submit on the form instead of click on the button?", back: "It receives supported button, Enter-key, and requestSubmit submission paths." },
  { topic: "web-formdata", front: "Which FormData method preserves every value under a repeated name?", back: "getAll(name)." },
  { topic: "web-formdata", front: "Name three controls FormData omits.", back: "Disabled controls, unnamed controls, and unchecked checkboxes or radio buttons." },
  { topic: "web-form-safety", front: "Why use textContent instead of innerHTML for user input?", back: "textContent displays text; innerHTML parses markup and can create a DOM XSS sink." },
  { topic: "web-form-safety", front: "When should a form reset after an asynchronous operation?", back: "Only after confirmed success." },
  { topic: "web-form-safety", front: "Does browser validation replace server validation?", back: "No. Clients can be modified or bypassed, so servers must validate every request." },
  { topic: "js-engines", front: "Why does a page become interactive quickly and then get faster?", back: "A baseline compiler produces runnable code immediately; a profiler then finds hot functions and an optimising compiler recompiles them for the observed types." },
  { topic: "js-engines", front: "What exactly is an origin?", back: "The triple of scheme, host, and port. Any difference in any one of the three is a different origin." },
  { topic: "js-engines", front: "Name three JavaScript engines and their browsers.", back: "V8 in Chrome and Opera, SpiderMonkey in Firefox, JavaScriptCore in Safari." },
  { topic: "js-types", front: "Why does typeof null return 'object'?", back: "A bug from the first implementation in 1995, preserved deliberately because fixing it would break existing pages. null is a primitive." },
  { topic: "js-types", front: "What does const actually prevent?", back: "Reassignment of the binding, not mutation of the value. A const array can still be pushed to." },
  { topic: "js-types", front: "Why does Number.isNaN exist instead of a comparison?", back: "NaN is the only value in the language not equal to itself, so NaN === NaN is false." },
  { topic: "js-control-flow", front: "Is an empty array truthy or falsy?", back: "Truthy - and so is an empty object. Test items.length === 0 rather than !items." },
  { topic: "js-control-flow", front: "When should you use for...in rather than for...of?", back: "for...in for object property keys; for...of for values of an iterable. On an array, for...in yields string indices and includes inherited properties." },
  { topic: "js-functions-objects", front: "What decides the value of this?", back: "The call site, not where the function was written. Method call, plain call, new, and explicit bind each produce a different this." },
  { topic: "js-functions-objects", front: "Why is an arrow function right for a callback but wrong for a method?", back: "It has no this of its own and inherits lexically - exactly what a callback inside a method needs, and exactly what a method itself must not do." },
  { topic: "web-pwa", front: "Why must a service worker hold no state in memory?", back: "The browser terminates it when idle and restarts it on the next event, so anything kept in variables is lost between events." },
  { topic: "web-pwa", front: "Which caching strategy suits a news feed, and why?", back: "Stale-while-revalidate - the cached copy paints instantly while a fresh copy is fetched in the background." },
  { topic: "web-pwa", front: "What does the web app manifest supply?", back: "Name, icons, theme colour, start URL, and display mode - what the browser needs to offer installation." },
  { topic: "web-performance", front: "Name the three Core Web Vitals and their good thresholds.", back: "LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less - all at the 75th percentile of real page loads." },
  { topic: "web-performance", front: "Can a token be safely hidden in localStorage?", back: "No. Any script running on the origin can read it. Use short lifetimes and server-side revocation instead." },
];

const practiceTests = [
  {
    title: "Module 1 • Mobile Computing Concepts",
    description: "Check the hardware, software, communication, and network-evolution foundations.",
    questions: [
      {
        q: "Which mobile-computing aspect handles protocols, bandwidth, and unguided media?",
        options: ["Mobile Software", "Mobile Hardware", "Mobile Communication", "Mobile Portals"],
        answer: 2,
        explain: "Mobile Communication is the infrastructure that carries data through radio systems and protocols.",
      },
    ],
  },
  {
    title: "Module 2 • Modern JavaScript with ES6",
    description: "Review block scope, lexical this, promises, and classes.",
    questions: [
      {
        q: "What happens when code accesses a let binding in its temporal dead zone?",
        options: ["It returns undefined", "It returns null", "It throws a ReferenceError", "It moves the value upward"],
        answer: 2,
        explain: "let and const exist in the scope but cannot be accessed before initialization.",
      },
      {
        q: "What does lexical this mean in an arrow function?",
        options: ["It always means window", "It is inherited from the surrounding scope", "It points to the event target", "It cannot be read"],
        answer: 1,
        explain: "An arrow function does not create its own this binding; it closes over the surrounding one.",
      },
      {
        q: "What must a derived class constructor call before accessing this?",
        options: ["class()", "bind(this)", "super()", "init()"],
        answer: 2,
        explain: "super() runs the parent constructor and initializes this for the derived instance.",
      },
    ],
  },
  {
    title: "Module 3 • Interactive Mobile Web Forms",
    description: "Apply semantic HTML, FormData, accessible recovery, and safe DOM output.",
    questions: [
      {
        q: "An input has id=email but no name. What does FormData do with it?",
        options: ["Uses email as the key", "Omits it", "Uses the label text", "Throws an error"],
        answer: 1,
        explain: "id connects labels and supports DOM selection; name supplies the submission key.",
      },
      {
        q: "Which attribute hints at a telephone-friendly virtual keyboard without validating the value?",
        options: ["required=tel", "autocomplete=keyboard", "inputmode=tel", "name=telephone"],
        answer: 2,
        explain: "inputmode is a keyboard hint. Validation rules come from the input type and application constraints.",
      },
      {
        q: "Which listener handles both tapping Submit and pressing Enter in a field?",
        options: ["click on the input", "keydown on document", "submit on the form", "change on the button"],
        answer: 2,
        explain: "The form submit event unifies supported native submission paths after constraints pass.",
      },
      {
        q: "Three checked boxes share name=topics. Which call preserves every value?",
        options: ["formData.get('topics')", "Object.fromEntries(formData).topics", "formData.getAll('topics')", "formData.topics.values"],
        answer: 2,
        explain: "getAll returns every entry under a repeated key.",
      },
      {
        q: "Which output technique safely displays a username containing HTML-like text?",
        options: ["innerHTML", "insertAdjacentHTML", "textContent", "document.write"],
        answer: 2,
        explain: "textContent keeps untrusted input in a text context instead of parsing it as markup.",
      },
      {
        q: "A simulated network submission fails. What should the form do?",
        options: ["Reset immediately", "Keep values, explain the error, and allow retry", "Reload the page", "Disable submission permanently"],
        answer: 1,
        explain: "Accessible recovery preserves user work, describes the problem in text, and provides a retry path.",
      },
    ],
  },
  {
    title: "Module 4 - JavaScript Language Fundamentals",
    description: "Engine execution, the type system, control flow, and what this refers to.",
    questions: [
      {
        q: "In what order does a JavaScript engine process a script?",
        options: [
          "Optimise, parse, profile, run",
          "Parse to an AST, baseline compile, profile at runtime, optimise hot functions",
          "Compile fully to machine code, then run",
          "Interpret each line from the source text every time",
        ],
        answer: 1,
        explain: "Baseline compilation lets execution begin immediately; profiling then identifies which functions are worth the cost of optimising.",
      },
      {
        q: "A page on https://shop.example.com tries to read the DOM of https://api.example.com. What happens?",
        options: [
          "It succeeds - the registrable domain matches",
          "It is blocked - different hosts are different origins",
          "It succeeds because both use HTTPS",
          "It is blocked only if the ports differ",
        ],
        answer: 1,
        explain: "An origin is scheme, host, and port. A different subdomain is a different host, so the same-origin policy blocks the read.",
      },
      {
        q: "What do '5' == 5 and '5' === 5 evaluate to, in that order?",
        options: ["true and true", "true and false", "false and false", "false and true"],
        answer: 1,
        explain: "Loose equality converts the operands to a common type before comparing. Strict equality checks the type first and never converts.",
      },
      {
        q: "Reading a variable before its declaration line gives undefined in one file and throws in another. What differs?",
        options: [
          "One file is a module",
          "The first used var; the second used let or const",
          "The second file has a syntax error",
          "The engine optimised one file and not the other",
        ],
        answer: 1,
        explain: "var is hoisted and initialised to undefined. let and const are hoisted into the temporal dead zone, so reading them early throws a ReferenceError.",
      },
      {
        q: "A guard written as if (!items) never fires even when the array is empty. Why?",
        options: [
          "Arrays cannot be used in conditions",
          "An empty array is truthy, so !items is false",
          "The array was undefined rather than empty",
          "Strict mode disables truthiness",
        ],
        answer: 1,
        explain: "Only false, 0, -0, 0n, the empty string, null, undefined, and NaN are falsy. An empty array is an object and therefore truthy.",
      },
      {
        q: "Which loop yields the values of an array in order?",
        options: ["for...in", "for...of", "Both yield values", "Neither; only a classic for loop can"],
        answer: 1,
        explain: "for...of iterates values of any iterable in order. for...in yields enumerable keys as strings, includes inherited properties, and does not guarantee order.",
      },
      {
        q: "Inside a method, this.items.forEach(function () { this.count++; }) throws in strict mode. What is the cleanest fix?",
        options: [
          "Rename this to self at the top of the method",
          "Use an arrow function as the callback so this is inherited lexically",
          "Convert the method itself to an arrow function",
          "Replace forEach with for...in",
        ],
        answer: 1,
        explain: "The plain callback is invoked with no receiver, so its this is undefined. An arrow function has no this of its own and inherits the method's.",
      },
      {
        q: "Where does a method defined inside an ES6 class actually live?",
        options: [
          "Copied onto every instance",
          "On the prototype, shared by every instance",
          "In a private class registry with no prototype involved",
          "In the constructor's closure",
        ],
        answer: 1,
        explain: "A class is syntax over the same prototype mechanism as a constructor function, which is why methods are shared rather than duplicated per instance.",
      },
    ],
  },
  {
    title: "Module 5 - Modern Mobile Web Platform",
    description: "Service workers, caching strategy, Core Web Vitals, and client-side security.",
    questions: [
      {
        q: "Why must a service worker keep no state in memory between events?",
        options: [
          "Memory is not available to background scripts",
          "The browser terminates it when idle and restarts it on the next event",
          "Variables are shared with every open tab",
          "Storing state would break the same-origin policy",
        ],
        answer: 1,
        explain: "The lifecycle is install, activate, then idle until an event arrives. The browser is free to terminate an idle worker, so anything in variables is lost.",
      },
      {
        q: "An account balance must never display a stale figure, though the rest of the app should work offline. Which strategy fits that one request?",
        options: ["Cache-first", "Stale-while-revalidate", "Network-only, with an explicit offline message", "Cache-only"],
        answer: 2,
        explain: "Strategy is chosen per request, not per application. Where stale is worse than unavailable, the request must never be served from cache.",
      },
      {
        q: "Which capability lets a form submitted inside a tunnel reach the server later without the user retrying?",
        options: ["Cache-first fetching", "Background sync", "localStorage", "preventDefault()"],
        answer: 1,
        explain: "Background sync defers the failed request and replays it once the browser regains connectivity.",
      },
      {
        q: "Images shipped without width and height attributes damage which Core Web Vital?",
        options: ["LCP, good at 2.5 s or less", "INP, good at 200 ms or less", "CLS, good at 0.1 or less", "FID, good at 100 ms or less"],
        answer: 2,
        explain: "Unsized images let content reflow once they load, which is precisely what Cumulative Layout Shift measures.",
      },
      {
        q: "Why are Core Web Vitals assessed at the 75th percentile rather than the mean?",
        options: [
          "It is cheaper to compute",
          "An average conceals the slow devices and congested networks mobile users routinely have",
          "It is required by the HTTP specification",
          "Percentiles are needed for HTTPS",
        ],
        answer: 1,
        explain: "A mean is dominated by fast loads and can look healthy while a large minority of visits is unusable.",
      },
      {
        q: "Which statement about client-side storage is correct?",
        options: [
          "IndexedDB encrypts values automatically",
          "localStorage is readable only by the page that wrote it",
          "Any script running on the origin can read localStorage, IndexedDB, and caches",
          "Service workers cannot access stored data",
        ],
        answer: 2,
        explain: "Client storage is scoped to the origin, not to a script. That is why tokens need short lifetimes and server-side revocation rather than obfuscation.",
      },
      {
        q: "Why do service workers, geolocation, and camera access all require a secure context?",
        options: [
          "HTTPS is faster than HTTP",
          "The APIs are powerful enough that an attacker on the network path must not be able to inject or intercept them",
          "Browsers cache HTTPS responses more aggressively",
          "It is a licensing requirement",
        ],
        answer: 1,
        explain: "A service worker can rewrite every response a site returns. Granting that over plain HTTP would hand the capability to anyone able to modify traffic.",
      },
    ],
  },
];

const blueprintStages = [
  {
    title: "Structure",
    question: "Which controls and relationships exist before JavaScript runs?",
    summary: "Semantic HTML establishes labels, names, types, constraints, and a native submission path.",
    includes: ["form and fieldset structure", "visible labels", "named controls", "submit button"],
    example: "The email label for=email matches input id=email, while name=email supplies the submission key.",
  },
  {
    title: "Submit",
    question: "How do mouse, touch, and keyboard users reach one handler?",
    summary: "A form-level submit listener receives supported native submission paths after constraint validation succeeds.",
    includes: ["button activation", "Enter-key submission", "requestSubmit()", "event.submitter"],
    example: "Pressing Enter in the email field and tapping Create account both emit submit on the form.",
  },
  {
    title: "Extract",
    question: "Which current controls become FormData entries?",
    summary: "FormData snapshots successful named controls and preserves repeated entries.",
    includes: ["get() for one value", "getAll() for repeated names", "File values", "omitted disabled controls"],
    example: "Two selected topics produce two topics entries and must be read with getAll('topics').",
  },
  {
    title: "Validate",
    question: "Where are usability checks and trust checks enforced?",
    summary: "Browser constraints improve feedback, application rules enforce the experience, and the server validates every request.",
    includes: ["native constraints", "business rules", "server validation", "accessible error text"],
    example: "type=email can catch malformed input early, but the server still verifies the submitted value.",
  },
  {
    title: "Render and Recover",
    question: "How does the interface report results without creating an injection sink?",
    summary: "Safe DOM APIs display values as text, status regions announce results, and the form resets only after success.",
    includes: ["textContent", "createElement", "role=status", "preserved values on failure"],
    example: "An HTML-looking username remains visible text and cannot create an element or execute an event handler.",
  },
];

const modelLayers = [
  {
    id: "hardware",
    label: "Hardware",
    question: "Which physical capabilities make mobile interaction possible?",
    description: "Device components sense touch, present the interface, manage power, and communicate through radios.",
    constructs: ["Touch Interface", "Battery", "Sensors", "Full-Duplex Radios"],
    example: "The touchscreen supplies pointer input while the cellular or Wi-Fi radio carries a form request.",
  },
  {
    id: "software",
    label: "Software",
    question: "Which programs interpret the form and manage interaction?",
    description: "The operating system, browser engine, HTML, CSS, and JavaScript turn device capabilities into an application experience.",
    constructs: ["Android or iOS", "Browser Engine", "HTML and CSS", "JavaScript"],
    example: "The browser selects a virtual keyboard from input semantics and dispatches the submit event to JavaScript.",
  },
  {
    id: "communication",
    label: "Communication",
    question: "How does submitted data travel beyond the device?",
    description: "Wireless links, protocols, servers, and network conditions carry and protect data outside the local interface.",
    constructs: ["Wi-Fi or Cellular Link", "HTTPS", "Server Endpoint", "Offline State"],
    example: "A failed connection keeps the form values on the device so the user can retry after connectivity returns.",
  },
];

const modelMatchItems = [
  { construct: "Touch Interface", layerId: "hardware" },
  { construct: "Battery", layerId: "hardware" },
  { construct: "Browser Engine", layerId: "software" },
  { construct: "JavaScript", layerId: "software" },
  { construct: "HTTPS", layerId: "communication" },
  { construct: "Offline State", layerId: "communication" },
];

const scenarios = [
  {
    id: "scenario-api-response",
    moduleId: "m2",
    category: "JavaScript",
    prompt: "A fetch request fails while loading optional profile data. Which structure gives the clearest recovery path?",
    options: ["Ignore the Promise", "Use await inside try/catch and show a recoverable error", "Reload continuously", "Replace fetch with a blocking loop"],
    answer: 1,
    explanation: "try/catch around awaited work keeps the asynchronous flow readable and makes failure handling explicit.",
  },
  {
    id: "scenario-mobile-layers",
    moduleId: "m1",
    category: "Mobile Layers",
    prompt: "A phone displays a form correctly but cannot reach the server while offline. Which layer is currently blocking completion?",
    options: ["Hardware only", "Software only", "Communication", "The label layer"],
    answer: 2,
    explanation: "The interface can remain usable locally, but network communication is required to reach the remote endpoint.",
  },
  {
    id: "scenario-enter-submit",
    moduleId: "m3",
    category: "Forms",
    prompt: "A keyboard user presses Enter in the email field. Which design handles the submission without extra key detection?",
    options: ["Listen for click on the button", "Listen for submit on the form", "Listen for mouseup on document", "Disable native submission"],
    answer: 1,
    explanation: "The form submit event is the semantic path shared by button and keyboard activation.",
  },
  {
    id: "scenario-duplicate-topics",
    moduleId: "m3",
    category: "Forms",
    prompt: "A learner selects two checkboxes named topics. Which extraction keeps both selections?",
    options: ["get('topics')", "getAll('topics')", "Object.fromEntries(formData).topics", "querySelector('topics')"],
    answer: 1,
    explanation: "getAll returns every FormData entry for a repeated name.",
  },
  {
    id: "scenario-safe-output",
    moduleId: "m3",
    category: "Security",
    prompt: "A username contains HTML-like text. Which output API keeps it from becoming executable markup?",
    options: ["innerHTML", "document.write", "textContent", "insertAdjacentHTML"],
    answer: 2,
    explanation: "textContent inserts a text node representation instead of asking the browser to parse HTML.",
  },
  {
    id: "scenario-strict-equality",
    moduleId: "m4",
    category: "JavaScript",
    prompt: "A numeric input arrives as the string '0' and a check written as value == 0 passes when it should not. Which change expresses the intended test?",
    options: ["Use value === 0 after an explicit Number() conversion", "Wrap the value in quotes", "Use typeof value == 0", "Compare with !="],
    answer: 0,
    explanation: "Converting explicitly and then comparing strictly makes the intended type visible instead of relying on the coercion rules of ==.",
  },
  {
    id: "scenario-loop-choice",
    moduleId: "m4",
    category: "JavaScript",
    prompt: "Iterating an array with for...in unexpectedly yields string indices and an extra inherited property. Which loop was intended?",
    options: ["do...while", "for...of", "for...in with a hasOwnProperty guard only", "forEach on the object"],
    answer: 1,
    explanation: "for...of iterates the values of an iterable in order and never sees inherited properties, which is what array iteration needs.",
  },
  {
    id: "scenario-offline-form",
    moduleId: "m5",
    category: "Mobile Web",
    prompt: "A learner submits a registration form while travelling through a tunnel. Which platform capability delivers it without asking them to retry?",
    options: ["Cache-first fetching", "Background sync", "A longer request timeout", "localStorage"],
    answer: 1,
    explanation: "Background sync queues the failed request and replays it once connectivity returns, so the interruption never reaches the user.",
  },
  {
    id: "scenario-layout-shift",
    moduleId: "m5",
    category: "Performance",
    prompt: "Users report tapping the wrong button because content jumps as images finish loading. Which fix addresses the measured cause?",
    options: ["Lower the image quality", "Declare width and height so the browser reserves space", "Move the images below the fold", "Preload the JavaScript bundle"],
    answer: 1,
    explanation: "Reserving the space before the image arrives removes the reflow that Cumulative Layout Shift measures, which is the defect the users are describing.",
  },
];

const studySteps = [
  { step: 1, title: "Understand", text: "Explain the mobile layers and each form feature in your own words." },
  { step: 2, title: "Trace", text: "Follow one submission from semantic HTML through FormData to safe feedback." },
  { step: 3, title: "Retrieve", text: "Use flashcards and module tests without looking back at the lesson." },
  { step: 4, title: "Apply", text: "Solve scenarios, then rebuild the safe registration form from memory." },
];

globalThis.reviewerData = {
  course,
  modules,
  topics,
  glossary,
  flashcards,
  practiceTests,
  blueprintStages,
  modelLayers,
  modelMatchItems,
  scenarios,
  studySteps,
};

})();
