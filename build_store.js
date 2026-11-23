const fs = require('fs');
const path = require('path');

function parseMarkdownFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) return { meta: {}, body: content };
    const rawMeta = match[1];
    const body = match[2];
    const meta = {};
    rawMeta.split(/\r?\n/).forEach(line => {
        const colon = line.indexOf(':');
        if (colon > 0) {
            const key = line.slice(0, colon).trim();
            let val = line.slice(colon + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            meta[key] = val;
        }
    });
    return { meta, body };
}

// 1. Articles
const articlesDir = 'content/articles';
const articles = [];
if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir).sort();
    files.forEach(f => {
        if (f.endsWith('.md')) {
            const raw = fs.readFileSync(path.join(articlesDir, f), 'utf8');
            const { meta, body } = parseMarkdownFrontmatter(raw);
            articles.push({
                slug: f.replace(/\.md$/, ''),
                ...meta,
                body: body.trim()
            });
        }
    });
}

// 2. Practices
const practicesDir = 'content/practices';
const practices = [];
if (fs.existsSync(practicesDir)) {
    const files = fs.readdirSync(practicesDir).sort();
    files.forEach(f => {
        if (f.endsWith('.json')) {
            const raw = fs.readFileSync(path.join(practicesDir, f), 'utf8');
            try {
                practices.push({
                    slug: f.replace(/\.json$/, ''),
                    ...JSON.parse(raw)
                });
            } catch (e) {
                console.error('Error parsing', f, e);
            }
        }
    });
}
practices.sort((a, b) => (a.order || 99) - (b.order || 99));

// 3. Settings
let settings = {};
if (fs.existsSync('content/settings.json')) {
    settings = JSON.parse(fs.readFileSync('content/settings.json', 'utf8'));
}

const storeContent = `// Otomatik oluşturulmuş içerik deposu (Hem yerel hem Netlify için)
window.SITE_CONTENT = {
  settings: ${JSON.stringify(settings, null, 2)},
  practices: ${JSON.stringify(practices, null, 2)},
  articles: ${JSON.stringify(articles, null, 2)}
};
`;

fs.writeFileSync('js/content-store.js', storeContent, 'utf8');
console.log('js/content-store.js generated successfully! Articles:', articles.length, 'Practices:', practices.length);
