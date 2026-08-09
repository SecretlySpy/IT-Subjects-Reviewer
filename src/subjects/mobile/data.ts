import { SubjectMeta, Topic, Flashcard, Question, GlossaryTerm } from '@/types/study';
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
    id: 'mobile-lifecycle',
    subjectId: 'mobile',
    title: 'Android Activity Lifecycle',
    order: 1,
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
    order: 2,
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
    order: 3,
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
    order: 4,
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
    id: 'mobile-web-form-foundations',
    subjectId: 'mobile',
    title: 'Mobile-First HTML Form Foundations',
    order: 5,
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
    order: 6,
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
    order: 7,
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
  }
];

export const subjectMeta: SubjectMeta = {
  id: 'mobile',
  title: 'Mobile Computing & Development',
  shortTitle: 'Mobile Computing',
  description: 'Android lifecycle, cross-platform frameworks, mobile sensors, touch-first UI/UX, and safe interactive mobile web forms.',
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
  { id: 'term-text-content', term: 'textContent', definition: 'A DOM property that reads or writes text without parsing the value as HTML markup.', topicIds: ['mobile-web-form-safety'] }
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
  }
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
  }
];
