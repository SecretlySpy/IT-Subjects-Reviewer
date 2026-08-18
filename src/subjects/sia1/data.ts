import { SubjectMeta, Topic, Flashcard, Question, GlossaryTerm, SourceReference } from '@/types/study';
// Shared primary-source citations for the topics added from the Canvas syllabus.
const isoPm: SourceReference = { title: 'ISO 21502:2020 — Project, programme and portfolio management: Guidance on project management', publisher: 'ISO', url: 'https://www.iso.org/standard/74947.html' };
const pmiStandards: SourceReference = { title: 'PMBOK Guide and PMI Standards Library', publisher: 'Project Management Institute', url: 'https://www.pmi.org/standards' };
const isoInnovation: SourceReference = { title: 'ISO 56002:2019 — Innovation management system guidance', publisher: 'ISO', url: 'https://www.iso.org/standard/68221.html' };
const adrOrg: SourceReference = { title: 'Architectural Decision Records', publisher: 'ADR GitHub Organization', url: 'https://adr.github.io/' };
const c4Model: SourceReference = { title: 'The C4 model for visualising software architecture', publisher: 'c4model.com', url: 'https://c4model.com/' };
const arc42: SourceReference = { title: 'arc42 architecture documentation template', publisher: 'arc42', url: 'https://arc42.org/overview' };
const rfc9110: SourceReference = { title: 'RFC 9110: HTTP Semantics', publisher: 'IETF', url: 'https://datatracker.ietf.org/doc/rfc9110/' };
const openApi: SourceReference = { title: 'OpenAPI Specification v3.2.0', publisher: 'OpenAPI Initiative', url: 'https://spec.openapis.org/oas/latest.html' };
const graphqlSpec: SourceReference = { title: 'GraphQL Specification', publisher: 'GraphQL Foundation', url: 'https://spec.graphql.org/October2021/' };
const soap12: SourceReference = { title: 'SOAP Version 1.2 Part 1: Messaging Framework', publisher: 'W3C Recommendation', url: 'https://www.w3.org/TR/soap12-part1/' };
const rfc6749: SourceReference = { title: 'RFC 6749: The OAuth 2.0 Authorization Framework', publisher: 'IETF', url: 'https://datatracker.ietf.org/doc/rfc6749/' };
const rfc7519: SourceReference = { title: 'RFC 7519: JSON Web Token (JWT)', publisher: 'IETF', url: 'https://datatracker.ietf.org/doc/rfc7519/' };
const grpcDocs: SourceReference = { title: 'Introduction to gRPC', publisher: 'gRPC (CNCF)', url: 'https://grpc.io/docs/what-is-grpc/introduction/' };
const iso25010: SourceReference = { title: 'ISO/IEC 25010 — Systems and software quality models', publisher: 'ISO', url: 'https://www.iso.org/standard/78176.html' };
const jmeter: SourceReference = { title: 'Apache JMeter User Manual', publisher: 'Apache Software Foundation', url: 'https://jmeter.apache.org/usermanual/index.html' };
const sreSlo: SourceReference = { title: 'Site Reliability Engineering: Service Level Objectives', publisher: 'Google SRE', url: 'https://sre.google/sre-book/service-level-objectives/' };
const nistTls: SourceReference = { title: 'NIST SP 800-52 Rev. 2 — Guidelines for TLS Implementations', publisher: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/52/r2/final' };
const xmlSpec: SourceReference = { title: 'Extensible Markup Language (XML) 1.0 (Fifth Edition)', publisher: 'W3C Recommendation', url: 'https://www.w3.org/TR/xml/' };
const xsdSpec: SourceReference = { title: 'W3C XML Schema Definition Language (XSD) 1.1 Part 1: Structures', publisher: 'W3C Recommendation', url: 'https://www.w3.org/TR/xmlschema11-1/' };
const xpathSpec: SourceReference = { title: 'XML Path Language (XPath) 3.1', publisher: 'W3C Recommendation', url: 'https://www.w3.org/TR/xpath-31/' };
const owaspXxe: SourceReference = { title: 'XML External Entity Prevention Cheat Sheet', publisher: 'OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html' };
import { tokens } from '@/design-system/tokens';

export const topics: Topic[] = [
  {
    id: 'sia1-eia',
    subjectId: 'sia1',
    title: 'Enterprise Information Architecture (EIA)',
    order: 1,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'EIA is a city planner\'s master blueprint. It makes sure the roads (networks), buildings (applications), and water pipes (data) connect properly so the city works as one place instead of isolated neighbourhoods.',
      deepDive: 'Enterprise Architecture (EA) links an organisation\'s business mission and strategy to its IT strategy, and is documented using multiple architectural models that must adapt to changing requirements and technology. Enterprise Information Architecture (EIA) is the information-centred viewpoint inside EA: the requirements, principles, and models that describe the current state, the target state, and the guidance needed to share information assets flexibly. Four methodologies dominate the field. TOGAF divides EA into business, application, data, and technical architecture. The Zachman Framework crosses six descriptive foci (data, function, network, people, time, motivation) with six player perspectives, producing a 36-cell grid. The Federal Enterprise Architecture uses five reference models: business, components, technical, data, and performance. The Gartner methodology brings business owners, information specialists, and technology implementers together. A well-defined EIA gains transparency by keeping information independent of any single application, considers enterprise-wide requirements, and exposes inconsistencies, conflicts, overlaps, and gaps. Its primary goal is reducing complexity so the organisation can absorb change. Crucially, EIA does not target every byte in the enterprise—only the information assets with enterprise significance that are needed to achieve effective business change.',
      analogy: 'Without EIA, a company\'s software is a group of people speaking different languages in a noisy room. EIA introduces a shared vocabulary and a rule about taking turns.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'eia-hub-spoke',
        nodes: ['CRM', 'ERP', 'Billing', 'ESB Hub'],
      },
    },
    relatedTermIds: ['term-ea', 'term-eia', 'term-togaf', 'term-zachman', 'term-silo'],
    tags: ['architecture', 'eia', 'integration'],
  },
  {
    id: 'sia1-governance',
    subjectId: 'sia1',
    title: 'IT Governance and Risk',
    order: 2,
    estimatedMinutes: 50,
    professorMode: {
      eli5: 'Governance is the steering wheel, not the engine. The board decides where IT should go and checks that it got there; management does the driving.',
      deepDive: 'Governance of Enterprise IT (GEIT) is the responsibility of the board of directors and executive management. It exists to answer two questions: is IT delivering value to the business, and is IT-related risk being managed? The framework answers them through three broad processes—IT resource management (an up-to-date inventory of IT resources and their risk), performance measurement (indicators tuned for value delivery, where deviation is an early risk signal), and compliance management (legal, regulatory, policy, and contractual requirements). Two committees are commonly confused. The IT strategy committee advises the board on strategic direction, value, risk, and future capability. The IT steering committee is a management group that reviews plans against corporate objectives, approves major acquisitions within board limits, prioritises projects and budgets, approves sourcing strategies, and allocates resources. Risk management identifies vulnerabilities and threats to information resources and treats them in one of four ways: avoid, mitigate, transfer, or accept. Whatever remains after controls is residual risk, and accepting it is an explicit management decision. Segregation of duties separates authorisation, custody of assets, and recording of transactions; where that separation is impractical, compensating controls such as audit trails, reconciliation, exception reporting, and independent review take its place.',
      analogy: 'The board is the ship\'s owner setting the destination and reading the instruments; the captain and crew are management. Owners who never read the instruments discover problems only when the ship is aground.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Risk treatment', 'What you do', 'Example'],
        rows: [
          ['Avoid', 'Stop the risky activity.', 'Retire a legacy service that cannot be secured economically.'],
          ['Mitigate', 'Reduce likelihood or impact.', 'Add multifactor authentication and monitoring.'],
          ['Transfer', 'Shift part of the impact elsewhere.', 'Buy cyber insurance.'],
          ['Accept', 'Knowingly retain the residual risk.', 'Document a low-impact risk that costs more to fix than to bear.'],
        ],
      },
    },
    relatedTermIds: ['term-geit', 'term-residual-risk', 'term-sod', 'term-steering-committee'],
    tags: ['governance', 'risk', 'controls'],
  },
  {
    id: 'sia1-data-modelling',
    subjectId: 'sia1',
    title: 'Information and Data Modelling',
    order: 3,
    estimatedMinutes: 40,
    professorMode: {
      eli5: 'Data is a building block that means the same thing everywhere. Information is data placed in a context so a person or a process can act on it.',
      deepDive: 'The information and data layer of an enterprise architecture meta model separates two ideas that beginners routinely merge. Data has the same value and meaning regardless of the context in which it is used—Customer, Product, Currency, Invoice. Information is data in context: the report a BI tool produces, the view an application presents, the message two applications exchange. Applications store and manage data; business processes consume information. The layer is split into three views. The conceptual view defines the what: information architecture objectives, principles, and drivers, plus information concepts (Cost, Stock Volume) and data subjects (Customer, Product, Site, Employee). These provide the semantic grounding for everything below. The logical view defines the how: information views refine a concept for a particular audience (Customer::Marketing View), information view attributes specify derivations, data objects group data attributes, and representations bind them to a technology such as an Oracle HR database or a payroll spreadsheet. The physical view captures the where: an information store is a deployed representation with a role such as Production, Development, or Test, and a physical data object is the data actually sitting in that store. A useful rule of thumb is that a healthy conceptual model has many more information concepts than data subjects.',
      analogy: 'The word "42" is data. "42 degrees Celsius, patient temperature, taken now" is information—the context is what makes it worth acting on.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Layer', 'Question', 'Example construct'],
        rows: [
          ['Conceptual', 'What matters?', 'Information Concept, Data Subject'],
          ['Logical', 'How is it represented?', 'Information View, Data Object'],
          ['Physical', 'Where is it deployed?', 'Information Store, Physical Data Object'],
        ],
      },
    },
    relatedTermIds: ['term-information', 'term-data', 'term-data-subject', 'term-information-store'],
    tags: ['modelling', 'data', 'information'],
  },
  {
    id: 'sia1-soa',
    subjectId: 'sia1',
    title: 'Service-Oriented Architecture (SOA)',
    order: 4,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'SOA builds an application out of separate services that each do one clear job and agree on how to talk. Anything that follows the agreed contract can reuse them.',
      deepDive: 'Service-Oriented Architecture is a software design style in which application components provide services to other components through communication protocols such as SOAP. A service is a clear, independent function that can exchange data with other services without depending on their internals; it uses a loosely coupled, message-based design. Services fall into families. Infrastructure services handle non-functional work—logging, authentication, security—and subdivide into communication services (message transport) and utility services (reusable technical capabilities such as event logging and notification). Business services perform business functions and subdivide into activity, process, entity, and capability services. Application services expose a dedicated user interface that invokes other services. Enterprise services implement functionality defined by the business services, drawing on infrastructure and application services. Nine design principles keep services reusable: standardised service contract, loose coupling, service abstraction, reusability, autonomy, statelessness, discoverability, composability, and interoperability. Three participants make discovery work: the service provider creates a service and publishes its description; the service registry (also called the broker or repository) holds those offers; the service consumer finds an entry, binds to the provider, and invokes the service. The reference framework has five horizontal layers—consumer interface, business process, services, service component, and operational systems.',
      analogy: 'A restaurant kitchen with stations. The grill station does not care who ordered the steak; it only needs the ticket in the agreed format.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['SOA principle', 'Meaning', 'What breaks without it'],
        rows: [
          ['Standardised contract', 'Every service publishes a description.', 'Consumers guess at the interface.'],
          ['Loose coupling', 'Services minimise dependencies.', 'One failure stops the client application.'],
          ['Statelessness', 'No data is kept between requests.', 'Only one instance can serve a caller.'],
          ['Discoverability', 'Services can be found in a registry.', 'Addresses get hard-coded everywhere.'],
        ],
      },
    },
    relatedTermIds: ['term-soa', 'term-service', 'term-esb', 'term-service-registry', 'term-loose-coupling'],
    tags: ['architecture', 'soa', 'services'],
  },
  {
    id: 'sia1-microservices',
    subjectId: 'sia1',
    title: 'Microservice Architecture',
    order: 5,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'Instead of one huge program, you build many small ones that work together. Each is deployed and scaled on its own, so changing one does not force you to redeploy everything.',
      deepDive: 'The microservices architecture style develops small services that each run in their own process, enabling continuous delivery of large, complex applications and letting an organisation evolve its technology stack. It contrasts with a monolithic application, which is developed and deployed all in one piece. Microservices split into infrastructure services (security, logging, auditing) and functional services (business operations). Design traits include a distributed architecture where services communicate through an API gateway over REST or RPC, separately deployed components so a change in one does not force redeployment of the others, service components that locate each other through service discovery, and bounded contexts that encapsulate one domain and define its integration with others. The defining characteristics are: small in size, messaging enabled, bounded by contexts, autonomously developed, independently deployable, decentralised, and built and released with automated processes. Because microservices are isolated, they need an inter-process communication mechanism. The supporting components are clients, an identity provider that authenticates and issues tokens, an API gateway that handles requests from many clients, static content, service discovery, a content delivery network, and remote services. The payoff is targeted scaling and deployment: only the component under load is scaled, and only the changed service is deployed. Best practices are independent teams, automate everything, build for resilience, simplify maintenance with documentation, and give teams flexibility.',
      analogy: 'SOA shares one kitchen and a head waiter. Microservices give every chef their own food truck; they coordinate by calling out the window.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Concern', 'SOA', 'Microservices'],
        rows: [
          ['Coordination', 'Often a centralised bus.', 'Choreography through lightweight APIs.'],
          ['Granularity', 'Coarse-grained services.', 'Fine-grained services.'],
          ['Deployment', 'Larger shared release units.', 'Independently deployable services.'],
          ['Scaling', 'Scale the shared platform.', 'Scale only the loaded component.'],
        ],
      },
    },
    relatedTermIds: ['term-microservices', 'term-monolith', 'term-api-gateway', 'term-bounded-context'],
    tags: ['architecture', 'microservices', 'scalability'],
  },
  {
    id: 'sia1-data-representation',
    subjectId: 'sia1',
    title: 'Data Representation: XML and JSON',
    order: 6,
    estimatedMinutes: 40,
    professorMode: {
      eli5: 'XML and JSON are two ways of writing data down so that any program can read it. XML lets you invent tags; JSON writes name-value pairs and lists.',
      deepDive: 'XML is a hierarchical, human-readable markup language designed to carry data rather than display it, and its tags are defined by the author rather than predefined. It contains two kinds of items: elements, which nest, may repeat, and whose order matters, and attributes, which are named values that appear at most once per element and whose order does not matter. Any legal XML document is parsable without knowing what the tags mean, provided it is well-formed: a prolog declaring version and encoding, exactly one root element, a closing tag for every open tag (or the empty-element shortcut), quoted attribute values, correct nesting, and case-sensitive names. JSON specifies objects as name-value pairs. A JSON instance contains a single value, which may be an object, array, number, string, true, false, or null. Objects wrap string-colon-value pairs in braces; arrays wrap ordered values in brackets. Keys must be unique because parser behaviour on duplicates is unpredictable, and many implementations report only the last pair. Strings are double-quoted, must escape the quotation mark, backslash, and control characters U+0000 to U+001F, and may not span lines—the newline is written as the two-symbol escape sequence. JSON has no comment syntax. Both are hierarchical, language independent, and used by Ajax; JSON is less verbose and has native arrays, while XML can be validated and normalises newlines. Both have schema languages written in themselves: XML Schema in XML, JSON Schema in JSON.',
      analogy: 'XML is a labelled filing cabinet: every folder is named and can hold folders. JSON is a shopping list with headings—shorter to write, just as easy to follow.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Aspect', 'XML', 'JSON'],
        rows: [
          ['Schema language', 'DTD and XML Schema, written in XML.', 'JSON Schema, written in JSON.'],
          ['Lists', 'Repeated elements.', 'Native arrays.'],
          ['Comments', 'Supported.', 'Not allowed.'],
          ['Newlines', 'Normalised by the parser to LF.', 'Multi-line strings forbidden; use the escape.'],
        ],
      },
    },
    relatedTermIds: ['term-xml', 'term-json', 'term-well-formed', 'term-json-schema'],
    tags: ['data', 'xml', 'json'],
  },
  {
    id: 'sia1-web-services',
    subjectId: 'sia1',
    title: 'Web Services: SOAP, WSDL, and UDDI',
    order: 7,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'A web service lets two programs cooperate even when they run on different systems. SOAP is the envelope, WSDL is the instruction sheet, UDDI is the directory.',
      deepDive: 'A web service is a software system supporting interoperable machine-to-machine interaction: more than one application is involved, and they cooperate without sharing a platform, operating system, or programming language. Web services are delivered by three protocols built on XML and HTTP. SOAP is a messaging framework specifying message format, message processing, and transport. A SOAP message is an Envelope containing an optional Header and a mandatory Body; errors are reported as a fault inside the Body. Messages travel one way along a path of nodes—initial sender, intermediaries, ultimate receiver—so request and response are treated as two messages under a message exchange pattern. Header blocks are targeted at a SOAP role; the node in that role must perform the implied processing and delete the block before relaying the message onward, which is how authentication and routing are layered in. Over HTTP, a 2xx status indicates success while 400 and 500 accompany a SOAP fault. WSDL is an XML grammar describing network services as collections of endpoints. Its abstract half defines types, messages, operations, and port types; its concrete half defines a binding (a protocol and data format for a port type), a port (a binding plus a network address), and a service (a collection of related ports). Separating the two halves lets the same abstract definitions be reused across protocols. UDDI provides a searchable repository of service descriptions so clients can discover services dynamically.',
      analogy: 'SOAP is the envelope and the postal rules, WSDL is the form telling you exactly what to write and where to send it, and UDDI is the phone book.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Protocol', 'Answers', 'Carries'],
        rows: [
          ['SOAP', 'How is the message packaged and processed?', 'An XML envelope with header and body.'],
          ['WSDL', 'What can the service do and where is it?', 'Types, messages, operations, bindings, ports.'],
          ['UDDI', 'Which services exist at all?', 'A searchable registry of descriptions.'],
        ],
      },
    },
    relatedTermIds: ['term-web-service', 'term-soap', 'term-wsdl', 'term-uddi', 'term-rpc'],
    tags: ['web-services', 'soap', 'wsdl'],
  },
  {
    id: 'sia1-eai',
    subjectId: 'sia1',
    title: 'Enterprise Application Integration (EAI)',
    order: 8,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'When applications cannot talk, people retype the same data in several systems. EAI connects them so information flows automatically.',
      deepDive: 'Enterprise Application Integration is the task of uniting the databases and workflows associated with business applications so that the business uses information consistently and a change made in one application is correctly reflected in the others. The problem it solves is the information silo: data captured in one application must be re-entered elsewhere, modifications are not propagated, and users search manually for data that already exists—producing poor access to information, administrative delays, and slower processes. There is no standardised model, so five approaches emerged. Point-to-point integration scripts extract, reformat, and send data between two applications; effective for a handful of systems, unmanageable as dependencies multiply. Hub-and-spoke integration puts a central hub in charge of capture, reformatting, and routing, though developers still route data manually at runtime. Bus integration evolves that model, using a defined set of standards to govern flow without human interference. Middleware acts as a hidden translation layer between application user interfaces and operating systems. Microservices, the current standard for cloud-deployed enterprise applications, capture data from each deployed service and route it through APIs. Integration also happens at four depths. Data-level EAI moves and reformats data between data stores and is cheapest because application code is untouched. Application interface level EAI uses interfaces exposed by packaged applications such as SAP or PeopleSoft, typically through message brokers. Method level EAI shares business logic through distributed objects, application servers, and TP monitors. User interface level EAI drives the application through its screens and is used only when nothing else is exposed.',
      analogy: 'Five departments each keeping their own address book. EAI is the rule that when one book changes, the others change too—without anyone retyping.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['EAI type', 'Integration point', 'Relative cost'],
        rows: [
          ['Data level', 'The database.', 'Lowest—no application changes.'],
          ['Application interface', 'Published application interfaces.', 'Moderate—limited by exposed features.'],
          ['Method level', 'Shared business logic.', 'Higher—robust technologies required.'],
          ['User interface', 'The application screen.', 'Fragile—used when nothing else exists.'],
        ],
      },
    },
    relatedTermIds: ['term-eai', 'term-silo', 'term-point-to-point', 'term-hub-spoke', 'term-message-broker'],
    tags: ['integration', 'eai', 'enterprise'],
  },
  {
    id: 'sia1-middleware',
    subjectId: 'sia1',
    title: 'Middleware and Messaging',
    order: 9,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'Middleware is the software in the middle. It hides how complicated the network and the back end really are and gives applications one simple way to ask for what they need.',
      deepDive: 'Middleware is the software between application programs and the operating system and base networking. It provides higher-level distributed computing capabilities and a set of interfaces to reach them, bridging the gap between low-level operating-system communication and programming-language abstractions, and hiding the complexity and heterogeneity of a distributed system. The name comes from its position: it sits between client-side requests on the front end and the back-end resources being requested—databases, message queues, NoSQL stores, and file servers—and provides a messaging service such as SOAP, REST, or JSON for applications to transfer data. It carries four responsibilities. It manages connectivity, for example by creating a connection pool for fast access to a popular database, or connections to message queues and cloud resources. It implements logic based on the request, such as tailoring queries to a browser\'s language header or prioritising results near the client\'s location. It handles concurrent processing, load balancing, and transaction management, scaling vertically and horizontally to spread requests over servers, virtual machines, or availability zones, and resolving conflicts when two clients update the same resource. Finally it secures access, challenging clients for a secure connection using SSL and authentication before returning data over an encrypted channel. Middleware is grouped into two categories—enterprise application integration middleware and platform middleware—and into types including messaging, object or ORB, remote procedure call, database, transactional, content-centric, and embedded middleware.',
      analogy: 'Middleware is the postal service. You drop the letter in the box; you do not need to know whether the recipient is home right now.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Middleware type', 'Best for', 'Example use'],
        rows: [
          ['Messaging', 'Events between distributed services.', 'Order placed → billing and shipping notified.'],
          ['Object / RPC', 'Calling remote components.', 'One application invoking another\'s methods.'],
          ['Database', 'Direct data access.', 'SQL access to a shared customer store.'],
          ['Transactional', 'Multi-step consistency.', 'Transaction process monitoring across phases.'],
        ],
      },
    },
    relatedTermIds: ['term-middleware', 'term-mom', 'term-pubsub', 'term-connection-pool'],
    tags: ['middleware', 'messaging', 'asynchronous'],
  },
  {
    id: 'sia1-cloud',
    subjectId: 'sia1',
    title: 'Cloud Computing',
    order: 10,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'Cloud computing means using someone else\'s computers over the internet instead of buying your own. You ask for what you need, use it, and pay only for what you used.',
      deepDive: 'Cloud computing is a model for enabling convenient, on-demand network access to a shared pool of configurable computing resources—networks, servers, storage, applications, services—that can be rapidly provisioned and released with minimal management effort or service provider interaction. Five essential characteristics define it: on-demand self-service, broad network access, resource pooling with location independence, rapid elasticity, and measured service under a pay-per-use model. Three traits are common to every vendor: the back end is completely managed by the provider, the user pays only for services used, and services are scalable. Virtualisation is the enabling technology, letting a provider pool resources and divide them among multiple clients in a multi-tenant environment. Architecturally, the front end is the client\'s network and applications reaching the cloud through an interface such as a browser; the back end is the cloud itself—servers, storage, and the built-in security, traffic control, and middleware protocols that let devices communicate. There are three service models: Infrastructure as a Service, Platform as a Service, and Software as a Service. There are four deployment models: public (open to the general public, pay-as-you-go, shared infrastructure pool), private (exclusive to one organisation, on or off premises), community (shared among organisations with similar missions, security requirements, or policies), and hybrid (critical activities on the private side, non-critical on the public side). Five actors take part: cloud consumer, cloud provider, cloud auditor, cloud broker, and cloud carrier. The network is decisive—no network means no cloud.',
      analogy: 'Electricity from the grid. You do not buy a generator; you plug in, use what you need, and pay for the metered amount.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Deployment model', 'Who may use it', 'Typical reason'],
        rows: [
          ['Public', 'The general public.', 'Lowest cost and fastest start.'],
          ['Private', 'One organisation.', 'Higher security and control.'],
          ['Community', 'Organisations with shared requirements.', 'Shared mission or regulation.'],
          ['Hybrid', 'A mix of public and private.', 'Keep critical work private, burst the rest.'],
        ],
      },
    },
    relatedTermIds: ['term-cloud', 'term-iaas', 'term-paas', 'term-saas', 'term-hybrid-cloud', 'term-multi-tenancy'],
    tags: ['cloud', 'deployment', 'service-models'],
  },

  {
    id: 'sia1-project-management',
    subjectId: 'sia1',
    title: 'Principles of Project Management',
    order: 11,
    estimatedMinutes: 50,
    professorMode: {
      eli5: 'A project is temporary work that produces something new. Project management is the discipline of deciding what "done" means, working out the order things must happen in, and noticing early when reality stops matching the plan.',
      deepDive: 'A project is a temporary endeavour undertaken to create a unique product, service, or result — temporary because it has a definite beginning and end, unique because the output differs from routine operations. Classical project management organises the work into five process groups: initiating (authorise the project and identify stakeholders), planning (define scope, schedule, cost, quality, resources, risk, and communications), executing (perform the work and manage the team), monitoring and controlling (compare actual progress against the baseline and act on variance), and closing (obtain acceptance and capture lessons). These groups are not sequential phases; monitoring and controlling runs continuously alongside execution. The triple constraint — scope, time, and cost, with quality as the dependent variable — states that fixing all three is impossible, so a change to one must be absorbed by another. Practical planning artefacts make this tractable. A work breakdown structure decomposes the deliverable into progressively smaller work packages until each can be estimated and assigned; the 100 percent rule requires the WBS to capture all of the scope and nothing beyond it. A network diagram of dependencies yields the critical path, the longest chain of dependent activities, whose length is the shortest possible project duration and whose activities have zero float. A Gantt chart projects that schedule onto a calendar. Objectives should be specific, measurable, achievable, relevant, and time-bound rather than aspirational. The PMBOK Guide Seventh Edition reorganised the discipline away from prescriptive process groups toward twelve principles and eight performance domains, reflecting that adaptive and hybrid delivery approaches need guidance on outcomes rather than a fixed procedure.',
      analogy: 'Building a house. The blueprint is the scope, the construction sequence is the schedule, and you cannot pour the roof before the walls. The analogy breaks at uniqueness: a builder has poured a thousand foundations, whereas most IT projects are attempting their particular combination for the first time, which is exactly why estimates are uncertain.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'path-chain',
        title: 'The five process groups',
        description: 'Initiating and closing bracket the project. Executing and monitoring-and-controlling run concurrently rather than in sequence: the control loop compares actual progress against the baseline continuously and feeds corrective action back into execution.',
        chain: [
          { label: 'Initiating', sub: 'authorise; identify stakeholders', kind: 'edge' },
          { label: 'Planning', sub: 'scope, schedule, cost, risk' },
          { label: 'Executing', sub: 'perform the work', kind: 'mark' },
          { label: 'Monitoring & controlling', sub: 'runs alongside execution', kind: 'mark' },
          { label: 'Closing', sub: 'acceptance; lessons learned', kind: 'edge' },
        ],
      },
    },
    learningObjectives: [
      'Distinguish a project from ongoing operations and explain why that difference drives the method.',
      'Place each of the five process groups and explain why monitoring and controlling is not a phase.',
      'Decompose a deliverable into a work breakdown structure that satisfies the 100 percent rule.',
      'Identify the critical path in a dependency network and state what float means for the other paths.',
    ],
    lessonBlocks: [
      {
        kind: 'paragraph',
        title: 'Worked example: finding the critical path',
        text: 'A system integration project has four activities. A (requirements, 5 days) must finish before B (API build, 8 days) and C (UI build, 3 days). Both B and C must finish before D (integration test, 4 days). Path A-B-D is 5+8+4 = 17 days; path A-C-D is 5+3+4 = 12 days. The critical path is A-B-D at 17 days, so the project cannot finish sooner no matter how many people are added to C. Activity C carries 5 days of float, meaning it may slip 5 days without moving the end date — but a sixth day of slippage makes A-C-D critical too.',
      },
      {
        kind: 'list',
        title: 'The triple constraint, stated usefully',
        items: [
          'Scope, time, and cost cannot all three be fixed independently.',
          'Adding scope without moving time or cost silently spends quality instead.',
          'Adding people to a late task increases coordination overhead before it increases output.',
          'The honest response to a change request is a re-baselined estimate, not a promise.',
        ],
      },
      {
        kind: 'paragraph',
        title: 'Why the Seventh Edition changed shape',
        text: 'The PMBOK Guide Sixth Edition organised the discipline as five process groups and ten knowledge areas. The Seventh Edition replaced that structure with twelve principles and eight performance domains. The reason is delivery approach: a prescriptive process set assumes a predictive, plan-driven project, whereas adaptive and hybrid work needs guidance framed as outcomes and behaviours. Both structures describe the same discipline, and the process-group vocabulary remains the common language on most projects.',
      },
    ],
    sources: [isoPm, pmiStandards],
    relatedTermIds: ['term-project', 'term-process-groups', 'term-wbs', 'term-critical-path', 'term-triple-constraint', 'term-gantt'],
    tags: ['project-management', 'planning', 'delivery'],
  },
  {
    id: 'sia1-technopreneurship',
    subjectId: 'sia1',
    title: 'Technopreneurship and Project Delivery',
    order: 12,
    estimatedMinutes: 40,
    professorMode: {
      eli5: 'Technopreneurship is starting a business where the technology is the product, not just the tool. The hard part is not building the thing — it is finding out whether anyone actually wants it before the money runs out.',
      deepDive: 'Technopreneurship is entrepreneurship in which technology is the central enabler of the venture rather than a supporting function: the innovation itself creates the value proposition. It differs from traditional entrepreneurship in risk profile. A conventional business faces market risk — will customers buy? A technology venture faces market risk plus technical risk (can this be built at all?), execution risk (can this team build it?), and adoption risk (will users change their behaviour?). Because several of those risks are unknowable in advance, the discipline favours validated learning over detailed forecasting. The build-measure-learn loop makes each cycle an experiment: build the smallest artefact that tests a specific assumption, measure a metric chosen before the build, and decide whether to persevere or pivot. A minimum viable product is not a low-quality product; it is the smallest thing that produces a trustworthy answer to the riskiest open question. Project management supplies the structure that keeps this from becoming aimless iteration: a technopreneurial venture still needs scope boundaries, a budget, a schedule, and stakeholder communication, and still moves through initiation, planning, execution, monitoring, and closure for each funded increment. The synthesis is that project management supplies discipline and entrepreneurship supplies direction. Resource constraint is the defining condition — a startup team is small, funding is finite and staged, and prioritisation is therefore the primary management act. Innovation management standards formalise this: an organisation needs an explicit intent, a leadership commitment, a process for capturing and screening ideas, and a measurement approach, or innovation stays accidental.',
      analogy: 'Navigating unfamiliar water. Project management is the ship\'s log and the watch rota; entrepreneurship is the decision about which direction land might be in. The analogy breaks because a ship\'s destination is known in advance, whereas a venture routinely discovers that the destination it set out for does not exist.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'tree-hierarchy',
        title: 'Where the risk sits in a technology venture',
        description: 'Each level answers a different question and fails in a different way. Money spent scaling an unvalidated idea is the most expensive mistake available, which is why validation precedes build and build precedes scale.',
        root: 'Technology venture',
        levels: [
          { label: 'Validate — is the problem real?', items: ['Customer discovery', 'Problem interviews', 'Minimum viable product'] },
          { label: 'Build — can we make it work?', items: ['Technology stack choice', 'Build-measure-learn loop', 'Technical risk reduction'] },
          { label: 'Scale — can it grow profitably?', items: ['Unit economics', 'Operational capacity', 'Funding and governance'] },
        ],
      },
    },
    learningObjectives: [
      'Separate technopreneurship from conventional entrepreneurship by the categories of risk each carries.',
      'Explain why a minimum viable product is defined by the question it answers, not by its feature count.',
      'Describe how project management supplies discipline while entrepreneurship supplies direction.',
      'Identify which venture decisions belong to validation, build, and scale.',
    ],
    lessonBlocks: [
      {
        kind: 'paragraph',
        title: 'What makes an MVP minimum and viable',
        text: 'A team believes small retailers will pay for automated inventory reordering. The riskiest assumption is not whether the algorithm works — it is whether retailers will trust software to place orders. The minimum viable product is therefore not the algorithm; it is a manual service where a person places the orders behind a simple interface. That answers the trust question in weeks. Building the algorithm first would answer a question nobody was asking.',
      },
      {
        kind: 'list',
        title: 'Four risks a technology venture carries at once',
        items: [
          'Market risk — does anyone have this problem badly enough to pay?',
          'Technical risk — is this buildable with available technology?',
          'Execution risk — can this specific team build it in time?',
          'Adoption risk — will users change existing behaviour to use it?',
        ],
      },
    ],
    sources: [isoInnovation, pmiStandards],
    relatedTermIds: ['term-technopreneurship', 'term-mvp', 'term-build-measure-learn', 'term-pivot', 'term-unit-economics'],
    tags: ['technopreneurship', 'innovation', 'delivery'],
  },
  {
    id: 'sia1-project-reporting',
    subjectId: 'sia1',
    title: 'Project Reporting and Documentation',
    order: 13,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'Reporting tells people what is happening now. Documentation tells whoever comes next why the system is the way it is. Both fail the same way — by being written for the person who already knows.',
      deepDive: 'Reporting and documentation solve different problems and are routinely confused. Reporting is time-bound and audience-tailored: it communicates progress, risk, and change while the work is in flight. Progress reports state what was completed in a period and what comes next. Status reports give overall health against milestones, budget, scope, and resource availability. Risk assessment reports identify what could go wrong, its likelihood and impact, and the planned mitigation. Financial reports track actual expenditure against budget and forecast the remainder. Documentation is durable and audience-neutral: it explains the system so that someone with no prior context can operate, maintain, and extend it. Technical specifications state functional and performance requirements. System architecture diagrams show components, data flow, and integration points. User manuals give task-oriented instruction. Maintenance documentation covers patching, backup, monitoring, and upgrade. Effective communication is a tailoring problem, not a volume problem: executives need outcome, cost, and risk in a page; technical teams need detail, dependencies, and specifications; clients need plain-language progress and benefit. A regular cadence matters more than exhaustive content, because stakeholders calibrate against rhythm. Three practices raise documentation above narrative prose. Architecture decision records capture one significant decision each, in a short immutable file recording context, the decision, and its consequences — preserving the reasoning that code cannot express, so a successor does not re-litigate a settled trade-off. The C4 model structures architecture diagrams as a zoomable hierarchy of context, container, component, and code, so each diagram has one audience and one level of abstraction. Templates such as arc42 supply a stable chapter structure so readers know where to look.',
      analogy: 'A flight recorder versus a maintenance manual. The recorder captures what happened on this flight; the manual explains how the aircraft works to any engineer who opens it. The analogy breaks because software documentation, unlike a manual, decays silently — nothing physically stops it describing a system that no longer exists.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'layer-stack',
        title: 'Tailoring the report to the audience',
        description: 'The same project produces different documents for different readers. Sending the technical report to the sponsor is not thoroughness — it transfers the summarising work onto the person least equipped to do it.',
        layers: [
          { label: 'Executive / sponsor', sub: 'Outcome, cost, top risks — one page' },
          { label: 'Client', sub: 'Plain-language progress and benefit' },
          { label: 'Technical team', sub: 'Dependencies, specifications, defects' },
          { label: 'Future maintainer', sub: 'Architecture, decision records, runbooks' },
        ],
      },
    },
    learningObjectives: [
      'Distinguish reporting from documentation by lifespan and audience.',
      'Match each report type to the decision it is meant to support.',
      'Write an architecture decision record that preserves reasoning rather than restating the outcome.',
      'Apply the C4 abstraction levels so each diagram serves exactly one audience.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'An architecture decision record',
        language: 'html',
        code: `# ADR 014: Use asynchronous messaging between order and inventory

## Status
Accepted - 2026-03-11

## Context
Order placement calls inventory synchronously. Inventory deploys weekly and
its restarts return 503 for roughly 40 seconds, which fails live checkouts.

## Decision
Order publishes an OrderPlaced event to the broker. Inventory consumes it.

## Consequences
+ Checkout survives an inventory restart.
+ Inventory can be scaled and deployed independently.
- Stock levels are now eventually consistent; oversell is possible.
- Requires idempotent consumers, because the broker delivers at least once.`,
        caption: 'The Consequences section is what makes the record worth keeping: it records the cost that was knowingly accepted, so a successor does not "discover" the oversell risk and assume it was an oversight.',
      },
      {
        kind: 'list',
        title: 'The four C4 levels, from furthest out to closest in',
        items: [
          'Context — the system as one box, with its users and neighbouring systems.',
          'Container — the deployable units: applications, services, databases.',
          'Component — the major building blocks inside one container.',
          'Code — class or schema detail, generated rather than hand-drawn.',
        ],
      },
    ],
    sources: [adrOrg, c4Model, arc42],
    relatedTermIds: ['term-status-report', 'term-risk-register', 'term-adr', 'term-c4-model', 'term-runbook'],
    tags: ['documentation', 'reporting', 'communication'],
  },
  {
    id: 'sia1-api-architecture',
    subjectId: 'sia1',
    title: 'API Architecture: REST, SOAP, and GraphQL',
    order: 14,
    estimatedMinutes: 55,
    professorMode: {
      eli5: 'An API is a contract between two programs: send a request shaped like this, get a response shaped like that. REST, SOAP, and GraphQL are three different opinions about what that contract should look like.',
      deepDive: 'An application programming interface defines the methods and data structures through which one piece of software may use another, and it is a contract rather than an implementation: the caller depends on the shape of the exchange, not on how the work is done. Three styles dominate. REST treats everything as a resource identified by a URL and manipulated through the uniform HTTP methods — GET to retrieve, POST to create, PUT to replace, PATCH to modify, DELETE to remove — with the response carrying a status code that classifies the outcome. Two HTTP properties do real architectural work. Safe methods do not change server state, so GET may be cached and prefetched. Idempotent methods produce the same result whether applied once or many times, which is what makes a client safe to retry after a timeout: PUT and DELETE are idempotent, POST is not, and this is why a duplicated payment is usually a POST retried without an idempotency key. REST is also stateless — each request carries everything needed to interpret it — which is what allows any server behind a load balancer to answer. The Richardson maturity model grades adoption in levels: level 0 tunnels everything through one endpoint, level 1 introduces resources, level 2 uses HTTP verbs and status codes properly, and level 3 adds hypermedia controls so responses advertise the next available transitions. SOAP is a protocol rather than a style: an XML envelope with a header for cross-cutting concerns and a body for the payload, transport-independent, formally described by WSDL, and carrying mature WS-* standards for security and transactions. Its verbosity is the price of that formality, and it remains common in enterprise and regulated integration. GraphQL takes a third position: a single endpoint exposes a strongly typed schema, and the client specifies exactly which fields it wants, eliminating the over-fetching and under-fetching that fixed REST payloads cause on constrained mobile clients — at the cost of harder HTTP caching and the need to bound query complexity. Regardless of style, an interface needs machine-readable description (OpenAPI for REST, WSDL for SOAP, the schema itself for GraphQL), an explicit versioning policy, and delegated authorisation rather than shared credentials.',
      analogy: 'Ordering food. REST is a menu where each dish has its own number. SOAP is a formal order form with mandatory fields, stamped and countersigned. GraphQL is telling the kitchen exactly which components you want on the plate. The analogy breaks at caching: a restaurant can reuse a prepared dish for any customer, whereas a bespoke GraphQL response is much harder to reuse than a fixed REST resource.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'actor-flow',
        title: 'The same data fetched three ways',
        description: 'Fetching a user and their most recent orders. REST needs several round trips or returns fields the client discards. SOAP wraps one operation in a formal envelope. GraphQL resolves the whole shape in one request, which is why it suits mobile clients on high-latency links.',
        actors: ['Mobile client', 'API server'],
        messages: [
          { from: 'Client', to: 'Server', label: 'REST: GET /users/42 — returns the full user record' },
          { from: 'Client', to: 'Server', label: 'REST: GET /users/42/orders?limit=3 — a second round trip' },
          { from: 'Client', to: 'Server', label: 'SOAP: POST /svc with an XML envelope calling GetUserOrders' },
          { from: 'Client', to: 'Server', label: 'GraphQL: POST /graphql — { user(id:42) { name orders(last:3) { total } } }' },
          { from: 'Server', to: 'Client', label: 'GraphQL returns exactly those fields, nothing more' },
        ],
      },
    },
    learningObjectives: [
      'Choose between REST, SOAP, and GraphQL from the constraints of a given integration.',
      'Explain why idempotency determines whether a client may safely retry a failed request.',
      'Place an interface on the Richardson maturity model and say what the next level would add.',
      'Justify delegated authorisation with OAuth 2.0 over sharing credentials between services.',
    ],
    lessonBlocks: [
      {
        kind: 'paragraph',
        title: 'Why idempotency decides your retry policy',
        text: 'A mobile client sends POST /payments and the connection drops before the response arrives. The client cannot tell whether the payment succeeded. Retrying a non-idempotent POST risks charging twice; not retrying risks losing the payment. The standard fix is an idempotency key: the client generates a unique key, sends it as a header, and the server records the outcome against it. A retry with the same key returns the original result rather than performing the work again. PUT and DELETE need no such key, because repeating them is defined to be harmless.',
      },
      {
        kind: 'list',
        title: 'Richardson maturity model',
        items: [
          'Level 0 — one endpoint, one verb; HTTP is only a tunnel.',
          'Level 1 — resources get their own URLs, but everything is still POST.',
          'Level 2 — correct verbs and status codes; where most production APIs sit.',
          'Level 3 — hypermedia controls; responses advertise the next valid transitions.',
        ],
      },
      {
        kind: 'code',
        title: 'A GraphQL query and the shape it returns',
        language: 'javascript',
        code: `// One request, one round trip, exactly the fields the screen renders.
const query = \`
  query UserSummary($id: ID!) {
    user(id: $id) {
      name
      orders(last: 3) { id total placedAt }
    }
  }
\`;

const response = await fetch('/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query, variables: { id: '42' } }),
});

// The response mirrors the query shape under a "data" key.
const { data } = await response.json();`,
        caption: 'The response mirrors the query, so the client never parses fields it did not ask for. The trade-off is that every distinct query shape is a distinct cache entry, which is why HTTP caching is weaker here than for REST.',
      },
    ],
    sources: [rfc9110, openApi, graphqlSpec, soap12, rfc6749, rfc7519, grpcDocs],
    relatedTermIds: ['term-api-contract', 'term-idempotency', 'term-richardson', 'term-graphql', 'term-openapi', 'term-oauth2'],
    tags: ['api', 'rest', 'graphql', 'soap', 'integration'],
  },
  {
    id: 'sia1-performance-testing',
    subjectId: 'sia1',
    title: 'Performance and Stress Testing',
    order: 15,
    estimatedMinutes: 50,
    professorMode: {
      eli5: 'Load testing asks whether the system copes with the traffic you expect. Stress testing pushes past that on purpose, to find where it breaks and whether it breaks gracefully or takes your data with it.',
      deepDive: 'Performance testing is the family of non-functional tests that measure how a system behaves under a given demand rather than whether its answers are correct. The members differ by intent. Load testing applies the expected production workload and verifies that response time, throughput, and resource use stay within target. Stress testing deliberately exceeds capacity to locate the breaking point and, more importantly, to observe the failure mode: a system that sheds load, returns a clear error, and recovers when pressure drops is behaving correctly, whereas one that corrupts data, exhausts connections, or fails to recover has a defect that only stress reveals. Spike testing applies a sudden sharp increase, modelling a marketing launch or a news event. Soak or endurance testing holds a moderate load for hours to expose slow resource leaks, unbounded caches, and log growth that a short run cannot show. Volume testing grows the data set rather than the request rate, exposing queries that were fast against ten thousand rows and unusable against ten million. Measurement discipline matters more than tooling. Averages hide user pain, because a mean response time is dominated by the many fast requests; percentiles expose it, so targets are stated at the 95th or 99th percentile. Throughput, error rate, and saturation of the constrained resource complete the picture. Little\'s Law relates them: the average number of requests in the system equals arrival rate multiplied by average residence time, which is why a small increase in response time at fixed arrival rate raises concurrency and can push a thread pool over its limit. Objectives should be expressed as service level indicators and objectives — a measurable signal and a target for it — so that "fast enough" is a number the team agreed rather than an opinion argued after an incident. Apache JMeter, k6, Gatling, and commercial tools such as LoadRunner and NeoLoad generate the load; the discipline is in defining the workload model, warming the system, and testing an environment that resembles production closely enough for the numbers to transfer.',
      analogy: 'Testing a bridge. Load testing drives the expected traffic across it; stress testing keeps adding lorries until something bends. The analogy breaks in one important way: a bridge that survives the stress test is unchanged, whereas a software system pushed past its limit can leave corrupted data behind even after the load is removed.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'tree-hierarchy',
        title: 'The performance testing family',
        description: 'All five apply load, but each asks a different question. Choosing the wrong one produces a confident answer to a question nobody asked — a passing load test says nothing about the failure mode under overload.',
        root: 'Performance testing',
        levels: [
          { label: 'Expected demand', items: ['Load test — can it meet the target?', 'Volume test — does it hold at data scale?'] },
          { label: 'Beyond expected demand', items: ['Stress test — where does it break?', 'Spike test — can it absorb a sudden surge?'] },
          { label: 'Over time', items: ['Soak / endurance test — does it leak resources over hours?'] },
        ],
      },
    },
    learningObjectives: [
      'Select the right performance test type from the question being asked.',
      'Explain why percentile latency is reported instead of the average.',
      'Apply Little\'s Law to relate arrival rate, residence time, and concurrency.',
      'Express a performance target as a service level indicator and objective.',
    ],
    lessonBlocks: [
      {
        kind: 'paragraph',
        title: 'Worked example: why the average lies',
        text: 'A thousand requests complete: 950 in 100 ms and 50 in 4,000 ms. The mean is (950 x 100 + 50 x 4000) / 1000 = 295 ms, which looks acceptable. But one user in twenty waited four seconds. The 95th percentile is roughly 4,000 ms and tells the truth. This is why targets are written as "p95 under 500 ms" rather than "average under 500 ms" — the average can be met while a substantial minority of users has an unusable experience.',
      },
      {
        kind: 'paragraph',
        title: 'Little\'s Law, applied',
        text: 'L = lambda x W: the average number of requests in the system equals the arrival rate multiplied by the average time each spends there. At 200 requests per second and 100 ms average residence, 20 requests are in flight on average. If a dependency slows and residence rises to 500 ms at the same arrival rate, concurrency rises to 100. A server with a 50-thread pool was comfortable at 20 and is now saturated — the outage is caused by the latency increase, not by a traffic increase.',
      },
      {
        kind: 'list',
        title: 'What to record on every run',
        items: [
          'Latency at p50, p95, and p99 — never the average alone.',
          'Throughput in requests per second actually completed.',
          'Error rate, separated by status class.',
          'Saturation of the constrained resource: CPU, memory, connections, or IO.',
          'The workload model and environment, so the run can be reproduced.',
        ],
      },
    ],
    sources: [iso25010, jmeter, sreSlo],
    relatedTermIds: ['term-load-test', 'term-stress-test', 'term-soak-test', 'term-percentile', 'term-littles-law', 'term-slo'],
    tags: ['testing', 'performance', 'quality'],
  },
  {
    id: 'sia1-multitier-deployment',
    subjectId: 'sia1',
    title: 'Multi-Tier Architecture and Deployment',
    order: 16,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'Split the system into three jobs: the part the user sees, the part that decides what happens, and the part that remembers. Keeping them separate means you can change or scale one without disturbing the others.',
      deepDive: 'A tiered architecture separates an application into layers with distinct responsibilities, and the standard arrangement is three. The presentation tier is what the user interacts with; its job is to translate user actions into requests and render results, and it holds no business rules. The logic tier — also called the application or middle tier — coordinates the application, evaluates rules, performs calculations, and moves data between the surrounding tiers; it is where the meaning of a transaction lives. The data tier stores and retrieves information from a database or file system and passes it back for processing. The critical distinction is between a layer and a tier: layers are a logical separation of concerns and can exist inside a single process, whereas tiers are a physical separation across processes or machines. Three logical layers deployed on one server is a layered monolith; the same layers on separate hosts is a three-tier deployment. N-tier generalises the pattern by inserting further tiers, commonly a dedicated integration or caching tier. The benefits follow from the separation: each tier can be scaled to its own bottleneck, replaced independently, and secured with its own boundary, and the database is never exposed directly to the client. The costs are equally real — every tier boundary is a network hop that adds latency and a new failure mode, so tiers are justified by need rather than added by default. Two properties make the middle tier scalable. It should be stateless, keeping no client session in local memory, so that any instance can serve any request and a load balancer can distribute freely; session state belongs in a shared store. It should pool database connections, because establishing a connection is expensive relative to a query and an unbounded connection count will exhaust the database before it exhausts the application. Deployment turns the architecture into a running system: build artefacts are promoted through environments, configuration and secrets are supplied by the environment rather than committed to source, transport is protected with TLS, and database credentials are scoped to the minimum privilege the tier requires.',
      analogy: 'A restaurant. The dining room takes the order, the kitchen decides how to make it, the pantry stores ingredients. The analogy breaks at scaling: a restaurant cannot instantly clone its kitchen when a coach party arrives, whereas a stateless logic tier is designed for exactly that.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'layer-stack',
        title: 'The three tiers and what each owns',
        description: 'A request travels down and the response travels back up. The presentation tier never reaches the data tier directly — that indirection is what lets the database schema change without rewriting the client, and what keeps credentials off the user\'s device.',
        layers: [
          { label: 'Presentation tier', sub: 'Renders the interface; holds no business rules' },
          { label: 'Logic tier', sub: 'Business rules, calculation, coordination; stateless' },
          { label: 'Data tier', sub: 'Storage and retrieval; reached only by the logic tier' },
        ],
      },
    },
    learningObjectives: [
      'Distinguish a logical layer from a physical tier and say which a given design uses.',
      'Explain why a stateless middle tier is a precondition for horizontal scaling.',
      'Justify connection pooling from the relative cost of connecting versus querying.',
      'List what must be supplied by the environment rather than committed to source.',
    ],
    lessonBlocks: [
      {
        kind: 'paragraph',
        title: 'Layer versus tier, concretely',
        text: 'A PHP application on shared hosting with presentation, logic, and data-access code in separate directories has three layers and one tier — everything runs in one process on one machine. Moving MySQL to a managed database service makes it two tiers. Putting the PHP application behind a load balancer across two hosts makes the logic tier horizontally scaled, but only if no session state is kept in local files or memory. The layer boundaries were what made that move possible without a rewrite.',
      },
      {
        kind: 'list',
        title: 'Supplied by the environment, never committed',
        items: [
          'Database credentials and connection strings.',
          'API keys and third-party secrets.',
          'Hostnames that differ between development, staging, and production.',
          'TLS certificates and private keys.',
          'Feature flags controlling what is enabled in each environment.',
        ],
      },
    ],
    sources: [iso25010, nistTls],
    relatedTermIds: ['term-three-tier', 'term-tier-vs-layer', 'term-stateless-tier', 'term-connection-pool', 'term-n-tier'],
    tags: ['architecture', 'deployment', 'scalability'],
  },
  {
    id: 'sia1-xml-processing',
    subjectId: 'sia1',
    title: 'XML Processing and Schema Validation',
    order: 17,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'Well-formed XML follows the syntax rules. Valid XML also matches an agreed structure. A parser is what reads it, and there are two ways to read: load the whole thing into memory, or stream through it reacting to each piece.',
      deepDive: 'XML separates two levels of correctness that are frequently conflated. A document is well-formed if it obeys the syntax: one root element, every element closed, correct nesting, quoted attribute values, and case-sensitive matching of start and end tags. A document is valid if, in addition, it conforms to a declared grammar. Validation is what makes XML a contract between systems rather than merely a text format. Two grammars are in use. A Document Type Definition is the older mechanism, uses its own non-XML syntax, has no data types beyond text, and does not support namespaces. XML Schema Definition is itself written in XML, supplies a rich built-in type system with constraints such as ranges and patterns, supports namespaces, and can be extended — which is why interface contracts use XSD. Parsing offers a matching choice with real engineering consequences. The Document Object Model builds the entire document as a tree in memory, giving random access and the ability to modify and re-serialise, at a memory cost proportional to document size. The Simple API for XML is event-driven and read-only: it streams the document and emits callbacks as it encounters elements, so memory use stays roughly constant regardless of file size, but there is no random access and no editing. StAX sits between them with a pull model in which the application controls iteration. The rule of thumb is that DOM suits small documents that must be manipulated and SAX or StAX suits large documents that must merely be read. Namespaces prevent element-name collisions when documents from different vocabularies are combined, binding a prefix to a URI that acts purely as an identifier. XPath addresses nodes within a document using path expressions and predicates, and XSLT uses those expressions to transform one document into another format. Data binding maps documents onto native objects so application code manipulates typed objects rather than nodes. One security property is essential: an XML parser that resolves external entities can be induced to read local files or make outbound network requests, so external entity processing must be disabled on any parser handling untrusted input.',
      analogy: 'Grammar versus a form. Well-formed is a grammatically correct sentence; valid is a correctly filled-in form that also has the right boxes with the right kinds of answers. The analogy breaks at parsing, which has no everyday counterpart: reading a form either all at once or word by word is a memory trade-off that does not arise for a human reader.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'field-layout',
        title: 'Anatomy of an XML document',
        description: 'The declaration and any grammar reference come first, then exactly one root element containing the tree. Attributes attach metadata to an element while child elements carry structured content — choosing between them is a modelling decision, not a syntactic one.',
        fields: [
          { label: 'XML declaration', bits: 'version, encoding', span: 2 },
          { label: 'DTD or schema reference', bits: 'optional grammar', span: 2 },
          { label: 'Root element (exactly one)', bits: 'opens the tree', span: 2 },
          { label: 'Child elements', bits: 'nested content', span: 3 },
          { label: 'Attributes', bits: 'metadata on an element', span: 2 },
          { label: 'Closing root tag', bits: 'well-formedness', span: 2 },
        ],
      },
    },
    learningObjectives: [
      'Separate well-formedness from validity and say which failure a parser reports.',
      'Choose DTD or XSD from the constraints an interface contract must express.',
      'Choose DOM, SAX, or StAX from document size and whether modification is required.',
      'State why external entity resolution must be disabled on untrusted input.',
    ],
    lessonBlocks: [
      {
        kind: 'code',
        title: 'The same constraint in DTD and XSD',
        language: 'html',
        code: `<!-- DTD: structure only. "quantity" can be any text at all. -->
<!ELEMENT order (item+)>
<!ELEMENT item (sku, quantity)>
<!ELEMENT quantity (#PCDATA)>

<!-- XSD: structure AND type. "quantity" must be an integer from 1 to 999. -->
<xs:element name="quantity">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="1"/>
      <xs:maxInclusive value="999"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>`,
        caption: 'The DTD accepts quantity "banana" as valid. The XSD rejects it at the parser, before any application code runs — which is the whole reason interface contracts moved to XSD.',
      },
      {
        kind: 'list',
        title: 'Choosing a parser',
        items: [
          'DOM — whole tree in memory; random access and editing; memory grows with the file.',
          'SAX — event callbacks while streaming; constant memory; read-only, no going back.',
          'StAX — pull-based streaming; the application controls iteration; constant memory.',
          'A 2 GB export read once for totals is a SAX job; a 20 KB config to be edited is a DOM job.',
        ],
      },
      {
        kind: 'paragraph',
        title: 'Why external entities are dangerous',
        text: 'XML allows a document to declare an entity whose content is loaded from a URI. A parser with entity resolution enabled will fetch it — including file:///etc/passwd or an internal URL the attacker cannot otherwise reach. Because the fetched content is then placed in the parsed document, it can be echoed back to the attacker. The defence is not input filtering; it is disabling document type declarations and external entity resolution in the parser configuration for any untrusted input.',
      },
    ],
    sources: [xmlSpec, xsdSpec, xpathSpec, owaspXxe],
    relatedTermIds: ['term-well-formed', 'term-valid-xml', 'term-dtd-vs-xsd', 'term-dom-parser', 'term-sax-parser', 'term-xpath', 'term-xxe'],
    tags: ['xml', 'schema', 'parsing', 'security'],
  },
];

