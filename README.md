# Visual Persuasive Factors

Project page for **Do Vision-Language Models Understand Visual Persuasiveness? A Diagnosis via Visual Persuasive Factors**, by Gyuwon Park and Hyounghun Kim (Findings of EMNLP 2026).

- Paper: https://arxiv.org/abs/2511.17036
- Research code: https://github.com/gyuwon12/visual-persuasive-factors
- Project page: https://gyuwon12.github.io/vpf-project/

## Local preview

```sh
python -m http.server 8000
```

Open http://localhost:8000. No build step or dependencies are required.

## Editing

`index.html` contains the research content and LaTeX-derived main tables. `style.css` controls layout and table styling. `script.js` handles citation copying and section navigation. `assets/` contains the paper figures and institutional logos.

## GitHub Pages

In repository Settings → Pages, choose **Deploy from a branch**, **main**, and **/ (root)**, then save.

Layout inspired by https://nvlabs.github.io/prismatic-synthesis/. BibTeX cites the arXiv record pending a final proceedings citation.
