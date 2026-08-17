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
                  "Internet stack",
                  "Processing delay",
                  "Queueing delay",
                  "Transmission delay",
                  "Propagation delay",
                  "Traceroute",
                  "Access network",
                  "Hybrid fiber coax (HFC)",
                  "Cable modem termination system (CMTS)",
                  "Digital subscriber line (DSL)",
                  "DSLAM",
                  "Frequency division multiplexing (FDM)",
                  "Time division multiplexing (TDM)",
                  "Twisted pair",
                  "Coaxial cable",
                  "Fiber optic cable",
                  "Guided media",
                  "Unguided media",
                  "Internet exchange point (IXP)",
                  "Tier-1 ISP",
                  "Peering link",
                  "Regional ISP",
                  "Content provider network",
                  "Point of presence (PoP)",
                  "Malware",
                  "Virus",
                  "Worm",
                  "Botnet",
                  "Denial of service (DoS)",
                  "Packet sniffing",
                  "IP spoofing"
            ],
            "keyPoints": [
                  "The Internet is a network of networks, not one single machine or cable.",
                  "End systems create and consume data, while packet switches move that data through the core.",
                  "Packet switching lets many users share links efficiently, but delay and loss can happen.",
                  "Protocols standardize communication so devices from different vendors can interoperate.",
                  "Layering keeps networking manageable by assigning clear responsibilities to each layer.",
                  "Nodal delay has exactly four components: processing, queueing, transmission, and propagation. Only transmission delay depends on packet length, and only propagation delay depends on physical distance.",
                  "Transmission delay is L/R (packet length in bits divided by link rate). Propagation delay is d/s (link distance divided by signal speed). Confusing the two is the most common delay-question mistake.",
                  "Queueing delay is the only component that varies with traffic load, and it is the one that grows without bound as arrival rate approaches link capacity.",
                  "Packet loss happens when a packet arrives at a router whose output buffer is already full, not because the link 'broke'.",
                  "Residential access is asymmetric by design: cable (HFC) and DSL both allocate far more downstream capacity than upstream, because typical home traffic is download-heavy.",
                  "Cable access is shared among the homes on a segment, so neighbours compete for capacity. DSL runs a dedicated line to the central office, so it does not.",
                  "End-to-end throughput is capped by the bottleneck link, which is usually the access link rather than the backbone.",
                  "The Internet core is hierarchical: access ISPs connect to regional ISPs, which connect to tier-1 ISPs, with IXPs and peering links providing shortcuts between them.",
                  "Content provider networks (Google, Meta, Netflix) run private backbones that bypass tier-1 transit to sit closer to end users.",
                  "The Internet was not designed with security in mind, so sniffing, spoofing, and denial of service are consequences of the original trust model rather than implementation bugs."
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
                        ],
                        [
                              "Transmission vs propagation delay",
                              "Time to push bits onto the link vs time for a bit to travel the link.",
                              "Transmission depends on packet size and link rate; propagation depends on distance and medium only."
                        ],
                        [
                              "Queueing vs processing delay",
                              "Waiting for the output link vs header checking and table lookup.",
                              "Queueing varies with congestion; processing is small and roughly constant."
                        ],
                        [
                              "Cable (HFC) vs DSL",
                              "Shared coax to a headend vs dedicated copper pair to a central office.",
                              "Cable neighbours contend for capacity; DSL rate degrades with distance to the DSLAM instead."
                        ],
                        [
                              "Guided vs unguided media",
                              "Signal confined to a solid medium vs radiated freely.",
                              "Guided media resist interference; unguided media trade that away for mobility."
                        ],
                        [
                              "Transit vs peering",
                              "Paying an upstream ISP to reach everywhere vs swapping traffic directly with an equal.",
                              "Explains why Internet topology follows money and policy, not geography."
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
                        "Transmit",
                        "The host pushes L bits onto the access link at rate R, taking L/R seconds."
                  ],
                  [
                        "Propagate",
                        "Bits travel the physical link at roughly two-thirds the speed of light."
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
            ],
            "objectives": [
                  "Name the four components of nodal delay and state which input each one depends on.",
                  "Compute transmission delay as L/R and total store-and-forward delay across N hops.",
                  "Explain why residential access technologies are asymmetric and where each one shares capacity.",
                  "Trace how access ISPs, regional ISPs, IXPs, and tier-1 ISPs interconnect."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: the four delay components",
                        "text": "A 10,000-bit packet crosses a 100 Mb/s link that is 1,000 km long. Transmission delay = L/R = 10,000 / 100,000,000 = 0.1 ms. Propagation delay = d/s = 1,000,000 m / (2 x 10^8 m/s) = 5 ms. Processing delay is typically well under a millisecond. Queueing delay depends entirely on how busy the router is. Here propagation dominates by 50x, which is why doubling link speed does almost nothing for a long-haul round trip."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Store-and-forward, stated precisely",
                        "text": "A router must receive the entire packet before it may begin forwarding it. So sending one L-bit packet across N links of rate R with zero propagation delay takes N x L/R seconds, not L/R. The lecture example uses L = 10 Kbits and R = 100 Mb/s for a one-hop delay of 0.1 ms and an end-to-end delay of 0.2 ms over two links."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "Access-network rates in the slides are dated",
                        "text": "The lecture deck quotes HFC at 40 Mbps to 1.2 Gbps downstream and DSL at 24-52 Mbps downstream. These are pre-DOCSIS-4.0, pre-fibre-to-the-home figures. The durable exam point is the asymmetry and the shared-versus-dedicated distinction, not the specific numbers. Check current CableLabs and ITU specifications before quoting a rate."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "Root server and traffic statistics have moved on",
                        "text": "The deck's '~200 root servers in the US' understates reality by an order of magnitude: the root server system has 13 identities run by 12 organisations, deployed as roughly two thousand anycast instances worldwide. Likewise the '~18B connected devices (2017)' and 'Facebook ~2.5 billion users' figures are dated framing, and 5G is deployed rather than 'coming'. Added from root-servers.org."
                  }
            ],
            "sources": [
                  {
                        "title": "Root Server Technical Operations Association",
                        "publisher": "root-servers.org",
                        "url": "https://root-servers.org/"
                  },
                  {
                        "title": "RFC 1122: Requirements for Internet Hosts - Communication Layers",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc1122/"
                  }
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
                  "Port number",
                  "Non-persistent HTTP",
                  "Round-trip time (RTT)",
                  "HTTP/2",
                  "HTTP/3",
                  "QUIC",
                  "Head-of-line blocking",
                  "Proxy server",
                  "Root DNS server",
                  "TLD server",
                  "Local DNS server",
                  "Iterative query",
                  "Recursive query",
                  "Resource record",
                  "A record",
                  "CNAME record",
                  "NS record",
                  "MX record",
                  "DNS caching",
                  "DNSSEC",
                  "DNS cache poisoning",
                  "BitTorrent",
                  "Torrent",
                  "Tracker",
                  "Chunk",
                  "Churn",
                  "Constant bit rate (CBR)",
                  "Variable bit rate (VBR)",
                  "Manifest file",
                  "Enter deep",
                  "Bring home",
                  "Over the top (OTT)"
            ],
            "keyPoints": [
                  "Application protocols define message types, syntax, semantics, and timing.",
                  "Sockets are APIs that let application processes use transport services such as TCP or UDP.",
                  "DNS maps human-friendly names to resource records such as IP addresses, while recursive resolvers and authoritative servers divide the work.",
                  "HTTP is stateless at its core, but cookies and application sessions let sites connect separate requests.",
                  "CDNs and caches reduce latency and backbone traffic by serving reusable content from locations closer to users.",
                  "Non-persistent HTTP costs 2 RTT plus transmission time per object: one RTT to open the TCP connection and one for the request and first bytes of the response.",
                  "Persistent HTTP leaves the connection open, so subsequent objects cost about one RTT each instead of two, roughly halving page response time.",
                  "HTTP/2 keeps HTTP/1.1 methods, status codes, and most headers. What changes is delivery: objects are split into frames and interleaved so a small object no longer waits behind a large one.",
                  "HTTP/2 still runs over a single TCP connection, so a lost segment stalls every stream on it. HTTP/3 moves to QUIC over UDP to give each object its own loss recovery.",
                  "DNS is a distributed hierarchy for a reason: a single central database would be a single point of failure, a traffic bottleneck, a maintenance problem, and far away from most clients.",
                  "In an iterative query the contacted server replies with the name of the next server to ask. In a recursive query it takes on the job of resolving the name itself.",
                  "The local DNS server is not part of the hierarchy. It acts as a proxy for its clients and caches results, which is why most lookups never reach a root server.",
                  "DNS caching is why root servers survive the query load, but it also means a changed record can be stale until the TTL expires.",
                  "In BitTorrent a peer joins a torrent with no chunks, registers with a tracker to obtain a peer list, and trades chunks while it downloads. New peers add capacity as well as demand, which is what makes P2P self-scaling.",
                  "DASH puts the intelligence in the client: the server stores each chunk at several encoding rates, and the client picks a rate per chunk based on measured bandwidth and buffer level.",
                  "CDNs choose between enter deep (many servers pushed into access networks, close to users) and bring home (fewer, larger clusters near but not inside access networks)."
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
                        ],
                        [
                              "Non-persistent vs persistent HTTP",
                              "New TCP connection per object vs one reused connection.",
                              "2 RTT per object vs about 1 RTT per object."
                        ],
                        [
                              "HTTP/1.1 vs HTTP/2",
                              "In-order responses vs interleaved frames with client priorities.",
                              "HTTP/2 stops a large object from blocking small ones."
                        ],
                        [
                              "HTTP/2 vs HTTP/3",
                              "One TCP connection vs QUIC streams over UDP.",
                              "A lost segment stalls all HTTP/2 streams but only one HTTP/3 stream."
                        ],
                        [
                              "Iterative vs recursive DNS query",
                              "Server returns a referral vs server does the work.",
                              "Referrals keep load off upper levels of the hierarchy."
                        ],
                        [
                              "A vs CNAME record",
                              "Name to IP address vs alias to canonical name.",
                              "www.example.com may be a CNAME for a hosting provider's real name."
                        ],
                        [
                              "Client-server vs P2P",
                              "Fixed server capacity vs capacity that grows with peers.",
                              "Web hosting vs BitTorrent distribution."
                        ],
                        [
                              "CBR vs VBR encoding",
                              "Fixed encoding rate vs rate that follows scene complexity.",
                              "VBR spends bits where the picture actually needs them."
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
            ],
            "objectives": [
                  "Compute page response time for non-persistent and persistent HTTP in units of RTT.",
                  "Explain head-of-line blocking and how HTTP/2 and HTTP/3 each attack it.",
                  "Trace a DNS lookup through local, root, TLD, and authoritative servers in both iterative and recursive form.",
                  "Describe how DASH and CDN placement together make video streaming scale."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: why persistent HTTP wins",
                        "text": "A page has a base HTML file and 8 referenced objects, and RTT is 100 ms. Non-persistent, serial: (1 + 8) x 2 RTT = 1.8 s before transmission time. Persistent with pipelining: 2 RTT for the base file, then about 1 RTT for all 8 referenced objects = roughly 0.3 s. The saving is entirely connection setup, which is why browsers also opened parallel connections before HTTP/2 existed."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "The slides cite superseded HTTP specifications",
                        "text": "The lecture deck cites HTTP/2 as RFC 7540 (2015). RFC 9113 obsoleted RFC 7540 in June 2022, and HTTP/1.1 was likewise re-specified as RFC 9110-9112. HTTP/3, which the deck mentions without a citation, is RFC 9114 and runs over QUIC (RFC 9000). Corrected against the IETF Datatracker."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "Two e-mail RFC numbers in the deck are wrong",
                        "text": "One slide reads 'SMTP ... defined in RFC 531'. SMTP is RFC 5321 - the same deck states this correctly two slides earlier, so 531 is text-extraction damage. The deck also cites RFC 822 for message format; that was superseded by RFC 2822 and then RFC 5322."
                  },
                  {
                        "kind": "callout",
                        "tone": "security",
                        "title": "Why DNS is attractive to attackers",
                        "text": "DNS runs over UDP with no authentication by default, so a forged reply that arrives before the real one is accepted and cached - cache poisoning. The same property enables amplification: a small spoofed query produces a large reply aimed at the victim. DNSSEC adds origin authentication and integrity to records; it does not add confidentiality."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Beyond the lecture deck: RTP",
                        "text": "RTP appears in this unit's term list but not in the slides. It is covered in the multimedia chapter of the textbook and is included here because it completes the streaming picture alongside DASH."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 9113: HTTP/2",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc9113/"
                  },
                  {
                        "title": "RFC 9114: HTTP/3",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc9114/"
                  },
                  {
                        "title": "RFC 5321: Simple Mail Transfer Protocol",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc5321/"
                  }
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
                  "Timeout",
                  "Connectionless demultiplexing",
                  "Connection-oriented demultiplexing",
                  "Four-tuple",
                  "Internet checksum",
                  "One's complement sum",
                  "Wraparound carry",
                  "UDP segment header",
                  "Logical communication",
                  "Datagram socket",
                  "Welcoming socket",
                  "HTTP/3 over UDP"
            ],
            "keyPoints": [
                  "Transport protocols use ports to provide process-to-process delivery above IP's host-to-host service.",
                  "Port numbers are essential when many apps run on one host.",
                  "UDP offers minimal, message-oriented transport over IP; delivery, ordering, duplicate protection, and congestion behavior are left to the application or other layers.",
                  "TCP provides reliable, ordered byte-stream delivery with flow control and congestion control.",
                  "TCP can recover from many losses with retransmission, but neither TCP nor UDP can stop the network from dropping packets.",
                  "The transport layer provides logical communication between processes; the network layer provides it between hosts. That one sentence is the whole distinction.",
                  "UDP demultiplexes on the destination port number alone. Two segments with different source addresses or ports but the same destination port go to the same socket.",
                  "TCP demultiplexes on the full four-tuple of source IP, source port, destination IP, and destination port. That is why one server port can hold thousands of simultaneous connections on separate sockets.",
                  "The UDP checksum is computed over the UDP header, the data, and selected IP header fields, treated as a sequence of 16-bit integers summed in one's complement with the carry wrapped around.",
                  "The Internet checksum is weak: compensating bit errors in different words can leave the sum unchanged, so 'checksum matches' does not prove 'no errors'.",
                  "UDP is chosen when connection setup delay, connection state, or congestion throttling would hurt more than occasional loss - which is why DNS, SNMP, streaming media, and HTTP/3 all use it.",
                  "Applications that need reliability over UDP do not get it for free; HTTP/3 rebuilds reliability and congestion control at the application layer inside QUIC."
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
                        ],
                        [
                              "Demultiplexing key",
                              "Four-tuple: source IP, source port, dest IP, dest port.",
                              "Destination port number only."
                        ],
                        [
                              "Header size",
                              "20 bytes minimum, more with options.",
                              "8 bytes: source port, dest port, length, checksum."
                        ],
                        [
                              "Sending rate",
                              "Throttled by congestion control.",
                              "Sends as fast as the application asks."
                        ],
                        [
                              "Error handling",
                              "Checksum plus retransmission.",
                              "Checksum detects, then the segment is discarded."
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
                        "Checksum",
                        "Sender sums the segment as 16-bit words and stores the complement."
                  ],
                  [
                        "Deliver",
                        "Network carries it."
                  ],
                  [
                        "Verify",
                        "Receiver recomputes the checksum and discards on mismatch."
                  ],
                  [
                        "Demux",
                        "Receiver chooses the socket."
                  ]
            ],
            "objectives": [
                  "State which header fields UDP and TCP each use to choose a socket.",
                  "Compute a 16-bit one's complement checksum including the wraparound carry.",
                  "Explain why a matching checksum does not guarantee an error-free segment.",
                  "Justify choosing UDP for a given application from its delay and loss requirements."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Demultiplexing, stated as a rule",
                        "text": "Three segments all arrive at host B on port 80. Under UDP they would all be handed to one socket. Under TCP they land on three different sockets if they came from different (source IP, source port) pairs. This is exactly why a web server can serve many clients on a single well-known port."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "The Internet checksum is weak protection",
                        "text": "The deck demonstrates this directly: take two 16-bit words, flip a 0 to 1 in one and a 1 to 0 in the matching position of the other, and the sum is unchanged - so the checksum still matches and the error passes undetected. This is why link layers add CRC, which catches far more error patterns, and why the checksum is a cheap sanity check rather than a guarantee."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Source coverage gap",
                        "text": "The lecture deck for this unit ends at the checksum slide, even though its own roadmap promises reliable data transfer, TCP, and congestion control. That material is covered in unit 2.1B of this reviewer and is standard textbook content, but it is not backed by the supplied slides. See docs/networking2/CONTENT-REVIEW.md."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 768: User Datagram Protocol",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc768/"
                  },
                  {
                        "title": "RFC 1071: Computing the Internet Checksum",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc1071/"
                  }
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
                  "TCP Reno",
                  "Sequence number space",
                  "Receive window",
                  "Three-way handshake",
                  "SYN segment",
                  "SYNACK segment",
                  "Triple duplicate ACK",
                  "Retransmission timer",
                  "Exponential backoff",
                  "Threshold (ssthresh)",
                  "TCP Tahoe",
                  "TCP CUBIC",
                  "Explicit congestion notification (ECN)",
                  "Bandwidth-delay product",
                  "TCP fairness",
                  "Bottleneck link"
            ],
            "keyPoints": [
                  "Reliable data transfer uses checksums, ACKs, timers, and retransmission.",
                  "Pipelining improves utilization compared with stop-and-wait.",
                  "Go-Back-N is simpler but can retransmit unnecessary packets.",
                  "Selective Repeat is more efficient but requires more receiver buffering and tracking.",
                  "Classic TCP treats timeout loss, duplicate ACK loss, and ECN signals as congestion indicators, then adjusts the congestion window.",
                  "Stop-and-wait wastes the link because the sender idles for a whole round trip per packet. Utilisation is (L/R) / (RTT + L/R), which is tiny on a fast, long link.",
                  "Pipelining fixes that by allowing many unacknowledged packets in flight; the window needed to fill a link is the bandwidth-delay product.",
                  "Go-Back-N uses cumulative ACKs and a single timer, so the receiver needs no buffer for out-of-order packets, but one loss forces the whole window to be resent.",
                  "Selective Repeat ACKs each packet individually and buffers out-of-order arrivals, so only the lost packet is resent - at the cost of per-packet timers and receiver buffering.",
                  "TCP is a hybrid: it uses cumulative ACKs like Go-Back-N but retransmits a single segment like Selective Repeat, and optional SACK adds selective acknowledgement.",
                  "TCP's timeout uses an estimated RTT plus a safety margin: TimeoutInterval = EstimatedRTT + 4 x DevRTT, so a jittery path gets a longer timer.",
                  "Fast retransmit does not wait for the timer: three duplicate ACKs for the same sequence number mean later segments arrived and the gap is real, so the sender resends immediately.",
                  "The sending rate is limited by the minimum of the congestion window and the receive window - congestion control protects the network, flow control protects the receiver.",
                  "Slow start is exponential, not slow: the congestion window doubles each RTT until it reaches ssthresh or a loss occurs. The name refers to starting from one segment, not to the growth rate.",
                  "AIMD is what makes TCP fair: additive increase probes for spare capacity gently, multiplicative decrease backs off sharply, and competing flows converge toward an equal share.",
                  "Timeout is treated as a worse signal than triple duplicate ACKs. Tahoe drops to a window of 1 on either; Reno halves the window on triple duplicate ACKs and only collapses on timeout."
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
                        ],
                        [
                              "Flow control vs congestion control",
                              "Do not overrun the receiver vs do not overrun the network.",
                              "Receive window is advertised by the peer; congestion window is inferred from loss."
                        ],
                        [
                              "Timeout vs triple duplicate ACK",
                              "No feedback at all vs later segments still arriving.",
                              "Timeout implies severe congestion; duplicate ACKs imply the path still works."
                        ],
                        [
                              "Slow start vs congestion avoidance",
                              "Double the window each RTT vs add one MSS each RTT.",
                              "Fast probing until ssthresh, then cautious linear growth."
                        ],
                        [
                              "TCP Tahoe vs TCP Reno",
                              "Window to 1 on any loss vs halve on triple duplicate ACK.",
                              "Reno recovers throughput faster after isolated losses."
                        ]
                  ]
            },
            "flow": [
                  [
                        "Handshake",
                        "SYN, SYNACK, ACK establish the connection and initial sequence numbers."
                  ],
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
            ],
            "objectives": [
                  "Contrast Go-Back-N and Selective Repeat by what the receiver buffers and what the sender resends.",
                  "Compute a TCP timeout interval from EstimatedRTT and DevRTT.",
                  "Trace the congestion window through slow start, congestion avoidance, fast retransmit, and timeout.",
                  "Explain why AIMD drives competing TCP flows toward a fair share of a bottleneck link."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "This unit has no lecture-deck source",
                        "text": "The supplied transport deck (2.1) stops at the checksum slide even though its roadmap promises reliable data transfer, TCP, and congestion control. Everything in this unit is standard Kurose and Ross chapter 3 material and is exam-relevant, but it could not be cross-checked against the slides. If the instructor has the remaining slides, they should be added. See docs/networking2/CONTENT-REVIEW.md, Table 2."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: why three duplicate ACKs",
                        "text": "A sender transmits segments 1 through 5. Segment 2 is lost. The receiver ACKs 1, then on receiving 3, 4, and 5 it re-sends the ACK for 1 each time, because a cumulative ACK can only report the last in-order byte. The sender now has three duplicate ACKs for 1 - evidence that 3, 4, and 5 arrived and only 2 is missing - so it resends segment 2 without waiting for the timer. One duplicate could just be reordering; three is a strong signal."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Beyond the lecture deck: modern congestion control",
                        "text": "Reno is the teaching model. Most Linux servers today default to CUBIC, which grows the window as a cubic function of time since the last loss so it recovers faster on high bandwidth-delay-product paths. BBR takes a different approach again, modelling bottleneck bandwidth and round-trip propagation time instead of treating loss as the congestion signal. Added for currency; the exam model is still AIMD."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 9293: Transmission Control Protocol (TCP)",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc9293/"
                  },
                  {
                        "title": "RFC 5681: TCP Congestion Control",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc5681/"
                  },
                  {
                        "title": "RFC 8312: CUBIC for Fast Long-Distance Networks",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc8312/"
                  }
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
                  "Fragmentation",
                  "Best-effort service",
                  "Line-speed processing",
                  "Decentralized switching",
                  "Switching via memory",
                  "Switching via bus",
                  "Switching via interconnection network",
                  "Crossbar switch",
                  "Multistage switch",
                  "Switching fabric plane",
                  "Input port queueing",
                  "Head-of-line (HOL) blocking",
                  "Output port queueing",
                  "Buffer management",
                  "Drop policy",
                  "Scheduling discipline",
                  "Priority scheduling",
                  "Network neutrality",
                  "Generalized forwarding",
                  "Match plus action"
            ],
            "keyPoints": [
                  "Forwarding and routing are related but not the same task.",
                  "Routers forward by matching destination IP addresses against prefix entries, selecting the longest matching prefix.",
                  "IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses, a fixed base header, extension headers, and source-only fragmentation.",
                  "DHCP leases IP configuration such as address, subnet mask, default gateway, and DNS server information.",
                  "NAT rewrites address and often port fields so many private hosts can share public IPv4 addresses, while also affecting end-to-end reachability.",
                  "Forwarding is a local, per-router action measured in nanoseconds and done in hardware. Routing is a network-wide computation measured in milliseconds and done in software.",
                  "Input port lookup must complete at line speed, meaning faster than packets can arrive, or the input queue grows without bound.",
                  "Longest prefix matching means the most specific matching entry wins, not the first one listed. An address matching both a /16 and a /24 entry takes the /24.",
                  "Switching fabrics come in three families: via memory (limited by memory bandwidth, two bus crossings per datagram), via a shared bus (limited by bus bandwidth, one packet at a time), and via an interconnection network such as a crossbar (parallel, so it scales).",
                  "Input queueing suffers head-of-line blocking: a packet stuck at the front waiting for a busy output port blocks the packets behind it even when their output ports are free.",
                  "Output queueing is needed whenever the fabric delivers packets faster than the outgoing link can transmit them, which is the normal case when N inputs target one output.",
                  "Packet loss inside a router happens at a full buffer, so the drop policy - which packet to discard when the buffer is full - is a real design decision, not an accident.",
                  "The scheduling discipline decides which queued packet is transmitted next. Priority scheduling gives some traffic better service than other traffic, which is precisely what network-neutrality debates are about.",
                  "Best-effort service promises nothing about delay, jitter, loss, or bandwidth. It succeeded anyway because the mechanism is simple, bandwidth was over-provisioned, CDNs moved content closer, and elastic applications adapt."
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
                        ],
                        [
                              "Data plane vs control plane",
                              "Per-router, per-packet vs network-wide logic.",
                              "Table lookup vs computing the table."
                        ],
                        [
                              "Switching via memory vs via bus",
                              "CPU copies through system memory vs a shared bus moves it directly.",
                              "First-generation routers vs a 32 Gbps bus in an access router."
                        ],
                        [
                              "Bus vs crossbar fabric",
                              "One transfer at a time vs many non-conflicting transfers in parallel.",
                              "Crossbars scale to hundreds of Tbps with multiple planes."
                        ],
                        [
                              "Input vs output queueing",
                              "Fabric is slower than the inputs vs the link is slower than the fabric.",
                              "Input queueing causes HOL blocking; output queueing does not."
                        ],
                        [
                              "Destination-based vs generalized forwarding",
                              "Match the destination IP only vs match any set of header fields.",
                              "Traditional IP routing vs OpenFlow match-plus-action."
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
                        "Schedule",
                        "The discipline picks which queued packet goes next."
                  ],
                  [
                        "Transmit",
                        "Packet leaves the router."
                  ]
            ],
            "objectives": [
                  "Apply longest prefix matching to select an outgoing interface from a forwarding table.",
                  "Compare the three switching fabric families by what limits each one's throughput.",
                  "Explain head-of-line blocking and why output queueing avoids it.",
                  "Identify where inside a router queueing delay and loss actually occur."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: longest prefix matching",
                        "text": "A table holds 11001000 00010111 00010*** ******** on interface 0 and 11001000 00010111 00011000 ******** on interface 1, plus 11001000 00010111 00011*** ******** on interface 2. The address 11001000 00010111 00011000 10101010 matches both interface 1 (a 24-bit prefix) and interface 2 (a 21-bit prefix). The longer prefix wins, so it leaves on interface 1. Always compare prefix length, never table order."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Head-of-line blocking, concretely",
                        "text": "Two input ports each hold a red packet destined for the same output port, and behind one of them sits a green packet destined for a free output port. Only one red packet can be switched, so the other waits - and the green packet waits behind it despite its own output port being idle. The queue discipline, not the fabric capacity, is what wastes the opportunity."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "Source coverage gap for IP addressing",
                        "text": "The supplied network-layer deck ends at output port queueing, although its roadmap promises the IP datagram format, addressing, NAT, IPv6, generalized forwarding with OpenFlow, and middleboxes. The IPv4/IPv6, CIDR, DHCP, NAT, and fragmentation material in this unit is standard chapter 4 content but is not backed by the supplied slides. See docs/networking2/CONTENT-REVIEW.md, Table 2."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 791: Internet Protocol",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc791/"
                  },
                  {
                        "title": "RFC 8200: Internet Protocol, Version 6 (IPv6) Specification",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc8200/"
                  },
                  {
                        "title": "RFC 4632: Classless Inter-domain Routing (CIDR)",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc4632/"
                  }
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
                  "Topology database",
                  "Global routing information",
                  "Decentralized routing information",
                  "Static routing",
                  "Dynamic routing",
                  "Bellman-Ford equation",
                  "Link-state broadcast",
                  "Least-cost path",
                  "Predecessor node",
                  "Iterative algorithm",
                  "Asynchronous update",
                  "Self-stopping algorithm",
                  "Good news travels fast",
                  "Bad news travels slow",
                  "Routing oscillation",
                  "Black-holing",
                  "Message complexity",
                  "Convergence time"
            ],
            "keyPoints": [
                  "Link-state routing relies on a broad view of topology.",
                  "Distance-vector routing relies on neighbor-to-neighbor sharing of distance estimates.",
                  "OSPF floods link-state advertisements within an area and computes shortest paths from the link-state database.",
                  "Convergence matters because stale or inconsistent routing information can cause loops, blackholes, or poor paths.",
                  "Hierarchy improves routing scalability in large networks.",
                  "Routing algorithms are classified on two independent axes: global versus decentralized information, and static versus dynamic response to change.",
                  "Dijkstra's algorithm is centralized in the sense that every router runs it on the same complete map, not that one router runs it for everyone.",
                  "Dijkstra's cost is O(n^2) in the naive form because each of n iterations scans all remaining nodes; a priority queue reduces this to O(n log n).",
                  "Link-state message complexity is O(n^2): each of n routers floods its link state across O(n) links.",
                  "The Bellman-Ford equation is the whole of distance vector: Dx(y) = min over neighbours v of { c(x,v) + Dv(y) }. The neighbour achieving the minimum becomes the next hop.",
                  "Distance vector is iterative, asynchronous, distributed, and self-stopping: a router recomputes only when a link cost changes or a neighbour's vector arrives, and it notifies neighbours only when its own vector changes.",
                  "Information diffuses one hop per iteration, so a node's state can influence routers k hops away only after k rounds.",
                  "Good news travels fast: a cost decrease propagates in a few rounds. Bad news travels slow: a cost increase can trigger count-to-infinity, where two routers keep raising their estimates through each other one step at a time.",
                  "Link-state can oscillate when link costs depend on the traffic those links carry, because every router reacts to the same measurement simultaneously.",
                  "The failure modes differ in blast radius. A faulty link-state router advertises a wrong link cost. A faulty distance-vector router can claim a cheap path to everywhere and black-hole traffic, and the error propagates through every table that trusts it."
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
                        ],
                        [
                              "Message complexity",
                              "Link-state: O(n^2) messages network-wide.",
                              "Distance-vector: only between neighbours, but for an unpredictable number of rounds."
                        ],
                        [
                              "Convergence",
                              "Link-state: O(n^2) algorithm, may oscillate with load-dependent costs.",
                              "Distance-vector: variable, may loop or count to infinity."
                        ],
                        [
                              "Robustness to a faulty router",
                              "Link-state: advertises one wrong link cost.",
                              "Distance-vector: can claim cheap paths everywhere and black-hole traffic network-wide."
                        ],
                        [
                              "Algorithm family",
                              "Link-state uses Dijkstra on a full graph.",
                              "Distance-vector uses Bellman-Ford on neighbour estimates."
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
            ],
            "objectives": [
                  "Classify a routing algorithm by information scope (global or decentralized) and by responsiveness (static or dynamic).",
                  "Run Dijkstra's algorithm by hand and state its time and message complexity.",
                  "Apply the Bellman-Ford equation to compute a distance vector entry and its next hop.",
                  "Explain count-to-infinity and why link-state and distance-vector fail differently."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: the Bellman-Ford equation",
                        "text": "Node u has neighbours v, x, and w with link costs c(u,v)=2, c(u,x)=1, c(u,w)=5. Their advertised costs to z are Dv(z)=5, Dx(z)=3, Dw(z)=3. Then Du(z) = min{2+5, 1+3, 5+3} = min{7, 4, 8} = 4. The minimum is achieved via x, so x becomes u's next hop toward z. The next hop falls out of the same computation as the cost - you never compute it separately."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Count-to-infinity, step by step",
                        "text": "x-y costs 4, y-z costs 1, x-z costs 50. The x-y link jumps to 60. y sees its direct cost is now 60 but z advertises a path at 5, so y computes 6 via z - not knowing z's path runs through y. y tells z 6, so z computes 7. y then computes 8, z computes 9, and so on. Each router is reasoning correctly from information that is already stale. This is why 'bad news travels slow'."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Beyond the lecture deck: poisoned reverse",
                        "text": "This unit's term list includes poisoned reverse, but the slides only say 'see text for solutions'. The idea: if y routes to x through z, y advertises to z that its distance to x is infinity, so z will never route back through y. It fixes two-node loops but not loops involving three or more routers. Added from the textbook to complete the term."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 2328: OSPF Version 2",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc2328/"
                  },
                  {
                        "title": "RFC 2080: RIPng for IPv6",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc2080/"
                  }
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
                  "Gateway router",
                  "OPEN message",
                  "UPDATE message",
                  "KEEPALIVE message",
                  "NOTIFICATION message",
                  "Path vector protocol",
                  "Import policy",
                  "Export policy",
                  "Area border router",
                  "Backbone router",
                  "Boundary router",
                  "Hierarchical OSPF",
                  "OSPF authentication",
                  "SDN controller",
                  "Northbound API",
                  "Southbound API",
                  "OpenFlow",
                  "Flow table",
                  "ICMP",
                  "ICMP type and code",
                  "TTL expired",
                  "Port unreachable",
                  "Traceroute"
            ],
            "keyPoints": [
                  "BGP is path-vector and policy-driven, not a simple shortest-path protocol.",
                  "AS-PATH lists autonomous systems a route advertisement has traversed, helping loop detection and policy decisions.",
                  "eBGP exchanges routes between ASes; iBGP distributes BGP routes inside an AS.",
                  "Business relationships such as customer, provider, and peer affect route export.",
                  "Hot-potato routing may choose a nearby exit even if the remaining external path is longer.",
                  "Intra-AS and inter-AS routing exist for different reasons: inside an AS a single administrator optimises performance, between ASes policy and business relationships dominate.",
                  "OSPF floods link-state advertisements directly over IP rather than over TCP or UDP, and all OSPF messages can be authenticated to prevent malicious injection.",
                  "Hierarchical OSPF has three router roles worth naming: area border routers summarise their area into the backbone, backbone routers run OSPF limited to area 0, and boundary routers connect to other autonomous systems.",
                  "BGP runs over a semi-permanent TCP connection between peers and uses exactly four message types: OPEN to establish and authenticate, UPDATE to advertise or withdraw a path, KEEPALIVE to hold the session up and acknowledge OPEN, and NOTIFICATION to report an error and close.",
                  "An advertised BGP route is a prefix plus attributes. The two that matter most are AS-PATH, the list of ASes the advertisement crossed, and NEXT-HOP, the specific router to send to.",
                  "BGP route selection follows a fixed order: highest local preference first, then shortest AS-PATH, then closest NEXT-HOP (hot potato), then further tiebreakers. Local preference outranks path length because policy outranks distance.",
                  "SDN separates the control plane from the data plane and moves it to a logically centralised controller, so forwarding tables are computed centrally and pushed down rather than emerging from a distributed protocol.",
                  "OpenFlow is the southbound protocol between controller and switch, carried over TCP with optional encryption, with three message classes: controller-to-switch, asynchronous switch-to-controller, and symmetric.",
                  "ICMP carries network-layer control and error information inside IP datagrams, and each message is a type plus a code plus the first 8 bytes of the datagram that caused the error.",
                  "Traceroute is built entirely from ICMP behaviour: send datagrams with increasing TTL, collect the type 11 code 0 'TTL expired' replies from each router in turn, and stop when the destination returns type 3 code 3 'port unreachable'."
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
                        ],
                        [
                              "eBGP vs iBGP",
                              "Between ASes vs inside one AS.",
                              "A gateway router runs both; iBGP must reach every internal router."
                        ],
                        [
                              "Intra-AS vs inter-AS routing",
                              "Performance-driven vs policy-driven.",
                              "OSPF optimises cost; BGP obeys business relationships first."
                        ],
                        [
                              "Per-router vs SDN control plane",
                              "Every router runs the algorithm vs a controller computes and installs tables.",
                              "SDN trades distributed resilience for central programmability."
                        ],
                        [
                              "ICMP type 11 vs type 3",
                              "TTL expired in transit vs destination unreachable.",
                              "Traceroute uses the first to map hops and the second to know it arrived."
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
            ],
            "objectives": [
                  "Explain why policy rather than shortest path governs inter-AS routing.",
                  "Apply the BGP route-selection order to choose between competing advertisements.",
                  "Name the four BGP message types and what each one does.",
                  "Reconstruct how traceroute uses ICMP TTL-expired and port-unreachable messages."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: hot potato routing",
                        "text": "Router 2d learns via iBGP that it can reach X through gateway 2a or gateway 2c. The intra-domain OSPF cost to 2a is 112 and to 2c is 263. Hot potato picks 2a purely because it is cheaper to reach internally - even though the path through 2a crosses more autonomous systems afterwards. The AS is minimising its own carrying cost and pushing the traffic out of its network as fast as possible."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Reading the BGP selection order correctly",
                        "text": "Local preference comes first, and it is a policy value set by the local administrator. That is why a route with a longer AS-PATH can still win: the operator has decided that reaching a destination through a particular neighbour is commercially preferable. Only when local preference ties does path length matter, and only when that ties does hot potato apply."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Beyond the lecture deck: MED and route aggregation",
                        "text": "MED (Multi-Exit Discriminator) and route aggregation appear in this unit's term list but not in the slides. MED lets an AS hint which of several entry points a neighbour should prefer. Route aggregation combines several specific prefixes into one shorter advertisement, which is the main reason the global routing table has not grown even faster than it has. Added from the textbook."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 4271: A Border Gateway Protocol 4 (BGP-4)",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc4271/"
                  },
                  {
                        "title": "RFC 792: Internet Control Message Protocol",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc792/"
                  },
                  {
                        "title": "RFC 2328: OSPF Version 2",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc2328/"
                  }
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
                  "Southbound API",
                  "Command line interface (CLI)",
                  "GetRequest",
                  "GetNextRequest",
                  "GetBulkRequest",
                  "SetRequest",
                  "Response PDU",
                  "Trap PDU",
                  "Request-response mode",
                  "Trap mode",
                  "get-config",
                  "edit-config",
                  "lock and unlock",
                  "create-subscription",
                  "rpc-reply",
                  "Hello capabilities exchange",
                  "Configuration datastore",
                  "Atomic commit",
                  "Northbound API",
                  "Network-wide state management"
            ],
            "keyPoints": [
                  "Management systems need both monitoring and configuration capabilities.",
                  "SNMP is common for polling managed objects and receiving asynchronous notifications such as traps.",
                  "NETCONF and YANG provide structured, model-driven configuration.",
                  "SDN centralizes or abstracts control decisions for programmability.",
                  "Operational state and intended configuration are related but not identical.",
                  "There are three operator approaches, in increasing order of abstraction: typing at each device's CLI, querying and setting MIB variables with SNMP, and managing whole-network configuration with NETCONF and YANG.",
                  "Every managed device runs an agent that holds data; the managing server queries, configures, and receives notifications from those agents.",
                  "SNMP conveys information two ways: request-response, where the manager asks and the agent answers, and trap mode, where the agent reports an exceptional event without being asked.",
                  "GetNextRequest walks to the next item in a list and GetBulkRequest retrieves a whole block at once, which is what makes polling a large MIB practical.",
                  "NETCONF uses a remote procedure call model with messages encoded in XML and carried over a secure, reliable transport such as TLS - unlike SNMP, which historically ran over UDP.",
                  "NETCONF's value over SNMP is multi-device configuration management: it can lock datastores and commit changes atomically across several devices, so a half-applied change does not leave the network inconsistent.",
                  "A NETCONF session begins with a <hello> capabilities exchange, carries <rpc> and <rpc-reply> pairs plus optional <notification> messages, and ends with <close-session>.",
                  "YANG is a data modelling language, not a protocol. It defines the structure, syntax, and semantics of the data NETCONF carries, and can express constraints that a valid configuration must satisfy.",
                  "An SDN controller sits between network-control applications above (northbound, often a RESTful API) and the switches below (southbound, often OpenFlow), maintaining network-wide state as a distributed database."
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
                        ],
                        [
                              "CLI",
                              "Direct, per-device operator commands.",
                              "Free text typed over SSH."
                        ],
                        [
                              "Request-response vs trap",
                              "Manager asks vs device reports.",
                              "Polling has predictable load; traps are timely but can be lost."
                        ],
                        [
                              "SNMP vs NETCONF scope",
                              "One device, one variable at a time vs many devices, one atomic change.",
                              "NETCONF adds locking and rollback that SNMP has no concept of."
                        ],
                        [
                              "Configuration vs operational state",
                              "What was asked for vs what is actually happening.",
                              "A device can accept a configuration and still not reach the intended state."
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
                        "Lock",
                        "NETCONF locks the datastore so no other source can change it mid-edit."
                  ],
                  [
                        "Apply",
                        "Protocol changes device settings."
                  ],
                  [
                        "Verify",
                        "State is checked after change."
                  ]
            ],
            "objectives": [
                  "Distinguish the CLI, SNMP/MIB, and NETCONF/YANG management approaches by scope and abstraction.",
                  "Match each SNMP message type to the management task it performs.",
                  "Name the core NETCONF operations and explain why locking and atomic commit matter.",
                  "Explain the division of labour between NETCONF and YANG."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why NETCONF exists when SNMP already did",
                        "text": "SNMP is excellent at reading one variable from one device. It has no notion of 'apply this change to forty routers, and if any of them refuses, undo it everywhere'. NETCONF adds datastores, locking, and atomic commit precisely so a network-wide change is a single transaction rather than forty independent edits that can half-succeed."
                  },
                  {
                        "kind": "callout",
                        "tone": "security",
                        "title": "SNMP versions matter for security",
                        "text": "The management model in the slides is version-neutral, but in practice SNMPv1 and SNMPv2c authenticate with a plaintext community string that travels in the clear - effectively a shared password anyone on the path can read. SNMPv3 adds authentication and encryption. NETCONF sidesteps the issue by requiring a secure transport. Added because the deck does not raise it."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 6241: Network Configuration Protocol (NETCONF)",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc6241/"
                  },
                  {
                        "title": "RFC 7950: The YANG 1.1 Data Modeling Language",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc7950/"
                  },
                  {
                        "title": "RFC 3410: Introduction and Applicability Statements for Internet-Standard Management Framework",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc3410/"
                  }
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
                  "Full-duplex",
                  "Single-bit error",
                  "Burst error",
                  "Redundancy",
                  "Even parity",
                  "Odd parity",
                  "Channel partitioning",
                  "Random access protocol",
                  "Taking turns protocol",
                  "Controlled access",
                  "Polling",
                  "Token passing",
                  "Token",
                  "Primary station",
                  "Secondary station",
                  "Channelization",
                  "FDMA",
                  "TDMA",
                  "CDMA",
                  "ALOHA",
                  "Slotted ALOHA",
                  "CSMA",
                  "Collision",
                  "Propagation delay and collisions",
                  "DOCSIS",
                  "MAP frame",
                  "Minislot"
            ],
            "keyPoints": [
                  "The data link layer is responsible for one-hop delivery, not end-to-end routing.",
                  "Frames add link-layer headers and often trailers for local delivery, framing, and error detection.",
                  "Parity is simple but less powerful than CRC.",
                  "CRC is widely used because it detects many common error patterns.",
                  "Shared media need access rules to coordinate transmitters and reduce collisions, hidden-terminal problems, or unfairness.",
                  "Data is broken into packets because one host sending a huge block monopolises the medium, and because retransmitting a large unit after an error costs far more than retransmitting a small one.",
                  "Error detection works by adding redundancy: extra bits that carry no user data but let the receiver test whether the rest arrived intact.",
                  "A single-bit error flips one bit; a burst error flips two or more, and they need not be consecutive - the burst is measured from the first corrupted bit to the last.",
                  "Simple parity detects any odd number of bit errors and misses any even number, which is exactly why it is weak against bursts.",
                  "Two-dimensional parity is stronger than single-bit parity because it can both detect and correct a single-bit error - the failing row and the failing column intersect at the guilty bit.",
                  "CRC treats the data as a binary number, divides by an agreed generator polynomial, and sends the remainder. The receiver divides again and expects a zero remainder. It detects all burst errors shorter than r+1 bits.",
                  "Error detection is never perfect: a corrupted frame can coincidentally satisfy the check. Larger check fields make this rarer, not impossible.",
                  "Multiple access protocols fall into three families: channel partitioning (divide the channel and hand each node a fixed piece), random access (allow collisions and recover), and taking turns (coordinate explicitly).",
                  "In controlled access - polling and token passing - no collision can occur, because a station may only transmit when it has been granted the right.",
                  "Polling's weaknesses are the polling overhead, the added latency, and the fact that the primary station is a single point of failure. Token passing shares the latter problem: lose the token and the ring stalls.",
                  "Channelization divides bandwidth by frequency (FDMA), by time (TDMA), or by code (CDMA). CDMA is the odd one out: every station uses the whole bandwidth all of the time and is separated by an orthogonal chipping code.",
                  "Channel partitioning is efficient and fair at high load but wasteful at low load, since an idle node's slot or band goes unused. Random access is the reverse. Taking-turns protocols try to get both.",
                  "Collisions happen even with carrier sensing because propagation delay means a station can start transmitting before another station's signal has reached it.",
                  "Cable access combines all three families at once: FDM across downstream and upstream channels, TDM within an upstream channel, and random access with binary backoff for the contention minislots."
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
                        ],
                        [
                              "Single vs two-dimensional parity",
                              "Detects only vs detects and corrects one bit.",
                              "The intersecting failed row and column identify the bit."
                        ],
                        [
                              "Controlled vs random access",
                              "No collisions, by permission vs collisions allowed, then resolved.",
                              "Polling and tokens vs CSMA family."
                        ],
                        [
                              "FDMA vs TDMA",
                              "Each station owns a frequency band vs each owns a time slot.",
                              "Both waste the resource when the owner is idle."
                        ],
                        [
                              "TDMA vs CDMA",
                              "Stations take turns in time vs all transmit at once.",
                              "CDMA separates senders by orthogonal codes, not by scheduling."
                        ],
                        [
                              "CSMA/CD vs CSMA/CA",
                              "Detect the collision and abort vs signal intent and avoid it.",
                              "Detection needs wired links; wireless must avoid instead."
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
                        "Access",
                        "Obtain the right to use a shared medium."
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
            ],
            "objectives": [
                  "Classify a multiple access protocol as channel partitioning, random access, or taking turns.",
                  "Compute a parity bit and locate a single-bit error using two-dimensional parity.",
                  "Explain why CRC detects burst errors that parity misses.",
                  "Contrast FDMA, TDMA, and CDMA by what resource each one divides."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: even parity",
                        "text": "The data unit 1010100 contains three 1s. For even parity the sender appends a 1, making 10101001 with four 1s. The receiver counts: four is even, so it strips the parity bit and accepts. Now suppose one bit flips in transit to 10101011 - five 1s, odd, so the frame is rejected. But if two bits flip, the count returns to even and the error passes undetected. That single sentence is the whole limitation of parity."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "CRC in one line",
                        "text": "Choose r CRC bits R so that the transmitted value <D,R> = D x 2^r XOR R is exactly divisible by the generator G in modulo-2 arithmetic. The receiver divides the received value by G and expects remainder zero. Any non-zero remainder means an error. Ethernet and 802.11 both use this, which is why it is worth knowing the mechanism rather than just the name."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why load determines the right protocol",
                        "text": "At low load, random access wins: one active node gets the entire channel, whereas TDMA would give it 1/N of the capacity and leave the other slots empty. At high load, channel partitioning wins: it shares fairly with no collision overhead, whereas random access spends more and more time colliding. Taking-turns protocols exist to capture both ends."
                  }
            ],
            "sources": [
                  {
                        "title": "IEEE 802 LAN/MAN Standards Committee",
                        "publisher": "IEEE Standards Association",
                        "url": "https://standards.ieee.org/featured/ieee-802/"
                  },
                  {
                        "title": "RFC 3385: Internet Protocol Small Computer System Interface (iSCSI) Cyclic Redundancy Check (CRC) Considerations",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc3385/"
                  }
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
                  "Access port",
                  "48-bit address",
                  "ARP TTL",
                  "Gratuitous broadcast",
                  "Binary exponential backoff",
                  "Unslotted CSMA/CD",
                  "Bus topology",
                  "Switched topology",
                  "Full duplex switching",
                  "Store and forward switch",
                  "Self-learning",
                  "Switch table entry",
                  "Interconnected switches",
                  "802.1Q",
                  "VLAN ID (VID)",
                  "Native VLAN",
                  "Port-based VLAN",
                  "Traffic isolation",
                  "Dynamic membership",
                  "Inter-VLAN routing",
                  "802.3 standards",
                  "100BASE-TX"
            ],
            "keyPoints": [
                  "MAC addresses are local; IP addresses are used for routing across networks.",
                  "For IPv4 on Ethernet, ARP resolves a next-hop IP address to a local MAC address before frame delivery.",
                  "Switches learn MAC addresses automatically from source addresses.",
                  "VLANs create logical separation without requiring separate physical switches.",
                  "CSMA/CD belongs to half-duplex shared Ethernet; modern switched full-duplex Ethernet does not use it, while Wi-Fi uses collision avoidance.",
                  "A MAC address is 48 bits, burned into the NIC, and allocated through IEEE so manufacturers cannot collide. An IP address is 32 bits and belongs to the subnet, not the device.",
                  "The portability difference is the point of the analogy: a MAC address is like a social security number and travels with the interface; an IP address is like a postal address and changes when you move.",
                  "ARP entries carry a TTL, typically about 20 minutes, so a stale mapping eventually expires rather than persisting forever.",
                  "When a host sends to another subnet, the frame's destination MAC is the router's interface, not the final destination's. The IP destination stays the final host throughout; only the MAC addresses change hop by hop.",
                  "Ethernet is connectionless and unreliable: there is no handshake and the receiving NIC sends no acknowledgement. Recovery is left to a higher layer such as TCP.",
                  "On collision, the two stations back off for a random interval chosen by binary exponential backoff - the range doubles with each successive collision, so a busy channel automatically spreads retries further apart.",
                  "A switch is an active store-and-forward device that examines each frame's MAC addresses and forwards selectively, and it is transparent: hosts do not know it exists.",
                  "Self-learning needs no configuration: when a frame arrives, the switch records the source MAC against the incoming port, so it learns where a host is by hearing from it.",
                  "Each switch port is its own collision domain and runs full duplex, so a modern switched LAN has no collisions at all - which is why CSMA/CD is now a historical mechanism on wired Ethernet.",
                  "A switch can forward A-to-A' and B-to-B' simultaneously, but not A-to-A' and C-to-A' simultaneously, because the second pair contends for the same output port.",
                  "VLANs solve two problems at once: they stop layer-2 broadcast traffic from crossing the whole LAN, and they let a user who physically moves stay logically attached to their original group.",
                  "802.1Q adds a 4-byte tag carrying the VLAN ID so a single trunk link can carry frames for many VLANs between switches. Traffic between VLANs still requires routing.",
                  "Switches and routers are both store-and-forward, but a switch reads link-layer headers and learns its table by flooding, while a router reads network-layer headers and computes its table with a routing algorithm."
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
                        ],
                        [
                              "MAC vs IP address",
                              "Link layer vs network layer.",
                              "MAC is flat and portable; IP is hierarchical and tied to the subnet."
                        ],
                        [
                              "Switch vs router",
                              "Link layer vs network layer.",
                              "Switch learns by flooding; router computes with a routing algorithm."
                        ],
                        [
                              "Bus vs switched Ethernet",
                              "One shared collision domain vs one per port.",
                              "Switched Ethernet is full duplex and collision-free."
                        ],
                        [
                              "Access vs trunk port",
                              "Carries one VLAN untagged vs many VLANs tagged.",
                              "Trunks need 802.1Q; access ports do not."
                        ],
                        [
                              "Collision vs broadcast domain",
                              "Bounded by a switch port vs bounded by a router or VLAN.",
                              "Switches split collision domains; only VLANs or routers split broadcast domains."
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
                  ],
                  [
                        "Learn",
                        "Switch records the sender's MAC against the incoming port."
                  ]
            ],
            "objectives": [
                  "Trace which MAC and IP addresses change at each hop when a datagram crosses a router.",
                  "Explain how a switch builds its table by self-learning and what it does on a table miss.",
                  "Describe what 802.1Q tagging adds and why the native VLAN is untagged.",
                  "Separate collision domains from broadcast domains and say which device bounds each."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Worked example: addressing across a router",
                        "text": "Host A (IP 111.111.111.111, MAC 74-29-9C-E8-FF-55) sends to host B (IP 222.222.222.222) through router R. On the first link the frame carries source MAC A and destination MAC E6-E9-00-17-BB-4B, which is R's near-side interface - not B. The IP header says A to B the whole way. R strips the frame, builds a new one with source MAC 1A-23-F9-CD-06-9B (its far-side interface) and destination MAC 49-BD-D2-C7-56-2A (B). MAC addresses are rewritten every hop; IP addresses are not."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "What a switch does when it does not know",
                        "text": "If the destination MAC is not in the table, the switch floods the frame out every port except the one it arrived on. The real destination replies, and that reply teaches the switch where it lives. So a switch's table is built entirely from source addresses it has overheard - it never asks."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "The Ethernet speed range in the slides is out of date",
                        "text": "The deck says Ethernet 'kept up with the speed race: 10 Mbps to 400 Gbps'. IEEE Std 802.3df-2024, approved in February 2024, defines 800 Gb/s operation. The teaching point - that Ethernet has repeatedly absorbed each speed generation while keeping one MAC protocol and frame format - is unchanged. Corrected against the IEEE Standards Association."
                  }
            ],
            "sources": [
                  {
                        "title": "IEEE 802.3df-2024: Ethernet Amendment 9 (800 Gb/s)",
                        "publisher": "IEEE Standards Association",
                        "url": "https://standards.ieee.org/ieee/802.3df/11107/"
                  },
                  {
                        "title": "RFC 826: An Ethernet Address Resolution Protocol",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc826/"
                  }
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
                  "Fabric",
                  "MPLS header",
                  "Label field",
                  "Exp field",
                  "Bottom-of-stack bit",
                  "Label TTL",
                  "RSVP-TE",
                  "Link-state flooding extension",
                  "Border router",
                  "Tier-1 switch",
                  "Tier-2 switch",
                  "Top-of-rack (TOR) switch",
                  "Server blade",
                  "Server rack",
                  "Multipath topology",
                  "Application-layer load balancer",
                  "RoCE",
                  "RDMA",
                  "Explicit congestion notification (ECN)",
                  "DCTCP",
                  "DCQCN",
                  "Day in the life of a web request",
                  "DHCP",
                  "DHCP ACK",
                  "First-hop router"
            ],
            "keyPoints": [
                  "MPLS forwards labeled packets by swapping short, locally significant labels instead of doing an IP longest-prefix lookup at every MPLS hop.",
                  "Labels can support traffic engineering, VPN services, and fast reroute.",
                  "Ingress and egress routers handle label entry and exit at the MPLS edge.",
                  "Data centers need scalable, high-throughput, low-latency fabrics.",
                  "Leaf-spine designs support many parallel paths and load balancing.",
                  "The MPLS header sits between the Ethernet header and the IP header, and carries a label, an experimental/traffic-class field, a bottom-of-stack bit, and its own TTL.",
                  "The IP datagram keeps its IP addresses inside an MPLS network. MPLS routers simply choose not to look at them, which is what makes the technique reversible at the egress.",
                  "MPLS flexibility comes from being free to forward differently from IP: two flows heading to the same destination can take different paths based on source address or other fields, which plain destination-based IP routing cannot express.",
                  "Fast reroute works because backup label-switched paths are computed in advance, so recovery after a link failure does not wait for a routing protocol to reconverge.",
                  "MPLS needs a signalling mechanism: OSPF and IS-IS are extended to flood link bandwidth and reservation information, and RSVP-TE sets up the forwarding state along the chosen path.",
                  "MPLS anticipated generalized forwarding by roughly a decade - it is the same match-plus-action idea that OpenFlow later generalised to arbitrary header fields.",
                  "A datacentre network is a hierarchy: border routers to the outside, tier-1 switches, tier-2 switches, top-of-rack switches (one per rack), and server blades in the racks.",
                  "Rich interconnection between tiers exists for two reasons at once: more parallel paths means more throughput between racks, and redundancy means a failed link is not an outage.",
                  "A load balancer performs application-layer routing: it accepts external client requests, distributes them across servers, and returns results, hiding the datacentre's internal structure from the client.",
                  "Datacentre networks drive their own protocol innovations because the environment is unusual - very low latency, one administrative owner, and known topology. RoCE moves RDMA over Ethernet, and DCTCP and DCQCN use ECN marking rather than loss as the congestion signal.",
                  "A single web request exercises the entire stack: DHCP to get an address, ARP to find the first-hop router's MAC, DNS to resolve the name, TCP's three-way handshake to open the connection, and finally HTTP to fetch the page."
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
                        ],
                        [
                              "IP vs MPLS forwarding",
                              "Longest-prefix match on destination vs exact match on a fixed-length label.",
                              "MPLS lookup is cheaper and can encode policy the destination alone cannot."
                        ],
                        [
                              "MPLS vs virtual circuits",
                              "Labels along a path vs full connection state.",
                              "MPLS borrows the circuit idea but keeps the IP datagram intact."
                        ],
                        [
                              "Loss-based vs ECN-based congestion control",
                              "Infer congestion from drops vs read an explicit router mark.",
                              "DCTCP reacts before the buffer overflows, keeping datacentre latency low."
                        ],
                        [
                              "Load balancer vs router",
                              "Chooses a server by application-layer criteria vs chooses a next hop by IP prefix.",
                              "The load balancer hides internal structure from the client."
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
            ],
            "objectives": [
                  "Explain how label swapping differs from longest-prefix matching and why it enables traffic engineering.",
                  "Describe the tiered structure of a datacentre network and why multipath is designed in.",
                  "Name the protocols involved, in order, when a laptop joins a network and loads a web page.",
                  "Identify why datacentres use ECN-based congestion control instead of loss-based."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "A day in the life of a web request",
                        "text": "A laptop attaches to the campus network and asks for www.google.com. 1) DHCP: a request is broadcast inside UDP inside IP inside an Ethernet frame with destination FF-FF-FF-FF-FF-FF; the DHCP ACK returns the laptop's IP address, its first-hop router, and the DNS server. 2) ARP: to send anything off-subnet the laptop needs the router's MAC, so it broadcasts an ARP query and receives an ARP reply. 3) DNS: a query travels to the DNS server and returns Google's IP address. 4) TCP: SYN, SYNACK, ACK establish a connection to the web server. 5) HTTP: the GET is sent and the page returns. Every layer studied in this course appears exactly once, in order."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why the datagram keeps its IP address under MPLS",
                        "text": "It would be simpler to strip the IP header and rebuild it at the far end, but then the MPLS domain could not hand a packet back to plain IP routing partway through, and any failure would strand the traffic. Keeping the IP header means an MPLS network is an optimisation layered over IP, not a replacement for it."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Terminology note: leaf-spine and tier-1/tier-2",
                        "text": "This reviewer uses leaf-spine, which is the common industry name. The lecture deck describes the same idea as a border router / tier-1 / tier-2 / top-of-rack hierarchy and cites Facebook's F16 topology. They describe the same design goal - many equal-cost paths between any two racks - so expect either vocabulary in an exam question."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 3031: Multiprotocol Label Switching Architecture",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc3031/"
                  },
                  {
                        "title": "RFC 3032: MPLS Label Stack Encoding",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc3032/"
                  },
                  {
                        "title": "RFC 3168: The Addition of Explicit Congestion Notification (ECN) to IP",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc3168/"
                  }
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
                  "Channel",
                  "Basic service set (BSS)",
                  "Wireless host",
                  "Path loss",
                  "Bit error rate (BER)",
                  "Rate adaptation",
                  "Passive scanning",
                  "Active scanning",
                  "Probe request",
                  "Probe response",
                  "Association request",
                  "Association response",
                  "Power management",
                  "Beacon sleep cycle",
                  "802.11n (Wi-Fi 4)",
                  "802.11ac (Wi-Fi 5)",
                  "802.11ax (Wi-Fi 6)",
                  "Chipping sequence",
                  "Orthogonal codes",
                  "Bluetooth",
                  "Piconet",
                  "Master device",
                  "Parked device",
                  "Frequency hopping",
                  "Ad hoc mode",
                  "Infrastructure mode",
                  "Single hop network",
                  "Multiple hop network"
            ],
            "keyPoints": [
                  "Wireless links are affected by distance, obstacles, interference, and multipath.",
                  "Wi-Fi commonly uses infrastructure mode with access points.",
                  "IEEE 802.11 uses CSMA/CA because wireless stations generally cannot reliably detect collisions while transmitting.",
                  "RTS/CTS is an optional reservation exchange that can reduce hidden-terminal collisions at the cost of overhead.",
                  "Association connects a wireless host to a selected AP and SSID.",
                  "Wireless and mobility are different problems. Wireless is about communicating over a radio link; mobility is about changing point of attachment. A desktop on Wi-Fi is wireless but not mobile.",
                  "Three physical effects make wireless harder than wire: path loss as the signal attenuates through matter, interference from other devices sharing the band, and multipath where reflections arrive at slightly different times.",
                  "Higher signal-to-noise ratio means lower bit error rate. Given a fixed physical layer, raising power raises SNR and lowers BER; given a fixed SNR, you choose the modulation that meets your BER target at the highest rate.",
                  "Rate adaptation is that trade-off applied dynamically: as a device moves away and SNR drops, the AP and device step down from a fast modulation such as QAM256 to a robust one such as BPSK.",
                  "Collision detection is impractical on wireless because the transmitting radio's own signal swamps the far weaker received signal, and because hidden terminals mean some collisions are undetectable in principle.",
                  "The hidden terminal problem: A and C can both hear B but not each other, so neither knows the other is transmitting and their signals collide at B.",
                  "RTS/CTS reserves the channel: the sender's short RTS may still collide, but the AP's CTS is heard by everyone in range and tells all other stations to defer.",
                  "A Basic Service Set is the cell: in infrastructure mode it contains wireless hosts plus an access point; in ad hoc mode it is hosts only, with no base station.",
                  "Passive scanning means listening for beacon frames the APs broadcast. Active scanning means broadcasting a probe request and collecting probe responses. Either way the host then sends an association request and waits for the association response.",
                  "After associating, a host typically authenticates and then runs DHCP to get an IP address in the AP's subnet.",
                  "Moving between APs in the same subnet keeps the IP address, and the switch relearns which port reaches the host from the frames it sends - self-learning handles the handover with no extra protocol.",
                  "Power management is beacon-driven: a device tells the AP it is sleeping until the next beacon, the AP buffers frames for it, and the beacon lists which devices have traffic waiting so the rest can sleep again.",
                  "Bluetooth is a cable replacement for a roughly 10 metre personal area network: ad hoc, master and client roles, 79 frequency channels with pseudo-random hopping, and a parked mode so idle devices conserve battery."
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
                        ],
                        [
                              "CSMA/CD vs CSMA/CA",
                              "Wired can detect a collision mid-transmission; wireless cannot.",
                              "802.11 avoids collisions and acknowledges every frame instead."
                        ],
                        [
                              "Passive vs active scanning",
                              "Wait for beacons vs broadcast a probe request.",
                              "Active scanning finds an AP faster but costs airtime."
                        ],
                        [
                              "Infrastructure vs ad hoc mode",
                              "Hosts connect via an AP vs hosts connect directly.",
                              "Ad hoc needs no infrastructure but has no path to the wider Internet."
                        ],
                        [
                              "Wireless vs mobile",
                              "Radio link vs changing attachment point.",
                              "The two problems are solved by different mechanisms."
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
                        "Configure",
                        "Host authenticates and runs DHCP for an address."
                  ],
                  [
                        "Access",
                        "CSMA/CA waits for medium."
                  ],
                  [
                        "ACK",
                        "Receiver confirms frame."
                  ]
            ],
            "objectives": [
                  "Explain why 802.11 avoids collisions rather than detecting them.",
                  "Trace passive and active scanning through to a completed association.",
                  "Relate SNR, BER, and modulation choice through rate adaptation.",
                  "Describe how the hidden terminal problem arises and how RTS/CTS addresses it."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why wireless cannot detect collisions",
                        "text": "A radio transmitting at full power hears its own signal enormously more strongly than any distant station's. Trying to detect a remote collision underneath your own transmission is like trying to hear a whisper while shouting. Even with perfect hardware, hidden terminals mean the collision happens at the receiver, where the sender cannot observe it at all. Hence avoidance plus per-frame acknowledgement rather than detection."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "The Bluetooth slot figure in the slides is wrong",
                        "text": "The deck reads 'TDM, 625 msec sec. slot'. The Bluetooth baseband specification defines a 625 microsecond slot, giving 1,600 hops per second across the 79 RF channels. At 625 milliseconds the deck's own 'up to 3 Mbps' figure would be impossible. Corrected against the Bluetooth SIG Core Specification."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "The 802.11 generation table stops too early",
                        "text": "The deck's table ends at 802.11ax (Wi-Fi 6), marked '2020 (exp.)'. 802.11ax was published in 2021. Missing from the table are Wi-Fi 6E, which extends Wi-Fi 6 into the 6 GHz band, and Wi-Fi 7 (IEEE 802.11be), approved by the IEEE in September 2024 with 320 MHz channels and multi-link operation. Wi-Fi Alliance certification for Wi-Fi 7 began in January 2024. The exam-relevant pattern is unchanged: each generation widens channels, adds spatial streams, and uses denser modulation."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "CDMA in one sentence",
                        "text": "Every station transmits over the entire band at the same time, and each is separated by its own chipping sequence. Encoding is the inner product of the data with the code; decoding is the summed inner product of the received signal with the same code. Because the codes are orthogonal, the other senders sum to approximately zero for a given receiver - which is why CDMA is neither frequency division nor time division."
                  }
            ],
            "sources": [
                  {
                        "title": "Bluetooth Core Specification: Baseband Specification",
                        "publisher": "Bluetooth SIG",
                        "url": "https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core-54/out/en/br-edr-controller/baseband-specification.html"
                  },
                  {
                        "title": "IEEE 802.11 Wireless LAN Working Group",
                        "publisher": "IEEE Standards Association",
                        "url": "https://standards.ieee.org/ieee/802.11/7028/"
                  }
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
                  "Tunneling",
                  "IMSI",
                  "eNode-B",
                  "Home Subscriber Server (HSS)",
                  "Enhanced Packet Core (EPC)",
                  "GTP",
                  "Packet Data Convergence Protocol (PDCP)",
                  "Radio Link Control (RLC)",
                  "Medium Access (LTE MAC)",
                  "OFDM",
                  "Primary synchronization signal",
                  "Light sleep",
                  "Deep sleep",
                  "Registration",
                  "Indirect routing",
                  "Direct routing",
                  "Triangle routing",
                  "Correspondent",
                  "Care-of address",
                  "Mobility manager",
                  "5G NR",
                  "FR1",
                  "FR2",
                  "Millimeter wave",
                  "MIMO",
                  "Pico-cell",
                  "3GPP"
            ],
            "keyPoints": [
                  "Mobile means changing network attachment, not simply using wireless.",
                  "Cellular systems manage identity, authentication, location, and handoff.",
                  "Roaming involves cooperation between home and visited networks.",
                  "Mobile IP uses indirection and tunneling to reach a moving host.",
                  "Mobility can affect delay, throughput, and higher-layer connections.",
                  "The 4G LTE architecture has five named elements worth memorising: the User Equipment, the base station (eNode-B), the Mobility Management Entity, the Serving Gateway, and the PDN Gateway - with the Home Subscriber Server holding subscriber identity in the home network.",
                  "The MME and HSS sit on the control plane; the S-GW and P-GW sit on the data path. That split is the same data-plane/control-plane separation seen in SDN.",
                  "The P-GW is the gateway to the outside world: it looks like any Internet gateway router and typically provides NAT.",
                  "Identity comes from the SIM card, which stores a 64-bit International Mobile Subscriber Identity. The IMSI identifies both the subscriber and their home network, which is what makes roaming agreements possible.",
                  "LTE adds link-layer protocols above the physical layer: PDCP for header compression and encryption, RLC for fragmentation and reliable transfer, and MAC for requesting radio transmission slots.",
                  "The radio access network uses OFDM, where 'orthogonal' means the sub-carriers are spaced so they do not interfere. Each active device is allocated time slots across a set of frequencies.",
                  "Mobility inside the core is implemented with tunnels: the datagram is encapsulated in GTP inside UDP, and only the tunnel endpoints change when the user moves, so the datagram itself is untouched.",
                  "The importance of a home network is that it is the definitive place to ask where a subscriber currently is. Registration is what keeps that answer current: the visited mobility manager registers the device's location with the home HSS.",
                  "Indirect routing sends everything through the home network first, which is transparent to the correspondent - an ongoing TCP connection survives a move - but produces triangle routing, wasteful when correspondent and mobile are near each other.",
                  "Direct routing removes the triangle by having the correspondent ask the home HSS for the mobile's current address, but it is no longer transparent, and handling a further move gets complicated.",
                  "Letting ordinary IP routing track mobiles is theoretically possible - just advertise each mobile's address - but it does not scale to billions of devices, which is why the indirection exists at all.",
                  "5G targets roughly ten times the peak bit rate, a tenth of the latency, and a hundred times the traffic capacity of 4G, using new radio in two bands: FR1 below 6 GHz and FR2 in millimetre wave.",
                  "Millimetre wave buys data rate at the cost of range, which is why 5G needs pico-cells 10 to 100 metres across and a much denser deployment of base stations."
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
                        ],
                        [
                              "Indirect vs direct routing",
                              "Via the home network vs straight to the visited network.",
                              "Indirect is transparent but triangular; direct is efficient but not transparent."
                        ],
                        [
                              "Home vs visited network",
                              "Where the subscription lives vs where the device currently is.",
                              "The HSS in the home network is the authority on both."
                        ],
                        [
                              "MME vs S-GW/P-GW",
                              "Control plane vs data plane.",
                              "MME authenticates and sets up tunnels; the gateways carry traffic."
                        ],
                        [
                              "FR1 vs FR2 in 5G",
                              "Sub-6 GHz vs millimetre wave.",
                              "FR2 is much faster over much shorter distances."
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
                        "Register",
                        "Visited mobility manager records the location with the home HSS."
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
            ],
            "objectives": [
                  "Name each element of the 4G LTE architecture and place it on the control or data plane.",
                  "Explain how registration lets a home network answer 'where is this subscriber now'.",
                  "Compare indirect and direct routing by transparency and by path efficiency.",
                  "State what 5G NR changes relative to 4G and what that costs in deployment density."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why tunnelling solves mobility",
                        "text": "A datagram addressed to the mobile's permanent IP address cannot be routed to a visited network, because routing follows the address prefix and the prefix belongs to the home network. Tunnelling wraps that datagram inside a new one addressed to the visited network. Nothing about the inner datagram changes, so ongoing TCP connections do not notice the move - only the outer wrapper is rewritten."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "Mobile IP is a teaching model, not current practice",
                        "text": "This unit's terms include home agent and foreign agent from Mobile IP. The lecture deck lists Mobile IP in its outline but never delivers those slides, and one slide states that such architectures 'exist (mobile IP) for 4G-like mobility, but not used'. Treat home agent and foreign agent as the conceptual model that explains indirection; production mobility uses the 4G/5G core tunnelling described above. See docs/networking2/CONTENT-REVIEW.md, flag 15."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Triangle routing, concretely",
                        "text": "A correspondent in Manila sends to a mobile whose home network is in Manila but which is currently roaming in Manila on a different carrier. Under indirect routing the datagram still travels to the home network, is tunnelled to the visited network, and only then reaches the device. The inefficiency is not distance in the abstract - it is that the path is forced through a fixed anchor point regardless of where the two endpoints actually are."
                  }
            ],
            "sources": [
                  {
                        "title": "3GPP Specifications and Technologies",
                        "publisher": "3GPP",
                        "url": "https://www.3gpp.org/specifications-technologies"
                  },
                  {
                        "title": "RFC 5944: IP Mobility Support for IPv4, Revised",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc5944/"
                  }
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
                  "Session key",
                  "Plaintext",
                  "Ciphertext",
                  "Substitution cipher",
                  "Monoalphabetic cipher",
                  "Polyalphabetic cipher",
                  "Cipher-text only attack",
                  "Known-plaintext attack",
                  "Chosen-plaintext attack",
                  "Brute force attack",
                  "DES",
                  "3DES",
                  "AES",
                  "Block cipher",
                  "RSA",
                  "Modular exponentiation",
                  "Message digest",
                  "MD5",
                  "SHA-1",
                  "SHA-2",
                  "HMAC",
                  "Non-repudiation",
                  "Authentication protocol ap5.0",
                  "Playback attack",
                  "Secure e-mail",
                  "Cipher suite",
                  "Diffie-Hellman",
                  "Handshake",
                  "Key derivation",
                  "Eavesdropping",
                  "Hijacking"
            ],
            "keyPoints": [
                  "Confidentiality, authentication, integrity, and availability are core security goals.",
                  "Symmetric crypto is efficient but requires shared secrets.",
                  "Public-key crypto helps solve key distribution and identity verification problems.",
                  "Certificates connect public keys to trusted identities.",
                  "TLS establishes a secure channel with server authentication, key establishment, confidentiality, and integrity protection.",
                  "The Internet was designed for mutually trusting users on a transparent network, so security was retrofitted. That history explains why protections exist at every layer rather than in one place.",
                  "Attacks are classified by what the attacker gets to see: cipher-text only, known-plaintext (where some plaintext-ciphertext pairs are known), and chosen-plaintext (where the attacker can obtain the ciphertext for text of their choosing). Each assumption is stronger than the last.",
                  "A monoalphabetic substitution cipher is broken by statistical analysis, not brute force - letter frequencies survive the substitution. A polyalphabetic cipher cycles through several substitution alphabets to blunt that.",
                  "AES processes 128-bit blocks with 128, 192, or 256-bit keys. The reason it replaced DES is key length: a search that takes one second against DES's 56-bit key takes astronomically longer against AES.",
                  "Public-key cryptography solved the problem symmetric crypto could not: agreeing on a key with someone you have never met. The public key encrypts, the matching private key decrypts, and the private key cannot be feasibly computed from the public one.",
                  "RSA's security rests on the difficulty of factoring the product of two large primes. Its useful extra property is symmetry: applying the private key then the public key gives the same result as the reverse, which is what makes digital signatures work.",
                  "RSA is far slower than symmetric encryption, so real systems use it only to establish a symmetric session key and then encrypt the actual data symmetrically.",
                  "A digital signature is a private-key operation over a message digest. It gives integrity, authentication, and non-repudiation - the signer cannot later deny it, because only they hold the private key.",
                  "Hash functions must be one-way and fixed-length: given a digest, finding a message that produces it must be computationally infeasible. Signing the digest instead of the message is what makes signing long messages practical.",
                  "The authentication protocol ladder ap1.0 to ap5.0 exists to show how each naive version fails: claiming an identity, adding a source IP (spoofable), adding a password (replayable), encrypting the password (still replayable), and finally using a nonce so each challenge is fresh.",
                  "Even ap5.0 with public keys falls to a man-in-the-middle who substitutes their own public key. That is precisely the gap certificate authorities exist to close.",
                  "TLS provides confidentiality through symmetric encryption, integrity through cryptographic hashing, and authentication through public-key cryptography - all three techniques from this unit combined in one protocol."
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
                        ],
                        [
                              "Symmetric vs public key",
                              "One shared secret vs a public/private pair.",
                              "Symmetric is fast; public key solves key distribution."
                        ],
                        [
                              "Encryption vs signature",
                              "Encrypt with the recipient's public key vs sign with your own private key.",
                              "Encryption hides; signing proves origin."
                        ],
                        [
                              "Hash vs MAC",
                              "Unkeyed digest vs digest with a shared secret.",
                              "A bare hash proves nothing if the attacker can replace both message and hash."
                        ],
                        [
                              "Authentication vs integrity",
                              "Who sent it vs was it altered.",
                              "A signature over a digest delivers both at once."
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
                        "Derive",
                        "Both sides expand the shared secret into a set of keys."
                  ],
                  [
                        "Encrypt",
                        "Application data is protected."
                  ],
                  [
                        "Check",
                        "Integrity is verified."
                  ]
            ],
            "objectives": [
                  "Match each security goal - confidentiality, authentication, integrity, availability - to the mechanism that delivers it.",
                  "Explain why each step of the ap1.0 to ap5.0 ladder fails and what the next step adds.",
                  "Describe how a certificate authority closes the man-in-the-middle gap in public-key exchange.",
                  "Justify why real systems use public-key crypto only to establish a symmetric session key."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "security",
                        "title": "MD5 and SHA-1 are taught here as history, not as recommendations",
                        "text": "The lecture deck presents MD5 (128-bit) and SHA-1 (160-bit) as current choices. They are not. RFC 6151 states MD5 is no longer acceptable where collision resistance is required - collisions can be found in seconds. NIST is transitioning away from SHA-1 for all applications by 31 December 2030. Use SHA-2 (FIPS 180-4) or SHA-3 (FIPS 202) for anything new, and HMAC-SHA256 rather than HMAC-MD5. Learn MD5 and SHA-1 to answer exam questions; never specify them in a design."
                  },
                  {
                        "kind": "callout",
                        "tone": "security",
                        "title": "3DES is no longer the answer to DES being weak",
                        "text": "The deck offers '3DES: encrypt 3 times with 3 different keys' as the way to make DES more secure. NIST SP 800-131A Rev. 2 deprecated three-key TDEA through 2023 and disallows it for encryption after 31 December 2023; only decryption of legacy data remains permitted. The correct modern answer is AES, which the deck's very next slide introduces."
                  },
                  {
                        "kind": "callout",
                        "tone": "warning",
                        "title": "The TLS 1.3 RFC number in the slides is wrong",
                        "text": "The deck cites 'TLS 1.3: RFC 8846 [2018]'. TLS 1.3 is RFC 8446, published August 2018. RFC 8846 is an unrelated document. The deck is correct that SSL was deprecated in 2015 (RFC 7568); note also that TLS 1.0 and 1.1 were deprecated by RFC 8996 in 2021, so TLS 1.2 and 1.3 are the live versions."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why the nonce in ap4.0 is necessary",
                        "text": "In ap3.0 Trudy records Alice's packet and replays it later; encrypting the password changes nothing, because Trudy replays the encrypted version just as happily. A nonce is a number used once: Bob sends a fresh R, and only someone holding the key can return R encrypted. A recording of yesterday's exchange contains yesterday's R and is therefore useless today. Freshness, not secrecy, is what defeats replay."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc8446/"
                  },
                  {
                        "title": "RFC 6151: Updated Security Considerations for MD5 and HMAC-MD5",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc6151/"
                  },
                  {
                        "title": "NIST: Transitioning Away from SHA-1 for All Applications",
                        "publisher": "NIST Computer Security Resource Center",
                        "url": "https://csrc.nist.gov/news/2022/nist-transitioning-away-from-sha-1-for-all-apps"
                  },
                  {
                        "title": "NIST SP 800-131A Rev. 2: Transitioning the Use of Cryptographic Algorithms and Key Lengths",
                        "publisher": "NIST",
                        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf"
                  }
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
                  "Anomaly detection",
                  "Security Parameter Index (SPI)",
                  "Pre-shared key (PSK)",
                  "Public key infrastructure (PKI)",
                  "IKEv2",
                  "Authentication server (AS)",
                  "WPA3",
                  "EAP",
                  "EAPoL",
                  "RADIUS",
                  "Discovery of security capabilities",
                  "Mutual authentication",
                  "Session key derivation",
                  "Nonce exchange",
                  "auth_token",
                  "xres",
                  "Stateless packet filter",
                  "Stateful packet filter",
                  "Application gateway",
                  "Connection state table",
                  "Deep packet inspection",
                  "Smurf attack",
                  "SYN flooding"
            ],
            "keyPoints": [
                  "IPsec protects IP traffic below the transport layer, so it can secure many applications without changing the applications.",
                  "Tunnel mode is common for VPN gateway-to-gateway or remote-access scenarios.",
                  "AH authenticates and integrity-protects IP packets without encryption; ESP is commonly used when confidentiality is required and can also protect integrity.",
                  "Firewalls enforce traffic policy at network boundaries and hosts.",
                  "IDS tools monitor traffic or hosts for signs of attacks.",
                  "IPsec protects both user traffic and control traffic, which is why it can secure routing and DNS messages as well as application data.",
                  "In transport mode only the datagram payload is protected; in tunnel mode the entire original datagram is encrypted and wrapped in a new datagram with a new IP header.",
                  "IP is connectionless but IPsec is connection-oriented: a security association must be established before data flows, and it is directional, so two-way traffic needs two SAs.",
                  "The two databases divide the work cleanly: the Security Policy Database says what to do (does this datagram need IPsec at all), and the Security Association Database says how to do it (which keys and algorithms).",
                  "The Security Parameter Index is the index into that state. The receiver reads the SPI from the arriving IPsec datagram, looks it up in the SAD, and processes the datagram accordingly.",
                  "Manual key configuration does not scale past a handful of endpoints, which is why IKE exists - authenticating with either a pre-shared secret or a public-key infrastructure and generating the SAs automatically.",
                  "802.11 security runs in four phases: discovery of security capabilities, mutual authentication with session key derivation, distribution of the shared symmetric key to the AP, and finally encrypted communication.",
                  "The WPA3 handshake derives a session key from an initial shared secret plus a nonce from each side. Nonces are what prevent replay, and the HMAC over them provides message integrity.",
                  "EAP defines the end-to-end request/response conversation between the device and the authentication server; it is carried over EAPoL on the wireless link and over RADIUS across the wired network.",
                  "4G authentication is mutual and rooted in the SIM: the HSS derives an auth_token that only a holder of the shared key could have produced, proving the network to the device, and an expected response xres that the device must match, proving the device to the network.",
                  "Two 4G weaknesses that 5G addresses: the authentication decision moved from the visited MME to the home network, and the IMSI is no longer sent in cleartext because public-key crypto now encrypts it.",
                  "A stateless packet filter judges each packet alone, so it will admit a packet with the ACK bit set and destination port 80 even though no connection exists. A stateful filter tracks setup and teardown and rejects packets that make no sense for any live connection.",
                  "An application gateway filters on application data rather than headers, which is more powerful but needs one gateway per application and requires clients to know how to reach it.",
                  "Firewalls have real limits: IP spoofing means the claimed source cannot be trusted, UDP filtering tends to be all-or-nothing, and more security always costs some legitimate communication."
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
                        ],
                        [
                              "Transport vs tunnel mode",
                              "Protect the payload vs protect the whole datagram.",
                              "Tunnel mode hides the original addresses; transport mode does not."
                        ],
                        [
                              "SPD vs SAD",
                              "What to do vs how to do it.",
                              "SPD selects policy; SAD holds keys and algorithms, indexed by SPI."
                        ],
                        [
                              "Stateless vs stateful filter",
                              "Judge each packet alone vs track the connection.",
                              "Stateless admits packets that make no sense; stateful does not."
                        ],
                        [
                              "Packet filter vs IDS",
                              "Headers only vs deep packet inspection across sessions.",
                              "IDS can spot port scans and attack signatures a filter cannot."
                        ],
                        [
                              "4G vs 5G authentication",
                              "Visited MME decides, IMSI in cleartext vs home network decides, IMSI encrypted.",
                              "5G narrows the trust placed in the visited network."
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
            ],
            "objectives": [
                  "Choose transport or tunnel mode, and AH or ESP, for a given protection requirement.",
                  "Explain the division of labour between the SPD, the SAD, and the SPI.",
                  "Trace the four phases of 802.11 security from capability discovery to encrypted traffic.",
                  "Distinguish stateless filtering, stateful filtering, and application gateways by what each can decide."
            ],
            "lessonBlocks": [
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why a stateless filter is not enough",
                        "text": "A rule permitting inbound TCP from port 80 to ports above 1023 with the ACK bit set looks safe - it appears to allow only replies to outbound web requests. But nothing stops an attacker crafting a packet with those exact properties when no connection exists. A stateful filter consults its connection table, finds no matching session, and drops it. That is the entire argument for stateful inspection in one example."
                  },
                  {
                        "kind": "callout",
                        "tone": "security",
                        "title": "The IKE example in the slides uses retired algorithms",
                        "text": "The deck's sample security association specifies 3DES-cbc encryption and HMAC-MD5. Both are retired: three-key TDEA is disallowed for encryption after 2023 (NIST SP 800-131A Rev. 2) and HMAC-MD5 should not be used in new designs (RFC 6151). Beyond the algorithms, IKEv1 itself was deprecated by RFC 9395 in April 2023, which moved RFCs 2407, 2408, and 2409 to Historic. Use IKEv2 (RFC 7296) with AES and SHA-2."
                  },
                  {
                        "kind": "callout",
                        "tone": "note",
                        "title": "Why 4G authentication is mutual",
                        "text": "Only the device and its home HSS know the shared key stored on the SIM. The HSS uses it to build auth_token, so a device that can validate auth_token knows it is talking to its real home network - not a rogue base station. The device then uses the same key to compute res_M, and the MME compares it with the HSS-supplied xres_HSS. Each side proves knowledge of the shared secret without ever transmitting it."
                  }
            ],
            "sources": [
                  {
                        "title": "RFC 4301: Security Architecture for the Internet Protocol",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc4301/"
                  },
                  {
                        "title": "RFC 7296: Internet Key Exchange Protocol Version 2 (IKEv2)",
                        "publisher": "IETF",
                        "url": "https://datatracker.ietf.org/doc/rfc7296/"
                  },
                  {
                        "title": "RFC 9395: Deprecation of the Internet Key Exchange Version 1 (IKEv1) Protocol",
                        "publisher": "RFC Editor",
                        "url": "https://www.rfc-editor.org/info/rfc9395/"
                  },
                  {
                        "title": "Wi-Fi Alliance: Security",
                        "publisher": "Wi-Fi Alliance",
                        "url": "https://www.wi-fi.org/discover-wi-fi/security"
                  }
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
      ],
      [
            "Processing delay",
            "Time a router spends checking a packet for bit errors and looking up its output link. Typically well under a millisecond and roughly constant."
      ],
      [
            "Queueing delay",
            "Time a packet waits in a router's output buffer for its turn to be transmitted. The only delay component that depends on how busy the network is."
      ],
      [
            "Transmission delay",
            "Time to push all of a packet's bits onto a link, equal to L/R where L is the packet length in bits and R is the link rate in bits per second."
      ],
      [
            "Propagation delay",
            "Time for one bit to travel the length of a link, equal to d/s where d is the link distance and s is the signal propagation speed. Independent of packet size."
      ],
      [
            "Traceroute",
            "A diagnostic tool that maps the routers along a path by sending packets with increasing time-to-live values and recording the ICMP replies each router returns."
      ],
      [
            "Hybrid fiber coax (HFC)",
            "A cable access network in which fiber runs from the headend to neighborhood nodes and coaxial cable completes the run to homes. Capacity is shared among the homes on a segment."
      ],
      [
            "Cable modem termination system (CMTS)",
            "The device at the cable headend that terminates cable modem connections and converts their analog signals back into digital traffic for the ISP network."
      ],
      [
            "Digital subscriber line (DSL)",
            "Residential access that carries data over the existing telephone pair to a DSLAM at the central office, using frequencies above those used by voice."
      ],
      [
            "DSLAM",
            "Digital Subscriber Line Access Multiplexer. The device at the telephone central office that separates DSL data traffic toward the Internet from voice traffic toward the telephone network."
      ],
      [
            "Frequency division multiplexing (FDM)",
            "Dividing a medium's spectrum into frequency bands and giving each channel or user its own band, so all can transmit simultaneously."
      ],
      [
            "Time division multiplexing (TDM)",
            "Dividing time into slots and giving each channel or user its own periodic slot, so each transmits at the full rate but only during its slot."
      ],
      [
            "Twisted pair",
            "Two insulated copper wires twisted together. Category 5 supports 100 Mbps and 1 Gbps Ethernet; Category 6 supports 10 Gbps."
      ],
      [
            "Coaxial cable",
            "Two concentric copper conductors, used bidirectionally and able to carry multiple frequency channels on one cable."
      ],
      [
            "Fiber optic cable",
            "Glass fiber carrying light pulses, one pulse per bit. Supports very high point-to-point rates, has a low error rate, and is immune to electromagnetic noise."
      ],
      [
            "Guided media",
            "Physical media in which the signal is confined to a solid conductor or fiber, such as copper, coax, or optical fiber."
      ],
      [
            "Unguided media",
            "Media in which the signal propagates freely through the environment, such as radio and other wireless transmission."
      ],
      [
            "Internet exchange point (IXP)",
            "A shared facility where multiple ISPs interconnect and exchange traffic directly, avoiding the cost and latency of transiting an upstream provider."
      ],
      [
            "Tier-1 ISP",
            "One of a small number of large, well-connected networks with national or international coverage that reach the whole Internet without buying transit."
      ],
      [
            "Peering link",
            "A direct interconnection between two networks that agree to exchange each other's traffic, typically without payment."
      ],
      [
            "Regional ISP",
            "A mid-level network that aggregates access ISPs in a geographic area and connects them upward to larger providers."
      ],
      [
            "Content provider network",
            "A private network run by a large content company such as Google or Meta to connect its data centers and reach users directly, often bypassing tier-1 transit."
      ],
      [
            "Point of presence (PoP)",
            "A facility where an ISP places routers so that customer networks and other providers can connect to it."
      ],
      [
            "Malware",
            "Software that installs itself on a host to cause harm, including viruses, worms, and spyware."
      ],
      [
            "Virus",
            "Self-replicating malware that infects a host when a user receives and executes an object, such as an email attachment."
      ],
      [
            "Worm",
            "Self-replicating malware that infects a host by being passively received and executed without user action."
      ],
      [
            "Botnet",
            "A collection of compromised hosts controlled remotely and used collectively for spam or distributed denial of service attacks."
      ],
      [
            "Denial of service (DoS)",
            "An attack that makes a resource such as a server or link unavailable to legitimate users by overwhelming it with bogus traffic."
      ],
      [
            "Packet sniffing",
            "Passively reading and recording every packet passing a network interface placed in promiscuous mode on a shared or broadcast medium."
      ],
      [
            "IP spoofing",
            "Sending a packet with a false source IP address so the receiver cannot tell who actually sent it."
      ],
      [
            "Non-persistent HTTP",
            "An HTTP mode in which each object requires its own TCP connection, which is closed after that object is delivered. Costs about 2 RTT per object."
      ],
      [
            "Round-trip time (RTT)",
            "The time for a small packet to travel from client to server and back, excluding transmission time for the data itself."
      ],
      [
            "HTTP/2",
            "A revision of HTTP that keeps HTTP/1.1 semantics but divides objects into frames and interleaves them over one TCP connection, letting the client set priorities. Specified in RFC 9113."
      ],
      [
            "HTTP/3",
            "A revision of HTTP that maps HTTP semantics onto QUIC over UDP, giving each object its own loss recovery and congestion control. Specified in RFC 9114."
      ],
      [
            "QUIC",
            "A transport protocol over UDP that provides encryption, per-stream reliable delivery, and congestion control. It is the transport used by HTTP/3."
      ],
      [
            "Head-of-line blocking",
            "A delay caused when the item at the front of a queue cannot proceed, forcing everything behind it to wait even though those items could otherwise be served."
      ],
      [
            "Proxy server",
            "A server that acts as both client and server, satisfying requests from its own cache when it can and fetching from the origin server when it cannot."
      ],
      [
            "Root DNS server",
            "A server at the top of the DNS hierarchy, contacted as a last resort by name servers that cannot resolve a name. There are 13 root identities, deployed as many anycast instances worldwide."
      ],
      [
            "TLD server",
            "A top-level domain server responsible for a suffix such as .com, .org, .edu, or a country domain, and able to name the authoritative server for a domain within it."
      ],
      [
            "Local DNS server",
            "The default name server for an ISP, company, or university. It is not part of the DNS hierarchy; it caches recent results and forwards queries into the hierarchy for its clients."
      ],
      [
            "Iterative query",
            "A DNS query in which the contacted server does not resolve the name but replies with the name of the next server to ask."
      ],
      [
            "Recursive query",
            "A DNS query in which the contacted server takes on the work of resolving the name and returns the final answer."
      ],
      [
            "Resource record",
            "A DNS database entry consisting of a name, a value, a type, and a time to live."
      ],
      [
            "A record",
            "A DNS resource record whose name is a hostname and whose value is that host's IP address."
      ],
      [
            "CNAME record",
            "A DNS resource record whose name is an alias and whose value is the real, canonical hostname it refers to."
      ],
      [
            "NS record",
            "A DNS resource record whose name is a domain and whose value is the hostname of an authoritative name server for that domain."
      ],
      [
            "MX record",
            "A DNS resource record whose value is the hostname of the mail server that accepts mail for the associated name."
      ],
      [
            "DNS caching",
            "Storing name-to-address results at a local server for the record's time to live, so repeat lookups need not reach the hierarchy. Reduces load but can serve stale answers."
      ],
      [
            "DNSSEC",
            "DNS Security Extensions, which add origin authentication and integrity protection to DNS records. It does not encrypt queries."
      ],
      [
            "DNS cache poisoning",
            "An attack that sends forged replies to a DNS server so it caches and then serves an incorrect address."
      ],
      [
            "BitTorrent",
            "A peer-to-peer file distribution protocol in which a file is split into chunks and peers exchange chunks with one another rather than downloading from a single server."
      ],
      [
            "Torrent",
            "The group of peers currently exchanging chunks of a particular file."
      ],
      [
            "Tracker",
            "A server that keeps track of the peers participating in a torrent and gives a joining peer a list of peers to contact."
      ],
      [
            "Chunk",
            "A fixed-size piece of a file, 256 Kb in BitTorrent, that peers request and exchange individually."
      ],
      [
            "Churn",
            "The continual arrival and departure of peers in a peer-to-peer system, which the protocol must tolerate."
      ],
      [
            "Constant bit rate (CBR)",
            "Video encoding in which the output rate is held fixed regardless of how complex the scene is."
      ],
      [
            "Variable bit rate (VBR)",
            "Video encoding in which the output rate rises and falls with the amount of spatial and temporal detail in the scene."
      ],
      [
            "Manifest file",
            "A file listing the URLs of each chunk of a video at each available encoding rate, which a DASH client consults to decide what to request next."
      ],
      [
            "Enter deep",
            "A CDN placement strategy that pushes many small server clusters deep into access networks, as close to users as possible."
      ],
      [
            "Bring home",
            "A CDN placement strategy that builds a smaller number of larger clusters in points of presence near, but not inside, access networks."
      ],
      [
            "Over the top (OTT)",
            "Delivering video and other services over the ordinary Internet rather than a dedicated network, so the provider must cope with congestion it does not control."
      ],
      [
            "Connectionless demultiplexing",
            "UDP's method of choosing a socket using the destination port number alone, so segments from different senders reach the same socket."
      ],
      [
            "Connection-oriented demultiplexing",
            "TCP's method of choosing a socket using the full four-tuple, so segments from different senders reach different sockets even on the same port."
      ],
      [
            "Four-tuple",
            "The combination of source IP address, source port, destination IP address, and destination port that identifies a TCP socket."
      ],
      [
            "Internet checksum",
            "An error-detection value formed by summing a segment's 16-bit words in one's complement arithmetic and storing the complement of the result."
      ],
      [
            "One's complement sum",
            "Addition in which a carry out of the most significant bit is added back into the least significant bit, used to compute the Internet checksum."
      ],
      [
            "Wraparound carry",
            "The carry out of the most significant bit that must be added back into the sum when computing an Internet checksum."
      ],
      [
            "UDP segment header",
            "An 8-byte header containing source port, destination port, segment length in bytes including the header, and checksum."
      ],
      [
            "Logical communication",
            "The illusion a layer provides that two peers talk directly. The transport layer provides it between processes; the network layer provides it between hosts."
      ],
      [
            "Datagram socket",
            "A socket used with UDP, in which the sender attaches a destination address and port to each individual message rather than establishing a connection."
      ],
      [
            "Welcoming socket",
            "The TCP socket on which a server waits for connection requests, distinct from the per-connection socket created when a client connects."
      ],
      [
            "HTTP/3 over UDP",
            "The arrangement in which HTTP/3 runs over QUIC, which runs over UDP, so reliability and congestion control are supplied above the transport layer rather than by TCP."
      ],
      [
            "Sequence number space",
            "The range of sequence numbers a protocol can use before wrapping. It must be large enough that an old duplicate cannot be mistaken for a new segment."
      ],
      [
            "Receive window",
            "The amount of free buffer space a TCP receiver advertises, limiting how much unacknowledged data the sender may have in flight. The mechanism of flow control."
      ],
      [
            "SYN segment",
            "The first segment of the TCP three-way handshake, requesting a connection and carrying the client's initial sequence number."
      ],
      [
            "SYNACK segment",
            "The server's reply in the TCP three-way handshake, acknowledging the client's SYN and carrying the server's own initial sequence number."
      ],
      [
            "Triple duplicate ACK",
            "Three repeated acknowledgments for the same sequence number, which tell a TCP sender that later segments arrived and one is missing, triggering fast retransmit."
      ],
      [
            "Retransmission timer",
            "The timer a TCP sender starts for unacknowledged data. Its expiry is treated as a strong congestion signal."
      ],
      [
            "Exponential backoff",
            "Doubling a waiting interval after each successive failure, so repeated retries spread out instead of compounding the problem."
      ],
      [
            "Threshold (ssthresh)",
            "The congestion window value at which TCP switches from the exponential growth of slow start to the linear growth of congestion avoidance."
      ],
      [
            "TCP Tahoe",
            "An early TCP congestion control variant that reduces the congestion window to one segment on any loss, whether detected by timeout or by duplicate ACKs."
      ],
      [
            "TCP CUBIC",
            "A modern congestion control algorithm that grows the congestion window as a cubic function of time since the last loss, recovering faster on high bandwidth-delay paths."
      ],
      [
            "Explicit congestion notification (ECN)",
            "A mechanism in which routers mark packets to signal congestion instead of dropping them, letting senders slow down before loss occurs."
      ],
      [
            "Bandwidth-delay product",
            "Link rate multiplied by round-trip time. It is the amount of data that must be in flight to keep a link fully utilized."
      ],
      [
            "TCP fairness",
            "The tendency of TCP connections sharing a bottleneck to converge toward equal shares of its capacity, a consequence of additive increase and multiplicative decrease."
      ],
      [
            "Bottleneck link",
            "The link along a path with the smallest available rate, which determines end-to-end throughput regardless of how fast the other links are."
      ],
      [
            "Best-effort service",
            "The Internet's network-layer service model, which makes no guarantee about delivery, delay, jitter, or bandwidth."
      ],
      [
            "Line-speed processing",
            "Completing input port processing faster than packets can arrive, so the input queue does not grow without bound."
      ],
      [
            "Decentralized switching",
            "Performing the forwarding table lookup in the input port itself rather than at a central processor, so lookups happen in parallel across ports."
      ],
      [
            "Switching via memory",
            "A first-generation switching fabric in which the CPU copies each packet into and out of system memory, limited by memory bandwidth and two bus crossings per datagram."
      ],
      [
            "Switching via bus",
            "A switching fabric in which packets cross a shared bus from input to output port, limited by bus bandwidth to one transfer at a time."
      ],
      [
            "Switching via interconnection network",
            "A switching fabric built from a crossbar or multistage network, allowing many non-conflicting transfers in parallel."
      ],
      [
            "Crossbar switch",
            "An interconnection fabric with a dedicated crosspoint for every input-output pair, so any set of non-conflicting transfers can proceed simultaneously."
      ],
      [
            "Multistage switch",
            "A large switch built from several stages of smaller switches, often by fragmenting datagrams into fixed-length cells and reassembling them at the exit."
      ],
      [
            "Switching fabric plane",
            "One of several parallel copies of a switching fabric, used together to multiply a router's total switching capacity."
      ],
      [
            "Input port queueing",
            "Buffering at a router's input ports, which occurs when the switching fabric is slower than the combined input rate."
      ],
      [
            "Head-of-line (HOL) blocking",
            "A condition in which a queued datagram at the front of an input queue blocks datagrams behind it, even when their output ports are free."
      ],
      [
            "Output port queueing",
            "Buffering at a router's output ports, which occurs when datagrams arrive from the fabric faster than the outgoing link can transmit them."
      ],
      [
            "Buffer management",
            "Deciding how much buffer to allocate and which datagram to discard when no free buffer remains."
      ],
      [
            "Drop policy",
            "The rule that selects which datagram to discard when a router's buffer is full."
      ],
      [
            "Scheduling discipline",
            "The rule that selects which queued datagram is transmitted next on an output link."
      ],
      [
            "Priority scheduling",
            "A scheduling discipline that transmits higher-priority traffic ahead of lower-priority traffic, giving some flows better service than others."
      ],
      [
            "Network neutrality",
            "The policy question of whether network operators may give different classes of traffic different treatment, which scheduling and priority mechanisms make technically possible."
      ],
      [
            "Generalized forwarding",
            "Forwarding based on any chosen set of header fields rather than only the destination IP address."
      ],
      [
            "Match plus action",
            "The forwarding model in which a router matches header fields against table entries and performs the associated action, used by both traditional lookup and OpenFlow."
      ],
      [
            "Global routing information",
            "A routing approach in which every router knows the complete topology and all link costs, as in link-state algorithms."
      ],
      [
            "Decentralized routing information",
            "A routing approach in which a router initially knows only its own link costs and learns the rest by exchanging estimates with neighbors."
      ],
      [
            "Static routing",
            "Routing in which routes change slowly, usually through manual configuration."
      ],
      [
            "Dynamic routing",
            "Routing in which routes change automatically in response to link cost changes or periodic updates."
      ],
      [
            "Bellman-Ford equation",
            "The relation Dx(y) = min over neighbors v of { c(x,v) + Dv(y) }, which gives both the least-cost distance and the next hop toward a destination."
      ],
      [
            "Link-state broadcast",
            "Flooding a router's own link costs to every other router in the area so all of them can build an identical topology map."
      ],
      [
            "Least-cost path",
            "The path between two nodes whose summed link costs is smallest."
      ],
      [
            "Predecessor node",
            "In Dijkstra's algorithm, the node immediately before a given destination on the current least-cost path from the source."
      ],
      [
            "Iterative algorithm",
            "An algorithm that repeats a computation until the result stops changing, as distance vector does across successive rounds of updates."
      ],
      [
            "Asynchronous update",
            "An update that occurs when a local event happens rather than on a global clock, so routers need not act in lockstep."
      ],
      [
            "Self-stopping algorithm",
            "An algorithm that generates no further messages once it converges, because a router notifies neighbors only when its own estimates change."
      ],
      [
            "Good news travels fast",
            "The observation that a decrease in a link cost propagates through a distance-vector network in a small number of rounds."
      ],
      [
            "Bad news travels slow",
            "The observation that an increase in a link cost can take many rounds to propagate, because routers keep computing paths through each other."
      ],
      [
            "Routing oscillation",
            "Instability that arises when link costs depend on the traffic those links carry, so every router reacts to the same measurement at the same time."
      ],
      [
            "Black-holing",
            "The result of a router advertising very low costs to many destinations, attracting traffic it then discards."
      ],
      [
            "Message complexity",
            "The number of routing messages an algorithm requires. Link-state needs O(n squared); distance vector exchanges only between neighbors but for an unpredictable number of rounds."
      ],
      [
            "Convergence time",
            "How long a routing algorithm takes to reach a stable, consistent set of routes after a change."
      ],
      [
            "OPEN message",
            "The BGP message that opens a session with a peer and authenticates the sender."
      ],
      [
            "UPDATE message",
            "The BGP message that advertises a new path or withdraws a previously advertised one."
      ],
      [
            "KEEPALIVE message",
            "The BGP message that holds a session open when there are no updates, and that also acknowledges an OPEN request."
      ],
      [
            "NOTIFICATION message",
            "The BGP message that reports an error in a previous message and is also used to close a session."
      ],
      [
            "Path vector protocol",
            "A routing protocol that advertises the full list of autonomous systems a route has traversed, allowing loop detection and policy decisions. BGP is the example."
      ],
      [
            "Import policy",
            "The rules a BGP gateway uses to accept or decline a route advertisement it receives."
      ],
      [
            "Export policy",
            "The rules that determine whether a BGP gateway advertises a route onward to a particular neighboring autonomous system."
      ],
      [
            "Area border router",
            "An OSPF router that belongs to more than one area and summarizes distances from its own area into the backbone."
      ],
      [
            "Backbone router",
            "An OSPF router that runs OSPF limited to the backbone area, area 0."
      ],
      [
            "Boundary router",
            "An OSPF router that connects its autonomous system to other autonomous systems."
      ],
      [
            "Hierarchical OSPF",
            "A two-level OSPF design of local areas plus a backbone, in which link-state advertisements are flooded only within an area."
      ],
      [
            "OSPF authentication",
            "Verification of OSPF messages so a malicious host cannot inject false link-state information."
      ],
      [
            "SDN controller",
            "The logically centralized software that maintains network-wide state and computes and installs forwarding tables in switches."
      ],
      [
            "Northbound API",
            "The interface between an SDN controller and the network-control applications above it, commonly a RESTful API."
      ],
      [
            "OpenFlow",
            "A protocol between an SDN controller and a switch, carried over TCP, with controller-to-switch, asynchronous, and symmetric message classes."
      ],
      [
            "Flow table",
            "The table in an SDN switch that matches packet header fields and applies the associated actions."
      ],
      [
            "ICMP type and code",
            "The pair of header fields that identify an ICMP message's category and specific meaning, such as type 11 code 0 for TTL expired."
      ],
      [
            "TTL expired",
            "The ICMP message a router returns when a datagram's time-to-live reaches zero, which is how traceroute discovers each hop."
      ],
      [
            "Port unreachable",
            "The ICMP message a destination host returns when no process is listening on the requested port, which is how traceroute knows it has arrived."
      ],
      [
            "Command line interface (CLI)",
            "Direct operator commands typed or scripted to an individual device, the least abstract of the network management approaches."
      ],
      [
            "GetRequest",
            "The SNMP message a manager sends to retrieve the value of a specific managed object."
      ],
      [
            "GetNextRequest",
            "The SNMP message a manager sends to retrieve the next item in a list of managed objects, used to walk a MIB."
      ],
      [
            "GetBulkRequest",
            "The SNMP message a manager sends to retrieve a whole block of managed objects at once, making large MIB retrievals practical."
      ],
      [
            "SetRequest",
            "The SNMP message a manager sends to write a value into a managed object on a device."
      ],
      [
            "Response PDU",
            "The SNMP message an agent returns carrying the requested value or the outcome of a request."
      ],
      [
            "Trap PDU",
            "The SNMP message an agent sends unprompted to inform the manager of an exceptional event."
      ],
      [
            "Request-response mode",
            "The SNMP interaction style in which the manager asks and the agent answers."
      ],
      [
            "Trap mode",
            "The SNMP interaction style in which the agent reports an event without being asked."
      ],
      [
            "get-config",
            "The NETCONF operation that retrieves all or part of a named configuration from a device."
      ],
      [
            "edit-config",
            "The NETCONF operation that changes a configuration on a managed device, replying with either an ok or an error plus rollback."
      ],
      [
            "lock and unlock",
            "The NETCONF operations that reserve a configuration datastore so no other management source can change it during an edit."
      ],
      [
            "create-subscription",
            "The NETCONF operation that enables event notification subscriptions from a managed device."
      ],
      [
            "rpc-reply",
            "The NETCONF message a managed device returns in response to an rpc request."
      ],
      [
            "Hello capabilities exchange",
            "The opening NETCONF exchange in which both sides declare which capabilities they support."
      ],
      [
            "Atomic commit",
            "Applying a configuration change across one or more devices as a single all-or-nothing transaction, so a partial failure leaves nothing half-applied."
      ],
      [
            "Network-wide state management",
            "The SDN controller function of maintaining a consistent, distributed record of link state, host information, and switch information."
      ],
      [
            "Single-bit error",
            "An error in which exactly one bit of a data unit has been flipped."
      ],
      [
            "Burst error",
            "An error in which two or more bits of a data unit have been changed. The corrupted bits need not be consecutive."
      ],
      [
            "Redundancy",
            "Extra bits added to a data unit that carry no user information but allow the receiver to detect or correct errors."
      ],
      [
            "Even parity",
            "A parity scheme in which the parity bit is set so the total number of 1 bits in the unit is even."
      ],
      [
            "Odd parity",
            "A parity scheme in which the parity bit is set so the total number of 1 bits in the unit is odd."
      ],
      [
            "Channel partitioning",
            "A class of multiple access protocols that divides the channel into pieces by time, frequency, or code and allocates a piece to each node for exclusive use."
      ],
      [
            "Random access protocol",
            "A class of multiple access protocols that does not divide the channel, allows collisions to happen, and defines how to recover from them."
      ],
      [
            "Taking turns protocol",
            "A class of multiple access protocols in which nodes coordinate to transmit in turn, seeking the low-load efficiency of random access and the high-load fairness of partitioning."
      ],
      [
            "Controlled access",
            "Multiple access in which stations consult one another so that only an authorized station transmits, making collisions impossible."
      ],
      [
            "Token passing",
            "A controlled access method in which a special frame circulates and only the station holding it may transmit."
      ],
      [
            "Token",
            "The special frame that circulates in a token-passing network and grants its holder the right to transmit."
      ],
      [
            "Primary station",
            "The station in a polling network that controls all access by querying the secondary stations."
      ],
      [
            "Secondary station",
            "A station in a polling network that may transmit only when the primary station polls it."
      ],
      [
            "Channelization",
            "A multiple access method that shares the available bandwidth of a link among stations by time, frequency, or code."
      ],
      [
            "FDMA",
            "Frequency-division multiple access. The available bandwidth is divided into bands and each station is permanently allocated one band."
      ],
      [
            "TDMA",
            "Time-division multiple access. Stations share the channel in time, each transmitting during its allocated slot."
      ],
      [
            "CDMA",
            "Code-division multiple access. Every station transmits over the entire bandwidth at the same time, separated by orthogonal chipping codes rather than by time or frequency."
      ],
      [
            "ALOHA",
            "An early random access protocol in which a station transmits whenever it has data and retransmits after a random delay if the frame is lost to a collision."
      ],
      [
            "Slotted ALOHA",
            "A refinement of ALOHA in which transmissions may begin only at slot boundaries, which reduces the window in which collisions can occur."
      ],
      [
            "CSMA",
            "Carrier sense multiple access. A station listens to the medium and defers transmission while it senses another transmission in progress."
      ],
      [
            "Collision",
            "The result of two or more stations transmitting at the same time on a shared medium, corrupting the overlapping frames."
      ],
      [
            "Propagation delay and collisions",
            "The reason carrier sensing cannot eliminate collisions: a station may begin transmitting before another station's signal has had time to reach it."
      ],
      [
            "DOCSIS",
            "Data Over Cable Service Interface Specification. The standard governing cable access, combining frequency division across channels with time division and contention within them."
      ],
      [
            "MAP frame",
            "A downstream frame from the CMTS that assigns upstream transmission slots to cable modems for a coming interval."
      ],
      [
            "Minislot",
            "A small upstream time slot in a cable access network, some assigned by the CMTS and some available for contention-based requests."
      ],
      [
            "48-bit address",
            "The length of a MAC address on most LANs, written in hexadecimal and burned into the network interface card by its manufacturer."
      ],
      [
            "ARP TTL",
            "The time to live on an ARP table entry, typically about 20 minutes, after which the address mapping is forgotten and must be resolved again."
      ],
      [
            "Gratuitous broadcast",
            "An unsolicited broadcast a host sends to announce or refresh its own address mapping on the local network."
      ],
      [
            "Binary exponential backoff",
            "The Ethernet collision recovery rule in which the range of the random waiting interval doubles after each successive collision."
      ],
      [
            "Unslotted CSMA/CD",
            "Ethernet's MAC protocol: stations sense the medium, transmit when it is idle, detect collisions while transmitting, abort, and retry after binary exponential backoff."
      ],
      [
            "Bus topology",
            "An older Ethernet layout in which all nodes share a single coaxial cable and therefore a single collision domain."
      ],
      [
            "Switched topology",
            "The prevailing Ethernet layout in which each node has a dedicated link to a switch, so each link is its own collision domain."
      ],
      [
            "Full duplex switching",
            "Operation in which a station can transmit and receive simultaneously on its dedicated switch port, eliminating collisions entirely."
      ],
      [
            "Store and forward switch",
            "A switch that receives a complete frame, examines its addresses, and then forwards it selectively to the appropriate outgoing link."
      ],
      [
            "Self-learning",
            "The process by which a switch builds its table by recording the source MAC address and incoming port of every frame it receives."
      ],
      [
            "Switch table entry",
            "A record holding a host's MAC address, the interface used to reach it, and a timestamp so stale entries can expire."
      ],
      [
            "Interconnected switches",
            "Multiple self-learning switches connected together, which continue to learn and forward correctly without any additional configuration."
      ],
      [
            "802.1Q",
            "The IEEE standard that adds a 4-byte tag carrying a VLAN identifier to frames crossing a trunk port between switches."
      ],
      [
            "VLAN ID (VID)",
            "The identifier inside an 802.1Q tag that names which VLAN a frame belongs to."
      ],
      [
            "Native VLAN",
            "The VLAN whose frames traverse an 802.1Q trunk untagged."
      ],
      [
            "Port-based VLAN",
            "A VLAN defined by grouping switch ports through management software, so a single physical switch behaves as several virtual switches."
      ],
      [
            "Traffic isolation",
            "The property that frames sent from ports in one VLAN can reach only other ports in that VLAN."
      ],
      [
            "Dynamic membership",
            "The ability to reassign switch ports among VLANs without recabling, so a user who moves desks can stay in the same logical network."
      ],
      [
            "Inter-VLAN routing",
            "Forwarding traffic between VLANs, which requires a layer 3 device because VLANs are separate broadcast domains."
      ],
      [
            "802.3 standards",
            "The family of IEEE Ethernet standards sharing one MAC protocol and frame format across many speeds and physical media."
      ],
      [
            "100BASE-TX",
            "A 100 Mbps Ethernet physical layer specification running over twisted pair copper."
      ],
      [
            "MPLS header",
            "A header inserted between the link-layer header and the IP header, containing a label, an experimental field, a bottom-of-stack bit, and a time to live."
      ],
      [
            "Label field",
            "The part of the MPLS header carrying the locally significant value that a label-switched router matches to choose an outgoing interface."
      ],
      [
            "Exp field",
            "The experimental or traffic-class field in the MPLS header, used to signal per-hop queueing and discard behavior."
      ],
      [
            "Bottom-of-stack bit",
            "The MPLS header bit that indicates whether the current label is the last one in a stack of labels."
      ],
      [
            "Label TTL",
            "The time-to-live field in the MPLS header, which serves the same loop-limiting purpose as the IP TTL inside an MPLS domain."
      ],
      [
            "RSVP-TE",
            "The signalling protocol an ingress MPLS router uses to establish label forwarding state along a chosen path through downstream routers."
      ],
      [
            "Link-state flooding extension",
            "Modifications to OSPF and IS-IS that carry additional information such as link bandwidth and reserved bandwidth for use by MPLS traffic engineering."
      ],
      [
            "Border router",
            "In a datacenter network, the router that connects the datacenter to networks outside it."
      ],
      [
            "Tier-1 switch",
            "In a datacenter hierarchy, a switch below the border routers that connects to many tier-2 switches."
      ],
      [
            "Tier-2 switch",
            "In a datacenter hierarchy, a switch that aggregates many top-of-rack switches and connects upward to tier-1."
      ],
      [
            "Top-of-rack (TOR) switch",
            "The switch serving one server rack, typically connecting to its blades at 40 to 100 Gbps Ethernet."
      ],
      [
            "Server blade",
            "An individual server host mounted in a datacenter rack."
      ],
      [
            "Server rack",
            "A cabinet holding roughly 20 to 40 server blades plus its top-of-rack switch."
      ],
      [
            "Multipath topology",
            "A datacenter design with many disjoint paths between any two racks, raising throughput and providing redundancy."
      ],
      [
            "Application-layer load balancer",
            "A device that receives external client requests, distributes the work across internal servers, and returns results, hiding datacenter internals from clients."
      ],
      [
            "RoCE",
            "Remote Direct Memory Access over Converged Ethernet, a datacenter link-layer technique that lets one host read or write another host's memory with very low overhead."
      ],
      [
            "RDMA",
            "Remote Direct Memory Access. Transferring data directly between the memory of two hosts without involving either operating system on the data path."
      ],
      [
            "DCTCP",
            "Data Center TCP, a congestion control algorithm that reacts to explicit congestion notification marks rather than to packet loss, keeping queues and latency low."
      ],
      [
            "DCQCN",
            "Data Center Quantized Congestion Notification, a congestion control scheme used with RoCE that also relies on explicit congestion notification."
      ],
      [
            "Day in the life of a web request",
            "The end-to-end walkthrough in which a host uses DHCP, ARP, DNS, TCP, and HTTP in sequence to load a single web page."
      ],
      [
            "DHCP ACK",
            "The DHCP server's reply carrying the client's assigned IP address, the address of its first-hop router, and the name and address of the DNS server."
      ],
      [
            "First-hop router",
            "The router a host sends to when the destination is outside its own subnet, also called the default gateway."
      ],
      [
            "Basic service set (BSS)",
            "An 802.11 cell. In infrastructure mode it contains wireless hosts plus an access point; in ad hoc mode it contains hosts only."
      ],
      [
            "Path loss",
            "The attenuation of a radio signal as it propagates through space and matter, one of the main reasons wireless links are harder than wired ones."
      ],
      [
            "Bit error rate (BER)",
            "The fraction of received bits that are in error. It falls as signal-to-noise ratio rises for a given physical layer."
      ],
      [
            "Rate adaptation",
            "Dynamically changing the physical-layer modulation and transmission rate as signal-to-noise ratio varies, trading throughput for reliability."
      ],
      [
            "Passive scanning",
            "Discovering access points by listening for the beacon frames they broadcast, then sending an association request to the chosen one."
      ],
      [
            "Active scanning",
            "Discovering access points by broadcasting a probe request and collecting probe responses, then sending an association request to the chosen one."
      ],
      [
            "Probe request",
            "The frame a host broadcasts during active scanning to solicit replies from nearby access points."
      ],
      [
            "Probe response",
            "The frame an access point sends in reply to a probe request during active scanning."
      ],
      [
            "Association request",
            "The frame a host sends to the access point it has selected, asking to join that access point's cell."
      ],
      [
            "Association response",
            "The frame an access point sends to confirm that a host has joined its cell."
      ],
      [
            "Power management",
            "The 802.11 mechanism by which a device tells the access point it is sleeping until the next beacon, so the access point buffers frames for it."
      ],
      [
            "Beacon sleep cycle",
            "The pattern in which a sleeping device wakes before each beacon frame, checks the list of devices with buffered traffic, and either stays awake or sleeps again."
      ],
      [
            "802.11n (Wi-Fi 4)",
            "The 2009 802.11 amendment supporting up to 600 Mbps over 2.4 and 5 GHz with multiple spatial streams."
      ],
      [
            "802.11ac (Wi-Fi 5)",
            "The 2013 802.11 amendment operating in 5 GHz with wider channels and higher-order modulation."
      ],
      [
            "802.11ax (Wi-Fi 6)",
            "The 802.11 amendment published in 2021 that improves efficiency in dense environments across 2.4 and 5 GHz. Wi-Fi 6E extends it into the 6 GHz band."
      ],
      [
            "Chipping sequence",
            "The per-user code in CDMA that is combined with the data on transmission and used again on reception to separate one sender from the others."
      ],
      [
            "Orthogonal codes",
            "Codes chosen so that the inner product of any two different codes is approximately zero, which is what lets CDMA users share the whole band simultaneously."
      ],
      [
            "Bluetooth",
            "A personal area network technology covering roughly 10 metres in the 2.4 GHz band, used as a cable replacement for peripherals."
      ],
      [
            "Piconet",
            "A Bluetooth network consisting of one master device and its client devices, self-assembled without infrastructure."
      ],
      [
            "Master device",
            "The Bluetooth device that controls a piconet by polling clients and granting their transmission requests."
      ],
      [
            "Parked device",
            "A Bluetooth client that has gone inactive to conserve battery and can later wake and rejoin the piconet."
      ],
      [
            "Frequency hopping",
            "Changing transmission frequency in a known pseudo-random pattern, which limits how much any one interfering source can disrupt."
      ],
      [
            "Single hop network",
            "A wireless network in which a host reaches the larger network directly through one base station or not at all."
      ],
      [
            "Multiple hop network",
            "A wireless network in which a host may have to relay through several other wireless nodes to reach the larger network, as in a mesh network."
      ],
      [
            "IMSI",
            "International Mobile Subscriber Identity. A 64-bit identifier stored on the SIM card that identifies both the subscriber and their home network."
      ],
      [
            "eNode-B",
            "The LTE term for a base station. It manages radio resources in its cell, coordinates authentication, and takes an active role in device mobility."
      ],
      [
            "Home Subscriber Server (HSS)",
            "The database in a subscriber's home cellular network holding identity and service information, and the ultimate authority for authentication."
      ],
      [
            "Enhanced Packet Core (EPC)",
            "The all-IP core network of a 4G LTE system, containing the MME, Serving Gateway, PDN Gateway, and HSS."
      ],
      [
            "GTP",
            "GPRS Tunneling Protocol. The protocol that encapsulates a mobile device's datagrams inside UDP for transport across the cellular core."
      ],
      [
            "Packet Data Convergence Protocol (PDCP)",
            "The LTE link-layer protocol responsible for header compression and encryption."
      ],
      [
            "Radio Link Control (RLC)",
            "The LTE link-layer protocol responsible for fragmentation, reassembly, and reliable data transfer over the radio link."
      ],
      [
            "Medium Access (LTE MAC)",
            "The LTE link-layer sublayer responsible for requesting and using radio transmission slots."
      ],
      [
            "OFDM",
            "Orthogonal Frequency Division Multiplexing. Dividing a channel into sub-carriers spaced so they do not interfere, used in both LTE and modern Wi-Fi."
      ],
      [
            "Primary synchronization signal",
            "A signal a base station broadcasts periodically on all frequencies, which a mobile device searches for as the first step in associating."
      ],
      [
            "Light sleep",
            "An LTE power-saving state entered after a few hundred milliseconds of inactivity, from which the device wakes periodically to check for downstream traffic."
      ],
      [
            "Deep sleep",
            "An LTE power-saving state entered after several seconds of inactivity. The device may change cells while asleep and must then re-establish its association."
      ],
      [
            "Registration",
            "The process by which a visited network's mobility manager records a roaming device and informs the device's home network of its current location."
      ],
      [
            "Indirect routing",
            "Mobility routing in which the correspondent addresses the mobile's permanent address, the home network intercepts the traffic, and it is tunneled to the visited network."
      ],
      [
            "Direct routing",
            "Mobility routing in which the correspondent first asks the home network for the mobile's current address and then sends straight to the visited network."
      ],
      [
            "Triangle routing",
            "The inefficiency of indirect routing, in which traffic detours through the home network even when correspondent and mobile are near each other."
      ],
      [
            "Correspondent",
            "The host communicating with a mobile device."
      ],
      [
            "Care-of address",
            "The address a mobile device acquires in the network it is currently visiting, to which its home network forwards traffic."
      ],
      [
            "Mobility manager",
            "The network element that tracks which devices are attached to a network and coordinates with their home networks."
      ],
      [
            "5G NR",
            "5G New Radio. The 5G air interface, which is not backwards compatible with 4G and operates in two frequency ranges."
      ],
      [
            "FR1",
            "The 5G frequency range from roughly 450 MHz to 6 GHz, offering wider coverage than millimetre wave."
      ],
      [
            "FR2",
            "The 5G frequency range from roughly 24 GHz to 52 GHz, the millimetre wave band, offering much higher rates over much shorter distances."
      ],
      [
            "Millimeter wave",
            "Very high radio frequencies that support very high data rates but propagate poorly, requiring dense deployment of small cells."
      ],
      [
            "MIMO",
            "Multiple Input Multiple Output. Using multiple directional antennas at both ends of a link to raise capacity."
      ],
      [
            "Pico-cell",
            "A very small cell, roughly 10 to 100 metres across, needed to make millimetre wave coverage practical."
      ],
      [
            "3GPP",
            "The Third Generation Partnership Project, the body that produces the technical standards for 4G LTE and 5G."
      ],
      [
            "Plaintext",
            "A message in its original readable form, before encryption."
      ],
      [
            "Ciphertext",
            "A message after encryption, unreadable without the corresponding key."
      ],
      [
            "Substitution cipher",
            "A cipher that replaces each element of the plaintext with another element according to a fixed mapping."
      ],
      [
            "Monoalphabetic cipher",
            "A substitution cipher that maps each letter to one fixed replacement letter throughout. Vulnerable to statistical frequency analysis."
      ],
      [
            "Polyalphabetic cipher",
            "A cipher that cycles through several substitution alphabets so the same plaintext letter does not always produce the same ciphertext letter."
      ],
      [
            "Cipher-text only attack",
            "An attack in which the adversary has only ciphertext to analyze, using brute force or statistical analysis."
      ],
      [
            "Known-plaintext attack",
            "An attack in which the adversary knows some plaintext and its matching ciphertext."
      ],
      [
            "Chosen-plaintext attack",
            "An attack in which the adversary can obtain the ciphertext for plaintext of their own choosing."
      ],
      [
            "Brute force attack",
            "Trying every possible key until the correct one is found. Its feasibility is determined by key length."
      ],
      [
            "DES",
            "Data Encryption Standard. A block cipher with a 56-bit key and 64-bit blocks, now broken by brute force and superseded by AES."
      ],
      [
            "3DES",
            "Triple DES. Applying DES three times with different keys. Disallowed for encryption by NIST after 2023; use AES instead."
      ],
      [
            "AES",
            "Advanced Encryption Standard. The symmetric-key standard that replaced DES, processing 128-bit blocks with 128, 192, or 256-bit keys."
      ],
      [
            "Block cipher",
            "A symmetric cipher that encrypts fixed-size blocks of data at a time, usually combined with a chaining mode across blocks."
      ],
      [
            "RSA",
            "A public-key algorithm whose security rests on the difficulty of factoring the product of two large primes, named for Rivest, Shamir, and Adleman."
      ],
      [
            "Modular exponentiation",
            "The arithmetic operation underlying RSA encryption and decryption, raising a number to a power modulo another number."
      ],
      [
            "Message digest",
            "A fixed-length fingerprint of a message produced by a hash function, used so that long messages can be signed efficiently."
      ],
      [
            "MD5",
            "A 128-bit hash function that is no longer acceptable where collision resistance is required, since collisions can be found in seconds. Learn it as history, not as a recommendation."
      ],
      [
            "SHA-1",
            "A 160-bit hash function that NIST is retiring for all applications by 31 December 2030. Use SHA-2 or SHA-3 instead."
      ],
      [
            "SHA-2",
            "The current NIST-approved family of hash functions, including SHA-256, specified in FIPS 180-4."
      ],
      [
            "HMAC",
            "A construction that combines a hash function with a shared secret key to produce a message authentication code."
      ],
      [
            "Non-repudiation",
            "The property that a signer cannot later deny having signed a message, because only they hold the private key that produced the signature."
      ],
      [
            "Authentication protocol ap5.0",
            "The nonce-plus-public-key authentication protocol which is secure against replay but still falls to a man-in-the-middle who substitutes their own public key."
      ],
      [
            "Playback attack",
            "Recording a valid authentication exchange and replaying it later to impersonate the original sender. Defeated by including a fresh nonce."
      ],
      [
            "Secure e-mail",
            "Applying a symmetric session key for confidentiality, a signed message digest for integrity and authentication, and the recipient's public key to deliver the session key."
      ],
      [
            "Cipher suite",
            "The named set of algorithms a TLS connection uses for key exchange, encryption, message authentication, and digital signature."
      ],
      [
            "Diffie-Hellman",
            "A key exchange method letting two parties agree on a shared secret over an open channel. TLS 1.3 requires it for key exchange."
      ],
      [
            "Handshake",
            "The opening phase of a secure protocol in which the parties authenticate each other and establish a shared secret."
      ],
      [
            "Key derivation",
            "Expanding one shared secret into the several keys a session needs, such as separate keys for each direction and for encryption versus authentication."
      ],
      [
            "Eavesdropping",
            "Passively intercepting and reading messages without altering them."
      ],
      [
            "Hijacking",
            "Taking over an ongoing connection by removing one endpoint and inserting yourself in its place."
      ],
      [
            "Security Parameter Index (SPI)",
            "A 32-bit identifier carried in an IPsec datagram that the receiver uses to look up the correct security association in its database."
      ],
      [
            "Pre-shared key (PSK)",
            "An IKE authentication method in which both sides begin with a common secret and use it to authenticate each other and generate security associations."
      ],
      [
            "Public key infrastructure (PKI)",
            "An IKE authentication method in which both sides begin with a public and private key pair plus a certificate."
      ],
      [
            "IKEv2",
            "The current version of the Internet Key Exchange protocol, specified in RFC 7296. IKEv1 was deprecated by RFC 9395 in 2023."
      ],
      [
            "Authentication server (AS)",
            "The server on the wired network that shares a secret with a wireless device and performs mutual authentication and session key derivation with it."
      ],
      [
            "WPA3",
            "The current Wi-Fi Alliance security certification, whose handshake derives a session key from an initial shared secret plus a nonce from each side."
      ],
      [
            "EAP",
            "Extensible Authentication Protocol. Defines the end-to-end request and response conversation between a wireless device and an authentication server."
      ],
      [
            "EAPoL",
            "EAP over LAN. The encapsulation that carries EAP messages across the 802.11 wireless link."
      ],
      [
            "RADIUS",
            "The protocol commonly used to carry EAP messages between an access point and an authentication server across the wired network."
      ],
      [
            "Discovery of security capabilities",
            "The first phase of 802.11 security, in which the access point advertises the authentication and encryption forms it supports and the device requests the ones it wants."
      ],
      [
            "Mutual authentication",
            "Authentication in which each party proves its identity to the other, rather than only the client proving itself to the network."
      ],
      [
            "Session key derivation",
            "Computing a symmetric key for a session from a longer-lived shared secret combined with fresh nonces from both parties."
      ],
      [
            "Nonce exchange",
            "Trading numbers used only once so that a recorded exchange cannot be replayed later."
      ],
      [
            "auth_token",
            "The value a 4G home subscriber server derives from the shared SIM key, which lets the device confirm it is talking to its genuine home network."
      ],
      [
            "xres",
            "The expected authentication response the home subscriber server computes in advance, against which the visited MME compares the device's answer."
      ],
      [
            "Stateless packet filter",
            "A firewall that decides on each packet in isolation using header fields, and therefore admits packets that make no sense for any live connection."
      ],
      [
            "Stateful packet filter",
            "A firewall that tracks the setup and teardown of every connection so it can reject packets that do not belong to one."
      ],
      [
            "Application gateway",
            "A firewall component that filters on application data rather than headers, requiring one gateway per application and client awareness of it."
      ],
      [
            "Connection state table",
            "The record a stateful firewall keeps of active connections, consulted before admitting a packet and timed out when a connection goes idle."
      ],
      [
            "Deep packet inspection",
            "Examining packet contents rather than only headers, used by intrusion detection systems to match known attack signatures."
      ],
      [
            "Smurf attack",
            "A denial of service technique that sends ICMP traffic to a broadcast address so many hosts reply to a spoofed victim."
      ],
      [
            "SYN flooding",
            "A denial of service attack that opens many half-finished TCP connections so no resources remain for legitimate ones."
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
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Processing delay?",
            "back": "Time a router spends checking a packet for bit errors and looking up its output link. Typically well under a millisecond and roughly constant."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Queueing delay?",
            "back": "Time a packet waits in a router's output buffer for its turn to be transmitted. The only delay component that depends on how busy the network is."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Transmission delay?",
            "back": "Time to push all of a packet's bits onto a link, equal to L/R where L is the packet length in bits and R is the link rate in bits per second."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Propagation delay?",
            "back": "Time for one bit to travel the length of a link, equal to d/s where d is the link distance and s is the signal propagation speed. Independent of packet size."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Traceroute?",
            "back": "A diagnostic tool that maps the routers along a path by sending packets with increasing time-to-live values and recording the ICMP replies each router returns."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Hybrid fiber coax (HFC)?",
            "back": "A cable access network in which fiber runs from the headend to neighborhood nodes and coaxial cable completes the run to homes. Capacity is shared among the homes on a segment."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Cable modem termination system (CMTS)?",
            "back": "The device at the cable headend that terminates cable modem connections and converts their analog signals back into digital traffic for the ISP network."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Digital subscriber line (DSL)?",
            "back": "Residential access that carries data over the existing telephone pair to a DSLAM at the central office, using frequencies above those used by voice."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is DSLAM?",
            "back": "Digital Subscriber Line Access Multiplexer. The device at the telephone central office that separates DSL data traffic toward the Internet from voice traffic toward the telephone network."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Frequency division multiplexing (FDM)?",
            "back": "Dividing a medium's spectrum into frequency bands and giving each channel or user its own band, so all can transmit simultaneously."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Time division multiplexing (TDM)?",
            "back": "Dividing time into slots and giving each channel or user its own periodic slot, so each transmits at the full rate but only during its slot."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Twisted pair?",
            "back": "Two insulated copper wires twisted together. Category 5 supports 100 Mbps and 1 Gbps Ethernet; Category 6 supports 10 Gbps."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Coaxial cable?",
            "back": "Two concentric copper conductors, used bidirectionally and able to carry multiple frequency channels on one cable."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Fiber optic cable?",
            "back": "Glass fiber carrying light pulses, one pulse per bit. Supports very high point-to-point rates, has a low error rate, and is immune to electromagnetic noise."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Guided media?",
            "back": "Physical media in which the signal is confined to a solid conductor or fiber, such as copper, coax, or optical fiber."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Unguided media?",
            "back": "Media in which the signal propagates freely through the environment, such as radio and other wireless transmission."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Internet exchange point (IXP)?",
            "back": "A shared facility where multiple ISPs interconnect and exchange traffic directly, avoiding the cost and latency of transiting an upstream provider."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Tier-1 ISP?",
            "back": "One of a small number of large, well-connected networks with national or international coverage that reach the whole Internet without buying transit."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Peering link?",
            "back": "A direct interconnection between two networks that agree to exchange each other's traffic, typically without payment."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Regional ISP?",
            "back": "A mid-level network that aggregates access ISPs in a geographic area and connects them upward to larger providers."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Content provider network?",
            "back": "A private network run by a large content company such as Google or Meta to connect its data centers and reach users directly, often bypassing tier-1 transit."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Point of presence (PoP)?",
            "back": "A facility where an ISP places routers so that customer networks and other providers can connect to it."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Malware?",
            "back": "Software that installs itself on a host to cause harm, including viruses, worms, and spyware."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Virus?",
            "back": "Self-replicating malware that infects a host when a user receives and executes an object, such as an email attachment."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Worm?",
            "back": "Self-replicating malware that infects a host by being passively received and executed without user action."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Botnet?",
            "back": "A collection of compromised hosts controlled remotely and used collectively for spam or distributed denial of service attacks."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Denial of service (DoS)?",
            "back": "An attack that makes a resource such as a server or link unavailable to legitimate users by overwhelming it with bogus traffic."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is Packet sniffing?",
            "back": "Passively reading and recording every packet passing a network interface placed in promiscuous mode on a shared or broadcast medium."
      },
      {
            "topic": "Computer Networks and the Internet",
            "front": "What is IP spoofing?",
            "back": "Sending a packet with a false source IP address so the receiver cannot tell who actually sent it."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Non-persistent HTTP?",
            "back": "An HTTP mode in which each object requires its own TCP connection, which is closed after that object is delivered. Costs about 2 RTT per object."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Round-trip time (RTT)?",
            "back": "The time for a small packet to travel from client to server and back, excluding transmission time for the data itself."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is HTTP/2?",
            "back": "A revision of HTTP that keeps HTTP/1.1 semantics but divides objects into frames and interleaves them over one TCP connection, letting the client set priorities. Specified in RFC 9113."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is HTTP/3?",
            "back": "A revision of HTTP that maps HTTP semantics onto QUIC over UDP, giving each object its own loss recovery and congestion control. Specified in RFC 9114."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is QUIC?",
            "back": "A transport protocol over UDP that provides encryption, per-stream reliable delivery, and congestion control. It is the transport used by HTTP/3."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Head-of-line blocking?",
            "back": "A delay caused when the item at the front of a queue cannot proceed, forcing everything behind it to wait even though those items could otherwise be served."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Proxy server?",
            "back": "A server that acts as both client and server, satisfying requests from its own cache when it can and fetching from the origin server when it cannot."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Root DNS server?",
            "back": "A server at the top of the DNS hierarchy, contacted as a last resort by name servers that cannot resolve a name. There are 13 root identities, deployed as many anycast instances worldwide."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is TLD server?",
            "back": "A top-level domain server responsible for a suffix such as .com, .org, .edu, or a country domain, and able to name the authoritative server for a domain within it."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Local DNS server?",
            "back": "The default name server for an ISP, company, or university. It is not part of the DNS hierarchy; it caches recent results and forwards queries into the hierarchy for its clients."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Iterative query?",
            "back": "A DNS query in which the contacted server does not resolve the name but replies with the name of the next server to ask."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Recursive query?",
            "back": "A DNS query in which the contacted server takes on the work of resolving the name and returns the final answer."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Resource record?",
            "back": "A DNS database entry consisting of a name, a value, a type, and a time to live."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is A record?",
            "back": "A DNS resource record whose name is a hostname and whose value is that host's IP address."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is CNAME record?",
            "back": "A DNS resource record whose name is an alias and whose value is the real, canonical hostname it refers to."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is NS record?",
            "back": "A DNS resource record whose name is a domain and whose value is the hostname of an authoritative name server for that domain."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is MX record?",
            "back": "A DNS resource record whose value is the hostname of the mail server that accepts mail for the associated name."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is DNS caching?",
            "back": "Storing name-to-address results at a local server for the record's time to live, so repeat lookups need not reach the hierarchy. Reduces load but can serve stale answers."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is DNSSEC?",
            "back": "DNS Security Extensions, which add origin authentication and integrity protection to DNS records. It does not encrypt queries."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is DNS cache poisoning?",
            "back": "An attack that sends forged replies to a DNS server so it caches and then serves an incorrect address."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is BitTorrent?",
            "back": "A peer-to-peer file distribution protocol in which a file is split into chunks and peers exchange chunks with one another rather than downloading from a single server."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Torrent?",
            "back": "The group of peers currently exchanging chunks of a particular file."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Tracker?",
            "back": "A server that keeps track of the peers participating in a torrent and gives a joining peer a list of peers to contact."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Chunk?",
            "back": "A fixed-size piece of a file, 256 Kb in BitTorrent, that peers request and exchange individually."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Churn?",
            "back": "The continual arrival and departure of peers in a peer-to-peer system, which the protocol must tolerate."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Constant bit rate (CBR)?",
            "back": "Video encoding in which the output rate is held fixed regardless of how complex the scene is."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Variable bit rate (VBR)?",
            "back": "Video encoding in which the output rate rises and falls with the amount of spatial and temporal detail in the scene."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Manifest file?",
            "back": "A file listing the URLs of each chunk of a video at each available encoding rate, which a DASH client consults to decide what to request next."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Enter deep?",
            "back": "A CDN placement strategy that pushes many small server clusters deep into access networks, as close to users as possible."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Bring home?",
            "back": "A CDN placement strategy that builds a smaller number of larger clusters in points of presence near, but not inside, access networks."
      },
      {
            "topic": "Application Layer Protocols and Services",
            "front": "What is Over the top (OTT)?",
            "back": "Delivering video and other services over the ordinary Internet rather than a dedicated network, so the provider must cope with congestion it does not control."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Connectionless demultiplexing?",
            "back": "UDP's method of choosing a socket using the destination port number alone, so segments from different senders reach the same socket."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Connection-oriented demultiplexing?",
            "back": "TCP's method of choosing a socket using the full four-tuple, so segments from different senders reach different sockets even on the same port."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Four-tuple?",
            "back": "The combination of source IP address, source port, destination IP address, and destination port that identifies a TCP socket."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Internet checksum?",
            "back": "An error-detection value formed by summing a segment's 16-bit words in one's complement arithmetic and storing the complement of the result."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is One's complement sum?",
            "back": "Addition in which a carry out of the most significant bit is added back into the least significant bit, used to compute the Internet checksum."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Wraparound carry?",
            "back": "The carry out of the most significant bit that must be added back into the sum when computing an Internet checksum."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is UDP segment header?",
            "back": "An 8-byte header containing source port, destination port, segment length in bytes including the header, and checksum."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Logical communication?",
            "back": "The illusion a layer provides that two peers talk directly. The transport layer provides it between processes; the network layer provides it between hosts."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Datagram socket?",
            "back": "A socket used with UDP, in which the sender attaches a destination address and port to each individual message rather than establishing a connection."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is Welcoming socket?",
            "back": "The TCP socket on which a server waits for connection requests, distinct from the per-connection socket created when a client connects."
      },
      {
            "topic": "Transport Layer Fundamentals",
            "front": "What is HTTP/3 over UDP?",
            "back": "The arrangement in which HTTP/3 runs over QUIC, which runs over UDP, so reliability and congestion control are supplied above the transport layer rather than by TCP."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Sequence number space?",
            "back": "The range of sequence numbers a protocol can use before wrapping. It must be large enough that an old duplicate cannot be mistaken for a new segment."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Receive window?",
            "back": "The amount of free buffer space a TCP receiver advertises, limiting how much unacknowledged data the sender may have in flight. The mechanism of flow control."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is SYN segment?",
            "back": "The first segment of the TCP three-way handshake, requesting a connection and carrying the client's initial sequence number."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is SYNACK segment?",
            "back": "The server's reply in the TCP three-way handshake, acknowledging the client's SYN and carrying the server's own initial sequence number."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Triple duplicate ACK?",
            "back": "Three repeated acknowledgments for the same sequence number, which tell a TCP sender that later segments arrived and one is missing, triggering fast retransmit."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Retransmission timer?",
            "back": "The timer a TCP sender starts for unacknowledged data. Its expiry is treated as a strong congestion signal."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Exponential backoff?",
            "back": "Doubling a waiting interval after each successive failure, so repeated retries spread out instead of compounding the problem."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Threshold (ssthresh)?",
            "back": "The congestion window value at which TCP switches from the exponential growth of slow start to the linear growth of congestion avoidance."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is TCP Tahoe?",
            "back": "An early TCP congestion control variant that reduces the congestion window to one segment on any loss, whether detected by timeout or by duplicate ACKs."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is TCP CUBIC?",
            "back": "A modern congestion control algorithm that grows the congestion window as a cubic function of time since the last loss, recovering faster on high bandwidth-delay paths."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Explicit congestion notification (ECN)?",
            "back": "A mechanism in which routers mark packets to signal congestion instead of dropping them, letting senders slow down before loss occurs."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Bandwidth-delay product?",
            "back": "Link rate multiplied by round-trip time. It is the amount of data that must be in flight to keep a link fully utilized."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is TCP fairness?",
            "back": "The tendency of TCP connections sharing a bottleneck to converge toward equal shares of its capacity, a consequence of additive increase and multiplicative decrease."
      },
      {
            "topic": "Reliable Data Transfer and TCP Control",
            "front": "What is Bottleneck link?",
            "back": "The link along a path with the smallest available rate, which determines end-to-end throughput regardless of how fast the other links are."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Best-effort service?",
            "back": "The Internet's network-layer service model, which makes no guarantee about delivery, delay, jitter, or bandwidth."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Line-speed processing?",
            "back": "Completing input port processing faster than packets can arrive, so the input queue does not grow without bound."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Decentralized switching?",
            "back": "Performing the forwarding table lookup in the input port itself rather than at a central processor, so lookups happen in parallel across ports."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Switching via memory?",
            "back": "A first-generation switching fabric in which the CPU copies each packet into and out of system memory, limited by memory bandwidth and two bus crossings per datagram."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Switching via bus?",
            "back": "A switching fabric in which packets cross a shared bus from input to output port, limited by bus bandwidth to one transfer at a time."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Switching via interconnection network?",
            "back": "A switching fabric built from a crossbar or multistage network, allowing many non-conflicting transfers in parallel."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Crossbar switch?",
            "back": "An interconnection fabric with a dedicated crosspoint for every input-output pair, so any set of non-conflicting transfers can proceed simultaneously."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Multistage switch?",
            "back": "A large switch built from several stages of smaller switches, often by fragmenting datagrams into fixed-length cells and reassembling them at the exit."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Switching fabric plane?",
            "back": "One of several parallel copies of a switching fabric, used together to multiply a router's total switching capacity."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Input port queueing?",
            "back": "Buffering at a router's input ports, which occurs when the switching fabric is slower than the combined input rate."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Head-of-line (HOL) blocking?",
            "back": "A condition in which a queued datagram at the front of an input queue blocks datagrams behind it, even when their output ports are free."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Output port queueing?",
            "back": "Buffering at a router's output ports, which occurs when datagrams arrive from the fabric faster than the outgoing link can transmit them."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Buffer management?",
            "back": "Deciding how much buffer to allocate and which datagram to discard when no free buffer remains."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Drop policy?",
            "back": "The rule that selects which datagram to discard when a router's buffer is full."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Scheduling discipline?",
            "back": "The rule that selects which queued datagram is transmitted next on an output link."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Priority scheduling?",
            "back": "A scheduling discipline that transmits higher-priority traffic ahead of lower-priority traffic, giving some flows better service than others."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Network neutrality?",
            "back": "The policy question of whether network operators may give different classes of traffic different treatment, which scheduling and priority mechanisms make technically possible."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Generalized forwarding?",
            "back": "Forwarding based on any chosen set of header fields rather than only the destination IP address."
      },
      {
            "topic": "Network Layer Data Plane",
            "front": "What is Match plus action?",
            "back": "The forwarding model in which a router matches header fields against table entries and performs the associated action, used by both traditional lookup and OpenFlow."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Global routing information?",
            "back": "A routing approach in which every router knows the complete topology and all link costs, as in link-state algorithms."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Decentralized routing information?",
            "back": "A routing approach in which a router initially knows only its own link costs and learns the rest by exchanging estimates with neighbors."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Static routing?",
            "back": "Routing in which routes change slowly, usually through manual configuration."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Dynamic routing?",
            "back": "Routing in which routes change automatically in response to link cost changes or periodic updates."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Bellman-Ford equation?",
            "back": "The relation Dx(y) = min over neighbors v of { c(x,v) + Dv(y) }, which gives both the least-cost distance and the next hop toward a destination."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Link-state broadcast?",
            "back": "Flooding a router's own link costs to every other router in the area so all of them can build an identical topology map."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Least-cost path?",
            "back": "The path between two nodes whose summed link costs is smallest."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Predecessor node?",
            "back": "In Dijkstra's algorithm, the node immediately before a given destination on the current least-cost path from the source."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Iterative algorithm?",
            "back": "An algorithm that repeats a computation until the result stops changing, as distance vector does across successive rounds of updates."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Asynchronous update?",
            "back": "An update that occurs when a local event happens rather than on a global clock, so routers need not act in lockstep."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Self-stopping algorithm?",
            "back": "An algorithm that generates no further messages once it converges, because a router notifies neighbors only when its own estimates change."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Good news travels fast?",
            "back": "The observation that a decrease in a link cost propagates through a distance-vector network in a small number of rounds."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Bad news travels slow?",
            "back": "The observation that an increase in a link cost can take many rounds to propagate, because routers keep computing paths through each other."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Routing oscillation?",
            "back": "Instability that arises when link costs depend on the traffic those links carry, so every router reacts to the same measurement at the same time."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Black-holing?",
            "back": "The result of a router advertising very low costs to many destinations, attracting traffic it then discards."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Message complexity?",
            "back": "The number of routing messages an algorithm requires. Link-state needs O(n squared); distance vector exchanges only between neighbors but for an unpredictable number of rounds."
      },
      {
            "topic": "Routing Algorithms and Intra-AS Routing",
            "front": "What is Convergence time?",
            "back": "How long a routing algorithm takes to reach a stable, consistent set of routes after a change."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is OPEN message?",
            "back": "The BGP message that opens a session with a peer and authenticates the sender."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is UPDATE message?",
            "back": "The BGP message that advertises a new path or withdraws a previously advertised one."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is KEEPALIVE message?",
            "back": "The BGP message that holds a session open when there are no updates, and that also acknowledges an OPEN request."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is NOTIFICATION message?",
            "back": "The BGP message that reports an error in a previous message and is also used to close a session."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Path vector protocol?",
            "back": "A routing protocol that advertises the full list of autonomous systems a route has traversed, allowing loop detection and policy decisions. BGP is the example."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Import policy?",
            "back": "The rules a BGP gateway uses to accept or decline a route advertisement it receives."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Export policy?",
            "back": "The rules that determine whether a BGP gateway advertises a route onward to a particular neighboring autonomous system."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Area border router?",
            "back": "An OSPF router that belongs to more than one area and summarizes distances from its own area into the backbone."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Backbone router?",
            "back": "An OSPF router that runs OSPF limited to the backbone area, area 0."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Boundary router?",
            "back": "An OSPF router that connects its autonomous system to other autonomous systems."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Hierarchical OSPF?",
            "back": "A two-level OSPF design of local areas plus a backbone, in which link-state advertisements are flooded only within an area."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is OSPF authentication?",
            "back": "Verification of OSPF messages so a malicious host cannot inject false link-state information."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is SDN controller?",
            "back": "The logically centralized software that maintains network-wide state and computes and installs forwarding tables in switches."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Northbound API?",
            "back": "The interface between an SDN controller and the network-control applications above it, commonly a RESTful API."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is OpenFlow?",
            "back": "A protocol between an SDN controller and a switch, carried over TCP, with controller-to-switch, asynchronous, and symmetric message classes."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Flow table?",
            "back": "The table in an SDN switch that matches packet header fields and applies the associated actions."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is ICMP type and code?",
            "back": "The pair of header fields that identify an ICMP message's category and specific meaning, such as type 11 code 0 for TTL expired."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is TTL expired?",
            "back": "The ICMP message a router returns when a datagram's time-to-live reaches zero, which is how traceroute discovers each hop."
      },
      {
            "topic": "ISP Routing and BGP",
            "front": "What is Port unreachable?",
            "back": "The ICMP message a destination host returns when no process is listening on the requested port, which is how traceroute knows it has arrived."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Command line interface (CLI)?",
            "back": "Direct operator commands typed or scripted to an individual device, the least abstract of the network management approaches."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is GetRequest?",
            "back": "The SNMP message a manager sends to retrieve the value of a specific managed object."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is GetNextRequest?",
            "back": "The SNMP message a manager sends to retrieve the next item in a list of managed objects, used to walk a MIB."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is GetBulkRequest?",
            "back": "The SNMP message a manager sends to retrieve a whole block of managed objects at once, making large MIB retrievals practical."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is SetRequest?",
            "back": "The SNMP message a manager sends to write a value into a managed object on a device."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Response PDU?",
            "back": "The SNMP message an agent returns carrying the requested value or the outcome of a request."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Trap PDU?",
            "back": "The SNMP message an agent sends unprompted to inform the manager of an exceptional event."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Request-response mode?",
            "back": "The SNMP interaction style in which the manager asks and the agent answers."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Trap mode?",
            "back": "The SNMP interaction style in which the agent reports an event without being asked."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is get-config?",
            "back": "The NETCONF operation that retrieves all or part of a named configuration from a device."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is edit-config?",
            "back": "The NETCONF operation that changes a configuration on a managed device, replying with either an ok or an error plus rollback."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is lock and unlock?",
            "back": "The NETCONF operations that reserve a configuration datastore so no other management source can change it during an edit."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is create-subscription?",
            "back": "The NETCONF operation that enables event notification subscriptions from a managed device."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is rpc-reply?",
            "back": "The NETCONF message a managed device returns in response to an rpc request."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Hello capabilities exchange?",
            "back": "The opening NETCONF exchange in which both sides declare which capabilities they support."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Atomic commit?",
            "back": "Applying a configuration change across one or more devices as a single all-or-nothing transaction, so a partial failure leaves nothing half-applied."
      },
      {
            "topic": "Network Management, SDN, SNMP, NETCONF, and YANG",
            "front": "What is Network-wide state management?",
            "back": "The SDN controller function of maintaining a consistent, distributed record of link state, host information, and switch information."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Single-bit error?",
            "back": "An error in which exactly one bit of a data unit has been flipped."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Burst error?",
            "back": "An error in which two or more bits of a data unit have been changed. The corrupted bits need not be consecutive."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Redundancy?",
            "back": "Extra bits added to a data unit that carry no user information but allow the receiver to detect or correct errors."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Even parity?",
            "back": "A parity scheme in which the parity bit is set so the total number of 1 bits in the unit is even."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Odd parity?",
            "back": "A parity scheme in which the parity bit is set so the total number of 1 bits in the unit is odd."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Channel partitioning?",
            "back": "A class of multiple access protocols that divides the channel into pieces by time, frequency, or code and allocates a piece to each node for exclusive use."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Random access protocol?",
            "back": "A class of multiple access protocols that does not divide the channel, allows collisions to happen, and defines how to recover from them."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Taking turns protocol?",
            "back": "A class of multiple access protocols in which nodes coordinate to transmit in turn, seeking the low-load efficiency of random access and the high-load fairness of partitioning."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Controlled access?",
            "back": "Multiple access in which stations consult one another so that only an authorized station transmits, making collisions impossible."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Token passing?",
            "back": "A controlled access method in which a special frame circulates and only the station holding it may transmit."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Token?",
            "back": "The special frame that circulates in a token-passing network and grants its holder the right to transmit."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Primary station?",
            "back": "The station in a polling network that controls all access by querying the secondary stations."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Secondary station?",
            "back": "A station in a polling network that may transmit only when the primary station polls it."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Channelization?",
            "back": "A multiple access method that shares the available bandwidth of a link among stations by time, frequency, or code."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is FDMA?",
            "back": "Frequency-division multiple access. The available bandwidth is divided into bands and each station is permanently allocated one band."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is TDMA?",
            "back": "Time-division multiple access. Stations share the channel in time, each transmitting during its allocated slot."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is CDMA?",
            "back": "Code-division multiple access. Every station transmits over the entire bandwidth at the same time, separated by orthogonal chipping codes rather than by time or frequency."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is ALOHA?",
            "back": "An early random access protocol in which a station transmits whenever it has data and retransmits after a random delay if the frame is lost to a collision."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Slotted ALOHA?",
            "back": "A refinement of ALOHA in which transmissions may begin only at slot boundaries, which reduces the window in which collisions can occur."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is CSMA?",
            "back": "Carrier sense multiple access. A station listens to the medium and defers transmission while it senses another transmission in progress."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Collision?",
            "back": "The result of two or more stations transmitting at the same time on a shared medium, corrupting the overlapping frames."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Propagation delay and collisions?",
            "back": "The reason carrier sensing cannot eliminate collisions: a station may begin transmitting before another station's signal has had time to reach it."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is DOCSIS?",
            "back": "Data Over Cable Service Interface Specification. The standard governing cable access, combining frequency division across channels with time division and contention within them."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is MAP frame?",
            "back": "A downstream frame from the CMTS that assigns upstream transmission slots to cable modems for a coming interval."
      },
      {
            "topic": "Data Link Layer Control, Packetizing, and Error Detection",
            "front": "What is Minislot?",
            "back": "A small upstream time slot in a cable access network, some assigned by the CMTS and some available for contention-based requests."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is 48-bit address?",
            "back": "The length of a MAC address on most LANs, written in hexadecimal and burned into the network interface card by its manufacturer."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is ARP TTL?",
            "back": "The time to live on an ARP table entry, typically about 20 minutes, after which the address mapping is forgotten and must be resolved again."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Gratuitous broadcast?",
            "back": "An unsolicited broadcast a host sends to announce or refresh its own address mapping on the local network."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Binary exponential backoff?",
            "back": "The Ethernet collision recovery rule in which the range of the random waiting interval doubles after each successive collision."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Unslotted CSMA/CD?",
            "back": "Ethernet's MAC protocol: stations sense the medium, transmit when it is idle, detect collisions while transmitting, abort, and retry after binary exponential backoff."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Bus topology?",
            "back": "An older Ethernet layout in which all nodes share a single coaxial cable and therefore a single collision domain."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Switched topology?",
            "back": "The prevailing Ethernet layout in which each node has a dedicated link to a switch, so each link is its own collision domain."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Full duplex switching?",
            "back": "Operation in which a station can transmit and receive simultaneously on its dedicated switch port, eliminating collisions entirely."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Store and forward switch?",
            "back": "A switch that receives a complete frame, examines its addresses, and then forwards it selectively to the appropriate outgoing link."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Self-learning?",
            "back": "The process by which a switch builds its table by recording the source MAC address and incoming port of every frame it receives."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Switch table entry?",
            "back": "A record holding a host's MAC address, the interface used to reach it, and a timestamp so stale entries can expire."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Interconnected switches?",
            "back": "Multiple self-learning switches connected together, which continue to learn and forward correctly without any additional configuration."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is 802.1Q?",
            "back": "The IEEE standard that adds a 4-byte tag carrying a VLAN identifier to frames crossing a trunk port between switches."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is VLAN ID (VID)?",
            "back": "The identifier inside an 802.1Q tag that names which VLAN a frame belongs to."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Native VLAN?",
            "back": "The VLAN whose frames traverse an 802.1Q trunk untagged."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Port-based VLAN?",
            "back": "A VLAN defined by grouping switch ports through management software, so a single physical switch behaves as several virtual switches."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Traffic isolation?",
            "back": "The property that frames sent from ports in one VLAN can reach only other ports in that VLAN."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Dynamic membership?",
            "back": "The ability to reassign switch ports among VLANs without recabling, so a user who moves desks can stay in the same logical network."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is Inter-VLAN routing?",
            "back": "Forwarding traffic between VLANs, which requires a layer 3 device because VLANs are separate broadcast domains."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is 802.3 standards?",
            "back": "The family of IEEE Ethernet standards sharing one MAC protocol and frame format across many speeds and physical media."
      },
      {
            "topic": "LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "front": "What is 100BASE-TX?",
            "back": "A 100 Mbps Ethernet physical layer specification running over twisted pair copper."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is MPLS header?",
            "back": "A header inserted between the link-layer header and the IP header, containing a label, an experimental field, a bottom-of-stack bit, and a time to live."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Label field?",
            "back": "The part of the MPLS header carrying the locally significant value that a label-switched router matches to choose an outgoing interface."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Exp field?",
            "back": "The experimental or traffic-class field in the MPLS header, used to signal per-hop queueing and discard behavior."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Bottom-of-stack bit?",
            "back": "The MPLS header bit that indicates whether the current label is the last one in a stack of labels."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Label TTL?",
            "back": "The time-to-live field in the MPLS header, which serves the same loop-limiting purpose as the IP TTL inside an MPLS domain."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is RSVP-TE?",
            "back": "The signalling protocol an ingress MPLS router uses to establish label forwarding state along a chosen path through downstream routers."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Link-state flooding extension?",
            "back": "Modifications to OSPF and IS-IS that carry additional information such as link bandwidth and reserved bandwidth for use by MPLS traffic engineering."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Border router?",
            "back": "In a datacenter network, the router that connects the datacenter to networks outside it."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Tier-1 switch?",
            "back": "In a datacenter hierarchy, a switch below the border routers that connects to many tier-2 switches."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Tier-2 switch?",
            "back": "In a datacenter hierarchy, a switch that aggregates many top-of-rack switches and connects upward to tier-1."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Top-of-rack (TOR) switch?",
            "back": "The switch serving one server rack, typically connecting to its blades at 40 to 100 Gbps Ethernet."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Server blade?",
            "back": "An individual server host mounted in a datacenter rack."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Server rack?",
            "back": "A cabinet holding roughly 20 to 40 server blades plus its top-of-rack switch."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Multipath topology?",
            "back": "A datacenter design with many disjoint paths between any two racks, raising throughput and providing redundancy."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Application-layer load balancer?",
            "back": "A device that receives external client requests, distributes the work across internal servers, and returns results, hiding datacenter internals from clients."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is RoCE?",
            "back": "Remote Direct Memory Access over Converged Ethernet, a datacenter link-layer technique that lets one host read or write another host's memory with very low overhead."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is RDMA?",
            "back": "Remote Direct Memory Access. Transferring data directly between the memory of two hosts without involving either operating system on the data path."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is DCTCP?",
            "back": "Data Center TCP, a congestion control algorithm that reacts to explicit congestion notification marks rather than to packet loss, keeping queues and latency low."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is DCQCN?",
            "back": "Data Center Quantized Congestion Notification, a congestion control scheme used with RoCE that also relies on explicit congestion notification."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is Day in the life of a web request?",
            "back": "The end-to-end walkthrough in which a host uses DHCP, ARP, DNS, TCP, and HTTP in sequence to load a single web page."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is DHCP ACK?",
            "back": "The DHCP server's reply carrying the client's assigned IP address, the address of its first-hop router, and the name and address of the DNS server."
      },
      {
            "topic": "Link Virtualization, MPLS, and Data Center Networks",
            "front": "What is First-hop router?",
            "back": "The router a host sends to when the destination is outside its own subnet, also called the default gateway."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Basic service set (BSS)?",
            "back": "An 802.11 cell. In infrastructure mode it contains wireless hosts plus an access point; in ad hoc mode it contains hosts only."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Path loss?",
            "back": "The attenuation of a radio signal as it propagates through space and matter, one of the main reasons wireless links are harder than wired ones."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Bit error rate (BER)?",
            "back": "The fraction of received bits that are in error. It falls as signal-to-noise ratio rises for a given physical layer."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Rate adaptation?",
            "back": "Dynamically changing the physical-layer modulation and transmission rate as signal-to-noise ratio varies, trading throughput for reliability."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Passive scanning?",
            "back": "Discovering access points by listening for the beacon frames they broadcast, then sending an association request to the chosen one."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Active scanning?",
            "back": "Discovering access points by broadcasting a probe request and collecting probe responses, then sending an association request to the chosen one."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Probe request?",
            "back": "The frame a host broadcasts during active scanning to solicit replies from nearby access points."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Probe response?",
            "back": "The frame an access point sends in reply to a probe request during active scanning."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Association request?",
            "back": "The frame a host sends to the access point it has selected, asking to join that access point's cell."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Association response?",
            "back": "The frame an access point sends to confirm that a host has joined its cell."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Power management?",
            "back": "The 802.11 mechanism by which a device tells the access point it is sleeping until the next beacon, so the access point buffers frames for it."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Beacon sleep cycle?",
            "back": "The pattern in which a sleeping device wakes before each beacon frame, checks the list of devices with buffered traffic, and either stays awake or sleeps again."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is 802.11n (Wi-Fi 4)?",
            "back": "The 2009 802.11 amendment supporting up to 600 Mbps over 2.4 and 5 GHz with multiple spatial streams."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is 802.11ac (Wi-Fi 5)?",
            "back": "The 2013 802.11 amendment operating in 5 GHz with wider channels and higher-order modulation."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is 802.11ax (Wi-Fi 6)?",
            "back": "The 802.11 amendment published in 2021 that improves efficiency in dense environments across 2.4 and 5 GHz. Wi-Fi 6E extends it into the 6 GHz band."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Chipping sequence?",
            "back": "The per-user code in CDMA that is combined with the data on transmission and used again on reception to separate one sender from the others."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Orthogonal codes?",
            "back": "Codes chosen so that the inner product of any two different codes is approximately zero, which is what lets CDMA users share the whole band simultaneously."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Bluetooth?",
            "back": "A personal area network technology covering roughly 10 metres in the 2.4 GHz band, used as a cable replacement for peripherals."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Piconet?",
            "back": "A Bluetooth network consisting of one master device and its client devices, self-assembled without infrastructure."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Master device?",
            "back": "The Bluetooth device that controls a piconet by polling clients and granting their transmission requests."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Parked device?",
            "back": "A Bluetooth client that has gone inactive to conserve battery and can later wake and rejoin the piconet."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Frequency hopping?",
            "back": "Changing transmission frequency in a known pseudo-random pattern, which limits how much any one interfering source can disrupt."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Single hop network?",
            "back": "A wireless network in which a host reaches the larger network directly through one base station or not at all."
      },
      {
            "topic": "Wireless Networks and Wi-Fi",
            "front": "What is Multiple hop network?",
            "back": "A wireless network in which a host may have to relay through several other wireless nodes to reach the larger network, as in a mesh network."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is IMSI?",
            "back": "International Mobile Subscriber Identity. A 64-bit identifier stored on the SIM card that identifies both the subscriber and their home network."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is eNode-B?",
            "back": "The LTE term for a base station. It manages radio resources in its cell, coordinates authentication, and takes an active role in device mobility."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Home Subscriber Server (HSS)?",
            "back": "The database in a subscriber's home cellular network holding identity and service information, and the ultimate authority for authentication."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Enhanced Packet Core (EPC)?",
            "back": "The all-IP core network of a 4G LTE system, containing the MME, Serving Gateway, PDN Gateway, and HSS."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is GTP?",
            "back": "GPRS Tunneling Protocol. The protocol that encapsulates a mobile device's datagrams inside UDP for transport across the cellular core."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Packet Data Convergence Protocol (PDCP)?",
            "back": "The LTE link-layer protocol responsible for header compression and encryption."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Radio Link Control (RLC)?",
            "back": "The LTE link-layer protocol responsible for fragmentation, reassembly, and reliable data transfer over the radio link."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Medium Access (LTE MAC)?",
            "back": "The LTE link-layer sublayer responsible for requesting and using radio transmission slots."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is OFDM?",
            "back": "Orthogonal Frequency Division Multiplexing. Dividing a channel into sub-carriers spaced so they do not interfere, used in both LTE and modern Wi-Fi."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Primary synchronization signal?",
            "back": "A signal a base station broadcasts periodically on all frequencies, which a mobile device searches for as the first step in associating."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Light sleep?",
            "back": "An LTE power-saving state entered after a few hundred milliseconds of inactivity, from which the device wakes periodically to check for downstream traffic."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Deep sleep?",
            "back": "An LTE power-saving state entered after several seconds of inactivity. The device may change cells while asleep and must then re-establish its association."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Registration?",
            "back": "The process by which a visited network's mobility manager records a roaming device and informs the device's home network of its current location."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Indirect routing?",
            "back": "Mobility routing in which the correspondent addresses the mobile's permanent address, the home network intercepts the traffic, and it is tunneled to the visited network."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Direct routing?",
            "back": "Mobility routing in which the correspondent first asks the home network for the mobile's current address and then sends straight to the visited network."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Triangle routing?",
            "back": "The inefficiency of indirect routing, in which traffic detours through the home network even when correspondent and mobile are near each other."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Correspondent?",
            "back": "The host communicating with a mobile device."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Care-of address?",
            "back": "The address a mobile device acquires in the network it is currently visiting, to which its home network forwards traffic."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Mobility manager?",
            "back": "The network element that tracks which devices are attached to a network and coordinates with their home networks."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is 5G NR?",
            "back": "5G New Radio. The 5G air interface, which is not backwards compatible with 4G and operates in two frequency ranges."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is FR1?",
            "back": "The 5G frequency range from roughly 450 MHz to 6 GHz, offering wider coverage than millimetre wave."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is FR2?",
            "back": "The 5G frequency range from roughly 24 GHz to 52 GHz, the millimetre wave band, offering much higher rates over much shorter distances."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Millimeter wave?",
            "back": "Very high radio frequencies that support very high data rates but propagate poorly, requiring dense deployment of small cells."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is MIMO?",
            "back": "Multiple Input Multiple Output. Using multiple directional antennas at both ends of a link to raise capacity."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is Pico-cell?",
            "back": "A very small cell, roughly 10 to 100 metres across, needed to make millimetre wave coverage practical."
      },
      {
            "topic": "Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "front": "What is 3GPP?",
            "back": "The Third Generation Partnership Project, the body that produces the technical standards for 4G LTE and 5G."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Plaintext?",
            "back": "A message in its original readable form, before encryption."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Ciphertext?",
            "back": "A message after encryption, unreadable without the corresponding key."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Substitution cipher?",
            "back": "A cipher that replaces each element of the plaintext with another element according to a fixed mapping."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Monoalphabetic cipher?",
            "back": "A substitution cipher that maps each letter to one fixed replacement letter throughout. Vulnerable to statistical frequency analysis."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Polyalphabetic cipher?",
            "back": "A cipher that cycles through several substitution alphabets so the same plaintext letter does not always produce the same ciphertext letter."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Cipher-text only attack?",
            "back": "An attack in which the adversary has only ciphertext to analyze, using brute force or statistical analysis."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Known-plaintext attack?",
            "back": "An attack in which the adversary knows some plaintext and its matching ciphertext."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Chosen-plaintext attack?",
            "back": "An attack in which the adversary can obtain the ciphertext for plaintext of their own choosing."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Brute force attack?",
            "back": "Trying every possible key until the correct one is found. Its feasibility is determined by key length."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is DES?",
            "back": "Data Encryption Standard. A block cipher with a 56-bit key and 64-bit blocks, now broken by brute force and superseded by AES."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is 3DES?",
            "back": "Triple DES. Applying DES three times with different keys. Disallowed for encryption by NIST after 2023; use AES instead."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is AES?",
            "back": "Advanced Encryption Standard. The symmetric-key standard that replaced DES, processing 128-bit blocks with 128, 192, or 256-bit keys."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Block cipher?",
            "back": "A symmetric cipher that encrypts fixed-size blocks of data at a time, usually combined with a chaining mode across blocks."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is RSA?",
            "back": "A public-key algorithm whose security rests on the difficulty of factoring the product of two large primes, named for Rivest, Shamir, and Adleman."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Modular exponentiation?",
            "back": "The arithmetic operation underlying RSA encryption and decryption, raising a number to a power modulo another number."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Message digest?",
            "back": "A fixed-length fingerprint of a message produced by a hash function, used so that long messages can be signed efficiently."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is MD5?",
            "back": "A 128-bit hash function that is no longer acceptable where collision resistance is required, since collisions can be found in seconds. Learn it as history, not as a recommendation."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is SHA-1?",
            "back": "A 160-bit hash function that NIST is retiring for all applications by 31 December 2030. Use SHA-2 or SHA-3 instead."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is SHA-2?",
            "back": "The current NIST-approved family of hash functions, including SHA-256, specified in FIPS 180-4."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is HMAC?",
            "back": "A construction that combines a hash function with a shared secret key to produce a message authentication code."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Non-repudiation?",
            "back": "The property that a signer cannot later deny having signed a message, because only they hold the private key that produced the signature."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Authentication protocol ap5.0?",
            "back": "The nonce-plus-public-key authentication protocol which is secure against replay but still falls to a man-in-the-middle who substitutes their own public key."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Playback attack?",
            "back": "Recording a valid authentication exchange and replaying it later to impersonate the original sender. Defeated by including a fresh nonce."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Secure e-mail?",
            "back": "Applying a symmetric session key for confidentiality, a signed message digest for integrity and authentication, and the recipient's public key to deliver the session key."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Cipher suite?",
            "back": "The named set of algorithms a TLS connection uses for key exchange, encryption, message authentication, and digital signature."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Diffie-Hellman?",
            "back": "A key exchange method letting two parties agree on a shared secret over an open channel. TLS 1.3 requires it for key exchange."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Handshake?",
            "back": "The opening phase of a secure protocol in which the parties authenticate each other and establish a shared secret."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Key derivation?",
            "back": "Expanding one shared secret into the several keys a session needs, such as separate keys for each direction and for encryption versus authentication."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Eavesdropping?",
            "back": "Passively intercepting and reading messages without altering them."
      },
      {
            "topic": "Security Basics, Cryptography, Authentication, and TLS",
            "front": "What is Hijacking?",
            "back": "Taking over an ongoing connection by removing one endpoint and inserting yourself in its place."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Security Parameter Index (SPI)?",
            "back": "A 32-bit identifier carried in an IPsec datagram that the receiver uses to look up the correct security association in its database."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Pre-shared key (PSK)?",
            "back": "An IKE authentication method in which both sides begin with a common secret and use it to authenticate each other and generate security associations."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Public key infrastructure (PKI)?",
            "back": "An IKE authentication method in which both sides begin with a public and private key pair plus a certificate."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is IKEv2?",
            "back": "The current version of the Internet Key Exchange protocol, specified in RFC 7296. IKEv1 was deprecated by RFC 9395 in 2023."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Authentication server (AS)?",
            "back": "The server on the wired network that shares a secret with a wireless device and performs mutual authentication and session key derivation with it."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is WPA3?",
            "back": "The current Wi-Fi Alliance security certification, whose handshake derives a session key from an initial shared secret plus a nonce from each side."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is EAP?",
            "back": "Extensible Authentication Protocol. Defines the end-to-end request and response conversation between a wireless device and an authentication server."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is EAPoL?",
            "back": "EAP over LAN. The encapsulation that carries EAP messages across the 802.11 wireless link."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is RADIUS?",
            "back": "The protocol commonly used to carry EAP messages between an access point and an authentication server across the wired network."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Discovery of security capabilities?",
            "back": "The first phase of 802.11 security, in which the access point advertises the authentication and encryption forms it supports and the device requests the ones it wants."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Mutual authentication?",
            "back": "Authentication in which each party proves its identity to the other, rather than only the client proving itself to the network."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Session key derivation?",
            "back": "Computing a symmetric key for a session from a longer-lived shared secret combined with fresh nonces from both parties."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Nonce exchange?",
            "back": "Trading numbers used only once so that a recorded exchange cannot be replayed later."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is auth_token?",
            "back": "The value a 4G home subscriber server derives from the shared SIM key, which lets the device confirm it is talking to its genuine home network."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is xres?",
            "back": "The expected authentication response the home subscriber server computes in advance, against which the visited MME compares the device's answer."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Stateless packet filter?",
            "back": "A firewall that decides on each packet in isolation using header fields, and therefore admits packets that make no sense for any live connection."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Stateful packet filter?",
            "back": "A firewall that tracks the setup and teardown of every connection so it can reject packets that do not belong to one."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Application gateway?",
            "back": "A firewall component that filters on application data rather than headers, requiring one gateway per application and client awareness of it."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Connection state table?",
            "back": "The record a stateful firewall keeps of active connections, consulted before admitting a packet and timed out when a connection goes idle."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Deep packet inspection?",
            "back": "Examining packet contents rather than only headers, used by intrusion detection systems to match known attack signatures."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is Smurf attack?",
            "back": "A denial of service technique that sends ICMP traffic to a broadcast address so many hosts reply to a spoofed victim."
      },
      {
            "topic": "Network Layer Security, IPsec, Firewalls, and IDS",
            "front": "What is SYN flooding?",
            "back": "A denial of service attack that opens many half-finished TCP connections so no resources remain for legitimate ones."
      }
];

    const practiceTests = [
      {
            "title": "1.1 Practice: Computer Networks and the Internet",
            "description": "30-item practice test covering Internet structure, access networks, packet switching, delay, loss, throughput, layering, and introductory security.",
            "questions": [
                  {
                        "q": "Which delay component is computed as L/R, where L is the packet length in bits and R is the link rate?",
                        "options": [
                              "Propagation delay",
                              "Transmission delay",
                              "Queueing delay",
                              "Processing delay"
                        ],
                        "answer": 1,
                        "explain": "Transmission delay is the time to push all L bits onto the link at rate R, so it is L/R. Propagation delay is d/s and depends on distance, not packet size - that is the pair most often confused."
                  },
                  {
                        "q": "A 10,000-bit packet is sent over a 100 Mb/s link. What is the transmission delay?",
                        "options": [
                              "0.1 ms",
                              "1 ms",
                              "10 ms",
                              "100 ms"
                        ],
                        "answer": 0,
                        "explain": "L/R = 10,000 bits / 100,000,000 bits per second = 0.0001 s = 0.1 ms. Watch the unit conversion: 100 Mb/s is 10^8 bits per second, not 10^6."
                  },
                  {
                        "q": "A link is 1,000 km long and signals propagate at 2 x 10^8 m/s. What is the propagation delay?",
                        "options": [
                              "0.5 ms",
                              "5 ms",
                              "50 ms",
                              "500 ms"
                        ],
                        "answer": 1,
                        "explain": "d/s = 1,000,000 m / (2 x 10^8 m/s) = 0.005 s = 5 ms. Note this figure does not change if the packet gets bigger - only transmission delay does."
                  },
                  {
                        "q": "Which delay component is the only one that varies with how much traffic the network is currently carrying?",
                        "options": [
                              "Transmission delay",
                              "Propagation delay",
                              "Queueing delay",
                              "Processing delay"
                        ],
                        "answer": 2,
                        "explain": "Queueing delay depends on how many packets are already waiting for the output link, so it rises and falls with load. The other three depend on packet size, distance, and router hardware respectively - none of which change with traffic."
                  },
                  {
                        "q": "Under store-and-forward, how long does it take to send one L-bit packet across N links each of rate R, ignoring propagation, queueing, and processing?",
                        "options": [
                              "L/R",
                              "N x L/R",
                              "L/(N x R)",
                              "N + L/R"
                        ],
                        "answer": 1,
                        "explain": "Each router must receive the whole packet before forwarding it, so the L/R transmission cost is paid once per link. With N links the total is N x L/R."
                  },
                  {
                        "q": "Why do packets get dropped inside a router?",
                        "options": [
                              "The router's forwarding table has no matching entry",
                              "The output buffer is already full when the packet arrives",
                              "The link's physical medium has failed",
                              "The packet's checksum did not verify"
                        ],
                        "answer": 1,
                        "explain": "Loss in this context is a buffer-capacity problem: when arrival rate exceeds the output link rate for long enough, the queue fills and further arrivals are discarded. A missing table entry or a failed link causes different symptoms."
                  },
                  {
                        "q": "What distinguishes packet switching from circuit switching?",
                        "options": [
                              "Packet switching reserves end-to-end resources before data flows",
                              "Packet switching shares links on demand rather than reserving them",
                              "Packet switching guarantees a fixed rate to each user",
                              "Packet switching is used only in telephone networks"
                        ],
                        "answer": 1,
                        "explain": "Circuit switching reserves resources for the duration of a call, which sits idle when the call is silent. Packet switching allocates on demand, which suits bursty traffic and is why more users can share the same link."
                  },
                  {
                        "q": "With a 1 Gb/s link and users who each need 100 Mb/s while active, how many users can circuit switching support simultaneously?",
                        "options": [
                              "10",
                              "35",
                              "100",
                              "Unlimited"
                        ],
                        "answer": 0,
                        "explain": "Circuit switching reserves the full 100 Mb/s per user whether or not they are transmitting, so 1 Gb/s divided by 100 Mb/s gives 10. Packet switching supports far more because users are typically active only a fraction of the time."
                  },
                  {
                        "q": "In a cable (HFC) access network, what does the CMTS do?",
                        "options": [
                              "Splits the coaxial signal inside the home",
                              "Terminates cable modem connections at the headend and passes traffic to the ISP",
                              "Separates DSL data from voice at the central office",
                              "Assigns IP addresses to home devices"
                        ],
                        "answer": 1,
                        "explain": "The Cable Modem Termination System sits at the headend and is the cable network's counterpart to the DSLAM. The device that separates DSL data from voice is the DSLAM, and a home splitter is passive."
                  },
                  {
                        "q": "What is the key difference between cable access and DSL access?",
                        "options": [
                              "Cable is asymmetric while DSL is symmetric",
                              "Cable capacity is shared among homes on a segment while DSL runs a dedicated line to the central office",
                              "Cable uses fiber end to end while DSL uses coaxial cable",
                              "Cable requires a modem while DSL does not"
                        ],
                        "answer": 1,
                        "explain": "Both are asymmetric and both need a modem. The sharing model is what differs: cable neighbours contend for the same segment capacity, whereas a DSL line is dedicated - though its rate degrades with distance to the DSLAM."
                  },
                  {
                        "q": "Which physical medium is immune to electromagnetic noise and supports repeaters spaced far apart?",
                        "options": [
                              "Category 5 twisted pair",
                              "Coaxial cable",
                              "Fiber optic cable",
                              "Terrestrial microwave"
                        ],
                        "answer": 2,
                        "explain": "Fiber carries light rather than electrical current, so electromagnetic interference does not couple into it, and its low attenuation allows long spacing between repeaters. Copper media are all susceptible to interference."
                  },
                  {
                        "q": "A geosynchronous satellite link introduces roughly what end-to-end delay?",
                        "options": [
                              "27 microseconds",
                              "2.7 milliseconds",
                              "270 milliseconds",
                              "2.7 seconds"
                        ],
                        "answer": 2,
                        "explain": "About 270 ms, which is dominated by propagation to and from an orbit roughly 36,000 km up. This is why satellite links feel sluggish for interactive use regardless of their bandwidth."
                  },
                  {
                        "q": "What is an Internet exchange point (IXP)?",
                        "options": [
                              "A router that converts between IPv4 and IPv6",
                              "A shared facility where multiple ISPs interconnect and exchange traffic directly",
                              "The point where a home network meets its access ISP",
                              "A database mapping domain names to addresses"
                        ],
                        "answer": 1,
                        "explain": "An IXP lets networks peer directly rather than paying an upstream provider to carry traffic between them, which saves both cost and latency. It is an interconnection facility, not a translation or naming device."
                  },
                  {
                        "q": "Why do content providers such as Google and Meta build their own networks?",
                        "options": [
                              "Because tier-1 ISPs refuse to carry their traffic",
                              "To bring services close to end users and bypass tier-1 and regional transit",
                              "Because their traffic requires circuit switching",
                              "To avoid having to use the IP protocol"
                        ],
                        "answer": 1,
                        "explain": "A private backbone connecting their data centres lets them sit near users and skip paid transit, improving both latency and cost. They still use IP and still interconnect with other networks."
                  },
                  {
                        "q": "Connecting N access ISPs directly to one another would require how many connections?",
                        "options": [
                              "N",
                              "2N",
                              "N log N",
                              "On the order of N squared"
                        ],
                        "answer": 3,
                        "explain": "A full mesh needs N(N-1)/2 links, which is O(N squared). That is exactly why the Internet developed a hierarchy of regional and tier-1 providers plus IXPs rather than a mesh."
                  },
                  {
                        "q": "What does 'throughput' mean, as distinct from 'bandwidth'?",
                        "options": [
                              "The maximum rate a link can support",
                              "The actual rate at which bits are delivered from sender to receiver",
                              "The number of routers along a path",
                              "The time for a packet to cross one link"
                        ],
                        "answer": 1,
                        "explain": "Bandwidth is the ceiling; throughput is what you actually get. Throughput is capped by the bottleneck link along the path, which is why a fast home link does not guarantee a fast download."
                  },
                  {
                        "q": "A server connects at Rs = 100 Mb/s, a client at Rc = 50 Mb/s, and the backbone is uncongested. What is the end-to-end throughput?",
                        "options": [
                              "150 Mb/s",
                              "100 Mb/s",
                              "50 Mb/s",
                              "75 Mb/s"
                        ],
                        "answer": 2,
                        "explain": "Throughput is min(Rs, Rc, bottleneck) = min(100, 50) = 50 Mb/s. The slowest link on the path determines the result; adding capacity anywhere else changes nothing."
                  },
                  {
                        "q": "What does a protocol define?",
                        "options": [
                              "Only the physical medium used for transmission",
                              "The format and order of messages exchanged, and the actions taken on transmission and receipt",
                              "The geographic location of routers",
                              "The pricing agreement between two ISPs"
                        ],
                        "answer": 1,
                        "explain": "A protocol specifies message format, message ordering, and the actions each party takes when a message is sent or received. That definition is what makes equipment from different vendors interoperate."
                  },
                  {
                        "q": "Which body publishes RFCs, the documents that define Internet standards?",
                        "options": [
                              "IEEE",
                              "IETF",
                              "ISO",
                              "ITU"
                        ],
                        "answer": 1,
                        "explain": "The Internet Engineering Task Force publishes Requests for Comments. IEEE standardises LAN technologies such as Ethernet and 802.11; ISO and ITU produce standards in other domains."
                  },
                  {
                        "q": "List the five layers of the Internet protocol stack from top to bottom.",
                        "options": [
                              "Application, presentation, session, transport, network",
                              "Application, transport, network, link, physical",
                              "Physical, link, network, transport, application",
                              "Application, network, transport, link, physical"
                        ],
                        "answer": 1,
                        "explain": "The Internet stack is application, transport, network, link, physical. Presentation and session belong to the seven-layer OSI model; option 3 is the correct list in reverse order."
                  },
                  {
                        "q": "At which layer does encapsulation turn a segment into a datagram?",
                        "options": [
                              "Application layer",
                              "Transport layer",
                              "Network layer",
                              "Link layer"
                        ],
                        "answer": 2,
                        "explain": "The network layer adds its header to the transport-layer segment, producing a datagram. The link layer then wraps that datagram into a frame."
                  },
                  {
                        "q": "What is the main argument for layering a network architecture?",
                        "options": [
                              "It makes packets travel faster",
                              "It allows a layer's implementation to change without disturbing the rest of the system",
                              "It removes the need for protocols",
                              "It guarantees no packet is ever lost"
                        ],
                        "answer": 1,
                        "explain": "Modularity is the point: as long as the service interface holds, a layer can be reimplemented without touching its neighbours. Layering costs some efficiency rather than adding speed."
                  },
                  {
                        "q": "How does a worm differ from a virus?",
                        "options": [
                              "A worm needs the user to execute an object; a virus does not",
                              "A worm spreads by being passively received and executed without user action",
                              "A worm cannot self-replicate",
                              "A worm only affects routers, not hosts"
                        ],
                        "answer": 1,
                        "explain": "Both self-replicate. The distinction is user involvement: a virus requires the user to open or run something, while a worm needs no such action, which is why worms can spread far faster."
                  },
                  {
                        "q": "In a distributed denial of service attack, what role does a botnet play?",
                        "options": [
                              "It encrypts the victim's data for ransom",
                              "It supplies the many compromised hosts that flood the target with traffic",
                              "It intercepts and reads the victim's passwords",
                              "It forges the victim's DNS records"
                        ],
                        "answer": 1,
                        "explain": "The attacker first compromises many hosts, then directs that botnet to send traffic to the target simultaneously. Using many sources is what makes the flood large and hard to filter by address."
                  },
                  {
                        "q": "What makes packet sniffing possible?",
                        "options": [
                              "Routers forward packets by longest prefix match",
                              "A broadcast medium plus an interface in promiscuous mode that records all passing traffic",
                              "Every packet carries a source IP address",
                              "TCP retransmits lost segments"
                        ],
                        "answer": 1,
                        "explain": "On a shared medium such as legacy Ethernet or wireless, every frame reaches every interface. Putting the interface in promiscuous mode makes it keep frames not addressed to it, including any cleartext credentials."
                  },
                  {
                        "q": "What does IP spoofing achieve for an attacker?",
                        "options": [
                              "It encrypts the packet payload",
                              "It puts a false source address in the packet so the true sender cannot be identified",
                              "It increases the packet's priority at routers",
                              "It guarantees the packet will be delivered"
                        ],
                        "answer": 1,
                        "explain": "Because IP does not authenticate the source address field, an attacker can write anything there. This hides their identity and enables reflection attacks where replies are aimed at a victim."
                  },
                  {
                        "q": "Scenario: users on a busy cable segment report that evening download speeds drop sharply while their DSL neighbours are unaffected. What best explains this?",
                        "options": [
                              "The cable modem is failing",
                              "Cable access capacity is shared among homes on the segment, so peak-hour contention reduces each home's share",
                              "DSL uses fiber and cable does not",
                              "The cable ISP has lowered the propagation speed of the coaxial cable"
                        ],
                        "answer": 1,
                        "explain": "Shared-medium contention is the defining property of HFC access. DSL gives each subscriber a dedicated line to the central office, so a neighbour's usage does not affect it. Propagation speed is a physical constant, not something an ISP sets."
                  },
                  {
                        "q": "Scenario: a file transfer between two cities is slow. You upgrade both end links from 100 Mb/s to 1 Gb/s but the round-trip time barely improves. Why?",
                        "options": [
                              "Propagation delay dominates and is unaffected by link rate",
                              "The packets became larger",
                              "Queueing delay increased proportionally",
                              "Processing delay scales with link rate"
                        ],
                        "answer": 0,
                        "explain": "Raising R shrinks transmission delay (L/R) but does nothing to propagation delay (d/s), which is fixed by distance and medium. Over a long path propagation dominates, so a tenfold rate increase moves the total very little."
                  },
                  {
                        "q": "Scenario: a router's output link runs at 1.5 Mb/s while traffic arrives for it at a sustained 10 Mb/s. What happens?",
                        "options": [
                              "The router raises the link rate automatically",
                              "Packets queue, and once the buffer fills, further arrivals are dropped",
                              "The router forwards packets on a different link at random",
                              "The router fragments the packets to fit"
                        ],
                        "answer": 1,
                        "explain": "When arrival rate exceeds link rate for a sustained period, the queue grows until the buffer is exhausted and packets are discarded. Routers cannot change link capacity, and fragmentation addresses MTU limits, not congestion."
                  },
                  {
                        "q": "Scenario: traceroute to a distant host shows three routers replying, then only asterisks, yet the host is reachable by web browser. What is a likely explanation?",
                        "options": [
                              "The path has exactly three routers",
                              "A firewall along the path drops or does not reply to the probes traceroute relies on",
                              "The destination has no IP address",
                              "TCP is disabled on the intermediate routers"
                        ],
                        "answer": 1,
                        "explain": "Traceroute depends on routers returning ICMP TTL-expired messages. Many networks filter or rate-limit ICMP, so hops go silent even though ordinary forwarding still works - which is why the web request succeeds."
                  }
            ]
      },
      {
            "title": "1.2 Practice: Application Layer Protocols and Services",
            "description": "30-item practice test covering HTTP and its versions, cookies, caching, e-mail, DNS, peer-to-peer distribution, streaming, and CDNs.",
            "questions": [
                  {
                        "q": "Using non-persistent HTTP, how long does it take to retrieve one object, ignoring transmission time?",
                        "options": [
                              "1 RTT",
                              "2 RTT",
                              "3 RTT",
                              "4 RTT"
                        ],
                        "answer": 1,
                        "explain": "One RTT establishes the TCP connection and a second carries the request plus the first bytes of the response, giving 2 RTT per object before the file itself transfers."
                  },
                  {
                        "q": "A page has a base HTML file plus 8 referenced objects and RTT is 100 ms. Roughly how long does serial non-persistent HTTP take, ignoring transmission time?",
                        "options": [
                              "0.9 s",
                              "1.8 s",
                              "2.7 s",
                              "3.6 s"
                        ],
                        "answer": 1,
                        "explain": "Nine objects at 2 RTT each is 18 RTT, and 18 x 100 ms = 1.8 s. Persistent HTTP with pipelining would cut this to roughly 2 RTT plus 1 RTT, about 0.3 s."
                  },
                  {
                        "q": "What does persistent HTTP change relative to non-persistent HTTP?",
                        "options": [
                              "It encrypts the connection",
                              "It leaves the TCP connection open so later objects avoid repeated connection setup",
                              "It compresses objects before sending",
                              "It removes the need for a server"
                        ],
                        "answer": 1,
                        "explain": "The saving is entirely connection setup. Encryption is TLS's job and compression is a separate header-negotiated feature; neither is what 'persistent' refers to."
                  },
                  {
                        "q": "HTTP is described as stateless. What does that mean?",
                        "options": [
                              "The server keeps no information about past client requests",
                              "The client cannot send more than one request",
                              "The connection is closed after each byte",
                              "The server cannot return errors"
                        ],
                        "answer": 0,
                        "explain": "Each request is independent and the server retains nothing about earlier ones. This simplicity is deliberate: protocols that maintain state must reconcile inconsistent views after a crash."
                  },
                  {
                        "q": "Which four components make cookies work?",
                        "options": [
                              "A cookie header in the response, a cookie header in the next request, a cookie file on the client, and a back-end database",
                              "Encryption, compression, caching, and authentication",
                              "A proxy, a firewall, a router, and a switch",
                              "DNS, DHCP, ARP, and ICMP"
                        ],
                        "answer": 0,
                        "explain": "The server sets an ID with a Set-cookie response header, the browser stores it and returns it on subsequent requests, and the site correlates that ID against its own database."
                  },
                  {
                        "q": "What is the main privacy concern with third-party persistent cookies?",
                        "options": [
                              "They consume excessive disk space",
                              "One common identifier can be tracked across many different web sites",
                              "They prevent the browser from caching pages",
                              "They disable HTTPS"
                        ],
                        "answer": 1,
                        "explain": "Because the same third-party value is returned on every site that embeds that party's content, browsing behaviour can be correlated across sites - a broader exposure than any single site learning about its own users."
                  },
                  {
                        "q": "A Web cache acts as which of the following?",
                        "options": [
                              "A server only",
                              "A client only",
                              "Both a server to the requesting client and a client to the origin server",
                              "Neither, it is a passive store"
                        ],
                        "answer": 2,
                        "explain": "On a miss the cache must fetch the object like any client, then serve it like any server. That dual role is what lets it sit transparently between the two."
                  },
                  {
                        "q": "Which benefit does a Web cache installed at an institution NOT provide?",
                        "options": [
                              "Reduced response time for cached objects",
                              "Reduced traffic on the institution's access link",
                              "Guaranteed delivery of the freshest version of every object",
                              "Reduced load on origin servers"
                        ],
                        "answer": 2,
                        "explain": "Freshness is precisely what caching trades away - a cached copy can be stale until it is revalidated or expires. The other three are the reasons caches are deployed."
                  },
                  {
                        "q": "What problem does HTTP/2 frame interleaving solve?",
                        "options": [
                              "Weak encryption on TCP connections",
                              "Head-of-line blocking, where a small object waits behind a large one under first-come-first-served ordering",
                              "The absence of persistent connections",
                              "The need for DNS lookups"
                        ],
                        "answer": 1,
                        "explain": "HTTP/1.1 serves pipelined requests in order, so one large object delays everything behind it. HTTP/2 splits objects into frames and interleaves them, letting small objects complete early."
                  },
                  {
                        "q": "What limitation remains in HTTP/2 that HTTP/3 addresses?",
                        "options": [
                              "It cannot use persistent connections",
                              "A lost TCP segment stalls every stream sharing the single connection",
                              "It cannot set object priorities",
                              "It cannot push unrequested objects"
                        ],
                        "answer": 1,
                        "explain": "HTTP/2 interleaves at the application layer but still rides one TCP connection, so TCP's in-order delivery stalls all streams on a loss. HTTP/3 moves to QUIC, giving each stream independent loss recovery."
                  },
                  {
                        "q": "Which specification defines HTTP/2 today?",
                        "options": [
                              "RFC 7540",
                              "RFC 9113",
                              "RFC 8446",
                              "RFC 9000"
                        ],
                        "answer": 1,
                        "explain": "RFC 9113 obsoleted RFC 7540 in June 2022. RFC 8446 is TLS 1.3 and RFC 9000 is QUIC. Lecture slides that cite RFC 7540 predate the revision."
                  },
                  {
                        "q": "HTTP/3 runs over which transport?",
                        "options": [
                              "TCP",
                              "QUIC over UDP",
                              "SCTP",
                              "Raw IP"
                        ],
                        "answer": 1,
                        "explain": "HTTP/3 (RFC 9114) maps HTTP semantics onto QUIC (RFC 9000), which runs over UDP and supplies encryption, per-stream reliability, and congestion control itself."
                  },
                  {
                        "q": "Which protocol delivers a message from the sender's mail server to the receiver's mail server?",
                        "options": [
                              "IMAP",
                              "POP3",
                              "SMTP",
                              "HTTP"
                        ],
                        "answer": 2,
                        "explain": "SMTP handles server-to-server delivery. IMAP and POP3 are mail access protocols used to retrieve messages already stored on the receiver's server."
                  },
                  {
                        "q": "Which RFC defines SMTP?",
                        "options": [
                              "RFC 531",
                              "RFC 822",
                              "RFC 5321",
                              "RFC 3501"
                        ],
                        "answer": 2,
                        "explain": "SMTP is RFC 5321. RFC 3501 is IMAP, RFC 822 defined the older message format (now RFC 5322), and 'RFC 531' is a transcription error that appears in some slide decks."
                  },
                  {
                        "q": "What does IMAP provide that basic message delivery does not?",
                        "options": [
                              "Server-to-server transfer of new mail",
                              "Retrieval, deletion, and folder management of messages stored on the server",
                              "Encryption of the message body",
                              "Conversion of addresses to IP addresses"
                        ],
                        "answer": 1,
                        "explain": "IMAP keeps messages on the server and lets the client manipulate them there, including organising them into folders - which is what makes the same mailbox consistent across devices."
                  },
                  {
                        "q": "Why is DNS implemented as a distributed hierarchy rather than one central database?",
                        "options": [
                              "Because IP addresses are 32 bits",
                              "Because a central database would be a single point of failure, a traffic bottleneck, distant from most clients, and hard to maintain",
                              "Because DNS must run over TCP",
                              "Because domain names are case sensitive"
                        ],
                        "answer": 1,
                        "explain": "All four scaling problems apply at once. Distribution addresses each of them, which is why the design survived the growth from a handful of hosts to the present Internet."
                  },
                  {
                        "q": "In an iterative DNS query, what does a contacted server that cannot resolve the name return?",
                        "options": [
                              "An error and nothing else",
                              "The name of another server to ask",
                              "The final IP address anyway",
                              "A request to try again later"
                        ],
                        "answer": 1,
                        "explain": "The iterative pattern is 'I do not know this name, but ask this server'. In a recursive query the contacted server instead takes on the resolution work itself."
                  },
                  {
                        "q": "Where does the local DNS server sit in the DNS hierarchy?",
                        "options": [
                              "At the root level",
                              "At the top-level domain level",
                              "It does not strictly belong to the hierarchy; it acts as a caching proxy for its clients",
                              "At the authoritative level for every domain"
                        ],
                        "answer": 2,
                        "explain": "Each ISP, company, or university runs one as a default name server. It caches recent translations and forwards queries into the hierarchy, but it is not itself part of the root/TLD/authoritative chain."
                  },
                  {
                        "q": "A DNS record whose name is an alias and whose value is the real hostname is which type?",
                        "options": [
                              "A",
                              "NS",
                              "CNAME",
                              "MX"
                        ],
                        "answer": 2,
                        "explain": "CNAME maps an alias to a canonical name. Type A maps a hostname to an IP address, NS names an authoritative server for a domain, and MX names a mail server."
                  },
                  {
                        "q": "Which record type would you query to find where to deliver mail for a domain?",
                        "options": [
                              "A",
                              "MX",
                              "NS",
                              "CNAME"
                        ],
                        "answer": 1,
                        "explain": "MX records name the mail servers that accept mail for a domain. An A record would give you an address but not tell you it is the right destination for mail."
                  },
                  {
                        "q": "What does DNSSEC add?",
                        "options": [
                              "Encryption of DNS queries so eavesdroppers cannot read them",
                              "Origin authentication and integrity protection for DNS records",
                              "Faster resolution through better caching",
                              "Automatic failover between root servers"
                        ],
                        "answer": 1,
                        "explain": "DNSSEC lets a resolver verify that a record came from the legitimate zone and was not altered. It deliberately does not provide confidentiality - queries remain visible."
                  },
                  {
                        "q": "How does DNS cache poisoning work?",
                        "options": [
                              "By flooding a server with queries until it crashes",
                              "By sending forged replies that a DNS server accepts and caches",
                              "By deleting records from an authoritative server",
                              "By exhausting the server's disk space"
                        ],
                        "answer": 1,
                        "explain": "If an attacker's forged reply arrives before the genuine one and matches the expected query, the resolver caches the wrong address and serves it to everyone until the TTL expires."
                  },
                  {
                        "q": "In BitTorrent, what is the tracker's role?",
                        "options": [
                              "It stores the complete file for peers to download",
                              "It keeps track of the peers in a torrent and gives a joining peer a list to contact",
                              "It verifies each chunk's checksum",
                              "It encrypts traffic between peers"
                        ],
                        "answer": 1,
                        "explain": "The tracker is a rendezvous service only - it never holds file data. A joining peer registers with it, receives a peer list, and then exchanges chunks directly with those peers."
                  },
                  {
                        "q": "Why is peer-to-peer distribution described as self-scaling?",
                        "options": [
                              "Because peers have unlimited bandwidth",
                              "Because each new peer adds upload capacity as well as demand",
                              "Because the tracker grows automatically",
                              "Because chunks shrink as the torrent grows"
                        ],
                        "answer": 1,
                        "explain": "A new client-server user adds load without adding capacity. A new peer adds both, so aggregate service capacity rises with the population instead of being fixed by the server."
                  },
                  {
                        "q": "What does the manifest file in DASH contain?",
                        "options": [
                              "The complete video file",
                              "URLs for each chunk at each available encoding rate",
                              "The client's bandwidth measurements",
                              "The digital rights management keys"
                        ],
                        "answer": 1,
                        "explain": "The client reads the manifest to learn what chunks exist and at which rates, then chooses per chunk. Putting that catalogue in the client's hands is what makes the adaptation client-driven."
                  },
                  {
                        "q": "In DASH, what decides which encoding rate to request?",
                        "options": [
                              "The server, based on its own load",
                              "The client, based on measured bandwidth and its buffer level",
                              "The CDN, based on geography",
                              "The manifest file, which fixes the rate in advance"
                        ],
                        "answer": 1,
                        "explain": "The intelligence sits at the client: it measures server-to-client bandwidth, consults the manifest, and picks the highest sustainable rate, adjusting chunk by chunk as conditions change."
                  },
                  {
                        "q": "What distinguishes the CDN 'enter deep' strategy from 'bring home'?",
                        "options": [
                              "Enter deep pushes many servers into access networks; bring home uses fewer, larger clusters near them",
                              "Enter deep uses satellites; bring home uses fiber",
                              "Enter deep caches only video; bring home caches only web pages",
                              "They are two names for the same strategy"
                        ],
                        "answer": 0,
                        "explain": "Enter deep trades operational complexity for proximity to users; bring home trades some proximity for simpler, larger deployments. Akamai is the classic enter-deep example."
                  },
                  {
                        "q": "Scenario: a browser opens six parallel TCP connections to the same server. Which HTTP behaviour is it working around?",
                        "options": [
                              "The lack of DNS caching",
                              "Serial per-object delays and head-of-line blocking on a single connection",
                              "The stateless nature of HTTP",
                              "The absence of cookies"
                        ],
                        "answer": 1,
                        "explain": "Parallel connections were the pre-HTTP/2 workaround for objects queuing behind one another. HTTP/2's frame interleaving reduces the need, though browsers still open several connections when loss stalls a stream."
                  },
                  {
                        "q": "Scenario: an organisation installs a Web cache and its access-link utilisation drops sharply. Which additional effect should it also expect?",
                        "options": [
                              "Higher latency for every request",
                              "Lower response time for objects served from the cache",
                              "Loss of the ability to reach origin servers",
                              "An increase in DNS queries per page"
                        ],
                        "answer": 1,
                        "explain": "A cache hit is served locally, so it returns faster than a round trip to the origin. Both effects - lower link load and lower response time - are the standard justification for deploying a cache."
                  },
                  {
                        "q": "Scenario: a video stalls repeatedly on a congested home link, then resumes at visibly lower quality. Which mechanism is responsible?",
                        "options": [
                              "DNS failover to a different server",
                              "DASH rate adaptation selecting a lower-rate chunk encoding",
                              "TCP retransmitting the whole video",
                              "The CDN switching from enter deep to bring home"
                        ],
                        "answer": 1,
                        "explain": "The client measured reduced bandwidth and a draining buffer, so it requested subsequent chunks at a lower encoding rate. Degrading quality rather than stalling is exactly the behaviour DASH is designed to produce."
                  }
            ]
      },
      {
            "title": "2.1A Practice: Transport Layer Fundamentals",
            "description": "30-item practice test covering transport services, multiplexing and demultiplexing, UDP, and the Internet checksum.",
            "questions": [
                  {
                        "q": "The transport layer provides logical communication between what?",
                        "options": [
                              "Hosts",
                              "Processes",
                              "Routers",
                              "Networks"
                        ],
                        "answer": 1,
                        "explain": "Transport connects processes; the network layer connects hosts. That single distinction is the cleanest way to separate the two layers' responsibilities."
                  },
                  {
                        "q": "What does a transport-layer sender do with an application message?",
                        "options": [
                              "Encrypts it and forwards it to the link layer",
                              "Breaks it into segments, adds a header, and passes each to the network layer",
                              "Routes it toward the destination host",
                              "Converts it into frames"
                        ],
                        "answer": 1,
                        "explain": "Segmentation plus header construction is the sender's job. Routing belongs to the network layer and framing to the link layer."
                  },
                  {
                        "q": "UDP demultiplexes an arriving segment using which field or fields?",
                        "options": [
                              "Destination port number only",
                              "Source and destination port numbers",
                              "Source IP and source port",
                              "The full four-tuple"
                        ],
                        "answer": 0,
                        "explain": "UDP uses the destination port alone, so two datagrams from different senders arriving at the same port go to the same socket. TCP is the one that uses the full four-tuple."
                  },
                  {
                        "q": "A TCP socket is identified by which combination?",
                        "options": [
                              "Destination port only",
                              "Source IP, source port, destination IP, destination port",
                              "Source IP and destination IP",
                              "Process ID and port number"
                        ],
                        "answer": 1,
                        "explain": "The four-tuple is what lets one server port hold thousands of simultaneous connections, each on its own socket distinguished by the client's address and port."
                  },
                  {
                        "q": "Three TCP segments arrive at host B, all with destination port 80, from three different client address-port pairs. How are they demultiplexed?",
                        "options": [
                              "To one socket, since the destination port matches",
                              "To three different sockets, one per four-tuple",
                              "They are discarded as duplicates",
                              "To the welcoming socket only"
                        ],
                        "answer": 1,
                        "explain": "Each distinct four-tuple maps to its own socket. If UDP were in use they would all reach a single socket, because UDP ignores the source fields when demultiplexing."
                  },
                  {
                        "q": "How large is the UDP header?",
                        "options": [
                              "4 bytes",
                              "8 bytes",
                              "16 bytes",
                              "20 bytes"
                        ],
                        "answer": 1,
                        "explain": "Eight bytes: source port, destination port, length, and checksum, at two bytes each. TCP's minimum header is 20 bytes, which is part of why UDP is described as no-frills."
                  },
                  {
                        "q": "The UDP length field counts what?",
                        "options": [
                              "Only the payload",
                              "The entire UDP segment including the header",
                              "The IP datagram including its header",
                              "The number of 16-bit words in the payload"
                        ],
                        "answer": 1,
                        "explain": "Length covers the whole segment, header included, expressed in bytes. That is why the minimum legal value is 8, corresponding to a segment with no data."
                  },
                  {
                        "q": "Which service does UDP provide?",
                        "options": [
                              "Reliable in-order delivery",
                              "Flow control",
                              "Congestion control",
                              "None of these - it provides only multiplexing and a checksum"
                        ],
                        "answer": 3,
                        "explain": "UDP adds process addressing and optional error detection to IP's best-effort service. Reliability, ordering, flow control, and congestion control are all absent by design."
                  },
                  {
                        "q": "Why might an application designer choose UDP over TCP?",
                        "options": [
                              "Because UDP guarantees lower loss",
                              "Because there is no connection setup delay and no congestion throttling",
                              "Because UDP encrypts data",
                              "Because UDP has a larger header for extra options"
                        ],
                        "answer": 1,
                        "explain": "No handshake means no extra RTT before data flows, and no congestion control means the sender is never throttled. Both matter for loss-tolerant, delay-sensitive traffic."
                  },
                  {
                        "q": "Which of these commonly runs over UDP?",
                        "options": [
                              "DNS",
                              "FTP",
                              "IMAP",
                              "SSH"
                        ],
                        "answer": 0,
                        "explain": "DNS uses UDP for typical queries because a single small request and reply would be dominated by TCP's setup cost. FTP, IMAP, and SSH all need reliable byte streams."
                  },
                  {
                        "q": "HTTP/3 runs over UDP. How does it obtain reliability?",
                        "options": [
                              "It does not - HTTP/3 tolerates loss",
                              "Reliability and congestion control are added above UDP, inside QUIC",
                              "It falls back to TCP whenever loss occurs",
                              "The network layer retransmits for it"
                        ],
                        "answer": 1,
                        "explain": "Choosing UDP does not mean giving up reliability - it means rebuilding it where you control it. QUIC supplies per-stream reliable delivery and congestion control above UDP."
                  },
                  {
                        "q": "What is the goal of the UDP checksum?",
                        "options": [
                              "To encrypt the segment",
                              "To detect flipped bits in the transmitted segment",
                              "To count the segment's bytes",
                              "To identify the destination process"
                        ],
                        "answer": 1,
                        "explain": "It is an error-detection field only. Encryption, length accounting, and process identification are handled by other mechanisms or other fields."
                  },
                  {
                        "q": "How does the sender compute the Internet checksum?",
                        "options": [
                              "By XORing all bytes together",
                              "By summing the segment's 16-bit words in one's complement arithmetic and storing the complement of the result",
                              "By dividing the data by a generator polynomial",
                              "By counting the number of 1 bits"
                        ],
                        "answer": 1,
                        "explain": "Polynomial division is CRC, and counting 1 bits is parity. The Internet checksum is specifically a one's complement sum over 16-bit words, with the complement stored in the field."
                  },
                  {
                        "q": "When adding 16-bit words for the Internet checksum, what must be done with a carry out of the most significant bit?",
                        "options": [
                              "It is discarded",
                              "It is added back into the least significant bit",
                              "It is stored in a separate overflow field",
                              "It causes the checksum to be recomputed"
                        ],
                        "answer": 1,
                        "explain": "That wraparound carry is what makes the arithmetic one's complement rather than ordinary binary addition. Discarding it would produce the wrong checksum."
                  },
                  {
                        "q": "The receiver computes the checksum over a received segment. What indicates an error?",
                        "options": [
                              "The computed value differs from the checksum field",
                              "The computed value equals zero",
                              "The segment length is odd",
                              "The source port is zero"
                        ],
                        "answer": 0,
                        "explain": "A mismatch between the computed checksum and the value carried in the field means at least one bit changed in transit, and the segment is discarded."
                  },
                  {
                        "q": "Why is the Internet checksum described as weak protection?",
                        "options": [
                              "It only covers the header, not the data",
                              "Compensating bit errors in different words can leave the sum unchanged, so some errors pass undetected",
                              "It cannot be computed in software",
                              "It requires a shared secret key"
                        ],
                        "answer": 1,
                        "explain": "Flip a 0 to 1 in one word and a 1 to 0 in the same position of another, and the sum is identical. This is exactly why link layers add CRC, which catches far more error patterns."
                  },
                  {
                        "q": "Besides the UDP header and data, what else is included in the UDP checksum computation?",
                        "options": [
                              "Nothing else",
                              "Selected fields from the IP header",
                              "The Ethernet frame trailer",
                              "The TCP header"
                        ],
                        "answer": 1,
                        "explain": "A pseudo-header drawn from the IP header is included, which lets the receiver detect a segment that was delivered to the wrong host or protocol as well as ordinary bit errors."
                  },
                  {
                        "q": "Detecting an error with the UDP checksum causes what to happen?",
                        "options": [
                              "The segment is retransmitted automatically",
                              "The segment is discarded",
                              "The segment is delivered with a warning flag",
                              "The connection is reset"
                        ],
                        "answer": 1,
                        "explain": "UDP has no retransmission mechanism and no connection to reset. The corrupted segment is simply dropped, and any recovery is left to the application."
                  },
                  {
                        "q": "Multiplexing at the sender means what?",
                        "options": [
                              "Splitting one message across several links",
                              "Handling data from multiple sockets and adding transport headers so the receiver can separate them again",
                              "Compressing several messages into one",
                              "Choosing the fastest route"
                        ],
                        "answer": 1,
                        "explain": "The sender gathers data from many sockets onto one network-layer service, tagging each with the header information the receiver's demultiplexing step will need."
                  },
                  {
                        "q": "At which layers does multiplexing and demultiplexing occur?",
                        "options": [
                              "The transport layer only",
                              "The network layer only",
                              "All layers",
                              "The application layer only"
                        ],
                        "answer": 2,
                        "explain": "Every layer separates its clients from one another using header field values - the link layer by protocol type, the network layer by protocol number, the transport layer by port."
                  },
                  {
                        "q": "A UDP sender creates a socket without specifying a destination. Where is the destination specified?",
                        "options": [
                              "In the socket, once at creation time",
                              "Attached explicitly to each individual datagram",
                              "By the operating system automatically",
                              "It is not needed for UDP"
                        ],
                        "answer": 1,
                        "explain": "Because there is no connection, the sender attaches the destination IP address and port to every datagram. That is the practical difference from a connected TCP socket."
                  },
                  {
                        "q": "What does a UDP receiver extract from an arriving datagram in order to reply?",
                        "options": [
                              "Nothing - replies are impossible",
                              "The sender's IP address and port number",
                              "The sender's MAC address",
                              "The sender's process ID"
                        ],
                        "answer": 1,
                        "explain": "The source address and port travel in the headers, so the receiver can construct a reply even though no connection exists. MAC addresses do not survive past the first router."
                  },
                  {
                        "q": "Which statement about UDP delivery is accurate?",
                        "options": [
                              "Datagrams always arrive in the order sent",
                              "Datagrams may be lost or arrive out of order",
                              "Duplicate datagrams are automatically suppressed",
                              "Delivery is guaranteed within a fixed time"
                        ],
                        "answer": 1,
                        "explain": "UDP inherits IP's best-effort behaviour without adding recovery, so loss, reordering, and duplication are all possible and must be handled by the application if they matter."
                  },
                  {
                        "q": "TCP is connection-oriented. What does the connection actually consist of?",
                        "options": [
                              "A reserved circuit through the routers",
                              "State held at the two end systems only",
                              "A dedicated physical link",
                              "An entry in every router's forwarding table"
                        ],
                        "answer": 1,
                        "explain": "Routers know nothing about TCP connections - the state lives entirely at the endpoints. This is why the network core stays simple while endpoints provide reliability."
                  },
                  {
                        "q": "Which service does TCP provide that UDP does not?",
                        "options": [
                              "Process-to-process delivery",
                              "Error detection via checksum",
                              "Flow control",
                              "Multiplexing"
                        ],
                        "answer": 2,
                        "explain": "Both protocols provide process addressing, multiplexing, and a checksum. Flow control - preventing the sender from overwhelming the receiver's buffer - is unique to TCP here."
                  },
                  {
                        "q": "Scenario: an application sends 2,000 small messages per second and can tolerate occasional loss but not delay. Which transport fits, and why?",
                        "options": [
                              "TCP, because reliability always matters",
                              "UDP, because it avoids handshake delay and never throttles the sending rate",
                              "Either, since they perform identically",
                              "Neither - the application must use raw IP"
                        ],
                        "answer": 1,
                        "explain": "Loss tolerance plus delay sensitivity is the textbook UDP profile. TCP's retransmission and congestion control would add exactly the delay this application cannot absorb."
                  },
                  {
                        "q": "Scenario: a segment arrives whose computed checksum matches the checksum field, yet the application receives corrupted data. How is this possible?",
                        "options": [
                              "The checksum field was not set",
                              "Compensating bit errors left the one's complement sum unchanged",
                              "UDP does not compute a checksum at the receiver",
                              "The application misread the socket"
                        ],
                        "answer": 1,
                        "explain": "The Internet checksum cannot detect every error pattern. Two offsetting flips in the same bit position of different words produce an identical sum, so the segment passes the check."
                  },
                  {
                        "q": "Scenario: a server on port 53 receives UDP queries from hundreds of clients. How many sockets does it need?",
                        "options": [
                              "One per client",
                              "One, since UDP demultiplexes on destination port alone",
                              "Two - one for requests and one for replies",
                              "One per source IP address"
                        ],
                        "answer": 1,
                        "explain": "All of those datagrams share the same destination port, so UDP delivers them to a single socket. A TCP server on port 53 would instead need one socket per connection."
                  },
                  {
                        "q": "Scenario: a developer replaces TCP with UDP to reduce latency, and throughput collapses under network congestion. Why?",
                        "options": [
                              "UDP headers are too large",
                              "UDP has no congestion control, so the sender keeps blasting into a congested path and losses climb",
                              "UDP cannot address processes",
                              "UDP fragments every datagram"
                        ],
                        "answer": 1,
                        "explain": "Removing congestion control removes the mechanism that backs off when the path is overloaded. Applications that use UDP at volume must implement rate control themselves, as QUIC does."
                  },
                  {
                        "q": "Scenario: you must decide whether an error detected by the UDP checksum should trigger retransmission. Where must that logic live?",
                        "options": [
                              "In the UDP layer, which supports retransmission",
                              "In the application or a protocol layered above UDP",
                              "In the IP layer",
                              "In the router that detected the error"
                        ],
                        "answer": 1,
                        "explain": "UDP discards and moves on. Any retransmission must be built above it - which is precisely what QUIC does for HTTP/3."
                  }
            ]
      },
      {
            "title": "2.1B Practice: Reliable Data Transfer and TCP Control",
            "description": "30-item practice test covering reliable data transfer principles, pipelining, Go-Back-N, Selective Repeat, TCP timers, and congestion control.",
            "questions": [
                  {
                        "q": "Which four mechanisms together provide reliable data transfer?",
                        "options": [
                              "Encryption, compression, framing, and routing",
                              "Checksums, acknowledgments, timers, and retransmission",
                              "Ports, sockets, buffers, and windows",
                              "Fragmentation, reassembly, TTL, and checksums"
                        ],
                        "answer": 1,
                        "explain": "The checksum detects corruption, the ACK reports success, the timer detects silence, and retransmission repairs the gap. Every reliable protocol is built from these four."
                  },
                  {
                        "q": "Why is stop-and-wait inefficient on a fast, long link?",
                        "options": [
                              "It uses too much receiver buffer",
                              "The sender idles for a full round trip after each packet",
                              "It cannot detect errors",
                              "It requires per-packet timers"
                        ],
                        "answer": 1,
                        "explain": "Utilisation is (L/R)/(RTT + L/R). As R grows or RTT grows, the L/R term shrinks relative to RTT and the link sits idle most of the time."
                  },
                  {
                        "q": "How much data must be in flight to keep a link fully utilised?",
                        "options": [
                              "One maximum segment size",
                              "The bandwidth-delay product",
                              "The receiver's buffer size",
                              "The congestion window's initial value"
                        ],
                        "answer": 1,
                        "explain": "Bandwidth multiplied by round-trip time gives the amount of unacknowledged data needed to keep the pipe full. A window smaller than this leaves capacity unused."
                  },
                  {
                        "q": "In Go-Back-N, what does the receiver do with an out-of-order packet?",
                        "options": [
                              "Buffers it until the gap is filled",
                              "Discards it and re-acknowledges the last in-order packet",
                              "Forwards it to the application immediately",
                              "Sends a negative acknowledgment"
                        ],
                        "answer": 1,
                        "explain": "Go-Back-N receivers hold no buffer for out-of-order data, which is what keeps them simple - and what forces the sender to resend the whole window after a loss."
                  },
                  {
                        "q": "What is the main cost of Go-Back-N compared with Selective Repeat?",
                        "options": [
                              "It needs a timer per packet",
                              "It may retransmit packets that arrived successfully",
                              "It cannot detect errors",
                              "It requires more receiver memory"
                        ],
                        "answer": 1,
                        "explain": "One lost packet forces retransmission of everything after it, wasting bandwidth. Selective Repeat avoids this but requires per-packet timers and receiver buffering."
                  },
                  {
                        "q": "What does Selective Repeat require that Go-Back-N does not?",
                        "options": [
                              "A checksum",
                              "Receiver buffering of out-of-order packets and individual acknowledgments",
                              "Sequence numbers",
                              "A retransmission timer"
                        ],
                        "answer": 1,
                        "explain": "Both use sequence numbers, checksums, and timers. Selective Repeat additionally buffers out-of-order arrivals and acknowledges each packet individually so only the missing one is resent."
                  },
                  {
                        "q": "TCP is best described as which of the following?",
                        "options": [
                              "Pure Go-Back-N",
                              "Pure Selective Repeat",
                              "A hybrid using cumulative ACKs but retransmitting a single segment",
                              "Stop-and-wait with a large timeout"
                        ],
                        "answer": 2,
                        "explain": "TCP's cumulative acknowledgments come from Go-Back-N, but it retransmits only the segment believed lost, which is Selective Repeat behaviour. Optional SACK pushes it further toward Selective Repeat."
                  },
                  {
                        "q": "What does a cumulative acknowledgment report?",
                        "options": [
                              "The single most recently received segment",
                              "The next byte the receiver expects, implying everything before it arrived",
                              "The number of segments received so far",
                              "Which segments are missing"
                        ],
                        "answer": 1,
                        "explain": "It names the first missing byte, which implicitly acknowledges everything before it. It cannot express which later segments arrived - that limitation is why duplicate ACKs are informative."
                  },
                  {
                        "q": "How does TCP compute its timeout interval?",
                        "options": [
                              "EstimatedRTT only",
                              "EstimatedRTT + 4 x DevRTT",
                              "Twice the last measured RTT",
                              "A fixed 500 ms"
                        ],
                        "answer": 1,
                        "explain": "The safety margin scales with measured variability, so a jittery path gets a longer timer. Using EstimatedRTT alone would cause spurious timeouts on roughly half of all samples."
                  },
                  {
                        "q": "Why does TCP add a margin based on DevRTT rather than using EstimatedRTT alone?",
                        "options": [
                              "To make the protocol simpler",
                              "Because RTT varies, and a timer set at the average would expire on any slower-than-average sample",
                              "Because DevRTT is easier to measure",
                              "To satisfy the congestion control algorithm"
                        ],
                        "answer": 1,
                        "explain": "A timeout is expensive - it collapses the sending rate - so the timer must be conservative. Scaling the margin by observed deviation adapts that conservatism to the path."
                  },
                  {
                        "q": "How many duplicate ACKs trigger TCP fast retransmit?",
                        "options": [
                              "One",
                              "Two",
                              "Three",
                              "Four"
                        ],
                        "answer": 2,
                        "explain": "Three duplicates. One or two could easily be simple reordering; three is strong evidence that later segments arrived and one is genuinely missing."
                  },
                  {
                        "q": "A sender transmits segments 1 through 5 and segment 2 is lost. What does the receiver send?",
                        "options": [
                              "An ACK for 1, then negative acknowledgments for 2",
                              "An ACK for 1, then repeated ACKs for 1 as 3, 4, and 5 arrive",
                              "ACKs for 1, 3, 4, and 5 individually",
                              "Nothing until segment 2 arrives"
                        ],
                        "answer": 1,
                        "explain": "A cumulative ACK can only report the last in-order byte, so each of 3, 4, and 5 produces another ACK for 1. Those three duplicates are exactly what triggers fast retransmit."
                  },
                  {
                        "q": "What limits a TCP sender's transmission rate?",
                        "options": [
                              "The congestion window only",
                              "The receive window only",
                              "The minimum of the congestion window and the receive window",
                              "The maximum segment size"
                        ],
                        "answer": 2,
                        "explain": "Congestion control protects the network and flow control protects the receiver; the sender must respect both, so the smaller of the two governs."
                  },
                  {
                        "q": "What is flow control protecting against?",
                        "options": [
                              "Router buffer overflow",
                              "Receiver buffer overflow",
                              "Link failure",
                              "Sequence number wraparound"
                        ],
                        "answer": 1,
                        "explain": "Flow control is strictly an endpoint concern, driven by the receive window the peer advertises. Router buffer overflow is congestion control's problem."
                  },
                  {
                        "q": "Why is slow start not actually slow?",
                        "options": [
                              "Because it skips the handshake",
                              "Because the congestion window doubles every round trip",
                              "Because it uses the largest possible segments",
                              "Because it ignores acknowledgments"
                        ],
                        "answer": 1,
                        "explain": "Growth is exponential. The name refers to starting from a single segment rather than blasting at full rate immediately - the ramp itself is fast."
                  },
                  {
                        "q": "What happens when the congestion window reaches ssthresh?",
                        "options": [
                              "The connection closes",
                              "TCP switches from exponential growth to linear growth",
                              "The window resets to one segment",
                              "The receive window takes over"
                        ],
                        "answer": 1,
                        "explain": "Crossing the threshold moves TCP from slow start into congestion avoidance, where the window grows by roughly one MSS per round trip instead of doubling."
                  },
                  {
                        "q": "What does AIMD stand for and why does it produce fairness?",
                        "options": [
                              "Additive Increase Multiplicative Decrease - gentle probing with sharp backoff drives competing flows toward equal shares",
                              "Adaptive Interval Multi-Delay - it synchronises senders",
                              "Average Increase Minimum Delay - it minimises latency",
                              "Additive Interval Multiplicative Duration - it fixes the window size"
                        ],
                        "answer": 0,
                        "explain": "Because the decrease is proportional to the current window, a flow using more capacity gives up more on each loss, while additive increase adds the same amount to every flow. The result converges toward an equal split."
                  },
                  {
                        "q": "Why does TCP treat a timeout as a worse congestion signal than three duplicate ACKs?",
                        "options": [
                              "Timeouts take longer to detect",
                              "Duplicate ACKs prove the path is still delivering segments, whereas silence suggests severe congestion",
                              "Timeouts only occur on wireless links",
                              "Duplicate ACKs indicate receiver buffer overflow"
                        ],
                        "answer": 1,
                        "explain": "Duplicate ACKs mean later segments arrived, so the path works. Total silence could mean the path is badly congested or broken, which justifies the far more aggressive response."
                  },
                  {
                        "q": "How do TCP Tahoe and TCP Reno differ?",
                        "options": [
                              "Tahoe uses UDP and Reno uses TCP",
                              "Tahoe drops the window to one segment on any loss; Reno halves it on triple duplicate ACKs",
                              "Reno has no slow start",
                              "Tahoe uses selective acknowledgment"
                        ],
                        "answer": 1,
                        "explain": "Reno distinguishes the two loss signals and recovers throughput faster after isolated losses. Tahoe treats both identically by collapsing the window."
                  },
                  {
                        "q": "What does explicit congestion notification allow routers to do?",
                        "options": [
                              "Drop packets more efficiently",
                              "Mark packets to signal congestion so senders slow down before loss occurs",
                              "Increase the link rate temporarily",
                              "Reorder packets to reduce delay"
                        ],
                        "answer": 1,
                        "explain": "ECN replaces the drop-as-signal convention with an explicit mark, so the sender learns about congestion without a packet being lost and a retransmission being needed."
                  },
                  {
                        "q": "Why must the sequence number space be large?",
                        "options": [
                              "To support more simultaneous connections",
                              "So an old duplicate cannot be mistaken for a new segment",
                              "To reduce header size",
                              "To allow larger segments"
                        ],
                        "answer": 1,
                        "explain": "If numbers wrap quickly, a delayed copy of an old segment could reappear with a number the receiver currently expects, corrupting the stream silently."
                  },
                  {
                        "q": "What is exchanged during the TCP three-way handshake?",
                        "options": [
                              "Encryption keys",
                              "Initial sequence numbers, via SYN, SYNACK, and ACK",
                              "The congestion window size",
                              "The application's port mapping"
                        ],
                        "answer": 1,
                        "explain": "Each side announces its initial sequence number and acknowledges the other's. Encryption is TLS's job, layered above the completed TCP connection."
                  },
                  {
                        "q": "A connection has RTT 50 ms and a 1 Gb/s bottleneck. Roughly what window is needed to fill the pipe?",
                        "options": [
                              "About 6 MB",
                              "About 600 KB",
                              "About 60 KB",
                              "About 6 KB"
                        ],
                        "answer": 0,
                        "explain": "Bandwidth-delay product = 10^9 bits/s x 0.05 s = 5 x 10^7 bits, roughly 6.25 megabytes. This is why high-speed long-distance transfers need window scaling."
                  },
                  {
                        "q": "Which congestion control algorithm is the default on most modern Linux servers?",
                        "options": [
                              "Tahoe",
                              "Reno",
                              "CUBIC",
                              "Stop-and-wait"
                        ],
                        "answer": 2,
                        "explain": "CUBIC grows the window as a cubic function of time since the last loss, recovering much faster than Reno on high bandwidth-delay paths. Reno remains the standard teaching model."
                  },
                  {
                        "q": "What does pipelining allow that stop-and-wait does not?",
                        "options": [
                              "Error detection",
                              "Multiple unacknowledged packets in flight at once",
                              "Connection setup",
                              "Port multiplexing"
                        ],
                        "answer": 1,
                        "explain": "Allowing several outstanding packets is what fills the pipe. It requires a larger sequence number space and buffering at one or both ends."
                  },
                  {
                        "q": "Scenario: a transfer over a satellite link with 600 ms RTT achieves poor throughput despite a fast link. What is the most likely cause?",
                        "options": [
                              "The checksum is failing",
                              "The window is too small for the bandwidth-delay product, so the sender idles waiting for ACKs",
                              "The receiver has no buffer",
                              "Congestion control is disabled"
                        ],
                        "answer": 1,
                        "explain": "A huge RTT makes the bandwidth-delay product enormous. Unless the window scales to match, the sender spends most of its time waiting rather than transmitting."
                  },
                  {
                        "q": "Scenario: a connection repeatedly experiences timeouts on a path with high jitter, even though few packets are actually lost. What is happening?",
                        "options": [
                              "The checksum is too weak",
                              "The timeout interval is too aggressive for the observed RTT variability",
                              "The receive window is too large",
                              "Fast retransmit is disabled"
                        ],
                        "answer": 1,
                        "explain": "Spurious timeouts occur when the timer expires on a merely slow sample. The DevRTT term exists to widen the margin on variable paths; too small a margin produces exactly this symptom."
                  },
                  {
                        "q": "Scenario: two TCP flows share a bottleneck. One starts with a much larger window. What does AIMD predict over time?",
                        "options": [
                              "The larger flow keeps its advantage indefinitely",
                              "The two windows converge toward an equal share",
                              "Both flows collapse to one segment permanently",
                              "The smaller flow is starved"
                        ],
                        "answer": 1,
                        "explain": "Multiplicative decrease costs the larger flow more in absolute terms on each loss, while additive increase adds equally to both. Repeated cycles drive them together."
                  },
                  {
                        "q": "Scenario: a link with a small buffer shows very low latency but frequent loss for a bulk transfer. Which mechanism would improve this without adding buffer?",
                        "options": [
                              "Disabling checksums",
                              "ECN marking, so senders slow down before the buffer overflows",
                              "Increasing the maximum segment size",
                              "Switching to Go-Back-N"
                        ],
                        "answer": 1,
                        "explain": "ECN signals congestion without discarding packets, letting the sender reduce its rate while the queue is still short. This is the basis of DCTCP in datacentres."
                  },
                  {
                        "q": "Scenario: a receiver advertises a window of zero. What should the sender do?",
                        "options": [
                              "Close the connection",
                              "Stop sending data and probe periodically until the window reopens",
                              "Ignore the advertisement and continue",
                              "Switch to UDP"
                        ],
                        "answer": 1,
                        "explain": "A zero window means the receiver's buffer is full. The sender must pause, but it probes so it learns when space frees up - otherwise the connection could deadlock if the reopening ACK were lost."
                  }
            ]
      },
      {
            "title": "2.2A Practice: Network Layer Data Plane",
            "description": "30-item practice test covering forwarding versus routing, router architecture, longest prefix matching, switching fabrics, queueing, and IP addressing.",
            "questions": [
                  {
                        "q": "What is the difference between forwarding and routing?",
                        "options": [
                              "Forwarding is network-wide path computation; routing is per-router packet movement",
                              "Forwarding moves a packet from an input port to an output port; routing determines the end-to-end path",
                              "They are two names for the same operation",
                              "Forwarding happens at the transport layer"
                        ],
                        "answer": 1,
                        "explain": "Forwarding is a local action measured in nanoseconds and done in hardware. Routing is a network-wide computation measured in milliseconds and done in software."
                  },
                  {
                        "q": "Which router function belongs to the data plane?",
                        "options": [
                              "Running Dijkstra's algorithm",
                              "Looking up a destination prefix and moving the packet to an output port",
                              "Exchanging link-state advertisements",
                              "Computing the forwarding table"
                        ],
                        "answer": 1,
                        "explain": "The data plane executes per-packet, per-router decisions. Computing the table, whether by a routing algorithm or a controller, is control-plane work."
                  },
                  {
                        "q": "A forwarding table has entries for 11001000 00010111 00010*** ******** on interface 0 and 11001000 00010111 00011000 ******** on interface 1. Which interface serves address 11001000 00010111 00011000 10101010?",
                        "options": [
                              "Interface 0",
                              "Interface 1",
                              "Neither - it is dropped",
                              "Both, load-balanced"
                        ],
                        "answer": 1,
                        "explain": "Only the second entry matches this address, and longest prefix matching selects the most specific match. Note the first entry's third byte is 00010, which does not match 00011000."
                  },
                  {
                        "q": "When two forwarding table entries both match a destination, which is selected?",
                        "options": [
                              "The one listed first in the table",
                              "The one with the longest matching prefix",
                              "The one with the lowest interface number",
                              "The one added most recently"
                        ],
                        "answer": 1,
                        "explain": "Specificity wins, not table order. This is why a /24 entry overrides a /16 entry covering the same address, which is how more specific routes are honoured."
                  },
                  {
                        "q": "Why must input port lookup complete at line speed?",
                        "options": [
                              "To reduce propagation delay",
                              "So packets are processed at least as fast as they arrive, preventing unbounded input queue growth",
                              "To satisfy the checksum requirement",
                              "To allow fragmentation"
                        ],
                        "answer": 1,
                        "explain": "If lookup is slower than arrival, the input queue grows without bound and packets are eventually dropped. Line-speed processing is the design constraint that prevents this."
                  },
                  {
                        "q": "What does 'decentralized switching' mean in a router?",
                        "options": [
                              "Packets are routed by several ISPs cooperatively",
                              "The forwarding lookup happens in each input port rather than at a central processor",
                              "The routing algorithm is distributed",
                              "The switch fabric is located outside the router"
                        ],
                        "answer": 1,
                        "explain": "Placing a copy of the forwarding table in each input port lets lookups proceed in parallel, which is what makes line-speed operation achievable at high port counts."
                  },
                  {
                        "q": "First-generation routers switched via memory. What limited their throughput?",
                        "options": [
                              "The number of input ports",
                              "Memory bandwidth, with two bus crossings per datagram",
                              "The routing protocol",
                              "The link propagation speed"
                        ],
                        "answer": 1,
                        "explain": "The CPU copied each packet into system memory and back out, so every datagram crossed the system bus twice and the memory subsystem became the ceiling."
                  },
                  {
                        "q": "What limits a router that switches via a shared bus?",
                        "options": [
                              "Memory bandwidth",
                              "Bus bandwidth, since only one packet can cross at a time",
                              "The size of the forwarding table",
                              "The number of routing protocols in use"
                        ],
                        "answer": 1,
                        "explain": "Bus contention means one transfer at a time regardless of how many ports want to send. A 32 Gbps bus is enough for access routers but not for core routers."
                  },
                  {
                        "q": "Which switching fabric allows multiple non-conflicting transfers to proceed simultaneously?",
                        "options": [
                              "Switching via memory",
                              "Switching via a shared bus",
                              "A crossbar interconnection network",
                              "None - all fabrics serialise transfers"
                        ],
                        "answer": 2,
                        "explain": "A crossbar provides a dedicated crosspoint for each input-output pair, so any set of transfers targeting distinct outputs can run in parallel. That parallelism is why crossbars scale."
                  },
                  {
                        "q": "How do multistage switches exploit parallelism?",
                        "options": [
                              "By buffering packets at the input",
                              "By fragmenting datagrams into fixed-length cells, switching the cells, and reassembling at the exit",
                              "By duplicating every packet",
                              "By compressing headers"
                        ],
                        "answer": 1,
                        "explain": "Fixed-length cells simplify scheduling through the stages. The datagram is reassembled on the way out, so the fragmentation is invisible outside the fabric."
                  },
                  {
                        "q": "What causes head-of-line blocking at a router's input ports?",
                        "options": [
                              "The output link is too fast",
                              "A packet at the front of the queue waits for a busy output port, blocking packets behind it whose ports are free",
                              "The forwarding table is too large",
                              "Two packets have the same destination address"
                        ],
                        "answer": 1,
                        "explain": "The queue discipline, not fabric capacity, wastes the opportunity: a packet destined for an idle output port cannot overtake the blocked one in front of it."
                  },
                  {
                        "q": "When does input port queueing occur?",
                        "options": [
                              "When the output link is slower than the fabric",
                              "When the switching fabric is slower than the combined input port rate",
                              "When the forwarding table lookup succeeds",
                              "When a packet is fragmented"
                        ],
                        "answer": 1,
                        "explain": "If the fabric cannot absorb packets as fast as the inputs deliver them, they queue at the inputs. The reverse mismatch - fabric faster than the outgoing link - causes output queueing."
                  },
                  {
                        "q": "Why is output port queueing necessary even in a well-designed router?",
                        "options": [
                              "Because the forwarding table is slow",
                              "Because several inputs can send to one output faster than that output link can transmit",
                              "Because packets must be reordered",
                              "Because checksums must be recomputed"
                        ],
                        "answer": 1,
                        "explain": "N inputs can all target the same output simultaneously, delivering at up to N times the link rate. Buffering absorbs that burst, and overflow is where loss occurs."
                  },
                  {
                        "q": "The drop policy at an output port decides what?",
                        "options": [
                              "Which route a packet takes",
                              "Which datagram to discard when no free buffer remains",
                              "Whether to fragment a datagram",
                              "Which interface to use"
                        ],
                        "answer": 1,
                        "explain": "It is a buffer-management decision made only under overflow. Which queued packet transmits next is a separate question answered by the scheduling discipline."
                  },
                  {
                        "q": "Why does priority scheduling connect to network neutrality debates?",
                        "options": [
                              "Because it changes IP addresses",
                              "Because it lets an operator give some traffic better service than other traffic",
                              "Because it requires encryption",
                              "Because it drops all low-priority packets"
                        ],
                        "answer": 1,
                        "explain": "The mechanism that makes differentiated service technically possible is the same one that makes discrimination between services possible, which is the substance of the policy argument."
                  },
                  {
                        "q": "What does the Internet's best-effort service model guarantee?",
                        "options": [
                              "Bounded delay",
                              "Bounded loss",
                              "Minimum bandwidth",
                              "None of these"
                        ],
                        "answer": 3,
                        "explain": "Best effort promises nothing about delivery, delay, jitter, or bandwidth. It succeeded through simplicity, generous provisioning, CDNs, and adaptive applications rather than guarantees."
                  },
                  {
                        "q": "IPv4 addresses are how many bits, and IPv6 addresses how many?",
                        "options": [
                              "32 and 64",
                              "32 and 128",
                              "64 and 128",
                              "128 and 256"
                        ],
                        "answer": 1,
                        "explain": "IPv4 uses 32 bits and IPv6 uses 128. IPv6 also fixes the base header length and moves options into extension headers."
                  },
                  {
                        "q": "Which statement about IPv6 fragmentation is correct?",
                        "options": [
                              "Routers fragment as needed, as in IPv4",
                              "Only the source may fragment; routers do not",
                              "Fragmentation is impossible in IPv6",
                              "Fragmentation happens at the link layer only"
                        ],
                        "answer": 1,
                        "explain": "Removing router fragmentation simplifies the fast path. A source that sends an oversized packet learns via path MTU discovery and must fragment itself."
                  },
                  {
                        "q": "What does DHCP provide to a joining host?",
                        "options": [
                              "Only an IP address",
                              "An IP address, subnet mask, default gateway, and DNS server address",
                              "A MAC address",
                              "A domain name"
                        ],
                        "answer": 1,
                        "explain": "The lease carries the full set of configuration a host needs to communicate off-subnet. MAC addresses are burned into the interface, not assigned by DHCP."
                  },
                  {
                        "q": "What does NAT rewrite?",
                        "options": [
                              "Only the destination IP address",
                              "Source address and usually source port, so many private hosts share one public address",
                              "The TTL field",
                              "The transport protocol number"
                        ],
                        "answer": 1,
                        "explain": "Rewriting the port as well is what lets one public address multiplex many internal hosts. The side effect is that inbound connections cannot reach an internal host without explicit configuration."
                  },
                  {
                        "q": "What notation does CIDR use to express a network prefix?",
                        "options": [
                              "A class letter such as A, B, or C",
                              "A slash followed by the prefix length, such as /24",
                              "A colon-separated hexadecimal string",
                              "A dotted-decimal wildcard"
                        ],
                        "answer": 1,
                        "explain": "CIDR replaced the rigid class system with an explicit prefix length, which is what allows address blocks to be sized to actual need rather than to fixed class boundaries."
                  },
                  {
                        "q": "Generalized forwarding differs from traditional IP forwarding how?",
                        "options": [
                              "It matches on any chosen set of header fields, not just the destination IP address",
                              "It uses longer prefixes",
                              "It operates at the link layer",
                              "It requires IPv6"
                        ],
                        "answer": 0,
                        "explain": "Traditional forwarding matches destination address alone. Generalized forwarding, as in OpenFlow, matches arbitrary header combinations and applies an associated action."
                  },
                  {
                        "q": "How many usable host addresses does a /30 subnet provide?",
                        "options": [
                              "1",
                              "2",
                              "4",
                              "6"
                        ],
                        "answer": 1,
                        "explain": "A /30 has 4 addresses total; the network and broadcast addresses are reserved, leaving 2 usable. This is the standard size for a point-to-point router link."
                  },
                  {
                        "q": "A /26 subnet provides how many usable host addresses?",
                        "options": [
                              "30",
                              "62",
                              "64",
                              "126"
                        ],
                        "answer": 1,
                        "explain": "2^(32-26) = 64 total addresses, minus the network and broadcast addresses, gives 62 usable."
                  },
                  {
                        "q": "What does ICMP carry?",
                        "options": [
                              "Application data",
                              "Network-layer control and error information, inside IP datagrams",
                              "Link-layer frames",
                              "Routing table updates for BGP"
                        ],
                        "answer": 1,
                        "explain": "ICMP messages report conditions such as unreachable destinations and expired TTLs. They travel inside IP datagrams, which is why ICMP is described as sitting just above IP."
                  },
                  {
                        "q": "Scenario: a router's input queues grow steadily while its output links are lightly loaded. What is the likely cause?",
                        "options": [
                              "The output link rate is too low",
                              "The switching fabric is slower than the combined input rate",
                              "The forwarding table is empty",
                              "Propagation delay is too high"
                        ],
                        "answer": 1,
                        "explain": "Backlog at the inputs with idle outputs points at the fabric, not the links. If the links were the bottleneck the queues would build at the output ports instead."
                  },
                  {
                        "q": "Scenario: two packets sit at different input ports, both destined for output port 3, and behind one of them sits a packet for the idle output port 5. What happens?",
                        "options": [
                              "Both output ports are used simultaneously",
                              "The packet for port 5 waits behind the blocked packet - head-of-line blocking",
                              "The router drops the packet for port 5",
                              "The router reorders the queue automatically"
                        ],
                        "answer": 1,
                        "explain": "Only one packet can be switched to port 3, and simple FIFO input queueing gives the packet behind it no way past. Port 5 sits idle despite having work available."
                  },
                  {
                        "q": "Scenario: an ISP wants a customer's traffic to two different destinations to take different paths even though both share a destination prefix. Which capability is required?",
                        "options": [
                              "Longest prefix matching",
                              "Generalized forwarding that matches on fields beyond the destination address",
                              "A larger switching fabric",
                              "IPv6 extension headers"
                        ],
                        "answer": 1,
                        "explain": "Destination-based forwarding cannot express this, because both packets match the same prefix. Matching on source address or other fields, as OpenFlow and MPLS allow, can."
                  },
                  {
                        "q": "Scenario: a home router lets internal hosts browse the web but an external host cannot initiate a connection to an internal machine. Which mechanism explains this?",
                        "options": [
                              "Longest prefix matching",
                              "NAT, which has no mapping for an unsolicited inbound connection",
                              "The best-effort service model",
                              "IPv6 fragmentation rules"
                        ],
                        "answer": 1,
                        "explain": "NAT creates its address and port mapping when an internal host sends outward. An unsolicited inbound packet matches no mapping, so the router has no internal host to deliver it to."
                  },
                  {
                        "q": "Scenario: you must reduce loss at a congested output port without upgrading the link. Which lever actually applies?",
                        "options": [
                              "Increasing the input port lookup speed",
                              "Adjusting buffer size, drop policy, and scheduling discipline",
                              "Shortening the forwarding table",
                              "Disabling the checksum"
                        ],
                        "answer": 1,
                        "explain": "Loss at an output port is a buffering and scheduling problem. Faster lookups or smaller tables address input-side performance and do nothing for output congestion."
                  }
            ]
      },
      {
            "title": "3.1 Practice: Routing Algorithms and Intra-AS Routing",
            "description": "30-item practice test covering routing algorithm classification, Dijkstra, Bellman-Ford, distance vector behaviour, convergence, and OSPF.",
            "questions": [
                  {
                        "q": "On which two axes are routing algorithms classified?",
                        "options": [
                              "Wired versus wireless, and fast versus slow",
                              "Global versus decentralized information, and static versus dynamic response",
                              "Intra-AS versus inter-AS, and IPv4 versus IPv6",
                              "Hardware versus software, and open versus proprietary"
                        ],
                        "answer": 1,
                        "explain": "Information scope and responsiveness are independent. Link-state is global; distance vector is decentralized; either can be static or dynamic in how quickly routes change."
                  },
                  {
                        "q": "In link-state routing, what does each router know?",
                        "options": [
                              "Only the cost to its immediate neighbours",
                              "The complete network topology and all link costs",
                              "Only the next hop for each destination",
                              "The AS-PATH to every destination"
                        ],
                        "answer": 1,
                        "explain": "Link-state floods every router's local link costs to every other router, so all of them build an identical map and compute independently from it."
                  },
                  {
                        "q": "Dijkstra's algorithm in its naive form has what time complexity for n nodes?",
                        "options": [
                              "O(n)",
                              "O(n log n)",
                              "O(n squared)",
                              "O(2^n)"
                        ],
                        "answer": 2,
                        "explain": "Each of n iterations scans all remaining nodes, giving n(n+1)/2 comparisons - O(n squared). A priority queue implementation reduces this to O(n log n)."
                  },
                  {
                        "q": "What is the message complexity of link-state routing?",
                        "options": [
                              "O(n)",
                              "O(n squared)",
                              "O(log n)",
                              "O(1)"
                        ],
                        "answer": 1,
                        "explain": "Each of n routers must broadcast its link state to all others, and each broadcast crosses O(n) links, giving O(n squared) overall."
                  },
                  {
                        "q": "What does D(v) represent in Dijkstra's algorithm?",
                        "options": [
                              "The direct link cost from the source to v",
                              "The current estimate of the least-cost path from the source to v",
                              "The number of hops to v",
                              "The predecessor of v"
                        ],
                        "answer": 1,
                        "explain": "D(v) is a running estimate that is refined each iteration. The direct link cost is written c(x,v), and the predecessor is tracked separately as p(v)."
                  },
                  {
                        "q": "What does N' hold in Dijkstra's algorithm?",
                        "options": [
                              "All nodes in the network",
                              "The set of nodes whose least-cost path is definitively known",
                              "The set of unreachable nodes",
                              "The neighbours of the source"
                        ],
                        "answer": 1,
                        "explain": "N' grows by one node per iteration. Once a node enters N', its least-cost path is final and is never revised."
                  },
                  {
                        "q": "State the Bellman-Ford equation.",
                        "options": [
                              "Dx(y) = c(x,y) only",
                              "Dx(y) = min over neighbours v of { c(x,v) + Dv(y) }",
                              "Dx(y) = sum over all v of c(x,v)",
                              "Dx(y) = max over neighbours v of { c(x,v) }"
                        ],
                        "answer": 1,
                        "explain": "The cost to y is the cheapest combination of reaching a neighbour and that neighbour's own cost to y. Taking the minimum over all neighbours is what makes it a shortest-path computation."
                  },
                  {
                        "q": "Node u has neighbours with c(u,v)=2, c(u,x)=1, c(u,w)=5, and they advertise Dv(z)=5, Dx(z)=3, Dw(z)=3. What is Du(z)?",
                        "options": [
                              "3",
                              "4",
                              "7",
                              "8"
                        ],
                        "answer": 1,
                        "explain": "min{2+5, 1+3, 5+3} = min{7, 4, 8} = 4. Note the cheapest direct link (to x, cost 1) also wins here, but that is not guaranteed in general."
                  },
                  {
                        "q": "In the previous computation, which node becomes u's next hop toward z?",
                        "options": [
                              "v",
                              "x",
                              "w",
                              "z directly"
                        ],
                        "answer": 1,
                        "explain": "The neighbour achieving the minimum is the next hop. The next hop falls out of the same computation as the cost - it is never calculated separately."
                  },
                  {
                        "q": "Distance vector is described as self-stopping. What does that mean?",
                        "options": [
                              "It halts after a fixed number of rounds",
                              "A router notifies its neighbours only when its own distance vector changes, so messages cease once routes converge",
                              "It stops when a link fails",
                              "It requires a central coordinator to stop it"
                        ],
                        "answer": 1,
                        "explain": "No change means no notification, and no notification means neighbours take no action. Traffic therefore dies away naturally once the network is stable."
                  },
                  {
                        "q": "What triggers a distance vector router to recompute?",
                        "options": [
                              "A fixed timer only",
                              "A local link cost change or an update message from a neighbour",
                              "A command from the network administrator",
                              "The arrival of any data packet"
                        ],
                        "answer": 1,
                        "explain": "The algorithm is event-driven and asynchronous - routers do not act in lockstep on a global clock, which is what makes it practical in a real network."
                  },
                  {
                        "q": "How far can one node's state influence others after k iterations of distance vector?",
                        "options": [
                              "The entire network immediately",
                              "Up to k hops away",
                              "Only its direct neighbours, regardless of k",
                              "It never influences other nodes"
                        ],
                        "answer": 1,
                        "explain": "Information diffuses one hop per round. That property is exactly why convergence time depends on network diameter."
                  },
                  {
                        "q": "What does 'good news travels fast' describe?",
                        "options": [
                              "A link cost decrease propagates through the network in a few rounds",
                              "New routers join quickly",
                              "Link-state floods complete instantly",
                              "Acknowledgments arrive before data"
                        ],
                        "answer": 0,
                        "explain": "A cost decrease is adopted immediately by each neighbour in turn. Cost increases behave very differently, which is the 'bad news travels slow' counterpart."
                  },
                  {
                        "q": "What is the count-to-infinity problem?",
                        "options": [
                              "A routing table growing without bound",
                              "Two routers repeatedly raising their cost estimates through each other after a link cost increase",
                              "An infinite loop in Dijkstra's algorithm",
                              "A checksum that never matches"
                        ],
                        "answer": 1,
                        "explain": "Each router reasons correctly from information that is already stale, so estimates climb one step at a time. Neither router knows the other's path runs through itself."
                  },
                  {
                        "q": "The x-y link cost rises from 4 to 60 while y-z is 1 and x-z is 50. What does y compute first?",
                        "options": [
                              "60 via the direct link",
                              "6 via z, because z advertised a cost of 5 to x",
                              "50 via z",
                              "Infinity"
                        ],
                        "answer": 1,
                        "explain": "y takes the minimum of 60 direct and 1 + 5 via z, choosing 6 - not realising z's path to x runs back through y. That is the first step of count-to-infinity."
                  },
                  {
                        "q": "What is poisoned reverse?",
                        "options": [
                              "Encrypting routing updates",
                              "If y routes to x through z, y advertises to z that its distance to x is infinity",
                              "Dropping all updates from a suspect router",
                              "Reversing the direction of a link"
                        ],
                        "answer": 1,
                        "explain": "The lie stops z routing back through y, which fixes two-node loops. It does not fix loops involving three or more routers."
                  },
                  {
                        "q": "When can link-state routing oscillate?",
                        "options": [
                              "Whenever a link fails",
                              "When link costs depend on the traffic those links carry, so all routers react to the same measurement simultaneously",
                              "When the network has more than 100 routers",
                              "When Dijkstra's algorithm is implemented with a priority queue"
                        ],
                        "answer": 1,
                        "explain": "Load-dependent costs create a feedback loop: everyone shifts to the newly cheap link, making it expensive, and everyone shifts back. Static costs avoid this."
                  },
                  {
                        "q": "How does a malfunctioning distance vector router fail differently from a link-state router?",
                        "options": [
                              "It cannot fail differently",
                              "It can advertise cheap paths to everywhere and black-hole traffic, and the error propagates through other routers' tables",
                              "It only affects its own forwarding table",
                              "It causes Dijkstra to run twice"
                        ],
                        "answer": 1,
                        "explain": "A link-state router can only misreport its own link costs. A distance vector router's advertisements are trusted and re-advertised, so a single bad claim spreads network-wide."
                  },
                  {
                        "q": "OSPF floods its link-state advertisements over what?",
                        "options": [
                              "TCP",
                              "UDP",
                              "Directly over IP",
                              "Ethernet only"
                        ],
                        "answer": 2,
                        "explain": "OSPF messages ride directly in IP datagrams rather than using a transport protocol, which is unusual and worth remembering."
                  },
                  {
                        "q": "Why does OSPF authenticate its messages?",
                        "options": [
                              "To compress them",
                              "To prevent a malicious host from injecting false link-state information",
                              "To speed up Dijkstra's algorithm",
                              "To support IPv6"
                        ],
                        "answer": 1,
                        "explain": "Because every router acts on flooded advertisements, an unauthenticated injection could reshape routing across the whole area. Authentication closes that hole."
                  },
                  {
                        "q": "In hierarchical OSPF, what does an area border router do?",
                        "options": [
                              "Connects the AS to other autonomous systems",
                              "Summarises distances to destinations in its own area and advertises them into the backbone",
                              "Runs OSPF only within the backbone",
                              "Floods advertisements to every router in the AS"
                        ],
                        "answer": 1,
                        "explain": "Summarisation is what keeps advertisements from crossing area boundaries. A boundary router connects to other ASes, and a backbone router runs OSPF limited to area 0."
                  },
                  {
                        "q": "Why does OSPF use areas at all?",
                        "options": [
                              "To support multiple IP versions",
                              "To limit flooding scope and reduce routing table size in large networks",
                              "To allow multiple routing protocols to run at once",
                              "To encrypt advertisements"
                        ],
                        "answer": 1,
                        "explain": "Link-state advertisements are flooded only within an area, so topology churn in one area does not force recomputation everywhere. That is the scalability argument for hierarchy."
                  },
                  {
                        "q": "Which intra-AS routing protocol is distance-vector based and became open in 2013?",
                        "options": [
                              "OSPF",
                              "IS-IS",
                              "EIGRP",
                              "BGP"
                        ],
                        "answer": 2,
                        "explain": "EIGRP was Cisco-proprietary for decades before RFC 7868. OSPF and IS-IS are link-state, and BGP is inter-AS."
                  },
                  {
                        "q": "Which protocol is essentially equivalent to OSPF but is an ISO standard rather than an RFC standard?",
                        "options": [
                              "RIP",
                              "IS-IS",
                              "EIGRP",
                              "BGP"
                        ],
                        "answer": 1,
                        "explain": "IS-IS is link-state and functionally comparable to OSPF. RIP is classic distance vector and is no longer widely used."
                  },
                  {
                        "q": "Why does convergence matter?",
                        "options": [
                              "It determines the maximum packet size",
                              "Stale or inconsistent routing information can cause loops, black holes, or poor paths",
                              "It sets the link bandwidth",
                              "It controls the TTL value"
                        ],
                        "answer": 1,
                        "explain": "During convergence different routers hold different views. Forwarding decisions made from inconsistent views can send packets in circles or into a discard."
                  },
                  {
                        "q": "Scenario: after a link failure, packets loop between two routers for several seconds before traffic recovers. What is happening?",
                        "options": [
                              "The checksum is failing",
                              "The routers have not yet converged and are forwarding based on inconsistent views",
                              "The link came back up",
                              "The MTU is too small"
                        ],
                        "answer": 1,
                        "explain": "Transient loops are the classic symptom of incomplete convergence. The TTL field is what eventually stops the packets from circulating forever."
                  },
                  {
                        "q": "Scenario: a network operator sets all link costs to 1. What does the routing algorithm then compute?",
                        "options": [
                              "The path with the highest bandwidth",
                              "The minimum-hop path",
                              "The path with the lowest delay",
                              "A random path"
                        ],
                        "answer": 1,
                        "explain": "With uniform costs, minimising total cost is identical to minimising hop count. Operators choose costs deliberately - often inversely related to bandwidth - to get different behaviour."
                  },
                  {
                        "q": "Scenario: a network shows persistent routing instability, and costs are configured proportional to current link utilisation. What should you suspect?",
                        "options": [
                              "Count-to-infinity",
                              "Load-dependent link costs causing route oscillation",
                              "A failing checksum",
                              "An MTU mismatch"
                        ],
                        "answer": 1,
                        "explain": "Traffic-sensitive costs create the feedback loop that makes link-state routing oscillate. Fixing it usually means damping the cost updates or using static costs."
                  },
                  {
                        "q": "Scenario: a compromised router advertises a distance of 1 to every prefix in the network. Which routing family is more dangerous here, and why?",
                        "options": [
                              "Link-state, because the advertisement is flooded",
                              "Distance vector, because neighbours accept and re-advertise the claim, spreading the black hole",
                              "Neither - both are equally affected",
                              "Link-state, because Dijkstra trusts all inputs"
                        ],
                        "answer": 1,
                        "explain": "In link-state the router can only lie about its own attached links. In distance vector its distance claims are propagated onward by every router that believes them."
                  },
                  {
                        "q": "Scenario: you need routing to converge quickly in a very large enterprise. Which design choice most directly helps?",
                        "options": [
                              "Using a single flat OSPF area",
                              "Introducing OSPF areas so flooding and recomputation stay local",
                              "Increasing all link costs",
                              "Disabling authentication"
                        ],
                        "answer": 1,
                        "explain": "Hierarchy bounds the blast radius of any topology change. A single flat area forces every router to reflood and recompute for every change anywhere."
                  }
            ]
      },
      {
            "title": "3.2 Practice: ISP Routing and BGP",
            "description": "30-item practice test covering autonomous systems, BGP messages and attributes, route selection, policy, SDN, OpenFlow, and ICMP.",
            "questions": [
                  {
                        "q": "Why does the Internet divide routers into autonomous systems?",
                        "options": [
                              "To support IPv6",
                              "To handle scale and to give each network administrative control over its own routing",
                              "To reduce packet size",
                              "To eliminate the need for forwarding tables"
                        ],
                        "answer": 1,
                        "explain": "Billions of destinations cannot fit in one flat routing table, and each operator wants control over its own network. Both problems are solved by aggregating routers into ASes."
                  },
                  {
                        "q": "What must be true of all routers within a single autonomous system?",
                        "options": [
                              "They must run the same intra-domain routing protocol",
                              "They must be from the same vendor",
                              "They must share one IP prefix",
                              "They must run BGP"
                        ],
                        "answer": 0,
                        "explain": "Consistency within the AS requires one intra-domain protocol. Different ASes may run entirely different ones, and only gateway routers need BGP."
                  },
                  {
                        "q": "What is a gateway router?",
                        "options": [
                              "Any router with more than four interfaces",
                              "A router at the edge of its AS with links to routers in other ASes",
                              "The router with the lowest IP address",
                              "A router that performs NAT"
                        ],
                        "answer": 1,
                        "explain": "Gateway routers perform inter-domain routing in addition to intra-domain routing, which is why they run both eBGP and iBGP."
                  },
                  {
                        "q": "BGP is described as a path vector protocol. What does it advertise?",
                        "options": [
                              "A cost metric only",
                              "A prefix plus attributes, including the list of ASes the advertisement has traversed",
                              "The complete network topology",
                              "The next hop only"
                        ],
                        "answer": 1,
                        "explain": "Carrying the full AS-PATH allows loop detection - a router that sees its own AS in the path rejects the route - and enables policy decisions based on who the route crosses."
                  },
                  {
                        "q": "Over what does a BGP session run?",
                        "options": [
                              "UDP",
                              "A semi-permanent TCP connection",
                              "Directly over IP, like OSPF",
                              "Ethernet"
                        ],
                        "answer": 1,
                        "explain": "TCP gives BGP reliable, ordered delivery of updates without BGP needing its own retransmission machinery. OSPF is the protocol that runs directly over IP."
                  },
                  {
                        "q": "Which BGP message opens a session and authenticates the sending peer?",
                        "options": [
                              "OPEN",
                              "UPDATE",
                              "KEEPALIVE",
                              "NOTIFICATION"
                        ],
                        "answer": 0,
                        "explain": "OPEN establishes the session. UPDATE carries route changes, KEEPALIVE holds the session up and acknowledges OPEN, and NOTIFICATION reports errors and closes."
                  },
                  {
                        "q": "Which BGP message both advertises a new path and withdraws an old one?",
                        "options": [
                              "OPEN",
                              "UPDATE",
                              "KEEPALIVE",
                              "NOTIFICATION"
                        ],
                        "answer": 1,
                        "explain": "UPDATE is the workhorse message. A single UPDATE can announce reachability and withdraw prefixes that are no longer reachable."
                  },
                  {
                        "q": "What is the purpose of the BGP KEEPALIVE message?",
                        "options": [
                              "To acknowledge every data packet",
                              "To hold the session open when there are no updates, and to acknowledge an OPEN request",
                              "To flood link-state information",
                              "To reset the connection after an error"
                        ],
                        "answer": 1,
                        "explain": "Without periodic keepalives, a silent session could not be distinguished from a failed peer. NOTIFICATION is the message used to close after an error."
                  },
                  {
                        "q": "What is the difference between eBGP and iBGP?",
                        "options": [
                              "eBGP uses UDP and iBGP uses TCP",
                              "eBGP exchanges routes between ASes; iBGP distributes them among routers inside one AS",
                              "eBGP is for IPv4 and iBGP is for IPv6",
                              "iBGP replaces the intra-domain routing protocol"
                        ],
                        "answer": 1,
                        "explain": "A gateway router typically runs both. iBGP does not replace OSPF or IS-IS - it distributes externally learned routes while the IGP still computes internal paths."
                  },
                  {
                        "q": "What does the NEXT-HOP attribute indicate?",
                        "options": [
                              "The next AS on the path",
                              "The specific internal-AS router leading to the next-hop AS",
                              "The final destination host",
                              "The cost of the path"
                        ],
                        "answer": 1,
                        "explain": "NEXT-HOP names a router address, not an AS. AS-PATH is the attribute that lists autonomous systems."
                  },
                  {
                        "q": "In BGP route selection, which criterion is applied first?",
                        "options": [
                              "Shortest AS-PATH",
                              "Highest local preference",
                              "Closest NEXT-HOP",
                              "Lowest MED"
                        ],
                        "answer": 1,
                        "explain": "Local preference comes first because it encodes the operator's policy. Only when it ties does path length matter, which is why a longer AS-PATH can still win."
                  },
                  {
                        "q": "What is the correct BGP route selection order?",
                        "options": [
                              "Shortest AS-PATH, local preference, closest NEXT-HOP, tiebreak",
                              "Local preference, shortest AS-PATH, closest NEXT-HOP, tiebreak",
                              "Closest NEXT-HOP, local preference, shortest AS-PATH, tiebreak",
                              "Tiebreak, local preference, shortest AS-PATH, closest NEXT-HOP"
                        ],
                        "answer": 1,
                        "explain": "Policy first, then path length, then internal cost, then further tiebreakers. Remembering that policy outranks distance is the key insight."
                  },
                  {
                        "q": "What is hot potato routing?",
                        "options": [
                              "Choosing the path with fewest AS hops",
                              "Choosing the local gateway with the least intra-domain cost, regardless of the remaining external path",
                              "Dropping packets when links are congested",
                              "Routing all traffic through a single exit"
                        ],
                        "answer": 1,
                        "explain": "The AS minimises its own carrying cost by handing traffic off as quickly as possible, even if the resulting end-to-end path is longer."
                  },
                  {
                        "q": "Router 2d can reach X via gateway 2a at intra-domain cost 112 or via 2c at cost 263. Under hot potato routing, which does it choose?",
                        "options": [
                              "2c, because it may have a shorter AS-PATH",
                              "2a, because its intra-domain cost is lower",
                              "Whichever has the higher local preference",
                              "Both, load-balanced"
                        ],
                        "answer": 1,
                        "explain": "Hot potato compares only the internal cost to reach the exit. 112 beats 263, so 2a is chosen even if the external path from 2a is longer."
                  },
                  {
                        "q": "What does an import policy do?",
                        "options": [
                              "Decides whether to accept a received route advertisement",
                              "Decides which routes to advertise onward",
                              "Sets the AS-PATH length",
                              "Encrypts the BGP session"
                        ],
                        "answer": 0,
                        "explain": "Import policy filters what comes in - for example, never route through a particular AS. Export policy governs what is advertised outward to neighbours."
                  },
                  {
                        "q": "Why does inter-AS routing prioritise policy while intra-AS routing prioritises performance?",
                        "options": [
                              "Because inter-AS links are slower",
                              "Because a single administrator controls one AS, but between ASes business relationships and control matter more",
                              "Because BGP cannot measure performance",
                              "Because intra-AS routing has no policy mechanism"
                        ],
                        "answer": 1,
                        "explain": "Within one AS there is no conflict of interest, so optimising cost is sensible. Between ASes, who carries whose traffic is a commercial question that outranks path length."
                  },
                  {
                        "q": "Which historical approach did the network layer use before SDN?",
                        "options": [
                              "Centralised control from one server",
                              "Distributed per-router control, with each router running standard protocols in a proprietary OS",
                              "No control plane at all",
                              "Control from the application layer"
                        ],
                        "answer": 1,
                        "explain": "Monolithic routers each ran their own implementation of IP, OSPF, BGP and so on, plus separate middleboxes for firewalling, load balancing, and NAT."
                  },
                  {
                        "q": "What is the main argument for a logically centralised control plane?",
                        "options": [
                              "It reduces the number of routers needed",
                              "Easier management, table-based programmability, and an open non-proprietary implementation",
                              "It eliminates the need for forwarding tables",
                              "It removes the need for IP addresses"
                        ],
                        "answer": 1,
                        "explain": "Computing tables centrally is easier than deriving them from a distributed algorithm, and an open control plane invites innovation that closed router operating systems did not."
                  },
                  {
                        "q": "Which is the southbound protocol between an SDN controller and its switches?",
                        "options": [
                              "A RESTful API",
                              "OpenFlow",
                              "BGP",
                              "SNMP"
                        ],
                        "answer": 1,
                        "explain": "OpenFlow runs southbound over TCP with optional encryption. The northbound interface to network-control applications is commonly a RESTful API."
                  },
                  {
                        "q": "How many classes of OpenFlow messages are there?",
                        "options": [
                              "Two",
                              "Three: controller-to-switch, asynchronous, and symmetric",
                              "Four",
                              "Five"
                        ],
                        "answer": 1,
                        "explain": "Controller-to-switch messages configure, asynchronous messages report switch events upward, and symmetric messages handle miscellaneous exchanges in either direction."
                  },
                  {
                        "q": "ICMP messages are carried inside what?",
                        "options": [
                              "TCP segments",
                              "UDP datagrams",
                              "IP datagrams",
                              "Ethernet frames directly"
                        ],
                        "answer": 2,
                        "explain": "This is why ICMP is described as sitting just above IP, even though it is a network-layer protocol rather than a transport-layer one."
                  },
                  {
                        "q": "An ICMP message contains a type, a code, and what else?",
                        "options": [
                              "The complete original datagram",
                              "The first 8 bytes of the IP datagram that caused the error",
                              "The routing table",
                              "The sender's MAC address"
                        ],
                        "answer": 1,
                        "explain": "Those 8 bytes include the transport header's port numbers, which is what lets the originating host match the error to the right connection."
                  },
                  {
                        "q": "Which ICMP type and code pair means 'TTL expired'?",
                        "options": [
                              "Type 3 code 3",
                              "Type 8 code 0",
                              "Type 11 code 0",
                              "Type 0 code 0"
                        ],
                        "answer": 2,
                        "explain": "Type 11 code 0 is returned by each router that decrements the TTL to zero, which is how traceroute discovers hops. Type 3 code 3 is port unreachable; type 8 and type 0 are echo request and reply."
                  },
                  {
                        "q": "How does traceroute know it has reached the destination?",
                        "options": [
                              "The TTL reaches 255",
                              "The destination returns ICMP type 3 code 3, port unreachable",
                              "The router stops replying",
                              "The round-trip time drops to zero"
                        ],
                        "answer": 1,
                        "explain": "Traceroute deliberately targets an unlikely port, so the destination host reports port unreachable rather than TTL expired. That change of message type is the stopping condition."
                  },
                  {
                        "q": "How does traceroute discover each successive router?",
                        "options": [
                              "By reading the routing tables directly",
                              "By sending datagrams with TTL 1, then 2, then 3, and collecting the TTL-expired replies",
                              "By broadcasting to every router",
                              "By querying DNS for router names"
                        ],
                        "answer": 1,
                        "explain": "Each TTL value causes exactly one router - the nth along the path - to discard the datagram and report back, revealing its address and round-trip time."
                  },
                  {
                        "q": "Scenario: AS1 receives two advertisements for prefix X, one with AS-PATH {AS3} and one with {AS2, AS3}, and both have equal local preference. Which is chosen?",
                        "options": [
                              "{AS2, AS3}, because it has more redundancy",
                              "{AS3}, because it has the shorter AS-PATH",
                              "Whichever arrived first",
                              "Both, load-balanced"
                        ],
                        "answer": 1,
                        "explain": "With local preference tied, the tiebreaker is shortest AS-PATH. If local preference differed, the higher-preference route would win regardless of path length."
                  },
                  {
                        "q": "Scenario: an operator wants all traffic to a destination to leave through a specific, more expensive provider for contractual reasons. Which attribute should they set?",
                        "options": [
                              "AS-PATH",
                              "Local preference",
                              "NEXT-HOP",
                              "MED"
                        ],
                        "answer": 1,
                        "explain": "Local preference is evaluated first and is set locally, so it overrides shorter AS-PATHs. That is precisely the mechanism for expressing a commercial preference."
                  },
                  {
                        "q": "Scenario: an AS advertises to its neighbours only the prefixes of its own customers, not those learned from its other providers. What is this an example of?",
                        "options": [
                              "Hot potato routing",
                              "Export policy implementing a business relationship",
                              "Route aggregation",
                              "Loop detection"
                        ],
                        "answer": 1,
                        "explain": "Refusing to carry provider-to-provider traffic for free is a commercial decision expressed as an export filter. It is a common and expected BGP policy."
                  },
                  {
                        "q": "Scenario: traceroute output shows one hop with a much larger round-trip time than both its neighbours, yet throughput is fine. What is the likely explanation?",
                        "options": [
                              "The link at that hop is failing",
                              "That router deprioritises generating ICMP replies, so its reported time is not the forwarding delay",
                              "The MTU is too small at that hop",
                              "The packet was fragmented"
                        ],
                        "answer": 1,
                        "explain": "Traceroute measures how fast a router answers control messages, which routers often handle on a slow path. A single elevated hop that does not raise subsequent hops' times is a measurement artefact."
                  },
                  {
                        "q": "Scenario: an operator wants to reprogram forwarding behaviour across many switches from one place without touching each device's CLI. Which architecture supports this directly?",
                        "options": [
                              "Per-router distributed control",
                              "SDN with a centralised controller and a southbound protocol such as OpenFlow",
                              "Classic distance vector routing",
                              "Static routing"
                        ],
                        "answer": 1,
                        "explain": "Computing tables centrally and pushing them down is exactly the SDN model. Distributed control requires the behaviour to emerge from a protocol running on every device."
                  }
            ]
      },
      {
            "title": "3.3 Practice: Network Management, SDN, SNMP, NETCONF, and YANG",
            "description": "30-item practice test covering management architecture, SNMP messages and modes, NETCONF operations, YANG modelling, and SDN controller structure.",
            "questions": [
                  {
                        "q": "Which components make up a network management system?",
                        "options": [
                              "Only the managing server",
                              "A managing server, managed devices with agents and data, and a management protocol",
                              "Routers and switches only",
                              "A firewall and an IDS"
                        ],
                        "answer": 1,
                        "explain": "The managing server queries and configures; each managed device runs an agent holding its state; and a protocol connects them. Human managers sit in the loop above the server."
                  },
                  {
                        "q": "What are the three operator approaches to network management, in increasing order of abstraction?",
                        "options": [
                              "SNMP, CLI, NETCONF",
                              "CLI, SNMP with MIBs, NETCONF with YANG",
                              "NETCONF, SNMP, CLI",
                              "YANG, MIB, OID"
                        ],
                        "answer": 1,
                        "explain": "CLI is per-device and free-form, SNMP works on individual MIB variables, and NETCONF with YANG addresses whole-network, model-driven configuration."
                  },
                  {
                        "q": "What does 'MIB' stand for and contain?",
                        "options": [
                              "Managed Interface Block, containing port settings",
                              "Management Information Base, the structured collection of managed objects on a device",
                              "Multi-Interface Bridge, a switching component",
                              "Message Integrity Block, a security field"
                        ],
                        "answer": 1,
                        "explain": "The MIB is the data model SNMP operates on. Individual objects within it are addressed by object identifiers, or OIDs."
                  },
                  {
                        "q": "Which SNMP message retrieves the value of a specific managed object?",
                        "options": [
                              "GetRequest",
                              "SetRequest",
                              "Trap",
                              "Response"
                        ],
                        "answer": 0,
                        "explain": "GetRequest asks for one named object. SetRequest writes a value, Trap is an unsolicited report from the agent, and Response is what the agent returns."
                  },
                  {
                        "q": "Which SNMP message walks to the next item in a list of managed objects?",
                        "options": [
                              "GetRequest",
                              "GetNextRequest",
                              "SetRequest",
                              "NOTIFICATION"
                        ],
                        "answer": 1,
                        "explain": "GetNextRequest lets a manager traverse a MIB without knowing every OID in advance. GetBulkRequest extends this to whole blocks at once."
                  },
                  {
                        "q": "Why does GetBulkRequest exist?",
                        "options": [
                              "To write many values at once",
                              "To retrieve a whole block of managed objects in one exchange, making large MIB retrievals practical",
                              "To authenticate the manager",
                              "To reset a device"
                        ],
                        "answer": 1,
                        "explain": "Walking a large table one GetNextRequest at a time is prohibitively slow. GetBulkRequest amortises the round trips."
                  },
                  {
                        "q": "Which SNMP message is sent by an agent without being asked?",
                        "options": [
                              "GetRequest",
                              "Response",
                              "Trap",
                              "SetRequest"
                        ],
                        "answer": 2,
                        "explain": "A trap informs the manager of an exceptional event as it happens, rather than waiting for the next poll. Everything else in SNMP is manager-initiated."
                  },
                  {
                        "q": "What are the two ways SNMP conveys information?",
                        "options": [
                              "Push and pull",
                              "Request-response mode and trap mode",
                              "Unicast and multicast",
                              "Synchronous and asynchronous encryption"
                        ],
                        "answer": 1,
                        "explain": "In request-response the manager asks and the agent answers; in trap mode the agent reports unprompted. Both operate between the same managing server and agents."
                  },
                  {
                        "q": "What is the trade-off between polling and traps?",
                        "options": [
                              "Polling is timelier; traps are more predictable",
                              "Polling has predictable load but may miss short events; traps are timely but can be lost",
                              "Traps require more bandwidth than polling",
                              "There is no meaningful difference"
                        ],
                        "answer": 1,
                        "explain": "A poll only sees state at sample time, so a brief event between polls is invisible. A trap reports immediately but, if it is lost, nothing retries it."
                  },
                  {
                        "q": "Which SNMP message type writes a value into a managed object?",
                        "options": [
                              "GetRequest",
                              "SetRequest",
                              "Trap",
                              "GetBulkRequest"
                        ],
                        "answer": 1,
                        "explain": "SetRequest is the only SNMP operation that changes device state. Its existence is why SNMP write access must be tightly controlled."
                  },
                  {
                        "q": "NETCONF messages are encoded in what format?",
                        "options": [
                              "JSON",
                              "XML",
                              "Binary TLV",
                              "Plain text key-value pairs"
                        ],
                        "answer": 1,
                        "explain": "NETCONF uses XML-encoded remote procedure calls carried over a secure, reliable transport such as TLS."
                  },
                  {
                        "q": "What paradigm does NETCONF follow?",
                        "options": [
                              "Publish-subscribe only",
                              "Remote procedure call, with rpc and rpc-reply message pairs",
                              "Peer-to-peer",
                              "Store and forward"
                        ],
                        "answer": 1,
                        "explain": "An rpc request produces an rpc-reply. NETCONF also supports notifications via subscription, but the core interaction is RPC."
                  },
                  {
                        "q": "Which NETCONF operation retrieves both configuration state and operational state data?",
                        "options": [
                              "get-config",
                              "get",
                              "edit-config",
                              "lock"
                        ],
                        "answer": 1,
                        "explain": "get-config returns configuration only; get returns configuration plus operational state. The distinction matters because the two can disagree."
                  },
                  {
                        "q": "Which NETCONF operation changes a running configuration on a device?",
                        "options": [
                              "get",
                              "get-config",
                              "edit-config",
                              "create-subscription"
                        ],
                        "answer": 2,
                        "explain": "edit-config applies the change and replies with either ok or an rpc-error with rollback. That rollback behaviour is central to safe configuration."
                  },
                  {
                        "q": "Why does NETCONF provide lock and unlock operations?",
                        "options": [
                              "To encrypt the datastore",
                              "To prevent NETCONF, SNMP, or CLI commands from other sources changing the configuration mid-edit",
                              "To reduce message size",
                              "To authenticate the operator"
                        ],
                        "answer": 1,
                        "explain": "Concurrent edits from different management channels can interleave into an inconsistent configuration. Locking the datastore serialises them."
                  },
                  {
                        "q": "Which NETCONF operation enables event notification subscriptions?",
                        "options": [
                              "get",
                              "edit-config",
                              "create-subscription",
                              "lock"
                        ],
                        "answer": 2,
                        "explain": "create-subscription registers interest, after which the device pushes notification messages. This is NETCONF's counterpart to the SNMP trap."
                  },
                  {
                        "q": "How does a NETCONF session begin?",
                        "options": [
                              "With an edit-config",
                              "With a hello capabilities exchange",
                              "With a get-config",
                              "With a lock"
                        ],
                        "answer": 1,
                        "explain": "Both sides declare what they support before any work happens, so neither attempts an operation the other cannot perform. The session ends with close-session."
                  },
                  {
                        "q": "What is YANG?",
                        "options": [
                              "A transport protocol",
                              "A data modelling language specifying the structure, syntax, and semantics of management data",
                              "An encryption algorithm",
                              "A routing protocol"
                        ],
                        "answer": 1,
                        "explain": "YANG describes the data; NETCONF moves it. Confusing the two is the most common mistake in this unit."
                  },
                  {
                        "q": "What can YANG express that a bare data format cannot?",
                        "options": [
                              "Encryption keys",
                              "Constraints among data that a valid configuration must satisfy",
                              "Routing metrics",
                              "Link bandwidth"
                        ],
                        "answer": 1,
                        "explain": "Modelling constraints lets a device reject an internally inconsistent configuration before applying it, rather than accepting it and misbehaving."
                  },
                  {
                        "q": "What can be generated from a YANG description?",
                        "options": [
                              "The device's firmware",
                              "An XML document describing the device and its capabilities",
                              "The routing table",
                              "The physical topology"
                        ],
                        "answer": 1,
                        "explain": "YANG-generated XML is what flows inside NETCONF messages such as edit-config, which is how the model and the protocol connect."
                  },
                  {
                        "q": "What advantage does NETCONF have over SNMP for configuration?",
                        "options": [
                              "Smaller messages",
                              "Multi-device configuration with locking and atomic commit",
                              "It requires no transport protocol",
                              "It uses fewer message types"
                        ],
                        "answer": 1,
                        "explain": "SNMP has no concept of applying a change across many devices as one transaction. NETCONF's datastores, locks, and commits make a network-wide change a single unit of work."
                  },
                  {
                        "q": "What is the difference between configuration data and operational state?",
                        "options": [
                              "They are identical",
                              "Configuration is what was asked for; operational state is what is actually happening",
                              "Configuration is read-only; operational state is writable",
                              "Operational state exists only on routers"
                        ],
                        "answer": 1,
                        "explain": "A device can accept a configuration and still not achieve the intended state, for example because a neighbour is down. Management systems must read both."
                  },
                  {
                        "q": "In an SDN controller, what does the northbound interface connect to?",
                        "options": [
                              "The switches",
                              "The network-control applications above the controller",
                              "Other controllers",
                              "The physical links"
                        ],
                        "answer": 1,
                        "explain": "Northbound faces applications such as routing, access control, and load balancing, often as a RESTful API. Southbound faces the switches."
                  },
                  {
                        "q": "What does the SDN controller's network-wide state management layer hold?",
                        "options": [
                              "Only the routing table",
                              "Link-state information, host information, and switch information, as a distributed database",
                              "The application source code",
                              "The physical cabling diagram"
                        ],
                        "answer": 1,
                        "explain": "Robustness matters here: the controller is logically centralised but its state store is distributed so it is not a single point of failure."
                  },
                  {
                        "q": "Which analogy did the SDN community use to describe its architectural shift?",
                        "options": [
                              "Telephone to Internet",
                              "Mainframe to PC - from vertically integrated closed systems to open interfaces and rapid innovation",
                              "Copper to fiber",
                              "IPv4 to IPv6"
                        ],
                        "answer": 1,
                        "explain": "The parallel is deliberate: open interfaces between hardware, operating system, and applications turned a small closed industry into a large open one."
                  },
                  {
                        "q": "Scenario: a monitoring system polls 500 devices every 5 minutes and misses a 30-second link flap entirely. What should be added?",
                        "options": [
                              "More frequent polling only",
                              "Trap or notification support so the device reports the event when it happens",
                              "A larger MIB",
                              "A second managing server"
                        ],
                        "answer": 1,
                        "explain": "Polling can only see state at sample time. Event-driven reporting is the mechanism designed for exactly this gap, though traps can be lost and are usually combined with polling."
                  },
                  {
                        "q": "Scenario: an operator must apply the same configuration change to 40 routers, and a partial application would break routing. Which approach fits?",
                        "options": [
                              "SNMP SetRequest to each device in turn",
                              "NETCONF with datastore locking and atomic commit across the devices",
                              "CLI scripting over SSH",
                              "Sending traps to each device"
                        ],
                        "answer": 1,
                        "explain": "Only NETCONF offers transactional semantics across devices. The other approaches apply changes independently, so a failure midway leaves the network half-configured."
                  },
                  {
                        "q": "Scenario: two operators edit the same device simultaneously, one via CLI and one via NETCONF, and the result is inconsistent. What would have prevented it?",
                        "options": [
                              "Using GetBulkRequest",
                              "Taking a NETCONF lock on the configuration datastore, which excludes other sources",
                              "Increasing the polling interval",
                              "Switching to IPv6"
                        ],
                        "answer": 1,
                        "explain": "The lock operation exists specifically to exclude NETCONF, SNMP, and CLI commands from other sources while an edit is in progress."
                  },
                  {
                        "q": "Scenario: a device accepts a configuration without error, but the intended service still does not work. Which data should the operator examine next?",
                        "options": [
                              "The configuration datastore again",
                              "The operational state, which reports what is actually happening rather than what was requested",
                              "The YANG model file",
                              "The northbound API"
                        ],
                        "answer": 1,
                        "explain": "Configuration confirms only what was asked for. The gap between intent and reality is exactly what operational state data exposes."
                  },
                  {
                        "q": "Scenario: a security review flags that management traffic carries a plaintext community string readable by anyone on the path. Which protocol version is in use, and what is the fix?",
                        "options": [
                              "SNMPv3; upgrade to SNMPv2c",
                              "SNMPv1 or v2c; move to SNMPv3, which adds authentication and encryption, or to NETCONF over a secure transport",
                              "NETCONF; add a lock",
                              "OpenFlow; enable traps"
                        ],
                        "answer": 1,
                        "explain": "Community strings are the v1 and v2c authentication mechanism and travel in the clear. SNMPv3 adds real security, and NETCONF requires a secure transport by design."
                  }
            ]
      },
      {
            "title": "4.1 Practice: Data Link Layer Control, Packetizing, and Error Detection",
            "description": "30-item practice test covering framing, error detection with parity, checksum and CRC, and the three families of multiple access protocols.",
            "questions": [
                  {
                        "q": "What is the data link layer responsible for?",
                        "options": [
                              "End-to-end routing across the Internet",
                              "Carrying a frame from one node to the physically adjacent node over a link",
                              "Process-to-process delivery",
                              "Name-to-address translation"
                        ],
                        "answer": 1,
                        "explain": "The link layer handles exactly one hop. Routing across many hops is the network layer's job, and process addressing is the transport layer's."
                  },
                  {
                        "q": "Which responsibilities belong to the data link layer?",
                        "options": [
                              "Framing, addressing, flow control, error control, and media access control",
                              "Routing, congestion control, and fragmentation",
                              "Encryption, compression, and authentication",
                              "Name resolution and address assignment"
                        ],
                        "answer": 0,
                        "explain": "These five are the standard list. Note that link-layer addressing uses MAC addresses, which are distinct from the IP addresses used for routing."
                  },
                  {
                        "q": "Why is data broken into packets rather than sent as one large unit?",
                        "options": [
                              "Because links cannot carry more than 1500 bytes",
                              "Because one host sending a huge block monopolises the medium, and retransmitting a large unit after an error is far more costly",
                              "Because routers cannot buffer large data",
                              "Because IP addresses are only 32 bits"
                        ],
                        "answer": 1,
                        "explain": "Both reasons matter: fairness of access and cheaper error recovery. Smaller units mean a corrupted transfer costs less to repair."
                  },
                  {
                        "q": "What does a packet typically contain besides the data?",
                        "options": [
                              "Only the destination address",
                              "Source address, destination address, and control information including error checking",
                              "Only error checking bits",
                              "The complete routing table"
                        ],
                        "answer": 1,
                        "explain": "The header carries addressing and instructions for handling and reassembly, and an error-checking component lets the receiver determine whether a resend is needed."
                  },
                  {
                        "q": "What is a single-bit error?",
                        "options": [
                              "Any error affecting one frame",
                              "Exactly one bit in the data unit has been flipped",
                              "An error in the first bit only",
                              "An error the checksum cannot detect"
                        ],
                        "answer": 1,
                        "explain": "One bit changes from 0 to 1 or 1 to 0. A burst error is two or more changed bits, and those need not be consecutive."
                  },
                  {
                        "q": "Does a burst error require the corrupted bits to be consecutive?",
                        "options": [
                              "Yes, always",
                              "No - a burst is measured from the first corrupted bit to the last, and clean bits may lie between",
                              "Only on wireless links",
                              "Only if the burst exceeds 8 bits"
                        ],
                        "answer": 1,
                        "explain": "The burst length spans first to last corrupted bit inclusive, regardless of what happens between. This definition is what CRC's detection guarantee is stated against."
                  },
                  {
                        "q": "What concept underlies all error detection methods?",
                        "options": [
                              "Encryption",
                              "Redundancy - adding extra bits that carry no user data but permit checking",
                              "Compression",
                              "Fragmentation"
                        ],
                        "answer": 1,
                        "explain": "Every scheme trades bandwidth for the ability to detect corruption. Larger redundancy fields generally yield better detection."
                  },
                  {
                        "q": "The data unit 1010100 is to be sent with even parity. What parity bit is appended?",
                        "options": [
                              "0",
                              "1",
                              "Either works",
                              "Parity cannot be computed for 7 bits"
                        ],
                        "answer": 1,
                        "explain": "There are three 1 bits, which is odd, so a 1 is appended to make four - an even count. The receiver counts and accepts only if the total is even."
                  },
                  {
                        "q": "Simple parity fails to detect which kind of error?",
                        "options": [
                              "A single-bit error",
                              "Any error that flips an even number of bits",
                              "Any error in the parity bit itself",
                              "Errors on wireless links only"
                        ],
                        "answer": 1,
                        "explain": "Two flips return the count to its original parity, so the check passes. This is why parity detects burst errors only when the number of corrupted bits happens to be odd."
                  },
                  {
                        "q": "What can two-dimensional parity do that single-bit parity cannot?",
                        "options": [
                              "Detect burst errors of any length",
                              "Detect and correct a single-bit error",
                              "Replace the checksum entirely",
                              "Encrypt the data"
                        ],
                        "answer": 1,
                        "explain": "The failing row and the failing column intersect at exactly one bit, identifying which bit to flip. Single-bit parity can only report that something is wrong."
                  },
                  {
                        "q": "How does CRC compute its check value?",
                        "options": [
                              "By counting 1 bits",
                              "By treating the data as a binary number and taking the remainder of division by a generator polynomial in modulo-2 arithmetic",
                              "By summing 16-bit words",
                              "By XORing the data with a shared key"
                        ],
                        "answer": 1,
                        "explain": "Counting bits is parity and summing words is the checksum. CRC's polynomial division is what gives it much stronger burst-error detection."
                  },
                  {
                        "q": "What does a CRC receiver expect after dividing the received value by the generator?",
                        "options": [
                              "A remainder equal to the CRC field",
                              "A remainder of zero",
                              "A quotient of one",
                              "The original data"
                        ],
                        "answer": 1,
                        "explain": "The CRC bits are chosen so the transmitted value is exactly divisible by G. Any non-zero remainder means an error occurred."
                  },
                  {
                        "q": "With r CRC bits, which burst errors are guaranteed to be detected?",
                        "options": [
                              "All burst errors",
                              "All burst errors shorter than r+1 bits",
                              "Only single-bit errors",
                              "Only errors in the first r bits"
                        ],
                        "answer": 1,
                        "explain": "That guarantee is why CRC is used in Ethernet and 802.11. Longer bursts may still be detected, but they are not guaranteed to be."
                  },
                  {
                        "q": "How does a checksum differ from a CRC?",
                        "options": [
                              "A checksum uses polynomial division; CRC uses addition",
                              "A checksum adds data units together; CRC divides by a generator polynomial",
                              "They are identical operations",
                              "A checksum works only in hardware"
                        ],
                        "answer": 1,
                        "explain": "Both are computed at sender and receiver and compared, but the arithmetic differs, and CRC's is substantially stronger against burst errors."
                  },
                  {
                        "q": "Is error detection ever perfect?",
                        "options": [
                              "Yes, CRC detects every possible error",
                              "No - a corrupted frame can coincidentally satisfy the check, though larger check fields make this rarer",
                              "Yes, if parity and CRC are combined",
                              "Only on fiber links"
                        ],
                        "answer": 1,
                        "explain": "Detection is probabilistic. This is worth stating explicitly, because 'the check passed' is often mistaken for 'the data is certainly correct'."
                  },
                  {
                        "q": "What are the three families of multiple access protocols?",
                        "options": [
                              "Wired, wireless, and satellite",
                              "Channel partitioning, random access, and taking turns",
                              "Unicast, multicast, and broadcast",
                              "Polling, token passing, and CSMA"
                        ],
                        "answer": 1,
                        "explain": "Polling and token passing are examples within the taking-turns family, and CSMA is within random access - so option 4 mixes examples with categories."
                  },
                  {
                        "q": "In controlled access methods, why do collisions not occur?",
                        "options": [
                              "Because the medium is faster",
                              "Because a station may transmit only when it has been authorized",
                              "Because frames are shorter",
                              "Because errors are corrected"
                        ],
                        "answer": 1,
                        "explain": "Permission is granted explicitly, by a poll or by holding the token, so two stations never transmit simultaneously. Contention is eliminated by design."
                  },
                  {
                        "q": "In polling, what are the two station roles?",
                        "options": [
                              "Master and slave, with no distinction in function",
                              "A primary station that controls all access, and secondary stations that transmit only when polled",
                              "Sender and receiver",
                              "Client and server"
                        ],
                        "answer": 1,
                        "explain": "The primary queries each secondary in turn. Only a polled secondary may use the channel, which is what prevents contention."
                  },
                  {
                        "q": "What are the main drawbacks of polling?",
                        "options": [
                              "It cannot detect errors",
                              "Polling overhead, added latency, and the primary station being a single point of failure",
                              "It requires fiber optic cable",
                              "It only works with fewer than four stations"
                        ],
                        "answer": 1,
                        "explain": "Token passing shares the single-point-of-failure weakness in a different form: if the token is lost, the ring stalls until it is regenerated."
                  },
                  {
                        "q": "In token passing, when may a station transmit?",
                        "options": [
                              "Whenever the medium is idle",
                              "Only when it has captured a free token circulating on the ring",
                              "Only when polled by a primary",
                              "Only during its assigned time slot"
                        ],
                        "answer": 1,
                        "explain": "The station waits for a free token, takes control of it, transmits, and then releases it. Time slots belong to TDMA, and idle-sensing belongs to CSMA."
                  },
                  {
                        "q": "In FDMA, what does each station receive?",
                        "options": [
                              "A time slot",
                              "A frequency band reserved for it at all times",
                              "A unique code",
                              "A token"
                        ],
                        "answer": 1,
                        "explain": "The band belongs to that station permanently, which means it goes unused whenever the station is idle - the standard weakness of channel partitioning."
                  },
                  {
                        "q": "How does CDMA differ from both FDMA and TDMA?",
                        "options": [
                              "It uses fewer frequencies",
                              "All stations transmit over the whole bandwidth at the same time, separated by orthogonal codes",
                              "It requires a primary station",
                              "It only works on wired links"
                        ],
                        "answer": 1,
                        "explain": "There is no division of time or frequency at all. Separation comes from the chipping codes, which is why CDMA is categorised separately from the other two."
                  },
                  {
                        "q": "In CDMA, how is data decoded at the receiver?",
                        "options": [
                              "By filtering to the sender's frequency band",
                              "By taking the summed inner product of the received signal with the sender's chipping sequence",
                              "By waiting for the sender's time slot",
                              "By reading the sender's MAC address"
                        ],
                        "answer": 1,
                        "explain": "Because the codes are orthogonal, other senders contribute approximately zero to that inner product, leaving the intended sender's data."
                  },
                  {
                        "q": "Why can collisions still occur under carrier sense multiple access?",
                        "options": [
                              "Because stations ignore the carrier signal",
                              "Because propagation delay means a station may begin transmitting before another's signal has reached it",
                              "Because frames are too short",
                              "Because the checksum fails"
                        ],
                        "answer": 1,
                        "explain": "Sensing tells a station only about signals that have already arrived. Distance and propagation delay therefore directly influence collision probability."
                  },
                  {
                        "q": "How do CSMA/CD and CSMA/CA differ?",
                        "options": [
                              "CD avoids collisions; CA detects them",
                              "CD detects a collision while transmitting and aborts; CA signals intent beforehand to avoid collisions",
                              "CD is wireless; CA is wired",
                              "They are identical"
                        ],
                        "answer": 1,
                        "explain": "Detection requires hearing a remote signal while transmitting, which is practical on wire but not on radio. Wireless must therefore avoid rather than detect."
                  },
                  {
                        "q": "Which combination does a cable access network use?",
                        "options": [
                              "FDMA only",
                              "FDM across channels, TDM within an upstream channel, and random access for contention minislots",
                              "CDMA only",
                              "Token passing"
                        ],
                        "answer": 1,
                        "explain": "DOCSIS uses all three families at once. The CMTS sends a downstream MAP frame assigning upstream slots, while requests for those slots use contention with binary backoff."
                  },
                  {
                        "q": "Scenario: at very low load, a single active node needs the full channel. Which protocol family serves it best and why?",
                        "options": [
                              "Channel partitioning, because it is fair",
                              "Random access, because one node can use the entire channel instead of a 1/N share",
                              "Controlled access, because it eliminates collisions",
                              "Any - they perform identically at low load"
                        ],
                        "answer": 1,
                        "explain": "TDMA would hand that node one slot in N and leave the rest idle. Random access lets it transmit whenever it wants, which is optimal when nobody else is competing."
                  },
                  {
                        "q": "Scenario: at very high load with many active nodes, which family performs better and why?",
                        "options": [
                              "Random access, because collisions are rare",
                              "Channel partitioning, because it shares fairly with no collision overhead",
                              "Neither works at high load",
                              "Random access, because it needs no coordination"
                        ],
                        "answer": 1,
                        "explain": "Random access spends more and more time colliding as load rises. Partitioning has fixed overhead and degrades gracefully, which is why taking-turns protocols try to capture both regimes."
                  },
                  {
                        "q": "Scenario: a receiver accepts a frame whose parity checks out, but the data is wrong. What most likely happened?",
                        "options": [
                              "The CRC was omitted",
                              "An even number of bits were flipped, leaving the parity count unchanged",
                              "The frame was too long",
                              "The parity bit was stripped early"
                        ],
                        "answer": 1,
                        "explain": "Parity only distinguishes odd from even counts of 1 bits. Two compensating flips are invisible to it, which is the standard argument for using CRC instead."
                  },
                  {
                        "q": "Scenario: a designer must pick error detection for a noisy wireless link where burst errors are common. What should they choose and why?",
                        "options": [
                              "Simple parity, because it is cheapest",
                              "CRC, because it guarantees detection of all bursts shorter than r+1 bits",
                              "Two-dimensional parity, because it corrects errors",
                              "No detection, since retransmission handles it"
                        ],
                        "answer": 1,
                        "explain": "Burst errors are exactly parity's weak point and exactly CRC's strength. Two-dimensional parity corrects only single-bit errors, which is the wrong tool for bursty noise."
                  }
            ]
      },
      {
            "title": "4.2 Practice: LANs, Ethernet, ARP, Switches, VLANs, and CSMA",
            "description": "30-item practice test covering MAC addressing, ARP, Ethernet operation, switch self-learning, VLANs, and 802.1Q trunking.",
            "questions": [
                  {
                        "q": "How long is a MAC address on most LANs?",
                        "options": [
                              "32 bits",
                              "48 bits",
                              "64 bits",
                              "128 bits"
                        ],
                        "answer": 1,
                        "explain": "48 bits, written as six hexadecimal byte pairs and burned into the NIC. 32 bits is an IPv4 address and 128 bits is IPv6."
                  },
                  {
                        "q": "Who administers MAC address allocation?",
                        "options": [
                              "IETF",
                              "ICANN",
                              "IEEE",
                              "ISO"
                        ],
                        "answer": 2,
                        "explain": "Manufacturers buy a portion of the address space from IEEE to guarantee uniqueness. IETF publishes RFCs and ICANN manages names and IP address allocation."
                  },
                  {
                        "q": "Which analogy correctly captures the MAC versus IP distinction?",
                        "options": [
                              "MAC is like a postal address; IP is like a social security number",
                              "MAC is like a social security number; IP is like a postal address",
                              "Both are like postal addresses",
                              "Both are like social security numbers"
                        ],
                        "answer": 1,
                        "explain": "A MAC address travels with the interface wherever it goes, like an identity number. An IP address describes where you currently are, so it changes when you move subnets."
                  },
                  {
                        "q": "What does ARP resolve?",
                        "options": [
                              "A domain name to an IP address",
                              "An IP address to a MAC address on the local network",
                              "A MAC address to a port number",
                              "A port number to a process"
                        ],
                        "answer": 1,
                        "explain": "ARP bridges the network and link layers on a local subnet. Name-to-address translation is DNS, and port-to-process mapping is the transport layer's demultiplexing."
                  },
                  {
                        "q": "What does the TTL on an ARP table entry do?",
                        "options": [
                              "Limits how many hops the entry can cross",
                              "Causes the address mapping to be forgotten after a period, typically about 20 minutes",
                              "Counts how many times the entry was used",
                              "Sets the frame priority"
                        ],
                        "answer": 1,
                        "explain": "Expiry prevents a stale mapping persisting forever after a host changes its interface. It is unrelated to the IP header's TTL, which limits hop count."
                  },
                  {
                        "q": "Host A sends to host B on a different subnet via router R. What is the destination MAC address on the first link?",
                        "options": [
                              "B's MAC address",
                              "R's near-side interface MAC address",
                              "The broadcast address",
                              "A's own MAC address"
                        ],
                        "answer": 1,
                        "explain": "A frame can only reach a physically adjacent interface, so the destination MAC is R's. The IP destination remains B throughout the journey."
                  },
                  {
                        "q": "As a datagram crosses several routers, which addresses change?",
                        "options": [
                              "IP addresses change; MAC addresses stay the same",
                              "MAC addresses are rewritten at every hop; IP addresses stay the same",
                              "Both change at every hop",
                              "Neither changes"
                        ],
                        "answer": 1,
                        "explain": "MAC addressing is per-link and is rebuilt for each hop. IP addressing is end-to-end and is what routing decisions are made against."
                  },
                  {
                        "q": "Ethernet is connectionless and unreliable. What does that mean in practice?",
                        "options": [
                              "Frames are always lost",
                              "There is no handshake, and the receiving NIC sends no acknowledgment",
                              "Ethernet cannot detect errors",
                              "Ethernet requires TCP to function"
                        ],
                        "answer": 1,
                        "explain": "Ethernet detects errors with a CRC and discards bad frames, but it never acknowledges good ones. Recovery is left to a higher layer such as TCP."
                  },
                  {
                        "q": "Which MAC protocol does classic shared Ethernet use?",
                        "options": [
                              "CSMA/CA with RTS/CTS",
                              "Unslotted CSMA/CD with binary exponential backoff",
                              "Token passing",
                              "TDMA"
                        ],
                        "answer": 1,
                        "explain": "CSMA/CA belongs to 802.11 wireless. Note that modern switched full-duplex Ethernet has no collisions, so CSMA/CD is effectively historical on wired links."
                  },
                  {
                        "q": "What does binary exponential backoff do after each successive collision?",
                        "options": [
                              "Halves the waiting interval range",
                              "Doubles the range from which the random waiting interval is chosen",
                              "Fixes the wait at a constant value",
                              "Aborts the transmission permanently"
                        ],
                        "answer": 1,
                        "explain": "Doubling the range spreads retries further apart as contention rises, so a busy channel automatically reduces repeat collisions."
                  },
                  {
                        "q": "In a switched Ethernet, how many collision domains exist?",
                        "options": [
                              "One for the whole switch",
                              "One per switch port",
                              "One per VLAN",
                              "None, because collisions are impossible in Ethernet"
                        ],
                        "answer": 1,
                        "explain": "Each dedicated link is its own collision domain and runs full duplex, which is why collisions do not occur in a modern switched LAN."
                  },
                  {
                        "q": "How does a switch build its forwarding table?",
                        "options": [
                              "An administrator configures each entry",
                              "By recording the source MAC address and incoming port of every frame it receives",
                              "By querying a central server",
                              "By running a routing algorithm"
                        ],
                        "answer": 1,
                        "explain": "Self-learning means the switch learns where a host is by hearing from it. It never asks - it only overhears."
                  },
                  {
                        "q": "What does a switch do with a frame whose destination MAC is not in its table?",
                        "options": [
                              "Discards it",
                              "Floods it out every port except the one it arrived on",
                              "Returns it to the sender",
                              "Broadcasts an ARP request"
                        ],
                        "answer": 1,
                        "explain": "Flooding guarantees delivery, and the destination's reply teaches the switch where it lives. That reply is what converts a flood into a table entry."
                  },
                  {
                        "q": "What does a switch table entry contain?",
                        "options": [
                              "MAC address and IP address",
                              "MAC address, the interface to reach that host, and a timestamp",
                              "Port number and protocol",
                              "IP prefix and next hop"
                        ],
                        "answer": 1,
                        "explain": "The timestamp lets stale entries expire, so a host that moves to a different port is eventually relearned rather than remaining unreachable."
                  },
                  {
                        "q": "A switch is transparent. What does that mean?",
                        "options": [
                              "Its case is see-through",
                              "Hosts are unaware of its presence and need no configuration for it",
                              "It forwards every frame everywhere",
                              "It operates at the network layer"
                        ],
                        "answer": 1,
                        "explain": "Transparency plus self-learning is why switches are plug-and-play. Routers, by contrast, must be explicitly configured and are visible as a next hop."
                  },
                  {
                        "q": "A switch can transmit A-to-A' and B-to-B' simultaneously, but not A-to-A' and C-to-A'. Why?",
                        "options": [
                              "Because A and C share a collision domain",
                              "Because the second pair contends for the same output port",
                              "Because the switch table is full",
                              "Because C is on a different VLAN"
                        ],
                        "answer": 1,
                        "explain": "Distinct source-destination pairs can proceed in parallel, but two frames destined for the same output port must serialise on that port."
                  },
                  {
                        "q": "How do switches and routers differ?",
                        "options": [
                              "Only switches are store-and-forward",
                              "Switches examine link-layer headers and learn by flooding; routers examine network-layer headers and compute tables with routing algorithms",
                              "Routers operate at layer 2 and switches at layer 3",
                              "Switches require configuration and routers do not"
                        ],
                        "answer": 1,
                        "explain": "Both are store-and-forward and both have forwarding tables. The layer they inspect and the way the table is built are what separate them."
                  },
                  {
                        "q": "What problem motivates VLANs?",
                        "options": [
                              "Insufficient MAC addresses",
                              "All layer-2 broadcast traffic must cross the entire LAN, and users who physically move lose their logical group",
                              "Routers are too slow",
                              "IP addresses are too short"
                        ],
                        "answer": 1,
                        "explain": "A single broadcast domain has scaling, efficiency, security, and privacy problems, plus the administrative issue of a user relocating between departments."
                  },
                  {
                        "q": "How is a port-based VLAN defined?",
                        "options": [
                              "By IP subnet",
                              "By grouping switch ports through management software so one physical switch behaves as several virtual switches",
                              "By MAC address vendor prefix",
                              "By physical cable colour"
                        ],
                        "answer": 1,
                        "explain": "Ports 1 to 8 might form one VLAN and 9 to 15 another. VLANs can alternatively be defined by endpoint MAC address rather than by port."
                  },
                  {
                        "q": "What does traffic isolation in a port-based VLAN guarantee?",
                        "options": [
                              "Frames are encrypted between ports",
                              "Frames to and from ports in one VLAN can only reach ports in that same VLAN",
                              "Frames are never dropped",
                              "Frames travel faster"
                        ],
                        "answer": 1,
                        "explain": "Isolation is a forwarding restriction, not encryption. Traffic between VLANs must be routed by a layer 3 device."
                  },
                  {
                        "q": "How is traffic forwarded between two VLANs?",
                        "options": [
                              "Directly by the switch",
                              "By routing, just as with physically separate switches",
                              "By flooding",
                              "It is impossible"
                        ],
                        "answer": 1,
                        "explain": "VLANs are separate broadcast domains, so crossing between them is a network-layer operation. Vendors commonly sell combined switch-plus-router devices for this."
                  },
                  {
                        "q": "What does a trunk port carry?",
                        "options": [
                              "Traffic for exactly one VLAN",
                              "Frames belonging to multiple VLANs between physical switches",
                              "Only management traffic",
                              "Only broadcast traffic"
                        ],
                        "answer": 1,
                        "explain": "A trunk is how a VLAN spans several switches. Because frames from different VLANs share the link, they must carry VLAN identification."
                  },
                  {
                        "q": "What does the 802.1Q standard add to a frame?",
                        "options": [
                              "A 4-byte tag containing the VLAN identifier",
                              "An 8-byte encryption header",
                              "A second MAC address",
                              "A CRC field"
                        ],
                        "answer": 0,
                        "explain": "Without the tag, a receiving switch could not tell which VLAN a frame belongs to. The tag is added at one trunk port and removed at the other."
                  },
                  {
                        "q": "How are native VLAN frames handled on an 802.1Q trunk?",
                        "options": [
                              "They are encrypted",
                              "They are dropped",
                              "They travel untagged",
                              "They receive a priority tag of 7"
                        ],
                        "answer": 2,
                        "explain": "The native VLAN is the one exception to tagging on a trunk. This is worth remembering because it is a common exam question and a common security consideration."
                  },
                  {
                        "q": "What is dynamic VLAN membership?",
                        "options": [
                              "VLANs that change their own IDs",
                              "Ports that can be reassigned among VLANs without recabling",
                              "VLANs that span the Internet",
                              "Automatic creation of new VLANs"
                        ],
                        "answer": 1,
                        "explain": "Reassignment in software is what lets a relocated user keep their logical group membership - the administrative problem VLANs were introduced to solve."
                  },
                  {
                        "q": "Scenario: a switch floods a frame out all ports and an administrator worries it is broken. Is it?",
                        "options": [
                              "Yes, flooding indicates a hardware fault",
                              "No - flooding is normal behaviour when the destination MAC is not yet in the table",
                              "Yes, the switch table must be corrupted",
                              "No, but only if the frame was a broadcast"
                        ],
                        "answer": 1,
                        "explain": "Unknown-unicast flooding is designed behaviour. The destination's reply then teaches the switch, so persistent flooding for the same address would be the real warning sign."
                  },
                  {
                        "q": "Scenario: a host is moved from switch port 3 to port 7 and briefly becomes unreachable before recovering. What explains this?",
                        "options": [
                              "Its MAC address changed",
                              "The switch table still held the stale port 3 entry until it timed out or the host sent a frame",
                              "Its IP address changed",
                              "The VLAN tag was stripped"
                        ],
                        "answer": 1,
                        "explain": "Self-learning is driven by frames from the host. Until the host transmits or the old entry expires, the switch keeps sending toward the wrong port."
                  },
                  {
                        "q": "Scenario: two hosts in different VLANs on the same switch cannot ping each other despite correct IP configuration. What is missing?",
                        "options": [
                              "An ARP entry",
                              "A layer 3 device to route between the VLANs",
                              "A trunk port",
                              "A CRC check"
                        ],
                        "answer": 1,
                        "explain": "VLANs are separate broadcast domains by design, so a switch will not bridge them. Inter-VLAN traffic requires routing."
                  },
                  {
                        "q": "Scenario: a network runs entirely on full-duplex switched links, yet a textbook says Ethernet uses CSMA/CD. How should this be reconciled?",
                        "options": [
                              "The textbook is wrong about Ethernet",
                              "CSMA/CD is Ethernet's MAC protocol for shared half-duplex media; on full-duplex switched links there are no collisions, so it does not operate",
                              "CSMA/CD runs but never detects anything",
                              "The switches secretly run CSMA/CA"
                        ],
                        "answer": 1,
                        "explain": "The protocol is still part of the standard, but each full-duplex link is its own collision domain with one station at each end, so contention cannot occur."
                  },
                  {
                        "q": "Scenario: an ARP cache entry points to a MAC address that no longer exists after a NIC replacement, and connectivity fails briefly. What resolves it?",
                        "options": [
                              "Rebooting the router",
                              "The ARP entry's TTL expiring, after which the address is resolved again",
                              "Changing the IP address",
                              "Disabling the switch"
                        ],
                        "answer": 1,
                        "explain": "The roughly 20-minute TTL exists precisely so stale mappings self-correct. Clearing the ARP cache manually achieves the same result immediately."
                  }
            ]
      },
      {
            "title": "4.3 Practice: Link Virtualization, MPLS, and Data Center Networks",
            "description": "30-item practice test covering MPLS forwarding and signalling, datacenter topology and protocols, and the end-to-end synthesis of a web request.",
            "questions": [
                  {
                        "q": "What is the goal of MPLS?",
                        "options": [
                              "To replace IP entirely",
                              "High-speed forwarding using a fixed-length label instead of longest prefix matching",
                              "To encrypt datagrams",
                              "To assign IP addresses automatically"
                        ],
                        "answer": 1,
                        "explain": "A fixed-length exact match is cheaper than a variable-length prefix search. MPLS layers this over IP rather than replacing it."
                  },
                  {
                        "q": "Where does the MPLS header sit?",
                        "options": [
                              "Inside the IP payload",
                              "Between the link-layer header and the IP header",
                              "After the IP header",
                              "It replaces the IP header"
                        ],
                        "answer": 1,
                        "explain": "It is a shim between layer 2 and layer 3, which is why MPLS is sometimes called a layer 2.5 technology."
                  },
                  {
                        "q": "Which fields does the MPLS header contain?",
                        "options": [
                              "Source and destination addresses",
                              "Label, experimental/traffic-class bits, a bottom-of-stack bit, and a TTL",
                              "Only a label",
                              "Label and checksum"
                        ],
                        "answer": 1,
                        "explain": "The bottom-of-stack bit matters because labels can be stacked, and the TTL serves the same loop-limiting role as the IP TTL within the MPLS domain."
                  },
                  {
                        "q": "Does an IP datagram keep its IP addresses inside an MPLS network?",
                        "options": [
                              "No, they are stripped at the ingress",
                              "Yes - MPLS routers simply choose not to inspect them",
                              "Only the destination address is kept",
                              "Only in tunnel mode"
                        ],
                        "answer": 1,
                        "explain": "Keeping the IP header is what makes the technique reversible: the egress can hand the datagram straight back to ordinary IP routing."
                  },
                  {
                        "q": "What is a label-switched router?",
                        "options": [
                              "A router that assigns IP addresses",
                              "A router that forwards based only on the label value, without inspecting the IP address",
                              "A router that runs BGP",
                              "A router that performs NAT"
                        ],
                        "answer": 1,
                        "explain": "The MPLS forwarding table is distinct from the IP forwarding table, and a label-switched router consults only the former for labelled packets."
                  },
                  {
                        "q": "What flexibility does MPLS have that destination-based IP routing does not?",
                        "options": [
                              "It can carry more data per packet",
                              "Two flows to the same destination can take different paths, based on source address or other fields",
                              "It can reach more destinations",
                              "It works without a physical link"
                        ],
                        "answer": 1,
                        "explain": "Destination-based forwarding cannot distinguish two flows heading to the same prefix. This capability is what makes traffic engineering possible."
                  },
                  {
                        "q": "Why can MPLS reroute quickly after a link failure?",
                        "options": [
                              "It uses faster hardware",
                              "Backup label-switched paths are precomputed, so recovery does not wait for routing reconvergence",
                              "It has no routing protocol",
                              "It drops affected packets immediately"
                        ],
                        "answer": 1,
                        "explain": "Precomputation shifts the work off the critical path. Waiting for OSPF or BGP to reconverge takes far longer than switching to a path already installed."
                  },
                  {
                        "q": "Which protocol does an ingress MPLS router use to set up forwarding state downstream?",
                        "options": [
                              "BGP",
                              "RSVP-TE",
                              "OSPF",
                              "SNMP"
                        ],
                        "answer": 1,
                        "explain": "RSVP-TE performs the signalling. OSPF and IS-IS are extended to carry the bandwidth information MPLS traffic engineering needs, but they do not install label state."
                  },
                  {
                        "q": "How are OSPF and IS-IS modified to support MPLS?",
                        "options": [
                              "They are replaced by RSVP-TE",
                              "They are extended to flood information such as link bandwidth and reserved bandwidth",
                              "They begin carrying labels directly",
                              "They stop flooding link state"
                        ],
                        "answer": 1,
                        "explain": "Traffic engineering needs to know what capacity exists and how much is already committed, so the link-state flooding is extended to carry it."
                  },
                  {
                        "q": "MPLS is described as anticipating which later idea?",
                        "options": [
                              "IPv6 addressing",
                              "Generalized forwarding, the same match-plus-action concept OpenFlow later generalised",
                              "DNS caching",
                              "TCP congestion control"
                        ],
                        "answer": 1,
                        "explain": "MPLS matched a label and applied an action roughly a decade before OpenFlow generalised matching to arbitrary header fields."
                  },
                  {
                        "q": "What is the datacenter network hierarchy, from the outside inward?",
                        "options": [
                              "TOR, tier-2, tier-1, border routers",
                              "Border routers, tier-1 switches, tier-2 switches, top-of-rack switches, server blades",
                              "Server blades, border routers, tier-1, tier-2",
                              "Tier-1, border routers, TOR, tier-2"
                        ],
                        "answer": 1,
                        "explain": "Border routers face outward; each tier fans out to roughly 16 elements below it; and each rack has one top-of-rack switch serving its blades."
                  },
                  {
                        "q": "How many server blades does a typical rack hold?",
                        "options": [
                              "2 to 4",
                              "20 to 40",
                              "200 to 400",
                              "2000 to 4000"
                        ],
                        "answer": 1,
                        "explain": "Roughly 20 to 40 hosts per rack, connected to the top-of-rack switch at 40 to 100 Gbps Ethernet."
                  },
                  {
                        "q": "Why do datacenter networks provide many parallel paths between racks?",
                        "options": [
                              "To reduce cabling cost",
                              "To increase throughput between racks and to provide redundancy against link failure",
                              "To simplify addressing",
                              "To avoid using switches"
                        ],
                        "answer": 1,
                        "explain": "Both benefits come from the same rich interconnection. Multipath is a deliberate design property, not an accident of topology."
                  },
                  {
                        "q": "What does an application-layer load balancer do?",
                        "options": [
                              "Chooses the next hop by IP prefix",
                              "Receives external client requests, distributes work across internal servers, and returns results",
                              "Balances power consumption across racks",
                              "Assigns IP addresses to blades"
                        ],
                        "answer": 1,
                        "explain": "It routes by application-layer criteria rather than IP prefix, and it hides the datacentre's internal structure from external clients."
                  },
                  {
                        "q": "What is RoCE?",
                        "options": [
                              "A routing protocol for datacenters",
                              "Remote Direct Memory Access over Converged Ethernet",
                              "A congestion control algorithm",
                              "A cabling standard"
                        ],
                        "answer": 1,
                        "explain": "RoCE lets one host read or write another host's memory with very low overhead, bypassing much of the normal operating system data path."
                  },
                  {
                        "q": "Why do datacenter congestion control schemes such as DCTCP use ECN rather than loss?",
                        "options": [
                              "Because loss cannot occur in a datacenter",
                              "Because reacting to an explicit mark lets senders slow down before buffers overflow, keeping latency low",
                              "Because ECN is faster to compute",
                              "Because TCP is not used in datacenters"
                        ],
                        "answer": 1,
                        "explain": "Waiting for a drop means the queue was already full, which means latency was already high. Marking signals congestion while the queue is still short."
                  },
                  {
                        "q": "Which protocol does a laptop use first when it attaches to a network and needs an address?",
                        "options": [
                              "ARP",
                              "DNS",
                              "DHCP",
                              "HTTP"
                        ],
                        "answer": 2,
                        "explain": "DHCP supplies the IP address, the first-hop router, and the DNS server. Only once the host has those can ARP and DNS proceed."
                  },
                  {
                        "q": "In the day-in-the-life walkthrough, what is a DHCP request encapsulated in?",
                        "options": [
                              "TCP, then IP, then Ethernet",
                              "UDP, then IP, then Ethernet",
                              "IP only",
                              "Ethernet only"
                        ],
                        "answer": 1,
                        "explain": "DHCP runs over UDP, inside IP, inside an Ethernet frame broadcast to FF-FF-FF-FF-FF-FF so it reaches the server without prior knowledge of its address."
                  },
                  {
                        "q": "What does the DHCP ACK contain?",
                        "options": [
                              "Only the client's IP address",
                              "The client's IP address, the first-hop router's address, and the DNS server's name and address",
                              "The client's MAC address",
                              "The web server's IP address"
                        ],
                        "answer": 1,
                        "explain": "This is why one exchange is enough to make the host functional - it receives everything needed to reach both local and remote destinations."
                  },
                  {
                        "q": "After DHCP completes, why must the laptop use ARP before sending a DNS query?",
                        "options": [
                              "To find the DNS server's IP address",
                              "To learn the MAC address of the first-hop router so it can build the frame",
                              "To authenticate to the network",
                              "To obtain a port number"
                        ],
                        "answer": 1,
                        "explain": "The DNS server is off-subnet, so the frame must be addressed to the router. The host knows the router's IP from DHCP but not yet its MAC."
                  },
                  {
                        "q": "What is the correct protocol order in the day-in-the-life scenario?",
                        "options": [
                              "DNS, DHCP, ARP, HTTP, TCP",
                              "DHCP, ARP, DNS, TCP, HTTP",
                              "ARP, DHCP, TCP, DNS, HTTP",
                              "HTTP, DNS, TCP, ARP, DHCP"
                        ],
                        "answer": 1,
                        "explain": "Address first, then the router's MAC, then name resolution, then the transport connection, then the application request. Each step depends on the one before it."
                  },
                  {
                        "q": "Which step immediately precedes the HTTP GET?",
                        "options": [
                              "The ARP reply",
                              "The TCP three-way handshake completing",
                              "The DHCP ACK",
                              "The DNS response"
                        ],
                        "answer": 1,
                        "explain": "HTTP needs an established TCP connection, so SYN, SYNACK, and ACK must complete first. The DNS response came earlier, to supply the server's address."
                  },
                  {
                        "q": "How does the ARP query reach the router?",
                        "options": [
                              "It is unicast to the router's MAC address",
                              "It is broadcast on the LAN and the router replies with its MAC address",
                              "It is sent to the DNS server",
                              "It is routed across the Internet"
                        ],
                        "answer": 1,
                        "explain": "The whole point of ARP is that the querying host does not yet know the target MAC, so the query must be broadcast. Only the matching host replies."
                  },
                  {
                        "q": "What is link virtualization, in the MPLS sense?",
                        "options": [
                              "Running virtual machines on a router",
                              "Treating a network as a link-layer service that carries traffic between its edges",
                              "Splitting one physical cable into several",
                              "Encrypting a link"
                        ],
                        "answer": 1,
                        "explain": "The MPLS domain behaves like one big link from the perspective of the IP layer at its edges, which is why the chapter treats it as a link-layer topic."
                  },
                  {
                        "q": "Which term describes both the leaf-spine design and the tier-1/tier-2/TOR hierarchy?",
                        "options": [
                              "They describe unrelated designs",
                              "They are different vocabularies for the same goal - many equal-cost paths between any two racks",
                              "Leaf-spine applies only to wireless",
                              "Tier hierarchies apply only to MPLS"
                        ],
                        "answer": 1,
                        "explain": "Industry commonly says leaf-spine while lecture material often uses the tier vocabulary. Expect either phrasing in an exam question."
                  },
                  {
                        "q": "Scenario: an operator needs two customers' traffic to the same destination prefix to traverse different physical paths. Which technology expresses this directly?",
                        "options": [
                              "Longest prefix matching",
                              "MPLS, which can select a label-switched path based on source as well as destination",
                              "DHCP",
                              "ARP"
                        ],
                        "answer": 1,
                        "explain": "IP forwarding on destination alone cannot distinguish the two flows. MPLS traffic engineering exists precisely for this requirement."
                  },
                  {
                        "q": "Scenario: a datacenter operator co-locates related services in the same rack. What is the goal?",
                        "options": [
                              "Reducing power consumption",
                              "Minimising traffic that must traverse tier-2 and tier-1 switches",
                              "Simplifying IP addressing",
                              "Avoiding the need for a load balancer"
                        ],
                        "answer": 1,
                        "explain": "Traffic within a rack stays on the top-of-rack switch. Placement is a network optimisation as much as a physical one."
                  },
                  {
                        "q": "Scenario: a laptop obtains an IP address but cannot resolve any hostname, though it can ping its default gateway by IP. What is the most likely fault?",
                        "options": [
                              "ARP is failing",
                              "The DNS server address is wrong or that server is unreachable",
                              "The DHCP lease expired",
                              "The Ethernet cable is faulty"
                        ],
                        "answer": 1,
                        "explain": "Reaching the gateway by IP proves DHCP, ARP, and link connectivity all work. The failure is isolated to the name-resolution step."
                  },
                  {
                        "q": "Scenario: after a link fails inside an MPLS core, traffic recovers in milliseconds rather than seconds. Which feature explains this?",
                        "options": [
                              "Faster BGP convergence",
                              "Fast reroute using precomputed backup label-switched paths",
                              "A larger MTU",
                              "ECN marking"
                        ],
                        "answer": 1,
                        "explain": "Routing protocol reconvergence operates on a much slower timescale. Having the backup path already installed is what makes millisecond recovery possible."
                  },
                  {
                        "q": "Scenario: a datacenter shows high tail latency under load even though few packets are lost. Which change addresses the cause?",
                        "options": [
                              "Increasing buffer sizes further",
                              "Adopting ECN-based congestion control such as DCTCP so queues stay short",
                              "Disabling multipath",
                              "Switching to half duplex"
                        ],
                        "answer": 1,
                        "explain": "Large buffers absorb loss but hold packets, which is exactly what raises latency. Signalling congestion before the queue builds keeps both loss and delay low."
                  }
            ]
      },
      {
            "title": "5.1 Practice: Wireless Networks and Wi-Fi",
            "description": "30-item practice test covering wireless link characteristics, 802.11 architecture, scanning and association, CSMA/CA, RTS/CTS, and Bluetooth.",
            "questions": [
                  {
                        "q": "What is the difference between 'wireless' and 'mobile'?",
                        "options": [
                              "They mean the same thing",
                              "Wireless concerns communicating over a radio link; mobile concerns changing point of attachment",
                              "Wireless applies to phones and mobile to laptops",
                              "Mobile means faster than wireless"
                        ],
                        "answer": 1,
                        "explain": "A desktop on Wi-Fi is wireless but not mobile. Separating the two problems is essential because they are solved by entirely different mechanisms."
                  },
                  {
                        "q": "Which three physical effects make wireless links harder than wired ones?",
                        "options": [
                              "Latency, jitter, and loss",
                              "Path loss, interference from other sources, and multipath propagation",
                              "Fragmentation, congestion, and buffering",
                              "Encryption, authentication, and integrity"
                        ],
                        "answer": 1,
                        "explain": "Signal attenuates through matter, shared bands invite interference, and reflections arrive at slightly different times. All three degrade even a point-to-point wireless link."
                  },
                  {
                        "q": "What is multipath propagation?",
                        "options": [
                              "Sending the same frame over several access points",
                              "Radio signals reflecting off objects and arriving at the destination at slightly different times",
                              "Routing a packet along multiple paths",
                              "Using multiple frequency channels at once"
                        ],
                        "answer": 1,
                        "explain": "The receiver sees overlapping delayed copies of the same signal, which smears symbols together. It is a physical-layer effect, not a routing one."
                  },
                  {
                        "q": "How does signal-to-noise ratio relate to bit error rate?",
                        "options": [
                              "Higher SNR means higher BER",
                              "Higher SNR means lower BER for a given physical layer",
                              "They are unrelated",
                              "SNR only matters on wired links"
                        ],
                        "answer": 1,
                        "explain": "A stronger signal relative to noise makes the signal easier to extract. Raising transmit power raises SNR and lowers BER, at a cost in energy and interference."
                  },
                  {
                        "q": "What is rate adaptation?",
                        "options": [
                              "Changing the router's forwarding rate",
                              "Dynamically changing modulation and transmission rate as SNR varies",
                              "Adjusting the TCP congestion window",
                              "Switching between 2.4 and 5 GHz bands"
                        ],
                        "answer": 1,
                        "explain": "As a device moves away and SNR falls, the link steps down from a dense modulation such as QAM256 to a robust one such as BPSK - trading throughput for reliability."
                  },
                  {
                        "q": "Why is collision detection impractical on wireless links?",
                        "options": [
                              "Radios are too slow",
                              "The transmitting radio's own signal swamps the far weaker received signal, and hidden terminals make some collisions undetectable in principle",
                              "Wireless frames are too short",
                              "Collisions never occur on wireless"
                        ],
                        "answer": 1,
                        "explain": "Both reasons matter. Even with perfect hardware, a collision occurring at the receiver cannot be observed by the sender."
                  },
                  {
                        "q": "Describe the hidden terminal problem.",
                        "options": [
                              "Two stations transmit at the same power",
                              "A and C can each hear B but not each other, so their transmissions collide at B without either knowing",
                              "A station forgets its MAC address",
                              "An access point hides its SSID"
                        ],
                        "answer": 1,
                        "explain": "Carrier sensing fails because the interfering stations are mutually inaudible. The collision happens at the receiver, where neither transmitter can detect it."
                  },
                  {
                        "q": "How does RTS/CTS mitigate hidden terminals?",
                        "options": [
                              "By increasing transmit power",
                              "The sender's short RTS may collide, but the access point's CTS is heard by everyone in range and tells all others to defer",
                              "By switching to a different channel",
                              "By retransmitting every frame twice"
                        ],
                        "answer": 1,
                        "explain": "The CTS is the key: it originates from the access point, which every station can hear, so it reserves the channel even for stations that cannot hear the original sender."
                  },
                  {
                        "q": "What is the cost of using RTS/CTS?",
                        "options": [
                              "It requires more expensive hardware",
                              "The reservation exchange adds overhead to every transmission",
                              "It disables acknowledgments",
                              "It reduces the transmission range"
                        ],
                        "answer": 1,
                        "explain": "For short frames the reservation can cost more airtime than it saves, which is why RTS/CTS is optional and typically enabled only above a frame-size threshold."
                  },
                  {
                        "q": "What is a Basic Service Set in infrastructure mode?",
                        "options": [
                              "Wireless hosts only",
                              "Wireless hosts plus an access point",
                              "Two access points connected together",
                              "A wired LAN segment"
                        ],
                        "answer": 1,
                        "explain": "The BSS is the cell. In ad hoc mode a BSS contains hosts only, with no access point and no path to the wider Internet."
                  },
                  {
                        "q": "In passive scanning, how does a host discover access points?",
                        "options": [
                              "By broadcasting a probe request",
                              "By listening for beacon frames the access points broadcast",
                              "By querying DHCP",
                              "By reading the SSID from a configuration file"
                        ],
                        "answer": 1,
                        "explain": "Passive means listening only. Active scanning is the alternative, where the host broadcasts a probe request and collects probe responses."
                  },
                  {
                        "q": "What are the four steps of active scanning?",
                        "options": [
                              "Beacon, association request, association response, DHCP",
                              "Probe request broadcast, probe responses from APs, association request, association response",
                              "RTS, CTS, data, ACK",
                              "Discovery, authentication, key derivation, encryption"
                        ],
                        "answer": 1,
                        "explain": "The host solicits rather than waits, then selects an access point and completes the association exchange. Passive scanning replaces the first two steps with beacon listening."
                  },
                  {
                        "q": "What does a beacon frame contain?",
                        "options": [
                              "The access point's SSID and MAC address",
                              "The full list of connected clients",
                              "The encryption key",
                              "The DHCP lease"
                        ],
                        "answer": 0,
                        "explain": "Beacons advertise the network's identity so hosts can discover and select it. Keys are established later, during authentication."
                  },
                  {
                        "q": "After associating with an access point, what does a host typically do next?",
                        "options": [
                              "Send an RTS",
                              "Perform authentication and then run DHCP to get an IP address in the AP's subnet",
                              "Begin scanning again",
                              "Send an HTTP request"
                        ],
                        "answer": 1,
                        "explain": "Association is a link-layer relationship only. The host still needs network-layer configuration before it can communicate beyond the cell."
                  },
                  {
                        "q": "Why can channels from neighbouring access points interfere?",
                        "options": [
                              "Because access points share MAC addresses",
                              "Because the administrator of each AP chooses its frequency independently and may pick the same one",
                              "Because beacons are broadcast",
                              "Because CSMA/CA is disabled"
                        ],
                        "answer": 1,
                        "explain": "Spectrum is divided into channels but nothing coordinates the choice across independent networks, so overlapping selections are common in dense areas."
                  },
                  {
                        "q": "A host moves between two access points on the same IP subnet. What happens to its IP address?",
                        "options": [
                              "It changes to match the new AP",
                              "It stays the same",
                              "It is released and not renewed",
                              "It becomes a private address"
                        ],
                        "answer": 1,
                        "explain": "The subnet has not changed, so the address remains valid. The switch relearns which port reaches the host from the frames it sends - self-learning handles the move."
                  },
                  {
                        "q": "How does 802.11 power management work?",
                        "options": [
                              "The AP powers down between frames",
                              "A device tells the AP it will sleep until the next beacon; the AP buffers frames and the beacon lists which devices have traffic waiting",
                              "The device reduces its transmit power",
                              "Frames are compressed to save energy"
                        ],
                        "answer": 1,
                        "explain": "The beacon's list is what lets a device decide whether to stay awake. Devices with nothing waiting sleep again immediately, which is where most of the saving comes from."
                  },
                  {
                        "q": "Which access method do all 802.11 standards use?",
                        "options": [
                              "CSMA/CD",
                              "CSMA/CA",
                              "Token passing",
                              "TDMA"
                        ],
                        "answer": 1,
                        "explain": "Collision avoidance rather than detection, for the reasons discussed. All the listed 802.11 generations share this and support both infrastructure and ad hoc modes."
                  },
                  {
                        "q": "In CDMA, how are simultaneous transmissions separated?",
                        "options": [
                              "By frequency band",
                              "By time slot",
                              "By orthogonal chipping codes, with all users sharing the full band simultaneously",
                              "By transmit power"
                        ],
                        "answer": 2,
                        "explain": "This is what distinguishes CDMA from both FDMA and TDMA - there is no division of frequency or time at all."
                  },
                  {
                        "q": "How is CDMA data encoded and decoded?",
                        "options": [
                              "Encoded by XOR, decoded by XOR",
                              "Encoded as the inner product of data and chipping sequence, decoded as the summed inner product with the same sequence",
                              "Encoded by compression, decoded by decompression",
                              "Encoded by hashing"
                        ],
                        "answer": 1,
                        "explain": "Because codes are orthogonal, other senders contribute approximately zero to the receiver's summed inner product, leaving only the intended data."
                  },
                  {
                        "q": "What is a Bluetooth piconet?",
                        "options": [
                              "A network of access points",
                              "One master device plus its client devices, self-assembled without infrastructure",
                              "A wired personal area network",
                              "A cellular cell"
                        ],
                        "answer": 1,
                        "explain": "The master polls clients and grants their transmission requests. Bootstrapping is plug-and-play - nodes self-assemble into the piconet."
                  },
                  {
                        "q": "How many RF channels does Bluetooth hop across?",
                        "options": [
                              "13",
                              "40",
                              "79",
                              "128"
                        ],
                        "answer": 2,
                        "explain": "79 channels spaced 1 MHz apart in the 2.4 GHz band, visited in a known pseudo-random order so interference affects only some slots."
                  },
                  {
                        "q": "How long is a Bluetooth time slot?",
                        "options": [
                              "625 nanoseconds",
                              "625 microseconds",
                              "625 milliseconds",
                              "625 seconds"
                        ],
                        "answer": 1,
                        "explain": "625 microseconds, giving 1,600 hops per second. Some lecture slides misprint this as milliseconds, which would make the stated 3 Mbps rate arithmetically impossible."
                  },
                  {
                        "q": "What is Bluetooth parked mode for?",
                        "options": [
                              "Storing data when the master is unavailable",
                              "Letting a client sleep to conserve battery and later wake to rejoin the piconet",
                              "Blocking unauthorised devices",
                              "Increasing transmission range"
                        ],
                        "answer": 1,
                        "explain": "Parked devices remain part of the piconet's addressing but consume almost no power until they wake."
                  },
                  {
                        "q": "In the wireless network taxonomy, what characterises 'infrastructure, single hop'?",
                        "options": [
                              "No base station and no Internet connection",
                              "The host connects to a base station which connects to the larger Internet",
                              "The host relays through several wireless nodes",
                              "Two hosts communicate directly with no infrastructure"
                        ],
                        "answer": 1,
                        "explain": "Wi-Fi and cellular are the canonical examples. Multiple-hop infrastructure is a mesh network, and the no-infrastructure cases are Bluetooth and MANETs."
                  },
                  {
                        "q": "Scenario: a laptop's throughput drops steadily as it walks away from the access point, but the connection stays up. What mechanism is operating?",
                        "options": [
                              "Power management",
                              "Rate adaptation stepping down to a more robust modulation as SNR falls",
                              "RTS/CTS being enabled",
                              "The AP switching channels"
                        ],
                        "answer": 1,
                        "explain": "Falling SNR would raise the bit error rate at the current modulation, so the link deliberately trades rate for reliability rather than failing outright."
                  },
                  {
                        "q": "Scenario: two stations at opposite edges of a cell repeatedly corrupt each other's frames at the AP, though each senses an idle channel. What should be enabled?",
                        "options": [
                              "CSMA/CD",
                              "RTS/CTS, so the AP's CTS silences stations that cannot hear each other",
                              "A larger MTU",
                              "Power management"
                        ],
                        "answer": 1,
                        "explain": "This is the textbook hidden terminal situation. Only a signal originating at the AP reaches both stations, which is why the CTS - not the RTS - does the real work."
                  },
                  {
                        "q": "Scenario: a phone's battery lasts noticeably longer on Wi-Fi after a firmware update, with no change in traffic. Which feature was likely improved?",
                        "options": [
                              "Rate adaptation",
                              "Power management, so the radio sleeps between beacons when no frames are buffered",
                              "RTS/CTS thresholds",
                              "Channel selection"
                        ],
                        "answer": 1,
                        "explain": "Sleeping between beacons is where the energy saving comes from. Rate adaptation affects throughput and reliability rather than idle power draw."
                  },
                  {
                        "q": "Scenario: an office deploys many access points and users report poor performance despite strong signal. What should be checked first?",
                        "options": [
                              "Cable lengths",
                              "Whether neighbouring access points are configured on overlapping channels",
                              "The DHCP lease time",
                              "The MTU setting"
                        ],
                        "answer": 1,
                        "explain": "Strong signal with poor performance points at interference rather than coverage. Independent administrators choosing the same channel is the common cause."
                  },
                  {
                        "q": "Scenario: a designer wants collision detection on a wireless link to save the airtime wasted by full-frame collisions. Why is this not possible?",
                        "options": [
                              "Regulations forbid it",
                              "The transmitter cannot hear a far weaker remote signal beneath its own, and hidden-terminal collisions occur where the sender cannot observe them",
                              "Wireless frames are too short to detect",
                              "It would require more than 79 channels"
                        ],
                        "answer": 1,
                        "explain": "The limitation is physical, not a design oversight. This is exactly why 802.11 avoids collisions and acknowledges every frame instead."
                  }
            ]
      },
      {
            "title": "5.2 Practice: Mobile Networks, 4G/5G, Roaming, Handoffs, and Mobile IP",
            "description": "30-item practice test covering 4G LTE architecture, identity and tunnelling, registration, indirect and direct routing, handoff, and 5G.",
            "questions": [
                  {
                        "q": "Which element is the LTE base station?",
                        "options": [
                              "MME",
                              "eNode-B",
                              "S-GW",
                              "HSS"
                        ],
                        "answer": 1,
                        "explain": "eNode-B is LTE jargon for the base station. MME handles mobility management, S-GW and P-GW sit on the data path, and HSS holds subscriber information."
                  },
                  {
                        "q": "Which two 4G elements lie on the data path between the mobile and the Internet?",
                        "options": [
                              "MME and HSS",
                              "Serving Gateway and PDN Gateway",
                              "eNode-B and HSS",
                              "MME and S-GW"
                        ],
                        "answer": 1,
                        "explain": "S-GW and P-GW carry user traffic. MME and HSS are control-plane elements dealing with authentication, mobility state, and subscriber data."
                  },
                  {
                        "q": "What does the PDN Gateway do?",
                        "options": [
                              "Authenticates the subscriber",
                              "Acts as the gateway to the outside world, looking like an ordinary Internet gateway router and usually providing NAT",
                              "Manages radio resources in the cell",
                              "Stores subscriber identity"
                        ],
                        "answer": 1,
                        "explain": "From the Internet's perspective the P-GW is where the cellular network ends. Authentication is the MME and HSS's job, and radio resources belong to the base station."
                  },
                  {
                        "q": "What does the Home Subscriber Server hold?",
                        "options": [
                              "The device's current radio channel",
                              "Identity and service information for devices whose home network this is",
                              "The routing table for the core network",
                              "The encryption keys for the Internet path"
                        ],
                        "answer": 1,
                        "explain": "The HSS is the authority on who a subscriber is and what they are entitled to, both at home and while roaming. It works with the MME during authentication."
                  },
                  {
                        "q": "How does the LTE architecture reflect data-plane and control-plane separation?",
                        "options": [
                              "It does not - all elements handle both",
                              "MME and HSS handle control; S-GW and P-GW handle data",
                              "Only the base station separates them",
                              "Separation applies only in 5G"
                        ],
                        "answer": 1,
                        "explain": "This is the same architectural idea as SDN, applied to a cellular core, and it is why 4G and 5G cores are described as embracing the Internet protocol stack."
                  },
                  {
                        "q": "What is the IMSI and where is it stored?",
                        "options": [
                              "A 32-bit address stored in the device firmware",
                              "A 64-bit International Mobile Subscriber Identity stored on the SIM card",
                              "A MAC address stored in the radio",
                              "A temporary identifier assigned by the visited network"
                        ],
                        "answer": 1,
                        "explain": "Because the IMSI identifies both the subscriber and their home network, it is what makes roaming agreements and inter-carrier settlement possible."
                  },
                  {
                        "q": "Which LTE link-layer protocol performs header compression and encryption?",
                        "options": [
                              "RLC",
                              "PDCP",
                              "MAC",
                              "OFDM"
                        ],
                        "answer": 1,
                        "explain": "Packet Data Convergence Protocol sits highest in the LTE link stack. RLC handles fragmentation and reliable transfer, and MAC requests radio slots."
                  },
                  {
                        "q": "Which LTE link-layer protocol handles fragmentation, reassembly, and reliable data transfer?",
                        "options": [
                              "PDCP",
                              "Radio Link Control",
                              "Medium Access",
                              "GTP"
                        ],
                        "answer": 1,
                        "explain": "RLC provides link-level reliability over the error-prone radio channel. GTP is a tunnelling protocol used in the core, not on the radio link."
                  },
                  {
                        "q": "What does 'orthogonal' mean in OFDM?",
                        "options": [
                              "The sub-carriers are perpendicular in space",
                              "The sub-carriers are spaced so they cause minimal interference to one another",
                              "Each user gets a separate antenna",
                              "The signal is encrypted"
                        ],
                        "answer": 1,
                        "explain": "Careful spacing lets many sub-carriers pack closely without mutual interference, which is what makes OFDM spectrally efficient."
                  },
                  {
                        "q": "How is a mobile's datagram carried across the cellular core?",
                        "options": [
                              "Directly as an IP datagram with no wrapper",
                              "Encapsulated using GTP inside UDP",
                              "Inside an Ethernet frame end to end",
                              "Inside a TCP segment"
                        ],
                        "answer": 1,
                        "explain": "GTP over UDP forms the tunnel. Only the tunnel endpoints change as the user moves, which is what keeps the inner datagram untouched."
                  },
                  {
                        "q": "Why does tunnelling solve the mobility problem?",
                        "options": [
                              "It compresses the datagram",
                              "The inner datagram is unchanged, so ongoing connections do not notice the move - only the outer wrapper is rewritten",
                              "It encrypts the datagram",
                              "It shortens the path"
                        ],
                        "answer": 1,
                        "explain": "A datagram addressed to the mobile's permanent address cannot be routed to a visited network, because routing follows the prefix. Wrapping it in a new datagram solves that without touching the original."
                  },
                  {
                        "q": "What is the first step when an LTE mobile associates with a base station?",
                        "options": [
                              "It sends its IMSI",
                              "It searches for a primary synchronization signal that base stations broadcast every 5 ms on all frequencies",
                              "It requests an IP address",
                              "It performs a handoff"
                        ],
                        "answer": 1,
                        "explain": "Synchronisation comes first, then a second synch signal on that frequency, then broadcast configuration information, and only then does the device select a base station."
                  },
                  {
                        "q": "What are the two LTE sleep modes?",
                        "options": [
                              "Idle and active",
                              "Light sleep after hundreds of milliseconds of inactivity, and deep sleep after 5 to 10 seconds",
                              "Parked and unparked",
                              "Standby and hibernate"
                        ],
                        "answer": 1,
                        "explain": "In light sleep the device wakes periodically to check for downstream traffic. In deep sleep it may change cells and must then re-establish its association."
                  },
                  {
                        "q": "What is registration in a mobility architecture?",
                        "options": [
                              "Buying a service plan",
                              "The visited mobility manager recording the device and informing the home network of its current location",
                              "Assigning a MAC address",
                              "Authenticating to a Wi-Fi access point"
                        ],
                        "answer": 1,
                        "explain": "After registration the visited network knows about the device and the home network knows where it is. That second fact is what makes the device reachable."
                  },
                  {
                        "q": "Why is having a 'home' network important for mobility?",
                        "options": [
                              "It is where the device was manufactured",
                              "It is a definitive place to ask where a subscriber currently is",
                              "It provides the fastest connection",
                              "It stores the device's data"
                        ],
                        "answer": 1,
                        "explain": "Without a fixed point of reference, a correspondent would have to search for the mobile. The home network's HSS is that authoritative reference."
                  },
                  {
                        "q": "In indirect routing, where does a correspondent's traffic go first?",
                        "options": [
                              "Directly to the visited network",
                              "To the mobile's home network, which then tunnels it onward",
                              "To the nearest base station",
                              "To the mobile's previous location"
                        ],
                        "answer": 1,
                        "explain": "The correspondent addresses the mobile's permanent address, so routing delivers to the home network. The home gateway then tunnels to the visited network."
                  },
                  {
                        "q": "What is the main advantage of indirect routing?",
                        "options": [
                              "It always takes the shortest path",
                              "It is transparent to the correspondent, so ongoing TCP connections survive a move",
                              "It requires no home network",
                              "It uses less bandwidth"
                        ],
                        "answer": 1,
                        "explain": "The correspondent never learns that the mobile moved. Registration in the new visited network plus a home HSS update keeps traffic flowing without touching the connection."
                  },
                  {
                        "q": "What is triangle routing?",
                        "options": [
                              "Routing through exactly three ASes",
                              "The inefficiency of indirect routing, where traffic detours through the home network even when correspondent and mobile are near each other",
                              "Using three paths simultaneously",
                              "A three-way handshake for mobility"
                        ],
                        "answer": 1,
                        "explain": "The path is forced through a fixed anchor regardless of where the endpoints actually are, which is wasteful when they are close together."
                  },
                  {
                        "q": "How does direct routing avoid triangle routing?",
                        "options": [
                              "By eliminating the home network",
                              "The correspondent first asks the home HSS for the mobile's current address, then sends straight to the visited network",
                              "By caching the mobile's location in every router",
                              "By using a shorter TTL"
                        ],
                        "answer": 1,
                        "explain": "One extra lookup buys a direct path. The cost is that the correspondent must participate, so it is no longer transparent."
                  },
                  {
                        "q": "What is the main drawback of direct routing?",
                        "options": [
                              "It cannot support TCP",
                              "It is non-transparent to the correspondent, and handling a further move adds complexity",
                              "It requires more base stations",
                              "It cannot be used while roaming"
                        ],
                        "answer": 1,
                        "explain": "Once the correspondent holds a care-of address, a subsequent move must be communicated to it somehow - which is exactly the complexity indirect routing avoids."
                  },
                  {
                        "q": "Why not simply let ordinary IP routing track every mobile device?",
                        "options": [
                              "IP routing cannot express host routes",
                              "It would not scale to billions of mobiles, since each would need its own routing table entry",
                              "IP routing is too slow",
                              "Mobiles have no IP addresses"
                        ],
                        "answer": 1,
                        "explain": "Longest prefix match could technically locate each mobile, but the resulting table size and update churn are impossible at scale. Indirection exists to avoid exactly that."
                  },
                  {
                        "q": "What does 5G aim to improve over 4G?",
                        "options": [
                              "Only peak bit rate",
                              "Roughly ten times the peak bit rate, a tenth of the latency, and a hundred times the traffic capacity",
                              "Only coverage area",
                              "Only battery life"
                        ],
                        "answer": 1,
                        "explain": "All three targets together. Achieving them requires new radio, new spectrum, and a much denser base station deployment."
                  },
                  {
                        "q": "What are the two 5G NR frequency ranges?",
                        "options": [
                              "FR1 below 6 GHz and FR2 in millimetre wave from about 24 to 52 GHz",
                              "FR1 at 2.4 GHz and FR2 at 5 GHz",
                              "FR1 for uplink and FR2 for downlink",
                              "FR1 for voice and FR2 for data"
                        ],
                        "answer": 0,
                        "explain": "FR1 provides coverage and FR2 provides capacity. The split reflects a physical trade-off, not a functional division between voice and data."
                  },
                  {
                        "q": "Why do millimetre wave frequencies require pico-cells?",
                        "options": [
                              "Because the equipment is small",
                              "Because they carry much higher data rates but propagate poorly over short distances",
                              "Because regulators limit their power",
                              "Because they interfere with Wi-Fi"
                        ],
                        "answer": 1,
                        "explain": "Cells only 10 to 100 metres across are needed to maintain coverage, which is why 5G at FR2 demands a massive, dense deployment of new base stations."
                  },
                  {
                        "q": "Is 5G NR backwards compatible with 4G?",
                        "options": [
                              "Yes, fully",
                              "No",
                              "Only in FR1",
                              "Only for voice"
                        ],
                        "answer": 1,
                        "explain": "5G NR is a new air interface. This is why deployments initially used non-standalone modes that keep a 4G anchor alongside the new radio."
                  },
                  {
                        "q": "Scenario: a subscriber travels abroad and their phone works on a foreign carrier's network. Which two networks cooperate, and what makes it possible?",
                        "options": [
                              "Two visited networks, via DHCP",
                              "The home and visited networks, via the SIM's IMSI plus a service agreement between the carriers",
                              "Two home networks, via BGP",
                              "Only the visited network, via Wi-Fi"
                        ],
                        "answer": 1,
                        "explain": "The IMSI identifies the home network, which the visited network contacts to authenticate the subscriber. The commercial agreement is what permits the service."
                  },
                  {
                        "q": "Scenario: a correspondent in the same city as a roaming mobile sees unexpectedly high latency. Which routing model is in use?",
                        "options": [
                              "Direct routing",
                              "Indirect routing, producing triangle routing through a distant home network",
                              "No routing at all",
                              "Hot potato routing"
                        ],
                        "answer": 1,
                        "explain": "Proximity of the endpoints does not shorten the path under indirect routing, because traffic is anchored at the home network regardless."
                  },
                  {
                        "q": "Scenario: a device in deep sleep moves into a different cell. What must happen when it wakes?",
                        "options": [
                              "Nothing - the association persists",
                              "It must re-establish its association, because it changed cells while asleep",
                              "It must obtain a new SIM",
                              "It must switch to Wi-Fi"
                        ],
                        "answer": 1,
                        "explain": "Deep sleep is long enough that cell membership can change unobserved, so the device cannot assume its previous association is still valid."
                  },
                  {
                        "q": "Scenario: an ongoing video call continues uninterrupted as a user drives between cells. Which mechanism is responsible?",
                        "options": [
                              "DNS failover",
                              "Handoff, with the MME reconfiguring the tunnel endpoints while the inner datagrams remain unchanged",
                              "TCP retransmission",
                              "A new IMSI being issued"
                        ],
                        "answer": 1,
                        "explain": "Because only the tunnel endpoints move, the transport connection and the application above it never see an address change - which is precisely why the call survives."
                  },
                  {
                        "q": "Scenario: a study guide lists 'home agent' and 'foreign agent' as current cellular practice. How should this be treated?",
                        "options": [
                              "As accurate for 4G and 5G networks",
                              "As a conceptual model from Mobile IP that explains indirection; production mobility uses 4G/5G core tunnelling instead",
                              "As applying only to Wi-Fi",
                              "As a typo for MME and HSS"
                        ],
                        "answer": 1,
                        "explain": "Mobile IP architectures exist but are not what deployed cellular networks use. The terms remain useful for understanding indirect routing conceptually."
                  }
            ]
      },
      {
            "title": "6.1 / 6.2 Practice: Security Basics, Cryptography, Authentication, and TLS",
            "description": "30-item practice test covering security goals, symmetric and public-key cryptography, the authentication ladder, digital signatures, certificates, and TLS.",
            "questions": [
                  {
                        "q": "What are the four core network security goals?",
                        "options": [
                              "Speed, reliability, scalability, and cost",
                              "Confidentiality, authentication, message integrity, and access and availability",
                              "Encryption, hashing, signing, and certification",
                              "Firewalls, IDS, VPNs, and antivirus"
                        ],
                        "answer": 1,
                        "explain": "Option 3 lists mechanisms and option 4 lists products. The goals are what those mechanisms and products exist to achieve."
                  },
                  {
                        "q": "What does message integrity guarantee?",
                        "options": [
                              "Only the intended receiver can read the message",
                              "The message was not altered in transit or afterwards without detection",
                              "The sender's identity is confirmed",
                              "The service remains available"
                        ],
                        "answer": 1,
                        "explain": "Integrity is about detecting alteration. Confidentiality is about readability and authentication is about identity - three separate properties often confused."
                  },
                  {
                        "q": "Why was the Internet not designed with much security?",
                        "options": [
                              "Encryption had not been invented",
                              "The original vision was a group of mutually trusting users on a transparent network",
                              "It was too computationally expensive",
                              "Security was legally prohibited"
                        ],
                        "answer": 1,
                        "explain": "That trust assumption is why protections were retrofitted at every layer rather than designed in once, and why spoofing and sniffing are consequences of the model rather than bugs."
                  },
                  {
                        "q": "In a cipher-text only attack, what does the adversary have?",
                        "options": [
                              "Matching plaintext and ciphertext pairs",
                              "Only ciphertext to analyse",
                              "The ability to choose plaintext for encryption",
                              "The private key"
                        ],
                        "answer": 1,
                        "explain": "This is the weakest assumption, attacked by brute force or statistical analysis. Known-plaintext and chosen-plaintext give the attacker progressively more power."
                  },
                  {
                        "q": "What makes a chosen-plaintext attack stronger than a known-plaintext attack?",
                        "options": [
                              "It requires less computation",
                              "The attacker can obtain ciphertext for plaintext of their own choosing rather than whatever happens to be known",
                              "It works only on public-key ciphers",
                              "It requires the private key"
                        ],
                        "answer": 1,
                        "explain": "Choosing the input lets the attacker probe the cipher systematically. Known-plaintext gives only whatever pairs happen to be available."
                  },
                  {
                        "q": "How is a monoalphabetic substitution cipher broken?",
                        "options": [
                              "By brute force over all 26 letters",
                              "By statistical frequency analysis, since letter frequencies survive the substitution",
                              "By factoring a large number",
                              "It cannot be broken"
                        ],
                        "answer": 1,
                        "explain": "The mapping is fixed, so the ciphertext preserves the plaintext's letter frequency distribution. A polyalphabetic cipher cycles alphabets to blunt exactly this."
                  },
                  {
                        "q": "What is the key in a polyalphabetic cipher?",
                        "options": [
                              "A single substitution alphabet",
                              "The n substitution ciphers plus the cyclic pattern in which they are applied",
                              "The length of the message",
                              "A large prime number"
                        ],
                        "answer": 1,
                        "explain": "Both the alphabets and the cycling order are secret. The key is therefore not simply an n-bit pattern, which is a point the lecture material stresses."
                  },
                  {
                        "q": "What are DES's key and block sizes?",
                        "options": [
                              "128-bit key, 128-bit block",
                              "56-bit key, 64-bit block",
                              "256-bit key, 64-bit block",
                              "56-bit key, 128-bit block"
                        ],
                        "answer": 1,
                        "explain": "A 56-bit key is why DES fell to brute force - the DES Challenge decrypted a phrase in under a day. The block cipher operates on 64-bit inputs with chaining across blocks."
                  },
                  {
                        "q": "What block and key sizes does AES use?",
                        "options": [
                              "64-bit blocks with a 56-bit key",
                              "128-bit blocks with 128, 192, or 256-bit keys",
                              "256-bit blocks with a 128-bit key",
                              "Variable blocks with a 64-bit key"
                        ],
                        "answer": 1,
                        "explain": "The key length is what defeats brute force: a search taking one second against DES would take on the order of a hundred trillion years against AES."
                  },
                  {
                        "q": "The lecture slides suggest 3DES to make DES more secure. Why is that no longer the right answer?",
                        "options": [
                              "3DES is slower than DES",
                              "NIST disallows three-key TDEA for encryption after 2023; AES is the correct modern choice",
                              "3DES uses a shorter key than DES",
                              "3DES was never standardised"
                        ],
                        "answer": 1,
                        "explain": "SP 800-131A Rev. 2 deprecated three-key TDEA through 2023 and disallows it for encryption thereafter, permitting decryption only for legacy data."
                  },
                  {
                        "q": "What problem does public-key cryptography solve that symmetric cryptography cannot?",
                        "options": [
                              "Encrypting large files quickly",
                              "Agreeing on a key with someone you have never met",
                              "Detecting bit errors",
                              "Compressing data"
                        ],
                        "answer": 1,
                        "explain": "Symmetric crypto assumes a shared secret already exists. Public-key crypto removes that assumption, which is why it is described as revolutionising the field."
                  },
                  {
                        "q": "What are the two requirements of a public-key encryption algorithm?",
                        "options": [
                              "Fast encryption and fast decryption",
                              "That applying the private key to a public-key encryption recovers the message, and that the private key cannot be feasibly computed from the public key",
                              "That both keys are the same length",
                              "That the message is shorter than the key"
                        ],
                        "answer": 1,
                        "explain": "Correctness and one-wayness. If the second requirement failed, publishing the public key would give away the private one."
                  },
                  {
                        "q": "On what does RSA's security rest?",
                        "options": [
                              "The secrecy of the algorithm",
                              "The difficulty of factoring the product of two large primes",
                              "The length of the message",
                              "The speed of modular exponentiation"
                        ],
                        "answer": 1,
                        "explain": "Knowing the public key (n, e), recovering d essentially requires finding n's prime factors - a problem believed hard for large n."
                  },
                  {
                        "q": "Which RSA property makes digital signatures possible?",
                        "options": [
                              "Encryption is faster than decryption",
                              "Applying the private key then the public key gives the same result as applying the public key then the private key",
                              "The keys are interchangeable in length",
                              "It works on arbitrary-length messages"
                        ],
                        "answer": 1,
                        "explain": "That symmetry means a private-key operation can be verified by anyone holding the public key, which is exactly what a signature requires."
                  },
                  {
                        "q": "Why do real systems use RSA only to establish a symmetric session key?",
                        "options": [
                              "RSA cannot encrypt binary data",
                              "Exponentiation is computationally intensive - symmetric ciphers are far faster for bulk data",
                              "RSA keys expire too quickly",
                              "Symmetric keys are more secure"
                        ],
                        "answer": 1,
                        "explain": "The lecture figure is that DES is at least 100 times faster than RSA. Public-key crypto solves key establishment; symmetric crypto then does the heavy lifting."
                  },
                  {
                        "q": "What three properties must a hash function have for security use?",
                        "options": [
                              "Reversible, fast, and short output",
                              "Many-to-one, fixed-size output, and computational infeasibility of finding a message producing a given digest",
                              "One-to-one, variable output, and reversibility",
                              "Encrypted, keyed, and compressed"
                        ],
                        "answer": 1,
                        "explain": "The one-way property is what matters most: given a digest, no one should be able to construct a message that produces it."
                  },
                  {
                        "q": "Why is a message digest signed rather than the whole message?",
                        "options": [
                              "Digests are more secure than messages",
                              "Public-key encrypting long messages is computationally expensive, so a fixed-length fingerprint is signed instead",
                              "Messages cannot be signed directly",
                              "Digests are encrypted automatically"
                        ],
                        "answer": 1,
                        "explain": "Signing a short fixed-length digest gives the same integrity and authentication guarantees at a fraction of the cost."
                  },
                  {
                        "q": "What is the current status of MD5?",
                        "options": [
                              "It remains recommended for digital signatures",
                              "It is no longer acceptable where collision resistance is required, since collisions can be found in seconds",
                              "It has been extended to 256 bits",
                              "It is only broken for short messages"
                        ],
                        "answer": 1,
                        "explain": "RFC 6151 states this directly. New designs should use HMAC-SHA256 or AES-CMAC rather than HMAC-MD5."
                  },
                  {
                        "q": "What is NIST's position on SHA-1?",
                        "options": [
                              "It remains approved indefinitely",
                              "NIST will transition away from SHA-1 for all applications by 31 December 2030",
                              "It was withdrawn in 2015",
                              "It applies only to certificates"
                        ],
                        "answer": 1,
                        "explain": "SHA-2 (FIPS 180-4) and SHA-3 (FIPS 202) are the approved replacements. Learn SHA-1 for exam questions but never specify it in a design."
                  },
                  {
                        "q": "In authentication protocol ap2.0, Alice sends her claim in an IP packet with her source address. Why does this fail?",
                        "options": [
                              "The packet may be lost",
                              "Trudy can spoof Alice's source address",
                              "IP addresses are too short",
                              "The packet is unencrypted"
                        ],
                        "answer": 1,
                        "explain": "IP does not authenticate the source address field, so anyone can write Alice's address into a packet. Each step of the ap ladder exposes one such flaw."
                  },
                  {
                        "q": "Why does encrypting the password in ap3.0 still fail?",
                        "options": [
                              "The encryption is too weak",
                              "A playback attack still works - Trudy records the encrypted password and replays it later",
                              "The password is too short",
                              "Encryption breaks the IP header"
                        ],
                        "answer": 1,
                        "explain": "Confidentiality does not provide freshness. Trudy does not need to read the password to replay it, which is why a nonce is required."
                  },
                  {
                        "q": "What does the nonce in ap4.0 achieve?",
                        "options": [
                              "It encrypts the password",
                              "It proves liveness - only someone holding the key can return this specific fresh challenge encrypted",
                              "It compresses the message",
                              "It authenticates Bob to Alice"
                        ],
                        "answer": 1,
                        "explain": "A recording of yesterday's exchange contains yesterday's nonce and is useless today. Freshness, not secrecy, is what defeats replay."
                  },
                  {
                        "q": "What flaw remains in ap5.0, which uses a nonce with public-key cryptography?",
                        "options": [
                              "Replay attacks still succeed",
                              "A man-in-the-middle can substitute their own public key and impersonate each party to the other",
                              "The nonce can be predicted",
                              "The private key is transmitted"
                        ],
                        "answer": 1,
                        "explain": "Trudy supplies her own public key when asked for Alice's, so Bob verifies Trudy's signature and believes it is Alice's. This is exactly the gap certificates close."
                  },
                  {
                        "q": "What does a certification authority do?",
                        "options": [
                              "Encrypts messages between parties",
                              "Binds a public key to a particular entity and signs that binding with its own private key",
                              "Stores everyone's private keys",
                              "Issues IP addresses"
                        ],
                        "answer": 1,
                        "explain": "The CA's signature is what lets a relying party verify that a public key really belongs to the named entity, defeating the man-in-the-middle substitution."
                  },
                  {
                        "q": "How does Alice obtain Bob's verified public key?",
                        "options": [
                              "She asks Bob directly and trusts the reply",
                              "She obtains Bob's certificate and applies the CA's public key to it",
                              "She computes it from Bob's private key",
                              "She receives it from her ISP"
                        ],
                        "answer": 1,
                        "explain": "Applying the CA's public key to the certificate recovers Bob's public key together with proof that the CA vouched for the binding."
                  },
                  {
                        "q": "What three properties does a digital signature provide?",
                        "options": [
                              "Confidentiality, compression, and speed",
                              "Integrity, authentication, and non-repudiation",
                              "Availability, redundancy, and scalability",
                              "Encryption, hashing, and key exchange"
                        ],
                        "answer": 1,
                        "explain": "Non-repudiation is the distinctive one: because only the signer holds the private key, they cannot later deny having signed."
                  },
                  {
                        "q": "Which three techniques does TLS combine?",
                        "options": [
                              "Compression, fragmentation, and retransmission",
                              "Symmetric encryption for confidentiality, cryptographic hashing for integrity, and public-key cryptography for authentication",
                              "Firewalls, IDS, and VPNs",
                              "Polling, tokens, and channelization"
                        ],
                        "answer": 1,
                        "explain": "TLS is the practical synthesis of everything in this unit, which is why it appears at the end of the topic rather than the beginning."
                  },
                  {
                        "q": "Which RFC specifies TLS 1.3?",
                        "options": [
                              "RFC 8846",
                              "RFC 8446",
                              "RFC 7568",
                              "RFC 9113"
                        ],
                        "answer": 1,
                        "explain": "RFC 8446, published August 2018. Some lecture slides transpose this to 8846, which is an unrelated document. RFC 7568 deprecated SSL 3.0 and RFC 9113 is HTTP/2."
                  },
                  {
                        "q": "How does TLS 1.3's cipher suite selection differ from TLS 1.2?",
                        "options": [
                              "It offers more choices",
                              "It narrows to about 5 choices instead of 37 and requires Diffie-Hellman for key exchange",
                              "It removes encryption entirely",
                              "It reverts to RSA-only key exchange"
                        ],
                        "answer": 1,
                        "explain": "Fewer options means fewer weak combinations to misconfigure. TLS 1.3 also uses combined authenticated encryption rather than serial encryption then authentication."
                  },
                  {
                        "q": "Scenario: an application encrypts a message with a symmetric key and sends that key encrypted with the recipient's public key. What is this pattern called and why is it used?",
                        "options": [
                              "Double encryption, for extra security",
                              "Hybrid encryption with a session key - public-key crypto establishes the key and fast symmetric crypto protects the bulk data",
                              "Key escrow, for recovery",
                              "Certificate chaining, for trust"
                        ],
                        "answer": 1,
                        "explain": "This is the standard construction used in secure e-mail and in TLS. It gets public-key crypto's key distribution benefit without paying its performance cost on every byte."
                  }
            ]
      },
      {
            "title": "6.3 Practice: Network Layer Security, IPsec, Firewalls, and IDS",
            "description": "30-item practice test covering IPsec modes and protocols, security associations and databases, IKE, 802.11 and 4G/5G security, firewalls, and intrusion detection.",
            "questions": [
                  {
                        "q": "What does IPsec protect?",
                        "options": [
                              "Only application data",
                              "Both user traffic and control traffic, at the datagram level",
                              "Only routing protocol messages",
                              "Only wireless links"
                        ],
                        "answer": 1,
                        "explain": "Operating below the transport layer means IPsec can secure BGP and DNS messages as well as application data, without any application being modified."
                  },
                  {
                        "q": "In IPsec transport mode, what is protected?",
                        "options": [
                              "The entire datagram including its IP header",
                              "Only the datagram payload",
                              "Only the IP header",
                              "Nothing - transport mode is unencrypted"
                        ],
                        "answer": 1,
                        "explain": "Transport mode leaves the original IP header visible. Tunnel mode encrypts the whole datagram and wraps it in a new one with a new header."
                  },
                  {
                        "q": "Why is tunnel mode preferred for gateway-to-gateway VPNs?",
                        "options": [
                              "It is faster",
                              "It encrypts the entire original datagram, hiding the internal addresses, and encapsulates it for delivery to the far gateway",
                              "It requires no keys",
                              "It works only over wireless"
                        ],
                        "answer": 1,
                        "explain": "Hiding internal addressing is often the point of a VPN. Transport mode would expose the original source and destination to anyone on the path."
                  },
                  {
                        "q": "What does the Authentication Header protocol provide?",
                        "options": [
                              "Confidentiality only",
                              "Source authentication and data integrity, but not confidentiality",
                              "Confidentiality and integrity",
                              "Key exchange"
                        ],
                        "answer": 1,
                        "explain": "AH deliberately omits encryption. ESP is the protocol used when confidentiality is required, and it is far more widely deployed."
                  },
                  {
                        "q": "What does the Encapsulation Security Payload protocol provide?",
                        "options": [
                              "Integrity only",
                              "Source authentication, data integrity, and confidentiality",
                              "Confidentiality only",
                              "Routing information"
                        ],
                        "answer": 1,
                        "explain": "ESP covers all three, which is why it is more widely used than AH in practice."
                  },
                  {
                        "q": "IP is connectionless, yet IPsec is described as connection-oriented. Why?",
                        "options": [
                              "Because IPsec uses TCP",
                              "Because a security association must be established before data flows",
                              "Because IPsec numbers its packets",
                              "Because IPsec requires a handshake with every router"
                        ],
                        "answer": 1,
                        "explain": "The SA is state held at the endpoints, much as a TCP connection is. It is also directional, so bidirectional traffic requires two SAs."
                  },
                  {
                        "q": "What does the Security Policy Database determine?",
                        "options": [
                              "Which keys to use",
                              "Whether a given datagram needs IPsec protection at all",
                              "How to route the datagram",
                              "The encryption algorithm's block size"
                        ],
                        "answer": 1,
                        "explain": "SPD answers 'what to do'; SAD answers 'how to do it'. Keeping the two separate is the cleanest way to remember the division."
                  },
                  {
                        "q": "What does the Security Association Database hold?",
                        "options": [
                              "The forwarding table",
                              "The state for each SA, including keys, algorithms, and endpoints",
                              "The firewall rule set",
                              "The list of authorised users"
                        ],
                        "answer": 1,
                        "explain": "R1 stores the SPI, the source and destination SA interfaces, the encryption type and key, and the integrity check type and key."
                  },
                  {
                        "q": "How does a receiver find the right security association for an arriving IPsec datagram?",
                        "options": [
                              "By source IP address alone",
                              "By reading the Security Parameter Index from the datagram and indexing the SAD with it",
                              "By trying every SA in turn",
                              "By asking the sender"
                        ],
                        "answer": 1,
                        "explain": "The SPI is a 32-bit identifier carried in the datagram specifically so the receiver can locate the correct state in one lookup."
                  },
                  {
                        "q": "Why is manual key configuration impractical for a large VPN?",
                        "options": [
                              "Keys are too long to type",
                              "It does not scale to hundreds of endpoints, each needing SAs in both directions",
                              "Manual keys are always weak",
                              "It requires a certification authority"
                        ],
                        "answer": 1,
                        "explain": "The number of key pairs grows quickly with endpoint count, and every rotation multiplies the work. IKE automates establishment and rekeying."
                  },
                  {
                        "q": "What are the two IKE authentication methods?",
                        "options": [
                              "Password and biometric",
                              "Pre-shared key and public key infrastructure",
                              "Symmetric and asymmetric hashing",
                              "Certificate and cookie"
                        ],
                        "answer": 1,
                        "explain": "PSK starts from a common secret; PKI starts from key pairs and certificates. Either way IKE authenticates the peers and generates the IPsec SAs."
                  },
                  {
                        "q": "What is the current status of IKEv1?",
                        "options": [
                              "It is the recommended version",
                              "It was deprecated by RFC 9395 in 2023, with its defining RFCs moved to Historic; use IKEv2",
                              "It applies only to IPv6",
                              "It was never standardised"
                        ],
                        "answer": 1,
                        "explain": "IKEv2 (RFC 7296) addresses issues in IKEv1 including vulnerability to amplification attacks, and no new algorithms have been accepted for IKEv1 for over a decade."
                  },
                  {
                        "q": "A lecture example specifies 3DES-cbc encryption with HMAC-MD5 in an IPsec SA. What is wrong with it?",
                        "options": [
                              "Nothing - it is a current recommendation",
                              "Both primitives are retired: three-key TDEA is disallowed for encryption after 2023 and HMAC-MD5 should not be used in new designs",
                              "The SPI is missing",
                              "CBC mode is incompatible with IPsec"
                        ],
                        "answer": 1,
                        "explain": "The example is dated. A modern SA would use AES with SHA-2, negotiated by IKEv2."
                  },
                  {
                        "q": "What are the four phases of 802.11 security?",
                        "options": [
                              "Scan, associate, authenticate, encrypt",
                              "Discovery of security capabilities, mutual authentication with key derivation, shared key distribution to the AP, then encrypted communication",
                              "RTS, CTS, data, ACK",
                              "Beacon, probe, associate, disassociate"
                        ],
                        "answer": 1,
                        "explain": "Note that during phase 1 the device and AP already exchange messages even though the device is not yet authenticated and has no keys."
                  },
                  {
                        "q": "In the WPA3 handshake, what is the session key derived from?",
                        "options": [
                              "The SSID alone",
                              "The initial shared secret plus a nonce from each of the AS and the mobile",
                              "The device's MAC address",
                              "The access point's serial number"
                        ],
                        "answer": 1,
                        "explain": "Both nonces are needed so neither side alone determines the key, and their freshness is what prevents replay of a recorded handshake."
                  },
                  {
                        "q": "What role do nonces play in the WPA3 handshake?",
                        "options": [
                              "They encrypt the shared secret",
                              "They ensure freshness so a recorded exchange cannot be replayed",
                              "They identify the access point",
                              "They compress the messages"
                        ],
                        "answer": 1,
                        "explain": "The HMAC computed over the nonces additionally provides message integrity, so tampering is detected as well as replay."
                  },
                  {
                        "q": "What does EAP define?",
                        "options": [
                              "The encryption algorithm for the wireless link",
                              "The end-to-end request and response protocol between the mobile device and the authentication server",
                              "The frequency channel to use",
                              "The IP address assignment"
                        ],
                        "answer": 1,
                        "explain": "EAP is carried over EAPoL on the wireless link and over RADIUS across the wired network to reach the authentication server."
                  },
                  {
                        "q": "Which protocol carries EAP messages across the wired network to the authentication server?",
                        "options": [
                              "EAPoL",
                              "RADIUS",
                              "TLS",
                              "IEEE 802.11"
                        ],
                        "answer": 1,
                        "explain": "EAPoL handles the wireless hop between device and access point; RADIUS carries the conversation onward over UDP/IP."
                  },
                  {
                        "q": "In 4G LTE, what does the auth_token prove and to whom?",
                        "options": [
                              "It proves the device to the network",
                              "It proves the network to the device, since only a holder of the shared SIM key could have computed it",
                              "It proves the base station to the MME",
                              "It proves the visited network to the home network"
                        ],
                        "answer": 1,
                        "explain": "This is what makes 4G authentication mutual rather than one-sided, and it is what prevents a rogue base station from impersonating a real network."
                  },
                  {
                        "q": "What does the MME compare to decide whether a device is authenticated?",
                        "options": [
                              "The IMSI against a whitelist",
                              "The device-computed res_M against the HSS-supplied xres_HSS",
                              "The auth_token against the SIM",
                              "The device's MAC address against a database"
                        ],
                        "answer": 1,
                        "explain": "Both values derive from the shared key K_HSS-M, so a match proves the device holds that key - without the key ever being transmitted."
                  },
                  {
                        "q": "Which element is the ultimate authenticator in 4G?",
                        "options": [
                              "The base station",
                              "The Home Subscriber Server in the home network",
                              "The visited MME",
                              "The PDN Gateway"
                        ],
                        "answer": 1,
                        "explain": "The visited MME plays a role, but trust ultimately rests on the home network's HSS and the business relationship between the two carriers."
                  },
                  {
                        "q": "How does 5G change the authentication decision compared with 4G?",
                        "options": [
                              "The base station decides",
                              "The home network provides the decision, with the visited MME acting as a middleman that can still reject",
                              "The device decides",
                              "Authentication is removed"
                        ],
                        "answer": 1,
                        "explain": "This narrows the trust placed in the visited network. 5G also encrypts the IMSI with public-key cryptography, whereas 4G transmits it in cleartext."
                  },
                  {
                        "q": "On what does a stateless packet filter base its decision?",
                        "options": [
                              "The connection's history",
                              "Source and destination IP addresses, TCP/UDP port numbers, ICMP type, and TCP flag bits",
                              "The packet payload contents",
                              "The user's identity"
                        ],
                        "answer": 1,
                        "explain": "Header fields only, and each packet judged in isolation. Examining payload contents is deep packet inspection, which is an IDS capability."
                  },
                  {
                        "q": "Why is a rule permitting inbound TCP from port 80 to ports above 1023 with ACK set insufficient?",
                        "options": [
                              "It blocks legitimate web traffic",
                              "An attacker can craft a packet with exactly those properties even though no connection exists",
                              "It only works for UDP",
                              "It requires deep packet inspection"
                        ],
                        "answer": 1,
                        "explain": "The rule looks like it admits only replies to outbound requests, but nothing verifies that a request occurred. That gap is the entire argument for stateful filtering."
                  },
                  {
                        "q": "What does a stateful packet filter track?",
                        "options": [
                              "Every packet's payload",
                              "Connection setup and teardown, so it can reject packets that belong to no live connection",
                              "The user's login history",
                              "The routing table"
                        ],
                        "answer": 1,
                        "explain": "It also times out inactive connections, so a stale entry does not indefinitely admit traffic."
                  },
                  {
                        "q": "What is the main limitation of an application gateway?",
                        "options": [
                              "It cannot filter on IP addresses",
                              "Each application needs its own gateway, and clients must know how to reach it",
                              "It cannot inspect application data",
                              "It only works with UDP"
                        ],
                        "answer": 1,
                        "explain": "For example, a browser must be configured with the proxy's address. The gateway's power - understanding application semantics - is exactly what makes it application-specific."
                  },
                  {
                        "q": "How does an IDS differ from a packet filter?",
                        "options": [
                              "An IDS blocks traffic; a filter only logs it",
                              "An IDS performs deep packet inspection and correlates across multiple packets and sessions, whereas a filter examines headers packet by packet",
                              "An IDS operates at layer 2",
                              "There is no difference"
                        ],
                        "answer": 1,
                        "explain": "Correlation is what lets an IDS recognise port scans, network mapping, and DoS patterns that no single packet reveals."
                  },
                  {
                        "q": "Scenario: a firewall rule set drops all outgoing ICMP TTL-expired traffic. What is the intent?",
                        "options": [
                              "To prevent smurf attacks",
                              "To prevent the internal network from being mapped by traceroute",
                              "To block DNS queries",
                              "To stop SYN flooding"
                        ],
                        "answer": 1,
                        "explain": "Traceroute depends on those replies, so suppressing them hides the internal topology. Blocking ICMP to broadcast addresses is the smurf countermeasure instead."
                  },
                  {
                        "q": "Scenario: an organisation wants to allow only its public web server to accept inbound connections. Which rule expresses this?",
                        "options": [
                              "Drop all outgoing packets to port 80",
                              "Drop all incoming TCP SYN packets to any internal IP except the web server's address on port 80",
                              "Drop all incoming UDP",
                              "Drop all ICMP"
                        ],
                        "answer": 1,
                        "explain": "Filtering on the SYN bit targets connection establishment specifically, so existing outbound-initiated sessions still work while new inbound ones are refused."
                  },
                  {
                        "q": "Scenario: a security audit finds that traffic between two branch offices crosses the public Internet unprotected, and dozens of applications are involved. What is the most efficient fix?",
                        "options": [
                              "Add TLS to every application individually",
                              "Deploy an IPsec tunnel-mode VPN between the two gateways, which protects all applications without modifying any of them",
                              "Install an IDS at each site",
                              "Switch all traffic to UDP"
                        ],
                        "answer": 1,
                        "explain": "Operating below the transport layer is exactly IPsec's advantage here - one gateway-to-gateway SA covers every application at once, and tunnel mode also conceals internal addressing."
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
