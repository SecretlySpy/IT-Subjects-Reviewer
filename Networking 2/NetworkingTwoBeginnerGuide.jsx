import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Network, Layers, Globe2, Shield, Wifi, Server, Router, Lock, Cable, RadioTower, Map, KeyRound, Activity, ArrowRight, BookOpen, Cpu, Boxes, MonitorCog, Home, Menu, X } from "lucide-react";

const topics = [
  {
    id: "intro",
    unit: "1.1",
    icon: Globe2,
<<<<<<< HEAD
    title: "Computer Networks and the Internet",
    subtitle: "Devices, links, switches, protocols, packet switching, delay, loss, throughput, and layering.",
    color: "from-sky-500 to-cyan-400",
    beginner: "The Internet is a network of networks that moves small chunks of data called packets.",
=======
    title: "Computer Networks & the Internet",
    subtitle: "The big picture: devices, links, switches, protocols, delay, throughput, and layers.",
    color: "from-sky-500 to-cyan-400",
    beginner: "The Internet is a giant delivery system for digital messages.",
>>>>>>> parent of 8dd6f2e (Revamp NetworkingTwoBeginnerGuide content)
    pages: "Section 1",
  },
  {
    id: "application",
    unit: "1.2",
    icon: Server,
    title: "Application Layer",
<<<<<<< HEAD
    subtitle: "HTTP, DNS, email, sockets, P2P, video streaming, CDNs, and application architectures.",
    color: "from-pink-500 to-rose-400",
    beginner: "This is where user-facing programs create messages and use the network.",
=======
    subtitle: "How apps like the Web, email, DNS, video streaming, and P2P communicate.",
    color: "from-violet-500 to-fuchsia-400",
    beginner: "This is where user-facing apps create and exchange messages.",
>>>>>>> parent of 8dd6f2e (Revamp NetworkingTwoBeginnerGuide content)
    pages: "Section 2",
  },
  {
    id: "transport",
    unit: "2.1",
    icon: Boxes,
<<<<<<< HEAD
    title: "Transport Layer Basics",
    subtitle: "Transport services, TCP, UDP, ports, multiplexing, demultiplexing, flow control, and congestion control.",
    color: "from-emerald-500 to-teal-400",
    beginner: "This layer delivers data between applications running on different hosts.",
    pages: "Section 3",
  },
  {
    id: "rdt-tcp",
    unit: "2.1+",
    icon: Boxes,
    title: "Reliable Data Transfer and TCP Control",
    subtitle: "rdt protocols, sliding windows, Go-Back-N, Selective Repeat, TCP timers, and congestion control details.",
    color: "from-emerald-500 to-teal-400",
    beginner: "TCP uses numbering, acknowledgments, timers, windows, and rate control to make unreliable networks feel reliable.",
    pages: "Section 4",
  },
  {
    id: "network-core",
    unit: "2.2",
    icon: Router,
    title: "Network Layer and Router Architecture",
    subtitle: "Datagrams, forwarding, routing, router input/output ports, switching fabric, buffers, and scheduling.",
    color: "from-orange-500 to-amber-400",
    beginner: "The network layer moves packets from a source host to a destination host through routers.",
    pages: "Section 5",
  },
  {
    id: "ip-addressing",
    unit: "2.2+",
    icon: Router,
    title: "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    subtitle: "IPv4 datagrams, subnets, CIDR, address assignment, NAT behavior, IPv6 format, and diagnostics.",
    color: "from-orange-500 to-amber-400",
    beginner: "IP addressing gives devices network locations so routers can deliver packets.",
    pages: "Section 6",
  },
  {
    id: "routing",
    unit: "3.1 / 3.2",
    icon: Map,
    title: "Routing Algorithms, OSPF, BGP, and SDN",
    subtitle: "Link-state, distance-vector, autonomous systems, OSPF, BGP policy, hot potato routing, and SDN controllers.",
    color: "from-orange-500 to-amber-400",
    beginner: "Routing is how networks choose paths for packets across many routers and organizations.",
    pages: "Section 7",
  },
  {
    id: "management",
    unit: "3.3",
    icon: MonitorCog,
    title: "Network Management, SNMP, NETCONF, and YANG",
    subtitle: "Managing devices, monitoring performance, MIBs, SNMP messages, traps, NETCONF operations, and YANG models.",
    color: "from-sky-500 to-cyan-400",
    beginner: "Network management is how administrators monitor and configure network devices.",
    pages: "Section 8",
  },
  {
    id: "link-services",
    unit: "Data Link / 4.1",
    icon: Cable,
    title: "Data Link Services and Error Detection",
    subtitle: "Frames, one-hop delivery, packetizing, parity, checksums, CRC, flow control, and multiple access basics.",
    color: "from-sky-500 to-cyan-400",
    beginner: "The data link layer moves frames across one local hop and checks for errors.",
    pages: "Section 9",
  },
  {
    id: "lan",
    unit: "4.2",
    icon: Cable,
    title: "LANs, Ethernet, ARP, Switches, and VLANs",
    subtitle: "MAC addressing, ARP, Ethernet frames, CSMA/CD, switches, learning, spanning tree, VLANs, and trunks.",
    color: "from-sky-500 to-cyan-400",
    beginner: "LAN technologies connect nearby devices and deliver frames using MAC addresses.",
    pages: "Section 10",
  },
  {
    id: "virtualization",
    unit: "4.3",
    icon: Layers,
    title: "Link Virtualization, MPLS, and Data Center Networking",
    subtitle: "MPLS labels, label switching routers, traffic engineering, VPN-like paths, and data-center network design.",
    color: "from-pink-500 to-rose-400",
    beginner: "Virtualization lets networks create logical paths or networks over shared physical infrastructure.",
    pages: "Section 11",
  },
  {
    id: "wireless",
    unit: "5.1",
    icon: Wifi,
    title: "Wireless Networks and WiFi",
    subtitle: "Wireless hosts, access points, link characteristics, 802.11, CSMA/CA, hidden terminals, RTS/CTS, and association.",
    color: "from-emerald-500 to-teal-400",
    beginner: "Wireless networks use radio links, so devices must handle interference, fading, and shared-air access.",
    pages: "Section 12",
  },
  {
    id: "mobile",
    unit: "5.2",
    icon: RadioTower,
    title: "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    subtitle: "Cellular architecture, device identity, base stations, EPC/5G core ideas, mobility management, handoff, roaming, and Mobile IP.",
    color: "from-emerald-500 to-teal-400",
    beginner: "Mobile networks keep devices connected while they move across coverage areas.",
    pages: "Section 13",
  },
  {
    id: "security-foundations",
    unit: "6.1 / 6.2",
    icon: Shield,
    title: "Security Foundations, Cryptography, and Authentication",
    subtitle: "Security goals, attackers, symmetric/public-key cryptography, hashes, MACs, digital signatures, certificates, and authentication protocols.",
    color: "from-pink-500 to-rose-400",
    beginner: "Security makes communication private, verified, unchanged, and available.",
    pages: "Section 14",
  },
  {
    id: "tls-firewall-ipsec",
    unit: "6.2 / 6.3",
    icon: Lock,
    title: "TLS, Firewalls, IDS, and IPsec",
    subtitle: "TLS sessions, certificates, HTTPS, firewall filtering, intrusion detection, IPsec AH/ESP, transport mode, tunnel mode, and IKE.",
    color: "from-pink-500 to-rose-400",
    beginner: "Security tools protect network traffic at different layers and block suspicious communication.",
    pages: "Section 15",
  }
];

const glossary = [
  [
    "Internet",
    "A global network of networks that interconnects hosts using protocols."
  ],
  [
    "Host",
    "An end device such as a laptop, phone, server, camera, or IoT device."
  ],
  [
    "End system",
    "Another name for a host because it sits at the edge of the network."
  ],
  [
    "Packet",
    "A small unit of data plus headers sent across a packet-switched network."
  ],
  [
    "Packet switch",
    "A router or link-layer switch that forwards packets toward a destination."
  ],
  [
    "Router",
    "A network-layer packet switch that forwards packets between networks."
  ],
  [
    "Link-layer switch",
    "A local packet switch that forwards frames inside a LAN."
  ],
  [
    "Communication link",
    "A physical or wireless path that carries bits between network devices."
  ],
  [
    "Transmission rate",
    "The speed at which bits are pushed onto a link."
  ],
  [
    "Bandwidth",
    "The maximum possible transmission rate of a link."
  ],
  [
    "Throughput",
    "The actual useful rate achieved by an application transfer."
  ],
  [
    "Protocol",
    "A rule set defining message formats, ordering, and actions."
  ],
  [
    "Access network",
    "The network that connects an end system to the first router."
  ],
  [
    "Network core",
    "The mesh of routers and links that moves packets across the Internet."
  ],
  [
    "Packet switching",
    "A method where many users share links by sending packets when needed."
  ],
  [
    "Store-and-forward",
    "A switching behavior where a router receives a whole packet before forwarding."
  ],
  [
    "Queueing delay",
    "Waiting time when packets sit in a router buffer."
  ],
  [
    "Packet loss",
    "A dropped packet, often caused by congestion or buffer overflow."
  ],
  [
    "Propagation delay",
    "Time for a signal to travel across a physical medium."
  ],
  [
    "Transmission delay",
    "Time needed to push all packet bits onto a link."
  ],
  [
    "Processing delay",
    "Time a router spends checking headers and choosing an output link."
  ],
  [
    "End-to-end delay",
    "Total time for data to travel from source to destination."
  ],
  [
    "Circuit switching",
    "A communication method that reserves resources for one session."
  ],
  [
    "FDM",
    "Frequency Division Multiplexing, where users get separate frequency bands."
  ],
  [
    "TDM",
    "Time Division Multiplexing, where users get recurring time slots."
  ],
  [
    "ISP",
    "Internet Service Provider, a network that gives Internet connectivity."
  ],
  [
    "RFC",
    "Request for Comments, a document series used for Internet standards."
  ],
  [
    "IETF",
    "Internet Engineering Task Force, an organization that develops Internet standards."
  ],
  [
    "Layering",
    "Dividing networking into layers with separate responsibilities."
  ],
  [
    "Encapsulation",
    "Wrapping data with headers and trailers as it moves down the protocol stack."
  ],
  [
    "Application layer",
    "The layer where network applications and their protocols operate."
  ],
  [
    "Process",
    "A running program that sends or receives network messages."
  ],
  [
    "Client",
    "A process that initiates communication or requests a service."
  ],
  [
    "Server",
    "A process that waits for and responds to client requests."
  ],
  [
    "Client-server architecture",
    "An app design with always-on servers serving many clients."
  ],
  [
    "Peer-to-peer architecture",
    "An app design where end systems communicate directly as peers."
  ],
  [
    "Socket",
    "A software interface between an application process and transport service."
  ],
  [
    "IP address",
    "A network-layer address used to identify a host or interface."
  ],
  [
    "Port number",
    "A transport-layer number used to identify a receiving process."
  ],
  [
    "Application protocol",
    "Rules that define application message types, syntax, semantics, and timing."
  ],
  [
    "HTTP",
    "The Web protocol used for browser requests and server responses."
  ],
  [
    "HTTP request",
    "A client message asking a server for a web object or action."
  ],
  [
    "HTTP response",
    "A server message returning status information and content."
  ],
  [
    "Persistent HTTP",
    "HTTP behavior that reuses a TCP connection for multiple objects."
  ],
  [
    "Non-persistent HTTP",
    "HTTP behavior that opens a separate TCP connection for each object."
  ],
  [
    "Cookie",
    "A small identifier that lets websites maintain state across requests."
  ],
  [
    "Web cache",
    "A proxy that stores copies of web objects to reduce delay and traffic."
  ],
  [
    "DNS",
    "The distributed system that maps domain names to IP addresses."
  ],
  [
    "DNS resolver",
    "A client-side DNS component that asks DNS servers for name mappings."
  ],
  [
    "Root DNS server",
    "A top-level starting point in the DNS lookup hierarchy."
  ],
  [
    "TLD server",
    "A DNS server responsible for top-level domains such as .com or .org."
  ],
  [
    "Authoritative DNS server",
    "The DNS server with official records for a domain."
  ],
  [
    "DNS cache",
    "Stored DNS answers reused to avoid repeated lookups."
  ],
  [
    "SMTP",
    "The protocol used to transfer email between mail servers."
  ],
  [
    "IMAP",
    "A protocol for retrieving and synchronizing email from a mail server."
  ],
  [
    "POP3",
    "A simple email retrieval protocol."
  ],
  [
    "P2P scalability",
    "The ability of peer systems to grow because peers contribute resources."
  ],
  [
    "BitTorrent",
    "A P2P protocol where peers exchange pieces of a file."
  ],
  [
    "CDN",
    "Content Delivery Network, a set of distributed servers near users."
  ],
  [
    "Adaptive streaming",
    "A video technique that changes quality based on available bandwidth."
  ],
  [
    "Transport layer",
    "The layer that provides logical communication between application processes."
  ],
  [
    "Segment",
    "A transport-layer data unit containing application data and transport headers."
  ],
  [
    "Multiplexing",
    "Combining data from many sockets for transmission through the network."
  ],
  [
    "Demultiplexing",
    "Delivering received segments to the correct socket or process."
  ],
  [
    "Source port",
    "The port number identifying the sending process."
  ],
  [
    "Destination port",
    "The port number identifying the receiving process."
  ],
  [
    "UDP",
    "A connectionless transport protocol with low overhead and best-effort delivery."
  ],
  [
    "UDP checksum",
    "A field used to detect errors in UDP segments."
  ],
  [
    "TCP",
    "A connection-oriented transport protocol with reliable ordered delivery."
  ],
  [
    "TCP connection",
    "A logical communication state between two TCP endpoints."
  ],
  [
    "Three-way handshake",
    "TCP setup using SYN, SYN-ACK, and ACK messages."
  ],
  [
    "Reliable data transfer",
    "A service that delivers data correctly and in order despite loss or errors."
  ],
  [
    "ACK",
    "Acknowledgment, a message confirming data was received."
  ],
  [
    "NAK",
    "Negative acknowledgment, a message indicating data was not received correctly."
  ],
  [
    "Sequence number",
    "A number used to identify byte or packet order."
  ],
  [
    "Timeout",
    "A timer expiration that can trigger retransmission."
  ],
  [
    "Retransmission",
    "Sending data again after suspected loss or corruption."
  ],
  [
    "Flow control",
    "Preventing a sender from overwhelming the receiver."
  ],
  [
    "Receive window",
    "TCP field indicating how much data the receiver can accept."
  ],
  [
    "Congestion control",
    "Adjusting sending rate to avoid overwhelming the network."
  ],
  [
    "Congestion window",
    "TCP sender-side limit based on perceived network congestion."
  ],
  [
    "MSS",
    "Maximum Segment Size, the largest TCP payload in one segment."
  ],
  [
    "RTT",
    "Round-trip time, the time for data to go out and an acknowledgment to return."
  ],
  [
    "Pipeline",
    "Sending multiple packets before waiting for acknowledgments."
  ],
  [
    "Stop-and-wait",
    "A protocol that sends one packet and waits for its acknowledgment."
  ],
  [
    "Connectionless service",
    "A service that sends messages without prior setup."
  ],
  [
    "Connection-oriented service",
    "A service that establishes state before data transfer."
  ],
  [
    "Best-effort delivery",
    "Delivery with no guarantee of reliability, order, or timing."
  ],
  [
    "Transport checksum",
    "An error-detection field in transport headers."
  ],
  [
    "Socket pair",
    "The combination of source/destination IP addresses and ports that identifies a conversation."
  ],
  [
    "rdt",
    "Reliable data transfer, a model for correct delivery over unreliable channels."
  ],
  [
    "Checksum",
    "A value used to detect bit errors in data."
  ],
  [
    "Corruption",
    "A condition where bits are changed during transmission."
  ],
  [
    "Duplicate packet",
    "A repeated packet caused by retransmission or delayed delivery."
  ],
  [
    "Stop-and-wait rdt",
    "A simple reliable protocol with one outstanding packet."
  ],
  [
    "Pipelined rdt",
    "A reliable protocol allowing multiple outstanding packets."
  ],
  [
    "Sliding window",
    "A moving range of packets or bytes allowed to be sent."
  ],
  [
    "Sender window",
    "The range of data the sender may transmit without more ACKs."
  ],
  [
    "Receiver window",
    "The range of data the receiver is prepared to accept."
  ],
  [
    "Go-Back-N",
    "A sliding-window protocol that retransmits a lost packet and all following packets."
  ],
  [
    "Cumulative ACK",
    "An ACK that confirms receipt of all data up to a point."
  ],
  [
    "Selective Repeat",
    "A sliding-window protocol that individually acknowledges and retransmits packets."
  ],
  [
    "Individual ACK",
    "An ACK for a specific packet rather than all earlier data."
  ],
  [
    "TCP byte stream",
    "TCP treats data as an ordered stream of bytes."
  ],
  [
    "TCP sequence number",
    "The byte-stream number of the first byte in a TCP segment."
  ],
  [
    "TCP ACK number",
    "The next byte number the receiver expects."
  ],
  [
    "Estimated RTT",
    "TCP's smoothed estimate of round-trip time."
  ],
  [
    "DevRTT",
    "TCP's estimate of round-trip time variation."
  ],
  [
    "Timeout interval",
    "TCP's retransmission timer based on estimated RTT and variation."
  ],
  [
    "Fast retransmit",
    "TCP retransmission triggered by duplicate ACKs before timeout."
  ],
  [
    "Duplicate ACK",
    "An ACK repeating the same expected byte number."
  ],
  [
    "Slow start",
    "TCP phase where congestion window grows rapidly from a low value."
  ],
  [
    "Congestion avoidance",
    "TCP phase where the congestion window grows more slowly."
  ],
  [
    "AIMD",
    "Additive Increase Multiplicative Decrease, a TCP congestion-control pattern."
  ],
  [
    "ssthresh",
    "Slow-start threshold separating slow start from congestion avoidance."
  ],
  [
    "TCP Reno",
    "A classic TCP congestion-control variant using AIMD and fast recovery."
  ],
  [
    "TCP fairness",
    "The tendency for competing TCP flows to share bandwidth."
  ],
  [
    "Flow-control limit",
    "A limit based on receiver capacity."
  ],
  [
    "Congestion-control limit",
    "A limit based on network capacity."
  ],
  [
    "Effective send window",
    "The smaller of the receive window and congestion window."
  ],
  [
    "Network layer",
    "The layer that delivers packets from sending host to receiving host."
  ],
  [
    "Datagram",
    "A network-layer packet, especially in IP networks."
  ],
  [
    "Forwarding",
    "Moving a packet from an input link to the correct output link."
  ],
  [
    "Routing",
    "Computing the path packets should take through the network."
  ],
  [
    "Forwarding table",
    "A table used by routers to choose output links."
  ],
  [
    "Routing algorithm",
    "A method for computing paths through a network."
  ],
  [
    "Data plane",
    "The per-router function that forwards packets."
  ],
  [
    "Control plane",
    "The network-wide logic that determines routing behavior."
  ],
  [
    "Router input port",
    "Router component that receives packets and performs lookup."
  ],
  [
    "Switching fabric",
    "Router component that transfers packets from input to output ports."
  ],
  [
    "Router output port",
    "Router component that buffers and transmits packets onto links."
  ],
  [
    "Longest-prefix matching",
    "Choosing the forwarding-table entry with the most specific matching prefix."
  ],
  [
    "Queueing",
    "Waiting in a buffer when traffic arrives faster than it can leave."
  ],
  [
    "Head-of-line blocking",
    "Delay caused when a packet at the front blocks packets behind it."
  ],
  [
    "Packet scheduler",
    "A mechanism that chooses which queued packet to send next."
  ],
  [
    "FIFO scheduling",
    "First-In First-Out packet scheduling."
  ],
  [
    "Priority scheduling",
    "Scheduling that serves higher-priority traffic first."
  ],
  [
    "Round-robin scheduling",
    "Scheduling that cycles through queues."
  ],
  [
    "WFQ",
    "Weighted Fair Queueing, scheduling that gives configured shares to classes."
  ],
  [
    "Buffer overflow",
    "A condition where a full queue causes arriving packets to be dropped."
  ],
  [
    "Fragmentation",
    "Splitting a large datagram into smaller pieces."
  ],
  [
    "MTU",
    "Maximum Transmission Unit, the largest frame payload allowed on a link."
  ],
  [
    "IP service model",
    "Best-effort datagram delivery with no guaranteed bandwidth or timing."
  ],
  [
    "Best-effort network",
    "A network that tries to deliver but gives no strict guarantees."
  ],
  [
    "Virtual circuit network",
    "A network where path state is established before data transfer."
  ],
  [
    "Datagram network",
    "A network where each packet carries its destination address and is routed independently."
  ],
  [
    "SDN control plane",
    "A control model where a controller programs forwarding behavior."
  ],
  [
    "Flow table",
    "An SDN table containing match-action rules."
  ],
  [
    "Match-action rule",
    "A rule that matches packet fields and specifies an action."
  ],
  [
    "Router buffer",
    "Memory used to hold packets during congestion or scheduling."
  ],
  [
    "IPv4",
    "The 32-bit version of the Internet Protocol."
  ],
  [
    "IPv6",
    "The 128-bit version of the Internet Protocol."
  ],
  [
    "Interface",
    "A host or router connection point to a network."
  ],
  [
    "Subnet",
    "A group of interfaces sharing the same network prefix."
  ],
  [
    "Network prefix",
    "The leftmost bits identifying a subnet or route."
  ],
  [
    "Host portion",
    "The address bits identifying an interface within a subnet."
  ],
  [
    "CIDR",
    "Classless Inter-Domain Routing using slash notation prefixes."
  ],
  [
    "Slash notation",
    "Address notation such as 10.0.0.0/24 showing prefix length."
  ],
  [
    "Subnet mask",
    "A mask indicating which address bits belong to the network prefix."
  ],
  [
    "Default gateway",
    "The router a host uses to reach outside its subnet."
  ],
  [
    "DHCP",
    "Dynamic Host Configuration Protocol for automatic host configuration."
  ],
  [
    "DHCP discover",
    "A broadcast message used by a client looking for a DHCP server."
  ],
  [
    "DHCP offer",
    "A server response offering address configuration."
  ],
  [
    "DHCP request",
    "A client message requesting offered configuration."
  ],
  [
    "DHCP ACK",
    "A server confirmation of assigned configuration."
  ],
  [
    "NAT",
    "Network Address Translation, rewriting private/public address and port mappings."
  ],
  [
    "Private address",
    "An address reserved for internal networks and not globally routed."
  ],
  [
    "Public address",
    "A globally routable Internet address."
  ],
  [
    "NAT table",
    "A table mapping internal address-port pairs to external address-port pairs."
  ],
  [
    "ICMP",
    "Internet Control Message Protocol for errors and diagnostics."
  ],
  [
    "Ping",
    "A reachability test using ICMP echo messages."
  ],
  [
    "Traceroute",
    "A diagnostic tool that discovers router hops using TTL behavior."
  ],
  [
    "TTL",
    "Time To Live, a field decreased by routers to prevent endless circulation."
  ],
  [
    "IPv4 header checksum",
    "A field used to detect errors in an IPv4 header."
  ],
  [
    "IPv6 simplified header",
    "IPv6 design with fewer fixed header fields than IPv4."
  ],
  [
    "IPv6 flow label",
    "An IPv6 field that can identify flows needing special handling."
  ],
  [
    "Tunneling",
    "Carrying one protocol inside another during transitions or VPN use."
  ],
  [
    "Dual stack",
    "Running IPv4 and IPv6 at the same time."
  ],
  [
    "Address aggregation",
    "Combining prefixes to reduce routing-table size."
  ],
  [
    "Routing graph",
    "A model of routers as nodes and links as edges."
  ],
  [
    "Link cost",
    "A number representing preference or expense of using a link."
  ],
  [
    "Least-cost path",
    "The path with the lowest total link cost."
  ],
  [
    "Link-state routing",
    "Routing where each router knows network topology and link costs."
  ],
  [
    "Dijkstra algorithm",
    "A link-state algorithm for computing shortest paths."
  ],
  [
    "Link-state advertisement",
    "Information a router floods about its links and costs."
  ],
  [
    "Distance-vector routing",
    "Routing where routers exchange distance estimates with neighbors."
  ],
  [
    "Bellman-Ford equation",
    "The recurrence used in distance-vector path computation."
  ],
  [
    "Count-to-infinity problem",
    "A distance-vector problem where bad news spreads slowly."
  ],
  [
    "Poisoned reverse",
    "A technique to reduce certain routing loops."
  ],
  [
    "Routing loop",
    "A condition where packets circulate among routers."
  ],
  [
    "Autonomous system",
    "A network or group of networks under one administrative control."
  ],
  [
    "Intra-AS routing",
    "Routing inside one autonomous system."
  ],
  [
    "Inter-AS routing",
    "Routing between autonomous systems."
  ],
  [
    "OSPF",
    "Open Shortest Path First, a link-state intra-AS routing protocol."
  ],
  [
    "OSPF area",
    "A subdivision used to scale OSPF routing."
  ],
  [
    "Border router",
    "A router connecting an AS to other ASes."
  ],
  [
    "Gateway router",
    "A router that connects to another AS or external network."
  ],
  [
    "BGP",
    "Border Gateway Protocol, the Internet inter-AS routing protocol."
  ],
  [
    "eBGP",
    "BGP session between routers in different autonomous systems."
  ],
  [
    "iBGP",
    "BGP session between routers inside the same autonomous system."
  ],
  [
    "BGP route advertisement",
    "A message announcing reachability to a network prefix."
  ],
  [
    "AS-PATH",
    "A BGP attribute listing autonomous systems on a path."
  ],
  [
    "NEXT-HOP",
    "A BGP attribute identifying the next router to reach a prefix."
  ],
  [
    "BGP policy",
    "Rules controlling which routes are accepted, preferred, or advertised."
  ],
  [
    "Hot potato routing",
    "Choosing the closest exit point from an AS."
  ],
  [
    "SDN",
    "Software-Defined Networking, separating control from forwarding."
  ],
  [
    "SDN controller",
    "Software that computes and installs forwarding rules."
  ],
  [
    "OpenFlow",
    "A protocol for controlling flow-table entries in SDN switches."
  ],
  [
    "Control application",
    "SDN software that implements routing, access control, or traffic engineering."
  ],
  [
    "Network management",
    "Monitoring, configuring, controlling, and troubleshooting network systems."
  ],
  [
    "Managing server",
    "A system used by administrators to control managed devices."
  ],
  [
    "Managed device",
    "A router, switch, server, or other network element being monitored."
  ],
  [
    "Management agent",
    "Software on a managed device that exposes data and actions."
  ],
  [
    "MIB",
    "Management Information Base, a structured collection of managed variables."
  ],
  [
    "OID",
    "Object Identifier, a hierarchical name for a managed object."
  ],
  [
    "SNMP",
    "Simple Network Management Protocol for device monitoring and control."
  ],
  [
    "SNMP manager",
    "The system that sends SNMP requests and receives notifications."
  ],
  [
    "SNMP agent",
    "The device-side software responding to SNMP operations."
  ],
  [
    "SNMP Get",
    "A request to read a managed object value."
  ],
  [
    "SNMP Set",
    "A request to change a managed object value."
  ],
  [
    "SNMP Response",
    "The answer returned by an SNMP agent."
  ],
  [
    "SNMP Trap",
    "An unsolicited alert sent by an agent to a manager."
  ],
  [
    "Polling",
    "Regularly asking devices for state or counters."
  ],
  [
    "Event notification",
    "A device-generated alert about a significant condition."
  ],
  [
    "Fault management",
    "Detecting, isolating, and correcting network problems."
  ],
  [
    "Configuration management",
    "Maintaining intended device settings."
  ],
  [
    "Performance management",
    "Measuring throughput, errors, utilization, and delay."
  ],
  [
    "Security management",
    "Controlling access and protecting management systems."
  ],
  [
    "Accounting management",
    "Tracking resource use for billing or analysis."
  ],
  [
    "NETCONF",
    "A protocol for installing, manipulating, and deleting device configuration."
  ],
  [
    "RPC",
    "Remote Procedure Call, a request-response method used by NETCONF."
  ],
  [
    "Datastore",
    "A NETCONF configuration storage area such as running or candidate."
  ],
  [
    "Running configuration",
    "The active configuration currently used by a device."
  ],
  [
    "Candidate configuration",
    "A proposed configuration that can be edited before commit."
  ],
  [
    "Commit",
    "A NETCONF operation that applies candidate configuration."
  ],
  [
    "YANG",
    "A modeling language for configuration and operational data."
  ],
  [
    "YANG module",
    "A reusable data model defining network configuration structure."
  ],
  [
    "Telemetry",
    "Streaming or reporting operational data from network devices."
  ],
  [
    "Intent-based management",
    "Managing networks by desired outcomes rather than only low-level commands."
  ],
  [
    "Data link layer",
    "The layer responsible for transferring frames across one link."
  ],
  [
    "Node",
    "A host, router, switch, or access point connected to a link."
  ],
  [
    "Link",
    "A communication channel between adjacent nodes."
  ],
  [
    "Frame",
    "A data link layer unit containing header, payload, and trailer."
  ],
  [
    "Framing",
    "Encapsulating a network-layer datagram inside a link-layer frame."
  ],
  [
    "MAC address",
    "A local link-layer address assigned to a network interface."
  ],
  [
    "Hop-to-hop delivery",
    "Delivery from one node to the next adjacent node."
  ],
  [
    "Packetizing",
    "Dividing and wrapping data for transmission as packets or frames."
  ],
  [
    "Frame header",
    "Control information placed before the payload."
  ],
  [
    "Frame trailer",
    "Control information placed after the payload, often for error detection."
  ],
  [
    "Error detection",
    "Recognizing that transmitted bits were corrupted."
  ],
  [
    "Error correction",
    "Recovering original data without retransmission."
  ],
  [
    "Parity bit",
    "An extra bit used to make the number of ones even or odd."
  ],
  [
    "Two-dimensional parity",
    "Parity arranged in rows and columns for stronger detection."
  ],
  [
    "Internet checksum",
    "A checksum method used by some Internet protocols."
  ],
  [
    "CRC",
    "Cyclic Redundancy Check, a strong polynomial-based error detector."
  ],
  [
    "Generator polynomial",
    "The divisor pattern used in CRC calculation."
  ],
  [
    "Burst error",
    "A sequence of nearby corrupted bits."
  ],
  [
    "Half-duplex",
    "Communication where devices take turns sending."
  ],
  [
    "Full-duplex",
    "Communication where devices can send and receive at the same time."
  ],
  [
    "Broadcast link",
    "A shared link where transmissions can be heard by multiple nodes."
  ],
  [
    "Point-to-point link",
    "A link connecting exactly two nodes."
  ],
  [
    "Multiple access protocol",
    "Rules for sharing a broadcast medium."
  ],
  [
    "Channel partitioning",
    "Dividing a shared channel by time, frequency, or code."
  ],
  [
    "Random access",
    "Allowing devices to transmit and recover from collisions."
  ],
  [
    "Taking turns",
    "A sharing method where nodes transmit by schedule or permission."
  ],
  [
    "Collision",
    "Overlapping transmissions on a shared medium."
  ],
  [
    "MAC protocol",
    "Rules controlling access to the transmission medium."
  ],
  [
    "LAN",
    "Local Area Network, connecting devices in a limited area."
  ],
  [
    "Ethernet",
    "The dominant wired LAN technology."
  ],
  [
    "Ethernet frame",
    "A frame format used by Ethernet networks."
  ],
  [
    "Preamble",
    "Ethernet bits used to synchronize receiver timing."
  ],
  [
    "Ethernet type field",
    "A field identifying the payload protocol."
  ],
  [
    "Broadcast MAC address",
    "The all-ones MAC address received by all LAN interfaces."
  ],
  [
    "ARP",
    "Address Resolution Protocol, mapping local IP addresses to MAC addresses."
  ],
  [
    "ARP table",
    "A cache of IP-to-MAC mappings."
  ],
  [
    "ARP request",
    "A broadcast message asking who has a target IP address."
  ],
  [
    "ARP reply",
    "A response containing the target MAC address."
  ],
  [
    "CSMA/CD",
    "Carrier Sense Multiple Access with Collision Detection for classic Ethernet."
  ],
  [
    "Carrier sense",
    "Listening before transmitting on a shared medium."
  ],
  [
    "Collision detection",
    "Detecting overlapping transmissions in shared Ethernet."
  ],
  [
    "Exponential backoff",
    "Increasing random wait time after repeated collisions."
  ],
  [
    "Switch",
    "A link-layer device that forwards frames by MAC address."
  ],
  [
    "Switch forwarding table",
    "A table mapping MAC addresses to switch ports."
  ],
  [
    "Self-learning",
    "A switch learning MAC locations from source addresses."
  ],
  [
    "Flooding",
    "Sending a frame out multiple ports when destination is unknown."
  ],
  [
    "Filtering",
    "Not forwarding a frame where it does not need to go."
  ],
  [
    "Store-and-forward switch",
    "A switch that receives the whole frame before forwarding."
  ],
  [
    "Cut-through switch",
    "A switch that begins forwarding before receiving the whole frame."
  ],
  [
    "Spanning Tree Protocol",
    "A protocol that prevents switching loops."
  ],
  [
    "Broadcast domain",
    "The set of devices that receive a broadcast frame."
  ],
  [
    "VLAN",
    "Virtual LAN, a logical LAN separated from others on the same hardware."
  ],
  [
    "Access port",
    "A switch port assigned to one VLAN."
  ],
  [
    "Trunk port",
    "A switch port carrying traffic for multiple VLANs."
  ],
  [
    "802.1Q tag",
    "A VLAN tag inserted into Ethernet frames."
  ],
  [
    "Inter-VLAN routing",
    "Routing traffic between VLANs."
  ],
  [
    "Port isolation",
    "Switching configuration that limits which ports can communicate."
  ],
  [
    "Link virtualization",
    "Creating logical link behavior over shared physical infrastructure."
  ],
  [
    "MPLS",
    "Multiprotocol Label Switching, forwarding packets using short labels."
  ],
  [
    "Label",
    "A fixed-length identifier used by MPLS forwarding."
  ],
  [
    "MPLS header",
    "A small header inserted between link-layer and network-layer headers."
  ],
  [
    "Label switched router",
    "An MPLS-capable router that forwards based on labels."
  ],
  [
    "Ingress router",
    "The MPLS edge router that adds the first label."
  ],
  [
    "Egress router",
    "The MPLS edge router that removes the label."
  ],
  [
    "Label swapping",
    "Replacing an incoming MPLS label with an outgoing label."
  ],
  [
    "Label forwarding table",
    "A table mapping incoming labels to output labels and interfaces."
  ],
  [
    "Label switched path",
    "A path followed by MPLS-labeled packets."
  ],
  [
    "Traffic engineering",
    "Choosing routes to meet performance or utilization goals."
  ],
  [
    "Fast reroute",
    "Quickly moving traffic around a failure."
  ],
  [
    "MPLS VPN",
    "Using MPLS to separate customer traffic over a provider network."
  ],
  [
    "Virtual circuit",
    "A logical path with state in network devices."
  ],
  [
    "Overlay network",
    "A virtual network built on top of another network."
  ],
  [
    "Underlay network",
    "The physical or base network carrying overlays."
  ],
  [
    "Data center network",
    "A network connecting large numbers of servers and storage systems."
  ],
  [
    "Top-of-rack switch",
    "A switch placed near servers in a rack."
  ],
  [
    "Leaf-spine topology",
    "A data-center design with access leaf switches and spine switches."
  ],
  [
    "Bisection bandwidth",
    "The capacity across a cut dividing a network into two parts."
  ],
  [
    "Load balancing",
    "Distributing traffic across multiple paths or servers."
  ],
  [
    "ECMP",
    "Equal-Cost Multi-Path routing across multiple equal paths."
  ],
  [
    "Virtual machine",
    "A software-defined computer running on shared hardware."
  ],
  [
    "Container",
    "A lightweight isolated application runtime."
  ],
  [
    "Network virtualization",
    "Creating logical networks independent of physical topology."
  ],
  [
    "VXLAN",
    "A common overlay technology for virtualized Layer 2 networks."
  ],
  [
    "Service chaining",
    "Sending traffic through an ordered set of network functions."
  ],
  [
    "Middlebox",
    "A device or service such as firewall, NAT, proxy, or load balancer."
  ],
  [
    "Tenant isolation",
    "Keeping different customers or applications separated in shared infrastructure."
  ],
  [
    "Wireless host",
    "A device communicating over a wireless link."
  ],
  [
    "Base station",
    "A wireless access point connecting hosts to network infrastructure."
  ],
  [
    "Access point",
    "A WiFi base station for wireless LANs."
  ],
  [
    "Infrastructure mode",
    "Wireless mode where hosts connect through an access point."
  ],
  [
    "Ad hoc mode",
    "Wireless mode where hosts communicate directly without infrastructure."
  ],
  [
    "Wireless link",
    "A radio connection between wireless nodes."
  ],
  [
    "Signal attenuation",
    "Signal weakening as distance or obstacles increase."
  ],
  [
    "Interference",
    "Disruption caused by other transmissions or noise."
  ],
  [
    "Multipath propagation",
    "Radio signals taking multiple reflected paths."
  ],
  [
    "SNR",
    "Signal-to-noise ratio, comparing signal strength to noise."
  ],
  [
    "Bit error rate",
    "The fraction of transmitted bits received incorrectly."
  ],
  [
    "802.11",
    "The IEEE family of WiFi standards."
  ],
  [
    "BSS",
    "Basic Service Set, a WiFi cell with stations and often an AP."
  ],
  [
    "SSID",
    "The network name advertised by a WiFi access point."
  ],
  [
    "Association",
    "The process of joining a WiFi access point."
  ],
  [
    "Passive scanning",
    "Discovering WiFi networks by listening for beacon frames."
  ],
  [
    "Active scanning",
    "Discovering WiFi networks by sending probe requests."
  ],
  [
    "Beacon frame",
    "An AP frame announcing network identity and capabilities."
  ],
  [
    "CSMA/CA",
    "Carrier Sense Multiple Access with Collision Avoidance."
  ],
  [
    "Collision avoidance",
    "Trying to reduce collisions before they occur."
  ],
  [
    "Random backoff",
    "Waiting a random time before transmitting on a shared medium."
  ],
  [
    "Link-layer ACK",
    "An acknowledgment for a WiFi frame."
  ],
  [
    "Hidden terminal problem",
    "When two stations cannot hear each other but collide at an AP."
  ],
  [
    "RTS",
    "Request To Send, a control frame used to reserve the medium."
  ],
  [
    "CTS",
    "Clear To Send, a control frame granting transmission."
  ],
  [
    "NAV",
    "Network Allocation Vector, virtual carrier-sense timer in WiFi."
  ],
  [
    "Roaming",
    "Moving between access points while maintaining connectivity."
  ],
  [
    "WiFi channel",
    "A frequency range used for wireless communication."
  ],
  [
    "MIMO",
    "Multiple-input multiple-output antenna technology."
  ],
  [
    "802.11ax",
    "WiFi 6, an 802.11 standard designed for efficiency and capacity."
  ],
  [
    "Mobile network",
    "A network designed to support users moving between attachment points."
  ],
  [
    "Cellular network",
    "A mobile network divided into geographic cells."
  ],
  [
    "Cell",
    "A coverage area served by a base station."
  ],
  [
    "User equipment",
    "A mobile device such as a phone or cellular modem."
  ],
  [
    "SIM",
    "Subscriber Identity Module used for subscriber identity and authentication."
  ],
  [
    "IMSI",
    "International Mobile Subscriber Identity stored with subscriber credentials."
  ],
  [
    "4G LTE",
    "Fourth-generation cellular architecture based on IP networking."
  ],
  [
    "5G",
    "Fifth-generation mobile architecture with enhanced bandwidth and flexibility."
  ],
  [
    "Radio access network",
    "The part of a cellular system handling radio communication."
  ],
  [
    "Core network",
    "The provider network handling mobility, authentication, and Internet access."
  ],
  [
    "EPC",
    "Evolved Packet Core, the LTE core network."
  ],
  [
    "MME",
    "Mobility Management Entity, an LTE control-plane component."
  ],
  [
    "Serving gateway",
    "LTE component forwarding user data within the carrier network."
  ],
  [
    "PDN gateway",
    "LTE component connecting user traffic to external packet networks."
  ],
  [
    "HSS",
    "Home Subscriber Server storing subscriber data."
  ],
  [
    "Attach procedure",
    "The process of joining and authenticating to a cellular network."
  ],
  [
    "Bearer",
    "A logical data path with specific service properties."
  ],
  [
    "Handoff",
    "Moving an active connection from one base station to another."
  ],
  [
    "Hard handoff",
    "Breaking the old connection before or while making the new one."
  ],
  [
    "Soft handoff",
    "Temporarily maintaining more than one radio connection."
  ],
  [
    "Home network",
    "The subscriber's primary provider network."
  ],
  [
    "Visited network",
    "A provider network serving a roaming user."
  ],
  [
    "Mobile IP",
    "A protocol supporting mobility while keeping a stable home address."
  ],
  [
    "Home agent",
    "Mobile IP entity that forwards packets to a mobile node."
  ],
  [
    "Foreign agent",
    "Mobile IP entity in a visited network assisting mobile nodes."
  ],
  [
    "Care-of address",
    "A temporary address representing a mobile node's current location."
  ],
  [
    "Triangular routing",
    "Mobile IP path where packets go through the home agent before the mobile node."
  ],
  [
    "Mobility impact",
    "Effects of movement on delay, loss, TCP performance, and application continuity."
  ],
  [
    "Confidentiality",
    "Keeping message contents hidden from unauthorized parties."
  ],
  [
    "Authentication",
    "Verifying that an entity is who it claims to be."
  ],
  [
    "Message integrity",
    "Assurance that a message was not changed undetected."
  ],
  [
    "Availability",
    "Keeping services accessible to legitimate users."
  ],
  [
    "Access control",
    "Restricting use of resources to authorized entities."
  ],
  [
    "Eavesdropping",
    "Secretly listening to communication."
  ],
  [
    "Spoofing",
    "Pretending to be another entity."
  ],
  [
    "Replay attack",
    "Reusing captured valid messages to trick a system."
  ],
  [
    "Man-in-the-middle attack",
    "Intercepting and possibly modifying communication between parties."
  ],
  [
    "Denial of service",
    "Attacking availability by overwhelming or disrupting service."
  ],
  [
    "Plaintext",
    "Original readable data before encryption."
  ],
  [
    "Ciphertext",
    "Encrypted data that should be unreadable without the key."
  ],
  [
    "Encryption",
    "Transforming plaintext into ciphertext."
  ],
  [
    "Decryption",
    "Recovering plaintext from ciphertext."
  ],
  [
    "Symmetric-key cryptography",
    "Cryptography where sender and receiver share the same secret key."
  ],
  [
    "Public-key cryptography",
    "Cryptography using a public key and a private key pair."
  ],
  [
    "Public key",
    "A key that can be shared openly."
  ],
  [
    "Private key",
    "A key that must be kept secret by its owner."
  ],
  [
    "Hash function",
    "A function that maps data to a fixed-size digest."
  ],
  [
    "Cryptographic hash",
    "A hash designed to resist collisions and preimage attacks."
  ],
  [
    "MAC",
    "Message Authentication Code for integrity and authentication with a shared key."
  ],
  [
    "Digital signature",
    "A public-key mechanism proving origin and integrity."
  ],
  [
    "Certificate",
    "A signed binding between an identity and a public key."
  ],
  [
    "Certificate authority",
    "A trusted party that signs certificates."
  ],
  [
    "Nonce",
    "A fresh random or unique value used to prevent replay."
  ],
  [
    "Challenge-response",
    "Authentication where one side proves knowledge by answering a challenge."
  ],
  [
    "Session key",
    "A temporary key used for one communication session."
  ],
  [
    "Key distribution",
    "The process of securely giving parties needed keys."
  ],
  [
    "Trust model",
    "The assumptions about who or what is trusted."
  ],
  [
    "Mutual authentication",
    "Both communication parties authenticate each other."
  ],
  [
    "TLS",
    "Transport Layer Security, used to protect application sessions such as HTTPS."
  ],
  [
    "HTTPS",
    "HTTP over TLS for secure web communication."
  ],
  [
    "TLS handshake",
    "The setup phase where parties negotiate keys and authenticate."
  ],
  [
    "TLS record",
    "A protected TLS data unit carrying application data."
  ],
  [
    "Cipher suite",
    "A set of algorithms used by a TLS session."
  ],
  [
    "Certificate chain",
    "A sequence of certificates linking a site certificate to a trusted root."
  ],
  [
    "Root CA",
    "A highly trusted certificate authority at the top of a trust chain."
  ],
  [
    "Forward secrecy",
    "Protection of past sessions even if a long-term key is later compromised."
  ],
  [
    "Firewall",
    "A device or software that filters traffic according to policy."
  ],
  [
    "Packet filter",
    "A firewall that checks packet headers such as addresses and ports."
  ],
  [
    "Stateful firewall",
    "A firewall that tracks connection state."
  ],
  [
    "Application gateway",
    "A firewall/proxy that inspects application-layer traffic."
  ],
  [
    "ACL",
    "Access Control List, a set of permit or deny rules."
  ],
  [
    "IDS",
    "Intrusion Detection System that monitors for suspicious activity."
  ],
  [
    "IPS",
    "Intrusion Prevention System that can actively block suspicious traffic."
  ],
  [
    "Signature-based detection",
    "Detecting known attack patterns."
  ],
  [
    "Anomaly-based detection",
    "Detecting behavior that differs from normal patterns."
  ],
  [
    "IPsec",
    "A suite for protecting IP datagrams."
  ],
  [
    "Security association",
    "A one-way IPsec relationship defining keys and algorithms."
  ],
  [
    "Security Policy Database",
    "IPsec database indicating what traffic should be protected."
  ],
  [
    "Security Association Database",
    "IPsec database storing active security associations."
  ],
  [
    "AH",
    "Authentication Header, IPsec protocol for authentication and integrity."
  ],
  [
    "ESP",
    "Encapsulating Security Payload, IPsec protocol supporting confidentiality."
  ],
  [
    "Transport mode",
    "IPsec mode protecting the payload of the original IP datagram."
  ],
  [
    "Tunnel mode",
    "IPsec mode protecting the entire original IP datagram inside a new one."
  ],
  [
    "IKE",
    "Internet Key Exchange, used to create IPsec security associations."
  ],
  [
    "VPN",
    "Virtual Private Network, often built using tunnel-mode IPsec or TLS."
  ],
  [
    "NAT traversal",
    "Techniques allowing IPsec traffic to pass through NAT devices."
  ],
  [
    "Replay protection",
    "A mechanism that rejects old duplicated protected packets."
  ],
  [
    "Security gateway",
    "A router/firewall/VPN device enforcing security at a network boundary."
  ]
=======
    title: "Transport Layer",
    subtitle: "TCP, UDP, reliability, ports, multiplexing, flow control, and congestion control.",
    color: "from-emerald-500 to-teal-400",
    beginner: "This layer delivers data between apps running on different computers.",
    pages: "Section 3",
  },
  {
    id: "network",
    unit: "2.2 / 3.1 / 3.2 / 3.3",
    icon: Router,
    title: "Network Layer + Routing + Management",
    subtitle: "IP, routers, forwarding, routing, OSPF, BGP, SDN, SNMP, NETCONF, and YANG.",
    color: "from-orange-500 to-amber-400",
    beginner: "This layer decides where packets should go across many networks.",
    pages: "Section 4",
  },
  {
    id: "link",
    unit: "Data Link / 4.1 / 4.2 / 4.3",
    icon: Cable,
    title: "Data Link Layer, LANs & Virtualization",
    subtitle: "Frames, MAC addresses, ARP, Ethernet, switches, VLANs, error detection, and MPLS.",
    color: "from-blue-600 to-indigo-400",
    beginner: "This layer moves data across one local hop, like from your laptop to a router.",
    pages: "Section 5",
  },
  {
    id: "wireless-mobile",
    unit: "5.1 / 5.2",
    icon: Wifi,
    title: "Wireless & Mobile Networks",
    subtitle: "WiFi, wireless links, base stations, 4G/5G, mobility, roaming, and handoffs.",
    color: "from-pink-500 to-rose-400",
    beginner: "This explains how devices stay connected without cables and while moving.",
    pages: "Section 6",
  },
  {
    id: "security",
    unit: "6.1 / 6.2 / 6.3",
    icon: Shield,
    title: "Network Security",
    subtitle: "Confidentiality, authentication, integrity, cryptography, TLS, firewalls, IDS, and IPsec.",
    color: "from-slate-700 to-slate-500",
    beginner: "Security keeps communication private, verified, unchanged, and available.",
    pages: "Section 7",
  },
];

