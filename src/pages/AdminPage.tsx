import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  BookOpen, 
  Save, 
  X,
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import { articleService } from '../services/articleService';
import { Article, ArticleCategory } from '../types';

export const AdminPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);

  // Notification state
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ArticleCategory>('Hukuki Değerlendirmeler');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Av. Mehmet Yılmaz');
  const [readTime, setReadTime] = useState('5 dk okuma');
  const [tagsString, setTagsString] = useState('Ticaret Hukuku, Şirketler Hukuku');

  const loadArticles = async () => {
    setLoading(true);
    const data = await articleService.getArticles();
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleOpenNew = () => {
    setEditingArticleId(null);
    setTitle('');
    setCategory('Hukuki Değerlendirmeler');
    setSummary('');
    setContent('');
    setAuthor('Av. Mehmet Yılmaz');
    setReadTime('5 dk okuma');
    setTagsString('Ticaret Hukuku, Şirketler Hukuku');
    setIsFormOpen(true);
  };

  const handleOpenEdit = (article: Article) => {
    setEditingArticleId(article.id);
    setTitle(article.title);
    setCategory(article.category);
    setSummary(article.summary);
    setContent(article.content);
    setAuthor(article.author || 'Av. Mehmet Yılmaz');
    setReadTime(article.readTime || '5 dk okuma');
    setTagsString(article.tags?.join(', ') || '');
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingArticleId(null);
  };

  // Helper to generate slug
  const generateSlug = (text: string) => {
    const trMap: Record<string, string> = {
      'ç': 'c', 'Ç': 'c',
      'ğ': 'g', 'Ğ': 'g',
      'ı': 'i', 'İ': 'i',
      'ö': 'o', 'Ö': 'o',
      'ş': 's', 'Ş': 's',
      'ü': 'u', 'Ü': 'u'
    };
    let slug = text.replace(/[çÇğĞıİöÖşŞüÜ]/g, match => trMap[match] || match);
    return slug
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !summary.trim() || !content.trim()) {
      showNotification('Lütfen başlık, özet ve içerik alanlarını eksiksiz doldurunuz.', 'error');
      return;
    }

    const tags = tagsString
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const slug = generateSlug(title);

    try {
      if (editingArticleId) {
        // Update
        await articleService.updateArticle(editingArticleId, {
          title,
          slug,
          category,
          summary,
          content,
          author,
          readTime,
          tags
        });
        showNotification('Makale başarıyla güncellendi.');
      } else {
        // Create
        const today = new Date().toLocaleDateString('tr-TR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });

        await articleService.createArticle({
          slug: `${slug}-${Date.now().toString().slice(-4)}`,
          title,
          category,
          summary,
          content,
          author,
          date: today,
          readTime,
          tags
        });
        showNotification('Yeni makale başarıyla yayımlandı.');
      }

      handleCloseForm();
      await loadArticles();
    } catch (err) {
      showNotification('İşlem sırasında bir hata oluştu.', 'error');
    }
  };

  const handleDelete = async (id: string, articleTitle: string) => {
    if (window.confirm(`"${articleTitle}" başlıklı makaleyi silmek istediğinize emin misiniz?`)) {
      try {
        await articleService.deleteArticle(id);
        showNotification('Makale silindi.');
        await loadArticles();
      } catch (err) {
        showNotification('Makale silinirken hata oluştu.', 'error');
      }
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top bar & navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1e2531] gap-4">
          <div>
            <Link 
              to="/makaleler"
              className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-[#c5a880] mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Makaleler Sayfasına Dön</span>
            </Link>
            <h1 className="font-serif text-3xl text-white font-normal">
              Makale & Yayın Yönetim Paneli
            </h1>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Yeni makale oluşturabilir, mevcut yayınları düzenleyebilir veya silebilirsiniz.
            </p>
          </div>

          <button
            onClick={handleOpenNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] text-xs uppercase tracking-wider font-semibold rounded hover:brightness-110 transition-all shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Yeni Makale Ekle</span>
          </button>
        </div>

        {/* Notification Alert */}
        {notification && (
          <div className={`p-4 rounded border text-sm flex items-center justify-between animate-fadeIn ${
            notification.type === 'success' 
              ? 'bg-[#13231b] border-green-700/60 text-green-300' 
              : 'bg-[#291418] border-red-700/60 text-red-300'
          }`}>
            <div className="flex items-center gap-3">
              {notification.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              )}
              <span>{notification.message}</span>
            </div>
            <button onClick={() => setNotification(null)} className="opacity-70 hover:opacity-100">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Form Modal / Inline Editor */}
        {isFormOpen && (
          <div className="bg-[#0e1218] border border-[#252c38] rounded-sm p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1c222e]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#161c24] text-[#c5a880] rounded border border-[#242b36]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    {editingArticleId ? 'Makaleyi Düzenle' : 'Yeni Makale Oluştur'}
                  </h3>
                  <span className="text-xs text-[#94a3b8]">Tüm alanları doldurarak kaydedebilirsiniz.</span>
                </div>
              </div>
              <button 
                onClick={handleCloseForm}
                className="p-2 text-[#94a3b8] hover:text-white rounded hover:bg-[#161c24]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Title & Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                    Makale Başlığı *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Örn: Anonim Şirketlerde Genel Kurul Kararlarının İptali"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                    Kategori *
                  </label>
                  <select 
                    value={category}
                    onChange={e => setCategory(e.target.value as ArticleCategory)}
                    className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Hukuki Değerlendirmeler">Hukuki Değerlendirmeler</option>
                    <option value="Mevzuat ve Güncel Gelişmeler">Mevzuat ve Güncel Gelişmeler</option>
                    <option value="Hukuki İncelemeler">Hukuki İncelemeler</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Summary / Lead */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                  Kısa Özet (Lead Metni) *
                </label>
                <textarea 
                  required
                  rows={2}
                  placeholder="Makalenin ana fikrini ve kapsamını özetleyen 2-3 cümle..."
                  value={summary}
                  onChange={e => setSummary(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              {/* Row 3: Full Content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold">
                    Tam Makale İçeriği *
                  </label>
                  <span className="text-[11px] text-[#64748b]">
                    (Ara başlıklar için '### Başlık' kullanabilirsiniz)
                  </span>
                </div>
                <textarea 
                  required
                  rows={10}
                  placeholder="Makalenin tüm içeriğini buraya yazınız. Paragraflar arasında bir satır boşluk bırakabilirsiniz..."
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  className="w-full px-4 py-3 bg-[#12161f] border border-[#222a36] rounded text-sm text-white font-mono leading-relaxed focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              {/* Row 4: Author, Read Time, Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                    Yazar
                  </label>
                  <input 
                    type="text" 
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className="w-full px-4 py-2 bg-[#12161f] border border-[#222a36] rounded text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                    Okuma Süresi
                  </label>
                  <input 
                    type="text" 
                    value={readTime}
                    onChange={e => setReadTime(e.target.value)}
                    className="w-full px-4 py-2 bg-[#12161f] border border-[#222a36] rounded text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                    Etiketler (Virgülle ayırınız)
                  </label>
                  <input 
                    type="text" 
                    placeholder="Şirketler, Ticaret Hukuku, TTK"
                    value={tagsString}
                    onChange={e => setTagsString(e.target.value)}
                    className="w-full px-4 py-2 bg-[#12161f] border border-[#222a36] rounded text-xs text-white focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 border-t border-[#1c222e] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="px-5 py-2.5 rounded border border-[#252c38] text-xs uppercase tracking-wider text-[#94a3b8] hover:text-white"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] text-xs uppercase tracking-wider font-semibold hover:brightness-110 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingArticleId ? 'Güncelle ve Kaydet' : 'Yayımla ve Kaydet'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Articles List / Table */}
        <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm overflow-hidden">
          <div className="p-6 border-b border-[#1c222e] flex items-center justify-between">
            <h3 className="font-serif text-xl text-white font-normal">
              Yayındaki Makaleler ({articles.length})
            </h3>
            <span className="text-xs text-[#94a3b8]">
              Değişiklikler anında canlı sitede güncellenir.
            </span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-[#94a3b8]">Yükleniyor...</div>
          ) : articles.length === 0 ? (
            <div className="p-12 text-center text-[#94a3b8] space-y-3">
              <BookOpen className="w-8 h-8 mx-auto text-[#64748b]" />
              <p>Henüz kayıtlı bir makale bulunmuyor.</p>
              <button 
                onClick={handleOpenNew}
                className="text-xs text-[#c5a880] underline"
              >
                İlk makaleyi şimdi ekleyin
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#181f2a]">
              {articles.map(art => (
                <div key={art.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#12161f] transition-colors">
                  
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#c5a880] bg-[#161c24] px-2 py-0.5 rounded border border-[#222a36]">
                        {art.category}
                      </span>
                      <span className="text-[#64748b]">•</span>
                      <span className="text-[#64748b]">{art.date}</span>
                      <span className="text-[#64748b]">•</span>
                      <span className="text-[#64748b]">{art.readTime}</span>
                    </div>

                    <h4 className="font-serif text-lg text-white font-medium">
                      {art.title}
                    </h4>

                    <p className="text-xs text-[#94a3b8] line-clamp-1">
                      {art.summary}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/makaleler/${art.slug}`}
                      className="p-2 text-[#94a3b8] hover:text-[#c5a880] bg-[#141822] border border-[#222a36] rounded hover:border-[#c5a880]/50 transition-colors"
                      title="Sitede İncele"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => handleOpenEdit(art)}
                      className="p-2 text-[#94a3b8] hover:text-[#c5a880] bg-[#141822] border border-[#222a36] rounded hover:border-[#c5a880]/50 transition-colors"
                      title="Düzenle"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(art.id, art.title)}
                      className="p-2 text-[#94a3b8] hover:text-red-400 bg-[#141822] border border-[#222a36] rounded hover:border-red-500/50 transition-colors"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
