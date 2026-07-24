import { SubjectMeta, Topic, Flashcard, Question, GlossaryTerm } from '@/types/study';
import { tokens } from '@/design-system/tokens';

export const subjectMeta: SubjectMeta = {
  id: 'mobile',
  title: 'Mobile Computing & Development',
  shortTitle: 'Mobile Computing',
  description: 'Android lifecycle, cross-platform frameworks, mobile sensors, and UI/UX for touch devices.',
  accent: tokens.colors.subject.mobile,
  topicCount: 4,
  estimatedHours: 12,
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
  }
];

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
  { id: 'term-thumb-zone', term: 'Thumb Zone', definition: 'The area of a phone screen easily reachable with the thumb while holding the phone one-handed.', topicIds: ['mobile-uiux'] }
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
  }
];