export const subjectMeta: SubjectMeta = {
  id: 'sia1',
  title: 'Systems Integration & Architecture 1',
  shortTitle: 'Sys Integration 1',
  description:
    'Enterprise information architecture, IT governance, data modelling, service and microservice architecture, data representation, web services, application integration, middleware, and cloud computing.',
  accent: tokens.colors.subject.sia1,
  // Derived from the topic list so the dashboard can never advertise a stale count.
  topicCount: topics.length,
  estimatedHours: Math.round(
    topics.reduce((total, topic) => total + topic.estimatedMinutes, 0) / 60
  ),
};

export const glossary: GlossaryTerm[] = [
  { id: 'term-ea', term: 'Enterprise Architecture', definition: 'A framework linking business mission and strategy to IT strategy, documented with multiple architectural models that adapt to changing requirements.', topicIds: ['sia1-eia'] },
  { id: 'term-eia', term: 'EIA', definition: 'Enterprise Information Architecture. The requirements, principles, and models describing current state, future state, and the guidance needed to share information assets.', topicIds: ['sia1-eia'] },
  { id: 'term-togaf', term: 'TOGAF', definition: 'An enterprise architecture framework that divides EA into business, application, data, and technical architecture.', topicIds: ['sia1-eia'] },
  { id: 'term-zachman', term: 'Zachman Framework', definition: 'A 36-cell grid crossing six descriptive foci (data, function, network, people, time, motivation) with six player perspectives.', topicIds: ['sia1-eia'] },
  { id: 'term-silo', term: 'Information Silo', definition: 'An isolated data system incapable of reciprocal operation with the other systems that need its information.', topicIds: ['sia1-eia', 'sia1-eai'] },
  { id: 'term-geit', term: 'GEIT', definition: 'Governance of Enterprise IT. The board and executive system that directs IT so it delivers value and keeps IT-related risk acceptable.', topicIds: ['sia1-governance'] },
  { id: 'term-residual-risk', term: 'Residual Risk', definition: 'The risk that remains after existing or planned controls are applied; accepting it is an explicit management decision.', topicIds: ['sia1-governance'] },
  { id: 'term-sod', term: 'Segregation of Duties', definition: 'Dividing authorisation, custody of assets, and recording of transactions so one person cannot control an entire sensitive transaction.', topicIds: ['sia1-governance'] },
  { id: 'term-steering-committee', term: 'IT Steering Committee', definition: 'A management group that reviews IS plans against corporate objectives, approves major acquisitions, prioritises projects, and allocates resources.', topicIds: ['sia1-governance'] },
  { id: 'term-information', term: 'Information', definition: 'Data placed in context so it becomes meaningful to a person, application, or business process.', topicIds: ['sia1-data-modelling'] },
  { id: 'term-data', term: 'Data', definition: 'A building block whose value and meaning stay the same regardless of the context in which it is used.', topicIds: ['sia1-data-modelling'] },
  { id: 'term-data-subject', term: 'Data Subject', definition: 'A high-level conceptual kind of data used to deliver information, such as Customer, Product, Site, or Employee.', topicIds: ['sia1-data-modelling'] },
  { id: 'term-information-store', term: 'Information Store', definition: 'A physical deployment of an information representation, tagged with its role such as Production, Development, or Test.', topicIds: ['sia1-data-modelling'] },
  { id: 'term-soa', term: 'SOA', definition: 'Service-Oriented Architecture. A design style in which application components provide services to other components through agreed communication protocols.', topicIds: ['sia1-soa'] },
  { id: 'term-service', term: 'Service', definition: 'A clear, independent function that describes a piece of functionality and can exchange data with other services.', topicIds: ['sia1-soa'] },
  { id: 'term-esb', term: 'ESB', definition: 'Enterprise Service Bus. Shared messaging infrastructure through which services expose themselves and exchange messages.', topicIds: ['sia1-soa', 'sia1-eai'] },
  { id: 'term-service-registry', term: 'Service Registry', definition: 'The broker or repository holding published service offers so consumers can find and bind to a provider.', topicIds: ['sia1-soa'] },
  { id: 'term-loose-coupling', term: 'Loose Coupling', definition: 'The principle that services minimise dependencies, so one service failing does not stop the client application.', topicIds: ['sia1-soa'] },
  { id: 'term-microservices', term: 'Microservices', definition: 'An architectural style structuring an application as small services that each run in their own process and deploy independently.', topicIds: ['sia1-microservices'] },
  { id: 'term-monolith', term: 'Monolithic Application', definition: 'An application developed and deployed as one indivisible piece.', topicIds: ['sia1-microservices'] },
  { id: 'term-api-gateway', term: 'API Gateway', definition: 'The component that handles requests from various clients and routes them into the microservice system.', topicIds: ['sia1-microservices'] },
  { id: 'term-bounded-context', term: 'Bounded Context', definition: 'A boundary encapsulating the details of a single domain and defining how it integrates with other domains.', topicIds: ['sia1-microservices'] },
  { id: 'term-xml', term: 'XML', definition: 'Extensible Markup Language. A hierarchical, self-descriptive markup language designed to carry data, with author-defined tags.', topicIds: ['sia1-data-representation'] },
  { id: 'term-json', term: 'JSON', definition: 'JavaScript Object Notation. A mostly language-independent way of specifying objects as name-value pairs.', topicIds: ['sia1-data-representation'] },
  { id: 'term-well-formed', term: 'Well-Formed XML', definition: 'XML that follows the syntax rules—one root element, matching closing tags, quoted attribute values, correct nesting—so any parser can read it.', topicIds: ['sia1-data-representation', 'sia1-xml-processing'] },
  { id: 'term-json-schema', term: 'JSON Schema', definition: 'A JSON document that describes and validates the structure, types, and constraints of other JSON documents.', topicIds: ['sia1-data-representation'] },
  { id: 'term-web-service', term: 'Web Service', definition: 'A software system supporting interoperable machine-to-machine interaction over standard internet technologies.', topicIds: ['sia1-web-services'] },
  { id: 'term-soap', term: 'SOAP', definition: 'A messaging framework specifying XML message format, message processing, and transport, mainly over HTTP.', topicIds: ['sia1-web-services'] },
  { id: 'term-wsdl', term: 'WSDL', definition: 'Web Services Description Language. An XML grammar describing network services as collections of endpoints that exchange messages.', topicIds: ['sia1-web-services'] },
  { id: 'term-uddi', term: 'UDDI', definition: 'Universal Description, Discovery, and Integration. A searchable repository of web service descriptions.', topicIds: ['sia1-web-services'] },
  { id: 'term-rpc', term: 'Remote Procedure Call', definition: 'Calling a procedure on a remote node through a local proxy that marshals parameters, so the caller barely notices the call was remote.', topicIds: ['sia1-web-services'] },
  { id: 'term-eai', term: 'EAI', definition: 'Enterprise Application Integration. Uniting the databases and workflows of business applications so data is used consistently across the enterprise.', topicIds: ['sia1-eai'] },
  { id: 'term-point-to-point', term: 'Point-to-Point Integration', definition: 'The earliest EAI model, in which a script extracts, reformats, and sends data between two applications.', topicIds: ['sia1-eai'] },
  { id: 'term-hub-spoke', term: 'Hub-and-Spoke Integration', definition: 'An EAI model where a centralised hub connects to applications, captures and reformats data, and decides where it is distributed.', topicIds: ['sia1-eai'] },
  { id: 'term-message-broker', term: 'Message Broker', definition: 'Integration software that extracts information from one application, converts it to the target format, and transmits it.', topicIds: ['sia1-eai'] },
  { id: 'term-middleware', term: 'Middleware', definition: 'Software between application programs and the operating system that supplies distributed computing capabilities and interfaces to them.', topicIds: ['sia1-middleware'] },
  { id: 'term-mom', term: 'MOM', definition: 'Message-Oriented Middleware. Infrastructure supporting the sending and receiving of messages between distributed systems.', topicIds: ['sia1-middleware'] },
  { id: 'term-pubsub', term: 'Publish/Subscribe', definition: 'A messaging pattern where publishers classify messages without knowing the subscribers that will receive them.', topicIds: ['sia1-middleware'] },
  { id: 'term-connection-pool', term: 'Connection Pool', definition: 'A reusable set of open connections middleware keeps for fast, efficient access to a back-end resource.', topicIds: ['sia1-middleware', 'sia1-multitier-deployment'] },
  { id: 'term-cloud', term: 'Cloud Computing', definition: 'On-demand network access to a shared pool of configurable computing resources, rapidly provisioned and released with minimal management effort.', topicIds: ['sia1-cloud'] },
  { id: 'term-iaas', term: 'IaaS', definition: 'Infrastructure as a Service. Compute, storage, and networking resources the customer configures.', topicIds: ['sia1-cloud'] },
  { id: 'term-paas', term: 'PaaS', definition: 'Platform as a Service. A managed platform on which customers build and run their own applications.', topicIds: ['sia1-cloud'] },
  { id: 'term-saas', term: 'SaaS', definition: 'Software as a Service. Finished applications delivered over the internet, such as web-based email.', topicIds: ['sia1-cloud'] },
  { id: 'term-hybrid-cloud', term: 'Hybrid Cloud', definition: 'A mix of public and private cloud where critical activities run privately and non-critical activities run publicly.', topicIds: ['sia1-cloud'] },
  { id: 'term-multi-tenancy', term: 'Multi-Tenancy', definition: 'A provider hosting many customers on the same infrastructure at the same time.', topicIds: ['sia1-cloud'] },

  { id: 'term-project', term: 'Project', definition: 'A temporary endeavour undertaken to create a unique product, service, or result. Temporary and unique are what separate it from ongoing operations.', topicIds: ['sia1-project-management'] },
  { id: 'term-process-groups', term: 'Process Groups', definition: 'Initiating, planning, executing, monitoring and controlling, and closing. Monitoring and controlling runs continuously alongside execution rather than as a phase.', topicIds: ['sia1-project-management'] },
  { id: 'term-wbs', term: 'Work Breakdown Structure', definition: 'A hierarchical decomposition of the deliverable into work packages small enough to estimate and assign. The 100 percent rule requires it to capture all the scope and nothing more.', topicIds: ['sia1-project-management'] },
  { id: 'term-critical-path', term: 'Critical Path', definition: 'The longest chain of dependent activities. Its length is the shortest possible project duration, and its activities have zero float.', topicIds: ['sia1-project-management'] },
  { id: 'term-triple-constraint', term: 'Triple Constraint', definition: 'Scope, time, and cost cannot all be fixed independently; changing one must be absorbed by another or quality pays for it silently.', topicIds: ['sia1-project-management'] },
  { id: 'term-gantt', term: 'Gantt Chart', definition: 'A bar chart projecting scheduled activities onto a calendar, showing duration, sequence, and overlap.', topicIds: ['sia1-project-management'] },
  { id: 'term-technopreneurship', term: 'Technopreneurship', definition: 'Entrepreneurship in which technology is the central enabler of the venture rather than a supporting tool, so the innovation itself carries the value proposition.', topicIds: ['sia1-technopreneurship'] },
  { id: 'term-mvp', term: 'Minimum Viable Product', definition: 'The smallest artefact that produces a trustworthy answer to the riskiest open assumption. Defined by the question it answers, not by its feature count.', topicIds: ['sia1-technopreneurship'] },
  { id: 'term-build-measure-learn', term: 'Build-Measure-Learn', definition: 'An iteration loop that treats each cycle as an experiment: build the smallest test of an assumption, measure a pre-chosen metric, then persevere or pivot.', topicIds: ['sia1-technopreneurship'] },
  { id: 'term-pivot', term: 'Pivot', definition: 'A deliberate change of strategy that keeps what has been validated and abandons what has been disproved, as opposed to abandoning the venture.', topicIds: ['sia1-technopreneurship'] },
  { id: 'term-unit-economics', term: 'Unit Economics', definition: 'The revenue and cost attributable to one customer or transaction. Scaling a venture with negative unit economics multiplies the loss.', topicIds: ['sia1-technopreneurship'] },
  { id: 'term-status-report', term: 'Status Report', definition: 'A periodic report on overall project health against milestones, budget, scope, and resources, as distinct from a progress report listing completed tasks.', topicIds: ['sia1-project-reporting'] },
  { id: 'term-risk-register', term: 'Risk Register', definition: 'A living record of identified risks with likelihood, impact, owner, and planned mitigation.', topicIds: ['sia1-project-reporting'] },
  { id: 'term-adr', term: 'Architecture Decision Record', definition: 'A short immutable document capturing one significant decision: its context, the decision taken, and the consequences knowingly accepted.', topicIds: ['sia1-project-reporting'] },
  { id: 'term-c4-model', term: 'C4 Model', definition: 'A hierarchy of architecture diagrams at four zoom levels — context, container, component, and code — so each diagram serves one audience at one abstraction.', topicIds: ['sia1-project-reporting'] },
  { id: 'term-runbook', term: 'Runbook', definition: 'Operational documentation describing how to deploy, monitor, back up, and recover a system in production.', topicIds: ['sia1-project-reporting'] },
  { id: 'term-api-contract', term: 'API Contract', definition: 'The agreed shape of requests and responses between two systems. The caller depends on the contract, never on the implementation behind it.', topicIds: ['sia1-api-architecture'] },
  { id: 'term-idempotency', term: 'Idempotency', definition: 'The property that applying an operation many times has the same effect as applying it once. It is what makes a client safe to retry after a timeout.', topicIds: ['sia1-api-architecture'] },
  { id: 'term-richardson', term: 'Richardson Maturity Model', definition: 'A four-level grading of REST adoption: single endpoint, resources, HTTP verbs and status codes, then hypermedia controls.', topicIds: ['sia1-api-architecture'] },
  { id: 'term-graphql', term: 'GraphQL', definition: 'A query language and runtime in which a single endpoint exposes a typed schema and the client specifies exactly which fields it wants, avoiding over- and under-fetching.', topicIds: ['sia1-api-architecture'] },
  { id: 'term-openapi', term: 'OpenAPI Specification', definition: 'A machine-readable description format for HTTP APIs, enabling generated documentation, client SDKs, and contract testing.', topicIds: ['sia1-api-architecture'] },
  { id: 'term-oauth2', term: 'OAuth 2.0', definition: 'A delegated authorisation framework letting an application act on a user\'s behalf with a scoped, revocable token instead of the user\'s credentials.', topicIds: ['sia1-api-architecture'] },
  { id: 'term-load-test', term: 'Load Testing', definition: 'Applying the expected production workload to verify that response time, throughput, and resource use stay within target.', topicIds: ['sia1-performance-testing'] },
  { id: 'term-stress-test', term: 'Stress Testing', definition: 'Deliberately exceeding capacity to find the breaking point and observe the failure mode — whether the system degrades cleanly or corrupts state.', topicIds: ['sia1-performance-testing'] },
  { id: 'term-soak-test', term: 'Soak Testing', definition: 'Holding a moderate load for hours to expose slow resource leaks, unbounded caches, and log growth that a short run cannot reveal.', topicIds: ['sia1-performance-testing'] },
  { id: 'term-percentile', term: 'Percentile Latency', definition: 'The value below which a given share of requests complete. p95 and p99 expose the slow tail that an average conceals.', topicIds: ['sia1-performance-testing'] },
  { id: 'term-littles-law', term: 'Little\'s Law', definition: 'L = lambda x W. Average concurrency equals arrival rate times average residence time, so rising latency raises concurrency even at constant traffic.', topicIds: ['sia1-performance-testing'] },
  { id: 'term-slo', term: 'Service Level Objective', definition: 'A target value for a measured service level indicator, turning "fast enough" into an agreed number rather than an opinion argued after an incident.', topicIds: ['sia1-performance-testing'] },
  { id: 'term-three-tier', term: 'Three-Tier Architecture', definition: 'Separation into presentation, logic, and data tiers, where the presentation tier never reaches the data tier directly.', topicIds: ['sia1-multitier-deployment'] },
  { id: 'term-tier-vs-layer', term: 'Tier versus Layer', definition: 'Layers are a logical separation of concerns that can share one process; tiers are a physical separation across processes or machines.', topicIds: ['sia1-multitier-deployment'] },
  { id: 'term-stateless-tier', term: 'Stateless Middle Tier', definition: 'A logic tier holding no client session in local memory, so any instance can serve any request and a load balancer may distribute freely.', topicIds: ['sia1-multitier-deployment'] },
  { id: 'term-n-tier', term: 'N-Tier Architecture', definition: 'Generalisation of the tiered pattern with further tiers such as integration or caching. Each boundary adds latency and a failure mode, so tiers are justified rather than assumed.', topicIds: ['sia1-multitier-deployment'] },
  { id: 'term-valid-xml', term: 'Valid XML', definition: 'A well-formed document that additionally conforms to a declared grammar such as a DTD or XSD. Validity is what makes XML a contract.', topicIds: ['sia1-xml-processing'] },
  { id: 'term-dtd-vs-xsd', term: 'DTD versus XSD', definition: 'DTD uses non-XML syntax with no data types and no namespaces; XSD is written in XML with a rich type system, constraints, and namespace support.', topicIds: ['sia1-xml-processing'] },
  { id: 'term-dom-parser', term: 'DOM Parser', definition: 'Builds the whole document as an in-memory tree, giving random access and editing at a memory cost proportional to document size.', topicIds: ['sia1-xml-processing'] },
  { id: 'term-sax-parser', term: 'SAX Parser', definition: 'An event-driven, read-only parser that streams the document and emits callbacks, keeping memory roughly constant regardless of file size.', topicIds: ['sia1-xml-processing'] },
  { id: 'term-xpath', term: 'XPath', definition: 'A language for addressing nodes in an XML document using path expressions and predicates. XSLT uses it to drive transformations.', topicIds: ['sia1-xml-processing'] },
  { id: 'term-xxe', term: 'XML External Entity (XXE)', definition: 'An attack in which a declared external entity makes the parser read local files or reach internal URLs. Prevented by disabling DTD and external entity resolution.', topicIds: ['sia1-xml-processing'] },
];

