import { Article } from '../types';
import defaultArticles from '../data/articles.json';

const STORAGE_KEY = 'hukuk_site_articles_v1';

export const articleService = {
  // Get all articles
  async getArticles(): Promise<Article[]> {
    try {
      const res = await fetch('/api/articles');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          return data;
        }
      }
    } catch (e) {
      // fallback to localStorage or default
    }

    // Check localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (err) {
        console.error('Failed to parse cached articles', err);
      }
    }

    // Default
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
    return defaultArticles as Article[];
  },

  // Get article by slug
  async getArticleBySlug(slug: string): Promise<Article | null> {
    const articles = await this.getArticles();
    return articles.find(a => a.slug === slug) || null;
  },

  // Create article
  async createArticle(articleData: Omit<Article, 'id'>): Promise<Article> {
    const id = Date.now().toString();
    const newArticle: Article = {
      ...articleData,
      id
    };

    try {
      await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle)
      });
    } catch (e) {
      console.warn('API sync failed, continuing with localStorage', e);
    }

    // Update localStorage
    const current = await this.getArticles();
    const updated = [newArticle, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    return newArticle;
  },

  // Update article
  async updateArticle(id: string, updatedFields: Partial<Article>): Promise<Article> {
    try {
      await fetch(`/api/articles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields)
      });
    } catch (e) {
      console.warn('API sync failed, continuing with localStorage', e);
    }

    const current = await this.getArticles();
    const index = current.findIndex(a => a.id === id);
    if (index === -1) {
      throw new Error('Makale bulunamadı');
    }

    const updated = { ...current[index], ...updatedFields };
    current[index] = updated;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));

    return updated;
  },

  // Delete article
  async deleteArticle(id: string): Promise<boolean> {
    try {
      await fetch(`/api/articles/${id}`, {
        method: 'DELETE'
      });
    } catch (e) {
      console.warn('API sync failed, continuing with localStorage', e);
    }

    const current = await this.getArticles();
    const filtered = current.filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

    return true;
  }
};
