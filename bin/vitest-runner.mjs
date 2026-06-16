#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

// Windows fix (assembly.md §6/§7): Vitest 4 crashes with
// "Cannot read properties of undefined (reading 'config')" when the drive-letter
// case in the ESM-resolved path differs (d: vs D:). Normalize it to upper-case.
const normalizeDrive = (value) => value.replace(/^[a-z]:/, (drive) => drive.toUpperCase());

const require = createRequire(import.meta.url);
const vitestPkgPath = normalizeDrive(require.resolve('vitest/package.json'));
const vitestBin = normalizeDrive(join(dirname(vitestPkgPath), 'vitest.mjs'));
const cwd = normalizeDrive(process.cwd());

const forwarded = process.argv.slice(2);
const args = forwarded.length > 0 ? forwarded : ['run'];

const result = spawnSync(process.execPath, [vitestBin, ...args], {
  cwd,
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
