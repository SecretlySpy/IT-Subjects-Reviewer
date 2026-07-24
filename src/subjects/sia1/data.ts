import { SubjectMeta, Topic, Flashcard, Question, GlossaryTerm } from '@/types/study';
import { tokens } from '@/design-system/tokens';

export const subjectMeta: SubjectMeta = {
  id: 'sia1',
  title: 'Systems Integration & Architecture 1',
  shortTitle: 'Sys Integration 1',
  description: 'Enterprise architecture, data modeling, middleware, and integrating disparate software systems.',
  accent: tokens.colors.subject.sia1,
  topicCount: 4,
  estimatedHours: 15,
};

export const topics: Topic[] = [
  {
    id: 'sia1-eia',
    subjectId: 'sia1',
    title: 'Enterprise Integration Architecture (EIA)',
    order: 1,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'EIA is like a city planner\'s master blueprint. It ensures that the roads (networks), buildings (applications), and water pipes (data) all connect properly so the city functions as one unit, rather than isolated neighborhoods.',
      deepDive: 'Enterprise Integration Architecture (EIA) provides a structured methodology to align business processes with IT infrastructure. It mitigates the "silo" effect by defining standard interfaces, data exchange formats (e.g., JSON, XML), and communication protocols (e.g., REST, SOAP, AMQP). The core goal is achieving interoperability, scalability, and agility. Common integration patterns include Point-to-Point (not scalable), Hub-and-Spoke, and Enterprise Service Bus (ESB).',
      analogy: 'Without EIA, a company\'s software is like a group of people speaking different languages in a noisy room. EIA introduces a universal translator and a polite turn-taking rule.',
      visualAidType: 'diagram',
      visualAidData: { 
        type: 'eia-hub-spoke',
        nodes: ['CRM', 'ERP', 'Billing', 'ESB Hub']
      }
    },
    relatedTermIds: ['term-eia', 'term-esb', 'term-silo'],
    tags: ['architecture', 'eia', 'integration']
  },
  {
    id: 'sia1-middleware',
    subjectId: 'sia1',
    title: 'Middleware & Messaging',
    order: 2,
    estimatedMinutes: 60,
    professorMode: {
      eli5: 'Middleware is the "software glue." If two different apps need to talk but use different data formats, middleware sits in the middle, takes the message, translates it, and hands it over safely.',
      deepDive: 'Middleware sits between the OS and applications on different nodes of the network. Message-Oriented Middleware (MOM) enables asynchronous communication via message queues or publish/subscribe models. Examples include RabbitMQ and Apache Kafka. This decouples the sender from the receiver, ensuring that if the receiver is temporarily down, the message is stored in a queue and processed later, enhancing system fault tolerance.',
      analogy: 'Middleware is the postal service. You drop a letter in the box (queue). You don\'t need to know if the recipient is home right now; the post office guarantees it will sit in their mailbox until they check it.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'pub-sub-model',
        topics: ['Orders', 'Inventory'],
        subscribers: ['Billing Service', 'Shipping Service']
      }
    },
    relatedTermIds: ['term-middleware', 'term-mom', 'term-pubsub'],
    tags: ['middleware', 'messaging', 'asynchronous']
  },
  {
    id: 'sia1-soa-microservices',
    subjectId: 'sia1',
    title: 'SOA vs. Microservices',
    order: 3,
    estimatedMinutes: 50,
    professorMode: {
      eli5: 'SOA is like a massive department store where everything shares one giant checkout system. Microservices is like a street of independent boutiques where each shop handles its own checkout entirely on its own.',
      deepDive: 'Service-Oriented Architecture (SOA) typically relies on a centralized Enterprise Service Bus (ESB) to route and transform messages between coarse-grained services. It often shares a monolithic database. Microservices Architecture (MSA) breaks applications into fine-grained, independently deployable services that communicate via lightweight protocols (like HTTP/REST or gRPC). Crucially, each microservice usually owns its own database, enforcing strict bounded contexts (Domain-Driven Design).',
      analogy: 'SOA shares the kitchen (database) and uses a head waiter (ESB) to pass orders. Microservices gives every chef their own food truck; they only talk to each other by calling out the window (API).',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Feature', 'SOA', 'Microservices'],
        rows: [
          ['Coordination', 'Centralized ESB', 'Choreography / Orchestration'],
          ['Data Storage', 'Often Shared', 'Database per Service'],
          ['Granularity', 'Coarse-grained', 'Fine-grained']
        ]
      }
    },
    relatedTermIds: ['term-soa', 'term-microservices', 'term-bounded-context'],
    tags: ['architecture', 'microservices', 'soa']
  },
  {
    id: 'sia1-apis',
    subjectId: 'sia1',
    title: 'RESTful APIs & GraphQL',
    order: 4,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'REST is like ordering from a set menu; you get exactly the meal as described. GraphQL is like a buffet where you hand the chef a list of exactly which ingredients you want on your plate, nothing more, nothing less.',
      deepDive: 'REST (Representational State Transfer) uses standard HTTP methods (GET, POST, PUT, DELETE) to manipulate resources identified by URIs. It suffers from over-fetching (getting too much data) or under-fetching (needing multiple requests). GraphQL is a query language developed by Facebook that allows clients to define the exact shape of the data they need in a single request, aggregating data from multiple underlying sources via a single endpoint.',
      analogy: 'In REST, you ask the librarian for "Book #5," and they hand you the whole book. In GraphQL, you ask the librarian for "Paragraph 3 on Page 12 of Book #5," and they hand you just that text.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Attribute', 'REST', 'GraphQL'],
        rows: [
          ['Endpoints', 'Multiple (per resource)', 'Single Endpoint'],
          ['Data Retrieval', 'Fixed payload', 'Client-specified'],
          ['Learning Curve', 'Low (Standard HTTP)', 'Moderate (Query syntax)']
        ]
      }
    },
    relatedTermIds: ['term-rest', 'term-graphql', 'term-overfetching'],
    tags: ['api', 'rest', 'graphql']
  }
];

