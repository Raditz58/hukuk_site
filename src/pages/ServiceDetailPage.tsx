import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  Scale, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  Briefcase,
  Building2,
  FileText,
  HeartHandshake,
  ScrollText,
  Layers,
  Gavel,
  ChevronRight
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  HelpCircle: <HelpCircle className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  ScrollText: <ScrollText className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentArea = PRACTICE_AREAS.find(a => a.slug === slug);

  if (!currentArea) {
    return <Navigate to="/faaliyet-alanlari" replace />;
  }

  const otherMainAreas = PRACTICE_AREAS.filter(a => a.group === 'ana' && a.id !== currentArea.id);
  const otherSecondaryAreas = PRACTICE_AREAS.filter(a => a.group === 'diger' && a.id !== currentArea.id);

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen">
      
      {/* Breadcrumb & Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748b]">
          <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link to="/faaliyet-alanlari" className="hover:text-white transition-colors">Faaliyet Alanları</Link>
          <span>/</span>
          <span className="text-[#c5a880]">{currentArea.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area (8 Cols) */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* Header Card */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#161c24] text-[#c5a880] rounded border border-[#242b36]">
                  {iconMap[currentArea.iconName] || <Scale className="w-6 h-6" />}
                </div>
                <span className="text-xs uppercase tracking-wider text-[#c5a880] bg-[#161c24] px-3 py-1 rounded border border-[#222a36] font-semibold">
                  {currentArea.group === 'ana' ? 'Ana Çalışma Alanı' : 'Diğer Çalışma Alanı'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
                {currentArea.title}
              </h1>

              <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
                {currentArea.fullDescription}
              </p>
            </div>

            {/* 1. İLGİLİ HUKUK ALANININ KAPSAMI */}
            <section className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-10 space-y-6">
              <div className="pb-4 border-b border-[#1c222e] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
                    Hukuki Çerçeve
                  </span>
                  <h2 className="font-serif text-2xl text-white font-normal">
                    {currentArea.title} Kapsamı
                  </h2>
                </div>
                <span className="text-xs text-[#64748b]">
                  {currentArea.scope.length} Madde
                </span>
              </div>

              <p className="text-sm text-[#94a3b8]">
                Büromuz, {currentArea.title.toLowerCase()} disiplininde aşağıdaki hukuki ve operasyonel süreçlerin tamamında danışmanlık ve dava takibi sağlamaktadır:
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {currentArea.scope.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-[#12161f] border border-[#1f2633] rounded text-sm text-[#cbd5e1]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. HANGİ KONULARI İÇERDİĞİ */}
            <section className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-10 space-y-6">
              <div className="pb-4 border-b border-[#1c222e]">
                <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
                  Detaylı İnceleme
                </span>
                <h2 className="font-serif text-2xl text-white font-normal">
                  Hangi Konuları İçerir?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentArea.topics.map((topic, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-[#12161f] border border-[#1f2633] rounded space-y-2 hover:border-[#c5a880]/40 transition-colors"
                  >
                    <h3 className="font-serif text-lg text-white font-normal">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SUNULAN HUKUKİ DESTEK */}
            <section className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-10 space-y-6">
              <div className="pb-4 border-b border-[#1c222e]">
                <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
                  Vekillik ve Danışmanlık
                </span>
                <h2 className="font-serif text-2xl text-white font-normal">
                  Sunulan Hukuki Destek
                </h2>
              </div>

              <div className="space-y-3">
                {currentArea.legalSupport.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-[#12161f] border border-[#1f2633] rounded text-sm text-[#cbd5e1]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#18202c] border border-[#c5a880]/30 flex items-center justify-center text-[10px] text-[#c5a880] font-mono shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs if present */}
            {currentArea.faqs && currentArea.faqs.length > 0 && (
              <section className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-10 space-y-6">
                <div className="pb-4 border-b border-[#1c222e]">
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
                    Sıkça Sorulan Sorular
                  </span>
                  <h2 className="font-serif text-2xl text-white font-normal">
                    {currentArea.title} Hakkında Merak Edilenler
                  </h2>
                </div>

                <div className="space-y-4">
                  {currentArea.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 bg-[#12161f] border border-[#1f2633] rounded space-y-2">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-[#94a3b8] pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Consultation CTA banner */}
            <div className="bg-gradient-to-r from-[#141923] via-[#1a212d] to-[#141923] border border-[#2a3444] rounded-sm p-8 sm:p-10 text-center space-y-4">
              <h3 className="font-serif text-2xl text-white">
                Bu Alanda Hukuki Desteğe mi İhtiyacınız Var?
              </h3>
              <p className="text-sm text-[#94a3b8] max-w-lg mx-auto">
                {currentArea.title} kapsamındaki uyuşmazlıklarınız veya önleyici danışmanlık talepleriniz için bize ulaşabilirsiniz.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link 
                  to="/iletisim"
                  className="px-6 py-3 rounded bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] text-xs uppercase tracking-wider font-semibold hover:brightness-110 transition-all"
                >
                  Danışmanlık Talep Edin
                </Link>
                <a 
                  href="tel:+902120000000"
                  className="px-6 py-3 rounded border border-[#2e3746] bg-[#0c0f14] text-xs uppercase tracking-wider font-medium text-[#e2e8f0] hover:border-[#c5a880] transition-colors"
                >
                  Telefonla İletişim
                </a>
              </div>
            </div>

          </main>

          {/* Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Direct Contact Card */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 space-y-4">
              <h4 className="font-serif text-lg text-white">Hızlı İletişim</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Avukatlık ve hukuki danışmanlık hizmetlerimizle ilgili doğrudan randevu oluşturabilirsiniz.
              </p>
              
              <div className="space-y-3 pt-2 text-xs">
                <a 
                  href="tel:+902120000000"
                  className="flex items-center gap-3 p-3 bg-[#131720] border border-[#222a36] rounded text-[#cbd5e1] hover:text-[#c5a880] hover:border-[#c5a880]/50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c5a880]" />
                  <span>+90 (212) 000 00 00</span>
                </a>
                <Link 
                  to="/iletisim"
                  className="w-full text-center block py-2.5 bg-[#c5a880] text-[#0a0c10] font-semibold uppercase tracking-wider text-[11px] rounded hover:brightness-110 transition-all"
                >
                  İletişim Formunu Doldurun
                </Link>
              </div>
            </div>

            {/* Other Practice Areas Navigation */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 space-y-6">
              
              {/* Ana Çalışma Alanları */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#c5a880] font-bold block mb-3 pb-2 border-b border-[#1c222e]">
                  Ana Çalışma Alanları
                </span>
                <div className="space-y-1.5">
                  {otherMainAreas.map(a => (
                    <Link
                      key={a.id}
                      to={`/faaliyet-alanlari/${a.slug}`}
                      className="flex items-center justify-between p-2 rounded text-xs text-[#cbd5e1] hover:text-[#c5a880] hover:bg-[#141822] transition-colors"
                    >
                      <span>{a.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#64748b]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Diğer Çalışma Alanları (Ayrı bir grup olarak) */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#94a3b8] font-bold block mb-3 pb-2 border-b border-[#1c222e]">
                  Diğer Çalışma Alanları
                </span>
                <div className="space-y-1.5">
                  {otherSecondaryAreas.map(a => (
                    <Link
                      key={a.id}
                      to={`/faaliyet-alanlari/${a.slug}`}
                      className="flex items-center justify-between p-2 rounded text-xs text-[#cbd5e1] hover:text-[#c5a880] hover:bg-[#141822] transition-colors"
                    >
                      <span>{a.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#64748b]" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#1c222e]">
                <Link 
                  to="/faaliyet-alanlari"
                  className="text-xs text-[#c5a880] hover:text-[#e5d4be] font-medium inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Tüm Faaliyet Alanlarına Dön</span>
                </Link>
              </div>

            </div>

          </aside>

        </div>
      </div>

    </div>
  );
};