const glossary = [
  ["Host / End System", "A device that runs apps, such as a phone, laptop, server, or smart camera."],
  ["Packet", "A small chunk of data sent through the network."],
  ["Frame", "A packet-like unit used at the data link layer for one-hop delivery."],
  ["Router", "A device that forwards packets between networks using IP addresses."],
  ["Switch", "A device that forwards frames inside a local network using MAC addresses."],
  ["Protocol", "A rule set for how devices talk, including message format, order, and actions."],
  ["Bandwidth", "The maximum transmission rate of a link, like the width of a road."],
  ["Delay", "The time data takes to travel from sender to receiver."],
  ["Throughput", "The actual rate at which useful data is delivered."],
  ["Encapsulation", "Wrapping data with extra headers as it moves down the network layers."],
  ["TCP", "Reliable, connection-oriented transport used by many apps."],
  ["UDP", "Lightweight, connectionless transport used when speed matters more than reliability."],
  ["IP Address", "A network-layer address used to route packets across networks."],
  ["MAC Address", "A local hardware address used on LANs."],
  ["DNS", "The system that translates names like example.com into IP addresses."],
  ["BGP", "The routing protocol that connects large networks and ISPs together."],
  ["VLAN", "A logical split of one physical LAN into multiple separate networks."],
  ["IPsec", "A network-layer security suite that protects IP datagrams."],
>>>>>>> parent of 8dd6f2e (Revamp NetworkingTwoBeginnerGuide content)
];

function Badge({ children }) {
  return <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{children}</span>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm ${className}`}>{children}</div>;
}

function SectionHeader({ id, eyebrow, title, subtitle, icon: Icon }) {
  return (
    <section id={id} className="scroll-mt-24 pt-16">
      <div className="mb-8 flex items-start gap-4">
        <div className="rounded-2xl bg-slate-900 p-3 text-white shadow-md"><Icon size={26} /></div>
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

function Flow({ steps }) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((step, idx) => (
        <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white font-black text-slate-900 shadow-sm">{idx + 1}</div>
          <h4 className="font-extrabold text-slate-900">{step.title}</h4>
          <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
          {idx < steps.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-slate-300 md:block" />}
        </div>
      ))}
    </div>
  );
}

function MiniLayerStack() {
  const layers = [
    ["Application", "HTTP, DNS, email, streaming"],
    ["Transport", "TCP/UDP, ports, reliability"],
    ["Network", "IP, routers, routing"],
    ["Data Link", "Ethernet, WiFi, MAC, frames"],
    ["Physical", "Copper, fiber, radio, signals"],
  ];
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-xl font-black text-slate-950">Internet Layer Stack</h3>
      <div className="space-y-2">
        {layers.map(([name, desc], i) => (
          <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-lg font-extrabold text-slate-900">{name}</span>
              <span className="text-xs font-bold uppercase text-slate-400">Layer {i + 1}</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-500">Think of this like a delivery company: each layer adds a label, instruction, or transport method until the data can travel physically.</p>
    </div>
  );
}

function PacketDiagram() {
  const chunks = ["Data", "TCP/UDP Header", "IP Header", "Frame Header", "Bits on wire/radio"];
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="mb-4 text-xl font-black text-slate-950">Encapsulation: data gets wrapped</h3>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {chunks.map((c, i) => (
          <div key={c} className="flex items-center justify-between border-b border-slate-100 p-4 last:border-0">
            <span className="font-bold text-slate-900">{c}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">{i === 0 ? "Original message" : `Wrapper ${i}`}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">A message does not travel naked. Each layer adds information that helps deliver, route, check, or decode it.</p>
    </div>
  );
}

function CompareTable({ rows, headers = ["Concept", "Simple Meaning", "Example"] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-950 text-white">
          <tr>{headers.map(h => <th key={h} className="p-4 font-bold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100 last:border-0">
              {row.map((cell, j) => <td key={j} className={`p-4 align-top ${j === 0 ? "font-extrabold text-slate-900" : "text-slate-600"}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Quiz({ items }) {
  return (
    <Card className="bg-gradient-to-br from-slate-950 to-slate-800 text-white">
      <h3 className="text-2xl font-black">Quick Check ✅</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((q, idx) => (
          <details key={idx} className="rounded-2xl bg-white/10 p-4">
            <summary className="cursor-pointer font-bold">{q.q}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-200">{q.a}</p>
          </details>
        ))}
      </div>
    </Card>
  );
}

