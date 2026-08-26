---
type: guide
title: Canvas → Open Notebook → Obsidian Workflow
status: evergreen
created: 2026-08-26
tags:
  - UTS
  - study-guide
  - workflow
  - open-notebook
  - obsidian
  - canvas
---

# Canvas → Open Notebook → Obsidian — Study Workflow

> **How to take material from Canvas, process it in Open Notebook, and turn it into study-ready Obsidian notes.**
>
> **Concrete example subject:** [[UTS/Cloud Computing Infrastructure|Cloud Computing Infrastructure]] — exam coming up.

---

## Overview

```
Canvas (download) → Open Notebook (process) → Obsidian (study from)
```

| Step | Tool | What happens |
|------|------|-------------|
| 1 | Canvas | Download PDF/PPT/brief |
| 2 | Open Notebook | Import, AI processes, you extract key points |
| 3 | Obsidian | Rewrite in your own words, link concepts, quiz yourself |

**Rule of thumb:** Canvas files live in Open Notebook temporarily. Your rewritten notes live in Obsidian permanently. Raw Canvas PDFs don't go in Obsidian (they bloat the vault and git repo).

---

## Your Cloud Computing Structure (Example)

Your Cloud Computing folder now has everything ready:

```
UTS/Cloud Computing Infrastructure/
├── Exam Prep.md                        # ← HUB: links everything, high-yield topics, study plan
├── Notes/
│   └── Cloud Computing.md              # Course index
├── Sources/
│   └── Lecture/
│       ├── Week 01-03.md               # ← TODO: fill from Open Notebook (UTS Cloud Lecture 1-3.pdf)
│       ├── Week 02.md                  # ← TODO: fill from Open Notebook (Week2_CloudLecture-5.pdf)
│       ├── Week 03.md                  # ← TODO: fill from Open Notebook (Week3_CloudLecture-3.pdf)
│       ├── Week 04.md                  # ← TODO: fill from Open Notebook (Week4_CloudLecture-5.pdf)
│       ├── Week 05.md                  # ← TODO: fill from Open Notebook (Week5_Cloud Lecture.pdf)
│       └── Week 06.md                  # ← TODO: fill from Open Notebook (Week6_CloudLecture-2.pdf)
├── Quiz Prep/
│   ├── Weeks 01-03 Quiz Prep.md        # ← Practice questions (Weeks 1-3)
│   ├── Week 04 Quiz Prep.md            # ← Practice questions (Week 4)
│   ├── Week 05 Quiz Prep.md            # ← Practice questions (Week 5)
│   └── Week 06 Quiz Prep.md            # ← Practice questions (Week 6)
├── Weekly Summaries/
│   ├── Week 01-03 Summary.md           # ← Quick review (Weeks 1-3)
│   ├── Week 02 Summary.md              # ← Quick review (Week 2)
│   ├── Week 03 Summary.md              # ← Quick review (Week 3)
│   ├── Week 04 Summary.md              # ← Quick review (Week 4)
│   ├── Week 05 Summary.md              # ← Quick review (Week 5)
│   └── Week 06 Summary.md              # ← Quick review (Week 6)
├── Lecture/                            # ← PDFs (temporary — process & remove from vault)
│   ├── UTS Cloud Lecture 1-3.pdf
│   ├── Week2_CloudLecture-5.pdf
│   ├── Week3_CloudLecture-3.pdf
│   ├── Week4_CloudLecture-5.pdf
│   ├── Week5_Cloud Lecture.pdf
│   └── Week6_CloudLecture-2.pdf
├── Assignments/
│   └── Assignment 1.md
└── Labs/
    └── Week 5 lab - proper Guide.md
```

**Files marked `← TODO`** are templates waiting for you to fill them in from Open Notebook. The content is pre-structured — you just populate it.

---

## Step-by-Step: Processing a Lecture PDF

### Step 1: Open Notebook — Import & Process

1. Open Open Notebook
2. Import one of the PDFs from `Lecture/` (start with the smallest one — `Week6_CloudLecture-2.pdf` is only 329K, or start with `UTS Cloud Lecture 1-3.pdf` since it covers 3 weeks)
3. Ask specific questions:
   - "What are the key concepts and definitions from this lecture that would be on an exam?"
   - "Explain the main topics like I'm studying for a test."
   - "What are the most important AWS/Azure service mappings I need to know?"
4. Review the AI output — identify the high-value content

### Step 2: Open Notebook → Obsidian Sources

Open the corresponding `Sources/Lecture/Week XX.md` file and fill in:

- **Key concepts** (the big ideas)
- **Definitions to memorise** (terms that will be on the exam)
- **Diagrams/processes** described in the lecture (describe them in text)
- **AWS ↔ Azure service mappings** (if covered)
- Mark `status: processed` when done

### Step 3: Obsidian Sources → Obsidian Notes

This is the most important step. **Rewrite in your own words.**