/** Default spaced-repetition state applied to every card before the first review. */
const NEW_CARD = {
  easeFactor: 2.5,
  interval: 0,
  repetitions: 0,
  nextReview: 0,
  masteryLevel: 'new',
} as const;

export const flashcards: Flashcard[] = [
  { id: 'fc-sia1-01', topicId: 'sia1-eia', front: 'What is the primary goal of an Enterprise Information Architecture?', back: 'To reduce complexity, and thereby remove the factors that inhibit change and block new business paradigms.', tags: ['eia'], ...NEW_CARD },
  { id: 'fc-sia1-02', topicId: 'sia1-eia', front: 'Which four EA methodologies account for most of the field?', back: 'TOGAF, the Zachman Framework, the Federal Enterprise Architecture, and the Gartner methodology.', tags: ['eia'], ...NEW_CARD },
  { id: 'fc-sia1-03', topicId: 'sia1-eia', front: 'Is the scope of EIA every piece of information in the enterprise?', back: 'No. In practice EIA focuses on information assets with enterprise significance that are needed to achieve effective business change.', tags: ['eia'], ...NEW_CARD },
  { id: 'fc-sia1-04', topicId: 'sia1-governance', front: 'Which two issues does IT governance exist to address?', back: 'That IT delivers value to the business, and that IT-related risks are managed.', tags: ['governance'], ...NEW_CARD },
  { id: 'fc-sia1-05', topicId: 'sia1-governance', front: 'Name the four risk treatments.', back: 'Avoid, mitigate, transfer, and accept.', tags: ['governance', 'risk'], ...NEW_CARD },
  { id: 'fc-sia1-06', topicId: 'sia1-governance', front: 'Which three duties should be segregated?', back: 'Custody of the assets, authorisation, and recording of transactions.', tags: ['governance', 'controls'], ...NEW_CARD },
  { id: 'fc-sia1-07', topicId: 'sia1-data-modelling', front: 'What is the difference between data and information?', back: 'Information is data in context; data has the same value and meaning regardless of the context in which it is used.', tags: ['modelling'], ...NEW_CARD },
  { id: 'fc-sia1-08', topicId: 'sia1-data-modelling', front: 'Which question does each modelling layer answer?', back: 'Conceptual asks what, logical asks how, and physical asks where.', tags: ['modelling'], ...NEW_CARD },
  { id: 'fc-sia1-09', topicId: 'sia1-soa', front: 'Which SOA principle says a service must not keep data between requests?', back: 'Service statelessness — that responsibility belongs to the client application.', tags: ['soa'], ...NEW_CARD },
  { id: 'fc-sia1-10', topicId: 'sia1-soa', front: 'Name the three SOA participants involved in discovery.', back: 'The service provider, the service registry (broker or repository), and the service consumer.', tags: ['soa'], ...NEW_CARD },
  { id: 'fc-sia1-11', topicId: 'sia1-soa', front: 'What are the five horizontal layers of the SOA framework?', back: 'Consumer interface, business process, services, service component, and operational systems.', tags: ['soa'], ...NEW_CARD },
  { id: 'fc-sia1-12', topicId: 'sia1-microservices', front: 'What is the deployment advantage of microservices?', back: 'Only the service that changed needs to be deployed, and only the component under load needs to be scaled.', tags: ['microservices'], ...NEW_CARD },
  { id: 'fc-sia1-13', topicId: 'sia1-microservices', front: 'Which component handles requests coming from many different clients?', back: 'The API gateway.', tags: ['microservices'], ...NEW_CARD },
  { id: 'fc-sia1-14', topicId: 'sia1-data-representation', front: 'List the five rules for well-formed XML.', back: 'One root element, a closing tag for every element, case-sensitive tags, properly nested elements, and quoted attribute values.', tags: ['xml'], ...NEW_CARD },
  { id: 'fc-sia1-15', topicId: 'sia1-data-representation', front: 'What are the seven JSON values?', back: 'Object, array, number, string, true, false, and null.', tags: ['json'], ...NEW_CARD },
  { id: 'fc-sia1-16', topicId: 'sia1-data-representation', front: 'Why must JSON object keys be unique?', back: 'Parser behaviour on duplicate keys is unpredictable; many implementations report only the last name/value pair.', tags: ['json'], ...NEW_CARD },
  { id: 'fc-sia1-17', topicId: 'sia1-web-services', front: 'What are the two child elements of a SOAP envelope?', back: 'An optional Header and a mandatory Body.', tags: ['soap'], ...NEW_CARD },
  { id: 'fc-sia1-18', topicId: 'sia1-web-services', front: 'What must a SOAP node do with a header block targeted at its role?', back: 'Perform the processing the block implies, then delete the header block before relaying the message onward.', tags: ['soap'], ...NEW_CARD },
  { id: 'fc-sia1-19', topicId: 'sia1-web-services', front: 'Which WSDL element attaches a concrete protocol and data format to a port type?', back: 'The binding.', tags: ['wsdl'], ...NEW_CARD },
  { id: 'fc-sia1-20', topicId: 'sia1-eai', front: 'Why does point-to-point integration stop scaling?', back: 'Every new application adds dependencies that must be programmed and maintained, so the connections become unmanageable.', tags: ['eai'], ...NEW_CARD },
  { id: 'fc-sia1-21', topicId: 'sia1-eai', front: 'Which EAI type is cheapest, and why?', back: 'Data-level EAI, because application code is not changed, so there is no need to test and deploy the applications.', tags: ['eai'], ...NEW_CARD },
  { id: 'fc-sia1-22', topicId: 'sia1-middleware', front: 'Where exactly does middleware sit?', back: 'Between the application programs and the operating system and base networking — between front-end requests and back-end resources.', tags: ['middleware'], ...NEW_CARD },
  { id: 'fc-sia1-23', topicId: 'sia1-middleware', front: 'How does asynchronous messaging improve fault tolerance?', back: 'Messages are held in a queue by the middleware until the receiver recovers, so nothing is lost while it is down.', tags: ['middleware'], ...NEW_CARD },
  { id: 'fc-sia1-24', topicId: 'sia1-cloud', front: 'Name the five essential characteristics of cloud computing.', back: 'On-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.', tags: ['cloud'], ...NEW_CARD },
  { id: 'fc-sia1-25', topicId: 'sia1-cloud', front: 'Name the four cloud deployment models.', back: 'Public, private, community, and hybrid.', tags: ['cloud'], ...NEW_CARD },
  { id: 'fc-sia1-26', topicId: 'sia1-cloud', front: 'Name the five cloud actors.', back: 'Cloud consumer, cloud provider, cloud auditor, cloud broker, and cloud carrier.', tags: ['cloud'], ...NEW_CARD },

  { id: 'fc-sia1-27', topicId: 'sia1-project-management', front: 'Why is monitoring and controlling not a phase?', back: 'It runs continuously alongside execution. The control loop compares actual progress against the baseline and feeds corrective action back in, rather than happening once after the work.', tags: ['project-management'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-28', topicId: 'sia1-project-management', front: 'What does float mean, and how much does a critical-path activity have?', back: 'Float is how long an activity may slip without moving the end date. Critical-path activities have zero float by definition.', tags: ['project-management'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-29', topicId: 'sia1-technopreneurship', front: 'What makes a minimum viable product "minimum"?', back: 'It is the smallest artefact that gives a trustworthy answer to the riskiest open assumption — defined by the question it answers, not by feature count.', tags: ['technopreneurship'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-30', topicId: 'sia1-technopreneurship', front: 'Which four risks does a technology venture carry simultaneously?', back: 'Market (does anyone want it), technical (can it be built), execution (can this team build it), and adoption (will users change behaviour).', tags: ['technopreneurship'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-31', topicId: 'sia1-project-reporting', front: 'Which section makes an architecture decision record worth keeping?', back: 'Consequences. It records the cost knowingly accepted, so a successor does not treat a deliberate trade-off as an oversight and re-litigate it.', tags: ['documentation'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-32', topicId: 'sia1-project-reporting', front: 'Name the four C4 levels from furthest out to closest in.', back: 'Context, container, component, code. Each diagram then serves exactly one audience at one level of abstraction.', tags: ['documentation'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-33', topicId: 'sia1-api-architecture', front: 'Why can a client safely retry a PUT but not a POST?', back: 'PUT is idempotent — repeating it has the same effect as doing it once. POST is not, so a retry may duplicate the action unless an idempotency key is used.', tags: ['api'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-34', topicId: 'sia1-api-architecture', front: 'What problem does GraphQL solve that fixed REST payloads cause?', back: 'Over-fetching and under-fetching. The client names exactly the fields it needs, so a mobile screen makes one request and discards nothing.', tags: ['api', 'graphql'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-35', topicId: 'sia1-performance-testing', front: 'Why report p95 latency instead of the average?', back: 'The average is dominated by the many fast requests and hides the slow tail. 950 requests at 100 ms and 50 at 4 s average 295 ms while one user in twenty waits four seconds.', tags: ['testing'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-36', topicId: 'sia1-performance-testing', front: 'What does a stress test reveal that a load test cannot?', back: 'The failure mode beyond capacity — whether the system sheds load and recovers, or corrupts data and stays broken after the pressure drops.', tags: ['testing'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-37', topicId: 'sia1-multitier-deployment', front: 'What is the difference between a layer and a tier?', back: 'Layers are a logical separation of concerns and can share one process. Tiers are a physical separation across processes or machines.', tags: ['architecture'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-38', topicId: 'sia1-multitier-deployment', front: 'Why must the middle tier be stateless to scale horizontally?', back: 'If session state lives in one instance\'s memory, only that instance can serve the user. Stateless instances let a load balancer send any request anywhere.', tags: ['architecture'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-39', topicId: 'sia1-xml-processing', front: 'What is the difference between well-formed and valid XML?', back: 'Well-formed obeys XML syntax. Valid is well-formed AND conforms to a declared grammar such as a DTD or XSD.', tags: ['xml'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
  { id: 'fc-sia1-40', topicId: 'sia1-xml-processing', front: 'When should you choose SAX over DOM?', back: 'When the document is large and only needs reading. SAX streams with roughly constant memory; DOM holds the whole tree, so memory grows with file size.', tags: ['xml'], easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new' },
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
      'To provide centralised routing, translation, and communication between systems.',
      'To replace HTML frontends with React.',
      'To increase the coupling between individual services.',
    ],
    correct: [1],
    explanation: 'An ESB acts as shared infrastructure that handles routing, protocol translation, and data transformation, replacing the tight coupling of point-to-point connections.',
    adaptiveWeight: 1.0,
  },
  {
    id: 'q-sia1-02',
    topicId: 'sia1-eia',
    difficulty: 3,
    type: 'mcq',
    stem: 'Which statement best describes the practical scope of Enterprise Information Architecture?',
    options: [
      'Every byte of data stored anywhere in the enterprise.',
      'Only the data held in the data warehouse.',
      'Information assets with enterprise significance that are needed to achieve effective business change.',
      'Only unstructured content such as documents and images.',
    ],
    correct: [2],
    explanation: 'Although "all enterprise information" is true at an abstract level, EIA in practice focuses on enterprise-significant assets needed for effective business change.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-sia1-03',
    topicId: 'sia1-governance',
    difficulty: 3,
    type: 'scenario',
    stem: 'One employee creates a vendor record, approves that vendor\'s invoices, and reconciles the payments. What is the clearest control weakness?',
    options: [
      'Insufficient metadata management.',
      'Poor segregation of duties.',
      'Missing data warehouse.',
      'Excessive strategic planning.',
    ],
    correct: [1],
    explanation: 'Authorisation, custody, and recording are concentrated in one person, so errors or irregularities can go undetected. Where separation is impractical, compensating controls such as audit trails and independent review are required.',
    adaptiveWeight: 2.0,
  },
  {
    id: 'q-sia1-04',
    topicId: 'sia1-governance',
    difficulty: 2,
    type: 'mcq',
    stem: 'A company buys cyber insurance to cover part of the financial impact of a breach. Which risk treatment is this?',
    options: ['Avoid', 'Mitigate', 'Transfer', 'Accept'],
    correct: [2],
    explanation: 'Insurance shifts part of the financial consequence to another party, which is risk transfer. Mitigation would reduce likelihood or impact directly.',
    adaptiveWeight: 1.0,
  },
  {
    id: 'q-sia1-05',
    topicId: 'sia1-data-modelling',
    difficulty: 3,
    type: 'scenario',
    stem: 'Marketing and customer support each need a different view of the same Customer for their own processes. Which modelling layer are they working in?',
    options: ['Conceptual', 'Logical', 'Physical', 'Operational'],
    correct: [1],
    explanation: 'Information Views refine a shared information concept for a particular process or audience, which places them in the logical layer.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-sia1-06',
    topicId: 'sia1-soa',
    difficulty: 3,
    type: 'scenario',
    stem: 'A service stores each caller\'s progress internally, so a second instance cannot continue serving that caller. Which SOA principle has been violated?',
    options: [
      'Service discoverability',
      'Standardised service contract',
      'Service statelessness',
      'Service composability',
    ],
    correct: [2],
    explanation: 'Statelessness requires that services not keep data from one state to the next; retaining conversation state must be done by the client application.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-sia1-07',
    topicId: 'sia1-microservices',
    difficulty: 4,
    type: 'scenario',
    stem: 'A company has a massive e-commerce monolith. Billing and shipping currently query the same "Orders" SQL table directly. What should they do under a microservices model?',
    options: [
      'Keep the shared database, but put an API in front of it.',
      'Split the data by service boundary and request across boundaries through APIs.',
      'Use an ESB to sync the shared database to a cloud instance.',
      'Convert the SQL database to NoSQL.',
    ],
    correct: [1],
    explanation: 'Microservices are bounded by contexts: each service encapsulates its own domain and defines integration with others explicitly, so shipping calls the billing service rather than reading its tables.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-sia1-08',
    topicId: 'sia1-data-representation',
    difficulty: 2,
    type: 'mcq',
    stem: 'A JSON object contains the key "Title" twice with different values. What should you expect?',
    options: [
      'Both values are always returned as an array.',
      'Parser behaviour is unpredictable; many implementations keep only the last pair.',
      'The document fails XML Schema validation.',
      'The first pair is always kept.',
    ],
    correct: [1],
    explanation: 'When names within a JSON object are not unique, the behaviour of receiving software is unpredictable — some report the last pair, some error, some report all of them.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-sia1-09',
    topicId: 'sia1-data-representation',
    difficulty: 2,
    type: 'mcq',
    stem: 'A developer needs a line break inside a JSON string value. What is the correct approach?',
    options: [
      'Press Enter inside the quotes to continue on the next line.',
      'Wrap the value in a CDATA section.',
      'Use the \\n escape sequence.',
      'Add a // comment marking the break.',
    ],
    correct: [2],
    explanation: 'JSON forbids multi-line strings, so a newline is written as the two-symbol escape \\n and converted by the parser. JSON also has no comment syntax.',
    adaptiveWeight: 1.0,
  },
  {
    id: 'q-sia1-10',
    topicId: 'sia1-web-services',
    difficulty: 3,
    type: 'scenario',
    stem: 'An intermediary node must authenticate a message and then pass it along the SOAP path. Where does that instruction belong?',
    options: [
      'In a header block targeted at that node\'s SOAP role.',
      'In the SOAP body next to the payload.',
      'In the WSDL binding element.',
      'In the UDDI registry entry.',
    ],
    correct: [0],
    explanation: 'Header blocks control processing and are targeted at a SOAP role. The node in that role performs the implied processing and deletes the block before relaying the message.',
    adaptiveWeight: 2.0,
  },
  {
    id: 'q-sia1-11',
    topicId: 'sia1-web-services',
    difficulty: 3,
    type: 'mcq',
    stem: 'A team wants to offer the same operations over an additional protocol without redefining them. Which WSDL element changes?',
    options: ['Types', 'Message', 'Port type', 'Binding'],
    correct: [3],
    explanation: 'The binding attaches a concrete protocol and data format to an existing abstract port type, which is precisely why WSDL separates abstract from concrete definitions.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-sia1-12',
    topicId: 'sia1-eai',
    difficulty: 3,
    type: 'scenario',
    stem: 'A mainframe application exposes no database or business-process access, so architects drive it through its screens. Which EAI type is this?',
    options: [
      'Data-level EAI',
      'Application interface level EAI',
      'Method level EAI',
      'User interface level EAI',
    ],
    correct: [3],
    explanation: 'User interface level EAI is the most primitive approach and is used only when the application offers no other point of integration.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-sia1-13',
    topicId: 'sia1-middleware',
    difficulty: 2,
    type: 'mcq',
    stem: 'A payment flow must move safely from one phase to the next under transaction process monitoring. Which middleware type fits?',
    options: [
      'Content-centric middleware',
      'Transactional middleware',
      'Embedded middleware',
      'Database middleware',
    ],
    correct: [1],
    explanation: 'Transactional middleware ensures transactions move from one phase to the next through transaction process monitoring.',
    adaptiveWeight: 1.0,
  },
  {
    id: 'q-sia1-14',
    topicId: 'sia1-cloud',
    difficulty: 2,
    type: 'scenario',
    stem: 'Several state agencies share cloud infrastructure because they have the same mission and security requirements. Which deployment model is this?',
    options: ['Public cloud', 'Private cloud', 'Community cloud', 'Hybrid cloud'],
    correct: [2],
    explanation: 'A community cloud is shared among organisations with similar interests and requirements such as mission, security requirements, or policy.',
    adaptiveWeight: 1.0,
  },
  {
    id: 'q-sia1-15',
    topicId: 'sia1-cloud',
    difficulty: 3,
    type: 'mcq',
    stem: 'Which cloud actor provides connectivity and transport of cloud services from providers to consumers?',
    options: ['Cloud broker', 'Cloud auditor', 'Cloud carrier', 'Cloud provider'],
    correct: [2],
    explanation: 'The cloud carrier is the intermediary that provides connectivity and transport. A broker is an intermediary in the purchase, and an auditor independently assesses performance and security.',
    adaptiveWeight: 1.5,
  },

  {
    id: 'q-sia1-16', topicId: 'sia1-project-management', difficulty: 3, type: 'scenario',
    stem: 'Activity A (5 days) precedes both B (8 days) and C (3 days); both precede D (4 days). What is the critical path length, and how much float does C carry?',
    options: ['12 days; C has 0 float', '17 days; C has 5 days of float', '20 days; C has 3 days of float', '17 days; C has 0 float'],
    correct: [1],
    explanation: 'A-B-D is 5+8+4 = 17 and A-C-D is 5+3+4 = 12, so the critical path is 17 days. C may slip by the 5-day difference before A-C-D also becomes critical.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-sia1-17', topicId: 'sia1-project-management', difficulty: 2, type: 'mcq',
    stem: 'A sponsor adds scope but will not move the deadline or the budget. Under the triple constraint, what actually absorbs the change?',
    options: ['Nothing — the constraints are independent', 'Quality, silently', 'The critical path shortens', 'The work breakdown structure expands at no cost'],
    correct: [1],
    explanation: 'Scope, time, and cost cannot all be fixed. With time and cost held, the only remaining variable is quality, which degrades without anyone deciding that it should.',
    adaptiveWeight: 2,
  },
  {
    id: 'q-sia1-18', topicId: 'sia1-technopreneurship', difficulty: 3, type: 'scenario',
    stem: 'A team assumes small retailers will trust software to place stock orders automatically. Which MVP tests that assumption fastest?',
    options: ['Build and tune the reordering algorithm first', 'A simple interface where a person places the orders manually behind the scenes', 'A full platform with billing and analytics', 'A market survey with no working product'],
    correct: [1],
    explanation: 'The riskiest assumption is trust, not algorithmic accuracy. A manually operated service answers the trust question in weeks; building the algorithm first answers a question nobody asked.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-sia1-19', topicId: 'sia1-project-reporting', difficulty: 2, type: 'mcq',
    stem: 'Which belongs in documentation rather than in a report?',
    options: ['Percentage of integration completed this fortnight', 'Current budget variance', 'How the system is deployed, monitored, and recovered', 'Risks identified this month and their mitigations'],
    correct: [2],
    explanation: 'Reports are time-bound and describe the project in flight. Documentation is durable and explains the system to someone with no prior context — deployment and recovery are exactly that.',
    adaptiveWeight: 1.5,
  },
  {
    id: 'q-sia1-20', topicId: 'sia1-api-architecture', difficulty: 4, type: 'scenario',
    stem: 'A mobile client sends POST /payments and the connection drops before any response arrives. What is the correct design response?',
    options: ['Retry immediately; POST is idempotent', 'Never retry; report failure to the user', 'Send an idempotency key so the server can recognise and de-duplicate the retry', 'Convert the endpoint to GET so it can be retried safely'],
    correct: [2],
    explanation: 'POST is not idempotent, so a blind retry risks charging twice. An idempotency key lets the server record the outcome and return the original result instead of repeating the work. GET must never mutate state.',
    adaptiveWeight: 3,
  },
  {
    id: 'q-sia1-21', topicId: 'sia1-api-architecture', difficulty: 3, type: 'mcq',
    stem: 'An API exposes resource URLs but performs every operation with POST. Where does it sit on the Richardson maturity model?',
    options: ['Level 0', 'Level 1', 'Level 2', 'Level 3'],
    correct: [1],
    explanation: 'Level 1 introduces resources but still tunnels everything through one verb. Level 2 arrives when the correct HTTP verbs and status codes are used; level 3 adds hypermedia controls.',
    adaptiveWeight: 2,
  },
  {
    id: 'q-sia1-22', topicId: 'sia1-performance-testing', difficulty: 4, type: 'scenario',
    stem: 'Traffic holds steady at 200 requests per second, but a dependency slows and average residence rises from 100 ms to 500 ms. By Little\'s Law, what happens to concurrency?',
    options: ['It stays at 20, because arrival rate did not change', 'It rises from 20 to 100 in-flight requests', 'It falls, because each request finishes later', 'It cannot be determined without the error rate'],
    correct: [1],
    explanation: 'L = lambda x W, so 200 x 0.1 = 20 becomes 200 x 0.5 = 100. A 50-thread pool that was comfortable at 20 is now saturated — the outage is caused by latency, not by extra traffic.',
    adaptiveWeight: 3,
  },
  {
    id: 'q-sia1-23', topicId: 'sia1-performance-testing', difficulty: 3, type: 'mcq',
    stem: 'A service must be verified against a slow memory leak that only shows after several hours. Which test applies?',
    options: ['Spike testing', 'Stress testing', 'Soak (endurance) testing', 'Volume testing'],
    correct: [2],
    explanation: 'Soak testing holds a moderate load for an extended period precisely to expose leaks, unbounded caches, and log growth that a short run cannot reveal.',
    adaptiveWeight: 2,
  },
  {
    id: 'q-sia1-24', topicId: 'sia1-multitier-deployment', difficulty: 3, type: 'scenario',
    stem: 'A PHP app is placed behind a load balancer on two hosts and users start being logged out at random. What is the most likely cause?',
    options: ['The database needs more connections', 'Session state is stored locally, so only one host recognises each user', 'TLS is misconfigured on one host', 'The presentation tier is reaching the data tier directly'],
    correct: [1],
    explanation: 'Horizontal scaling requires a stateless middle tier. With sessions in local files or memory, a request routed to the other host finds no session and appears as a logout. Session state belongs in a shared store.',
    adaptiveWeight: 2.5,
  },
  {
    id: 'q-sia1-25', topicId: 'sia1-xml-processing', difficulty: 3, type: 'mcq',
    stem: 'An interface contract must guarantee that "quantity" is an integer between 1 and 999. Which grammar can express that?',
    options: ['DTD, using #PCDATA', 'XSD, using a restriction on xs:integer', 'Either one equally', 'Neither; it must be checked in application code'],
    correct: [1],
    explanation: 'DTD has no data types beyond text, so it would accept "banana". XSD supplies a typed restriction with minInclusive and maxInclusive, rejecting the value at the parser before application code runs.',
    adaptiveWeight: 2,
  },
  {
    id: 'q-sia1-26', topicId: 'sia1-xml-processing', difficulty: 4, type: 'scenario',
    stem: 'A service parses XML uploaded by untrusted users and an attacker retrieves the contents of a local server file. What was misconfigured?',
    options: ['The XSD did not restrict string length', 'The parser resolved external entities and document type declarations', 'The document was well-formed but not valid', 'A DOM parser was used instead of SAX'],
    correct: [1],
    explanation: 'This is an XXE attack. A declared external entity makes the parser fetch a URI such as file:///etc/passwd, and the content lands in the parsed document. The fix is disabling DTD and external entity resolution, not input filtering.',
    adaptiveWeight: 3,
  },
];
