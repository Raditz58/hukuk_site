import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom plugin to provide persistent article CRUD API during dev/preview
function articlesApiPlugin() {
  const dataFilePath = path.resolve(__dirname, 'src/data/articles.json');

  return {
    name: 'articles-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/articles')) {
          return next();
        }

        const url = new URL(req.url, `http://${req.headers.host}`);
        const id = url.pathname.split('/api/articles/')[1];

        // Ensure file exists
        if (!fs.existsSync(dataFilePath)) {
          const dir = path.dirname(dataFilePath);
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf-8');
        }

        // GET all
        if (req.method === 'GET') {
          try {
            const raw = fs.readFileSync(dataFilePath, 'utf-8');
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.statusCode = 200;
            return res.end(raw);
          } catch (err) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: 'Failed to read articles' }));
          }
        }

        // Collect body helper
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
            const currentArticles = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8') || '[]');

            // POST new
            if (req.method === 'POST') {
              const newArticle = JSON.parse(body);
              currentArticles.unshift(newArticle);
              fs.writeFileSync(dataFilePath, JSON.stringify(currentArticles, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 201;
              return res.end(JSON.stringify(newArticle));
            }

            // PUT update
            if (req.method === 'PUT' && id) {
              const updatedArticle = JSON.parse(body);
              const index = currentArticles.findIndex((a: any) => String(a.id) === String(id));
              if (index !== -1) {
                currentArticles[index] = { ...currentArticles[index], ...updatedArticle };
                fs.writeFileSync(dataFilePath, JSON.stringify(currentArticles, null, 2), 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                return res.end(JSON.stringify(currentArticles[index]));
              } else {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: 'Article not found' }));
              }
            }

            // DELETE
            if (req.method === 'DELETE' && id) {
              const filtered = currentArticles.filter((a: any) => String(a.id) !== String(id));
              fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              return res.end(JSON.stringify({ success: true }));
            }

            next();
          } catch (err) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: 'Internal Server Error' }));
          }
        });
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    articlesApiPlugin()
  ],
  server: {
    port: 3000,
    open: false
  }
});
