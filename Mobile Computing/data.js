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
];

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
];

const flashcards = [
  { topic: "mc-intro", prompt: "What percentage of the global population has smartphone access (2024)?", answer: "97.6%" },
  { topic: "mc-concepts", prompt: "What are the three main concepts of Mobile Computing?", answer: "Mobile Communication, Mobile Hardware, and Mobile Software." },
  { topic: "mc-evolution", prompt: "Which network generation introduced digital signals as a global standard?", answer: "2G & GSM" },
  { topic: "es6-basics", prompt: "What is the scope of variables declared with 'let' or 'const'?", answer: "Block scope." },
  { topic: "es6-basics", prompt: "Can you reassign a 'const' variable?", answer: "No, but if it holds an object, the object's properties can be mutated." },
  { topic: "es6-functions", prompt: "Why are arrow functions bad for DOM event listeners?", answer: "They inherit 'this' from the surrounding window rather than binding to the clicked element." },
  { topic: "es6-objects", prompt: "What does the Spread Operator (...) do?", answer: "It expands an iterable (like an array) into individual elements." },
  { topic: "es6-async", prompt: "What is the modern, synchronous-looking alternative to Promise chains?", answer: "async/await" },
];

const practiceTests = [
  {
    topic: "mc-concepts",
    question: "Which aspect of mobile computing handles protocols, bandwidth, and unguided media?",
    options: ["Mobile Software", "Mobile Hardware", "Mobile Communication", "Mobile Portals"],
    correctIndex: 2,
    explanation: "Mobile Communication refers to the infrastructure (radio waves, protocols, cell towers) that enables data transfer.",
  },
  {
    topic: "es6-basics",
    question: "What happens if you try to access a 'let' variable in its Temporal Dead Zone?",
    options: ["It returns undefined", "It returns null", "It throws a ReferenceError", "It hoists the value to the top"],
    correctIndex: 2,
    explanation: "Unlike 'var' which returns undefined, accessing a 'let' or 'const' variable before initialization throws a ReferenceError.",
  },
  {
    topic: "es6-functions",
    question: "What is the primary benefit of the 'lexical this' in arrow functions?",
    options: ["It runs faster", "It drops the need for .bind(this)", "It prevents DOM memory leaks", "It creates a strict mode context"],
    correctIndex: 1,
    explanation: "Arrow functions inherit 'this' from their surroundings, making old hacks like var that = this or .bind(this) obsolete.",
  },
  {
    topic: "es6-async",
    question: "What must you write inside an ES6 subclass constructor before accessing 'this'?",
    options: ["class()", "bind(this)", "super()", "init()"],
    correctIndex: 2,
    explanation: "You must call super() in a derived class constructor to execute the parent class constructor before you can use 'this'.",
  },
];

const blueprintStages = [
  {
    title: "1G to 4G Evolution",
    description: "The progression from basic analog voice to modern high-speed data.",
    icon: "📡",
    items: [
      "1G: Basic analog voice without forward compatibility.",
      "2G (GSM): Digital signals and global standards.",
      "EDGE: Expanded networks for basic data.",
      "4G LTE: High-speed broadband powering the modern app economy.",
    ],
  },
  {
    title: "The ECMAScript Timeline",
    description: "The evolution of the JavaScript standard.",
    icon: "📜",
    items: [
      "1995: Created as Mocha/LiveScript.",
      "1997: ECMA Standardization (ES1).",
      "2009: ES5 brings strict mode and JSON.",
      "2015: ES6 revolutionizes the language with let/const, arrows, classes.",
    ],
  },
];

const modelLayers = [
  {
    layer: "Hardware Layer",
    description: "Physical devices like smartphones and tablets.",
    components: ["Receptor Medium", "Battery", "Touch Interface", "Full-Duplex Radios"],
  },
  {
    layer: "Software Layer",
    description: "Operating systems and app ecosystems.",
    components: ["Android", "iOS", "App Stores", "Browser Engines (V8)"],
  },
  {
    layer: "Communication Layer",
    description: "The invisible infrastructure carrying data.",
    components: ["Cell Towers", "Radio Waves", "Protocols", "Bandwidth Management"],
  },
];

const scenarios = [
  {
    title: "Handling API Responses",
    context: "You need to fetch user data from an external server without blocking the UI.",
    challenge: "Traditional callbacks lead to 'callback hell' and nested, hard-to-read code.",
    solution: "Use the `fetch()` API which returns a Promise. Chain `.then()` to parse JSON, and another `.then()` to handle the data. For cleaner syntax, wrap it in an `async` function and use `await fetch()` followed by `await response.json()`, wrapping the block in a `try/catch` for error handling.",
  },
  {
    title: "Mobile App Distribution",
    context: "A company wants to release a new medical tracking app.",
    challenge: "They need global reach but must ensure user trust and data accuracy.",
    solution: "Publish through established platforms (Apple App Store, Google Play). These platforms provide global discovery, handle revenue splits securely, and enforce strict regulatory requirements necessary for health apps.",
  },
];

const studySteps = [
  { step: 1, title: "Understand Mobile Concepts", desc: "Separate the hardware, software, and communication layers." },
  { step: 2, title: "Review ES6 Scoping", desc: "Understand why let/const replaced var, and how the Temporal Dead Zone works." },
  { step: 3, title: "Master Modern Syntax", desc: "Practice writing arrow functions, destructuring objects, and using the spread operator." },
  { step: 4, title: "Grasp Asynchronous JS", desc: "Trace how a Promise moves from pending to resolved/rejected, and rewrite it using async/await." },
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
  scenarios,
  studySteps,
};

})();
