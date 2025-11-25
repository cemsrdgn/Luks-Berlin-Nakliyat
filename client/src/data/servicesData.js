import brochureImagePrimary from '../assets/brochure/logo1.jpeg';
import brochureImageSecondary from '../assets/brochure/logo2.png';
import galleryImage1 from '../assets/gallery/1.jpeg';
import galleryImage2 from '../assets/gallery/2.jpeg';
import galleryImage3 from '../assets/gallery/3.jpeg';
import galleryImage4 from '../assets/gallery/4.jpeg';
import galleryImage5 from '../assets/gallery/5.jpeg';
import galleryImage6 from '../assets/gallery/6.jpeg';
import galleryImage7 from '../assets/gallery/7.jpeg';
import galleryImage8 from '../assets/gallery/8.jpeg';

export const servicesContent = {
  hero: {
    background: 'images/background_logistic_truck.jpg',
    copy: {
      tr: {
        eyebrow: 'SERVİSLER',
        title: 'Depolamadan projelere kadar uçtan uca lojistik',
        subtitle:
          'Her kategori için uzman ekipler, sigortalı taşıma prosedürleri ve şeffaf raporlamayla Berlin’den tüm Avrupa’ya güvenle taşıyoruz.'
      },
      en: {
        eyebrow: 'SERVICES',
        title: 'End-to-end logistics from storage to mega projects',
        subtitle:
          'Expert crews, insured procedures and transparent reporting let us move you from Berlin to every corner of Europe with confidence.'
      }
    }
  },
  brochure: [
    {
      id: 'logo1',
      href: brochureImagePrimary,
      asset: brochureImagePrimary,
      label: {
        tr: 'logo1',
        en: 'logo1'
      },
      description: {
        tr: 'logo1',
        en: 'logo1'
      }
    },
    {
      id: 'logo2',
      href: brochureImageSecondary,
      asset: brochureImageSecondary,
      label: {
        tr: 'logo2',
        en: 'logo2'
      },
      description: {
        tr: 'logo2',
        en: 'logo2'
      }
    }
  ],
  contact: [
    {
      id: 'address',
      icon: '📍',
      value: 'Ergenekon Mahallesi, Sanal Sokak 8/6, Yenimahalle / Ankara',
      label: {
        tr: 'Adres',
        en: 'Address'
      }
    },
    {
      id: 'phone',
      icon: '☎',
      value: '+90 541 596 54 91',
      href: 'tel:+905415965491',
      label: {
        tr: 'Telefon',
        en: 'Phone'
      }
    },
    {
      id: 'hours',
      icon: '🕘',
      value: {
        tr: '7/24 hizmet veriyoruz',
        en: 'We operate 24/7'
      },
      label: {
        tr: 'Çalışma Saatleri',
        en: 'Working Hours'
      }
    },
    {
      id: 'coverage',
      icon: '🚚',
      value: {
        tr: 'Türkiye genelinde hizmet sağlıyoruz',
        en: 'Serving clients all across Turkey'
      },
      label: {
        tr: 'Hizmet Alanı',
        en: 'Service Area'
      }
    }
  ],
  sidebar: {
    services: {
      tr: 'SERVİSLER',
      en: 'SERVICES'
    },
    brochure: {
      tr: 'BROŞÜR',
      en: 'BROCHURE'
    },
    contact: {
      tr: 'İLETİŞİM',
      en: 'CONTACT'
    }
  },
  featuresTitle: {
    tr: 'Hizmet Özellikleri',
    en: 'Service Features'
  },
  cta: {
    button: {
      tr: 'WHATSAPP İLE TEKLİF AL',
      en: 'REQUEST VIA WHATSAPP'
    },
    eyebrow: {
      tr: 'HEMEN BİZİMLE İLETİŞİME GEÇİN',
      en: 'LET’S TALK TODAY'
    },
    title: {
      tr: 'En iyi transfer hizmetini almak için bizi arayın ya da ofisimizi ziyaret edin',
      en: 'Call us or visit our office to get the best transfer experience'
    }
  },
  categories: [
    {
      slug: 'domestic',
      image: galleryImage1,
      copy: {
        tr: {
          title: 'Yurt İçi Ev ve Ofis Taşımacılığı',
          description:
            'Rezidans, müstakil ev, butik ofis ya da kurumsal merkez taşımalarında tek ekiple planlama, paketleme ve montaj hizmeti sağlıyoruz.'
        },
        en: {
          title: 'Domestic Home & Office Moving',
          description:
            'From residences to corporate headquarters we manage planning, packing and installation with a single accountable crew.'
        }
      },
      services: [
        {
          id: 'home-moving',
          image: galleryImage1,
          copy: {
            tr: {
              title: 'Evden Eve Nakliyat',
              intro:
                'Uzman ekiplerimiz, paketleme mühendisliği, kat izinleri ve sigortalama süreçlerini tek bir operasyon planında birleştirerek tüm eşyalarınızı güvenle taşır.',
              body: [
                'Taşınacak her eşya için detaylı envanter çıkarır, mobilya ve elektronik cihazlar için değerleme raporu hazırlayıp sigorta kapsamıyla eşleştiririz.',
                'Modüler asansör sistemleri, tekstil askılıkları, kırılgan eşya kasaları ve beyaz eşya sabitleme aparatlarıyla adresinize gelir, her paketleme adımını fotoğraf/video ile kayıt altına alırız.',
                'Eşyalar taşınmadan önce durum tespiti yapılır; profesyonel ambalajlama teknikleri ile olası riskler minimuma indirilir.',
                'Taşıma günü boyunca atanmış operasyon koordinatörünüz tüm ilerlemeyi anlık olarak bildirir ve teslimatta kontrol listesi eşliğinde son onayınızı alır.',
                'Talep halinde taşıma sonrası eşya yerleşim desteği ve montaj hizmeti de sağlanır.'
              ],
              features: [
                'Detaylı envanter ve değerleme raporu',
                'Profesyonel risk analizi',
                'Kapsamlı sigorta planlaması',
                'Taşıma öncesi durum tespiti',
                'Modüler asansörlü taşıma',
                'Taşıma sonrası kontrol ve raporlama',
                'Paketleme sürecinin fotoğraf & video kaydı'
              ]
            },
            en: {
              title: 'House-to-House Moving',
              intro:
                'Our expert crews merge packing engineering, floor permits and insurance workflows into a single project plan to move every belonging safely.',
              body: [
                'We prepare a detailed inventory and valuation for each furniture or device, then map those records to the correct insurance coverage.',
                'Crews arrive with modular lifts, garment racks, fragile-item crates and appliance clamps, documenting every packing step with photos and video.',
                'Before anything leaves your home we log its current condition and apply professional packing techniques to minimize risk.',
                'A dedicated coordinator sends live updates throughout move day and closes the project with a checklist-based handover.',
                'If requested we also provide post-move placement support and on-site assembly.'
              ],
              features: [
                'Detailed inventory and valuation report',
                'Professional risk analysis',
                'Comprehensive insurance planning',
                'Pre-move condition documentation',
                'Modular lift-enabled moving',
                'Post-move inspection and reporting',
                'Photo & video documentation of packing'
              ]
            }
          }
        },
        {
          id: 'office-moving',
          image: galleryImage2,
          copy: {
            tr: {
              title: 'Büro ve Ofis Taşımacılığı',
              intro:
                'Kurumsal firmalar için geliştirdiğimiz protokollerle elektronik cihazlar, arşiv dosyaları, sunucular ve mobilyalar özel güvenlik prosedürleriyle taşınır.',
              body: [
                'Her departman için ayrı paketleme planı oluşturur, karışıklığı önlemek için tüm malzemeleri barkodlayıp oda bazlı kategorilere ayırırız.',
                'IT ekipmanları anti-statik paketlere, sunucular darbe emici kasalara, gizli evraklar kilitli konteynerlere alınır.',
                'Taşınma mesai sonrası veya hafta sonu gerçekleştirilerek operasyonların aksamaması sağlanır.',
                'Yeni ofiste mobilya kurulumu, masa düzenleri, kablo yönetimi ve cihazların yeniden devreye alınması tek ekip tarafından tamamlanır.',
                'Her departman için “Yeniden Yerleşim Raporu” hazırlanarak teslim edilir.'
              ],
              features: [
                'Departman bazlı taşıma planı',
                'Barkodlu takip ve kategori sistemi',
                'Anti-statik IT paketleme çözümleri',
                'Kilitli arşiv kutuları ile güvenli evrak yönetimi',
                'Mesai dışı / hafta sonu operasyon imkânı',
                'Yeni ofiste kurulum ve yerleşim desteği',
                'Kablo & network yeniden düzenleme'
              ]
            },
            en: {
              title: 'Office & Workplace Relocation',
              intro:
                'Purpose-built protocols move all electronics, archives, servers and furniture under strict security procedures for corporate clients.',
              body: [
                'We prepare a separate packing plan for every department, barcode all materials and sort them per room to avoid chaos.',
                'IT hardware goes into anti-static sleeves, servers into shock-absorbing crates and confidential documents into sealed archive containers.',
                'Moves are scheduled after-hours or on weekends to eliminate downtime.',
                'Our team handles new-office assembly, desk layouts, cable routing and device commissioning end-to-end.',
                'Each department receives a “Re-Occupation Report” that documents what was delivered and where it sits.'
              ],
              features: [
                'Department-specific move planning',
                'Barcode-based tracking and categorisation',
                'Anti-static IT packing solutions',
                'Secure locked archive carriers',
                'After-hours / weekend execution',
                'On-site reinstallation & layout support',
                'Cable & network reconfiguration'
              ]
            }
          }
        },
        {
          id: 'survey',
          image: galleryImage3,
          copy: {
            tr: {
              title: 'Ekspertiz Hizmetleri',
              intro:
                'Taşımadan önce ücretsiz ekspertiz ekibimiz adresinize gelerek eşyalarınızın türünü, ağırlığını, hacmini ve hassasiyet seviyesini analiz eder.',
              body: [
                'Analiz çıktıları doğru ekipman seçimi, personel planlaması ve en uygun taşıma yönteminin belirlenmesi için temel oluşturur.',
                'Bina giriş çıkışları, merdivenler, asansör kullanımı, sokak genişliği ve kat izinleri incelenir; gerekirse belediye izinleri tarafımızdan organize edilir.',
                'Müşteriye tüm verilerin yer aldığı detaylı “Operasyon Fizibilite Raporu” sunulur.',
                'Rapor; toplam süre, ekip sayısı, araç kapasitesi ve sigorta kapsamını içerir.',
                'Sayesinde taşıma günü sürpriz veya ek ücretle karşılaşma riski ortadan kalkar.'
              ],
              features: [
                'Ücretsiz yerinde ekspertiz',
                'Detaylı fizibilite ve risk analizi',
                'Kat, sokak ve bina uygunluk kontrolü',
                'Asansör gereksinimi analiz raporu',
                'Taşıma planı ve zaman çizelgesi',
                'Sigorta kapsamı belirleme',
                'Maliyet ve süre optimizasyonu'
              ]
            },
            en: {
              title: 'Pre-Move Survey',
              intro:
                'Our free survey crew documents the type, weight, volume and fragility of every item before moving day.',
              body: [
                'Those findings dictate the right equipment mix, staffing plan and safest relocation method.',
                'We inspect entrance/exit points, staircases, elevator options, street width and permitting; municipal permissions are secured when required.',
                'All details are compiled into a comprehensive Operations Feasibility Report for the client.',
                'The document outlines total duration, crew size, vehicle capacity and insurance coverage.',
                'This proactive planning eliminates surprise charges or last-minute delays.'
              ],
              features: [
                'Complimentary on-site survey',
                'Detailed feasibility and risk analysis',
                'Floor, street and building compliance check',
                'Lift requirement assessment report',
                'Move plan and timeline definition',
                'Insurance scope determination',
                'Cost and duration optimisation'
              ]
            }
          }
        },
        {
          id: 'safe-transport',
          image: galleryImage2,
          copy: {
            tr: {
              title: 'Kasa Taşımacılığı',
              intro:
                'Çelik para kasalarının taşınması ağırlık hesaplaması, bina dayanıklılığı ve güvenlik protokollerinin özel olarak değerlendirilmesini gerektirir.',
              body: [
                'Kasa modelinin ağırlığı, altyapı koşulları, kat mesafeleri ve ekipman ihtiyacı önceden analiz edilir; 200–2000 kg aralığındaki kasalar için hidrolik taşıyıcılar, kızak sistemleri ve merdiven paletleri kullanılır.',
                'Taşıma günü kasa devrilme riskini ortadan kaldıracak şekilde sabitlenir, çelik bariyerlerle çevrilir ve hidrolik krikolarla güvenli biçimde kaldırılır.',
                'Geçiş noktaları uzmanlar tarafından yönlendirilir; zemin, kapı ve duvarların zarar görmemesi için koruyucu katmanlar uygulanır.',
                'Araç içine yüklemede çelik sabitleme zincirleri ve vibrasyon azaltıcı sistemler kullanılır; teslimatta kasa belirlenen noktaya yerleştirilip güvenlik kilidi kontrol edilir.',
                'Tüm süreç sonunda profesyonel raporlama ve teslim tutanağı müşteriye iletilir.'
              ],
              features: [
                'Çelik kasa ağırlık ve fizibilite analizi',
                'Hidrolik taşıma ekipmanı & özel kızak sistemleri',
                'Devrilme önleyici sabitleme teknikleri',
                'Zemin ve bina korumalı taşıma prosedürü',
                'Araç içi çelik sabitleme zincirleri',
                'Hassas yerleştirme ve kilit kontrolü',
                'Profesyonel raporlama ve teslim tutanağı'
              ]
            },
            en: {
              title: 'Safe Relocation',
              intro:
                'Transporting steel safes demands dedicated analysis of weight, building endurance and security protocols.',
              body: [
                'We evaluate the safe model, structural conditions, floor distances and equipment needs in advance; hydraulic dollies, sled systems and stair climbers move safes weighing 200–2000 kg.',
                'On moving day the safe is stabilised to eliminate tipping risk, surrounded with steel barriers and lifted via shock-absorbing hydraulic jacks.',
                'All transition points are supervised to shield floors, doors and walls with protective layers.',
                'Inside the truck we use steel chains and vibration-damping systems, then place the safe on the designated spot and verify the lock before handover.',
                'Every project concludes with professional reporting and a signed delivery protocol.'
              ],
              features: [
                'Safe weight & feasibility analysis',
                'Hydraulic handling gear and custom sled systems',
                'Anti-tip stabilisation methods',
                'Floor and building protection procedures',
                'In-truck steel chaining system',
                'Precision placement with lock verification',
                'Documented reporting & delivery receipt'
              ]
            }
          }
        },
        {
          id: 'precious-goods',
          image: galleryImage3,
          copy: {
            tr: {
              title: 'Kıymetli ve Değerli Eşya Taşımacılığı',
              intro:
                'Mücevher, tablo, sanat eseri, antika ve koleksiyon ürünlerinin taşınması yüksek güvenlik, özel paketleme ve profesyonel sigorta süreçleri gerektirir.',
              body: [
                'Her parça için materyal, hassasiyet, nem dayanımı ve kırılganlık analizi yapılır; özel ölçülü ahşap sandıklar, darbe emici iç kaplamalar ve mikro fiber sarma teknikleri kullanılır.',
                'Sanat eserleri temas etmeyen çerçeve korumalarıyla sabitlenir; mücevher ve küçük objeler mühürlü kasalar ve RFID takip cihazlarıyla araç içi kilitli bölmelere yerleştirilir.',
                'Araç içi sıcaklık, nem ve vibrasyon sensörlerle izlenir; rota boyunca güvenlik birimleriyle koordinasyon kurulur.',
                'Zincirleme teslim protokolü uygulanır; teslimatta paketler müşterinin önünde kontrol listesiyle değerlendirilir ve “Hasarsız Teslim Sertifikası” oluşturulur.'
              ],
              features: [
                'Eser bazlı hassasiyet ve risk analizi',
                'Özel ahşap sandık + darbe emici kaplama',
                'Nem, ısı ve vibrasyon kontrollü taşıma',
                'Mücevher için mühürlü kasa & RFID takip',
                'Sanat eserleri için temas etmeyen çerçeve',
                'Zincirleme teslim (Chain of Custody) protokolü',
                'Hasarsız teslimat belgesi'
              ]
            },
            en: {
              title: 'Precious & High-Value Goods Moving',
              intro:
                'Jewellery, artwork, antiques and bespoke collectibles require high-security handling, specialised packing and professional insurance workflows.',
              body: [
                'We analyse each item’s material, sensitivity, humidity tolerance and fragility, then build custom wood crates with shock-absorbing liners and microfiber wrapping.',
                'Art pieces are secured with non-contact frames, while jewellery or small valuables travel in sealed cases with RFID trackers inside locked vehicle compartments.',
                'Vehicle temperature, humidity and vibration are sensor-monitored, and we coordinate with security units along the route.',
                'A full chain-of-custody protocol is enforced; at delivery we inspect items with the client and issue a “Damage-Free Delivery Certificate”.'
              ],
              features: [
                'Item-specific sensitivity & risk analysis',
                'Custom wooden crates with shock lining',
                'Temperature, humidity & vibration control',
                'Sealed jewellery vaults with RFID tracking',
                'Non-contact frame protection for art',
                'Chain-of-custody handling protocol',
                'Damage-free delivery certificate'
              ]
            }
          }
        },
        {
          id: 'loading-support',
          image: galleryImage4,
          copy: {
            tr: {
              title: 'Yükleme, Boşaltma ve Destek Hizmetleri',
              intro:
                'Profesyonel yükleme–boşaltma ekibimiz eşyalarınızı ağırlık merkezi analizleri ve hassasiyet sınıflandırmalarıyla tek operasyon planı altında yönetir.',
              body: [
                'Ağır mobilyalar, beyaz eşyalar, çelik kasalar, elektronik cihazlar ve kırılgan ürünler için ayrı teknikler uygulanır; kaldırma öncesi ağırlık merkezi hesaplanır ve doğru kaldıraç yöntemi seçilir.',
                'Boşaltma sürecinde eşyalar önceden hazırlanmış yerleşim planına göre indirilir, mobilyalar numaralandırılarak montaj alanlarına yönlendirilir.',
                'Kat izinleri, bina koruma önlemleri, asansör kullanımı ve zemin kaplamaları taşımadan önce kontrol edilir; geçiş noktalarına koruma bariyerleri yerleştirilir.',
                'Destek ekipleri ağır eşyaların konumlandırılması, mobilya yerleşimi, beyaz eşyaların bağlanması ve gerekli teknik işlemleri gerçekleştirir.',
                'Araç içi yük dengelemesi yapılarak yol boyunca devrilme veya hasar riski ortadan kaldırılır; teslimatta müşteri ile birlikte kontrol tutanağı hazırlanır.'
              ],
              features: [
                'Profesyonel yükleme–boşaltma ekibi',
                'Ağırlık merkezi analizi ve doğru kaldırma teknikleri',
                'Zemin, kapı ve bina koruma uygulamaları',
                'Araç içi yük sabitleme ve ağırlık dengeleme',
                'Kat planına göre yerleşim desteği',
                'Montaj-demontaj ve teknik destek',
                'Taşıma sonrası kontrol tutanağı'
              ]
            },
            en: {
              title: 'Loading, Unloading & Support Services',
              intro:
                'Our professional crews manage the entire loading/unloading process under one plan by analysing weight distribution and sensitivity classes.',
              body: [
                'Heavy furniture, appliances, safes, electronics and fragile items get dedicated handling techniques; the center of gravity is calculated before lifting and the proper leverage method is chosen.',
                'At destination we unload according to the pre-defined layout plan and route numbered furniture pieces to their assembly zones.',
                'Floor protection, elevator usage, permits and doorways are inspected in advance, with barrier padding applied to every passage.',
                'Support teams handle heavy-item positioning, furniture placement, appliance hookups and any required technical tasks.',
                'Loads are balanced inside the truck to prevent tipping and a post-move checklist is completed with the client.'
              ],
              features: [
                'Experienced loading/unloading crews',
                'Center-of-gravity analysis & correct lifting methods',
                'Floor, doorway and building protection',
                'In-truck load securing and weight balancing',
                'Layout-driven placement assistance',
                'Assembly/disassembly & technical support',
                'Post-move inspection report'
              ]
            }
          }
        },
        {
          id: 'packing',
          image: galleryImage4,
          copy: {
            tr: {
              title: 'Ambalaj ve Depolama',
              intro: 'Kısa ve orta vadeli depolama ihtiyaçlarında kapalı alanlarımızla eşyalarınızı koruruz.',
              body: [
                'Mobilyalar gözeneksiz battaniye ve streçle kaplanır, tekstiller askılı dolaplarda taşınır.',
                'Depolama gereken parçalar barkodlanır ve güvenlik kameraları ile 7/24 izlenir.',
                'Depo giriş-çıkışlarını online panelden takip edebilir, talebiniz doğrultusunda belirli parçaları adresinize tekrar gönderebiliriz.'
              ],
              features: [
                'İklim kontrollü kapalı depolar',
                'Barkodlu giriş/çıkış raporu',
                'Nem ve küf bariyerli ambalaj',
                'İsteğe bağlı fotoğraflı kontrol'
              ]
            },
            en: {
              title: 'Packing & Storage',
              intro: 'We protect belongings in climate-friendly warehouses for short or mid-term needs.',
              body: [
                'Furniture is wrapped in breathable blankets and stretch film, textiles travel in wardrobe boxes.',
                'Items that need storage are barcoded and monitored 24/7 with CCTV.',
                'You can track every inbound/outbound move via the client portal and request partial deliveries anytime.'
              ],
              features: [
                'Climate-controlled indoor warehouses',
                'Barcoded inbound/outbound reports',
                'Moisture and dust barrier packing',
                'Optional photo inspections'
              ]
            }
          }
        }
      ]
    },
    {
      slug: 'logistics',
      image: galleryImage5,
      copy: {
        tr: {
          title: 'Lojistik Destek Hizmetleri',
          description:
            'Depolama, sevkiyat, rota planlama ve operasyon destek hizmetlerini tek merkezden koordine ediyoruz.'
        },
        en: {
          title: 'Logistics Support Services',
          description:
            'Centralised storage, dispatch, routing and operations support for your business.'
        }
      },
      services: [
        {
          id: 'logistics-support-core',
          image: galleryImage5,
          copy: {
            tr: {
              title: 'Lojistik Destek Hizmetleri',
              intro:
                'Depolama, sevkiyat koordinasyonu, rota planlama, yük optimizasyonu ve operasyon destek hizmetlerini tek merkezden yönetiyoruz.',
              body: [
                'Mal kabulden yükleme–boşaltmaya kadar tüm adımlar barkodlu sistemler üzerinden kontrol edilir; ürünler kategori bazlı ayrıştırılarak uygun koşullarda saklanır.',
                'Rota optimizasyonu, araç kapasitesi, yük dengelemesi ve zamanlama planlaması yapılır; trafik yoğunluğu ve bekleme noktaları anlık takip edilir.',
                'GPS destekli filo yönetimiyle tüm araçların konumu izlenir; teslimat sonrası raporlama, iade ve hasar yönetimi operasyon destek ekibi tarafından koordine edilir.',
                'Bu yapı sayesinde tüm lojistik döngünüz uçtan uca dijital olarak kontrol edilir; hız, maliyet ve verimlilik artar.'
              ],
              features: [
                'Depolama, stok ve barkodlu ürün yönetimi',
                'Rota optimizasyonu ve araç kapasite planlaması',
                'GPS destekli filo yönetimi',
                'Sevkiyat takip ve teslimat doğrulama',
                'İade–hasar yönetimi ve raporlama',
                'Yükleme–boşaltma koordinasyonu',
                'Zaman yönetimine dayalı operasyon planı'
              ]
            },
            en: {
              title: 'Core Logistics Support',
              intro:
                'We centralise storage, dispatch coordination, route planning, load optimisation and operational support.',
              body: [
                'From inbound receiving to loading and unloading, every step is controlled via barcode systems and category-based storage conditions.',
                'Route optimisation, truck capacity, load balancing and timing plans are prepared while traffic and dwell times are monitored live.',
                'GPS-enabled fleet management tracks every vehicle and the support team coordinates post-delivery reporting, returns and damage analysis.',
                'As a result your entire logistics cycle is digitally controlled end-to-end for maximum speed, cost efficiency and performance.'
              ],
              features: [
                'Storage, stock and barcode-driven item management',
                'Route optimisation and capacity planning',
                'GPS-based fleet visibility',
                'Shipment tracking and proof of delivery',
                'Returns and damage handling with reporting',
                'Loading/unloading coordination',
                'Time-driven operations planning'
              ]
            }
          }
        },
        {
          id: 'packing-service',
          image: galleryImage5,
          copy: {
            tr: {
              title: 'Ambalajlama ve Paketleme Hizmetleri',
              intro:
                'Eşyalarınızın güvenliği, doğru paketleme malzemeleri ve profesyonel tekniklerle başlar.',
              body: [
                'Cam, porselen, elektronik, mobilya, tekstil ve beyaz eşya gibi her kategori; anti-statik ambalajlar, darbe emici köpükler, hava kanallı balonlu naylonlar, köşe koruyucular ve çok katmanlı streç filmlerle sınıflandırılır.',
                'Paketleme süreci düzen ve hızlı yerleşimi destekleyecek şekilde optimize edilir; tüm kutular numaralandırılır, içerik bilgisi yazılır ve renk kodlu etiket sistemi uygulanır.',
                'Tekstil ürünleri askılı dolap kutularına, kitap ve arşivler sıkıştırmalı kutulara, TV ve beyaz eşyalar köpük destekli ambalajlara sabitlenir; demontaj gerektiren mobilyalar kaplama malzemeleriyle tamamen sarılır.',
                'Tüm süreç fotoğraf/video ile belgelenerek müşteriye dijital rapor olarak sunulur; araç içine yüklemede hassas kutular özel bölmelere, ağır kutular alt katmana yerleştirilir.',
                'Varış adresinde kutular doğrudan ilgili odalara taşınarak yerleşim hızlandırılır.'
              ],
              features: [
                'Eşya türüne göre profesyonel ambalaj sınıflandırması',
                'Darbe emici ve anti-statik özel malzemeler',
                'Numara – kategori – renk kodlu etiket sistemi',
                'Demontaj, koruma ve özel kaplama teknikleri',
                'Askılı tekstil dolapları ve sıkıştırmalı arşiv kutuları',
                'Elektronikler için köpük destekli güvenlik ambalajı',
                'Fotoğraflı paketleme raporu ve durum tespiti'
              ]
            },
            en: {
              title: 'Professional Packing & Wrapping',
              intro: 'Safety starts with the right materials and methods for every item type.',
              body: [
                'Glass, porcelain, electronics, furniture, textiles and appliances are classified with anti-static wraps, shock-absorbing foams, ventilated bubble films, corner protectors and multi-layer stretch.',
                'Packing is optimised for organisation: every box is numbered, labelled and colour-coded, textiles travel in wardrobe boxes, archives in compression cartons, and TVs or appliances in foam-backed shells.',
                'Modular furniture is dismantled and fully wrapped; the entire process is documented with photos/videos and shared digitally.',
                'During loading fragile boxes go to dedicated compartments, heavy boxes form the base layer, and boxes are delivered directly to the target rooms to speed up unpacking.'
              ],
              features: [
                'Professional packing classes per item type',
                'Shock-absorbing & anti-static specialty materials',
                'Number / category / colour-coded labelling',
                'Dismantling, protection and custom wrapping',
                'Wardrobe boxes and compression archive crates',
                'Foam-backed protection for electronics & appliances',
                'Photo-documented packing report and condition log'
              ]
            }
          }
        },
        {
          id: 'lift-service',
          image: galleryImage6,
          copy: {
            tr: {
              title: 'Asansör Hizmetleri',
              intro:
                'Modüler dış cephe asansörümüzle yüksek katlı binalarda hızlı, güvenli ve hasarsız taşıma sağlarız.',
              body: [
                'Dar merdivenler veya yetersiz bina asansörü kullanılmadan eşyalar balkon veya geniş pencereden taşınır; çizik, darbe ve sıkışma riski ortadan kalkar.',
                'Kurulum öncesi bina cephesi, zemin eğimi, erişilebilirlik ve güvenlik koşulları analiz edilir; asansör konumu, çıkış yönü ve rüzgâr etkisi keşif ekibi tarafından raporlanır.',
                'Taşıma günü profesyonel ekip asansörü kurup test eder, güvenlik kilitlerini kontrol eder ve özel taşıma kasalarıyla eşyaları sabitler.',
                'Balkon veya pencerede görevli ekipler eşyaların içeri alınmasını sağlar; operasyon hızlı ilerlerken bina ile temas minimuma indirilir.'
              ],
              features: [
                'Modüler dış cephe asansör kurulum & yönetimi',
                'Yüksek katlarda hızlı ve hasarsız taşıma',
                'Bina içi merdiven/asansör kullanımına gerek kalmaması',
                'Yükseklik ve zemin güvenlik analizi',
                'Özel taşıma kasaları ve sabitleme aparatları',
                'Profesyonel operatör ve güvenlik ekibi',
                'Hızlı indirme–yükleme ile zaman tasarrufu'
              ]
            },
            en: {
              title: 'External Lift Services',
              intro: 'Our modular facade lift makes high-rise moves fast, safe and damage-free.',
              body: [
                'Without using narrow stairwells or undersized building elevators, items travel directly through balconies or wide windows, eliminating scratches or impacts.',
                'Prior to move day we analyse the facade, ground slope, access and safety clearances to determine lift placement, exit direction and wind tolerance.',
                'On the day of the move, certified operators install, test and lock the lift, loading items with dedicated crates and restraint systems.',
                'Teams stationed at the balcony or window receive each load and guide it indoors, keeping the building contact minimal while saving time.'
              ],
              features: [
                'Modular exterior lift setup and supervision',
                'Rapid, damage-free handling on high floors',
                'No use of internal stairs or elevators',
                'Height and ground safety assessments',
                'Special carry crates and restraint gear',
                'Professional lift operators and safety crew',
                'Time-saving loading/unloading cycles'
              ]
            }
          }
        },
        {
          id: 'project-transport',
          image: galleryImage7,
          copy: {
            tr: {
              title: 'Proje Taşımacılığı',
              intro:
                'Ağır yük, fabrika ekipmanı, makine, inşaat malzemesi ve özel boyutlu yükler için mühendislik analizine dayalı proje taşımacılığı sunuyoruz.',
              body: [
                'Her proje için saha keşfi yaparak yükün ağırlık merkezi, bağlama noktaları, kaldırma kapasitesi ve güzergâh eğimini inceleriz; köprü ve tünel geçiş uygunluklarını teknik ekibimiz değerlendirir.',
                'Lowbed araçlar, özel platform dorseler, vinçler ve hidrolik kaldırma sistemleriyle yükler güvenli şekilde taşınır.',
                'Yanal kayma ve titreşim riskini azaltmak için özel bağlama sistemleri kullanılır; gerektiğinde polis eskortu, yol izinleri ve güzergâh güvenliği sağlanır.',
                'Yükleme–taşıma–indirme adımlarının tamamı teknik raporlarla desteklenir, operasyon koordinatörü ve mühendisler süreci uçtan uca yönetir.'
              ],
              features: [
                'Yük mühendisliği ve detaylı saha keşfi',
                'Lowbed ve platform dorse çözümleri',
                'Vinç ve hidrolik kaldırma sistemleri',
                'Yol izinleri, eskort ve güzergâh planlaması',
                'Ağır yük sabitleme ve güvenlik önlemleri',
                'Teknik raporlama ve operasyon koordinasyonu',
                'Anlık GPS takip ve teslim doğrulama'
              ]
            },
            en: {
              title: 'Project Transport',
              intro:
                'We handle heavy loads, factory equipment, machinery, construction materials and oversized cargo through engineering-led project transport.',
              body: [
                'For every project we survey the site, analysing centre of gravity, lashing points, lift capacity, route gradients and bridge/tunnel clearances.',
                'Lowbed trailers, special platforms, cranes and hydraulic lifting systems move cargo safely door to door.',
                'Custom lashing systems minimise lateral shift and vibration; police escorts, route permits and corridor security are arranged when required.',
                'All stages—from loading to transit and unloading—are backed by technical reports and managed by engineers and an operations coordinator.'
              ],
              features: [
                'Load engineering and detailed site surveys',
                'Lowbed and platform trailer solutions',
                'Cranes and hydraulic lifting systems',
                'Route permits, escorts and corridor planning',
                'Heavy-load securing and safety setup',
                'Technical reporting and operations coordination',
                'Live GPS tracking and delivery confirmation'
              ]
            }
          }
        },
        {
          id: 'distribution-support',
          image: galleryImage8,
          copy: {
            tr: {
              title: 'Taşıma, Dağıtım ve Destek Hizmetleri',
              intro:
                'Günlük veya bölgesel dağıtım operasyonlarında ürün ayrıştırma, araç kapasite planlaması ve rota optimizasyonu yapıyoruz.',
              body: [
                'Ürünler barkodlanarak teslimat adreslerine göre gruplanır; günlük, haftalık veya bölgesel dağıtım planları işletmenizin hacmine göre hazırlanır.',
                'Profesyonel sürücü ve operasyon ekibi müşteri adreslerine zamanında ulaşımı garanti eder; kırılgan ve hassas ürünler için özel bölmeli veya ısı kontrollü araçlar kullanılır.',
                'Teslimatlar dijital cihazlar üzerinden kayıt altına alınır; operasyon merkezi tüm rotaları eş zamanlı izler ve gecikme riskine karşı alternatif planlar devreye alır.',
                'Müşteri bilgilendirmeleri, iade yönetimi ve raporlama süreçleri tek merkezden koordine edilir.'
              ],
              features: [
                'Bölgesel ve günlük dağıtım planlaması',
                'Barkodlu ayrıştırma ve yükleme yönetimi',
                'Rota optimizasyonu ve zaman yönetimi',
                'Isı kontrollü veya özel tasarım taşıma araçları',
                'Dijital teslimat doğrulama sistemi',
                'İade ve müşteri bilgilendirme süreçleri',
                'Operasyon merkezi üzerinden anlık takip'
              ]
            },
            en: {
              title: 'Transport, Distribution & Support',
              intro:
                'We design and operate daily or regional distribution with product sorting, capacity planning and route optimisation.',
              body: [
                'All items are barcoded and grouped per delivery address, then organised into daily, weekly or regional delivery plans aligned with your volume.',
                'Professional drivers and coordinators ensure on-time arrivals, using temperature-controlled or compartmentalised vehicles for fragile or perishable goods.',
                'Deliveries are captured on digital devices while the operations centre monitors all routes in real time and triggers contingency plans when delays appear.',
                'Customer notifications, returns handling and reporting are coordinated from a single hub.'
              ],
              features: [
                'Regional and daily distribution planning',
                'Barcode-based sorting and loading control',
                'Route optimisation and timing management',
                'Temperature-controlled or custom vehicle setups',
                'Digital proof-of-delivery system',
                'Return handling and customer updates',
                'Real-time monitoring from the operations centre'
              ]
            }
          }
        },
        {
          id: 'assembly-services',
          image: galleryImage8,
          copy: {
            tr: {
              title: 'Montaj ve Demontaj Hizmetleri',
              intro:
                'Mobilya, beyaz eşya, ofis ekipmanları ve modüler sistemler için profesyonel söküm–kurulum ekipleriyle çalışıyoruz.',
              body: [
                'Taşınma öncesi tüm parçalar sökülüp numaralandırılır; vidalar ve bağlantı aparatları ayrı poşetlerde saklanır, mevcut durum fotoğraflanarak kayıt altına alınır.',
                'Yeni adreste mobilyalar çiziksiz ve hasarsız şekilde açılır; üretici standartlarına uygun olarak terazisinde kurulur, dolap ve kapak ayarları yapılır.',
                'Beyaz eşyalar elektrik ve su tesisatına uygun biçimde bağlanır; ofislerde masa düzenleri departman planına göre yerleştirilir.',
                'Duvar, zemin ve kaplama yüzeylerinin korunması için özel izolasyon malzemeleri kullanılır; süreç sonunda “Kurulum Kontrol Listesi” müşteriye teslim edilir.'
              ],
              features: [
                'Profesyonel söküm ve numaralandırma sistemi',
                'Üretici standartlarına uygun montaj',
                'Mobilya ve ofis modüllerinde terazileme ve ayar',
                'Beyaz eşya su–elektrik bağlantı desteği',
                'Yüzey güvenliği için özel koruma malzemeleri',
                'Fotoğraflı demontaj–montaj raporu',
                'Kurulum kontrol listesi ile teslimat'
              ]
            },
            en: {
              title: 'Assembly & Disassembly Services',
              intro:
                'We provide professional crews for dismantling and reassembling furniture, appliances, office equipment and modular systems.',
              body: [
                'Before moving, all components are dismantled and numbered; screws and fittings are stored in labelled bags and the original setup is documented with photos.',
                'At the new site we unpack items damage-free and reassemble them according to manufacturer specifications, levelling furniture and adjusting doors or cabinets.',
                'Appliances are connected to power and water safely, and office layouts are rebuilt according to department plans.',
                'Walls, floors and finishes are protected with dedicated isolation materials and the client receives a “Setup Checklist” at handover.'
              ],
              features: [
                'Professional disassembly with numbered components',
                'Assembly in line with manufacturer standards',
                'Levelling and adjustment for furniture & office modules',
                'Water/electric hook-up support for appliances',
                'Surface protection with dedicated materials',
                'Photo-documented disassembly/assembly report',
                'Delivery with setup checklist'
              ]
            }
          }
        },
        {
          id: 'maintenance-services',
          image: galleryImage2,
          copy: {
            tr: {
              title: 'Bakım ve Onarım Hizmetleri',
              intro:
                'Taşınma veya kurulum sonrası bütün ekipmanların uzun ömürlü ve güvenli çalışması için profesyonel bakım–onarım desteği sağlıyoruz.',
              body: [
                'Mobilya mekanizmaları, menteşeler, ray sistemleri, masa bağlantıları, dolap kapak ayarları, beyaz eşya bağlantıları ve elektrik–su tesisatına bağlı parçalar tek tek kontrol edilir.',
                'Gevşeme, dengesizlik, çizilme, kapak ayarsızlığı veya bağlantı hataları giderilir; mobilyalar terazisinde ayarlanır, raf sistemleri güçlendirilir, beyaz eşya ve elektronik cihazlardaki titreşim/gürültü sorunları çözülür.',
                'Süreç, müşteriye teslim edilen “Genel Sistem Kontrol Raporu” ile tamamlanır; rapor yapılan ayarları, onarılan parçaları ve geleceğe yönelik bakım önerilerini içerir.',
                'Periyodik bakım talep eden müşteriler için planlama yapılır ve sonraki ziyaretler hatırlatılarak sistemler stabil tutulur.'
              ],
              features: [
                'Mobilya ayar, kalibrasyon ve dengeleme',
                'Dolap, masa, ray ve mekanik aksam onarımı',
                'Beyaz eşya, TV ve cihaz bağlantı kontrolü',
                'Küçük parça değişimi ve bağlantı güçlendirme',
                'Elektrik – su bağlantı güvenliği denetimi',
                'Genel Sistem Kontrol Raporu teslimi',
                'Periyodik bakım planlama imkânı'
              ]
            },
            en: {
              title: 'Maintenance & Repair Services',
              intro:
                'After the move or installation we keep every component running safely with professional maintenance and repair routines.',
              body: [
                'Furniture mechanisms, hinges, runners, desktop joints, cabinet doors, appliance hookups and plumbing/electrical interfaces are inspected individually.',
                'Issues like loosening, imbalance, scratches, misaligned doors or faulty connections are corrected; furniture is levelled, drawers reinforced and appliances retuned for vibration or noise.',
                'We finish with a “General System Control Report” outlining adjustments, replaced parts and future upkeep suggestions, plus optional periodic maintenance plans.'
              ],
              features: [
                'Furniture calibration, levelling and balancing',
                'Cabinet, table, runner and mechanical repairs',
                'Verification of appliance, TV and device connections',
                'Minor parts replacement and fastener reinforcement',
                'Electrical and plumbing safety checks',
                'Delivery of a General System Control Report',
                'Scheduled periodic maintenance options'
              ]
            }
          }
        },
        {
          id: 'technical-support',
          image: galleryImage3,
          copy: {
            tr: {
              title: 'Teknik Destek Hizmetleri',
              intro:
                'Taşıma, kurulum veya yerleşim sürecinde ortaya çıkabilecek tüm teknik ihtiyaçlar için hızlı müdahale sağlıyoruz.',
              body: [
                'Elektrik bağlantıları, priz uyumluluğu, kablo yönetimi, aydınlatma sistemleri, modem–router kurulumları ve TV/monitör montajları teknik kurallara uygun yapılır.',
                'Beyaz eşya ve elektronik cihazların üretici standartlarına göre çalışıp çalışmadığı test edilir; çamaşır makinesi denge ayarı, bulaşık makinesi su giriş/çıkış kontrolü, buzdolabı konumlandırması, TV ve modem testleri gerçekleştirilir.',
                'Kablo karmaşası, zayıf bağlantı veya kurulum hatası tespit edilirse anında düzeltilir; müşterilere kullanım eğitimi verilir, garanti ve servis önerileri paylaşılır.',
                'Gerekirse üretici servisiyle koordinasyon kurulur ve tüm teknik işlemler rapor halinde müşteriye iletilir.'
              ],
              features: [
                'Elektrik, kablo ve priz düzenlemeleri',
                'TV, modem, router ve ağ cihazı kurulumu',
                'Beyaz eşya test ve bağlantı ayarları',
                'Ofis donanımı yerleşimi ve network düzeni',
                'Hızlı teknik müdahale ve yerinde çözüm',
                'Kullanım eğitimi ve teknik danışmanlık',
                'Kurulum sonrası teknik raporlama'
              ]
            },
            en: {
              title: 'Technical Support Services',
              intro:
                'Our specialists handle any technical requirement that surfaces during moving, installation or settling in.',
              body: [
                'We manage electrical hookups, outlet compatibility, cable management, lighting, modem/router setup and TV or monitor installations to code.',
                'Appliances and electronics are tested against manufacturer standards—washing machine balance, dishwasher water lines, refrigerator placement, TV signal and modem connectivity are all verified.',
                'Cable clutter, weak connections or installation errors are fixed instantly; clients receive usage training, warranty guidance and vendor coordination when needed.',
                'All technical steps are summarised in a post-installation report.'
              ],
              features: [
                'Electrical, cabling and outlet adjustments',
                'Technical setup for TVs, modems, routers and network gear',
                'Appliance testing and connection tuning',
                'Office hardware placement and network tidy-up',
                'Rapid on-site troubleshooting',
                'User training and technical consultation',
                'Post-installation technical reporting'
              ]
            }
          }
        }
      ]
    }
  ]
};