const flashcards = [
<<<<<<< HEAD
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Internet?",
    "back": "A global network of networks that interconnects hosts using protocols."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Host?",
    "back": "An end device such as a laptop, phone, server, camera, or IoT device."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is End system?",
    "back": "Another name for a host because it sits at the edge of the network."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Packet?",
    "back": "A small unit of data plus headers sent across a packet-switched network."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Packet switch?",
    "back": "A router or link-layer switch that forwards packets toward a destination."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Router?",
    "back": "A network-layer packet switch that forwards packets between networks."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Link-layer switch?",
    "back": "A local packet switch that forwards frames inside a LAN."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Communication link?",
    "back": "A physical or wireless path that carries bits between network devices."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Transmission rate?",
    "back": "The speed at which bits are pushed onto a link."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Bandwidth?",
    "back": "The maximum possible transmission rate of a link."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Throughput?",
    "back": "The actual useful rate achieved by an application transfer."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Protocol?",
    "back": "A rule set defining message formats, ordering, and actions."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Access network?",
    "back": "The network that connects an end system to the first router."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Network core?",
    "back": "The mesh of routers and links that moves packets across the Internet."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Packet switching?",
    "back": "A method where many users share links by sending packets when needed."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Store-and-forward?",
    "back": "A switching behavior where a router receives a whole packet before forwarding."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Queueing delay?",
    "back": "Waiting time when packets sit in a router buffer."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Packet loss?",
    "back": "A dropped packet, often caused by congestion or buffer overflow."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Propagation delay?",
    "back": "Time for a signal to travel across a physical medium."
  },
  {
    "topic": "Computer Networks and the Internet",
    "front": "What is Transmission delay?",
    "back": "Time needed to push all packet bits onto a link."
  },
  {
    "topic": "Application Layer",
    "front": "What is Application layer?",
    "back": "The layer where network applications and their protocols operate."
  },
  {
    "topic": "Application Layer",
    "front": "What is Process?",
    "back": "A running program that sends or receives network messages."
  },
  {
    "topic": "Application Layer",
    "front": "What is Client?",
    "back": "A process that initiates communication or requests a service."
  },
  {
    "topic": "Application Layer",
    "front": "What is Server?",
    "back": "A process that waits for and responds to client requests."
  },
  {
    "topic": "Application Layer",
    "front": "What is Client-server architecture?",
    "back": "An app design with always-on servers serving many clients."
  },
  {
    "topic": "Application Layer",
    "front": "What is Peer-to-peer architecture?",
    "back": "An app design where end systems communicate directly as peers."
  },
  {
    "topic": "Application Layer",
    "front": "What is Socket?",
    "back": "A software interface between an application process and transport service."
  },
  {
    "topic": "Application Layer",
    "front": "What is IP address?",
    "back": "A network-layer address used to identify a host or interface."
  },
  {
    "topic": "Application Layer",
    "front": "What is Port number?",
    "back": "A transport-layer number used to identify a receiving process."
  },
  {
    "topic": "Application Layer",
    "front": "What is Application protocol?",
    "back": "Rules that define application message types, syntax, semantics, and timing."
  },
  {
    "topic": "Application Layer",
    "front": "What is HTTP?",
    "back": "The Web protocol used for browser requests and server responses."
  },
  {
    "topic": "Application Layer",
    "front": "What is HTTP request?",
    "back": "A client message asking a server for a web object or action."
  },
  {
    "topic": "Application Layer",
    "front": "What is HTTP response?",
    "back": "A server message returning status information and content."
  },
  {
    "topic": "Application Layer",
    "front": "What is Persistent HTTP?",
    "back": "HTTP behavior that reuses a TCP connection for multiple objects."
  },
  {
    "topic": "Application Layer",
    "front": "What is Non-persistent HTTP?",
    "back": "HTTP behavior that opens a separate TCP connection for each object."
  },
  {
    "topic": "Application Layer",
    "front": "What is Cookie?",
    "back": "A small identifier that lets websites maintain state across requests."
  },
  {
    "topic": "Application Layer",
    "front": "What is Web cache?",
    "back": "A proxy that stores copies of web objects to reduce delay and traffic."
  },
  {
    "topic": "Application Layer",
    "front": "What is DNS?",
    "back": "The distributed system that maps domain names to IP addresses."
  },
  {
    "topic": "Application Layer",
    "front": "What is DNS resolver?",
    "back": "A client-side DNS component that asks DNS servers for name mappings."
  },
  {
    "topic": "Application Layer",
    "front": "What is Root DNS server?",
    "back": "A top-level starting point in the DNS lookup hierarchy."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Transport layer?",
    "back": "The layer that provides logical communication between application processes."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Segment?",
    "back": "A transport-layer data unit containing application data and transport headers."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Multiplexing?",
    "back": "Combining data from many sockets for transmission through the network."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Demultiplexing?",
    "back": "Delivering received segments to the correct socket or process."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Source port?",
    "back": "The port number identifying the sending process."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Destination port?",
    "back": "The port number identifying the receiving process."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is UDP?",
    "back": "A connectionless transport protocol with low overhead and best-effort delivery."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is UDP checksum?",
    "back": "A field used to detect errors in UDP segments."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is TCP?",
    "back": "A connection-oriented transport protocol with reliable ordered delivery."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is TCP connection?",
    "back": "A logical communication state between two TCP endpoints."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Three-way handshake?",
    "back": "TCP setup using SYN, SYN-ACK, and ACK messages."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Reliable data transfer?",
    "back": "A service that delivers data correctly and in order despite loss or errors."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is ACK?",
    "back": "Acknowledgment, a message confirming data was received."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is NAK?",
    "back": "Negative acknowledgment, a message indicating data was not received correctly."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Sequence number?",
    "back": "A number used to identify byte or packet order."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Timeout?",
    "back": "A timer expiration that can trigger retransmission."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Retransmission?",
    "back": "Sending data again after suspected loss or corruption."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Flow control?",
    "back": "Preventing a sender from overwhelming the receiver."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Receive window?",
    "back": "TCP field indicating how much data the receiver can accept."
  },
  {
    "topic": "Transport Layer Basics",
    "front": "What is Congestion control?",
    "back": "Adjusting sending rate to avoid overwhelming the network."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is rdt?",
    "back": "Reliable data transfer, a model for correct delivery over unreliable channels."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Checksum?",
    "back": "A value used to detect bit errors in data."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Corruption?",
    "back": "A condition where bits are changed during transmission."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Duplicate packet?",
    "back": "A repeated packet caused by retransmission or delayed delivery."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Stop-and-wait rdt?",
    "back": "A simple reliable protocol with one outstanding packet."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Pipelined rdt?",
    "back": "A reliable protocol allowing multiple outstanding packets."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Sliding window?",
    "back": "A moving range of packets or bytes allowed to be sent."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Sender window?",
    "back": "The range of data the sender may transmit without more ACKs."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Receiver window?",
    "back": "The range of data the receiver is prepared to accept."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Go-Back-N?",
    "back": "A sliding-window protocol that retransmits a lost packet and all following packets."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Cumulative ACK?",
    "back": "An ACK that confirms receipt of all data up to a point."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Selective Repeat?",
    "back": "A sliding-window protocol that individually acknowledges and retransmits packets."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Individual ACK?",
    "back": "An ACK for a specific packet rather than all earlier data."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is TCP byte stream?",
    "back": "TCP treats data as an ordered stream of bytes."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is TCP sequence number?",
    "back": "The byte-stream number of the first byte in a TCP segment."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is TCP ACK number?",
    "back": "The next byte number the receiver expects."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Estimated RTT?",
    "back": "TCP's smoothed estimate of round-trip time."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is DevRTT?",
    "back": "TCP's estimate of round-trip time variation."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Timeout interval?",
    "back": "TCP's retransmission timer based on estimated RTT and variation."
  },
  {
    "topic": "Reliable Data Transfer and TCP Control",
    "front": "What is Fast retransmit?",
    "back": "TCP retransmission triggered by duplicate ACKs before timeout."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Network layer?",
    "back": "The layer that delivers packets from sending host to receiving host."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Datagram?",
    "back": "A network-layer packet, especially in IP networks."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Forwarding?",
    "back": "Moving a packet from an input link to the correct output link."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Routing?",
    "back": "Computing the path packets should take through the network."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Forwarding table?",
    "back": "A table used by routers to choose output links."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Routing algorithm?",
    "back": "A method for computing paths through a network."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Data plane?",
    "back": "The per-router function that forwards packets."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Control plane?",
    "back": "The network-wide logic that determines routing behavior."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Router input port?",
    "back": "Router component that receives packets and performs lookup."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Switching fabric?",
    "back": "Router component that transfers packets from input to output ports."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Router output port?",
    "back": "Router component that buffers and transmits packets onto links."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Longest-prefix matching?",
    "back": "Choosing the forwarding-table entry with the most specific matching prefix."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Queueing?",
    "back": "Waiting in a buffer when traffic arrives faster than it can leave."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Head-of-line blocking?",
    "back": "Delay caused when a packet at the front blocks packets behind it."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Packet scheduler?",
    "back": "A mechanism that chooses which queued packet to send next."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is FIFO scheduling?",
    "back": "First-In First-Out packet scheduling."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Priority scheduling?",
    "back": "Scheduling that serves higher-priority traffic first."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Round-robin scheduling?",
    "back": "Scheduling that cycles through queues."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is WFQ?",
    "back": "Weighted Fair Queueing, scheduling that gives configured shares to classes."
  },
  {
    "topic": "Network Layer and Router Architecture",
    "front": "What is Buffer overflow?",
    "back": "A condition where a full queue causes arriving packets to be dropped."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is IPv4?",
    "back": "The 32-bit version of the Internet Protocol."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is IPv6?",
    "back": "The 128-bit version of the Internet Protocol."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is IP address?",
    "back": "A logical address assigned to a network interface."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Interface?",
    "back": "A host or router connection point to a network."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Subnet?",
    "back": "A group of interfaces sharing the same network prefix."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Network prefix?",
    "back": "The leftmost bits identifying a subnet or route."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Host portion?",
    "back": "The address bits identifying an interface within a subnet."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is CIDR?",
    "back": "Classless Inter-Domain Routing using slash notation prefixes."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Slash notation?",
    "back": "Address notation such as 10.0.0.0/24 showing prefix length."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Subnet mask?",
    "back": "A mask indicating which address bits belong to the network prefix."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Default gateway?",
    "back": "The router a host uses to reach outside its subnet."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is DHCP?",
    "back": "Dynamic Host Configuration Protocol for automatic host configuration."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is DHCP discover?",
    "back": "A broadcast message used by a client looking for a DHCP server."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is DHCP offer?",
    "back": "A server response offering address configuration."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is DHCP request?",
    "back": "A client message requesting offered configuration."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is DHCP ACK?",
    "back": "A server confirmation of assigned configuration."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is NAT?",
    "back": "Network Address Translation, rewriting private/public address and port mappings."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Private address?",
    "back": "An address reserved for internal networks and not globally routed."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is Public address?",
    "back": "A globally routable Internet address."
  },
  {
    "topic": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP",
    "front": "What is NAT table?",
    "back": "A table mapping internal address-port pairs to external address-port pairs."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Routing graph?",
    "back": "A model of routers as nodes and links as edges."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Link cost?",
    "back": "A number representing preference or expense of using a link."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Least-cost path?",
    "back": "The path with the lowest total link cost."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Link-state routing?",
    "back": "Routing where each router knows network topology and link costs."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Dijkstra algorithm?",
    "back": "A link-state algorithm for computing shortest paths."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Link-state advertisement?",
    "back": "Information a router floods about its links and costs."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Distance-vector routing?",
    "back": "Routing where routers exchange distance estimates with neighbors."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Bellman-Ford equation?",
    "back": "The recurrence used in distance-vector path computation."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Count-to-infinity problem?",
    "back": "A distance-vector problem where bad news spreads slowly."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Poisoned reverse?",
    "back": "A technique to reduce certain routing loops."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Routing loop?",
    "back": "A condition where packets circulate among routers."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Autonomous system?",
    "back": "A network or group of networks under one administrative control."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Intra-AS routing?",
    "back": "Routing inside one autonomous system."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Inter-AS routing?",
    "back": "Routing between autonomous systems."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is OSPF?",
    "back": "Open Shortest Path First, a link-state intra-AS routing protocol."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is OSPF area?",
    "back": "A subdivision used to scale OSPF routing."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Border router?",
    "back": "A router connecting an AS to other ASes."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is Gateway router?",
    "back": "A router that connects to another AS or external network."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is BGP?",
    "back": "Border Gateway Protocol, the Internet inter-AS routing protocol."
  },
  {
    "topic": "Routing Algorithms, OSPF, BGP, and SDN",
    "front": "What is eBGP?",
    "back": "BGP session between routers in different autonomous systems."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Network management?",
    "back": "Monitoring, configuring, controlling, and troubleshooting network systems."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Managing server?",
    "back": "A system used by administrators to control managed devices."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Managed device?",
    "back": "A router, switch, server, or other network element being monitored."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Management agent?",
    "back": "Software on a managed device that exposes data and actions."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is MIB?",
    "back": "Management Information Base, a structured collection of managed variables."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is OID?",
    "back": "Object Identifier, a hierarchical name for a managed object."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is SNMP?",
    "back": "Simple Network Management Protocol for device monitoring and control."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is SNMP manager?",
    "back": "The system that sends SNMP requests and receives notifications."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is SNMP agent?",
    "back": "The device-side software responding to SNMP operations."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is SNMP Get?",
    "back": "A request to read a managed object value."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is SNMP Set?",
    "back": "A request to change a managed object value."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is SNMP Response?",
    "back": "The answer returned by an SNMP agent."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is SNMP Trap?",
    "back": "An unsolicited alert sent by an agent to a manager."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Polling?",
    "back": "Regularly asking devices for state or counters."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Event notification?",
    "back": "A device-generated alert about a significant condition."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Fault management?",
    "back": "Detecting, isolating, and correcting network problems."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Configuration management?",
    "back": "Maintaining intended device settings."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Performance management?",
    "back": "Measuring throughput, errors, utilization, and delay."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Security management?",
    "back": "Controlling access and protecting management systems."
  },
  {
    "topic": "Network Management, SNMP, NETCONF, and YANG",
    "front": "What is Accounting management?",
    "back": "Tracking resource use for billing or analysis."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Data link layer?",
    "back": "The layer responsible for transferring frames across one link."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Node?",
    "back": "A host, router, switch, or access point connected to a link."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Link?",
    "back": "A communication channel between adjacent nodes."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Frame?",
    "back": "A data link layer unit containing header, payload, and trailer."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Framing?",
    "back": "Encapsulating a network-layer datagram inside a link-layer frame."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is MAC address?",
    "back": "A local link-layer address assigned to a network interface."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Hop-to-hop delivery?",
    "back": "Delivery from one node to the next adjacent node."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Packetizing?",
    "back": "Dividing and wrapping data for transmission as packets or frames."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Frame header?",
    "back": "Control information placed before the payload."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Frame trailer?",
    "back": "Control information placed after the payload, often for error detection."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Error detection?",
    "back": "Recognizing that transmitted bits were corrupted."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Error correction?",
    "back": "Recovering original data without retransmission."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Parity bit?",
    "back": "An extra bit used to make the number of ones even or odd."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Two-dimensional parity?",
    "back": "Parity arranged in rows and columns for stronger detection."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Checksum?",
    "back": "An error-detection method using arithmetic sums."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Internet checksum?",
    "back": "A checksum method used by some Internet protocols."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is CRC?",
    "back": "Cyclic Redundancy Check, a strong polynomial-based error detector."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Generator polynomial?",
    "back": "The divisor pattern used in CRC calculation."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Burst error?",
    "back": "A sequence of nearby corrupted bits."
  },
  {
    "topic": "Data Link Services and Error Detection",
    "front": "What is Flow control?",
    "back": "Preventing a fast sender from overwhelming a receiver."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is LAN?",
    "back": "Local Area Network, connecting devices in a limited area."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Ethernet?",
    "back": "The dominant wired LAN technology."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Ethernet frame?",
    "back": "A frame format used by Ethernet networks."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Preamble?",
    "back": "Ethernet bits used to synchronize receiver timing."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Ethernet type field?",
    "back": "A field identifying the payload protocol."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is MAC address?",
    "back": "A 48-bit link-layer address used in LAN delivery."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Broadcast MAC address?",
    "back": "The all-ones MAC address received by all LAN interfaces."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is ARP?",
    "back": "Address Resolution Protocol, mapping local IP addresses to MAC addresses."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is ARP table?",
    "back": "A cache of IP-to-MAC mappings."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is ARP request?",
    "back": "A broadcast message asking who has a target IP address."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is ARP reply?",
    "back": "A response containing the target MAC address."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is CSMA/CD?",
    "back": "Carrier Sense Multiple Access with Collision Detection for classic Ethernet."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Carrier sense?",
    "back": "Listening before transmitting on a shared medium."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Collision detection?",
    "back": "Detecting overlapping transmissions in shared Ethernet."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Exponential backoff?",
    "back": "Increasing random wait time after repeated collisions."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Switch?",
    "back": "A link-layer device that forwards frames by MAC address."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Switch forwarding table?",
    "back": "A table mapping MAC addresses to switch ports."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Self-learning?",
    "back": "A switch learning MAC locations from source addresses."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Flooding?",
    "back": "Sending a frame out multiple ports when destination is unknown."
  },
  {
    "topic": "LANs, Ethernet, ARP, Switches, and VLANs",
    "front": "What is Filtering?",
    "back": "Not forwarding a frame where it does not need to go."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Link virtualization?",
    "back": "Creating logical link behavior over shared physical infrastructure."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is MPLS?",
    "back": "Multiprotocol Label Switching, forwarding packets using short labels."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Label?",
    "back": "A fixed-length identifier used by MPLS forwarding."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is MPLS header?",
    "back": "A small header inserted between link-layer and network-layer headers."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Label switched router?",
    "back": "An MPLS-capable router that forwards based on labels."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Ingress router?",
    "back": "The MPLS edge router that adds the first label."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Egress router?",
    "back": "The MPLS edge router that removes the label."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Label swapping?",
    "back": "Replacing an incoming MPLS label with an outgoing label."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Label forwarding table?",
    "back": "A table mapping incoming labels to output labels and interfaces."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Label switched path?",
    "back": "A path followed by MPLS-labeled packets."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Traffic engineering?",
    "back": "Choosing routes to meet performance or utilization goals."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Fast reroute?",
    "back": "Quickly moving traffic around a failure."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is MPLS VPN?",
    "back": "Using MPLS to separate customer traffic over a provider network."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Virtual circuit?",
    "back": "A logical path with state in network devices."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Tunneling?",
    "back": "Encapsulating traffic inside another protocol or label path."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Overlay network?",
    "back": "A virtual network built on top of another network."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Underlay network?",
    "back": "The physical or base network carrying overlays."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Data center network?",
    "back": "A network connecting large numbers of servers and storage systems."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Top-of-rack switch?",
    "back": "A switch placed near servers in a rack."
  },
  {
    "topic": "Link Virtualization, MPLS, and Data Center Networking",
    "front": "What is Leaf-spine topology?",
    "back": "A data-center design with access leaf switches and spine switches."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Wireless host?",
    "back": "A device communicating over a wireless link."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Base station?",
    "back": "A wireless access point connecting hosts to network infrastructure."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Access point?",
    "back": "A WiFi base station for wireless LANs."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Infrastructure mode?",
    "back": "Wireless mode where hosts connect through an access point."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Ad hoc mode?",
    "back": "Wireless mode where hosts communicate directly without infrastructure."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Wireless link?",
    "back": "A radio connection between wireless nodes."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Signal attenuation?",
    "back": "Signal weakening as distance or obstacles increase."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Interference?",
    "back": "Disruption caused by other transmissions or noise."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Multipath propagation?",
    "back": "Radio signals taking multiple reflected paths."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is SNR?",
    "back": "Signal-to-noise ratio, comparing signal strength to noise."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Bit error rate?",
    "back": "The fraction of transmitted bits received incorrectly."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is 802.11?",
    "back": "The IEEE family of WiFi standards."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is BSS?",
    "back": "Basic Service Set, a WiFi cell with stations and often an AP."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is SSID?",
    "back": "The network name advertised by a WiFi access point."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Association?",
    "back": "The process of joining a WiFi access point."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Passive scanning?",
    "back": "Discovering WiFi networks by listening for beacon frames."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Active scanning?",
    "back": "Discovering WiFi networks by sending probe requests."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Beacon frame?",
    "back": "An AP frame announcing network identity and capabilities."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is CSMA/CA?",
    "back": "Carrier Sense Multiple Access with Collision Avoidance."
  },
  {
    "topic": "Wireless Networks and WiFi",
    "front": "What is Collision avoidance?",
    "back": "Trying to reduce collisions before they occur."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Mobile network?",
    "back": "A network designed to support users moving between attachment points."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Cellular network?",
    "back": "A mobile network divided into geographic cells."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Cell?",
    "back": "A coverage area served by a base station."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Base station?",
    "back": "Cellular radio equipment connecting devices to the provider network."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is User equipment?",
    "back": "A mobile device such as a phone or cellular modem."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is SIM?",
    "back": "Subscriber Identity Module used for subscriber identity and authentication."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is IMSI?",
    "back": "International Mobile Subscriber Identity stored with subscriber credentials."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is 4G LTE?",
    "back": "Fourth-generation cellular architecture based on IP networking."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is 5G?",
    "back": "Fifth-generation mobile architecture with enhanced bandwidth and flexibility."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Radio access network?",
    "back": "The part of a cellular system handling radio communication."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Core network?",
    "back": "The provider network handling mobility, authentication, and Internet access."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is EPC?",
    "back": "Evolved Packet Core, the LTE core network."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is MME?",
    "back": "Mobility Management Entity, an LTE control-plane component."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Serving gateway?",
    "back": "LTE component forwarding user data within the carrier network."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is PDN gateway?",
    "back": "LTE component connecting user traffic to external packet networks."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is HSS?",
    "back": "Home Subscriber Server storing subscriber data."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Attach procedure?",
    "back": "The process of joining and authenticating to a cellular network."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Bearer?",
    "back": "A logical data path with specific service properties."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Handoff?",
    "back": "Moving an active connection from one base station to another."
  },
  {
    "topic": "Mobile Networks, 4G/5G, Roaming, and Handoffs",
    "front": "What is Hard handoff?",
    "back": "Breaking the old connection before or while making the new one."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Confidentiality?",
    "back": "Keeping message contents hidden from unauthorized parties."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Authentication?",
    "back": "Verifying that an entity is who it claims to be."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Message integrity?",
    "back": "Assurance that a message was not changed undetected."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Availability?",
    "back": "Keeping services accessible to legitimate users."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Access control?",
    "back": "Restricting use of resources to authorized entities."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Eavesdropping?",
    "back": "Secretly listening to communication."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Spoofing?",
    "back": "Pretending to be another entity."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Replay attack?",
    "back": "Reusing captured valid messages to trick a system."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Man-in-the-middle attack?",
    "back": "Intercepting and possibly modifying communication between parties."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Denial of service?",
    "back": "Attacking availability by overwhelming or disrupting service."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Plaintext?",
    "back": "Original readable data before encryption."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Ciphertext?",
    "back": "Encrypted data that should be unreadable without the key."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Encryption?",
    "back": "Transforming plaintext into ciphertext."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Decryption?",
    "back": "Recovering plaintext from ciphertext."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Symmetric-key cryptography?",
    "back": "Cryptography where sender and receiver share the same secret key."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Public-key cryptography?",
    "back": "Cryptography using a public key and a private key pair."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Public key?",
    "back": "A key that can be shared openly."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Private key?",
    "back": "A key that must be kept secret by its owner."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Hash function?",
    "back": "A function that maps data to a fixed-size digest."
  },
  {
    "topic": "Security Foundations, Cryptography, and Authentication",
    "front": "What is Cryptographic hash?",
    "back": "A hash designed to resist collisions and preimage attacks."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is TLS?",
    "back": "Transport Layer Security, used to protect application sessions such as HTTPS."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is HTTPS?",
    "back": "HTTP over TLS for secure web communication."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is TLS handshake?",
    "back": "The setup phase where parties negotiate keys and authenticate."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is TLS record?",
    "back": "A protected TLS data unit carrying application data."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Cipher suite?",
    "back": "A set of algorithms used by a TLS session."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Certificate chain?",
    "back": "A sequence of certificates linking a site certificate to a trusted root."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Root CA?",
    "back": "A highly trusted certificate authority at the top of a trust chain."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Forward secrecy?",
    "back": "Protection of past sessions even if a long-term key is later compromised."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Firewall?",
    "back": "A device or software that filters traffic according to policy."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Packet filter?",
    "back": "A firewall that checks packet headers such as addresses and ports."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Stateful firewall?",
    "back": "A firewall that tracks connection state."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Application gateway?",
    "back": "A firewall/proxy that inspects application-layer traffic."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is ACL?",
    "back": "Access Control List, a set of permit or deny rules."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is IDS?",
    "back": "Intrusion Detection System that monitors for suspicious activity."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is IPS?",
    "back": "Intrusion Prevention System that can actively block suspicious traffic."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Signature-based detection?",
    "back": "Detecting known attack patterns."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Anomaly-based detection?",
    "back": "Detecting behavior that differs from normal patterns."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is IPsec?",
    "back": "A suite for protecting IP datagrams."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Security association?",
    "back": "A one-way IPsec relationship defining keys and algorithms."
  },
  {
    "topic": "TLS, Firewalls, IDS, and IPsec",
    "front": "What is Security Policy Database?",
    "back": "IPsec database indicating what traffic should be protected."
  }
=======
  { topic: "Internet Basics", front: "What is the Internet?", back: "A network of networks that connects end systems using links, packet switches, and protocols." },
  { topic: "Internet Basics", front: "What is a protocol?", back: "A rule set that defines message format, message order, and what actions happen when messages are sent or received." },
  { topic: "Internet Basics", front: "What is a packet?", back: "A small chunk of data that travels through the network." },
  { topic: "Internet Basics", front: "What is bandwidth?", back: "The maximum transmission rate of a communication link." },
  { topic: "Internet Basics", front: "What is throughput?", back: "The actual rate at which useful data is delivered from sender to receiver." },
  { topic: "Application Layer", front: "Where do network applications run?", back: "They run on end systems, such as clients and servers, not usually inside network-core routers." },
  { topic: "Application Layer", front: "What is the client-server model?", back: "Clients contact an always-on server, usually with a stable address, to request services or data." },
  { topic: "Application Layer", front: "What is peer-to-peer architecture?", back: "End systems communicate directly and can request and provide services to one another." },
  { topic: "Application Layer", front: "What does DNS do?", back: "DNS translates human-readable names into IP addresses." },
  { topic: "Application Layer", front: "What is a socket?", back: "A software door where a process sends and receives network messages." },
  { topic: "Transport Layer", front: "What does the transport layer connect?", back: "It provides logical communication between application processes running on different hosts." },
  { topic: "Transport Layer", front: "What is multiplexing?", back: "Combining data from multiple application processes so they can share the network." },
  { topic: "Transport Layer", front: "What is demultiplexing?", back: "Delivering received segments to the correct socket or application process." },
  { topic: "Transport Layer", front: "TCP vs UDP: biggest difference?", back: "TCP provides reliable, connection-oriented delivery. UDP is connectionless and lightweight with no built-in reliability." },
  { topic: "Transport Layer", front: "Why do we need port numbers?", back: "They identify the correct application process on a host." },
  { topic: "Network Layer", front: "What does the network layer deliver?", back: "It moves transport-layer segments inside IP datagrams from sending host to receiving host." },
  { topic: "Network Layer", front: "Forwarding vs routing?", back: "Forwarding moves a packet through one router. Routing determines the end-to-end path." },
  { topic: "Network Layer", front: "Data plane vs control plane?", back: "The data plane forwards packets. The control plane decides routing and forwarding behavior." },
  { topic: "Network Layer", front: "What is NAT?", back: "Network Address Translation lets multiple private devices share one public IP address." },
  { topic: "Network Layer", front: "What is BGP used for?", back: "BGP routes traffic between autonomous systems, such as ISPs and large networks." },
  { topic: "Network Management", front: "What is SNMP used for?", back: "SNMP is used to query, monitor, and receive event information from managed network devices." },
  { topic: "Network Management", front: "NETCONF and YANG: who does what?", back: "YANG models configuration and state data. NETCONF communicates configuration actions and data." },
  { topic: "Data Link Layer", front: "What is the data link layer responsible for?", back: "It carries frames from one hop to the next hop." },
  { topic: "Data Link Layer", front: "What is a frame?", back: "A data link layer unit that wraps a packet for local one-hop delivery." },
  { topic: "Data Link Layer", front: "IP address vs MAC address?", back: "IP addresses are used for routing across networks. MAC addresses are used locally inside a LAN." },
  { topic: "Data Link Layer", front: "What does ARP do?", back: "ARP maps a local IP address to a MAC address." },
  { topic: "Data Link Layer", front: "What is CRC used for?", back: "Cyclic Redundancy Check is used to detect bit errors in transmitted data." },
  { topic: "LANs", front: "What does a switch do?", back: "A switch forwards frames inside a LAN using MAC addresses." },
  { topic: "LANs", front: "What is a VLAN?", back: "A VLAN logically separates one physical LAN into multiple virtual LANs." },
  { topic: "Link Virtualization", front: "What is MPLS?", back: "Multiprotocol Label Switching forwards packets using fixed-length labels instead of only IP longest-prefix matching." },
  { topic: "Wireless", front: "Does wireless always mean mobile?", back: "No. Wireless means no cable. Mobile means the device changes its network attachment point." },
  { topic: "Wireless", front: "What is an access point or base station?", back: "A device that relays packets between wireless hosts and the wired network infrastructure." },
  { topic: "Mobile Networks", front: "What are 4G/5G networks for?", back: "They provide wide-area mobile Internet using cellular infrastructure." },
  { topic: "Mobile Networks", front: "What is roaming?", back: "Using a visited network while still being associated with a home cellular provider." },
  { topic: "Security", front: "What are the four major goals of network security?", back: "Confidentiality, authentication, integrity, and availability/access." },
  { topic: "Security", front: "What is authentication?", back: "Proving that a sender or receiver is who they claim to be." },
  { topic: "Security", front: "What is message integrity?", back: "Assurance that a message was not changed without detection." },
  { topic: "Security", front: "TLS vs IPsec?", back: "TLS secures transport/application sessions such as HTTPS. IPsec protects IP datagrams at the network layer." },
  { topic: "Security", front: "IPsec transport mode vs tunnel mode?", back: "Transport mode protects only the payload. Tunnel mode protects the entire original datagram and wraps it in a new datagram." },
  { topic: "Security", front: "AH vs ESP in IPsec?", back: "AH provides authentication and integrity. ESP provides authentication, integrity, and confidentiality." },
>>>>>>> parent of 8dd6f2e (Revamp NetworkingTwoBeginnerGuide content)
];

