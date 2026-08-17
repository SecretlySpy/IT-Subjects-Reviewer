# Networking 2 — Content Review and Source Reconciliation

_Generated: 2026-08-17 · Audit of the shipped Networking 2 reviewers against the supplied lecture decks_

This document is the triage record for a cross-reference between the Networking 2 lecture decks
(Kurose & Ross, _Computer Networking: A Top-Down Approach_, 8th edition, plus one Forouzan-style
data-link deck) and the two Networking 2 datasets in this repository.

It exists because the decks are the syllabus but were not previously recorded anywhere in the
repository, so nothing could be checked against them.

**How to read this file.** Tables 1 and 2 record structural problems with the source material.
Table 3 records factual errors and outdated claims — each one has been verified against a primary
source and each has a severity tag. Table 4 is the coverage gap manifest that drives the content work.

Severity legend, matching the repository's QA convention:

| Tag | Meaning |
|---|---|
| 🔴 Critical | Teaches something factually wrong, or recommends a broken/withdrawn cryptographic primitive |
| 🟠 Major | Wrong identifier, superseded specification, or an internal contradiction |
| 🟡 Minor | Stale statistic, dated framing, or unsourced-but-correct material |

---

## Table 1 — Deck ↔ reviewer unit mapping

Fifteen reviewer units cover sixteen deck files. The mapping is **not** filename-order, because
two deck filenames are numbered inconsistently with their own contents.

| Deck file | Actual content | Reviewer unit | Status |
|---|---|---|---|
| `1.1 Computer Networks and the Internet.md` | Internet structure, access networks, packet switching, delay/loss/throughput, layering, history | 1.1 | ✅ aligned |
| `1.2 Application Layer.md` | HTTP, cookies, caching, HTTP/2–3, SMTP/IMAP, DNS, P2P, DASH/CDN, sockets | 1.2 | ✅ aligned |
| `2.1 Transport_Layer.md` | Transport services, mux/demux, UDP, checksum | 2.1A | ⚠️ truncated — see Table 2 |
| _(no deck)_ | — | 2.1B | ⚠️ unsourced — see Table 2 |
| `2.2 Network_Layer.md` | Data/control plane, router architecture, longest-prefix match, switching fabrics, queueing | 2.2A | ⚠️ truncated — see Table 2 |
| **`4.1 Link_Layer_Control_Plane.md`** | **Network-layer routing algorithms** (Dijkstra, Bellman-Ford, DV) | **3.1** | 🟠 filename conflict |
| `3.2 ISP_Routing.md` | OSPF, BGP, SDN/OpenFlow, ICMP, traceroute | 3.2 | ✅ aligned |
| `3.3 Network_Management_Protocol.md` | SNMP, MIB, NETCONF, YANG | 3.3 | ✅ aligned |
| **`3.1 Link_Layer_Overview.md`** | **Data link layer**, packetizing, error detection, multiple access | **4.1** | 🟠 filename conflict |
| `DataLink_Layer_1_.md` | Duplicate of the first half of `3.1 Link_Layer_Overview.md` | 4.1 | 🟡 redundant |
| `4.2 Link_Layer_LANs.md` | MAC/ARP, Ethernet, switches, VLANs | 4.2 | ✅ aligned |
| `4.3 Link_Virtualization.md` | MPLS, datacenter networks, day-in-the-life synthesis | 4.3 | ✅ aligned |
| `5.1 Wireless_Networks.md` | Wireless link characteristics, 802.11, CSMA/CA, Bluetooth | 5.1 | ✅ aligned |
| `5.2 Mobile_Networks.md` | 4G/5G architecture, mobility management, roaming | 5.2 | ✅ aligned |
| `6.1 Computer_Network_Security_Overview.md` | CIA, cryptography, symmetric/public key | 6.1 / 6.2 | ✅ aligned |
| `6.2 Authentication_and_Security.md` | Authentication ladder, signatures, certificates, TLS | 6.1 / 6.2 | ✅ aligned |
| `6.3 Network_Layer_Security.md` | IPsec, WiFi/4G security, firewalls, IDS | 6.3 | ✅ aligned |

### 🟠 Finding 1.1 — Chapter 3 and 4 deck filenames are swapped

