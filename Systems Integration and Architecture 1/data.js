/**
 * Shared learning content for the Systems Integration and Architecture 1 reviewer.
 *
 * The file intentionally uses classic JavaScript instead of ES module exports so
 * it can be loaded directly by index.html and imported for side effects by the
 * optional React component.
 */

// Keep every internal declaration out of the shared classic-script lexical scope.
(() => {

// Describe the course and the exact module boundary represented by this reviewer.
const course = {
  id: "sia1",
  title: "Systems Integration and Architecture 1",
  shortTitle: "SIA 1",
  moduleLabel: "Modules 1–6",
  description:
    "A beginner-friendly guide to enterprise information architecture, IT governance, information and data modelling, service and microservice architecture, project delivery, data representation, XML processing, web services, API architecture, performance testing, application integration, middleware, cloud computing, and multi-tier deployment.",
};

// Keep exactly twenty glossary terms per module so every derived view stays aligned.
const TERMS_PER_MODULE = 20;

// Primary sources cited by the lessons added for modules 2.3 through 6.1.
const lessonSources = {
  iso21502: { title: "ISO 21502:2020 - Guidance on project management", publisher: "ISO", url: "https://www.iso.org/standard/74947.html" },
  pmi: { title: "PMI Standards and Publications", publisher: "Project Management Institute", url: "https://www.pmi.org/standards" },
  iso56000: { title: "ISO 56000:2020 - Innovation management: Fundamentals and vocabulary", publisher: "ISO", url: "https://www.iso.org/standard/69315.html" },
  adr: { title: "Architecture Decision Records", publisher: "adr.github.io", url: "https://adr.github.io/" },
  c4: { title: "The C4 model for visualising software architecture", publisher: "c4model.com", url: "https://c4model.com/" },
  arc42: { title: "arc42 architecture documentation template", publisher: "arc42.org", url: "https://arc42.org/overview" },
  xsd: { title: "W3C XML Schema Definition Language (XSD) 1.1 Part 1: Structures", publisher: "W3C Recommendation", url: "https://www.w3.org/TR/xmlschema11-1/" },
  xpath: { title: "XML Path Language (XPath) 3.1", publisher: "W3C Recommendation", url: "https://www.w3.org/TR/xpath-31/" },
  xxe: { title: "XML External Entity Prevention Cheat Sheet", publisher: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html" },
  iso25010: { title: "ISO/IEC 25010:2023 - SQuaRE product quality model", publisher: "ISO", url: "https://www.iso.org/standard/78176.html" },
  jmeter: { title: "Apache JMeter User Manual", publisher: "The Apache Software Foundation", url: "https://jmeter.apache.org/usermanual/index.html" },
  slo: { title: "Site Reliability Engineering - Service Level Objectives", publisher: "Google", url: "https://sre.google/sre-book/service-level-objectives/" },
  rfc9110: { title: "RFC 9110 - HTTP Semantics", publisher: "IETF Internet Standard STD 97", url: "https://www.rfc-editor.org/info/rfc9110" },
  openapi: { title: "OpenAPI Specification", publisher: "OpenAPI Initiative", url: "https://spec.openapis.org/oas/latest.html" },
  graphql: { title: "GraphQL Specification", publisher: "GraphQL Foundation", url: "https://spec.graphql.org/" },
  rfc6749: { title: "RFC 6749 - The OAuth 2.0 Authorization Framework", publisher: "IETF", url: "https://www.rfc-editor.org/info/rfc6749" },
  rfc7519: { title: "RFC 7519 - JSON Web Token (JWT)", publisher: "IETF", url: "https://www.rfc-editor.org/info/rfc7519" },
  tls: { title: "NIST SP 800-52 Rev. 2 - Guidelines for TLS Implementations", publisher: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/52/r2/final" },
  soap12: { title: "SOAP Version 1.2 Part 1: Messaging Framework (Second Edition)", publisher: "W3C Recommendation", url: "https://www.w3.org/TR/soap12-part1/" },
};

// Keep module metadata in one place so filters and labels cannot drift apart.
const modules = [
  {
    id: "m1-1",
    label: "1.1",
    title: "Enterprise Information Architecture",
    objective:
      "Connect enterprise goals, information assets, architecture methods, data realms, and information capabilities.",
  },
  {
    id: "m1-2",
    label: "1.2",
    title: "IT Governance",
    objective:
      "Explain how leaders direct IT, deliver value, manage risk, assign responsibility, and monitor performance.",
  },
  {
    id: "m1-3",
    label: "1.3",
    title: "Information and Data Modelling",
    objective:
      "Distinguish information from data and place architecture constructs in conceptual, logical, and physical views.",
  },
  {
    id: "m2-1",
    label: "2.1",
    title: "Service-Oriented Architecture",
    objective:
      "Describe services, service categories, SOA design principles, participant roles, and the five-layer SOA framework.",
  },
  {
    id: "m2-2",
    label: "2.2",
    title: "Microservice Architecture",
    objective:
      "Explain how independently deployable services are designed, communicate, scale, and are adopted by teams.",
  },
  {
    id: "m2-3",
    label: "2.3",
    title: "Project Delivery and Technopreneurship",
    objective:
      "Plan, govern, and report an integration project using recognised process groups, venture practice, and decision records.",
  },
  {
    id: "m3-1",
    label: "3.1",
    title: "Data Representation: XML and JSON",
    objective:
      "Represent structured data in XML and JSON, apply well-formedness rules, and validate documents against schemas.",
  },
  {
    id: "m3-2",
    label: "3.2",
    title: "Web Services and SOAP",
    objective:
      "Define web services and explain SOAP messaging, WSDL service description, and UDDI discovery.",
  },
  {
    id: "m3-3",
    label: "3.3",
    title: "XML Processing and Schema Validation",
    objective:
      "Choose a parsing model, validate against a schema, query with XPath, bind to objects, and close the XXE exposure.",
  },
  {
    id: "m4-1",
    label: "4.1",
    title: "Performance and Stress Testing",
    objective:
      "Distinguish load, stress, soak, and spike tests, read latency percentiles, and set service level objectives.",
  },
  {
    id: "m5-1",
    label: "5.1",
    title: "Enterprise Application Integration",
    objective:
      "Remove information silos using point-to-point, hub-and-spoke, bus, middleware, and microservice integration models.",
  },
  {
    id: "m5-2",
    label: "5.2",
    title: "Middleware",
    objective:
      "Position middleware between applications and back-end resources and select the right middleware category and type.",
  },
  {
    id: "m5-3",
    label: "5.3",
    title: "Cloud Computing",
    objective:
      "Apply the essential cloud characteristics, service models, deployment models, architecture, and actor roles.",
  },
  {
    id: "m5-4",
    label: "5.4",
    title: "API Architecture: REST, SOAP, and GraphQL",
    objective:
      "Compare REST, SOAP, GraphQL, and gRPC, and apply maturity, versioning, idempotency, and authorisation correctly.",
  },
  {
    id: "m6-1",
    label: "6.1",
    title: "Multi-Tier Architecture and Deployment",
    objective:
      "Separate presentation, logic, and data tiers, keep the logic tier stateless, and promote builds safely across environments.",
  },
];

// Each topic follows the same presentation contract used by the existing reviewer.
const topics = [
  {
    id: "ea-eia-foundations",
    moduleId: "m1-1",
    unit: "1.1A",
    title: "EA, IA, and EIA Foundations",
    color: "blue",
    subtitle:
      "How enterprise strategy, technology, and information fit into one architectural picture.",
    beginner:
      "Think of Enterprise Architecture as the city plan for an organization. Information Architecture organizes what people need to know, while Enterprise Information Architecture makes that information shareable and useful across the whole city.",
    example:
      "A university connects admissions, enrollment, finance, and learning systems through shared student information instead of keeping a different student identity in every office.",
    terms: [
      "Enterprise",
      "Architecture",
      "Enterprise Architecture",
      "Information Architecture",
      "Enterprise Information Architecture",
    ],
    keyPoints: [
      "Enterprise Architecture aligns business strategy, IT strategy, and implementation.",
      "Information Architecture creates a shared and trustworthy information environment.",
      "EIA is the information-centered part of Enterprise Architecture.",
      "EIA describes current state, desired future state, and guidance for change.",
      "The practical target is enterprise-significant information, not every isolated data item.",
    ],
    compare: {
      headers: ["View", "Main question", "Simple example"],
      rows: [
        ["Enterprise Architecture", "How should the whole enterprise work?", "A university-wide transformation plan."],
        ["Information Architecture", "How should information be organized and found?", "A shared academic information catalog."],
        ["Enterprise Information Architecture", "How will important information be governed and exchanged?", "One trusted student record used across departments."],
      ],
    },
    flow: [
      ["Strategy", "Start with business goals and required outcomes."],
      ["Information", "Identify information that is significant to the enterprise."],
      ["Architecture", "Model principles, capabilities, and relationships."],
      ["Technology", "Choose systems that support the architecture."],
      ["Change", "Move from the current state toward the target state."],
    ],
  },
  {
    id: "methods-principles",
    moduleId: "m1-1",
    unit: "1.1B",
    title: "Architecture Methods and IA Principles",
    color: "violet",
    subtitle:
      "TOGAF, Zachman, FEA, Gartner, and the principles that keep information easy to navigate.",
    beginner:
      "Architecture methods are different map-making systems. They organize the same enterprise from different angles, while IA principles keep the resulting information spaces understandable and ready to grow.",
    example:
      "A campus portal offers focused choices, shows examples under each service category, and lets students browse by task, office, or audience.",
    terms: [
      "TOGAF",
      "Zachman Framework",
      "Federal Enterprise Architecture",
      "Gartner Methodology",
      "Principle of Disclosure",
      "Principle of Growth",
    ],
    keyPoints: [
      "TOGAF groups EA into business, application, data, and technical architectures.",
      "Zachman combines six descriptive questions with six stakeholder perspectives.",
      "FEA uses business, component, technical, data, and performance reference models.",
      "Gartner brings business owners, information specialists, and technology implementers together.",
      "The eight IA principles cover objects, choices, disclosure, exemplars, front doors, multiple classification, focused navigation, and growth.",
    ],
    compare: {
      headers: ["Method", "Organizing idea", "Memory hook"],
      rows: [
        ["TOGAF", "Four architecture categories and a development method.", "Business to technology."],
        ["Zachman", "Questions crossed with stakeholder perspectives.", "A 36-cell matrix."],
        ["FEA", "Five linked reference models.", "Performance to data."],
        ["Gartner", "Collaboration among three key groups.", "Business, information, technology."],
      ],
    },
    flow: [
      ["Choose", "Select a method appropriate to the organization."],
      ["Describe", "Capture business and information concerns."],
      ["Classify", "Place artifacts in consistent categories."],
      ["Guide", "Apply IA principles to user-facing structures."],
      ["Grow", "Leave room for changing requirements and content."],
    ],
  },
  {
    id: "eia-goals-design",
    moduleId: "m1-1",
    unit: "1.1C",
    title: "EIA Goals, Characteristics, and Design",
    color: "cyan",
    subtitle:
      "Reducing complexity through shared language, transparency, models, and practical navigation.",
    beginner:
      "A strong EIA removes guesswork. People know what information means, where it came from, who needs it, and how it moves—even when applications change.",
    example:
      "A company maps the customer concept once, records its source and transformations, and lets sales and support use appropriate views of that shared meaning.",
    terms: [
      "Alignment",
      "Agility",
      "Common Language",
      "Transparency",
      "Conceptual Model",
      "Logical Model",
    ],
    keyPoints: [
      "The central goal is to connect users with needed information while reducing complexity.",
      "Information should remain understandable independently of a particular screen or application.",
      "Enterprise requirements expose conflicts, overlaps, and gaps between information silos.",
      "Models simplify complexity and feed governed metadata repositories.",
      "Top-down, bottom-up, search-system, and lightweight guerrilla techniques can all support EIA design.",
    ],
    compare: {
      headers: ["Design track", "Starts with", "Useful move"],
      rows: [
        ["Top-down", "Enterprise navigation and structure.", "Repurpose the sitemap into task-focused guides."],
        ["Bottom-up", "Content inside individual silos.", "Build useful local models with limited metadata."],
        ["Search systems", "What people actually search for.", "Analyze logs and prioritize common queries."],
        ["Guerrilla EIA", "Low-cost staff collaboration.", "Use wikis, directories, and shared bookmarks."],
      ],
    },
    flow: [
      ["Define", "Describe processes and shared business meaning."],
      ["Model", "Build conceptual, logical, and physical views."],
      ["Trace", "Record sources, destinations, movement, and transformation."],
      ["Store", "Keep models and metadata in a shared repository."],
      ["Improve", "Use the complete picture to remove duplication and gaps."],
    ],
  },
  {
    id: "data-realms",
    moduleId: "m1-1",
    unit: "1.1D",
    title: "Seven Data Realms",
    color: "amber",
    subtitle:
      "Transaction, metadata, master, reference, unstructured, analytical, and big data.",
    beginner:
      "Not all enterprise data behaves the same way. Classifying it into realms helps architects choose the right ownership, storage, quality, security, and delivery approach.",
    example:
      "A store separates sales receipts, product records, country codes, product photos, dashboards, and sensor streams because each needs different management.",
    terms: [
      "Transaction Data",
      "Metadata",
      "Master Data",
      "Reference Data",
      "Unstructured Data",
      "Analytical Data",
      "Big Data",
    ],
    keyPoints: [
      "Transaction data records business events such as sales and payments.",
      "Metadata describes other data, including ownership, format, and lineage.",
      "Master data represents important shared entities such as customers and products.",
      "Reference data provides stable allowed values such as country and currency codes.",
      "Unstructured, analytical, and big data require capabilities different from ordinary transactions.",
    ],
    compare: {
      headers: ["Realm", "What it represents", "Example"],
      rows: [
        ["Master", "A shared core business entity.", "The canonical student record."],
        ["Transaction", "A business event.", "A tuition payment."],
        ["Reference", "An approved value set.", "A list of degree codes."],
        ["Analytical", "Derived decision-support data.", "Enrollment trends by semester."],
      ],
    },
    flow: [
      ["Observe", "Identify the purpose and behavior of a dataset."],
      ["Classify", "Place it in the most useful data realm."],
      ["Govern", "Assign ownership, quality, and retention rules."],
      ["Enable", "Select the capabilities needed to manage it."],
      ["Share", "Deliver trustworthy data to authorized consumers."],
    ],
  },
  {
    id: "eia-capabilities",
    moduleId: "m1-1",
    unit: "1.1E",
    title: "EIA Capability Model",
    color: "green",
    subtitle:
      "The organizational abilities required to manage information throughout its lifetime.",
    beginner:
      "A data realm says what kind of information exists. A capability says what the organization must be able to do with it.",
    example:
      "A university combines an enterprise data model, integration services, master-data management, governance, security, and dashboards to create trusted institutional reports.",
    terms: [
      "Enterprise Information Delivery",
      "Business Intelligence",
      "Data Integration",
      "Master Data Management",
      "Enterprise Data Model",
      "Content Management",
      "Data Governance",
      "Data Security Management",
    ],
    keyPoints: [
      "Delivery and sharing move information to the people and systems that need it.",
      "Business intelligence and data warehousing turn operations into insight.",
      "Data integration connects otherwise separate applications and stores.",
      "Master-data management and an enterprise data model prevent one system from defining the whole enterprise.",
      "Governance, quality, lifecycle, security, content, and technology management keep information usable and controlled.",
    ],
    compare: {
      headers: ["Capability", "Primary job", "Example output"],
      rows: [
        ["Data integration", "Connect and transform data.", "A synchronized enrollment feed."],
        ["Master-data management", "Maintain trusted shared entities.", "One authoritative student identity."],
        ["Business intelligence", "Turn data into insight.", "A retention dashboard."],
        ["Content management", "Manage documents and media.", "A governed policy repository."],
      ],
    },
    flow: [
      ["Model", "Define enterprise information needs."],
      ["Integrate", "Connect sources using batch or real-time patterns."],
      ["Govern", "Apply quality, lifecycle, and ownership controls."],
      ["Secure", "Give the right access at the right time."],
      ["Deliver", "Share information and insights with stakeholders."],
    ],
  },
  {
    id: "reference-future-cases",
    moduleId: "m1-1",
    unit: "1.1F",
    title: "Reference Architecture, Future Themes, and Cases",
    color: "rose",
    subtitle:
      "Four EIA reference stages, emerging capabilities, and lessons from real implementations.",
    beginner:
      "A reference architecture is a reusable blueprint. It moves from big ideas to components and operations, then adapts to cloud, metadata, real-time analytics, and changing business needs.",
    example:
      "The University of Pittsburgh connected architecture work with business-process reengineering and refined a troubled procurement process with end users.",
    terms: [
      "Conceptual Architecture",
      "Logical Architecture",
      "Component Model",
      "Operational Model",
      "Cloud Computing",
      "Data Lineage",
      "Dynamic Warehousing",
    ],
    keyPoints: [
      "Conceptual architecture establishes scope, domains, principles, decisions, and governance.",
      "Logical architecture shows information services, integration, and domain relationships.",
      "The component model defines reusable building blocks, services, relationships, and interactions.",
      "The operational model explains logical and physical operation, patterns, service qualities, and delivery.",
      "Cloud, metadata, mashups, dynamic warehousing, and advanced analytics expand next-generation EIA.",
    ],
    compare: {
      headers: ["Reference stage", "Level", "Typical concern"],
      rows: [
        ["Conceptual", "Why and what.", "Principles, domains, and decisions."],
        ["Logical", "How capabilities cooperate.", "Integration and information services."],
        ["Component", "What building blocks exist.", "Services and component interactions."],
        ["Operational", "How it runs.", "Deployment, patterns, and service quality."],
      ],
    },
    flow: [
      ["Agree", "Build consensus on shared information principles."],
      ["Discover", "Inventory processes, assets, and pain points."],
      ["Pilot", "Apply the blueprint to a high-value process."],
      ["Learn", "Refine patterns with real stakeholder feedback."],
      ["Evolve", "Expand the architecture as new projects follow it."],
    ],
  },
  {
    id: "governance-foundations",
    moduleId: "m1-2",
    unit: "1.2A",
    title: "Corporate Governance and GEIT",
    color: "blue",
    subtitle:
      "Who directs the enterprise, how IT creates value, and why accountability starts at the top.",
    beginner:
      "Governance decides direction and checks results. Management carries out that direction. Governance of Enterprise IT makes sure technology supports business goals, uses resources responsibly, and keeps risk acceptable.",
    example:
      "A board sets digital-service priorities and risk appetite; executives fund and implement the systems; auditors independently check whether controls and outcomes match the direction.",
    terms: [
      "Corporate Governance",
      "IT Governance",
      "Board of Directors",
      "Executive Management",
      "Stakeholder",
      "Accountability",
    ],
    keyPoints: [
      "Corporate governance distributes rights and responsibilities among boards, managers, shareholders, and stakeholders.",
      "GEIT is part of enterprise governance and is the responsibility of the board and executive management.",
      "IT should align with enterprise objectives and realize promised benefits.",
      "IT resources must be used responsibly and IT-related risk must be managed.",
      "Governance provides direction and oversight; management implements the required systems and controls.",
    ],
    compare: {
      headers: ["Area", "Main responsibility", "Example"],
      rows: [
        ["Governance", "Evaluate needs, direct priorities, and monitor outcomes.", "Board approves digital risk appetite."],
        ["Management", "Plan, build, run, and report.", "CIO implements security improvements."],
        ["Assurance", "Independently assess controls and claims.", "IS auditor reviews governance evidence."],
      ],
    },
    flow: [
      ["Evaluate", "Understand stakeholder needs and enterprise conditions."],
      ["Direct", "Set priorities, policies, and acceptable risk."],
      ["Manage", "Implement plans, resources, and controls."],
      ["Monitor", "Track value, risk, compliance, and performance."],
      ["Assure", "Independently verify whether governance works."],
    ],
  },
  {
    id: "governance-focus-committees",
    moduleId: "m1-2",
    unit: "1.2B",
    title: "Focus Areas, Committees, and Scorecards",
    color: "violet",
    subtitle:
      "Strategic alignment, value, resources, risk, performance, and the groups that oversee them.",
    beginner:
      "Governance stays practical by dividing attention into five focus areas. Strategy committees advise the board about direction; steering committees turn direction into prioritized projects and services.",
    example:
      "A strategy committee recommends a cloud direction, while a steering committee approves the migration roadmap, budget, owners, priorities, and milestones.",
    terms: [
      "Strategic Alignment",
      "Value Delivery",
      "Resource Management",
      "Risk Management",
      "Performance Measurement",
      "IT Strategy Committee",
      "IT Steering Committee",
      "IT Balanced Scorecard",
    ],
    keyPoints: [
      "Strategic alignment links business plans and IT plans.",
      "Value delivery checks whether IT provides promised benefits at optimized cost.",
      "Resource management covers applications, information, infrastructure, and people.",
      "Risk and performance measurement make deviations visible before they become larger failures.",
      "A balanced scorecard translates financial and nonfinancial goals into monitored action.",
    ],
    compare: {
      headers: ["Committee", "Time horizon", "Typical work"],
      rows: [
        ["IT strategy committee", "Current and future strategic issues.", "Advises the board on value, risk, direction, skills, and sourcing."],
        ["IT steering committee", "Implementation and service delivery.", "Prioritizes projects, budgets, resources, milestones, and standards."],
      ],
    },
    flow: [
      ["Align", "Connect IT goals with enterprise goals."],
      ["Prioritize", "Select the initiatives with the strongest case."],
      ["Resource", "Assign money, people, infrastructure, and information."],
      ["Measure", "Track delivery, risk, and performance indicators."],
      ["Correct", "Change priorities or controls when evidence demands it."],
    ],
  },
  {
    id: "security-ea-planning",
    moduleId: "m1-2",
    unit: "1.2C",
    title: "Security Governance, EA, and Planning",
    color: "cyan",
    subtitle:
      "Protecting information while documenting the current state and planning a better future state.",
    beginner:
      "Security governance is not only a technical firewall problem. Leaders set direction so information stays trustworthy, available, protected, and aligned with the way the organization creates value.",
    example:
      "A hospital maps current applications and data, defines a secure target architecture, and measures whether a multi-year roadmap improves patient service without exceeding risk limits.",
    terms: [
      "Information Security Governance",
      "Integrity",
      "Continuity",
      "Enterprise Architecture",
      "Current State",
      "Future State",
      "Strategic Planning",
      "Maturity Model",
    ],
    keyPoints: [
      "Security governance protects information throughout its lifecycle, including people and third parties.",
      "Desired outcomes include alignment, risk management, value, measurement, resources, and process integration.",
      "Enterprise Architecture documents assets and connects a current state to an optimized future state.",
      "Strategic planning balances demand for IT with the organization’s supply capacity.",
      "Maturity and improvement models help teams understand current ability and choose practical next improvements.",
    ],
    compare: {
      headers: ["Artifact", "Question answered", "Example"],
      rows: [
        ["Current-state architecture", "What exists now?", "Disconnected patient databases."],
        ["Future-state architecture", "What should exist later?", "A governed shared patient identity."],
        ["Strategic roadmap", "How will the change happen?", "Phased integration and security work."],
      ],
    },
    flow: [
      ["Inventory", "Document current assets, processes, and controls."],
      ["Assess", "Measure maturity, gaps, risks, and demand."],
      ["Design", "Describe a secure and valuable future state."],
      ["Roadmap", "Sequence investments and improvement work."],
      ["Monitor", "Measure outcomes and adjust the plan."],
    ],
  },
  {
    id: "policies-risk",
    moduleId: "m1-2",
    unit: "1.2D",
    title: "Policies, Procedures, and Risk Management",
    color: "amber",
    subtitle:
      "Turning management intent into repeatable action and choosing how to treat uncertainty.",
    beginner:
      "A policy says what the organization expects and why. A procedure says exactly how people carry it out. Risk management identifies what could go wrong and chooses to avoid, mitigate, transfer, or accept it.",
    example:
      "A university policy requires protected student records; a procedure lists account approval and review steps; a risk assessment decides which weaknesses need stronger controls.",
    terms: [
      "Policy",
      "Procedure",
      "Threat",
      "Vulnerability",
      "Control",
      "Residual Risk",
      "Risk Analysis",
      "Annual Loss Expectancy",
    ],
    keyPoints: [
      "Policies are clear high-level statements of management direction.",
      "Procedures derive from parent policies and implement their intent.",
      "Risk analysis identifies assets, threats, vulnerabilities, likelihood, impact, and existing controls.",
      "Treatment choices are avoid, mitigate, transfer, and accept.",
      "Final residual-risk acceptance considers policy, measurement uncertainty, cost, and control effectiveness.",
    ],
    compare: {
      headers: ["Treatment", "Action", "Example"],
      rows: [
        ["Avoid", "Stop the risky activity.", "Retire an unsafe public service."],
        ["Mitigate", "Reduce likelihood or impact.", "Add multifactor authentication."],
        ["Transfer", "Shift financial responsibility.", "Purchase cyber insurance."],
        ["Accept", "Knowingly retain the remaining risk.", "Document a low-impact exception."],
      ],
    },
    flow: [
      ["Identify", "List assets, threats, and vulnerabilities."],
      ["Analyze", "Estimate likelihood and impact."],
      ["Evaluate", "Compare risk with organizational tolerance."],
      ["Treat", "Avoid, mitigate, transfer, or accept."],
      ["Monitor", "Track controls and remaining risk over time."],
    ],
  },
  {
    id: "people-sourcing-change",
    moduleId: "m1-2",
    unit: "1.2E",
    title: "People, Sourcing, and Change",
    color: "green",
    subtitle:
      "Building capability through responsible staffing, vendor choices, and human-centered change.",
    beginner:
      "Technology succeeds through people. Organizations must hire and develop staff, decide which work stays inside or goes to vendors, and involve affected users so useful changes are not resisted or ignored.",
    example:
      "A college keeps data governance in-house, uses a specialist vendor for a one-time migration, and includes faculty and staff in testing and communication.",
    terms: [
      "Human Resource Management",
      "Insourcing",
      "Outsourcing",
      "Hybrid Sourcing",
      "Nearshore",
      "Offshore",
      "Vendor Management",
      "Organizational Change Management",
    ],
    keyPoints: [
      "HR management includes hiring, training, evaluation, scheduling, required vacations, promotion, and termination.",
      "Sourcing may be insourced, outsourced, or hybrid and may be onsite, nearshore, or offshore.",
      "Outsourcing can add focus and experience but may increase cost, dependency, control loss, and vendor-failure risk.",
      "Clear goals, benchmarks, contracts, oversight, and contingency provisions reduce sourcing risk.",
      "Change management uses defined communication and involvement so improvements match user expectations.",
    ],
    compare: {
      headers: ["Approach", "Who performs the work?", "Trade-off"],
      rows: [
        ["Insourced", "Organization employees.", "More internal control and capability."],
        ["Outsourced", "Vendor employees.", "Specialist capacity with dependency risk."],
        ["Hybrid", "Organization and vendor together.", "Shared expertise with coordination needs."],
      ],
    },
    flow: [
      ["Need", "Define the business capability and expected service."],
      ["Assess", "Compare internal skills, cost, control, and risk."],
      ["Source", "Choose in-house, vendor, or hybrid delivery."],
      ["Contract", "Set measurable outcomes, oversight, and contingencies."],
      ["Adopt", "Communicate, train, involve users, and monitor change."],
    ],
  },
  {
    id: "operations-roles-assurance",
    moduleId: "m1-2",
    unit: "1.2F",
    title: "Operations, Roles, Controls, and Assurance",
    color: "rose",
    subtitle:
      "Budgets, quality, performance, IS responsibilities, segregation of duties, and audit evidence.",
    beginner:
      "Clear roles and visible evidence make IT controllable. Budgets allocate resources, quality improves processes, performance measures trigger action, and segregation of duties prevents one person from controlling an entire sensitive transaction.",
    example:
      "One employee requests a payment, another authorizes it, and a third reconciles records; audit trails and supervisory review provide backup when staffing is limited.",
    terms: [
      "IS Budget",
      "Chargeback",
      "Quality Management",
      "Performance Optimization",
      "Service Desk",
      "Data Management",
      "Segregation of Duties",
      "Compensating Control",
      "IS Auditor",
    ],
    keyPoints: [
      "Financial management connects IT budgets and chargeback practices to short- and long-range plans.",
      "Quality management controls, measures, and improves repeatable IT processes.",
      "Performance optimization improves perceived service and productivity without unnecessary investment.",
      "Organizational charts, job descriptions, RACI charts, and workflows clarify responsibility.",
      "Authorization, custody, and transaction recording should be separated or supported by compensating controls.",
    ],
    compare: {
      headers: ["Control type", "Purpose", "Example"],
      rows: [
        ["Preventive separation", "Stop one person from controlling everything.", "Different requestor and approver."],
        ["Detective compensation", "Reveal problems when separation is limited.", "Audit trail and exception report."],
        ["Independent assurance", "Assess whether governance and controls work.", "IS audit of plans, policies, roles, and contracts."],
      ],
    },
    flow: [
      ["Define", "Document roles, authority, budgets, and expected service."],
      ["Separate", "Split authorization, custody, and recording."],
      ["Operate", "Run services using controlled processes."],
      ["Measure", "Collect quality and performance evidence."],
      ["Assure", "Review documents, contracts, controls, and real practice."],
    ],
  },
  {
    id: "information-versus-data",
    moduleId: "m1-3",
    unit: "1.3A",
    title: "Information Versus Data",
    color: "blue",
    subtitle:
      "Why context turns stable data building blocks into useful information for business work.",
    beginner:
      "Data is a reusable building block with stable meaning. Information is data placed in a context that helps a person or process understand or decide something.",
    example:
      "The number 42 is data. “42 students are at risk of dropping this semester” is information because the number now has audience, meaning, and purpose.",
    terms: [
      "Information",
      "Data",
      "Business Process",
      "Application",
      "Report",
      "Message",
      "Master Data",
      "Transactional Data",
    ],
    keyPoints: [
      "Information is data in context.",
      "Data keeps the same meaning regardless of the situation in which it is used.",
      "Business processes consume information to perform work.",
      "Applications use and produce information while storing and managing data.",
      "Reports, application views, and integration messages are information examples; customer, currency, sale, and invoice records are data examples.",
    ],
    compare: {
      headers: ["Item", "Simple definition", "Example"],
      rows: [
        ["Data", "A stable building block.", "Customer, country, invoice."],
        ["Information", "Data interpreted in a context.", "A late-payment report for finance."],
        ["Application", "A system that stores data and presents information.", "An enrollment system and its class-list view."],
      ],
    },
    flow: [
      ["Capture", "Applications store stable data values."],
      ["Combine", "Relevant data elements are selected."],
      ["Contextualize", "A process, audience, and purpose add meaning."],
      ["Present", "A view, report, or message communicates information."],
      ["Act", "People or systems use the information in a process."],
    ],
  },
  {
    id: "modelling-layers",
    moduleId: "m1-3",
    unit: "1.3B",
    title: "Conceptual, Logical, and Physical Modelling",
    color: "violet",
    subtitle:
      "Moving from what the business needs, to how it is represented, to where it is deployed.",
    beginner:
      "The conceptual layer names what matters, the logical layer explains how it is organized or represented, and the physical layer identifies where a real deployed version lives.",
    example:
      "Conceptual: Customer. Logical: Customer Services View and Customer Contact Details object. Physical: the production customer table in the ERP database.",
    terms: [
      "Conceptual Layer",
      "Logical Layer",
      "Physical Layer",
      "Information Concept",
      "Data Subject",
      "Information View",
      "Data Object",
      "Information Store",
    ],
    keyPoints: [
      "Conceptual models answer what information and data the business needs.",
      "Logical models answer how different business areas use or represent that meaning.",
      "Physical models answer where a deployed representation is stored.",
      "Conceptual constructs provide semantic grounding for later logical and physical items.",
      "The EA information-and-data layer focuses on architectural dependencies rather than detailed traditional database design.",
    ],
    compare: {
      headers: ["Layer", "Question", "Example construct"],
      rows: [
        ["Conceptual", "What matters?", "Information Concept or Data Subject."],
        ["Logical", "How is it represented?", "Information View or Data Object."],
        ["Physical", "Where is it deployed?", "Information Store or Physical Data Object."],
      ],
    },
    flow: [
      ["Objective", "State the information architecture outcome."],
      ["Concept", "Define information concepts and data subjects."],
      ["View", "Refine them into logical views and data objects."],
      ["Represent", "Connect them to databases, feeds, reports, or tables."],
      ["Deploy", "Identify production, development, or test stores."],
    ],
  },
  {
    id: "soa-foundations",
    moduleId: "m2-1",
    unit: "2.1A",
    title: "SOA Foundations and Service Categories",
    color: "blue",
    subtitle:
      "What a service is, how services talk, and the four families of services in an enterprise.",
    beginner:
      "Service-Oriented Architecture builds an application out of separate services that offer useful functions and agree on how to talk to each other. Each service does one clear job and can be reused by anything that follows the agreed contract.",
    example:
      "An online store reuses one payment service for the web checkout, the mobile app, and the call-center tool instead of coding payment logic three times.",
    terms: [
      "Service",
      "Service-Oriented Architecture",
      "Enterprise Service Bus",
      "Infrastructure Services",
      "Business Services",
      "Application Services",
      "Enterprise Services",
    ],
    keyPoints: [
      "SOA is a design style in which components provide services to other components through agreed communication protocols.",
      "A service is a clear, independent function that can exchange data with other services without depending on their internals.",
      "Infrastructure services handle non-functional work such as logging, authentication, and security, and split into communication and utility services.",
      "Business services perform business functions and include activity, process, entity, and capability services.",
      "Application services expose a dedicated user interface that invokes other services, while enterprise services implement the functionality the business services define.",
      "SOA benefits include improved flexibility, lower development and management cost, better reliability, faster upgrades, and improved manageability and security.",
    ],
    compare: {
      headers: ["Service category", "Purpose", "Example"],
      rows: [
        ["Infrastructure", "Technical support work shared by everything.", "Message transport, event logging, authentication."],
        ["Business", "Perform a business function.", "Compute a student's tuition balance."],
        ["Application", "Give a specific application a UI that calls services.", "The enrollment screen used by a registrar."],
        ["Enterprise", "Implement functionality defined by business services.", "An enterprise billing service composed from smaller services."],
      ],
    },
    flow: [
      ["Identify", "Find a business capability worth exposing once."],
      ["Contract", "Describe the service so consumers know how to call it."],
      ["Publish", "Register the service so consumers can discover it."],
      ["Bind", "Let a consumer locate the provider and invoke the service."],
      ["Reuse", "Compose the same service into new solutions."],
    ],
  },
  {
    id: "soa-principles-framework",
    moduleId: "m2-1",
    unit: "2.1B",
    title: "SOA Principles, Roles, and Framework",
    color: "violet",
    subtitle:
      "Nine design principles, the provider–registry–consumer triangle, and the five-layer SOA framework.",
    beginner:
      "SOA principles are habits that keep services easy to reuse. Providers publish services, a registry lists them, and consumers look them up and call them. The framework then stacks the whole solution from the screen down to the data.",
    example:
      "A weather service publishes its contract to a registry; a travel site finds it, binds to it, and calls it without knowing which language or server it runs on.",
    terms: [
      "Standardized Service Contract",
      "Loose Coupling",
      "Service Abstraction",
      "Service Statelessness",
      "Service Discoverability",
      "Service Consumer",
      "Service Registry",
      "Service Provider",
    ],
    keyPoints: [
      "The nine principles are standardized contract, loose coupling, abstraction, reusability, autonomy, statelessness, discoverability, composability, and interoperability.",
      "Loose coupling means one failing service should not stop the client application from running.",
      "Statelessness pushes conversation state back to the client so any instance can serve any request.",
      "The service provider builds and publishes a service, the registry (broker or repository) lists it, and the consumer finds and binds to it.",
      "The SOA framework has five horizontal layers: consumer interface, business process, services, service component, and operational systems.",
      "SOA advantages include reusability, platform independence, easy maintenance, availability, parallel development, reliability, and scalability.",
    ],
    compare: {
      headers: ["SOA layer", "Holds", "Beginner reading"],
      rows: [
        ["Consumer interface", "GUI applications for end users.", "The screen a person actually touches."],
        ["Business process", "Business use cases expressed as applications.", "The steps of the work being done."],
        ["Services", "The catalog of in-service functions.", "The menu of things the enterprise can do."],
        ["Service component", "The components used to build services.", "The parts each menu item is made of."],
        ["Operational systems", "The data pattern and running systems.", "Where the data really lives."],
      ],
    },
    flow: [
      ["Design", "Write the service contract before the code."],
      ["Decouple", "Remove hidden dependencies between services."],
      ["Register", "Publish the description to the service registry."],
      ["Discover", "Let consumers search the registry at run time."],
      ["Compose", "Combine small services into larger business processes."],
    ],
  },
  {
    id: "microservices-foundations",
    moduleId: "m2-2",
    unit: "2.2A",
    title: "Microservices Foundations and Design",
    color: "cyan",
    subtitle:
      "Breaking a large application into small services that each run in their own process.",
    beginner:
      "Microservice architecture splits one big application into many small applications that work together. Each one is built, deployed, and scaled on its own, so a change in one place does not force everything else to be redeployed.",
    example:
      "A shopping site runs separate catalog, cart, payment, and shipping services; a Black Friday traffic spike only needs the cart service scaled up.",
    terms: [
      "Microservices Architecture",
      "Monolithic Application",
      "Functional Service",
      "Bounded Context",
      "Distributed Architecture",
      "Independent Deployability",
      "Horizontal Scaling",
    ],
    keyPoints: [
      "The microservices style develops small services that each run in their own process and support continuous delivery of large applications.",
      "A monolithic application is developed and deployed as one piece; a microservice application is the sum of separately managed parts.",
      "Microservices are grouped into infrastructure services (security, logging, auditing) and functional services (business operations).",
      "Design traits include distributed architecture, separately deployed components, service components that find each other through service discovery, and bounded contexts.",
      "Characteristics: small in size, messaging enabled, bounded by contexts, autonomously developed, independently deployable, decentralized, and released with automated processes.",
      "Only the component under load needs to scale, and only the changed service needs to be deployed.",
    ],
    compare: {
      headers: ["Concern", "Monolith", "Microservices"],
      rows: [
        ["Deployment", "Redeploy the whole application.", "Deploy only the changed service."],
        ["Scaling", "Scale the entire application.", "Scale the component that needs it."],
        ["Technology", "One shared stack.", "Different services may use different languages."],
        ["Fault impact", "A fault can affect everything.", "Failures are isolated to a service."],
      ],
    },
    flow: [
      ["Decompose", "Split the system by business capability."],
      ["Bound", "Give each service its own context and data."],
      ["Communicate", "Expose lightweight APIs through the gateway."],
      ["Automate", "Build, test, and release each service automatically."],
      ["Scale", "Add instances only where demand grows."],
    ],
  },
  {
    id: "microservices-components-practices",
    moduleId: "m2-2",
    unit: "2.2B",
    title: "Microservice Components, Adoption, and Tools",
    color: "amber",
    subtitle:
      "How the moving parts fit together and what a team needs before adopting microservices.",
    beginner:
      "Microservices need supporting parts: a gateway that receives requests, an identity provider that proves who is calling, and a discovery mechanism so services can find each other. Teams also need automation before this style pays off.",
    example:
      "A mobile app calls the API gateway, the identity provider validates its token, service discovery routes the call, and a CDN serves the product images.",
    terms: [
      "API Gateway",
      "Service Discovery",
      "Identity Provider",
      "Content Delivery Network",
      "Remote Service",
      "Inter-Process Communication",
      "Container",
      "Container Orchestration",
    ],
    keyPoints: [
      "Microservices are isolated from each other, so they need an inter-process communication mechanism to work together.",
      "Core components: clients, identity provider, API gateway, static content, service discovery, content delivery network, and remote service.",
      "Teams already practicing SOA modularity or DevOps automation are part-way to microservices; the real goal is a system that makes change easier.",
      "Best practices: independent teams, automate everything, build for resilience, simplify maintenance with documentation, and give teams flexibility.",
      "Common tooling covers API gateways, cloud or serverless infrastructure, containers and orchestration, enterprise service buses, and service discovery.",
      "Microservices are not always necessary; the focus should be unlocking business value, balancing speed and safety at scale.",
    ],
    compare: {
      headers: ["Component", "Responsibility", "Failure symptom"],
      rows: [
        ["API gateway", "Accept and route client requests.", "Clients cannot reach any service."],
        ["Identity provider", "Authenticate users and issue tokens.", "Valid users are rejected."],
        ["Service discovery", "Locate service instances at run time.", "Services cannot find each other."],
        ["Content delivery network", "Serve static content close to users.", "Pages load slowly for distant users."],
      ],
    },
    flow: [
      ["Request", "A client device sends a request."],
      ["Authenticate", "The identity provider validates the caller."],
      ["Route", "The API gateway forwards the call."],
      ["Locate", "Service discovery resolves a healthy instance."],
      ["Respond", "The service returns data, static content, or a remote result."],
    ],
  },
  {
    id: "xml-representation",
    moduleId: "m3-1",
    unit: "3.1A",
    title: "XML: Structure and Well-Formedness",
    color: "green",
    subtitle:
      "A self-describing, hierarchical format designed to carry data rather than display it.",
    beginner:
      "XML lets you invent your own tags to describe data. As long as you follow a few strict rules, any XML parser can read your document even if it has never seen your tags before.",
    example:
      "A book record uses <Book><Title>Parsing Techniques</Title><Author>Dick Grune</Author></Book> so any system can read the same fields.",
    terms: [
      "XML",
      "Markup Language",
      "XML Element",
      "XML Attribute",
      "Root Element",
      "Well-Formed XML",
      "XML Prolog",
      "Meta-Language",
    ],
    keyPoints: [
      "XML was designed to carry data, not to display it, and its tags are defined by the author rather than predefined.",
      "XML holds two kinds of items: elements, which nest and whose order matters, and attributes, which are named values that appear once per element and whose order does not matter.",
      "A well-formed document has a prolog, exactly one root element, matching closing tags (or the <tag/> shortcut), quoted attribute values, and properly nested, case-sensitive tags.",
      "Any legal XML document is parsable without knowing what the tags mean.",
      "XML is a meta-language: it is used to create other languages, such as a Book language.",
      "The XML ecosystem adds DTD and XML Schema for structure, DOM and SAX for programmatic access, and XPath, XSLT, and XQuery for querying.",
    ],
    compare: {
      headers: ["XML item", "Rule", "Example"],
      rows: [
        ["Element", "Open and close tags, nesting allowed, order matters.", "<Title>Parsing Techniques</Title>"],
        ["Attribute", "One per name per element, order does not matter.", "<Book id=\"MCD\">"],
        ["Empty element", "May be shortened.", "<br/> equals <br></br>"],
        ["Prolog", "Declares version and character encoding.", "<?xml version=\"1.0\" encoding=\"utf-8\"?>"],
      ],
    },
    flow: [
      ["Declare", "Open with the XML prolog."],
      ["Root", "Wrap everything in one root element."],
      ["Nest", "Add properly nested child elements."],
      ["Describe", "Attach attributes for simple named values."],
      ["Validate", "Check the instance against a DTD or XML Schema."],
    ],
  },
  {
    id: "json-representation",
    moduleId: "m3-1",
    unit: "3.1B",
    title: "JSON: Values, Schemas, and XML Trade-offs",
    color: "rose",
    subtitle:
      "Seven simple building blocks that assemble into unlimited structure.",
    beginner:
      "JSON describes data as name-value pairs and lists. It has only seven building blocks, so it is short, easy to read, and easy for programs to parse.",
    example:
      "{ \"name\": \"John Doe\", \"age\": 30, \"married\": true, \"siblings\": [\"John\", \"Mary\", \"Pat\"] } stores a person in four lines.",
    terms: [
      "JSON",
      "JSON Object",
      "JSON Array",
      "JSON Value",
      "JSON String",
      "JSON Number",
      "Duplicate Key",
      "JSON Schema",
    ],
    keyPoints: [
      "A JSON instance contains a single value: an object, array, number, string, true, false, or null.",
      "An object is an unordered set of name/value pairs in braces; an array is an ordered list of values in brackets.",
      "Keys should be unique because parser behavior on duplicate keys is unpredictable; many implementations keep only the last pair.",
      "Strings use double quotes, must escape the quotation mark, backslash, and control characters U+0000–U+001F, and cannot span multiple lines.",
      "JSON has no comment syntax, and whitespace between tokens is irrelevant.",
      "XML and JSON are both human readable, hierarchical, and language independent, but JSON is less verbose and has native arrays, while XML can be validated and normalizes newlines.",
    ],
    compare: {
      headers: ["Aspect", "XML", "JSON"],
      rows: [
        ["Schema language", "Written in XML (DTD, XSD).", "Written in JSON (JSON Schema)."],
        ["Lists", "Repeated elements.", "Native arrays."],
        ["Comments", "Supported.", "Not allowed."],
        ["Newlines", "Normalized by the parser to LF.", "Multi-line strings are forbidden; use \\n."],
      ],
    },
    flow: [
      ["Choose", "Pick object, array, or a simple value."],
      ["Name", "Attach a quoted key to every object value."],
      ["Nest", "Place values inside values as deeply as needed."],
      ["Escape", "Escape quotes, backslashes, and control characters."],
      ["Validate", "Check the instance against a JSON Schema."],
    ],
  },
  {
    id: "web-services-soap",
    moduleId: "m3-2",
    unit: "3.2A",
    title: "Web Services and SOAP Messaging",
    color: "blue",
    subtitle:
      "Machine-to-machine interaction across platforms using XML messages over HTTP.",
    beginner:
      "A web service lets two programs work together even when they run on different operating systems and languages. SOAP is the envelope those programs put their XML messages into.",
    example:
      "A calculator service receives a SOAP request asking to divide two numbers and returns a SOAP response, or a SOAP fault if the divisor is zero.",
    terms: [
      "Web Service",
      "Interoperability",
      "SOAP",
      "SOAP Envelope",
      "SOAP Header",
      "SOAP Body",
      "SOAP Fault",
      "Message Exchange Pattern",
    ],
    keyPoints: [
      "A web service is a network-accessible interface to application functionality built with standard internet technologies.",
      "Interoperable means the applications cooperate without sharing a platform, operating system, or programming language.",
      "Web services rest on the troika of SOAP, WSDL, and UDDI, built on XML and HTTP.",
      "A SOAP message is an envelope containing an optional header and a mandatory body; faults are reported inside the body.",
      "SOAP messages travel one way along a path of nodes—initial sender, intermediaries, ultimate receiver—and request/response is treated as two messages in a message exchange pattern.",
      "Header blocks target a SOAP role, are used for authentication or routing, and must be removed by the node that processes them before relaying the message onward.",
    ],
    compare: {
      headers: ["Protocol", "Answers", "Carries"],
      rows: [
        ["SOAP", "How is the message packaged and processed?", "An XML envelope with header and body."],
        ["WSDL", "What can the service do and where is it?", "An XML description of operations and endpoints."],
        ["UDDI", "Which services exist at all?", "A searchable registry of service descriptions."],
      ],
    },
    flow: [
      ["Compose", "Build the envelope with header and body."],
      ["Send", "Transport it, usually over HTTP POST."],
      ["Relay", "Let intermediaries process their targeted header blocks."],
      ["Process", "The ultimate receiver acts on the body."],
      ["Report", "Return a response, or a SOAP fault on error."],
    ],
  },
  {
    id: "wsdl-uddi-description",
    moduleId: "m3-2",
    unit: "3.2B",
    title: "WSDL Description and UDDI Discovery",
    color: "violet",
    subtitle:
      "Describing a service abstractly, binding it concretely, and publishing it for discovery.",
    beginner:
      "WSDL is the instruction sheet for a web service: what it does, what data it takes, and where to reach it. UDDI is the directory where those instruction sheets are listed.",
    example:
      "A calculator WSDL defines an add operation, binds it to SOAP over HTTP, and points to the endpoint address that clients should call.",
    terms: [
      "WSDL",
      "WSDL Types",
      "WSDL Message",
      "WSDL Operation",
      "Port Type",
      "Binding",
      "UDDI",
      "Remote Procedure Call",
    ],
    keyPoints: [
      "WSDL is an XML grammar that describes network services as collections of endpoints capable of exchanging messages.",
      "Abstract parts: types hold data-type definitions, messages define the data communicated, operations describe supported actions, and a port type is an abstract set of operations.",
      "Concrete parts: a binding attaches a protocol and data format to a port type, a port pairs a binding with a network address, and a service groups related ports.",
      "Separating abstract from concrete definitions lets the same messages and operations be reused across different protocols.",
      "UDDI provides a repository of web service descriptions that clients can search on various criteria to find services offered by businesses.",
      "SOAP RPC marshals parameters as XML, sends them over HTTP, unmarshals them at the far end, and returns the marshalled result so the caller barely notices the call was remote.",
    ],
    compare: {
      headers: ["WSDL element", "Abstract or concrete", "Beginner reading"],
      rows: [
        ["Types", "Abstract", "The data types used in the messages."],
        ["Message", "Abstract", "One package of data being sent."],
        ["Port type", "Abstract", "The list of operations offered."],
        ["Binding", "Concrete", "The protocol and format actually used."],
        ["Port and service", "Concrete", "The reachable address and the group of endpoints."],
      ],
    },
    flow: [
      ["Define", "Declare types and messages."],
      ["Group", "Collect operations into a port type."],
      ["Bind", "Attach a protocol and data format."],
      ["Address", "Publish a port with a network address."],
      ["Discover", "Register the description so clients can find it."],
    ],
  },
  {
    id: "eai-concepts-models",
    moduleId: "m5-1",
    unit: "5.1A",
    title: "EAI Concepts and Integration Models",
    color: "cyan",
    subtitle:
      "Uniting databases and workflows so a change in one application shows up correctly in the others.",
    beginner:
      "When applications cannot talk to each other, people retype the same data in several systems. Enterprise Application Integration connects those applications so information flows automatically.",
    example:
      "A new customer created in the CRM automatically appears in billing and in the service desk instead of being entered three times by hand.",
    terms: [
      "Enterprise Application Integration",
      "Information Silo",
      "Point-to-Point Integration",
      "Hub-and-Spoke Integration",
      "Bus Integration",
      "Middleware",
      "Microservices Architecture",
    ],
    keyPoints: [
      "EAI unites the databases and workflows of business applications so information is used consistently and changes are reflected everywhere.",
      "Information silos cause manual re-entry, unsynchronized changes, manual searching, administrative delay, and slower business processes.",
      "There is no standardized EAI model; five approaches emerged as the discipline matured.",
      "Point-to-point scripts are simple but become hard to maintain as the number of applications grows.",
      "Hub-and-spoke centralizes capture, reformatting, and routing, while bus integration governs the same flow with shared standards and no human intervention.",
      "Middleware acts as a hidden translation layer, and cloud microservices route captured data to their destinations through APIs.",
    ],
    compare: {
      headers: ["Model", "How data moves", "Main limitation"],
      rows: [
        ["Point-to-point", "A script extracts, reformats, and sends.", "Dependencies multiply with every new application."],
        ["Hub-and-spoke", "A central hub captures and routes.", "Developers still route data manually at runtime."],
        ["Bus", "Shared standards govern the flow.", "Requires agreed rules and policies up front."],
        ["Middleware", "A translation layer between UI and OS.", "Another platform to operate and secure."],
        ["Microservices", "APIs route data from each deployed service.", "Needs cloud maturity and automation."],
      ],
    },
    flow: [
      ["Detect", "Find the silo causing duplicate work."],
      ["Extract", "Read the data from the source application."],
      ["Transform", "Reformat it for the target application."],
      ["Route", "Deliver it through the chosen integration model."],
      ["Verify", "Confirm both systems now agree."],
    ],
  },
  {
    id: "eai-types-technologies",
    moduleId: "m5-1",
    unit: "5.1B",
    title: "EAI Types, Technologies, and Benefits",
    color: "amber",
    subtitle:
      "Four integration levels, the Java technologies behind them, and the value EAI returns.",
    beginner:
      "Integration can happen at four depths: straight between databases, through published interfaces, by sharing business logic, or—last resort—through the screen itself. The deeper choices cost more but reuse more.",
    example:
      "A finance team integrates at data level for a nightly ledger copy but uses an ERP's published interface for real-time purchase orders.",
    terms: [
      "Data-Level EAI",
      "Application Interface Level EAI",
      "Method Level EAI",
      "User Interface Level EAI",
      "Message Broker",
      "Java Message Service",
      "Enterprise JavaBeans",
      "Object Request Broker",
    ],
    keyPoints: [
      "Data-level EAI moves and reformats data between data stores and is the cheapest because application code does not change.",
      "Application interface level EAI leverages interfaces exposed by packaged or custom applications, which suits ERP products such as SAP and PeopleSoft; message brokers are the preferred technology.",
      "Method level EAI shares business logic through distributed objects, application servers, and TP monitors; an ORB relays a call from one application to methods in another.",
      "User interface level EAI drives the application's screens and is the most primitive option, used when nothing else is exposed.",
      "Java, Java RMI, EJB, and JMS make portable, message-oriented integration practical; JMS gives implementation-independent access to products such as SonicMQ and IBM MQSeries.",
      "Reported benefits include control and connection of the company, simpler business processes, lower costs, better information exchange, less time and effort, more opportunity, and easier process analysis.",
    ],
    compare: {
      headers: ["EAI type", "Integration point", "Relative cost"],
      rows: [
        ["Data level", "The database.", "Lowest—no application changes."],
        ["Application interface", "Published application interfaces.", "Moderate—limited by exposed features."],
        ["Method level", "Shared business logic.", "Higher—robust technologies required."],
        ["User interface", "The application screen.", "Fragile—used when nothing else exists."],
      ],
    },
    flow: [
      ["Assess", "Check what each application actually exposes."],
      ["Select", "Choose the shallowest level that meets the need."],
      ["Enable", "Apply brokers, messaging, or object technology."],
      ["Integrate", "Connect the applications and test the flow."],
      ["Measure", "Track cost, effort, and data quality gains."],
    ],
  },
  {
    id: "middleware-concepts",
    moduleId: "m5-2",
    unit: "5.2A",
    title: "Middleware Concepts and Responsibilities",
    color: "green",
    subtitle:
      "The software layer that sits between front-end requests and back-end resources.",
    beginner:
      "Middleware is the software in the middle. It hides how complicated the network and the back end really are, and gives applications one simple way to ask for what they need.",
    example:
      "A banking app asks middleware for a transaction history; the middleware opens a pooled database connection, checks the user's rights, and returns the result over an encrypted link.",
    terms: [
      "Middleware",
      "Front End",
      "Back End",
      "Connection Pool",
      "Message Queue",
      "Load Balancing",
      "Concurrent Processing",
      "SSL/TLS",
    ],
    keyPoints: [
      "Middleware sits between application programs and the operating system and base networking, providing higher-level distributed computing capabilities and interfaces.",
      "It bridges the gap between low-level operating-system communication and programming-language abstractions, hiding the complexity and heterogeneity of a distributed system.",
      "Back-end resources include databases, message queues, NoSQL data stores, and file servers; middleware eases access to them using SOAP, REST, or JSON messaging.",
      "Middleware manages connectivity, including connection pools and links to cloud resources such as Amazon S3.",
      "It implements request-based logic, for example tailoring results to a browser's language header or the client's geographic location.",
      "It also handles concurrency, transactions, vertical and horizontal scaling, load balancing, and secured access using SSL and authentication before returning data.",
    ],
    compare: {
      headers: ["Responsibility", "Problem solved", "Everyday sign it is working"],
      rows: [
        ["Connectivity", "Slow or repeated connections.", "Fast reuse of pooled connections."],
        ["Request logic", "One-size-fits-all responses.", "Results already in the right language."],
        ["Concurrency", "Two clients updating one record.", "No lost or conflicting updates."],
        ["Security", "Unauthorized access.", "Authenticated, encrypted responses."],
      ],
    },
    flow: [
      ["Receive", "Accept a network-based client request."],
      ["Authorize", "Check the secure connection and credentials."],
      ["Decide", "Apply logic based on the request context."],
      ["Fetch", "Reach the database, queue, or file server."],
      ["Return", "Send the result back over a protected channel."],
    ],
  },
  {
    id: "middleware-categories-types",
    moduleId: "m5-2",
    unit: "5.2B",
    title: "Middleware Categories, Types, and Products",
    color: "rose",
    subtitle:
      "Two broad categories, six common types, and the vendors that supply them.",
    beginner:
      "Not all middleware does the same job. Some of it glues applications together; some of it hosts and runs your code. Picking the right type saves a lot of custom work.",
    example:
      "A retailer uses messaging middleware for order events, database middleware for stock lookups, and platform middleware to host the web application itself.",
    terms: [
      "Enterprise Application Integration Middleware",
      "Platform Middleware",
      "Messaging Middleware",
      "Object Middleware",
      "Remote Procedure Call Middleware",
      "Database Middleware",
      "Transactional Middleware",
      "Embedded Middleware",
    ],
    keyPoints: [
      "EAI middleware lets programmers build business applications without hand-crafting an integration for every new application, adding data consistency and B2B integration.",
      "Platform middleware supplies a runtime hosting environment such as a container, and includes application servers, web servers, and content management.",
      "Messaging middleware carries communication between distributed applications and services.",
      "Object or ORB middleware lets components and objects interact across distributed systems; RPC middleware lets a program request a service from a program on another computer.",
      "Database middleware gives direct access to databases and typically includes SQL software; transactional middleware moves transactions from one phase to the next through transaction process monitoring.",
      "Content-centric middleware abstracts and delivers requested content in a publish/subscribe style, and embedded middleware connects embedded applications with real-time operating systems.",
    ],
    compare: {
      headers: ["Type", "Best for", "Vendor example from the course"],
      rows: [
        ["Messaging", "Events between distributed services.", "Apache Camel."],
        ["Object / RPC", "Calling remote components.", "Oracle Fusion Middleware."],
        ["Database", "Direct data access.", "SQL database software."],
        ["Integration hub", "Connecting many enterprise systems.", "Microsoft BizTalk."],
      ],
    },
    flow: [
      ["Classify", "Decide whether the need is integration or hosting."],
      ["Match", "Pick the type that fits the interaction style."],
      ["Evaluate", "Compare vendors against open standards support."],
      ["Deploy", "Run it between the front end and back end."],
      ["Operate", "Monitor scaling, transactions, and security."],
    ],
  },
  {
    id: "cloud-foundations",
    moduleId: "m5-3",
    unit: "5.3A",
    title: "Cloud Foundations and Essential Characteristics",
    color: "blue",
    subtitle:
      "On-demand access to a shared pool of configurable computing resources.",
    beginner:
      "Cloud computing means using someone else's computers over the internet instead of buying your own. You ask for what you need, use it, and pay only for what you used.",
    example:
      "A student team launches a test server in minutes, runs an experiment for two hours, shuts it down, and pays only for those two hours.",
    terms: [
      "Cloud Computing",
      "On-Demand Self-Service",
      "Broad Network Access",
      "Resource Pooling",
      "Rapid Elasticity",
      "Measured Service",
      "Multi-Tenancy",
      "Virtualization",
    ],
    keyPoints: [
      "Cloud computing is a model for convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort.",
      "The five essential characteristics are on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.",
      "Three traits are common to all vendors: the vendor manages the back end, the user pays only for what is used, and services are scalable.",
      "Virtualization is what makes pooling and rapid scaling possible; multi-tenancy means one provider hosts many customers at once.",
      "The network is critical: no network means no cloud, so it must offer scalability, low latency, guaranteed performance, extensible management, and self-healing resilience.",
      "Cloud architecture has a front end—the client's network, applications, and browser—and a back end of servers, storage, security, traffic control, and middleware protocols.",
    ],
    compare: {
      headers: ["Characteristic", "What the user notices", "What the provider does"],
      rows: [
        ["On-demand self-service", "Resources appear without a phone call.", "Automated provisioning."],
        ["Broad network access", "Works on phone, tablet, or laptop.", "Standard network protocols."],
        ["Resource pooling", "Location independence.", "Multi-tenant shared capacity."],
        ["Rapid elasticity", "Scale up or down at any time.", "Elastic allocation."],
        ["Measured service", "A pay-per-use bill.", "Metering and optimization."],
      ],
    },
    flow: [
      ["Request", "Self-service a resource on demand."],
      ["Provision", "The provider allocates from the shared pool."],
      ["Access", "Reach it over the network from any device."],
      ["Scale", "Grow or shrink as demand changes."],
      ["Meter", "Pay only for the measured usage."],
    ],
  },
  {
    id: "cloud-models-actors",
    moduleId: "m5-3",
    unit: "5.3B",
    title: "Cloud Service Models, Deployment Models, and Actors",
    color: "cyan",
    subtitle:
      "Who supplies what, where it runs, and who takes part in the transaction.",
    beginner:
      "Service models say how much of the stack the provider manages. Deployment models say who is allowed to use the cloud. Actors say who plays which role in the arrangement.",
    example:
      "Gmail is SaaS: Google manages the hardware and the software, and the user just reads mail over the internet.",
    terms: [
      "Infrastructure as a Service",
      "Platform as a Service",
      "Software as a Service",
      "Public Cloud",
      "Private Cloud",
      "Community Cloud",
      "Hybrid Cloud",
      "Cloud Broker",
    ],
    keyPoints: [
      "The three service models are Infrastructure as a Service, Platform as a Service, and Software as a Service.",
      "Public clouds are owned by third-party providers, use a pay-as-you-go model, and share one infrastructure pool, which makes them cheaper but more open.",
      "Private clouds serve a single organization and may be owned, managed, and operated by that organization, a third party, or a combination, on or off premises.",
      "Community clouds are shared by organizations with similar missions, security needs, or policies; hybrid clouds mix public and private so critical work stays private.",
      "The five actors are cloud consumer, cloud provider, cloud auditor, cloud broker, and cloud carrier.",
      "Cloud adoption risks centre on the perceived loss of control over sensitive data and on control measures that do not yet address third-party storage and processing.",
    ],
    compare: {
      headers: ["Deployment model", "Who may use it", "Typical reason"],
      rows: [
        ["Public", "The general public.", "Lowest cost and fastest start."],
        ["Private", "One organization.", "Higher security and control."],
        ["Community", "Organizations with shared requirements.", "Shared mission or regulation."],
        ["Hybrid", "A mix of public and private.", "Keep critical work private, burst the rest."],
      ],
    },
    flow: [
      ["Classify", "Decide how much of the stack to hand over."],
      ["Choose", "Select public, private, community, or hybrid."],
      ["Contract", "Agree responsibilities with the provider."],
      ["Connect", "Use a carrier for transport and a broker if needed."],
      ["Assure", "Let an auditor review performance and security."],
    ],
  },
  {
    id: "project-management",
    moduleId: "m2-3",
    unit: "2.3A",
    estimatedMinutes: 45,
    title: "Principles of Project Management",
    color: "blue",
    subtitle:
      "Five process groups, one triple constraint, and the schedule path that actually controls the date.",
    beginner:
      "A project is temporary work that produces something unique, so it needs a start, an end, and someone accountable in between. Project management is the discipline of getting that done without the scope quietly growing while the deadline stays fixed.",
    example:
      "An integration project to connect a campus enrollment system to a payment gateway is chartered, decomposed into work packages, scheduled, tracked against its critical path, and formally closed once the interface is accepted.",
    objectives: [
      "Explain what makes a body of work a project rather than ongoing operations.",
      "Name the five process groups and say what each one produces.",
      "Use a work breakdown structure to reach estimable work packages.",
      "Identify the critical path and explain why only it controls the finish date.",
    ],
    terms: [
      "Project",
      "Process Group",
      "Triple Constraint",
      "Work Breakdown Structure",
      "Critical Path",
      "Scope Creep",
    ],
    keyPoints: [
      "A project is temporary and produces a unique result; operations are ongoing and repetitive.",
      "The five process groups are initiating, planning, executing, monitoring and controlling, and closing.",
      "The triple constraint binds scope, schedule, and cost: change one and at least one other must move.",
      "A work breakdown structure decomposes scope until each work package can be estimated, assigned, and tracked.",
      "The critical path is the longest chain of dependent activities; only activities on it have zero float.",
      "Scope creep is expansion without a matching adjustment to time, cost, and resources - which is what makes it a defect rather than generosity.",
    ],
    compare: {
      headers: ["Process group", "Central question", "Typical output"],
      rows: [
        ["Initiating", "Should this project exist?", "Project charter and stakeholder register"],
        ["Planning", "How will it be done?", "Scope baseline, WBS, schedule, budget"],
        ["Executing", "Is the work being produced?", "Deliverables and change requests"],
        ["Monitoring and controlling", "Is it on track?", "Performance reports and approved changes"],
        ["Closing", "Is it accepted and finished?", "Formal acceptance and lessons learned"],
      ],
    },
    flow: [
      ["Charter", "Authorise the project and name the manager."],
      ["Decompose", "Break scope into work packages via the WBS."],
      ["Sequence", "Order activities and compute the critical path."],
      ["Execute", "Produce deliverables while controlling change."],
      ["Close", "Obtain acceptance and record lessons learned."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Finding the critical path by hand",
        language: "text",
        code: `Activity  Duration  Depends on
A         3 days    -
B         5 days    A
C         2 days    A
D         4 days    B
E         1 day     C, D

Path A-B-D-E = 3 + 5 + 4 + 1 = 13 days   <- CRITICAL (longest)
Path A-C-E   = 3 + 2 + 1     = 6 days

Float on C = 13 - 6 = 7 days.
Delaying C by 3 days changes nothing. Delaying B by 1 day
moves the finish date by 1 day, because B has zero float.`,
        caption:
          "This is why crashing a non-critical activity buys nothing. Compress the critical path or accept the date.",
      },
      {
        kind: "callout",
        tone: "note",
        title: "Why the triple constraint is a decision tool",
        text:
          "When a sponsor asks for extra scope at a fixed date, the constraint says something has to give: add cost, move the date, or drop scope elsewhere. Stating the trade explicitly turns an argument into a choice the sponsor can make.",
      },
    ],
    sources: [lessonSources.iso21502, lessonSources.pmi],
  },
  {
    id: "technopreneurship",
    moduleId: "m2-3",
    unit: "2.3B",
    estimatedMinutes: 40,
    title: "Technopreneurship and Project Delivery",
    color: "violet",
    subtitle:
      "Validated learning, the smallest useful release, and knowing when to change direction.",
    beginner:
      "Technopreneurship is starting a venture whose advantage comes from technology. The hardest part is not building the product but finding out, quickly and cheaply, whether anyone actually wants it.",
    example:
      "Rather than spending nine months on a full integration platform, a team ships a single working connector to ten pilot users, measures whether they keep using it, and lets that answer decide what gets built next.",
    objectives: [
      "Distinguish technopreneurship from general entrepreneurship.",
      "Explain what makes a minimum viable product viable rather than merely small.",
      "Run one build-measure-learn cycle and state what it decided.",
      "Distinguish a pivot from simply abandoning the plan.",
    ],
    terms: [
      "Technopreneurship",
      "Minimum Viable Product",
      "Build-Measure-Learn",
      "Pivot",
      "Stakeholder",
    ],
    keyPoints: [
      "Technopreneurship rests on technology the founders develop or apply, not merely on a new business model.",
      "A minimum viable product is the smallest release that delivers real value and produces validated learning.",
      "Build-measure-learn is a loop, and its output is a decision - persevere or pivot - not a feature.",
      "A pivot changes strategy in response to evidence while keeping the underlying vision.",
      "Measure behaviour rather than opinion: what pilot users keep doing beats what survey respondents say.",
      "Project management supplies the discipline; technopreneurship supplies the direction. A venture needs both.",
    ],
    compare: {
      headers: ["Approach", "Decides scope by", "Main risk it manages"],
      rows: [
        ["Plan-driven delivery", "An agreed baseline set up front", "Execution risk - can we build it?"],
        ["Lean venture practice", "Evidence from the last release", "Market risk - should we build it?"],
        ["MVP release", "The smallest thing that teaches something", "Spending months on unwanted work"],
        ["Pivot", "A validated failure of the current strategy", "Persisting past the evidence"],
      ],
    },
    flow: [
      ["Hypothesise", "State what you believe about the customer, in testable terms."],
      ["Build", "Ship the smallest increment that could disprove it."],
      ["Measure", "Observe real behaviour, not stated intent."],
      ["Learn", "Convert the observation into a decision."],
      ["Persevere or pivot", "Continue the strategy, or change it deliberately."],
    ],
    lessonBlocks: [
      {
        kind: "callout",
        tone: "note",
        title: "Viable is the load-bearing word",
        text:
          "A minimum viable product must be usable enough that a real user's behaviour means something. A broken prototype teaches you that it is broken; it teaches you nothing about demand.",
      },
      {
        kind: "callout",
        tone: "warning",
        title: "Vanity metrics",
        text:
          "Total registrations only ever rise, so they cannot tell you whether the last release helped. Cohort retention can fall, which is exactly why it is the more useful measure.",
      },
    ],
    sources: [lessonSources.iso56000, lessonSources.pmi],
  },
  {
    id: "project-reporting",
    moduleId: "m2-3",
    unit: "2.3C",
    estimatedMinutes: 40,
    title: "Project Reporting and Documentation",
    color: "cyan",
    subtitle:
      "Write for the audience that has to act, and record why the decision was made.",
    beginner:
      "Documentation fails when it is written for everyone at once. A sponsor needs a page; a new developer needs a diagram; a maintainer in two years needs to know why a choice was made, not just what it was.",
    example:
      "A team records its choice of message broker as an architecture decision record: the context, the three options considered, the decision, and the consequences accepted. Eighteen months later the rationale is still readable.",
    objectives: [
      "Match a document to the audience that has to act on it.",
      "Write an architecture decision record that stays useful after the author leaves.",
      "Use the C4 zoom levels to pitch a diagram at one consistent level of detail.",
      "Maintain a RAID log so delivery risk stays visible rather than remembered.",
    ],
    terms: [
      "Architecture Decision Record",
      "C4 Model",
      "RAID Log",
      "Milestone",
      "Stakeholder",
    ],
    keyPoints: [
      "Reporting is a control activity: its purpose is to let someone decide something, not to demonstrate effort.",
      "An architecture decision record captures context, options, the decision, and the consequences - dated and never edited once accepted.",
      "Superseding an ADR with a new one preserves the history; editing it destroys the reason the record existed.",
      "The C4 model gives four zoom levels - system context, container, component, code - and a diagram should stay at one of them.",
      "A RAID log tracks risks, assumptions, issues, and dependencies so nothing important lives only in someone's memory.",
      "A milestone has zero duration; it marks that something is true, not that work is happening.",
    ],
    compare: {
      headers: ["Audience", "Wants to know", "Right artefact"],
      rows: [
        ["Sponsor", "Are we on track and what needs a decision?", "One-page status with exceptions"],
        ["New team member", "How does this system fit together?", "C4 context and container diagrams"],
        ["Future maintainer", "Why was it built this way?", "Architecture decision records"],
        ["Delivery team", "What could derail us?", "RAID log"],
        ["Auditor", "Was the process followed?", "Charter, approved changes, acceptance records"],
      ],
    },
    flow: [
      ["Identify", "Name the audience and the decision they must make."],
      ["Select", "Choose the artefact that serves that decision."],
      ["Pitch", "Hold one level of detail throughout the document."],
      ["Record", "Capture decisions and their consequences as they are made."],
      ["Supersede", "Replace outdated records rather than editing them."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "An architecture decision record",
        language: "text",
        code: `# ADR-014: Use a message broker for order events

Status:   Accepted
Date:     2025-03-11
Supersedes: ADR-009

## Context
Order events are consumed by billing, fulfilment, and analytics.
Point-to-point HTTP calls made the order service aware of all three
and blocked releases whenever any consumer changed.

## Options considered
1. Keep direct HTTP calls        - simplest, but coupling already hurts
2. Shared database table         - couples schemas, no back pressure
3. Message broker, publish/sub   - decouples, adds operational surface

## Decision
Option 3. The order service publishes one event; consumers subscribe.

## Consequences
+ Consumers can be added without changing the producer.
+ Back pressure and retry are handled by the broker.
- One more component to run, monitor, and secure.
- Consumers must tolerate duplicate delivery (at-least-once).`,
        caption:
          "The consequences section is the part that pays off later. Recording what was accepted, not just what was chosen, is what stops the decision being relitigated every year.",
      },
      {
        kind: "callout",
        tone: "note",
        title: "Never edit an accepted record",
        text:
          "If the decision changes, write a new record that supersedes the old one. The value of the log is the trail of reasoning over time, and editing in place erases exactly that.",
      },
    ],
    sources: [lessonSources.adr, lessonSources.c4, lessonSources.arc42],
  },
  {
    id: "xml-processing",
    moduleId: "m3-3",
    unit: "3.3A",
    estimatedMinutes: 50,
    title: "XML Processing and Schema Validation",
    color: "green",
    subtitle:
      "Choose the parsing model from the document size, then validate, query, and close the XXE hole.",
    beginner:
      "Reading XML is a choice, not a default. Loading the whole document into a tree is convenient and expensive; streaming through it is cheap but forward-only. Which one is right depends on how big the document is and whether you need to move around inside it.",
    example:
      "A nightly feed of two million product records is streamed with SAX because a DOM tree would not fit in memory. A 40-line configuration file is read with DOM because random access is worth more than the memory.",
    objectives: [
      "Choose between DOM, SAX, and StAX from the document size and access pattern.",
      "Explain why well-formed and valid are different claims.",
      "Compare DTD and XSD and say what XSD adds.",
      "Prevent XXE by disabling external entity resolution.",
    ],
    terms: [
      "DOM Parsing",
      "SAX Parsing",
      "StAX Parsing",
      "XSD",
      "XPath",
      "XML External Entity",
    ],
    keyPoints: [
      "DOM builds the whole tree in memory: random access and modification, but memory proportional to document size.",
      "SAX is event-driven, read-only, and forward-only: constant memory, but you cannot look backwards.",
      "StAX is pull parsing - the application asks for the next event, so it controls the loop rather than receiving callbacks.",
      "Well-formed means the syntax is legal; valid means it also conforms to a schema. Every valid document is well-formed, not the reverse.",
      "XSD is written in XML, supports data types and namespaces, and allows precise cardinality - none of which DTD does.",
      "XPath addresses nodes by navigating axes; XSLT uses those expressions to transform a document into another format.",
      "Data binding maps elements onto objects so application code works with types rather than nodes.",
    ],
    compare: {
      headers: ["Parser", "Memory", "Access", "Right for"],
      rows: [
        ["DOM", "Whole document in memory", "Random, read and write", "Small documents needing navigation"],
        ["SAX", "Constant", "Forward-only, read-only", "Very large streams"],
        ["StAX", "Constant", "Forward-only, application-driven", "Large streams with selective extraction"],
        ["DTD", "n/a", "Structure only", "Legacy documents"],
        ["XSD", "n/a", "Structure, types, namespaces", "Anything new"],
      ],
    },
    flow: [
      ["Receive", "An XML document arrives from a partner or feed."],
      ["Parse", "Choose DOM, SAX, or StAX from size and access needs."],
      ["Validate", "Check the document against its XSD before trusting it."],
      ["Query", "Address the parts you need with XPath."],
      ["Bind", "Map the result onto objects the application understands."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "An XSD constraining structure, type, and cardinality",
        language: "xml",
        code: `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="order">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="orderId"  type="xs:positiveInteger"/>
        <xs:element name="placedOn" type="xs:date"/>
        <xs:element name="line" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="sku"      type="xs:string"/>
              <xs:element name="quantity" type="xs:positiveInteger"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`,
        caption:
          "A DTD could require a quantity element. Only XSD can require that it be a positive integer, and that at least one line exists. That difference is why new work uses XSD.",
      },
      {
        kind: "code",
        title: "Disabling external entities to close XXE",
        language: "java",
        code: `DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

// The single most important line: refuse DOCTYPE entirely.
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);

// Belt and braces, for parsers where DOCTYPE cannot be refused outright.
factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
factory.setXIncludeAware(false);
factory.setExpandEntityReferences(false);

DocumentBuilder builder = factory.newDocumentBuilder();`,
        caption:
          "Without this, a document declaring an entity that points at file:///etc/passwd can make the parser read it and return the contents inside the response.",
      },
      {
        kind: "callout",
        tone: "security",
        title: "Why XXE is an integration problem specifically",
        text:
          "XML arrives from partners, and a parser configured to resolve external entities will happily fetch local files or reach internal services on the attacker's behalf. The defect is in the parser configuration, not the document - so it must be fixed once, centrally, wherever XML is accepted.",
      },
    ],
    sources: [lessonSources.xsd, lessonSources.xpath, lessonSources.xxe],
  },
  {
    id: "performance-testing",
    moduleId: "m4-1",
    unit: "4.1A",
    estimatedMinutes: 50,
    title: "Performance and Stress Testing",
    color: "amber",
    subtitle:
      "Different questions need different tests, and the average hides the users who suffer.",
    beginner:
      "Performance testing asks how a system behaves under load. Load testing checks it survives the expected traffic; stress testing finds where it breaks; soak testing finds what leaks after hours; spike testing checks it can absorb a sudden surge.",
    example:
      "An enrollment system averages 120 ms but its p99 is 4 seconds. The average says everything is fine; the p99 says one request in a hundred is unusable, which during enrollment week is thousands of students.",
    objectives: [
      "Choose the right test type for the question being asked.",
      "Read latency percentiles and explain why the mean is misleading.",
      "Apply Little's Law to relate concurrency, arrival rate, and residence time.",
      "Express a reliability target as an SLI, an SLO, and an error budget.",
    ],
    terms: [
      "Load Testing",
      "Stress Testing",
      "Soak Testing",
      "p99 Latency",
      "Little's Law",
      "Service Level Objective",
    ],
    keyPoints: [
      "Load testing confirms the expected workload is met; stress testing deliberately exceeds it to find the failure mode.",
      "Soak testing holds moderate load for hours to expose leaks; spike testing applies a sudden surge to test recovery.",
      "Latency percentiles describe the distribution: p99 is the value 99 percent of requests came in under.",
      "An average is dominated by fast requests and can look healthy while the tail is unusable.",
      "Little's Law states that concurrency equals arrival rate times residence time, which is how you size a thread or connection pool.",
      "An SLI is what you measure, an SLO is the target, and the error budget is the shortfall the objective permits.",
      "Always record a baseline before a change; a number with nothing to compare it against decides nothing.",
    ],
    compare: {
      headers: ["Test type", "Question it answers", "Typical shape"],
      rows: [
        ["Load", "Do we meet targets at expected traffic?", "Ramp to expected peak and hold"],
        ["Stress", "Where and how do we break?", "Ramp past peak until failure"],
        ["Soak", "What degrades over hours?", "Moderate load, long duration"],
        ["Spike", "Can we absorb a sudden surge?", "Sharp step up, then down"],
        ["Baseline", "Did this change help or hurt?", "Identical run before and after"],
      ],
    },
    flow: [
      ["Define", "State the workload and the objective it must meet."],
      ["Baseline", "Measure the current system before changing anything."],
      ["Ramp", "Increase load gradually so the response curve is visible."],
      ["Observe", "Record throughput, percentile latency, and errors together."],
      ["Attribute", "Find the one saturated resource that limits throughput."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Sizing a pool with Little's Law",
        language: "text",
        code: `Little's Law:  L = lambda * W

  L      = concurrent requests in the system
  lambda = arrival rate (requests per second)
  W      = average residence time (seconds)

Example: 400 requests/second, average service time 250 ms.

  L = 400 * 0.25 = 100 concurrent requests

So a connection pool of 20 will queue: arrivals exceed capacity and
waiting time is added to every request. The measured latency then rises
even though the database itself has not slowed down at all.`,
        caption:
          "This is why a latency problem so often turns out to be a pool size problem. The service is fast; the queue in front of it is not.",
      },
      {
        kind: "callout",
        tone: "warning",
        title: "The average is the wrong statistic",
        text:
          "A system averaging 120 ms with a p99 of 4 seconds serves one request in a hundred unacceptably. At a million requests a day that is ten thousand bad experiences, all invisible in the mean. Report percentiles, and state which one the objective is written against.",
      },
      {
        kind: "callout",
        tone: "note",
        title: "What an error budget is for",
        text:
          "An objective of 99.9 percent over 30 days permits about 43 minutes of failure. That remaining budget is a decision tool: while it is healthy, ship features; once it is spent, reliability work takes priority. It converts an argument about risk into arithmetic.",
      },
    ],
    sources: [lessonSources.iso25010, lessonSources.jmeter, lessonSources.slo],
  },
  {
    id: "api-architecture",
    moduleId: "m5-4",
    unit: "5.4A",
    estimatedMinutes: 50,
    title: "API Architecture: REST, SOAP, and GraphQL",
    color: "rose",
    subtitle:
      "Four styles, four different trade-offs - and idempotency is the one that saves you at 3am.",
    beginner:
      "An API is a contract for asking another system to do something. REST models the system as resources you act on with standard HTTP verbs. SOAP wraps operations in a strict XML envelope. GraphQL lets the client ask for exactly the fields it wants. gRPC trades readability for speed between internal services.",
    example:
      "A mobile screen needing a customer, their last five orders, and each order's status makes three REST calls, or one GraphQL query returning precisely those fields and nothing more.",
    objectives: [
      "Choose between REST, SOAP, GraphQL, and gRPC from the actual constraints.",
      "Classify HTTP methods as safe, idempotent, or neither, and explain why retries depend on it.",
      "Place an API on the Richardson maturity model.",
      "Distinguish authentication from authorisation in an OAuth 2.0 and JWT flow.",
    ],
    terms: [
      "Idempotent Method",
      "Richardson Maturity Model",
      "GraphQL",
      "Over-Fetching",
      "OAuth 2.0",
      "JSON Web Token",
    ],
    keyPoints: [
      "REST is an architectural style over HTTP: resources with URIs, a uniform interface, and stateless requests.",
      "GET and HEAD are safe - they change nothing. PUT and DELETE are idempotent - repeating them has the same effect as doing them once. POST is neither.",
      "Idempotency is what makes a retry safe; a client that cannot tell whether a POST succeeded cannot simply repeat it.",
      "The Richardson maturity model rates an API level 0 to 3: single endpoint, resources, HTTP verbs, then hypermedia controls.",
      "SOAP carries a strict Envelope with an optional Header and mandatory Body, described by WSDL, and remains common where WS-Security and formal contracts are required.",
      "GraphQL exposes one endpoint over a typed schema, solving over-fetching and under-fetching at the cost of harder caching and query-cost control.",
      "gRPC uses Protocol Buffers over HTTP/2 and suits internal service-to-service traffic more than public browser-facing APIs.",
      "OAuth 2.0 is authorisation - obtaining limited access on a user's behalf. A JWT is the token format that often carries the result.",
    ],
    compare: {
      headers: ["Style", "Contract", "Strength", "Cost"],
      rows: [
        ["REST", "URIs plus HTTP verbs, often OpenAPI", "Cacheable, universally understood", "Fixed representations cause over-fetching"],
        ["SOAP", "WSDL, strict XML envelope", "Formal contract, WS-Security", "Verbose, heavier tooling"],
        ["GraphQL", "Typed schema, one endpoint", "Client asks for exactly what it needs", "Caching and query-cost control are harder"],
        ["gRPC", "Protocol Buffers over HTTP/2", "Fast, compact, streaming", "Not browser-native, binary on the wire"],
      ],
    },
    flow: [
      ["Model", "Identify resources or operations the client actually needs."],
      ["Choose", "Select the style that fits the consumer and the constraints."],
      ["Describe", "Publish a machine-readable contract - OpenAPI, WSDL, or schema."],
      ["Protect", "Authenticate the caller, then authorise the specific action."],
      ["Evolve", "Version deliberately so existing clients keep working."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "Safe, idempotent, and neither",
        language: "http",
        code: `GET    /orders/42        safe + idempotent  - changes nothing
HEAD   /orders/42        safe + idempotent  - headers only
PUT    /orders/42        idempotent         - same result if repeated
DELETE /orders/42        idempotent         - already gone stays gone
POST   /orders           NEITHER            - repeats create duplicates

# Making a POST safely retryable - the client supplies a key:
POST /orders
Idempotency-Key: 8f14e45f-ea1a-4c1f-9b2d-77b1cbe0c7a3

# The server records the key with the result. A retry carrying the same
# key returns the ORIGINAL response instead of creating a second order.`,
        caption:
          "A network timeout does not tell the client whether the request was processed. The idempotency key is what makes the honest answer - retry - safe.",
      },
      {
        kind: "code",
        title: "The same screen in REST and in GraphQL",
        language: "graphql",
        code: `# REST: three round trips, and each returns more than the screen needs.
#   GET /customers/42
#   GET /customers/42/orders?limit=5
#   GET /orders/{id}/status   (x5)

# GraphQL: one request, exactly the fields the screen renders.
query CustomerSummary {
  customer(id: 42) {
    name
    orders(last: 5) {
      reference
      placedOn
      status
    }
  }
}`,
        caption:
          "The saving is real on a mobile connection. The cost is equally real: this query is opaque to an HTTP cache, and a maliciously deep query needs a cost limit the server enforces.",
      },
      {
        kind: "callout",
        tone: "security",
        title: "A signed token is not an authorised one",
        text:
          "Verifying a JWT's signature proves only that the token is genuine and unexpired. Whether this caller may perform this action on this record is a separate check the service must still make. Treating a valid signature as permission is one of the most common API defects.",
      },
    ],
    sources: [lessonSources.rfc9110, lessonSources.openapi, lessonSources.graphql, lessonSources.soap12, lessonSources.rfc6749, lessonSources.rfc7519],
  },
  {
    id: "multitier-deployment",
    moduleId: "m6-1",
    unit: "6.1A",
    estimatedMinutes: 45,
    title: "Multi-Tier Architecture and Deployment",
    color: "blue",
    subtitle:
      "Separate the tiers, keep the middle one stateless, and promote one artefact everywhere.",
    beginner:
      "A multi-tier architecture splits an application into presentation, business logic, and data, each deployed separately. The separation is what lets you scale, secure, and replace one part without touching the others.",
    example:
      "A campus web application runs its interface behind a reverse proxy, its business logic on several identical stateless instances, and its data on one database with replicas - so adding an instance during enrollment week requires no code change at all.",
    objectives: [
      "Distinguish a tier from a layer and explain why the distinction matters.",
      "Explain what a stateless logic tier makes possible.",
      "Describe how one build artefact is promoted across environments.",
      "Explain where TLS terminates and what that implies for the internal network.",
    ],
    terms: [
      "Tier",
      "Layer",
      "Three-Tier Architecture",
      "Stateless Tier",
      "Environment Promotion",
      "Blue-Green Deployment",
    ],
    keyPoints: [
      "A layer is a logical separation inside a codebase; a tier is a physical deployment boundary. Several layers can run in one tier.",
      "Three-tier means presentation, logic, and data are deployed separately so each is scaled and secured on its own terms.",
      "A stateless logic tier holds no per-user state between requests, which is what allows instances to be added, replaced, or lost freely.",
      "Session affinity is a workaround for statefulness that limits elasticity; externalising session state to a shared store is the fix.",
      "One immutable build artefact is promoted through development, testing, staging, and production - rebuilding per environment means production runs untested code.",
      "Configuration is supplied from outside the artefact so the same build runs everywhere.",
      "TLS usually terminates at the reverse proxy, which means traffic inside the network is plain and the internal network must be treated as part of the trust boundary.",
      "Blue-green deployment runs two production environments and switches traffic between them, making rollback a routing change rather than a redeploy.",
    ],
    compare: {
      headers: ["Architecture", "Where logic lives", "Main weakness"],
      rows: [
        ["Two-tier", "Split between client and database", "Logic duplicated per client; hard to change"],
        ["Three-tier", "A dedicated logic tier", "One more deployment boundary to operate"],
        ["N-tier", "Logic plus caching, integration, reporting tiers", "Latency and operational complexity accumulate"],
        ["Stateful logic tier", "In instance memory", "Requires affinity; cannot scale or fail freely"],
        ["Stateless logic tier", "In requests and a shared store", "Externalised state becomes a dependency"],
      ],
    },
    flow: [
      ["Separate", "Split presentation, logic, and data into distinct tiers."],
      ["Externalise", "Move session state out of instance memory."],
      ["Build", "Produce one immutable artefact from source."],
      ["Promote", "Move that same artefact through each environment."],
      ["Switch", "Route traffic to the new version, keeping rollback one step away."],
    ],
    lessonBlocks: [
      {
        kind: "code",
        title: "One artefact, configuration from outside",
        language: "bash",
        code: `# Build ONCE. This exact artefact reaches production.
./build.sh --output app-1.8.3.jar

# Each environment supplies only its configuration.
# staging
DB_URL=jdbc:postgresql://db-staging:5432/app \
SESSION_STORE=redis://cache-staging:6379 \
LOG_LEVEL=debug \
  java -jar app-1.8.3.jar

# production - same jar, different values
DB_URL=jdbc:postgresql://db-prod:5432/app \
SESSION_STORE=redis://cache-prod:6379 \
LOG_LEVEL=warn \
  java -jar app-1.8.3.jar`,
        caption:
          "Rebuilding per environment means the artefact tested in staging is not the artefact running in production. Promoting the same file is what makes the test evidence apply.",
      },
      {
        kind: "callout",
        tone: "note",
        title: "Statelessness is what buys elasticity",
        text:
          "If any instance can serve any request, the load balancer can add capacity, remove a failed node, or drain one for deployment without anyone noticing. The moment a user's session lives in one instance's memory, all three of those become disruptive.",
      },
      {
        kind: "callout",
        tone: "security",
        title: "What TLS termination implies",
        text:
          "Terminating TLS at the reverse proxy means traffic between the proxy and the logic tier is unencrypted. That is workable inside a controlled network, but it makes the internal network part of the trust boundary - and it is the reason a compromised host inside the perimeter is so damaging.",
      },
    ],
    sources: [lessonSources.tls, lessonSources.c4],
  },
];

// Store concise glossary entries in module order, exactly TERMS_PER_MODULE per module.
const glossary = [
  ["Enterprise", "The whole organization or business environment being examined."],
  ["Architecture", "High-level planning that shows the overall shape, relationships, and direction of a solution."],
  ["Enterprise Architecture", "A framework that aligns business strategy, IT strategy, processes, systems, information, and infrastructure."],
  ["Information Architecture", "A shared and stable environment for organizing, finding, storing, and using trustworthy information."],
  ["Enterprise Information Architecture", "The requirements, principles, models, and guidance used to share enterprise-significant information and enable change."],
  ["Business Architecture", "The architecture view describing business strategy, capabilities, organization, and processes."],
  ["Application Architecture", "The architecture view describing applications, their responsibilities, and their interactions."],
  ["Data Architecture", "The architecture view describing data structures, ownership, movement, storage, and governance."],
  ["Technical Architecture", "The architecture view describing technology platforms, infrastructure, and standards."],
  ["TOGAF", "An enterprise architecture framework that groups work into business, application, data, and technical architectures."],
  ["Zachman Framework", "A matrix that crosses six descriptive questions with six stakeholder perspectives."],
  ["Federal Enterprise Architecture", "A method organized around performance, business, service component, technical, and data reference models."],
  ["Gartner Methodology", "An approach that brings business owners, information specialists, and technology implementers together."],
  ["Metadata", "Data that describes other data, such as its meaning, owner, format, source, or lineage."],
  ["Master Data", "Shared, strategically important data about core entities such as customers, products, or students."],
  ["Transaction Data", "Data captured from business events and operational processes, such as a sale or payment."],
  ["Reference Data", "Managed facts or allowed values used to classify and process other data, such as country codes."],
  ["Unstructured Data", "Content without a fixed table-like structure, including documents, images, audio, and video."],
  ["Analytical Data", "Data derived from operations and transformations to support reporting, analysis, and decisions."],
  ["Big Data", "Very large or complex datasets that challenge traditional storage, processing, sharing, and analysis."],
  ["Corporate Governance", "The relationships, responsibilities, rules, and monitoring used to direct and control an organization."],
  ["IT Governance", "Board and executive direction and oversight that ensure IT supports enterprise objectives, value, and acceptable risk."],
  ["Strategic Alignment", "The continuing connection between enterprise goals, business plans, IT plans, and IT operations."],
  ["Value Delivery", "Ensuring IT produces promised benefits at an appropriate cost."],
  ["Resource Management", "Responsible investment in and use of applications, information, infrastructure, and people."],
  ["Risk Management", "Identifying, analyzing, treating, and monitoring uncertainty that could affect objectives."],
  ["Performance Measurement", "Tracking indicators for projects, services, resources, processes, and outcomes."],
  ["Compliance Management", "Processes that address legal, regulatory, policy, and contractual requirements."],
  ["IT Strategy Committee", "A board-level advisory group focused on strategic direction, value, risk, capability, and future IT issues."],
  ["IT Steering Committee", "A management group that prioritizes and monitors IT projects, budgets, resources, standards, and services."],
  ["IT Balanced Scorecard", "A technique that combines financial and nonfinancial measures to assess IT functions and alignment."],
  ["Information Security Governance", "Leadership and oversight that protect information and align security with business objectives."],
  ["Strategic Planning", "Defining the long-term direction for using IT while balancing business demand and delivery capacity."],
  ["Policy", "A clear high-level statement of management intent, expectations, and direction."],
  ["Procedure", "A detailed, repeatable set of actions derived from and implementing a parent policy."],
  ["Residual Risk", "Risk that remains after existing or planned controls are applied."],
  ["Outsourcing", "Having an external party perform part or all of an information systems function."],
  ["Segregation of Duties", "Dividing authorization, custody, and recording so one person cannot control an entire sensitive transaction."],
  ["Compensating Control", "An alternative safeguard, such as review or reconciliation, used when the preferred control is impractical."],
  ["IS Auditor", "An assurance professional who evaluates information systems governance, risk, controls, and evidence."],
  ["Information", "Data placed in context so it becomes meaningful to a person, application, or business process."],
  ["Data", "A stable building block whose value and meaning remain consistent across contexts."],
  ["Conceptual Layer", "The modelling view that defines what information and data the business needs."],
  ["Logical Layer", "The modelling view that defines how information and data are organized, refined, or represented."],
  ["Physical Layer", "The modelling view that defines where deployed information and data representations are stored."],
  ["Information Architecture Objective", "A desired outcome for the organization’s information and data architecture."],
  ["Information Architecture Principle", "A high-level rule governing how enterprise information and data should be managed."],
  ["Information Driver", "An internal or external influence that motivates information architecture objectives."],
  ["Information Concept", "A fundamental kind of information used by the business that grounds later representations."],
  ["Data Subject", "A high-level conceptual kind of data used to provide information, such as Customer or Product."],
  ["Information View", "A logical refinement describing the type of information used for a particular process or audience."],
  ["Information View Attribute", "A defined part of an information view, including how it may be derived or calculated."],
  ["Information Representation", "A technology-specific realization of an information view, such as a report, feed, or database."],
  ["Data Object", "A logical grouping of data attributes used across business processes to deliver information."],
  ["Data Object Attribute", "An individual logical data element belonging to a data object."],
  ["Data Representation", "The way a data object is stored or used in an application, commonly as a database table."],
  ["Data Representation Attribute", "An implementing-system field that realizes a logical data object attribute."],
  ["Information Store", "A physical deployment of an information representation in production, development, or test."],
  ["Physical Data Object", "The deployed physical data stored inside an information store."],
  ["Semantic Grounding", "The shared business meaning that connects conceptual definitions to logical and physical implementations."],
  ["Service-Oriented Architecture", "A design style in which application components provide services to other components through agreed communication protocols."],
  ["Service", "A clear, independent function that describes a piece of functionality and can exchange data with other services."],
  ["Enterprise Service Bus", "Shared messaging infrastructure through which services expose themselves and exchange messages."],
  ["Infrastructure Services", "SOA services that perform non-functional work such as logging, authentication, and security."],
  ["Utility Services", "Infrastructure services that supply reusable technical capabilities such as event logging and notification."],
  ["Business Services", "Services that perform business functions; also called application-level business capabilities."],
  ["Entity Services", "Business services that expose information stored in backend databases."],
  ["Application Services", "Services that provide a dedicated user interface used to invoke other services within one application context."],
  ["Enterprise Services", "Services that implement the functionality defined by business services using infrastructure and application services."],
  ["Standardized Service Contract", "The SOA principle that every service adheres to a published service description."],
  ["Loose Coupling", "The SOA principle that services minimize dependencies so one failure does not stop the client application."],
  ["Service Abstraction", "The SOA principle that a service hides how it performs its work from the outside world."],
  ["Service Reusability", "The SOA principle that logic is divided into services so it can be re-used by many applications."],
  ["Service Autonomy", "The SOA principle that a service controls the logic it encapsulates."],
  ["Service Statelessness", "The SOA principle that a service does not retain data between requests, leaving state to the client."],
  ["Service Discoverability", "The SOA principle that services can be found, usually through a service registry."],
  ["Service Composability", "The SOA principle that services break large problems into small ones that can be combined."],
  ["Service Consumer", "The party that finds a service in the registry, binds to the provider, and invokes the service."],
  ["Service Registry", "The broker or repository that holds service offers so consumers can find them."],
  ["Service Provider", "The party that creates a service and publishes its information to the registry."],
  ["Microservices Architecture", "An approach that builds an application from small services, each running in its own process and deployed independently."],
  ["Monolithic Application", "An application developed and deployed as a single indivisible piece."],
  ["Functional Service", "A microservice that performs business functions for specific operations rather than shared technical tasks."],
  ["API Gateway", "The component that receives requests from many different clients and routes them to services."],
  ["Service Discovery", "The mechanism used to find the route of communication between microservices at run time."],
  ["Identity Provider", "The component that authenticates clients and users and issues security tokens."],
  ["Content Delivery Network", "A geographically distributed group of servers that work together to deliver internet content quickly."],
  ["Remote Service", "A service used to enable remote access to information across a network."],
  ["Inter-Process Communication", "The mechanism isolated microservices use to communicate with one another."],
  ["Bounded Context", "A boundary that encapsulates one domain's details and defines how it integrates with other domains."],
  ["Distributed Architecture", "An arrangement in which services communicate through an API gateway and can be deployed as multiple instances."],
  ["Independent Deployability", "The ability to release one service without redeploying the rest of the application."],
  ["Horizontal Scaling", "Adding more instances of a component to handle more load instead of enlarging one machine."],
  ["Workload Partitioning", "Splitting work so only the component that needs more capacity is scaled."],
  ["Fault Isolation", "Containing a failure inside one service so the rest of the system keeps working."],
  ["Container", "A packaged, isolated runtime unit that lets a service run the same way anywhere."],
  ["Container Orchestration", "Automated placement, scaling, and recovery of containers, for example with Kubernetes."],
  ["Continuous Delivery", "Building and releasing software through automated processes so changes reach production quickly and safely."],
  ["Decentralization", "Letting each team own the decisions, data, and releases for its own service."],
  ["Resilience", "Designing so that the failure of one part does not seriously affect the whole system."],
  ["Project", "A temporary endeavour undertaken to create a unique product, service, or result, with a defined start and end."],
  ["Project Management", "Applying knowledge, skills, tools, and techniques to project activities so the project meets its requirements."],
  ["Process Group", "One of the five groupings of project work: initiating, planning, executing, monitoring and controlling, and closing."],
  ["Triple Constraint", "The interdependence of scope, schedule, and cost; changing one forces a change in at least one of the others."],
  ["Project Charter", "The document that formally authorises a project and gives the project manager authority to apply resources."],
  ["Work Breakdown Structure", "A hierarchical decomposition of the total scope into progressively smaller deliverables and work packages."],
  ["Work Package", "The lowest level of the work breakdown structure, small enough to be estimated, assigned, and tracked."],
  ["Critical Path", "The longest sequence of dependent activities through a schedule; any delay on it delays the whole project."],
  ["Float", "The amount of time an activity can slip without delaying the project; activities on the critical path have none."],
  ["Gantt Chart", "A bar chart plotting activities against a timeline to show duration, sequence, and overlap."],
  ["Milestone", "A zero-duration marker for a significant point in the schedule, used to confirm progress rather than perform work."],
  ["Stakeholder", "Any individual or group that can affect, be affected by, or perceive itself to be affected by the project."],
  ["Scope Creep", "Uncontrolled expansion of scope without matching adjustment to time, cost, and resources."],
  ["RAID Log", "A running register of risks, assumptions, issues, and dependencies used to keep delivery decisions visible."],
  ["Technopreneurship", "Building a venture whose competitive advantage rests on technology the founders develop or apply."],
  ["Minimum Viable Product", "The smallest release that delivers real value and produces validated learning about customer demand."],
  ["Build-Measure-Learn", "The lean startup loop: build the smallest testable increment, measure real behaviour, and learn what to change."],
  ["Pivot", "A structured change of strategy taken in response to validated learning, without abandoning the underlying vision."],
  ["Architecture Decision Record", "A short dated document capturing one architectural decision, its context, the options, and the consequences."],
  ["C4 Model", "A way of documenting architecture at four zoom levels: system context, container, component, and code."],
  ["XML", "The Extensible Markup Language, a self-describing markup language designed to carry data rather than display it."],
  ["Markup Language", "A language that uses tags to describe the structure and meaning of content."],
  ["XML Element", "A hierarchical XML item written as an open tag and close tag pair that may nest other elements."],
  ["XML Attribute", "A named value inside an element's open tag; only one attribute of a given name may appear per element."],
  ["Root Element", "The single outermost element that contains every other element of an XML document."],
  ["Well-Formed XML", "An XML document that follows the syntax rules, so any parser can read it without knowing the tags."],
  ["XML Prolog", "The opening declaration that states the XML version and character encoding."],
  ["Meta-Language", "A language used to create other languages, which is what both XML and JSON provide."],
  ["Document Type Definition", "An early schema language used to declare the allowed structure of an XML document."],
  ["XML Schema", "An XML-based schema language used to define and validate the structure and data types of XML documents."],
  ["JSON", "JavaScript Object Notation, a lightweight, mostly language-independent format for specifying objects as name-value pairs."],
  ["JSON Object", "Zero or more string-colon-value pairs separated by commas and wrapped in curly braces."],
  ["JSON Array", "An ordered list of zero or more values separated by commas and wrapped in square brackets."],
  ["JSON Value", "An object, array, number, string, true, false, or null."],
  ["JSON String", "A sequence of Unicode characters wrapped in double quotes, with required escapes for quote, backslash, and control characters."],
  ["JSON Number", "An integer or decimal, optionally with an exponent, always written in decimal notation."],
  ["Duplicate Key", "A repeated name inside one JSON object; parser behavior is unpredictable, so keys must be unique."],
  ["JSON Schema", "A JSON document that describes and validates the structure, types, and constraints of other JSON documents."],
  ["Escape Sequence", "A backslash-prefixed notation used to represent characters that cannot appear literally in a string."],
  ["Whitespace Insignificance", "The JSON rule that spaces, tabs, and newlines between tokens do not change the meaning of a document."],
  ["Web Service", "A network-accessible interface to application functionality built with standard internet technologies."],
  ["Interoperability", "The ability of applications to work together without sharing a platform, operating system, or programming language."],
  ["SOAP", "A messaging framework that specifies XML message format, message processing, and transport, mainly over HTTP."],
  ["SOAP Envelope", "The outermost element of a SOAP message that contains the optional header and the mandatory body."],
  ["SOAP Header", "The optional envelope section whose blocks target SOAP roles and control processing such as authentication or routing."],
  ["SOAP Body", "The mandatory envelope section that carries information intended for the ultimate SOAP receiver."],
  ["SOAP Fault", "The error report returned inside a SOAP body when message processing fails."],
  ["SOAP Node", "An initial sender, intermediary, or ultimate receiver along the path a SOAP message travels."],
  ["SOAP Role", "The processing part a node assumes toward a message, which determines the header blocks it must handle."],
  ["Message Exchange Pattern", "The agreed shape of an exchange, such as treating a request and its response as two one-way messages."],
  ["Remote Procedure Call", "Calling a procedure on another machine through a local proxy so the caller barely notices the call was remote."],
  ["Marshalling", "Converting parameter values into a transmittable form, such as XML, before sending them to a remote node."],
  ["WSDL", "The Web Services Description Language, an XML grammar for describing network services as collections of endpoints."],
  ["WSDL Types", "The WSDL container for data-type definitions expressed in a type system such as XML Schema."],
  ["WSDL Message", "An abstract, typed definition of the data being communicated, built from logical parts."],
  ["WSDL Operation", "An abstract description of one action supported by a service."],
  ["Port Type", "An abstract set of operations supported by one or more endpoints, each referring to input and output messages."],
  ["Binding", "A concrete protocol and data-format specification for a particular port type."],
  ["Port", "A single endpoint defined by combining a binding with a network address."],
  ["UDDI", "Universal Description, Discovery, and Integration—a searchable repository of web service descriptions."],
  ["XML Parser", "Software that reads an XML document, checks it, and exposes its structure to an application."],
  ["DOM Parsing", "Reading the whole document into a tree in memory, allowing random access and modification at the cost of memory."],
  ["SAX Parsing", "Event-driven, read-only, forward-only parsing that reports elements as they are encountered without building a tree."],
  ["StAX Parsing", "Pull parsing, where the application asks for the next event rather than receiving callbacks, giving it control of the loop."],
  ["XML Namespace", "A URI-qualified naming scheme that lets elements from different vocabularies coexist in one document without collision."],
  ["Namespace Prefix", "A short local alias bound to a namespace URI; the URI, not the prefix, is what identifies the vocabulary."],
  ["Qualified Name", "An element or attribute name consisting of an optional prefix and a local part, resolving to a namespace URI."],
  ["XSD", "XML Schema Definition, a schema language written in XML itself that supports data types, cardinality, and namespaces."],
  ["Simple Type", "An XSD type holding only character data, with no child elements and no attributes."],
  ["Complex Type", "An XSD type that may contain child elements, attributes, or both."],
  ["Cardinality", "How many times an element may appear, expressed in XSD with minOccurs and maxOccurs."],
  ["Schema Validation", "Checking that a well-formed document also conforms to the structure and data types a schema declares."],
  ["Valid Document", "A well-formed document that additionally satisfies its declared schema; well-formedness alone is not validity."],
  ["XPath", "An expression language for addressing parts of an XML document by navigating its node tree."],
  ["XPath Axis", "The direction a location step travels, such as child, parent, ancestor, descendant, or attribute."],
  ["XSLT", "A declarative language that transforms an XML document into another XML, HTML, or text document using template rules."],
  ["Data Binding", "Mapping XML elements and attributes onto in-memory objects so application code works with types rather than nodes."],
  ["Marshalling and Unmarshalling", "Converting objects to an XML representation and back, the serialisation half of data binding."],
  ["XML External Entity", "A declared entity whose replacement text is fetched from a URI, and the vector behind the XXE vulnerability."],
  ["XXE Attack", "Abusing external entity resolution to read local files or reach internal services; prevented by disabling external entities."],
  ["Performance Testing", "Measuring how a system behaves under a defined workload, in terms of speed, resource use, and stability."],
  ["Load Testing", "Applying the expected production workload to confirm the system meets its targets under normal conditions."],
  ["Stress Testing", "Pushing load beyond the expected maximum to find the breaking point and observe how the system fails."],
  ["Soak Testing", "Holding a moderate load for an extended period to expose leaks and slow degradation that short runs hide."],
  ["Spike Testing", "Applying a sudden sharp increase in load to test how quickly the system absorbs and recovers from a surge."],
  ["Throughput", "The number of requests or transactions completed per unit of time."],
  ["Latency", "The elapsed time between issuing a request and receiving the response."],
  ["Response Time Percentile", "A latency value that a stated share of requests fell below, such as p95 or p99."],
  ["p99 Latency", "The response time under which 99 percent of requests completed; it exposes the tail an average conceals."],
  ["Concurrency", "The number of requests being processed at the same time, distinct from the arrival rate."],
  ["Little's Law", "The relationship that concurrency equals arrival rate multiplied by average residence time in the system."],
  ["Bottleneck", "The single resource whose saturation limits overall throughput; relieving anything else changes nothing."],
  ["Saturation Point", "The load beyond which throughput stops rising and latency climbs sharply."],
  ["Think Time", "A deliberate pause modelled between a virtual user's requests so the workload resembles real behaviour."],
  ["Ramp-Up", "Gradually increasing virtual users so the system's response can be observed across a range of loads."],
  ["Apache JMeter", "An open-source Java tool for building and running load tests against web, database, and messaging endpoints."],
  ["Service Level Indicator", "A measured quantity describing service quality, such as request latency or error rate."],
  ["Service Level Objective", "A target value or range for a service level indicator over a stated window."],
  ["Error Budget", "The permitted shortfall implied by an objective; consuming it is the signal to prioritise reliability over features."],
  ["Baseline Measurement", "A recorded performance profile taken before a change, so any later result has something to be compared against."],
  ["Enterprise Application Integration", "Uniting the databases and workflows of business applications so data is used consistently across the enterprise."],
  ["Information Silo", "An isolated application or data store whose information cannot flow to the systems that need it."],
  ["Point-to-Point Integration", "The earliest EAI model, in which a script extracts, reformats, and sends data between two applications."],
  ["Hub-and-Spoke Integration", "An EAI model in which a central hub connects to applications, captures and reformats data, and decides where it goes."],
  ["Bus Integration", "An evolution of hub-and-spoke that uses agreed standards to govern data flow without human intervention."],
  ["Message Broker", "Integration software that extracts information from one application, converts it, and transmits it to another."],
  ["Data-Level EAI", "Integration that transfers and reformats data between data stores without changing application code."],
  ["Application Interface Level EAI", "Integration that leverages the interfaces exposed by custom or packaged applications such as ERP products."],
  ["Method Level EAI", "Integration that shares business logic so applications can call methods held by other applications."],
  ["User Interface Level EAI", "A primitive integration approach that drives an application through its user interface when no other access exists."],
  ["Enterprise Resource Planning", "A packaged enterprise application that manages core back-office business functions and data."],
  ["Customer Relationship Management", "A packaged enterprise application that manages customer records, interactions, and sales activity."],
  ["Java Message Service", "A Java API providing implementation-independent access to message-oriented middleware products."],
  ["Enterprise JavaBeans", "Sun Microsystems' enterprise component model for building server-side business components."],
  ["Java RMI", "Java's remote method invocation mechanism, the Java form of distributed object computing."],
  ["Distributed Object", "A component whose methods can be invoked by software running on another machine."],
  ["Transaction Processing Monitor", "Middleware that coordinates and supervises transactions shared across applications."],
  ["Object Request Broker", "Middleware that relays a call from one application to methods stored in another application."],
  ["Application Server", "A shared runtime host that provides services and containers for enterprise business components."],
  ["Legacy System Integration", "Connecting older software to newer systems so it can keep delivering value instead of being replaced."],
  ["Middleware", "Software between application programs and the operating system that supplies distributed computing capabilities and interfaces."],
  ["Front End", "The client side where the user interacts with software and from which network-based requests originate."],
  ["Back End", "The requested resources such as databases, message queues, NoSQL stores, and file servers."],
  ["Connection Pool", "A reusable set of open connections kept by middleware for fast, efficient access to a back-end resource."],
  ["Message Queue", "A store-and-forward buffer that holds messages until the receiving application is ready to process them."],
  ["Enterprise Application Integration Middleware", "Middleware that lets programmers build applications without hand-crafting an integration for each new application."],
  ["Platform Middleware", "Middleware that supplies a runtime hosting environment, such as containers, application servers, and web servers."],
  ["Messaging Middleware", "Middleware that facilitates communication between distributed applications and services."],
  ["Object Middleware", "Middleware that enables software components or objects to interact across distributed systems."],
  ["Remote Procedure Call Middleware", "Middleware providing a protocol that lets a program request a service from a program on another computer."],
  ["Database Middleware", "Middleware that enables direct access to and interaction with databases, typically including SQL software."],
  ["Transactional Middleware", "Middleware that moves transactions from one phase to the next through transaction process monitoring."],
  ["Content-Centric Middleware", "Middleware that abstracts and delivers requested content, similar to publish/subscribe systems."],
  ["Embedded Middleware", "Middleware that connects embedded applications with real-time operating systems."],
  ["Publish/Subscribe", "A messaging pattern in which publishers classify messages and subscribers receive the classes they registered for."],
  ["Load Balancing", "Distributing incoming client requests across multiple servers, virtual machines, or availability zones."],
  ["Concurrent Processing", "Handling several client requests at once while preventing conflicting access to the same resource."],
  ["Vertical Scaling", "Increasing the capacity of a single server or instance instead of adding more of them."],
  ["SSL/TLS", "The transport security technology middleware uses to require a secure, encrypted connection to clients."],
  ["Representational State Transfer", "A lightweight messaging style middleware uses to let applications transfer data over the web."],
  ["Cloud Computing", "A model for convenient, on-demand network access to a shared pool of configurable computing resources released with minimal management effort."],
  ["On-Demand Self-Service", "The cloud characteristic that lets users obtain computing resources automatically when they need them."],
  ["Broad Network Access", "The cloud characteristic that makes services reachable over the network from phones, tablets, laptops, and desktops."],
  ["Resource Pooling", "The cloud characteristic in which pooled computing resources serve many customers with location independence."],
  ["Rapid Elasticity", "The cloud characteristic that allows a service to scale in or out quickly as demand changes."],
  ["Measured Service", "The cloud characteristic that meters usage so services can be controlled, optimized, and billed per use."],
  ["Infrastructure as a Service", "A cloud service model that delivers computing, storage, and networking resources the customer configures."],
  ["Platform as a Service", "A cloud service model that delivers a managed platform on which customers build and run their own applications."],
  ["Software as a Service", "A cloud service model that delivers finished applications, such as web-based email, over the internet."],
  ["Public Cloud", "A cloud open to the general public, owned by a provider, priced pay-as-you-go, and sharing one infrastructure pool."],
  ["Private Cloud", "Cloud infrastructure provisioned for the exclusive use of a single organization, on or off premises."],
  ["Community Cloud", "Cloud infrastructure shared by organizations with similar missions, security requirements, or policies."],
  ["Hybrid Cloud", "A combination of public and private cloud in which critical work stays private and other work runs publicly."],
  ["Multi-Tenancy", "Hosting many customers on the same provider-managed infrastructure at the same time."],
  ["Virtualization", "The technology that pools and divides physical server resources so they can be shared and scaled quickly."],
  ["Cloud Consumer", "A person or organization that maintains a business relationship with and uses services from cloud providers."],
  ["Cloud Provider", "A person, organization, or entity responsible for making a cloud service available to consumers."],
  ["Cloud Auditor", "A party that independently assesses cloud service performance, security, and controls."],
  ["Cloud Broker", "A third party that acts as an intermediary between the purchaser and the sellers of cloud services."],
  ["Cloud Carrier", "The intermediary that provides connectivity and transport of cloud services from providers to consumers."],
  ["Application Programming Interface", "A defined contract through which one piece of software requests services from another."],
  ["Resource", "In REST, any named thing exposed by the API and identified by a URI."],
  ["Uniform Interface", "The REST constraint that all resources are manipulated through the same small set of standard operations."],
  ["Statelessness Constraint", "The REST constraint that each request carries everything needed to process it, holding no server-side session."],
  ["Safe Method", "An HTTP method that does not change server state, such as GET or HEAD."],
  ["Idempotent Method", "A method whose repeated application has the same effect as one application, such as PUT or DELETE."],
  ["Richardson Maturity Model", "A four-level scale rating a REST API by its use of resources, HTTP verbs, and hypermedia controls."],
  ["HATEOAS", "Hypermedia as the engine of application state: responses carry the links describing what the client may do next."],
  ["OpenAPI Specification", "A machine-readable description format for HTTP APIs, used to generate documentation, clients, and tests."],
  ["Content Negotiation", "Selecting a representation of a resource from the media types the client says it accepts."],
  ["API Versioning", "Publishing successive contracts so existing clients keep working while the interface evolves."],
  ["Rate Limiting", "Capping how many requests a client may issue in a window, protecting the service from overload and abuse."],
  ["GraphQL", "A query language and runtime where the client specifies exactly which fields it needs from a typed schema."],
  ["GraphQL Schema", "The typed contract describing every queryable field, its arguments, and its return type."],
  ["Resolver", "The function that produces the value for one field in a GraphQL schema."],
  ["Over-Fetching", "Receiving more data than the client needs, a common cost of fixed REST representations."],
  ["Under-Fetching", "Receiving too little in one call, forcing extra round trips to assemble a screen."],
  ["gRPC", "A high-performance remote call framework using Protocol Buffers over HTTP/2, suited to internal service-to-service traffic."],
  ["OAuth 2.0", "An authorisation framework letting a client obtain limited access to a resource on a user's behalf without their password."],
  ["JSON Web Token", "A compact signed token carrying claims, used as a bearer credential and verified without a database lookup."],
  ["Tier", "A physically separate deployment unit, as distinct from a layer, which is a logical separation within a codebase."],
  ["Layer", "A logical grouping of responsibilities inside an application; several layers may run within one tier."],
  ["Presentation Tier", "The tier that renders the interface and collects input, holding no business rules of its own."],
  ["Logic Tier", "The tier holding business rules and orchestration, sitting between presentation and data."],
  ["Data Tier", "The tier that stores and retrieves persistent state, typically a database management system."],
  ["Two-Tier Architecture", "A client talking directly to a database, with business rules split awkwardly between the two."],
  ["Three-Tier Architecture", "Presentation, logic, and data deployed separately so each can be scaled and secured on its own terms."],
  ["N-Tier Architecture", "Any generalisation beyond three tiers, adding caching, integration, or reporting tiers as needed."],
  ["Stateless Tier", "A tier holding no per-user state between requests, which is what allows instances to be added or replaced freely."],
  ["Session Affinity", "Routing a user's requests to the same instance; a workaround for stateful tiers that limits elasticity."],
  ["Externalised Session State", "Keeping session data in a shared store rather than in an instance's memory, so the tier stays stateless."],
  ["Reverse Proxy", "A server that accepts client requests and forwards them to back-end instances, often terminating TLS on the way."],
  ["TLS Termination", "Decrypting inbound TLS at the edge so back-end tiers handle plain traffic inside a trusted network."],
  ["Environment Promotion", "Moving an identical build through development, testing, staging, and production rather than rebuilding per stage."],
  ["Configuration Externalisation", "Supplying environment-specific settings from outside the artefact so one build runs everywhere."],
  ["Build Artefact", "The single immutable output of a build, deployed unchanged to every environment."],
  ["LAMP Stack", "The Linux, Apache, MySQL, and PHP combination commonly used to host a three-tier web application."],
  ["Health Check Endpoint", "A cheap endpoint a load balancer polls to decide whether an instance should receive traffic."],
  ["Graceful Shutdown", "Draining in-flight work and deregistering before an instance exits, so deployments do not drop requests."],
  ["Blue-Green Deployment", "Running two production environments and switching traffic between them, making rollback a routing change."],
];

/**
 * Resolve the owning module for a glossary position.
 * Terms are stored in module order, TERMS_PER_MODULE entries at a time.
 * @param {number} index - Zero-based glossary position.
 * @returns {object} The owning module record.
 */
function moduleForGlossaryIndex(index) {
  return modules[Math.min(Math.floor(index / TERMS_PER_MODULE), modules.length - 1)];
}

// Publish one enriched glossary view so no consumer has to repeat the grouping rule.
const glossaryEntries = glossary.map(([term, definition], index) => {
  const module = moduleForGlossaryIndex(index);
  return {
    term,
    definition,
    moduleId: module.id,
    moduleLabel: module.label,
    moduleTitle: module.title,
  };
});

// Convert every glossary entry into a predictable, module-tagged flashcard.
const flashcards = glossaryEntries.map((entry) => ({
  topic: entry.moduleTitle,
  front: `What is ${entry.term}?`,
  back: entry.definition,
}));

/**
 * Build a definition test from one module glossary segment.
 * Distractors remain inside the same module so every option is plausible.
 * @param {object[]} entries - Enriched glossary entries owned by one module.
 * @param {number} moduleIndex - Zero-based module position, used to rotate answers.
 * @returns {object[]} Question records for the reviewer quiz contract.
 */
function buildQuestionSet(entries, moduleIndex) {
  return entries.map((entry, questionIndex) => {
    const distractorOffsets = [3, 7, 11];
    const distractors = distractorOffsets.map(
      (offset) => entries[(questionIndex + offset) % entries.length].definition
    );
    const answer = (questionIndex + moduleIndex) % 4;
    const options = [...distractors];
    options.splice(answer, 0, entry.definition);
    return {
      q: `Which description best matches “${entry.term}”?`,
      options,
      answer,
      explain: `${entry.term}: ${entry.definition}`,
    };
  });
}

// Produce one test per module with exactly TERMS_PER_MODULE questions each.
const practiceTests = modules.map((module, moduleIndex) => {
  const entries = glossaryEntries.filter((entry) => entry.moduleId === module.id);
  return {
    title: `${module.label} Practice: ${module.title}`,
    description: `${entries.length} beginner-friendly questions covering Module ${module.label}.`,
    questions: buildQuestionSet(entries, moduleIndex),
  };
});

// Represent the four stages described by the EIA reference architecture.
const blueprintStages = [
  {
    id: "conceptual",
    title: "Conceptual Architecture",
    question: "Why and what?",
    summary:
      "Defines scope, data classification, domains, capabilities, principles, governance, and major architecture decisions.",
    includes: ["Architecture overview", "Data domains", "Guiding principles", "Governance decisions"],
    example:
      "Declare that student data is an enterprise asset and that one trusted identity must serve every campus unit.",
  },
  {
    id: "logical",
    title: "Logical Architecture",
    question: "How should capabilities cooperate?",
    summary:
      "Describes domain relationships, integration, information services, and the logical flow of enterprise information.",
    includes: ["Logical view", "Information services", "Integration patterns", "Domain relationships"],
    example:
      "Show an identity service sharing governed student information with enrollment, finance, and advising.",
  },
  {
    id: "component",
    title: "Component Model",
    question: "Which building blocks perform the work?",
    summary:
      "Defines reusable EIA components, services, responsibilities, relationships, interactions, and example scenarios.",
    includes: ["Component catalog", "Service descriptions", "Relationship diagram", "Interaction scenarios"],
    example:
      "Specify master-data, metadata, integration, data-quality, and access-control components.",
  },
  {
    id: "operational",
    title: "Operational Model",
    question: "How and where does it run?",
    summary:
      "Explains logical and physical operation, patterns, service qualities, deployment choices, and integration practices.",
    includes: ["Logical operations", "Physical deployment", "Service qualities", "Cloud delivery"],
    example:
      "Deploy resilient integration services in the cloud with monitored latency, availability, and recovery targets.",
  },
];

// Define the three modelling lenses and their construct families.
const modelLayers = [
  {
    id: "conceptual",
    label: "Conceptual",
    question: "What information and data matter?",
    description:
      "Captures business meaning, objectives, principles, drivers, information concepts, and data subjects without committing to a technology.",
    constructs: [
      "Information Architecture Objective",
      "Information Architecture Principle",
      "Information Driver",
      "Information Concept",
      "Data Subject",
    ],
    example: "Information Concept: Cost; Data Subject: Customer.",
  },
  {
    id: "logical",
    label: "Logical",
    question: "How are they organized and represented?",
    description:
      "Refines shared meaning into views, attributes, data objects, and technology-specific logical representations.",
    constructs: [
      "Information View",
      "Information View Attribute",
      "Information Representation",
      "Data Object",
      "Data Object Attribute",
      "Data Representation",
      "Data Representation Attribute",
    ],
    example:
      "Customer Services View; Employee Contact Details data object; Payroll Spreadsheet representation.",
  },
  {
    id: "physical",
    label: "Physical",
    question: "Where is the deployed implementation?",
    description:
      "Identifies real information stores and the physical data objects deployed in production, development, or test.",
    constructs: ["Information Store", "Physical Data Object"],
    example: "Marketing Customer Database—Production; Customer Master in ERP—Production.",
  },
];

// Supply exactly eighteen applied challenges: seven realms, eight governance, and three modelling.
const scenarios = [
  {
    id: "realm-transaction",
    moduleId: "m1-1",
    category: "Data Realms",
    prompt: "A checkout system records each completed sale, timestamp, total, and payment method. Which realm fits best?",
    options: ["Transaction Data", "Metadata", "Master Data", "Analytical Data"],
    answer: 0,
    explanation: "A sale is a business event captured during operations, so it is transaction data.",
  },
  {
    id: "realm-metadata",
    moduleId: "m1-1",
    category: "Data Realms",
    prompt: "A catalog records a table’s owner, field meanings, update schedule, and source. Which realm fits best?",
    options: ["Reference Data", "Metadata", "Big Data", "Transaction Data"],
    answer: 1,
    explanation: "The catalog describes other data, making it metadata.",
  },
  {
    id: "realm-master",
    moduleId: "m1-1",
    category: "Data Realms",
    prompt: "Every department must use one trusted record for each student. Which realm is being managed?",
    options: ["Unstructured Data", "Analytical Data", "Master Data", "Reference Data"],
    answer: 2,
    explanation: "Student is a strategically important shared entity, so its trusted record is master data.",
  },
  {
    id: "realm-reference",
    moduleId: "m1-1",
    category: "Data Realms",
    prompt: "A payment system validates currency values against ISO currency codes. Which realm contains those codes?",
    options: ["Reference Data", "Transaction Data", "Big Data", "Unstructured Data"],
    answer: 0,
    explanation: "Currency codes are managed allowed values used to process other data, so they are reference data.",
  },
  {
    id: "realm-unstructured",
    moduleId: "m1-1",
    category: "Data Realms",
    prompt: "A legal department manages contracts, scanned signatures, photos, and recorded interviews. Which realm dominates?",
    options: ["Master Data", "Analytical Data", "Unstructured Data", "Metadata"],
    answer: 2,
    explanation: "Documents, images, and recordings are typical unstructured content.",
  },
  {
    id: "realm-analytical",
    moduleId: "m1-1",
    category: "Data Realms",
    prompt: "A dashboard combines five years of sales to show trends and forecasts. Which realm is the dashboard dataset?",
    options: ["Reference Data", "Analytical Data", "Master Data", "Transaction Data"],
    answer: 1,
    explanation: "The dataset is derived from operations to support decisions, so it is analytical data.",
  },
  {
    id: "realm-big",
    moduleId: "m1-1",
    category: "Data Realms",
    prompt: "Billions of sensor and clickstream events arrive continuously and exceed traditional processing capacity. Which realm applies?",
    options: ["Big Data", "Reference Data", "Metadata", "Master Data"],
    answer: 0,
    explanation: "The scale, speed, and processing challenge make this a big-data situation.",
  },
  {
    id: "governance-strategy",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "The board wants advice on whether cloud adoption supports long-term business direction and acceptable risk. Who should lead the advice?",
    options: ["Service desk", "IT Strategy Committee", "Data-entry team", "Project scheduler"],
    answer: 1,
    explanation: "The IT Strategy Committee advises the board on strategic value, direction, capability, sourcing, and risk.",
  },
  {
    id: "governance-steering",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "Management must approve project priorities, budgets, milestones, and resource conflicts. Which group fits best?",
    options: ["IT Steering Committee", "External customer group", "Help desk", "Payroll team"],
    answer: 0,
    explanation: "The IT Steering Committee focuses on implementation, prioritization, resources, and delivery oversight.",
  },
  {
    id: "risk-avoid",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "A legacy public service cannot be secured economically, so the organization retires it. Which treatment was used?",
    options: ["Accept", "Transfer", "Mitigate", "Avoid"],
    answer: 3,
    explanation: "Stopping the risky activity removes its exposure, which is risk avoidance.",
  },
  {
    id: "risk-mitigate",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "The organization adds multifactor authentication and monitoring to reduce account compromise. Which treatment was used?",
    options: ["Mitigate", "Accept", "Avoid", "Transfer"],
    answer: 0,
    explanation: "The controls reduce likelihood or impact, which is risk mitigation.",
  },
  {
    id: "risk-transfer",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "A company buys cyber insurance to shift part of the financial impact of an incident. Which treatment was used?",
    options: ["Avoid", "Transfer", "Accept", "Mitigate"],
    answer: 1,
    explanation: "Insurance transfers part of the financial consequence to another party.",
  },
  {
    id: "risk-accept",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "Management documents and approves a low-impact residual risk because another control would cost more than the expected loss. Which treatment applies?",
    options: ["Mitigate", "Avoid", "Transfer", "Accept"],
    answer: 3,
    explanation: "Management knowingly retains the remaining risk, which is risk acceptance.",
  },
  {
    id: "sourcing-hybrid",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "Internal staff own architecture decisions while a vendor supplies specialist migration engineers. Which sourcing model is this?",
    options: ["Fully outsourced", "Hybrid", "Fully insourced", "No sourcing strategy"],
    answer: 1,
    explanation: "Organization and vendor staff share delivery, making this a hybrid sourcing model.",
  },
  {
    id: "control-segregation",
    moduleId: "m1-2",
    category: "Governance",
    prompt: "One employee creates a vendor, approves its invoices, and reconciles payments. What is the clearest control weakness?",
    options: ["Too much metadata", "Poor segregation of duties", "Excessive strategic planning", "Missing data warehouse"],
    answer: 1,
    explanation: "Authorization, custody, and recording are concentrated in one person, enabling error or fraud to go undetected.",
  },
  {
    id: "model-conceptual",
    moduleId: "m1-3",
    category: "Model Layers",
    prompt: "An architect defines Customer as a business-wide Data Subject without naming a database. Which layer is this?",
    options: ["Physical", "Logical", "Conceptual", "Operational"],
    answer: 2,
    explanation: "A Data Subject captures what data matters and provides semantic grounding at the conceptual layer.",
  },
  {
    id: "model-logical",
    moduleId: "m1-3",
    category: "Model Layers",
    prompt: "Marketing and support define different Customer Information Views for their processes. Which layer is this?",
    options: ["Logical", "Physical", "Conceptual", "Network"],
    answer: 0,
    explanation: "Information Views refine a concept for particular uses at the logical layer.",
  },
  {
    id: "model-physical",
    moduleId: "m1-3",
    category: "Model Layers",
    prompt: "The team records that Customer Master is deployed in the production ERP information store. Which layer is this?",
    options: ["Conceptual", "Logical", "Physical", "Strategic"],
    answer: 2,
    explanation: "A deployed Information Store and Physical Data Object belong to the physical layer.",
  },
  {
    id: "soa-principle-stateless",
    moduleId: "m2-1",
    category: "SOA",
    prompt: "A service stores each caller's progress between requests, so a second instance cannot serve the same caller. Which SOA principle is violated?",
    options: ["Service Statelessness", "Service Discoverability", "Standardized Service Contract", "Service Composability"],
    answer: 0,
    explanation: "Statelessness requires services not to keep data from one state to the next; that responsibility belongs to the client application.",
  },
  {
    id: "soa-role-registry",
    moduleId: "m2-1",
    category: "SOA",
    prompt: "A consumer needs to locate a service at run time instead of hard-coding its address. Which SOA participant does it query?",
    options: ["Service provider", "Service registry", "Operational systems layer", "Consumer interface layer"],
    answer: 1,
    explanation: "The service registry, also called the broker or repository, holds published service offers so consumers can find and bind to them.",
  },
  {
    id: "soa-category-entity",
    moduleId: "m2-1",
    category: "SOA",
    prompt: "A service's only job is to expose customer records held in a backend database. Which service category fits best?",
    options: ["Utility service", "Process service", "Entity service", "Communication service"],
    answer: 2,
    explanation: "Entity services expose information stored in backend databases; process services would carry the business logic instead.",
  },
  {
    id: "micro-database-boundary",
    moduleId: "m2-2",
    category: "Microservices",
    prompt: "One microservice change forces three other services to be redeployed at the same time. Which characteristic has been lost?",
    options: ["Independent deployability", "Messaging enabled", "Small in size", "Automated release"],
    answer: 0,
    explanation: "Microservices should be separately deployed components; if one component changes, the others do not have to deploy again.",
  },
  {
    id: "micro-component-gateway",
    moduleId: "m2-2",
    category: "Microservices",
    prompt: "Web, mobile, and partner clients all send requests that must be received and routed to the right service. Which component does this?",
    options: ["Identity provider", "Content delivery network", "API gateway", "Static content server"],
    answer: 2,
    explanation: "The API gateway handles requests coming from various clients and forwards them into the microservice system.",
  },
  {
    id: "micro-scaling",
    moduleId: "m2-2",
    category: "Microservices",
    prompt: "Only the checkout component is overloaded during a sale. What does microservice scaling allow?",
    options: ["Scale the entire application", "Scale only the checkout component", "Replace the database technology", "Merge checkout back into the monolith"],
    answer: 1,
    explanation: "Workload partitioning and horizontal scaling mean you only need to scale up the component that needs it.",
  },
  {
    id: "xml-wellformed",
    moduleId: "m3-1",
    category: "Data Representation",
    prompt: "A document contains two top-level elements and one unclosed tag. What is the precise problem?",
    options: ["It is not well-formed XML", "It is valid but not readable", "It needs a JSON Schema", "It is missing an attribute"],
    answer: 0,
    explanation: "Well-formed XML needs exactly one root element and a closing tag for every open tag; otherwise no parser can read it.",
  },
  {
    id: "json-duplicate-keys",
    moduleId: "m3-1",
    category: "Data Representation",
    prompt: "A JSON object contains the key \"Title\" twice with different values. What should you expect?",
    options: ["Both values are always returned", "Parser behavior is unpredictable", "The document fails XML validation", "The first pair is always kept"],
    answer: 1,
    explanation: "RFC 7159 warns that when names within an object are not unique, receiving software behaves unpredictably; many implementations report only the last pair.",
  },
  {
    id: "json-multiline",
    moduleId: "m3-1",
    category: "Data Representation",
    prompt: "A developer wants a line break inside a JSON string value. What is the correct approach?",
    options: ["Press Enter inside the quotes", "Use the \\n escape sequence", "Add an XML CDATA section", "Add a // comment explaining the break"],
    answer: 1,
    explanation: "JSON forbids multi-line strings, so the newline is written as the two-symbol escape \\n and converted by the parser.",
  },
  {
    id: "soap-header-role",
    moduleId: "m3-2",
    category: "Web Services",
    prompt: "An intermediary node must authenticate a message and then pass it on. Where does that instruction belong?",
    options: ["In a SOAP header block targeted at that role", "In the SOAP body", "In the WSDL binding", "In the UDDI registry entry"],
    answer: 0,
    explanation: "Header blocks are targeted at SOAP roles; the node in that role performs the processing and deletes the block before relaying the message.",
  },
  {
    id: "wsdl-binding",
    moduleId: "m3-2",
    category: "Web Services",
    prompt: "A team keeps its operations unchanged but wants to offer them over a second protocol. Which WSDL element changes?",
    options: ["Types", "Message", "Port type", "Binding"],
    answer: 3,
    explanation: "The binding attaches a concrete protocol and data format to an existing abstract port type, so abstract definitions can be reused.",
  },
  {
    id: "uddi-discovery",
    moduleId: "m3-2",
    category: "Web Services",
    prompt: "A client application must find out at run time which businesses offer a shipping service. Which technology answers that?",
    options: ["SOAP", "WSDL", "UDDI", "XSLT"],
    answer: 2,
    explanation: "UDDI provides a repository of web service descriptions that can be searched on various criteria to find offered services.",
  },
  {
    id: "eai-model-point-to-point",
    moduleId: "m5-1",
    category: "Integration",
    prompt: "A company wrote a custom script for every pair of applications and now cannot maintain the dependencies. Which model did it use?",
    options: ["Bus integration", "Point-to-point integration", "Hub-and-spoke integration", "Microservice integration"],
    answer: 1,
    explanation: "Point-to-point works for a few applications, but the number of dependencies to program and maintain grows quickly.",
  },
  {
    id: "eai-level-data",
    moduleId: "m5-1",
    category: "Integration",
    prompt: "A team copies and reformats records between two databases without touching either application's code. Which EAI type is this?",
    options: ["Data-level EAI", "Method level EAI", "Application interface level EAI", "User interface level EAI"],
    answer: 0,
    explanation: "Data-level EAI moves and reformats data between data stores, and it is the cheapest because no application code is changed, tested, or redeployed.",
  },
  {
    id: "eai-level-ui",
    moduleId: "m5-1",
    category: "Integration",
    prompt: "A mainframe application exposes no database or process-level access, so architects drive it through its screens. Which EAI type is this?",
    options: ["Data-level EAI", "Application interface level EAI", "User interface level EAI", "Method level EAI"],
    answer: 2,
    explanation: "User interface level EAI is the most primitive option and is used only when the application offers no other point of integration.",
  },
  {
    id: "middleware-position",
    moduleId: "m5-2",
    category: "Middleware",
    prompt: "Where does middleware sit in a distributed system?",
    options: ["Inside the database engine", "Between application programs and the operating system and base networking", "Between the user and the keyboard", "Inside the client browser only"],
    answer: 1,
    explanation: "Middleware is the software between the application programs and the operating system and base networking, providing higher-level distributed computing capabilities.",
  },
  {
    id: "middleware-type-transactional",
    moduleId: "m5-2",
    category: "Middleware",
    prompt: "A payment flow must move safely from one phase to the next under transaction process monitoring. Which middleware type fits?",
    options: ["Content-centric middleware", "Embedded middleware", "Transactional middleware", "Database middleware"],
    answer: 2,
    explanation: "Transactional middleware ensures transactions move from one phase to the next through transaction process monitoring.",
  },
  {
    id: "middleware-category-platform",
    moduleId: "m5-2",
    category: "Middleware",
    prompt: "A team needs a runtime hosting environment, such as a container, for its application program logic. Which middleware category is that?",
    options: ["Platform middleware", "Enterprise application integration middleware", "Messaging middleware", "Object middleware"],
    answer: 0,
    explanation: "Platform middleware supports software development and delivery by providing a runtime hosting environment, including application and web servers.",
  },
  {
    id: "cloud-characteristic-elasticity",
    moduleId: "m5-3",
    category: "Cloud",
    prompt: "A service must expand during enrollment week and shrink afterward, at any time. Which essential characteristic is this?",
    options: ["Measured service", "Rapid elasticity", "Resource pooling", "Broad network access"],
    answer: 1,
    explanation: "Rapid elasticity is the ability to quickly scale a service in or out with demand, at any time.",
  },
  {
    id: "cloud-deployment-community",
    moduleId: "m5-3",
    category: "Cloud",
    prompt: "Several government agencies in one state share infrastructure because they have the same mission and security requirements. Which deployment model is this?",
    options: ["Public cloud", "Private cloud", "Community cloud", "Hybrid cloud"],
    answer: 2,
    explanation: "A community cloud is shared among organizations with similar interests and requirements such as mission, security, or policy.",
  },
  {
    id: "cloud-actor-carrier",
    moduleId: "m5-3",
    category: "Cloud",
    prompt: "Which actor provides the connectivity and transport of cloud services from providers to consumers?",
    options: ["Cloud broker", "Cloud auditor", "Cloud carrier", "Cloud provider"],
    answer: 2,
    explanation: "The cloud carrier is the intermediary that provides connectivity and transport of cloud services between providers and consumers.",
  },
];

// Offer a repeatable four-pass approach for beginners.
const studySteps = [
  {
    title: "1. Orient",
    text: "Read the beginner explanation and example before memorizing terminology.",
  },
  {
    title: "2. Connect",
    text: "Use comparisons, flows, the blueprint, and the model lens to connect ideas.",
  },
  {
    title: "3. Retrieve",
    text: "Flip flashcards and explain the answer aloud before revealing it.",
  },
  {
    title: "4. Apply",
    text: "Complete scenarios and module tests, then revisit weak topics.",
  },
];

// List the primary standards behind the course material so claims can be checked at source.
const references = [
  {
    id: "ref-oasis-soa-rm",
    moduleId: "m2-1",
    title: "Reference Model for Service Oriented Architecture 1.0",
    publisher: "OASIS Standard, 12 October 2006",
    note: "Defines a service as a mechanism enabling access to capabilities through a prescribed interface, and SOA as a paradigm for organizing distributed capabilities.",
    url: "https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.html",
  },
  {
    id: "ref-xml",
    moduleId: "m3-1",
    title: "Extensible Markup Language (XML) 1.0 (Fifth Edition)",
    publisher: "W3C Recommendation, 26 November 2008",
    note: "The normative source for XML syntax and the well-formedness constraints used in this module.",
    url: "https://www.w3.org/TR/xml/",
  },
  {
    id: "ref-json",
    moduleId: "m3-1",
    title: "RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format",
    publisher: "IETF Internet Standard STD 90, December 2017",
    note: "The current JSON standard. It obsoletes RFC 7159, which the course slides cite, so quote RFC 8259 in new work.",
    url: "https://www.rfc-editor.org/info/rfc8259",
  },
  {
    id: "ref-soap",
    moduleId: "m3-2",
    title: "SOAP Version 1.2 Part 1: Messaging Framework (Second Edition)",
    publisher: "W3C Recommendation, 27 April 2007",
    note: "Confirms the Envelope, optional Header, and mandatory Body structure, and states that SOAP is no longer an acronym.",
    url: "https://www.w3.org/TR/soap12-part1/",
  },
  {
    id: "ref-wsdl",
    moduleId: "m3-2",
    title: "Web Services Description Language (WSDL) 1.1",
    publisher: "W3C Note, 15 March 2001",
    note: "Source of the types, message, operation, port type, binding, port, and service definitions used in this module.",
    url: "https://www.w3.org/TR/2001/NOTE-wsdl-20010315",
  },
  {
    id: "ref-nist-800-145",
    moduleId: "m5-3",
    title: "NIST SP 800-145 — The NIST Definition of Cloud Computing",
    publisher: "NIST, September 2011",
    note: "The source of the five essential characteristics, three service models, and four deployment models.",
    url: "https://csrc.nist.gov/pubs/sp/800/145/final",
  },
  {
    id: "ref-nist-500-292",
    moduleId: "m5-3",
    title: "NIST SP 500-292 — NIST Cloud Computing Reference Architecture",
    publisher: "NIST, September 2011",
    note: "The source of the five cloud actors: consumer, provider, auditor, broker, and carrier.",
    url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-292.pdf",
  },
  {
    id: "ref-iso-21502",
    moduleId: "m2-3",
    title: "ISO 21502:2020 — Project, programme and portfolio management: Guidance on project management",
    publisher: "International Organization for Standardization, December 2020",
    note: "The current international guidance on project management practices, superseding the withdrawn ISO 21500:2012 guidance edition.",
    url: "https://www.iso.org/standard/74947.html",
  },
  {
    id: "ref-pmi-standards",
    moduleId: "m2-3",
    title: "PMI Standards and Publications",
    publisher: "Project Management Institute",
    note: "Source for the five process groups and for the performance domains introduced in the seventh edition of the PMBOK Guide.",
    url: "https://www.pmi.org/standards",
  },
  {
    id: "ref-adr",
    moduleId: "m2-3",
    title: "Architecture Decision Records",
    publisher: "adr.github.io",
    note: "The reference collection of ADR formats and the supersede-rather-than-edit convention used in this module.",
    url: "https://adr.github.io/",
  },
  {
    id: "ref-c4",
    moduleId: "m2-3",
    title: "The C4 model for visualising software architecture",
    publisher: "c4model.com",
    note: "Defines the four zoom levels — system context, container, component, and code — used for pitching a diagram consistently.",
    url: "https://c4model.com/",
  },
  {
    id: "ref-xsd",
    moduleId: "m3-3",
    title: "W3C XML Schema Definition Language (XSD) 1.1 Part 1: Structures",
    publisher: "W3C Recommendation, 5 April 2012",
    note: "The normative source for complex types, cardinality via minOccurs and maxOccurs, and namespace-aware validation.",
    url: "https://www.w3.org/TR/xmlschema11-1/",
  },
  {
    id: "ref-xpath",
    moduleId: "m3-3",
    title: "XML Path Language (XPath) 3.1",
    publisher: "W3C Recommendation, 21 March 2017",
    note: "The current XPath specification, defining the axes and expression syntax used for addressing nodes.",
    url: "https://www.w3.org/TR/xpath-31/",
  },
  {
    id: "ref-xxe",
    moduleId: "m3-3",
    title: "XML External Entity Prevention Cheat Sheet",
    publisher: "OWASP",
    note: "Per-parser configuration for disabling DOCTYPE and external entity resolution, the fix applied in this module.",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html",
  },
  {
    id: "ref-iso-25010",
    moduleId: "m4-1",
    title: "ISO/IEC 25010:2023 — Systems and software Quality Requirements and Evaluation (SQuaRE): Product quality model",
    publisher: "International Organization for Standardization, November 2023",
    note: "Places performance efficiency among the product quality characteristics that testing is meant to evidence.",
    url: "https://www.iso.org/standard/78176.html",
  },
  {
    id: "ref-jmeter",
    moduleId: "m4-1",
    title: "Apache JMeter User Manual",
    publisher: "The Apache Software Foundation",
    note: "Reference for thread groups, ramp-up, think time, and the listeners that report percentile latency.",
    url: "https://jmeter.apache.org/usermanual/index.html",
  },
  {
    id: "ref-sre-slo",
    moduleId: "m4-1",
    title: "Site Reliability Engineering — Service Level Objectives",
    publisher: "Google",
    note: "The source of the SLI, SLO, and error budget model used to turn reliability targets into a prioritisation rule.",
    url: "https://sre.google/sre-book/service-level-objectives/",
  },
  {
    id: "ref-rfc9110",
    moduleId: "m5-4",
    title: "RFC 9110 — HTTP Semantics",
    publisher: "IETF Internet Standard STD 97, June 2022",
    note: "The current normative source for which HTTP methods are safe and which are idempotent. It obsoletes RFC 7231.",
    url: "https://www.rfc-editor.org/info/rfc9110",
  },
  {
    id: "ref-openapi",
    moduleId: "m5-4",
    title: "OpenAPI Specification",
    publisher: "OpenAPI Initiative, Linux Foundation",
    note: "The machine-readable description format used to publish a REST contract for documentation, clients, and tests.",
    url: "https://spec.openapis.org/oas/latest.html",
  },
  {
    id: "ref-graphql",
    moduleId: "m5-4",
    title: "GraphQL Specification",
    publisher: "GraphQL Foundation",
    note: "Defines the type system, query language, and execution model behind the single-endpoint field selection shown in this module.",
    url: "https://spec.graphql.org/",
  },
  {
    id: "ref-rfc6749",
    moduleId: "m5-4",
    title: "RFC 6749 — The OAuth 2.0 Authorization Framework",
    publisher: "IETF, October 2012",
    note: "Establishes that OAuth 2.0 governs delegated authorisation, which is why a valid token is not by itself permission.",
    url: "https://www.rfc-editor.org/info/rfc6749",
  },
  {
    id: "ref-rfc7519",
    moduleId: "m5-4",
    title: "RFC 7519 — JSON Web Token (JWT)",
    publisher: "IETF, May 2015",
    note: "Defines the compact claims token used as a bearer credential, and the signature verification that precedes authorisation.",
    url: "https://www.rfc-editor.org/info/rfc7519",
  },
  {
    id: "ref-nist-sp800-52",
    moduleId: "m6-1",
    title: "NIST SP 800-52 Rev. 2 — Guidelines for the Selection, Configuration, and Use of TLS Implementations",
    publisher: "NIST, August 2019",
    note: "Federal guidance on TLS configuration, relevant where a reverse proxy terminates TLS ahead of the logic tier.",
    url: "https://csrc.nist.gov/pubs/sp/800/52/r2/final",
  },
];

// Publish one stable global contract for the HTML and JSX consumers.
const reviewerData = {
  course,
  termsPerModule: TERMS_PER_MODULE,
  modules,
  topics,
  glossary,
  glossaryEntries,
  flashcards,
  practiceTests,
  blueprintStages,
  modelLayers,
  scenarios,
  studySteps,
  references,
};

// Make the shared data discoverable in classic scripts, React imports, and diagnostics.
globalThis.reviewerData = reviewerData;

// Close the private data scope after publishing the single supported global contract.
})();
