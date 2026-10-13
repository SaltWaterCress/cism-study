# CISM Study Hub

A free, self-hosted study site for the **ISACA CISM** exam. It follows the **updated exam outline that takes effect on 3 November 2026**.

**Live site:** `https://<your-github-username>.github.io/cism-study/` (after you turn on GitHub Pages, see below)

## What's inside

| Page | What it does |
|---|---|
| **Home** (`index.html`) | Domain weightage, your progress, exam-date countdown, "think like a manager" rules, 8-week plan |
| **Study guide** (`study.html`) | Plain-English notes for all 4 domains / 8 subdomains / 36 topics, with exam angles and CISSP overlap. Search, plus a "mark as studied" tick |
| **Cheat sheet** (`cheatsheet.html`) | Formulas, risk terms, roles, document hierarchy, control types, RTO/RPO, recovery sites, test types, IR phases |
| **Flashcards** (`flashcards.html`) | 108 cards with spaced repetition (Leitner boxes). Filter by domain; keyboard shortcuts |
| **Practice exams** (`exam.html`) | 158 original scenario questions. Full mock (150 Q / 4 h, domain-weighted), half mock, quick quiz, domain drills, review-your-mistakes mode, timer, flagging, results by domain, history |

Other features: works offline (installable as an app on phone or desktop), dark mode, and no build step or dependencies. Progress is saved in your browser's localStorage.

### Domain weightage (from 3 Nov 2026)

| Domain | Weight |
|---|---|
| 1. Information Security Governance | 18% (was 17%) |
| 2. Information Security Risk Management | 20% |
| 3. Information Security Program | 33% |
| 4. Incident Management | 29% (was 30%) |

New topics in the 2026 outline: **enterprise architecture** and **information security architecture** (placed under Domain 3A here).

## Publish on GitHub Pages

1. Create an empty repo on GitHub called `cism-study`. Don't add a README.
2. From this folder, run:
   ```bash
   git remote add origin https://github.com/<your-username>/cism-study.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**. Set **Source** to *Deploy from a branch*, **Branch** to `main`, and the folder to `/ (root)`, then click **Save**.
4. After about a minute the site is live at `https://<your-username>.github.io/cism-study/`.

To preview locally, run `python3 -m http.server 8000` in this folder and open http://localhost:8000. You can also open `index.html` directly; everything except offline mode works that way.

## Repo layout

```
index.html  study.html  cheatsheet.html  flashcards.html  exam.html
assets/css/style.css     shared design (light + dark)
assets/js/core.js        nav, theme, storage, offline registration
data/domains.js          study guide content + mindset rules
data/questions-d1..4.js  question bank, one file per domain
data/cards-d1..4.js      flashcards, one file per domain
sw.js  manifest.json  icons/
```

## Adding content

All content lives in `data/`. No code changes are needed to add more.

**A question** (`data/questions-dN.js`):
```js
{ "id": "D3-051", "d": 3, "s": "3B",
  "q": "An information security manager learns that ... What should be done FIRST?",
  "o": ["Option", "Option", "Option", "Option"],
  "a": 2,                       // index of the correct option (0-3)
  "e": "Why the answer is best, and why the tempting distractor is wrong." }
```
Options are shuffled on screen, so don't write "A" or "B" in explanations.

**A flashcard** (`data/cards-dN.js`): `{ "id": "C3-33", "d": 3, "q": "Front", "a": "Back (may use <b>, <br>, <i>)" }`

**A study topic**: add an entry to a subdomain's `topics` array in `data/domains.js`.

After changing content, bump `VERSION` in `sw.js` (for example `cism-v2`) so installed copies refresh.

## Disclaimer

This is an independent study resource. It is not affiliated with or endorsed by ISACA®. CISM® is a registered trademark of ISACA. All questions are original practice material written for this site; they are not from the official exam or ISACA's QAE database. Always check the official [CISM Exam Content Outline](https://www.isaca.org/credentialing/cism) for the authoritative syllabus.
