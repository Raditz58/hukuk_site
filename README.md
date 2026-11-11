# Hukuk & Danışmanlık Bürosu Web Sitesi

Modern, minimalist, sofistike ve prestijli kurumsal hukuk bürosu web sitesi.

## 🎨 Tasarım ve Mimari Özellikleri
- **Renk Paleti**: Derin siyah (`#0a0c10`), antrasit (`#12161f`), kırık beyaz / fildişi metinler ve asil şampanya / altın bronz (`#c5a880`) vurgular.
- **Tipografi**: Serif başlıklar (*Cormorant Garamond*), modern ve berrak okunabilir gövde metinleri (*Plus Jakarta Sans*).
- **TBB Uyumluluğu**: Türkiye Barolar Birliği Reklam Yasağı ve Meslek Kuralları ile KVKK aydınlatma standartlarına uygun kurumsal dil.

---

## 🏛️ Sayfa Yapısı ve Modüller

### 1. Ana Sayfa (`/`)
- Sade, ferah ve prestijli Hero alanı (Motto, yetkinlik metrikleri, hızlı aksiyon butonları).
- Mesleki Yaklaşım ve İlkeler kartları (Önleyici Hukuk, Sır Saklama, Şeffaf Raporlama).
- **Faaliyet Alanları Vitrini**: Ana Çalışma Alanları ve Diğer Çalışma Alanları iki bağımsız sekme altında sunulur.
- Mesleki Özgeçmiş ve Yaklaşım özeti.
- Son yayımlanan hukuki makaleler ve analizler.
- Randevu ve danışmanlık talep bölümü.

### 2. Hakkımda (`/hakkimda`)
- **Mesleki Özgeçmiş**: 15+ yıllık tecrübe, uzmanlık alanları ve baro sicil bilgisi.
- **Eğitim ve Deneyim**: Lisans, Yüksek Lisans (LL.M.), sertifikalar ve mesleki kariyer basamakları.
- **Mesleki Yaklaşım**: Önleyici hukuk felsefesi, mutlak gizlilik, analitik dava yönetimi ve dürüst bilgilendirme ilkeleri.

### 3. Faaliyet Alanları (`/faaliyet-alanlari` ve `/faaliyet-alanlari/:slug`)
Kullanıcı gereksinimlerine göre **Ana** ve **Diğer** çalışma alanları birbirinden net biçimde ayrılmıştır:
- **Ana Çalışma Alanları**:
  1. Ticaret Hukuku
  2. Şirketler Hukuku
  3. Sözleşmeler Hukuku
  4. Fikrî ve Sınai Mülkiyet Hukuku
  5. Tüketici Hukuku
  6. Danışmanlık
- **Diğer Çalışma Alanları**:
  1. Aile Hukuku
  2. Miras Hukuku
  3. Borçlar Hukuku
  4. İcra ve İflas Hukuku

> **Önemli:** Her bir faaliyet alanı için bağımsız ve zengin içerikli bir alt sayfa (`/faaliyet-alanlari/ticaret-hukuku` vb.) hazırlanmıştır. Bu sayfalarda:
> - İlgili hukuk alanının kapsamı
> - Hangi konuları içerdiği (detaylı başlıklar)
> - Sunulan hukuki destek ve vekillik adımları
> - Sıkça Sorulan Sorular (SSS) yer almaktadır.

### 4. Makaleler & Yayınlar (`/makaleler` ve `/makaleler/:slug`)
- **Kategoriler**:
  - Hukuki Değerlendirmeler
  - Mevzuat ve Güncel Gelişmeler
  - Hukuki İncelemeler
- Canlı arama motoru (başlık, özet ve etiketlerde anlık filtreleme).
- Zarif editoryal makale detay görünümü, okuma süreleri, sosyal paylaşım desteği ve ilgili makale önerileri.

### 5. İçerik Yönetim Paneli (`/admin`)
- Avukatın kendi başına hiçbir teknik bilgiye ihtiyaç duymadan yeni makale ekleyebildiği, mevcut makaleleri düzenleyebildiği veya silebildiği pratik yönetim arayüzü.
- Eklenen makaleler doğrudan `src/data/articles.json` dosyasına ve tarayıcı yerel hafızasına kaydedilir; sitede anında canlıya geçer.

### 6. İletişim (`/iletisim`)
- Telefon, E-posta ve Ofis Adresi.
- Çalışma saatleri ve Levent metro ulaşım bilgisi.
- Hukuki danışma & randevu talep formu (KVKK onaylı).
- Koyu temalı Google Harita entegrasyonu.

---

## 🚀 Projeyi Çalıştırma

Projeyi yerel bilgisayarınızda başlatmak için terminalde aşağıdaki komutu çalıştırmanız yeterlidir:

```bash
npm run dev
```

Ardından tarayıcınızda `http://localhost:3000` adresine giderek siteyi görüntüleyebilirsiniz.

Üretime hazır derleme almak için:
```bash
npm run build
```
