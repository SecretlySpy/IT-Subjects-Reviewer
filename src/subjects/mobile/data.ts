import { SubjectMeta, Topic, Flashcard, Question, GlossaryTerm, SourceReference } from '@/types/study';
// Primary sources for the topics added from the Canvas syllabus.
const mdnJsGuide: SourceReference = { title: 'JavaScript Guide', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' };
const ecma262: SourceReference = { title: 'ECMAScript Language Specification', publisher: 'Ecma International (TC39)', url: 'https://tc39.es/ecma262/' };
const mdnEquality: SourceReference = { title: 'Equality comparisons and sameness', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness' };
const mdnThis: SourceReference = { title: 'this — JavaScript reference', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this' };
const mdnLoops: SourceReference = { title: 'Loops and iteration', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration' };
const v8Docs: SourceReference = { title: 'V8 JavaScript engine documentation', publisher: 'V8 / Google', url: 'https://v8.dev/docs' };
const mdnSameOrigin: SourceReference = { title: 'Same-origin policy', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy' };
const swSpec: SourceReference = { title: 'Service Workers — W3C Candidate Recommendation', publisher: 'W3C', url: 'https://www.w3.org/TR/service-workers/' };
const appManifest: SourceReference = { title: 'Web Application Manifest', publisher: 'W3C', url: 'https://www.w3.org/TR/appmanifest/' };
const webVitals: SourceReference = { title: 'Web Vitals', publisher: 'web.dev (Google)', url: 'https://web.dev/articles/vitals' };
const gpp3Specs: SourceReference = { title: '3GPP Specifications and Technologies', publisher: '3GPP', url: 'https://www.3gpp.org/specifications-technologies' };
const mdnResponsive: SourceReference = { title: 'Responsive design', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design' };
const wcag22: SourceReference = { title: 'Web Content Accessibility Guidelines (WCAG) 2.2', publisher: 'W3C Recommendation', url: 'https://www.w3.org/TR/WCAG22/' };
const mdnPermissions: SourceReference = { title: 'Permissions API', publisher: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API' };
import { tokens } from '@/design-system/tokens';

const mdnJavaScriptOverview = {
  title: 'JavaScript language overview',
  publisher: 'MDN Web Docs',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview',
};

const mdnFormData = {
  title: 'FormData',
  publisher: 'MDN Web Docs',
  url: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData',
};

const mdnSubmitEvent = {
  title: 'HTMLFormElement: submit event',
  publisher: 'MDN Web Docs',
  url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event',
};

const mdnValidation = {
  title: 'Using HTML form validation and the Constraint Validation API',
  publisher: 'MDN Web Docs',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation',
};

const waiLabels = {
  title: 'Labeling Controls',
  publisher: 'W3C Web Accessibility Initiative',
  url: 'https://www.w3.org/WAI/tutorials/forms/labels/',
};

const waiErrors = {
  title: 'Understanding Error Identification',
  publisher: 'W3C Web Accessibility Initiative',
  url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html',
};

const owaspDomXss = {
  title: 'DOM based XSS Prevention Cheat Sheet',
  publisher: 'OWASP',
  url: 'https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html',
};

export const topics: Topic[] = [
  {
    id: 'mobile-concepts',
    subjectId: 'mobile',
    title: 'Mobile Computing Concepts',
    order: 1,
    estimatedMinutes: 35,
    professorMode: {
      eli5: 'Mobile computing means using a computer while you move, without a cable tying you to one spot. It takes three things working together: a way to send signals through the air, a device small enough to carry, and software that expects both to be unreliable.',
      deepDive: 'Mobile computing is the transmission of data, voice, and video by a computer or other wireless-enabled device without a fixed physical link. Three concepts compose it. Mobile communication is the infrastructure that makes reliable transmission possible: the protocols, services, bandwidth, and portals that carry signals, together with the data formats that stop competing systems colliding. Because the medium is unguided, the signal is radiated through the air rather than confined to a conductor, which introduces attenuation, interference, and multipath — the physical realities that make a mobile link fundamentally less predictable than a wired one. Mobile hardware is the device and its components: laptops, smartphones, tablets, and personal digital assistants, each with a receptor able to sense and receive signals. These devices are designed for full-duplex operation, sending and receiving simultaneously rather than waiting for the other party to finish. Mobile software is the operating system and applications that run on that hardware — the engine of the device, dealing with the characteristics and requirements of mobile applications and managing the constraints the other two layers impose. What makes mobile computing a distinct engineering discipline rather than ordinary computing on smaller screens is that every one of its defining resources is scarce and variable: bandwidth fluctuates and disappears, battery is finite and drains faster under radio use, screen area is small, input is imprecise, and the device may change network attachment mid-session. Software that assumes a stable connection, unlimited power, and a mouse will fail on all four counts. The design consequence is that mobile applications must treat interruption as normal rather than exceptional — saving state continuously, degrading gracefully offline, and deferring expensive work until conditions allow.',
      analogy: 'A field reporter versus a studio broadcaster. The studio has mains power, a fixed camera, and a cable to the network. The reporter carries everything, works on battery, and the signal drops when they walk behind a building. The analogy breaks at scale: a reporter notices the drop and waits, whereas mobile software must detect and recover from it automatically, thousands of times a day, without asking the user.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'layer-stack',
        title: 'The three concepts of mobile computing',
        description: 'Each layer imposes constraints on the one above it. Software cannot assume more reliability than the hardware provides, and hardware cannot assume more than the radio link delivers — which is why offline behaviour is a software concern.',
        layers: [
          { label: 'Mobile software', sub: 'Operating system and applications; must expect interruption' },
          { label: 'Mobile hardware', sub: 'Device and receptor; full-duplex, battery-constrained' },
          { label: 'Mobile communication', sub: 'Protocols, bandwidth, unguided radio medium' },
        ],
      },
    },
    learningObjectives: [
      'Name the three concepts of mobile computing and state what each contributes.',
      'Explain why an unguided medium makes a mobile link less predictable than a wired one.',
      'Identify the four scarce resources that make mobile a distinct engineering problem.',
      'Justify treating interruption as the normal case rather than an exception.',
    ],
    lessonBlocks: [
      {
        kind: 'list',
        title: 'Four resources that are scarce and variable',
        items: [
          'Bandwidth — fluctuates, and disappears entirely in lifts, tunnels, and basements.',
          'Battery — finite, and radio use is among the most expensive operations available.',
          'Screen area — small, so information must be prioritised rather than merely shrunk.',
          'Input precision — a fingertip is far coarser than a mouse pointer.',
        ],
      },
      {
        kind: 'paragraph',
        title: 'Why "wireless" and "mobile" are not synonyms',
        text: 'A desktop connected over Wi-Fi is wireless but not mobile: it never changes its point of attachment. A laptop carried between buildings is both. The distinction matters because the two conditions need different solutions — wireless problems are solved at the physical and link layers with modulation and error control, while mobility problems are solved at the network layer with registration, tunnelling, and handover.',
      },
    ],
    sources: [gpp3Specs, mdnResponsive],
    relatedTermIds: ['term-mobile-computing', 'term-mobile-communication', 'term-mobile-hardware', 'term-mobile-software', 'term-full-duplex'],
    tags: ['mobile', 'foundations', 'concepts'],
  },
  {
    id: 'mobile-evolution',
    subjectId: 'mobile',
    title: 'Evolution and Device Classification',
    order: 2,
    estimatedMinutes: 35,
    professorMode: {
      eli5: 'Mobile networks have gone through five generations, each roughly a decade apart. Every generation added a new capability: first calls, then texts, then data, then real broadband, and now very low latency for machines as well as people.',
      deepDive: 'Each generation of mobile technology is characterised by new frequency bands, higher data rates, and transmission technology that is deliberately not backward compatible at the radio layer. First generation systems, introduced in 1981, were analogue and carried voice only. The second generation moved to digital, and GSM — standardised by ETSI — became the global default, adding text messaging and, through GPRS and EDGE, the first packet data. The third generation brought data rates sufficient for web browsing and video calling. The fourth generation, Long-Term Evolution, made the network all-IP: voice became an application riding on the data network rather than a separate circuit-switched service, and rates reached hundreds of megabits per second. The fifth generation targets roughly ten times the peak rate, a tenth of the latency, and a hundredfold increase in traffic capacity, using New Radio in two frequency ranges — FR1 below 6 GHz for coverage and FR2 in millimetre wave for capacity. Millimetre wave buys enormous bandwidth at the cost of range and obstruction tolerance, which is why 5G needs pico-cells only tens of metres across and a far denser base-station deployment. The generational story matters to developers because it sets the assumptions software may make: a 5G-class link is fast but not universally available, so an application must still behave correctly on a congested 4G cell or no cell at all. Device classification follows a parallel evolution. Personal digital assistants were electronic organisers that synchronised with a PC, using stylus input on a touch-sensitive screen; they were an extension of the desktop rather than a replacement. Smartphones combined PDA capability with telephony, adding high-resolution touch screens, full web browsers, multitasking, and high-speed data. Tablets are larger touch devices offering laptop-class functionality for reading, media, and document work. The categories have converged: modern devices differ mainly by screen size and input expectation, which is precisely what responsive design must accommodate.',
      analogy: 'Road building. Each generation is a wider, faster road: a track, then a paved lane, then a dual carriageway, then a motorway. The analogy breaks with millimetre wave, which is less like a wider motorway than a very fast road that only exists in short stretches and stops working when a lorry parks in front of it.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'path-chain',
        title: 'Five generations of mobile networks',
        description: 'Each generation adds a capability rather than merely more speed, and each is a new radio technology rather than an upgrade of the last. Coverage always lags capability, so software must still work on the previous generation.',
        chain: [
          { label: '1G — from 1981', sub: 'analogue; voice only', kind: 'edge' },
          { label: '2G — GSM', sub: 'digital; SMS; GPRS/EDGE packet data' },
          { label: '3G', sub: 'web browsing and video calling' },
          { label: '4G LTE', sub: 'all-IP; voice becomes an application', kind: 'mark' },
          { label: '5G NR', sub: 'FR1 coverage, FR2 mmWave capacity', kind: 'mark' },
        ],
      },
    },
    learningObjectives: [
      'State what capability each mobile generation added rather than only its speed.',
      'Explain why 4G making the network all-IP changed how voice is delivered.',
      'Relate 5G millimetre wave capacity to its cell-size and deployment cost.',
      'Distinguish PDAs, smartphones, and tablets and explain why the categories converged.',
    ],
    lessonBlocks: [
      {
        kind: 'paragraph',
        title: 'Why generations are not backward compatible',
        text: 'Each generation defines a new air interface — new frequency bands, new modulation, new framing. A 5G handset contains radios for the earlier generations rather than a single radio that adapts, which is why phones fall back to 4G rather than running 5G slowly. For developers the consequence is concrete: the presence of a 5G-capable device says nothing about the link the application will actually get at any given moment.',
      },
      {
        kind: 'list',
        title: 'Device classes and what distinguishes them',
        items: [
          'PDA — stylus and touch screen, synchronises with a PC; an extension of the desktop, not a replacement.',
          'Smartphone — PDA capability plus telephony, full browser, multitasking, high-speed data.',
          'Tablet — larger touch surface, laptop-class functionality for reading, media, and documents.',
          'The categories converged: what now differs is screen size and input expectation.',
        ],
      },
    ],
    sources: [gpp3Specs, mdnResponsive],
    relatedTermIds: ['term-generation', 'term-gsm', 'term-lte-all-ip', 'term-5g-fr', 'term-pda'],
    tags: ['mobile', 'evolution', 'devices'],
  },
  {
    id: 'mobile-lifecycle',
    subjectId: 'mobile',
    title: 'Android Activity Lifecycle',
    order: 3,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'An app is like a play. onCreate is writing the script. onStart is the curtain going up. onResume is the actors talking. onPause is someone coughing loudly. onStop is the curtain coming down. onDestroy is burning the theater.',
      deepDive: 'The Android Activity Lifecycle consists of several core states managed by callbacks: onCreate() initializes UI and variables; onStart() makes the activity visible; onResume() brings it to the foreground to accept user input. If interrupted (e.g., a phone call), it enters onPause(). If no longer visible, it enters onStop(). Finally, onDestroy() is called before the activity is destroyed, either by the system to reclaim memory or by the user closing it.',
      analogy: 'Think of opening a book. onCreate is buying it. onStart is opening to chapter 1. onResume is actively reading. onPause is looking away when someone talks to you. onStop is closing the book. onDestroy is returning it to the library.',
      visualAidType: 'diagram',
      visualAidData: { 
        type: 'android-lifecycle',
        nodes: ['onCreate', 'onStart', 'onResume', 'onPause', 'onStop', 'onDestroy']
      }
    },
    relatedTermIds: ['term-activity', 'term-oncreate', 'term-onresume'],
    tags: ['android', 'lifecycle']
  },
  {
    id: 'mobile-cross-platform',
    subjectId: 'mobile',
    title: 'Cross-Platform Frameworks (React Native, Flutter)',
    order: 4,
    estimatedMinutes: 50,
    professorMode: {
      eli5: 'Instead of hiring one translator for French (iOS) and one for German (Android), cross-platform lets you write in English and automatically translates it to both instantly.',
      deepDive: 'Native development requires Swift/Kotlin. Cross-platform frameworks allow a single codebase. React Native (JavaScript) uses a bridge to invoke native UI components, meaning it looks and feels native but incurs a bridge performance cost. Flutter (Dart) skips the bridge and uses its own rendering engine (Skia/Impeller) to draw pixels directly to the screen, ensuring identical UI across platforms at high performance, but it ignores native OS UI components.',
      analogy: 'React Native is a puppeteer using the strings to move the native wooden puppet. Flutter just brings its own plastic puppet and puts on its own show.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Framework', 'Language', 'Rendering'],
        rows: [
          ['React Native', 'JavaScript', 'Native Components via Bridge'],
          ['Flutter', 'Dart', 'Custom Engine (Skia/Impeller)'],
          ['Native', 'Swift / Kotlin', 'Direct Native']
        ]
      }
    },
    relatedTermIds: ['term-react-native', 'term-flutter', 'term-bridge'],
    tags: ['frameworks', 'react-native', 'flutter']
  },
  {
    id: 'mobile-sensors',
    subjectId: 'mobile',
    title: 'Mobile Sensors and Context',
    order: 5,
    estimatedMinutes: 40,
    professorMode: {
      eli5: 'Sensors give your phone senses. The accelerometer tells it which way is down (like the inner ear). GPS tells it where it is on the map. The proximity sensor turns the screen off when you put the phone to your face.',
      deepDive: 'Mobile devices are uniquely context-aware due to embedded MEMS (Micro-Electro-Mechanical Systems) sensors. Motion sensors include accelerometers (measuring linear acceleration) and gyroscopes (measuring rotational velocity). Environmental sensors measure light or barometer pressure. Position sensors include Magnetometers (compass) and GPS. Applications must handle sensor noise (via sensor fusion algorithms) and manage high battery consumption, especially with continuous GPS tracking.',
      analogy: 'A desktop computer is stuck in a dark room. A mobile phone is a person walking around the city with eyes (camera), ears (mic), an inner ear for balance (gyroscope), and a map (GPS).',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'sensor-fusion',
        sensors: ['Accelerometer', 'Gyroscope', 'Magnetometer']
      }
    },
    relatedTermIds: ['term-mems', 'term-accelerometer', 'term-gps'],
    tags: ['hardware', 'sensors']
  },
  {
    id: 'mobile-uiux',
    subjectId: 'mobile',
    title: 'Mobile UI/UX constraints',
    order: 6,
    estimatedMinutes: 30,
    professorMode: {
      eli5: 'Fingers are fat, screens are small, and attention spans are short. Make buttons big enough to tap, put the important stuff at the bottom where thumbs can reach it, and don\'t clutter the screen.',
      deepDive: 'Mobile UX is constrained by screen real estate, touch target size, and environmental distractions. Apple\'s Human Interface Guidelines (HIG) and Google\'s Material Design enforce minimum touch targets (e.g., 44x44 points for iOS, 48x48 dp for Android) to prevent "fat finger" errors. The "Thumb Zone" dictates that interactive elements should be placed in the lower-middle of the screen for one-handed reachability.',
      analogy: 'Designing for desktop is painting a mural. Designing for mobile is painting a miniature inside a moving train while someone bumps your elbow.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'thumb-zone',
        zones: ['Natural', 'Stretch', 'Ow']
      }
    },
    relatedTermIds: ['term-touch-target', 'term-thumb-zone', 'term-responsive'],
    tags: ['design', 'ux']
  },
  {
    id: 'mobile-js-engines',
    subjectId: 'mobile',
    title: 'JavaScript Engines and Execution',
    order: 7,
    estimatedMinutes: 40,
    professorMode: {
      eli5: 'JavaScript is not run line by line from the text you wrote. An engine inside the browser reads it, turns it into machine code, watches which parts run often, and rewrites those parts to be faster while the page is still running.',
      deepDive: 'JavaScript was created to make web pages interactive, and its programs — called scripts — are written directly into a page and run as it loads, requiring no separate compilation step from the author. What actually executes them is an engine embedded in the browser, sometimes described as a JavaScript virtual machine. Different browsers ship different engines: V8 in Chrome and Opera, SpiderMonkey in Firefox, and JavaScriptCore in Safari. The names matter because developer documentation and feature-support tables are written in terms of them. The pipeline inside an engine has four stages. The parser reads the source and produces an abstract syntax tree. A baseline compiler turns that tree into bytecode or unoptimised machine code quickly, so execution can begin without delay. While the code runs, a profiler watches which functions execute frequently and with which argument types. An optimising compiler then recompiles those hot functions into highly optimised machine code specialised for the observed types — and if a later call violates that assumption, the engine deoptimises back to the general version. This just-in-time approach is why modern JavaScript approaches native speed for steady-state numeric work while remaining a dynamically typed language. A distinction worth holding precisely: ECMAScript is the standardised language specification maintained by TC39, while JavaScript is the language as implemented in host environments that add their own objects. In a browser, the host supplies the DOM, fetch, and storage; in Node.js it supplies file system and network APIs instead. In-browser JavaScript is deliberately constrained for the user\'s safety. It cannot read or write arbitrary files on disk, and access to camera, microphone, and location requires explicit permission. The same-origin policy prevents a document from one origin — the triple of scheme, host, and port — from reading the contents of a document from another, which is what stops a page you open from reading your webmail in a different tab. Cross-origin data exchange therefore requires explicit agreement from the far side, expressed in HTTP headers.',
      analogy: 'A simultaneous interpreter who learns the speaker\'s habits. At first they translate everything literally; once they notice the speaker keeps using the same phrases, they pre-prepare those and become much faster. The analogy breaks at deoptimisation — a human interpreter is not forced to throw away all their preparation the moment the speaker uses one unexpected word.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'path-chain',
        title: 'How an engine executes your script',
        description: 'Execution starts before optimisation finishes, which is why a page becomes interactive quickly and then gets faster. Deoptimisation is not a failure — it is the engine correctly abandoning an assumption that a later call disproved.',
        chain: [
          { label: 'Source text', sub: 'the script in the page', kind: 'edge' },
          { label: 'Parse', sub: 'produce an abstract syntax tree' },
          { label: 'Baseline compile', sub: 'bytecode fast, so execution can begin', kind: 'mark' },
          { label: 'Profile', sub: 'watch hot functions and their types' },
          { label: 'Optimise / deoptimise', sub: 'specialise, and back out if assumptions break', kind: 'mark' },
          { label: 'Machine code runs', sub: 'near-native for steady-state work', kind: 'edge' },
        ],
      },
    },
    learningObjectives: [
      'Name the stages an engine takes a script through and say why execution starts before optimisation.',
      'Distinguish ECMAScript the specification from JavaScript in a host environment.',
      'State what in-browser JavaScript may not do, and why each restriction exists.',
      'Define an origin precisely and explain what the same-origin policy prevents.',
    ],
    lessonBlocks: [
      {
        kind: 'paragraph',
        title: 'What counts as the same origin',
        text: 'An origin is the triple of scheme, host, and port. https://example.com/a and https://example.com/b share an origin. https://example.com and http://example.com do not, because the scheme differs. https://example.com and https://api.example.com do not, because the host differs. https://example.com and https://example.com:8443 do not, because the port differs. Reading across any of those boundaries requires the far side to opt in with CORS headers — the restriction is enforced by the browser, not by the server.',
      },
      {
        kind: 'list',
        title: 'What in-browser JavaScript cannot do',
        items: [
          'Read or write arbitrary files on disk — only files the user explicitly chooses or drops.',
          'Use camera, microphone, or location without an explicit permission grant.',
          'Read the contents of a page from a different origin.',
          'Reach an arbitrary server and read the response unless that server permits it.',
        ],
      },
    ],
    sources: [ecma262, v8Docs, mdnSameOrigin],
    relatedTermIds: ['term-js-engine', 'term-jit', 'term-ecmascript', 'term-origin', 'term-same-origin-policy'],
    tags: ['javascript', 'engines', 'security'],
  },
  {
    id: 'mobile-js-types',
    subjectId: 'mobile',
    title: 'Data Types, Variables, and Coercion',
    order: 8,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'A JavaScript variable does not have a type — the value inside it does, and it can change. That flexibility is convenient until the language quietly converts one type into another and your comparison gives an answer you did not expect.',
      deepDive: 'JavaScript is dynamically typed: a variable is a name bound to a value, and the same name may hold a number now and a string later. Values divide into two families. Primitives are immutable and compared by value: string, number, boolean, null, undefined, symbol, and bigint. Everything else is an object — including arrays and functions — and objects are compared by reference, so two structurally identical arrays are not equal to one another. The typeof operator reports the type of a value, with one historical wrinkle every developer meets: typeof null returns "object", a bug preserved since the first implementation because fixing it would break existing pages. Two absences must be distinguished. undefined means a variable has been declared but never assigned, or a property does not exist. null is an assigned value meaning deliberately empty — the programmer set it. Number deserves care: JavaScript numbers are IEEE 754 double-precision floats, so 0.1 + 0.2 is not exactly 0.3, and NaN — the result of an invalid numeric operation — is the only value in the language not equal to itself, which is why isNaN or Number.isNaN exists rather than a comparison. Coercion is where dynamic typing becomes a hazard. The loose equality operator == converts its operands to a common type before comparing, so "5" == 5 is true, and a chain of such conversions produces results that are consistent with the specification but surprising in practice. Strict equality === compares type first and never converts, which is why it is the default choice in modern code. Declaration keywords carry scoping consequences. var is function-scoped and hoisted with an initial value of undefined, so it can be read before its declaration line. let and const are block-scoped and hoisted into a temporal dead zone, so reading them before declaration throws a ReferenceError — a genuine improvement, because it turns a silent undefined into an immediate error. const prevents reassignment of the binding, not mutation of the value, so a const array may still be pushed to.',
      analogy: 'Labelled boxes. A variable is the label, not the box, so the same label can be moved to a different box holding something else. The analogy breaks at const, which fixes the label to one box but does nothing to stop you rearranging the contents of that box.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'tree-hierarchy',
        title: 'The JavaScript type system',
        description: 'The primitive-versus-object split decides comparison behaviour: primitives compare by value, objects compare by reference. That single distinction explains why two identical-looking arrays are not equal.',
        root: 'JavaScript values',
        levels: [
          { label: 'Primitives — immutable, compared by value', items: ['string', 'number', 'boolean', 'null', 'undefined', 'symbol', 'bigint'] },
          { label: 'Objects — mutable, compared by reference', items: ['Object', 'Array', 'Function', 'Date', 'Map / Set'] },
        ],
      },
    },
    learningObjectives: [
      'Separate primitive values from objects and predict how each compares.',
      'Distinguish null from undefined by how each comes to exist.',
      'Predict the result of == versus === and justify preferring strict equality.',
      'Explain the scoping and hoisting differences between var, let, and const.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'Coercion, equality, and the two absences',
        language: 'javascript',
        code: `'5' == 5;          // true  - == converts before comparing
'5' === 5;         // false - === compares type first, never converts

typeof undefined;  // 'undefined' - declared but never assigned
typeof null;       // 'object'    - a preserved 1995 bug, not a real object
null === undefined;      // false - different types
null == undefined;       // true  - == treats both as "empty"

NaN === NaN;             // false - NaN is not equal to itself
Number.isNaN(NaN);       // true  - which is why this function exists

0.1 + 0.2 === 0.3;       // false - IEEE 754 double precision
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;  // true - compare with a tolerance

[1, 2] === [1, 2];       // false - objects compare by reference, not contents`,
        caption: 'Every line here is specification-correct. Using === by default removes the first class of surprise; the NaN and floating-point cases need explicit handling regardless of which operator you choose.',
      },
      {
        kind: 'code',
        title: 'Why let and const replaced var',
        language: 'javascript',
        code: `console.log(a);   // undefined - var is hoisted and initialised
var a = 1;

console.log(b);   // ReferenceError - let is in the temporal dead zone
let b = 1;

const list = [1, 2];
list.push(3);     // allowed - const freezes the binding, not the value
// list = [];     // TypeError - reassigning the binding is what const prevents

for (var i = 0; i < 3; i++) {}
console.log(i);   // 3 - var leaked out of the loop, it is function-scoped

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError - let stayed inside the block`,
        caption: 'The temporal dead zone converts a silent undefined into an immediate error, which is the whole reason the newer declarations are preferred. You will still meet var in older course material and legacy code.',
      },
    ],
    sources: [mdnJsGuide, mdnEquality, ecma262],
    relatedTermIds: ['term-dynamic-typing', 'term-primitive', 'term-coercion', 'term-strict-equality', 'term-tdz', 'term-nan'],
    tags: ['javascript', 'types', 'variables'],
  },
  {
    id: 'mobile-js-control-flow',
    subjectId: 'mobile',
    title: 'Control Flow and Loops',
    order: 9,
    estimatedMinutes: 40,
    professorMode: {
      eli5: 'Control flow is how a program chooses what to do next. An if statement picks a branch, a loop repeats work, and the tricky part is knowing which values JavaScript quietly treats as true or false.',
      deepDive: 'Conditional statements let a program take one path out of several. The if statement evaluates an expression and executes its block when the result is truthy; if...else supplies the alternative; if...else if...else chains several mutually exclusive tests, and it is simply a series of if statements where each subsequent test is nested in the previous else clause. Because the condition is coerced to boolean, truthiness must be known precisely: false, 0, -0, empty string, null, undefined, NaN, and 0n are falsy, and everything else — including the empty array and the empty object — is truthy. That last fact catches people out, because an empty array looks like nothing but tests as true. A switch statement compares one value against several cases using strict equality and is clearer than a long else-if chain when testing a single variable, provided each case ends with break; omitting break causes fall-through into the following case, which is occasionally deliberate and usually a bug. Loops repeat work. The classic for loop declares three parts in one line: initialisation runs once before the loop, the test is evaluated before each iteration and ends the loop when false, and the update runs after each iteration. while tests before the body and may run zero times; do...while runs the body once before testing. For collections, the choice of loop carries meaning. for...in iterates the enumerable property keys of an object, including inherited ones, and gives string keys — it is intended for objects, and using it on an array yields indices as strings and does not guarantee order. for...of iterates the values of any iterable — arrays, strings, Maps, Sets — and is the correct choice for arrays. Array methods express intent more directly than manual iteration: forEach performs a side effect per element, map transforms each element into a new array of the same length, filter selects a subset, and reduce folds the collection into a single value. Preferring these makes the purpose of a loop visible at a glance, which matters more for readability than the marginal performance difference.',
      analogy: 'A recipe with decisions. "If the dough is sticky, add flour" is a conditional; "knead for ten minutes" is a loop with a fixed count; "knead until smooth" is a while loop. The analogy breaks at truthiness — a cook never has to ask whether an empty bowl counts as true.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'path-chain',
        title: 'How a for loop actually executes',
        description: 'Initialisation happens once; the test runs before every iteration including the first, which is why a for loop can execute zero times; the update runs after the body, not before the next test.',
        chain: [
          { label: 'Initialise', sub: 'let i = 0 — runs once', kind: 'edge' },
          { label: 'Test', sub: 'i < n — before every iteration', kind: 'mark' },
          { label: 'Body', sub: 'the work being repeated' },
          { label: 'Update', sub: 'i++ — after the body' },
          { label: 'Test fails → exit', sub: 'control leaves the loop', kind: 'edge' },
        ],
      },
    },
    learningObjectives: [
      'List the falsy values and predict how a non-boolean condition is evaluated.',
      'Choose between if-else chains and switch, and explain the cost of a missing break.',
      'Choose correctly between for, for...in, and for...of for a given collection.',
      'Express an iteration with map, filter, or reduce when it states intent more clearly.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'Truthiness, and why an empty array surprises people',
        language: 'javascript',
        code: `// The complete list of falsy values - everything else is truthy.
// false, 0, -0, 0n, '', null, undefined, NaN

if ([]) console.log('runs');        // an empty array is TRUTHY
if ({}) console.log('runs');        // an empty object is TRUTHY
if ('') console.log('never runs');  // an empty string is falsy
if (0)  console.log('never runs');

// So test what you actually mean:
const items = [];
if (items.length === 0) console.log('empty');   // correct
// if (!items) ...                              // never fires for an array`,
        caption: 'Testing an array directly asks "does this array exist", not "does it contain anything". The length check is the one that expresses the intended question.',
      },
      {
        kind: 'code',
        title: 'Choosing the right loop for the job',
        language: 'javascript',
        code: `const scores = [10, 20, 30];

for (const key in scores) {
  console.log(key, typeof key);   // '0' string, '1' string, '2' string
}                                 // keys, as strings - meant for objects

for (const value of scores) {
  console.log(value);             // 10, 20, 30 - values, in order
}                                 // the right choice for an array

const doubled = scores.map(n => n * 2);          // [20, 40, 60]
const large   = scores.filter(n => n > 15);      // [20, 30]
const total   = scores.reduce((sum, n) => sum + n, 0);  // 60`,
        caption: 'for...in gives string keys and includes inherited properties, so it is for objects. for...of gives values in order. The array methods say what the loop is for, which a bare for loop does not.',
      },
    ],
    sources: [mdnLoops, mdnJsGuide],
    relatedTermIds: ['term-truthy', 'term-switch-fallthrough', 'term-for-in', 'term-for-of', 'term-array-methods'],
    tags: ['javascript', 'control-flow', 'loops'],
  },
  {
    id: 'mobile-js-functions-objects',
    subjectId: 'mobile',
    title: 'Functions, Objects, and this',
    order: 10,
    estimatedMinutes: 50,
    professorMode: {
      eli5: 'A function is reusable code you can call by name. An object groups related data and the functions that work on it. The confusing part is the word this, because what it refers to depends on how the function was called, not on where it was written.',
      deepDive: 'A function is a block of reusable code that eliminates repetition and lets a large program be divided into small, manageable, independently testable parts. A function declaration begins with the function keyword, a name, a parameter list that may be empty, and a body in braces; declarations are hoisted in full, so they may be called before the line that defines them. A function expression assigns a function to a variable and is not hoisted in the same way. Parameters are the names in the definition; arguments are the values supplied at the call. JavaScript does not enforce arity — omitted parameters are undefined and extra arguments are ignored — so default parameter values and rest parameters exist to make intent explicit. The return statement sends a value back to the caller and immediately ends the function; a function with no return statement returns undefined. Because functions are first-class values they can be passed as arguments and returned from other functions, which is what makes callbacks and closures possible: a closure is a function that retains access to the variables of the scope in which it was created, even after that scope has finished executing. Objects group related state and behaviour. A property is a named value; a method is a property whose value is a function. Objects can be created with a literal, with a constructor function invoked using new, or with an ES6 class, which is syntax over the same prototype mechanism rather than a separate system. Every object has a prototype, and property lookup walks that chain until the property is found or the chain ends — which is how inheritance works in JavaScript. The behaviour of this is the most common source of confusion, because it is determined at the call site rather than at the definition site. Called as a method, this is the object before the dot. Called as a plain function, this is undefined in strict mode. Called with new, this is the newly constructed object. Called via call, apply, or bind, this is whatever was supplied. Arrow functions are the exception that makes this manageable: they have no this of their own and inherit it lexically from the enclosing scope, which is exactly why they are the right choice for callbacks inside a method and the wrong choice for a method that needs its own this.',
      analogy: 'A recipe card in a kitchen. The function is the recipe, parameters are the ingredient slots, and the return value is the finished dish. The analogy breaks at this: a recipe means the same thing wherever it is used, whereas a JavaScript method can refer to a different object depending on how it was handed to the caller.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'actor-flow',
        title: 'What this refers to, by call site',
        description: 'The same function body produces four different values for this depending only on how it was invoked. This is why extracting a method into a variable and calling it plainly is a classic source of bugs.',
        actors: ['Function body', 'Call site'],
        messages: [
          { from: 'obj.fn()', to: 'this', label: 'Method call — this is obj, the object before the dot' },
          { from: 'fn()', to: 'this', label: 'Plain call — this is undefined in strict mode' },
          { from: 'new Fn()', to: 'this', label: 'Construction — this is the newly created object' },
          { from: 'fn.call(x)', to: 'this', label: 'Explicit binding — this is x' },
          { from: '() => {}', to: 'this', label: 'Arrow function — no own this; inherited from the enclosing scope' },
        ],
      },
    },
    learningObjectives: [
      'Distinguish parameters from arguments and explain why JavaScript does not enforce arity.',
      'Predict the value of this from the call site for all four invocation forms.',
      'Explain why an arrow function is right for a callback and wrong for a method.',
      'Describe how prototype chain lookup implements inheritance.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'The classic this bug, and two fixes',
        language: 'javascript',
        code: `const counter = {
  count: 0,
  items: ['a', 'b', 'c'],

  countAllBroken() {
    this.items.forEach(function () {
      this.count++;        // 'this' is NOT counter here - plain call
    });                    // TypeError in strict mode
  },

  countAllArrow() {
    this.items.forEach(() => {
      this.count++;        // arrow has no own 'this' - inherits from countAllArrow
    });                    // works
  },

  countAllBound() {
    this.items.forEach(function () {
      this.count++;
    }.bind(this));         // explicit binding - also works
  },
};`,
        caption: 'The arrow function is preferred because the intent is local: "use the same this as the surrounding method". Note that an arrow function would be the wrong choice for countAllArrow itself, since a method needs its own this.',
      },
      {
        kind: 'code',
        title: 'Three ways to build the same object',
        language: 'javascript',
        code: `// 1. Object literal - simplest when there is only one.
const book1 = { title: 'Perl', author: 'Mohtashim' };

// 2. Constructor function with new - the pre-ES6 pattern.
function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.describe = function () {
  return this.title + ' by ' + this.author;
};
const book2 = new Book('Perl', 'Mohtashim');

// 3. ES6 class - syntax over the SAME prototype mechanism.
class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  describe() { return \`\${this.title} by \${this.author}\`; }
}
const book3 = new BookClass('Perl', 'Mohtashim');`,
        caption: 'The class form is not a different object system — describe still lives on the prototype and is shared by every instance rather than copied into each one. That sharing is why prototypes exist.',
      },
      {
        kind: 'paragraph',
        title: 'A note on the with statement',
        text: 'Older tutorials, including some course material, demonstrate a with block as shorthand for repeatedly naming an object. It is not usable in modern code: the ECMAScript specification forbids it in strict mode, and every ES module and class body is strict by default. It also makes the meaning of a bare name depend on runtime data, which prevents engines optimising the surrounding code. Destructuring — const { title, author } = book — expresses the same intent safely.',
      },
    ],
    sources: [mdnThis, mdnJsGuide, ecma262],
    relatedTermIds: ['term-parameter-argument', 'term-closure', 'term-this-binding', 'term-prototype-chain', 'term-arrow-this'],
    tags: ['javascript', 'functions', 'objects', 'oop'],
  },
  {
    id: 'mobile-web-form-foundations',
    subjectId: 'mobile',
    title: 'Mobile-First HTML Form Foundations',
    order: 11,
    estimatedMinutes: 35,
    professorMode: {
      eli5: 'A form is a conversation with the browser. Labels ask clear questions, inputs give the user a place to answer, and the submit button says the answers are ready. Good HTML also tells a phone which keyboard and saved information will help the user answer faster.',
      deepDive: 'A robust form starts with semantic HTML rather than JavaScript. The form element groups controls and defines a native submission path. Each control needs a visible label whose for attribute matches the control id, while the name attribute supplies the key used during submission. Input types such as email give browsers validation rules and mobile keyboard hints. Autocomplete tokens communicate the purpose of personal-data fields, and inputmode can request a suitable virtual keyboard without performing validation. Required and other constraint attributes provide progressive enhancement: the form remains understandable and potentially submittable even if JavaScript fails. Load behavior separately with a deferred script so parsing does not depend on placing a script at a fragile location. Placeholders may provide examples, but they disappear during typing and must not replace labels.',
      analogy: 'A form is a labeled filing tray. The label tells a person and assistive technology what belongs in each slot; the name tells the receiving system how to file the answer. The analogy ends at validation: a labeled tray cannot verify whether an email address is usable.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Attribute', 'Job', 'Mobile benefit'],
        rows: [
          ['id + label for', 'Connect visible text to a control', 'Larger tap area and accessible name'],
          ['name', 'Defines the submitted key', 'Makes FormData extraction reliable'],
          ['type', 'Adds input semantics and validation', 'Can select a suitable keyboard'],
          ['autocomplete', 'Identifies the expected personal data', 'Reduces typing and memory load'],
          ['inputmode', 'Hints at a virtual keyboard', 'Speeds numeric, email, or telephone entry'],
        ],
      },
    },
    learningObjectives: [
      'Build a semantic registration form with explicit labels and named controls.',
      'Choose input types, autocomplete tokens, and keyboard hints for mobile users.',
      'Explain how progressive enhancement keeps a form useful when JavaScript is unavailable.',
    ],
    lessonBlocks: [
      {
        kind: 'list',
        title: 'Prerequisites',
        items: ['Basic HTML elements and attributes', 'A browser with developer tools', 'No prior FormData experience required'],
      },
      {
        kind: 'code',
        title: 'Accessible registration form',
        language: 'html',
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
<script src="app.js" defer></script>`,
        caption: 'The action preserves a non-JavaScript path; the deferred script progressively enhances it.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Common mistake: placeholder-only labels',
        text: 'A placeholder disappears after typing and may have low contrast. Keep a persistent visible label connected with matching for and id values.',
      },
      {
        kind: 'callout',
        tone: 'note',
        title: 'Predict before revealing',
        text: 'If an input has an id but no name, its label can still work, but FormData will not include the value because the control has no submission key.',
      },
    ],
    sources: [waiLabels, mdnValidation],
    relatedTermIds: ['term-semantic-form', 'term-accessible-name', 'term-autocomplete', 'term-inputmode'],
    tags: ['web', 'forms', 'html', 'accessibility', 'mobile'],
  },
  {
    id: 'mobile-web-formdata',
    subjectId: 'mobile',
    title: 'Event-Driven JavaScript and FormData',
    order: 12,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'JavaScript waits for the whole form to say “submit,” pauses the browser’s normal trip to the server, and packs the named answers into FormData. Listening to the form means clicking the button and pressing Enter follow the same route.',
      deepDive: 'Modern JavaScript commonly uses const for bindings that are not reassigned and let for bindings that are. The var declaration remains part of JavaScript, but its function scope can surprise developers, so block-scoped declarations are preferred in new code. An arrow function is concise and closes over the surrounding this value; it is not a universal replacement for a traditional function when a dynamic this is required. Form behavior should attach to the form submit event rather than a button click because submission can also come from the Enter key or requestSubmit(). After native constraint validation succeeds, a handler may call preventDefault() when the application intentionally handles the submission. FormData collects successful named controls: disabled or unnamed controls are omitted, unchecked checkboxes contribute nothing, files remain File objects, and repeated names produce repeated entries. get() returns the first matching value, while getAll() preserves every value. Object.fromEntries() is convenient only when every name is unique because normal object properties cannot represent repeated keys.',
      analogy: 'FormData is a mail clerk who collects every eligible envelope and preserves repeated labels. Object.fromEntries is a filing cabinet with one drawer per label, so later duplicates replace earlier drawer contents. The analogy ends with files, which are structured File objects rather than paper notes.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Control state', 'Included?', 'Reason'],
        rows: [
          ['Named text input', 'Yes', 'Successful named control'],
          ['Disabled input', 'No', 'Disabled controls are not successful'],
          ['Unnamed input', 'No', 'No key exists for submission'],
          ['Unchecked checkbox', 'No', 'Unchecked controls contribute no value'],
          ['Repeated checkbox name', 'Yes, multiple', 'Use FormData.getAll()'],
        ],
      },
    },
    learningObjectives: [
      'Handle every native submission path with one form-level submit listener.',
      'Extract single and repeated values without losing FormData entries.',
      'Choose const, let, and arrow functions based on their actual semantics.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'Capture the form without losing repeated values',
        language: 'javascript',
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
        caption: 'The runtime guards prevent null selections, and getAll retains every selected topic.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Object.fromEntries has a duplicate-key trap',
        text: 'Converting FormData to a plain object is concise for unique names, but a checkbox group such as topics needs getAll() or an explicit accumulation step.',
      },
      {
        kind: 'list',
        title: 'Submission sequence',
        items: ['The browser checks native constraints.', 'A valid form emits submit.', 'The handler prevents navigation only because it will process the data.', 'FormData snapshots successful controls.', 'The application validates business rules and reports a result.'],
      },
      {
        kind: 'callout',
        tone: 'note',
        title: 'Predict before revealing',
        text: 'Pressing Enter in the email field reaches the form submit listener. A click-only listener on the button can miss that keyboard submission path.',
      },
    ],
    sources: [mdnJavaScriptOverview, mdnSubmitEvent, mdnFormData],
    relatedTermIds: ['term-submit-event', 'term-prevent-default', 'term-formdata', 'term-successful-control', 'term-object-from-entries'],
    tags: ['web', 'forms', 'javascript', 'events', 'formdata'],
  },
  {
    id: 'mobile-web-form-safety',
    subjectId: 'mobile',
    title: 'Validation, Accessibility, and Safe DOM Output',
    order: 13,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'A good form does not throw away answers or hide what went wrong. It points to the problem in words, keeps the user’s work, and treats everything they typed as text—not as instructions that the browser should run.',
      deepDive: 'HTML constraint validation can reject missing or malformed values before the submit event, but browser checks are user-interface assistance rather than a security boundary. A server must validate every request because clients can be modified or bypassed. When an application detects an error, identify the field and describe the problem in text, associate supporting text with aria-describedby when needed, and move focus only when doing so helps recovery. A role=status live region can announce non-urgent completion without stealing focus. Preserve entered data after failure and disable the submit control only while work is in progress. User-controlled strings must never be interpolated into innerHTML: that creates a DOM cross-site scripting sink. Build trusted structure with createElement, place untrusted values through textContent, and insert the nodes with replaceChildren. Clear the form only after confirmed success so a network or validation failure does not destroy the user’s work.',
      analogy: 'Treat user input like a message written on a card. textContent frames and displays the card; innerHTML can treat the writing as construction instructions. The analogy ends where sanitization is required for deliberately supported rich text.',
      visualAidType: 'interactive',
      visualAidData: {
        type: 'safe-form-lab',
      },
    },
    learningObjectives: [
      'Separate browser validation, business validation, and server-side trust boundaries.',
      'Provide accessible loading, error, and success feedback without discarding input.',
      'Render user-controlled values as text so they cannot become executable markup.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'Safe confirmation output',
        language: 'javascript',
        code: `const message = document.createElement('p');
message.textContent = \`Welcome, \${username}. We will contact \${email}.\`;
output.replaceChildren(message);

// Reset only after the simulated operation succeeds.
form.reset();`,
        caption: 'The template literal creates a string, while textContent ensures the string stays text.',
      },
      {
        kind: 'callout',
        tone: 'security',
        title: 'Security boundary',
        text: 'A value such as <img src=x onerror=alert(1)> must appear literally. If it creates an element, the application has used an unsafe HTML sink.',
      },
      {
        kind: 'list',
        title: 'Recovery checklist',
        items: ['Describe the error in text and identify its field.', 'Keep all entered values after failure.', 'Allow retry after offline or server errors.', 'Avoid color-only success and error signals.', 'Reset only after confirmed success.'],
      },
      {
        kind: 'callout',
        tone: 'note',
        title: 'Predict before revealing',
        text: 'Calling preventDefault() does not make invalid data trustworthy. It changes navigation behavior; validation and server authorization remain separate responsibilities.',
      },
    ],
    sources: [mdnValidation, waiErrors, owaspDomXss],
    relatedTermIds: ['term-constraint-validation', 'term-dom-xss', 'term-text-content', 'term-accessible-name'],
    tags: ['web', 'forms', 'validation', 'accessibility', 'security'],
  },
  {
    id: 'mobile-pwa-offline',
    subjectId: 'mobile',
    title: 'Progressive Web Apps and Offline',
    order: 14,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'A progressive web app is a website that behaves like an installed app: it has an icon, opens without browser chrome, and keeps working when the network does not. A service worker is the piece that makes the offline part possible.',
      deepDive: 'A progressive web app is an ordinary web application that meets a set of platform criteria allowing it to be installed and to work offline. Two pieces supply that. A web app manifest is a JSON document declaring the application\'s name, icons, theme colour, start URL, and display mode; it is what allows the browser to offer installation and to launch the app without browser chrome. A service worker is a script the browser runs in the background, separate from any page, with no DOM access, which acts as a programmable network proxy for the pages under its scope. Every outbound request from those pages passes through the service worker\'s fetch event, where the script decides whether to serve from cache, go to the network, or synthesise a response. It has a defined lifecycle — install, activate, then idle until an event arrives — and the browser may terminate it when idle and restart it on the next event, which is why a service worker must keep no state in memory. It requires a secure context: HTTPS, or localhost for development. The caching strategy is a deliberate design decision rather than a default. Cache-first serves from cache and only reaches the network on a miss, which suits fingerprinted static assets such as compiled CSS and JavaScript. Network-first tries the network and falls back to cache, which suits content that must be fresh, such as a news feed. Stale-while-revalidate serves the cached copy immediately and refreshes it in the background, giving instant rendering with eventual freshness — usually the right default for a mobile interface. Cache-only and network-only exist for assets that never change and for requests that must never be served stale, such as authentication. Two further capabilities complete the offline story. Background sync defers a failed request — a form submission made in a tunnel — until connectivity returns, so the user is not asked to retry. IndexedDB provides structured client-side storage far larger than localStorage and, unlike it, is asynchronous, so it does not block the main thread. The design principle throughout is that the network is an enhancement rather than a prerequisite: the application should render, allow interaction, and queue work whether or not a connection exists.',
      analogy: 'A shop with a stockroom. The service worker is the assistant who checks the stockroom before phoning the supplier. The analogy breaks on lifecycle: a shop assistant stays at their post all day, whereas the browser dismisses the service worker whenever it is idle and re-hires it for each new request — which is why it can never remember anything between events.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'actor-flow',
        title: 'A service worker intercepting a request',
        description: 'The page never talks to the network directly once a service worker controls it. That interception point is what makes offline behaviour programmable rather than a browser default.',
        actors: ['Page', 'Service worker', 'Cache', 'Network'],
        messages: [
          { from: 'Page', to: 'Service worker', label: 'fetch event — every request passes through' },
          { from: 'Service worker', to: 'Cache', label: 'Check the cache first (cache-first strategy)' },
          { from: 'Cache', to: 'Page', label: 'Hit — respond immediately, no network used' },
          { from: 'Service worker', to: 'Network', label: 'Miss — fetch, then store a copy in the cache' },
          { from: 'Service worker', to: 'Page', label: 'Offline and no cached copy — serve the fallback page' },
        ],
      },
    },
    learningObjectives: [
      'Explain what the manifest and the service worker each contribute to an installable app.',
      'Choose a caching strategy from the freshness requirement of the asset.',
      'Explain why a service worker must hold no state in memory.',
      'Describe how background sync changes what happens to a form submitted offline.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'Stale-while-revalidate in a fetch handler',
        language: 'javascript',
        code: `self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('v1').then(async (cache) => {
      const cached = await cache.match(event.request);

      // Refresh in the background regardless of whether we had a hit.
      const network = fetch(event.request).then((response) => {
        cache.put(event.request, response.clone());
        return response;
      });

      // Serve the cached copy instantly if we have one; otherwise wait.
      return cached || network;
    })
  );
});`,
        caption: 'The user sees content immediately and the cache is updated for next time. The trade-off is explicit: the first render may be one revision behind, which is acceptable for a feed and not for a bank balance.',
      },
      {
        kind: 'list',
        title: 'Matching strategy to asset',
        items: [
          'Cache-first — fingerprinted CSS, JS, fonts, icons. They never change under the same URL.',
          'Network-first — account balances, live prices, anything where stale is worse than slow.',
          'Stale-while-revalidate — feeds, article lists, avatars. Instant paint, eventual freshness.',
          'Network-only — authentication and payment. Never serve a cached answer.',
        ],
      },
    ],
    sources: [swSpec, appManifest, webVitals],
    relatedTermIds: ['term-pwa', 'term-service-worker', 'term-app-manifest', 'term-cache-strategy', 'term-background-sync'],
    tags: ['pwa', 'offline', 'service-worker', 'web'],
  },
  {
    id: 'mobile-performance-security',
    subjectId: 'mobile',
    title: 'Mobile Performance, Responsiveness, and Security',
    order: 15,
    estimatedMinutes: 50,
    professorMode: {
      eli5: 'A mobile page has to paint quickly, respond to a tap without lag, and not jump around while loading. Google turned those three things into measurable numbers, and there are agreed targets for each.',
      deepDive: 'Mobile performance is measurable rather than impressionistic. Core Web Vitals define three user-centred metrics, each assessed at the 75th percentile of real page loads across mobile and desktop. Largest Contentful Paint measures loading and should occur within 2.5 seconds — it marks the moment the main content becomes visible, which is what a user perceives as the page having arrived. Interaction to Next Paint measures responsiveness and should be 200 milliseconds or less; it replaced First Input Delay as a stable Core Web Vital in 2024 because it assesses every interaction throughout the page\'s life rather than only the first. Cumulative Layout Shift measures visual stability and should stay at or below 0.1; it penalises content that moves after rendering, the failure mode where a user taps a button that an advertisement has just displaced. The percentile matters as much as the threshold: an average would hide the slow devices and congested networks that mobile users routinely have. Responsiveness of layout is a separate concern from responsiveness to input. Responsive design uses fluid grids, flexible images, and media queries so that one document adapts continuously to viewport width, whereas adaptive design serves distinct layouts at fixed breakpoints. Mobile-first ordering — writing the small-screen rules first and layering enhancements above them with min-width queries — produces simpler CSS and prevents desktop assumptions leaking downward. Touch introduces its own constraints: targets need adequate size and spacing because a fingertip is far less precise than a pointer, and accessibility guidance sets minimum target dimensions alongside contrast and focus-visibility requirements. Security on mobile rests on a small number of load-bearing facts. Transport must be HTTPS, which is additionally a hard requirement for service workers, geolocation, and camera access — the powerful APIs are gated on a secure context by design. Permissions are explicit, revocable, and should be requested in context at the moment the capability is needed rather than on first launch, because a permission prompt without visible purpose is usually declined. Client-side storage is not a secret store: anything in localStorage, IndexedDB, or a cache is readable by any script that achieves execution on the origin, so tokens require short lifetimes and server-side revocation rather than clever hiding.',
      analogy: 'A shop window. LCP is how long until a passer-by can see what you sell, INP is how quickly the door opens when they push it, and CLS is whether the display shelf moves while they are reaching for something. The analogy breaks at the 75th percentile: a shopkeeper judges by the average customer, whereas these metrics are deliberately judged by the ones having the worst time.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'layer-stack',
        title: 'Core Web Vitals and their "good" thresholds',
        description: 'All three are assessed at the 75th percentile of real-world loads, so a quarter of visits may exceed the threshold and the page still passes. Averages are deliberately not used, because they conceal exactly the slow devices mobile users carry.',
        layers: [
          { label: 'Largest Contentful Paint (LCP)', sub: 'Loading — good is 2.5 s or less' },
          { label: 'Interaction to Next Paint (INP)', sub: 'Responsiveness — good is 200 ms or less' },
          { label: 'Cumulative Layout Shift (CLS)', sub: 'Visual stability — good is 0.1 or less' },
          { label: 'Assessed at', sub: '75th percentile of real page loads, mobile and desktop' },
        ],
      },
    },
    learningObjectives: [
      'Name each Core Web Vital, what it measures, and its "good" threshold.',
      'Explain why the metrics are assessed at the 75th percentile rather than the mean.',
      'Distinguish responsive from adaptive layout and justify mobile-first ordering.',
      'State why client-side storage cannot be treated as a secret store.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'Mobile-first CSS, and reserving space to protect CLS',
        language: 'html',
        code: `<!-- Width and height let the browser reserve space before the image loads,
     which is the single most effective fix for layout shift. -->
<img src="hero.avif" width="1200" height="675" alt="" loading="lazy">

<style>
  /* Base rules are the SMALL-screen rules - no media query needed. */
  .grid { display: grid; gap: 1rem; grid-template-columns: 1fr; }

  /* Enhancements layer upward with min-width. */
  @media (min-width: 48rem) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* Touch targets need real size, not just a visible label. */
  .btn { min-height: 44px; min-width: 44px; }
</style>`,
        caption: 'Declaring intrinsic width and height costs nothing and prevents the reflow that CLS measures. Writing the small-screen case as the base keeps the desktop assumptions out of the mobile path entirely.',
      },
      {
        kind: 'list',
        title: 'Mobile security facts that carry weight',
        items: [
          'HTTPS is required for service workers, geolocation, and camera — powerful APIs are gated on a secure context.',
          'Request a permission at the moment it is needed, not on first launch; unexplained prompts get declined.',
          'localStorage, IndexedDB, and caches are readable by any script running on the origin.',
          'Therefore tokens need short lifetimes and server-side revocation, not obfuscation.',
        ],
      },
    ],
    sources: [webVitals, mdnResponsive, wcag22, mdnPermissions],
    relatedTermIds: ['term-lcp', 'term-inp', 'term-cls', 'term-mobile-first', 'term-secure-context'],
    tags: ['performance', 'responsive', 'security', 'accessibility'],
  },
];

