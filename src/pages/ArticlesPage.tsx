import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  PlusCircle, 
  BookOpen, 
  Tag, 
  SlidersHorizontal 
} from 'lucide-react';
import { articleService } from '../services/articleService';
import { Article, ArticleCategory } from '../types';

const CATEGORIES: ('Tümü' | ArticleCategory)[] = [
  'Tümü',
  'Hukuki Değerlendirmeler',
  'Mevzuat ve Güncel Gelişmeler',
  'Hukuki İncelemeler'
];

export const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'Tümü' | ArticleCategory>('Tümü');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    articleService.getArticles().then(data => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Tümü' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
          Yayınlar ve Araştırmalar
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-normal">
          Makaleler ve Hukuki İncelemeler
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
          Güncel mevzuat değişiklikleri, Yargıtay emsal kararları ve ticari hayata yön veren hukuki değerlendirmelerimizi buradan takip edebilirsiniz.
        </p>

        {/* Admin Quick Action Pill */}
        <div className="pt-2">
          <Link 
            to="/admin" 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161c24] border border-[#252c38] text-xs text-[#cbd5e1] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Makale Yönetimi & Yeni Ekle</span>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filters & Search Bar */}
        <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories Tab */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c5a880] text-[#0a0c10] font-semibold shadow'
                    : 'bg-[#141822] text-[#94a3b8] hover:text-white border border-[#222a36]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#64748b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Makalelerde ara..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#12161f] border border-[#222a36] rounded text-xs text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a880]"
            />
          </div>

        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="text-center py-20 text-[#94a3b8]">Makaleler yükleniyor...</div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-[#0e1218] border border-[#1e2531] rounded-sm space-y-4">
            <BookOpen className="w-12 h-12 text-[#64748b] mx-auto" />
            <h3 className="text-lg text-white font-serif">Kriterlere uygun makale bulunamadı</h3>
            <p className="text-xs text-[#94a3b8]">Arama filtrenizi temizleyebilir veya farklı bir arama terimi deneyebilirsiniz.</p>
            <button
              onClick={() => { setSelectedCategory('Tümü'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#161c24] border border-[#252c38] text-xs text-[#c5a880] rounded hover:border-[#c5a880]"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <article 
                key={article.id}
                className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#c5a880]/60 transition-all group"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#c5a880] font-medium bg-[#161c24] px-2.5 py-1 rounded border border-[#222a36]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#64748b]">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl text-white group-hover:text-[#c5a880] transition-colors leading-snug">
                    <Link to={`/makaleler/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {article.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] text-[#64748b] bg-[#12161f] px-2 py-0.5 rounded border border-[#1e2531]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

                <div className="pt-6 mt-6 border-t border-[#181f2a] flex items-center justify-between text-xs text-[#64748b]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <Link 
                    to={`/makaleler/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#c5a880] group-hover:text-[#e5d4be] font-medium"
                  >
                    <span>İncele</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