export const glossary: GlossaryTerm[] = [
  { id: 'term-eia', term: 'EIA', definition: 'Enterprise Integration Architecture. A framework for connecting disparate enterprise systems.', topicIds: ['sia1-eia'] },
  { id: 'term-esb', term: 'ESB', definition: 'Enterprise Service Bus. A centralized software architecture model used in SOA for designing and implementing communication between mutually interacting software applications.', topicIds: ['sia1-eia', 'sia1-soa-microservices'] },
  { id: 'term-silo', term: 'Information Silo', definition: 'An isolated data system incapable of reciprocal operation with other systems.', topicIds: ['sia1-eia'] },
  { id: 'term-middleware', term: 'Middleware', definition: 'Software that provides common services and capabilities to applications outside of what\'s offered by the OS.', topicIds: ['sia1-middleware'] },
  { id: 'term-mom', term: 'MOM', definition: 'Message-Oriented Middleware. Infrastructure supporting the sending and receiving of messages between distributed systems.', topicIds: ['sia1-middleware'] },
  { id: 'term-pubsub', term: 'Publish/Subscribe', definition: 'A messaging pattern where senders (publishers) categorize messages into classes without knowledge of subscribers.', topicIds: ['sia1-middleware'] },
  { id: 'term-soa', term: 'SOA', definition: 'Service-Oriented Architecture. An architectural style focused on discrete services provided to other components.', topicIds: ['sia1-soa-microservices'] },
  { id: 'term-microservices', term: 'Microservices', definition: 'An architectural style that structures an application as a collection of loosely coupled, independently deployable services.', topicIds: ['sia1-soa-microservices'] },
  { id: 'term-bounded-context', term: 'Bounded Context', definition: 'A central pattern in Domain-Driven Design indicating the boundary within which a particular domain model applies.', topicIds: ['sia1-soa-microservices'] },
  { id: 'term-rest', term: 'REST', definition: 'Representational State Transfer. An architectural style for distributed hypermedia systems.', topicIds: ['sia1-apis'] },
  { id: 'term-graphql', term: 'GraphQL', definition: 'A query language for APIs and a runtime for fulfilling those queries with existing data.', topicIds: ['sia1-apis'] },
  { id: 'term-overfetching', term: 'Over-fetching', definition: 'When a client downloads more data than is actually required by the UI (common in REST).', topicIds: ['sia1-apis'] }
];

