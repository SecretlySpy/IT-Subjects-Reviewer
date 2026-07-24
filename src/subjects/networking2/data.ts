import { SubjectMeta, Topic, Flashcard, Question, GlossaryTerm } from '@/types/study';
import { tokens } from '@/design-system/tokens';

export const subjectMeta: SubjectMeta = {
  id: 'networking2',
  title: 'Networking 2: Advanced Routing & Switching',
  shortTitle: 'Networking 2',
  description: 'Deep dive into TCP/IP reliability, advanced routing protocols, VLANs, and wide area networks.',
  accent: tokens.colors.subject.networking2,
  topicCount: 4,
  estimatedHours: 12,
};

export const topics: Topic[] = [
  {
    id: 'networking2-tcp-reliability',
    subjectId: 'networking2',
    title: 'TCP Reliability Mechanisms',
    order: 1,
    estimatedMinutes: 45,
    professorMode: {
      eli5: 'TCP is like sending a registered letter. If the post office loses it, the sender knows and sends another copy until they get a signature proving it arrived.',
      deepDive: 'Transmission Control Protocol (TCP) ensures reliable delivery of byte streams over an unreliable network (IP). It achieves this via sequence numbers, acknowledgments (ACKs), and timers. When a sender transmits a segment, it starts a retransmission timer. If an ACK isn\'t received before the timer expires, TCP retransmits the segment. TCP also uses flow control (sliding windows) to prevent receiver buffer overflow, and congestion control algorithms (like slow start and congestion avoidance) to prevent overwhelming the network path.',
      analogy: 'Imagine a factory shipping numbered boxes to a warehouse. The warehouse manager calls back to confirm receipt of box 1, then box 2. If the factory doesn\'t get a call for box 3 after a while, they send box 3 again.',
      visualAidType: 'diagram',
      visualAidData: { 
        type: 'tcp-handshake',
        steps: ['SYN', 'SYN-ACK', 'ACK'] 
      }
    },
    relatedTermIds: ['term-tcp', 'term-ack', 'term-sliding-window'],
    tags: ['transport-layer', 'tcp', 'reliability']
  },
  {
    id: 'networking2-ospf',
    subjectId: 'networking2',
    title: 'OSPF Routing Protocol',
    order: 2,
    estimatedMinutes: 60,
    professorMode: {
      eli5: 'OSPF is like a group of mapmakers sharing their local drawings so everyone can build a complete, identical map of the whole country and find the shortest path anywhere.',
      deepDive: 'Open Shortest Path First (OSPF) is a link-state routing protocol used within an Autonomous System (IGP). Routers exchange Link-State Advertisements (LSAs) to build an identical Link-State Database (LSDB). It then runs the Dijkstra Shortest Path First (SPF) algorithm to calculate the best route to all known destinations. OSPF uses areas (with Area 0 as the backbone) to create a hierarchical structure, reducing routing table sizes and limiting the impact of topology changes.',
      analogy: 'Think of GPS navigation. Every router has the full map (LSDB) and independently calculates the fastest route based on road speed limits (cost metric) to reach the destination.',
      visualAidType: 'diagram',
      visualAidData: {
        type: 'ospf-areas',
        areas: ['Area 0', 'Area 1', 'Area 2']
      }
    },
    relatedTermIds: ['term-ospf', 'term-lsa', 'term-dijkstra'],
    tags: ['routing', 'ospf', 'network-layer']
  },
  {
    id: 'networking2-vlans',
    subjectId: 'networking2',
    title: 'VLANs and Trunking',
    order: 3,
    estimatedMinutes: 40,
    professorMode: {
      eli5: 'VLANs act like invisible walls inside a single physical switch, creating separate mini-switches. Trunking is a special cable that carries traffic for all these mini-switches between buildings using color-coded tags.',
      deepDive: 'A Virtual Local Area Network (VLAN) logically segments a broadcast domain at Layer 2. Devices in different VLANs cannot communicate without a Layer 3 device (router/L3 switch). IEEE 802.1Q trunking allows multiple VLANs to traverse a single physical link by inserting a 4-byte tag into the Ethernet frame header containing the VLAN ID (VID). The Native VLAN remains untagged on a trunk.',
      analogy: 'Imagine a high-rise office building sharing one elevator shaft (the trunk). Employees wear different colored badges (VLAN tags) so the elevator drops them only on the floors belonging to their department.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['Concept', 'Layer', 'Standard'],
        rows: [
          ['VLAN', 'Layer 2', '802.1Q'],
          ['Trunking', 'Layer 2', '802.1Q']
        ]
      }
    },
    relatedTermIds: ['term-vlan', 'term-8021q', 'term-trunk'],
    tags: ['switching', 'vlan', 'data-link']
  },
  {
    id: 'networking2-subnetting',
    subjectId: 'networking2',
    title: 'Advanced IPv4 Subnetting (VLSM)',
    order: 4,
    estimatedMinutes: 90,
    professorMode: {
      eli5: 'VLSM is like slicing a pizza into different sized pieces based on how hungry each person is, rather than cutting all pieces exactly the same size, which wastes food.',
      deepDive: 'Variable Length Subnet Masking (VLSM) allows network administrators to divide an IP address space into subnets of different sizes, optimizing IP allocation. Instead of using a fixed subnet mask for all subnets (classful routing), VLSM allows routing protocols (like OSPF or EIGRP) to carry subnet mask information. To design a VLSM network, you sort the required subnets by size descending, then allocate the largest block first from the available address space.',
      analogy: 'Think of assigning office spaces in a building. The marketing team of 50 gets a large hall (/26), while the IT team of 2 gets a small closet (/30). VLSM prevents wasting a 50-person hall on a 2-person team.',
      visualAidType: 'table',
      visualAidData: {
        headers: ['CIDR', 'Usable Hosts', 'Subnet Mask'],
        rows: [
          ['/24', '254', '255.255.255.0'],
          ['/26', '62', '255.255.255.192'],
          ['/30', '2', '255.255.255.252']
        ]
      }
    },
    relatedTermIds: ['term-vlsm', 'term-cidr', 'term-subnet'],
    tags: ['ip', 'subnetting', 'network-layer']
  }
];

