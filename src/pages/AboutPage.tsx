import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  Scale, 
  Compass, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen">
      
      {/* Page Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
          Hakkımda
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-normal">
          Mesleki Özgeçmiş, Deneyim ve İlkeler
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
          Müvekkillerimizin hukuki haklarını en üst düzeyde korurken; stratejik, analitik ve etik değerlere dayalı bir avukatlık hizmeti sunuyoruz.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= 1. MESLEKİ ÖZGEÇMİŞ ================= */}
        <section className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-12 relative">
          <div className="space-y-6 text-[#94a3b8] leading-relaxed text-sm sm:text-base">
            <div className="flex items-center gap-3 pb-4 border-b border-[#1c222e]">
              <div className="p-2 bg-[#161c24] text-[#c5a880] rounded border border-[#242b36]">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Mesleki Özgeçmiş
              </h2>
            </div>

            <p>
              Av. Mehmet Yılmaz, lisans eğitimini <strong className="text-white">İstanbul Üniversitesi Hukuk Fakültesi</strong>’nde yüksek onur derecesiyle tamamlamıştır. Mezuniyetinin ardından İstanbul Barosu’na kaydolarak mesleki faaliyetlerine başlamış; Türkiye’nin önde gelen hukuk bürolarında ve kurumsal holding nezdinde ticari uyuşmazlıklar, şirketler hukuku ve sözleşmeler alanında kıdemli danışman olarak görev almıştır.
            </p>

            <p>
              15 yılı aşkın mesleki birikimi boyunca yerli ve yabancı sermayeli şirketlerin birleşme ve devralma (M&A) süreçlerini, ortaklar arası pay sahipliği ihtilaflarını, fikri ve sınai mülkiyet uyuşmazlıklarını ve yüksek hacimli ticari davaları başarıyla neticelendirmiştir.
            </p>

            <p>
              Hukuk dünyasındaki güncel mevzuat değişikliklerini, Yargıtay içtihatlarını ve uluslararası ticari tahkim kurallarını yakından takip eden Yılmaz, akademik çalışmalarını ve hukuki makalelerini periyodik olarak yayımlamaya devam etmektedir.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#12161f] border border-[#222936] rounded text-xs space-y-1">
                <span className="text-[#64748b] uppercase tracking-wider block">Baro Kaydı</span>
                <span className="text-white font-medium text-sm">İstanbul Barosu</span>
                <span className="text-[#c5a880] block font-mono">Baro Sicil No: 48921</span>
              </div>
              <div className="p-4 bg-[#12161f] border border-[#222936] rounded text-xs space-y-1">
                <span className="text-[#64748b] uppercase tracking-wider block">Yabancı Diller</span>
                <span className="text-white font-medium text-sm">Türkçe (Anadil), İngilizce (İleri Düzey Hukuki İngilizce)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. EĞİTİM VE DENEYİM ================= */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              Kariyer Yolculuğu
            </span>
            <h2 className="font-serif text-3xl text-white font-normal">
              Eğitim ve Deneyim
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Eğitim */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-[#1c222e]">
                <GraduationCap className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-serif text-xl text-white font-normal">Eğitim Geçmişi</h3>
              </div>

              <div className="space-y-6">
                
                <div className="relative pl-6 border-l-2 border-[#242b37] space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#c5a880]" />
                  <span className="text-xs text-[#c5a880] font-mono">2012 - 2014</span>
                  <h4 className="text-sm font-semibold text-white">Özel Hukuk Yüksek Lisansı (LL.M.)</h4>
                  <p className="text-xs text-[#94a3b8]">Marmara Üniversitesi Sosyal Bilimler Enstitüsü</p>
                  <p className="text-xs text-[#64748b] italic">Tez: Anonim Şirketlerde Yönetim Kurulu Üyelerinin Hukuki Sorumluluğu</p>
                </div>

                <div className="relative pl-6 border-l-2 border-[#242b37] space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#c5a880]" />
                  <span className="text-xs text-[#c5a880] font-mono">2007 - 2011</span>
                  <h4 className="text-sm font-semibold text-white">Hukuk Lisans Eğitimi</h4>
                  <p className="text-xs text-[#94a3b8]">İstanbul Üniversitesi Hukuk Fakültesi</p>
                  <p className="text-xs text-[#64748b]">Onur Derecesi ile Mezuniyet</p>
                </div>

                <div className="relative pl-6 border-l-2 border-[#242b37] space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#242b37]" />
                  <span className="text-xs text-[#94a3b8] font-mono">Sertifika Programları</span>
                  <h4 className="text-sm font-semibold text-white">Uluslararası Ticari Sözleşmeler & Tahkim</h4>
                  <p className="text-xs text-[#64748b]">ICC Uluslararası Ticaret Odası Eğitim Programı</p>
                </div>

              </div>
            </div>

            {/* Deneyim */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-[#1c222e]">
                <Briefcase className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-serif text-xl text-white font-normal">Mesleki Deneyim</h3>
              </div>

              <div className="space-y-6">
                
                <div className="relative pl-6 border-l-2 border-[#242b37] space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#c5a880]" />
                  <span className="text-xs text-[#c5a880] font-mono">2018 - Günümüz</span>
                  <h4 className="text-sm font-semibold text-white">Kurucu Avukat & Hukuk Danışmanı</h4>
                  <p className="text-xs text-[#94a3b8]">Yılmaz Hukuk & Danışmanlık Bürosu</p>
                  <p className="text-xs text-[#64748b]">Ticaret hukuku, sözleşmeler ve şirketler hukuku alanlarında bireysel ve kurumsal vekillik.</p>
                </div>

                <div className="relative pl-6 border-l-2 border-[#242b37] space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#c5a880]" />
                  <span className="text-xs text-[#c5a880] font-mono">2014 - 2018</span>
                  <h4 className="text-sm font-semibold text-white">Kıdemli Avukat / Şirketler Hukuku Departmanı</h4>
                  <p className="text-xs text-[#94a3b8]">Prestijli Hukuk Bürosu (İstanbul)</p>
                  <p className="text-xs text-[#64748b]">Uluslararası şirket birleşmeleri, yabancı yatırımcı danışmanlığı ve ticari dava yönetimi.</p>
                </div>

                <div className="relative pl-6 border-l-2 border-[#242b37] space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#242b37]" />
                  <span className="text-xs text-[#94a3b8] font-mono">2011 - 2014</span>
                  <h4 className="text-sm font-semibold text-white">Yasal Staj ve Avukatlık</h4>
                  <p className="text-xs text-[#94a3b8]">İstanbul Barosu Nezdinde Ruhsat & İcra-Dava Takibi</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ================= 3. MESLEKİ YAKLAŞIM ================= */}
        <section className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-12 space-y-8">
          <div className="space-y-3 pb-4 border-b border-[#1c222e]">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              Temel Değerlerimiz
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Mesleki Yaklaşım ve Çalışma Felsefemiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#94a3b8] leading-relaxed">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                <span className="font-serif text-lg">Önleyici Hukuk İlkeleri</span>
              </div>
              <p>
                Bizim için en başarılı hukuki zafer, müvekkili mahkeme koridorlarına düşürmeden, doğru tasarlanmış sözleşmeler ve müzakerelerle ihtilafı doğmadan çözmektir. Riskleri önceden öngörmek, gereksiz zaman ve kaynak israfını engeller.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                <span className="font-serif text-lg">Mutlak Gizlilik ve Sadakat</span>
              </div>
              <p>
                Müvekkillerimizin bize emanet ettiği ticari ve şahsi bilgileri en yüksek gizlilik standartlarında muhafaza ederiz. Güven esasına dayalı ilişkimiz, mesleğimizin en dokunulmaz teminatıdır.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                <span className="font-serif text-lg">Dürüst ve Gerçekçi Değerlendirme</span>
              </div>
              <p>
                Müvekkillerimize asla gerçekleşmesi imkânsız vaatlerde bulunmayız. Dosyanın güçlü ve zayıf yönlerini, dava kazanma ihtimalini ve olası masrafları en baştan şeffafça paylaşırız.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                <span className="font-serif text-lg">Stratejik ve Analitik Temsil</span>
              </div>
              <p>
                Her uyuşmazlığı bir satranç titizliğiyle ele alır; Yargıtay'ın güncel içtihatları, bilimsel doktrin görüşleri ve somut deliller ışığında çok boyutlu stratejiler oluştururuz.
              </p>
            </div>

          </div>

          <div className="pt-6 border-t border-[#1c222e] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#64748b]">
              Hukuki danışmanlık veya dava süreçleriniz için randevu alabilirsiniz.
            </span>
            <Link 
              to="/iletisim"
              className="px-6 py-2.5 rounded bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] text-xs uppercase tracking-wider font-semibold hover:brightness-110 transition-all flex items-center gap-2"
            >
              <span>İletişime Geçin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
};