const practiceTests = [
  {
<<<<<<< HEAD
    "title": "Computer Networks and the Internet — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: A global network of networks that interconnects hosts using protocols.",
        "options": [
          "Internet",
          "Communication link",
          "Packet switching",
          "End-to-end delay"
        ],
        "answer": 0,
        "explain": "Internet: A global network of networks that interconnects hosts using protocols."
      },
      {
        "q": "Which term best matches this description: An end device such as a laptop, phone, server, camera, or IoT device.",
        "options": [
          "Transmission rate",
          "Host",
          "Store-and-forward",
          "Circuit switching"
        ],
        "answer": 1,
        "explain": "Host: An end device such as a laptop, phone, server, camera, or IoT device."
      },
      {
        "q": "Which term best matches this description: Another name for a host because it sits at the edge of the network.",
        "options": [
          "Bandwidth",
          "Queueing delay",
          "End system",
          "FDM"
        ],
        "answer": 2,
        "explain": "End system: Another name for a host because it sits at the edge of the network."
      },
      {
        "q": "Which term best matches this description: A small unit of data plus headers sent across a packet-switched network.",
        "options": [
          "Throughput",
          "Packet loss",
          "TDM",
          "Packet"
        ],
        "answer": 3,
        "explain": "Packet: A small unit of data plus headers sent across a packet-switched network."
      },
      {
        "q": "Which term best matches this description: A router or link-layer switch that forwards packets toward a destination.",
        "options": [
          "Packet switch",
          "Protocol",
          "Propagation delay",
          "ISP"
        ],
        "answer": 0,
        "explain": "Packet switch: A router or link-layer switch that forwards packets toward a destination."
      },
      {
        "q": "Which term best matches this description: A network-layer packet switch that forwards packets between networks.",
        "options": [
          "Access network",
          "Router",
          "Transmission delay",
          "RFC"
        ],
        "answer": 1,
        "explain": "Router: A network-layer packet switch that forwards packets between networks."
      },
      {
        "q": "Which term best matches this description: A local packet switch that forwards frames inside a LAN.",
        "options": [
          "Network core",
          "Processing delay",
          "Link-layer switch",
          "IETF"
        ],
        "answer": 2,
        "explain": "Link-layer switch: A local packet switch that forwards frames inside a LAN."
      },
      {
        "q": "Which term best matches this description: A physical or wireless path that carries bits between network devices.",
        "options": [
          "Packet switching",
          "End-to-end delay",
          "Layering",
          "Communication link"
        ],
        "answer": 3,
        "explain": "Communication link: A physical or wireless path that carries bits between network devices."
      },
      {
        "q": "Which term best matches this description: The speed at which bits are pushed onto a link.",
        "options": [
          "Transmission rate",
          "Store-and-forward",
          "Circuit switching",
          "Encapsulation"
        ],
        "answer": 0,
        "explain": "Transmission rate: The speed at which bits are pushed onto a link."
      },
      {
        "q": "Which term best matches this description: The maximum possible transmission rate of a link.",
        "options": [
          "Queueing delay",
          "Bandwidth",
          "FDM",
          "Internet"
        ],
        "answer": 1,
        "explain": "Bandwidth: The maximum possible transmission rate of a link."
      },
      {
        "q": "Which term best matches this description: The actual useful rate achieved by an application transfer.",
        "options": [
          "Packet loss",
          "TDM",
          "Throughput",
          "Host"
        ],
        "answer": 2,
        "explain": "Throughput: The actual useful rate achieved by an application transfer."
      },
      {
        "q": "Which term best matches this description: A rule set defining message formats, ordering, and actions.",
        "options": [
          "Propagation delay",
          "ISP",
          "End system",
          "Protocol"
        ],
        "answer": 3,
        "explain": "Protocol: A rule set defining message formats, ordering, and actions."
      },
      {
        "q": "Which term best matches this description: The network that connects an end system to the first router.",
        "options": [
          "Access network",
          "Transmission delay",
          "RFC",
          "Packet"
        ],
        "answer": 0,
        "explain": "Access network: The network that connects an end system to the first router."
      },
      {
        "q": "Which term best matches this description: The mesh of routers and links that moves packets across the Internet.",
        "options": [
          "Processing delay",
          "Network core",
          "IETF",
          "Packet switch"
        ],
        "answer": 1,
        "explain": "Network core: The mesh of routers and links that moves packets across the Internet."
      },
      {
        "q": "Which term best matches this description: A method where many users share links by sending packets when needed.",
        "options": [
          "End-to-end delay",
          "Layering",
          "Packet switching",
          "Router"
        ],
        "answer": 2,
        "explain": "Packet switching: A method where many users share links by sending packets when needed."
      },
      {
        "q": "Which term best matches this description: A switching behavior where a router receives a whole packet before forwarding.",
        "options": [
          "Circuit switching",
          "Encapsulation",
          "Link-layer switch",
          "Store-and-forward"
        ],
        "answer": 3,
        "explain": "Store-and-forward: A switching behavior where a router receives a whole packet before forwarding."
      },
      {
        "q": "Which term best matches this description: Waiting time when packets sit in a router buffer.",
        "options": [
          "Queueing delay",
          "FDM",
          "Internet",
          "Communication link"
        ],
        "answer": 0,
        "explain": "Queueing delay: Waiting time when packets sit in a router buffer."
      },
      {
        "q": "Which term best matches this description: A dropped packet, often caused by congestion or buffer overflow.",
        "options": [
          "TDM",
          "Packet loss",
          "Host",
          "Transmission rate"
        ],
        "answer": 1,
        "explain": "Packet loss: A dropped packet, often caused by congestion or buffer overflow."
      },
      {
        "q": "Which term best matches this description: Time for a signal to travel across a physical medium.",
        "options": [
          "ISP",
          "End system",
          "Propagation delay",
          "Bandwidth"
        ],
        "answer": 2,
        "explain": "Propagation delay: Time for a signal to travel across a physical medium."
      },
      {
        "q": "Which term best matches this description: Time needed to push all packet bits onto a link.",
        "options": [
          "RFC",
          "Packet",
          "Throughput",
          "Transmission delay"
        ],
        "answer": 3,
        "explain": "Transmission delay: Time needed to push all packet bits onto a link."
      },
      {
        "q": "Which term best matches this description: Time a router spends checking headers and choosing an output link.",
        "options": [
          "Processing delay",
          "IETF",
          "Packet switch",
          "Protocol"
        ],
        "answer": 0,
        "explain": "Processing delay: Time a router spends checking headers and choosing an output link."
      },
      {
        "q": "Which term best matches this description: Total time for data to travel from source to destination.",
        "options": [
          "Layering",
          "End-to-end delay",
          "Router",
          "Access network"
        ],
        "answer": 1,
        "explain": "End-to-end delay: Total time for data to travel from source to destination."
      },
      {
        "q": "Which term best matches this description: A communication method that reserves resources for one session.",
        "options": [
          "Encapsulation",
          "Link-layer switch",
          "Circuit switching",
          "Network core"
        ],
        "answer": 2,
        "explain": "Circuit switching: A communication method that reserves resources for one session."
      },
      {
        "q": "Which term best matches this description: Frequency Division Multiplexing, where users get separate frequency bands.",
        "options": [
          "Internet",
          "Communication link",
          "Packet switching",
          "FDM"
        ],
        "answer": 3,
        "explain": "FDM: Frequency Division Multiplexing, where users get separate frequency bands."
      },
      {
        "q": "Which term best matches this description: Time Division Multiplexing, where users get recurring time slots.",
        "options": [
          "TDM",
          "Host",
          "Transmission rate",
          "Store-and-forward"
        ],
        "answer": 0,
        "explain": "TDM: Time Division Multiplexing, where users get recurring time slots."
      },
      {
        "q": "Which term best matches this description: Internet Service Provider, a network that gives Internet connectivity.",
        "options": [
          "End system",
          "ISP",
          "Bandwidth",
          "Queueing delay"
        ],
        "answer": 1,
        "explain": "ISP: Internet Service Provider, a network that gives Internet connectivity."
      },
      {
        "q": "Which term best matches this description: Request for Comments, a document series used for Internet standards.",
        "options": [
          "Packet",
          "Throughput",
          "RFC",
          "Packet loss"
        ],
        "answer": 2,
        "explain": "RFC: Request for Comments, a document series used for Internet standards."
      },
      {
        "q": "Which term best matches this description: Internet Engineering Task Force, an organization that develops Internet standards.",
        "options": [
          "Packet switch",
          "Protocol",
          "Propagation delay",
          "IETF"
        ],
        "answer": 3,
        "explain": "IETF: Internet Engineering Task Force, an organization that develops Internet standards."
      },
      {
        "q": "Which term best matches this description: Dividing networking into layers with separate responsibilities.",
        "options": [
          "Layering",
          "Router",
          "Access network",
          "Transmission delay"
        ],
        "answer": 0,
        "explain": "Layering: Dividing networking into layers with separate responsibilities."
      },
      {
        "q": "Which term best matches this description: Wrapping data with headers and trailers as it moves down the protocol stack.",
        "options": [
          "Link-layer switch",
          "Encapsulation",
          "Network core",
          "Processing delay"
        ],
        "answer": 1,
        "explain": "Encapsulation: Wrapping data with headers and trailers as it moves down the protocol stack."
      }
    ]
  },
  {
    "title": "Application Layer — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: The layer where network applications and their protocols operate.",
        "options": [
          "HTTP",
          "Application layer",
          "DNS",
          "IMAP"
        ],
        "answer": 1,
        "explain": "Application layer: The layer where network applications and their protocols operate."
      },
      {
        "q": "Which term best matches this description: A running program that sends or receives network messages.",
        "options": [
          "HTTP request",
          "DNS resolver",
          "Process",
          "POP3"
        ],
        "answer": 2,
        "explain": "Process: A running program that sends or receives network messages."
      },
      {
        "q": "Which term best matches this description: A process that initiates communication or requests a service.",
        "options": [
          "HTTP response",
          "Root DNS server",
          "P2P scalability",
          "Client"
        ],
        "answer": 3,
        "explain": "Client: A process that initiates communication or requests a service."
      },
      {
        "q": "Which term best matches this description: A process that waits for and responds to client requests.",
        "options": [
          "Server",
          "Persistent HTTP",
          "TLD server",
          "BitTorrent"
        ],
        "answer": 0,
        "explain": "Server: A process that waits for and responds to client requests."
      },
      {
        "q": "Which term best matches this description: An app design with always-on servers serving many clients.",
        "options": [
          "Non-persistent HTTP",
          "Client-server architecture",
          "Authoritative DNS server",
          "CDN"
        ],
        "answer": 1,
        "explain": "Client-server architecture: An app design with always-on servers serving many clients."
      },
      {
        "q": "Which term best matches this description: An app design where end systems communicate directly as peers.",
        "options": [
          "Cookie",
          "DNS cache",
          "Peer-to-peer architecture",
          "Adaptive streaming"
        ],
        "answer": 2,
        "explain": "Peer-to-peer architecture: An app design where end systems communicate directly as peers."
      },
      {
        "q": "Which term best matches this description: A software interface between an application process and transport service.",
        "options": [
          "Web cache",
          "SMTP",
          "Application layer",
          "Socket"
        ],
        "answer": 3,
        "explain": "Socket: A software interface between an application process and transport service."
      },
      {
        "q": "Which term best matches this description: A network-layer address used to identify a host or interface.",
        "options": [
          "IP address",
          "DNS",
          "IMAP",
          "Process"
        ],
        "answer": 0,
        "explain": "IP address: A network-layer address used to identify a host or interface."
      },
      {
        "q": "Which term best matches this description: A transport-layer number used to identify a receiving process.",
        "options": [
          "DNS resolver",
          "Port number",
          "POP3",
          "Client"
        ],
        "answer": 1,
        "explain": "Port number: A transport-layer number used to identify a receiving process."
      },
      {
        "q": "Which term best matches this description: Rules that define application message types, syntax, semantics, and timing.",
        "options": [
          "Root DNS server",
          "P2P scalability",
          "Application protocol",
          "Server"
        ],
        "answer": 2,
        "explain": "Application protocol: Rules that define application message types, syntax, semantics, and timing."
      },
      {
        "q": "Which term best matches this description: The Web protocol used for browser requests and server responses.",
        "options": [
          "TLD server",
          "BitTorrent",
          "Client-server architecture",
          "HTTP"
        ],
        "answer": 3,
        "explain": "HTTP: The Web protocol used for browser requests and server responses."
      },
      {
        "q": "Which term best matches this description: A client message asking a server for a web object or action.",
        "options": [
          "HTTP request",
          "Authoritative DNS server",
          "CDN",
          "Peer-to-peer architecture"
        ],
        "answer": 0,
        "explain": "HTTP request: A client message asking a server for a web object or action."
      },
      {
        "q": "Which term best matches this description: A server message returning status information and content.",
        "options": [
          "DNS cache",
          "HTTP response",
          "Adaptive streaming",
          "Socket"
        ],
        "answer": 1,
        "explain": "HTTP response: A server message returning status information and content."
      },
      {
        "q": "Which term best matches this description: HTTP behavior that reuses a TCP connection for multiple objects.",
        "options": [
          "SMTP",
          "Application layer",
          "Persistent HTTP",
          "IP address"
        ],
        "answer": 2,
        "explain": "Persistent HTTP: HTTP behavior that reuses a TCP connection for multiple objects."
      },
      {
        "q": "Which term best matches this description: HTTP behavior that opens a separate TCP connection for each object.",
        "options": [
          "IMAP",
          "Process",
          "Port number",
          "Non-persistent HTTP"
        ],
        "answer": 3,
        "explain": "Non-persistent HTTP: HTTP behavior that opens a separate TCP connection for each object."
      },
      {
        "q": "Which term best matches this description: A small identifier that lets websites maintain state across requests.",
        "options": [
          "Cookie",
          "POP3",
          "Client",
          "Application protocol"
        ],
        "answer": 0,
        "explain": "Cookie: A small identifier that lets websites maintain state across requests."
      },
      {
        "q": "Which term best matches this description: A proxy that stores copies of web objects to reduce delay and traffic.",
        "options": [
          "P2P scalability",
          "Web cache",
          "Server",
          "HTTP"
        ],
        "answer": 1,
        "explain": "Web cache: A proxy that stores copies of web objects to reduce delay and traffic."
      },
      {
        "q": "Which term best matches this description: The distributed system that maps domain names to IP addresses.",
        "options": [
          "BitTorrent",
          "Client-server architecture",
          "DNS",
          "HTTP request"
        ],
        "answer": 2,
        "explain": "DNS: The distributed system that maps domain names to IP addresses."
      },
      {
        "q": "Which term best matches this description: A client-side DNS component that asks DNS servers for name mappings.",
        "options": [
          "CDN",
          "Peer-to-peer architecture",
          "HTTP response",
          "DNS resolver"
        ],
        "answer": 3,
        "explain": "DNS resolver: A client-side DNS component that asks DNS servers for name mappings."
      },
      {
        "q": "Which term best matches this description: A top-level starting point in the DNS lookup hierarchy.",
        "options": [
          "Root DNS server",
          "Adaptive streaming",
          "Socket",
          "Persistent HTTP"
        ],
        "answer": 0,
        "explain": "Root DNS server: A top-level starting point in the DNS lookup hierarchy."
      },
      {
        "q": "Which term best matches this description: A DNS server responsible for top-level domains such as .com or .org.",
        "options": [
          "Application layer",
          "TLD server",
          "IP address",
          "Non-persistent HTTP"
        ],
        "answer": 1,
        "explain": "TLD server: A DNS server responsible for top-level domains such as .com or .org."
      },
      {
        "q": "Which term best matches this description: The DNS server with official records for a domain.",
        "options": [
          "Process",
          "Port number",
          "Authoritative DNS server",
          "Cookie"
        ],
        "answer": 2,
        "explain": "Authoritative DNS server: The DNS server with official records for a domain."
      },
      {
        "q": "Which term best matches this description: Stored DNS answers reused to avoid repeated lookups.",
        "options": [
          "Client",
          "Application protocol",
          "Web cache",
          "DNS cache"
        ],
        "answer": 3,
        "explain": "DNS cache: Stored DNS answers reused to avoid repeated lookups."
      },
      {
        "q": "Which term best matches this description: The protocol used to transfer email between mail servers.",
        "options": [
          "SMTP",
          "Server",
          "HTTP",
          "DNS"
        ],
        "answer": 0,
        "explain": "SMTP: The protocol used to transfer email between mail servers."
      },
      {
        "q": "Which term best matches this description: A protocol for retrieving and synchronizing email from a mail server.",
        "options": [
          "Client-server architecture",
          "IMAP",
          "HTTP request",
          "DNS resolver"
        ],
        "answer": 1,
        "explain": "IMAP: A protocol for retrieving and synchronizing email from a mail server."
      },
      {
        "q": "Which term best matches this description: A simple email retrieval protocol.",
        "options": [
          "Peer-to-peer architecture",
          "HTTP response",
          "POP3",
          "Root DNS server"
        ],
        "answer": 2,
        "explain": "POP3: A simple email retrieval protocol."
      },
      {
        "q": "Which term best matches this description: The ability of peer systems to grow because peers contribute resources.",
        "options": [
          "Socket",
          "Persistent HTTP",
          "TLD server",
          "P2P scalability"
        ],
        "answer": 3,
        "explain": "P2P scalability: The ability of peer systems to grow because peers contribute resources."
      },
      {
        "q": "Which term best matches this description: A P2P protocol where peers exchange pieces of a file.",
        "options": [
          "BitTorrent",
          "IP address",
          "Non-persistent HTTP",
          "Authoritative DNS server"
        ],
        "answer": 0,
        "explain": "BitTorrent: A P2P protocol where peers exchange pieces of a file."
      },
      {
        "q": "Which term best matches this description: Content Delivery Network, a set of distributed servers near users.",
        "options": [
          "Port number",
          "CDN",
          "Cookie",
          "DNS cache"
        ],
        "answer": 1,
        "explain": "CDN: Content Delivery Network, a set of distributed servers near users."
      },
      {
        "q": "Which term best matches this description: A video technique that changes quality based on available bandwidth.",
        "options": [
          "Application protocol",
          "Web cache",
          "Adaptive streaming",
          "SMTP"
        ],
        "answer": 2,
        "explain": "Adaptive streaming: A video technique that changes quality based on available bandwidth."
      }
    ]
  },
  {
    "title": "Transport Layer Basics — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: The layer that provides logical communication between application processes.",
        "options": [
          "NAK",
          "Congestion window",
          "Transport layer",
          "Best-effort delivery"
        ],
        "answer": 2,
        "explain": "Transport layer: The layer that provides logical communication between application processes."
      },
      {
        "q": "Which term best matches this description: A transport-layer data unit containing application data and transport headers.",
        "options": [
          "Sequence number",
          "MSS",
          "Transport checksum",
          "Segment"
        ],
        "answer": 3,
        "explain": "Segment: A transport-layer data unit containing application data and transport headers."
      },
      {
        "q": "Which term best matches this description: Combining data from many sockets for transmission through the network.",
        "options": [
          "Multiplexing",
          "Timeout",
          "RTT",
          "Socket pair"
        ],
        "answer": 0,
        "explain": "Multiplexing: Combining data from many sockets for transmission through the network."
      },
      {
        "q": "Which term best matches this description: Delivering received segments to the correct socket or process.",
        "options": [
          "Retransmission",
          "Demultiplexing",
          "Pipeline",
          "Transport layer"
        ],
        "answer": 1,
        "explain": "Demultiplexing: Delivering received segments to the correct socket or process."
      },
      {
        "q": "Which term best matches this description: The port number identifying the sending process.",
        "options": [
          "Flow control",
          "Stop-and-wait",
          "Source port",
          "Segment"
        ],
        "answer": 2,
        "explain": "Source port: The port number identifying the sending process."
      },
      {
        "q": "Which term best matches this description: The port number identifying the receiving process.",
        "options": [
          "Receive window",
          "Connectionless service",
          "Multiplexing",
          "Destination port"
        ],
        "answer": 3,
        "explain": "Destination port: The port number identifying the receiving process."
      },
      {
        "q": "Which term best matches this description: A connectionless transport protocol with low overhead and best-effort delivery.",
        "options": [
          "UDP",
          "Congestion control",
          "Connection-oriented service",
          "Demultiplexing"
        ],
        "answer": 0,
        "explain": "UDP: A connectionless transport protocol with low overhead and best-effort delivery."
      },
      {
        "q": "Which term best matches this description: A field used to detect errors in UDP segments.",
        "options": [
          "Congestion window",
          "UDP checksum",
          "Best-effort delivery",
          "Source port"
        ],
        "answer": 1,
        "explain": "UDP checksum: A field used to detect errors in UDP segments."
      },
      {
        "q": "Which term best matches this description: A connection-oriented transport protocol with reliable ordered delivery.",
        "options": [
          "MSS",
          "Transport checksum",
          "TCP",
          "Destination port"
        ],
        "answer": 2,
        "explain": "TCP: A connection-oriented transport protocol with reliable ordered delivery."
      },
      {
        "q": "Which term best matches this description: A logical communication state between two TCP endpoints.",
        "options": [
          "RTT",
          "Socket pair",
          "UDP",
          "TCP connection"
        ],
        "answer": 3,
        "explain": "TCP connection: A logical communication state between two TCP endpoints."
      },
      {
        "q": "Which term best matches this description: TCP setup using SYN, SYN-ACK, and ACK messages.",
        "options": [
          "Three-way handshake",
          "Pipeline",
          "Transport layer",
          "UDP checksum"
        ],
        "answer": 0,
        "explain": "Three-way handshake: TCP setup using SYN, SYN-ACK, and ACK messages."
      },
      {
        "q": "Which term best matches this description: A service that delivers data correctly and in order despite loss or errors.",
        "options": [
          "Stop-and-wait",
          "Reliable data transfer",
          "Segment",
          "TCP"
        ],
        "answer": 1,
        "explain": "Reliable data transfer: A service that delivers data correctly and in order despite loss or errors."
      },
      {
        "q": "Which term best matches this description: Acknowledgment, a message confirming data was received.",
        "options": [
          "Connectionless service",
          "Multiplexing",
          "ACK",
          "TCP connection"
        ],
        "answer": 2,
        "explain": "ACK: Acknowledgment, a message confirming data was received."
      },
      {
        "q": "Which term best matches this description: Negative acknowledgment, a message indicating data was not received correctly.",
        "options": [
          "Connection-oriented service",
          "Demultiplexing",
          "Three-way handshake",
          "NAK"
        ],
        "answer": 3,
        "explain": "NAK: Negative acknowledgment, a message indicating data was not received correctly."
      },
      {
        "q": "Which term best matches this description: A number used to identify byte or packet order.",
        "options": [
          "Sequence number",
          "Best-effort delivery",
          "Source port",
          "Reliable data transfer"
        ],
        "answer": 0,
        "explain": "Sequence number: A number used to identify byte or packet order."
      },
      {
        "q": "Which term best matches this description: A timer expiration that can trigger retransmission.",
        "options": [
          "Transport checksum",
          "Timeout",
          "Destination port",
          "ACK"
        ],
        "answer": 1,
        "explain": "Timeout: A timer expiration that can trigger retransmission."
      },
      {
        "q": "Which term best matches this description: Sending data again after suspected loss or corruption.",
        "options": [
          "Socket pair",
          "UDP",
          "Retransmission",
          "NAK"
        ],
        "answer": 2,
        "explain": "Retransmission: Sending data again after suspected loss or corruption."
      },
      {
        "q": "Which term best matches this description: Preventing a sender from overwhelming the receiver.",
        "options": [
          "Transport layer",
          "UDP checksum",
          "Sequence number",
          "Flow control"
        ],
        "answer": 3,
        "explain": "Flow control: Preventing a sender from overwhelming the receiver."
      },
      {
        "q": "Which term best matches this description: TCP field indicating how much data the receiver can accept.",
        "options": [
          "Receive window",
          "Segment",
          "TCP",
          "Timeout"
        ],
        "answer": 0,
        "explain": "Receive window: TCP field indicating how much data the receiver can accept."
      },
      {
        "q": "Which term best matches this description: Adjusting sending rate to avoid overwhelming the network.",
        "options": [
          "Multiplexing",
          "Congestion control",
          "TCP connection",
          "Retransmission"
        ],
        "answer": 1,
        "explain": "Congestion control: Adjusting sending rate to avoid overwhelming the network."
      },
      {
        "q": "Which term best matches this description: TCP sender-side limit based on perceived network congestion.",
        "options": [
          "Demultiplexing",
          "Three-way handshake",
          "Congestion window",
          "Flow control"
        ],
        "answer": 2,
        "explain": "Congestion window: TCP sender-side limit based on perceived network congestion."
      },
      {
        "q": "Which term best matches this description: Maximum Segment Size, the largest TCP payload in one segment.",
        "options": [
          "Source port",
          "Reliable data transfer",
          "Receive window",
          "MSS"
        ],
        "answer": 3,
        "explain": "MSS: Maximum Segment Size, the largest TCP payload in one segment."
      },
      {
        "q": "Which term best matches this description: Round-trip time, the time for data to go out and an acknowledgment to return.",
        "options": [
          "RTT",
          "Destination port",
          "ACK",
          "Congestion control"
        ],
        "answer": 0,
        "explain": "RTT: Round-trip time, the time for data to go out and an acknowledgment to return."
      },
      {
        "q": "Which term best matches this description: Sending multiple packets before waiting for acknowledgments.",
        "options": [
          "UDP",
          "Pipeline",
          "NAK",
          "Congestion window"
        ],
        "answer": 1,
        "explain": "Pipeline: Sending multiple packets before waiting for acknowledgments."
      },
      {
        "q": "Which term best matches this description: A protocol that sends one packet and waits for its acknowledgment.",
        "options": [
          "UDP checksum",
          "Sequence number",
          "Stop-and-wait",
          "MSS"
        ],
        "answer": 2,
        "explain": "Stop-and-wait: A protocol that sends one packet and waits for its acknowledgment."
      },
      {
        "q": "Which term best matches this description: A service that sends messages without prior setup.",
        "options": [
          "TCP",
          "Timeout",
          "RTT",
          "Connectionless service"
        ],
        "answer": 3,
        "explain": "Connectionless service: A service that sends messages without prior setup."
      },
      {
        "q": "Which term best matches this description: A service that establishes state before data transfer.",
        "options": [
          "Connection-oriented service",
          "TCP connection",
          "Retransmission",
          "Pipeline"
        ],
        "answer": 0,
        "explain": "Connection-oriented service: A service that establishes state before data transfer."
      },
      {
        "q": "Which term best matches this description: Delivery with no guarantee of reliability, order, or timing.",
        "options": [
          "Three-way handshake",
          "Best-effort delivery",
          "Flow control",
          "Stop-and-wait"
        ],
        "answer": 1,
        "explain": "Best-effort delivery: Delivery with no guarantee of reliability, order, or timing."
      },
      {
        "q": "Which term best matches this description: An error-detection field in transport headers.",
        "options": [
          "Reliable data transfer",
          "Receive window",
          "Transport checksum",
          "Connectionless service"
        ],
        "answer": 2,
        "explain": "Transport checksum: An error-detection field in transport headers."
      },
      {
        "q": "Which term best matches this description: The combination of source/destination IP addresses and ports that identifies a conversation.",
        "options": [
          "ACK",
          "Congestion control",
          "Connection-oriented service",
          "Socket pair"
        ],
        "answer": 3,
        "explain": "Socket pair: The combination of source/destination IP addresses and ports that identifies a conversation."
      }
    ]
  },
  {
    "title": "Reliable Data Transfer and TCP Control — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: Reliable data transfer, a model for correct delivery over unreliable channels.",
        "options": [
          "Estimated RTT",
          "AIMD",
          "Sender window",
          "rdt"
        ],
        "answer": 3,
        "explain": "rdt: Reliable data transfer, a model for correct delivery over unreliable channels."
      },
      {
        "q": "Which term best matches this description: A value used to detect bit errors in data.",
        "options": [
          "Checksum",
          "DevRTT",
          "ssthresh",
          "Receiver window"
        ],
        "answer": 0,
        "explain": "Checksum: A value used to detect bit errors in data."
      },
      {
        "q": "Which term best matches this description: A condition where bits are changed during transmission.",
        "options": [
          "Timeout interval",
          "Corruption",
          "TCP Reno",
          "Go-Back-N"
        ],
        "answer": 1,
        "explain": "Corruption: A condition where bits are changed during transmission."
      },
      {
        "q": "Which term best matches this description: A repeated packet caused by retransmission or delayed delivery.",
        "options": [
          "Fast retransmit",
          "TCP fairness",
          "Duplicate packet",
          "Cumulative ACK"
        ],
        "answer": 2,
        "explain": "Duplicate packet: A repeated packet caused by retransmission or delayed delivery."
      },
      {
        "q": "Which term best matches this description: A simple reliable protocol with one outstanding packet.",
        "options": [
          "Duplicate ACK",
          "Flow-control limit",
          "Selective Repeat",
          "Stop-and-wait rdt"
        ],
        "answer": 3,
        "explain": "Stop-and-wait rdt: A simple reliable protocol with one outstanding packet."
      },
      {
        "q": "Which term best matches this description: A reliable protocol allowing multiple outstanding packets.",
        "options": [
          "Pipelined rdt",
          "Slow start",
          "Congestion-control limit",
          "Individual ACK"
        ],
        "answer": 0,
        "explain": "Pipelined rdt: A reliable protocol allowing multiple outstanding packets."
      },
      {
        "q": "Which term best matches this description: A moving range of packets or bytes allowed to be sent.",
        "options": [
          "Congestion avoidance",
          "Sliding window",
          "Effective send window",
          "TCP byte stream"
        ],
        "answer": 1,
        "explain": "Sliding window: A moving range of packets or bytes allowed to be sent."
      },
      {
        "q": "Which term best matches this description: The range of data the sender may transmit without more ACKs.",
        "options": [
          "AIMD",
          "rdt",
          "Sender window",
          "TCP sequence number"
        ],
        "answer": 2,
        "explain": "Sender window: The range of data the sender may transmit without more ACKs."
      },
      {
        "q": "Which term best matches this description: The range of data the receiver is prepared to accept.",
        "options": [
          "ssthresh",
          "Checksum",
          "TCP ACK number",
          "Receiver window"
        ],
        "answer": 3,
        "explain": "Receiver window: The range of data the receiver is prepared to accept."
      },
      {
        "q": "Which term best matches this description: A sliding-window protocol that retransmits a lost packet and all following packets.",
        "options": [
          "Go-Back-N",
          "TCP Reno",
          "Corruption",
          "Estimated RTT"
        ],
        "answer": 0,
        "explain": "Go-Back-N: A sliding-window protocol that retransmits a lost packet and all following packets."
      },
      {
        "q": "Which term best matches this description: An ACK that confirms receipt of all data up to a point.",
        "options": [
          "TCP fairness",
          "Cumulative ACK",
          "Duplicate packet",
          "DevRTT"
        ],
        "answer": 1,
        "explain": "Cumulative ACK: An ACK that confirms receipt of all data up to a point."
      },
      {
        "q": "Which term best matches this description: A sliding-window protocol that individually acknowledges and retransmits packets.",
        "options": [
          "Flow-control limit",
          "Stop-and-wait rdt",
          "Selective Repeat",
          "Timeout interval"
        ],
        "answer": 2,
        "explain": "Selective Repeat: A sliding-window protocol that individually acknowledges and retransmits packets."
      },
      {
        "q": "Which term best matches this description: An ACK for a specific packet rather than all earlier data.",
        "options": [
          "Congestion-control limit",
          "Pipelined rdt",
          "Fast retransmit",
          "Individual ACK"
        ],
        "answer": 3,
        "explain": "Individual ACK: An ACK for a specific packet rather than all earlier data."
      },
      {
        "q": "Which term best matches this description: TCP treats data as an ordered stream of bytes.",
        "options": [
          "TCP byte stream",
          "Effective send window",
          "Sliding window",
          "Duplicate ACK"
        ],
        "answer": 0,
        "explain": "TCP byte stream: TCP treats data as an ordered stream of bytes."
      },
      {
        "q": "Which term best matches this description: The byte-stream number of the first byte in a TCP segment.",
        "options": [
          "rdt",
          "TCP sequence number",
          "Sender window",
          "Slow start"
        ],
        "answer": 1,
        "explain": "TCP sequence number: The byte-stream number of the first byte in a TCP segment."
      },
      {
        "q": "Which term best matches this description: The next byte number the receiver expects.",
        "options": [
          "Checksum",
          "Receiver window",
          "TCP ACK number",
          "Congestion avoidance"
        ],
        "answer": 2,
        "explain": "TCP ACK number: The next byte number the receiver expects."
      },
      {
        "q": "Which term best matches this description: TCP's smoothed estimate of round-trip time.",
        "options": [
          "Corruption",
          "Go-Back-N",
          "AIMD",
          "Estimated RTT"
        ],
        "answer": 3,
        "explain": "Estimated RTT: TCP's smoothed estimate of round-trip time."
      },
      {
        "q": "Which term best matches this description: TCP's estimate of round-trip time variation.",
        "options": [
          "DevRTT",
          "Duplicate packet",
          "Cumulative ACK",
          "ssthresh"
        ],
        "answer": 0,
        "explain": "DevRTT: TCP's estimate of round-trip time variation."
      },
      {
        "q": "Which term best matches this description: TCP's retransmission timer based on estimated RTT and variation.",
        "options": [
          "Stop-and-wait rdt",
          "Timeout interval",
          "Selective Repeat",
          "TCP Reno"
        ],
        "answer": 1,
        "explain": "Timeout interval: TCP's retransmission timer based on estimated RTT and variation."
      },
      {
        "q": "Which term best matches this description: TCP retransmission triggered by duplicate ACKs before timeout.",
        "options": [
          "Pipelined rdt",
          "Individual ACK",
          "Fast retransmit",
          "TCP fairness"
        ],
        "answer": 2,
        "explain": "Fast retransmit: TCP retransmission triggered by duplicate ACKs before timeout."
      },
      {
        "q": "Which term best matches this description: An ACK repeating the same expected byte number.",
        "options": [
          "Sliding window",
          "TCP byte stream",
          "Flow-control limit",
          "Duplicate ACK"
        ],
        "answer": 3,
        "explain": "Duplicate ACK: An ACK repeating the same expected byte number."
      },
      {
        "q": "Which term best matches this description: TCP phase where congestion window grows rapidly from a low value.",
        "options": [
          "Slow start",
          "Sender window",
          "TCP sequence number",
          "Congestion-control limit"
        ],
        "answer": 0,
        "explain": "Slow start: TCP phase where congestion window grows rapidly from a low value."
      },
      {
        "q": "Which term best matches this description: TCP phase where the congestion window grows more slowly.",
        "options": [
          "Receiver window",
          "Congestion avoidance",
          "TCP ACK number",
          "Effective send window"
        ],
        "answer": 1,
        "explain": "Congestion avoidance: TCP phase where the congestion window grows more slowly."
      },
      {
        "q": "Which term best matches this description: Additive Increase Multiplicative Decrease, a TCP congestion-control pattern.",
        "options": [
          "Go-Back-N",
          "Estimated RTT",
          "AIMD",
          "rdt"
        ],
        "answer": 2,
        "explain": "AIMD: Additive Increase Multiplicative Decrease, a TCP congestion-control pattern."
      },
      {
        "q": "Which term best matches this description: Slow-start threshold separating slow start from congestion avoidance.",
        "options": [
          "Cumulative ACK",
          "DevRTT",
          "Checksum",
          "ssthresh"
        ],
        "answer": 3,
        "explain": "ssthresh: Slow-start threshold separating slow start from congestion avoidance."
      },
      {
        "q": "Which term best matches this description: A classic TCP congestion-control variant using AIMD and fast recovery.",
        "options": [
          "TCP Reno",
          "Selective Repeat",
          "Timeout interval",
          "Corruption"
        ],
        "answer": 0,
        "explain": "TCP Reno: A classic TCP congestion-control variant using AIMD and fast recovery."
      },
      {
        "q": "Which term best matches this description: The tendency for competing TCP flows to share bandwidth.",
        "options": [
          "Individual ACK",
          "TCP fairness",
          "Fast retransmit",
          "Duplicate packet"
        ],
        "answer": 1,
        "explain": "TCP fairness: The tendency for competing TCP flows to share bandwidth."
      },
      {
        "q": "Which term best matches this description: A limit based on receiver capacity.",
        "options": [
          "TCP byte stream",
          "Duplicate ACK",
          "Flow-control limit",
          "Stop-and-wait rdt"
        ],
        "answer": 2,
        "explain": "Flow-control limit: A limit based on receiver capacity."
      },
      {
        "q": "Which term best matches this description: A limit based on network capacity.",
        "options": [
          "TCP sequence number",
          "Slow start",
          "Pipelined rdt",
          "Congestion-control limit"
        ],
        "answer": 3,
        "explain": "Congestion-control limit: A limit based on network capacity."
      },
      {
        "q": "Which term best matches this description: The smaller of the receive window and congestion window.",
        "options": [
          "Effective send window",
          "TCP ACK number",
          "Congestion avoidance",
          "Sliding window"
        ],
        "answer": 0,
        "explain": "Effective send window: The smaller of the receive window and congestion window."
      }
    ]
  },
  {
    "title": "Network Layer and Router Architecture — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: The layer that delivers packets from sending host to receiving host.",
        "options": [
          "Network layer",
          "Buffer overflow",
          "SDN control plane",
          "Routing"
        ],
        "answer": 0,
        "explain": "Network layer: The layer that delivers packets from sending host to receiving host."
      },
      {
        "q": "Which term best matches this description: A network-layer packet, especially in IP networks.",
        "options": [
          "Fragmentation",
          "Datagram",
          "Flow table",
          "Forwarding table"
        ],
        "answer": 1,
        "explain": "Datagram: A network-layer packet, especially in IP networks."
      },
      {
        "q": "Which term best matches this description: Moving a packet from an input link to the correct output link.",
        "options": [
          "MTU",
          "Match-action rule",
          "Forwarding",
          "Routing algorithm"
        ],
        "answer": 2,
        "explain": "Forwarding: Moving a packet from an input link to the correct output link."
      },
      {
        "q": "Which term best matches this description: Computing the path packets should take through the network.",
        "options": [
          "IP service model",
          "Router buffer",
          "Data plane",
          "Routing"
        ],
        "answer": 3,
        "explain": "Routing: Computing the path packets should take through the network."
      },
      {
        "q": "Which term best matches this description: A table used by routers to choose output links.",
        "options": [
          "Forwarding table",
          "Best-effort network",
          "Network layer",
          "Control plane"
        ],
        "answer": 0,
        "explain": "Forwarding table: A table used by routers to choose output links."
      },
      {
        "q": "Which term best matches this description: A method for computing paths through a network.",
        "options": [
          "Virtual circuit network",
          "Routing algorithm",
          "Datagram",
          "Router input port"
        ],
        "answer": 1,
        "explain": "Routing algorithm: A method for computing paths through a network."
      },
      {
        "q": "Which term best matches this description: The per-router function that forwards packets.",
        "options": [
          "Datagram network",
          "Forwarding",
          "Data plane",
          "Switching fabric"
        ],
        "answer": 2,
        "explain": "Data plane: The per-router function that forwards packets."
      },
      {
        "q": "Which term best matches this description: The network-wide logic that determines routing behavior.",
        "options": [
          "SDN control plane",
          "Routing",
          "Router output port",
          "Control plane"
        ],
        "answer": 3,
        "explain": "Control plane: The network-wide logic that determines routing behavior."
      },
      {
        "q": "Which term best matches this description: Router component that receives packets and performs lookup.",
        "options": [
          "Router input port",
          "Flow table",
          "Forwarding table",
          "Longest-prefix matching"
        ],
        "answer": 0,
        "explain": "Router input port: Router component that receives packets and performs lookup."
      },
      {
        "q": "Which term best matches this description: Router component that transfers packets from input to output ports.",
        "options": [
          "Match-action rule",
          "Switching fabric",
          "Routing algorithm",
          "Queueing"
        ],
        "answer": 1,
        "explain": "Switching fabric: Router component that transfers packets from input to output ports."
      },
      {
        "q": "Which term best matches this description: Router component that buffers and transmits packets onto links.",
        "options": [
          "Router buffer",
          "Data plane",
          "Router output port",
          "Head-of-line blocking"
        ],
        "answer": 2,
        "explain": "Router output port: Router component that buffers and transmits packets onto links."
      },
      {
        "q": "Which term best matches this description: Choosing the forwarding-table entry with the most specific matching prefix.",
        "options": [
          "Network layer",
          "Control plane",
          "Packet scheduler",
          "Longest-prefix matching"
        ],
        "answer": 3,
        "explain": "Longest-prefix matching: Choosing the forwarding-table entry with the most specific matching prefix."
      },
      {
        "q": "Which term best matches this description: Waiting in a buffer when traffic arrives faster than it can leave.",
        "options": [
          "Queueing",
          "Datagram",
          "Router input port",
          "FIFO scheduling"
        ],
        "answer": 0,
        "explain": "Queueing: Waiting in a buffer when traffic arrives faster than it can leave."
      },
      {
        "q": "Which term best matches this description: Delay caused when a packet at the front blocks packets behind it.",
        "options": [
          "Forwarding",
          "Head-of-line blocking",
          "Switching fabric",
          "Priority scheduling"
        ],
        "answer": 1,
        "explain": "Head-of-line blocking: Delay caused when a packet at the front blocks packets behind it."
      },
      {
        "q": "Which term best matches this description: A mechanism that chooses which queued packet to send next.",
        "options": [
          "Routing",
          "Router output port",
          "Packet scheduler",
          "Round-robin scheduling"
        ],
        "answer": 2,
        "explain": "Packet scheduler: A mechanism that chooses which queued packet to send next."
      },
      {
        "q": "Which term best matches this description: First-In First-Out packet scheduling.",
        "options": [
          "Forwarding table",
          "Longest-prefix matching",
          "WFQ",
          "FIFO scheduling"
        ],
        "answer": 3,
        "explain": "FIFO scheduling: First-In First-Out packet scheduling."
      },
      {
        "q": "Which term best matches this description: Scheduling that serves higher-priority traffic first.",
        "options": [
          "Priority scheduling",
          "Routing algorithm",
          "Queueing",
          "Buffer overflow"
        ],
        "answer": 0,
        "explain": "Priority scheduling: Scheduling that serves higher-priority traffic first."
      },
      {
        "q": "Which term best matches this description: Scheduling that cycles through queues.",
        "options": [
          "Data plane",
          "Round-robin scheduling",
          "Head-of-line blocking",
          "Fragmentation"
        ],
        "answer": 1,
        "explain": "Round-robin scheduling: Scheduling that cycles through queues."
      },
      {
        "q": "Which term best matches this description: Weighted Fair Queueing, scheduling that gives configured shares to classes.",
        "options": [
          "Control plane",
          "Packet scheduler",
          "WFQ",
          "MTU"
        ],
        "answer": 2,
        "explain": "WFQ: Weighted Fair Queueing, scheduling that gives configured shares to classes."
      },
      {
        "q": "Which term best matches this description: A condition where a full queue causes arriving packets to be dropped.",
        "options": [
          "Router input port",
          "FIFO scheduling",
          "IP service model",
          "Buffer overflow"
        ],
        "answer": 3,
        "explain": "Buffer overflow: A condition where a full queue causes arriving packets to be dropped."
      },
      {
        "q": "Which term best matches this description: Splitting a large datagram into smaller pieces.",
        "options": [
          "Fragmentation",
          "Switching fabric",
          "Priority scheduling",
          "Best-effort network"
        ],
        "answer": 0,
        "explain": "Fragmentation: Splitting a large datagram into smaller pieces."
      },
      {
        "q": "Which term best matches this description: Maximum Transmission Unit, the largest frame payload allowed on a link.",
        "options": [
          "Router output port",
          "MTU",
          "Round-robin scheduling",
          "Virtual circuit network"
        ],
        "answer": 1,
        "explain": "MTU: Maximum Transmission Unit, the largest frame payload allowed on a link."
      },
      {
        "q": "Which term best matches this description: Best-effort datagram delivery with no guaranteed bandwidth or timing.",
        "options": [
          "Longest-prefix matching",
          "WFQ",
          "IP service model",
          "Datagram network"
        ],
        "answer": 2,
        "explain": "IP service model: Best-effort datagram delivery with no guaranteed bandwidth or timing."
      },
      {
        "q": "Which term best matches this description: A network that tries to deliver but gives no strict guarantees.",
        "options": [
          "Queueing",
          "Buffer overflow",
          "SDN control plane",
          "Best-effort network"
        ],
        "answer": 3,
        "explain": "Best-effort network: A network that tries to deliver but gives no strict guarantees."
      },
      {
        "q": "Which term best matches this description: A network where path state is established before data transfer.",
        "options": [
          "Virtual circuit network",
          "Head-of-line blocking",
          "Fragmentation",
          "Flow table"
        ],
        "answer": 0,
        "explain": "Virtual circuit network: A network where path state is established before data transfer."
      },
      {
        "q": "Which term best matches this description: A network where each packet carries its destination address and is routed independently.",
        "options": [
          "Packet scheduler",
          "Datagram network",
          "MTU",
          "Match-action rule"
        ],
        "answer": 1,
        "explain": "Datagram network: A network where each packet carries its destination address and is routed independently."
      },
      {
        "q": "Which term best matches this description: A control model where a controller programs forwarding behavior.",
        "options": [
          "FIFO scheduling",
          "IP service model",
          "SDN control plane",
          "Router buffer"
        ],
        "answer": 2,
        "explain": "SDN control plane: A control model where a controller programs forwarding behavior."
      },
      {
        "q": "Which term best matches this description: An SDN table containing match-action rules.",
        "options": [
          "Priority scheduling",
          "Best-effort network",
          "Network layer",
          "Flow table"
        ],
        "answer": 3,
        "explain": "Flow table: An SDN table containing match-action rules."
      },
      {
        "q": "Which term best matches this description: A rule that matches packet fields and specifies an action.",
        "options": [
          "Match-action rule",
          "Round-robin scheduling",
          "Virtual circuit network",
          "Datagram"
        ],
        "answer": 0,
        "explain": "Match-action rule: A rule that matches packet fields and specifies an action."
      },
      {
        "q": "Which term best matches this description: Memory used to hold packets during congestion or scheduling.",
        "options": [
          "WFQ",
          "Router buffer",
          "Datagram network",
          "Forwarding"
        ],
        "answer": 1,
        "explain": "Router buffer: Memory used to hold packets during congestion or scheduling."
      }
    ]
  },
  {
    "title": "IP Addressing, IPv4, IPv6, DHCP, NAT, and ICMP — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: The 32-bit version of the Internet Protocol.",
        "options": [
          "Traceroute",
          "IPv4",
          "Address aggregation",
          "Host portion"
        ],
        "answer": 1,
        "explain": "IPv4: The 32-bit version of the Internet Protocol."
      },
      {
        "q": "Which term best matches this description: The 128-bit version of the Internet Protocol.",
        "options": [
          "TTL",
          "IPv4",
          "IPv6",
          "CIDR"
        ],
        "answer": 2,
        "explain": "IPv6: The 128-bit version of the Internet Protocol."
      },
      {
        "q": "Which term best matches this description: A logical address assigned to a network interface.",
        "options": [
          "IPv4 header checksum",
          "IPv6",
          "Slash notation",
          "IP address"
        ],
        "answer": 3,
        "explain": "IP address: A logical address assigned to a network interface."
      },
      {
        "q": "Which term best matches this description: A host or router connection point to a network.",
        "options": [
          "Interface",
          "IPv6 simplified header",
          "IP address",
          "Subnet mask"
        ],
        "answer": 0,
        "explain": "Interface: A host or router connection point to a network."
      },
      {
        "q": "Which term best matches this description: A group of interfaces sharing the same network prefix.",
        "options": [
          "IPv6 flow label",
          "Subnet",
          "Interface",
          "Default gateway"
        ],
        "answer": 1,
        "explain": "Subnet: A group of interfaces sharing the same network prefix."
      },
      {
        "q": "Which term best matches this description: The leftmost bits identifying a subnet or route.",
        "options": [
          "Tunneling",
          "Subnet",
          "Network prefix",
          "DHCP"
        ],
        "answer": 2,
        "explain": "Network prefix: The leftmost bits identifying a subnet or route."
      },
      {
        "q": "Which term best matches this description: The address bits identifying an interface within a subnet.",
        "options": [
          "Dual stack",
          "Network prefix",
          "DHCP discover",
          "Host portion"
        ],
        "answer": 3,
        "explain": "Host portion: The address bits identifying an interface within a subnet."
      },
      {
        "q": "Which term best matches this description: Classless Inter-Domain Routing using slash notation prefixes.",
        "options": [
          "CIDR",
          "Address aggregation",
          "Host portion",
          "DHCP offer"
        ],
        "answer": 0,
        "explain": "CIDR: Classless Inter-Domain Routing using slash notation prefixes."
      },
      {
        "q": "Which term best matches this description: Address notation such as 10.0.0.0/24 showing prefix length.",
        "options": [
          "IPv4",
          "Slash notation",
          "CIDR",
          "DHCP request"
        ],
        "answer": 1,
        "explain": "Slash notation: Address notation such as 10.0.0.0/24 showing prefix length."
      },
      {
        "q": "Which term best matches this description: A mask indicating which address bits belong to the network prefix.",
        "options": [
          "IPv6",
          "Slash notation",
          "Subnet mask",
          "DHCP ACK"
        ],
        "answer": 2,
        "explain": "Subnet mask: A mask indicating which address bits belong to the network prefix."
      },
      {
        "q": "Which term best matches this description: The router a host uses to reach outside its subnet.",
        "options": [
          "IP address",
          "Subnet mask",
          "NAT",
          "Default gateway"
        ],
        "answer": 3,
        "explain": "Default gateway: The router a host uses to reach outside its subnet."
      },
      {
        "q": "Which term best matches this description: Dynamic Host Configuration Protocol for automatic host configuration.",
        "options": [
          "DHCP",
          "Interface",
          "Default gateway",
          "Private address"
        ],
        "answer": 0,
        "explain": "DHCP: Dynamic Host Configuration Protocol for automatic host configuration."
      },
      {
        "q": "Which term best matches this description: A broadcast message used by a client looking for a DHCP server.",
        "options": [
          "Subnet",
          "DHCP discover",
          "DHCP",
          "Public address"
        ],
        "answer": 1,
        "explain": "DHCP discover: A broadcast message used by a client looking for a DHCP server."
      },
      {
        "q": "Which term best matches this description: A server response offering address configuration.",
        "options": [
          "Network prefix",
          "DHCP discover",
          "DHCP offer",
          "NAT table"
        ],
        "answer": 2,
        "explain": "DHCP offer: A server response offering address configuration."
      },
      {
        "q": "Which term best matches this description: A client message requesting offered configuration.",
        "options": [
          "Host portion",
          "DHCP offer",
          "ICMP",
          "DHCP request"
        ],
        "answer": 3,
        "explain": "DHCP request: A client message requesting offered configuration."
      },
      {
        "q": "Which term best matches this description: A server confirmation of assigned configuration.",
        "options": [
          "DHCP ACK",
          "CIDR",
          "DHCP request",
          "Ping"
        ],
        "answer": 0,
        "explain": "DHCP ACK: A server confirmation of assigned configuration."
      },
      {
        "q": "Which term best matches this description: Network Address Translation, rewriting private/public address and port mappings.",
        "options": [
          "Slash notation",
          "NAT",
          "DHCP ACK",
          "Traceroute"
        ],
        "answer": 1,
        "explain": "NAT: Network Address Translation, rewriting private/public address and port mappings."
      },
      {
        "q": "Which term best matches this description: An address reserved for internal networks and not globally routed.",
        "options": [
          "Subnet mask",
          "NAT",
          "Private address",
          "TTL"
        ],
        "answer": 2,
        "explain": "Private address: An address reserved for internal networks and not globally routed."
      },
      {
        "q": "Which term best matches this description: A globally routable Internet address.",
        "options": [
          "Default gateway",
          "Private address",
          "IPv4 header checksum",
          "Public address"
        ],
        "answer": 3,
        "explain": "Public address: A globally routable Internet address."
      },
      {
        "q": "Which term best matches this description: A table mapping internal address-port pairs to external address-port pairs.",
        "options": [
          "NAT table",
          "DHCP",
          "Public address",
          "IPv6 simplified header"
        ],
        "answer": 0,
        "explain": "NAT table: A table mapping internal address-port pairs to external address-port pairs."
      },
      {
        "q": "Which term best matches this description: Internet Control Message Protocol for errors and diagnostics.",
        "options": [
          "DHCP discover",
          "ICMP",
          "NAT table",
          "IPv6 flow label"
        ],
        "answer": 1,
        "explain": "ICMP: Internet Control Message Protocol for errors and diagnostics."
      },
      {
        "q": "Which term best matches this description: A reachability test using ICMP echo messages.",
        "options": [
          "DHCP offer",
          "ICMP",
          "Ping",
          "Tunneling"
        ],
        "answer": 2,
        "explain": "Ping: A reachability test using ICMP echo messages."
      },
      {
        "q": "Which term best matches this description: A diagnostic tool that discovers router hops using TTL behavior.",
        "options": [
          "DHCP request",
          "Ping",
          "Dual stack",
          "Traceroute"
        ],
        "answer": 3,
        "explain": "Traceroute: A diagnostic tool that discovers router hops using TTL behavior."
      },
      {
        "q": "Which term best matches this description: Time To Live, a field decreased by routers to prevent endless circulation.",
        "options": [
          "TTL",
          "DHCP ACK",
          "Traceroute",
          "Address aggregation"
        ],
        "answer": 0,
        "explain": "TTL: Time To Live, a field decreased by routers to prevent endless circulation."
      },
      {
        "q": "Which term best matches this description: A field used to detect errors in an IPv4 header.",
        "options": [
          "NAT",
          "IPv4 header checksum",
          "TTL",
          "IPv4"
        ],
        "answer": 1,
        "explain": "IPv4 header checksum: A field used to detect errors in an IPv4 header."
      },
      {
        "q": "Which term best matches this description: IPv6 design with fewer fixed header fields than IPv4.",
        "options": [
          "Private address",
          "IPv4 header checksum",
          "IPv6 simplified header",
          "IPv6"
        ],
        "answer": 2,
        "explain": "IPv6 simplified header: IPv6 design with fewer fixed header fields than IPv4."
      },
      {
        "q": "Which term best matches this description: An IPv6 field that can identify flows needing special handling.",
        "options": [
          "Public address",
          "IPv6 simplified header",
          "IP address",
          "IPv6 flow label"
        ],
        "answer": 3,
        "explain": "IPv6 flow label: An IPv6 field that can identify flows needing special handling."
      },
      {
        "q": "Which term best matches this description: Carrying one protocol inside another during transitions or VPN use.",
        "options": [
          "Tunneling",
          "NAT table",
          "IPv6 flow label",
          "Interface"
        ],
        "answer": 0,
        "explain": "Tunneling: Carrying one protocol inside another during transitions or VPN use."
      },
      {
        "q": "Which term best matches this description: Running IPv4 and IPv6 at the same time.",
        "options": [
          "ICMP",
          "Dual stack",
          "Tunneling",
          "Subnet"
        ],
        "answer": 1,
        "explain": "Dual stack: Running IPv4 and IPv6 at the same time."
      },
      {
        "q": "Which term best matches this description: Combining prefixes to reduce routing-table size.",
        "options": [
          "Ping",
          "Dual stack",
          "Address aggregation",
          "Network prefix"
        ],
        "answer": 2,
        "explain": "Address aggregation: Combining prefixes to reduce routing-table size."
      }
    ]
  },
  {
    "title": "Routing Algorithms, OSPF, BGP, and SDN — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: A model of routers as nodes and links as edges.",
        "options": [
          "Hot potato routing",
          "Least-cost path",
          "Routing graph",
          "Poisoned reverse"
        ],
        "answer": 2,
        "explain": "Routing graph: A model of routers as nodes and links as edges."
      },
      {
        "q": "Which term best matches this description: A number representing preference or expense of using a link.",
        "options": [
          "SDN",
          "Link-state routing",
          "Routing loop",
          "Link cost"
        ],
        "answer": 3,
        "explain": "Link cost: A number representing preference or expense of using a link."
      },
      {
        "q": "Which term best matches this description: The path with the lowest total link cost.",
        "options": [
          "Least-cost path",
          "SDN controller",
          "Dijkstra algorithm",
          "Autonomous system"
        ],
        "answer": 0,
        "explain": "Least-cost path: The path with the lowest total link cost."
      },
      {
        "q": "Which term best matches this description: Routing where each router knows network topology and link costs.",
        "options": [
          "OpenFlow",
          "Link-state routing",
          "Link-state advertisement",
          "Intra-AS routing"
        ],
        "answer": 1,
        "explain": "Link-state routing: Routing where each router knows network topology and link costs."
      },
      {
        "q": "Which term best matches this description: A link-state algorithm for computing shortest paths.",
        "options": [
          "Control application",
          "Distance-vector routing",
          "Dijkstra algorithm",
          "Inter-AS routing"
        ],
        "answer": 2,
        "explain": "Dijkstra algorithm: A link-state algorithm for computing shortest paths."
      },
      {
        "q": "Which term best matches this description: Information a router floods about its links and costs.",
        "options": [
          "Routing graph",
          "Bellman-Ford equation",
          "OSPF",
          "Link-state advertisement"
        ],
        "answer": 3,
        "explain": "Link-state advertisement: Information a router floods about its links and costs."
      },
      {
        "q": "Which term best matches this description: Routing where routers exchange distance estimates with neighbors.",
        "options": [
          "Distance-vector routing",
          "Link cost",
          "Count-to-infinity problem",
          "OSPF area"
        ],
        "answer": 0,
        "explain": "Distance-vector routing: Routing where routers exchange distance estimates with neighbors."
      },
      {
        "q": "Which term best matches this description: The recurrence used in distance-vector path computation.",
        "options": [
          "Least-cost path",
          "Bellman-Ford equation",
          "Poisoned reverse",
          "Border router"
        ],
        "answer": 1,
        "explain": "Bellman-Ford equation: The recurrence used in distance-vector path computation."
      },
      {
        "q": "Which term best matches this description: A distance-vector problem where bad news spreads slowly.",
        "options": [
          "Link-state routing",
          "Routing loop",
          "Count-to-infinity problem",
          "Gateway router"
        ],
        "answer": 2,
        "explain": "Count-to-infinity problem: A distance-vector problem where bad news spreads slowly."
      },
      {
        "q": "Which term best matches this description: A technique to reduce certain routing loops.",
        "options": [
          "Dijkstra algorithm",
          "Autonomous system",
          "BGP",
          "Poisoned reverse"
        ],
        "answer": 3,
        "explain": "Poisoned reverse: A technique to reduce certain routing loops."
      },
      {
        "q": "Which term best matches this description: A condition where packets circulate among routers.",
        "options": [
          "Routing loop",
          "Link-state advertisement",
          "Intra-AS routing",
          "eBGP"
        ],
        "answer": 0,
        "explain": "Routing loop: A condition where packets circulate among routers."
      },
      {
        "q": "Which term best matches this description: A network or group of networks under one administrative control.",
        "options": [
          "Distance-vector routing",
          "Autonomous system",
          "Inter-AS routing",
          "iBGP"
        ],
        "answer": 1,
        "explain": "Autonomous system: A network or group of networks under one administrative control."
      },
      {
        "q": "Which term best matches this description: Routing inside one autonomous system.",
        "options": [
          "Bellman-Ford equation",
          "OSPF",
          "Intra-AS routing",
          "BGP route advertisement"
        ],
        "answer": 2,
        "explain": "Intra-AS routing: Routing inside one autonomous system."
      },
      {
        "q": "Which term best matches this description: Routing between autonomous systems.",
        "options": [
          "Count-to-infinity problem",
          "OSPF area",
          "AS-PATH",
          "Inter-AS routing"
        ],
        "answer": 3,
        "explain": "Inter-AS routing: Routing between autonomous systems."
      },
      {
        "q": "Which term best matches this description: Open Shortest Path First, a link-state intra-AS routing protocol.",
        "options": [
          "OSPF",
          "Poisoned reverse",
          "Border router",
          "NEXT-HOP"
        ],
        "answer": 0,
        "explain": "OSPF: Open Shortest Path First, a link-state intra-AS routing protocol."
      },
      {
        "q": "Which term best matches this description: A subdivision used to scale OSPF routing.",
        "options": [
          "Routing loop",
          "OSPF area",
          "Gateway router",
          "BGP policy"
        ],
        "answer": 1,
        "explain": "OSPF area: A subdivision used to scale OSPF routing."
      },
      {
        "q": "Which term best matches this description: A router connecting an AS to other ASes.",
        "options": [
          "Autonomous system",
          "BGP",
          "Border router",
          "Hot potato routing"
        ],
        "answer": 2,
        "explain": "Border router: A router connecting an AS to other ASes."
      },
      {
        "q": "Which term best matches this description: A router that connects to another AS or external network.",
        "options": [
          "Intra-AS routing",
          "eBGP",
          "SDN",
          "Gateway router"
        ],
        "answer": 3,
        "explain": "Gateway router: A router that connects to another AS or external network."
      },
      {
        "q": "Which term best matches this description: Border Gateway Protocol, the Internet inter-AS routing protocol.",
        "options": [
          "BGP",
          "Inter-AS routing",
          "iBGP",
          "SDN controller"
        ],
        "answer": 0,
        "explain": "BGP: Border Gateway Protocol, the Internet inter-AS routing protocol."
      },
      {
        "q": "Which term best matches this description: BGP session between routers in different autonomous systems.",
        "options": [
          "OSPF",
          "eBGP",
          "BGP route advertisement",
          "OpenFlow"
        ],
        "answer": 1,
        "explain": "eBGP: BGP session between routers in different autonomous systems."
      },
      {
        "q": "Which term best matches this description: BGP session between routers inside the same autonomous system.",
        "options": [
          "OSPF area",
          "AS-PATH",
          "iBGP",
          "Control application"
        ],
        "answer": 2,
        "explain": "iBGP: BGP session between routers inside the same autonomous system."
      },
      {
        "q": "Which term best matches this description: A message announcing reachability to a network prefix.",
        "options": [
          "Border router",
          "NEXT-HOP",
          "Routing graph",
          "BGP route advertisement"
        ],
        "answer": 3,
        "explain": "BGP route advertisement: A message announcing reachability to a network prefix."
      },
      {
        "q": "Which term best matches this description: A BGP attribute listing autonomous systems on a path.",
        "options": [
          "AS-PATH",
          "Gateway router",
          "BGP policy",
          "Link cost"
        ],
        "answer": 0,
        "explain": "AS-PATH: A BGP attribute listing autonomous systems on a path."
      },
      {
        "q": "Which term best matches this description: A BGP attribute identifying the next router to reach a prefix.",
        "options": [
          "BGP",
          "NEXT-HOP",
          "Hot potato routing",
          "Least-cost path"
        ],
        "answer": 1,
        "explain": "NEXT-HOP: A BGP attribute identifying the next router to reach a prefix."
      },
      {
        "q": "Which term best matches this description: Rules controlling which routes are accepted, preferred, or advertised.",
        "options": [
          "eBGP",
          "SDN",
          "BGP policy",
          "Link-state routing"
        ],
        "answer": 2,
        "explain": "BGP policy: Rules controlling which routes are accepted, preferred, or advertised."
      },
      {
        "q": "Which term best matches this description: Choosing the closest exit point from an AS.",
        "options": [
          "iBGP",
          "SDN controller",
          "Dijkstra algorithm",
          "Hot potato routing"
        ],
        "answer": 3,
        "explain": "Hot potato routing: Choosing the closest exit point from an AS."
      },
      {
        "q": "Which term best matches this description: Software-Defined Networking, separating control from forwarding.",
        "options": [
          "SDN",
          "BGP route advertisement",
          "OpenFlow",
          "Link-state advertisement"
        ],
        "answer": 0,
        "explain": "SDN: Software-Defined Networking, separating control from forwarding."
      },
      {
        "q": "Which term best matches this description: Software that computes and installs forwarding rules.",
        "options": [
          "AS-PATH",
          "SDN controller",
          "Control application",
          "Distance-vector routing"
        ],
        "answer": 1,
        "explain": "SDN controller: Software that computes and installs forwarding rules."
      },
      {
        "q": "Which term best matches this description: A protocol for controlling flow-table entries in SDN switches.",
        "options": [
          "NEXT-HOP",
          "Routing graph",
          "OpenFlow",
          "Bellman-Ford equation"
        ],
        "answer": 2,
        "explain": "OpenFlow: A protocol for controlling flow-table entries in SDN switches."
      },
      {
        "q": "Which term best matches this description: SDN software that implements routing, access control, or traffic engineering.",
        "options": [
          "BGP policy",
          "Link cost",
          "Count-to-infinity problem",
          "Control application"
        ],
        "answer": 3,
        "explain": "Control application: SDN software that implements routing, access control, or traffic engineering."
      }
    ]
  },
  {
    "title": "Network Management, SNMP, NETCONF, and YANG — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: Monitoring, configuring, controlling, and troubleshooting network systems.",
        "options": [
          "Telemetry",
          "OID",
          "SNMP Trap",
          "Network management"
        ],
        "answer": 3,
        "explain": "Network management: Monitoring, configuring, controlling, and troubleshooting network systems."
      },
      {
        "q": "Which term best matches this description: A system used by administrators to control managed devices.",
        "options": [
          "Managing server",
          "Intent-based management",
          "SNMP",
          "Polling"
        ],
        "answer": 0,
        "explain": "Managing server: A system used by administrators to control managed devices."
      },
      {
        "q": "Which term best matches this description: A router, switch, server, or other network element being monitored.",
        "options": [
          "Network management",
          "Managed device",
          "SNMP manager",
          "Event notification"
        ],
        "answer": 1,
        "explain": "Managed device: A router, switch, server, or other network element being monitored."
      },
      {
        "q": "Which term best matches this description: Software on a managed device that exposes data and actions.",
        "options": [
          "Managing server",
          "SNMP agent",
          "Management agent",
          "Fault management"
        ],
        "answer": 2,
        "explain": "Management agent: Software on a managed device that exposes data and actions."
      },
      {
        "q": "Which term best matches this description: Management Information Base, a structured collection of managed variables.",
        "options": [
          "Managed device",
          "SNMP Get",
          "Configuration management",
          "MIB"
        ],
        "answer": 3,
        "explain": "MIB: Management Information Base, a structured collection of managed variables."
      },
      {
        "q": "Which term best matches this description: Object Identifier, a hierarchical name for a managed object.",
        "options": [
          "OID",
          "Management agent",
          "SNMP Set",
          "Performance management"
        ],
        "answer": 0,
        "explain": "OID: Object Identifier, a hierarchical name for a managed object."
      },
      {
        "q": "Which term best matches this description: Simple Network Management Protocol for device monitoring and control.",
        "options": [
          "MIB",
          "SNMP",
          "SNMP Response",
          "Security management"
        ],
        "answer": 1,
        "explain": "SNMP: Simple Network Management Protocol for device monitoring and control."
      },
      {
        "q": "Which term best matches this description: The system that sends SNMP requests and receives notifications.",
        "options": [
          "OID",
          "SNMP Trap",
          "SNMP manager",
          "Accounting management"
        ],
        "answer": 2,
        "explain": "SNMP manager: The system that sends SNMP requests and receives notifications."
      },
      {
        "q": "Which term best matches this description: The device-side software responding to SNMP operations.",
        "options": [
          "SNMP",
          "Polling",
          "NETCONF",
          "SNMP agent"
        ],
        "answer": 3,
        "explain": "SNMP agent: The device-side software responding to SNMP operations."
      },
      {
        "q": "Which term best matches this description: A request to read a managed object value.",
        "options": [
          "SNMP Get",
          "SNMP manager",
          "Event notification",
          "RPC"
        ],
        "answer": 0,
        "explain": "SNMP Get: A request to read a managed object value."
      },
      {
        "q": "Which term best matches this description: A request to change a managed object value.",
        "options": [
          "SNMP agent",
          "SNMP Set",
          "Fault management",
          "Datastore"
        ],
        "answer": 1,
        "explain": "SNMP Set: A request to change a managed object value."
      },
      {
        "q": "Which term best matches this description: The answer returned by an SNMP agent.",
        "options": [
          "SNMP Get",
          "Configuration management",
          "SNMP Response",
          "Running configuration"
        ],
        "answer": 2,
        "explain": "SNMP Response: The answer returned by an SNMP agent."
      },
      {
        "q": "Which term best matches this description: An unsolicited alert sent by an agent to a manager.",
        "options": [
          "SNMP Set",
          "Performance management",
          "Candidate configuration",
          "SNMP Trap"
        ],
        "answer": 3,
        "explain": "SNMP Trap: An unsolicited alert sent by an agent to a manager."
      },
      {
        "q": "Which term best matches this description: Regularly asking devices for state or counters.",
        "options": [
          "Polling",
          "SNMP Response",
          "Security management",
          "Commit"
        ],
        "answer": 0,
        "explain": "Polling: Regularly asking devices for state or counters."
      },
      {
        "q": "Which term best matches this description: A device-generated alert about a significant condition.",
        "options": [
          "SNMP Trap",
          "Event notification",
          "Accounting management",
          "YANG"
        ],
        "answer": 1,
        "explain": "Event notification: A device-generated alert about a significant condition."
      },
      {
        "q": "Which term best matches this description: Detecting, isolating, and correcting network problems.",
        "options": [
          "Polling",
          "NETCONF",
          "Fault management",
          "YANG module"
        ],
        "answer": 2,
        "explain": "Fault management: Detecting, isolating, and correcting network problems."
      },
      {
        "q": "Which term best matches this description: Maintaining intended device settings.",
        "options": [
          "Event notification",
          "RPC",
          "Telemetry",
          "Configuration management"
        ],
        "answer": 3,
        "explain": "Configuration management: Maintaining intended device settings."
      },
      {
        "q": "Which term best matches this description: Measuring throughput, errors, utilization, and delay.",
        "options": [
          "Performance management",
          "Fault management",
          "Datastore",
          "Intent-based management"
        ],
        "answer": 0,
        "explain": "Performance management: Measuring throughput, errors, utilization, and delay."
      },
      {
        "q": "Which term best matches this description: Controlling access and protecting management systems.",
        "options": [
          "Configuration management",
          "Security management",
          "Running configuration",
          "Network management"
        ],
        "answer": 1,
        "explain": "Security management: Controlling access and protecting management systems."
      },
      {
        "q": "Which term best matches this description: Tracking resource use for billing or analysis.",
        "options": [
          "Performance management",
          "Candidate configuration",
          "Accounting management",
          "Managing server"
        ],
        "answer": 2,
        "explain": "Accounting management: Tracking resource use for billing or analysis."
      },
      {
        "q": "Which term best matches this description: A protocol for installing, manipulating, and deleting device configuration.",
        "options": [
          "Security management",
          "Commit",
          "Managed device",
          "NETCONF"
        ],
        "answer": 3,
        "explain": "NETCONF: A protocol for installing, manipulating, and deleting device configuration."
      },
      {
        "q": "Which term best matches this description: Remote Procedure Call, a request-response method used by NETCONF.",
        "options": [
          "RPC",
          "Accounting management",
          "YANG",
          "Management agent"
        ],
        "answer": 0,
        "explain": "RPC: Remote Procedure Call, a request-response method used by NETCONF."
      },
      {
        "q": "Which term best matches this description: A NETCONF configuration storage area such as running or candidate.",
        "options": [
          "NETCONF",
          "Datastore",
          "YANG module",
          "MIB"
        ],
        "answer": 1,
        "explain": "Datastore: A NETCONF configuration storage area such as running or candidate."
      },
      {
        "q": "Which term best matches this description: The active configuration currently used by a device.",
        "options": [
          "RPC",
          "Telemetry",
          "Running configuration",
          "OID"
        ],
        "answer": 2,
        "explain": "Running configuration: The active configuration currently used by a device."
      },
      {
        "q": "Which term best matches this description: A proposed configuration that can be edited before commit.",
        "options": [
          "Datastore",
          "Intent-based management",
          "SNMP",
          "Candidate configuration"
        ],
        "answer": 3,
        "explain": "Candidate configuration: A proposed configuration that can be edited before commit."
      },
      {
        "q": "Which term best matches this description: A NETCONF operation that applies candidate configuration.",
        "options": [
          "Commit",
          "Running configuration",
          "Network management",
          "SNMP manager"
        ],
        "answer": 0,
        "explain": "Commit: A NETCONF operation that applies candidate configuration."
      },
      {
        "q": "Which term best matches this description: A modeling language for configuration and operational data.",
        "options": [
          "Candidate configuration",
          "YANG",
          "Managing server",
          "SNMP agent"
        ],
        "answer": 1,
        "explain": "YANG: A modeling language for configuration and operational data."
      },
      {
        "q": "Which term best matches this description: A reusable data model defining network configuration structure.",
        "options": [
          "Commit",
          "Managed device",
          "YANG module",
          "SNMP Get"
        ],
        "answer": 2,
        "explain": "YANG module: A reusable data model defining network configuration structure."
      },
      {
        "q": "Which term best matches this description: Streaming or reporting operational data from network devices.",
        "options": [
          "YANG",
          "Management agent",
          "SNMP Set",
          "Telemetry"
        ],
        "answer": 3,
        "explain": "Telemetry: Streaming or reporting operational data from network devices."
      },
      {
        "q": "Which term best matches this description: Managing networks by desired outcomes rather than only low-level commands.",
        "options": [
          "Intent-based management",
          "YANG module",
          "MIB",
          "SNMP Response"
        ],
        "answer": 0,
        "explain": "Intent-based management: Managing networks by desired outcomes rather than only low-level commands."
      }
    ]
  },
  {
    "title": "Data Link Services and Error Detection — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: The layer responsible for transferring frames across one link.",
        "options": [
          "Data link layer",
          "Node",
          "Frame header",
          "Internet checksum"
        ],
        "answer": 0,
        "explain": "Data link layer: The layer responsible for transferring frames across one link."
      },
      {
        "q": "Which term best matches this description: A host, router, switch, or access point connected to a link.",
        "options": [
          "Link",
          "Node",
          "Frame trailer",
          "CRC"
        ],
        "answer": 1,
        "explain": "Node: A host, router, switch, or access point connected to a link."
      },
      {
        "q": "Which term best matches this description: A communication channel between adjacent nodes.",
        "options": [
          "Frame",
          "Error detection",
          "Link",
          "Generator polynomial"
        ],
        "answer": 2,
        "explain": "Link: A communication channel between adjacent nodes."
      },
      {
        "q": "Which term best matches this description: A data link layer unit containing header, payload, and trailer.",
        "options": [
          "Framing",
          "Error correction",
          "Burst error",
          "Frame"
        ],
        "answer": 3,
        "explain": "Frame: A data link layer unit containing header, payload, and trailer."
      },
      {
        "q": "Which term best matches this description: Encapsulating a network-layer datagram inside a link-layer frame.",
        "options": [
          "Framing",
          "MAC address",
          "Parity bit",
          "Flow control"
        ],
        "answer": 0,
        "explain": "Framing: Encapsulating a network-layer datagram inside a link-layer frame."
      },
      {
        "q": "Which term best matches this description: A local link-layer address assigned to a network interface.",
        "options": [
          "Hop-to-hop delivery",
          "MAC address",
          "Two-dimensional parity",
          "Half-duplex"
        ],
        "answer": 1,
        "explain": "MAC address: A local link-layer address assigned to a network interface."
      },
      {
        "q": "Which term best matches this description: Delivery from one node to the next adjacent node.",
        "options": [
          "Packetizing",
          "Checksum",
          "Hop-to-hop delivery",
          "Full-duplex"
        ],
        "answer": 2,
        "explain": "Hop-to-hop delivery: Delivery from one node to the next adjacent node."
      },
      {
        "q": "Which term best matches this description: Dividing and wrapping data for transmission as packets or frames.",
        "options": [
          "Frame header",
          "Internet checksum",
          "Broadcast link",
          "Packetizing"
        ],
        "answer": 3,
        "explain": "Packetizing: Dividing and wrapping data for transmission as packets or frames."
      },
      {
        "q": "Which term best matches this description: Control information placed before the payload.",
        "options": [
          "Frame header",
          "Frame trailer",
          "CRC",
          "Point-to-point link"
        ],
        "answer": 0,
        "explain": "Frame header: Control information placed before the payload."
      },
      {
        "q": "Which term best matches this description: Control information placed after the payload, often for error detection.",
        "options": [
          "Error detection",
          "Frame trailer",
          "Generator polynomial",
          "Multiple access protocol"
        ],
        "answer": 1,
        "explain": "Frame trailer: Control information placed after the payload, often for error detection."
      },
      {
        "q": "Which term best matches this description: Recognizing that transmitted bits were corrupted.",
        "options": [
          "Error correction",
          "Burst error",
          "Error detection",
          "Channel partitioning"
        ],
        "answer": 2,
        "explain": "Error detection: Recognizing that transmitted bits were corrupted."
      },
      {
        "q": "Which term best matches this description: Recovering original data without retransmission.",
        "options": [
          "Parity bit",
          "Flow control",
          "Random access",
          "Error correction"
        ],
        "answer": 3,
        "explain": "Error correction: Recovering original data without retransmission."
      },
      {
        "q": "Which term best matches this description: An extra bit used to make the number of ones even or odd.",
        "options": [
          "Parity bit",
          "Two-dimensional parity",
          "Half-duplex",
          "Taking turns"
        ],
        "answer": 0,
        "explain": "Parity bit: An extra bit used to make the number of ones even or odd."
      },
      {
        "q": "Which term best matches this description: Parity arranged in rows and columns for stronger detection.",
        "options": [
          "Checksum",
          "Two-dimensional parity",
          "Full-duplex",
          "Collision"
        ],
        "answer": 1,
        "explain": "Two-dimensional parity: Parity arranged in rows and columns for stronger detection."
      },
      {
        "q": "Which term best matches this description: An error-detection method using arithmetic sums.",
        "options": [
          "Internet checksum",
          "Broadcast link",
          "Checksum",
          "MAC protocol"
        ],
        "answer": 2,
        "explain": "Checksum: An error-detection method using arithmetic sums."
      },
      {
        "q": "Which term best matches this description: A checksum method used by some Internet protocols.",
        "options": [
          "CRC",
          "Point-to-point link",
          "Data link layer",
          "Internet checksum"
        ],
        "answer": 3,
        "explain": "Internet checksum: A checksum method used by some Internet protocols."
      },
      {
        "q": "Which term best matches this description: Cyclic Redundancy Check, a strong polynomial-based error detector.",
        "options": [
          "CRC",
          "Generator polynomial",
          "Multiple access protocol",
          "Node"
        ],
        "answer": 0,
        "explain": "CRC: Cyclic Redundancy Check, a strong polynomial-based error detector."
      },
      {
        "q": "Which term best matches this description: The divisor pattern used in CRC calculation.",
        "options": [
          "Burst error",
          "Generator polynomial",
          "Channel partitioning",
          "Link"
        ],
        "answer": 1,
        "explain": "Generator polynomial: The divisor pattern used in CRC calculation."
      },
      {
        "q": "Which term best matches this description: A sequence of nearby corrupted bits.",
        "options": [
          "Flow control",
          "Random access",
          "Burst error",
          "Frame"
        ],
        "answer": 2,
        "explain": "Burst error: A sequence of nearby corrupted bits."
      },
      {
        "q": "Which term best matches this description: Preventing a fast sender from overwhelming a receiver.",
        "options": [
          "Half-duplex",
          "Taking turns",
          "Framing",
          "Flow control"
        ],
        "answer": 3,
        "explain": "Flow control: Preventing a fast sender from overwhelming a receiver."
      },
      {
        "q": "Which term best matches this description: Communication where devices take turns sending.",
        "options": [
          "Half-duplex",
          "Full-duplex",
          "Collision",
          "MAC address"
        ],
        "answer": 0,
        "explain": "Half-duplex: Communication where devices take turns sending."
      },
      {
        "q": "Which term best matches this description: Communication where devices can send and receive at the same time.",
        "options": [
          "Broadcast link",
          "Full-duplex",
          "MAC protocol",
          "Hop-to-hop delivery"
        ],
        "answer": 1,
        "explain": "Full-duplex: Communication where devices can send and receive at the same time."
      },
      {
        "q": "Which term best matches this description: A shared link where transmissions can be heard by multiple nodes.",
        "options": [
          "Point-to-point link",
          "Data link layer",
          "Broadcast link",
          "Packetizing"
        ],
        "answer": 2,
        "explain": "Broadcast link: A shared link where transmissions can be heard by multiple nodes."
      },
      {
        "q": "Which term best matches this description: A link connecting exactly two nodes.",
        "options": [
          "Multiple access protocol",
          "Node",
          "Frame header",
          "Point-to-point link"
        ],
        "answer": 3,
        "explain": "Point-to-point link: A link connecting exactly two nodes."
      },
      {
        "q": "Which term best matches this description: Rules for sharing a broadcast medium.",
        "options": [
          "Multiple access protocol",
          "Channel partitioning",
          "Link",
          "Frame trailer"
        ],
        "answer": 0,
        "explain": "Multiple access protocol: Rules for sharing a broadcast medium."
      },
      {
        "q": "Which term best matches this description: Dividing a shared channel by time, frequency, or code.",
        "options": [
          "Random access",
          "Channel partitioning",
          "Frame",
          "Error detection"
        ],
        "answer": 1,
        "explain": "Channel partitioning: Dividing a shared channel by time, frequency, or code."
      },
      {
        "q": "Which term best matches this description: Allowing devices to transmit and recover from collisions.",
        "options": [
          "Taking turns",
          "Framing",
          "Random access",
          "Error correction"
        ],
        "answer": 2,
        "explain": "Random access: Allowing devices to transmit and recover from collisions."
      },
      {
        "q": "Which term best matches this description: A sharing method where nodes transmit by schedule or permission.",
        "options": [
          "Collision",
          "MAC address",
          "Parity bit",
          "Taking turns"
        ],
        "answer": 3,
        "explain": "Taking turns: A sharing method where nodes transmit by schedule or permission."
      },
      {
        "q": "Which term best matches this description: Overlapping transmissions on a shared medium.",
        "options": [
          "Collision",
          "MAC protocol",
          "Hop-to-hop delivery",
          "Two-dimensional parity"
        ],
        "answer": 0,
        "explain": "Collision: Overlapping transmissions on a shared medium."
      },
      {
        "q": "Which term best matches this description: Rules controlling access to the transmission medium.",
        "options": [
          "Data link layer",
          "MAC protocol",
          "Packetizing",
          "Checksum"
        ],
        "answer": 1,
        "explain": "MAC protocol: Rules controlling access to the transmission medium."
      }
    ]
  },
  {
    "title": "LANs, Ethernet, ARP, Switches, and VLANs — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: Local Area Network, connecting devices in a limited area.",
        "options": [
          "Ethernet type field",
          "LAN",
          "CSMA/CD",
          "Flooding"
        ],
        "answer": 1,
        "explain": "LAN: Local Area Network, connecting devices in a limited area."
      },
      {
        "q": "Which term best matches this description: The dominant wired LAN technology.",
        "options": [
          "MAC address",
          "Carrier sense",
          "Ethernet",
          "Filtering"
        ],
        "answer": 2,
        "explain": "Ethernet: The dominant wired LAN technology."
      },
      {
        "q": "Which term best matches this description: A frame format used by Ethernet networks.",
        "options": [
          "Broadcast MAC address",
          "Collision detection",
          "Store-and-forward switch",
          "Ethernet frame"
        ],
        "answer": 3,
        "explain": "Ethernet frame: A frame format used by Ethernet networks."
      },
      {
        "q": "Which term best matches this description: Ethernet bits used to synchronize receiver timing.",
        "options": [
          "Preamble",
          "ARP",
          "Exponential backoff",
          "Cut-through switch"
        ],
        "answer": 0,
        "explain": "Preamble: Ethernet bits used to synchronize receiver timing."
      },
      {
        "q": "Which term best matches this description: A field identifying the payload protocol.",
        "options": [
          "ARP table",
          "Ethernet type field",
          "Switch",
          "Spanning Tree Protocol"
        ],
        "answer": 1,
        "explain": "Ethernet type field: A field identifying the payload protocol."
      },
      {
        "q": "Which term best matches this description: A 48-bit link-layer address used in LAN delivery.",
        "options": [
          "ARP request",
          "Switch forwarding table",
          "MAC address",
          "Broadcast domain"
        ],
        "answer": 2,
        "explain": "MAC address: A 48-bit link-layer address used in LAN delivery."
      },
      {
        "q": "Which term best matches this description: The all-ones MAC address received by all LAN interfaces.",
        "options": [
          "ARP reply",
          "Self-learning",
          "VLAN",
          "Broadcast MAC address"
        ],
        "answer": 3,
        "explain": "Broadcast MAC address: The all-ones MAC address received by all LAN interfaces."
      },
      {
        "q": "Which term best matches this description: Address Resolution Protocol, mapping local IP addresses to MAC addresses.",
        "options": [
          "ARP",
          "CSMA/CD",
          "Flooding",
          "Access port"
        ],
        "answer": 0,
        "explain": "ARP: Address Resolution Protocol, mapping local IP addresses to MAC addresses."
      },
      {
        "q": "Which term best matches this description: A cache of IP-to-MAC mappings.",
        "options": [
          "Carrier sense",
          "ARP table",
          "Filtering",
          "Trunk port"
        ],
        "answer": 1,
        "explain": "ARP table: A cache of IP-to-MAC mappings."
      },
      {
        "q": "Which term best matches this description: A broadcast message asking who has a target IP address.",
        "options": [
          "Collision detection",
          "Store-and-forward switch",
          "ARP request",
          "802.1Q tag"
        ],
        "answer": 2,
        "explain": "ARP request: A broadcast message asking who has a target IP address."
      },
      {
        "q": "Which term best matches this description: A response containing the target MAC address.",
        "options": [
          "Exponential backoff",
          "Cut-through switch",
          "Inter-VLAN routing",
          "ARP reply"
        ],
        "answer": 3,
        "explain": "ARP reply: A response containing the target MAC address."
      },
      {
        "q": "Which term best matches this description: Carrier Sense Multiple Access with Collision Detection for classic Ethernet.",
        "options": [
          "CSMA/CD",
          "Switch",
          "Spanning Tree Protocol",
          "Port isolation"
        ],
        "answer": 0,
        "explain": "CSMA/CD: Carrier Sense Multiple Access with Collision Detection for classic Ethernet."
      },
      {
        "q": "Which term best matches this description: Listening before transmitting on a shared medium.",
        "options": [
          "Switch forwarding table",
          "Carrier sense",
          "Broadcast domain",
          "LAN"
        ],
        "answer": 1,
        "explain": "Carrier sense: Listening before transmitting on a shared medium."
      },
      {
        "q": "Which term best matches this description: Detecting overlapping transmissions in shared Ethernet.",
        "options": [
          "Self-learning",
          "VLAN",
          "Collision detection",
          "Ethernet"
        ],
        "answer": 2,
        "explain": "Collision detection: Detecting overlapping transmissions in shared Ethernet."
      },
      {
        "q": "Which term best matches this description: Increasing random wait time after repeated collisions.",
        "options": [
          "Flooding",
          "Access port",
          "Ethernet frame",
          "Exponential backoff"
        ],
        "answer": 3,
        "explain": "Exponential backoff: Increasing random wait time after repeated collisions."
      },
      {
        "q": "Which term best matches this description: A link-layer device that forwards frames by MAC address.",
        "options": [
          "Switch",
          "Filtering",
          "Trunk port",
          "Preamble"
        ],
        "answer": 0,
        "explain": "Switch: A link-layer device that forwards frames by MAC address."
      },
      {
        "q": "Which term best matches this description: A table mapping MAC addresses to switch ports.",
        "options": [
          "Store-and-forward switch",
          "Switch forwarding table",
          "802.1Q tag",
          "Ethernet type field"
        ],
        "answer": 1,
        "explain": "Switch forwarding table: A table mapping MAC addresses to switch ports."
      },
      {
        "q": "Which term best matches this description: A switch learning MAC locations from source addresses.",
        "options": [
          "Cut-through switch",
          "Inter-VLAN routing",
          "Self-learning",
          "MAC address"
        ],
        "answer": 2,
        "explain": "Self-learning: A switch learning MAC locations from source addresses."
      },
      {
        "q": "Which term best matches this description: Sending a frame out multiple ports when destination is unknown.",
        "options": [
          "Spanning Tree Protocol",
          "Port isolation",
          "Broadcast MAC address",
          "Flooding"
        ],
        "answer": 3,
        "explain": "Flooding: Sending a frame out multiple ports when destination is unknown."
      },
      {
        "q": "Which term best matches this description: Not forwarding a frame where it does not need to go.",
        "options": [
          "Filtering",
          "Broadcast domain",
          "LAN",
          "ARP"
        ],
        "answer": 0,
        "explain": "Filtering: Not forwarding a frame where it does not need to go."
      },
      {
        "q": "Which term best matches this description: A switch that receives the whole frame before forwarding.",
        "options": [
          "VLAN",
          "Store-and-forward switch",
          "Ethernet",
          "ARP table"
        ],
        "answer": 1,
        "explain": "Store-and-forward switch: A switch that receives the whole frame before forwarding."
      },
      {
        "q": "Which term best matches this description: A switch that begins forwarding before receiving the whole frame.",
        "options": [
          "Access port",
          "Ethernet frame",
          "Cut-through switch",
          "ARP request"
        ],
        "answer": 2,
        "explain": "Cut-through switch: A switch that begins forwarding before receiving the whole frame."
      },
      {
        "q": "Which term best matches this description: A protocol that prevents switching loops.",
        "options": [
          "Trunk port",
          "Preamble",
          "ARP reply",
          "Spanning Tree Protocol"
        ],
        "answer": 3,
        "explain": "Spanning Tree Protocol: A protocol that prevents switching loops."
      },
      {
        "q": "Which term best matches this description: The set of devices that receive a broadcast frame.",
        "options": [
          "Broadcast domain",
          "802.1Q tag",
          "Ethernet type field",
          "CSMA/CD"
        ],
        "answer": 0,
        "explain": "Broadcast domain: The set of devices that receive a broadcast frame."
      },
      {
        "q": "Which term best matches this description: Virtual LAN, a logical LAN separated from others on the same hardware.",
        "options": [
          "Inter-VLAN routing",
          "VLAN",
          "MAC address",
          "Carrier sense"
        ],
        "answer": 1,
        "explain": "VLAN: Virtual LAN, a logical LAN separated from others on the same hardware."
      },
      {
        "q": "Which term best matches this description: A switch port assigned to one VLAN.",
        "options": [
          "Port isolation",
          "Broadcast MAC address",
          "Access port",
          "Collision detection"
        ],
        "answer": 2,
        "explain": "Access port: A switch port assigned to one VLAN."
      },
      {
        "q": "Which term best matches this description: A switch port carrying traffic for multiple VLANs.",
        "options": [
          "LAN",
          "ARP",
          "Exponential backoff",
          "Trunk port"
        ],
        "answer": 3,
        "explain": "Trunk port: A switch port carrying traffic for multiple VLANs."
      },
      {
        "q": "Which term best matches this description: A VLAN tag inserted into Ethernet frames.",
        "options": [
          "802.1Q tag",
          "Ethernet",
          "ARP table",
          "Switch"
        ],
        "answer": 0,
        "explain": "802.1Q tag: A VLAN tag inserted into Ethernet frames."
      },
      {
        "q": "Which term best matches this description: Routing traffic between VLANs.",
        "options": [
          "Ethernet frame",
          "Inter-VLAN routing",
          "ARP request",
          "Switch forwarding table"
        ],
        "answer": 1,
        "explain": "Inter-VLAN routing: Routing traffic between VLANs."
      },
      {
        "q": "Which term best matches this description: Switching configuration that limits which ports can communicate.",
        "options": [
          "Preamble",
          "ARP reply",
          "Port isolation",
          "Self-learning"
        ],
        "answer": 2,
        "explain": "Port isolation: Switching configuration that limits which ports can communicate."
      }
    ]
  },
  {
    "title": "Link Virtualization, MPLS, and Data Center Networking — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: Creating logical link behavior over shared physical infrastructure.",
        "options": [
          "Label swapping",
          "Tunneling",
          "Link virtualization",
          "Load balancing"
        ],
        "answer": 2,
        "explain": "Link virtualization: Creating logical link behavior over shared physical infrastructure."
      },
      {
        "q": "Which term best matches this description: Multiprotocol Label Switching, forwarding packets using short labels.",
        "options": [
          "Label forwarding table",
          "Overlay network",
          "ECMP",
          "MPLS"
        ],
        "answer": 3,
        "explain": "MPLS: Multiprotocol Label Switching, forwarding packets using short labels."
      },
      {
        "q": "Which term best matches this description: A fixed-length identifier used by MPLS forwarding.",
        "options": [
          "Label",
          "Label switched path",
          "Underlay network",
          "Virtual machine"
        ],
        "answer": 0,
        "explain": "Label: A fixed-length identifier used by MPLS forwarding."
      },
      {
        "q": "Which term best matches this description: A small header inserted between link-layer and network-layer headers.",
        "options": [
          "Traffic engineering",
          "MPLS header",
          "Data center network",
          "Container"
        ],
        "answer": 1,
        "explain": "MPLS header: A small header inserted between link-layer and network-layer headers."
      },
      {
        "q": "Which term best matches this description: An MPLS-capable router that forwards based on labels.",
        "options": [
          "Fast reroute",
          "Top-of-rack switch",
          "Label switched router",
          "Network virtualization"
        ],
        "answer": 2,
        "explain": "Label switched router: An MPLS-capable router that forwards based on labels."
      },
      {
        "q": "Which term best matches this description: The MPLS edge router that adds the first label.",
        "options": [
          "MPLS VPN",
          "Leaf-spine topology",
          "VXLAN",
          "Ingress router"
        ],
        "answer": 3,
        "explain": "Ingress router: The MPLS edge router that adds the first label."
      },
      {
        "q": "Which term best matches this description: The MPLS edge router that removes the label.",
        "options": [
          "Egress router",
          "Virtual circuit",
          "Bisection bandwidth",
          "Service chaining"
        ],
        "answer": 0,
        "explain": "Egress router: The MPLS edge router that removes the label."
      },
      {
        "q": "Which term best matches this description: Replacing an incoming MPLS label with an outgoing label.",
        "options": [
          "Tunneling",
          "Label swapping",
          "Load balancing",
          "Middlebox"
        ],
        "answer": 1,
        "explain": "Label swapping: Replacing an incoming MPLS label with an outgoing label."
      },
      {
        "q": "Which term best matches this description: A table mapping incoming labels to output labels and interfaces.",
        "options": [
          "Overlay network",
          "ECMP",
          "Label forwarding table",
          "Tenant isolation"
        ],
        "answer": 2,
        "explain": "Label forwarding table: A table mapping incoming labels to output labels and interfaces."
      },
      {
        "q": "Which term best matches this description: A path followed by MPLS-labeled packets.",
        "options": [
          "Underlay network",
          "Virtual machine",
          "Link virtualization",
          "Label switched path"
        ],
        "answer": 3,
        "explain": "Label switched path: A path followed by MPLS-labeled packets."
      },
      {
        "q": "Which term best matches this description: Choosing routes to meet performance or utilization goals.",
        "options": [
          "Traffic engineering",
          "Data center network",
          "Container",
          "MPLS"
        ],
        "answer": 0,
        "explain": "Traffic engineering: Choosing routes to meet performance or utilization goals."
      },
      {
        "q": "Which term best matches this description: Quickly moving traffic around a failure.",
        "options": [
          "Top-of-rack switch",
          "Fast reroute",
          "Network virtualization",
          "Label"
        ],
        "answer": 1,
        "explain": "Fast reroute: Quickly moving traffic around a failure."
      },
      {
        "q": "Which term best matches this description: Using MPLS to separate customer traffic over a provider network.",
        "options": [
          "Leaf-spine topology",
          "VXLAN",
          "MPLS VPN",
          "MPLS header"
        ],
        "answer": 2,
        "explain": "MPLS VPN: Using MPLS to separate customer traffic over a provider network."
      },
      {
        "q": "Which term best matches this description: A logical path with state in network devices.",
        "options": [
          "Bisection bandwidth",
          "Service chaining",
          "Label switched router",
          "Virtual circuit"
        ],
        "answer": 3,
        "explain": "Virtual circuit: A logical path with state in network devices."
      },
      {
        "q": "Which term best matches this description: Encapsulating traffic inside another protocol or label path.",
        "options": [
          "Tunneling",
          "Load balancing",
          "Middlebox",
          "Ingress router"
        ],
        "answer": 0,
        "explain": "Tunneling: Encapsulating traffic inside another protocol or label path."
      },
      {
        "q": "Which term best matches this description: A virtual network built on top of another network.",
        "options": [
          "ECMP",
          "Overlay network",
          "Tenant isolation",
          "Egress router"
        ],
        "answer": 1,
        "explain": "Overlay network: A virtual network built on top of another network."
      },
      {
        "q": "Which term best matches this description: The physical or base network carrying overlays.",
        "options": [
          "Virtual machine",
          "Link virtualization",
          "Underlay network",
          "Label swapping"
        ],
        "answer": 2,
        "explain": "Underlay network: The physical or base network carrying overlays."
      },
      {
        "q": "Which term best matches this description: A network connecting large numbers of servers and storage systems.",
        "options": [
          "Container",
          "MPLS",
          "Label forwarding table",
          "Data center network"
        ],
        "answer": 3,
        "explain": "Data center network: A network connecting large numbers of servers and storage systems."
      },
      {
        "q": "Which term best matches this description: A switch placed near servers in a rack.",
        "options": [
          "Top-of-rack switch",
          "Network virtualization",
          "Label",
          "Label switched path"
        ],
        "answer": 0,
        "explain": "Top-of-rack switch: A switch placed near servers in a rack."
      },
      {
        "q": "Which term best matches this description: A data-center design with access leaf switches and spine switches.",
        "options": [
          "VXLAN",
          "Leaf-spine topology",
          "MPLS header",
          "Traffic engineering"
        ],
        "answer": 1,
        "explain": "Leaf-spine topology: A data-center design with access leaf switches and spine switches."
      },
      {
        "q": "Which term best matches this description: The capacity across a cut dividing a network into two parts.",
        "options": [
          "Service chaining",
          "Label switched router",
          "Bisection bandwidth",
          "Fast reroute"
        ],
        "answer": 2,
        "explain": "Bisection bandwidth: The capacity across a cut dividing a network into two parts."
      },
      {
        "q": "Which term best matches this description: Distributing traffic across multiple paths or servers.",
        "options": [
          "Middlebox",
          "Ingress router",
          "MPLS VPN",
          "Load balancing"
        ],
        "answer": 3,
        "explain": "Load balancing: Distributing traffic across multiple paths or servers."
      },
      {
        "q": "Which term best matches this description: Equal-Cost Multi-Path routing across multiple equal paths.",
        "options": [
          "ECMP",
          "Tenant isolation",
          "Egress router",
          "Virtual circuit"
        ],
        "answer": 0,
        "explain": "ECMP: Equal-Cost Multi-Path routing across multiple equal paths."
      },
      {
        "q": "Which term best matches this description: A software-defined computer running on shared hardware.",
        "options": [
          "Link virtualization",
          "Virtual machine",
          "Label swapping",
          "Tunneling"
        ],
        "answer": 1,
        "explain": "Virtual machine: A software-defined computer running on shared hardware."
      },
      {
        "q": "Which term best matches this description: A lightweight isolated application runtime.",
        "options": [
          "MPLS",
          "Label forwarding table",
          "Container",
          "Overlay network"
        ],
        "answer": 2,
        "explain": "Container: A lightweight isolated application runtime."
      },
      {
        "q": "Which term best matches this description: Creating logical networks independent of physical topology.",
        "options": [
          "Label",
          "Label switched path",
          "Underlay network",
          "Network virtualization"
        ],
        "answer": 3,
        "explain": "Network virtualization: Creating logical networks independent of physical topology."
      },
      {
        "q": "Which term best matches this description: A common overlay technology for virtualized Layer 2 networks.",
        "options": [
          "VXLAN",
          "MPLS header",
          "Traffic engineering",
          "Data center network"
        ],
        "answer": 0,
        "explain": "VXLAN: A common overlay technology for virtualized Layer 2 networks."
      },
      {
        "q": "Which term best matches this description: Sending traffic through an ordered set of network functions.",
        "options": [
          "Label switched router",
          "Service chaining",
          "Fast reroute",
          "Top-of-rack switch"
        ],
        "answer": 1,
        "explain": "Service chaining: Sending traffic through an ordered set of network functions."
      },
      {
        "q": "Which term best matches this description: A device or service such as firewall, NAT, proxy, or load balancer.",
        "options": [
          "Ingress router",
          "MPLS VPN",
          "Middlebox",
          "Leaf-spine topology"
        ],
        "answer": 2,
        "explain": "Middlebox: A device or service such as firewall, NAT, proxy, or load balancer."
      },
      {
        "q": "Which term best matches this description: Keeping different customers or applications separated in shared infrastructure.",
        "options": [
          "Egress router",
          "Virtual circuit",
          "Bisection bandwidth",
          "Tenant isolation"
        ],
        "answer": 3,
        "explain": "Tenant isolation: Keeping different customers or applications separated in shared infrastructure."
      }
    ]
  },
  {
    "title": "Wireless Networks and WiFi — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: A device communicating over a wireless link.",
        "options": [
          "Bit error rate",
          "Beacon frame",
          "CTS",
          "Wireless host"
        ],
        "answer": 3,
        "explain": "Wireless host: A device communicating over a wireless link."
      },
      {
        "q": "Which term best matches this description: A wireless access point connecting hosts to network infrastructure.",
        "options": [
          "Base station",
          "802.11",
          "CSMA/CA",
          "NAV"
        ],
        "answer": 0,
        "explain": "Base station: A wireless access point connecting hosts to network infrastructure."
      },
      {
        "q": "Which term best matches this description: A WiFi base station for wireless LANs.",
        "options": [
          "BSS",
          "Access point",
          "Collision avoidance",
          "Roaming"
        ],
        "answer": 1,
        "explain": "Access point: A WiFi base station for wireless LANs."
      },
      {
        "q": "Which term best matches this description: Wireless mode where hosts connect through an access point.",
        "options": [
          "SSID",
          "Random backoff",
          "Infrastructure mode",
          "WiFi channel"
        ],
        "answer": 2,
        "explain": "Infrastructure mode: Wireless mode where hosts connect through an access point."
      },
      {
        "q": "Which term best matches this description: Wireless mode where hosts communicate directly without infrastructure.",
        "options": [
          "Association",
          "Link-layer ACK",
          "MIMO",
          "Ad hoc mode"
        ],
        "answer": 3,
        "explain": "Ad hoc mode: Wireless mode where hosts communicate directly without infrastructure."
      },
      {
        "q": "Which term best matches this description: A radio connection between wireless nodes.",
        "options": [
          "Wireless link",
          "Passive scanning",
          "Hidden terminal problem",
          "802.11ax"
        ],
        "answer": 0,
        "explain": "Wireless link: A radio connection between wireless nodes."
      },
      {
        "q": "Which term best matches this description: Signal weakening as distance or obstacles increase.",
        "options": [
          "Active scanning",
          "Signal attenuation",
          "RTS",
          "Wireless host"
        ],
        "answer": 1,
        "explain": "Signal attenuation: Signal weakening as distance or obstacles increase."
      },
      {
        "q": "Which term best matches this description: Disruption caused by other transmissions or noise.",
        "options": [
          "Beacon frame",
          "CTS",
          "Interference",
          "Base station"
        ],
        "answer": 2,
        "explain": "Interference: Disruption caused by other transmissions or noise."
      },
      {
        "q": "Which term best matches this description: Radio signals taking multiple reflected paths.",
        "options": [
          "CSMA/CA",
          "NAV",
          "Access point",
          "Multipath propagation"
        ],
        "answer": 3,
        "explain": "Multipath propagation: Radio signals taking multiple reflected paths."
      },
      {
        "q": "Which term best matches this description: Signal-to-noise ratio, comparing signal strength to noise.",
        "options": [
          "SNR",
          "Collision avoidance",
          "Roaming",
          "Infrastructure mode"
        ],
        "answer": 0,
        "explain": "SNR: Signal-to-noise ratio, comparing signal strength to noise."
      },
      {
        "q": "Which term best matches this description: The fraction of transmitted bits received incorrectly.",
        "options": [
          "Random backoff",
          "Bit error rate",
          "WiFi channel",
          "Ad hoc mode"
        ],
        "answer": 1,
        "explain": "Bit error rate: The fraction of transmitted bits received incorrectly."
      },
      {
        "q": "Which term best matches this description: The IEEE family of WiFi standards.",
        "options": [
          "Link-layer ACK",
          "MIMO",
          "802.11",
          "Wireless link"
        ],
        "answer": 2,
        "explain": "802.11: The IEEE family of WiFi standards."
      },
      {
        "q": "Which term best matches this description: Basic Service Set, a WiFi cell with stations and often an AP.",
        "options": [
          "Hidden terminal problem",
          "802.11ax",
          "Signal attenuation",
          "BSS"
        ],
        "answer": 3,
        "explain": "BSS: Basic Service Set, a WiFi cell with stations and often an AP."
      },
      {
        "q": "Which term best matches this description: The network name advertised by a WiFi access point.",
        "options": [
          "SSID",
          "RTS",
          "Wireless host",
          "Interference"
        ],
        "answer": 0,
        "explain": "SSID: The network name advertised by a WiFi access point."
      },
      {
        "q": "Which term best matches this description: The process of joining a WiFi access point.",
        "options": [
          "CTS",
          "Association",
          "Base station",
          "Multipath propagation"
        ],
        "answer": 1,
        "explain": "Association: The process of joining a WiFi access point."
      },
      {
        "q": "Which term best matches this description: Discovering WiFi networks by listening for beacon frames.",
        "options": [
          "NAV",
          "Access point",
          "Passive scanning",
          "SNR"
        ],
        "answer": 2,
        "explain": "Passive scanning: Discovering WiFi networks by listening for beacon frames."
      },
      {
        "q": "Which term best matches this description: Discovering WiFi networks by sending probe requests.",
        "options": [
          "Roaming",
          "Infrastructure mode",
          "Bit error rate",
          "Active scanning"
        ],
        "answer": 3,
        "explain": "Active scanning: Discovering WiFi networks by sending probe requests."
      },
      {
        "q": "Which term best matches this description: An AP frame announcing network identity and capabilities.",
        "options": [
          "Beacon frame",
          "WiFi channel",
          "Ad hoc mode",
          "802.11"
        ],
        "answer": 0,
        "explain": "Beacon frame: An AP frame announcing network identity and capabilities."
      },
      {
        "q": "Which term best matches this description: Carrier Sense Multiple Access with Collision Avoidance.",
        "options": [
          "MIMO",
          "CSMA/CA",
          "Wireless link",
          "BSS"
        ],
        "answer": 1,
        "explain": "CSMA/CA: Carrier Sense Multiple Access with Collision Avoidance."
      },
      {
        "q": "Which term best matches this description: Trying to reduce collisions before they occur.",
        "options": [
          "802.11ax",
          "Signal attenuation",
          "Collision avoidance",
          "SSID"
        ],
        "answer": 2,
        "explain": "Collision avoidance: Trying to reduce collisions before they occur."
      },
      {
        "q": "Which term best matches this description: Waiting a random time before transmitting on a shared medium.",
        "options": [
          "Wireless host",
          "Interference",
          "Association",
          "Random backoff"
        ],
        "answer": 3,
        "explain": "Random backoff: Waiting a random time before transmitting on a shared medium."
      },
      {
        "q": "Which term best matches this description: An acknowledgment for a WiFi frame.",
        "options": [
          "Link-layer ACK",
          "Base station",
          "Multipath propagation",
          "Passive scanning"
        ],
        "answer": 0,
        "explain": "Link-layer ACK: An acknowledgment for a WiFi frame."
      },
      {
        "q": "Which term best matches this description: When two stations cannot hear each other but collide at an AP.",
        "options": [
          "Access point",
          "Hidden terminal problem",
          "SNR",
          "Active scanning"
        ],
        "answer": 1,
        "explain": "Hidden terminal problem: When two stations cannot hear each other but collide at an AP."
      },
      {
        "q": "Which term best matches this description: Request To Send, a control frame used to reserve the medium.",
        "options": [
          "Infrastructure mode",
          "Bit error rate",
          "RTS",
          "Beacon frame"
        ],
        "answer": 2,
        "explain": "RTS: Request To Send, a control frame used to reserve the medium."
      },
      {
        "q": "Which term best matches this description: Clear To Send, a control frame granting transmission.",
        "options": [
          "Ad hoc mode",
          "802.11",
          "CSMA/CA",
          "CTS"
        ],
        "answer": 3,
        "explain": "CTS: Clear To Send, a control frame granting transmission."
      },
      {
        "q": "Which term best matches this description: Network Allocation Vector, virtual carrier-sense timer in WiFi.",
        "options": [
          "NAV",
          "Wireless link",
          "BSS",
          "Collision avoidance"
        ],
        "answer": 0,
        "explain": "NAV: Network Allocation Vector, virtual carrier-sense timer in WiFi."
      },
      {
        "q": "Which term best matches this description: Moving between access points while maintaining connectivity.",
        "options": [
          "Signal attenuation",
          "Roaming",
          "SSID",
          "Random backoff"
        ],
        "answer": 1,
        "explain": "Roaming: Moving between access points while maintaining connectivity."
      },
      {
        "q": "Which term best matches this description: A frequency range used for wireless communication.",
        "options": [
          "Interference",
          "Association",
          "WiFi channel",
          "Link-layer ACK"
        ],
        "answer": 2,
        "explain": "WiFi channel: A frequency range used for wireless communication."
      },
      {
        "q": "Which term best matches this description: Multiple-input multiple-output antenna technology.",
        "options": [
          "Multipath propagation",
          "Passive scanning",
          "Hidden terminal problem",
          "MIMO"
        ],
        "answer": 3,
        "explain": "MIMO: Multiple-input multiple-output antenna technology."
      },
      {
        "q": "Which term best matches this description: WiFi 6, an 802.11 standard designed for efficiency and capacity.",
        "options": [
          "802.11ax",
          "SNR",
          "Active scanning",
          "RTS"
        ],
        "answer": 0,
        "explain": "802.11ax: WiFi 6, an 802.11 standard designed for efficiency and capacity."
      }
    ]
  },
  {
    "title": "Mobile Networks, 4G/5G, Roaming, and Handoffs — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: A network designed to support users moving between attachment points.",
        "options": [
          "Mobile network",
          "Serving gateway",
          "Soft handoff",
          "Care-of address"
        ],
        "answer": 0,
        "explain": "Mobile network: A network designed to support users moving between attachment points."
      },
      {
        "q": "Which term best matches this description: A mobile network divided into geographic cells.",
        "options": [
          "PDN gateway",
          "Cellular network",
          "Roaming",
          "Triangular routing"
        ],
        "answer": 1,
        "explain": "Cellular network: A mobile network divided into geographic cells."
      },
      {
        "q": "Which term best matches this description: A coverage area served by a base station.",
        "options": [
          "HSS",
          "Home network",
          "Cell",
          "Mobility impact"
        ],
        "answer": 2,
        "explain": "Cell: A coverage area served by a base station."
      },
      {
        "q": "Which term best matches this description: Cellular radio equipment connecting devices to the provider network.",
        "options": [
          "Attach procedure",
          "Visited network",
          "Mobile network",
          "Base station"
        ],
        "answer": 3,
        "explain": "Base station: Cellular radio equipment connecting devices to the provider network."
      },
      {
        "q": "Which term best matches this description: A mobile device such as a phone or cellular modem.",
        "options": [
          "User equipment",
          "Bearer",
          "Mobile IP",
          "Cellular network"
        ],
        "answer": 0,
        "explain": "User equipment: A mobile device such as a phone or cellular modem."
      },
      {
        "q": "Which term best matches this description: Subscriber Identity Module used for subscriber identity and authentication.",
        "options": [
          "Handoff",
          "SIM",
          "Home agent",
          "Cell"
        ],
        "answer": 1,
        "explain": "SIM: Subscriber Identity Module used for subscriber identity and authentication."
      },
      {
        "q": "Which term best matches this description: International Mobile Subscriber Identity stored with subscriber credentials.",
        "options": [
          "Hard handoff",
          "Foreign agent",
          "IMSI",
          "Base station"
        ],
        "answer": 2,
        "explain": "IMSI: International Mobile Subscriber Identity stored with subscriber credentials."
      },
      {
        "q": "Which term best matches this description: Fourth-generation cellular architecture based on IP networking.",
        "options": [
          "Soft handoff",
          "Care-of address",
          "User equipment",
          "4G LTE"
        ],
        "answer": 3,
        "explain": "4G LTE: Fourth-generation cellular architecture based on IP networking."
      },
      {
        "q": "Which term best matches this description: Fifth-generation mobile architecture with enhanced bandwidth and flexibility.",
        "options": [
          "5G",
          "Roaming",
          "Triangular routing",
          "SIM"
        ],
        "answer": 0,
        "explain": "5G: Fifth-generation mobile architecture with enhanced bandwidth and flexibility."
      },
      {
        "q": "Which term best matches this description: The part of a cellular system handling radio communication.",
        "options": [
          "Home network",
          "Radio access network",
          "Mobility impact",
          "IMSI"
        ],
        "answer": 1,
        "explain": "Radio access network: The part of a cellular system handling radio communication."
      },
      {
        "q": "Which term best matches this description: The provider network handling mobility, authentication, and Internet access.",
        "options": [
          "Visited network",
          "Mobile network",
          "Core network",
          "4G LTE"
        ],
        "answer": 2,
        "explain": "Core network: The provider network handling mobility, authentication, and Internet access."
      },
      {
        "q": "Which term best matches this description: Evolved Packet Core, the LTE core network.",
        "options": [
          "Mobile IP",
          "Cellular network",
          "5G",
          "EPC"
        ],
        "answer": 3,
        "explain": "EPC: Evolved Packet Core, the LTE core network."
      },
      {
        "q": "Which term best matches this description: Mobility Management Entity, an LTE control-plane component.",
        "options": [
          "MME",
          "Home agent",
          "Cell",
          "Radio access network"
        ],
        "answer": 0,
        "explain": "MME: Mobility Management Entity, an LTE control-plane component."
      },
      {
        "q": "Which term best matches this description: LTE component forwarding user data within the carrier network.",
        "options": [
          "Foreign agent",
          "Serving gateway",
          "Base station",
          "Core network"
        ],
        "answer": 1,
        "explain": "Serving gateway: LTE component forwarding user data within the carrier network."
      },
      {
        "q": "Which term best matches this description: LTE component connecting user traffic to external packet networks.",
        "options": [
          "Care-of address",
          "User equipment",
          "PDN gateway",
          "EPC"
        ],
        "answer": 2,
        "explain": "PDN gateway: LTE component connecting user traffic to external packet networks."
      },
      {
        "q": "Which term best matches this description: Home Subscriber Server storing subscriber data.",
        "options": [
          "Triangular routing",
          "SIM",
          "MME",
          "HSS"
        ],
        "answer": 3,
        "explain": "HSS: Home Subscriber Server storing subscriber data."
      },
      {
        "q": "Which term best matches this description: The process of joining and authenticating to a cellular network.",
        "options": [
          "Attach procedure",
          "Mobility impact",
          "IMSI",
          "Serving gateway"
        ],
        "answer": 0,
        "explain": "Attach procedure: The process of joining and authenticating to a cellular network."
      },
      {
        "q": "Which term best matches this description: A logical data path with specific service properties.",
        "options": [
          "Mobile network",
          "Bearer",
          "4G LTE",
          "PDN gateway"
        ],
        "answer": 1,
        "explain": "Bearer: A logical data path with specific service properties."
      },
      {
        "q": "Which term best matches this description: Moving an active connection from one base station to another.",
        "options": [
          "Cellular network",
          "5G",
          "Handoff",
          "HSS"
        ],
        "answer": 2,
        "explain": "Handoff: Moving an active connection from one base station to another."
      },
      {
        "q": "Which term best matches this description: Breaking the old connection before or while making the new one.",
        "options": [
          "Cell",
          "Radio access network",
          "Attach procedure",
          "Hard handoff"
        ],
        "answer": 3,
        "explain": "Hard handoff: Breaking the old connection before or while making the new one."
      },
      {
        "q": "Which term best matches this description: Temporarily maintaining more than one radio connection.",
        "options": [
          "Soft handoff",
          "Base station",
          "Core network",
          "Bearer"
        ],
        "answer": 0,
        "explain": "Soft handoff: Temporarily maintaining more than one radio connection."
      },
      {
        "q": "Which term best matches this description: Service access through a visited network outside the home provider.",
        "options": [
          "User equipment",
          "Roaming",
          "EPC",
          "Handoff"
        ],
        "answer": 1,
        "explain": "Roaming: Service access through a visited network outside the home provider."
      },
      {
        "q": "Which term best matches this description: The subscriber's primary provider network.",
        "options": [
          "SIM",
          "MME",
          "Home network",
          "Hard handoff"
        ],
        "answer": 2,
        "explain": "Home network: The subscriber's primary provider network."
      },
      {
        "q": "Which term best matches this description: A provider network serving a roaming user.",
        "options": [
          "IMSI",
          "Serving gateway",
          "Soft handoff",
          "Visited network"
        ],
        "answer": 3,
        "explain": "Visited network: A provider network serving a roaming user."
      },
      {
        "q": "Which term best matches this description: A protocol supporting mobility while keeping a stable home address.",
        "options": [
          "Mobile IP",
          "4G LTE",
          "PDN gateway",
          "Roaming"
        ],
        "answer": 0,
        "explain": "Mobile IP: A protocol supporting mobility while keeping a stable home address."
      },
      {
        "q": "Which term best matches this description: Mobile IP entity that forwards packets to a mobile node.",
        "options": [
          "5G",
          "Home agent",
          "HSS",
          "Home network"
        ],
        "answer": 1,
        "explain": "Home agent: Mobile IP entity that forwards packets to a mobile node."
      },
      {
        "q": "Which term best matches this description: Mobile IP entity in a visited network assisting mobile nodes.",
        "options": [
          "Radio access network",
          "Attach procedure",
          "Foreign agent",
          "Visited network"
        ],
        "answer": 2,
        "explain": "Foreign agent: Mobile IP entity in a visited network assisting mobile nodes."
      },
      {
        "q": "Which term best matches this description: A temporary address representing a mobile node's current location.",
        "options": [
          "Core network",
          "Bearer",
          "Mobile IP",
          "Care-of address"
        ],
        "answer": 3,
        "explain": "Care-of address: A temporary address representing a mobile node's current location."
      },
      {
        "q": "Which term best matches this description: Mobile IP path where packets go through the home agent before the mobile node.",
        "options": [
          "Triangular routing",
          "EPC",
          "Handoff",
          "Home agent"
        ],
        "answer": 0,
        "explain": "Triangular routing: Mobile IP path where packets go through the home agent before the mobile node."
      },
      {
        "q": "Which term best matches this description: Effects of movement on delay, loss, TCP performance, and application continuity.",
        "options": [
          "MME",
          "Mobility impact",
          "Hard handoff",
          "Foreign agent"
        ],
        "answer": 1,
        "explain": "Mobility impact: Effects of movement on delay, loss, TCP performance, and application continuity."
      }
    ]
  },
  {
    "title": "Security Foundations, Cryptography, and Authentication — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: Keeping message contents hidden from unauthorized parties.",
        "options": [
          "Public key",
          "Confidentiality",
          "Certificate authority",
          "Replay attack"
        ],
        "answer": 1,
        "explain": "Confidentiality: Keeping message contents hidden from unauthorized parties."
      },
      {
        "q": "Which term best matches this description: Verifying that an entity is who it claims to be.",
        "options": [
          "Private key",
          "Nonce",
          "Authentication",
          "Man-in-the-middle attack"
        ],
        "answer": 2,
        "explain": "Authentication: Verifying that an entity is who it claims to be."
      },
      {
        "q": "Which term best matches this description: Assurance that a message was not changed undetected.",
        "options": [
          "Hash function",
          "Challenge-response",
          "Denial of service",
          "Message integrity"
        ],
        "answer": 3,
        "explain": "Message integrity: Assurance that a message was not changed undetected."
      },
      {
        "q": "Which term best matches this description: Keeping services accessible to legitimate users.",
        "options": [
          "Availability",
          "Cryptographic hash",
          "Session key",
          "Plaintext"
        ],
        "answer": 0,
        "explain": "Availability: Keeping services accessible to legitimate users."
      },
      {
        "q": "Which term best matches this description: Restricting use of resources to authorized entities.",
        "options": [
          "MAC",
          "Access control",
          "Key distribution",
          "Ciphertext"
        ],
        "answer": 1,
        "explain": "Access control: Restricting use of resources to authorized entities."
      },
      {
        "q": "Which term best matches this description: Secretly listening to communication.",
        "options": [
          "Digital signature",
          "Trust model",
          "Eavesdropping",
          "Encryption"
        ],
        "answer": 2,
        "explain": "Eavesdropping: Secretly listening to communication."
      },
      {
        "q": "Which term best matches this description: Pretending to be another entity.",
        "options": [
          "Certificate",
          "Mutual authentication",
          "Decryption",
          "Spoofing"
        ],
        "answer": 3,
        "explain": "Spoofing: Pretending to be another entity."
      },
      {
        "q": "Which term best matches this description: Reusing captured valid messages to trick a system.",
        "options": [
          "Replay attack",
          "Certificate authority",
          "Confidentiality",
          "Symmetric-key cryptography"
        ],
        "answer": 0,
        "explain": "Replay attack: Reusing captured valid messages to trick a system."
      },
      {
        "q": "Which term best matches this description: Intercepting and possibly modifying communication between parties.",
        "options": [
          "Nonce",
          "Man-in-the-middle attack",
          "Authentication",
          "Public-key cryptography"
        ],
        "answer": 1,
        "explain": "Man-in-the-middle attack: Intercepting and possibly modifying communication between parties."
      },
      {
        "q": "Which term best matches this description: Attacking availability by overwhelming or disrupting service.",
        "options": [
          "Challenge-response",
          "Message integrity",
          "Denial of service",
          "Public key"
        ],
        "answer": 2,
        "explain": "Denial of service: Attacking availability by overwhelming or disrupting service."
      },
      {
        "q": "Which term best matches this description: Original readable data before encryption.",
        "options": [
          "Session key",
          "Availability",
          "Private key",
          "Plaintext"
        ],
        "answer": 3,
        "explain": "Plaintext: Original readable data before encryption."
      },
      {
        "q": "Which term best matches this description: Encrypted data that should be unreadable without the key.",
        "options": [
          "Ciphertext",
          "Key distribution",
          "Access control",
          "Hash function"
        ],
        "answer": 0,
        "explain": "Ciphertext: Encrypted data that should be unreadable without the key."
      },
      {
        "q": "Which term best matches this description: Transforming plaintext into ciphertext.",
        "options": [
          "Trust model",
          "Encryption",
          "Eavesdropping",
          "Cryptographic hash"
        ],
        "answer": 1,
        "explain": "Encryption: Transforming plaintext into ciphertext."
      },
      {
        "q": "Which term best matches this description: Recovering plaintext from ciphertext.",
        "options": [
          "Mutual authentication",
          "Spoofing",
          "Decryption",
          "MAC"
        ],
        "answer": 2,
        "explain": "Decryption: Recovering plaintext from ciphertext."
      },
      {
        "q": "Which term best matches this description: Cryptography where sender and receiver share the same secret key.",
        "options": [
          "Confidentiality",
          "Replay attack",
          "Digital signature",
          "Symmetric-key cryptography"
        ],
        "answer": 3,
        "explain": "Symmetric-key cryptography: Cryptography where sender and receiver share the same secret key."
      },
      {
        "q": "Which term best matches this description: Cryptography using a public key and a private key pair.",
        "options": [
          "Public-key cryptography",
          "Authentication",
          "Man-in-the-middle attack",
          "Certificate"
        ],
        "answer": 0,
        "explain": "Public-key cryptography: Cryptography using a public key and a private key pair."
      },
      {
        "q": "Which term best matches this description: A key that can be shared openly.",
        "options": [
          "Message integrity",
          "Public key",
          "Denial of service",
          "Certificate authority"
        ],
        "answer": 1,
        "explain": "Public key: A key that can be shared openly."
      },
      {
        "q": "Which term best matches this description: A key that must be kept secret by its owner.",
        "options": [
          "Availability",
          "Plaintext",
          "Private key",
          "Nonce"
        ],
        "answer": 2,
        "explain": "Private key: A key that must be kept secret by its owner."
      },
      {
        "q": "Which term best matches this description: A function that maps data to a fixed-size digest.",
        "options": [
          "Access control",
          "Ciphertext",
          "Challenge-response",
          "Hash function"
        ],
        "answer": 3,
        "explain": "Hash function: A function that maps data to a fixed-size digest."
      },
      {
        "q": "Which term best matches this description: A hash designed to resist collisions and preimage attacks.",
        "options": [
          "Cryptographic hash",
          "Eavesdropping",
          "Encryption",
          "Session key"
        ],
        "answer": 0,
        "explain": "Cryptographic hash: A hash designed to resist collisions and preimage attacks."
      },
      {
        "q": "Which term best matches this description: Message Authentication Code for integrity and authentication with a shared key.",
        "options": [
          "Spoofing",
          "MAC",
          "Decryption",
          "Key distribution"
        ],
        "answer": 1,
        "explain": "MAC: Message Authentication Code for integrity and authentication with a shared key."
      },
      {
        "q": "Which term best matches this description: A public-key mechanism proving origin and integrity.",
        "options": [
          "Replay attack",
          "Symmetric-key cryptography",
          "Digital signature",
          "Trust model"
        ],
        "answer": 2,
        "explain": "Digital signature: A public-key mechanism proving origin and integrity."
      },
      {
        "q": "Which term best matches this description: A signed binding between an identity and a public key.",
        "options": [
          "Man-in-the-middle attack",
          "Public-key cryptography",
          "Mutual authentication",
          "Certificate"
        ],
        "answer": 3,
        "explain": "Certificate: A signed binding between an identity and a public key."
      },
      {
        "q": "Which term best matches this description: A trusted party that signs certificates.",
        "options": [
          "Certificate authority",
          "Denial of service",
          "Public key",
          "Confidentiality"
        ],
        "answer": 0,
        "explain": "Certificate authority: A trusted party that signs certificates."
      },
      {
        "q": "Which term best matches this description: A fresh random or unique value used to prevent replay.",
        "options": [
          "Plaintext",
          "Nonce",
          "Private key",
          "Authentication"
        ],
        "answer": 1,
        "explain": "Nonce: A fresh random or unique value used to prevent replay."
      },
      {
        "q": "Which term best matches this description: Authentication where one side proves knowledge by answering a challenge.",
        "options": [
          "Ciphertext",
          "Hash function",
          "Challenge-response",
          "Message integrity"
        ],
        "answer": 2,
        "explain": "Challenge-response: Authentication where one side proves knowledge by answering a challenge."
      },
      {
        "q": "Which term best matches this description: A temporary key used for one communication session.",
        "options": [
          "Encryption",
          "Cryptographic hash",
          "Availability",
          "Session key"
        ],
        "answer": 3,
        "explain": "Session key: A temporary key used for one communication session."
      },
      {
        "q": "Which term best matches this description: The process of securely giving parties needed keys.",
        "options": [
          "Key distribution",
          "Decryption",
          "MAC",
          "Access control"
        ],
        "answer": 0,
        "explain": "Key distribution: The process of securely giving parties needed keys."
      },
      {
        "q": "Which term best matches this description: The assumptions about who or what is trusted.",
        "options": [
          "Symmetric-key cryptography",
          "Trust model",
          "Digital signature",
          "Eavesdropping"
        ],
        "answer": 1,
        "explain": "Trust model: The assumptions about who or what is trusted."
      },
      {
        "q": "Which term best matches this description: Both communication parties authenticate each other.",
        "options": [
          "Public-key cryptography",
          "Certificate",
          "Mutual authentication",
          "Spoofing"
        ],
        "answer": 2,
        "explain": "Mutual authentication: Both communication parties authenticate each other."
      }
    ]
  },
  {
    "title": "TLS, Firewalls, IDS, and IPsec — 30-item Practice Test",
    "questions": [
      {
        "q": "Which term best matches this description: Transport Layer Security, used to protect application sessions such as HTTPS.",
        "options": [
          "Security Policy Database",
          "VPN",
          "TLS",
          "TLS record"
        ],
        "answer": 2,
        "explain": "TLS: Transport Layer Security, used to protect application sessions such as HTTPS."
      },
      {
        "q": "Which term best matches this description: HTTP over TLS for secure web communication.",
        "options": [
          "Security Association Database",
          "NAT traversal",
          "Cipher suite",
          "HTTPS"
        ],
        "answer": 3,
        "explain": "HTTPS: HTTP over TLS for secure web communication."
      },
      {
        "q": "Which term best matches this description: The setup phase where parties negotiate keys and authenticate.",
        "options": [
          "TLS handshake",
          "AH",
          "Replay protection",
          "Certificate chain"
        ],
        "answer": 0,
        "explain": "TLS handshake: The setup phase where parties negotiate keys and authenticate."
      },
      {
        "q": "Which term best matches this description: A protected TLS data unit carrying application data.",
        "options": [
          "ESP",
          "TLS record",
          "Security gateway",
          "Root CA"
        ],
        "answer": 1,
        "explain": "TLS record: A protected TLS data unit carrying application data."
      },
      {
        "q": "Which term best matches this description: A set of algorithms used by a TLS session.",
        "options": [
          "Transport mode",
          "TLS",
          "Cipher suite",
          "Forward secrecy"
        ],
        "answer": 2,
        "explain": "Cipher suite: A set of algorithms used by a TLS session."
      },
      {
        "q": "Which term best matches this description: A sequence of certificates linking a site certificate to a trusted root.",
        "options": [
          "Tunnel mode",
          "HTTPS",
          "Firewall",
          "Certificate chain"
        ],
        "answer": 3,
        "explain": "Certificate chain: A sequence of certificates linking a site certificate to a trusted root."
      },
      {
        "q": "Which term best matches this description: A highly trusted certificate authority at the top of a trust chain.",
        "options": [
          "Root CA",
          "IKE",
          "TLS handshake",
          "Packet filter"
        ],
        "answer": 0,
        "explain": "Root CA: A highly trusted certificate authority at the top of a trust chain."
      },
      {
        "q": "Which term best matches this description: Protection of past sessions even if a long-term key is later compromised.",
        "options": [
          "VPN",
          "Forward secrecy",
          "TLS record",
          "Stateful firewall"
        ],
        "answer": 1,
        "explain": "Forward secrecy: Protection of past sessions even if a long-term key is later compromised."
      },
      {
        "q": "Which term best matches this description: A device or software that filters traffic according to policy.",
        "options": [
          "NAT traversal",
          "Cipher suite",
          "Firewall",
          "Application gateway"
        ],
        "answer": 2,
        "explain": "Firewall: A device or software that filters traffic according to policy."
      },
      {
        "q": "Which term best matches this description: A firewall that checks packet headers such as addresses and ports.",
        "options": [
          "Replay protection",
          "Certificate chain",
          "ACL",
          "Packet filter"
        ],
        "answer": 3,
        "explain": "Packet filter: A firewall that checks packet headers such as addresses and ports."
      },
      {
        "q": "Which term best matches this description: A firewall that tracks connection state.",
        "options": [
          "Stateful firewall",
          "Security gateway",
          "Root CA",
          "IDS"
        ],
        "answer": 0,
        "explain": "Stateful firewall: A firewall that tracks connection state."
      },
      {
        "q": "Which term best matches this description: A firewall/proxy that inspects application-layer traffic.",
        "options": [
          "TLS",
          "Application gateway",
          "Forward secrecy",
          "IPS"
        ],
        "answer": 1,
        "explain": "Application gateway: A firewall/proxy that inspects application-layer traffic."
      },
      {
        "q": "Which term best matches this description: Access Control List, a set of permit or deny rules.",
        "options": [
          "HTTPS",
          "Firewall",
          "ACL",
          "Signature-based detection"
        ],
        "answer": 2,
        "explain": "ACL: Access Control List, a set of permit or deny rules."
      },
      {
        "q": "Which term best matches this description: Intrusion Detection System that monitors for suspicious activity.",
        "options": [
          "TLS handshake",
          "Packet filter",
          "Anomaly-based detection",
          "IDS"
        ],
        "answer": 3,
        "explain": "IDS: Intrusion Detection System that monitors for suspicious activity."
      },
      {
        "q": "Which term best matches this description: Intrusion Prevention System that can actively block suspicious traffic.",
        "options": [
          "IPS",
          "TLS record",
          "Stateful firewall",
          "IPsec"
        ],
        "answer": 0,
        "explain": "IPS: Intrusion Prevention System that can actively block suspicious traffic."
      },
      {
        "q": "Which term best matches this description: Detecting known attack patterns.",
        "options": [
          "Cipher suite",
          "Signature-based detection",
          "Application gateway",
          "Security association"
        ],
        "answer": 1,
        "explain": "Signature-based detection: Detecting known attack patterns."
      },
      {
        "q": "Which term best matches this description: Detecting behavior that differs from normal patterns.",
        "options": [
          "Certificate chain",
          "ACL",
          "Anomaly-based detection",
          "Security Policy Database"
        ],
        "answer": 2,
        "explain": "Anomaly-based detection: Detecting behavior that differs from normal patterns."
      },
      {
        "q": "Which term best matches this description: A suite for protecting IP datagrams.",
        "options": [
          "Root CA",
          "IDS",
          "Security Association Database",
          "IPsec"
        ],
        "answer": 3,
        "explain": "IPsec: A suite for protecting IP datagrams."
      },
      {
        "q": "Which term best matches this description: A one-way IPsec relationship defining keys and algorithms.",
        "options": [
          "Security association",
          "Forward secrecy",
          "IPS",
          "AH"
        ],
        "answer": 0,
        "explain": "Security association: A one-way IPsec relationship defining keys and algorithms."
      },
      {
        "q": "Which term best matches this description: IPsec database indicating what traffic should be protected.",
        "options": [
          "Firewall",
          "Security Policy Database",
          "Signature-based detection",
          "ESP"
        ],
        "answer": 1,
        "explain": "Security Policy Database: IPsec database indicating what traffic should be protected."
      },
      {
        "q": "Which term best matches this description: IPsec database storing active security associations.",
        "options": [
          "Packet filter",
          "Anomaly-based detection",
          "Security Association Database",
          "Transport mode"
        ],
        "answer": 2,
        "explain": "Security Association Database: IPsec database storing active security associations."
      },
      {
        "q": "Which term best matches this description: Authentication Header, IPsec protocol for authentication and integrity.",
        "options": [
          "Stateful firewall",
          "IPsec",
          "Tunnel mode",
          "AH"
        ],
        "answer": 3,
        "explain": "AH: Authentication Header, IPsec protocol for authentication and integrity."
      },
      {
        "q": "Which term best matches this description: Encapsulating Security Payload, IPsec protocol supporting confidentiality.",
        "options": [
          "ESP",
          "Application gateway",
          "Security association",
          "IKE"
        ],
        "answer": 0,
        "explain": "ESP: Encapsulating Security Payload, IPsec protocol supporting confidentiality."
      },
      {
        "q": "Which term best matches this description: IPsec mode protecting the payload of the original IP datagram.",
        "options": [
          "ACL",
          "Transport mode",
          "Security Policy Database",
          "VPN"
        ],
        "answer": 1,
        "explain": "Transport mode: IPsec mode protecting the payload of the original IP datagram."
      },
      {
        "q": "Which term best matches this description: IPsec mode protecting the entire original IP datagram inside a new one.",
        "options": [
          "IDS",
          "Security Association Database",
          "Tunnel mode",
          "NAT traversal"
        ],
        "answer": 2,
        "explain": "Tunnel mode: IPsec mode protecting the entire original IP datagram inside a new one."
      },
      {
        "q": "Which term best matches this description: Internet Key Exchange, used to create IPsec security associations.",
        "options": [
          "IPS",
          "AH",
          "Replay protection",
          "IKE"
        ],
        "answer": 3,
        "explain": "IKE: Internet Key Exchange, used to create IPsec security associations."
      },
      {
        "q": "Which term best matches this description: Virtual Private Network, often built using tunnel-mode IPsec or TLS.",
        "options": [
          "VPN",
          "Signature-based detection",
          "ESP",
          "Security gateway"
        ],
        "answer": 0,
        "explain": "VPN: Virtual Private Network, often built using tunnel-mode IPsec or TLS."
      },
      {
        "q": "Which term best matches this description: Techniques allowing IPsec traffic to pass through NAT devices.",
        "options": [
          "Anomaly-based detection",
          "NAT traversal",
          "Transport mode",
          "TLS"
        ],
        "answer": 1,
        "explain": "NAT traversal: Techniques allowing IPsec traffic to pass through NAT devices."
      },
      {
        "q": "Which term best matches this description: A mechanism that rejects old duplicated protected packets.",
        "options": [
          "IPsec",
          "Tunnel mode",
          "Replay protection",
          "HTTPS"
        ],
        "answer": 2,
        "explain": "Replay protection: A mechanism that rejects old duplicated protected packets."
      },
      {
        "q": "Which term best matches this description: A router/firewall/VPN device enforcing security at a network boundary.",
        "options": [
          "Security association",
          "IKE",
          "TLS handshake",
          "Security gateway"
        ],
        "answer": 3,
        "explain": "Security gateway: A router/firewall/VPN device enforcing security at a network boundary."
      }
    ]
  }