`4.1 Link_Layer_Control_Plane.md` contains **no link-layer material**. Its title slide reads
"Chapter 3.1 Link Layer: Control Plane", but every slide footer reads `Network Layer: 5-x` and the
content is Dijkstra's link-state algorithm and the Bellman-Ford distance-vector algorithm — network
layer, chapter 5 of Kurose 8e.

Conversely `3.1 Link_Layer_Overview.md` opens with a Forouzan-style data-link deck and continues into
Kurose chapter 6 (`Link Layer: 6-x`), which is genuine link-layer material.

**The reviewer's mapping is correct; the deck filenames are wrong.** No content change is required —
this is recorded so nobody "fixes" the reviewer to match the filenames.

### 🟡 Finding 1.2 — `DataLink_Layer_1_.md` is a duplicate

It reproduces `3.1 Link_Layer_Overview.md` from "Data Link Layer" through "Code-Division Multiple
Access", ending where the Kurose 8e link-layer deck begins. It contributes no unique content.

---

## Table 2 — Truncated decks (reviewer content with no source)

Two decks advertise a roadmap they never deliver. The slides simply stop.

| Deck | Roadmap promises | Actually ends at | Reviewer content left unsourced |
|---|---|---|---|
| `2.1 Transport_Layer.md` | rdt principles, connection-oriented transport (TCP), congestion control principles, TCP congestion control, evolution of transport-layer functionality | Slide **3-27**, "Internet checksum: weak protection!" | **All of unit 2.1B**: stop-and-wait, pipelining, Go-Back-N, Selective Repeat, cumulative/duplicate ACKs, fast retransmit, RTT estimation (EstimatedRTT/DevRTT/TimeoutInterval), congestion window, slow start, congestion avoidance, fast recovery, AIMD, TCP Reno |
| `2.2 Network_Layer.md` | IP datagram format, addressing, NAT, IPv6, generalized forwarding + SDN, OpenFlow match+action, middleboxes | Slide **4-19**, "Output port queuing" | IPv4/IPv6 addressing, subnetting, CIDR, DHCP, NAT, ICMP, fragmentation |

**Disposition: KEEP — flagged.** The unsourced material is correct Kurose 8e content, is standard for
this course, and is exam-relevant. Removing it would make the reviewer *less* useful. It is recorded
here so the gap is visible.

**Action for the instructor:** confirm whether the missing slides for `2.1` and `2.2` exist. If they
do, they should be added to `docs/networking2-source-slides/` so this reviewer's transport-reliability
and IP-addressing content becomes traceable.

---

## Table 3 — Factual errors and outdated claims

Every correction below was verified against a primary source on 2026-08-17. Citations follow the table.

