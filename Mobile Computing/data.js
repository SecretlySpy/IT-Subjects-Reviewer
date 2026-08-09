/**
 * Shared learning content for the Mobile Computing reviewer.
 */

(() => {

const course = {
  id: "cs409",
  title: "Mobile Computing & Modern JavaScript",
  shortTitle: "CS409",
  moduleLabel: "Module",
  description: "Understanding the concepts, platforms, evolution of mobile technologies, and Modern JavaScript with ES6.",
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
];

const sources = {
  javascript: { title: "JavaScript language overview", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview" },
  formData: { title: "FormData", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/API/FormData" },
  submit: { title: "HTMLFormElement: submit event", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event" },
  validation: { title: "Using HTML form validation and the Constraint Validation API", publisher: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation" },
  labels: { title: "Labeling Controls", publisher: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/tutorials/forms/labels/" },
  errors: { title: "Understanding Error Identification", publisher: "W3C Web Accessibility Initiative", url: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html" },
  xss: { title: "DOM based XSS Prevention Cheat Sheet", publisher: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html" },
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
