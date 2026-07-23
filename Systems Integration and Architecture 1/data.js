/**
 * Shared learning content for the Systems Integration and Architecture 1 reviewer.
 *
 * The file intentionally uses classic JavaScript instead of ES module exports so
 * it can be loaded directly by index.html and imported for side effects by the
 * optional React component.
 */

// Describe the course and the exact module boundary represented by this reviewer.
const course = {
  id: "sia1",
  title: "Systems Integration and Architecture 1",
  shortTitle: "SIA 1",
  moduleLabel: "Module 1",
  description:
    "A beginner-friendly guide to enterprise information architecture, IT governance, and information and data modelling.",
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
];

// Store exactly sixty concise glossary entries in module order.
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
];

// Convert the first fifty-four glossary entries into predictable flashcards.
const flashcards = glossary.slice(0, 54).map(([term, definition], index) => ({
  topic: modules[Math.min(Math.floor(index / 20), modules.length - 1)].title,
  front: `What is ${term}?`,
  back: definition,
}));

/**
 * Build a twenty-question definition test from one module glossary segment.
 * Distractors remain inside the same module so every option is plausible.
 */
function buildQuestionSet(entries, moduleIndex) {
  return entries.map(([term, definition], questionIndex) => {
    const distractorOffsets = [3, 7, 11];
    const distractors = distractorOffsets.map(
      (offset) => entries[(questionIndex + offset) % entries.length][1]
    );
    const answer = (questionIndex + moduleIndex) % 4;
    const options = [...distractors];
    options.splice(answer, 0, definition);
    return {
      q: `Which description best matches “${term}”?`,
      options,
      answer,
      explain: `${term}: ${definition}`,
    };
  });
}

// Produce exactly three tests with exactly twenty questions per test.
const practiceTests = modules.map((module, moduleIndex) => {
  const entries = glossary.slice(moduleIndex * 20, moduleIndex * 20 + 20);
  return {
    title: `${module.label} Practice: ${module.title}`,
    description: `Twenty beginner-friendly questions covering Module ${module.label}.`,
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

// Publish one stable global contract for the HTML and JSX consumers.
const reviewerData = {
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

// Make the shared data discoverable in classic scripts, React imports, and diagnostics.
globalThis.reviewerData = reviewerData;
