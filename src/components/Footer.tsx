import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, ArrowUpRight, Lock } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/services';

export const Footer: React.FC = () => {
  const mainAreas = PRACTICE_AREAS.filter(area => area.group === 'ana');
  const otherAreas = PRACTICE_AREAS.filter(area => area.group === 'diger');

  return (
    <footer className="bg-[#07090c] border-t border-[#1e2530] text-[#94a3b8] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1: About Firm */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#12161e] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-wider text-white font-medium">
                  YILMAZ
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#94a3b8] uppercase font-light">
                  Hukuk & Danışmanlık
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-[#94a3b8] max-w-sm">
              Müvekkillerimize ulusal ve uluslararası standartlarda, önleyici hukuk ilkeleri ışığında, gizlilik ve şeffaflık temelinde stratejik hukuki danışmanlık ve avukatlık hizmeti sunmaktayız.
            </p>

            {/* Quick Contact Chips */}
            <div className="space-y-2.5 pt-2 text-sm text-[#cbd5e1]">
              <a 
                href="tel:+902120000000" 
                className="flex items-center gap-2.5 hover:text-[#c5a880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>+90 (212) 000 00 00</span>
              </a>
              <a 
                href="mailto:info@yilmazhukuk.com" 
                className="flex items-center gap-2.5 hover:text-[#c5a880] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>info@yilmazhukuk.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Büyükdere Cad. Levent Plaza No: 142/8, Levent, Beşiktaş / İstanbul
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Ana Menü */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold mb-4">
              Menü
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/hakkimda" className="hover:text-white transition-colors">Hakkımda</Link>
              </li>
              <li>
                <Link to="/faaliyet-alanlari" className="hover:text-white transition-colors">Faaliyet Alanları</Link>
              </li>
              <li>
                <Link to="/makaleler" className="hover:text-white transition-colors">Makaleler & Yayınlar</Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-white transition-colors">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Ana Çalışma Alanları */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold mb-4">
              Ana Faaliyetler
            </h4>
            <ul className="space-y-2.5 text-sm">
              {mainAreas.map(area => (
                <li key={area.id}>
                  <Link 
                    to={`/faaliyet-alanlari/${area.slug}`} 
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{area.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#c5a880] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Diğer Çalışma Alanları */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-4">
              Diğer Çalışma Alanları
            </h4>
            <ul className="space-y-2.5 text-sm">
              {otherAreas.map(area => (
                <li key={area.id}>
                  <Link 
                    to={`/faaliyet-alanlari/${area.slug}`} 
                    className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{area.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#c5a880] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* TBB Disclaimer */}
        <div className="pt-8 border-t border-[#181e28] text-[12px] leading-relaxed text-[#64748b] space-y-2">
          <p>
            <strong className="text-[#94a3b8]">Yasal Uyarı:</strong> Bu sitede yer alan tüm bilgi ve içerikler genel nitelikte olup yalnızca bilgilendirme amacı taşımaktadır. Hiçbir surette hukuki tavsiye veya avukat-müvekkil ilişkisi tesisi niteliğinde değerlendirilemez. Sitemiz, Türkiye Barolar Birliği'nin ilgili mevzuatına ve Reklam Yasağı Yönetmeliği'ne tam uyumlu olarak hazırlanmıştır.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#181e28] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
          <p>© {new Date().getFullYear()} Av. Mehmet Yılmaz Hukuk & Danışmanlık Bürosu. Tüm hakları saklıdır.</p>
          
          <div className="flex items-center gap-4">
            <Link to="/iletisim" className="hover:text-[#94a3b8] transition-colors">KVKK Aydınlatma Metni</Link>
            <span>•</span>
            <Link 
              to="/admin" 
              className="inline-flex items-center gap-1.5 text-[#64748b] hover:text-[#c5a880] transition-colors"
              title="Yönetim Paneli Girişi"
            >
              <Lock className="w-3 h-3" />
              <span>Yönetim</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
