import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const source = readFileSync(join(root, 'app/blog/photoStories.ts'), 'utf8');
const plans = JSON.parse(readFileSync(join(root, 'app/blog/photoStoryPlans.json'), 'utf8'));
const titles = [...source.matchAll(/^    title: '([^']+)',/gm)].map((match) => match[1]);
if (plans.length !== 36 || titles.length !== plans.length) {
  throw new Error(`Expected 36 matching photo stories; found ${titles.length} titles and ${plans.length} plans.`);
}

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const wrap = (value, limit = 23) => {
  const rows = [];
  let row = '';
  for (const word of value.split(' ')) {
    if (`${row} ${word}`.trim().length > limit && row) {
      rows.push(row);
      row = word;
    } else {
      row = `${row} ${word}`.trim();
    }
  }
  if (row) rows.push(row);
  return rows;
};
const out = join(root, 'public/process/stories');
mkdirSync(out, { recursive: true });

for (const [index, plan] of plans.entries()) {
  if (plan.steps.length !== 4) throw new Error(`Story ${index + 1} must have four specific steps.`);
  const slug = titles[index].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const cards = plan.steps.map((step, stepIndex) => {
    const x = 50 + stepIndex * 287;
    const lines = wrap(step);
    const lineSvg = lines.map((line, rowIndex) => `<text x="${x + 24}" y="${340 + rowIndex * 31}" class="step">${escape(line)}</text>`).join('');
    return `<g>
      <rect x="${x}" y="240" width="263" height="220" rx="14" fill="#ffffff" stroke="#dcded4"/>
      <circle cx="${x + 48}" cy="284" r="23" fill="#6c7868"/>
      <text x="${x + 48}" y="291" text-anchor="middle" class="number">${stepIndex + 1}</text>
      ${lineSvg}
    </g>`;
  }).join('');
  const heading = wrap(plan.diagramHeading, 34).map((line, rowIndex) => `<text x="50" y="${109 + rowIndex * 57}" class="heading">${escape(line)}</text>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="680" viewBox="0 0 1200 680" role="img" aria-labelledby="title desc">
  <title id="title">${escape(plan.diagramHeading)}</title>
  <desc id="desc">${escape(plan.steps.join('. '))}</desc>
  <style>.eyebrow{font:700 17px Arial,sans-serif;letter-spacing:4px;fill:#566153}.heading{font:46px Georgia,serif;fill:#242a25}.number{font:700 20px Arial,sans-serif;fill:white}.step{font:24px Arial,sans-serif;fill:#283028}.footer{font:18px Arial,sans-serif;fill:#5d655b}</style>
  <rect width="1200" height="680" fill="#f4f2eb"/>
  <text x="50" y="45" class="eyebrow">LOKEIL  /  PROCESS NOTES  /  ${String(index + 1).padStart(2, '0')}</text>
  ${heading}
  <line x1="50" y1="210" x2="1150" y2="210" stroke="#bac2b4"/>
  ${cards}
  <line x1="50" y1="510" x2="1150" y2="510" stroke="#bac2b4"/>
  <text x="50" y="555" class="footer">A planning sequence for the detail shown in this photograph.</text>
  <text x="50" y="590" class="footer">The final assembly depends on site conditions and selected products.</text>
  <text x="50" y="645" class="eyebrow">LOKEIL RENOVATION  ·  NEW YORK CITY</text>
</svg>`;
  writeFileSync(join(out, `${slug}.svg`), svg);
}
console.log(`Generated ${plans.length} photo specific process diagrams.`);
