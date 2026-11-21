# @ux-ui/vitest-runner

A thin [Vitest](https://vitest.dev) launcher for the `nilmuse` npm portfolio. It works around a
Windows-only Vitest 4 crash — `Cannot read properties of undefined (reading 'config')` — caused by
a drive-letter case mismatch (`d:` vs `D:`) in the ESM-resolved path (`assembly.md` §6/§7). On
Linux/macOS (and in CI) the normalization is a no-op.

This replaces the per-repo `run-vitest.mjs` scripts: the fix lives in one published dev-tool.

---

## Installation

```bash
npm install -D @ux-ui/vitest-runner vitest
```

`vitest` is a peer dependency — the consuming package owns its version.

---

## Usage

In a package `package.json`:

```json
{
  "scripts": {
    "test:unit": "vitest-runner run src"
  }
}
```

Arguments are forwarded verbatim to Vitest (`vitest-runner run src`, `vitest-runner run tests`,
`vitest-runner --coverage`, …). With no arguments it defaults to `run` (single, non-watch run).

---

## License

MIT
