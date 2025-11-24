const sharedFeatureCopy = {
  tr: [
    'Detaylı envanter ve değerleme raporu',
    'Profesyonel risk analizi',
    'Kapsamlı sigorta planlaması',
    'Taşıma öncesi durum tespiti',
    'Taşıma sonrası kontrol raporlaması'
  ],
  en: [
    'Detailed inventory and valuation report',
    'Professional risk analysis',
    'Comprehensive insurance planning',
    'Pre-move condition documentation',
    'Post-move inspection summaries'
  ]
};

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
      id: 'pdf',
      href: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      label: {
        tr: 'Kurumsal Broşür (PDF)',
        en: 'Corporate Brochure (PDF)'
      }
    },
    {
      id: 'ppt',
      href: 'https://filesamples.com/samples/document/pptx/sample1.pptx',
      label: {
        tr: 'Sunum (PPTX)',
        en: 'Pitch Deck (PPTX)'
      }
    },
    {
      id: 'doc',
      href: 'https://filesamples.com/samples/document/docx/sample3.docx',
      label: {
        tr: 'Teklif Şablonu (DOCX)',
        en: 'Proposal Template (DOCX)'
      }
    }
  ],
  contact: [
    {
      id: 'address',
      icon: '📍',
      value: 'Karl-Marx-Allee 90, 10243 Berlin',
      label: {
        tr: 'Adres',
        en: 'Address'
      }
    },
    {
      id: 'phone',
      icon: '☎',
      value: '+49 30 000 00 00',
      href: 'tel:+49300000000',
      label: {
        tr: 'Telefon',
        en: 'Phone'
      }
    },
    {
      id: 'mail',
      icon: '✉',
      value: 'info@luksberlinnakliyat.com',
      href: 'mailto:info@luksberlinnakliyat.com',
      label: {
        tr: 'E-posta',
        en: 'Email'
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
      image: 'images/gallery/1.jpg',
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
          image: 'images/gallery/1.jpg',
          copy: {
            tr: {
              title: 'Evden Eve Nakliyat',
              intro:
                'Paketleme uzmanları, kat izinleri ve sigorta evraklarıyla birlikte tüm eşyalarınız tek plan dahilinde taşınır.',
              body: [
                'Eşyalarınızın değerini biliyoruz. Taşınacak tüm mobilya ve cihazların detaylı envanterini çıkarıyor, değerleme yapıyor ve sigorta kapsamını belirliyoruz.',
                'Uzman ekibimiz modüler asansör, tekstil askılığı, kırılgan kasa ve beyaz eşya aparatlarıyla adresinize gelir; her aşama fotoğraflı olarak raporlanır.',
                'Taşıma günü boyunca atanmış operasyon koordinatörü ilerlemeyi sürekli bildirir ve teslimatta kontrol listesi ile son onayınızı alır.'
              ],
              features: sharedFeatureCopy.tr
            },
            en: {
              title: 'House-to-House Moving',
              intro:
                'Packing specialists, building permits and insurance paperwork are handled under a single project plan.',
              body: [
                'We understand how valuable every item is. A detailed inventory and valuation is prepared for all furniture and appliances so the right insurance coverage is in place.',
                'The crew arrives with modular lifts, garment rails, fragile crates and appliance kits, documenting every step with photos.',
                'A dedicated coordinator keeps you updated throughout the day and completes delivery with a final checklist for your approval.'
              ],
              features: sharedFeatureCopy.en
            }
          }
        },
        {
          id: 'office-moving',
          image: 'images/gallery/2.jpg',
          copy: {
            tr: {
              title: 'Büro ve Ofis Taşımacılığı',
              intro:
                'Sunucu kabinetlerinden cam bölmelere kadar numaralandırma, paketleme ve yeni lokasyonda kurulum sağlanır.',
              body: [
                'BT ekipmanları için anti-statik ambalaj, arşiv için kilitli kutular, mobilyalar için kodlu etiketleme kullanıyoruz.',
                'Yeni lokasyonda kurulum planları önceden çıkarılır; kablolama ve masa yerleşimi aynı gün içinde teslim edilir.',
                'İnsan kaynaklarıyla koordineli vardiya planları ve kat bazlı geçiş listeleri sayesinde çalışanlar ertesi gün masalarına sorunsuz geçer.'
              ],
              features: [
                'LAN, server ve UPS söküm/kurulum desteği',
                'Çift vardiyalı ekip planlaması',
                'Kat izinleri ve erişim planı yönetimi',
                'Merkezi iletişim noktası ve canlı takip'
              ]
            },
            en: {
              title: 'Office & Workplace Relocation',
              intro:
                'From server racks to glass partitions we label, pack and reinstall everything at the new site.',
              body: [
                'Anti-static protection for IT gear, locked crates for archives and color-coded labels for furniture keep the move organised.',
                'Floor plans, cabling and workstation layouts are prepared in advance so teams can plug in the same day.',
                'Coordinated shift plans and floor-by-floor move lists let your staff return to workstations without disruption.'
              ],
              features: [
                'LAN, server and UPS de-install/re-install support',
                'Dual-shift crew planning',
                'Permit and access management',
                'Single communication desk with live tracking'
              ]
            }
          }
        },
        {
          id: 'survey',
          image: 'images/gallery/3.jpg',
          copy: {
            tr: {
              title: 'Ekspertiz Hizmetleri',
              intro:
                'Taşıma öncesi keşif ile kat, park, eşya listesi ve riskler aynı gün içinde raporlanır.',
              body: [
                'Ekspertiz uzmanı adresinize gelerek tüm alanı gezer, kat planı ve paketleme ihtiyaçlarını not alır.',
                'Çıkan rapor fiyatlandırma, süre ve ekip büyüklüğünü içerir; dilerseniz dijital sözleşme ile süreç başlatılır.',
                'İş programı, risk senaryoları ve sigorta şartları aynı paket içinde sunulur; böylece karar almadan önce tüm detayları net biçimde görürsünüz.'
              ],
              features: sharedFeatureCopy.tr
            },
            en: {
              title: 'Pre-Move Survey',
              intro:
                'We document floors, parking, inventory and risks on site and deliver the report the very same day.',
              body: [
                'A survey specialist walks through every room, noting lift sizes, packing needs and access restrictions.',
                'The report outlines pricing, timelines and crew sizes so you can approve the project with clarity.',
                'Work schedules, risk scenarios and insurance requirements are packaged together for full transparency.'
              ],
              features: sharedFeatureCopy.en
            }
          }
        },
        {
          id: 'packing',
          image: 'images/gallery/4.jpg',
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
      slug: 'storage',
      image: 'images/gallery/2.jpg',
      copy: {
        tr: {
          title: 'Yurt İçi Depolama Hizmetleri',
          description:
            'Stok yönetimi, sipariş hazırlama ve özel depolama çözümlerinde barkodlu takip ve raporlama sağlar.'
        },
        en: {
          title: 'Domestic Storage Services',
          description:
            'Barcode-driven stock management, order fulfilment and tailored storage programs with full reporting.'
        }
      },
      services: [
        {
          id: 'warehouse-management',
          image: 'images/gallery/3.jpg',
          copy: {
            tr: {
              title: 'Depo Yönetimi',
              intro: 'Barkod, RFID ve WMS entegrasyonlarıyla stoklarınızı uçtan uca yönetiyoruz.',
              body: [
                'Sipariş girişinden sevkiyata kadar her adım taranır, müşteri panelinden canlı takip edilir.',
                'Günlük KPI raporları ve dönemsel sayım hizmetiyle depo performansını sürekli ölçüyoruz.',
                'Sevkiyat yoğunluğunu tahmin eden raporlar sayesinde personel ve araç planlamasını proaktif olarak öneriyoruz.'
              ],
              features: [
                'WMS & ERP entegrasyonu',
                'Barkod/RFID altyapısı',
                'Cycle count ve sayım raporları',
                'SLA bazlı picker yönetimi'
              ]
            },
            en: {
              title: 'Warehouse Management',
              intro: 'We run your inventory end-to-end with barcode, RFID and WMS integrations.',
              body: [
                'Every stage from order intake to dispatch is scanned and visible in your customer dashboard.',
                'Daily KPIs and periodic counts keep performance transparent.',
                'Forecasting reports suggest proactive staffing and vehicle allocation before peaks arrive.'
              ],
              features: [
                'WMS & ERP integration',
                'Barcode / RFID infrastructure',
                'Cycle-count and audit reports',
                'SLA-based picker management'
              ]
            }
          }
        },
        {
          id: 'rental-space',
          image: 'images/gallery/4.jpg',
          copy: {
            tr: {
              title: 'Kiralık Depo Alanı',
              intro: 'Metrekare bazlı, iklim kontrollü depoları kısa ya da uzun süreli kiralayabilirsiniz.',
              body: [
                'Nem ve sıcaklık sensörleri 7/24 takip edilir, müşteriye periyodik rapor gönderilir.',
                'Güvenli giriş, yangın algılama ve sigorta seçenekleri standart gelir.',
                'İhtiyacınız olduğunda alan büyütme veya küçültme seçeneğiyle depolama maliyetlerinizi esnek şekilde yönetebilirsiniz.'
              ],
              features: [
                'Farklı metrekare seçenekleri',
                '7/24 kamera ve alarm sistemi',
                'Sigorta destekli sözleşme',
                'Paylaşımlı forklift ve personel'
              ]
            },
            en: {
              title: 'Rental Storage Space',
              intro: 'Rent temperature-controlled units for short or long terms in flexible sizes.',
              body: [
                'Humidity and temperature sensors are monitored around the clock with periodic customer reports.',
                'Secure access, fire detection and insurance options are included as standard.',
                'Scale the footprint up or down whenever needed to optimise storage costs.'
              ],
              features: [
                'Multiple square-meter options',
                '24/7 CCTV and alarm system',
                'Insurance-backed contracts',
                'Shared forklift and staffing support'
              ]
            }
          }
        },
        {
          id: 'packing-crating',
          image: 'images/gallery/5.jpg',
          copy: {
            tr: {
              title: 'Paketleme ve Sandıklama',
              intro: 'Sanayi ekipmanları ve sanat eserleri için özel sandık ve vakumlu paketleme hizmeti.',
              body: [
                'Çelik köşebent, OSB ve köpük katmanlarıyla darbe emici kasalar hazırlıyoruz.',
                'Tüm kasa ölçüleri projeye özel kesilir ve dış yüzeyi işaretlenir.',
                'Uçtan uca süreçte ihracat evrakı, etiketleme ve taşıma sigortası için gerekli belgeler tek dosyada tarafınıza teslim edilir.'
              ],
              features: [
                'CNC ile hazırlanan kasalar',
                'ISPM 15 sertifikalı ahşap',
                'Nem bariyerli vakum ambalaj',
                'Yerinde montaj ve mühürleme'
              ]
            },
            en: {
              title: 'Packing & Crating',
              intro: 'Custom crating and vacuum packing for industrial equipment and artwork.',
              body: [
                'Shock-absorbing crates are built with steel brackets, OSB panels and foam layers.',
                'Each crate is cut to project-specific dimensions and clearly labelled.',
                'Export paperwork, labelling and insurance documents are delivered in one dossier.'
              ],
              features: [
                'CNC manufactured crates',
                'ISPM 15 certified timber',
                'Moisture-barrier vacuum wrapping',
                'On-site assembly and sealing'
              ]
            }
          }
        },
        {
          id: 'inventory',
          image: 'images/gallery/1.jpg',
          copy: {
            tr: {
              title: 'Sayım & Envanter',
              intro: 'Bağımsız ekiplerimiz stok doğrulaması ve reconciliation raporları hazırlar.',
              body: [
                'ABC analizi, yaşlandırma ve kayıp-kaçak tabloları ile stok doğruluğunu ölçeriz.',
                'Sonuçlar yönetici özetleriyle paylaşılır ve aksiyon planı öneririz.',
                'Bulduğumuz sapmalar için düzeltici eylem planlarını, sorumlu ekipleri ve takvimleri içeren detaylı bir yol haritası sunuyoruz.'
              ],
              features: [
                'El terminali ile gerçek zamanlı sayım',
                'Bağımsız denetim raporu',
                'Uçtan uca reconciliation takibi',
                'SAP / Netsis entegrasyonu'
              ]
            },
            en: {
              title: 'Inventory & Counting',
              intro: 'Independent teams deliver stock verification and reconciliation reports.',
              body: [
                'ABC analysis, aging and shrink reports keep accuracy visible.',
                'Findings are summarised for managers with recommended actions.',
                'Each variance triggers a corrective roadmap with owners and target dates.'
              ],
              features: [
                'Real-time counts with handheld terminals',
                'Independent audit reporting',
                'End-to-end reconciliation tracking',
                'SAP / Netsis integration'
              ]
            }
          }
        }
      ]
    },
    {
      slug: 'logistics',
      image: 'images/gallery/5.jpg',
      copy: {
        tr: {
          title: 'Lojistik Destek Hizmetleri',
          description:
            'Proje lojistiği, etkinlik ve saha operasyonlarında rota izinleri, saha ekipleri ve raporlamayı tek çatı altında yönetiyoruz.'
        },
        en: {
          title: 'Logistics Support Services',
          description:
            'Route permits, event logistics and field operations managed under one coordination team.'
        }
      },
      services: [
        {
          id: 'project-logistics',
          image: 'images/gallery/2.jpg',
          copy: {
            tr: {
              title: 'Proje Lojistiği',
              intro: 'Ağır ekipman ve şantiye taşımalarında rota izinleri ve saha koordinasyonu sağlanır.',
              body: [
                'Çok akslı low-bed araçlar, eskort planı ve izin dosyalarını biz hazırlarız.',
                'Şantiye teslimlerinde vinç, forklift ve saha güvenliğini tek merkezden koordine ederiz.',
                'Uluslararası proje yüklerinde gümrük partnerlerimizle birlikte tek iletişim noktasından süreçleri yönetiyoruz.'
              ],
              features: [
                'Güzergâh izin yönetimi',
                'Saha güvenlik koordinasyonu',
                'Vinç ve ekipman planlaması',
                '7/24 dispatch merkezi'
              ]
            },
            en: {
              title: 'Project Logistics',
              intro: 'Heavy equipment and construction moves with full permit and site coordination.',
              body: [
                'We prepare low-bed vehicle plans, escort schedules and permit dossiers.',
                'Cranes, forklifts and site safety teams are coordinated from one control tower.',
                'For international loads we partner with customs brokers so you have a single point of contact.'
              ],
              features: [
                'Route & permit management',
                'On-site safety coordination',
                'Crane and equipment planning',
                '24/7 dispatch centre'
              ]
            }
          }
        },
        {
          id: 'event-support',
          image: 'images/gallery/3.jpg',
          copy: {
            tr: {
              title: 'Fuar & Etkinlik Desteği',
              intro: 'Fuar standları, roadshow ve pop-up mağazalar için teslimat-kurulum hizmeti.',
              body: [
                'Stant parçaları barkodlanır, araçlar randevuya göre alana yönlendirilir.',
                'Kurulum sonrası geri toplama ve depolama için tek ekip atanır.',
                'Event ajansları için raporlamalar; kurulum, etkinlik ve söküm aşamalarını kapsayan fotoğraf ve imza tutanakları içerir.'
              ],
              features: [
                'Kurulum ve söküm ekipleri',
                'Roadshow rota planlaması',
                'Fotoğraflı raporlama',
                'Ara stoklama desteği'
              ]
            },
            en: {
              title: 'Fair & Event Support',
              intro: 'Deliveries, installations and reverse logistics for fairs, roadshows and pop-ups.',
              body: [
                'Stand components are barcoded and vehicles are dispatched per time slot.',
                'The same crew handles dismantling and short-term storage after the show.',
                'Agencies receive photographic and signed reports covering build, live days and tear-down.'
              ],
              features: [
                'Setup & dismantle crews',
                'Roadshow routing support',
                'Photo-based reporting',
                'Buffer storage options'
              ]
            }
          }
        },
        {
          id: 'dedicated-dispatch',
          image: 'images/gallery/4.jpg',
          copy: {
            tr: {
              title: '7/24 Dispatch',
              intro: 'Gerçek zamanlı araç ve ekip koordinasyonu, SLA takibi ve alarm yönetimi.',
              body: [
                'Araçlar telematik sistemlerle izlenir; sapma durumunda müşteriye otomatik bildirim gider.',
                'Sürüş ve dinlenme süreleri merkezi sistemde kontrol edilir.',
                'Operasyon merkezimiz rota optimizasyonunu sürekli yeniler, gecikme riskine göre yedek araç ve sürücü planları sunar.'
              ],
              features: [
                'Canlı lokasyon ve hız verisi',
                'SLA ihlal uyarıları',
                'Sürücü vardiya planı',
                'Çağrı merkezi entegrasyonu'
              ]
            },
            en: {
              title: '24/7 Dispatch',
              intro: 'Real-time fleet coordination with SLA tracking and alert management.',
              body: [
                'Telematics feeds power live dashboards and automated deviation alerts to customers.',
                'Drive and rest periods are monitored centrally for compliance.',
                'The control tower refreshes routes constantly and proposes backup vehicles or drivers when delays threaten.'
              ],
              features: [
                'Live location and speed data',
                'Instant SLA breach notifications',
                'Driver shift scheduling',
                'Call-centre integration'
              ]
            }
          }
        },
        {
          id: 'field-supervision',
          image: 'images/gallery/5.jpg',
          copy: {
            tr: {
              title: 'Saha Süpervizyonu',
              intro: 'Çok dilli saha temsilcileri yükleme-boşaltma süreçlerini denetler.',
              body: [
                'Operasyon boyunca fotoğraflı ve imzalı rapor tutulur.',
                'Müşteri temsilcisi sahada bulunur; her adım anlık olarak paylaşılır.',
                'Saha ekipleri müşterinizden gelen son dakika revizyonlarını yerinde çözer ve raporlar aynı gün içinde paylaşılır.'
              ],
              features: [
                'Yerinde müşteri temsilcisi',
                'Fotoğraflı teslim raporları',
                'Çok dilli saha ekibi',
                'Anlık durum güncellemeleri'
              ]
            },
            en: {
              title: 'Field Supervision',
              intro: 'Multilingual supervisors oversee loading and unloading on site.',
              body: [
                'Photo-backed reports and signed handovers are produced throughout the job.',
                'A customer representative stays on site so every step is shared instantly.',
                'Last-minute change requests from your client are resolved on the spot and reported the same day.'
              ],
              features: [
                'On-site customer liaison',
                'Photo-documented delivery reports',
                'Multilingual field teams',
                'Real-time status updates'
              ]
            }
          }
        }
      ]
    }
  ]
};

