import { readFile, writeFile } from 'node:fs/promises';
import { checkIndexNowPages, submitIndexNow } from '../lib/indexnow.mjs';

const args = process.argv.slice(2);
const allowed = new Set(['--urls-file', '--output', '--submit']);
let urlsFile;
let outputFile;
let submit = false;
for (let i = 0; i < args.length; i++) {
  if (!allowed.has(args[i])) throw new Error('Use --urls-file <JSON file>, optional --output <receipt file>, and --submit to notify search engines.');
  if (args[i] === '--submit') submit = true;
  else {
    const value = args[++i];
    if (!value || value.startsWith('--')) throw new Error('A file option is missing its path.');
    if (args[i - 1] === '--urls-file') urlsFile = value;
    else outputFile = value;
  }
}

try {
  if (!urlsFile) throw new Error('Provide the changed canonical page URLs as a JSON array with --urls-file.');
  const values = JSON.parse(await readFile(urlsFile, 'utf8'));
  const receipt = submit
    ? await submitIndexNow({ key: process.env.INDEXNOW_KEY || '', urls: values })
    : { checkedAt: new Date().toISOString(), dryRun: true, urls: await checkIndexNowPages(values), submitted: false, indexingVerified: false };
  if (outputFile) await writeFile(outputFile, JSON.stringify(receipt, null, 2) + '\n');
  console.log(JSON.stringify(receipt, null, 2));
  if (submit && !receipt.accepted) process.exitCode = 1;
} catch (error) {
  const message = error instanceof Error ? error.message : 'IndexNow preflight or submission failed.';
  console.error(message.replaceAll(process.env.INDEXNOW_KEY || '\u0000', '[verification value]'));
  process.exitCode = 1;
}