export const flashcards: Flashcard[] = [
  {
    id: 'fc-sia1-01',
    topicId: 'sia1-eia',
    front: 'What is the primary drawback of a Point-to-Point integration architecture?',
    back: 'It creates a tightly coupled, highly complex "spaghetti" network that does not scale well as new applications are added (O(n^2) connections).',
    tags: ['architecture'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-sia1-02',
    topicId: 'sia1-middleware',
    front: 'What does MOM stand for in the context of systems integration?',
    back: 'Message-Oriented Middleware.',
    tags: ['middleware'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-sia1-03',
    topicId: 'sia1-middleware',
    front: 'How does asynchronous messaging improve fault tolerance?',
    back: 'If the receiving system goes down, messages are persisted in a queue by the middleware until the receiver recovers, preventing data loss.',
    tags: ['middleware'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-sia1-04',
    topicId: 'sia1-soa-microservices',
    front: 'Which architecture pattern typically relies on an ESB (Enterprise Service Bus)?',
    back: 'Service-Oriented Architecture (SOA).',
    tags: ['soa'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-sia1-05',
    topicId: 'sia1-soa-microservices',
    front: 'In Microservices Architecture, what is the best practice regarding database sharing?',
    back: 'Database-per-service. Microservices should not share a database to maintain loose coupling.',
    tags: ['microservices'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-sia1-06',
    topicId: 'sia1-apis',
    front: 'What is the term for downloading more data from an API than the client actually needs?',
    back: 'Over-fetching.',
    tags: ['api'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-sia1-07',
    topicId: 'sia1-apis',
    front: 'Unlike REST which has many endpoints, how many endpoints does a typical GraphQL API expose?',
    back: 'One single endpoint.',
    tags: ['api', 'graphql'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  }
];

export const questions: Question[] = [
  {
    id: 'q-sia1-01',
    topicId: 'sia1-eia',
    difficulty: 2,
    type: 'mcq',
    stem: 'Why do large enterprises adopt an Enterprise Service Bus (ESB)?',
    options: [
      'To completely eliminate the need for databases.',
      'To provide centralized routing, translation, and communication between systems.',
      'To replace HTML frontends with React.',
      'To increase the coupling between individual services.'
    ],
    correct: [1],
    explanation: 'An ESB acts as the centralized hub that handles routing, protocol translation, and data transformation, reducing the tight coupling of point-to-point connections.',
    adaptiveWeight: 1.0
  },
  {
    id: 'q-sia1-02',
    topicId: 'sia1-soa-microservices',
    difficulty: 4,
    type: 'scenario',
    stem: 'A company has a massive e-commerce monolith. They want to migrate to microservices. The billing team and the shipping team currently query the same "Orders" SQL table directly. What should they do under the microservices model?',
    options: [
      'Keep the shared database, but write APIs to access it.',
      'Split the database into a Billing DB and a Shipping DB, and use APIs to request data across boundaries.',
      'Use an ESB to sync the shared database to a cloud instance.',
      'Convert the SQL database to NoSQL.'
    ],
    correct: [1],
    explanation: 'Microservices dictate a "database-per-service" pattern to maintain bounded contexts. If Shipping needs Billing data, it must call the Billing API, not query the Billing database directly.',
    adaptiveWeight: 2.5
  },
  {
    id: 'q-sia1-03',
    topicId: 'sia1-apis',
    difficulty: 3,
    type: 'mcq',
    stem: 'Which scenario best demonstrates the advantage of GraphQL over REST?',
    options: [
      'A mobile app needs a user\'s name, their last 3 order IDs, and the status of the current order, which would require 3 separate REST endpoint calls.',
      'A service needs to upload a massive video file in chunks.',
      'An IoT device sends a simple temperature float value every second.',
      'A web browser needs to cache a static image.'
    ],
    correct: [0],
    explanation: 'GraphQL allows the mobile app to request the exact nested shape (user name, 3 order IDs, order status) in one single query, solving the under-fetching problem of REST.',
    adaptiveWeight: 1.5
  }
];
