// build-search-index.js
// הרץ עם: node build-search-index.js
// יוצר search-index.js שמכיל את כל תוכן האתר לחיפוש

const fs   = require('fs');
const path = require('path');

const DIR    = __dirname;
const OUTPUT = path.join(DIR, 'search-index.js');

const SKIP = new Set([
  'index.html', 'search.html', 'about.html',
  'terms_and_conditions.html', 'privacy_policy.html',
  'vocabulary.html', 'sentences.html',
  'a1.html', 'a2.html', 'b1.html', 'b2.html', 'c1.html',
]);

function getLevel(filename) {
  if (/^a2-lesson/.test(filename)) return 'a2';
  if (/^b1-lesson/.test(filename)) return 'b1';
  if (/^b2-lesson/.test(filename)) return 'b2';
  if (/^c1-lesson/.test(filename)) return 'c1';
  if (/^(lesson|phonetics|greetings|practice)/.test(filename)) return 'a1';
  return 'gen';
}

function extractTitle(html) {
  // נסה לקחת את כותרת h1 הראשונה (אם יש)
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) {
    return h1[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  }
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (title) {
    return title[1].replace(/\s+/g, ' ').trim();
  }
  return '';
}

function extractText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = fs.readdirSync(DIR)
  .filter(f => f.endsWith('.html') && !SKIP.has(f))
  .sort();

const index = [];

for (const file of files) {
  try {
    const html  = fs.readFileSync(path.join(DIR, file), 'utf8');
    const title = extractTitle(html);
    const text  = extractText(html);
    const level = getLevel(file);

    if (!text || text.length < 50) continue; // דלג על דפים ריקים

    index.push({ level, url: file, title, text: text.slice(0, 2000) });
  } catch (e) {
    console.warn(`⚠️  דילג על ${file}: ${e.message}`);
  }
}

const output = `// נוצר אוטומטית על ידי build-search-index.js — אל תערכו ידנית
const SEARCH_INDEX = ${JSON.stringify(index)};
`;

fs.writeFileSync(OUTPUT, output, 'utf8');
console.log(`✅ נוצר search-index.js עם ${index.length} דפים`);
