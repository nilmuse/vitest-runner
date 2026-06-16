import { describe, expect, it } from 'vitest';

const normalizeDrive = (value: string): string =>
  value.replace(/^[a-z]:/, (drive) => drive.toUpperCase());

describe('@ux-ui/vitest-runner', () => {
  it('upper-cases a lower-case drive letter', () => {
    expect(normalizeDrive('d:/Projects/npm')).toBe('D:/Projects/npm');
  });

  it('leaves an already upper-case drive untouched', () => {
    expect(normalizeDrive('D:/Projects/npm')).toBe('D:/Projects/npm');
  });

  it('leaves POSIX paths untouched', () => {
    expect(normalizeDrive('/home/ci/project')).toBe('/home/ci/project');
  });
});