export const subjectMeta: SubjectMeta = {
  id: 'mobile',
  title: 'Mobile Computing & Development',
  shortTitle: 'Mobile Computing',
  description: 'Mobile computing foundations and network generations, Android lifecycle, cross-platform frameworks, sensors, touch-first UI/UX, JavaScript language fundamentals, interactive web forms, progressive web apps, and mobile performance and security.',
  accent: tokens.colors.subject.mobile,
  topicCount: topics.length,
  estimatedHours: Math.round(
    topics.reduce((total, topic) => total + topic.estimatedMinutes, 0) / 60
  ),
};

export const glossary: GlossaryTerm[] = [
  { id: 'term-activity', term: 'Activity', definition: 'A single, focused thing that the user can do in an Android app (typically represents one screen).', topicIds: ['mobile-lifecycle'] },
  { id: 'term-oncreate', term: 'onCreate()', definition: 'The Android callback fired when the system first creates the activity.', topicIds: ['mobile-lifecycle'] },
  { id: 'term-onresume', term: 'onResume()', definition: 'The state in which the app interacts with the user.', topicIds: ['mobile-lifecycle'] },
  { id: 'term-react-native', term: 'React Native', definition: 'A framework for building native apps using React and JavaScript.', topicIds: ['mobile-cross-platform'] },
  { id: 'term-flutter', term: 'Flutter', definition: 'Google\'s UI toolkit for building natively compiled applications from a single Dart codebase.', topicIds: ['mobile-cross-platform'] },
  { id: 'term-bridge', term: 'The Bridge', definition: 'The mechanism in React Native that allows JavaScript and Native threads to communicate asymmetrically.', topicIds: ['mobile-cross-platform'] },
  { id: 'term-mems', term: 'MEMS', definition: 'Micro-Electro-Mechanical Systems. The microscopic technology used to build mobile sensors.', topicIds: ['mobile-sensors'] },
  { id: 'term-accelerometer', term: 'Accelerometer', definition: 'A sensor that measures the proper acceleration of the device.', topicIds: ['mobile-sensors'] },
  { id: 'term-gps', term: 'GPS', definition: 'Global Positioning System. Provides location and time information anywhere on Earth.', topicIds: ['mobile-sensors'] },
  { id: 'term-touch-target', term: 'Touch Target', definition: 'The area on the screen that responds to user input.', topicIds: ['mobile-uiux'] },
  { id: 'term-thumb-zone', term: 'Thumb Zone', definition: 'The area of a phone screen easily reachable with the thumb while holding the phone one-handed.', topicIds: ['mobile-uiux'] },
  { id: 'term-responsive', term: 'Responsive Layout', definition: 'A layout that adapts to the available screen size, orientation, and density instead of assuming one fixed device.', topicIds: ['mobile-uiux'] },
  { id: 'term-semantic-form', term: 'Semantic Form', definition: 'A form built with native HTML elements whose structure communicates the purpose and relationships of its controls.', topicIds: ['mobile-web-form-foundations'] },
  { id: 'term-accessible-name', term: 'Accessible Name', definition: 'The programmatically available name assistive technology uses to identify an interface control, commonly supplied by a connected label.', topicIds: ['mobile-web-form-foundations', 'mobile-web-form-safety'] },
  { id: 'term-autocomplete', term: 'autocomplete', definition: 'An HTML attribute that identifies the expected purpose of a field so a browser can offer appropriate saved information.', topicIds: ['mobile-web-form-foundations'] },
  { id: 'term-inputmode', term: 'inputmode', definition: 'An HTML hint that asks a mobile browser to show a suitable virtual keyboard without adding validation rules.', topicIds: ['mobile-web-form-foundations'] },
  { id: 'term-submit-event', term: 'Submit Event', definition: 'The form-level browser event produced by supported submission paths such as a submit button, Enter key, or requestSubmit().', topicIds: ['mobile-web-formdata'] },
  { id: 'term-prevent-default', term: 'preventDefault()', definition: 'An Event method that cancels the browser action associated with an event when application code intentionally replaces it.', topicIds: ['mobile-web-formdata'] },
  { id: 'term-formdata', term: 'FormData', definition: 'A browser interface representing the key/value entries produced by successful form controls.', topicIds: ['mobile-web-formdata'] },
  { id: 'term-successful-control', term: 'Successful Form Control', definition: 'A form control eligible to contribute a name/value entry during submission; disabled, unnamed, and unchecked controls can be excluded.', topicIds: ['mobile-web-formdata'] },
  { id: 'term-object-from-entries', term: 'Object.fromEntries()', definition: 'A JavaScript method that creates an object from key/value pairs but cannot preserve multiple values under the same property name.', topicIds: ['mobile-web-formdata'] },
  { id: 'term-constraint-validation', term: 'Constraint Validation', definition: 'Browser checks driven by HTML input types and attributes such as required, pattern, min, and max.', topicIds: ['mobile-web-form-safety'] },
  { id: 'term-dom-xss', term: 'DOM-based XSS', definition: 'Cross-site scripting caused when client-side code sends attacker-controlled data into an executable DOM context.', topicIds: ['mobile-web-form-safety'] },
  { id: 'term-text-content', term: 'textContent', definition: 'A DOM property that reads or writes text without parsing the value as HTML markup.', topicIds: ['mobile-web-form-safety'] },

  { id: 'term-mobile-computing', term: 'Mobile Computing', definition: 'Transmission of data, voice, and video by a computer or wireless-enabled device without a fixed physical link, so the user may work while moving.', topicIds: ['mobile-concepts'] },
  { id: 'term-mobile-communication', term: 'Mobile Communication', definition: 'The infrastructure layer: protocols, services, bandwidth, and portals that carry signals over an unguided radio medium.', topicIds: ['mobile-concepts'] },
  { id: 'term-mobile-hardware', term: 'Mobile Hardware', definition: 'Devices and components that receive the service of mobility, each with a receptor able to sense and receive signals.', topicIds: ['mobile-concepts'] },
  { id: 'term-mobile-software', term: 'Mobile Software', definition: 'The operating system and applications running on mobile hardware; the engine of the device and where interruption must be handled.', topicIds: ['mobile-concepts'] },
  { id: 'term-full-duplex', term: 'Full Duplex', definition: 'Sending and receiving at the same time rather than taking turns, so a device need not wait for the other party to finish.', topicIds: ['mobile-concepts'] },
  { id: 'term-generation', term: 'Mobile Generation', definition: 'A step change in mobile technology defined by new frequency bands, higher data rates, and a new air interface that is not backward compatible.', topicIds: ['mobile-evolution'] },
  { id: 'term-gsm', term: 'GSM', definition: 'Global System for Mobile Communications, the ETSI-standardised 2G system that became the global default and added SMS and packet data through GPRS and EDGE.', topicIds: ['mobile-evolution'] },
  { id: 'term-lte-all-ip', term: 'All-IP Network (LTE)', definition: 'The 4G change that carried everything, voice included, over the packet data network, making voice an application rather than a circuit-switched service.', topicIds: ['mobile-evolution'] },
  { id: 'term-5g-fr', term: '5G FR1 and FR2', definition: 'The two 5G New Radio frequency ranges: FR1 below 6 GHz for coverage, FR2 millimetre wave for capacity at much shorter range.', topicIds: ['mobile-evolution'] },
  { id: 'term-pda', term: 'Personal Digital Assistant', definition: 'An electronic organiser with stylus and touch input that synchronised with a PC; an extension of the desktop rather than a replacement for it.', topicIds: ['mobile-evolution'] },
  { id: 'term-js-engine', term: 'JavaScript Engine', definition: 'The program inside a browser that parses, compiles, and executes JavaScript. V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari.', topicIds: ['mobile-js-engines'] },
  { id: 'term-jit', term: 'Just-in-Time Compilation', definition: 'Compiling to machine code during execution, profiling hot functions, and re-optimising them for observed types — with deoptimisation when an assumption breaks.', topicIds: ['mobile-js-engines'] },
  { id: 'term-ecmascript', term: 'ECMAScript', definition: 'The standardised language specification maintained by TC39. JavaScript is that language plus the objects a host environment adds.', topicIds: ['mobile-js-engines'] },
  { id: 'term-origin', term: 'Origin', definition: 'The triple of scheme, host, and port. Any difference in any of the three makes a different origin.', topicIds: ['mobile-js-engines'] },
  { id: 'term-same-origin-policy', term: 'Same-Origin Policy', definition: 'The browser rule preventing a document from one origin reading the contents of a document from another, unless the far side opts in with CORS headers.', topicIds: ['mobile-js-engines'] },
  { id: 'term-dynamic-typing', term: 'Dynamic Typing', definition: 'Types belong to values, not to variables, so the same name may hold a number and later a string.', topicIds: ['mobile-js-types'] },
  { id: 'term-primitive', term: 'Primitive Value', definition: 'An immutable value compared by content: string, number, boolean, null, undefined, symbol, bigint. Everything else is an object compared by reference.', topicIds: ['mobile-js-types'] },
  { id: 'term-coercion', term: 'Type Coercion', definition: 'Automatic conversion of a value to another type, notably by == and by non-boolean conditions. Avoided by using === and explicit tests.', topicIds: ['mobile-js-types'] },
  { id: 'term-strict-equality', term: 'Strict Equality (===)', definition: 'Compares type first and never converts, so \'5\' === 5 is false. The default choice in modern JavaScript.', topicIds: ['mobile-js-types'] },
  { id: 'term-tdz', term: 'Temporal Dead Zone', definition: 'The span between entering a block and a let or const declaration executing, during which reading the name throws a ReferenceError instead of yielding undefined.', topicIds: ['mobile-js-types'] },
  { id: 'term-nan', term: 'NaN', definition: 'The result of an invalid numeric operation, and the only value not equal to itself — which is why Number.isNaN exists rather than a comparison.', topicIds: ['mobile-js-types'] },
  { id: 'term-truthy', term: 'Truthy and Falsy', definition: 'Falsy values are false, 0, -0, 0n, empty string, null, undefined, and NaN. Everything else is truthy, including the empty array and empty object.', topicIds: ['mobile-js-control-flow'] },
  { id: 'term-switch-fallthrough', term: 'Switch Fall-Through', definition: 'Omitting break causes execution to continue into the next case. Occasionally deliberate, usually a defect.', topicIds: ['mobile-js-control-flow'] },
  { id: 'term-for-in', term: 'for...in', definition: 'Iterates enumerable property keys of an object, including inherited ones, yielding strings. Intended for objects, not arrays.', topicIds: ['mobile-js-control-flow'] },
  { id: 'term-for-of', term: 'for...of', definition: 'Iterates the values of any iterable — array, string, Map, Set — in order. The correct loop for an array.', topicIds: ['mobile-js-control-flow'] },
  { id: 'term-array-methods', term: 'map, filter, reduce', definition: 'Array methods that state intent directly: transform each element, select a subset, or fold the collection into a single value.', topicIds: ['mobile-js-control-flow'] },
  { id: 'term-parameter-argument', term: 'Parameter versus Argument', definition: 'Parameters are the names in the definition; arguments are the values passed at the call. JavaScript does not enforce that they match in number.', topicIds: ['mobile-js-functions-objects'] },
  { id: 'term-closure', term: 'Closure', definition: 'A function that retains access to the variables of the scope where it was created, even after that scope has finished executing.', topicIds: ['mobile-js-functions-objects'] },
  { id: 'term-this-binding', term: 'this Binding', definition: 'The value of this is decided by the call site: the object before the dot, undefined for a plain call in strict mode, the new object under new, or whatever call/apply/bind supplied.', topicIds: ['mobile-js-functions-objects'] },
  { id: 'term-prototype-chain', term: 'Prototype Chain', definition: 'Property lookup walks from an object to its prototype and onward until the property is found or the chain ends. This is how inheritance works in JavaScript.', topicIds: ['mobile-js-functions-objects'] },
  { id: 'term-arrow-this', term: 'Arrow Function this', definition: 'An arrow function has no this of its own and inherits it lexically, which makes it right for callbacks inside a method and wrong for the method itself.', topicIds: ['mobile-js-functions-objects'] },
  { id: 'term-pwa', term: 'Progressive Web App', definition: 'A web application meeting platform criteria for installation and offline operation, supplied by a web app manifest and a service worker.', topicIds: ['mobile-pwa-offline'] },
  { id: 'term-service-worker', term: 'Service Worker', definition: 'A background script with no DOM access acting as a programmable network proxy for pages in its scope. Requires a secure context and must hold no in-memory state.', topicIds: ['mobile-pwa-offline'] },
  { id: 'term-app-manifest', term: 'Web App Manifest', definition: 'A JSON document declaring name, icons, theme colour, start URL, and display mode, allowing the browser to offer installation.', topicIds: ['mobile-pwa-offline'] },
  { id: 'term-cache-strategy', term: 'Caching Strategy', definition: 'The rule a service worker applies per request: cache-first, network-first, stale-while-revalidate, cache-only, or network-only. Chosen from the freshness requirement.', topicIds: ['mobile-pwa-offline'] },
  { id: 'term-background-sync', term: 'Background Sync', definition: 'Deferring a failed request until connectivity returns, so a form submitted offline is delivered without the user retrying.', topicIds: ['mobile-pwa-offline'] },
  { id: 'term-lcp', term: 'Largest Contentful Paint', definition: 'Core Web Vital for loading: the moment the main content becomes visible. Good is 2.5 seconds or less at the 75th percentile.', topicIds: ['mobile-performance-security'] },
  { id: 'term-inp', term: 'Interaction to Next Paint', definition: 'Core Web Vital for responsiveness across the page lifetime, good at 200 ms or less. Replaced First Input Delay as a stable vital in 2024.', topicIds: ['mobile-performance-security'] },
  { id: 'term-cls', term: 'Cumulative Layout Shift', definition: 'Core Web Vital for visual stability, good at 0.1 or less. Penalises content that moves after rendering.', topicIds: ['mobile-performance-security'] },
  { id: 'term-mobile-first', term: 'Mobile-First CSS', definition: 'Writing small-screen rules as the base and layering enhancements with min-width queries, keeping desktop assumptions out of the mobile path.', topicIds: ['mobile-performance-security'] },
  { id: 'term-secure-context', term: 'Secure Context', definition: 'HTTPS or localhost. Required for service workers, geolocation, camera, and other powerful APIs by design.', topicIds: ['mobile-performance-security'] },
];

