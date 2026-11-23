# Av. Sümeyra Culfa | Hukuk & Danışmanlık Web Sitesi

Bu proje, **Av. Sümeyra Culfa Hukuk & Danışmanlık** bürosu için hazırlanmış; kurumsal, prestijli, mobil uyumlu ve **sunucusuz (serverless - JAMstack)** modern bir web sitesidir.

---

## 🌟 Öne Çıkan Özellikler

1. **Özgün ve Prestijli Tasarım:**
   - Referans tasarım estetiği korunarak zenginleştirilmiş tipografi (*Cormorant Garamond* ve *DM Sans*), lacivert (`#111d2e`), altın/bronz (`#c4a77f`) ve fildişi (`#f7f2eb`) renk paleti.
   - 6 ana uzmanlık alanı (Ticaret, Şirketler, Fikri Mülkiyet, Sözleşmeler, Otomotiv, Uyuşmazlık Çözümü) için vektörel ikonlar ve kartlar.
   - Av. Sümeyra Culfa'nın profesyonel portresi ve büro değerleri.

2. **Sunucusuz Yönetim Paneli (Decap CMS / Netlify CMS):**
   - Herhangi bir PHP, Node.js veya veritabanı sunucusu gerektirmez!
   - `/admin/` adresi üzerinden doğrudan giriş yapılır.
   - **Makaleler:** Zengin metin editörü (WYSIWYG / Markdown) ile makale ekleme, düzenleme, kapak görseli ve kategori seçimi.
   - **Uzmanlık Alanları:** Branş başlıkları, açıklamaları ve hizmet maddelerini yönetebilme.
   - **Site Ayarları:** Telefon, e-posta, ofis adresi, çalışma saatleri ve başlıkları tek tıkla değiştirebilme.

3. **Entegre Netlify Forms (Randevu & İletişim):**
   - Özel bir mail sunucusu kurulumu gerekmez.
   - Ziyaretçilerin web sitesindeki iletişim ve randevu formundan doldurduğu tüm bilgiler anında Netlify panelinize düşer ve e-posta adresinize otomatik iletilir.
   - Sayfa yenilenmeden, zarif bildirim mesajı ile anlık onay.

4. **İnteraktif Deneyim:**
   - **Makale Okuma Modalı:** Kullanıcılar sayfadan ayrılmadan makalelerin tüm zengin metin içeriğini, başlıklarını ve alıntılarını şık bir modal pencerede okuyabilir.
   - **Mobil Uyum:** Akıllı telefonlar ve tabletler için akıcı açılır mobil menü çekmecesi.
   - **Hafif ve Hızlı:** Inline devasa base64 kodları yerine web için optimize edilmiş semantik görsellerle milisaniyeler içinde açılan yüksek performans.

---

## 📁 Proje Dizin Yapısı

```text
hukuk_site/
├── index.html                   # Ana sayfa
├── netlify.toml                 # Netlify sunucusuz dağıtım ve yönlendirme yapılandırması
├── css/
│   └── style.css                # Tasarım ve responsive stil kuralları
├── js/
│   ├── main.js                  # Modallar, form gönderimi, dinamik render ve menü
│   └── content-store.js         # Statik & dinamik veri köprüsü
├── admin/
│   ├── index.html               # Decap CMS yönetim paneli arayüzü
│   └── config.yml               # CMS koleksiyonları ve zengin metin editörü ayarları
├── content/
│   ├── settings.json            # Büro iletişim ve site ayarları
│   ├── articles/                # Avukatın makaleleri (Markdown formatında zengin metin)
│   └── practices/               # Uzmanlık alanları (JSON formatında)
└── assets/
    └── images/                  # Yüksek kaliteli web görselleri
```

---

## 🚀 Netlify Üzerinde Yayınlama (Canlıya Alma Rehberi)

Siteyi tamamen ücretsiz olarak Netlify'da yayınlamak için aşağıdaki 3 adımı takip edebilirsiniz:

### 1. Adım: Projeyi GitHub'a Yükleyin
1. Bu proje klasörünü (`hukuk_site`) GitHub hesabınızda yeni bir depoya (repository) push edin:
   ```bash
   git init
   git add .
   git commit -m "İlk sürüm: Av. Sümeyra Culfa Hukuk Sitesi"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/hukuk-site.git
   git push -u origin main
   ```

### 2. Adım: Netlify'da Depoyu Bağlayın
1. [Netlify.com](https://www.netlify.com)'a giriş yapın.
2. **"Add new site"** -> **"Import an existing project"** -> **GitHub** seçin.
3. Yüklediğiniz depoyu seçin.
4. *Publish directory* kısmını `.` (kök dizin) olarak bırakın ve **Deploy Site** butonuna tıklayın. Siteniz 10 saniye içinde yayına girecektir.

### 3. Adım: Yönetim Panelini (CMS) ve Formları Etkinleştirin
1. **Netlify Forms:**
   - Form koduna zaten `data-netlify="true"` eklenmiştir. Form gönderimleri otomatik olarak Netlify panelinizde **Forms** sekmesinde listelenir.
   - Bildirim e-postası almak için Netlify panelinde **Site configuration > Forms > Form notifications** alanına giderek mesajların gelmesini istediğiniz e-posta adresini (örneğin: `info@sumeyraculfa.com`) ekleyin.
2. **Netlify Identity & Git Gateway (Yönetim Paneli Girişi İçin):**
   - Netlify panelinizde **Site configuration > Identity** sekmesine gidin ve **"Enable Identity"** butonuna tıklayın.
   - Aşağı kaydırarak **Services > Git Gateway** bölümünü bulun ve **"Enable Git Gateway"** butonuna tıklayın.
   - **Identity > Invite users** butonuna tıklayarak Av. Sümeyra Culfa'nın e-posta adresine bir davet gönderin.
   - Gelen e-postadaki linke tıklayıp şifrenizi belirledikten sonra `https://siteniz.netlify.app/admin/` adresinden panele giriş yapabilirsiniz.

---

## 🖥️ Yerel Önizleme (Local Preview)

Siteyi bilgisayarınızda yerel olarak incelemek için:
- `index.html` dosyasını tarayıcınızda çift tıklayarak açabilirsiniz.
- Veya bir yerel web sunucusu ile görüntülemek için:
  ```bash
  npx serve .
  ```
  veya Python ile:
  ```bash
  python -m http.server 8000
  ```
  ardından tarayıcınızdan `http://localhost:8000` adresine gidebilirsiniz.