=======
    title: "Test 1: Core Networking Foundations",
    description: "Covers Internet structure, packets, protocols, layers, delay, throughput, and application basics.",
    questions: [
      { q: "Which phrase best describes the Internet?", options: ["One giant router", "A network of networks", "A single private LAN", "Only wireless devices"], answer: 1, explain: "The Internet connects many networks operated by homes, companies, ISPs, data centers, and content providers." },
      { q: "What is the main purpose of a protocol?", options: ["To make devices faster", "To define communication rules", "To replace routers", "To prevent all packet loss"], answer: 1, explain: "Protocols define message formats, message order, and actions taken when messages are sent or received." },
      { q: "Which device is considered an end system?", options: ["Laptop", "Core router only", "Fiber cable", "Ethernet frame"], answer: 0, explain: "End systems are hosts such as laptops, phones, servers, and IoT devices." },
      { q: "What happens when a large file is sent over a packet-switched network?", options: ["It is usually broken into packets", "It must be sent as one huge block", "It cannot cross routers", "It becomes a MAC address"], answer: 0, explain: "Packet switching sends small chunks of data through the network." },
      { q: "Which layer contains HTTP, DNS, SMTP, and IMAP?", options: ["Application", "Transport", "Network", "Physical"], answer: 0, explain: "These are application-layer protocols." },
      { q: "What does DNS mainly provide?", options: ["Encryption", "Name-to-IP translation", "MAC address learning", "TCP congestion control"], answer: 1, explain: "DNS maps names such as example.com to IP addresses." },
      { q: "In client-server architecture, the server is usually...", options: ["Always on and waiting for requests", "Never assigned an IP address", "A cable", "Only a mobile phone"], answer: 0, explain: "Servers are typically always-on hosts, often in data centers." },
      { q: "What is throughput?", options: ["Actual useful delivery rate", "Only physical cable length", "A security key", "A DNS record"], answer: 0, explain: "Throughput is the actual rate at which useful data is delivered." },
      { q: "What is encapsulation?", options: ["Deleting old headers", "Wrapping data with layer-specific headers/trailers", "Changing wireless into wired", "Copying DNS records"], answer: 1, explain: "Each layer adds information needed to deliver or process the data." },
      { q: "Why are layers useful in networking?", options: ["They separate responsibilities", "They remove the need for protocols", "They make all networks wireless", "They stop all attacks"], answer: 0, explain: "Layering organizes complex communication into smaller responsibilities." },
    ],
  },
  {
    title: "Test 2: Transport, Network, Routing & Management",
    description: "Covers TCP/UDP, ports, multiplexing, IP, routers, forwarding, routing, OSPF, BGP, SDN, SNMP, and NETCONF/YANG.",
    questions: [
      { q: "The transport layer provides logical communication between...", options: ["Application processes", "Only cables", "MAC addresses only", "Power supplies"], answer: 0, explain: "Transport protocols connect processes running on different hosts." },
      { q: "Which transport protocol is reliable and connection-oriented?", options: ["UDP", "TCP", "IP", "ARP"], answer: 1, explain: "TCP includes reliability, ordering, flow control, and congestion control." },
      { q: "Which transport protocol is lightweight and connectionless?", options: ["UDP", "TCP", "BGP", "SNMP"], answer: 0, explain: "UDP sends without first establishing a connection and has less overhead." },
      { q: "What do port numbers identify?", options: ["The correct app/process on a host", "The physical cable color", "The ISP's country", "Only the router brand"], answer: 0, explain: "Ports help demultiplex incoming data to the correct process." },
      { q: "What is the network-layer packet usually called?", options: ["Frame", "Datagram", "Socket", "Ciphertext"], answer: 1, explain: "At the IP/network layer, packets are commonly called datagrams." },
      { q: "Forwarding is best described as...", options: ["Moving a packet from router input to output", "Planning the entire path", "Encrypting the packet", "Translating a domain name"], answer: 0, explain: "Forwarding is the local per-router movement of packets." },
      { q: "Routing is best described as...", options: ["Determining the route from source to destination", "Assigning a MAC address", "Creating a checksum only", "Opening a socket"], answer: 0, explain: "Routing computes paths through the network." },
      { q: "Which protocol routes among autonomous systems?", options: ["BGP", "ARP", "IMAP", "CRC"], answer: 0, explain: "BGP is the Internet's inter-domain routing protocol." },
      { q: "Which protocol is commonly used within one ISP or autonomous system?", options: ["OSPF", "SMTP", "TLS", "ESP"], answer: 0, explain: "OSPF is an intra-domain or intra-AS routing protocol." },
      { q: "What is the purpose of SNMP?", options: ["Network monitoring and management", "Web page rendering", "Wireless signal generation", "Video compression"], answer: 0, explain: "SNMP lets managing systems query and receive information from managed devices." },
      { q: "In NETCONF/YANG, YANG is mainly...", options: ["A data modeling language", "A wireless antenna", "A packet switch", "A MAC address format"], answer: 0, explain: "YANG models configuration and operational data." },
      { q: "What does SDN separate?", options: ["Control plane from data plane", "DNS from HTTP", "Copper from fiber", "TCP from ports"], answer: 0, explain: "SDN centralizes or abstracts control logic away from forwarding devices." },
    ],
  },
  {
    title: "Test 3: Link Layer, Wireless, Mobile & Security",
    description: "Covers frames, MAC, ARP, Ethernet, switches, VLANs, MPLS, WiFi, 4G/5G, authentication, TLS, IPsec, firewalls, and IDS.",
    questions: [
      { q: "The data link layer carries data...", options: ["From one hop to the next", "Only across the entire Internet", "Only inside web browsers", "Only after encryption"], answer: 0, explain: "The data link layer handles local one-hop frame delivery." },
      { q: "A data link layer unit is called a...", options: ["Frame", "Socket", "Route", "Domain"], answer: 0, explain: "Frames are the units used by the data link layer." },
      { q: "Which address is used locally inside a LAN?", options: ["MAC address", "URL", "Port number only", "BGP route"], answer: 0, explain: "MAC addresses identify local interfaces on LANs." },
      { q: "ARP maps...", options: ["IP addresses to MAC addresses", "Names to IP addresses", "Ports to processes", "Packets to encryption keys"], answer: 0, explain: "ARP discovers the MAC address for a local IP address." },
      { q: "A switch mainly forwards based on...", options: ["MAC addresses", "Application names", "Passwords", "Only GPS location"], answer: 0, explain: "LAN switches learn and forward using MAC addresses." },
      { q: "What is a VLAN?", options: ["A logical LAN separation", "A DNS server", "A transport protocol", "A checksum method"], answer: 0, explain: "VLANs split a physical LAN into separate logical LANs." },
      { q: "MPLS forwards packets using...", options: ["Fixed-length labels", "Only email addresses", "Only passwords", "Bluetooth names"], answer: 0, explain: "MPLS label-switched routers forward based on labels." },
      { q: "Wireless means...", options: ["Communication without a cable", "The device must be moving", "The network has no routers", "Only 5G is used"], answer: 0, explain: "Wireless is about the link medium, not necessarily movement." },
      { q: "Mobility means...", options: ["Changing point of network attachment", "Using only fiber", "Disabling DNS", "Blocking all packets"], answer: 0, explain: "Mobile users may move from one access point or cell to another." },
      { q: "Which security goal keeps message contents hidden?", options: ["Confidentiality", "Availability", "Routing", "Multiplexing"], answer: 0, explain: "Confidentiality prevents unauthorized parties from understanding the message." },
      { q: "Which security goal checks that a message was not changed?", options: ["Integrity", "Bandwidth", "Forwarding", "Roaming"], answer: 0, explain: "Integrity protects against undetected modification." },
      { q: "Which IPsec protocol provides confidentiality as well as authentication and integrity?", options: ["ESP", "AH", "ARP", "HTTP"], answer: 0, explain: "ESP provides confidentiality, authentication, and integrity; AH does not provide confidentiality." },
    ],
  },
