import { readFileSync } from 'node:fs';
import ts from 'typescript';

// Load pure TypeScript modules without requiring a generated build for logic tests.
export function loadTypeScriptExports(path, imports = {}) {
  const source = readFileSync(path, 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  const exports = {};
  new Function('exports', 'require', outputText)(exports, (name) => {
    if (!(name in imports)) throw new Error(`Provide a test import for ${name}`);
    return imports[name];
  });
  return exports;
}
