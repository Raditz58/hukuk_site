import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Award, 
  Compass, 
  Briefcase, 
  Building2, 
  FileText, 
  HelpCircle, 
  HeartHandshake, 
  ScrollText, 
  Layers, 
  Gavel, 
  ChevronRight,
  BookOpen,
  Calendar,
  Clock
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/services';
import { articleService } from '../services/articleService';
import { Article } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  HelpCircle: <HelpCircle className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  ScrollText: <ScrollText className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Gavel: <Gavel className="w-5 h-5" />
};

export const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeTab, setActiveTab] = useState<'ana' | 'diger'>('ana');

  const mainAreas = PRACTICE_AREAS.filter(area => area.group === 'ana');
  const otherAreas = PRACTICE_AREAS.filter(area => area.group === 'diger');

  useEffect(() => {
    articleService.getArticles().then(data => {
      setArticles(data.slice(0, 3));
    });
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#08090d] via-[#0d1017] to-[#0a0c10]">
        
        {/* Subtle decorative geometric background grids */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#c5a880]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161a22] border border-[#252c38] text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            Avukatlık & Stratejik Hukuki Danışmanlık
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.15]">
            Hukuki Güven, <br className="hidden sm:inline" />
            <span className="italic text-[#e5d4be] font-light">Stratejik Yaklaşım</span> ve Yetkin Temsil
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94a3b8] font-light leading-relaxed">
            Karmaşık ticari uyuşmazlıklardan kurumsal sözleşme yönetimine kadar; müvekkillerimizin haklarını önleyici hukuk vizyonu ve şeffaf çalışma ilkeleriyle koruyoruz.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/faaliyet-alanlari"
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] text-sm uppercase tracking-wider font-semibold hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Faaliyet Alanlarımız</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/iletisim"
              className="w-full sm:w-auto px-8 py-3.5 rounded border border-[#2e3746] bg-[#12151b] text-sm uppercase tracking-wider font-medium text-[#e2e8f0] hover:border-[#c5a880]/60 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>İletişime Geçin</span>
            </Link>
          </div>

          {/* Minimal Key Metrics Bar */}
          <div className="pt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#1c222e] max-w-4xl mx-auto text-left">
            <div className="space-y-1">
              <span className="text-2xl font-serif text-[#c5a880]">15+ Yıl</span>
              <p className="text-xs text-[#94a3b8]">Mesleki Tecrübe & Birikim</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-serif text-[#c5a880]">%100</span>
              <p className="text-xs text-[#94a3b8]">Gizlilik ve Şeffaflık İlkesi</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-serif text-[#c5a880]">10+ Alan</span>
              <p className="text-xs text-[#94a3b8]">Uzmanlaşmış Hukuk Disiplini</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-serif text-[#c5a880]">Önleyici</span>
              <p className="text-xs text-[#94a3b8]">Riskleri Önceden Yöneten Vizyon</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MESLEKİ YAKLAŞIM / VALUES ================= */}
      <section className="py-20 bg-[#0c0e14] border-y border-[#1c222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              İlkelerimiz
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Mesleki Yaklaşım ve Çalışma Prensipleri
            </h2>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Her davanın ve hukuki sürecin kendine özgü dinamikleri olduğuna inanıyor, şablon çözümler yerine müvekkile özel stratejiler inşa ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#12161f] border border-[#222936] p-8 rounded-sm hover:border-[#c5a880]/50 transition-all group">
              <div className="w-12 h-12 rounded bg-[#181e2a] border border-[#252c38] flex items-center justify-center text-[#c5a880] mb-6 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                Önleyici Hukuk Felsefesi
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Uyuşmazlıkların mahkeme aşamasına taşınmadan, sözleşme ve müzakere aşamasında bertaraf edilmesini hedefler; zaman ve maliyet kaybını önleriz.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#12161f] border border-[#222936] p-8 rounded-sm hover:border-[#c5a880]/50 transition-all group">
              <div className="w-12 h-12 rounded bg-[#181e2a] border border-[#252c38] flex items-center justify-center text-[#c5a880] mb-6 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                Mutlak Sır Saklama ve Gizlilik
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Avukatlık meslek etiğinin en üst ilkesi olan sır saklama yükümlülüğünü ve KVKK standartlarını müvekkil ilişkilerimizin merkezinde tutarız.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#12161f] border border-[#222936] p-8 rounded-sm hover:border-[#c5a880]/50 transition-all group">
              <div className="w-12 h-12 rounded bg-[#181e2a] border border-[#252c38] flex items-center justify-center text-[#c5a880] mb-6 group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">
                Şeffaf ve Düzenli Raporlama
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Dava ve danışmanlık süreçlerinin her aşamasında müvekkillerimizi açık, net ve düzenli bilgilendirme raporlarıyla süreçten haberdar ederiz.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FAALİYET ALANLARI SECTION ================= */}
      <section className="py-24 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                Hukuki Çözümler
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Faaliyet Alanlarımız
              </h2>
              <p className="text-sm text-[#94a3b8] max-w-xl">
                Büromuz, özellikle ticari ve kurumsal hukuk alanlarında derinleşmiş olmakla beraber, özel hukukun diğer temel alanlarında da müvekkillerine yetkin destek sağlamaktadır.
              </p>
            </div>

            {/* Tab Selection: Ana vs Diğer Çalışma Alanları */}
            <div className="inline-flex p-1 bg-[#12161e] border border-[#222936] rounded">
              <button
                onClick={() => setActiveTab('ana')}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-all ${
                  activeTab === 'ana' 
                    ? 'bg-[#c5a880] text-[#0a0c10]' 
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Ana Çalışma Alanları (6)
              </button>
              <button
                onClick={() => setActiveTab('diger')}
                className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-all ${
                  activeTab === 'diger' 
                    ? 'bg-[#c5a880] text-[#0a0c10]' 
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                Diğer Çalışma Alanları (4)
              </button>
            </div>
          </div>

          {/* Practice Area Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'ana' ? mainAreas : otherAreas).map(area => (
              <div 
                key={area.id}
                className="bg-[#0f131a] border border-[#1e2531] rounded-sm p-7 flex flex-col justify-between hover:border-[#c5a880]/60 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded bg-[#161c26] text-[#c5a880] border border-[#242c3b] group-hover:border-[#c5a880] transition-colors">
                      {iconMap[area.iconName] || <Scale className="w-5 h-5" />}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#64748b] bg-[#141822] px-2.5 py-1 rounded border border-[#1f2735]">
                      {area.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white group-hover:text-[#c5a880] transition-colors">
                    <Link to={`/faaliyet-alanlari/${area.slug}`} className="hover:underline">
                      {area.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                    {area.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1a202c] flex items-center justify-between">
                  <span className="text-xs text-[#64748b]">
                    {area.topics.length} Ana Başlık
                  </span>
                  <Link 
                    to={`/faaliyet-alanlari/${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#c5a880] group-hover:text-[#e5d4be] font-medium"
                  >
                    <span>Detayları İncele</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom link to view all */}
          <div className="mt-12 text-center">
            <Link 
              to="/faaliyet-alanlari"
              className="inline-flex items-center gap-2 text-sm text-[#cbd5e1] hover:text-[#c5a880] font-medium border-b border-[#2d3748] pb-1 hover:border-[#c5a880] transition-colors"
            >
              <span>Tüm Faaliyet Alanlarını ve Hukuki Kapsamları Karşılaştırın</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= HAKKIMDA ÖZET SECTION ================= */}
      <section className="py-20 bg-[#0e1117] border-y border-[#1c222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column / Law Prestige Badge */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-[#141923] to-[#0c0f15] border border-[#252c38] p-8 sm:p-10 rounded-sm relative shadow-2xl">
                <div className="w-16 h-16 rounded bg-[#1b2230] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] mb-8">
                  <Award className="w-8 h-8" />
                </div>
                
                <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed mb-6 font-light">
                  "Hukuk, yalnızca kurallar bütünü değil; adaletin, hakkaniyetin ve ticari hayatın sürekliliğinin en güçlü teminatıdır."
                </blockquote>

                <div className="pt-6 border-t border-[#222936] flex items-center justify-between text-xs text-[#94a3b8]">
                  <div>
                    <span className="text-white font-medium block">Av. Mehmet Yılmaz</span>
                    <span>İstanbul Barosu</span>
                  </div>
                  <span className="text-[#c5a880] font-mono">Sicil No: 48921</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                Mesleki Özgeçmiş ve Yaklaşım
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-snug">
                Bilgi, Deneyim ve Müvekkil Odaklı Strateji
              </h2>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                İstanbul Üniversitesi Hukuk Fakültesi mezuniyeti sonrasında, Türkiye'nin önde gelen hukuk bürolarında şirketler hukuku, ticari sözleşmeler ve karmaşık dava süreçlerinde 15 yılı aşkın süredir vekillik ve danışmanlık hizmeti sunmaktayım.
              </p>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                Müvekkillerimize salt hukuki tavsiye vermenin ötesinde, ticari hedeflerini anlayan, sektör dinamiklerine hâkim ve riskleri önceden yöneten stratejik bir iş ortağı yaklaşımı benimsemekteyiz.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link 
                  to="/hakkimda"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#161a22] border border-[#252c38] text-xs uppercase tracking-wider text-[#c5a880] font-semibold hover:border-[#c5a880] hover:text-white transition-colors"
                >
                  <span>Özgeçmiş ve Deneyimleri İnceleyin</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SON MAKALELER SECTION ================= */}
      <section className="py-24 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                Hukuki Değerlendirmeler & Yayınlar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Son Makaleler ve Mevzuat İncelemeleri
              </h2>
            </div>
            <Link 
              to="/makaleler"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a880] hover:text-[#e5d4be] font-semibold"
            >
              <span>Tüm Makaleleri Gör</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(article => (
              <article 
                key={article.id}
                className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 flex flex-col justify-between hover:border-[#c5a880]/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#64748b]">
                    <span className="text-[#c5a880] font-medium bg-[#161c24] px-2 py-0.5 rounded border border-[#222a36]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white group-hover:text-[#c5a880] transition-colors leading-snug">
                    <Link to={`/makaleler/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#94a3b8] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#181f2a] flex items-center justify-between text-xs text-[#64748b]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <Link 
                    to={`/makaleler/${article.slug}`}
                    className="text-[#c5a880] hover:text-[#e5d4be] font-medium inline-flex items-center gap-1"
                  >
                    <span>Yazıyı Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= İLETİŞİM / CTA BANNER ================= */}
      <section className="py-20 bg-gradient-to-r from-[#12161f] via-[#161c26] to-[#12161f] border-t border-[#222936]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            Hukuki Danışmanlık ve İletişim
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
            Hukuki Süreçlerinizde Doğru ve Güvenilir Adımlar Atın
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Sorularınız, ticari sözleşme denetimleriniz veya dava süreçleriniz için bizimle iletişime geçebilir, randevu talep edebilirsiniz.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/iletisim"
              className="px-8 py-3.5 rounded bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] text-xs uppercase tracking-wider font-semibold hover:brightness-110 transition-all shadow-lg"
            >
              Randevu ve Danışmanlık Alın
            </Link>
            <a 
              href="tel:+902120000000"
              className="px-8 py-3.5 rounded border border-[#2e3746] bg-[#0c0f14] text-xs uppercase tracking-wider font-medium text-[#e2e8f0] hover:border-[#c5a880]/60 transition-all"
            >
              Hemen Arayın: +90 (212) 000 00 00
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
