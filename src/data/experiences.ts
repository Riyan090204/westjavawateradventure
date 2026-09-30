import { Experience } from "@/types/experience";

export const EXPERIENCES_DATA: Experience[] = [
  {
    slug: "spearfishing",
    activity: "spearfishing",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    ],
    relatedPackageSlugs: [
      "2d1n-spearfishing-trip",
      "3d2n-spearfishing-expedition",
      "custom-spearfishing-charter",
    ],
    relatedDiveSiteSlugs: [
      "zona-pinnacle-selatan",
      "zona-dropoff-pulau",
      "zona-pesisir-karang",
    ],
    translations: {
      en: {
        name: "Spearfishing",
        tagline: "Ethical Underwater Hunting, Selective Harvesting & Ocean Awareness",
        shortDescription:
          "Apnea-based selective underwater hunting focusing on ocean safety discipline, local current dynamics, and sustainable harvesting standards in West Java waters.",
        overview:
          "Spearfishing in West Java offers pristine bluewater and reef adventures across the Indian Ocean and coastal straits. We strictly practice ethical, selective harvesting—targeting only mature, non-protected pelagic and reef fish while safeguarding coral ecosystems. All spearfishing expeditions are escorted by experienced safety divers and local boat captains.",
        whoIsThisFor: [
          {
            title: "Freedivers Expanding into Hunting",
            description:
              "For certified or competent freedivers wanting to master stalking techniques, weapon handling safety, bottom-time discipline, and fish behavior.",
          },
          {
            title: "Experienced Spearos & Bluewater Hunters",
            description:
              "Seasoned spearfishers seeking offshore pinnacles, drop-offs, and current lines in West Java for pelagic target species like Giant Trevally, Spanish Mackerel, and Tuna.",
          },
          {
            title: "Beginners with 1-on-1 Safety Coaching",
            description:
              "Water-confident individuals looking to safely learn speargun mechanics, target recognition, and open-water apnea safety under expert guidance.",
          },
        ],
        skillLevels: [
          {
            level: "Beginner / Introduction",
            badge: "Beginner",
            description:
              "Focus on weapon mechanics, safe loading/unloading, static target practice, and shallow reef hunting ethics.",
            prerequisites: [
              "Comfortable swimming in open water",
              "Ability to perform basic duck dives to at least 5 meters",
              "Good cardiovascular and respiratory health",
            ],
          },
          {
            level: "Intermediate / Reef Hunter",
            badge: "Intermediate",
            description:
              "Hunting at 8–18m depths focusing on reef contours, current reading, floatline management, and fish stringer safety.",
            prerequisites: [
              "Freediving certification or verified apnea experience",
              "Comfortable breath-hold at >10 meters",
              "Basic understanding of buddy rescue protocols",
            ],
          },
          {
            level: "Advanced / Bluewater Hunter",
            badge: "Advanced",
            description:
              "Offshore pinnacle and oceanic drift hunting targeting large pelagics with high-power spearguns, slip-tips, and bungee floatlines.",
            prerequisites: [
              "2+ years of verified spearfishing experience",
              "Deep apnea competence (18–30+ meters) in oceanic currents",
              "Strict adherence to open-ocean safety protocols",
            ],
          },
        ],
        safetyProtocols: [
          {
            title: "In-Water Loading Rule Only",
            description:
              "Spearguns must ONLY be loaded once the diver is fully immersed and the muzzle is pointed towards open sea. Never board a vessel with a loaded speargun.",
          },
          {
            title: "One Up, One Down Buddy System",
            description:
              "One diver hunts while the dedicated buddy remains at the surface actively tracking. Solo spearfishing without surface monitoring is strictly prohibited.",
          },
          {
            title: "High-Visibility Dive Floats & Alpha Flag",
            description:
              "Every hunting pair is tethered to a rigid/inflatable dive float with a dive flag to ensure immediate visual contact with boat captains and marine traffic.",
          },
          {
            title: "Comprehensive Current & Evacuation Briefing",
            description:
              "Tide tables, down-current drift paths, and emergency protocols are reviewed with the local captain prior to every drop.",
          },
        ],
        equipment: {
          provided: [
            "Inflatable / rigid torpedo dive float with Alpha flag",
            "Heavy-duty floatline & bungee rig",
            "Fish stringer & emergency safety whistle",
            "Onboard emergency oxygen unit & marine first aid kit",
          ],
          requiredOrRecommended: [
            "Low-volume freediving mask & flexible snorkel",
            "Long freediving fins",
            "Camo wetsuit / protective rashguard (2mm–3mm)",
            "Speargun (roller / twin-band appropriate for target spot)",
            "Rubber weight belt & quick-release dive knife",
          ],
        },
        whatToExpect: [
          "Private / dedicated dive boat transit to offshore pinnacles or fringing reefs",
          "Real-time current and visibility inspection by our dive team",
          "3–5 hours of structured drift hunting sessions across multiple zones",
          "Hygienic catch handling, filleting, and cold storage upon return",
        ],
        typicalConditions: {
          season: "April – November (Optimal Ocean Conditions)",
          visibility: "8 – 20+ Meters (Tide & current dependent)",
          waterTemp: "26°C – 29°C",
          currents: "Moderate to Strong (Indian Ocean / Sunda Strait characteristics)",
        },
      },
      id: {
        name: "Spearfishing",
        tagline: "Underwater Hunting, Selective Harvesting & Ocean Awareness",
        shortDescription:
          "Aktivitas berburu ikan bawah air berbasis breath-hold (apnea) yang mengedepankan etika selektif, pemahaman arus laut, dan disiplin keselamatan mutlak.",
        overview:
          "Spearfishing di Jawa Barat menawarkan petualangan perburuan bawah air di habitat laut terbuka dan terumbu karang. Kami menjunjung tinggi prinsip sustainable & ethical harvesting—hanya menargetkan ikan yang layak konsumsi sesuai regulasi ukuran lokal, tanpa merusak ekosistem karang. Setiap peserta didampingi oleh dive guide & boatman berpengalaman.",
        whoIsThisFor: [
          {
            title: "Freediver yang Ingin Menambah Keterampilan Hunting",
            description:
              "Bagi kamu yang sudah memiliki dasar apnea/freediving dan ingin mempelajari stalking technique, bottom time management, serta weapon safety handling.",
          },
          {
            title: "Experienced Spearos",
            description:
              "Spearo berpengalaman yang mencari spot blue water hunting di perairan Jawa Barat untuk target ikan pelagis seperti GT, Spanish Mackerel, atau Dogtooth Tuna.",
          },
          {
            title: "Pemula dengan Pendampingan Penuh",
            description:
              "Pemula yang telah nyaman berenang di laut terbuka dan ingin memahami dasar keamanan speargun, anatomi target, serta dinamika perairan.",
          },
        ],
        skillLevels: [
          {
            level: "Beginner / Pengenalan",
            badge: "Beginner",
            description:
              "Fokus pada pengenalan alat (speargun safety), teknik loading, penembakan target statis, serta etika perburuan di area shallow reef.",
            prerequisites: [
              "Dapat berenang di laut terbuka",
              "Mampu melakukan basic freediving / duck dive minimal 5 meter",
              "Kondisi fisik dan paru-paru sehat",
            ],
          },
          {
            level: "Intermediate / Reef Hunter",
            badge: "Intermediate",
            description:
              "Perburuan di kedalaman 8–18 meter dengan teknik stalking di karang, membaca arus pasang surut, serta manajemen float line & stringer.",
            prerequisites: [
              "Sertifikasi freediving atau pengalaman apnea terbukti",
              "Comfortable breath-hold di kedalaman >10 meter",
              "Memahami buddy system & rescue dasar",
            ],
          },
          {
            level: "Advanced / Blue Water Hunter",
            badge: "Advanced",
            description:
              "Ekspedisi laut dalam dan offshore pinnacle untuk target pelagis besar. Memerlukan speargun berdaya tinggi, slip-tip, dan bungee float line.",
            prerequisites: [
              "Pengalaman spearfishing minimal 2+ tahun",
              "Mampu menyelam nyaman di kedalaman 18–30+ meter dalam kondisi arus",
              "Disiplin tinggi terhadap protokol keselamatan laut lepas",
            ],
          },
        ],
        safetyProtocols: [
          {
            title: "Protokol Speargun Statis",
            description:
              "Speargun HANYA boleh di-load saat penyelam sudah berada di dalam air dan posisi moncong senapan menghadap ke arah laut bebas. Dilarang keras menaiki boat dengan senjata terisi.",
          },
          {
            title: "One Up, One Down Buddy System",
            description:
              "Satu penyelam di dasar, satu buddy aktif mengawasi di permukaan. Tidak ada penyelaman spearfishing solo tanpa pendampingan.",
          },
          {
            title: "Float & Surface Marker Buoy (SMB)",
            description:
              "Setiap tim wajib terhubung dengan dive float berbendera alpha untuk memberi sinyal visual ke perahu dan armada nelayan setempat.",
          },
          {
            title: "Briefing Karakteristik Arus & Drop-off",
            description:
              "Pemetaan titik arus masuk, zona pusaran, dan jalur evakuasi ditentukan bersama kapten kapal sebelum terjun ke air.",
          },
        ],
        equipment: {
          provided: [
            "Dive Float / Inflatable Torpedo Buoy + Dive Flag",
            "Float line & bungee rig",
            "Fish stringer & safety emergency whistle",
            "First aid kit & oxygen unit on board",
          ],
          requiredOrRecommended: [
            "Mask (low volume) & Snorkel",
            "Long freediving fins",
            "Wetsuit camo / protective rashguard (2mm–3mm)",
            "Speargun (roller / dual band sesuai spot)",
            "Weight belt & Marseillaise rubber belt",
            "Dive knife (wajib di pergelangan / belt)",
          ],
        },
        whatToExpect: [
          "Perjalanan boat dari dermaga lokal menuju titik drop-off karang atau pinnacle",
          "Pengecekan arus dan visibilitas bersama dive master",
          "Sesi hunting 3–5 jam terbagi dalam beberapa drift spot",
          "Penanganan hasil tangkapan (fillet/cleaning) secara higienis setelah trip selesai",
        ],
        typicalConditions: {
          season: "April – November (Musim Terbaik)",
          visibility: "8 – 20+ Meter (Tergantung pasang surut)",
          waterTemp: "26°C – 29°C",
          currents: "Sedang hingga Kuat (Karakteristik Samudra Hindia / Selat)",
        },
      },
    },
  },
  {
    slug: "freediving",
    activity: "freediving",
    heroImage:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
    ],
    relatedPackageSlugs: [
      "2d1n-freedive-depth-reef",
      "3d2n-freediving-expedition",
      "custom-freediving-charter",
    ],
    relatedDiveSiteSlugs: [
      "zona-pesisir-karang",
      "zona-dropoff-pulau",
    ],
    translations: {
      en: {
        name: "Freediving",
        tagline: "Apnea Discipline, Inner Calmness & Weightless Ocean Exploration",
        shortDescription:
          "The art of single-breath diving. Master mental relaxation, Frenzel equalization, hydrodynamic kicking, and serene coral reef exploration in West Java.",
        overview:
          "Freediving is a harmonious fusion of body awareness, mental stillness, and aquatic grace. In West Java, we provide dedicated line training stations with certified depth buoys as well as reef safaris exploring natural underwater archways, sea fans, and drop-off walls.",
        whoIsThisFor: [
          {
            title: "Beginners & Apnea Explorers",
            description:
              "Anyone looking to overcome depth anxiety, master diaphragmatic breathing, and experience the weightless freedom of diving without bulky tanks.",
          },
          {
            title: "Certified Freedivers (Line Training)",
            description:
              "AIDA, Molchanovs, SSI, or PADI freedivers looking to practice Constant Weight (CWT), Free Immersion (FIM), or reach personal depth milestones in safe, monitored settings.",
          },
          {
            title: "Underwater Photographers & Models",
            description:
              "Divers wanting natural, bubble-free encounters with marine life and cinematic underwater portraits.",
          },
        ],
        skillLevels: [
          {
            level: "Discovery / Beginner Freediver",
            badge: "Beginner",
            description:
              "Fundamentals of relaxation, surface static apnea, vertical duck dives, and equalizing ears down to 5–12 meters.",
            prerequisites: [
              "Able to swim comfortably and float unassisted",
              "Good ENT (ear, nose, throat) health",
            ],
          },
          {
            level: "Intermediate (Line & Reef Fun Dive)",
            badge: "Intermediate",
            description:
              "Diving to 12–25m depths with refined Frenzel equalization, streamlined posture, and LMC/blackout rescue protocols.",
            prerequisites: [
              "Freediver Level 1 certification or equivalent",
              "Demonstrated 10m rescue competence",
            ],
          },
          {
            level: "Advanced Deep Apnea",
            badge: "Advanced",
            description:
              "25–40+ meter exploration, mouthfill fundamentals, deep freefall control, and diaphragm contraction adaptation.",
            prerequisites: [
              "Freediver Level 2/3 certification",
              "Verified logbook and medical clearance",
            ],
          },
        ],
        safetyProtocols: [
          {
            title: "Never Dive Alone",
            description:
              "The golden rule of freediving: strict 1-to-1 buddy pairing with direct eye-to-eye contact during the last 10m of ascent through the surface interval.",
          },
          {
            title: "Safety Lanyard & Counterweight Station",
            description:
              "All depth line sessions utilize certified safety lanyards attached to high-visibility static lines.",
          },
          {
            title: "Enforced Recovery Intervals",
            description:
              "Recovery breathing intervals of at least 2–3x dive duration before any subsequent descent.",
          },
        ],
        equipment: {
          provided: [
            "Certified freediving training buoy + bottom plate + counterweight rig",
            "50m depth-rated static dive lines",
            "Safety lanyards & pulley system",
            "Emergency medical oxygen kit on the boat",
          ],
          requiredOrRecommended: [
            "Low-volume freediving mask",
            "Flexible J-snorkel (no purge valve)",
            "Long carbon, fiberglass, or polymer freediving fins",
            "Smoothskin or double-lined wetsuit (1.5mm–3mm)",
            "Rubber Marseillaise weight belt",
          ],
        },
        whatToExpect: [
          "Pre-dive dry stretching, breathing, and equalization workshop",
          "Water adaptation and shallow warm-up drills",
          "Structured depth line session or reef wall safari",
          "High-definition underwater photography and video debriefing",
        ],
        typicalConditions: {
          season: "Year-Round (Optimal May – October)",
          visibility: "10 – 25 Meters",
          waterTemp: "27°C – 30°C",
          currents: "Calm in sheltered bays / Moderate on outer reefs",
        },
      },
      id: {
        name: "Freediving",
        tagline: "Apnea, Inner Calmness & Weightless Ocean Exploration",
        shortDescription:
          "Seni menyelam dengan satu tarikan napas. Pelajari relaksasi mental, ekualisasi (Frenzel), teknik kicking yang efisien, dan jelajahi terumbu karang secara hening.",
        overview:
          "Freediving bukan sekadar menahan napas, melainkan melatih kesadaran tubuh, ketenangan pikiran, dan keharmonisan dengan air. Di perairan Jawa Barat, kami menyediakan rute latihan depth training di buoy line bersertifikasi serta fun dive mengitari formasi karang dan gua laut.",
        whoIsThisFor: [
          {
            title: "Pemula yang Ingin Mulai Apnea",
            description:
              "Siapapun yang ingin mengatasi rasa takut di kedalaman, menguasai teknik pernapasan perut, dan merasakan kebebasan tanpa tabung.",
          },
          {
            title: "Certified Freedivers (Line Training)",
            description:
              "Penyelam bersertifikat (AIDA / Molchanovs / SSI / PADI) yang ingin melatih constant weight (CWT), free immersion (FIM), atau personal best (PB) di kedalaman terkontrol.",
          },
          {
            title: "Underwater Photography Lovers",
            description:
              "Penyelam yang ingin berinteraksi dekat dengan biota laut dan mengambil foto estetik tanpa gelembung udara.",
          },
        ],
        skillLevels: [
          {
            level: "Discovery / Beginner Freediver",
            badge: "Beginner",
            description:
              "Dasar relaksasi, static apnea di permukaan, teknik duck dive vertikal, dan equalizing telinga hingga kedalaman 5–12 meter.",
            prerequisites: [
              "Bisa berenang dan mengapung dengan nyaman",
              "Kesehatan THT (telinga, hidung, tenggorokan) prima",
            ],
          },
          {
            level: "Intermediate (Line & Reef Fun Dive)",
            badge: "Intermediate",
            description:
              "Penyelaman 12–25 meter dengan teknik Frenzel equalization, body streamlined posture, dan rescue scenario LMC/Blackout.",
            prerequisites: [
              "Memiliki sertifikat Freediver Level 1 / setara",
              "Mampu melakukan safety rescue di kedalaman 10m",
            ],
          },
          {
            level: "Advanced Deep Apnea",
            badge: "Advanced",
            description:
              "Eksplorasi kedalaman 25–40+ meter, mouthfill fundamentals, freefall mastery, dan adaptasi kontraksi diafragma.",
            prerequisites: [
              "Sertifikasi Freediver Level 2/3",
              "Memiliki logbook resmi dan kondisi medis terverifikasi",
            ],
          },
        ],
        safetyProtocols: [
          {
            title: "Never Dive Alone",
            description:
              "Aturan mutlak freediving: selalu menyelam berpasangan dengan skema direct eye-to-eye contact saat penyelam naik ke 10 meter terakhir hingga permukaan.",
          },
          {
            title: "Lanyard & Safety Line",
            description:
              "Pada sesi depth training, seluruh penyelam wajib menggunakan safety lanyard yang terhubung ke tali pemberat utama.",
          },
          {
            title: "Surface Interval Timing",
            description:
              "Pemberian jeda waktu pemulihan (recovery breathing) minimal 2–3x lipat durasi menyelam sebelum penyelaman berikutnya.",
          },
        ],
        equipment: {
          provided: [
            "Freediving training buoy + bottom plate + counterweight system",
            "Certified static lines (50m depth capacity)",
            "Safety lanyards & pulley system",
            "Emergency oxygen kit on the boat",
          ],
          requiredOrRecommended: [
            "Low-volume freediving mask",
            "Flexible J-type snorkel (tanpa purge valve)",
            "Long carbon/fiberglass/plastic freediving fins",
            "Smoothskin or double-lined wetsuit (1.5mm–3mm)",
            "Rubber weight belt",
          ],
        },
        whatToExpect: [
          "Sesi stretching dan breathing session di darat sebelum naik boat",
          "Adaptasi air dan warmup di kedalaman dangkal",
          "Sesi line training atau fun dive reef safari",
          "Dokumentasi underwater HD/4K oleh instruktur",
        ],
        typicalConditions: {
          season: "Sepanjang tahun (Kondisi optimal Mei – Oktober)",
          visibility: "10 – 25 Meter",
          waterTemp: "27°C – 30°C",
          currents: "Ringan di teluk / Sedang di spot terbuka",
        },
      },
    },
  },
  {
    slug: "scuba-diving",
    activity: "scuba-diving",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    ],
    relatedPackageSlugs: [
      "2d1n-scuba-diving-safari",
      "3d2n-scuba-diving-expedition",
      "custom-scuba-diving-charter",
    ],
    relatedDiveSiteSlugs: [
      "zona-pesisir-karang",
      "zona-dropoff-pulau",
    ],
    translations: {
      en: {
        name: "Scuba Diving",
        tagline: "Effortless Buoyancy, Rich Coral Gardens & Marine Biodiversity",
        shortDescription:
          "Explore pristine tropical reefs, dramatic drop-offs, and vibrant marine life across West Java with certified PADI/SSI Divemasters and small group ratios.",
        overview:
          "West Java's underwater realm boasts healthy coral slopes, sea fan walls, and diverse marine life ranging from macro critters to schooling pelagics. Our certified Divemasters ensure strict adherence to international dive safety standards, personalized attention, and unhurried reef exploration.",
        whoIsThisFor: [
          {
            title: "Discovery Scuba (Non-Certified Beginners)",
            description:
              "First-time divers wishing to experience breathing underwater in shallow, calm coral lagoons under direct 1-on-1 instructor supervision.",
          },
          {
            title: "Certified Leisure Divers (Open Water / Advanced)",
            description:
              "Certified divers seeking weekend reef trips, macro photography dives, or exhilarating oceanic drift dives.",
          },
          {
            title: "Refresher & Skill Tune-Ups",
            description:
              "Certified divers returning after a break who want a comprehensive buoyancy check and review before deep drop-off excursions.",
          },
        ],
        skillLevels: [
          {
            level: "Discovery Scuba Diving (DSD)",
            badge: "Beginner",
            description:
              "Introductory scuba experience without prior certification. Maximum 10–12m depth with a strict 1 instructor to maximum 2 guest ratio.",
            prerequisites: [
              "Minimum age 10 years",
              "Standard medical fitness (no chronic asthma or unmanaged cardiac conditions)",
            ],
          },
          {
            level: "Open Water Diver (Fun Dive)",
            badge: "Intermediate",
            description:
              "Reef exploration down to 18 meters. Mastering buoyancy, underwater navigation, and coral reef conservation.",
            prerequisites: [
              "Open Water Diver certification (PADI / SSI / NAUI / CMAS)",
              "Valid logbook",
            ],
          },
          {
            level: "Advanced Open Water / Drift Dives",
            badge: "Advanced",
            description:
              "Deep exploration down to 30m, wall drop-offs, natural swim-throughs, and oceanic current drift dives.",
            prerequisites: [
              "Advanced Open Water certification",
              "Verified drift dive experience / minimum 20 logged dives",
            ],
          },
        ],
        safetyProtocols: [
          {
            title: "Strict Small-Group Divemaster Ratio",
            description:
              "Maximum 4 certified divers per Divemaster to ensure maximum situational awareness and guest comfort.",
          },
          {
            title: "Medical-Grade Clean Air & Regular Tank Inspections",
            description:
              "All aluminum 80 cu ft tanks undergo certified visual inspections and hydrostatic tests with clean filtration.",
          },
          {
            title: "Mandatory 3-Minute Safety Stops",
            description:
              "Mandatory 3-minute safety stop at 5 meters on every dive profile.",
          },
          {
            title: "Dedicated Emergency O2 Units",
            description:
              "Every expedition vessel carries pure medical oxygen kits (DAN Kit) and comprehensive marine first aid equipment.",
          },
        ],
        equipment: {
          provided: [
            "Aluminum 80 cu ft scuba tanks (air)",
            "Weight belt & lead weights",
            "Serviced regulator set (1st stage, primary, octopus, SPG)",
            "Maintained BCD (Buoyancy Control Device)",
            "3mm wetsuit (long or shorty)",
          ],
          requiredOrRecommended: [
            "Personal mask & snorkel for comfort fit",
            "Scuba booties & open-heel fins",
            "Personal dive computer (highly recommended)",
            "Surface Marker Buoy (SMB) & reel",
          ],
        },
        whatToExpect: [
          "Pre-dive site briefing, hand signals, and minimum gas reserve rules (50 bar)",
          "Gear assembly & buddy check (BWRAF) prior to water entry",
          "2 to 3 planned boat dives per day with comfortable surface intervals",
          "Post-dive logbook signing and species identification at our basecamp",
        ],
        typicalConditions: {
          season: "March – December",
          visibility: "10 – 25+ Meters",
          waterTemp: "26°C – 29°C",
          currents: "Gentle in lagoons to moderate along outer reefs",
        },
      },
      id: {
        name: "Scuba Diving",
        tagline: "Effortless Buoyancy, Rich Coral Gardens & Marine Biodiversity",
        shortDescription:
          "Jelajahi keindahan terumbu karang dan ekosistem laut Jawa Barat dengan peralatan SCUBA lengkap. Cocok untuk Discovery Scuba Diving (DSD) maupun Fun Dive penyelam bersertifikat.",
        overview:
          "Perairan Jawa Barat menyimpan gugusan karang sehat, dinding drop-off dramatis, serta aneka ragam biota laut mulai dari nudibranch mikro hingga schooling pelagis. Tim Divemaster dan Instruktur kami memastikan setiap dive dilakukan dengan standar PADI/SSI yang ketat, rasio grup kecil, dan perhatian penuh pada kenyamanan penyelam.",
        whoIsThisFor: [
          {
            title: "Discovery Scuba (Pemula Belum Bersertifikat)",
            description:
              "Bagi yang belum pernah menyelam tetapi ingin merasakan sensasi bernapas di bawah air dengan pendampingan langsung 1-on-1 bersama instruktur.",
          },
          {
            title: "Certified Leisure Divers (Open Water / Advanced)",
            description:
              "Penyelam yang ingin menikmati Fun Dive santai di akhir pekan, menjelajahi coral reef, macro photography, atau drift diving seru.",
          },
          {
            title: "Refresher Dive",
            description:
              "Penyelam bersertifikat yang sudah lama tidak menyelam dan ingin mengulang kembali cek buoyancy dan emergency drill sebelum trip laut dalam.",
          },
        ],
        skillLevels: [
          {
            level: "Discovery Scuba Diving (DSD)",
            badge: "Beginner",
            description:
              "Program pengenalan tanpa sertifikasi sebelumnya. Maksimum kedalaman 10–12 meter dengan rasio 1 instruktur untuk maksimal 2 peserta.",
            prerequisites: [
              "Usia minimal 10 tahun",
              "Kuesioner medis scuba standar (bebas asma kronis & masalah jantung)",
            ],
          },
          {
            level: "Open Water Diver (Fun Dive)",
            badge: "Intermediate",
            description:
              "Penyelaman terumbu karang hingga kedalaman 18 meter. Menikmati navigasi underwater, kontrol netral buoyancy, dan interaksi biota laut.",
            prerequisites: [
              "Sertifikat Open Water Diver (PADI / SSI / NAUI / CMAS)",
              "Logbook valid",
            ],
          },
          {
            level: "Advanced Open Water / Deep Drift",
            badge: "Advanced",
            description:
              "Eksplorasi spot hingga 30 meter, dinding drop-off, cave swim-throughs, dan drift dive dengan arus Samudra.",
            prerequisites: [
              "Sertifikat Advanced Open Water",
              "Pengalaman drift dive / minimal 20 logged dives",
            ],
          },
        ],
        safetyProtocols: [
          {
            title: "Rasio Divemaster Ketat",
            description:
              "Maksimal 4 penyelam bersertifikat per 1 Divemaster untuk memastikan pemantauan udara dan kenyamanan maksimal.",
          },
          {
            title: "Pengecekan Udara & O2 Analysis",
            description:
              "Semua tabung Scuba menggunakan udara kompresi bersih standar medis dengan inspeksi visual berkala dan analisa tekanan sebelum keberangkatan.",
          },
          {
            title: "Pemberhentian Keselamatan (Safety Stop)",
            description:
              "Wajib melakukan safety stop selama 3 menit di kedalaman 5 meter pada setiap profil penyelaman.",
          },
          {
            title: "Kesiapan Oksigen Medis Darurat",
            description:
              "Kapal ekspedisi kami selalu dilengkapi unit oksigen murni (DAN Kit) dan P3K laut lengkap.",
          },
        ],
        equipment: {
          provided: [
            "Tabung Scuba Aluminium 80 cu ft (Air)",
            "Weight belt & timah pemberat",
            "Regulator set (1st stage, primary, alternate octopus, SPG gauge)",
            "BCD (Buoyancy Control Device) terawat",
            "Wetsuit 3mm (Long/Shorty)",
          ],
          requiredOrRecommended: [
            "Mask & Snorkel pribadi untuk kenyamanan fit",
            "Scuba booties & Open-heel fins",
            "Dive computer pribadi (sangat disarankan)",
            "Surface Marker Buoy (SMB) & Spool",
          ],
        },
        whatToExpect: [
          "Briefing dive plan, sinyal tangan, dan batas udara minimum (50 bar reserve)",
          "Gear assembly & buddy check (BWRAF) sebelum lompat ke air",
          "2 hingga 3 kali penyelaman per hari dengan interval permukaan nyaman",
          "Pencatatan logbook bersama Divemaster di lounge setelah kembali",
        ],
        typicalConditions: {
          season: "Maret – Desember",
          visibility: "10 – 25+ Meter",
          waterTemp: "26°C – 29°C",
          currents: "Tenang hingga Menengah (Sesuai titik dive spot yang dipilih)",
        },
      },
    },
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return EXPERIENCES_DATA.find((exp) => exp.slug === slug);
}