export const flashcards: Flashcard[] = [
  {
    id: 'fc-mob-01',
    topicId: 'mobile-lifecycle',
    front: 'Which Android Activity lifecycle method is called right before the activity becomes visible to the user?',
    back: 'onStart()',
    tags: ['android', 'lifecycle'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-02',
    topicId: 'mobile-lifecycle',
    front: 'If a user receives a phone call while using your app, which lifecycle method is immediately triggered?',
    back: 'onPause()',
    tags: ['android', 'lifecycle'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-03',
    topicId: 'mobile-cross-platform',
    front: 'Does Flutter use native OEM UI widgets (like Android\'s Button or iOS\'s UIButton)?',
    back: 'No, Flutter draws its own widgets pixel-by-pixel using its rendering engine.',
    tags: ['flutter'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-04',
    topicId: 'mobile-cross-platform',
    front: 'What language is used to write Flutter apps?',
    back: 'Dart.',
    tags: ['flutter', 'language'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-05',
    topicId: 'mobile-sensors',
    front: 'Which sensor is used to determine the orientation of the phone (portrait vs landscape) by measuring gravity?',
    back: 'Accelerometer.',
    tags: ['hardware', 'sensors'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-06',
    topicId: 'mobile-uiux',
    front: 'According to Material Design guidelines, what is the minimum recommended touch target size in dp?',
    back: '48x48 dp.',
    tags: ['ux', 'design'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-07', topicId: 'mobile-web-form-foundations',
    front: 'Which two attributes explicitly connect a visible label to an input?',
    back: 'The label for attribute and the input id attribute must have the same value.',
    tags: ['forms', 'accessibility'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-08', topicId: 'mobile-web-form-foundations',
    front: 'What does the name attribute contribute that id does not?',
    back: 'It supplies the submission key used by native submission and FormData.',
    tags: ['forms', 'html'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-09', topicId: 'mobile-web-form-foundations',
    front: 'Does inputmode validate the value entered into a field?',
    back: 'No. It only hints at a suitable virtual keyboard; input type and validation constraints enforce value rules.',
    tags: ['forms', 'mobile'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-10', topicId: 'mobile-web-formdata',
    front: 'Why listen for submit on the form instead of click on the button?',
    back: 'The form listener receives supported submission paths including button activation and Enter-key submission.',
    tags: ['forms', 'events'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-11', topicId: 'mobile-web-formdata',
    front: 'Which FormData method preserves every value from controls that share one name?',
    back: 'getAll(name).',
    tags: ['forms', 'formdata'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-12', topicId: 'mobile-web-formdata',
    front: 'Name three controls that FormData omits.',
    back: 'Disabled controls, unnamed controls, and unchecked checkboxes or radio buttons.',
    tags: ['forms', 'formdata'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-13', topicId: 'mobile-web-form-safety',
    front: 'Why should user input usually be assigned with textContent instead of innerHTML?',
    back: 'textContent displays the value as text, while innerHTML parses markup and can create a DOM XSS sink.',
    tags: ['forms', 'security'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-14', topicId: 'mobile-web-form-safety',
    front: 'When should a form be reset after an asynchronous submission?',
    back: 'Only after the operation is confirmed successful, so errors do not destroy the user’s work.',
    tags: ['forms', 'ux'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-mob-15', topicId: 'mobile-web-form-safety',
    front: 'Does browser constraint validation replace server-side validation?',
    back: 'No. The client can be changed or bypassed, so the server must validate every request.',
    tags: ['forms', 'validation'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },

  { id: 'fc-mob-16', topicId: 'mobile-concepts', front: 'Name the three concepts that compose mobile computing.', back: 'Mobile communication (the radio infrastructure), mobile hardware (the device and its receptor), and mobile software (the OS and applications that must expect interruption).', tags: ['mobile'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-17', topicId: 'mobile-evolution', front: 'What changed fundamentally at 4G LTE?', back: 'The network became all-IP. Voice stopped being a separate circuit-switched service and became an application riding on the data network.', tags: ['mobile'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-18', topicId: 'mobile-js-engines', front: 'Why does a page become interactive quickly and then get faster?', back: 'A baseline compiler produces runnable code immediately; a profiler then finds hot functions and an optimising compiler recompiles them for the observed types.', tags: ['javascript'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-19', topicId: 'mobile-js-engines', front: 'What exactly is an origin?', back: 'The triple of scheme, host, and port. Any difference in any one of the three is a different origin.', tags: ['javascript', 'security'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-20', topicId: 'mobile-js-types', front: 'Why does typeof null return "object"?', back: 'A bug from the first implementation in 1995, preserved deliberately because fixing it would break existing pages. null is a primitive, not an object.', tags: ['javascript'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-21', topicId: 'mobile-js-types', front: 'What does const actually prevent?', back: 'Reassignment of the binding, not mutation of the value. A const array can still be pushed to; it just cannot be pointed at a different array.', tags: ['javascript'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-22', topicId: 'mobile-js-control-flow', front: 'Is an empty array truthy or falsy?', back: 'Truthy. So is an empty object. Test items.length === 0 rather than !items, which asks whether the array exists at all.', tags: ['javascript'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-23', topicId: 'mobile-js-control-flow', front: 'When should you use for...in rather than for...of?', back: 'for...in for object property keys; for...of for values of an iterable. On an array, for...in yields string indices and includes inherited properties.', tags: ['javascript'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-24', topicId: 'mobile-js-functions-objects', front: 'What decides the value of this?', back: 'The call site, not where the function was written. Method call, plain call, new, or explicit bind each produce a different this.', tags: ['javascript'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-25', topicId: 'mobile-js-functions-objects', front: 'Why is an arrow function right for a callback but wrong for a method?', back: 'It has no this of its own and inherits lexically. That is exactly what a callback inside a method needs, and exactly what a method itself must not do.', tags: ['javascript'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-26', topicId: 'mobile-pwa-offline', front: 'Why must a service worker hold no state in memory?', back: 'The browser terminates it when idle and restarts it on the next event, so anything kept in variables is lost between events.', tags: ['pwa'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-27', topicId: 'mobile-pwa-offline', front: 'Which caching strategy suits a news feed, and why?', back: 'Stale-while-revalidate — the cached copy paints instantly while a fresh copy is fetched in the background. One revision behind is acceptable for a feed.', tags: ['pwa'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-28', topicId: 'mobile-performance-security', front: 'Name the three Core Web Vitals and their good thresholds.', back: 'LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less — all assessed at the 75th percentile of real page loads.', tags: ['performance'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-mob-29', topicId: 'mobile-performance-security', front: 'Can a JWT be safely hidden in localStorage?', back: 'No. Any script running on the origin can read localStorage, IndexedDB, and caches. Tokens need short lifetimes and server-side revocation instead.', tags: ['security'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
];

export const questions: Question[] = [
  {
    id: 'q-mob-01',
    topicId: 'mobile-lifecycle',
    difficulty: 3,
    type: 'mcq',
    stem: 'You are writing an Android app that requires the camera. In which lifecycle method should you release the camera resource to ensure other apps can use it when your app is not in the foreground?',
    options: [
      'onCreate()',
      'onResume()',
      'onPause()',
      'onDestroy()'
    ],
    correct: [2],
    explanation: 'You should release exclusive resources like the camera in onPause() because the activity is no longer in the foreground and might be partially obscured, allowing other apps to take over the camera quickly.',
    adaptiveWeight: 1.5
  },
  {
    id: 'q-mob-02',
    topicId: 'mobile-cross-platform',
    difficulty: 2,
    type: 'mcq',
    stem: 'How does React Native achieve a native look and feel?',
    options: [
      'It compiles JavaScript into Java and Swift.',
      'It renders components inside a hidden web browser (WebView).',
      'It uses a Javascript bridge to invoke actual native UI components.',
      'It draws its own pixels using a custom C++ engine.'
    ],
    correct: [2],
    explanation: 'React Native runs a JavaScript thread that communicates asynchronously over a "bridge" to the native thread, telling it to instantiate real native OEM components.',
    adaptiveWeight: 1.0
  },
  {
    id: 'q-mob-03',
    topicId: 'mobile-uiux',
    difficulty: 1,
    type: 'mcq',
    stem: 'Why is the "Hamburger Menu" often moved to a bottom tab bar in modern mobile apps?',
    options: [
      'Because Apple banned hamburger menus.',
      'To increase the load speed of the app.',
      'To bring primary navigation into the "Thumb Zone" for easy one-handed reach.',
      'To save vertical screen space.'
    ],
    correct: [2],
    explanation: 'As phone screens have grown taller, reaching the top-left corner with a thumb requires shifting grip. Bottom tabs keep navigation comfortably within the natural thumb zone.',
    adaptiveWeight: 0.8
  },
  {
    id: 'q-mob-04',
    topicId: 'mobile-web-form-foundations',
    difficulty: 1,
    type: 'mcq',
    stem: 'An input has id="email" but no name attribute. What happens when new FormData(form) runs?',
    options: ['The value is stored under email automatically.', 'The control is omitted because it has no submission key.', 'The browser uses the label text as the key.', 'The constructor throws a TypeError.'],
    correct: [1],
    explanation: 'The id connects labels and enables DOM selection, but name supplies the key used for form submission. An unnamed control is not a successful control.',
    adaptiveWeight: 1.2
  },
  {
    id: 'q-mob-05',
    topicId: 'mobile-web-form-foundations',
    difficulty: 2,
    type: 'scenario',
    stem: 'A telephone field should show a phone-friendly keyboard while keeping its own validation policy. Which attribute is the keyboard hint?',
    options: ['required="tel"', 'autocomplete="keyboard"', 'inputmode="tel"', 'name="telephone"'],
    correct: [2],
    explanation: 'inputmode hints at a virtual keyboard. It does not validate the value, so type and application rules remain separate decisions.',
    adaptiveWeight: 1.0
  },
  {
    id: 'q-mob-06',
    topicId: 'mobile-web-formdata',
    difficulty: 2,
    type: 'scenario',
    stem: 'A user focuses the email field and presses Enter. Which listener most reliably handles the same action as tapping the submit button?',
    options: ['A click listener on the email input', 'A keydown listener on document', 'A submit listener on the form', 'A change listener on the button'],
    correct: [2],
    explanation: 'The native form submit event unifies button activation, Enter-key submission, and requestSubmit() after constraint validation succeeds.',
    adaptiveWeight: 1.4
  },
  {
    id: 'q-mob-07',
    topicId: 'mobile-web-formdata',
    difficulty: 3,
    type: 'scenario',
    stem: 'Three checked boxes share name="topics". Which expression preserves all selected values?',
    options: ['formData.get("topics")', 'Object.fromEntries(formData).topics', 'formData.getAll("topics")', 'formData.topics.values'],
    correct: [2],
    explanation: 'getAll() returns every entry for a repeated key. get() returns only the first, and a normal object property cannot represent duplicate keys.',
    adaptiveWeight: 1.5
  },
  {
    id: 'q-mob-08',
    topicId: 'mobile-web-form-safety',
    difficulty: 4,
    type: 'scenario',
    stem: 'A username contains <img src=x onerror=alert(1)>. Which output technique should display that exact text without creating an image element?',
    options: ['output.innerHTML = username', 'output.insertAdjacentHTML("beforeend", username)', 'output.textContent = username', 'document.write(username)'],
    correct: [2],
    explanation: 'textContent treats the value as text. The other choices parse or write HTML and can become DOM XSS sinks when supplied untrusted input.',
    adaptiveWeight: 1.8
  },
  {
    id: 'q-mob-09',
    topicId: 'mobile-web-form-safety',
    difficulty: 3,
    type: 'scenario',
    stem: 'A simulated network submission fails. What is the most usable recovery behavior?',
    options: ['Reset immediately and show a red border.', 'Keep the values, identify the error in text, and allow retry.', 'Reload the page to restore native behavior.', 'Disable the button permanently to prevent duplicates.'],
    correct: [1],
    explanation: 'Error recovery should preserve the user’s work, describe what happened without relying on color alone, and provide a retry path. Reset belongs after confirmed success.',
    adaptiveWeight: 1.5
  },

  {
    id: 'q-mob-10', topicId: 'mobile-concepts', difficulty: 2, type: 'mcq',
    stem: 'A desktop PC connects only over Wi-Fi and never moves. Is it wireless, mobile, or both?',
    options: ['Both, because it has no cable', 'Wireless only — it never changes its point of attachment', 'Mobile only', 'Neither, because it is a desktop'],
    correct: [1],
    explanation: 'Wireless concerns the medium; mobility concerns changing point of attachment. The two are solved at different layers, which is why the distinction matters.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-mob-11', topicId: 'mobile-evolution', difficulty: 3, type: 'mcq',
    stem: 'Why does a 5G handset fall back to 4G rather than running 5G slowly at the edge of coverage?',
    options: ['5G is a software mode of the 4G radio', 'Each generation is a distinct air interface, so the handset switches radios', 'The carrier throttles the connection deliberately', 'The battery cannot sustain 5G at range'],
    correct: [1],
    explanation: 'Generations define new frequency bands, modulation, and framing and are not backward compatible at the radio layer. Handsets carry radios for earlier generations rather than degrading one radio.',
    adaptiveWeight: 2,
  },
  {
    id: 'q-mob-12', topicId: 'mobile-js-engines', difficulty: 3, type: 'mcq',
    stem: 'A page on https://shop.example.com tries to read the DOM of a page on https://api.example.com. What happens and why?',
    options: ['It succeeds — same registrable domain', 'It is blocked; the hosts differ, so the origins differ', 'It succeeds if both use HTTPS', 'It is blocked only if the ports differ'],
    correct: [1],
    explanation: 'An origin is scheme + host + port. Different subdomains are different hosts and therefore different origins. Cross-origin reads require the far side to opt in.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-mob-13', topicId: 'mobile-js-types', difficulty: 3, type: 'mcq',
    stem: 'What do `\x27\x35\x27 == 5` and `\x27\x35\x27 === 5` evaluate to, respectively?',
    options: ['true and true', 'true and false', 'false and false', 'false and true'],
    correct: [1],
    explanation: 'Loose equality coerces the operands to a common type, so the string converts to a number and matches. Strict equality compares type first and never converts, so it is false.',
    adaptiveWeight: 2,
  },
  {
    id: 'q-mob-14', topicId: 'mobile-js-types', difficulty: 4, type: 'scenario',
    stem: 'Reading a variable before its declaration line yields undefined in one file and throws a ReferenceError in another. What differs?',
    options: ['One file is a module and the other is not', 'The first used var; the second used let or const', 'The second file has a syntax error', 'The engine optimised one file and not the other'],
    correct: [1],
    explanation: 'var is hoisted and initialised to undefined. let and const are hoisted into the temporal dead zone, so reading them early throws — converting a silent bug into an immediate error.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-mob-15', topicId: 'mobile-js-control-flow', difficulty: 3, type: 'scenario',
    stem: 'A guard written as `if (!items)` never fires even when the array holds nothing. Why?',
    options: ['Arrays cannot be used in conditions', 'An empty array is truthy, so !items is false', 'The array was undefined, not empty', 'Strict mode disables truthiness'],
    correct: [1],
    explanation: 'Only false, 0, -0, 0n, empty string, null, undefined, and NaN are falsy. An empty array is an object and therefore truthy; the correct test is items.length === 0.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-mob-16', topicId: 'mobile-js-control-flow', difficulty: 2, type: 'mcq',
    stem: 'Which loop yields the values of an array in order?',
    options: ['for...in', 'for...of', 'Both give values', 'Neither; only a classic for loop can'],
    correct: [1],
    explanation: 'for...of iterates values of any iterable in order. for...in iterates enumerable keys as strings, includes inherited properties, and does not guarantee order — it is meant for objects.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-mob-17', topicId: 'mobile-js-functions-objects', difficulty: 4, type: 'scenario',
    stem: 'Inside a method, `this.items.forEach(function () { this.count++; })` throws in strict mode. What is the cleanest fix?',
    options: ['Rename this to self at the top of the method', 'Use an arrow function as the callback so this is inherited lexically', 'Convert the method itself to an arrow function', 'Use for...in instead of forEach'],
    correct: [1],
    explanation: 'The plain callback is invoked without a receiver, so its this is undefined. An arrow function has no this of its own and inherits the method\'s. Making the method an arrow would break it, since a method needs its own this.',
    adaptiveWeight: 3,
  },
  {
    id: 'q-mob-18', topicId: 'mobile-pwa-offline', difficulty: 3, type: 'scenario',
    stem: 'An account balance screen must never show a stale figure, but the app must still install and work offline elsewhere. Which strategy fits the balance request?',
    options: ['Cache-first', 'Stale-while-revalidate', 'Network-only, with an explicit offline message', 'Cache-only'],
    correct: [2],
    explanation: 'Where stale is worse than unavailable, the request must not be served from cache. The rest of the app can still be cached; strategy is chosen per request, not per application.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-mob-19', topicId: 'mobile-performance-security', difficulty: 3, type: 'mcq',
    stem: 'Images without width and height attributes are hurting which Core Web Vital, and what is its good threshold?',
    options: ['LCP; 2.5 seconds or less', 'INP; 200 milliseconds or less', 'CLS; 0.1 or less', 'FID; 100 milliseconds or less'],
    correct: [2],
    explanation: 'Unsized images let content reflow once they load, which is exactly what Cumulative Layout Shift measures. Declaring intrinsic dimensions lets the browser reserve the space in advance.',
    adaptiveWeight: 2,
  },
  {
    id: 'q-mob-20', topicId: 'mobile-performance-security', difficulty: 3, type: 'mcq',
    stem: 'Why are Core Web Vitals assessed at the 75th percentile rather than the mean?',
    options: ['It is cheaper to compute', 'An average conceals the slow devices and congested networks mobile users routinely have', 'It matches the HTTP specification', 'Percentiles are required for HTTPS'],
    correct: [1],
    explanation: 'A mean is dominated by fast loads and can look healthy while a large minority has an unusable experience. The 75th percentile keeps the target honest about real-world conditions.',
    adaptiveWeight: 2,
  },
];
