import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check, 
  Tag, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { articleService } from '../services/articleService';
import { Article } from '../types';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    articleService.getArticles().then(list => {
      setAllArticles(list);
      const found = list.find(a => a.slug === slug);
      setArticle(found || null);
      setLoading(false);
    });
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return <div className="min-h-screen bg-[#0a0c10] text-[#94a3b8] flex items-center justify-center">Yükleniyor...</div>;
  }

  if (!article) {
    return <Navigate to="/makaleler" replace />;
  }

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.category === article.category || a.tags?.some(t => article.tags?.includes(t))))
    .slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen">
      
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          to="/makaleler"
          className="inline-flex items-center gap-2 text-xs text-[#94a3b8] hover:text-[#c5a880] transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Tüm Makalelere Dön</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article Header Card */}
        <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1c222e]">
            <span className="text-xs uppercase tracking-wider text-[#c5a880] bg-[#161c24] px-3 py-1 rounded border border-[#222a36] font-semibold">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-[#64748b]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-[1.2]">
            {article.title}
          </h1>

          {/* Author & Share */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#181f2a] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
                <User className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-white font-medium block">{article.author}</span>
                <span className="text-[#64748b]">Hukuk & Danışmanlık</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#141822] border border-[#222a36] text-xs text-[#cbd5e1] hover:text-white hover:border-[#c5a880] transition-colors"
              title="Bağlantıyı Kopyala"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Kopyalandı</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Paylaş</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Lead / Summary Callout */}
        <div className="my-8 p-6 bg-[#12161f] border-l-4 border-[#c5a880] rounded-r text-base text-[#e2e8f0] font-light leading-relaxed italic">
          {article.summary}
        </div>

        {/* Article Body Content */}
        <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-12 prose prose-invert max-w-none text-[#cbd5e1] space-y-6 leading-relaxed text-base">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="font-serif text-2xl text-white pt-4 pb-2 border-b border-[#1c222e] font-normal">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="space-y-2 pl-4 list-disc text-sm text-[#94a3b8]">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-[#cbd5e1] leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags & Disclaimer */}
        <div className="mt-8 p-6 bg-[#0e1218] border border-[#1e2531] rounded-sm space-y-4">
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-[#c5a880]" />
              <span className="text-xs text-[#64748b] mr-1">Etiketler:</span>
              {article.tags.map((t, idx) => (
                <span 
                  key={idx}
                  className="text-xs text-[#cbd5e1] bg-[#141822] px-2.5 py-1 rounded border border-[#222a36]"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
          <p className="text-[11px] text-[#64748b] pt-2 border-t border-[#181f2a] italic">
            * Bu makale genel bilgilendirme amacıyla kaleme alınmış olup, hukuki mütalaa veya tavsiye niteliği taşımamaktadır. Somut uyuşmazlıklarınız için büromuzla iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 space-y-6">
            <h3 className="font-serif text-2xl text-white">İlgili Diğer Makaleler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map(rel => (
                <div 
                  key={rel.id}
                  className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 flex flex-col justify-between hover:border-[#c5a880]/50 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] text-[#c5a880] font-medium">{rel.category}</span>
                    <h4 className="font-serif text-lg text-white">
                      <Link to={`/makaleler/${rel.slug}`} className="hover:text-[#c5a880]">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-[#94a3b8] line-clamp-2">{rel.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#181f2a] flex items-center justify-between text-xs text-[#64748b]">
                    <span>{rel.readTime}</span>
                    <Link to={`/makaleler/${rel.slug}`} className="text-[#c5a880] inline-flex items-center gap-1 font-medium">
                      <span>Oku</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
};
