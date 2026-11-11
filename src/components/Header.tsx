import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Scale, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Briefcase, 
  Building2, 
  FileText, 
  ShieldCheck, 
  HelpCircle, 
  HeartHandshake, 
  ScrollText, 
  Layers, 
  Gavel, 
  ArrowRight 
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Scale: <Scale className="w-4 h-4" />,
  HelpCircle: <HelpCircle className="w-4 h-4" />,
  HeartHandshake: <HeartHandshake className="w-4 h-4" />,
  ScrollText: <ScrollText className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Gavel: <Gavel className="w-4 h-4" />
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Group practice areas
  const mainAreas = PRACTICE_AREAS.filter(area => area.group === 'ana');
  const otherAreas = PRACTICE_AREAS.filter(area => area.group === 'diger');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0c10]/95 backdrop-blur-md border-b border-[#222936] py-3 shadow-xl' 
          : 'bg-[#0a0c10]/80 backdrop-blur-sm border-b border-[#222936]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#1a202c] to-[#12151b] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] group-hover:border-[#c5a880] transition-colors">
              <Scale className="w-5 h-5 text-[#c5a880]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wider text-white font-medium group-hover:text-[#c5a880] transition-colors">
                YILMAZ
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#94a3b8] uppercase font-light">
                Hukuk & Danışmanlık
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 text-sm tracking-wide transition-colors rounded-sm ${
                isActive('/') && location.pathname === '/' 
                  ? 'text-[#c5a880] font-medium' 
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              Ana Sayfa
            </Link>

            <Link 
              to="/hakkimda" 
              className={`px-4 py-2 text-sm tracking-wide transition-colors rounded-sm ${
                isActive('/hakkimda') 
                  ? 'text-[#c5a880] font-medium' 
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              Hakkımda
            </Link>

            {/* Faaliyet Alanları with Mega Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm tracking-wide transition-colors rounded-sm cursor-pointer ${
                  isActive('/faaliyet-alanlari') 
                    ? 'text-[#c5a880] font-medium' 
                    : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                <span>Faaliyet Alanları</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#c5a880]' : ''}`} />
              </button>

              {/* Sophisticated Mega Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[760px] bg-[#0e1218] border border-[#252c38] rounded-md shadow-2xl p-6 transition-all animate-fadeIn"
                >
                  <div className="grid grid-cols-2 gap-8 divide-x divide-[#222936]">
                    
                    {/* Column 1: Ana Çalışma Alanları */}
                    <div className="pr-2">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#222936]">
                        <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                          Ana Çalışma Alanları
                        </span>
                        <span className="text-[10px] text-[#64748b] bg-[#161c24] px-2 py-0.5 rounded">
                          Öncelikli Uzmanlık
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {mainAreas.map(area => (
                          <Link
                            key={area.id}
                            to={`/faaliyet-alanlari/${area.slug}`}
                            className="flex items-start gap-3 p-2 rounded hover:bg-[#161c24] text-[#cbd5e1] hover:text-[#c5a880] transition-colors group"
                          >
                            <span className="p-1.5 rounded bg-[#13171e] text-[#c5a880] border border-[#252c38] group-hover:border-[#c5a880]/50 transition-colors mt-0.5">
                              {iconMap[area.iconName] || <Scale className="w-4 h-4" />}
                            </span>
                            <div>
                              <div className="text-sm font-medium leading-none mb-1 text-white group-hover:text-[#c5a880] transition-colors">
                                {area.title}
                              </div>
                              <p className="text-[11px] text-[#94a3b8] line-clamp-1">
                                {area.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Diğer Çalışma Alanları (Ayrı bir grup olarak) */}
                    <div className="pl-6">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#222936]">
                        <span className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold">
                          Diğer Çalışma Alanları
                        </span>
                        <span className="text-[10px] text-[#64748b] bg-[#161c24] px-2 py-0.5 rounded">
                          Tamamlayıcı Alanlar
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {otherAreas.map(area => (
                          <Link
                            key={area.id}
                            to={`/faaliyet-alanlari/${area.slug}`}
                            className="flex items-start gap-3 p-2 rounded hover:bg-[#161c24] text-[#cbd5e1] hover:text-[#c5a880] transition-colors group"
                          >
                            <span className="p-1.5 rounded bg-[#13171e] text-[#94a3b8] border border-[#252c38] group-hover:text-[#c5a880] group-hover:border-[#c5a880]/50 transition-colors mt-0.5">
                              {iconMap[area.iconName] || <Scale className="w-4 h-4" />}
                            </span>
                            <div>
                              <div className="text-sm font-medium leading-none mb-1 text-white group-hover:text-[#c5a880] transition-colors">
                                {area.title}
                              </div>
                              <p className="text-[11px] text-[#94a3b8] line-clamp-1">
                                {area.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-5 pt-3 border-t border-[#222936] flex items-center justify-between text-xs text-[#94a3b8]">
                    <span>Tüm hukuki ihtiyaçlarınız için stratejik çözümler sunuyoruz.</span>
                    <Link 
                      to="/faaliyet-alanlari"
                      className="inline-flex items-center gap-1.5 text-[#c5a880] hover:text-[#e5d4be] font-medium"
                    >
                      <span>Tüm Alanları İnceleyin</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/makaleler" 
              className={`px-4 py-2 text-sm tracking-wide transition-colors rounded-sm ${
                isActive('/makaleler') 
                  ? 'text-[#c5a880] font-medium' 
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              Makaleler
            </Link>

            <Link 
              to="/iletisim" 
              className={`px-4 py-2 text-sm tracking-wide transition-colors rounded-sm ${
                isActive('/iletisim') 
                  ? 'text-[#c5a880] font-medium' 
                  : 'text-[#cbd5e1] hover:text-white'
              }`}
            >
              İletişim
            </Link>
          </nav>

          {/* Direct Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+902120000000"
              className="flex items-center gap-2 text-xs tracking-wider text-[#cbd5e1] hover:text-[#c5a880] transition-colors font-medium border border-[#252c38] px-3.5 py-2 rounded bg-[#12161e] hover:border-[#c5a880]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>+90 (212) 000 00 00</span>
            </a>
            <Link 
              to="/iletisim"
              className="px-4 py-2 text-xs uppercase tracking-widest bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] font-semibold rounded hover:brightness-110 transition-all shadow-md"
            >
              Danışmanlık Alın
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded text-[#cbd5e1] hover:text-white hover:bg-[#161c24] transition-colors"
              aria-label="Menüyü Aç"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f15] border-b border-[#252c38] px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link 
            to="/" 
            className="block py-2 text-base font-medium text-[#cbd5e1] hover:text-[#c5a880] border-b border-[#1c222d]"
          >
            Ana Sayfa
          </Link>
          <Link 
            to="/hakkimda" 
            className="block py-2 text-base font-medium text-[#cbd5e1] hover:text-[#c5a880] border-b border-[#1c222d]"
          >
            Hakkımda
          </Link>

          {/* Faaliyet Alanları in Mobile */}
          <div className="py-2 border-b border-[#1c222d]">
            <Link 
              to="/faaliyet-alanlari"
              className="flex items-center justify-between text-base font-medium text-[#cbd5e1] hover:text-[#c5a880] mb-2"
            >
              <span>Faaliyet Alanları</span>
              <ArrowRight className="w-4 h-4 text-[#c5a880]" />
            </Link>

            <div className="pl-2 space-y-4 pt-2">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-bold block mb-1">
                  Ana Çalışma Alanları
                </span>
                <div className="space-y-1 pl-2">
                  {mainAreas.map(area => (
                    <Link
                      key={area.id}
                      to={`/faaliyet-alanlari/${area.slug}`}
                      className="block py-1 text-sm text-[#94a3b8] hover:text-white"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-bold block mb-1">
                  Diğer Çalışma Alanları
                </span>
                <div className="space-y-1 pl-2">
                  {otherAreas.map(area => (
                    <Link
                      key={area.id}
                      to={`/faaliyet-alanlari/${area.slug}`}
                      className="block py-1 text-sm text-[#94a3b8] hover:text-white"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link 
            to="/makaleler" 
            className="block py-2 text-base font-medium text-[#cbd5e1] hover:text-[#c5a880] border-b border-[#1c222d]"
          >
            Makaleler
          </Link>
          <Link 
            to="/iletisim" 
            className="block py-2 text-base font-medium text-[#cbd5e1] hover:text-[#c5a880] border-b border-[#1c222d]"
          >
            İletişim
          </Link>

          <div className="pt-4 flex flex-col gap-2">
            <Link 
              to="/iletisim"
              className="w-full text-center py-2.5 text-xs uppercase tracking-widest bg-[#c5a880] text-[#0a0c10] font-semibold rounded"
            >
              Danışmanlık Alın
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
