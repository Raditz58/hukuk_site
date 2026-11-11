import { PracticeArea } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  // --- ANA ÇALIŞMA ALANLARI ---
  {
    id: 'ticaret-hukuku',
    slug: 'ticaret-hukuku',
    title: 'Ticaret Hukuku',
    group: 'ana',
    badge: 'Ana Faaliyet',
    iconName: 'Briefcase',
    shortDescription: 'Ticari işletmelerin kuruluşu, tacirler arası uyuşmazlıklar, kıymetli evrak ve ticari davalarda kapsamlı hukuki temsil.',
    fullDescription: 'Ticaret Hukuku, modern ticari hayatın dinamiklerini, tacirlerin hak ve yükümlülüklerini, ticari işletme ilişkilerini ve piyasa kurallarını düzenleyen temel hukuk disiplinidir. Büromuz, yerli ve yabancı gerçek/tüzel kişi tacirlerin ticari risklerini asgariye indirmek ve uyuşmazlıkları stratejik yaklaşımlarla çözüme kavuşturmak amacıyla uzmanlaşmış danışmanlık ve dava takibi hizmeti sunmaktadır.',
    scope: [
      'Ticari işletmelerin devri, birleşmesi ve tasfiye süreçlerinin yönetimi',
      'Tacir sıfatından doğan hak ve borçların tespiti ve hukuki himaye',
      'Kıymetli evrak hukuku (çek, bono, poliçe) kaynaklı ihtilaflar ve kambiyo senetlerine mahsus takip',
      'Haksız rekabet ve ticari sırların korunması davaları',
      'Ticari alacak davaları, menfi tespit ve istirdat süreçleri',
      'Cari hesap ve ticari defter kayıtlarına ilişkin ihtilaflar'
    ],
    topics: [
      {
        title: 'Kıymetli Evrak Hukuku',
        description: 'Çek, bono ve poliçelerin düzenlenmesi, ziya ve iptal davaları, kambiyo takipleri ve imza inkârı itirazlarının çözümlenmesi.'
      },
      {
        title: 'Haksız Rekabet Uyuşmazlıkları',
        description: 'Müşteri çevresini haksız şekilde çekme, marka itibarını zedeleme, aldatıcı reklam ve ticari unvan ihlallerinin önlenmesi ve tazminat davaları.'
      },
      {
        title: 'Ticari İşletme ve Acentelik Sözleşmeleri',
        description: 'Distribütörlük, acentelik ve tek satıcılık ilişkilerinden kaynaklanan denkleştirme (portföy) tazminatı talepleri ve sözleşme fesihleri.'
      },
      {
        title: 'Ticari Uyuşmazlıklarda Dava ve Arabuluculuk',
        description: 'Zorunlu ticari arabuluculuk süreçlerinin yönetimi, ticaret mahkemelerinde açılan alacak, tazminat ve tespit davalarının titizlikle yürütülmesi.'
      }
    ],
    legalSupport: [
      'Ticari sözleşmelerin hazırlanması, revizesi ve müzakere edilmesi',
      'Kambiyo senetlerinden kaynaklanan alacakların tahsili ve dava süreçleri',
      'Ticari işletme devri ve hisse devir protokollerinin hazırlanması',
      'Dava öncesi risk analizi ve zorunlu arabuluculuk görüşmelerinde vekillik',
      'Asliye Ticaret Mahkemelerinde ve İstinaf/Yargıtay nezdinde duruşmalı temsil'
    ],
    faqs: [
      {
        question: 'Ticari davalarda arabuluculuk zorunlu mudur?',
        answer: 'Evet, Türk Ticaret Kanunu m. 5/A uyarınca konusu bir miktar paranın ödenmesi olan alacak ve tazminat talepli ticari davalarda dava açılmadan önce arabulucuya başvurulması zorunlu dava şartıdır.'
      },
      {
        question: 'Bono veya çekte zamanaşımı süresi ne kadardır?',
        answer: 'Bono için lehtara karşı zamanaşımı süresi vadeden itibaren 3 yıl; çek için ise ibraz süresinin bitiminden itibaren 3 yıldır. Sürelerin kaçırılmaması hayati öneme sahiptir.'
      }
    ]
  },
  {
    id: 'sirketler-hukuku',
    slug: 'sirketler-hukuku',
    title: 'Şirketler Hukuku',
    group: 'ana',
    badge: 'Ana Faaliyet',
    iconName: 'Building2',
    shortDescription: 'Şirket kuruluşu, genel kurul ve yönetim kurulu süreçleri, birleşme/devralmalar ve kurumsal yönetim danışmanlığı.',
    fullDescription: 'Şirketler Hukuku alanında anonim, limited ve komandit şirketlerin kuruluş aşamasından tasfiyesine kadar geçen tüm kurumsal süreçlerinde kurumsal yönetim danışmanlığı ve avukatlık hizmeti vermekteyiz. Ortaklar arası ihtilafların önlenmesi, azınlık haklarının korunması ve yönetim kurulu sorumluluklarının yönetimi öncelikli uzmanlık alanlarımızdandır.',
    scope: [
      'Anonim ve Limited şirket esas sözleşmelerinin hazırlanması ve şirket kuruluşu',
      'Genel Kurul ve Yönetim Kurulu kararlarının hukuki denetimi ve iptal davaları',
      'Şirket birleşme, devralma (M&A), bölünme ve tür değişikliği projeleri',
      'Hissedarlar arası pay sahipleri sözleşmeleri (SHA) ve intifa hakları',
      'Yönetim kurulu üyelerinin hukuki ve cezai sorumluluk davaları',
      'Sermaye artırımı, sermaye azaltımı ve sermaye avansı işlemleri'
    ],
    topics: [
      {
        title: 'Kurumsal Yönetim ve Genel Kurullar',
        description: 'Olağan ve olağanüstü genel kurulların mevzuata uygun toplanması, bakanlık temsilcisi işlemleri ve karar iptali risklerinin bertaraf edilmesi.'
      },
      {
        title: 'Ortaklar Arası Uyuşmazlıklar ve Azınlık Hakları',
        description: 'Haklı nedenle fesih davaları, ortaklıktan çıkarılma, bilgi alma ve inceleme haklarının kullanımı, özel denetçi atanması talepleri.'
      },
      {
        title: 'Birleşme, Devralma ve Hukuki İnceleme (Due Diligence)',
        description: 'Yatırım öncesi şirketlerin hukuki röntgeninin çekilmesi, risk raporlaması, hisse devir sözleşmeleri ve kapanış işlemlerinin icrası.'
      },
      {
        title: 'Yönetim Organının Sorumluluğu',
        description: 'TTK m. 553 kapsamında yöneticilerin özen ve sadakat borcuna aykırılıklarından kaynaklanan sorumluluk davaları ve ibra süreçleri.'
      }
    ],
    legalSupport: [
      'Şirket esas sözleşmesi ve iç yönergelerinin hazırlanması',
      'Genel kurul toplantı organizasyonu ve toplantı tutanaklarının tanzimi',
      'Hissedarlar Sözleşmesi (Shareholders Agreement) hazırlanması',
      'Yabancı sermayeli şirket kuruluşu ve irtibat bürosu açılışı',
      'Şirket temsilcilerine sürekli hukuki danışmanlık sağlanması'
    ],
    faqs: [
      {
        question: 'Anonim şirketlerde genel kurul kararlarının iptali davası ne zaman açılabilir?',
        answer: 'TTK m. 445 uyarınca, kanuna, esas sözleşmeye ve dürüstlük kuralına aykırı genel kurul kararlarına karşı karar tarihinden itibaren 3 ay içinde iptal davası açılması gerekir.'
      },
      {
        question: 'Yönetim kurulu üyeleri şirket borçlarından şahsen sorumlu mudur?',
        answer: 'Kural olarak sermaye şirketlerinde ortak ve yöneticiler şirket borçlarından şahsen sorumlu değildir; ancak kamu borçları (vergi, SGK) ve kusurlu fiillerden doğan zararlarda özel sorumluluk hükümleri devreye girebilir.'
      }
    ]
  },
  {
    id: 'sozlesmeler-hukuku',
    slug: 'sozlesmeler-hukuku',
    title: 'Sözleşmeler Hukuku',
    group: 'ana',
    badge: 'Ana Faaliyet',
    iconName: 'FileText',
    shortDescription: 'Her türlü ticari ve bireysel sözleşmenin hazırlanması, incelenmesi, risk analizi ve müzakere süreçlerinin yönetimi.',
    fullDescription: 'Hukuki güvenliğin temeli, sağlam ve öngörülü hazırlanmış sözleşmelerdir. Büromuz, yerli ve uluslararası standartlarda sözleşmelerin tanzimi, yürürlükteki mevzuata uyumu, cezai şart, fesih ve cayma klozu analizleri ile olası dava ihtimallerini sıfıra indirmeyi amaçlayan önleyici hukuk anlayışıyla hareket eder.',
    scope: [
      'Uluslararası ve yerel ticari alım-satım sözleşmeleri',
      'Hizmet, danışmanlık, taşeronluk ve eser (inşaat) sözleşmeleri',
      'Gizlilik (NDA), rekabet etmeme ve münhasırlık anlaşmaları',
      'Franchise, lisans, bayilik ve distribütörlük sözleşmeleri',
      'Kira sözleşmeleri (çatılı işyeri ve konut kiraları)',
      'Sözleşme ihlali, feshi, cezai şart ve tazminat taleplerinin takibi'
    ],
    topics: [
      {
        title: 'Sözleşme Mimarisi ve Risk Analizi',
        description: 'Taraf menfaatlerini en üst düzeyde koruyan, belirsizlik içermeyen ve ileride doğabilecek uyuşmazlıklara kesin çözümler getiren sözleşme kurgusu.'
      },
      {
        title: 'Sözleşme Müzakereleri',
        description: 'Müvekkillerimizin ticari görüşmelerinde hukuki müzakereci olarak yer alma, kırmızı çizgileri koruma ve dengeyi sağlama.'
      },
      {
        title: 'Fesih, Dönme ve Cayma Süreçleri',
        description: 'Haklı ve haksız fesih bildirimleri, noter ihtarnameleri, feshe bağlı tazminat ve cezai şart taleplerinin icrası.'
      },
      {
        title: 'Tip ve Standart Şartlar (Genel İşlem Şartları)',
        description: 'Tüketici ve ticari ilişkilerde genel işlem şartlarının geçerlilik denetimi ve hukuki risklerin önceden elimine edilmesi.'
      }
    ],
    legalSupport: [
      'Özelleştirilmiş sözleşme taslaklarının sıfırdan hazırlanması',
      'Karşı tarafça sunulan sözleşmelerin revizyonu ve risk raporu oluşturulması',
      'Noter ihtarnamelerinin yazımı ve tebliğ takibi',
      'Sözleşmeye aykırılıktan doğan maddi/manevi tazminat davalarının takibi',
      'Sözleşmelerin Türkçe-İngilizce çift dilli hazırlanması ve denetimi'
    ]
  },
  {
    id: 'fikri-ve-sinai-mulkiyet-hukuku',
    slug: 'fikri-ve-sinai-mulkiyet-hukuku',
    title: 'Fikrî ve Sınai Mülkiyet Hukuku',
    group: 'ana',
    badge: 'Ana Faaliyet',
    iconName: 'ShieldCheck',
    shortDescription: 'Marka, patent, tasarım, telif hakları tescili, itirazlar, ihlallerin önlenmesi ve fikri mülkiyet davaları.',
    fullDescription: 'Günümüz bilgi ekonomisinde şirketlerin en değerli varlıkları fikri haklarıdır. Büromuz; marka, patent, faydalı model, endüstriyel tasarım, yazılım telif hakları ve ticari sırların korunması, Türk Patent ve Marka Kurumu (TÜRKPATENT) nezdindeki itirazlar ve Fikri ve Sınai Haklar Hukuk Mahkemelerindeki tecavüzün men’i ve ref’i davalarında kapsamlı vekillik sunmaktadır.',
    scope: [
      'Marka tescil başvuruları, bülten takibi ve benzerlik itirazları',
      'Marka hükümsüzlüğü, terkin ve kullanmama nedeniyle iptal davaları',
      'Marka ve patent hakkına tecavüzün durdurulması, önlenmesi ve giderilmesi davaları',
      'Maddi ve manevi tazminat, itibar tazminatı ve yoksun kalınan kazanç talepleri',
      'Fikir ve Sanat Eserleri Kanunu (FSEK) kapsamında telif hakkı koruması ve lisanslama',
      'Yazılım, mobil uygulama, dijital içerik ve yapay zeka çıktılarının fikri korunması'
    ],
    topics: [
      {
        title: 'Marka ve Tasarım Hukuku',
        description: 'Markanın ayırt ediciliği, iltibas (karıştırılma) tehlikesi davaları, tasarım gaspı ve taklit ürünlerle mücadele süreçleri.'
      },
      {
        title: 'Telif Hakları ve Dijital Mecralar',
        description: 'Müzik, sinema, edebiyat ve yazılım eser sahiplerinin mali ve manevi haklarının ihlallerine karşı koruma ve FSEK tespit davaları.'
      },
      {
        title: 'Fikri Mülkiyet Lisans Sözleşmeleri',
        description: 'Marka devir, patent lisansı, know-how ve ticari sır koruma sözleşmelerinin tanzimi ve uluslararası tescil stratejileri.'
      },
      {
        title: 'Gümrüklerde El Koyma ve Taklit Ürünlerle Mücadele',
        description: 'Taklit ürünlerin ithalat/ihracatının önlenmesi amacıyla gümrük muhafaza tedbirleri ve arama-el koyma kararlarının infazı.'
      }
    ],
    legalSupport: [
      'TÜRKPATENT ve WIPO nezdinde tescil ve itiraz işlemleri',
      'Fikri ve Sınai Haklar Ceza ve Hukuk Mahkemelerinde vekillik',
      'Baskın ve delil tespiti işlemlerinin savcılık ve mahkeme kanalıyla icrası',
      'Lisans ve devir sözleşmelerinin hazırlanması ve sicile tescili',
      'Domain (alan adı) uyuşmazlıkları ve WIPO UDRP tahkim süreçleri'
    ]
  },
  {
    id: 'tuketici-hukuku',
    slug: 'tuketici-hukuku',
    title: 'Tüketici Hukuku',
    group: 'ana',
    badge: 'Ana Faaliyet',
    iconName: 'Scale',
    shortDescription: 'Ayıplı mal ve hizmet davaları, Tüketici Hakem Heyeti süreçleri ve kurumsal tüketici mevzuatı uyum danışmanlığı.',
    fullDescription: '6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında hem tüketicilerin karşılaştığı haksız uygulamalara karşı hak arama süreçlerini yürütüyor, hem de üretici ve perakendeci şirketlere tüketici şikayetlerini minimize edecek kurumsal uyum danışmanlığı veriyoruz.',
    scope: [
      'Ayıplı mal (otomobil, elektronik, gayrimenkul) ve ayıplı hizmet uyuşmazlıkları',
      'Tüketici Hakem Heyetlerine başvuru ve hakem heyeti kararlarına itiraz davaları',
      'Tüketici Mahkemelerinde bedel iadesi, misliyle değişim ve tazminat davaları',
      'Mesafeli satış sözleşmeleri, e-ticaret siteleri yasal bilgilendirme metinleri',
      'Bankacılık işlemlerinden doğan dosya masrafı, haksız kesinti ve faiz iade talepleri',
      'Abonelik sözleşmeleri, devre mülk ve paket tur sözleşmelerinden cayma'
    ],
    topics: [
      {
        title: 'Ayıplı Araç ve Değer Kaybı Davaları',
        description: 'Sıfır kilometre araçlardaki gizli ayıplar, ikinci el araç satıcılarının garanti ihlalleri, bedel tenzili ve araç değişimi davaları.'
      },
      {
        title: 'E-Ticaret ve Mesafeli Satış Uyum Süreçleri',
        description: 'E-ticaret platformlarının cayma hakkı, ön bilgilendirme formu ve kullanıcı sözleşmelerinin Ticaret Bakanlığı mevzuatına uyarlanması.'
      },
      {
        title: 'Tüketici Kredileri ve Konut Satışları',
        description: 'Ön ödemeli konut satışlarında teslim gecikmeleri, müteahhit temerrüdü, kira tazminatı ve sözleşmeden dönme hakları.'
      },
      {
        title: 'Tüketici Hakem Heyeti Kararlarına İtiraz',
        description: 'Hakem heyetlerinin görev ve yetki sınırlarını aşan veya hukuka aykırı kararlarına karşı 15 günlük yasal sürede mahkemeye itiraz.'
      }
    ],
    legalSupport: [
      'Tüketici Mahkemelerinde dava açılması ve vekillik',
      'Tüketici Hakem Heyeti başvuru dosyalarının hazırlanması',
      'Şirketlerin tüketici sözleşmelerinin denetimi ve mevzuata uyumu',
      'Tüketici uyuşmazlıklarında arabuluculuk müzakerelerinin yürütülmesi'
    ]
  },
  {
    id: 'danismanlik',
    slug: 'danismanlik',
    title: 'Hukuki Danışmanlık',
    group: 'ana',
    badge: 'Ana Faaliyet',
    iconName: 'HelpCircle',
    shortDescription: 'Şirketler ve şahıslar için sürekli önleyici hukuk müşavirliği, risk analizi ve stratejik hukuki yol haritaları.',
    fullDescription: 'Hukuki Danışmanlık hizmetimiz, sorunlar ortaya çıktıktan sonra müdahale etmek yerine, olası riskleri önceden öngörerek uyuşmazlıkları henüz doğmadan önlemeyi amaçlayan proaktif ve stratejik bir danışmanlık modelidir. Aylık sürekli hukuk müşavirliği (retainer) veya proje bazlı danışmanlık seçenekleriyle müvekkillerimizin kurumsal kararlarında en güvenilir pusulası olmaktayız.',
    scope: [
      'Sürekli aylık kurumsal hukuk müşavirliği (Retainer Legal Advisory)',
      'Şirket içi operasyonların mevzuata uygunluk denetimi (Compliance Audit)',
      'Yönetim kurulu ve üst yöneticilere anlık hukuki mütalaa ve karar desteği',
      'İş hukuku ve insan kaynakları süreçlerinin hukuki denetimi',
      'Kişisel Verilerin Korunması Kanunu (KVKK) uyum projeleri ve veri güvenliği',
      'Kriz yönetimi, basın açıklamaları ve itibar risklerinin hukuki koordinasyonu'
    ],
    topics: [
      {
        title: 'Önleyici Hukuk Stratejisi',
        description: 'Şirketlerin attığı her ticari adımda potansiyel dava risklerini, maliyetleri ve cezai yaptırımları önceden hesaplayan stratejik planlama.'
      },
      {
        title: 'Sürekli Hukuk Müşavirliği',
        description: 'Günlük operasyonlarda karşılaşılan sözleşmeler, ihtarlar, personel problemleri ve resmi kurum yazışmalarına ivedi hukuki yanıtlar.'
      },
      {
        title: 'KVKK ve Veri Koruma Danışmanlığı',
        description: 'VERBİS kayıtları, aydınlatma metinleri, açık rıza formları, veri işleme envanteri ve siber ihlal bildirimlerinin hukuki yönetimi.'
      },
      {
        title: 'Yatırım ve Girişimcilik Danışmanlığı',
        description: 'Startup ve teknoloji şirketlerine melek yatırımcı görüşmeleri, hisse opsiyon planları ve büyüme süreçlerinde hukuki mentorluk.'
      }
    ],
    legalSupport: [
      '7/24 kesintisiz hukuki danışma ve acil durum desteği',
      'Yazılı hukuki görüş ve mütalaa (legal opinion) tanzimi',
      'Kurum içi hukuki eğitimler ve personel seminerleri',
      'Resmi kurumlarla yapılan idari yazışmalar ve savunmaların hazırlanması',
      'Periyodik mevzuat değişiklik bültenleri sunumu'
    ]
  },

  // --- DİĞER ÇALIŞMA ALANLARI (Ayrı Grup Olarak) ---
  {
    id: 'aile-hukuku',
    slug: 'aile-hukuku',
    title: 'Aile Hukuku',
    group: 'diger',
    badge: 'Çalışma Alanı',
    iconName: 'HeartHandshake',
    shortDescription: 'Anlaşmalı/çekişmeli boşanma, velayet, nafaka, mal rejimi tasfiyesi ve aile içi uyuşmazlıklarda hassas hukuki destek.',
    fullDescription: 'Aile Hukuku; taraflar arasındaki insani ve duygusal bağların en hassas olduğu, titizlik ve gizlilik gerektiren özel bir hukuk dalıdır. Büromuz, müvekkillerimizin ve müşterek çocukların hak ve menfaatlerini koruyarak, gereksiz yıpranmalara yol açmadan, Türk Medeni Kanunu çerçevesinde sonuç odaklı ve gizliliğe mutlak sadık çözümler üretmektedir.',
    scope: [
      'Anlaşmalı boşanma protokolünün hazırlanması ve tek celsede boşanma takibi',
      'Çekişmeli boşanma davaları (zina, hayata kast, şiddetli geçimsizlik vb.)',
      'Maddi ve manevi tazminat talepleri',
      'Nafaka davaları (tedbir, iştirak, yoksulluk, yardım nafakası ve nafaka artırımı)',
      'Velayet hakkının tespiti, değiştirilmesi ve çocukla kişisel ilişki kurulması',
      'Evlilik öncesi/sırası mal rejimi sözleşmeleri ve edinilmiş mallara katılma rejiminin tasfiyesi'
    ],
    topics: [
      {
        title: 'Anlaşmalı ve Çekişmeli Boşanma',
        description: 'Tarafların haklarını güvence altına alan anlaşmalı boşanma müzakereleri ve çekişmeli davalarda delil toplama ve duruşma takibi.'
      },
      {
        title: 'Mal Rejimi ve Katılma Alacağı',
        description: 'Evlilik birliği süresince edinilen gayrimenkul, şirket hissesi, araç ve banka birikimlerinin değer artış payı ve artık değer hesabı ile tasfiyesi.'
      },
      {
        title: 'Velayet ve Çocuk Hakları',
        description: 'Çocuğun üstün yararı ilkesi doğrultusunda pedagog raporlarının takibi, velayetin tevdi ve kaldırılması süreçleri.'
      },
      {
        title: '6284 Sayılı Kanun ve Koruma Tedbirleri',
        description: 'Aile içi şiddet, taciz ve tehdit durumlarında ivedi uzaklaştırma kararlarının alınması ve ihlal durumunda tazyik hapsi talepleri.'
      }
    ],
    legalSupport: [
      'Boşanma dava dilekçeleri ve delil listelerinin tanzimi',
      'Anlaşmalı boşanma protokolünün tarafların menfaatine göre kurgulanması',
      'Aile Mahkemelerinde duruşma temsili ve istinaf süreçleri',
      'Tedbir ve koruma kararlarının derhal infazı',
      'Nafaka ve tazminat alacaklarının icra takibiyle tahsili'
    ]
  },
  {
    id: 'miras-hukuku',
    slug: 'miras-hukuku',
    title: 'Miras Hukuku',
    group: 'diger',
    badge: 'Çalışma Alanı',
    iconName: 'ScrollText',
    shortDescription: 'Veraset ilamı, vasiyetname tanzimi, tenkis davaları, muris muvazaası ve mirasın taksimi işlemleri.',
    fullDescription: 'Miras Hukuku, bir kimsenin vefatı sonrasında geride bıraktığı malvarlığının yasal ve atanmış mirasçılar arasında adil ve hukuka uygun şekilde paylaştırılmasını konu alır. Büromuz, murisin gerçek iradesinin yansıması, saklı pay haklarının korunması ve mirasçılar arası uyuşmazlıkların sulh veya dava yoluyla neticelendirilmesinde kapsamlı vekillik hizmeti sunar.',
    scope: [
      'Veraset ilamı (mirasçılık belgesi) alınması ve nüfus kayıtlarının düzeltilmesi',
      'Resmi ve el yazılı vasiyetname hazırlanması ve noter tescili',
      'Miras sözleşmeleri ve ölünceye kadar bakma sözleşmelerinin düzenlenmesi',
      'Muris muvazaası (mirastan mal kaçırma) nedeniyle tapu iptali ve tescil davaları',
      'Saklı pay ihlali ve tenkis davaları',
      'Miras ortaklığının giderilmesi (izale-i şüyu) ve mirasın taksimi davaları',
      'Mirasın reddi (hükmen ve gerçek ret) işlemlerinin yürütülmesi'
    ],
    topics: [
      {
        title: 'Muris Muvazaası (Mal Kaçırma)',
        description: 'Mirasbırakanın diğer mirasçılardan mal kaçırmak amacıyla yaptığı muvazaalı taşınmaz satış ve bağışlarının iptali davaları.'
      },
      {
        title: 'Tenkis Davaları ve Saklı Pay',
        description: 'Altsoy, eş ve anne-babanın kanuni saklı paylarını ihlal eden tasarruflara karşı tasarrufun saklı pay sınırına indirilmesi talepleri.'
      },
      {
        title: 'Vasiyetname İptali ve Mirastan Feragat',
        description: 'Ehliyetsizlik, hata, hile ve şekil eksikliği nedenleriyle vasiyetnamelerin hükümsüz kılınması davaları.'
      },
      {
        title: 'Miras Ortaklığının Giderilmesi',
        description: 'Mirasçılar arasında anlaşma sağlanamadığı hallerde tereke mallarının aynen taksimi veya açık artırmayla satışı.'
      }
    ],
    legalSupport: [
      'Mirasbırakanın terekesinin tespiti ve tereke defteri tutulması',
      'Miras taksim sözleşmelerinin hazırlanması ve noter onayı',
      'Asliye Hukuk ve Sulh Hukuk Mahkemelerinde dava vekilligi',
      'Mirasın hükmen reddi davalarında borca batıklığın ispatı'
    ]
  },
  {
    id: 'borclar-hukuku',
    slug: 'borclar-hukuku',
    title: 'Borçlar Hukuku',
    group: 'diger',
    badge: 'Çalışma Alanı',
    iconName: 'Layers',
    shortDescription: 'Haksız fiil, sebepsiz zenginleşme, tazminat davaları, kira uyuşmazlıkları ve alacak tahsili süreçleri.',
    fullDescription: 'Borçlar Hukuku, özel hukukun omurgasını oluşturan; sözleşmelerden, haksız fiillerden ve sebepsiz zenginleşmeden doğan borç ilişkilerini düzenleyen temel alandır. Maddi ve manevi tazminat istemleri, borcun ifası, borçlu temerrüdü ve kira hukuku uyuşmazlıklarında yetkin dava ve danışmanlık hizmeti sağlamaktayız.',
    scope: [
      'Maddi ve manevi tazminat davaları (trafik kazası, iş kazası, haksız fiil vb.)',
      'Sebepsiz zenginleşmeden kaynaklanan iade talepleri',
      'Borcun ifası, ifa engelleri ve borçlu temerrüdü süreçleri',
      'Kira tahliye davaları (tahliye taahhüdü, kira ödememe, ihtiyaç nedeniyle tahliye)',
      'Kira tespit ve kira uyarlama davaları',
      'Alacağın devri (temliki) ve borcun üstlenilmesi sözleşmeleri',
      'Kefalet, garanti ve rehin sözleşmelerinin geçerlilik denetimi'
    ],
    topics: [
      {
        title: 'Tazminat Hukuku ve Haksız Fiil',
        description: 'Kişilik haklarına saldırı, beden tamlığı ihlali ve malvarlığı zararlarına karşı kusurlu taraftan tam tazminat talepleri.'
      },
      {
        title: 'Kira Hukuku ve Tahliye Davaları',
        description: 'İki haklı ihtar, kira bedelinin ödenmemesi, tahliye taahhütnamesinin icrası ve 5 yılı aşan kiralarda kira bedeli tespiti.'
      },
      {
        title: 'Sebepsiz Zenginleşme',
        description: 'Haklı bir sebep olmaksızın başkasının malvarlığından yapılan kazandırmaların iadesi için zamanaşımı içinde dava açılması.'
      },
      {
        title: 'Borç İlişkisinde Temerrüt ve İfa',
        description: 'Sözleşmeye aykırılık halinde aynen ifa, fesih veya müspet/menfi zarar tazminatı seçeneklerinin değerlendirilmesi.'
      }
    ],
    legalSupport: [
      'Tazminat hesaplamaları ve aktüerya bilirkişi raporlarının denetimi',
      'Tahliye davalarında Sulh Hukuk ve İcra Hukuk Mahkemelerinde vekillik',
      'İhtarname keşidesi ve kira alacaklarının ilamsız icra yoluyla tahsili',
      'Sulh protokolleri ve ibralaşma belgelerinin hazırlanması'
    ]
  },
  {
    id: 'icra-ve-iflas-hukuku',
    slug: 'icra-ve-iflas-hukuku',
    title: 'İcra ve İflas Hukuku',
    group: 'diger',
    badge: 'Çalışma Alanı',
    iconName: 'Gavel',
    shortDescription: 'İlamsız/ilamlı icra takipleri, konkordato, borç tasfiyesi, itirazın iptali ve menfi tespit davaları.',
    fullDescription: 'İcra ve İflas Hukuku, alacaklıların alacaklarına en hızlı, güvenli ve kanuni yollarla kavuşmasını sağlarken, borçluların da yasal haklarının korunmasını ve orantısız haciz baskılarının önlenmesini temin eder. Büromuz; kurumsal alacak yönetimi, çek/senet/fatura tahsilatları, ihtiyati haciz kararları ve konkordato süreçlerinde tecrübeli kadrosuyla faaliyet göstermektedir.',
    scope: [
      'İlamlı ve ilamsız icra takipleri ile kambiyo senetlerine özgü takipler',
      'Rehnin ve ipoteğin paraya çevrilmesi yoluyla icra takipleri',
      'İhtiyati haciz ve ihtiyati tedbir kararlarının alınması ve infazı',
      'Borca ve imzaya itiraz, itirazın kaldırılması ve itirazın iptali davaları',
      'Menfi tespit ve istirdat (borçlu olunmadığının tespiti ve para iadesi) davaları',
      'Haczedilmezlik şikayetleri ve ihalenin feshi davaları',
      'Konkordato projesi hazırlığı, konkordato komiserliği ve iflas erteleme süreçleri'
    ],
    topics: [
      {
        title: 'Kurumsal Alacak Yönetimi ve Tahsilat',
        description: 'Şirketlerin cari hesap ve fatura alacaklarının kurumsal süreçlerle, itirazsız ve hızlı bir şekilde tahsil edilmesi.'
      },
      {
        title: 'İhtiyati Haciz ve Hızlı Güvence',
        description: 'Mal kaçırma tehlikesi bulunan durumlarda 24 saat içinde mahkemeden ihtiyati haciz kararı alarak banka ve taşınmazlara bloke konulması.'
      },
      {
        title: 'İtirazın İptali ve İcra İnkar Tazminatı',
        description: 'Haksız yere icra takibine itiraz eden borçluya karşı dava açılarak %20den az olmamak üzere icra inkar tazminatına hükmedilmesi.'
      },
      {
        title: 'Konkordato ve Borç Yapılandırması',
        description: 'Mali güçlüğe düşen dürüst şirketlerin borçlarını vadeli ve indirimli olarak yapılandırarak iflastan kurtulma projelerinin yönetimi.'
      }
    ],
    legalSupport: [
      'Ulusal Yargı Ağı Bilişim Sistemi (UYAP) üzerinden anlık icra takibi açılışı',
      'Banka, tapu, araç ve SGK hacizlerinin derhal tatbiki',
      'İcra Hukuk ve Asliye Ticaret Mahkemelerinde dava takibi',
      'Alacaklı-borçlu sulh görüşmeleri ve taksitlendirme protokolleri',
      'Konkordato ön ve kesin mühlet süreçlerinin hukuki yönetimi'
    ]
  }
];
