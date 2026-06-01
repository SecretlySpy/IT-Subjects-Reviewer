const topics = [
      {
            "id": "intro",
            "unit": "1.1",
            "title": "Computer Networks and the Internet",
            "color": "blue",
            "subtitle": "Network edge, access networks, core packet switching, performance, protocols, and layering.",
            "beginner": "The Internet is a network of networks where end systems exchange packets through access networks, ISPs, switches, and routers.",
            "terms": [
                  "Host",
                  "End system",
                  "Packet",
                  "Packet switch",
                  "Router",
                  "Link-layer switch",
                  "Communication link",
                  "Access network",
                  "ISP",
                  "Protocol",
                  "RFC",
                  "IETF",
                  "Packet switching",
                  "Circuit switching",
                  "Delay",
                  "Loss",
                  "Throughput",
                  "Bandwidth",
                  "Encapsulation",
                  "Internet stack"
            ],
            "keyPoints": [
                  "The Internet is a network of networks, not one single machine or cable.",
                  "End systems create and consume data, while packet switches move that data through the core.",
                  "Packet switching lets many users share links efficiently, but delay and loss can happen.",
                  "Protocols standardize communication so devices from different vendors can interoperate.",
                  "Layering keeps networking manageable by assigning clear responsibilities to each layer."
            ],
            "compare": {
                  "headers": [
                        "Concept",
                        "Simple meaning",
                        "Why it matters"
                  ],
                  "rows": [
                        [
                              "Packet switching",
                              "Users share links by sending chunks.",
                              "Efficient for bursty Internet traffic."
                        ],
                        [
                              "Circuit switching",
                              "Resources are reserved first.",
                              "Useful conceptually but wasteful when idle."
                        ],
                        [
                              "Throughput vs bandwidth",
                              "Actual rate vs maximum rate.",
                              "Explains why real downloads are slower than link speed."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Create",
                        "An application creates data."
                  ],
                  [
                        "Segment",
                        "Data is split into packets."
                  ],
                  [
                        "Forward",
                        "Switches and routers move packets."
                  ],
                  [
                        "Queue",
                        "Packets may wait when links are busy."
                  ],
                  [
                        "Deliver",
                        "The receiver reconstructs the data."
                  ]
            ]
      },
      {
            "id": "application",
            "unit": "1.2",
            "title": "Application Layer Protocols and Services",
            "color": "rose",
            "subtitle": "Client-server, P2P, sockets, HTTP, DNS, email, video streaming, and content delivery networks.",
            "beginner": "This layer defines the messages and rules used by networked applications before transport, network, and link layers carry the data.",
            "terms": [
                  "Application layer",
                  "Process",
                  "Socket",
                  "Client-server",
                  "Peer-to-peer",
                  "HTTP",
                  "Persistent HTTP",
                  "Cookie",
                  "Web cache",
                  "DNS",
                  "DNS resolver",
                  "Authoritative DNS",
                  "SMTP",
                  "IMAP",
                  "POP3",
                  "CDN",
                  "DASH",
                  "RTP",
                  "API",
                  "Port number"
            ],
            "keyPoints": [
                  "Application protocols define message types, syntax, semantics, and timing.",
                  "Sockets are APIs that let application processes use transport services such as TCP or UDP.",
                  "DNS maps human-friendly names to resource records such as IP addresses, while recursive resolvers and authoritative servers divide the work.",
                  "HTTP is stateless at its core, but cookies and application sessions let sites connect separate requests.",
                  "CDNs and caches reduce latency and backbone traffic by serving reusable content from locations closer to users."
            ],
            "compare": {
                  "headers": [
                        "Item",
                        "Role",
                        "Example"
                  ],
                  "rows": [
                        [
                              "HTTP",
                              "Transfers web objects.",
                              "Browser loads a page."
                        ],
                        [
                              "DNS",
                              "Maps names to addresses.",
                              "example.com becomes an IP address."
                        ],
                        [
                              "CDN",
                              "Places content close to users.",
                              "Video served from a nearby node."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Name",
                        "Client asks DNS for an IP."
                  ],
                  [
                        "Connect",
                        "App opens a socket."
                  ],
                  [
                        "Request",
                        "Client sends an app message."
                  ],
                  [
                        "Process",
                        "Server prepares a response."
                  ],
                  [
                        "Deliver",
                        "Content reaches the application."
                  ]
            ]
      },
      {
            "id": "transport",
            "unit": "2.1A",
            "title": "Transport Layer Fundamentals",
            "color": "green",
            "subtitle": "Process-to-process delivery, ports, multiplexing, demultiplexing, TCP, and UDP.",
            "beginner": "The transport layer identifies the right application process with ports and, depending on protocol, may add reliability, ordering, and flow control.",
            "terms": [
                  "Transport layer",
                  "Segment",
                  "Multiplexing",
                  "Demultiplexing",
                  "Port",
                  "Socket pair",
                  "UDP",
                  "TCP",
                  "Checksum",
                  "Best effort",
                  "Connection-oriented",
                  "Three-way handshake",
                  "Flow control",
                  "Receive buffer",
                  "Congestion control",
                  "MSS",
                  "MTU",
                  "Sequence number",
                  "Acknowledgment",
                  "Timeout"
            ],
            "keyPoints": [
                  "Transport protocols use ports to provide process-to-process delivery above IP's host-to-host service.",
                  "Port numbers are essential when many apps run on one host.",
                  "UDP offers minimal, message-oriented transport over IP; delivery, ordering, duplicate protection, and congestion behavior are left to the application or other layers.",
                  "TCP provides reliable, ordered byte-stream delivery with flow control and congestion control.",
                  "TCP can recover from many losses with retransmission, but neither TCP nor UDP can stop the network from dropping packets."
            ],
            "compare": {
                  "headers": [
                        "Feature",
                        "TCP",
                        "UDP"
                  ],
                  "rows": [
                        [
                              "Setup",
                              "Uses a connection handshake.",
                              "No connection setup."
                        ],
                        [
                              "Reliability",
                              "ACKs, ordering, retransmission.",
                              "No built-in delivery, ordering, or duplicate-protection guarantee."
                        ],
                        [
                              "Use case",
                              "Web, files, email.",
                              "DNS, voice, games, streaming."
                        ]
                  ]
            },
            "flow": [
                  [
                        "App data",
                        "Process gives data to transport."
                  ],
                  [
                        "Port",
                        "Header identifies the app."
                  ],
                  [
                        "Segment",
                        "Transport unit is created."
                  ],
                  [
                        "Deliver",
                        "Network carries it."
                  ],
                  [
                        "Demux",
                        "Receiver chooses the socket."
                  ]
            ]
      },
      {
            "id": "reliable_tcp",
            "unit": "2.1B",
            "title": "Reliable Data Transfer and TCP Control",
            "color": "green",
            "subtitle": "rdt principles, pipelining, Go-Back-N, Selective Repeat, TCP reliability, RTT, and congestion algorithms.",
            "beginner": "This topic explains how TCP notices missing data, resends it, and slows down when the network is crowded.",
            "terms": [
                  "Reliable data transfer",
                  "rdt",
                  "Stop-and-wait",
                  "Pipelining",
                  "Sliding window",
                  "Go-Back-N",
                  "Selective Repeat",
                  "Cumulative ACK",
                  "Duplicate ACK",
                  "Fast retransmit",
                  "RTT",
                  "EstimatedRTT",
                  "DevRTT",
                  "TimeoutInterval",
                  "Congestion window",
                  "Slow start",
                  "Congestion avoidance",
                  "Fast recovery",
                  "AIMD",
                  "TCP Reno"
            ],
            "keyPoints": [
                  "Reliable data transfer uses checksums, ACKs, timers, and retransmission.",
                  "Pipelining improves utilization compared with stop-and-wait.",
                  "Go-Back-N is simpler but can retransmit unnecessary packets.",
                  "Selective Repeat is more efficient but requires more receiver buffering and tracking.",
                  "Classic TCP treats timeout loss, duplicate ACK loss, and ECN signals as congestion indicators, then adjusts the congestion window."
            ],
            "compare": {
                  "headers": [
                        "Mechanism",
                        "Core idea",
                        "Tradeoff"
                  ],
                  "rows": [
                        [
                              "Stop-and-wait",
                              "One packet at a time.",
                              "Simple but inefficient."
                        ],
                        [
                              "Go-Back-N",
                              "Retransmit from the missing packet onward.",
                              "Simple but may waste bandwidth."
                        ],
                        [
                              "Selective Repeat",
                              "Retransmit only missing packets.",
                              "Efficient but more complex."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Send window",
                        "Sender transmits allowed data."
                  ],
                  [
                        "ACKs arrive",
                        "Receiver confirms bytes."
                  ],
                  [
                        "Detect gap",
                        "Timeout or duplicate ACKs signal loss."
                  ],
                  [
                        "Retransmit",
                        "Missing data is sent again."
                  ],
                  [
                        "Adjust rate",
                        "TCP changes congestion window."
                  ]
            ]
      },
      {
            "id": "network_data",
            "unit": "2.2A",
            "title": "Network Layer Data Plane",
            "color": "amber",
            "subtitle": "Datagrams, forwarding, router internals, IPv4, IPv6, NAT, DHCP, ICMP, and fragmentation.",
            "beginner": "The network layer forwards datagrams across interconnected networks using IP addressing, routing, and router forwarding tables.",
            "terms": [
                  "Network layer",
                  "Datagram",
                  "Forwarding",
                  "Routing",
                  "Data plane",
                  "Control plane",
                  "Forwarding table",
                  "Longest-prefix match",
                  "Router input port",
                  "Switching fabric",
                  "Router output port",
                  "Queueing",
                  "IPv4",
                  "IPv6",
                  "Subnet",
                  "CIDR",
                  "DHCP",
                  "NAT",
                  "ICMP",
                  "Fragmentation"
            ],
            "keyPoints": [
                  "Forwarding and routing are related but not the same task.",
                  "Routers forward by matching destination IP addresses against prefix entries, selecting the longest matching prefix.",
                  "IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses, a fixed base header, extension headers, and source-only fragmentation.",
                  "DHCP leases IP configuration such as address, subnet mask, default gateway, and DNS server information.",
                  "NAT rewrites address and often port fields so many private hosts can share public IPv4 addresses, while also affecting end-to-end reachability."
            ],
            "compare": {
                  "headers": [
                        "Concept",
                        "Meaning",
                        "Example"
                  ],
                  "rows": [
                        [
                              "Forwarding",
                              "Local packet movement.",
                              "Input port to output port."
                        ],
                        [
                              "Routing",
                              "Path computation.",
                              "OSPF or BGP route choice."
                        ],
                        [
                              "NAT",
                              "Address translation.",
                              "Home devices share one public IP."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Receive",
                        "Router receives datagram."
                  ],
                  [
                        "Lookup",
                        "Destination prefix is matched."
                  ],
                  [
                        "Switch",
                        "Packet crosses switching fabric."
                  ],
                  [
                        "Queue",
                        "Output port may buffer."
                  ],
                  [
                        "Transmit",
                        "Packet leaves the router."
                  ]
            ]
      },
      {
            "id": "routing_algorithms",
            "unit": "3.1",
            "title": "Routing Algorithms and Intra-AS Routing",
            "color": "amber",
            "subtitle": "Link-state, Dijkstra, distance-vector, OSPF, RIP concepts, and routing inside one autonomous system.",
            "beginner": "Routing algorithms are the map-planning rules routers use to decide where packets should go.",
            "terms": [
                  "Routing algorithm",
                  "Link-state",
                  "Dijkstra algorithm",
                  "Distance-vector",
                  "Bellman-Ford",
                  "Routing table",
                  "Link cost",
                  "Convergence",
                  "Count-to-infinity",
                  "Poisoned reverse",
                  "Intra-AS routing",
                  "Autonomous system",
                  "OSPF",
                  "Link-state advertisement",
                  "Area hierarchy",
                  "RIP",
                  "IS-IS",
                  "Equal-cost multipath",
                  "Route recomputation",
                  "Topology database"
            ],
            "keyPoints": [
                  "Link-state routing relies on a broad view of topology.",
                  "Distance-vector routing relies on neighbor-to-neighbor sharing of distance estimates.",
                  "OSPF floods link-state advertisements within an area and computes shortest paths from the link-state database.",
                  "Convergence matters because stale or inconsistent routing information can cause loops, blackholes, or poor paths.",
                  "Hierarchy improves routing scalability in large networks."
            ],
            "compare": {
                  "headers": [
                        "Approach",
                        "Information shared",
                        "Risk"
                  ],
                  "rows": [
                        [
                              "Link-state",
                              "Local link information flooded to all routers.",
                              "More overhead but complete topology view."
                        ],
                        [
                              "Distance-vector",
                              "Distance estimates shared with neighbors.",
                              "Can converge slowly."
                        ],
                        [
                              "OSPF area design",
                              "Summarized information between areas.",
                              "Requires planned hierarchy."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Measure",
                        "Router knows neighbor link costs."
                  ],
                  [
                        "Advertise",
                        "Routing information is shared."
                  ],
                  [
                        "Compute",
                        "Algorithm finds best paths."
                  ],
                  [
                        "Install",
                        "Forwarding table is updated."
                  ],
                  [
                        "Converge",
                        "Routers stabilize after changes."
                  ]
            ]
      },
      {
            "id": "isp_bgp",
            "unit": "3.2",
            "title": "ISP Routing and BGP",
            "color": "amber",
            "subtitle": "Autonomous systems, interdomain routing, eBGP, iBGP, path attributes, policy, and scalable Internet routing.",
            "beginner": "BGP is the Internet's interdomain routing system for advertising reachable prefixes and applying network policy.",
            "terms": [
                  "Inter-AS routing",
                  "BGP",
                  "eBGP",
                  "iBGP",
                  "AS-PATH",
                  "NEXT-HOP",
                  "Prefix",
                  "Reachability",
                  "Routing policy",
                  "Hot-potato routing",
                  "Route advertisement",
                  "Route withdrawal",
                  "Peering",
                  "Transit",
                  "Provider",
                  "Customer",
                  "Local preference",
                  "MED",
                  "Route aggregation",
                  "Gateway router"
            ],
            "keyPoints": [
                  "BGP is path-vector and policy-driven, not a simple shortest-path protocol.",
                  "AS-PATH lists autonomous systems a route advertisement has traversed, helping loop detection and policy decisions.",
                  "eBGP exchanges routes between ASes; iBGP distributes BGP routes inside an AS.",
                  "Business relationships such as customer, provider, and peer affect route export.",
                  "Hot-potato routing may choose a nearby exit even if the remaining external path is longer."
            ],
            "compare": {
                  "headers": [
                        "Item",
                        "Meaning",
                        "Impact"
                  ],
                  "rows": [
                        [
                              "AS-PATH",
                              "List of ASes on the route.",
                              "Helps loop detection and preference."
                        ],
                        [
                              "Local preference",
                              "Internal route priority.",
                              "Implements business policy."
                        ],
                        [
                              "Hot potato",
                              "Nearest AS exit.",
                              "Minimizes internal network cost."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Advertise",
                        "AS announces reachable prefixes."
                  ],
                  [
                        "Filter",
                        "Policy accepts or rejects routes."
                  ],
                  [
                        "Select",
                        "BGP picks best route."
                  ],
                  [
                        "Distribute",
                        "Route spreads through iBGP."
                  ],
                  [
                        "Forward",
                        "Traffic exits through a gateway."
                  ]
            ]
      },
      {
            "id": "network_management",
            "unit": "3.3",
            "title": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "color": "rose",
            "subtitle": "Monitoring, configuration, management architecture, SNMP operations, MIBs, NETCONF, YANG models, and SDN control.",
            "beginner": "Network management is how admins observe, configure, and control many network devices reliably.",
            "terms": [
                  "Network management",
                  "Managing server",
                  "Managed device",
                  "Agent",
                  "MIB",
                  "SNMP",
                  "SNMP Get",
                  "SNMP Set",
                  "SNMP Trap",
                  "OID",
                  "Polling",
                  "Telemetry",
                  "NETCONF",
                  "YANG",
                  "RPC",
                  "Configuration datastore",
                  "Operational state",
                  "SDN",
                  "Controller",
                  "Southbound API"
            ],
            "keyPoints": [
                  "Management systems need both monitoring and configuration capabilities.",
                  "SNMP is common for polling managed objects and receiving asynchronous notifications such as traps.",
                  "NETCONF and YANG provide structured, model-driven configuration.",
                  "SDN centralizes or abstracts control decisions for programmability.",
                  "Operational state and intended configuration are related but not identical."
            ],
            "compare": {
                  "headers": [
                        "Tool",
                        "Main use",
                        "Data style"
                  ],
                  "rows": [
                        [
                              "SNMP",
                              "Monitoring and simple changes.",
                              "MIB variables and OIDs."
                        ],
                        [
                              "NETCONF",
                              "Device configuration.",
                              "Structured XML RPCs."
                        ],
                        [
                              "YANG",
                              "Defines data models.",
                              "Reusable schemas."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Observe",
                        "Manager collects state."
                  ],
                  [
                        "Analyze",
                        "Admin or controller detects need."
                  ],
                  [
                        "Model",
                        "Configuration is represented."
                  ],
                  [
                        "Apply",
                        "Protocol changes device settings."
                  ],
                  [
                        "Verify",
                        "State is checked after change."
                  ]
            ]
      },
      {
            "id": "datalink_control",
            "unit": "4.1",
            "title": "Data Link Layer Control, Packetizing, and Error Detection",
            "color": "blue",
            "subtitle": "Frames, services, packetizing, parity, checksums, CRC, flow control, and multiple access foundations.",
            "beginner": "The data link layer frames a packet for one local hop, controls access to the medium, and often detects bit errors.",
            "terms": [
                  "Data link layer",
                  "Node",
                  "Link",
                  "Frame",
                  "Framing",
                  "Packetizing",
                  "Header",
                  "Trailer",
                  "Error detection",
                  "Parity bit",
                  "Two-dimensional parity",
                  "Checksum",
                  "CRC",
                  "Generator polynomial",
                  "Flow control",
                  "Medium access control",
                  "Broadcast link",
                  "Point-to-point link",
                  "Half-duplex",
                  "Full-duplex"
            ],
            "keyPoints": [
                  "The data link layer is responsible for one-hop delivery, not end-to-end routing.",
                  "Frames add link-layer headers and often trailers for local delivery, framing, and error detection.",
                  "Parity is simple but less powerful than CRC.",
                  "CRC is widely used because it detects many common error patterns.",
                  "Shared media need access rules to coordinate transmitters and reduce collisions, hidden-terminal problems, or unfairness."
            ],
            "compare": {
                  "headers": [
                        "Method",
                        "Strength",
                        "Common idea"
                  ],
                  "rows": [
                        [
                              "Parity",
                              "Simple detection.",
                              "Count ones."
                        ],
                        [
                              "Checksum",
                              "Moderate detection.",
                              "Add data units."
                        ],
                        [
                              "CRC",
                              "Strong detection.",
                              "Polynomial division remainder."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Frame",
                        "Wrap the packet."
                  ],
                  [
                        "Address",
                        "Add local link information."
                  ],
                  [
                        "Transmit",
                        "Send bits over the link."
                  ],
                  [
                        "Check",
                        "Receiver tests error code."
                  ],
                  [
                        "Pass",
                        "Valid payload moves upward."
                  ]
            ]
      },
      {
            "id": "lans_ethernet",
            "unit": "4.2",
            "title": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "color": "green",
            "subtitle": "MAC addresses, ARP, Ethernet frames, switching, learning tables, VLAN segmentation, CSMA/CD, and CSMA/CA.",
            "beginner": "A LAN is your local network, where devices use MAC addresses and switches to deliver frames nearby.",
            "terms": [
                  "LAN",
                  "MAC address",
                  "ARP",
                  "ARP table",
                  "Ethernet",
                  "Ethernet frame",
                  "Preamble",
                  "Type field",
                  "CRC field",
                  "Switch",
                  "MAC learning",
                  "Forwarding table",
                  "Flooding",
                  "Broadcast domain",
                  "Collision domain",
                  "CSMA/CD",
                  "CSMA/CA",
                  "VLAN",
                  "Trunk port",
                  "Access port"
            ],
            "keyPoints": [
                  "MAC addresses are local; IP addresses are used for routing across networks.",
                  "For IPv4 on Ethernet, ARP resolves a next-hop IP address to a local MAC address before frame delivery.",
                  "Switches learn MAC addresses automatically from source addresses.",
                  "VLANs create logical separation without requiring separate physical switches.",
                  "CSMA/CD belongs to half-duplex shared Ethernet; modern switched full-duplex Ethernet does not use it, while Wi-Fi uses collision avoidance."
            ],
            "compare": {
                  "headers": [
                        "Item",
                        "Layer",
                        "Purpose"
                  ],
                  "rows": [
                        [
                              "ARP",
                              "Between network and link.",
                              "Finds a MAC for a local IP."
                        ],
                        [
                              "Switch table",
                              "Link layer.",
                              "Maps MAC addresses to ports."
                        ],
                        [
                              "VLAN tag",
                              "Link layer.",
                              "Marks logical LAN membership."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Need MAC",
                        "Host checks ARP table."
                  ],
                  [
                        "Request",
                        "ARP broadcast asks who has IP."
                  ],
                  [
                        "Reply",
                        "Target sends MAC address."
                  ],
                  [
                        "Frame",
                        "Ethernet frame is built."
                  ],
                  [
                        "Switch",
                        "Switch forwards by MAC."
                  ]
            ]
      },
      {
            "id": "link_virtualization",
            "unit": "4.3",
            "title": "Link Virtualization, MPLS, and Data Center Networks",
            "color": "amber",
            "subtitle": "MPLS labels, label-switched paths, traffic engineering, fast reroute, virtual links, and data-center fabric ideas.",
            "beginner": "MPLS adds short labels so traffic can follow engineered paths through a provider network.",
            "terms": [
                  "Link virtualization",
                  "MPLS",
                  "Label",
                  "Label-switched router",
                  "Label forwarding table",
                  "LSP",
                  "Ingress router",
                  "Egress router",
                  "Traffic engineering",
                  "Fast reroute",
                  "VPN",
                  "Virtual circuit",
                  "Overlay network",
                  "Underlay network",
                  "Data center network",
                  "Top-of-rack switch",
                  "Leaf-spine",
                  "Load balancing",
                  "ECMP",
                  "Fabric"
            ],
            "keyPoints": [
                  "MPLS forwards labeled packets by swapping short, locally significant labels instead of doing an IP longest-prefix lookup at every MPLS hop.",
                  "Labels can support traffic engineering, VPN services, and fast reroute.",
                  "Ingress and egress routers handle label entry and exit at the MPLS edge.",
                  "Data centers need scalable, high-throughput, low-latency fabrics.",
                  "Leaf-spine designs support many parallel paths and load balancing."
            ],
            "compare": {
                  "headers": [
                        "Concept",
                        "Role",
                        "Benefit"
                  ],
                  "rows": [
                        [
                              "MPLS label",
                              "Forwarding identifier.",
                              "Fast path selection."
                        ],
                        [
                              "LSP",
                              "Preplanned label path.",
                              "Traffic engineering."
                        ],
                        [
                              "Leaf-spine",
                              "Data-center topology.",
                              "Scalable parallel paths."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Enter",
                        "Ingress router receives IP packet."
                  ],
                  [
                        "Label",
                        "MPLS label is pushed."
                  ],
                  [
                        "Switch",
                        "LSRs swap labels."
                  ],
                  [
                        "Engineer",
                        "Traffic follows designed path."
                  ],
                  [
                        "Exit",
                        "Egress removes label."
                  ]
            ]
      },
      {
            "id": "wireless_networks",
            "unit": "5.1",
            "title": "Wireless Networks and Wi-Fi",
            "color": "rose",
            "subtitle": "Radio links, infrastructure/ad hoc modes, 802.11, access points, association, CSMA/CA, hidden terminals, and RTS/CTS.",
            "beginner": "Wireless networking sends bits over radio links, so signal strength, noise, interference, and mobility directly affect performance.",
            "terms": [
                  "Wireless host",
                  "Base station",
                  "Access point",
                  "Infrastructure mode",
                  "Ad hoc mode",
                  "Wireless link",
                  "Signal attenuation",
                  "Interference",
                  "Multipath",
                  "SNR",
                  "802.11",
                  "SSID",
                  "Association",
                  "Beacon frame",
                  "CSMA/CA",
                  "RTS",
                  "CTS",
                  "ACK frame",
                  "Hidden terminal",
                  "Channel"
            ],
            "keyPoints": [
                  "Wireless links are affected by distance, obstacles, interference, and multipath.",
                  "Wi-Fi commonly uses infrastructure mode with access points.",
                  "IEEE 802.11 uses CSMA/CA because wireless stations generally cannot reliably detect collisions while transmitting.",
                  "RTS/CTS is an optional reservation exchange that can reduce hidden-terminal collisions at the cost of overhead.",
                  "Association connects a wireless host to a selected AP and SSID."
            ],
            "compare": {
                  "headers": [
                        "Issue",
                        "Why it matters",
                        "Wi-Fi response"
                  ],
                  "rows": [
                        [
                              "Interference",
                              "Signals overlap.",
                              "Use channels and retransmission."
                        ],
                        [
                              "Hidden terminal",
                              "Transmitters cannot hear each other.",
                              "RTS/CTS can help."
                        ],
                        [
                              "Mobility",
                              "Signal quality changes.",
                              "Reassociation may occur."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Scan",
                        "Host listens for beacons."
                  ],
                  [
                        "Choose",
                        "Host selects an SSID/AP."
                  ],
                  [
                        "Associate",
                        "Host joins the AP."
                  ],
                  [
                        "Access",
                        "CSMA/CA waits for medium."
                  ],
                  [
                        "ACK",
                        "Receiver confirms frame."
                  ]
            ]
      },
      {
            "id": "mobile_networks",
            "unit": "5.2",
            "title": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "color": "green",
            "subtitle": "Cellular architecture, UE, radio access, core network, SIM authentication, mobility management, handoff, roaming, and Mobile IP concepts.",
            "beginner": "Mobile networks keep your device connected as it moves between towers and networks.",
            "terms": [
                  "Mobility",
                  "User equipment",
                  "SIM",
                  "Base station",
                  "Cell",
                  "Radio access network",
                  "Core network",
                  "4G LTE",
                  "5G",
                  "MME",
                  "Serving gateway",
                  "PDN gateway",
                  "Handoff",
                  "Roaming",
                  "Home network",
                  "Visited network",
                  "Mobile IP",
                  "Home agent",
                  "Foreign agent",
                  "Tunneling"
            ],
            "keyPoints": [
                  "Mobile means changing network attachment, not simply using wireless.",
                  "Cellular systems manage identity, authentication, location, and handoff.",
                  "Roaming involves cooperation between home and visited networks.",
                  "Mobile IP uses indirection and tunneling to reach a moving host.",
                  "Mobility can affect delay, throughput, and higher-layer connections."
            ],
            "compare": {
                  "headers": [
                        "Concept",
                        "Meaning",
                        "Example"
                  ],
                  "rows": [
                        [
                              "Wireless",
                              "No cable.",
                              "Laptop on Wi-Fi."
                        ],
                        [
                              "Mobile",
                              "Changing attachment.",
                              "Phone moves between cells."
                        ],
                        [
                              "Roaming",
                              "Visited network access.",
                              "Using data abroad."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Attach",
                        "Device connects to a base station."
                  ],
                  [
                        "Authenticate",
                        "Network verifies subscriber."
                  ],
                  [
                        "Anchor",
                        "Core creates data path."
                  ],
                  [
                        "Move",
                        "Signal changes while traveling."
                  ],
                  [
                        "Handoff",
                        "Connection shifts to new cell."
                  ]
            ]
      },
      {
            "id": "security_basics",
            "unit": "6.1 / 6.2",
            "title": "Security Basics, Cryptography, Authentication, and TLS",
            "color": "blue",
            "subtitle": "Confidentiality, integrity, authentication, symmetric/public-key crypto, hashes, MACs, certificates, digital signatures, TLS, and HTTPS.",
            "beginner": "Security protects communication by authenticating parties, keeping data confidential, detecting tampering, and preserving availability.",
            "terms": [
                  "Confidentiality",
                  "Authentication",
                  "Integrity",
                  "Availability",
                  "Encryption",
                  "Decryption",
                  "Symmetric key",
                  "Public key",
                  "Private key",
                  "Hash function",
                  "MAC",
                  "Digital signature",
                  "Certificate",
                  "Certificate authority",
                  "Nonce",
                  "Replay attack",
                  "Man-in-the-middle",
                  "TLS",
                  "HTTPS",
                  "Session key"
            ],
            "keyPoints": [
                  "Confidentiality, authentication, integrity, and availability are core security goals.",
                  "Symmetric crypto is efficient but requires shared secrets.",
                  "Public-key crypto helps solve key distribution and identity verification problems.",
                  "Certificates connect public keys to trusted identities.",
                  "TLS establishes a secure channel with server authentication, key establishment, confidentiality, and integrity protection."
            ],
            "compare": {
                  "headers": [
                        "Tool",
                        "Provides",
                        "Typical use"
                  ],
                  "rows": [
                        [
                              "Encryption",
                              "Confidentiality.",
                              "Hide message contents."
                        ],
                        [
                              "MAC",
                              "Integrity and authentication.",
                              "Check keyed messages."
                        ],
                        [
                              "Certificate",
                              "Identity binding.",
                              "Verify a website public key."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Hello",
                        "Client and server negotiate."
                  ],
                  [
                        "Verify",
                        "Certificate proves identity."
                  ],
                  [
                        "Key",
                        "Session key is established."
                  ],
                  [
                        "Encrypt",
                        "Application data is protected."
                  ],
                  [
                        "Check",
                        "Integrity is verified."
                  ]
            ]
      },
      {
            "id": "ipsec_firewalls",
            "unit": "6.3",
            "title": "Network Layer Security, IPsec, Firewalls, and IDS",
            "color": "green",
            "subtitle": "IPsec architecture, transport and tunnel modes, AH, ESP, security associations, IKE, VPNs, packet filtering, stateful firewalls, and intrusion detection.",
            "beginner": "Network-layer security protects or filters IP traffic before applications see it, commonly through IPsec, VPN gateways, ACLs, firewalls, and IDS tools.",
            "terms": [
                  "Network-layer security",
                  "IPsec",
                  "Security association",
                  "SA database",
                  "SPD",
                  "IKE",
                  "Transport mode",
                  "Tunnel mode",
                  "AH",
                  "ESP",
                  "VPN",
                  "Authentication header",
                  "Encapsulation",
                  "Packet filter",
                  "Stateful firewall",
                  "ACL",
                  "DMZ",
                  "IDS",
                  "Signature detection",
                  "Anomaly detection"
            ],
            "keyPoints": [
                  "IPsec protects IP traffic below the transport layer, so it can secure many applications without changing the applications.",
                  "Tunnel mode is common for VPN gateway-to-gateway or remote-access scenarios.",
                  "AH authenticates and integrity-protects IP packets without encryption; ESP is commonly used when confidentiality is required and can also protect integrity.",
                  "Firewalls enforce traffic policy at network boundaries and hosts.",
                  "IDS tools monitor traffic or hosts for signs of attacks."
            ],
            "compare": {
                  "headers": [
                        "Tool",
                        "Main protection",
                        "Note"
                  ],
                  "rows": [
                        [
                              "AH",
                              "Integrity and authentication.",
                              "No confidentiality."
                        ],
                        [
                              "ESP",
                              "Confidentiality, integrity, authentication.",
                              "Common in VPNs."
                        ],
                        [
                              "Firewall",
                              "Traffic filtering.",
                              "Rules must match policy."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Policy",
                        "SPD decides what to protect."
                  ],
                  [
                        "Negotiate",
                        "IKE creates security association."
                  ],
                  [
                        "Protect",
                        "AH or ESP processes packet."
                  ],
                  [
                        "Tunnel",
                        "Packet may be encapsulated."
                  ],
                  [
                        "Filter",
                        "Firewall or IDS inspects traffic."
                  ]
            ]
      }
];

    const glossary = [
      [
            "Host",
            "A device at the edge of the network that runs applications, such as a phone, laptop, server, or camera."
      ],
      [
            "End system",
            "Another name for a host because it sits at an end of communication and creates or receives data."
      ],
      [
            "Packet",
            "A small chunk of data plus headers that can be forwarded through a network."
      ],
      [
            "Packet switch",
            "A device that receives packets and forwards them toward a destination."
      ],
      [
            "Router",
            "A packet switch that forwards network-layer datagrams between networks using IP information."
      ],
      [
            "Link-layer switch",
            "A local packet switch that forwards frames inside a LAN using MAC addresses."
      ],
      [
            "Communication link",
            "The physical or wireless path that carries bits between devices."
      ],
      [
            "Access network",
            "The part of the network that connects end systems to the first router."
      ],
      [
            "ISP",
            "An Internet Service Provider that connects customers and other networks to the Internet."
      ],
      [
            "Protocol",
            "A rule set defining message format, message order, and actions when messages are sent or received."
      ],
      [
            "RFC",
            "A Request for Comments document that records Internet standards and protocol specifications."
      ],
      [
            "IETF",
            "The standards organization that develops many Internet protocols through RFCs."
      ],
      [
            "Packet switching",
            "A sharing method where packets from many users take turns using links."
      ],
      [
            "Circuit switching",
            "A communication method that reserves end-to-end resources before data is sent."
      ],
      [
            "Delay",
            "The time it takes data to travel from sender to receiver."
      ],
      [
            "Loss",
            "When packets are dropped because of errors, congestion, or failed paths."
      ],
      [
            "Throughput",
            "The actual rate at which useful data is delivered."
      ],
      [
            "Bandwidth",
            "The maximum transmission rate a link can support."
      ],
      [
            "Encapsulation",
            "The process of wrapping data with headers as it moves down network layers."
      ],
      [
            "Internet stack",
            "The layered model of application, transport, network, link, and physical responsibilities."
      ],
      [
            "Application layer",
            "The top network layer where applications define messages and services."
      ],
      [
            "Process",
            "A running program that sends or receives messages through a socket."
      ],
      [
            "Socket",
            "The software interface between an application process and the transport layer."
      ],
      [
            "Client-server",
            "An architecture where clients request service from an always-on server."
      ],
      [
            "Peer-to-peer",
            "An architecture where end systems communicate directly and share roles."
      ],
      [
            "HTTP",
            "An application-layer request/response protocol for transferring web resources and API data."
      ],
      [
            "Persistent HTTP",
            "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses."
      ],
      [
            "Cookie",
            "Small data used by websites to maintain state across otherwise stateless HTTP requests."
      ],
      [
            "Web cache",
            "A proxy that stores web objects closer to clients to reduce delay and traffic."
      ],
      [
            "DNS",
            "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME."
      ],
      [
            "DNS resolver",
            "A recursive or caching service that resolves DNS questions on behalf of clients."
      ],
      [
            "Authoritative DNS",
            "A DNS server authoritative for a zone, returning answers from that zone's configured records."
      ],
      [
            "SMTP",
            "The protocol used to send email from clients or mail servers."
      ],
      [
            "IMAP",
            "A mail access protocol that keeps messages synchronized on a server."
      ],
      [
            "POP3",
            "A simple mail access protocol that downloads messages from a server."
      ],
      [
            "CDN",
            "A distributed content system that serves cached or replicated objects from locations closer to users."
      ],
      [
            "DASH",
            "Dynamic Adaptive Streaming over HTTP, where a client selects segment bitrates based on current network and playback conditions."
      ],
      [
            "RTP",
            "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams."
      ],
      [
            "API",
            "A defined interface that lets software components request services or data."
      ],
      [
            "Port number",
            "A transport identifier that helps deliver data to the correct application process."
      ],
      [
            "Transport layer",
            "The layer that provides logical communication between application processes."
      ],
      [
            "Segment",
            "The transport-layer unit that carries application data and a transport header."
      ],
      [
            "Multiplexing",
            "Collecting data from many processes so they can share the network."
      ],
      [
            "Demultiplexing",
            "Delivering received segments to the correct socket or process."
      ],
      [
            "Port",
            "A number used to identify a specific application process on a host."
      ],
      [
            "Socket pair",
            "The addresses and ports that identify a transport conversation."
      ],
      [
            "UDP",
            "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection."
      ],
      [
            "TCP",
            "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control."
      ],
      [
            "Checksum",
            "A value used to detect bit errors in a segment."
      ],
      [
            "Best effort",
            "A service model that tries to deliver data but gives no guarantee."
      ],
      [
            "Connection-oriented",
            "A service that establishes state before data transfer."
      ],
      [
            "Three-way handshake",
            "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers."
      ],
      [
            "Flow control",
            "Receiver-side control that keeps a sender from overrunning the receiver's available buffer."
      ],
      [
            "Receive buffer",
            "Memory used by the receiver to hold incoming data before the application reads it."
      ],
      [
            "Congestion control",
            "Sender behavior that reduces or grows the sending rate to avoid overloading the network."
      ],
      [
            "MSS",
            "Maximum Segment Size, the largest TCP payload placed in one segment."
      ],
      [
            "MTU",
            "Maximum Transmission Unit, the largest frame payload a link can carry."
      ],
      [
            "Sequence number",
            "A number that identifies byte positions for ordering and reliability."
      ],
      [
            "Acknowledgment",
            "A receiver message confirming data arrival."
      ],
      [
            "Timeout",
            "A timer event that can trigger retransmission when an ACK is missing."
      ],
      [
            "Reliable data transfer",
            "A service that delivers data correctly and in order despite loss or corruption."
      ],
      [
            "rdt",
            "A family of teaching protocols used to explain reliability mechanisms."
      ],
      [
            "Stop-and-wait",
            "A simple method that sends one packet then waits for an ACK."
      ],
      [
            "Pipelining",
            "Sending multiple packets before waiting for all acknowledgments."
      ],
      [
            "Sliding window",
            "A limit on how many unacknowledged packets or bytes may be in flight."
      ],
      [
            "Go-Back-N",
            "A pipelined protocol that retransmits a lost packet and later packets in the window."
      ],
      [
            "Selective Repeat",
            "A pipelined protocol that retransmits only specific missing packets."
      ],
      [
            "Cumulative ACK",
            "An acknowledgment that confirms receipt of all bytes or packets up to a stated point."
      ],
      [
            "Duplicate ACK",
            "An ACK repeated for the same data, often hinting that later data arrived but a gap exists."
      ],
      [
            "Fast retransmit",
            "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer."
      ],
      [
            "RTT",
            "Round-trip time between sending data and receiving its acknowledgment."
      ],
      [
            "EstimatedRTT",
            "TCP's smoothed estimate of round-trip time."
      ],
      [
            "DevRTT",
            "An estimate of RTT variation used to set safer timeouts."
      ],
      [
            "TimeoutInterval",
            "The retransmission timer value derived from estimated RTT and variation."
      ],
      [
            "Congestion window",
            "TCP sender-side limit on how much data can be in flight due to congestion control."
      ],
      [
            "Slow start",
            "TCP phase where the congestion window grows exponentially from a small starting point until a threshold or loss event."
      ],
      [
            "Congestion avoidance",
            "TCP phase where the congestion window grows roughly linearly to probe for more capacity."
      ],
      [
            "Fast recovery",
            "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing."
      ],
      [
            "AIMD",
            "Additive Increase Multiplicative Decrease, Classic TCP behavior: increase the congestion window gradually, then cut it back sharply after congestion."
      ],
      [
            "TCP Reno",
            "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery."
      ],
      [
            "Network layer",
            "The layer responsible for moving packets from source host to destination host."
      ],
      [
            "Datagram",
            "The network-layer packet, especially in IP networks."
      ],
      [
            "Forwarding",
            "The local action of moving a packet from a router input to an output interface."
      ],
      [
            "Routing",
            "The network-wide process of determining paths from source to destination."
      ],
      [
            "Data plane",
            "The router function that actually forwards packets."
      ],
      [
            "Control plane",
            "The logic that computes or installs forwarding behavior."
      ],
      [
            "Forwarding table",
            "A lookup table used to choose an outgoing interface; routers usually key it by IP prefix."
      ],
      [
            "Longest-prefix match",
            "The rule of choosing the most specific matching destination prefix."
      ],
      [
            "Router input port",
            "Router component that receives packets and may do lookup."
      ],
      [
            "Switching fabric",
            "The internal router mechanism that transfers packets from input to output."
      ],
      [
            "Router output port",
            "Router component that queues and transmits packets on an outgoing link."
      ],
      [
            "Queueing",
            "Packets waiting because the output link or processing path is busy."
      ],
      [
            "IPv4",
            "The 32-bit Internet Protocol version still widely used."
      ],
      [
            "IPv6",
            "The Internet Protocol version with 128-bit addresses, extension headers, and source-only fragmentation."
      ],
      [
            "Subnet",
            "A logical IP address block within a network."
      ],
      [
            "CIDR",
            "Classless Inter-Domain Routing, notation for variable-length network prefixes."
      ],
      [
            "DHCP",
            "A client-server protocol that leases IP configuration such as address, mask, gateway, and DNS servers to hosts."
      ],
      [
            "NAT",
            "Network Address Translation, rewriting address and often port fields between private and public address realms."
      ],
      [
            "ICMP",
            "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages."
      ],
      [
            "Fragmentation",
            "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source."
      ],
      [
            "Routing algorithm",
            "A method for computing paths through a network graph."
      ],
      [
            "Link-state",
            "A routing approach where routers learn network topology and compute shortest paths."
      ],
      [
            "Dijkstra algorithm",
            "A shortest-path algorithm used in link-state routing."
      ],
      [
            "Distance-vector",
            "A routing approach where routers share distance estimates with neighbors."
      ],
      [
            "Bellman-Ford",
            "The algorithmic idea behind distance-vector route updates."
      ],
      [
            "Routing table",
            "The table of selected routes used to forward packets."
      ],
      [
            "Link cost",
            "A value assigned to a link, often based on bandwidth, delay, or policy."
      ],
      [
            "Convergence",
            "The point when routers agree on stable routing information."
      ],
      [
            "Count-to-infinity",
            "A distance-vector problem where bad news about a failed route spreads slowly."
      ],
      [
            "Poisoned reverse",
            "A technique that helps reduce certain distance-vector loops."
      ],
      [
            "Intra-AS routing",
            "Routing performed within one autonomous system."
      ],
      [
            "Autonomous system",
            "A network or group of networks under one administrative control."
      ],
      [
            "OSPF",
            "An intra-AS link-state routing protocol."
      ],
      [
            "Link-state advertisement",
            "Information flooded by routers describing their links and costs."
      ],
      [
            "Area hierarchy",
            "A design that divides OSPF networks into areas for scalability."
      ],
      [
            "RIP",
            "An older distance-vector routing protocol that selects routes by hop count."
      ],
      [
            "IS-IS",
            "A link-state routing protocol used in some large provider networks."
      ],
      [
            "Equal-cost multipath",
            "Using multiple paths with the same cost to share traffic."
      ],
      [
            "Route recomputation",
            "The recalculation of paths after topology or cost changes."
      ],
      [
            "Topology database",
            "The collected link-state view used to compute routes."
      ],
      [
            "Inter-AS routing",
            "Routing between autonomous systems."
      ],
      [
            "BGP",
            "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol."
      ],
      [
            "eBGP",
            "External BGP sessions between routers in different autonomous systems."
      ],
      [
            "iBGP",
            "Internal BGP sessions used to distribute BGP-learned routes inside one autonomous system."
      ],
      [
            "AS-PATH",
            "A BGP attribute listing autonomous systems a route advertisement has traversed."
      ],
      [
            "NEXT-HOP",
            "A BGP attribute identifying the next router to reach a prefix."
      ],
      [
            "Prefix",
            "A block of IP addresses advertised as reachable."
      ],
      [
            "Reachability",
            "Information that a destination prefix can be reached."
      ],
      [
            "Routing policy",
            "Business or administrative rules that influence route selection."
      ],
      [
            "Hot-potato routing",
            "Choosing the closest exit point from an AS to hand traffic off quickly."
      ],
      [
            "Route advertisement",
            "A BGP message announcing reachability to a prefix."
      ],
      [
            "Route withdrawal",
            "A BGP message removing a previously advertised route."
      ],
      [
            "Peering",
            "An agreement where networks exchange traffic, often without payment."
      ],
      [
            "Transit",
            "A paid service where one network carries another network's traffic to the Internet."
      ],
      [
            "Provider",
            "A network that sells transit or connectivity."
      ],
      [
            "Customer",
            "A network that buys connectivity or transit from another network."
      ],
      [
            "Local preference",
            "A BGP attribute used inside an AS to prefer certain routes."
      ],
      [
            "MED",
            "Multi-Exit Discriminator, a hint about preferred entry points into an AS."
      ],
      [
            "Route aggregation",
            "Combining multiple prefixes into a shorter summary advertisement."
      ],
      [
            "Gateway router",
            "A router connecting an AS to other autonomous systems."
      ],
      [
            "Network management",
            "The process of monitoring, configuring, and controlling network systems."
      ],
      [
            "Managing server",
            "The system used by administrators to monitor and control devices."
      ],
      [
            "Managed device",
            "A router, switch, server, or access point being monitored or configured."
      ],
      [
            "Agent",
            "Software on a managed device that provides management information."
      ],
      [
            "MIB",
            "Management Information Base, a structured collection of managed variables."
      ],
      [
            "SNMP",
            "A management protocol where managers query or set MIB objects on agents and receive notifications."
      ],
      [
            "SNMP Get",
            "An operation that reads management information from a device."
      ],
      [
            "SNMP Set",
            "An operation that changes a management variable on a device."
      ],
      [
            "SNMP Trap",
            "An unsolicited notification sent by an agent to a manager."
      ],
      [
            "OID",
            "Object Identifier, a numeric name for a managed variable."
      ],
      [
            "Polling",
            "Regularly asking devices for status information."
      ],
      [
            "Telemetry",
            "Streaming or exporting operational data for monitoring."
      ],
      [
            "NETCONF",
            "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices."
      ],
      [
            "YANG",
            "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF."
      ],
      [
            "RPC",
            "Remote Procedure Call, a structured request used by protocols such as NETCONF."
      ],
      [
            "Configuration datastore",
            "A storage area representing intended device configuration."
      ],
      [
            "Operational state",
            "The observed running condition of a device, separate from intended configuration."
      ],
      [
            "SDN",
            "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices."
      ],
      [
            "Controller",
            "The software control point in an SDN architecture."
      ],
      [
            "Southbound API",
            "The interface a controller uses to program network devices."
      ],
      [
            "Data link layer",
            "The layer that transfers frames across a single link or hop."
      ],
      [
            "Node",
            "A host, router, switch, or access point connected to a link."
      ],
      [
            "Link",
            "The communication channel between neighboring nodes."
      ],
      [
            "Frame",
            "The data link layer unit that carries a network-layer packet."
      ],
      [
            "Framing",
            "Adding boundaries and link-layer information around data."
      ],
      [
            "Packetizing",
            "Encapsulating data into protocol data units; at the link layer, this usually means placing a network-layer packet into a frame."
      ],
      [
            "Header",
            "Control information placed before the payload."
      ],
      [
            "Trailer",
            "Control information placed after the payload, often for error detection."
      ],
      [
            "Error detection",
            "Techniques that detect likely bit corruption; they detect errors but do not always correct them."
      ],
      [
            "Parity bit",
            "A simple bit added to make the number of ones even or odd."
      ],
      [
            "Two-dimensional parity",
            "A parity method that can detect and sometimes locate bit errors using rows and columns."
      ],
      [
            "CRC",
            "Cyclic Redundancy Check, a polynomial-based error detection method widely used in link-layer frames."
      ],
      [
            "Generator polynomial",
            "The divisor pattern used in CRC computation."
      ],
      [
            "Medium access control",
            "Rules for deciding who can transmit on a shared medium."
      ],
      [
            "Broadcast link",
            "A link where multiple nodes share the same communication medium."
      ],
      [
            "Point-to-point link",
            "A direct link between two nodes."
      ],
      [
            "Half-duplex",
            "Communication where a device cannot send and receive at the same time."
      ],
      [
            "Full-duplex",
            "Communication where sending and receiving can happen simultaneously."
      ],
      [
            "LAN",
            "Local Area Network, a network covering a limited area such as a room, home, or campus."
      ],
      [
            "MAC address",
            "A link-layer hardware address used for local frame delivery."
      ],
      [
            "ARP",
            "Address Resolution Protocol, used on IPv4 LANs to map a next-hop IP address to a hardware/MAC address."
      ],
      [
            "ARP table",
            "A cache of recently learned IP-to-MAC mappings."
      ],
      [
            "Ethernet",
            "The dominant wired LAN technology, using frames, MAC addresses, and usually switched full-duplex links."
      ],
      [
            "Ethernet frame",
            "The link-layer format used by Ethernet."
      ],
      [
            "Preamble",
            "Bits at the start of an Ethernet frame used for synchronization."
      ],
      [
            "Type field",
            "Ethernet field identifying the upper-layer protocol carried in the frame."
      ],
      [
            "CRC field",
            "Ethernet Frame Check Sequence field carrying a CRC for error detection."
      ],
      [
            "Switch",
            "A LAN device that learns source MAC addresses and forwards frames toward destination MAC addresses."
      ],
      [
            "MAC learning",
            "A switch process that records which MAC addresses are reachable through which ports."
      ],
      [
            "Flooding",
            "Sending a frame out multiple ports when the destination is unknown or broadcast."
      ],
      [
            "Broadcast domain",
            "The set of devices that receive a layer-2 broadcast."
      ],
      [
            "Collision domain",
            "A shared medium area where simultaneous transmissions can collide."
      ],
      [
            "CSMA/CD",
            "Carrier Sense Multiple Access with Collision Detection, used by classic half-duplex shared Ethernet."
      ],
      [
            "CSMA/CA",
            "Carrier Sense Multiple Access with Collision Avoidance, used by IEEE 802.11 Wi-Fi."
      ],
      [
            "VLAN",
            "A logical LAN that separates traffic within the same physical switching infrastructure."
      ],
      [
            "Trunk port",
            "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags."
      ],
      [
            "Access port",
            "A switch port that carries untagged traffic for a single VLAN, typically toward an end device."
      ],
      [
            "Link virtualization",
            "Making a network path behave like a logical link or service."
      ],
      [
            "MPLS",
            "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes."
      ],
      [
            "Label",
            "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class."
      ],
      [
            "Label-switched router",
            "A router that forwards MPLS traffic based on label values."
      ],
      [
            "Label forwarding table",
            "A table mapping incoming labels to outgoing labels and interfaces."
      ],
      [
            "LSP",
            "Label Switched Path, the route MPLS packets follow through a network."
      ],
      [
            "Ingress router",
            "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label."
      ],
      [
            "Egress router",
            "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain."
      ],
      [
            "Traffic engineering",
            "Controlling paths to meet performance or policy goals."
      ],
      [
            "Fast reroute",
            "Quickly moving traffic to a backup path after failure."
      ],
      [
            "VPN",
            "A virtual private network service that can be carried over shared infrastructure."
      ],
      [
            "Virtual circuit",
            "A logical path that behaves like a dedicated circuit."
      ],
      [
            "Overlay network",
            "A logical network built on top of another network."
      ],
      [
            "Underlay network",
            "The physical or base IP network that carries overlay traffic."
      ],
      [
            "Data center network",
            "A high-speed network connecting large numbers of servers."
      ],
      [
            "Top-of-rack switch",
            "A switch placed near or inside a server rack."
      ],
      [
            "Leaf-spine",
            "A scalable data-center topology with leaf access switches and spine core switches."
      ],
      [
            "Load balancing",
            "Distributing traffic across multiple paths or servers."
      ],
      [
            "ECMP",
            "Equal-Cost Multipath, using multiple equal-cost paths for traffic."
      ],
      [
            "Fabric",
            "The overall switching infrastructure of a data center."
      ],
      [
            "Wireless host",
            "A device communicating over a wireless link."
      ],
      [
            "Base station",
            "A radio access point connecting wireless devices to network infrastructure."
      ],
      [
            "Access point",
            "A Wi-Fi base station that connects wireless hosts to a LAN."
      ],
      [
            "Infrastructure mode",
            "Wireless mode where devices communicate through an access point."
      ],
      [
            "Ad hoc mode",
            "Wireless mode where devices communicate directly without infrastructure."
      ],
      [
            "Wireless link",
            "A radio channel carrying bits between devices."
      ],
      [
            "Signal attenuation",
            "Loss of signal strength over distance or through obstacles."
      ],
      [
            "Interference",
            "Unwanted signals that disrupt communication."
      ],
      [
            "Multipath",
            "Signal copies arriving by different paths because of reflection."
      ],
      [
            "SNR",
            "Signal-to-noise ratio, a measure of signal quality."
      ],
      [
            "802.11",
            "The IEEE 802.11 wireless LAN MAC and PHY standards commonly marketed as Wi-Fi."
      ],
      [
            "SSID",
            "The network name identifying a Wi-Fi service set."
      ],
      [
            "Association",
            "The process of a wireless host joining an access point."
      ],
      [
            "Beacon frame",
            "A frame an AP sends to announce network presence and parameters."
      ],
      [
            "RTS",
            "Request To Send, an optional control frame to reserve the medium."
      ],
      [
            "CTS",
            "Clear To Send, a response allowing a sender to transmit."
      ],
      [
            "ACK frame",
            "A Wi-Fi acknowledgment that confirms frame reception."
      ],
      [
            "Hidden terminal",
            "A device that cannot hear another transmitter but can still collide at the receiver."
      ],
      [
            "Channel",
            "A selected frequency range used for wireless communication."
      ],
      [
            "Mobility",
            "The ability to keep network service while changing attachment points."
      ],
      [
            "User equipment",
            "The mobile device, such as a phone or cellular modem."
      ],
      [
            "SIM",
            "Subscriber identity module used for cellular identity and authentication."
      ],
      [
            "Cell",
            "The geographic coverage area served by a base station."
      ],
      [
            "Radio access network",
            "The part of a mobile network connecting devices to the core."
      ],
      [
            "Core network",
            "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity."
      ],
      [
            "4G LTE",
            "A cellular generation using packet-switched IP-based design."
      ],
      [
            "5G",
            "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility."
      ],
      [
            "MME",
            "Mobility Management Entity, a 4G control-plane component."
      ],
      [
            "Serving gateway",
            "A 4G data-plane anchor that forwards user traffic."
      ],
      [
            "PDN gateway",
            "A 4G EPC gateway connecting user traffic to external packet data networks and anchoring IP connectivity."
      ],
      [
            "Handoff",
            "Moving an active device connection from one base station to another."
      ],
      [
            "Roaming",
            "Using a visited carrier network while subscribed to a home carrier."
      ],
      [
            "Home network",
            "The subscriber's original carrier network."
      ],
      [
            "Visited network",
            "The network a roaming user currently attaches to."
      ],
      [
            "Mobile IP",
            "An IETF mobility protocol that lets a mobile node keep a home address while using a care-of address away from home."
      ],
      [
            "Home agent",
            "Mobile IP router on the home network that tunnels packets to the mobile node's current care-of address."
      ],
      [
            "Foreign agent",
            "Mobile IP router in a visited network that can provide a care-of address and relay registration."
      ],
      [
            "Tunneling",
            "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path."
      ],
      [
            "Confidentiality",
            "Keeping message contents hidden from unauthorized parties."
      ],
      [
            "Authentication",
            "Proving an identity or verifying the source of a message."
      ],
      [
            "Integrity",
            "Detecting unauthorized changes to data."
      ],
      [
            "Availability",
            "Keeping services reachable for legitimate users."
      ],
      [
            "Encryption",
            "Transforming readable data into protected ciphertext."
      ],
      [
            "Decryption",
            "Recovering readable data from ciphertext."
      ],
      [
            "Symmetric key",
            "A shared secret key used for both encryption and decryption."
      ],
      [
            "Public key",
            "A key that can be shared publicly in asymmetric cryptography."
      ],
      [
            "Private key",
            "A secret key kept by its owner in asymmetric cryptography."
      ],
      [
            "Hash function",
            "A one-way function producing a fixed-size digest from data."
      ],
      [
            "MAC",
            "Message Authentication Code, used to verify authenticity and integrity with a shared key."
      ],
      [
            "Digital signature",
            "A public-key mechanism that verifies signer identity and data integrity."
      ],
      [
            "Certificate",
            "A digitally signed statement binding an identity or name to a public key."
      ],
      [
            "Certificate authority",
            "A trusted party that signs certificates."
      ],
      [
            "Nonce",
            "A fresh random value used to prevent replay."
      ],
      [
            "Replay attack",
            "Reusing a valid message later to trick a protocol."
      ],
      [
            "Man-in-the-middle",
            "An attacker secretly intercepting and possibly altering communication."
      ],
      [
            "TLS",
            "Transport Layer Security, a protocol that secures application data with authentication, confidentiality, and integrity."
      ],
      [
            "HTTPS",
            "HTTP carried inside TLS, providing the secure form of web browsing commonly shown as HTTPS."
      ],
      [
            "Session key",
            "A temporary symmetric key used after secure setup."
      ],
      [
            "Network-layer security",
            "Protection applied to IP packets or network paths."
      ],
      [
            "IPsec",
            "A suite of protocols that secures IP datagrams."
      ],
      [
            "Security association",
            "A one-way security relationship defining IPsec parameters and keys."
      ],
      [
            "SA database",
            "A database storing active security associations."
      ],
      [
            "SPD",
            "Security Policy Database, which says what traffic should be protected or bypassed."
      ],
      [
            "IKE",
            "Internet Key Exchange, used to negotiate IPsec security associations."
      ],
      [
            "Transport mode",
            "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place."
      ],
      [
            "Tunnel mode",
            "IPsec mode that encapsulates and protects the entire original IP datagram inside a new outer IP datagram."
      ],
      [
            "AH",
            "Authentication Header, providing packet integrity and data origin authentication without encryption."
      ],
      [
            "ESP",
            "Encapsulating Security Payload, commonly used for IPsec confidentiality and optional integrity/authentication."
      ],
      [
            "Authentication header",
            "The IPsec AH header used for integrity and data origin authentication."
      ],
      [
            "Packet filter",
            "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol."
      ],
      [
            "Stateful firewall",
            "A firewall that tracks connection or flow state instead of judging each packet in isolation."
      ],
      [
            "ACL",
            "Access Control List, a list of permit or deny rules."
      ],
      [
            "DMZ",
            "A screened network segment for public-facing services, separated from both untrusted networks and the internal LAN."
      ],
      [
            "IDS",
            "Intrusion Detection System that monitors network or host activity and raises alerts on suspicious behavior."
      ],
      [
            "Signature detection",
            "IDS method that matches known attack patterns."
      ],
      [
            "Anomaly detection",
            "IDS method that looks for deviations from normal behavior."
      ]
];

    const flashcards = [
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Host?",
            "back": "A device at the edge of the network that runs applications, such as a phone, laptop, server, or camera."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is End system?",
            "back": "Another name for a host because it sits at an end of communication and creates or receives data."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Packet?",
            "back": "A small chunk of data plus headers that can be forwarded through a network."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Packet switch?",
            "back": "A device that receives packets and forwards them toward a destination."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Router?",
            "back": "A packet switch that forwards network-layer datagrams between networks using IP information."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Link-layer switch?",
            "back": "A local packet switch that forwards frames inside a LAN using MAC addresses."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Communication link?",
            "back": "The physical or wireless path that carries bits between devices."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Access network?",
            "back": "The part of the network that connects end systems to the first router."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is ISP?",
            "back": "An Internet Service Provider that connects customers and other networks to the Internet."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Protocol?",
            "back": "A rule set defining message format, message order, and actions when messages are sent or received."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is RFC?",
            "back": "A Request for Comments document that records Internet standards and protocol specifications."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is IETF?",
            "back": "The standards organization that develops many Internet protocols through RFCs."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Packet switching?",
            "back": "A sharing method where packets from many users take turns using links."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Circuit switching?",
            "back": "A communication method that reserves end-to-end resources before data is sent."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Delay?",
            "back": "The time it takes data to travel from sender to receiver."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Loss?",
            "back": "When packets are dropped because of errors, congestion, or failed paths."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Throughput?",
            "back": "The actual rate at which useful data is delivered."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Bandwidth?",
            "back": "The maximum transmission rate a link can support."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Encapsulation?",
            "back": "The process of wrapping data with headers as it moves down network layers."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Internet stack?",
            "back": "The layered model of application, transport, network, link, and physical responsibilities."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Application layer?",
            "back": "The top network layer where applications define messages and services."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Process?",
            "back": "A running program that sends or receives messages through a socket."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Socket?",
            "back": "The software interface between an application process and the transport layer."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Client-server?",
            "back": "An architecture where clients request service from an always-on server."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Peer-to-peer?",
            "back": "An architecture where end systems communicate directly and share roles."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is HTTP?",
            "back": "An application-layer request/response protocol for transferring web resources and API data."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Persistent HTTP?",
            "back": "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Cookie?",
            "back": "Small data used by websites to maintain state across otherwise stateless HTTP requests."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Web cache?",
            "back": "A proxy that stores web objects closer to clients to reduce delay and traffic."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is DNS?",
            "back": "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is DNS resolver?",
            "back": "A recursive or caching service that resolves DNS questions on behalf of clients."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Authoritative DNS?",
            "back": "A DNS server authoritative for a zone, returning answers from that zone's configured records."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is SMTP?",
            "back": "The protocol used to send email from clients or mail servers."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is IMAP?",
            "back": "A mail access protocol that keeps messages synchronized on a server."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is POP3?",
            "back": "A simple mail access protocol that downloads messages from a server."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is CDN?",
            "back": "A distributed content system that serves cached or replicated objects from locations closer to users."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is DASH?",
            "back": "Dynamic Adaptive Streaming over HTTP, where a client selects segment bitrates based on current network and playback conditions."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is RTP?",
            "back": "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is API?",
            "back": "A defined interface that lets software components request services or data."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Port number?",
            "back": "A transport identifier that helps deliver data to the correct application process."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Transport layer?",
            "back": "The layer that provides logical communication between application processes."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Segment?",
            "back": "The transport-layer unit that carries application data and a transport header."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Multiplexing?",
            "back": "Collecting data from many processes so they can share the network."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Demultiplexing?",
            "back": "Delivering received segments to the correct socket or process."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Port?",
            "back": "A number used to identify a specific application process on a host."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Socket pair?",
            "back": "The addresses and ports that identify a transport conversation."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is UDP?",
            "back": "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is TCP?",
            "back": "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Checksum?",
            "back": "A value used to detect bit errors in a segment."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Best effort?",
            "back": "A service model that tries to deliver data but gives no guarantee."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Connection-oriented?",
            "back": "A service that establishes state before data transfer."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Three-way handshake?",
            "back": "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Flow control?",
            "back": "Receiver-side control that keeps a sender from overrunning the receiver's available buffer."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Receive buffer?",
            "back": "Memory used by the receiver to hold incoming data before the application reads it."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Congestion control?",
            "back": "Sender behavior that reduces or grows the sending rate to avoid overloading the network."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is MSS?",
            "back": "Maximum Segment Size, the largest TCP payload placed in one segment."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is MTU?",
            "back": "Maximum Transmission Unit, the largest frame payload a link can carry."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Sequence number?",
            "back": "A number that identifies byte positions for ordering and reliability."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Acknowledgment?",
            "back": "A receiver message confirming data arrival."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Timeout?",
            "back": "A timer event that can trigger retransmission when an ACK is missing."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Reliable data transfer?",
            "back": "A service that delivers data correctly and in order despite loss or corruption."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is rdt?",
            "back": "A family of teaching protocols used to explain reliability mechanisms."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Stop-and-wait?",
            "back": "A simple method that sends one packet then waits for an ACK."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Pipelining?",
            "back": "Sending multiple packets before waiting for all acknowledgments."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Sliding window?",
            "back": "A limit on how many unacknowledged packets or bytes may be in flight."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Go-Back-N?",
            "back": "A pipelined protocol that retransmits a lost packet and later packets in the window."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Selective Repeat?",
            "back": "A pipelined protocol that retransmits only specific missing packets."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Cumulative ACK?",
            "back": "An acknowledgment that confirms receipt of all bytes or packets up to a stated point."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Duplicate ACK?",
            "back": "An ACK repeated for the same data, often hinting that later data arrived but a gap exists."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Fast retransmit?",
            "back": "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is RTT?",
            "back": "Round-trip time between sending data and receiving its acknowledgment."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is EstimatedRTT?",
            "back": "TCP's smoothed estimate of round-trip time."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is DevRTT?",
            "back": "An estimate of RTT variation used to set safer timeouts."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is TimeoutInterval?",
            "back": "The retransmission timer value derived from estimated RTT and variation."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Congestion window?",
            "back": "TCP sender-side limit on how much data can be in flight due to congestion control."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Slow start?",
            "back": "TCP phase where the congestion window grows exponentially from a small starting point until a threshold or loss event."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Congestion avoidance?",
            "back": "TCP phase where the congestion window grows roughly linearly to probe for more capacity."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Fast recovery?",
            "back": "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is AIMD?",
            "back": "Additive Increase Multiplicative Decrease, Classic TCP behavior: increase the congestion window gradually, then cut it back sharply after congestion."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is TCP Reno?",
            "back": "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Network layer?",
            "back": "The layer responsible for moving packets from source host to destination host."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Datagram?",
            "back": "The network-layer packet, especially in IP networks."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Forwarding?",
            "back": "The local action of moving a packet from a router input to an output interface."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Routing?",
            "back": "The network-wide process of determining paths from source to destination."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Data plane?",
            "back": "The router function that actually forwards packets."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Control plane?",
            "back": "The logic that computes or installs forwarding behavior."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Forwarding table?",
            "back": "A lookup table used to choose an outgoing interface; routers usually key it by IP prefix."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Longest-prefix match?",
            "back": "The rule of choosing the most specific matching destination prefix."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Router input port?",
            "back": "Router component that receives packets and may do lookup."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Switching fabric?",
            "back": "The internal router mechanism that transfers packets from input to output."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Router output port?",
            "back": "Router component that queues and transmits packets on an outgoing link."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Queueing?",
            "back": "Packets waiting because the output link or processing path is busy."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is IPv4?",
            "back": "The 32-bit Internet Protocol version still widely used."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is IPv6?",
            "back": "The Internet Protocol version with 128-bit addresses, extension headers, and source-only fragmentation."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Subnet?",
            "back": "A logical IP address block within a network."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is CIDR?",
            "back": "Classless Inter-Domain Routing, notation for variable-length network prefixes."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is DHCP?",
            "back": "A client-server protocol that leases IP configuration such as address, mask, gateway, and DNS servers to hosts."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is NAT?",
            "back": "Network Address Translation, rewriting address and often port fields between private and public address realms."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is ICMP?",
            "back": "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Fragmentation?",
            "back": "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Routing algorithm?",
            "back": "A method for computing paths through a network graph."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Link-state?",
            "back": "A routing approach where routers learn network topology and compute shortest paths."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Dijkstra algorithm?",
            "back": "A shortest-path algorithm used in link-state routing."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Distance-vector?",
            "back": "A routing approach where routers share distance estimates with neighbors."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Bellman-Ford?",
            "back": "The algorithmic idea behind distance-vector route updates."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Routing table?",
            "back": "The table of selected routes used to forward packets."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Link cost?",
            "back": "A value assigned to a link, often based on bandwidth, delay, or policy."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Convergence?",
            "back": "The point when routers agree on stable routing information."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Count-to-infinity?",
            "back": "A distance-vector problem where bad news about a failed route spreads slowly."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Poisoned reverse?",
            "back": "A technique that helps reduce certain distance-vector loops."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Intra-AS routing?",
            "back": "Routing performed within one autonomous system."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Autonomous system?",
            "back": "A network or group of networks under one administrative control."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is OSPF?",
            "back": "An intra-AS link-state routing protocol."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Link-state advertisement?",
            "back": "Information flooded by routers describing their links and costs."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Area hierarchy?",
            "back": "A design that divides OSPF networks into areas for scalability."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is RIP?",
            "back": "An older distance-vector routing protocol that selects routes by hop count."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is IS-IS?",
            "back": "A link-state routing protocol used in some large provider networks."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Equal-cost multipath?",
            "back": "Using multiple paths with the same cost to share traffic."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Route recomputation?",
            "back": "The recalculation of paths after topology or cost changes."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Topology database?",
            "back": "The collected link-state view used to compute routes."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Inter-AS routing?",
            "back": "Routing between autonomous systems."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is BGP?",
            "back": "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is eBGP?",
            "back": "External BGP sessions between routers in different autonomous systems."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is iBGP?",
            "back": "Internal BGP sessions used to distribute BGP-learned routes inside one autonomous system."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is AS-PATH?",
            "back": "A BGP attribute listing autonomous systems a route advertisement has traversed."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is NEXT-HOP?",
            "back": "A BGP attribute identifying the next router to reach a prefix."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Prefix?",
            "back": "A block of IP addresses advertised as reachable."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Reachability?",
            "back": "Information that a destination prefix can be reached."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Routing policy?",
            "back": "Business or administrative rules that influence route selection."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Hot-potato routing?",
            "back": "Choosing the closest exit point from an AS to hand traffic off quickly."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Route advertisement?",
            "back": "A BGP message announcing reachability to a prefix."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Route withdrawal?",
            "back": "A BGP message removing a previously advertised route."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Peering?",
            "back": "An agreement where networks exchange traffic, often without payment."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Transit?",
            "back": "A paid service where one network carries another network's traffic to the Internet."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Provider?",
            "back": "A network that sells transit or connectivity."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Customer?",
            "back": "A network that buys connectivity or transit from another network."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Local preference?",
            "back": "A BGP attribute used inside an AS to prefer certain routes."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is MED?",
            "back": "Multi-Exit Discriminator, a hint about preferred entry points into an AS."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Route aggregation?",
            "back": "Combining multiple prefixes into a shorter summary advertisement."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Gateway router?",
            "back": "A router connecting an AS to other autonomous systems."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Network management?",
            "back": "The process of monitoring, configuring, and controlling network systems."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Managing server?",
            "back": "The system used by administrators to monitor and control devices."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Managed device?",
            "back": "A router, switch, server, or access point being monitored or configured."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Agent?",
            "back": "Software on a managed device that provides management information."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is MIB?",
            "back": "Management Information Base, a structured collection of managed variables."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is SNMP?",
            "back": "A management protocol where managers query or set MIB objects on agents and receive notifications."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is SNMP Get?",
            "back": "An operation that reads management information from a device."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is SNMP Set?",
            "back": "An operation that changes a management variable on a device."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is SNMP Trap?",
            "back": "An unsolicited notification sent by an agent to a manager."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is OID?",
            "back": "Object Identifier, a numeric name for a managed variable."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Polling?",
            "back": "Regularly asking devices for status information."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Telemetry?",
            "back": "Streaming or exporting operational data for monitoring."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is NETCONF?",
            "back": "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is YANG?",
            "back": "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is RPC?",
            "back": "Remote Procedure Call, a structured request used by protocols such as NETCONF."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Configuration datastore?",
            "back": "A storage area representing intended device configuration."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Operational state?",
            "back": "The observed running condition of a device, separate from intended configuration."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is SDN?",
            "back": "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Controller?",
            "back": "The software control point in an SDN architecture."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Southbound API?",
            "back": "The interface a controller uses to program network devices."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Data link layer?",
            "back": "The layer that transfers frames across a single link or hop."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Node?",
            "back": "A host, router, switch, or access point connected to a link."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Link?",
            "back": "The communication channel between neighboring nodes."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Frame?",
            "back": "The data link layer unit that carries a network-layer packet."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Framing?",
            "back": "Adding boundaries and link-layer information around data."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Packetizing?",
            "back": "Encapsulating data into protocol data units; at the link layer, this usually means placing a network-layer packet into a frame."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Header?",
            "back": "Control information placed before the payload."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Trailer?",
            "back": "Control information placed after the payload, often for error detection."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Error detection?",
            "back": "Techniques that detect likely bit corruption; they detect errors but do not always correct them."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Parity bit?",
            "back": "A simple bit added to make the number of ones even or odd."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Two-dimensional parity?",
            "back": "A parity method that can detect and sometimes locate bit errors using rows and columns."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Checksum?",
            "back": "A sum-based error detection value."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is CRC?",
            "back": "Cyclic Redundancy Check, a polynomial-based error detection method widely used in link-layer frames."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Generator polynomial?",
            "back": "The divisor pattern used in CRC computation."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Flow control?",
            "back": "A method that prevents a receiver from being overwhelmed by sender rate or buffer pressure."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Medium access control?",
            "back": "Rules for deciding who can transmit on a shared medium."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Broadcast link?",
            "back": "A link where multiple nodes share the same communication medium."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Point-to-point link?",
            "back": "A direct link between two nodes."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Half-duplex?",
            "back": "Communication where a device cannot send and receive at the same time."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Full-duplex?",
            "back": "Communication where sending and receiving can happen simultaneously."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is LAN?",
            "back": "Local Area Network, a network covering a limited area such as a room, home, or campus."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is MAC address?",
            "back": "A link-layer hardware address used for local frame delivery."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is ARP?",
            "back": "Address Resolution Protocol, used on IPv4 LANs to map a next-hop IP address to a hardware/MAC address."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is ARP table?",
            "back": "A cache of recently learned IP-to-MAC mappings."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Ethernet?",
            "back": "The dominant wired LAN technology, using frames, MAC addresses, and usually switched full-duplex links."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Ethernet frame?",
            "back": "The link-layer format used by Ethernet."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Preamble?",
            "back": "Bits at the start of an Ethernet frame used for synchronization."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Type field?",
            "back": "Ethernet field identifying the upper-layer protocol carried in the frame."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is CRC field?",
            "back": "Ethernet Frame Check Sequence field carrying a CRC for error detection."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Switch?",
            "back": "A LAN device that learns source MAC addresses and forwards frames toward destination MAC addresses."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is MAC learning?",
            "back": "A switch process that records which MAC addresses are reachable through which ports."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Forwarding table?",
            "back": "A switch forwarding table mapping learned MAC addresses to ports."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Flooding?",
            "back": "Sending a frame out multiple ports when the destination is unknown or broadcast."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Broadcast domain?",
            "back": "The set of devices that receive a layer-2 broadcast."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Collision domain?",
            "back": "A shared medium area where simultaneous transmissions can collide."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is CSMA/CD?",
            "back": "Carrier Sense Multiple Access with Collision Detection, used by classic half-duplex shared Ethernet."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is CSMA/CA?",
            "back": "Carrier Sense Multiple Access with Collision Avoidance, used by IEEE 802.11 Wi-Fi."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is VLAN?",
            "back": "A logical LAN that separates traffic within the same physical switching infrastructure."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Trunk port?",
            "back": "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Access port?",
            "back": "A switch port that carries untagged traffic for a single VLAN, typically toward an end device."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Link virtualization?",
            "back": "Making a network path behave like a logical link or service."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is MPLS?",
            "back": "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Label?",
            "back": "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Label-switched router?",
            "back": "A router that forwards MPLS traffic based on label values."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Label forwarding table?",
            "back": "A table mapping incoming labels to outgoing labels and interfaces."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is LSP?",
            "back": "Label Switched Path, the route MPLS packets follow through a network."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Ingress router?",
            "back": "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Egress router?",
            "back": "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Traffic engineering?",
            "back": "Controlling paths to meet performance or policy goals."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Fast reroute?",
            "back": "Quickly moving traffic to a backup path after failure."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is VPN?",
            "back": "A virtual private network service that can be carried over shared infrastructure."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Virtual circuit?",
            "back": "A logical path that behaves like a dedicated circuit."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Overlay network?",
            "back": "A logical network built on top of another network."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Underlay network?",
            "back": "The physical or base IP network that carries overlay traffic."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Data center network?",
            "back": "A high-speed network connecting large numbers of servers."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Top-of-rack switch?",
            "back": "A switch placed near or inside a server rack."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Leaf-spine?",
            "back": "A scalable data-center topology with leaf access switches and spine core switches."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Load balancing?",
            "back": "Distributing traffic across multiple paths or servers."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is ECMP?",
            "back": "Equal-Cost Multipath, using multiple equal-cost paths for traffic."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Fabric?",
            "back": "The overall switching infrastructure of a data center."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Wireless host?",
            "back": "A device communicating over a wireless link."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Base station?",
            "back": "A radio access point connecting wireless devices to network infrastructure."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Access point?",
            "back": "A Wi-Fi base station that connects wireless hosts to a LAN."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Infrastructure mode?",
            "back": "Wireless mode where devices communicate through an access point."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Ad hoc mode?",
            "back": "Wireless mode where devices communicate directly without infrastructure."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Wireless link?",
            "back": "A radio channel carrying bits between devices."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Signal attenuation?",
            "back": "Loss of signal strength over distance or through obstacles."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Interference?",
            "back": "Unwanted signals that disrupt communication."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Multipath?",
            "back": "Signal copies arriving by different paths because of reflection."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is SNR?",
            "back": "Signal-to-noise ratio, a measure of signal quality."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is 802.11?",
            "back": "The IEEE 802.11 wireless LAN MAC and PHY standards commonly marketed as Wi-Fi."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is SSID?",
            "back": "The network name identifying a Wi-Fi service set."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Association?",
            "back": "The process of a wireless host joining an access point."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Beacon frame?",
            "back": "A frame an AP sends to announce network presence and parameters."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is CSMA/CA?",
            "back": "IEEE 802.11 Wi-Fi's collision avoidance medium access method."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is RTS?",
            "back": "Request To Send, an optional control frame to reserve the medium."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is CTS?",
            "back": "Clear To Send, a response allowing a sender to transmit."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is ACK frame?",
            "back": "A Wi-Fi acknowledgment that confirms frame reception."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Hidden terminal?",
            "back": "A device that cannot hear another transmitter but can still collide at the receiver."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Channel?",
            "back": "A selected frequency range used for wireless communication."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Mobility?",
            "back": "The ability to keep network service while changing attachment points."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is User equipment?",
            "back": "The mobile device, such as a phone or cellular modem."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is SIM?",
            "back": "Subscriber identity module used for cellular identity and authentication."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Base station?",
            "back": "Cellular radio equipment that connects user devices to the carrier network."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Cell?",
            "back": "The geographic coverage area served by a base station."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Radio access network?",
            "back": "The part of a mobile network connecting devices to the core."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Core network?",
            "back": "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is 4G LTE?",
            "back": "A cellular generation using packet-switched IP-based design."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is 5G?",
            "back": "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is MME?",
            "back": "Mobility Management Entity, a 4G control-plane component."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Serving gateway?",
            "back": "A 4G data-plane anchor that forwards user traffic."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is PDN gateway?",
            "back": "A 4G EPC gateway connecting user traffic to external packet data networks and anchoring IP connectivity."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Handoff?",
            "back": "Moving an active device connection from one base station to another."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Roaming?",
            "back": "Using a visited carrier network while subscribed to a home carrier."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Home network?",
            "back": "The subscriber's original carrier network."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Visited network?",
            "back": "The network a roaming user currently attaches to."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Mobile IP?",
            "back": "An IETF mobility protocol that lets a mobile node keep a home address while using a care-of address away from home."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Home agent?",
            "back": "Mobile IP router on the home network that tunnels packets to the mobile node's current care-of address."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Foreign agent?",
            "back": "Mobile IP router in a visited network that can provide a care-of address and relay registration."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Tunneling?",
            "back": "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Confidentiality?",
            "back": "Keeping message contents hidden from unauthorized parties."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Authentication?",
            "back": "Proving an identity or verifying the source of a message."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Integrity?",
            "back": "Detecting unauthorized changes to data."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Availability?",
            "back": "Keeping services reachable for legitimate users."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Encryption?",
            "back": "Transforming readable data into protected ciphertext."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Decryption?",
            "back": "Recovering readable data from ciphertext."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Symmetric key?",
            "back": "A shared secret key used for both encryption and decryption."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Public key?",
            "back": "A key that can be shared publicly in asymmetric cryptography."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Private key?",
            "back": "A secret key kept by its owner in asymmetric cryptography."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Hash function?",
            "back": "A one-way function producing a fixed-size digest from data."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is MAC?",
            "back": "Message Authentication Code, used to verify authenticity and integrity with a shared key."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Digital signature?",
            "back": "A public-key mechanism that verifies signer identity and data integrity."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Certificate?",
            "back": "A digitally signed statement binding an identity or name to a public key."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Certificate authority?",
            "back": "A trusted party that signs certificates."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Nonce?",
            "back": "A fresh random value used to prevent replay."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Replay attack?",
            "back": "Reusing a valid message later to trick a protocol."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Man-in-the-middle?",
            "back": "An attacker secretly intercepting and possibly altering communication."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is TLS?",
            "back": "Transport Layer Security, a protocol that secures application data with authentication, confidentiality, and integrity."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is HTTPS?",
            "back": "HTTP carried inside TLS, providing the secure form of web browsing commonly shown as HTTPS."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Session key?",
            "back": "A temporary symmetric key used after secure setup."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Network-layer security?",
            "back": "Protection applied to IP packets or network paths."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is IPsec?",
            "back": "A suite of protocols that secures IP datagrams."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Security association?",
            "back": "A one-way security relationship defining IPsec parameters and keys."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is SA database?",
            "back": "A database storing active security associations."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is SPD?",
            "back": "Security Policy Database, which says what traffic should be protected or bypassed."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is IKE?",
            "back": "Internet Key Exchange, used to negotiate IPsec security associations."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Transport mode?",
            "back": "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Tunnel mode?",
            "back": "IPsec mode that encapsulates and protects the entire original IP datagram inside a new outer IP datagram."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is AH?",
            "back": "Authentication Header, providing packet integrity and data origin authentication without encryption."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is ESP?",
            "back": "Encapsulating Security Payload, commonly used for IPsec confidentiality and optional integrity/authentication."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is VPN?",
            "back": "A secure virtual private network built across shared infrastructure."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Authentication header?",
            "back": "The IPsec AH header used for integrity and data origin authentication."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Encapsulation?",
            "back": "Wrapping one packet inside another packet."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Packet filter?",
            "back": "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Stateful firewall?",
            "back": "A firewall that tracks connection or flow state instead of judging each packet in isolation."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is ACL?",
            "back": "Access Control List, a list of permit or deny rules."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is DMZ?",
            "back": "A screened network segment for public-facing services, separated from both untrusted networks and the internal LAN."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is IDS?",
            "back": "Intrusion Detection System that monitors network or host activity and raises alerts on suspicious behavior."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Signature detection?",
            "back": "IDS method that matches known attack patterns."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Anomaly detection?",
            "back": "IDS method that looks for deviations from normal behavior."
      }
];

    const practiceTests = [
      {
            "title": "1.1 Practice: Computer Networks and the Internet",
            "description": "30-item practice test for Computer Networks and the Internet.",
            "questions": [
                  {
                        "q": "What is Host?",
                        "options": [
                              "A device at the edge of the network that runs applications, such as a phone, laptop, server, or camera.",
                              "YANG gives shared meaning and structure to configuration data.",
                              "Sending and receiving at the same time.",
                              "Operators can steer flows over selected paths."
                        ],
                        "answer": 0,
                        "explain": "A device at the edge of the network that runs applications, such as a phone, laptop, server, or camera."
                  },
                  {
                        "q": "What is End system?",
                        "options": [
                              "Programmable and centralized network control.",
                              "A cache of recently learned IP-to-MAC mappings.",
                              "Detecting unauthorized changes to data.",
                              "Another name for a host because it sits at an end of communication and creates or receives data."
                        ],
                        "answer": 3,
                        "explain": "Another name for a host because it sits at an end of communication and creates or receives data."
                  },
                  {
                        "q": "What is Packet?",
                        "options": [
                              "Shortest paths from one source to all destinations.",
                              "Multi-Exit Discriminator, a hint about preferred entry points into an AS.",
                              "A small chunk of data plus headers that can be forwarded through a network.",
                              "A method for computing paths through a network graph."
                        ],
                        "answer": 2,
                        "explain": "A small chunk of data plus headers that can be forwarded through a network."
                  },
                  {
                        "q": "What is Packet switch?",
                        "options": [
                              "Subscriber identity module used for cellular identity and authentication.",
                              "A device that receives packets and forwards them toward a destination.",
                              "It selects the most specific route for a destination.",
                              "An ongoing session while the user moves."
                        ],
                        "answer": 1,
                        "explain": "A device that receives packets and forwards them toward a destination."
                  },
                  {
                        "q": "What is Router?",
                        "options": [
                              "A packet switch that forwards network-layer datagrams between networks using IP information.",
                              "A local packet switch that forwards frames inside a LAN using MAC addresses.",
                              "It separates complex network work into smaller responsibilities.",
                              "A BGP attribute used inside an AS to prefer certain routes."
                        ],
                        "answer": 0,
                        "explain": "A packet switch that forwards network-layer datagrams between networks using IP information."
                  },
                  {
                        "q": "What is Link-layer switch?",
                        "options": [
                              "The logic that computes or installs forwarding behavior.",
                              "A graphics rendering technique for web pages.",
                              "A timer event that can trigger retransmission when an ACK is missing.",
                              "A local packet switch that forwards frames inside a LAN using MAC addresses."
                        ],
                        "answer": 3,
                        "explain": "A local packet switch that forwards frames inside a LAN using MAC addresses."
                  },
                  {
                        "q": "What is Communication link?",
                        "options": [
                              "It connects access networks to larger Internet infrastructure.",
                              "A one-way security relationship defining IPsec parameters and keys.",
                              "The physical or wireless path that carries bits between devices.",
                              "Cyclic Redundancy Check, a polynomial-based error detection method widely used in link-layer frames."
                        ],
                        "answer": 2,
                        "explain": "The physical or wireless path that carries bits between devices."
                  },
                  {
                        "q": "What is Access network?",
                        "options": [
                              "Bottlenecks, congestion, and protocol overhead reduce useful delivery rate.",
                              "The part of the network that connects end systems to the first router.",
                              "A receiver message confirming data arrival.",
                              "It sends arriving data to the correct application process."
                        ],
                        "answer": 1,
                        "explain": "The part of the network that connects end systems to the first router."
                  },
                  {
                        "q": "What is ISP?",
                        "options": [
                              "An Internet Service Provider that connects customers and other networks to the Internet.",
                              "A local packet switch that forwards frames inside a LAN using MAC addresses.",
                              "ESP can encrypt payloads and can also provide integrity/authentication.",
                              "Moving data from one node to its immediate neighbor."
                        ],
                        "answer": 0,
                        "explain": "An Internet Service Provider that connects customers and other networks to the Internet."
                  },
                  {
                        "q": "What is Protocol?",
                        "options": [
                              "Error detection information such as a CRC.",
                              "Cyclic Redundancy Check, a polynomial-based error detection method widely used in link-layer frames.",
                              "The software interface between an application process and the transport layer.",
                              "A rule set defining message format, message order, and actions when messages are sent or received."
                        ],
                        "answer": 3,
                        "explain": "A rule set defining message format, message order, and actions when messages are sent or received."
                  },
                  {
                        "q": "What is RFC?",
                        "options": [
                              "Transforming readable data into protected ciphertext.",
                              "Routers may have outdated or inconsistent distance estimates.",
                              "A Request for Comments document that records Internet standards and protocol specifications.",
                              "The communication channel between neighboring nodes."
                        ],
                        "answer": 2,
                        "explain": "A Request for Comments document that records Internet standards and protocol specifications."
                  },
                  {
                        "q": "What is IETF?",
                        "options": [
                              "A firewall that tracks connection or flow state instead of judging each packet in isolation.",
                              "The standards organization that develops many Internet protocols through RFCs.",
                              "Carrying multiple VLANs between switches.",
                              "Ethernet field identifying the upper-layer protocol carried in the frame."
                        ],
                        "answer": 1,
                        "explain": "The standards organization that develops many Internet protocols through RFCs."
                  },
                  {
                        "q": "What is Packet switching?",
                        "options": [
                              "A sharing method where packets from many users take turns using links.",
                              "The wireless medium for a transmission.",
                              "When packets are dropped because of errors, congestion, or failed paths.",
                              "A BGP message removing a previously advertised route."
                        ],
                        "answer": 0,
                        "explain": "A sharing method where packets from many users take turns using links."
                  },
                  {
                        "q": "What is Circuit switching?",
                        "options": [
                              "Shortest paths from one source to all destinations.",
                              "A distance-vector problem where bad news about a failed route spreads slowly.",
                              "Loss of signal strength over distance or through obstacles.",
                              "A communication method that reserves end-to-end resources before data is sent."
                        ],
                        "answer": 3,
                        "explain": "A communication method that reserves end-to-end resources before data is sent."
                  },
                  {
                        "q": "What is Delay?",
                        "options": [
                              "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME.",
                              "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages.",
                              "The time it takes data to travel from sender to receiver.",
                              "It organizes manageable device variables."
                        ],
                        "answer": 2,
                        "explain": "The time it takes data to travel from sender to receiver."
                  },
                  {
                        "q": "What is Loss?",
                        "options": [
                              "SMTP sends mail, while IMAP retrieves and synchronizes mail.",
                              "When packets are dropped because of errors, congestion, or failed paths.",
                              "They reduce overlap and interference when planned well.",
                              "Information flooded by routers describing their links and costs."
                        ],
                        "answer": 1,
                        "explain": "When packets are dropped because of errors, congestion, or failed paths."
                  },
                  {
                        "q": "What is Throughput?",
                        "options": [
                              "The actual rate at which useful data is delivered.",
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration.",
                              "A router connecting an AS to other autonomous systems.",
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity."
                        ],
                        "answer": 0,
                        "explain": "The actual rate at which useful data is delivered."
                  },
                  {
                        "q": "What is Bandwidth?",
                        "options": [
                              "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF.",
                              "Control information attached to a datagram for network-layer delivery.",
                              "A link-layer hardware address used for local frame delivery.",
                              "The maximum transmission rate a link can support."
                        ],
                        "answer": 3,
                        "explain": "The maximum transmission rate a link can support."
                  },
                  {
                        "q": "What is Encapsulation?",
                        "options": [
                              "The congestion window grows rapidly until a threshold or loss event.",
                              "The retransmission timer value derived from estimated RTT and variation.",
                              "The process of wrapping data with headers as it moves down network layers.",
                              "A logical path that behaves like a dedicated circuit."
                        ],
                        "answer": 2,
                        "explain": "The process of wrapping data with headers as it moves down network layers."
                  },
                  {
                        "q": "What is Internet stack?",
                        "options": [
                              "A service that establishes state before data transfer.",
                              "The layered model of application, transport, network, link, and physical responsibilities.",
                              "The divisor pattern used in CRC computation.",
                              "Signal copies arriving by different paths because of reflection."
                        ],
                        "answer": 1,
                        "explain": "The layered model of application, transport, network, link, and physical responsibilities."
                  },
                  {
                        "q": "Which delay type happens because a packet waits in a router buffer?",
                        "options": [
                              "Queuing delay",
                              "The network a roaming user currently attaches to.",
                              "A BGP message removing a previously advertised route.",
                              "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol."
                        ],
                        "answer": 0,
                        "explain": "Queuing delay"
                  },
                  {
                        "q": "Which delay type depends on link bandwidth and packet length?",
                        "options": [
                              "A shared medium heard by multiple nodes.",
                              "The Mobile IP component that forwards traffic to the mobile node.",
                              "A method for computing paths through a network graph.",
                              "Transmission delay"
                        ],
                        "answer": 3,
                        "explain": "Transmission delay"
                  },
                  {
                        "q": "Which delay type depends on the physical distance and signal speed?",
                        "options": [
                              "It sends arriving data to the correct application process.",
                              "A physical cable type used only for local wiring.",
                              "Propagation delay",
                              "The actual rate at which useful data is delivered."
                        ],
                        "answer": 2,
                        "explain": "Propagation delay"
                  },
                  {
                        "q": "Why can packet loss occur during congestion?",
                        "options": [
                              "Routing between autonomous systems.",
                              "Router buffers can overflow and drop packets.",
                              "A BGP message removing a previously advertised route.",
                              "Peers contribute resources as more users join."
                        ],
                        "answer": 1,
                        "explain": "Router buffers can overflow and drop packets."
                  },
                  {
                        "q": "Why is layering useful?",
                        "options": [
                              "It separates complex network work into smaller responsibilities.",
                              "After multiple duplicate ACKs indicate likely loss.",
                              "Forwarding packets to the mobile node's current location.",
                              "Additive Increase Multiplicative Decrease, Classic TCP behavior: increase the congestion window gradually, then cut it back sharply after congestion."
                        ],
                        "answer": 0,
                        "explain": "It separates complex network work into smaller responsibilities."
                  },
                  {
                        "q": "What does a protocol standard make possible?",
                        "options": [
                              "A BGP message removing a previously advertised route.",
                              "A simple mail access protocol that downloads messages from a server.",
                              "BGP-learned routes inside one autonomous system.",
                              "Interoperability between different systems and vendors."
                        ],
                        "answer": 3,
                        "explain": "Interoperability between different systems and vendors."
                  },
                  {
                        "q": "Why can throughput be lower than bandwidth?",
                        "options": [
                              "An ACK repeated for the same data, often hinting that later data arrived but a gap exists.",
                              "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery.",
                              "Bottlenecks, congestion, and protocol overhead reduce useful delivery rate.",
                              "Out-of-order packets may arrive before missing packets are retransmitted."
                        ],
                        "answer": 2,
                        "explain": "Bottlenecks, congestion, and protocol overhead reduce useful delivery rate."
                  },
                  {
                        "q": "What role does an ISP play?",
                        "options": [
                              "A label is added to the packet.",
                              "It connects access networks to larger Internet infrastructure.",
                              "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain.",
                              "Links, costs, or routers can fail or change."
                        ],
                        "answer": 1,
                        "explain": "It connects access networks to larger Internet infrastructure."
                  },
                  {
                        "q": "What is a network core?",
                        "options": [
                              "The mesh of packet switches and links that carries traffic across networks.",
                              "A configuration command may fail or produce unexpected state.",
                              "A device that receives packets and forwards them toward a destination.",
                              "The network a roaming user currently attaches to."
                        ],
                        "answer": 0,
                        "explain": "The mesh of packet switches and links that carries traffic across networks."
                  },
                  {
                        "q": "What is the network edge?",
                        "options": [
                              "A method that prevents a receiver from being overwhelmed by sender rate or buffer pressure.",
                              "A public-key mechanism that verifies signer identity and data integrity.",
                              "A mail access protocol that keeps messages synchronized on a server.",
                              "The hosts and access networks where users and applications connect."
                        ],
                        "answer": 3,
                        "explain": "The hosts and access networks where users and applications connect."
                  }
            ]
      },
      {
            "title": "1.2 Practice: Application Layer Protocols and Services",
            "description": "30-item practice test for Application Layer Protocols and Services.",
            "questions": [
                  {
                        "q": "What is Application layer?",
                        "options": [
                              "Ethernet Frame Check Sequence field carrying a CRC for error detection.",
                              "A logical path that behaves like a dedicated circuit.",
                              "The top network layer where applications define messages and services.",
                              "Multiple devices use the same radio medium."
                        ],
                        "answer": 2,
                        "explain": "The top network layer where applications define messages and services."
                  },
                  {
                        "q": "What is Process?",
                        "options": [
                              "The receiver's ability to accept data.",
                              "A running program that sends or receives messages through a socket.",
                              "The VLAN to which the frame belongs.",
                              "Information that a destination prefix can be reached."
                        ],
                        "answer": 1,
                        "explain": "A running program that sends or receives messages through a socket."
                  },
                  {
                        "q": "What is Socket?",
                        "options": [
                              "The software interface between an application process and the transport layer.",
                              "Internet Key Exchange, used to negotiate IPsec security associations.",
                              "They bind public keys to identities.",
                              "Private connectivity over shared infrastructure."
                        ],
                        "answer": 0,
                        "explain": "The software interface between an application process and the transport layer."
                  },
                  {
                        "q": "What is Client-server?",
                        "options": [
                              "Subscriber identity module used for cellular identity and authentication.",
                              "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol.",
                              "The divisor pattern used in CRC computation.",
                              "An architecture where clients request service from an always-on server."
                        ],
                        "answer": 3,
                        "explain": "An architecture where clients request service from an always-on server."
                  },
                  {
                        "q": "What is Peer-to-peer?",
                        "options": [
                              "A cellular generation using packet-switched IP-based design.",
                              "The entire original IP datagram, placed inside a new outer IP packet.",
                              "An architecture where end systems communicate directly and share roles.",
                              "Eavesdropping and tampering when configured correctly."
                        ],
                        "answer": 2,
                        "explain": "An architecture where end systems communicate directly and share roles."
                  },
                  {
                        "q": "What is HTTP?",
                        "options": [
                              "Adding boundaries and link-layer information around data.",
                              "An application-layer request/response protocol for transferring web resources and API data.",
                              "To improve scalability and reduce routing overhead.",
                              "Forwarding packets to the mobile node's current location."
                        ],
                        "answer": 1,
                        "explain": "An application-layer request/response protocol for transferring web resources and API data."
                  },
                  {
                        "q": "What is Persistent HTTP?",
                        "options": [
                              "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses.",
                              "It scales name resolution across the global Internet.",
                              "Adding boundaries and link-layer information around data.",
                              "A rule set defining message format, message order, and actions when messages are sent or received."
                        ],
                        "answer": 0,
                        "explain": "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses."
                  },
                  {
                        "q": "What is Cookie?",
                        "options": [
                              "Forwarding packets to the mobile node's current location.",
                              "An agreement where networks exchange traffic, often without payment.",
                              "The software interface between an application process and the transport layer.",
                              "Small data used by websites to maintain state across otherwise stateless HTTP requests."
                        ],
                        "answer": 3,
                        "explain": "Small data used by websites to maintain state across otherwise stateless HTTP requests."
                  },
                  {
                        "q": "What is Web cache?",
                        "options": [
                              "Business or administrative rules that influence route selection.",
                              "Information flooded by routers describing their links and costs.",
                              "A proxy that stores web objects closer to clients to reduce delay and traffic.",
                              "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses."
                        ],
                        "answer": 2,
                        "explain": "A proxy that stores web objects closer to clients to reduce delay and traffic."
                  },
                  {
                        "q": "What is DNS?",
                        "options": [
                              "A BGP message announcing reachability to a prefix.",
                              "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME.",
                              "Multiple devices use the same radio medium.",
                              "The IPsec AH header used for integrity and data origin authentication."
                        ],
                        "answer": 1,
                        "explain": "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME."
                  },
                  {
                        "q": "What is DNS resolver?",
                        "options": [
                              "A recursive or caching service that resolves DNS questions on behalf of clients.",
                              "Delivery is attempted but not guaranteed.",
                              "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility.",
                              "The Mobile IP component that forwards traffic to the mobile node."
                        ],
                        "answer": 0,
                        "explain": "A recursive or caching service that resolves DNS questions on behalf of clients."
                  },
                  {
                        "q": "What is Authoritative DNS?",
                        "options": [
                              "It may retransmit data believed to be lost.",
                              "Additive Increase Multiplicative Decrease, Classic TCP behavior: increase the congestion window gradually, then cut it back sharply after congestion.",
                              "It does not yet know the destination MAC's port.",
                              "A DNS server authoritative for a zone, returning answers from that zone's configured records."
                        ],
                        "answer": 3,
                        "explain": "A DNS server authoritative for a zone, returning answers from that zone's configured records."
                  },
                  {
                        "q": "What is SMTP?",
                        "options": [
                              "The Mobile IP component that forwards traffic to the mobile node.",
                              "Reusing a valid message later to trick a protocol.",
                              "The protocol used to send email from clients or mail servers.",
                              "A sum-based error detection value."
                        ],
                        "answer": 2,
                        "explain": "The protocol used to send email from clients or mail servers."
                  },
                  {
                        "q": "What is IMAP?",
                        "options": [
                              "A running program that sends or receives messages through a socket.",
                              "A mail access protocol that keeps messages synchronized on a server.",
                              "Control information placed before the payload.",
                              "It can provide timely performance and state data."
                        ],
                        "answer": 1,
                        "explain": "A mail access protocol that keeps messages synchronized on a server."
                  },
                  {
                        "q": "What is POP3?",
                        "options": [
                              "A simple mail access protocol that downloads messages from a server.",
                              "Security Policy Database, which says what traffic should be protected or bypassed.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers.",
                              "The part of a mobile network connecting devices to the core."
                        ],
                        "answer": 0,
                        "explain": "A simple mail access protocol that downloads messages from a server."
                  },
                  {
                        "q": "What is CDN?",
                        "options": [
                              "The base stations and radio systems connecting devices.",
                              "It resolves MAC addresses only within a LAN/broadcast domain.",
                              "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses.",
                              "A distributed content system that serves cached or replicated objects from locations closer to users."
                        ],
                        "answer": 3,
                        "explain": "A distributed content system that serves cached or replicated objects from locations closer to users."
                  },
                  {
                        "q": "What is DASH?",
                        "options": [
                              "Lower-cost paths are preferred.",
                              "The set of devices that receive a layer-2 broadcast.",
                              "Dynamic Adaptive Streaming over HTTP, where a client selects segment bitrates based on current network and playback conditions.",
                              "Bits at the start of an Ethernet frame used for synchronization."
                        ],
                        "answer": 2,
                        "explain": "Dynamic Adaptive Streaming over HTTP, where a client selects segment bitrates based on current network and playback conditions."
                  },
                  {
                        "q": "What is RTP?",
                        "options": [
                              "The Internet Protocol version with 128-bit addresses, extension headers, and source-only fragmentation.",
                              "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams.",
                              "It needs reliable and ordered delivery.",
                              "Internet Key Exchange, used to negotiate IPsec security associations."
                        ],
                        "answer": 1,
                        "explain": "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams."
                  },
                  {
                        "q": "What is API?",
                        "options": [
                              "A defined interface that lets software components request services or data.",
                              "Address Resolution Protocol, used on IPv4 LANs to map a next-hop IP address to a hardware/MAC address.",
                              "The system used by administrators to monitor and control devices.",
                              "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity."
                        ],
                        "answer": 0,
                        "explain": "A defined interface that lets software components request services or data."
                  },
                  {
                        "q": "What is Port number?",
                        "options": [
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "A shared medium heard by multiple nodes.",
                              "It selects the most specific route for a destination.",
                              "A transport identifier that helps deliver data to the correct application process."
                        ],
                        "answer": 3,
                        "explain": "A transport identifier that helps deliver data to the correct application process."
                  },
                  {
                        "q": "Why are sockets important?",
                        "options": [
                              "A service is useless if legitimate users cannot reach it.",
                              "IPsec mode that encapsulates and protects the entire original IP datagram inside a new outer IP datagram.",
                              "They connect application processes to transport services.",
                              "A high-speed network connecting large numbers of servers."
                        ],
                        "answer": 2,
                        "explain": "They connect application processes to transport services."
                  },
                  {
                        "q": "Why does DNS use a hierarchy?",
                        "options": [
                              "Choosing the closest exit point from an AS to hand traffic off quickly.",
                              "It scales name resolution across the global Internet.",
                              "TCP sender-side limit on how much data can be in flight due to congestion control.",
                              "A sum-based error detection value."
                        ],
                        "answer": 1,
                        "explain": "It scales name resolution across the global Internet."
                  },
                  {
                        "q": "Why does caching help the Web?",
                        "options": [
                              "It reduces response time and upstream traffic.",
                              "Adding boundaries and link-layer information around data.",
                              "Who created the message.",
                              "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices."
                        ],
                        "answer": 0,
                        "explain": "It reduces response time and upstream traffic."
                  },
                  {
                        "q": "What makes HTTP stateless?",
                        "options": [
                              "Interoperability between different systems and vendors.",
                              "Subscriber identity module used for cellular identity and authentication.",
                              "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source.",
                              "Each request can be handled without remembering previous requests."
                        ],
                        "answer": 3,
                        "explain": "Each request can be handled without remembering previous requests."
                  },
                  {
                        "q": "Why do video systems use adaptive streaming?",
                        "options": [
                              "Sending a frame out multiple ports when the destination is unknown or broadcast.",
                              "Policy, path exploration, and distributed updates take time.",
                              "They adjust quality when available throughput changes.",
                              "The IPsec AH header used for integrity and data origin authentication."
                        ],
                        "answer": 2,
                        "explain": "They adjust quality when available throughput changes."
                  },
                  {
                        "q": "What is a URL used for?",
                        "options": [
                              "A cellular generation using packet-switched IP-based design.",
                              "It identifies a resource and how to access it.",
                              "A simple mail access protocol that downloads messages from a server.",
                              "HTTP protected by TLS."
                        ],
                        "answer": 1,
                        "explain": "It identifies a resource and how to access it."
                  },
                  {
                        "q": "What does SMTP do that IMAP does not?",
                        "options": [
                              "SMTP sends mail, while IMAP retrieves and synchronizes mail.",
                              "Object Identifier, a numeric name for a managed variable.",
                              "Business or administrative rules that influence route selection.",
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing."
                        ],
                        "answer": 0,
                        "explain": "SMTP sends mail, while IMAP retrieves and synchronizes mail."
                  },
                  {
                        "q": "What is a server process?",
                        "options": [
                              "The layer that provides logical communication between application processes.",
                              "A switch process that records which MAC addresses are reachable through which ports.",
                              "The subscriber's original carrier network.",
                              "A running program waiting for client requests."
                        ],
                        "answer": 3,
                        "explain": "A running program waiting for client requests."
                  },
                  {
                        "q": "Why is P2P scalable?",
                        "options": [
                              "An architecture where end systems communicate directly and share roles.",
                              "A programming style that does not affect packet delivery.",
                              "Peers contribute resources as more users join.",
                              "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control."
                        ],
                        "answer": 2,
                        "explain": "Peers contribute resources as more users join."
                  },
                  {
                        "q": "What is a CDN edge server?",
                        "options": [
                              "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place.",
                              "A nearby server that delivers cached content to users.",
                              "A radio access point connecting wireless devices to network infrastructure.",
                              "A service model that tries to deliver data but gives no guarantee."
                        ],
                        "answer": 1,
                        "explain": "A nearby server that delivers cached content to users."
                  }
            ]
      },
      {
            "title": "2.1A Practice: Transport Layer Fundamentals",
            "description": "30-item practice test for Transport Layer Fundamentals.",
            "questions": [
                  {
                        "q": "What is Transport layer?",
                        "options": [
                              "The layer that provides logical communication between application processes.",
                              "A trusted party that signs certificates.",
                              "Moving data from one node to its immediate neighbor.",
                              "Clear To Send, a response allowing a sender to transmit."
                        ],
                        "answer": 0,
                        "explain": "The layer that provides logical communication between application processes."
                  },
                  {
                        "q": "What is Segment?",
                        "options": [
                              "A shortest-path algorithm used in link-state routing.",
                              "The part of the network that connects end systems to the first router.",
                              "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery.",
                              "The transport-layer unit that carries application data and a transport header."
                        ],
                        "answer": 3,
                        "explain": "The transport-layer unit that carries application data and a transport header."
                  },
                  {
                        "q": "What is Multiplexing?",
                        "options": [
                              "It separates complex network work into smaller responsibilities.",
                              "Reporting errors and supporting diagnostics.",
                              "Collecting data from many processes so they can share the network.",
                              "Authentication Header, providing packet integrity and data origin authentication without encryption."
                        ],
                        "answer": 2,
                        "explain": "Collecting data from many processes so they can share the network."
                  },
                  {
                        "q": "What is Demultiplexing?",
                        "options": [
                              "Intrusion Detection System that monitors network or host activity and raises alerts on suspicious behavior.",
                              "Delivering received segments to the correct socket or process.",
                              "Lower-cost paths are preferred.",
                              "It does not yet know the destination MAC's port."
                        ],
                        "answer": 1,
                        "explain": "Delivering received segments to the correct socket or process."
                  },
                  {
                        "q": "What is Port?",
                        "options": [
                              "A number used to identify a specific application process on a host.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers.",
                              "Link utilization and throughput.",
                              "A BGP attribute used inside an AS to prefer certain routes."
                        ],
                        "answer": 0,
                        "explain": "A number used to identify a specific application process on a host."
                  },
                  {
                        "q": "What is Socket pair?",
                        "options": [
                              "Message Authentication Code, used to verify authenticity and integrity with a shared key.",
                              "Label Switched Path, the route MPLS packets follow through a network.",
                              "Techniques that detect likely bit corruption; they detect errors but do not always correct them.",
                              "The addresses and ports that identify a transport conversation."
                        ],
                        "answer": 3,
                        "explain": "The addresses and ports that identify a transport conversation."
                  },
                  {
                        "q": "What is UDP?",
                        "options": [
                              "The software control point in an SDN architecture.",
                              "Loss of signal strength over distance or through obstacles.",
                              "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection.",
                              "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer."
                        ],
                        "answer": 2,
                        "explain": "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection."
                  },
                  {
                        "q": "What is TCP?",
                        "options": [
                              "Packets arrive faster than they can be transmitted.",
                              "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control.",
                              "Transforming readable data into protected ciphertext.",
                              "After multiple duplicate ACKs indicate likely loss."
                        ],
                        "answer": 1,
                        "explain": "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control."
                  },
                  {
                        "q": "What is Checksum?",
                        "options": [
                              "A value used to detect bit errors in a segment.",
                              "A simple bit added to make the number of ones even or odd.",
                              "A suite of protocols that secures IP datagrams.",
                              "Packets circulate because routers point traffic back toward each other."
                        ],
                        "answer": 0,
                        "explain": "A value used to detect bit errors in a segment."
                  },
                  {
                        "q": "What is Best effort?",
                        "options": [
                              "External BGP sessions between routers in different autonomous systems.",
                              "The IEEE 802.11 wireless LAN MAC and PHY standards commonly marketed as Wi-Fi.",
                              "Identifying a specific management variable.",
                              "A service model that tries to deliver data but gives no guarantee."
                        ],
                        "answer": 3,
                        "explain": "A service model that tries to deliver data but gives no guarantee."
                  },
                  {
                        "q": "What is Connection-oriented?",
                        "options": [
                              "Network Address Translation, rewriting address and often port fields between private and public address realms.",
                              "A 4G data-plane anchor that forwards user traffic.",
                              "A service that establishes state before data transfer.",
                              "A router, switch, server, or access point being monitored or configured."
                        ],
                        "answer": 2,
                        "explain": "A service that establishes state before data transfer."
                  },
                  {
                        "q": "What is Three-way handshake?",
                        "options": [
                              "Signal copies arriving by different paths because of reflection.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers.",
                              "The data link layer unit that carries a network-layer packet.",
                              "The network currently serving a roaming user."
                        ],
                        "answer": 1,
                        "explain": "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers."
                  },
                  {
                        "q": "What is Flow control?",
                        "options": [
                              "Receiver-side control that keeps a sender from overrunning the receiver's available buffer.",
                              "Internal private hosts are hidden behind translated addresses.",
                              "Making a network path behave like a logical link or service.",
                              "Identity, mobility, gateways, and Internet connectivity."
                        ],
                        "answer": 0,
                        "explain": "Receiver-side control that keeps a sender from overrunning the receiver's available buffer."
                  },
                  {
                        "q": "What is Receive buffer?",
                        "options": [
                              "Another name for a host because it sits at an end of communication and creates or receives data.",
                              "The transport-layer unit that carries application data and a transport header.",
                              "Propagation delay",
                              "Memory used by the receiver to hold incoming data before the application reads it."
                        ],
                        "answer": 3,
                        "explain": "Memory used by the receiver to hold incoming data before the application reads it."
                  },
                  {
                        "q": "What is Congestion control?",
                        "options": [
                              "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF.",
                              "The 32-bit Internet Protocol version still widely used.",
                              "Sender behavior that reduces or grows the sending rate to avoid overloading the network.",
                              "Operators can steer flows over selected paths."
                        ],
                        "answer": 2,
                        "explain": "Sender behavior that reduces or grows the sending rate to avoid overloading the network."
                  },
                  {
                        "q": "What is MSS?",
                        "options": [
                              "A service that establishes state before data transfer.",
                              "Maximum Segment Size, the largest TCP payload placed in one segment.",
                              "A scalable data-center topology with leaf access switches and spine core switches.",
                              "Techniques that detect likely bit corruption; they detect errors but do not always correct them."
                        ],
                        "answer": 1,
                        "explain": "Maximum Segment Size, the largest TCP payload placed in one segment."
                  },
                  {
                        "q": "What is MTU?",
                        "options": [
                              "Maximum Transmission Unit, the largest frame payload a link can carry.",
                              "Traffic or behavior that deviates from normal patterns.",
                              "Handoffs and wireless loss can look like congestion.",
                              "A distributed content system that serves cached or replicated objects from locations closer to users."
                        ],
                        "answer": 0,
                        "explain": "Maximum Transmission Unit, the largest frame payload a link can carry."
                  },
                  {
                        "q": "What is Sequence number?",
                        "options": [
                              "A Wi-Fi acknowledgment that confirms frame reception.",
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "Header fields such as addresses, ports, and protocol.",
                              "A number that identifies byte positions for ordering and reliability."
                        ],
                        "answer": 3,
                        "explain": "A number that identifies byte positions for ordering and reliability."
                  },
                  {
                        "q": "What is Acknowledgment?",
                        "options": [
                              "The actual rate at which useful data is delivered.",
                              "Collecting data from many processes so they can share the network.",
                              "A receiver message confirming data arrival.",
                              "Quickly moving traffic to a backup path after failure."
                        ],
                        "answer": 2,
                        "explain": "A receiver message confirming data arrival."
                  },
                  {
                        "q": "What is Timeout?",
                        "options": [
                              "A radio access point connecting wireless devices to network infrastructure.",
                              "A timer event that can trigger retransmission when an ACK is missing.",
                              "The actual rate at which useful data is delivered.",
                              "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams."
                        ],
                        "answer": 1,
                        "explain": "A timer event that can trigger retransmission when an ACK is missing."
                  },
                  {
                        "q": "What problem does demultiplexing solve?",
                        "options": [
                              "It sends arriving data to the correct application process.",
                              "Management Information Base, a structured collection of managed variables.",
                              "The time it takes data to travel from sender to receiver.",
                              "A temporary symmetric key used after secure setup."
                        ],
                        "answer": 0,
                        "explain": "It sends arriving data to the correct application process."
                  },
                  {
                        "q": "Why might DNS use UDP?",
                        "options": [
                              "Information flooded by routers describing their links and costs.",
                              "The layer that transfers frames across a single link or hop.",
                              "Links, costs, or routers can fail or change.",
                              "A small request can be sent quickly without connection setup."
                        ],
                        "answer": 3,
                        "explain": "A small request can be sent quickly without connection setup."
                  },
                  {
                        "q": "Why might file transfer use TCP?",
                        "options": [
                              "A paid service where one network carries another network's traffic to the Internet.",
                              "A client-server protocol that leases IP configuration such as address, mask, gateway, and DNS servers to hosts.",
                              "It needs reliable and ordered delivery.",
                              "A link-state routing protocol used in some large provider networks."
                        ],
                        "answer": 2,
                        "explain": "It needs reliable and ordered delivery."
                  },
                  {
                        "q": "What does a checksum detect?",
                        "options": [
                              "Using a visited carrier network while subscribed to a home carrier.",
                              "Bit errors in the segment.",
                              "Transforming readable data into protected ciphertext.",
                              "IDS method that looks for deviations from normal behavior."
                        ],
                        "answer": 1,
                        "explain": "Bit errors in the segment."
                  },
                  {
                        "q": "Why does TCP use a handshake?",
                        "options": [
                              "It establishes connection state before data transfer.",
                              "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place.",
                              "The base stations and radio systems connecting devices.",
                              "A running program that sends or receives messages through a socket."
                        ],
                        "answer": 0,
                        "explain": "It establishes connection state before data transfer."
                  },
                  {
                        "q": "How is flow control different from congestion control?",
                        "options": [
                              "The set of devices that receive a layer-2 broadcast.",
                              "The hosts and access networks where users and applications connect.",
                              "A preferred route because it may generate revenue.",
                              "Flow control protects the receiver; congestion control protects the network."
                        ],
                        "answer": 3,
                        "explain": "Flow control protects the receiver; congestion control protects the network."
                  },
                  {
                        "q": "Why are sequence numbers useful?",
                        "options": [
                              "Internet Key Exchange, used to negotiate IPsec security associations.",
                              "Control information attached to a datagram for network-layer delivery.",
                              "They let TCP order data and detect missing bytes.",
                              "The network name identifying a Wi-Fi service set."
                        ],
                        "answer": 2,
                        "explain": "They let TCP order data and detect missing bytes."
                  },
                  {
                        "q": "What does best effort mean?",
                        "options": [
                              "A one-way function producing a fixed-size digest from data.",
                              "Delivery is attempted but not guaranteed.",
                              "Separating public services from internal networks.",
                              "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path."
                        ],
                        "answer": 1,
                        "explain": "Delivery is attempted but not guaranteed."
                  },
                  {
                        "q": "What happens when TCP times out?",
                        "options": [
                              "It may retransmit data believed to be lost.",
                              "A shortest-path algorithm used in link-state routing.",
                              "Keeping services reachable for legitimate users.",
                              "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes."
                        ],
                        "answer": 0,
                        "explain": "It may retransmit data believed to be lost."
                  },
                  {
                        "q": "What is a socket address made of?",
                        "options": [
                              "A database storing active security associations.",
                              "Routing between autonomous systems.",
                              "Programmable and centralized network control.",
                              "IP address and port information."
                        ],
                        "answer": 3,
                        "explain": "IP address and port information."
                  }
            ]
      },
      {
            "title": "2.1B Practice: Reliable Data Transfer and TCP Control",
            "description": "30-item practice test for Reliable Data Transfer and TCP Control.",
            "questions": [
                  {
                        "q": "What is Reliable data transfer?",
                        "options": [
                              "A secret key kept by its owner in asymmetric cryptography.",
                              "A service is useless if legitimate users cannot reach it.",
                              "A service that delivers data correctly and in order despite loss or corruption.",
                              "Transmission delay"
                        ],
                        "answer": 2,
                        "explain": "A service that delivers data correctly and in order despite loss or corruption."
                  },
                  {
                        "q": "What is rdt?",
                        "options": [
                              "They connect application processes to transport services.",
                              "A family of teaching protocols used to explain reliability mechanisms.",
                              "Round-trip time between sending data and receiving its acknowledgment.",
                              "A database storing active security associations."
                        ],
                        "answer": 1,
                        "explain": "A family of teaching protocols used to explain reliability mechanisms."
                  },
                  {
                        "q": "What is Stop-and-wait?",
                        "options": [
                              "A simple method that sends one packet then waits for an ACK.",
                              "A BGP message removing a previously advertised route.",
                              "A mail access protocol that keeps messages synchronized on a server.",
                              "BGP-learned routes inside one autonomous system."
                        ],
                        "answer": 0,
                        "explain": "A simple method that sends one packet then waits for an ACK."
                  },
                  {
                        "q": "What is Pipelining?",
                        "options": [
                              "Authentication Header, providing packet integrity and data origin authentication without encryption.",
                              "It separates complex network work into smaller responsibilities.",
                              "Reporting errors and supporting diagnostics.",
                              "Sending multiple packets before waiting for all acknowledgments."
                        ],
                        "answer": 3,
                        "explain": "Sending multiple packets before waiting for all acknowledgments."
                  },
                  {
                        "q": "What is Sliding window?",
                        "options": [
                              "Keys and parameters for IPsec security associations.",
                              "A logical path that behaves like a dedicated circuit.",
                              "A limit on how many unacknowledged packets or bytes may be in flight.",
                              "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes."
                        ],
                        "answer": 2,
                        "explain": "A limit on how many unacknowledged packets or bytes may be in flight."
                  },
                  {
                        "q": "What is Go-Back-N?",
                        "options": [
                              "Multiple devices use the same radio medium.",
                              "A pipelined protocol that retransmits a lost packet and later packets in the window.",
                              "A mail access protocol that keeps messages synchronized on a server.",
                              "They let TCP order data and detect missing bytes."
                        ],
                        "answer": 1,
                        "explain": "A pipelined protocol that retransmits a lost packet and later packets in the window."
                  },
                  {
                        "q": "What is Selective Repeat?",
                        "options": [
                              "A pipelined protocol that retransmits only specific missing packets.",
                              "Sending and receiving at the same time.",
                              "The original packet's upper-layer payload; the original IP header remains visible.",
                              "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages."
                        ],
                        "answer": 0,
                        "explain": "A pipelined protocol that retransmits only specific missing packets."
                  },
                  {
                        "q": "What is Cumulative ACK?",
                        "options": [
                              "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags.",
                              "Security Policy Database, which says what traffic should be protected or bypassed.",
                              "A link-state routing protocol used in some large provider networks.",
                              "An acknowledgment that confirms receipt of all bytes or packets up to a stated point."
                        ],
                        "answer": 3,
                        "explain": "An acknowledgment that confirms receipt of all bytes or packets up to a stated point."
                  },
                  {
                        "q": "What is Duplicate ACK?",
                        "options": [
                              "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices.",
                              "To reuse spectrum and manage coverage.",
                              "An ACK repeated for the same data, often hinting that later data arrived but a gap exists.",
                              "Wireless frames are more likely to be lost or corrupted."
                        ],
                        "answer": 2,
                        "explain": "An ACK repeated for the same data, often hinting that later data arrived but a gap exists."
                  },
                  {
                        "q": "What is Fast retransmit?",
                        "options": [
                              "The wireless medium for a transmission.",
                              "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer.",
                              "Wireless mode where devices communicate through an access point.",
                              "The ability to keep network service while changing attachment points."
                        ],
                        "answer": 1,
                        "explain": "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer."
                  },
                  {
                        "q": "What is RTT?",
                        "options": [
                              "Round-trip time between sending data and receiving its acknowledgment.",
                              "To reduce routing table size.",
                              "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain.",
                              "Unwanted signals that disrupt communication."
                        ],
                        "answer": 0,
                        "explain": "Round-trip time between sending data and receiving its acknowledgment."
                  },
                  {
                        "q": "What is EstimatedRTT?",
                        "options": [
                              "The wireless medium for a transmission.",
                              "Communication where a device cannot send and receive at the same time.",
                              "Detecting unauthorized changes to data.",
                              "TCP's smoothed estimate of round-trip time."
                        ],
                        "answer": 3,
                        "explain": "TCP's smoothed estimate of round-trip time."
                  },
                  {
                        "q": "What is DevRTT?",
                        "options": [
                              "Distributing traffic across multiple paths or servers.",
                              "A service that delivers data correctly and in order despite loss or corruption.",
                              "An estimate of RTT variation used to set safer timeouts.",
                              "ESP can encrypt payloads and can also provide integrity/authentication."
                        ],
                        "answer": 2,
                        "explain": "An estimate of RTT variation used to set safer timeouts."
                  },
                  {
                        "q": "What is TimeoutInterval?",
                        "options": [
                              "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME.",
                              "The retransmission timer value derived from estimated RTT and variation.",
                              "They reduce overlap and interference when planned well.",
                              "Encapsulating data into protocol data units; at the link layer, this usually means placing a network-layer packet into a frame."
                        ],
                        "answer": 1,
                        "explain": "The retransmission timer value derived from estimated RTT and variation."
                  },
                  {
                        "q": "What is Congestion window?",
                        "options": [
                              "TCP sender-side limit on how much data can be in flight due to congestion control.",
                              "They connect application processes to transport services.",
                              "An intra-AS link-state routing protocol.",
                              "Packets waiting because the output link or processing path is busy."
                        ],
                        "answer": 0,
                        "explain": "TCP sender-side limit on how much data can be in flight due to congestion control."
                  },
                  {
                        "q": "What is Slow start?",
                        "options": [
                              "It may detect but not correct errors.",
                              "A technique that helps reduce certain distance-vector loops.",
                              "A secure virtual private network built across shared infrastructure.",
                              "TCP phase where the congestion window grows exponentially from a small starting point until a threshold or loss event."
                        ],
                        "answer": 3,
                        "explain": "TCP phase where the congestion window grows exponentially from a small starting point until a threshold or loss event."
                  },
                  {
                        "q": "What is Congestion avoidance?",
                        "options": [
                              "Reporting errors and supporting diagnostics.",
                              "An attacker secretly intercepting and possibly altering communication.",
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity.",
                              "It reduces outage time after a failure."
                        ],
                        "answer": 2,
                        "explain": "TCP phase where the congestion window grows roughly linearly to probe for more capacity."
                  },
                  {
                        "q": "What is Fast recovery?",
                        "options": [
                              "It separates complex network work into smaller responsibilities.",
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing.",
                              "It selects the most specific route for a destination.",
                              "A number used to identify a specific application process on a host."
                        ],
                        "answer": 1,
                        "explain": "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing."
                  },
                  {
                        "q": "What is AIMD?",
                        "options": [
                              "Additive Increase Multiplicative Decrease, Classic TCP behavior: increase the congestion window gradually, then cut it back sharply after congestion.",
                              "Out-of-order packets may arrive before missing packets are retransmitted.",
                              "TCP's smoothed estimate of round-trip time.",
                              "A cellular generation using packet-switched IP-based design."
                        ],
                        "answer": 0,
                        "explain": "Additive Increase Multiplicative Decrease, Classic TCP behavior: increase the congestion window gradually, then cut it back sharply after congestion."
                  },
                  {
                        "q": "What is TCP Reno?",
                        "options": [
                              "The layer that transfers frames across a single link or hop.",
                              "Packets may need fragmentation or path MTU discovery.",
                              "A router that forwards MPLS traffic based on label values.",
                              "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery."
                        ],
                        "answer": 3,
                        "explain": "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery."
                  },
                  {
                        "q": "Why is stop-and-wait inefficient on long-delay links?",
                        "options": [
                              "A sharing method where packets from many users take turns using links.",
                              "Error detection information such as a CRC.",
                              "The sender is idle while waiting for each ACK.",
                              "The IEEE 802.11 wireless LAN MAC and PHY standards commonly marketed as Wi-Fi."
                        ],
                        "answer": 2,
                        "explain": "The sender is idle while waiting for each ACK."
                  },
                  {
                        "q": "What does pipelining improve?",
                        "options": [
                              "It resolves MAC addresses only within a LAN/broadcast domain.",
                              "Link utilization and throughput.",
                              "A logical path that behaves like a dedicated circuit.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers."
                        ],
                        "answer": 1,
                        "explain": "Link utilization and throughput."
                  },
                  {
                        "q": "Why does Selective Repeat need buffering?",
                        "options": [
                              "Out-of-order packets may arrive before missing packets are retransmitted.",
                              "The mobile device, such as a phone or cellular modem.",
                              "A DNS server authoritative for a zone, returning answers from that zone's configured records.",
                              "Router component that receives packets and may do lookup."
                        ],
                        "answer": 0,
                        "explain": "Out-of-order packets may arrive before missing packets are retransmitted."
                  },
                  {
                        "q": "When can fast retransmit happen?",
                        "options": [
                              "The base stations and radio systems connecting devices.",
                              "A high-speed network connecting large numbers of servers.",
                              "Identity, mobility, gateways, and Internet connectivity.",
                              "After multiple duplicate ACKs indicate likely loss."
                        ],
                        "answer": 3,
                        "explain": "After multiple duplicate ACKs indicate likely loss."
                  },
                  {
                        "q": "Why does TCP estimate RTT?",
                        "options": [
                              "The communication channel between neighboring nodes.",
                              "It does not yet know the destination MAC's port.",
                              "It needs a reasonable retransmission timeout.",
                              "Known attack patterns."
                        ],
                        "answer": 2,
                        "explain": "It needs a reasonable retransmission timeout."
                  },
                  {
                        "q": "What happens in slow start?",
                        "options": [
                              "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label.",
                              "The congestion window grows rapidly until a threshold or loss event.",
                              "An attacker secretly intercepting and possibly altering communication.",
                              "Multiple devices may try to transmit at the same time."
                        ],
                        "answer": 1,
                        "explain": "The congestion window grows rapidly until a threshold or loss event."
                  },
                  {
                        "q": "What does AIMD do after congestion?",
                        "options": [
                              "It increases slowly and decreases sharply after loss.",
                              "A number that identifies byte positions for ordering and reliability.",
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing.",
                              "A shared medium heard by multiple nodes."
                        ],
                        "answer": 0,
                        "explain": "It increases slowly and decreases sharply after loss."
                  },
                  {
                        "q": "Why does TCP reduce its sending rate?",
                        "options": [
                              "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path.",
                              "Paying another network to reach the broader Internet.",
                              "A cache of recently learned IP-to-MAC mappings.",
                              "To relieve congestion in the network."
                        ],
                        "answer": 3,
                        "explain": "To relieve congestion in the network."
                  },
                  {
                        "q": "What is the benefit of cumulative ACKs?",
                        "options": [
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration.",
                              "A suite of protocols that secures IP datagrams.",
                              "They compactly acknowledge a continuous byte stream.",
                              "Header fields such as addresses, ports, and protocol."
                        ],
                        "answer": 2,
                        "explain": "They compactly acknowledge a continuous byte stream."
                  },
                  {
                        "q": "Why are timers still needed?",
                        "options": [
                              "A lookup table used to choose an outgoing interface; routers usually key it by IP prefix.",
                              "Some losses may not produce duplicate ACKs.",
                              "Interoperability between different systems and vendors.",
                              "Sending multiple packets before waiting for all acknowledgments."
                        ],
                        "answer": 1,
                        "explain": "Some losses may not produce duplicate ACKs."
                  }
            ]
      },
      {
            "title": "2.2A Practice: Network Layer Data Plane",
            "description": "30-item practice test for Network Layer Data Plane.",
            "questions": [
                  {
                        "q": "What is Network layer?",
                        "options": [
                              "The layer responsible for moving packets from source host to destination host.",
                              "Hop-count metrics and small maximum hop counts limit scalability.",
                              "Packets may need fragmentation or path MTU discovery.",
                              "To prove freshness and block replay attacks."
                        ],
                        "answer": 0,
                        "explain": "The layer responsible for moving packets from source host to destination host."
                  },
                  {
                        "q": "What is Datagram?",
                        "options": [
                              "Internet Key Exchange, used to negotiate IPsec security associations.",
                              "A Wi-Fi acknowledgment that confirms frame reception.",
                              "Shortest paths from one source to all destinations.",
                              "The network-layer packet, especially in IP networks."
                        ],
                        "answer": 3,
                        "explain": "The network-layer packet, especially in IP networks."
                  },
                  {
                        "q": "What is Forwarding?",
                        "options": [
                              "To reduce routing table size.",
                              "Sending and receiving at the same time.",
                              "The local action of moving a packet from a router input to an output interface.",
                              "A DNS server authoritative for a zone, returning answers from that zone's configured records."
                        ],
                        "answer": 2,
                        "explain": "The local action of moving a packet from a router input to an output interface."
                  },
                  {
                        "q": "What is Routing?",
                        "options": [
                              "It increases slowly and decreases sharply after loss.",
                              "The network-wide process of determining paths from source to destination.",
                              "A radio channel carrying bits between devices.",
                              "Sending a frame out multiple ports when the destination is unknown or broadcast."
                        ],
                        "answer": 1,
                        "explain": "The network-wide process of determining paths from source to destination."
                  },
                  {
                        "q": "What is Data plane?",
                        "options": [
                              "The router function that actually forwards packets.",
                              "Bit errors in the segment.",
                              "Error detection information such as a CRC.",
                              "Connecting an end device to one VLAN."
                        ],
                        "answer": 0,
                        "explain": "The router function that actually forwards packets."
                  },
                  {
                        "q": "What is Control plane?",
                        "options": [
                              "A number used to identify a specific application process on a host.",
                              "A frame an AP sends to announce network presence and parameters.",
                              "Carrying multiple VLANs between switches.",
                              "The logic that computes or installs forwarding behavior."
                        ],
                        "answer": 3,
                        "explain": "The logic that computes or installs forwarding behavior."
                  },
                  {
                        "q": "What is Forwarding table?",
                        "options": [
                              "A receiver message confirming data arrival.",
                              "Transport Layer Security, a protocol that secures application data with authentication, confidentiality, and integrity.",
                              "A lookup table used to choose an outgoing interface; routers usually key it by IP prefix.",
                              "A sum-based error detection value."
                        ],
                        "answer": 2,
                        "explain": "A lookup table used to choose an outgoing interface; routers usually key it by IP prefix."
                  },
                  {
                        "q": "What is Longest-prefix match?",
                        "options": [
                              "Wireless mode where devices communicate through an access point.",
                              "The rule of choosing the most specific matching destination prefix.",
                              "The link-layer format used by Ethernet.",
                              "The addresses and ports that identify a transport conversation."
                        ],
                        "answer": 1,
                        "explain": "The rule of choosing the most specific matching destination prefix."
                  },
                  {
                        "q": "What is Router input port?",
                        "options": [
                              "Router component that receives packets and may do lookup.",
                              "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages.",
                              "It connects access networks to larger Internet infrastructure.",
                              "Identifying a specific management variable."
                        ],
                        "answer": 0,
                        "explain": "Router component that receives packets and may do lookup."
                  },
                  {
                        "q": "What is Switching fabric?",
                        "options": [
                              "Routers may have outdated or inconsistent distance estimates.",
                              "The sender is idle while waiting for each ACK.",
                              "It identifies which part of an address is the network portion.",
                              "The internal router mechanism that transfers packets from input to output."
                        ],
                        "answer": 3,
                        "explain": "The internal router mechanism that transfers packets from input to output."
                  },
                  {
                        "q": "What is Router output port?",
                        "options": [
                              "It needs reliable and ordered delivery.",
                              "Dynamic Adaptive Streaming over HTTP, where a client selects segment bitrates based on current network and playback conditions.",
                              "Router component that queues and transmits packets on an outgoing link.",
                              "It verifies the subscriber to the carrier network."
                        ],
                        "answer": 2,
                        "explain": "Router component that queues and transmits packets on an outgoing link."
                  },
                  {
                        "q": "What is Queueing?",
                        "options": [
                              "A BGP attribute used inside an AS to prefer certain routes.",
                              "Packets waiting because the output link or processing path is busy.",
                              "The source MAC address of arriving frames.",
                              "Packets circulate because routers point traffic back toward each other."
                        ],
                        "answer": 1,
                        "explain": "Packets waiting because the output link or processing path is busy."
                  },
                  {
                        "q": "What is IPv4?",
                        "options": [
                              "The 32-bit Internet Protocol version still widely used.",
                              "A table mapping incoming labels to outgoing labels and interfaces.",
                              "SMTP sends mail, while IMAP retrieves and synchronizes mail.",
                              "HTTP protected by TLS."
                        ],
                        "answer": 0,
                        "explain": "The 32-bit Internet Protocol version still widely used."
                  },
                  {
                        "q": "What is IPv6?",
                        "options": [
                              "The Mobile IP component that forwards traffic to the mobile node.",
                              "A storage area representing intended device configuration.",
                              "To relieve congestion in the network.",
                              "The Internet Protocol version with 128-bit addresses, extension headers, and source-only fragmentation."
                        ],
                        "answer": 3,
                        "explain": "The Internet Protocol version with 128-bit addresses, extension headers, and source-only fragmentation."
                  },
                  {
                        "q": "What is Subnet?",
                        "options": [
                              "The logic that computes or installs forwarding behavior.",
                              "Carrying multiple VLANs between switches.",
                              "A logical IP address block within a network.",
                              "Clear To Send, a response allowing a sender to transmit."
                        ],
                        "answer": 2,
                        "explain": "A logical IP address block within a network."
                  },
                  {
                        "q": "What is CIDR?",
                        "options": [
                              "The process of a wireless host joining an access point.",
                              "Classless Inter-Domain Routing, notation for variable-length network prefixes.",
                              "Regularly asking devices for status information.",
                              "A database index used only for local searches."
                        ],
                        "answer": 1,
                        "explain": "Classless Inter-Domain Routing, notation for variable-length network prefixes."
                  },
                  {
                        "q": "What is DHCP?",
                        "options": [
                              "A client-server protocol that leases IP configuration such as address, mask, gateway, and DNS servers to hosts.",
                              "Authentication Header, providing packet integrity and data origin authentication without encryption.",
                              "Using multiple equal-cost paths.",
                              "HTTP protected by TLS."
                        ],
                        "answer": 0,
                        "explain": "A client-server protocol that leases IP configuration such as address, mask, gateway, and DNS servers to hosts."
                  },
                  {
                        "q": "What is NAT?",
                        "options": [
                              "A shared medium heard by multiple nodes.",
                              "Eavesdropping and tampering when configured correctly.",
                              "Separating public services from internal networks.",
                              "Network Address Translation, rewriting address and often port fields between private and public address realms."
                        ],
                        "answer": 3,
                        "explain": "Network Address Translation, rewriting address and often port fields between private and public address realms."
                  },
                  {
                        "q": "What is ICMP?",
                        "options": [
                              "The set of devices that receive a layer-2 broadcast.",
                              "Symmetric keys are efficient for bulk data.",
                              "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages.",
                              "Sending and receiving at the same time."
                        ],
                        "answer": 2,
                        "explain": "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages."
                  },
                  {
                        "q": "What is Fragmentation?",
                        "options": [
                              "A recursive or caching service that resolves DNS questions on behalf of clients.",
                              "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source.",
                              "The top network layer where applications define messages and services.",
                              "Protection applied to IP packets or network paths."
                        ],
                        "answer": 1,
                        "explain": "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source."
                  },
                  {
                        "q": "Why is longest-prefix match used?",
                        "options": [
                              "It selects the most specific route for a destination.",
                              "A small request can be sent quickly without connection setup.",
                              "Control information attached to a datagram for network-layer delivery.",
                              "The layer that provides logical communication between application processes."
                        ],
                        "answer": 0,
                        "explain": "It selects the most specific route for a destination."
                  },
                  {
                        "q": "What does DHCP provide besides an IP address?",
                        "options": [
                              "Subscriber identity module used for cellular identity and authentication.",
                              "Traffic or behavior that deviates from normal patterns.",
                              "A preferred route because it may generate revenue.",
                              "Configuration such as gateway and DNS server information."
                        ],
                        "answer": 3,
                        "explain": "Configuration such as gateway and DNS server information."
                  },
                  {
                        "q": "Why was IPv6 created?",
                        "options": [
                              "A packet switch that forwards network-layer datagrams between networks using IP information.",
                              "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection.",
                              "To provide a much larger address space and modernized IP design.",
                              "Lower-cost paths are preferred."
                        ],
                        "answer": 2,
                        "explain": "To provide a much larger address space and modernized IP design."
                  },
                  {
                        "q": "What is ICMP used for?",
                        "options": [
                              "Carrier Sense Multiple Access with Collision Avoidance, used by IEEE 802.11 Wi-Fi.",
                              "Reporting errors and supporting diagnostics.",
                              "Routers may have outdated or inconsistent distance estimates.",
                              "Cyclic Redundancy Check, a polynomial-based error detection method widely used in link-layer frames."
                        ],
                        "answer": 1,
                        "explain": "Reporting errors and supporting diagnostics."
                  },
                  {
                        "q": "Why can queueing delay increase?",
                        "options": [
                              "Packets arrive faster than they can be transmitted.",
                              "A device that receives packets and forwards them toward a destination.",
                              "Computing shortest paths in link-state routing.",
                              "Packets circulate because routers point traffic back toward each other."
                        ],
                        "answer": 0,
                        "explain": "Packets arrive faster than they can be transmitted."
                  },
                  {
                        "q": "What is a subnet mask or prefix for?",
                        "options": [
                              "The transport-layer unit that carries application data and a transport header.",
                              "A pipelined protocol that retransmits a lost packet and later packets in the window.",
                              "A suite of protocols that secures IP datagrams.",
                              "It identifies which part of an address is the network portion."
                        ],
                        "answer": 3,
                        "explain": "It identifies which part of an address is the network portion."
                  },
                  {
                        "q": "Why does NAT complicate end-to-end connectivity?",
                        "options": [
                              "The layer that provides logical communication between application processes.",
                              "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label.",
                              "Internal private hosts are hidden behind translated addresses.",
                              "Using a visited carrier network while subscribed to a home carrier."
                        ],
                        "answer": 2,
                        "explain": "Internal private hosts are hidden behind translated addresses."
                  },
                  {
                        "q": "What is an IP header?",
                        "options": [
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity.",
                              "Control information attached to a datagram for network-layer delivery.",
                              "Reporting errors and supporting diagnostics.",
                              "The congestion window grows rapidly until a threshold or loss event."
                        ],
                        "answer": 1,
                        "explain": "Control information attached to a datagram for network-layer delivery."
                  },
                  {
                        "q": "What happens when an MTU is too small?",
                        "options": [
                              "Packets may need fragmentation or path MTU discovery.",
                              "They let TCP order data and detect missing bytes.",
                              "A virtual private network service that can be carried over shared infrastructure.",
                              "The layer that transfers frames across a single link or hop."
                        ],
                        "answer": 0,
                        "explain": "Packets may need fragmentation or path MTU discovery."
                  },
                  {
                        "q": "What is a default gateway?",
                        "options": [
                              "A private key to sign and a public key to verify.",
                              "A recursive or caching service that resolves DNS questions on behalf of clients.",
                              "A method that prevents a receiver from being overwhelmed by sender rate or buffer pressure.",
                              "The router a host sends traffic to for destinations outside the local subnet."
                        ],
                        "answer": 3,
                        "explain": "The router a host sends traffic to for destinations outside the local subnet."
                  }
            ]
      },
      {
            "title": "3.1 Practice: Routing Algorithms and Intra-AS Routing",
            "description": "30-item practice test for Routing Algorithms and Intra-AS Routing.",
            "questions": [
                  {
                        "q": "What is Routing algorithm?",
                        "options": [
                              "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams.",
                              "It increases slowly and decreases sharply after loss.",
                              "A method for computing paths through a network graph.",
                              "Eavesdropping and tampering when configured correctly."
                        ],
                        "answer": 2,
                        "explain": "A method for computing paths through a network graph."
                  },
                  {
                        "q": "What is Link-state?",
                        "options": [
                              "Management Information Base, a structured collection of managed variables.",
                              "A routing approach where routers learn network topology and compute shortest paths.",
                              "Request To Send, an optional control frame to reserve the medium.",
                              "They bind public keys to identities."
                        ],
                        "answer": 1,
                        "explain": "A routing approach where routers learn network topology and compute shortest paths."
                  },
                  {
                        "q": "What is Dijkstra algorithm?",
                        "options": [
                              "A shortest-path algorithm used in link-state routing.",
                              "TCP sender-side limit on how much data can be in flight due to congestion control.",
                              "The rule of choosing the most specific matching destination prefix.",
                              "Who created the message."
                        ],
                        "answer": 0,
                        "explain": "A shortest-path algorithm used in link-state routing."
                  },
                  {
                        "q": "What is Distance-vector?",
                        "options": [
                              "Round-trip time between sending data and receiving its acknowledgment.",
                              "It separates complex network work into smaller responsibilities.",
                              "A shortest-path algorithm used in link-state routing.",
                              "A routing approach where routers share distance estimates with neighbors."
                        ],
                        "answer": 3,
                        "explain": "A routing approach where routers share distance estimates with neighbors."
                  },
                  {
                        "q": "What is Bellman-Ford?",
                        "options": [
                              "Regularly asking devices for status information.",
                              "A frame an AP sends to announce network presence and parameters.",
                              "The algorithmic idea behind distance-vector route updates.",
                              "It tracks connection state, not only individual packets."
                        ],
                        "answer": 2,
                        "explain": "The algorithmic idea behind distance-vector route updates."
                  },
                  {
                        "q": "What is Routing table?",
                        "options": [
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "The table of selected routes used to forward packets.",
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity.",
                              "External BGP sessions between routers in different autonomous systems."
                        ],
                        "answer": 1,
                        "explain": "The table of selected routes used to forward packets."
                  },
                  {
                        "q": "What is Link cost?",
                        "options": [
                              "A value assigned to a link, often based on bandwidth, delay, or policy.",
                              "A recursive or caching service that resolves DNS questions on behalf of clients.",
                              "A Wi-Fi base station that connects wireless hosts to a LAN.",
                              "It tracks connection state, not only individual packets."
                        ],
                        "answer": 0,
                        "explain": "A value assigned to a link, often based on bandwidth, delay, or policy."
                  },
                  {
                        "q": "What is Convergence?",
                        "options": [
                              "A value used to detect bit errors in a segment.",
                              "Control information placed before the payload.",
                              "Access Control List, a list of permit or deny rules.",
                              "The point when routers agree on stable routing information."
                        ],
                        "answer": 3,
                        "explain": "The point when routers agree on stable routing information."
                  },
                  {
                        "q": "What is Count-to-infinity?",
                        "options": [
                              "The part of a mobile network connecting devices to the core.",
                              "Equal-Cost Multipath, using multiple equal-cost paths for traffic.",
                              "A distance-vector problem where bad news about a failed route spreads slowly.",
                              "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection."
                        ],
                        "answer": 2,
                        "explain": "A distance-vector problem where bad news about a failed route spreads slowly."
                  },
                  {
                        "q": "What is Poisoned reverse?",
                        "options": [
                              "A sharing method where packets from many users take turns using links.",
                              "A technique that helps reduce certain distance-vector loops.",
                              "A method for computing paths through a network graph.",
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity."
                        ],
                        "answer": 1,
                        "explain": "A technique that helps reduce certain distance-vector loops."
                  },
                  {
                        "q": "What is Intra-AS routing?",
                        "options": [
                              "Routing performed within one autonomous system.",
                              "A BGP attribute identifying the next router to reach a prefix.",
                              "The ability to keep network service while changing attachment points.",
                              "A shared medium heard by multiple nodes."
                        ],
                        "answer": 0,
                        "explain": "Routing performed within one autonomous system."
                  },
                  {
                        "q": "What is Autonomous system?",
                        "options": [
                              "Walls, distance, and reflections weaken signals.",
                              "The link-layer format used by Ethernet.",
                              "A public-key mechanism that verifies signer identity and data integrity.",
                              "A network or group of networks under one administrative control."
                        ],
                        "answer": 3,
                        "explain": "A network or group of networks under one administrative control."
                  },
                  {
                        "q": "What is OSPF?",
                        "options": [
                              "A switch forwarding table mapping learned MAC addresses to ports.",
                              "A method that prevents a receiver from being overwhelmed by sender rate or buffer pressure.",
                              "An intra-AS link-state routing protocol.",
                              "Information that a destination prefix can be reached."
                        ],
                        "answer": 2,
                        "explain": "An intra-AS link-state routing protocol."
                  },
                  {
                        "q": "What is Link-state advertisement?",
                        "options": [
                              "Protection applied to IP packets or network paths.",
                              "Information flooded by routers describing their links and costs.",
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing.",
                              "Distributing traffic across multiple paths or servers."
                        ],
                        "answer": 1,
                        "explain": "Information flooded by routers describing their links and costs."
                  },
                  {
                        "q": "What is Area hierarchy?",
                        "options": [
                              "A design that divides OSPF networks into areas for scalability.",
                              "The mesh of packet switches and links that carries traffic across networks.",
                              "The physical or base IP network that carries overlay traffic.",
                              "A routing approach where routers share distance estimates with neighbors."
                        ],
                        "answer": 0,
                        "explain": "A design that divides OSPF networks into areas for scalability."
                  },
                  {
                        "q": "What is RIP?",
                        "options": [
                              "The sender is idle while waiting for each ACK.",
                              "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery.",
                              "External BGP sessions between routers in different autonomous systems.",
                              "An older distance-vector routing protocol that selects routes by hop count."
                        ],
                        "answer": 3,
                        "explain": "An older distance-vector routing protocol that selects routes by hop count."
                  },
                  {
                        "q": "What is IS-IS?",
                        "options": [
                              "The host can send frames through the AP.",
                              "Known attack patterns.",
                              "A link-state routing protocol used in some large provider networks.",
                              "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices."
                        ],
                        "answer": 2,
                        "explain": "A link-state routing protocol used in some large provider networks."
                  },
                  {
                        "q": "What is Equal-cost multipath?",
                        "options": [
                              "It identifies a resource and how to access it.",
                              "Using multiple paths with the same cost to share traffic.",
                              "The observed running condition of a device, separate from intended configuration.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers."
                        ],
                        "answer": 1,
                        "explain": "Using multiple paths with the same cost to share traffic."
                  },
                  {
                        "q": "What is Route recomputation?",
                        "options": [
                              "The recalculation of paths after topology or cost changes.",
                              "Routers may have outdated or inconsistent distance estimates.",
                              "The communication channel between neighboring nodes.",
                              "The ability to keep network service while changing attachment points."
                        ],
                        "answer": 0,
                        "explain": "The recalculation of paths after topology or cost changes."
                  },
                  {
                        "q": "What is Topology database?",
                        "options": [
                              "Packets circulate because routers point traffic back toward each other.",
                              "Packets may need fragmentation or path MTU discovery.",
                              "The divisor pattern used in CRC computation.",
                              "The collected link-state view used to compute routes."
                        ],
                        "answer": 3,
                        "explain": "The collected link-state view used to compute routes."
                  },
                  {
                        "q": "Why does OSPF use areas?",
                        "options": [
                              "YANG gives shared meaning and structure to configuration data.",
                              "The network a roaming user currently attaches to.",
                              "To improve scalability and reduce routing overhead.",
                              "Propagation delay"
                        ],
                        "answer": 2,
                        "explain": "To improve scalability and reduce routing overhead."
                  },
                  {
                        "q": "What does Dijkstra compute?",
                        "options": [
                              "They let TCP order data and detect missing bytes.",
                              "Shortest paths from one source to all destinations.",
                              "Distributing traffic across multiple paths or servers.",
                              "The data link layer unit that carries a network-layer packet."
                        ],
                        "answer": 1,
                        "explain": "Shortest paths from one source to all destinations."
                  },
                  {
                        "q": "Why can distance-vector routing loop?",
                        "options": [
                              "Routers may have outdated or inconsistent distance estimates.",
                              "The standards organization that develops many Internet protocols through RFCs.",
                              "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses.",
                              "It identifies which part of an address is the network portion."
                        ],
                        "answer": 0,
                        "explain": "Routers may have outdated or inconsistent distance estimates."
                  },
                  {
                        "q": "What does convergence mean?",
                        "options": [
                              "Classless Inter-Domain Routing, notation for variable-length network prefixes.",
                              "Cellular radio equipment that connects user devices to the carrier network.",
                              "Traffic or behavior that deviates from normal patterns.",
                              "Routing information has stabilized after changes."
                        ],
                        "answer": 3,
                        "explain": "Routing information has stabilized after changes."
                  },
                  {
                        "q": "How can link cost affect routing?",
                        "options": [
                              "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags.",
                              "Routers in different autonomous systems.",
                              "Lower-cost paths are preferred.",
                              "A shared medium heard by multiple nodes."
                        ],
                        "answer": 2,
                        "explain": "Lower-cost paths are preferred."
                  },
                  {
                        "q": "What is a topology database used for?",
                        "options": [
                              "Keeping message contents hidden from unauthorized parties.",
                              "Computing shortest paths in link-state routing.",
                              "A logical network built on top of another network.",
                              "A device at the edge of the network that runs applications, such as a phone, laptop, server, or camera."
                        ],
                        "answer": 1,
                        "explain": "Computing shortest paths in link-state routing."
                  },
                  {
                        "q": "What does equal-cost multipath allow?",
                        "options": [
                              "Traffic sharing across multiple equally good paths.",
                              "An intra-AS link-state routing protocol.",
                              "To provide a much larger address space and modernized IP design.",
                              "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices."
                        ],
                        "answer": 0,
                        "explain": "Traffic sharing across multiple equally good paths."
                  },
                  {
                        "q": "Why is RIP limited in large networks?",
                        "options": [
                              "A design that divides OSPF networks into areas for scalability.",
                              "HTTP carried inside TLS, providing the secure form of web browsing commonly shown as HTTPS.",
                              "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags.",
                              "Hop-count metrics and small maximum hop counts limit scalability."
                        ],
                        "answer": 3,
                        "explain": "Hop-count metrics and small maximum hop counts limit scalability."
                  },
                  {
                        "q": "What is a routing loop?",
                        "options": [
                              "Internet routing follows business and administrative relationships.",
                              "Information that a destination prefix can be reached.",
                              "Packets circulate because routers point traffic back toward each other.",
                              "The router a host sends traffic to for destinations outside the local subnet."
                        ],
                        "answer": 2,
                        "explain": "Packets circulate because routers point traffic back toward each other."
                  },
                  {
                        "q": "Why is route recomputation necessary?",
                        "options": [
                              "Choosing the closest exit point from an AS to hand traffic off quickly.",
                              "Links, costs, or routers can fail or change.",
                              "A radio access point connecting wireless devices to network infrastructure.",
                              "The top network layer where applications define messages and services."
                        ],
                        "answer": 1,
                        "explain": "Links, costs, or routers can fail or change."
                  }
            ]
      },
      {
            "title": "3.2 Practice: ISP Routing and BGP",
            "description": "30-item practice test for ISP Routing and BGP.",
            "questions": [
                  {
                        "q": "What is Inter-AS routing?",
                        "options": [
                              "Routing between autonomous systems.",
                              "Streaming or exporting operational data for monitoring.",
                              "Internal BGP sessions used to distribute BGP-learned routes inside one autonomous system.",
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration."
                        ],
                        "answer": 0,
                        "explain": "Routing between autonomous systems."
                  },
                  {
                        "q": "What is BGP?",
                        "options": [
                              "IDS method that matches known attack patterns.",
                              "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME.",
                              "An estimate of RTT variation used to set safer timeouts.",
                              "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol."
                        ],
                        "answer": 3,
                        "explain": "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol."
                  },
                  {
                        "q": "What is eBGP?",
                        "options": [
                              "A local packet switch that forwards frames inside a LAN using MAC addresses.",
                              "When packets are dropped because of errors, congestion, or failed paths.",
                              "External BGP sessions between routers in different autonomous systems.",
                              "The divisor pattern used in CRC computation."
                        ],
                        "answer": 2,
                        "explain": "External BGP sessions between routers in different autonomous systems."
                  },
                  {
                        "q": "What is iBGP?",
                        "options": [
                              "Management Information Base, a structured collection of managed variables.",
                              "Internal BGP sessions used to distribute BGP-learned routes inside one autonomous system.",
                              "IDS method that looks for deviations from normal behavior.",
                              "A screened network segment for public-facing services, separated from both untrusted networks and the internal LAN."
                        ],
                        "answer": 1,
                        "explain": "Internal BGP sessions used to distribute BGP-learned routes inside one autonomous system."
                  },
                  {
                        "q": "What is AS-PATH?",
                        "options": [
                              "A BGP attribute listing autonomous systems a route advertisement has traversed.",
                              "Multiple devices may try to transmit at the same time.",
                              "A high-speed network connecting large numbers of servers.",
                              "Transmission delay"
                        ],
                        "answer": 0,
                        "explain": "A BGP attribute listing autonomous systems a route advertisement has traversed."
                  },
                  {
                        "q": "What is NEXT-HOP?",
                        "options": [
                              "Information flooded by routers describing their links and costs.",
                              "Wireless devices may not hear collisions while transmitting.",
                              "Packets arrive faster than they can be transmitted.",
                              "A BGP attribute identifying the next router to reach a prefix."
                        ],
                        "answer": 3,
                        "explain": "A BGP attribute identifying the next router to reach a prefix."
                  },
                  {
                        "q": "What is Prefix?",
                        "options": [
                              "A shared medium heard by multiple nodes.",
                              "A pipelined protocol that retransmits only specific missing packets.",
                              "A block of IP addresses advertised as reachable.",
                              "TCP phase where the congestion window grows exponentially from a small starting point until a threshold or loss event."
                        ],
                        "answer": 2,
                        "explain": "A block of IP addresses advertised as reachable."
                  },
                  {
                        "q": "What is Reachability?",
                        "options": [
                              "A host, router, switch, or access point connected to a link.",
                              "Information that a destination prefix can be reached.",
                              "A one-way security relationship defining IPsec parameters and keys.",
                              "To spread traffic and avoid hot spots."
                        ],
                        "answer": 1,
                        "explain": "Information that a destination prefix can be reached."
                  },
                  {
                        "q": "What is Routing policy?",
                        "options": [
                              "Business or administrative rules that influence route selection.",
                              "Wireless devices may not hear collisions while transmitting.",
                              "The VLAN to which the frame belongs.",
                              "Moving data from one node to its immediate neighbor."
                        ],
                        "answer": 0,
                        "explain": "Business or administrative rules that influence route selection."
                  },
                  {
                        "q": "What is Hot-potato routing?",
                        "options": [
                              "Identifying a specific management variable.",
                              "A user interface setting unrelated to network communication.",
                              "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source.",
                              "Choosing the closest exit point from an AS to hand traffic off quickly."
                        ],
                        "answer": 3,
                        "explain": "Choosing the closest exit point from an AS to hand traffic off quickly."
                  },
                  {
                        "q": "What is Route advertisement?",
                        "options": [
                              "A router that forwards MPLS traffic based on label values.",
                              "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices.",
                              "A BGP message announcing reachability to a prefix.",
                              "The IEEE 802.11 wireless LAN MAC and PHY standards commonly marketed as Wi-Fi."
                        ],
                        "answer": 2,
                        "explain": "A BGP message announcing reachability to a prefix."
                  },
                  {
                        "q": "What is Route withdrawal?",
                        "options": [
                              "Lower-cost paths are preferred.",
                              "A BGP message removing a previously advertised route.",
                              "The receiver's ability to accept data.",
                              "Packets waiting because the output link or processing path is busy."
                        ],
                        "answer": 1,
                        "explain": "A BGP message removing a previously advertised route."
                  },
                  {
                        "q": "What is Peering?",
                        "options": [
                              "An agreement where networks exchange traffic, often without payment.",
                              "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place.",
                              "It organizes manageable device variables.",
                              "An application-layer request/response protocol for transferring web resources and API data."
                        ],
                        "answer": 0,
                        "explain": "An agreement where networks exchange traffic, often without payment."
                  },
                  {
                        "q": "What is Transit?",
                        "options": [
                              "The actual rate at which useful data is delivered.",
                              "The ability to keep network service while changing attachment points.",
                              "It resolves MAC addresses only within a LAN/broadcast domain.",
                              "A paid service where one network carries another network's traffic to the Internet."
                        ],
                        "answer": 3,
                        "explain": "A paid service where one network carries another network's traffic to the Internet."
                  },
                  {
                        "q": "What is Provider?",
                        "options": [
                              "A method for computing paths through a network graph.",
                              "It catches more burst and pattern errors.",
                              "A network that sells transit or connectivity.",
                              "The layer that transfers frames across a single link or hop."
                        ],
                        "answer": 2,
                        "explain": "A network that sells transit or connectivity."
                  },
                  {
                        "q": "What is Customer?",
                        "options": [
                              "A router connecting an AS to other autonomous systems.",
                              "A network that buys connectivity or transit from another network.",
                              "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source.",
                              "After multiple duplicate ACKs indicate likely loss."
                        ],
                        "answer": 1,
                        "explain": "A network that buys connectivity or transit from another network."
                  },
                  {
                        "q": "What is Local preference?",
                        "options": [
                              "A BGP attribute used inside an AS to prefer certain routes.",
                              "Computing or installing network behavior.",
                              "An acknowledgment that confirms receipt of all bytes or packets up to a stated point.",
                              "The dominant wired LAN technology, using frames, MAC addresses, and usually switched full-duplex links."
                        ],
                        "answer": 0,
                        "explain": "A BGP attribute used inside an AS to prefer certain routes."
                  },
                  {
                        "q": "What is MED?",
                        "options": [
                              "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path.",
                              "Computing or installing network behavior.",
                              "A small request can be sent quickly without connection setup.",
                              "Multi-Exit Discriminator, a hint about preferred entry points into an AS."
                        ],
                        "answer": 3,
                        "explain": "Multi-Exit Discriminator, a hint about preferred entry points into an AS."
                  },
                  {
                        "q": "What is Route aggregation?",
                        "options": [
                              "Routing between autonomous systems.",
                              "Out-of-order packets may arrive before missing packets are retransmitted.",
                              "Combining multiple prefixes into a shorter summary advertisement.",
                              "The mesh of packet switches and links that carries traffic across networks."
                        ],
                        "answer": 2,
                        "explain": "Combining multiple prefixes into a shorter summary advertisement."
                  },
                  {
                        "q": "What is Gateway router?",
                        "options": [
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration.",
                              "A router connecting an AS to other autonomous systems.",
                              "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility.",
                              "A temporary symmetric key used after secure setup."
                        ],
                        "answer": 1,
                        "explain": "A router connecting an AS to other autonomous systems."
                  },
                  {
                        "q": "Why is BGP policy-based?",
                        "options": [
                              "Internet routing follows business and administrative relationships.",
                              "A logical IP address block within a network.",
                              "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label.",
                              "A device that cannot hear another transmitter but can still collide at the receiver."
                        ],
                        "answer": 0,
                        "explain": "Internet routing follows business and administrative relationships."
                  },
                  {
                        "q": "How does AS-PATH help avoid loops?",
                        "options": [
                              "A one-way security relationship defining IPsec parameters and keys.",
                              "To spread traffic and avoid hot spots.",
                              "A host, router, switch, or access point connected to a link.",
                              "A router rejects routes containing its own AS number."
                        ],
                        "answer": 3,
                        "explain": "A router rejects routes containing its own AS number."
                  },
                  {
                        "q": "What does eBGP connect?",
                        "options": [
                              "They need many high-capacity paths between servers.",
                              "Wrapping one packet inside another packet.",
                              "Routers in different autonomous systems.",
                              "Another name for a host because it sits at an end of communication and creates or receives data."
                        ],
                        "answer": 2,
                        "explain": "Routers in different autonomous systems."
                  },
                  {
                        "q": "What does iBGP distribute?",
                        "options": [
                              "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control.",
                              "BGP-learned routes inside one autonomous system.",
                              "Regularly asking devices for status information.",
                              "A preferred route because it may generate revenue."
                        ],
                        "answer": 1,
                        "explain": "BGP-learned routes inside one autonomous system."
                  },
                  {
                        "q": "Why do providers aggregate routes?",
                        "options": [
                              "To reduce routing table size.",
                              "TCP sender-side limit on how much data can be in flight due to congestion control.",
                              "An application-layer request/response protocol for transferring web resources and API data.",
                              "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility."
                        ],
                        "answer": 0,
                        "explain": "To reduce routing table size."
                  },
                  {
                        "q": "What is a customer route usually treated as?",
                        "options": [
                              "Reusing a valid message later to trick a protocol.",
                              "An ACK repeated for the same data, often hinting that later data arrived but a gap exists.",
                              "The interface a controller uses to program network devices.",
                              "A preferred route because it may generate revenue."
                        ],
                        "answer": 3,
                        "explain": "A preferred route because it may generate revenue."
                  },
                  {
                        "q": "What does route withdrawal signal?",
                        "options": [
                              "A sender that cannot hear another sender but can collide at the receiver.",
                              "The rule of choosing the most specific matching destination prefix.",
                              "A prefix is no longer reachable through that path.",
                              "After multiple duplicate ACKs indicate likely loss."
                        ],
                        "answer": 2,
                        "explain": "A prefix is no longer reachable through that path."
                  },
                  {
                        "q": "Why is BGP slow to converge sometimes?",
                        "options": [
                              "It identifies which part of an address is the network portion.",
                              "Policy, path exploration, and distributed updates take time.",
                              "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control.",
                              "An application-layer request/response protocol for transferring web resources and API data."
                        ],
                        "answer": 1,
                        "explain": "Policy, path exploration, and distributed updates take time."
                  },
                  {
                        "q": "What is peering used for?",
                        "options": [
                              "Exchanging traffic directly between networks.",
                              "A recursive or caching service that resolves DNS questions on behalf of clients.",
                              "Policy, path exploration, and distributed updates take time.",
                              "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source."
                        ],
                        "answer": 0,
                        "explain": "Exchanging traffic directly between networks."
                  },
                  {
                        "q": "What is transit used for?",
                        "options": [
                              "Collecting data from many processes so they can share the network.",
                              "A client-server protocol that leases IP configuration such as address, mask, gateway, and DNS servers to hosts.",
                              "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class.",
                              "Paying another network to reach the broader Internet."
                        ],
                        "answer": 3,
                        "explain": "Paying another network to reach the broader Internet."
                  }
            ]
      },
      {
            "title": "3.3 Practice: Network Management, SDN, SNMP, NETCONF, and YANG",
            "description": "30-item practice test for Network Management, SDN, SNMP, NETCONF, and YANG.",
            "questions": [
                  {
                        "q": "What is Network management?",
                        "options": [
                              "The logic that computes or installs forwarding behavior.",
                              "A network that buys connectivity or transit from another network.",
                              "The process of monitoring, configuring, and controlling network systems.",
                              "Programmable and centralized network control."
                        ],
                        "answer": 2,
                        "explain": "The process of monitoring, configuring, and controlling network systems."
                  },
                  {
                        "q": "What is Managing server?",
                        "options": [
                              "It scales name resolution across the global Internet.",
                              "The system used by administrators to monitor and control devices.",
                              "Announcing AP information and SSID availability.",
                              "A scalable data-center topology with leaf access switches and spine core switches."
                        ],
                        "answer": 1,
                        "explain": "The system used by administrators to monitor and control devices."
                  },
                  {
                        "q": "What is Managed device?",
                        "options": [
                              "A router, switch, server, or access point being monitored or configured.",
                              "An attacker secretly intercepting and possibly altering communication.",
                              "Routing between autonomous systems.",
                              "HTTP protected by TLS."
                        ],
                        "answer": 0,
                        "explain": "A router, switch, server, or access point being monitored or configured."
                  },
                  {
                        "q": "What is Agent?",
                        "options": [
                              "Link utilization and throughput.",
                              "They adjust quality when available throughput changes.",
                              "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams.",
                              "Software on a managed device that provides management information."
                        ],
                        "answer": 3,
                        "explain": "Software on a managed device that provides management information."
                  },
                  {
                        "q": "What is MIB?",
                        "options": [
                              "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer.",
                              "Lower-cost paths are preferred.",
                              "Management Information Base, a structured collection of managed variables.",
                              "The layer that provides logical communication between application processes."
                        ],
                        "answer": 2,
                        "explain": "Management Information Base, a structured collection of managed variables."
                  },
                  {
                        "q": "What is SNMP?",
                        "options": [
                              "A simple mail access protocol that downloads messages from a server.",
                              "A management protocol where managers query or set MIB objects on agents and receive notifications.",
                              "The 32-bit Internet Protocol version still widely used.",
                              "Wireless devices may not hear collisions while transmitting."
                        ],
                        "answer": 1,
                        "explain": "A management protocol where managers query or set MIB objects on agents and receive notifications."
                  },
                  {
                        "q": "What is SNMP Get?",
                        "options": [
                              "An operation that reads management information from a device.",
                              "The collected link-state view used to compute routes.",
                              "A screened network segment for public-facing services, separated from both untrusted networks and the internal LAN.",
                              "Multi-Exit Discriminator, a hint about preferred entry points into an AS."
                        ],
                        "answer": 0,
                        "explain": "An operation that reads management information from a device."
                  },
                  {
                        "q": "What is SNMP Set?",
                        "options": [
                              "Keys and parameters for IPsec security associations.",
                              "The network name identifying a Wi-Fi service set.",
                              "A secret key kept by its owner in asymmetric cryptography.",
                              "An operation that changes a management variable on a device."
                        ],
                        "answer": 3,
                        "explain": "An operation that changes a management variable on a device."
                  },
                  {
                        "q": "What is SNMP Trap?",
                        "options": [
                              "Using multiple equal-cost paths.",
                              "They compactly acknowledge a continuous byte stream.",
                              "An unsolicited notification sent by an agent to a manager.",
                              "Programmable and centralized network control."
                        ],
                        "answer": 2,
                        "explain": "An unsolicited notification sent by an agent to a manager."
                  },
                  {
                        "q": "What is OID?",
                        "options": [
                              "Out-of-order packets may arrive before missing packets are retransmitted.",
                              "Object Identifier, a numeric name for a managed variable.",
                              "The overall switching infrastructure of a data center.",
                              "Flow control protects the receiver; congestion control protects the network."
                        ],
                        "answer": 1,
                        "explain": "Object Identifier, a numeric name for a managed variable."
                  },
                  {
                        "q": "What is Polling?",
                        "options": [
                              "Regularly asking devices for status information.",
                              "The MPLS label is removed.",
                              "A user interface setting unrelated to network communication.",
                              "An older distance-vector routing protocol that selects routes by hop count."
                        ],
                        "answer": 0,
                        "explain": "Regularly asking devices for status information."
                  },
                  {
                        "q": "What is Telemetry?",
                        "options": [
                              "A graphics rendering technique for web pages.",
                              "Internet routing follows business and administrative relationships.",
                              "Ethernet Frame Check Sequence field carrying a CRC for error detection.",
                              "Streaming or exporting operational data for monitoring."
                        ],
                        "answer": 3,
                        "explain": "Streaming or exporting operational data for monitoring."
                  },
                  {
                        "q": "What is NETCONF?",
                        "options": [
                              "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF.",
                              "The physical or wireless path that carries bits between devices.",
                              "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices.",
                              "The network name identifying a Wi-Fi service set."
                        ],
                        "answer": 2,
                        "explain": "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices."
                  },
                  {
                        "q": "What is YANG?",
                        "options": [
                              "Routing between autonomous systems.",
                              "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF.",
                              "A link-state routing protocol used in some large provider networks.",
                              "Who created the message."
                        ],
                        "answer": 1,
                        "explain": "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF."
                  },
                  {
                        "q": "What is RPC?",
                        "options": [
                              "Remote Procedure Call, a structured request used by protocols such as NETCONF.",
                              "The set of devices that receive a layer-2 broadcast.",
                              "Using multiple paths with the same cost to share traffic.",
                              "A distance-vector problem where bad news about a failed route spreads slowly."
                        ],
                        "answer": 0,
                        "explain": "Remote Procedure Call, a structured request used by protocols such as NETCONF."
                  },
                  {
                        "q": "What is Configuration datastore?",
                        "options": [
                              "Interoperability between different systems and vendors.",
                              "An acknowledgment that confirms receipt of all bytes or packets up to a stated point.",
                              "A device that receives packets and forwards them toward a destination.",
                              "A storage area representing intended device configuration."
                        ],
                        "answer": 3,
                        "explain": "A storage area representing intended device configuration."
                  },
                  {
                        "q": "What is Operational state?",
                        "options": [
                              "A pipelined protocol that retransmits a lost packet and later packets in the window.",
                              "A suite of protocols that secures IP datagrams.",
                              "The observed running condition of a device, separate from intended configuration.",
                              "The transport-layer unit that carries application data and a transport header."
                        ],
                        "answer": 2,
                        "explain": "The observed running condition of a device, separate from intended configuration."
                  },
                  {
                        "q": "What is SDN?",
                        "options": [
                              "Multiple devices may try to transmit at the same time.",
                              "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices.",
                              "Quickly moving traffic to a backup path after failure.",
                              "After multiple duplicate ACKs indicate likely loss."
                        ],
                        "answer": 1,
                        "explain": "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices."
                  },
                  {
                        "q": "What is Controller?",
                        "options": [
                              "The software control point in an SDN architecture.",
                              "A local packet switch that forwards frames inside a LAN using MAC addresses.",
                              "A logical path that behaves like a dedicated circuit.",
                              "The internal router mechanism that transfers packets from input to output."
                        ],
                        "answer": 0,
                        "explain": "The software control point in an SDN architecture."
                  },
                  {
                        "q": "What is Southbound API?",
                        "options": [
                              "The network-layer packet, especially in IP networks.",
                              "Detecting unauthorized changes to data.",
                              "A shared medium area where simultaneous transmissions can collide.",
                              "The interface a controller uses to program network devices."
                        ],
                        "answer": 3,
                        "explain": "The interface a controller uses to program network devices."
                  },
                  {
                        "q": "Why is a MIB useful?",
                        "options": [
                              "Private connectivity over shared infrastructure.",
                              "A device that receives packets and forwards them toward a destination.",
                              "It organizes manageable device variables.",
                              "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF."
                        ],
                        "answer": 2,
                        "explain": "It organizes manageable device variables."
                  },
                  {
                        "q": "What is the difference between polling and traps?",
                        "options": [
                              "Small data used by websites to maintain state across otherwise stateless HTTP requests.",
                              "Polling asks regularly; traps are sent when events occur.",
                              "A logical IP address block within a network.",
                              "Carrier Sense Multiple Access with Collision Avoidance, used by IEEE 802.11 Wi-Fi."
                        ],
                        "answer": 1,
                        "explain": "Polling asks regularly; traps are sent when events occur."
                  },
                  {
                        "q": "Why use YANG with NETCONF?",
                        "options": [
                              "YANG gives shared meaning and structure to configuration data.",
                              "Carrying multiple VLANs between switches.",
                              "It reduces outage time after a failure.",
                              "A radio access point connecting wireless devices to network infrastructure."
                        ],
                        "answer": 0,
                        "explain": "YANG gives shared meaning and structure to configuration data."
                  },
                  {
                        "q": "What does SDN make easier?",
                        "options": [
                              "The geographic coverage area served by a base station.",
                              "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME.",
                              "An intra-AS link-state routing protocol.",
                              "Programmable and centralized network control."
                        ],
                        "answer": 3,
                        "explain": "Programmable and centralized network control."
                  },
                  {
                        "q": "What is operational state?",
                        "options": [
                              "Information flooded by routers describing their links and costs.",
                              "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices.",
                              "What the device is actually doing now.",
                              "The process of wrapping data with headers as it moves down network layers."
                        ],
                        "answer": 2,
                        "explain": "What the device is actually doing now."
                  },
                  {
                        "q": "What is intended configuration?",
                        "options": [
                              "Quickly moving traffic to a backup path after failure.",
                              "What the admin wants the device to run.",
                              "The part of a mobile network connecting devices to the core.",
                              "Authentication Header, providing packet integrity and data origin authentication without encryption."
                        ],
                        "answer": 1,
                        "explain": "What the admin wants the device to run."
                  },
                  {
                        "q": "What is an OID used for?",
                        "options": [
                              "Identifying a specific management variable.",
                              "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection.",
                              "A BGP attribute used inside an AS to prefer certain routes.",
                              "A rule set defining message format, message order, and actions when messages are sent or received."
                        ],
                        "answer": 0,
                        "explain": "Identifying a specific management variable."
                  },
                  {
                        "q": "Why is telemetry useful?",
                        "options": [
                              "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label.",
                              "Sending a frame out multiple ports when the destination is unknown or broadcast.",
                              "A technique that helps reduce certain distance-vector loops.",
                              "It can provide timely performance and state data."
                        ],
                        "answer": 3,
                        "explain": "It can provide timely performance and state data."
                  },
                  {
                        "q": "What is a controller responsible for?",
                        "options": [
                              "HTTP protected by TLS.",
                              "A cellular generation using packet-switched IP-based design.",
                              "Computing or installing network behavior.",
                              "A simple mail access protocol that downloads messages from a server."
                        ],
                        "answer": 2,
                        "explain": "Computing or installing network behavior."
                  },
                  {
                        "q": "Why should changes be verified?",
                        "options": [
                              "The link-layer format used by Ethernet.",
                              "A configuration command may fail or produce unexpected state.",
                              "The data link layer unit that carries a network-layer packet.",
                              "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity."
                        ],
                        "answer": 1,
                        "explain": "A configuration command may fail or produce unexpected state."
                  }
            ]
      },
      {
            "title": "4.1 Practice: Data Link Layer Control, Packetizing, and Error Detection",
            "description": "30-item practice test for Data Link Layer Control, Packetizing, and Error Detection.",
            "questions": [
                  {
                        "q": "What is Data link layer?",
                        "options": [
                              "The layer that transfers frames across a single link or hop.",
                              "Interoperability between different systems and vendors.",
                              "An acknowledgment that confirms receipt of all bytes or packets up to a stated point.",
                              "A device that receives packets and forwards them toward a destination."
                        ],
                        "answer": 0,
                        "explain": "The layer that transfers frames across a single link or hop."
                  },
                  {
                        "q": "What is Node?",
                        "options": [
                              "The system used by administrators to monitor and control devices.",
                              "A high-speed network connecting large numbers of servers.",
                              "A service model that tries to deliver data but gives no guarantee.",
                              "A host, router, switch, or access point connected to a link."
                        ],
                        "answer": 3,
                        "explain": "A host, router, switch, or access point connected to a link."
                  },
                  {
                        "q": "What is Link?",
                        "options": [
                              "The layer that provides logical communication between application processes.",
                              "An older distance-vector routing protocol that selects routes by hop count.",
                              "The communication channel between neighboring nodes.",
                              "A logical IP address block within a network."
                        ],
                        "answer": 2,
                        "explain": "The communication channel between neighboring nodes."
                  },
                  {
                        "q": "What is Frame?",
                        "options": [
                              "A routing approach where routers share distance estimates with neighbors.",
                              "The data link layer unit that carries a network-layer packet.",
                              "A nearby server that delivers cached content to users.",
                              "A network or group of networks under one administrative control."
                        ],
                        "answer": 1,
                        "explain": "The data link layer unit that carries a network-layer packet."
                  },
                  {
                        "q": "What is Framing?",
                        "options": [
                              "Adding boundaries and link-layer information around data.",
                              "A shared medium heard by multiple nodes.",
                              "Router buffers can overflow and drop packets.",
                              "A scalable data-center topology with leaf access switches and spine core switches."
                        ],
                        "answer": 0,
                        "explain": "Adding boundaries and link-layer information around data."
                  },
                  {
                        "q": "What is Packetizing?",
                        "options": [
                              "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path.",
                              "Shortest paths from one source to all destinations.",
                              "The wireless medium for a transmission.",
                              "Encapsulating data into protocol data units; at the link layer, this usually means placing a network-layer packet into a frame."
                        ],
                        "answer": 3,
                        "explain": "Encapsulating data into protocol data units; at the link layer, this usually means placing a network-layer packet into a frame."
                  },
                  {
                        "q": "What is Header?",
                        "options": [
                              "It reduces outage time after a failure.",
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "Control information placed before the payload.",
                              "A BGP attribute listing autonomous systems a route advertisement has traversed."
                        ],
                        "answer": 2,
                        "explain": "Control information placed before the payload."
                  },
                  {
                        "q": "What is Trailer?",
                        "options": [
                              "It catches more burst and pattern errors.",
                              "Control information placed after the payload, often for error detection.",
                              "The congestion window grows rapidly until a threshold or loss event.",
                              "IDS method that looks for deviations from normal behavior."
                        ],
                        "answer": 1,
                        "explain": "Control information placed after the payload, often for error detection."
                  },
                  {
                        "q": "What is Error detection?",
                        "options": [
                              "Techniques that detect likely bit corruption; they detect errors but do not always correct them.",
                              "The collected link-state view used to compute routes.",
                              "The interface a controller uses to program network devices.",
                              "Router buffers can overflow and drop packets."
                        ],
                        "answer": 0,
                        "explain": "Techniques that detect likely bit corruption; they detect errors but do not always correct them."
                  },
                  {
                        "q": "What is Parity bit?",
                        "options": [
                              "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes.",
                              "The congestion window grows rapidly until a threshold or loss event.",
                              "A 4G data-plane anchor that forwards user traffic.",
                              "A simple bit added to make the number of ones even or odd."
                        ],
                        "answer": 3,
                        "explain": "A simple bit added to make the number of ones even or odd."
                  },
                  {
                        "q": "What is Two-dimensional parity?",
                        "options": [
                              "Each request can be handled without remembering previous requests.",
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity.",
                              "A parity method that can detect and sometimes locate bit errors using rows and columns.",
                              "ESP can encrypt payloads and can also provide integrity/authentication."
                        ],
                        "answer": 2,
                        "explain": "A parity method that can detect and sometimes locate bit errors using rows and columns."
                  },
                  {
                        "q": "What is Checksum?",
                        "options": [
                              "A public-key mechanism that verifies signer identity and data integrity.",
                              "A sum-based error detection value.",
                              "A one-way security relationship defining IPsec parameters and keys.",
                              "A router rejects routes containing its own AS number."
                        ],
                        "answer": 1,
                        "explain": "A sum-based error detection value."
                  },
                  {
                        "q": "What is CRC?",
                        "options": [
                              "Cyclic Redundancy Check, a polynomial-based error detection method widely used in link-layer frames.",
                              "A hardware power mode for reducing electricity use.",
                              "The part of the network that connects end systems to the first router.",
                              "An ACK repeated for the same data, often hinting that later data arrived but a gap exists."
                        ],
                        "answer": 0,
                        "explain": "Cyclic Redundancy Check, a polynomial-based error detection method widely used in link-layer frames."
                  },
                  {
                        "q": "What is Generator polynomial?",
                        "options": [
                              "It tracks connection state, not only individual packets.",
                              "A switch forwarding table mapping learned MAC addresses to ports.",
                              "Wireless devices may not hear collisions while transmitting.",
                              "The divisor pattern used in CRC computation."
                        ],
                        "answer": 3,
                        "explain": "The divisor pattern used in CRC computation."
                  },
                  {
                        "q": "What is Flow control?",
                        "options": [
                              "A Wi-Fi acknowledgment that confirms frame reception.",
                              "An IETF mobility protocol that lets a mobile node keep a home address while using a care-of address away from home.",
                              "A method that prevents a receiver from being overwhelmed by sender rate or buffer pressure.",
                              "A device that receives packets and forwards them toward a destination."
                        ],
                        "answer": 2,
                        "explain": "A method that prevents a receiver from being overwhelmed by sender rate or buffer pressure."
                  },
                  {
                        "q": "What is Medium access control?",
                        "options": [
                              "They let TCP order data and detect missing bytes.",
                              "Rules for deciding who can transmit on a shared medium.",
                              "Sending and receiving at the same time.",
                              "TCP sender-side limit on how much data can be in flight due to congestion control."
                        ],
                        "answer": 1,
                        "explain": "Rules for deciding who can transmit on a shared medium."
                  },
                  {
                        "q": "What is Broadcast link?",
                        "options": [
                              "A link where multiple nodes share the same communication medium.",
                              "What the admin wants the device to run.",
                              "A firewall that tracks connection or flow state instead of judging each packet in isolation.",
                              "A BGP message removing a previously advertised route."
                        ],
                        "answer": 0,
                        "explain": "A link where multiple nodes share the same communication medium."
                  },
                  {
                        "q": "What is Point-to-point link?",
                        "options": [
                              "It needs a reasonable retransmission timeout.",
                              "Information that a destination prefix can be reached.",
                              "Programmable and centralized network control.",
                              "A direct link between two nodes."
                        ],
                        "answer": 3,
                        "explain": "A direct link between two nodes."
                  },
                  {
                        "q": "What is Half-duplex?",
                        "options": [
                              "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class.",
                              "Flow control protects the receiver; congestion control protects the network.",
                              "Communication where a device cannot send and receive at the same time.",
                              "A direct connection between two nodes."
                        ],
                        "answer": 2,
                        "explain": "Communication where a device cannot send and receive at the same time."
                  },
                  {
                        "q": "What is Full-duplex?",
                        "options": [
                              "A device that cannot hear another transmitter but can still collide at the receiver.",
                              "Communication where sending and receiving can happen simultaneously.",
                              "A logical IP address block within a network.",
                              "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label."
                        ],
                        "answer": 1,
                        "explain": "Communication where sending and receiving can happen simultaneously."
                  },
                  {
                        "q": "Why is CRC stronger than parity?",
                        "options": [
                              "It catches more burst and pattern errors.",
                              "A network that buys connectivity or transit from another network.",
                              "IDS method that looks for deviations from normal behavior.",
                              "Real-time Transport Protocol, commonly used with UDP for timestamped audio and video streams."
                        ],
                        "answer": 0,
                        "explain": "It catches more burst and pattern errors."
                  },
                  {
                        "q": "What does a trailer often contain?",
                        "options": [
                              "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place.",
                              "A router, switch, server, or access point being monitored or configured.",
                              "A block of IP addresses advertised as reachable.",
                              "Error detection information such as a CRC."
                        ],
                        "answer": 3,
                        "explain": "Error detection information such as a CRC."
                  },
                  {
                        "q": "Why do shared links need MAC rules?",
                        "options": [
                              "A simple method that sends one packet then waits for an ACK.",
                              "The base stations and radio systems connecting devices.",
                              "Multiple devices may try to transmit at the same time.",
                              "A value assigned to a link, often based on bandwidth, delay, or policy."
                        ],
                        "answer": 2,
                        "explain": "Multiple devices may try to transmit at the same time."
                  },
                  {
                        "q": "What is one-hop delivery?",
                        "options": [
                              "Packets waiting because the output link or processing path is busy.",
                              "Moving data from one node to its immediate neighbor.",
                              "Controlling paths to meet performance or policy goals.",
                              "What the device is actually doing now."
                        ],
                        "answer": 1,
                        "explain": "Moving data from one node to its immediate neighbor."
                  },
                  {
                        "q": "Why is packetizing useful?",
                        "options": [
                              "It organizes streams into manageable transmission units.",
                              "The software control point in an SDN architecture.",
                              "The addresses and ports that identify a transport conversation.",
                              "A packet switch that forwards network-layer datagrams between networks using IP information."
                        ],
                        "answer": 0,
                        "explain": "It organizes streams into manageable transmission units."
                  },
                  {
                        "q": "What does half-duplex restrict?",
                        "options": [
                              "Unwanted signals that disrupt communication.",
                              "To detect corrupted frames.",
                              "A number that identifies byte positions for ordering and reliability.",
                              "Sending and receiving at the same time."
                        ],
                        "answer": 3,
                        "explain": "Sending and receiving at the same time."
                  },
                  {
                        "q": "What is a point-to-point link?",
                        "options": [
                              "A logical network running over an underlay.",
                              "Information that a destination prefix can be reached.",
                              "A direct connection between two nodes.",
                              "The Internet Protocol version with 128-bit addresses, extension headers, and source-only fragmentation."
                        ],
                        "answer": 2,
                        "explain": "A direct connection between two nodes."
                  },
                  {
                        "q": "What is a broadcast link?",
                        "options": [
                              "A 4G EPC gateway connecting user traffic to external packet data networks and anchoring IP connectivity.",
                              "A shared medium heard by multiple nodes.",
                              "Sending a frame out multiple ports when the destination is unknown or broadcast.",
                              "A link where multiple nodes share the same communication medium."
                        ],
                        "answer": 1,
                        "explain": "A shared medium heard by multiple nodes."
                  },
                  {
                        "q": "What can error detection not always do?",
                        "options": [
                              "It may detect but not correct errors.",
                              "A classic TCP version using slow start, congestion avoidance, fast retransmit, and fast recovery.",
                              "A management protocol where managers query or set MIB objects on agents and receive notifications.",
                              "A file compression method unrelated to routing."
                        ],
                        "answer": 0,
                        "explain": "It may detect but not correct errors."
                  },
                  {
                        "q": "What does flow control protect?",
                        "options": [
                              "An operation that reads management information from a device.",
                              "The process of wrapping data with headers as it moves down network layers.",
                              "A simple method that sends one packet then waits for an ACK.",
                              "The receiver's ability to accept data."
                        ],
                        "answer": 3,
                        "explain": "The receiver's ability to accept data."
                  }
            ]
      },
      {
            "title": "4.2 Practice: LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "description": "30-item practice test for LANs, Ethernet, ARP, Switches, VLANs, and CSMA.",
            "questions": [
                  {
                        "q": "What is LAN?",
                        "options": [
                              "A configuration command may fail or produce unexpected state.",
                              "Walls, distance, and reflections weaken signals.",
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "IP address and port information."
                        ],
                        "answer": 2,
                        "explain": "Local Area Network, a network covering a limited area such as a room, home, or campus."
                  },
                  {
                        "q": "What is MAC address?",
                        "options": [
                              "A fresh random value used to prevent replay.",
                              "A link-layer hardware address used for local frame delivery.",
                              "The original packet's upper-layer payload; the original IP header remains visible.",
                              "The recalculation of paths after topology or cost changes."
                        ],
                        "answer": 1,
                        "explain": "A link-layer hardware address used for local frame delivery."
                  },
                  {
                        "q": "What is ARP?",
                        "options": [
                              "Address Resolution Protocol, used on IPv4 LANs to map a next-hop IP address to a hardware/MAC address.",
                              "Sending and receiving at the same time.",
                              "Management Information Base, a structured collection of managed variables.",
                              "The transport-layer unit that carries application data and a transport header."
                        ],
                        "answer": 0,
                        "explain": "Address Resolution Protocol, used on IPv4 LANs to map a next-hop IP address to a hardware/MAC address."
                  },
                  {
                        "q": "What is ARP table?",
                        "options": [
                              "They bind public keys to identities.",
                              "An ACK repeated for the same data, often hinting that later data arrived but a gap exists.",
                              "A switch forwarding table mapping learned MAC addresses to ports.",
                              "A cache of recently learned IP-to-MAC mappings."
                        ],
                        "answer": 3,
                        "explain": "A cache of recently learned IP-to-MAC mappings."
                  },
                  {
                        "q": "What is Ethernet?",
                        "options": [
                              "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol.",
                              "TCP phase where the congestion window grows exponentially from a small starting point until a threshold or loss event.",
                              "The dominant wired LAN technology, using frames, MAC addresses, and usually switched full-duplex links.",
                              "Packets arrive faster than they can be transmitted."
                        ],
                        "answer": 2,
                        "explain": "The dominant wired LAN technology, using frames, MAC addresses, and usually switched full-duplex links."
                  },
                  {
                        "q": "What is Ethernet frame?",
                        "options": [
                              "TCP's smoothed estimate of round-trip time.",
                              "The link-layer format used by Ethernet.",
                              "Request To Send, an optional control frame to reserve the medium.",
                              "Router component that receives packets and may do lookup."
                        ],
                        "answer": 1,
                        "explain": "The link-layer format used by Ethernet."
                  },
                  {
                        "q": "What is Preamble?",
                        "options": [
                              "Bits at the start of an Ethernet frame used for synchronization.",
                              "A BGP message announcing reachability to a prefix.",
                              "Classless Inter-Domain Routing, notation for variable-length network prefixes.",
                              "The part of the network that connects end systems to the first router."
                        ],
                        "answer": 0,
                        "explain": "Bits at the start of an Ethernet frame used for synchronization."
                  },
                  {
                        "q": "What is Type field?",
                        "options": [
                              "Link utilization and throughput.",
                              "An acknowledgment that confirms receipt of all bytes or packets up to a stated point.",
                              "Additive Increase Multiplicative Decrease, Classic TCP behavior: increase the congestion window gradually, then cut it back sharply after congestion.",
                              "Ethernet field identifying the upper-layer protocol carried in the frame."
                        ],
                        "answer": 3,
                        "explain": "Ethernet field identifying the upper-layer protocol carried in the frame."
                  },
                  {
                        "q": "What is CRC field?",
                        "options": [
                              "The recalculation of paths after topology or cost changes.",
                              "The layered model of application, transport, network, link, and physical responsibilities.",
                              "Ethernet Frame Check Sequence field carrying a CRC for error detection.",
                              "Ethernet field identifying the upper-layer protocol carried in the frame."
                        ],
                        "answer": 2,
                        "explain": "Ethernet Frame Check Sequence field carrying a CRC for error detection."
                  },
                  {
                        "q": "What is Switch?",
                        "options": [
                              "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer.",
                              "A LAN device that learns source MAC addresses and forwards frames toward destination MAC addresses.",
                              "The internal router mechanism that transfers packets from input to output.",
                              "A selected frequency range used for wireless communication."
                        ],
                        "answer": 1,
                        "explain": "A LAN device that learns source MAC addresses and forwards frames toward destination MAC addresses."
                  },
                  {
                        "q": "What is MAC learning?",
                        "options": [
                              "A switch process that records which MAC addresses are reachable through which ports.",
                              "A service is useless if legitimate users cannot reach it.",
                              "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol.",
                              "Encapsulating data into protocol data units; at the link layer, this usually means placing a network-layer packet into a frame."
                        ],
                        "answer": 0,
                        "explain": "A switch process that records which MAC addresses are reachable through which ports."
                  },
                  {
                        "q": "What is Forwarding table?",
                        "options": [
                              "A database storing active security associations.",
                              "Communication where a device cannot send and receive at the same time.",
                              "A Wi-Fi acknowledgment that confirms frame reception.",
                              "A switch forwarding table mapping learned MAC addresses to ports."
                        ],
                        "answer": 3,
                        "explain": "A switch forwarding table mapping learned MAC addresses to ports."
                  },
                  {
                        "q": "What is Flooding?",
                        "options": [
                              "A logical IP address block within a network.",
                              "A value assigned to a link, often based on bandwidth, delay, or policy.",
                              "Sending a frame out multiple ports when the destination is unknown or broadcast.",
                              "Router buffers can overflow and drop packets."
                        ],
                        "answer": 2,
                        "explain": "Sending a frame out multiple ports when the destination is unknown or broadcast."
                  },
                  {
                        "q": "What is Broadcast domain?",
                        "options": [
                              "An intra-AS link-state routing protocol.",
                              "The set of devices that receive a layer-2 broadcast.",
                              "It identifies a resource and how to access it.",
                              "It connects access networks to larger Internet infrastructure."
                        ],
                        "answer": 1,
                        "explain": "The set of devices that receive a layer-2 broadcast."
                  },
                  {
                        "q": "What is Collision domain?",
                        "options": [
                              "A shared medium area where simultaneous transmissions can collide.",
                              "A Request for Comments document that records Internet standards and protocol specifications.",
                              "Request To Send, an optional control frame to reserve the medium.",
                              "A programming style that does not affect packet delivery."
                        ],
                        "answer": 0,
                        "explain": "A shared medium area where simultaneous transmissions can collide."
                  },
                  {
                        "q": "What is CSMA/CD?",
                        "options": [
                              "IEEE 802.11 Wi-Fi's collision avoidance medium access method.",
                              "A virtual private network service that can be carried over shared infrastructure.",
                              "A link-state routing protocol used in some large provider networks.",
                              "Carrier Sense Multiple Access with Collision Detection, used by classic half-duplex shared Ethernet."
                        ],
                        "answer": 3,
                        "explain": "Carrier Sense Multiple Access with Collision Detection, used by classic half-duplex shared Ethernet."
                  },
                  {
                        "q": "What is CSMA/CA?",
                        "options": [
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "Mobility Management Entity, a 4G control-plane component.",
                              "Carrier Sense Multiple Access with Collision Avoidance, used by IEEE 802.11 Wi-Fi.",
                              "They connect application processes to transport services."
                        ],
                        "answer": 2,
                        "explain": "Carrier Sense Multiple Access with Collision Avoidance, used by IEEE 802.11 Wi-Fi."
                  },
                  {
                        "q": "What is VLAN?",
                        "options": [
                              "Connecting an end device to one VLAN.",
                              "A logical LAN that separates traffic within the same physical switching infrastructure.",
                              "Bottlenecks, congestion, and protocol overhead reduce useful delivery rate.",
                              "Equal-Cost Multipath, using multiple equal-cost paths for traffic."
                        ],
                        "answer": 1,
                        "explain": "A logical LAN that separates traffic within the same physical switching infrastructure."
                  },
                  {
                        "q": "What is Trunk port?",
                        "options": [
                              "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags.",
                              "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place.",
                              "An agreement where networks exchange traffic, often without payment.",
                              "The part of the network that connects end systems to the first router."
                        ],
                        "answer": 0,
                        "explain": "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags."
                  },
                  {
                        "q": "What is Access port?",
                        "options": [
                              "IDS method that looks for deviations from normal behavior.",
                              "A shared medium area where simultaneous transmissions can collide.",
                              "The communication channel between neighboring nodes.",
                              "A switch port that carries untagged traffic for a single VLAN, typically toward an end device."
                        ],
                        "answer": 3,
                        "explain": "A switch port that carries untagged traffic for a single VLAN, typically toward an end device."
                  },
                  {
                        "q": "Why does a switch flood unknown destinations?",
                        "options": [
                              "Who created the message.",
                              "The dominant wired LAN technology, using frames, MAC addresses, and usually switched full-duplex links.",
                              "It does not yet know the destination MAC's port.",
                              "Forwarding packets to the mobile node's current location."
                        ],
                        "answer": 2,
                        "explain": "It does not yet know the destination MAC's port."
                  },
                  {
                        "q": "Why do VLANs improve segmentation?",
                        "options": [
                              "A rule set defining message format, message order, and actions when messages are sent or received.",
                              "They separate broadcast domains logically.",
                              "A minimal, connectionless, message-oriented transport protocol without built-in delivery, ordering, or duplicate protection.",
                              "A BGP attribute used inside an AS to prefer certain routes."
                        ],
                        "answer": 1,
                        "explain": "They separate broadcast domains logically."
                  },
                  {
                        "q": "What is a trunk port for?",
                        "options": [
                              "Carrying multiple VLANs between switches.",
                              "A device communicating over a wireless link.",
                              "The process of monitoring, configuring, and controlling network systems.",
                              "Regularly asking devices for status information."
                        ],
                        "answer": 0,
                        "explain": "Carrying multiple VLANs between switches."
                  },
                  {
                        "q": "What is an access port for?",
                        "options": [
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing.",
                              "A simple bit added to make the number of ones even or odd.",
                              "A physical cable type used only for local wiring.",
                              "Connecting an end device to one VLAN."
                        ],
                        "answer": 3,
                        "explain": "Connecting an end device to one VLAN."
                  },
                  {
                        "q": "Why does Ethernet include a CRC?",
                        "options": [
                              "Sender behavior that reduces or grows the sending rate to avoid overloading the network.",
                              "The system used by administrators to monitor and control devices.",
                              "To detect corrupted frames.",
                              "A label is added to the packet."
                        ],
                        "answer": 2,
                        "explain": "To detect corrupted frames."
                  },
                  {
                        "q": "What does MAC learning use?",
                        "options": [
                              "Moving an active device connection from one base station to another.",
                              "The source MAC address of arriving frames.",
                              "A service is useless if legitimate users cannot reach it.",
                              "A link-layer hardware address used for local frame delivery."
                        ],
                        "answer": 1,
                        "explain": "The source MAC address of arriving frames."
                  },
                  {
                        "q": "Why is ARP limited to the local network?",
                        "options": [
                              "It resolves MAC addresses only within a LAN/broadcast domain.",
                              "A network that buys connectivity or transit from another network.",
                              "The top network layer where applications define messages and services.",
                              "Who created the message."
                        ],
                        "answer": 0,
                        "explain": "It resolves MAC addresses only within a LAN/broadcast domain."
                  },
                  {
                        "q": "What is a broadcast MAC address used for?",
                        "options": [
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity.",
                              "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses.",
                              "A number that identifies byte positions for ordering and reliability.",
                              "Sending a frame to all devices in a LAN segment."
                        ],
                        "answer": 3,
                        "explain": "Sending a frame to all devices in a LAN segment."
                  },
                  {
                        "q": "Why does Wi-Fi avoid collisions instead of detecting them?",
                        "options": [
                              "A BGP message announcing reachability to a prefix.",
                              "Detecting unauthorized changes to data.",
                              "Wireless devices may not hear collisions while transmitting.",
                              "Rules for deciding who can transmit on a shared medium."
                        ],
                        "answer": 2,
                        "explain": "Wireless devices may not hear collisions while transmitting."
                  },
                  {
                        "q": "What does a VLAN tag identify?",
                        "options": [
                              "Access Control List, a list of permit or deny rules.",
                              "The VLAN to which the frame belongs.",
                              "An ACK repeated for the same data, often hinting that later data arrived but a gap exists.",
                              "It organizes manageable device variables."
                        ],
                        "answer": 1,
                        "explain": "The VLAN to which the frame belongs."
                  }
            ]
      },
      {
            "title": "4.3 Practice: Link Virtualization, MPLS, and Data Center Networks",
            "description": "30-item practice test for Link Virtualization, MPLS, and Data Center Networks.",
            "questions": [
                  {
                        "q": "What is Link virtualization?",
                        "options": [
                              "Making a network path behave like a logical link or service.",
                              "A network or group of networks under one administrative control.",
                              "A link-layer hardware address used for local frame delivery.",
                              "The recalculation of paths after topology or cost changes."
                        ],
                        "answer": 0,
                        "explain": "Making a network path behave like a logical link or service."
                  },
                  {
                        "q": "What is MPLS?",
                        "options": [
                              "Regularly asking devices for status information.",
                              "Network Address Translation, rewriting address and often port fields between private and public address realms.",
                              "Clear To Send, a response allowing a sender to transmit.",
                              "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes."
                        ],
                        "answer": 3,
                        "explain": "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes."
                  },
                  {
                        "q": "What is Label?",
                        "options": [
                              "The top network layer where applications define messages and services.",
                              "A small chunk of data plus headers that can be forwarded through a network.",
                              "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class.",
                              "Recovering readable data from ciphertext."
                        ],
                        "answer": 2,
                        "explain": "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class."
                  },
                  {
                        "q": "What is Label-switched router?",
                        "options": [
                              "A simple bit added to make the number of ones even or odd.",
                              "A router that forwards MPLS traffic based on label values.",
                              "Streaming or exporting operational data for monitoring.",
                              "Information that a destination prefix can be reached."
                        ],
                        "answer": 1,
                        "explain": "A router that forwards MPLS traffic based on label values."
                  },
                  {
                        "q": "What is Label forwarding table?",
                        "options": [
                              "A table mapping incoming labels to outgoing labels and interfaces.",
                              "Keeping message contents hidden from unauthorized parties.",
                              "IPsec mode that encapsulates and protects the entire original IP datagram inside a new outer IP datagram.",
                              "A Request for Comments document that records Internet standards and protocol specifications."
                        ],
                        "answer": 0,
                        "explain": "A table mapping incoming labels to outgoing labels and interfaces."
                  },
                  {
                        "q": "What is LSP?",
                        "options": [
                              "The mobile device, such as a phone or cellular modem.",
                              "The ability to keep network service while changing attachment points.",
                              "What the device is actually doing now.",
                              "Label Switched Path, the route MPLS packets follow through a network."
                        ],
                        "answer": 3,
                        "explain": "Label Switched Path, the route MPLS packets follow through a network."
                  },
                  {
                        "q": "What is Ingress router?",
                        "options": [
                              "To improve scalability and reduce routing overhead.",
                              "The wireless medium for a transmission.",
                              "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label.",
                              "The data link layer unit that carries a network-layer packet."
                        ],
                        "answer": 2,
                        "explain": "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label."
                  },
                  {
                        "q": "What is Egress router?",
                        "options": [
                              "BGP-learned routes inside one autonomous system.",
                              "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain.",
                              "The local action of moving a packet from a router input to an output interface.",
                              "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity."
                        ],
                        "answer": 1,
                        "explain": "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain."
                  },
                  {
                        "q": "What is Traffic engineering?",
                        "options": [
                              "Controlling paths to meet performance or policy goals.",
                              "Carrier Sense Multiple Access with Collision Detection, used by classic half-duplex shared Ethernet.",
                              "A router rejects routes containing its own AS number.",
                              "Classless Inter-Domain Routing, notation for variable-length network prefixes."
                        ],
                        "answer": 0,
                        "explain": "Controlling paths to meet performance or policy goals."
                  },
                  {
                        "q": "What is Fast reroute?",
                        "options": [
                              "Sending a frame out multiple ports when the destination is unknown or broadcast.",
                              "A prefix is no longer reachable through that path.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers.",
                              "Quickly moving traffic to a backup path after failure."
                        ],
                        "answer": 3,
                        "explain": "Quickly moving traffic to a backup path after failure."
                  },
                  {
                        "q": "What is VPN?",
                        "options": [
                              "The local action of moving a packet from a router input to an output interface.",
                              "Collecting data from many processes so they can share the network.",
                              "A virtual private network service that can be carried over shared infrastructure.",
                              "A 4G EPC gateway connecting user traffic to external packet data networks and anchoring IP connectivity."
                        ],
                        "answer": 2,
                        "explain": "A virtual private network service that can be carried over shared infrastructure."
                  },
                  {
                        "q": "What is Virtual circuit?",
                        "options": [
                              "A rule set defining message format, message order, and actions when messages are sent or received.",
                              "A logical path that behaves like a dedicated circuit.",
                              "The table of selected routes used to forward packets.",
                              "A graphics rendering technique for web pages."
                        ],
                        "answer": 1,
                        "explain": "A logical path that behaves like a dedicated circuit."
                  },
                  {
                        "q": "What is Overlay network?",
                        "options": [
                              "A logical network built on top of another network.",
                              "Programmable and centralized network control.",
                              "The logic that computes or installs forwarding behavior.",
                              "A link where multiple nodes share the same communication medium."
                        ],
                        "answer": 0,
                        "explain": "A logical network built on top of another network."
                  },
                  {
                        "q": "What is Underlay network?",
                        "options": [
                              "The table of selected routes used to forward packets.",
                              "The IPsec AH header used for integrity and data origin authentication.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers.",
                              "The physical or base IP network that carries overlay traffic."
                        ],
                        "answer": 3,
                        "explain": "The physical or base IP network that carries overlay traffic."
                  },
                  {
                        "q": "What is Data center network?",
                        "options": [
                              "Using a visited carrier network while subscribed to a home carrier.",
                              "The network name identifying a Wi-Fi service set.",
                              "A high-speed network connecting large numbers of servers.",
                              "Interoperability between different systems and vendors."
                        ],
                        "answer": 2,
                        "explain": "A high-speed network connecting large numbers of servers."
                  },
                  {
                        "q": "What is Top-of-rack switch?",
                        "options": [
                              "Policy, path exploration, and distributed updates take time.",
                              "A switch placed near or inside a server rack.",
                              "It establishes connection state before data transfer.",
                              "A configuration command may fail or produce unexpected state."
                        ],
                        "answer": 1,
                        "explain": "A switch placed near or inside a server rack."
                  },
                  {
                        "q": "What is Leaf-spine?",
                        "options": [
                              "A scalable data-center topology with leaf access switches and spine core switches.",
                              "It reduces response time and upstream traffic.",
                              "The source MAC address of arriving frames.",
                              "The network name identifying a Wi-Fi service set."
                        ],
                        "answer": 0,
                        "explain": "A scalable data-center topology with leaf access switches and spine core switches."
                  },
                  {
                        "q": "What is Load balancing?",
                        "options": [
                              "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class.",
                              "Symmetric keys are efficient for bulk data.",
                              "A nearby server that delivers cached content to users.",
                              "Distributing traffic across multiple paths or servers."
                        ],
                        "answer": 3,
                        "explain": "Distributing traffic across multiple paths or servers."
                  },
                  {
                        "q": "What is ECMP?",
                        "options": [
                              "TCP sender-side limit on how much data can be in flight due to congestion control.",
                              "Multiple devices use the same radio medium.",
                              "Equal-Cost Multipath, using multiple equal-cost paths for traffic.",
                              "A table mapping incoming labels to outgoing labels and interfaces."
                        ],
                        "answer": 2,
                        "explain": "Equal-Cost Multipath, using multiple equal-cost paths for traffic."
                  },
                  {
                        "q": "What is Fabric?",
                        "options": [
                              "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility.",
                              "The overall switching infrastructure of a data center.",
                              "A Request for Comments document that records Internet standards and protocol specifications.",
                              "A device that cannot hear another transmitter but can still collide at the receiver."
                        ],
                        "answer": 1,
                        "explain": "The overall switching infrastructure of a data center."
                  },
                  {
                        "q": "Why can MPLS help traffic engineering?",
                        "options": [
                              "Operators can steer flows over selected paths.",
                              "The transport-layer unit that carries application data and a transport header.",
                              "They compactly acknowledge a continuous byte stream.",
                              "Distributing traffic across multiple paths or servers."
                        ],
                        "answer": 0,
                        "explain": "Operators can steer flows over selected paths."
                  },
                  {
                        "q": "What does an LSR do?",
                        "options": [
                              "A switch placed near or inside a server rack.",
                              "Maximum Transmission Unit, the largest frame payload a link can carry.",
                              "How strong the signal is compared with noise.",
                              "It forwards packets based on labels."
                        ],
                        "answer": 3,
                        "explain": "It forwards packets based on labels."
                  },
                  {
                        "q": "What happens at the MPLS ingress?",
                        "options": [
                              "A logical IP address block within a network.",
                              "Access Control List, a list of permit or deny rules.",
                              "A label is added to the packet.",
                              "IP address and port information."
                        ],
                        "answer": 2,
                        "explain": "A label is added to the packet."
                  },
                  {
                        "q": "What happens at the MPLS egress?",
                        "options": [
                              "The data link layer unit that carries a network-layer packet.",
                              "The MPLS label is removed.",
                              "A device communicating over a wireless link.",
                              "The local action of moving a packet from a router input to an output interface."
                        ],
                        "answer": 1,
                        "explain": "The MPLS label is removed."
                  },
                  {
                        "q": "Why are data centers often built as fabrics?",
                        "options": [
                              "They need many high-capacity paths between servers.",
                              "Classless Inter-Domain Routing, notation for variable-length network prefixes.",
                              "A firewall that tracks connection or flow state instead of judging each packet in isolation.",
                              "A 4G data-plane anchor that forwards user traffic."
                        ],
                        "answer": 0,
                        "explain": "They need many high-capacity paths between servers."
                  },
                  {
                        "q": "What does ECMP allow?",
                        "options": [
                              "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol.",
                              "Sending a frame to all devices in a LAN segment.",
                              "A sharing method where packets from many users take turns using links.",
                              "Using multiple equal-cost paths."
                        ],
                        "answer": 3,
                        "explain": "Using multiple equal-cost paths."
                  },
                  {
                        "q": "What is an overlay network?",
                        "options": [
                              "Announcing AP information and SSID availability.",
                              "A selected frequency range used for wireless communication.",
                              "A logical network running over an underlay.",
                              "A private key to sign and a public key to verify."
                        ],
                        "answer": 2,
                        "explain": "A logical network running over an underlay."
                  },
                  {
                        "q": "Why is fast reroute useful?",
                        "options": [
                              "Keeping services reachable for legitimate users.",
                              "It reduces outage time after a failure.",
                              "The IPsec AH header used for integrity and data origin authentication.",
                              "A value assigned to a link, often based on bandwidth, delay, or policy."
                        ],
                        "answer": 1,
                        "explain": "It reduces outage time after a failure."
                  },
                  {
                        "q": "What is a VPN service in provider networks?",
                        "options": [
                              "Private connectivity over shared infrastructure.",
                              "It connects access networks to larger Internet infrastructure.",
                              "Transport Layer Security, a protocol that secures application data with authentication, confidentiality, and integrity.",
                              "The wireless medium for a transmission."
                        ],
                        "answer": 0,
                        "explain": "Private connectivity over shared infrastructure."
                  },
                  {
                        "q": "Why use load balancing in data centers?",
                        "options": [
                              "HTTP protected by TLS.",
                              "An architecture where end systems communicate directly and share roles.",
                              "A sharing method where packets from many users take turns using links.",
                              "To spread traffic and avoid hot spots."
                        ],
                        "answer": 3,
                        "explain": "To spread traffic and avoid hot spots."
                  }
            ]
      },
      {
            "title": "5.1 Practice: Wireless Networks and Wi-Fi",
            "description": "30-item practice test for Wireless Networks and Wi-Fi.",
            "questions": [
                  {
                        "q": "What is Wireless host?",
                        "options": [
                              "An ongoing session while the user moves.",
                              "It organizes streams into manageable transmission units.",
                              "A device communicating over a wireless link.",
                              "TCP connection setup using SYN, SYN-ACK, and ACK messages to agree on initial sequence numbers."
                        ],
                        "answer": 2,
                        "explain": "A device communicating over a wireless link."
                  },
                  {
                        "q": "What is Base station?",
                        "options": [
                              "Configuration such as gateway and DNS server information.",
                              "A radio access point connecting wireless devices to network infrastructure.",
                              "Each direction can have separate keys and parameters.",
                              "Internal private hosts are hidden behind translated addresses."
                        ],
                        "answer": 1,
                        "explain": "A radio access point connecting wireless devices to network infrastructure."
                  },
                  {
                        "q": "What is Access point?",
                        "options": [
                              "A Wi-Fi base station that connects wireless hosts to a LAN.",
                              "Classless Inter-Domain Routing, notation for variable-length network prefixes.",
                              "Border Gateway Protocol, the Internet's main interdomain path-vector routing protocol.",
                              "Internal BGP sessions used to distribute BGP-learned routes inside one autonomous system."
                        ],
                        "answer": 0,
                        "explain": "A Wi-Fi base station that connects wireless hosts to a LAN."
                  },
                  {
                        "q": "What is Infrastructure mode?",
                        "options": [
                              "Making a network path behave like a logical link or service.",
                              "Keys and parameters for IPsec security associations.",
                              "A virtual private network service that can be carried over shared infrastructure.",
                              "Wireless mode where devices communicate through an access point."
                        ],
                        "answer": 3,
                        "explain": "Wireless mode where devices communicate through an access point."
                  },
                  {
                        "q": "What is Ad hoc mode?",
                        "options": [
                              "Message Authentication Code, used to verify authenticity and integrity with a shared key.",
                              "Software on a managed device that provides management information.",
                              "Wireless mode where devices communicate directly without infrastructure.",
                              "Maximum Transmission Unit, the largest frame payload a link can carry."
                        ],
                        "answer": 2,
                        "explain": "Wireless mode where devices communicate directly without infrastructure."
                  },
                  {
                        "q": "What is Wireless link?",
                        "options": [
                              "The rule of choosing the most specific matching destination prefix.",
                              "A radio channel carrying bits between devices.",
                              "An architecture where end systems communicate directly and share roles.",
                              "They reduce overlap and interference when planned well."
                        ],
                        "answer": 1,
                        "explain": "A radio channel carrying bits between devices."
                  },
                  {
                        "q": "What is Signal attenuation?",
                        "options": [
                              "Loss of signal strength over distance or through obstacles.",
                              "The hosts and access networks where users and applications connect.",
                              "The maximum transmission rate a link can support.",
                              "Collecting data from many processes so they can share the network."
                        ],
                        "answer": 0,
                        "explain": "Loss of signal strength over distance or through obstacles."
                  },
                  {
                        "q": "What is Interference?",
                        "options": [
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration.",
                              "A service that delivers data correctly and in order despite loss or corruption.",
                              "A screened network segment for public-facing services, separated from both untrusted networks and the internal LAN.",
                              "Unwanted signals that disrupt communication."
                        ],
                        "answer": 3,
                        "explain": "Unwanted signals that disrupt communication."
                  },
                  {
                        "q": "What is Multipath?",
                        "options": [
                              "Carrier Sense Multiple Access with Collision Detection, used by classic half-duplex shared Ethernet.",
                              "Router component that queues and transmits packets on an outgoing link.",
                              "Signal copies arriving by different paths because of reflection.",
                              "A logical network running over an underlay."
                        ],
                        "answer": 2,
                        "explain": "Signal copies arriving by different paths because of reflection."
                  },
                  {
                        "q": "What is SNR?",
                        "options": [
                              "Business or administrative rules that influence route selection.",
                              "Signal-to-noise ratio, a measure of signal quality.",
                              "The retransmission timer value derived from estimated RTT and variation.",
                              "A parity method that can detect and sometimes locate bit errors using rows and columns."
                        ],
                        "answer": 1,
                        "explain": "Signal-to-noise ratio, a measure of signal quality."
                  },
                  {
                        "q": "What is 802.11?",
                        "options": [
                              "The IEEE 802.11 wireless LAN MAC and PHY standards commonly marketed as Wi-Fi.",
                              "The physical or base IP network that carries overlay traffic.",
                              "To spread traffic and avoid hot spots.",
                              "A prefix is no longer reachable through that path."
                        ],
                        "answer": 0,
                        "explain": "The IEEE 802.11 wireless LAN MAC and PHY standards commonly marketed as Wi-Fi."
                  },
                  {
                        "q": "What is SSID?",
                        "options": [
                              "The divisor pattern used in CRC computation.",
                              "A temporary symmetric key used after secure setup.",
                              "It catches more burst and pattern errors.",
                              "The network name identifying a Wi-Fi service set."
                        ],
                        "answer": 3,
                        "explain": "The network name identifying a Wi-Fi service set."
                  },
                  {
                        "q": "What is Association?",
                        "options": [
                              "A programming style that does not affect packet delivery.",
                              "Round-trip time between sending data and receiving its acknowledgment.",
                              "The process of a wireless host joining an access point.",
                              "A sum-based error detection value."
                        ],
                        "answer": 2,
                        "explain": "The process of a wireless host joining an access point."
                  },
                  {
                        "q": "What is Beacon frame?",
                        "options": [
                              "Address Resolution Protocol, used on IPv4 LANs to map a next-hop IP address to a hardware/MAC address.",
                              "A frame an AP sends to announce network presence and parameters.",
                              "They adjust quality when available throughput changes.",
                              "A hardware power mode for reducing electricity use."
                        ],
                        "answer": 1,
                        "explain": "A frame an AP sends to announce network presence and parameters."
                  },
                  {
                        "q": "What is CSMA/CA?",
                        "options": [
                              "IEEE 802.11 Wi-Fi's collision avoidance medium access method.",
                              "Wireless mode where devices communicate directly without infrastructure.",
                              "They let TCP order data and detect missing bytes.",
                              "To reduce routing table size."
                        ],
                        "answer": 0,
                        "explain": "IEEE 802.11 Wi-Fi's collision avoidance medium access method."
                  },
                  {
                        "q": "What is RTS?",
                        "options": [
                              "Internet routing follows business and administrative relationships.",
                              "Dynamic Adaptive Streaming over HTTP, where a client selects segment bitrates based on current network and playback conditions.",
                              "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices.",
                              "Request To Send, an optional control frame to reserve the medium."
                        ],
                        "answer": 3,
                        "explain": "Request To Send, an optional control frame to reserve the medium."
                  },
                  {
                        "q": "What is CTS?",
                        "options": [
                              "To detect corrupted frames.",
                              "An acknowledgment that confirms receipt of all bytes or packets up to a stated point.",
                              "Clear To Send, a response allowing a sender to transmit.",
                              "An ACK repeated for the same data, often hinting that later data arrived but a gap exists."
                        ],
                        "answer": 2,
                        "explain": "Clear To Send, a response allowing a sender to transmit."
                  },
                  {
                        "q": "What is ACK frame?",
                        "options": [
                              "An operation that reads management information from a device.",
                              "A Wi-Fi acknowledgment that confirms frame reception.",
                              "IDS method that looks for deviations from normal behavior.",
                              "A defined interface that lets software components request services or data."
                        ],
                        "answer": 1,
                        "explain": "A Wi-Fi acknowledgment that confirms frame reception."
                  },
                  {
                        "q": "What is Hidden terminal?",
                        "options": [
                              "A device that cannot hear another transmitter but can still collide at the receiver.",
                              "Clear To Send, a response allowing a sender to transmit.",
                              "An agreement where networks exchange traffic, often without payment.",
                              "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control."
                        ],
                        "answer": 0,
                        "explain": "A device that cannot hear another transmitter but can still collide at the receiver."
                  },
                  {
                        "q": "What is Channel?",
                        "options": [
                              "It also includes service flexibility and core-network evolution.",
                              "A logical network built on top of another network.",
                              "An architecture where clients request service from an always-on server.",
                              "A selected frequency range used for wireless communication."
                        ],
                        "answer": 3,
                        "explain": "A selected frequency range used for wireless communication."
                  },
                  {
                        "q": "Why does Wi-Fi use ACKs?",
                        "options": [
                              "The original packet's upper-layer payload; the original IP header remains visible.",
                              "A selected frequency range used for wireless communication.",
                              "Wireless frames are more likely to be lost or corrupted.",
                              "Quickly moving traffic to a backup path after failure."
                        ],
                        "answer": 2,
                        "explain": "Wireless frames are more likely to be lost or corrupted."
                  },
                  {
                        "q": "Why are channels important?",
                        "options": [
                              "After multiple duplicate ACKs indicate likely loss.",
                              "They reduce overlap and interference when planned well.",
                              "Routing information has stabilized after changes.",
                              "Address Resolution Protocol, used on IPv4 LANs to map a next-hop IP address to a hardware/MAC address."
                        ],
                        "answer": 1,
                        "explain": "They reduce overlap and interference when planned well."
                  },
                  {
                        "q": "What is a hidden terminal?",
                        "options": [
                              "A sender that cannot hear another sender but can collide at the receiver.",
                              "A pipelined protocol that retransmits only specific missing packets.",
                              "Packets waiting because the output link or processing path is busy.",
                              "It reduces outage time after a failure."
                        ],
                        "answer": 0,
                        "explain": "A sender that cannot hear another sender but can collide at the receiver."
                  },
                  {
                        "q": "What does RTS/CTS reserve?",
                        "options": [
                              "Link utilization and throughput.",
                              "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes.",
                              "The hosts and access networks where users and applications connect.",
                              "The wireless medium for a transmission."
                        ],
                        "answer": 3,
                        "explain": "The wireless medium for a transmission."
                  },
                  {
                        "q": "Why does signal strength drop indoors?",
                        "options": [
                              "To spread traffic and avoid hot spots.",
                              "A family of teaching protocols used to explain reliability mechanisms.",
                              "Walls, distance, and reflections weaken signals.",
                              "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer."
                        ],
                        "answer": 2,
                        "explain": "Walls, distance, and reflections weaken signals."
                  },
                  {
                        "q": "What does SNR indicate?",
                        "options": [
                              "They compactly acknowledge a continuous byte stream.",
                              "How strong the signal is compared with noise.",
                              "A Wi-Fi acknowledgment that confirms frame reception.",
                              "Sending a frame to all devices in a LAN segment."
                        ],
                        "answer": 1,
                        "explain": "How strong the signal is compared with noise."
                  },
                  {
                        "q": "What is the role of beacon frames?",
                        "options": [
                              "Announcing AP information and SSID availability.",
                              "Software on a managed device that provides management information.",
                              "A device that receives packets and forwards them toward a destination.",
                              "A simple mail access protocol that downloads messages from a server."
                        ],
                        "answer": 0,
                        "explain": "Announcing AP information and SSID availability."
                  },
                  {
                        "q": "What is ad hoc mode useful for?",
                        "options": [
                              "Wireless frames are more likely to be lost or corrupted.",
                              "The part of a mobile network connecting devices to the core.",
                              "Cellular radio equipment that connects user devices to the carrier network.",
                              "Direct wireless communication without an AP."
                        ],
                        "answer": 3,
                        "explain": "Direct wireless communication without an AP."
                  },
                  {
                        "q": "Why is wireless shared by nature?",
                        "options": [
                              "Each direction can have separate keys and parameters.",
                              "Transforming readable data into protected ciphertext.",
                              "Multiple devices use the same radio medium.",
                              "A recursive or caching service that resolves DNS questions on behalf of clients."
                        ],
                        "answer": 2,
                        "explain": "Multiple devices use the same radio medium."
                  },
                  {
                        "q": "What happens after successful association?",
                        "options": [
                              "Wrapping one packet inside another packet.",
                              "The host can send frames through the AP.",
                              "A pipelined protocol that retransmits a lost packet and later packets in the window.",
                              "Software on a managed device that provides management information."
                        ],
                        "answer": 1,
                        "explain": "The host can send frames through the AP."
                  }
            ]
      },
      {
            "title": "5.2 Practice: Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "description": "30-item practice test for Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP.",
            "questions": [
                  {
                        "q": "What is Mobility?",
                        "options": [
                              "The ability to keep network service while changing attachment points.",
                              "Wireless frames are more likely to be lost or corrupted.",
                              "Adding boundaries and link-layer information around data.",
                              "The distributed naming system that maps domain names to records such as A, AAAA, MX, and CNAME."
                        ],
                        "answer": 0,
                        "explain": "The ability to keep network service while changing attachment points."
                  },
                  {
                        "q": "What is User equipment?",
                        "options": [
                              "A LAN device that learns source MAC addresses and forwards frames toward destination MAC addresses.",
                              "A one-way security relationship defining IPsec parameters and keys.",
                              "A database index used only for local searches.",
                              "The mobile device, such as a phone or cellular modem."
                        ],
                        "answer": 3,
                        "explain": "The mobile device, such as a phone or cellular modem."
                  },
                  {
                        "q": "What is SIM?",
                        "options": [
                              "A label is added to the packet.",
                              "A radio access point connecting wireless devices to network infrastructure.",
                              "Subscriber identity module used for cellular identity and authentication.",
                              "Recovering readable data from ciphertext."
                        ],
                        "answer": 2,
                        "explain": "Subscriber identity module used for cellular identity and authentication."
                  },
                  {
                        "q": "What is Base station?",
                        "options": [
                              "The layer that provides logical communication between application processes.",
                              "Cellular radio equipment that connects user devices to the carrier network.",
                              "Walls, distance, and reflections weaken signals.",
                              "It identifies which part of an address is the network portion."
                        ],
                        "answer": 1,
                        "explain": "Cellular radio equipment that connects user devices to the carrier network."
                  },
                  {
                        "q": "What is Cell?",
                        "options": [
                              "The geographic coverage area served by a base station.",
                              "A switch forwarding table mapping learned MAC addresses to ports.",
                              "Cellular radio equipment that connects user devices to the carrier network.",
                              "The recalculation of paths after topology or cost changes."
                        ],
                        "answer": 0,
                        "explain": "The geographic coverage area served by a base station."
                  },
                  {
                        "q": "What is Radio access network?",
                        "options": [
                              "They reduce overlap and interference when planned well.",
                              "The entire original IP datagram, placed inside a new outer IP packet.",
                              "BGP-learned routes inside one autonomous system.",
                              "The part of a mobile network connecting devices to the core."
                        ],
                        "answer": 3,
                        "explain": "The part of a mobile network connecting devices to the core."
                  },
                  {
                        "q": "What is Core network?",
                        "options": [
                              "A pipelined protocol that retransmits only specific missing packets.",
                              "An Internet Service Provider that connects customers and other networks to the Internet.",
                              "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity.",
                              "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain."
                        ],
                        "answer": 2,
                        "explain": "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity."
                  },
                  {
                        "q": "What is 4G LTE?",
                        "options": [
                              "Carrying multiple VLANs between switches.",
                              "A cellular generation using packet-switched IP-based design.",
                              "A shared secret key used for both encryption and decryption.",
                              "A switch placed near or inside a server rack."
                        ],
                        "answer": 1,
                        "explain": "A cellular generation using packet-switched IP-based design."
                  },
                  {
                        "q": "What is 5G?",
                        "options": [
                              "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility.",
                              "A cellular generation using packet-switched IP-based design.",
                              "A parity method that can detect and sometimes locate bit errors using rows and columns.",
                              "A transport identifier that helps deliver data to the correct application process."
                        ],
                        "answer": 0,
                        "explain": "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility."
                  },
                  {
                        "q": "What is MME?",
                        "options": [
                              "The network currently serving a roaming user.",
                              "Multiple devices may try to transmit at the same time.",
                              "The divisor pattern used in CRC computation.",
                              "Mobility Management Entity, a 4G control-plane component."
                        ],
                        "answer": 3,
                        "explain": "Mobility Management Entity, a 4G control-plane component."
                  },
                  {
                        "q": "What is Serving gateway?",
                        "options": [
                              "Ethernet Frame Check Sequence field carrying a CRC for error detection.",
                              "The recalculation of paths after topology or cost changes.",
                              "A 4G data-plane anchor that forwards user traffic.",
                              "Information that a destination prefix can be reached."
                        ],
                        "answer": 2,
                        "explain": "A 4G data-plane anchor that forwards user traffic."
                  },
                  {
                        "q": "What is PDN gateway?",
                        "options": [
                              "A lookup table used to choose an outgoing interface; routers usually key it by IP prefix.",
                              "A 4G EPC gateway connecting user traffic to external packet data networks and anchoring IP connectivity.",
                              "To improve scalability and reduce routing overhead.",
                              "A switch forwarding table mapping learned MAC addresses to ports."
                        ],
                        "answer": 1,
                        "explain": "A 4G EPC gateway connecting user traffic to external packet data networks and anchoring IP connectivity."
                  },
                  {
                        "q": "What is Handoff?",
                        "options": [
                              "Moving an active device connection from one base station to another.",
                              "Quickly moving traffic to a backup path after failure.",
                              "Control information placed before the payload.",
                              "The MPLS edge router that classifies traffic into a forwarding equivalence class and pushes the first label."
                        ],
                        "answer": 0,
                        "explain": "Moving an active device connection from one base station to another."
                  },
                  {
                        "q": "What is Roaming?",
                        "options": [
                              "A private key to sign and a public key to verify.",
                              "The network a roaming user currently attaches to.",
                              "Remote Procedure Call, a structured request used by protocols such as NETCONF.",
                              "Using a visited carrier network while subscribed to a home carrier."
                        ],
                        "answer": 3,
                        "explain": "Using a visited carrier network while subscribed to a home carrier."
                  },
                  {
                        "q": "What is Home network?",
                        "options": [
                              "Operators can steer flows over selected paths.",
                              "A design that divides OSPF networks into areas for scalability.",
                              "The subscriber's original carrier network.",
                              "The host can send frames through the AP."
                        ],
                        "answer": 2,
                        "explain": "The subscriber's original carrier network."
                  },
                  {
                        "q": "What is Visited network?",
                        "options": [
                              "A high-speed network connecting large numbers of servers.",
                              "The network a roaming user currently attaches to.",
                              "Peers contribute resources as more users join.",
                              "Queuing delay"
                        ],
                        "answer": 1,
                        "explain": "The network a roaming user currently attaches to."
                  },
                  {
                        "q": "What is Mobile IP?",
                        "options": [
                              "An IETF mobility protocol that lets a mobile node keep a home address while using a care-of address away from home.",
                              "The MPLS edge router that removes MPLS labeling and forwards the packet beyond the MPLS domain.",
                              "A pipelined protocol that retransmits only specific missing packets.",
                              "An Internet Service Provider that connects customers and other networks to the Internet."
                        ],
                        "answer": 0,
                        "explain": "An IETF mobility protocol that lets a mobile node keep a home address while using a care-of address away from home."
                  },
                  {
                        "q": "What is Home agent?",
                        "options": [
                              "Keeping message contents hidden from unauthorized parties.",
                              "IPsec mode that encapsulates and protects the entire original IP datagram inside a new outer IP datagram.",
                              "A Request for Comments document that records Internet standards and protocol specifications.",
                              "Mobile IP router on the home network that tunnels packets to the mobile node's current care-of address."
                        ],
                        "answer": 3,
                        "explain": "Mobile IP router on the home network that tunnels packets to the mobile node's current care-of address."
                  },
                  {
                        "q": "What is Foreign agent?",
                        "options": [
                              "TCP's smoothed estimate of round-trip time.",
                              "A simple mail access protocol that downloads messages from a server.",
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration.",
                              "Internal private hosts are hidden behind translated addresses."
                        ],
                        "answer": 2,
                        "explain": "Mobile IP router in a visited network that can provide a care-of address and relay registration."
                  },
                  {
                        "q": "What is Tunneling?",
                        "options": [
                              "It reduces outage time after a failure.",
                              "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path.",
                              "Wireless devices may not hear collisions while transmitting.",
                              "A table mapping incoming labels to outgoing labels and interfaces."
                        ],
                        "answer": 1,
                        "explain": "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path."
                  },
                  {
                        "q": "Why is SIM authentication important?",
                        "options": [
                              "It verifies the subscriber to the carrier network.",
                              "What the device is actually doing now.",
                              "The software interface between an application process and the transport layer.",
                              "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices."
                        ],
                        "answer": 0,
                        "explain": "It verifies the subscriber to the carrier network."
                  },
                  {
                        "q": "What does handoff try to preserve?",
                        "options": [
                              "Sending a frame out multiple ports when the destination is unknown or broadcast.",
                              "It identifies a resource and how to access it.",
                              "A device that cannot hear another transmitter but can still collide at the receiver.",
                              "An ongoing session while the user moves."
                        ],
                        "answer": 3,
                        "explain": "An ongoing session while the user moves."
                  },
                  {
                        "q": "What is a visited network?",
                        "options": [
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing.",
                              "Encapsulating Security Payload, commonly used for IPsec confidentiality and optional integrity/authentication.",
                              "The network currently serving a roaming user.",
                              "A routing approach where routers share distance estimates with neighbors."
                        ],
                        "answer": 2,
                        "explain": "The network currently serving a roaming user."
                  },
                  {
                        "q": "What is tunneling used for in mobility?",
                        "options": [
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "Forwarding packets to the mobile node's current location.",
                              "To spread traffic and avoid hot spots.",
                              "Keys and parameters for IPsec security associations."
                        ],
                        "answer": 1,
                        "explain": "Forwarding packets to the mobile node's current location."
                  },
                  {
                        "q": "Why can mobility affect TCP?",
                        "options": [
                              "Handoffs and wireless loss can look like congestion.",
                              "Error detection information such as a CRC.",
                              "A simple method that sends one packet then waits for an ACK.",
                              "A LAN device that learns source MAC addresses and forwards frames toward destination MAC addresses."
                        ],
                        "answer": 0,
                        "explain": "Handoffs and wireless loss can look like congestion."
                  },
                  {
                        "q": "What is the radio access network?",
                        "options": [
                              "Detecting unauthorized changes to data.",
                              "Packets may need fragmentation or path MTU discovery.",
                              "HTTP behavior, especially in HTTP/1.1, that reuses one TCP connection for multiple requests and responses.",
                              "The base stations and radio systems connecting devices."
                        ],
                        "answer": 3,
                        "explain": "The base stations and radio systems connecting devices."
                  },
                  {
                        "q": "What does the core network handle?",
                        "options": [
                              "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class.",
                              "Cellular radio equipment that connects user devices to the carrier network.",
                              "Identity, mobility, gateways, and Internet connectivity.",
                              "A BGP attribute listing autonomous systems a route advertisement has traversed."
                        ],
                        "answer": 2,
                        "explain": "Identity, mobility, gateways, and Internet connectivity."
                  },
                  {
                        "q": "What is a home agent?",
                        "options": [
                              "Sending multiple packets before waiting for all acknowledgments.",
                              "The Mobile IP component that forwards traffic to the mobile node.",
                              "The 32-bit Internet Protocol version still widely used.",
                              "The point when routers agree on stable routing information."
                        ],
                        "answer": 1,
                        "explain": "The Mobile IP component that forwards traffic to the mobile node."
                  },
                  {
                        "q": "Why do cellular networks divide areas into cells?",
                        "options": [
                              "To reuse spectrum and manage coverage.",
                              "A service model that tries to deliver data but gives no guarantee.",
                              "A logical network built on top of another network.",
                              "Shortest paths from one source to all destinations."
                        ],
                        "answer": 0,
                        "explain": "To reuse spectrum and manage coverage."
                  },
                  {
                        "q": "Why is 5G not only faster radio?",
                        "options": [
                              "The ability to keep network service while changing attachment points.",
                              "Adding boundaries and link-layer information around data.",
                              "Splitting an IP datagram to fit a path MTU; IPv4 routers may fragment when allowed, while IPv6 fragmentation is done only by the source.",
                              "It also includes service flexibility and core-network evolution."
                        ],
                        "answer": 3,
                        "explain": "It also includes service flexibility and core-network evolution."
                  }
            ]
      },
      {
            "title": "6.1 / 6.2 Practice: Security Basics, Cryptography, Authentication, and TLS",
            "description": "30-item practice test for Security Basics, Cryptography, Authentication, and TLS.",
            "questions": [
                  {
                        "q": "What is Confidentiality?",
                        "options": [
                              "The overall switching infrastructure of a data center.",
                              "Identity, mobility, gateways, and Internet connectivity.",
                              "Keeping message contents hidden from unauthorized parties.",
                              "Multiprotocol Label Switching, a forwarding architecture based on short labels assigned to forwarding equivalence classes."
                        ],
                        "answer": 2,
                        "explain": "Keeping message contents hidden from unauthorized parties."
                  },
                  {
                        "q": "What is Authentication?",
                        "options": [
                              "The wireless medium for a transmission.",
                              "Proving an identity or verifying the source of a message.",
                              "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place.",
                              "The software interface between an application process and the transport layer."
                        ],
                        "answer": 1,
                        "explain": "Proving an identity or verifying the source of a message."
                  },
                  {
                        "q": "What is Integrity?",
                        "options": [
                              "Detecting unauthorized changes to data.",
                              "They need many high-capacity paths between servers.",
                              "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol.",
                              "Routing information has stabilized after changes."
                        ],
                        "answer": 0,
                        "explain": "Detecting unauthorized changes to data."
                  },
                  {
                        "q": "What is Availability?",
                        "options": [
                              "It reduces response time and upstream traffic.",
                              "It forwards packets based on labels.",
                              "The host can send frames through the AP.",
                              "Keeping services reachable for legitimate users."
                        ],
                        "answer": 3,
                        "explain": "Keeping services reachable for legitimate users."
                  },
                  {
                        "q": "What is Encryption?",
                        "options": [
                              "Identity, mobility, gateways, and Internet connectivity.",
                              "A recursive or caching service that resolves DNS questions on behalf of clients.",
                              "Transforming readable data into protected ciphertext.",
                              "They reduce overlap and interference when planned well."
                        ],
                        "answer": 2,
                        "explain": "Transforming readable data into protected ciphertext."
                  },
                  {
                        "q": "What is Decryption?",
                        "options": [
                              "Local Area Network, a network covering a limited area such as a room, home, or campus.",
                              "Recovering readable data from ciphertext.",
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity.",
                              "Encapsulating packets inside other packets so traffic can reach a care-of address or virtual path."
                        ],
                        "answer": 1,
                        "explain": "Recovering readable data from ciphertext."
                  },
                  {
                        "q": "What is Symmetric key?",
                        "options": [
                              "A shared secret key used for both encryption and decryption.",
                              "IEEE 802.11 Wi-Fi's collision avoidance medium access method.",
                              "The physical or base IP network that carries overlay traffic.",
                              "A high-speed network connecting large numbers of servers."
                        ],
                        "answer": 0,
                        "explain": "A shared secret key used for both encryption and decryption."
                  },
                  {
                        "q": "What is Public key?",
                        "options": [
                              "Collecting data from many processes so they can share the network.",
                              "Intrusion Detection System that monitors network or host activity and raises alerts on suspicious behavior.",
                              "It scales name resolution across the global Internet.",
                              "A key that can be shared publicly in asymmetric cryptography."
                        ],
                        "answer": 3,
                        "explain": "A key that can be shared publicly in asymmetric cryptography."
                  },
                  {
                        "q": "What is Private key?",
                        "options": [
                              "A label is added to the packet.",
                              "An intra-AS link-state routing protocol.",
                              "A secret key kept by its owner in asymmetric cryptography.",
                              "A private key to sign and a public key to verify."
                        ],
                        "answer": 2,
                        "explain": "A secret key kept by its owner in asymmetric cryptography."
                  },
                  {
                        "q": "What is Hash function?",
                        "options": [
                              "A temporary symmetric key used after secure setup.",
                              "A one-way function producing a fixed-size digest from data.",
                              "They compactly acknowledge a continuous byte stream.",
                              "Mobility Management Entity, a 4G control-plane component."
                        ],
                        "answer": 1,
                        "explain": "A one-way function producing a fixed-size digest from data."
                  },
                  {
                        "q": "What is MAC?",
                        "options": [
                              "Message Authentication Code, used to verify authenticity and integrity with a shared key.",
                              "It needs reliable and ordered delivery.",
                              "Forwarding packets to the mobile node's current location.",
                              "Label Switched Path, the route MPLS packets follow through a network."
                        ],
                        "answer": 0,
                        "explain": "Message Authentication Code, used to verify authenticity and integrity with a shared key."
                  },
                  {
                        "q": "What is Digital signature?",
                        "options": [
                              "The hosts and access networks where users and applications connect.",
                              "It sends arriving data to the correct application process.",
                              "A switch forwarding table mapping learned MAC addresses to ports.",
                              "A public-key mechanism that verifies signer identity and data integrity."
                        ],
                        "answer": 3,
                        "explain": "A public-key mechanism that verifies signer identity and data integrity."
                  },
                  {
                        "q": "What is Certificate?",
                        "options": [
                              "A pipelined protocol that retransmits only specific missing packets.",
                              "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol.",
                              "A digitally signed statement binding an identity or name to a public key.",
                              "Links, costs, or routers can fail or change."
                        ],
                        "answer": 2,
                        "explain": "A digitally signed statement binding an identity or name to a public key."
                  },
                  {
                        "q": "What is Certificate authority?",
                        "options": [
                              "Another name for a host because it sits at an end of communication and creates or receives data.",
                              "A trusted party that signs certificates.",
                              "Packets arrive faster than they can be transmitted.",
                              "The network a roaming user currently attaches to."
                        ],
                        "answer": 1,
                        "explain": "A trusted party that signs certificates."
                  },
                  {
                        "q": "What is Nonce?",
                        "options": [
                              "A fresh random value used to prevent replay.",
                              "The system used by administrators to monitor and control devices.",
                              "Packets waiting because the output link or processing path is busy.",
                              "Keys and parameters for IPsec security associations."
                        ],
                        "answer": 0,
                        "explain": "A fresh random value used to prevent replay."
                  },
                  {
                        "q": "What is Replay attack?",
                        "options": [
                              "The geographic coverage area served by a base station.",
                              "A timer event that can trigger retransmission when an ACK is missing.",
                              "TCP behavior that retransmits a likely missing segment after enough duplicate ACKs, without waiting for the retransmission timer.",
                              "Reusing a valid message later to trick a protocol."
                        ],
                        "answer": 3,
                        "explain": "Reusing a valid message later to trick a protocol."
                  },
                  {
                        "q": "What is Man-in-the-middle?",
                        "options": [
                              "It resolves MAC addresses only within a LAN/broadcast domain.",
                              "A connection-oriented reliable byte-stream protocol with sequencing, acknowledgments, flow control, and congestion control.",
                              "An attacker secretly intercepting and possibly altering communication.",
                              "When packets are dropped because of errors, congestion, or failed paths."
                        ],
                        "answer": 2,
                        "explain": "An attacker secretly intercepting and possibly altering communication."
                  },
                  {
                        "q": "What is TLS?",
                        "options": [
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing.",
                              "Transport Layer Security, a protocol that secures application data with authentication, confidentiality, and integrity.",
                              "Wireless frames are more likely to be lost or corrupted.",
                              "The layer that transfers frames across a single link or hop."
                        ],
                        "answer": 1,
                        "explain": "Transport Layer Security, a protocol that secures application data with authentication, confidentiality, and integrity."
                  },
                  {
                        "q": "What is HTTPS?",
                        "options": [
                              "HTTP carried inside TLS, providing the secure form of web browsing commonly shown as HTTPS.",
                              "A storage area representing intended device configuration.",
                              "The observed running condition of a device, separate from intended configuration.",
                              "Choosing the closest exit point from an AS to hand traffic off quickly."
                        ],
                        "answer": 0,
                        "explain": "HTTP carried inside TLS, providing the secure form of web browsing commonly shown as HTTPS."
                  },
                  {
                        "q": "What is Session key?",
                        "options": [
                              "It organizes streams into manageable transmission units.",
                              "A running program that sends or receives messages through a socket.",
                              "Mobile IP router on the home network that tunnels packets to the mobile node's current care-of address.",
                              "A temporary symmetric key used after secure setup."
                        ],
                        "answer": 3,
                        "explain": "A temporary symmetric key used after secure setup."
                  },
                  {
                        "q": "Why are nonces used?",
                        "options": [
                              "The set of devices that receive a layer-2 broadcast.",
                              "An Internet Service Provider that connects customers and other networks to the Internet.",
                              "To prove freshness and block replay attacks.",
                              "A design that divides OSPF networks into areas for scalability."
                        ],
                        "answer": 2,
                        "explain": "To prove freshness and block replay attacks."
                  },
                  {
                        "q": "Why are certificates needed?",
                        "options": [
                              "Moving an active device connection from one base station to another.",
                              "They bind public keys to identities.",
                              "A packet switch that forwards network-layer datagrams between networks using IP information.",
                              "The network name identifying a Wi-Fi service set."
                        ],
                        "answer": 1,
                        "explain": "They bind public keys to identities."
                  },
                  {
                        "q": "What is HTTPS?",
                        "options": [
                              "HTTP protected by TLS.",
                              "The host can send frames through the AP.",
                              "Wireless devices may not hear collisions while transmitting.",
                              "The communication channel between neighboring nodes."
                        ],
                        "answer": 0,
                        "explain": "HTTP protected by TLS."
                  },
                  {
                        "q": "Why use session keys?",
                        "options": [
                              "Round-trip time between sending data and receiving its acknowledgment.",
                              "The sender is idle while waiting for each ACK.",
                              "Maximum Segment Size, the largest TCP payload placed in one segment.",
                              "Symmetric keys are efficient for bulk data."
                        ],
                        "answer": 3,
                        "explain": "Symmetric keys are efficient for bulk data."
                  },
                  {
                        "q": "What does a hash alone not prove?",
                        "options": [
                              "To reduce routing table size.",
                              "Multiple devices may try to transmit at the same time.",
                              "Who created the message.",
                              "The part of the network that connects end systems to the first router."
                        ],
                        "answer": 2,
                        "explain": "Who created the message."
                  },
                  {
                        "q": "What does a MAC require?",
                        "options": [
                              "Moving data from one node to its immediate neighbor.",
                              "A shared secret key.",
                              "The entire original IP datagram, placed inside a new outer IP packet.",
                              "Round-trip time between sending data and receiving its acknowledgment."
                        ],
                        "answer": 1,
                        "explain": "A shared secret key."
                  },
                  {
                        "q": "What does a digital signature use?",
                        "options": [
                              "A private key to sign and a public key to verify.",
                              "It can provide timely performance and state data.",
                              "Wireless frames are more likely to be lost or corrupted.",
                              "Carrying multiple VLANs between switches."
                        ],
                        "answer": 0,
                        "explain": "A private key to sign and a public key to verify."
                  },
                  {
                        "q": "What is a man-in-the-middle attack?",
                        "options": [
                              "Message Authentication Code, used to verify authenticity and integrity with a shared key.",
                              "Polling asks regularly; traps are sent when events occur.",
                              "A configuration command may fail or produce unexpected state.",
                              "An attacker intercepts communication between parties."
                        ],
                        "answer": 3,
                        "explain": "An attacker intercepts communication between parties."
                  },
                  {
                        "q": "Why is availability a security goal?",
                        "options": [
                              "Intrusion Detection System that monitors network or host activity and raises alerts on suspicious behavior.",
                              "It needs reliable and ordered delivery.",
                              "A service is useless if legitimate users cannot reach it.",
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration."
                        ],
                        "answer": 2,
                        "explain": "A service is useless if legitimate users cannot reach it."
                  },
                  {
                        "q": "What does TLS protect against?",
                        "options": [
                              "It catches more burst and pattern errors.",
                              "Eavesdropping and tampering when configured correctly.",
                              "TCP behavior that reduces the congestion window after duplicate-ACK loss while keeping data flowing.",
                              "It needs a reasonable retransmission timeout."
                        ],
                        "answer": 1,
                        "explain": "Eavesdropping and tampering when configured correctly."
                  }
            ]
      },
      {
            "title": "6.3 Practice: Network Layer Security, IPsec, Firewalls, and IDS",
            "description": "30-item practice test for Network Layer Security, IPsec, Firewalls, and IDS.",
            "questions": [
                  {
                        "q": "What is Network-layer security?",
                        "options": [
                              "Protection applied to IP packets or network paths.",
                              "When packets are dropped because of errors, congestion, or failed paths.",
                              "Each request can be handled without remembering previous requests.",
                              "Sending a frame to all devices in a LAN segment."
                        ],
                        "answer": 0,
                        "explain": "Protection applied to IP packets or network paths."
                  },
                  {
                        "q": "What is IPsec?",
                        "options": [
                              "Dynamic Adaptive Streaming over HTTP, where a client selects segment bitrates based on current network and playback conditions.",
                              "Programmable and centralized network control.",
                              "A logical network built on top of another network.",
                              "A suite of protocols that secures IP datagrams."
                        ],
                        "answer": 3,
                        "explain": "A suite of protocols that secures IP datagrams."
                  },
                  {
                        "q": "What is Security association?",
                        "options": [
                              "An IP companion protocol used for error reporting and diagnostics; ping uses ICMP Echo messages.",
                              "Reporting errors and supporting diagnostics.",
                              "A one-way security relationship defining IPsec parameters and keys.",
                              "Loss of signal strength over distance or through obstacles."
                        ],
                        "answer": 2,
                        "explain": "A one-way security relationship defining IPsec parameters and keys."
                  },
                  {
                        "q": "What is SA database?",
                        "options": [
                              "Carrying multiple VLANs between switches.",
                              "A database storing active security associations.",
                              "Bit errors in the segment.",
                              "It catches more burst and pattern errors."
                        ],
                        "answer": 1,
                        "explain": "A database storing active security associations."
                  },
                  {
                        "q": "What is SPD?",
                        "options": [
                              "Security Policy Database, which says what traffic should be protected or bypassed.",
                              "A parity method that can detect and sometimes locate bit errors using rows and columns.",
                              "Keeping services reachable for legitimate users.",
                              "It resolves MAC addresses only within a LAN/broadcast domain."
                        ],
                        "answer": 0,
                        "explain": "Security Policy Database, which says what traffic should be protected or bypassed."
                  },
                  {
                        "q": "What is IKE?",
                        "options": [
                              "A paid service where one network carries another network's traffic to the Internet.",
                              "IEEE 802.11 Wi-Fi's collision avoidance medium access method.",
                              "Routing performed within one autonomous system.",
                              "Internet Key Exchange, used to negotiate IPsec security associations."
                        ],
                        "answer": 3,
                        "explain": "Internet Key Exchange, used to negotiate IPsec security associations."
                  },
                  {
                        "q": "What is Transport mode?",
                        "options": [
                              "Signal copies arriving by different paths because of reflection.",
                              "The wireless medium for a transmission.",
                              "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place.",
                              "Control information placed after the payload, often for error detection."
                        ],
                        "answer": 2,
                        "explain": "IPsec mode that protects the original packet's upper-layer payload while leaving the original IP header in place."
                  },
                  {
                        "q": "What is Tunnel mode?",
                        "options": [
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity.",
                              "IPsec mode that encapsulates and protects the entire original IP datagram inside a new outer IP datagram.",
                              "The network a roaming user currently attaches to.",
                              "A user interface setting unrelated to network communication."
                        ],
                        "answer": 1,
                        "explain": "IPsec mode that encapsulates and protects the entire original IP datagram inside a new outer IP datagram."
                  },
                  {
                        "q": "What is AH?",
                        "options": [
                              "Authentication Header, providing packet integrity and data origin authentication without encryption.",
                              "The wireless medium for a transmission.",
                              "The point when routers agree on stable routing information.",
                              "An estimate of RTT variation used to set safer timeouts."
                        ],
                        "answer": 0,
                        "explain": "Authentication Header, providing packet integrity and data origin authentication without encryption."
                  },
                  {
                        "q": "What is ESP?",
                        "options": [
                              "An ongoing session while the user moves.",
                              "It reduces outage time after a failure.",
                              "They separate broadcast domains logically.",
                              "Encapsulating Security Payload, commonly used for IPsec confidentiality and optional integrity/authentication."
                        ],
                        "answer": 3,
                        "explain": "Encapsulating Security Payload, commonly used for IPsec confidentiality and optional integrity/authentication."
                  },
                  {
                        "q": "What is VPN?",
                        "options": [
                              "A packet switch that forwards network-layer datagrams between networks using IP information.",
                              "Regularly asking devices for status information.",
                              "A secure virtual private network built across shared infrastructure.",
                              "Information flooded by routers describing their links and costs."
                        ],
                        "answer": 2,
                        "explain": "A secure virtual private network built across shared infrastructure."
                  },
                  {
                        "q": "What is Authentication header?",
                        "options": [
                              "A switch port that carries multiple VLANs, usually by adding IEEE 802.1Q tags.",
                              "The IPsec AH header used for integrity and data origin authentication.",
                              "A lookup table used to choose an outgoing interface; routers usually key it by IP prefix.",
                              "Delivery is attempted but not guaranteed."
                        ],
                        "answer": 1,
                        "explain": "The IPsec AH header used for integrity and data origin authentication."
                  },
                  {
                        "q": "What is Encapsulation?",
                        "options": [
                              "Wrapping one packet inside another packet.",
                              "IDS method that looks for deviations from normal behavior.",
                              "The 3GPP fifth-generation system, built around UE, NG-RAN, and 5G Core with enhanced capacity, latency, and service flexibility.",
                              "It selects the most specific route for a destination."
                        ],
                        "answer": 0,
                        "explain": "Wrapping one packet inside another packet."
                  },
                  {
                        "q": "What is Packet filter?",
                        "options": [
                              "Carrier Sense Multiple Access with Collision Avoidance, used by IEEE 802.11 Wi-Fi.",
                              "The logic that computes or installs forwarding behavior.",
                              "Router component that receives packets and may do lookup.",
                              "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol."
                        ],
                        "answer": 3,
                        "explain": "A firewall function that permits or denies packets using header fields such as addresses, ports, and protocol."
                  },
                  {
                        "q": "What is Stateful firewall?",
                        "options": [
                              "SMTP sends mail, while IMAP retrieves and synchronizes mail.",
                              "Packets arrive faster than they can be transmitted.",
                              "A firewall that tracks connection or flow state instead of judging each packet in isolation.",
                              "BGP-learned routes inside one autonomous system."
                        ],
                        "answer": 2,
                        "explain": "A firewall that tracks connection or flow state instead of judging each packet in isolation."
                  },
                  {
                        "q": "What is ACL?",
                        "options": [
                              "A pipelined protocol that retransmits a lost packet and later packets in the window.",
                              "Access Control List, a list of permit or deny rules.",
                              "Reporting errors and supporting diagnostics.",
                              "Routing between autonomous systems."
                        ],
                        "answer": 1,
                        "explain": "Access Control List, a list of permit or deny rules."
                  },
                  {
                        "q": "What is DMZ?",
                        "options": [
                              "A screened network segment for public-facing services, separated from both untrusted networks and the internal LAN.",
                              "BGP-learned routes inside one autonomous system.",
                              "The carrier network that handles subscriber authentication, mobility/session control, and packet-data connectivity.",
                              "A hardware power mode for reducing electricity use."
                        ],
                        "answer": 0,
                        "explain": "A screened network segment for public-facing services, separated from both untrusted networks and the internal LAN."
                  },
                  {
                        "q": "What is IDS?",
                        "options": [
                              "It identifies a resource and how to access it.",
                              "Forwarding packets to the mobile node's current location.",
                              "A shared medium area where simultaneous transmissions can collide.",
                              "Intrusion Detection System that monitors network or host activity and raises alerts on suspicious behavior."
                        ],
                        "answer": 3,
                        "explain": "Intrusion Detection System that monitors network or host activity and raises alerts on suspicious behavior."
                  },
                  {
                        "q": "What is Signature detection?",
                        "options": [
                              "Delivering received segments to the correct socket or process.",
                              "An estimate of RTT variation used to set safer timeouts.",
                              "IDS method that matches known attack patterns.",
                              "Sending a frame out multiple ports when the destination is unknown or broadcast."
                        ],
                        "answer": 2,
                        "explain": "IDS method that matches known attack patterns."
                  },
                  {
                        "q": "What is Anomaly detection?",
                        "options": [
                              "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF.",
                              "IDS method that looks for deviations from normal behavior.",
                              "A running program that sends or receives messages through a socket.",
                              "A suite of protocols that secures IP datagrams."
                        ],
                        "answer": 1,
                        "explain": "IDS method that looks for deviations from normal behavior."
                  },
                  {
                        "q": "Why is ESP more common than AH for privacy?",
                        "options": [
                              "ESP can encrypt payloads and can also provide integrity/authentication.",
                              "Routing between autonomous systems.",
                              "A data modeling language used to define configuration and state data exposed by protocols such as NETCONF.",
                              "Software-Defined Networking, where control logic is separated or abstracted from packet forwarding devices."
                        ],
                        "answer": 0,
                        "explain": "ESP can encrypt payloads and can also provide integrity/authentication."
                  },
                  {
                        "q": "What does tunnel mode protect?",
                        "options": [
                              "Remote Procedure Call, a structured request used by protocols such as NETCONF.",
                              "The Mobile IP component that forwards traffic to the mobile node.",
                              "Transforming readable data into protected ciphertext.",
                              "The entire original IP datagram, placed inside a new outer IP packet."
                        ],
                        "answer": 3,
                        "explain": "The entire original IP datagram, placed inside a new outer IP packet."
                  },
                  {
                        "q": "What does transport mode protect?",
                        "options": [
                              "Keeping services reachable for legitimate users.",
                              "Encapsulating data into protocol data units; at the link layer, this usually means placing a network-layer packet into a frame.",
                              "The original packet's upper-layer payload; the original IP header remains visible.",
                              "A management protocol where managers query or set MIB objects on agents and receive notifications."
                        ],
                        "answer": 2,
                        "explain": "The original packet's upper-layer payload; the original IP header remains visible."
                  },
                  {
                        "q": "What does IKE negotiate?",
                        "options": [
                              "A secure RPC-based protocol for retrieving and editing configuration datastores on network devices.",
                              "Keys and parameters for IPsec security associations.",
                              "Mobile IP router in a visited network that can provide a care-of address and relay registration.",
                              "A one-way function producing a fixed-size digest from data."
                        ],
                        "answer": 1,
                        "explain": "Keys and parameters for IPsec security associations."
                  },
                  {
                        "q": "Why are SAs one-way?",
                        "options": [
                              "Each direction can have separate keys and parameters.",
                              "To detect corrupted frames.",
                              "A short, locally significant identifier used by MPLS routers to choose forwarding treatment for a forwarding equivalence class.",
                              "Sending and receiving at the same time."
                        ],
                        "answer": 0,
                        "explain": "Each direction can have separate keys and parameters."
                  },
                  {
                        "q": "What does a packet filter inspect?",
                        "options": [
                              "Ethernet Frame Check Sequence field carrying a CRC for error detection.",
                              "A logical network built on top of another network.",
                              "An acknowledgment that confirms receipt of all bytes or packets up to a stated point.",
                              "Header fields such as addresses, ports, and protocol."
                        ],
                        "answer": 3,
                        "explain": "Header fields such as addresses, ports, and protocol."
                  },
                  {
                        "q": "How is a stateful firewall different?",
                        "options": [
                              "Symmetric keys are efficient for bulk data.",
                              "To relieve congestion in the network.",
                              "It tracks connection state, not only individual packets.",
                              "Streaming or exporting operational data for monitoring."
                        ],
                        "answer": 2,
                        "explain": "It tracks connection state, not only individual packets."
                  },
                  {
                        "q": "What is a DMZ used for?",
                        "options": [
                              "Propagation delay",
                              "Separating public services from internal networks.",
                              "A 4G EPC gateway connecting user traffic to external packet data networks and anchoring IP connectivity.",
                              "TCP phase where the congestion window grows roughly linearly to probe for more capacity."
                        ],
                        "answer": 1,
                        "explain": "Separating public services from internal networks."
                  },
                  {
                        "q": "What does signature IDS detect?",
                        "options": [
                              "Known attack patterns.",
                              "A shortest-path algorithm used in link-state routing.",
                              "It also includes service flexibility and core-network evolution.",
                              "It catches more burst and pattern errors."
                        ],
                        "answer": 0,
                        "explain": "Known attack patterns."
                  },
                  {
                        "q": "What does anomaly IDS detect?",
                        "options": [
                              "Shortest paths from one source to all destinations.",
                              "IEEE 802.11 Wi-Fi's collision avoidance medium access method.",
                              "An operation that reads management information from a device.",
                              "Traffic or behavior that deviates from normal patterns."
                        ],
                        "answer": 3,
                        "explain": "Traffic or behavior that deviates from normal patterns."
                  }
            ]
      }
];

    const pathSteps = [
      ["Application creates a message", "The browser, DNS client, email app, or video app creates the data that needs to cross the network.", [0], [1]],
      ["Transport adds ports", "TCP or UDP prepares the message for process-to-process delivery using source and destination ports.", [1], [1]],
      ["Network adds IP routing", "IP places the data in a datagram so routers can move it across networks.", [1, 2], [1, 2]],
      ["Link layer sends one hop", "Ethernet or Wi-Fi wraps the datagram in a frame and moves it across the next local link.", [2], [2]],
      ["Server receives and unwraps", "The receiving host processes headers in reverse order and gives the message to the correct application.", [3], [3]]
    ];

    const studySteps = [
      ["Layer stack", "Memorize what application, transport, network, data link, and physical layers each own."],
      ["One web request", "Trace browser to DNS to TCP to IP to link to server and back."],
      ["Compare pairs", "Focus on TCP vs UDP, IP vs MAC, forwarding vs routing, TLS vs IPsec."],
      ["Scenario practice", "For each problem, ask which layer has enough information to solve it."]
    ];

const reviewerData = { topics, glossary, flashcards, practiceTests, pathSteps, studySteps };

if (typeof globalThis !== 'undefined') {
  globalThis.reviewerData = reviewerData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = reviewerData;
}