export const glossary: GlossaryTerm[] = [
  { id: 'term-tcp', term: 'TCP', definition: 'Transmission Control Protocol. A connection-oriented, reliable transport layer protocol.', topicIds: ['networking2-tcp-reliability'] },
  { id: 'term-ack', term: 'Acknowledgment (ACK)', definition: 'A message confirming receipt of data.', topicIds: ['networking2-tcp-reliability'] },
  { id: 'term-sliding-window', term: 'Sliding Window', definition: 'A mechanism in TCP for flow control, dictating how much unacknowledged data can be in transit.', topicIds: ['networking2-tcp-reliability'] },
  { id: 'term-ospf', term: 'OSPF', definition: 'Open Shortest Path First. An interior gateway routing protocol that uses link-state logic.', topicIds: ['networking2-ospf'] },
  { id: 'term-lsa', term: 'LSA', definition: 'Link-State Advertisement. Packets used by OSPF to share routing topology.', topicIds: ['networking2-ospf'] },
  { id: 'term-dijkstra', term: 'Dijkstra\'s Algorithm', definition: 'The algorithm used by link-state protocols to find the shortest path.', topicIds: ['networking2-ospf'] },
  { id: 'term-vlan', term: 'VLAN', definition: 'Virtual Local Area Network. Logically separates broadcast domains on a switch.', topicIds: ['networking2-vlans'] },
  { id: 'term-8021q', term: 'IEEE 802.1Q', definition: 'The standard for VLAN tagging on trunk links.', topicIds: ['networking2-vlans'] },
  { id: 'term-trunk', term: 'Trunk Port', definition: 'A switch port configured to carry traffic for multiple VLANs.', topicIds: ['networking2-vlans'] },
  { id: 'term-vlsm', term: 'VLSM', definition: 'Variable Length Subnet Masking. Allocating IP subnets of different sizes.', topicIds: ['networking2-subnetting'] },
  { id: 'term-cidr', term: 'CIDR', definition: 'Classless Inter-Domain Routing. Representing IP networks with a slash (e.g., /24).', topicIds: ['networking2-subnetting'] },
  { id: 'term-subnet', term: 'Subnet Mask', definition: 'A 32-bit number distinguishing the network and host portions of an IP address.', topicIds: ['networking2-subnetting'] }
];