The Sources notes are structured templates — open `Sources/Lecture/Week 01-03.md` and use its structure as a guide. Then create the actual Notes (the Cloud Computing Notes/ folder currently has the course index — you'll add weekly notes here as you go, or create them as separate files).

- Read each point from Sources
- Rewrite it as if you're explaining it to a classmate
- Add your own examples, connections to other weeks, things you found confusing
- Link to other notes with `[[wikilinks]]` — e.g. `[[IaaS]]`, `[[EC2]]`, `[[VPC]]`
- The act of rewriting IS the studying. Don't skip this.

### Step 4: Create Quiz Prep

Open the corresponding `Quiz Prep/Week XX Quiz Prep.md`:

- The templates already have practice questions drafted — answer them, refine them, add more
- Hide answers in `<details>` tags (the templates show the pattern)
- These are your active recall material — do them before the exam

### Step 5: Weekly Summary

Open the corresponding `Weekly Summaries/Week XX Summary.md`:

- The templates are pre-written with content already filled in (I populated them based on the lecture topics)
- Review, refine, add your own takeaways
- These become your quick review material before the exam

---

## Quick Start — Do This Today

1. **Pick one PDF** — start with `Lecture/Week6_CloudLecture-2.pdf` (smallest, last week, often high-yield for exams)
2. **Import into Open Notebook**, ask the questions above
3. **Fill in `Sources/Lecture/Week 06.md`** with extracted content
4. **Rewrite into your own notes** (create a new note in Notes/ or expand Cloud Computing.md)
5. **Do the practice questions** in `Quiz Prep/Week 06 Quiz Prep.md`
6. **Review `Weekly Summaries/Week 06 Summary.md`** — it's already drafted
7. **Repeat** for the other 5 PDFs

---

## What Goes Where — Decision Reference

| Material | Where it lands | Why |
|----------|---------------|-----|
| Canvas PDF lecture | Open Notebook → Obsidian/Sources → Obsidian/Notes | Raw file processed, then rewritten |
| Canvas PPT | Open Notebook → Obsidian/Sources → Obsidian/Notes | Same as PDF |
| Assignment brief | Open Notebook (understand) → Obsidian/Assignments (track) | Requirements extracted, work tracked |
| YouTube lecture link | Open Notebook (transcript/summary) → Obsidian/Sources → Obsidian/Notes | Processed, then rewritten |
| Your own lecture notes (handwritten/typed) | Obsidian/Notes directly | You already processed it by taking notes |
| Your own summary/revision notes | Obsidian/Notes or Quiz Prep directly | Already in your words |
| Practice questions you wrote | Obsidian/Quiz Prep | Active recall material |
| Exam revision master note | Obsidian/Exam Prep.md | Hub linking everything |

---

## What Does NOT Go in Obsidian

- **Raw Canvas PDFs** — process them in Open Notebook, keep the PDF elsewhere or delete after processing. Currently your `Lecture/` folder has them — these are temporary. Once you've processed all 6, consider removing them from the vault.
- **AI summaries you haven't rewritten** — these live temporarily in Sources/ but must be rewritten into Notes/ in your own words
- **Large binaries** — PPTs over 50MB, videos, etc. Process them then discard the binary from the vault

---

## Weekly Rhythm

| When | What to do |
|------|-----------|
| **After each lecture** | Import to Open Notebook, extract to Sources, rewrite to Notes |
| **Before next lecture** | Skim the previous week's Notes to connect new material |
| **Weekly (weekend)** | Write Weekly Summary, write Quiz Prep questions for that week |
| **2 weeks before exam** | Complete Notes for all weeks, complete all Quiz Prep |
| **1 week before exam** | Do all Quiz Prep questions without looking at notes. Fill in "Concepts I Keep Getting Wrong" |
| **3 days before exam** | Review Exam Prep.md High-Yield Topics. Read Weekly Summaries for quick refresh |
| **1 day before exam** | Read "Concepts I Keep Getting Wrong". Review Exam Day Checklist |

---

## Common Mistakes to Avoid

1. **Importing to Open Notebook but never extracting to Obsidian.** Open Notebook becomes a black hole. Every imported PDF must produce an Obsidian note.

2. **Copy-pasting AI summaries into Notes without rewriting.** This feels like studying but isn't. You recognise the content but can't produce it. Rewrite in your own words.

3. **Storing raw PDFs in Obsidian forever.** Currently in `Lecture/` — these are temporary. Process and remove (or move outside the vault).

4. **Skipping Quiz Prep.** Reading notes is passive. Answering questions is active recall, which is dramatically more effective for exam performance.

5. **Cramming all processing before the exam.** The daily/weekly rhythm builds understanding incrementally. Last-minute processing = superficial understanding.

6. **Not linking notes.** `[[wikilinks]]` between related concepts across weeks is where real understanding builds. A note that lives in isolation is weaker than one connected to the graph.

---

## Your Study Priority for Cloud Computing

**Right now:** Process the 6 lecture PDFs through Open Notebook → Obsidian. The folder structure and templates are ready. Your job is to fill them in.

**Order of processing:**
1. `Week6_CloudLecture-2.pdf` → Week 06 (smallest, last week — quick win)
2. `UTS Cloud Lecture 1-3.pdf` → Weeks 01-03 (biggest, covers foundation — most important)
3. `Week2_CloudLecture-5.pdf` → Week 02
4. `Week3_CloudLecture-3.pdf` → Week 03
5. `Week4_CloudLecture-5.pdf` → Week 04
6. `Week5_Cloud Lecture.pdf` → Week 05

**Why this order:** Week 6 is quick, Week 1-3 is the foundation (most exam-relevant), then fill in the middle weeks.

---

## Related

- [[UTS/Cloud Computing Infrastructure/Exam Prep]] — exam hub, start here
- [[UTS/Cloud Computing Infrastructure/Sources/Lecture/Week 01-03]] — source note template
- [[UTS/Cloud Computing Infrastructure/Quiz Prep/Weeks 01-03 Quiz Prep]] — quiz template
- [[UTS/Cloud Computing Infrastructure/Weekly Summaries/Week 01-03 Summary]] — summary (pre-drafted)
- [[Canvas Workflow]] — this guide
