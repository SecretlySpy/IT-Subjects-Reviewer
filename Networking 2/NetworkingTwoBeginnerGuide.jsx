import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Network, Layers, Globe2, Shield, Wifi, Server, Router, Lock, Cable, RadioTower, Map, KeyRound, Activity, ArrowRight, BookOpen, Cpu, Boxes, MonitorCog, Home, Menu, X } from "lucide-react";

import { topics, glossary, practiceTests } from "./data.js";
const iconMap = { intro: Globe2, application: Server, transport: Boxes, reliable_tcp: Activity, network_data: Router, routing_algorithms: Router, isp_bgp: Globe2, network_management: MonitorCog, datalink_control: Cable, lans_ethernet: Network, link_virtualization: Layers, wireless_networks: Wifi, mobile_networks: RadioTower, security_basics: Shield, ipsec_firewalls: Lock };

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
  const filteredGlossary = useMemo(() => query ? glossary.filter(([term, def]) => `${term} ${def}`.toLowerCase().includes(query.toLowerCase())) : glossary, [query]);

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
            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">This compiled guide turns the Networking 2 PDFs into a simple, visual learning path. Start with the dashboard, jump to any topic, then use diagrams, analogies, flashcards, and 30-item practice tests for each module.</p>
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
              const Icon = iconMap[t.id] || Globe2;
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
            {filteredGlossary.length ? filteredGlossary.map(([term, def]) => (
              <Card key={term}>
                <h3 className="text-xl font-black">{term}</h3>
                <p className="mt-2 leading-7 text-slate-600">{def}</p>
              </Card>
            )) : (
              <Card>
                <h3 className="text-xl font-black">No matching terms</h3>
                <p className="mt-2 leading-7 text-slate-600">Try another networking keyword.</p>
              </Card>
            )}
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