export const flashcards: Flashcard[] = [
  {
    id: 'fc-net2-01',
    topicId: 'networking2-tcp-reliability',
    front: 'What TCP mechanism ensures that a sender does not overwhelm a receiver\'s buffer?',
    back: 'Flow Control (specifically, the Sliding Window mechanism).',
    tags: ['tcp'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-net2-02',
    topicId: 'networking2-tcp-reliability',
    front: 'If a TCP sender does not receive an ACK before the timer expires, what happens?',
    back: 'The sender retransmits the unacknowledged segment.',
    tags: ['tcp'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-net2-03',
    topicId: 'networking2-ospf',
    front: 'What algorithm does OSPF use to calculate the best route?',
    back: 'Dijkstra\'s Shortest Path First (SPF) algorithm.',
    tags: ['ospf'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-net2-04',
    topicId: 'networking2-ospf',
    front: 'What is the purpose of Area 0 in OSPF?',
    back: 'Area 0 is the backbone area. All other areas must connect to it to share routing information.',
    tags: ['ospf'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-net2-05',
    topicId: 'networking2-vlans',
    front: 'At which OSI layer do VLANs operate?',
    back: 'Layer 2 (Data Link Layer).',
    tags: ['vlan'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-net2-06',
    topicId: 'networking2-vlans',
    front: 'How many bytes does an 802.1Q tag add to an Ethernet frame?',
    back: '4 bytes.',
    tags: ['vlan'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-net2-07',
    topicId: 'networking2-subnetting',
    front: 'What is the primary benefit of using VLSM over classful subnetting?',
    back: 'It prevents the waste of IP addresses by allowing subnets to be sized precisely to their requirements.',
    tags: ['ip'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  },
  {
    id: 'fc-net2-08',
    topicId: 'networking2-subnetting',
    front: 'How many usable host IP addresses are in a /30 subnet?',
    back: '2 usable hosts (out of 4 total IPs in the block).',
    tags: ['ip'],
    easeFactor: 2.5, interval: 0, repetitions: 0, nextReview: 0, masteryLevel: 'new'
  }
];

export const questions: Question[] = [
  {
    id: 'q-net2-01',
    topicId: 'networking2-tcp-reliability',
    difficulty: 3,
    type: 'mcq',
    stem: 'Which of the following is true regarding TCP congestion control?',
    options: [
      'It relies purely on the receiver\'s advertised window size.',
      'It uses algorithms like Slow Start to probe the network\'s capacity.',
      'It drops packets to inform the sender to slow down.',
      'It operates strictly at Layer 2 of the OSI model.'
    ],
    correct: [1],
    explanation: 'TCP congestion control (e.g. Slow Start, Congestion Avoidance) actively probes the network capacity to prevent overwhelming intermediate routers, whereas the advertised window is strictly for receiver flow control.',
    adaptiveWeight: 1.5
  },
  {
    id: 'q-net2-02',
    topicId: 'networking2-ospf',
    difficulty: 4,
    type: 'mcq',
    stem: 'In a multi-access OSPF network, why is a Designated Router (DR) elected?',
    options: [
      'To provide the shortest path to the Internet.',
      'To reduce the number of LSA floods between all routers on the segment.',
      'To securely encrypt OSPF hellos.',
      'To convert OSPF routes into BGP routes.'
    ],
    correct: [1],
    explanation: 'Without a DR, every router would form an adjacency with every other router, causing a massive flood of LSAs (n * (n-1) / 2). The DR acts as a central point of exchange.',
    adaptiveWeight: 2
  },
  {
    id: 'q-net2-03',
    topicId: 'networking2-vlans',
    difficulty: 2,
    type: 'mcq',
    stem: 'What happens to a frame belonging to the Native VLAN when it crosses an 802.1Q trunk?',
    options: [
      'It is encrypted for security.',
      'It is dropped by default.',
      'It receives a priority tag of 0.',
      'It remains untagged.'
    ],
    correct: [3],
    explanation: 'By standard 802.1Q design, the Native VLAN (usually VLAN 1 by default) is sent across trunk links untagged.',
    adaptiveWeight: 1
  },
  {
    id: 'q-net2-04',
    topicId: 'networking2-subnetting',
    difficulty: 5,
    type: 'scenario',
    stem: 'You have the network block 192.168.1.0/24. You need subnets for 60 hosts, 25 hosts, and two point-to-point links (2 hosts each). If you use VLSM and allocate the largest blocks first, what is the network address for the 25-host subnet?',
    options: [
      '192.168.1.0',
      '192.168.1.64',
      '192.168.1.128',
      '192.168.1.192'
    ],
    correct: [1],
    explanation: 'The 60 host subnet requires a /26 block (64 IPs). We allocate 192.168.1.0/26. The next available block starts at 192.168.1.64. The 25 host subnet requires a /27 block (32 IPs), so its network address is 192.168.1.64/27.',
    adaptiveWeight: 3
  }
];
