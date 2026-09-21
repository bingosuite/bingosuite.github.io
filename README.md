# bingosuite.github.io

Docs site for [Bingo](https://github.com/bingosuite/bingo), built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed via GitHub Pages.

Docs content is pulled from the `bingo` repo's `docs/` folder at build time, nothing here is edited directly except `mkdocs.yml` and the workflow.

## Local dev

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/bingosuite/bingo.git bingo-src
cd bingo-src && git sparse-checkout set docs && cd ..
mkdir -p docs && cp -r bingo-src/docs/. docs/

python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Visit `http://localhost:8000`.

## Deploy

Push to `main`, or wait for `bingo` to trigger the `bingo-docs-updated` repository dispatch. GitHub Actions builds and publishes to Pages automatically.
