# @nilmuse/vitest-runner

A [Vitest](https://vitest.dev) launcher for npm scripts, with a workaround for Windows
drive-letter casing crashes. It forwards arguments to the Vitest version installed in your project.

[![npm](https://img.shields.io/npm/v/@nilmuse/vitest-runner.svg?colorB=brightgreen)](https://www.npmjs.com/package/@nilmuse/vitest-runner)
[![NPM Downloads](https://img.shields.io/npm/dm/@nilmuse/vitest-runner.svg?style=flat)](https://www.npmjs.com/package/@nilmuse/vitest-runner)

---

## Installation

```bash
npm install -D @nilmuse/vitest-runner vitest
```

Requires Node.js 20.19 or later and Vitest 4 or later. Vitest is a peer dependency, so your
project chooses its version.

## Quick start

Add a script to your project's `package.json`. This example runs tests in `src`:

```json
{
  "scripts": {
    "test:unit": "vitest-runner run src"
  }
}
```

Run it with:

```bash
npm run test:unit
```

## CLI behavior

Arguments are passed unchanged to Vitest. For example, use `vitest-runner run tests` to run
tests from `tests`, or `vitest-runner --coverage` to pass the coverage flag.

With no arguments, the launcher passes `run`, which performs a single test run without
watching. Output is inherited from Vitest. The launcher returns Vitest's exit status, or `1`
if no status is available.

On Windows, it uppercases the drive letter in the resolved Vitest path and working directory.
This works around a Vitest 4 crash caused by a mismatch such as `d:` vs `D:`:
`Cannot read properties of undefined (reading 'config')`.
POSIX paths on Linux and macOS are unchanged. You can replace a per-project `run-vitest.mjs`
workaround with this launcher.

## License

MIT
