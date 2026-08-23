# Networking 2 — Source Lecture Decks

This directory holds the lecture decks that define the Networking 2 syllabus, recorded here so that
every claim in the reviewer can be traced back to a source.

**Location matters.** These files sit under `docs/` and **not** inside `Networking 2/`, because
`vite.config.ts` copies each reviewer directory into `dist/` wholesale
([vite.config.ts:28-35](../../vite.config.ts)). Placing them in the reviewer folder would publish
several hundred kilobytes of lecture text to the public GitHub Pages site.

---

## Provenance

Fifteen decks are adapted from **Kurose & Ross, _Computer Networking: A Top-Down Approach_,
8th edition** (Pearson, 2020), whose slide sets carry the authors' standard reuse notice. One
additional deck (`3.1 Link_Layer_Overview.md`, first half, duplicated as `DataLink_Layer_1_.md`) is a
Forouzan-style data-link treatment from a different source.

---

## ⚠️ These files are OCR extractions, not clean text

Every file here was extracted from PDF or PowerPoint, and the extraction is lossy. Before quoting
anything from these files, understand the following failure modes:

| Symptom | Example | What it really is |
|---|---|---|
| Bullet glyphs became mojibake | `ï§`, `â¢`, `âª`, `ï` | PowerPoint bullet characters, mis-decoded |
| Smart quotes and dashes broke | `âstateless â`, `Internetâs` | Curly quotes and apostrophes |
| Tables shredded into pipe fragments | Long runs of `\| --- \| --- \|` with letters scattered across cells | Slide diagrams and tables, destroyed by column detection |
| Words split character by character | `s e n de r : breaks application messages` | Text laid out in slide shapes rather than paragraphs |
| Figures vanished entirely | Bare labels like `R2`, `AS3`, `H1` with no diagram | Images, which carry no extractable text |

**Numerals are the dangerous case.** Two confirmed corruptions:

- `RFC 531` in the e-mail slide of `1.2 Application Layer.md` — SMTP is **RFC 5321**, which the same
  deck states correctly two slides earlier.
- `625 msec sec. slot` for Bluetooth in `5.1 Wireless_Networks.md` — the Bluetooth baseband
  specification defines **625 microseconds**.

> **Never quote a number, RFC identifier, date, or rate from these files without checking it against a
> primary source.** `docs/networking2/CONTENT-REVIEW.md` Table 3 records the eighteen findings that
> came out of doing exactly that.

### Transcription caveat

These files were reconstructed from the decks as supplied to the authoring session rather than copied
from an original on disk. They faithfully preserve the extraction damage described above, which is
deliberate — "cleaning up" the text would hide the corruption that the review depends on noticing.
Treat them as a **working record of what the decks said**, not as a byte-exact archive. If the
original PDF or PPTX files are available, they should replace these.

---

## Deck ↔ reviewer unit mapping

The filenames are **not** in reviewer-unit order. Two of them are numbered inconsistently with their
own contents — see `docs/networking2/CONTENT-REVIEW.md` Finding 1.1.

| File | Reviewer unit | Note |
|---|---|---|
| `1.1 Computer Networks and the Internet.md` | 1.1 | |
| `1.2 Application Layer.md` | 1.2 | |
| `2.1 Transport_Layer.md` | 2.1A | ⚠️ Truncated at slide 3-27; unit 2.1B has no source |
| `2.2 Network_Layer.md` | 2.2A | ⚠️ Truncated at slide 4-19; IP addressing has no source |
| `4.1 Link_Layer_Control_Plane.md` | **3.1** | 🟠 Contains network-layer routing, not link layer |
| `3.2 ISP_Routing.md` | 3.2 | |
| `3.3 Network_Management_Protocol.md` | 3.3 | |
| `3.1 Link_Layer_Overview.md` | **4.1** | 🟠 Contains link-layer material despite its number |
| `DataLink_Layer_1_.md` | 4.1 | 🟡 Duplicates the first half of the file above |
| `4.2 Link_Layer_LANs.md` | 4.2 | |
| `4.3 Link_Virtualization.md` | 4.3 | |
| `5.1 Wireless_Networks.md` | 5.1 | |
| `5.2 Mobile_Networks.md` | 5.2 | |
| `6.1 Computer_Network_Security_Overview.md` | 6.1 / 6.2 | |
| `6.2 Authentication_and_Security.md` | 6.1 / 6.2 | |
| `6.3 Network_Layer_Security.md` | 6.3 | |

---

## How these are used

`Networking 2/data.js` and `src/subjects/networking2/data.ts` were both reconciled against these
decks. Where the reviewer teaches something the decks do not cover, or corrects something the decks
get wrong, it says so in a lesson callout:

- `tone: "note"` — added beyond the decks (worked examples, textbook material the slides omit)
- `tone: "warning"` — a factual error or stale figure in the decks, with the corrected value
- `tone: "security"` — a deprecated or broken cryptographic primitive the decks present as current

See [`docs/networking2/CONTENT-REVIEW.md`](../networking2/CONTENT-REVIEW.md) for the full audit.