>>>>>>> parent of 8dd6f2e (Revamp NetworkingTwoBeginnerGuide content)
];

function FlashcardDeck() {
  const topics = ["All", ...Array.from(new Set(flashcards.map(card => card.topic)))];
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = selectedTopic === "All" ? flashcards : flashcards.filter(card => card.topic === selectedTopic);
  const current = cards[index] || cards[0];

  function changeTopic(topic) {
    setSelectedTopic(topic);
    setIndex(0);
    setFlipped(false);
  }

  function nextCard() {
    setIndex((index + 1) % cards.length);
    setFlipped(false);
  }

  function prevCard() {
    setIndex((index - 1 + cards.length) % cards.length);
    setFlipped(false);
  }

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Review Flashcards</p>
          <h3 className="mt-2 text-3xl font-black text-slate-950">Flip cards to review terms 🃏</h3>
          <p className="mt-2 max-w-3xl text-slate-600">Use these for fast recall. Filter by topic, test yourself first, then flip to check the answer.</p>
        </div>
        <Badge>{index + 1} / {cards.length}</Badge>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {topics.map(topic => (
          <button key={topic} onClick={() => changeTopic(topic)} className={`rounded-full px-3 py-2 text-sm font-bold transition ${selectedTopic === topic ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>{topic}</button>
        ))}
      </div>
      <button onClick={() => setFlipped(!flipped)} className="mt-6 min-h-72 w-full rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 text-left shadow-inner transition hover:shadow-md">
        <div className="mb-5 flex items-center justify-between gap-3">
          <Badge>{current.topic}</Badge>
          <span className="text-sm font-bold text-slate-400">Click to flip</span>
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{flipped ? "Answer" : "Question"}</p>
        <h4 className="mt-4 text-3xl font-black leading-tight text-slate-950">{flipped ? current.back : current.front}</h4>
      </button>
      <div className="mt-5 flex flex-wrap gap-3">
        <button onClick={prevCard} className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 hover:bg-slate-100">Previous</button>
        <button onClick={() => setFlipped(!flipped)} className="rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white hover:bg-slate-800">Flip Card</button>
        <button onClick={nextCard} className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 hover:bg-slate-100">Next</button>
      </div>
    </Card>
  );
}

function PracticeTest({ test }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = test.questions.reduce((total, question, idx) => total + (answers[idx] === question.answer ? 1 : 0), 0);
  const percent = Math.round((score / test.questions.length) * 100);

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-black text-slate-950">{test.title}</h3>
          <p className="mt-2 max-w-4xl leading-7 text-slate-600">{test.description}</p>
        </div>
        <Badge>{test.questions.length} questions</Badge>
      </div>
      <div className="mt-6 space-y-5">
        {test.questions.map((question, idx) => {
          const selected = answers[idx];
          const isCorrect = selected === question.answer;
          return (
            <div key={idx} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-black text-slate-900 shadow-sm">{idx + 1}</div>
                <h4 className="pt-1 text-lg font-black text-slate-950">{question.q}</h4>
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                {question.options.map((option, optionIdx) => {
                  const isAnswer = question.answer === optionIdx;
                  const showCorrect = submitted && isAnswer;
                  const showWrong = submitted && selected === optionIdx && !isAnswer;
                  return (
                    <button key={option} onClick={() => !submitted && setAnswers({ ...answers, [idx]: optionIdx })} className={`rounded-2xl border p-4 text-left text-sm font-bold transition ${selected === optionIdx ? "border-slate-950 bg-white" : "border-slate-200 bg-white hover:border-slate-400"} ${showCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-900" : ""} ${showWrong ? "border-rose-500 bg-rose-50 text-rose-900" : ""}`}>{option}</button>
                  );
                })}
              </div>
              {submitted && (
                <div className={`mt-4 rounded-2xl p-4 text-sm leading-6 ${isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
                  <b>{isCorrect ? "Correct." : "Review this."}</b> {question.explain}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex flex-col justify-between gap-4 rounded-3xl bg-slate-950 p-5 text-white md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Score</p>
          <p className="mt-1 text-3xl font-black">{submitted ? `${score}/${test.questions.length} • ${percent}%` : "Submit to see your score"}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setSubmitted(true)} className="rounded-2xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-slate-100">Submit Test</button>
          <button onClick={reset} className="rounded-2xl border border-white/20 px-5 py-3 font-bold text-white hover:bg-white/10">Reset</button>
        </div>
      </div>
    </Card>
  );
}

function PracticeZone() {
  return (
    <section id="practice" className="scroll-mt-24 pt-16">
      <div className="mb-8 flex items-start gap-4">
        <div className="rounded-2xl bg-slate-900 p-3 text-white shadow-md"><BookOpen size={26} /></div>
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Practice Center</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Practice tests + review flashcards 📝</h2>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">Review every major Networking 2 topic, then test yourself with scored practice exams. Each question includes an explanation after submission.</p>
        </div>
      </div>
      <div className="grid gap-6">
        <FlashcardDeck />
        <div className="grid gap-6">
          {practiceTests.map(test => <PracticeTest key={test.title} test={test} />)}
        </div>
      </div>
    </section>
  );
}

export default function NetworkingTwoBeginnerGuide() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filteredGlossary = useMemo(() => glossary.filter(([term, def]) => `${term} ${def}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3 font-black text-slate-950"><Network className="text-slate-900" /> Networking 2 Guide</a>
          <button className="rounded-xl border border-slate-200 p-2 md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <nav className="hidden items-center gap-2 md:flex">
            {topics.map(t => <a key={t.id} href={`#${t.id}`} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950">{t.unit}</a>)}
            <a href="#practice" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950">Practice</a>
            <a href="#glossary" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">Glossary</a>
          </nav>
        </div>
        {open && <div className="grid gap-1 border-t border-slate-100 bg-white p-4 md:hidden">{topics.map(t => <a key={t.id} onClick={() => setOpen(false)} href={`#${t.id}`} className="rounded-xl px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100">{t.title}</a>)}</div>}
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 pb-24">
        <section className="grid min-h-[72vh] items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Badge>Beginner-Friendly Compilation • Networking 2</Badge>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-7xl">Networking, explained like you are starting from zero 🌐</h1>
<<<<<<< HEAD
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">This compiled guide turns the Networking 2 PDFs into a simple, visual learning path. Start with the dashboard, jump to any topic, then use the diagrams, analogies, flashcards, glossary, and 450 practice questions to review fast.</p>
=======
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">This compiled guide turns the Networking 2 PDFs into a simple, visual learning path. Start with the dashboard, jump to any topic, then use the diagrams, analogies, tables, and quick checks to review fast.</p>
>>>>>>> parent of 8dd6f2e (Revamp NetworkingTwoBeginnerGuide content)
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#dashboard" className="rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white shadow-lg shadow-slate-200 hover:bg-slate-800">Open Topic Dashboard</a>
              <a href="#practice" className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 hover:bg-slate-100">Practice Tests</a>
              <a href="#glossary" className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 hover:bg-slate-100">Search Glossary</a>
            </div>
          </motion.div>
          <div className="grid gap-4">
            <MiniLayerStack />
            <PacketDiagram />
          </div>
        </section>

        <section id="dashboard" className="scroll-mt-24 py-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">First Page Dashboard</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-5xl">Jump to any topic 🚀</h2>
            </div>
            <p className="max-w-2xl text-slate-600">Use this as your table of contents. Each card links to a beginner-friendly chapter with visuals, examples, and key takeaways.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((t, idx) => {
              const Icon = t.icon;
              return (
                <a key={t.id} href={`#${t.id}`} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${t.color} p-3 text-white shadow-sm`}><Icon size={28} /></div>
                  <div className="mb-3 flex items-center justify-between gap-3"><Badge>{t.unit}</Badge><span className="text-sm font-bold text-slate-400">{t.pages}</span></div>
                  <h3 className="text-2xl font-black text-slate-950 group-hover:text-slate-700">{idx + 1}. {t.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{t.subtitle}</p>
                  <p className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm font-semibold text-slate-700">💡 Zero-knowledge version: {t.beginner}</p>
                </a>
              );
            })}
          </div>
        </section>

        <SectionHeader id="intro" eyebrow="Topic 1 • Unit 1.1" title="Computer Networks & the Internet" subtitle="Before learning protocols, picture the Internet as billions of devices connected through links, switches, routers, and networks owned by different organizations." icon={Globe2} />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <Card>
            <h3 className="text-2xl font-black">Big idea</h3>
            <p className="mt-3 leading-8 text-slate-600">A network lets devices communicate. The Internet is a network of networks: home networks, mobile networks, enterprise networks, data centers, regional ISPs, global ISPs, and content-provider networks all connected together.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                ["Host / End System", "A device at the edge: phone, laptop, server, camera, smart appliance."],
                ["Packet Switch", "Router or switch that forwards chunks of data."],
                ["Communication Link", "The path data travels through: fiber, copper, radio, or satellite."],
                ["Protocol", "Rules that control how messages are sent, received, and interpreted."],
              ].map(([h, p]) => <div key={h} className="rounded-2xl bg-slate-50 p-4"><h4 className="font-extrabold">{h}</h4><p className="mt-1 text-sm leading-6 text-slate-600">{p}</p></div>)}
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-black">Internet as a delivery system 📦</h3>
            <Flow steps={[
              { title: "App creates data", text: "Example: you open a website." },
              { title: "Data becomes packets", text: "Large data is split into small chunks." },
              { title: "Routers forward", text: "Each router chooses the next hop." },
              { title: "Packets arrive", text: "The receiver reassembles them." },
              { title: "App displays result", text: "Browser shows the page." },
            ]} />
          </Card>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CompareTable rows={[
            ["Delay", "How long one packet takes to arrive.", "Like travel time from your house to school."],
            ["Loss", "Packets can be dropped when buffers overflow or links fail.", "Like a package getting lost in transit."],
            ["Throughput", "Actual useful delivery speed.", "Like how many packages arrive per minute."],
            ["Bandwidth", "Maximum possible transmission rate of a link.", "Like the number of lanes on a road."],
          ]} />
          <Quiz items={[
            { q: "Is the Internet one single network?", a: "No. It is a network of networks connected by common protocols, especially IP." },
            { q: "Why use packets instead of sending one huge file?", a: "Packets let many users share the network and allow routers to forward smaller units efficiently." },
          ]} />
        </div>

        <SectionHeader id="application" eyebrow="Topic 2 • Unit 1.2" title="Application Layer" subtitle="The application layer is where user-facing network apps live: web browsers, email clients, DNS, video streaming, online games, and messaging apps." icon={Server} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-black">Two main app designs</h3>
            <CompareTable headers={["Architecture", "How it works", "Examples"]} rows={[
              ["Client-Server", "An always-on server waits. Clients contact it when needed.", "Web, email, FTP, most cloud apps."],
              ["Peer-to-Peer", "Devices communicate directly and can act as both client and server.", "P2P file sharing, some distributed systems."],
            ]} />
          </Card>
          <Card>
            <h3 className="text-2xl font-black">Sockets: the app's network door 🚪</h3>
            <p className="mt-3 leading-8 text-slate-600">A process is a running program. When a process wants to send data to another process on another device, it pushes messages through a socket. The transport layer carries the message from one socket to another.</p>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="font-mono text-sm">Browser process → socket → TCP/UDP → Internet → socket → Web server process</p>
            </div>
          </Card>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[
            ["HTTP", "Used by the Web. Browsers request objects; servers respond with web content."],
            ["DNS", "Turns human-readable names into IP addresses."],
            ["Email", "SMTP sends mail; IMAP retrieves and synchronizes mailboxes."],
            ["Video Streaming", "Delivers stored or live video using servers, CDNs, and adaptive bitrate."],
            ["CDN", "Content Delivery Network: copies content closer to users for faster access."],
            ["Socket API", "Programming interface used to build network applications."],
          ].map(([h, p]) => <Card key={h}><h3 className="text-xl font-black">{h}</h3><p className="mt-2 leading-7 text-slate-600">{p}</p></Card>)}
        </div>

        <SectionHeader id="transport" eyebrow="Topic 3 • Unit 2.1" title="Transport Layer" subtitle="The transport layer provides logical communication between application processes running on different hosts. It is where TCP and UDP live." icon={Boxes} />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h3 className="text-2xl font-black">What transport does</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li><b className="text-slate-900">Segments data:</b> breaks application messages into manageable transport units.</li>
              <li><b className="text-slate-900">Uses ports:</b> directs data to the correct app on a host.</li>
              <li><b className="text-slate-900">Multiplexes:</b> combines many app conversations onto the network.</li>
              <li><b className="text-slate-900">Demultiplexes:</b> separates arriving data to the right socket.</li>
              <li><b className="text-slate-900">May add reliability:</b> TCP can retransmit lost data and control flow.</li>
            </ul>
          </Card>
          <CompareTable headers={["Feature", "TCP", "UDP"]} rows={[
            ["Connection", "Connection-oriented; handshake first.", "Connectionless; send immediately."],
            ["Reliability", "Reliable delivery using ACKs and retransmission.", "No built-in reliability."],
            ["Speed / Overhead", "More overhead but safer delivery.", "Lower overhead and often faster."],
            ["Typical Uses", "Web, email, file transfer, secure sessions.", "DNS, streaming, gaming, voice/video calls."],
          ]} />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-black">TCP reliability loop</h3>
            <Flow steps={[
              { title: "Send", text: "Sender transmits a segment." },
              { title: "Receive", text: "Receiver checks and accepts it." },
              { title: "ACK", text: "Receiver confirms delivery." },
              { title: "Timeout", text: "If ACK is missing, sender suspects loss." },
              { title: "Retransmit", text: "Sender sends the missing segment again." },
            ]} />
          </Card>
          <Quiz items={[
            { q: "Why do apps need port numbers?", a: "A host may run many apps at once. Ports tell the transport layer which app should receive each segment." },
            { q: "Why not always use TCP?", a: "Some apps prefer low delay over perfect delivery. For live voice, video, gaming, or DNS, UDP can be a better fit." },
          ]} />
        </div>

        <SectionHeader id="network" eyebrow="Topic 4 • Units 2.2, 3.1, 3.2, 3.3" title="Network Layer, Routing & Management" subtitle="The network layer moves packets from a sending host to a receiving host across multiple routers and networks. It includes IP, forwarding, routing, and network management." icon={Router} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-black">Forwarding vs Routing</h3>
            <CompareTable headers={["Term", "Meaning", "Trip Analogy"]} rows={[
              ["Forwarding", "A router moves one packet from an input port to the correct output port.", "Passing through one road interchange."],
              ["Routing", "The network computes the path packets should take from source to destination.", "Planning the full trip route."],
            ]} />
          </Card>
          <Card>
            <h3 className="text-2xl font-black">Data plane vs Control plane</h3>
            <CompareTable headers={["Plane", "Job", "Where it happens"]} rows={[
              ["Data Plane", "Actually forwards packets at each router.", "Local, per-router function."],
              ["Control Plane", "Decides routes and installs forwarding behavior.", "Network-wide logic; traditional routing or SDN controller."],
            ]} />
          </Card>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[
            ["IP Datagram", "The network-layer packet. It carries source/destination IP addresses and other control fields."],
            ["NAT", "Network Address Translation lets many private devices share a public IP address."],
            ["IPv6", "A newer IP version with a much larger address space than IPv4."],
            ["OSPF", "An intra-ISP routing protocol used inside one autonomous system."],
            ["BGP", "The inter-ISP routing protocol used between autonomous systems on the Internet."],
            ["SDN", "Software-Defined Networking separates control logic from forwarding hardware."],
            ["SNMP", "Simple Network Management Protocol for querying and receiving device status."],
            ["NETCONF/YANG", "Modern management approach: YANG models data; NETCONF exchanges configuration/actions."],
            ["ICMP", "Control-message protocol used for errors and diagnostics, like ping-related behavior."],
          ].map(([h, p]) => <Card key={h}><h3 className="text-xl font-black">{h}</h3><p className="mt-2 leading-7 text-slate-600">{p}</p></Card>)}
        </div>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black">Scalable routing: why ISPs use Autonomous Systems</h3>
          <p className="mt-3 leading-8 text-slate-600">The Internet has too many destinations for every router to track individually. So networks are grouped into Autonomous Systems, or ASes. Routing inside one AS is called intra-AS routing. Routing between ASes is called inter-AS routing.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["AS1", "Local ISP or enterprise network"],
              ["Gateway Router", "Connects one AS to another"],
              ["AS2 / AS3", "Other ISP or content networks"],
            ].map(([h, p]) => <div key={h} className="rounded-2xl bg-slate-50 p-5 text-center"><div className="text-2xl font-black">{h}</div><p className="mt-2 text-sm leading-6 text-slate-600">{p}</p></div>)}
          </div>
        </div>

        <SectionHeader id="link" eyebrow="Topic 5 • Data Link, Units 4.1, 4.2, 4.3" title="Data Link Layer, LANs & Link Virtualization" subtitle="The data link layer moves frames from one node to the next node. It handles framing, local addressing, error detection, media access, Ethernet, switches, VLANs, and MPLS." icon={Cable} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-black">Frame delivery: one hop at a time</h3>
            <p className="mt-3 leading-8 text-slate-600">If the network layer plans the full road trip, the data link layer handles one short ride: laptop to WiFi access point, access point to router, router to next router, and so on.</p>
            <Flow steps={[
              { title: "Create frame", text: "Wrap packet with link-layer header/trailer." },
              { title: "Use MAC", text: "Address the next local interface." },
              { title: "Access medium", text: "Take turns using wire or radio." },
              { title: "Detect errors", text: "Use parity, checksum, or CRC." },
              { title: "Next hop", text: "Pass packet upward or forward." },
            ]} />
          </Card>
          <CompareTable headers={["Address Type", "Layer", "Purpose"]} rows={[
            ["IP Address", "Network layer", "Used for end-to-end routing across networks."],
            ["MAC Address", "Data link layer", "Used locally to deliver a frame inside the same LAN/subnet."],
            ["Port Number", "Transport layer", "Used to deliver data to the correct application process."],
          ]} />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[
            ["Packetizing", "Large data is split into packets so devices can share the network efficiently."],
            ["Error Detection", "Techniques like parity, checksum, and CRC help detect corrupted bits."],
            ["Multiple Access", "Rules for sharing a common broadcast channel, especially important in Ethernet and WiFi."],
            ["ARP", "Address Resolution Protocol finds the MAC address that matches a local IP address."],
            ["Ethernet", "Dominant wired LAN technology that uses frames and MAC addresses."],
            ["Switches", "Forward frames inside a LAN using MAC address learning."],
            ["VLANs", "Separate one physical LAN into multiple logical LANs."],
            ["MPLS", "Uses fixed-length labels to forward traffic quickly through capable routers."],
            ["Data Centers", "Large-scale networks designed for high-speed communication among servers."],
          ].map(([h, p]) => <Card key={h}><h3 className="text-xl font-black">{h}</h3><p className="mt-2 leading-7 text-slate-600">{p}</p></Card>)}
        </div>

        <SectionHeader id="wireless-mobile" eyebrow="Topic 6 • Units 5.1, 5.2" title="Wireless & Mobile Networks" subtitle="Wireless means communication happens over radio links. Mobile means the user may change the point of attachment while staying connected." icon={Wifi} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-black">Wireless vs Mobility</h3>
            <CompareTable headers={["Concept", "Meaning", "Example"]} rows={[
              ["Wireless", "No physical cable between device and network.", "Laptop connected to WiFi while sitting still."],
              ["Mobile", "Device changes where it attaches to the network.", "Phone moving from one cell tower to another."],
            ]} />
          </Card>
          <Card>
            <h3 className="text-2xl font-black">Wireless network elements</h3>
            <div className="mt-4 grid gap-3">
              {[
                ["Wireless Host", "Laptop, smartphone, IoT device, or sensor."],
                ["Base Station / Access Point", "Relays packets between wireless hosts and wired infrastructure."],
                ["Wireless Link", "Radio connection that can suffer from interference and signal loss."],
                ["Network Infrastructure", "The wired/core network behind the wireless access point."],
              ].map(([h, p]) => <div key={h} className="rounded-2xl bg-slate-50 p-4"><h4 className="font-extrabold">{h}</h4><p className="mt-1 text-sm leading-6 text-slate-600">{p}</p></div>)}
            </div>
          </Card>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-black">4G/5G in one picture</h3>
            <Flow steps={[
              { title: "User Equipment", text: "Your phone or mobile device." },
              { title: "Base Station", text: "Cell tower radio access point." },
              { title: "Carrier Core", text: "Provider network handles mobility and identity." },
              { title: "Internet", text: "Connects to websites, apps, and services." },
              { title: "Service", text: "Content, call, game, stream, or cloud app." },
            ]} />
          </Card>
          <Quiz items={[
            { q: "Does wireless always mean mobile?", a: "No. A desktop connected through WiFi is wireless, but it may not be mobile." },
            { q: "What makes cellular networks different from wired Internet?", a: "They treat mobility and subscriber identity as core services, often using SIM-based authentication and carrier-managed infrastructure." },
          ]} />
        </div>

        <SectionHeader id="security" eyebrow="Topic 7 • Units 6.1, 6.2, 6.3" title="Network Security" subtitle="Network security protects communication against eavesdropping, impersonation, tampering, and service disruption." icon={Shield} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-black">The 4 core goals</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                ["Confidentiality", "Only the intended receiver can understand the message."],
                ["Authentication", "Parties prove who they are."],
                ["Integrity", "Changes to the message can be detected."],
                ["Availability", "Services remain accessible to legitimate users."],
              ].map(([h, p]) => <div key={h} className="rounded-2xl bg-slate-50 p-4"><h4 className="font-extrabold">{h}</h4><p className="mt-1 text-sm leading-6 text-slate-600">{p}</p></div>)}
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-black">Alice, Bob, and Trudy</h3>
            <p className="mt-3 leading-8 text-slate-600">Security examples often use Alice and Bob as the legitimate sender/receiver, and Trudy as the intruder. Trudy may intercept, delete, modify, replay, or inject messages.</p>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="font-mono text-sm">Alice 🔐 → message → 🌐 Trudy? → message → Bob 🔓</p>
            </div>
          </Card>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[
            ["Cryptography", "Turns readable data into protected data using keys and algorithms."],
            ["Message Authentication Code", "Helps verify message integrity and authenticity."],
            ["Digital Signature", "Proves who sent a message and protects against tampering."],
            ["TLS", "Secures TCP-based connections, such as HTTPS."],
            ["Firewalls", "Filter traffic based on rules to reduce exposure."],
            ["IDS", "Intrusion Detection System: watches for suspicious behavior."],
            ["IPsec", "Protects IP datagrams using transport mode or tunnel mode."],
            ["AH", "IPsec protocol for authentication and integrity, not confidentiality."],
            ["ESP", "IPsec protocol for authentication, integrity, and confidentiality."],
          ].map(([h, p]) => <Card key={h}><h3 className="text-xl font-black">{h}</h3><p className="mt-2 leading-7 text-slate-600">{p}</p></Card>)}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CompareTable headers={["IPsec Mode", "What gets protected", "Common Use"]} rows={[
            ["Transport Mode", "Only the IP datagram payload is encrypted/authenticated.", "Host-to-host protection."],
            ["Tunnel Mode", "The entire original datagram is protected and wrapped in a new IP datagram.", "VPNs and gateway-to-gateway protection."],
          ]} />
          <Quiz items={[
            { q: "Why is saying 'I am Alice' not enough authentication?", a: "Because an attacker can simply claim to be Alice. Strong authentication requires proof, often based on secrets, keys, or certificates." },
            { q: "What is the difference between confidentiality and integrity?", a: "Confidentiality hides the content. Integrity detects whether the content changed." },
          ]} />
        </div>

        <section id="study-map" className="scroll-mt-24 pt-16">
          <Card className="bg-gradient-to-br from-white to-slate-100">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-950 p-3 text-white"><Map /></div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Recommended Study Path</p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">How to study this without getting overwhelmed 🧠</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                ["1", "Memorize the layer stack", "Know what each layer is responsible for."],
                ["2", "Follow one web request", "Trace browser → DNS → TCP → IP → link → server."],
                ["3", "Compare similar ideas", "TCP vs UDP, IP vs MAC, forwarding vs routing."],
                ["4", "Practice with scenarios", "Ask: which layer solves this problem?"],
              ].map(([n, h, p]) => <div key={n} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 font-black text-white">{n}</div><h3 className="font-black">{h}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{p}</p></div>)}
            </div>
          </Card>
        </section>
        <PracticeZone />

        <section id="glossary" className="scroll-mt-24 pt-16">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Beginner Glossary</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-5xl">Search key terms 🔎</h2>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search TCP, DNS, MAC..." className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-11 pr-4 outline-none focus:border-slate-900" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredGlossary.map(([term, def]) => <Card key={term}><h3 className="text-xl font-black">{term}</h3><p className="mt-2 leading-7 text-slate-600">{def}</p></Card>)}
          </div>
        </section>

        <footer className="mt-20 rounded-3xl bg-slate-950 p-8 text-white">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-black">Networking 2 Beginner Compilation</h2>
              <p className="mt-2 max-w-2xl text-slate-300">Use the dashboard for navigation, the chapter cards for review, and the glossary for fast recall before quizzes or exams.</p>
            </div>
            <a href="#top" className="rounded-2xl bg-white px-5 py-3 font-bold text-slate-950">Back to top</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
