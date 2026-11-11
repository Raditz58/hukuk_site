import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Building,
  Navigation
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/services';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Ticaret Hukuku');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after short delay
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className="pt-28 pb-20 bg-[#0a0c10] min-h-screen">
      
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
          İletişim & Randevu
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-normal">
          Bize Ulaşın
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
          Hukuki uyuşmazlıklarınız, sözleşme denetimleriniz ve sürekli danışmanlık talepleriniz için ofisimize davetlisiniz veya iletişim kanallarımızdan bize ulaşabilirsiniz.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 flex items-start gap-4 hover:border-[#c5a880]/50 transition-colors group">
              <div className="p-3 bg-[#161c24] text-[#c5a880] rounded border border-[#242b36] group-hover:border-[#c5a880] transition-colors shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#94a3b8] block">Telefon</span>
                <a 
                  href="tel:+902120000000" 
                  className="text-lg font-serif text-white hover:text-[#c5a880] transition-colors block"
                >
                  +90 (212) 000 00 00
                </a>
                <p className="text-xs text-[#64748b]">Mesai saatleri içerisinde doğrudan arayabilirsiniz.</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 flex items-start gap-4 hover:border-[#c5a880]/50 transition-colors group">
              <div className="p-3 bg-[#161c24] text-[#c5a880] rounded border border-[#242b36] group-hover:border-[#c5a880] transition-colors shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#94a3b8] block">E-Posta</span>
                <a 
                  href="mailto:info@yilmazhukuk.com" 
                  className="text-lg font-serif text-white hover:text-[#c5a880] transition-colors block"
                >
                  info@yilmazhukuk.com
                </a>
                <p className="text-xs text-[#64748b]">Evrak ve ön değerlendirme talepleriniz için.</p>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 flex items-start gap-4 hover:border-[#c5a880]/50 transition-colors group">
              <div className="p-3 bg-[#161c24] text-[#c5a880] rounded border border-[#242b36] group-hover:border-[#c5a880] transition-colors shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#94a3b8] block">Ofis Adresi</span>
                <p className="text-sm text-white font-medium leading-relaxed">
                  Büyükdere Cad. Levent Plaza No: 142/8, Levent, Beşiktaş / İstanbul
                </p>
                <p className="text-xs text-[#64748b]">Metro Levent İstasyonu 2 nolu çıkışa 150m mesafede.</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 flex items-start gap-4">
              <div className="p-3 bg-[#161c24] text-[#c5a880] rounded border border-[#242b36] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <span className="uppercase tracking-wider text-[#94a3b8] block">Çalışma Saatleri</span>
                <div className="text-white space-y-0.5 pt-1">
                  <div className="flex justify-between gap-6">
                    <span>Hafta İçi (Pzt - Cuma):</span>
                    <span className="font-mono text-[#c5a880]">09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between gap-6 text-[#64748b]">
                    <span>Hafta Sonu:</span>
                    <span>Randevu Üzerine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded bg-[#12161f] border border-[#1f2633] text-xs text-[#64748b] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c5a880] shrink-0" />
              <span>İlettiğiniz tüm bilgi ve belgeler mesleki sır saklama ve KVKK kapsamında korunur.</span>
            </div>

          </div>

          {/* Right Column: Contact & Appointment Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1218] border border-[#1e2531] rounded-sm p-8 sm:p-10 space-y-6">
              
              <div className="pb-4 border-b border-[#1c222e]">
                <h3 className="font-serif text-2xl text-white font-normal">
                  Hukuki Danışma & Randevu Talep Formu
                </h3>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Formu doldurduktan sonra en geç 24 saat içinde tarafınıza geri dönüş sağlanacaktır.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#13231b] border border-green-700/60 flex items-center justify-center text-green-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">Mesajınız Alınmıştır</h4>
                  <p className="text-sm text-[#94a3b8] max-w-md mx-auto">
                    Talebiniz avukatımıza iletilmiştir. Dosyanız incelenerek en kısa sürede belirttiğiniz iletişim kanalından sizinle irtibat kurulacaktır.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#161c24] border border-[#252c38] text-xs text-[#c5a880] rounded hover:border-[#c5a880]"
                  >
                    Yeni Bir Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                        Adınız Soyadınız *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Örn: Ahmet Yılmaz"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                        Telefon Numaranız *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="05XX XXX XX XX"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>
                  </div>

                  {/* Email & Topic */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                        E-Posta Adresiniz *
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="ornek@alanadi.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                        İlgili Hukuk Alanı
                      </label>
                      <select 
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white focus:outline-none focus:border-[#c5a880]"
                      >
                        {PRACTICE_AREAS.map(area => (
                          <option key={area.id} value={area.title}>
                            {area.title} {area.group === 'ana' ? '(Ana Alan)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#cbd5e1] font-semibold block">
                      Konu ve Uyuşmazlık Özeti *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Danışmak istediğiniz hususu ve sürecin özetini yazınız..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#12161f] border border-[#222a36] rounded text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-gradient-to-r from-[#c5a880] to-[#b39366] text-[#0a0c10] text-xs uppercase tracking-wider font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Danışmanlık Talebini Gönder</span>
                  </button>

                  <p className="text-[11px] text-[#64748b] text-center">
                    Bu form üzerinden paylaşılan bilgiler 6698 sayılı KVKK kapsamında gizlilikle korunur.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Map / Location Showcase */}
        <div className="mt-14 bg-[#0e1218] border border-[#1e2531] rounded-sm p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1c222e]">
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-[#c5a880]" />
              <div>
                <h4 className="font-serif text-lg text-white">Ofis Lokasyonu & Ulaşım</h4>
                <p className="text-xs text-[#94a3b8]">Büyükdere Cad. Levent Plaza, Beşiktaş / İstanbul</p>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=Levent+Plaza+Istanbul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#141822] border border-[#222a36] text-xs text-[#c5a880] hover:border-[#c5a880] transition-colors w-fit"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Google Haritalarda Aç</span>
            </a>
          </div>

          {/* Styled Map Container */}
          <div className="w-full h-64 sm:h-80 bg-[#12161f] border border-[#1f2735] rounded overflow-hidden relative flex items-center justify-center">
            <iframe 
              title="Ofis Haritası"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8763529367466!2d29.00938637651036!3d41.07721861552528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab65d6c8e5ab1%3A0x673c6835122f8a84!2sLevent%2C%20B%C3%BCy%C3%BCkdere%20Cd.%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-75 hover:opacity-100 transition-opacity"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
