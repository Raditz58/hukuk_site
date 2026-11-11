import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Building2, 
  FileText, 
  ShieldCheck, 
  Scale, 
  HelpCircle, 
  HeartHandshake, 
  ScrollText, 
  Layers, 
  Gavel, 
  ArrowRight,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/services';

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

export const ServicesPage: React.FC = () => {
  const mainAreas = PRACTICE_AREAS.filter(area => area.group === 'ana');
  const otherAreas = PRACTICE_AREAS.filter(area => area.group === 'diger');

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
          Uzmanlık Alanlarımız
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-normal">
          Hukuki Faaliyet ve Çalışma Alanları
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
          Müvekkillerimizin kurumsal ve bireysel hukuki ihtiyaçlarına yönelik, kapsamlı ve stratejik vekillik ve danışmanlık hizmeti sunuyoruz. Detaylı kapsam ve sunulan hukuki destek için ilgili başlığa tıklayınız.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= 1. ANA ÇALIŞMA ALANLARI ================= */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-[#222936] gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
                Öncelikli Uzmanlık Alanları
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Ana Çalışma Alanları
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
              Şirketlerin, tacirlerin ve girişimcilerin ticari yaşam döngüsündeki tüm kurumsal süreçleri kapsar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainAreas.map(area => (
              <div 
                key={area.id}
                className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-7 flex flex-col justify-between hover:border-[#c5a880]/60 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded bg-[#161c24] text-[#c5a880] border border-[#242b36] group-hover:border-[#c5a880] transition-colors">
                      {iconMap[area.iconName] || <Scale className="w-5 h-5" />}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#c5a880] bg-[#161c24] px-2.5 py-1 rounded border border-[#222a36]">
                      Ana Alan
                    </span>
                  </div>

                  {/* Clickable Title opens dedicated detail page */}
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#c5a880] transition-colors">
                    <Link to={`/faaliyet-alanlari/${area.slug}`} className="hover:underline">
                      {area.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                    {area.shortDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-[#cbd5e1] block mb-2">Öne Çıkan Başlıklar:</span>
                    <ul className="space-y-1.5 text-xs text-[#94a3b8]">
                      {area.topics.slice(0, 2).map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span className="truncate">{topic.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#181f2a] flex items-center justify-between">
                  <span className="text-xs text-[#64748b]">
                    {area.scope.length} Kapsam Maddesi
                  </span>
                  <Link 
                    to={`/faaliyet-alanlari/${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#c5a880] group-hover:text-[#e5d4be] font-medium"
                  >
                    <span>Sayfayı İncele</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 2. DİĞER ÇALIŞMA ALANLARI ================= */}
        <section className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-[#222936] gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold block mb-1">
                Tamamlayıcı Hukuki Hizmetler
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Diğer Çalışma Alanları
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md">
              Özel hukukun ve medeni hukukun temel alanlarında bireysel ve kurumsal müvekkillerimize sunduğumuz hizmetler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {otherAreas.map(area => (
              <div 
                key={area.id}
                className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-7 flex flex-col justify-between hover:border-[#c5a880]/60 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-2.5 rounded bg-[#161c24] text-[#94a3b8] border border-[#242b36] group-hover:text-[#c5a880] group-hover:border-[#c5a880] transition-colors">
                      {iconMap[area.iconName] || <Scale className="w-5 h-5" />}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#94a3b8] bg-[#161c24] px-2.5 py-1 rounded border border-[#222a36]">
                      Çalışma Alanı
                    </span>
                  </div>

                  {/* Clickable Title opens dedicated detail page */}
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#c5a880] transition-colors">
                    <Link to={`/faaliyet-alanlari/${area.slug}`} className="hover:underline">
                      {area.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-2">
                    {area.shortDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-[#cbd5e1] block mb-2">Öne Çıkan Başlıklar:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94a3b8]">
                      {area.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span className="truncate">{topic.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#181f2a] flex items-center justify-between">
                  <span className="text-xs text-[#64748b]">
                    {area.legalSupport.length} Destek Maddesi
                  </span>
                  <Link 
                    to={`/faaliyet-alanlari/${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#c5a880] group-hover:text-[#e5d4be] font-medium"
                  >
                    <span>Kapsam ve Detayları Gör</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};