| # | Sev | Where | Claim as written | Verified correction |
|---|---|---|---|---|
| 1 | 🔴 | Deck 6.2, "Transport-layer security (TLS)" | "TLS 1.3: RFC 8846 [2018]" | **RFC 8446**, _The Transport Layer Security (TLS) Protocol Version 1.3_, August 2018, Proposed Standard. RFC 8846 is an unrelated document. Single-digit transposition. |
| 2 | 🔴 | Decks 6.1 & 6.2, "Hash function algorithms" | "MD5 hash function widely used (RFC 1321)… SHA-1 is also used" | MD5 is **not acceptable where collision resistance is required** (RFC 6151); collisions are findable in seconds. NIST is transitioning away from **SHA-1 for all applications by 31 Dec 2030**; use SHA-2 (FIPS 180-4) or SHA-3 (FIPS 202). |
| 3 | 🔴 | Deck 6.1, "Symmetric key crypto: DES" | "making DES more secure: 3DES: encrypt 3 times with 3 different keys" | Three-key TDEA was **deprecated through 2023 and is disallowed for encryption after 31 Dec 2023** (NIST SP 800-131A Rev. 2). Decryption is permitted only for legacy data. **AES is the answer**, which the deck's own next slide states. |
| 4 | 🟠 | Deck 1.2, "Mail message format" | "SMTP: protocol for exchanging e-mail messages, defined in RFC 531" | **RFC 5321**, _Simple Mail Transfer Protocol_, October 2008. The same deck states 5321 correctly two slides earlier — "531" is OCR damage, not a source claim. |
| 5 | 🟠 | Deck 1.2, "Mail message format" | "RFC 822 defines syntax for e-mail message itself" | RFC 822 was superseded by RFC 2822 and then **RFC 5322**, _Internet Message Format_. |
| 6 | 🟠 | Deck 1.2, "HTTP/2" | "HTTP/2: [RFC 7540, 2015]" | **RFC 9113** (June 2022) obsoletes RFC 7540 and RFC 8740. HTTP/1.1 was likewise re-specified as **RFC 9110–9112**. |
| 7 | 🟠 | Deck 1.2, "HTTP/2 to HTTP/3" | "HTTP/3: adds security, per object error- and congestion-control… over UDP" — no specification cited | **RFC 9114** (June 2022) defines HTTP/3 as a mapping of HTTP semantics over **QUIC (RFC 9000)**. |
| 8 | 🟠 | Deck 6.3, "IKE: Internet Key Exchange" | Example SA uses `Encryption algorithm: 3DES-cbc`, `HMAC algorithm: MD5` | Both primitives are retired (see #2, #3). **IKEv1 itself was deprecated by RFC 9395** (April 2023), which moved RFCs 2407/2408/2409 to Historic. Use **IKEv2 (RFC 7296, STD 79)**. |
| 9 | 🟠 | Deck 5.1, "Personal area networks: Bluetooth" | "TDM, 625 **msec** sec. slot" | **625 microseconds**, giving 1,600 hops/second across the 79 RF channels. At 625 ms the deck's own "up to 3 Mbps" figure is arithmetically impossible. |
| 10 | 🟡 | Deck 5.1, "IEEE 802.11 Wireless LAN" table | Ends at "802.11ax (WiFi 6) · 2020 (exp.)" | 802.11ax was published in 2021. The table omits **Wi-Fi 6E** (6 GHz) and **Wi-Fi 7 / IEEE 802.11be**, approved by the IEEE on 26 Sept 2024 and published 2025 — 320 MHz channels, up to ~46 Gbps. Wi-Fi Alliance certification began January 2024. |
| 11 | 🟡 | Deck 4.2, "Ethernet" | "kept up with speed race: 10 Mbps → 400 Gbps" | **800 Gb/s** since **IEEE Std 802.3df-2024**, approved 16 Feb 2024. |
| 12 | 🟡 | Deck 1.1, cable & DSL access | HFC "up to 40 Mbps – 1.2 Gbps downstream, 30-100 Mbps upstream"; DSL "24-52 Mbps down, 3.5-16 Mbps up" | Pre-DOCSIS-4.0 and pre-FTTH figures. Treat as illustrative of the *asymmetry*, which is the teaching point, not as current rates. |
| 13 | 🟡 | Deck 1.2, DNS & CDN | "~200 servers in US" (root); "Akamai: 240,000 servers… (2015)"; "Netflix, YouTube, Amazon Prime: 80% of residential ISP traffic (2020)" | The root server system has 13 identities operated by 12 organisations, with **2,004 operational anycast instances worldwide** as of 2026-08-17 — an order of magnitude above the slide. The Akamai and traffic-share figures are 5–10 years stale; re-check against a current Sandvine *Global Internet Phenomena* report before quoting. |
| 14 | 🟡 | Deck 1.1, "2005-present" | "~18B devices (2017)", "Facebook ~2.5 billion users", "4G cellular networks (5G coming)" | Dated framing. 5G is broadly deployed (3GPP Release 15+, in both non-standalone and standalone modes). |
| 15 | 🟡 | Deck 5.2 | Topic outline lists "Mobility management: practice — Mobile IP", but no Mobile IP slides follow; a later slide says such architectures "exist (mobile IP) for 4G-like mobility, **but not used**" | Reviewer unit 5.2 presents home agent / foreign agent as current practice. Reframe as a conceptual/historical model — production mobility uses the 4G/5G EPC tunnelling described in the same deck. |
| 16 | 🟡 | `Networking 2/data.js` | Terms with **no** deck backing: `RTP` (1.2); `MED`, `Route aggregation` (3.2); `Poisoned reverse` (3.1 — the deck says only "see text for solutions") | Correct Kurose textbook material that the slides omit. **Keep**, labelled as beyond-deck. |
| 17 | 🟡 | `src/subjects/networking2/data.ts` | Topic "Advanced IPv4 Subnetting (VLSM)" | Appears in **no** deck. It is standard networking material and useful. **Keep**, labelled as a beyond-deck supplement. |
| 18 | 🟡 | `src/subjects/networking2/data.ts:11` | `estimatedHours: 12` | The file's own topics total 235 minutes ≈ 3.9 hours. Derive the value from `topics`, as `sia1` and `mobile` already do. |

### Structural finding — two disagreeing datasets

Beyond individual claims, the repository ships **two Networking 2 datasets that do not describe the
same course**:

| | `Networking 2/data.js` (vanilla) | `src/subjects/networking2/data.ts` (SPA) |
|---|---|---|
| Topics | 15, matching the decks unit-for-unit | 4 — TCP reliability, OSPF, VLANs, VLSM |
| Deck coverage | ~100% of units | ~4 of 15 units; one topic (VLSM) in no deck |
| Glossary | 293 terms | 12 terms |
| Assessment | 15 tests × 30 questions | 4 questions |

A student opening the React platform sees roughly a quarter of the syllabus. This is the single
largest gap found, and it is being resolved by rebuilding the SPA dataset onto the same 15 units.

### Assessment quality finding

All **450** practice questions in `Networking 2/data.js` were machine-generated from glossary
definitions, which produced three systematic defects:

1. **339 of 450** stems are the template `What is <term>?` — pure definition recall, no application.
2. **450 of 450** `explain` fields are a **verbatim copy of the correct option**. The field teaches
   nothing; it restates what the student just picked.
3. Distractors are sampled from unrelated units. The "What is Host?" item in test 1.1 offers
   _"YANG gives shared meaning and structure to configuration data"_ as an option — eliminable
   without knowing any networking.

Net effect: a student can score well by pattern-matching topic vocabulary. This is being repaired
rather than extended.

---

## Table 4 — Coverage gaps (work manifest)

Concepts taught in the decks with no representation in `Networking 2/data.js`.

| Unit | Missing concepts |
|---|---|
| 1.1 | The four delay components (`d_proc`, `d_queue`, `d_trans`, `d_prop`) — the reviewer has only a single bare term `Delay`; access technologies (HFC, cable headend, CMTS, DSL, DSLAM, FDM); physical media (Cat5/Cat6 twisted pair, coax, fiber, terrestrial microwave, satellite ≈270 ms); Internet structure (IXP, tier-1, peering, regional ISP, content-provider network, PoP); `traceroute`; introductory security (virus, worm, spyware, botnet, DDoS, packet sniffing, IP spoofing) |
| 1.2 | Non-persistent vs. persistent HTTP and the 2·RTT + transmission-time model; HTTP/2, HTTP/3, head-of-line blocking, QUIC; DNS root/TLD/authoritative/local hierarchy; iterative vs. recursive resolution; RR types A, CNAME, NS, MX; DNS cache poisoning, amplification, DNSSEC; BitTorrent (256 Kb chunks, tracker, torrent, churn); CBR vs. VBR; DASH manifest file; CDN *enter-deep* vs. *bring-home*; OTT |
| 2.1A | Connectionless demultiplexing on destination port **only** vs. connection-oriented 4-tuple demultiplexing; **the Internet checksum is weak** — the deck's own slide demonstrates two compensating bit flips leaving the checksum unchanged |
| 2.2A | Switching fabric types (memory, bus, interconnection/crossbar, multistage); **input-queue head-of-line blocking**; input vs. output queueing; line-speed lookup; drop policy and scheduling discipline (with the deck's network-neutrality note) |
| 3.1 | Dijkstra complexity O(n²) with O(n log n) implementations, and O(n²) message complexity; the Bellman-Ford equation; distance vector as iterative / asynchronous / distributed / self-stopping; "good news travels fast, bad news travels slow"; link-state oscillation; distance-vector black-holing; the global-vs-decentralized and static-vs-dynamic classification |
| 3.2 | BGP message types (OPEN, UPDATE, KEEPALIVE, NOTIFICATION); the four-step route selection order (local preference → shortest AS-PATH → closest NEXT-HOP → tiebreak); OpenFlow and the SDN controller's northbound RESTful API; **the ICMP type/code table and how traceroute uses it** (TTL expired 11/0, port unreachable 3/3) — currently a single bare term parked in unit 2.2A |
| 3.3 | `GetBulkRequest`; the CLI / SNMP-MIB / NETCONF-YANG three-approach framing; NETCONF operations `<get-config>`, `<get>`, `<edit-config>`, `<lock>`/`<unlock>`, `<create-subscription>` |
| 4.1 | **Channelization: FDMA, TDMA, CDMA**; **controlled access: polling, token passing**; ALOHA and slotted ALOHA; the three-class MAC taxonomy (channel partitioning / random access / taking turns); DOCSIS upstream MAP frames |
| 4.2 | Binary exponential backoff; 802.1Q tag mechanics on trunk ports; the switches-vs-routers comparison; bus vs. switched topology and collision domains |
| 4.3 | MPLS header fields (label, Exp, S, TTL); RSVP-TE signalling; datacenter tier-1 / tier-2 / TOR hierarchy; application-layer load balancing; RoCE; ECN with DCTCP/DCQCN; **"a day in the life of a web request"** — the deck's capstone synthesis (DHCP → ARP → DNS → TCP handshake → HTTP), entirely absent |
| 5.1 | BSS; passive vs. active scanning (beacon vs. probe request/response); the 802.11 generation table with rates, ranges and bands; the SNR↔BER trade-off; rate adaptation; power management via beacon; CDMA chipping sequences; Bluetooth piconet (master / client / parked, 79 channels, frequency hopping) |
| 5.2 | IMSI and SIM identity; eNodeB; HSS; GTP tunnelling; the LTE stack (PDCP, RLC, MAC, PHY); OFDM; base-station association via synchronisation signals; sleep modes; **indirect vs. direct routing and triangle routing**; 5G NR, FR1/FR2, millimetre wave, MIMO, pico-cells |
| 6.1 / 6.2 | Only 20 terms cover two whole units. Missing: DES / 3DES / AES; RSA; cipher-text-only, known-plaintext and chosen-plaintext attacks; the ap1.0 → ap5.0 authentication ladder; message digest; MD5/SHA; secure e-mail composition; TLS cipher suites and the 1.3-vs-1.2 narrowing |
| 6.3 | SPI; **802.11 security — WPA3 handshake, EAP, EAPoL, RADIUS, authentication server**; **4G LTE authentication** (auth_token, xres_HSS, res_M, K_HSS-M, K_BS-M) and the 4G→5G changes (home-network authentication decision, encrypted IMSI); application gateways |

---

## Sources

Verified 2026-08-17.

- [RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3](https://datatracker.ietf.org/doc/rfc8446/) — IETF
- [RFC 9113 — HTTP/2](https://datatracker.ietf.org/doc/rfc9113/) — IETF
- [RFC 9114 — HTTP/3](https://datatracker.ietf.org/doc/rfc9114/) — IETF
- [RFC 5321 — Simple Mail Transfer Protocol](https://datatracker.ietf.org/doc/rfc5321/) — IETF
- [RFC 6151 — Updated Security Considerations for MD5 and HMAC-MD5](https://datatracker.ietf.org/doc/rfc6151/) — IETF
- [RFC 9395 — Deprecation of the Internet Key Exchange Version 1 (IKEv1) Protocol](https://www.rfc-editor.org/info/rfc9395/) — RFC Editor
- [NIST: Transitioning Away from SHA-1 for All Applications](https://csrc.nist.gov/news/2022/nist-transitioning-away-from-sha-1-for-all-apps) — NIST CSRC
- [NIST SP 800-131A Rev. 2 — Transitioning the Use of Cryptographic Algorithms and Key Lengths](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf) — NIST
- [IEEE SA — IEEE 802.3df-2024 (800 Gb/s Ethernet)](https://standards.ieee.org/ieee/802.3df/11107/) — IEEE Standards Association
- [Bluetooth Core Specification — Baseband Specification](https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core-54/out/en/br-edr-controller/baseband-specification.html) — Bluetooth SIG
- [Root Server Technical Operations Association](https://root-servers.org/) — root-servers.org
- [IEEE 802.11be-2024 (Wi-Fi 7)](https://en.wikipedia.org/wiki/IEEE_802.11be-2024) — secondary; confirm against the IEEE SA catalogue before quoting a publication date
