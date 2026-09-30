import { Package } from "@/types/package";

export const PACKAGES_DATA: Package[] = [
  // ==========================================
  // 1. SPEARFISHING PACKAGES (2D1N, 3D2N, CUSTOM)
  // ==========================================
  {
    slug: "2d1n-spearfishing-trip",
    activity: "spearfishing",
    format: "join-trip",
    level: "all-levels",
    duration: "2 Days / 1 Night",
    location: "West Java Coastal & Outer Reefs",
    diveSiteSlug: "zona-pesisir-karang",
    groupSize: "Max 6 Divers per Boat",
    priceDisplay: "Starting from IDR [Package Price] / Person",
    heroImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    // =========================================================================
    // DEPARTURE SCHEDULES & AVAILABILITY (SINGLE SOURCE OF TRUTH)
    // To update quota after confirming a booking with customer via WhatsApp:
    // Simply change the `remainingSpots` value below and redeploy the site.
    // - remainingSpots > 2: "Available"
    // - remainingSpots === 1 or 2: "Limited Spots"
    // - remainingSpots === 0: "Fully Booked"
    // =========================================================================
    schedules: [
      {
        id: "sch-spearo-2d1n-2026-10-17",
        dateDisplay: {
          en: "17 – 18 October 2026",
          id: "17 – 18 Oktober 2026",
        },
        startDate: "2026-10-17",
        endDate: "2026-10-18",
        maxParticipants: 6,
        remainingSpots: 4, // <-- Update manually when admin confirms booking
        note: {
          en: "Weekend Open Group Departure",
          id: "Jadwal Open Trip Akhir Pekan",
        },
      },
      {
        id: "sch-spearo-2d1n-2026-10-24",
        dateDisplay: {
          en: "24 – 25 October 2026",
          id: "24 – 25 Oktober 2026",
        },
        startDate: "2026-10-24",
        endDate: "2026-10-25",
        maxParticipants: 6,
        remainingSpots: 2, // <-- Limited spots example
        note: {
          en: "Prime Tide & Favorable Current",
          id: "Kondisi Arus & Pasang Optimal",
        },
      },
      {
        id: "sch-spearo-2d1n-2026-10-31",
        dateDisplay: {
          en: "31 Oct – 1 Nov 2026",
          id: "31 Okt – 1 Nov 2026",
        },
        startDate: "2026-10-31",
        endDate: "2026-11-01",
        maxParticipants: 6,
        remainingSpots: 0, // <-- Fully booked example
        note: {
          en: "End-of-Month Expedition",
          id: "Ekspedisi Akhir Bulan",
        },
      },
    ],
    translations: {
      en: {
        name: "2D1N Spearfishing Coastal & Reef Safari",
        location: "West Java Coastal & Outer Reefs",
        meetingPoint: "Paku Beach Harbour Basecamp, Anyer, Banten",
        startPoint: "Paku Anyer Pier (Fastboat direct to coastal reef slope)",
        duration: "2 Days / 1 Night",
        priceDisplay: "Starting from IDR [Package Price] / Person",
        priceNote: "*Includes 1-night accommodation & full boat charter",
        shortDescription:
          "2-day spearfishing weekend trip exploring coastal slopes, fringing reefs, and drop-off zones with certified safety divers.",
        description:
          "Designed for spearo enthusiasts looking for an intensive weekend getaway. Explore thriving shallow and intermediate reef contours (5–18m), supported by experienced local boat captains, ice storage, and post-dive BBQ.",
        highlights: [
          "2 full days of dedicated boat hunting sessions",
          "Exploration of 4 to 6 prime reef hunting spots",
          "Dedicated safety spearo & in-water guide escort",
          "1 night coastal accommodation near the harbour",
          "High-capacity ice boxes for fresh catch preservation",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Harbour Rendezvous, Rigging & Warm-up Stalking",
            activities: [
              "08:00 - Meeting point at harbour basecamp (Anyer), registration & gear rigging",
              "09:00 - Safety briefing & gun inspection",
              "10:00 - Boat departure for Spot 1: Shallow Fringing Reef (5–12m)",
              "13:00 - Onboard lunch & hydration interval",
              "14:30 - Spot 2: Outer Drop-off Drift Session",
              "17:00 - Return to basecamp, catch handling & hotel check-in",
              "19:30 - Fresh catch BBQ dinner",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Morning Reef Hunt, Catch Packing & Departure",
            activities: [
              "06:30 - Breakfast & boat loading",
              "07:30 - Morning session at outer reef drop-offs",
              "11:30 - Return to harbour, equipment freshwater rinse",
              "12:30 - Catch filleting, vacuum/ice packing & trip wrap-up",
              "14:00 - Departure to home city",
            ],
          },
        ],
        inclusions: [
          "2-day boat charter with licensed captain & crew",
          "1 night accommodation (AC room, twin/triple share)",
          "In-water safety guide & spearo escort",
          "Surface buoy, Alpha dive flags, and floatline backup",
          "Meals during the trip & mineral water on boat",
          "Ice boxes & ice for catch preservation",
          "Underwater photo & video documentation",
        ],
        exclusions: [
          "Land transportation to West Java harbour meeting point",
          "Personal spearfishing gear (speargun, wetsuit, long fins, mask)",
          "Personal travel & dive insurance",
          "Crew and guide gratuities",
        ],
        requirements: [
          "Comfortable apnea breath-hold at 8–15m",
          "Prior speargun handling experience",
          "Mandatory dive knife and emergency whistle",
        ],
        safetyNotes: [
          "Strict adherence to 'One Up, One Down' buddy protocol",
          "Zero tolerance for shooting undersized fish or protected species",
        ],
        faqs: [
          {
            question: "Is gear rental available for this 2D1N trip?",
            answer:
              "Yes, spearguns, long fins, and floatlines can be rented with advance notice during booking.",
          },
        ],
      },
      id: {
        name: "2D1N Spearfishing Coastal & Reef Safari",
        location: "Pesisir & Terumbu Karang Jawa Barat",
        meetingPoint: "Dermaga Wisata Paku Anyer / Basecamp WJ Diving, Banten",
        startPoint: "Dermaga Paku Anyer (Akses Speedboat ke Lereng Karang Pesisir)",
        duration: "2 Hari / 1 Malam",
        priceDisplay: "Mulai dari IDR [Harga Paket] / Pax",
        priceNote: "*Termasuk penginapan 1 malam & kapal sewa 2 hari",
        shortDescription:
          "Trip spearfishing 2 hari 1 malam menyusuri lereng karang dan drop-off dangkal-menengah Jawa Barat didampingi safety guide.",
        description:
          "Trip spearfishing akhir pekan yang intensif dan seru. Jelajahi spot-spot karang produktif (kedalaman 5–18 meter) bersama kapten lokal berpengalaman, lengkap dengan fasilitas es batu pendingin dan santap malam BBQ hasil buruan.",
        highlights: [
          "2 hari penuh sesi berburu dengan perahu khusus",
          "Eksplorasi 4 hingga 6 titik karang produktif",
          "Didampingi safety spearo & guide lokal",
          "Akomodasi 1 malam dekat dermaga (ber-AC)",
          "Fasilitas cold storage & ice box untuk tangkapan",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Kumpul di Dermaga, Gear Rigging & Warm-up Hunt",
            activities: [
              "08:00 - Tiba di basecamp dermaga Anyer, registrasi & pasang alat",
              "09:00 - Safety briefing & pengecekan speargun",
              "10:00 - Berangkat ke Spot 1: Karang Pesisir Dangkal (5–12m)",
              "13:00 - Makan siang di perahu & jeda istirahat",
              "14:30 - Sesi Spot 2: Outer Reef Drop-off",
              "17:00 - Kembali ke dermaga, handling tangkapan & check-in penginapan",
              "19:30 - Makan malam BBQ ikan segar bersama tim",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Morning Hunt, Packing Hasil Tangkapan & Kepulangan",
            activities: [
              "06:30 - Sarapan pagi & loading perahu",
              "07:30 - Sesi berburu pagi di spot karang luar",
              "11:30 - Kembali ke dermaga, cuci dan bilas peralatan",
              "12:30 - Fillet, penimbangan & packing es styrofoam",
              "14:00 - Penutupan trip & perjalanan pulang",
            ],
          },
        ],
        inclusions: [
          "Sewa perahu spearfishing khusus selama 2 hari",
          "Penginapan 1 malam (AC, Twin/Triple share)",
          "Kapten boat + Safety Spearo Guide",
          "Surface buoy, dive flag, dan float line",
          "Makan selama trip & air mineral di perahu",
          "Ice box & es batu untuk hasil tangkapan",
          "Dokumentasi underwater foto/video",
        ],
        exclusions: [
          "Transportasi darat ke meeting point Jawa Barat",
          "Peralatan pribadi (Speargun, Wetsuit, Fins, Mask)",
          "Pengeluaran pribadi & tips kru kapal",
          "Asuransi perjalanan pribadi",
        ],
        requirements: [
          "Kemampuan apnea/freediving minimal 8-15m",
          "Pernah memegang atau menggunakan speargun",
          "Wajib membawa dive knife pribadi",
        ],
        safetyNotes: [
          "Wajib mematuhi sistem One Up, One Down buddy system",
          "Dilarang keras menembak biota yang dilindungi",
        ],
        faqs: [
          {
            question: "Apakah peralatan spearfishing bisa disewa?",
            answer:
              "Bisa, kami menyediakan sewa speargun, long fins, dan floatline dengan konfirmasi terlebih dahulu.",
          },
        ],
      },
    },
  },
  {
    slug: "3d2n-spearfishing-expedition",
    activity: "spearfishing",
    format: "private",
    level: "intermediate",
    duration: "3 Days / 2 Nights",
    location: "West Java (Offshore Pinnacle & Deep Reefs)",
    diveSiteSlug: "zona-pinnacle-selatan",
    groupSize: "4 – 6 Divers per Boat",
    priceDisplay: "Starting from IDR [Package Price] / Person",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    schedules: [
      {
        id: "sch-spearo-3d2n-2026-10-23",
        dateDisplay: {
          en: "23 – 25 October 2026",
          id: "23 – 25 Oktober 2026",
        },
        startDate: "2026-10-23",
        endDate: "2026-10-25",
        maxParticipants: 5,
        remainingSpots: 3, // <-- Update manually after admin confirmation
        note: {
          en: "Offshore Pinnacle Window",
          id: "Jendela Navigasi Pinnacle Lepas Pantai",
        },
      },
      {
        id: "sch-spearo-3d2n-2026-11-06",
        dateDisplay: {
          en: "6 – 8 November 2026",
          id: "6 – 8 November 2026",
        },
        startDate: "2026-11-06",
        endDate: "2026-11-08",
        maxParticipants: 5,
        remainingSpots: 5, // <-- Available
        note: {
          en: "New Moon Pelagic Run",
          id: "Fase Bulan Baru Target Ikan Pelagis",
        },
      },
    ],
    translations: {
      en: {
        name: "3D2N Spearfishing Blue Water & Reef Expedition",
        location: "West Java (Offshore Pinnacle & Deep Reefs)",
        meetingPoint: "Anyer Marina Basecamp / Pelabuhan Merak, Banten",
        startPoint: "Dermaga Marina Anyer (Twin-engine Offshore Vessel)",
        duration: "3 Days / 2 Nights",
        priceDisplay: "Starting from IDR [Package Price] / Person",
        priceNote: "*Flexible rates based on private charter group size",
        shortDescription:
          "Exclusive 3-day private spearfishing expedition exploring remote offshore pinnacles, oceanic drift zones, and deep reef drop-offs in West Java.",
        description:
          "Designed for intermediate and advanced spearos, this multi-day oceanic charter provides access to remote, high-visibility blue water zones. Supported by high-speed vessels, experienced local captains, safety divers, and onboard catch storage.",
        highlights: [
          "Private dedicated spearfishing boat charter with local master captain",
          "Access to offshore oceanic pinnacles and pelagic drift lines",
          "Dedicated safety spearo / in-water guide escort",
          "Onboard cold storage & ice chests for catch management",
          "2 nights coastal accommodation close to departure harbour",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Rendezvous, Gear Inspection & Warm-up Reef Stalking",
            activities: [
              "08:00 - Arrival at basecamp / harbour (Anyer / Merak)",
              "09:00 - Safety briefing, speargun inspection, floatline rigging",
              "10:00 - Boat departure to deep reef zone (Session 1: Stalking & Adaptation)",
              "13:00 - Onboard lunch & hydration surface interval",
              "14:30 - Session 2: Outer drop-off wall drift",
              "17:00 - Return to basecamp, hygienic catch handling & accommodation check-in",
              "19:30 - Fresh catch BBQ dinner & expedition debrief",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Full-Day Offshore Pinnacle & Pelagic Drift Hunting",
            activities: [
              "06:30 - Breakfast & gear preparation",
              "07:30 - Departure to offshore pinnacle zone (Blue Water Hunting)",
              "09:00 - Oceanic drift hunting targeting Giant Trevally, Mackerel & Tuna",
              "12:30 - Midday rest & hydration in calm lee waters",
              "14:00 - Relocation to outer island drop-off wall",
              "16:30 - Sunset cruise return to harbour",
              "19:00 - Dinner & ocean storytelling session",
            ],
          },
          {
            dayOrTime: "Day 3",
            title: "Morning Reef Session, Fillet Packing & Departure",
            activities: [
              "07:00 - Optional short morning reef dive / coastal session",
              "10:30 - Professional catch filleting & vacuum/ice box packing",
              "12:00 - Check-out & onward travel transfer",
            ],
          },
        ],
        inclusions: [
          "Private 3-day boat charter dedicated exclusively to your group",
          "2 nights accommodation (air-conditioned, twin/triple share)",
          "Experienced captain + in-water safety spearo guide",
          "Back-up dive floats, Alpha dive flags, and floatlines",
          "All meals during the trip & unlimited mineral water on boat",
          "High-capacity ice boxes and ice for catch preservation",
          "Underwater photo & video documentation",
        ],
        exclusions: [
          "Land transportation to West Java harbour meeting point",
          "Personal spearfishing gear (speargun, wetsuit, long fins, mask)",
          "Personal travel & dive insurance",
          "Crew and guide gratuities",
        ],
        requirements: [
          "Comfortable apnea breath-hold at 10–15m minimum",
          "Prior speargun handling experience",
          "Mandatory personal dive knife and emergency whistle",
          "Signed safety waiver and adherence to ethical catch guidelines",
        ],
        safetyNotes: [
          "Strictly zero shooting of protected species or juvenile fish",
          "Mandatory compliance with captain's ocean swell and current directives",
          "Strict One Up, One Down buddy protocol at all times",
        ],
        faqs: [
          {
            question: "Is spearfishing gear rental available?",
            answer:
              "Yes, speargun sets, long fins, and floatlines can be reserved in advance. Please inform us during your WhatsApp or email booking inquiry.",
          },
          {
            question: "What happens in case of adverse ocean weather?",
            answer:
              "Safety is our ultimate priority. If the captain deems the outer ocean unsafe, trips will be redirected to protected reef bays or rescheduled by mutual agreement.",
          },
        ],
      },
      id: {
        name: "3D2N Spearfishing Blue Water & Reef Expedition",
        location: "West Java (Offshore Pinnacle & Deep Reefs)",
        meetingPoint: "Basecamp Dermaga Marina Anyer / Merak, Banten",
        startPoint: "Dermaga Marina Anyer (Kapal Cepat Lepas Pantai Mesin Ganda)",
        duration: "3 Hari / 2 Malam",
        priceDisplay: "Mulai dari IDR [Harga Paket] / Pax",
        priceNote: "*Tarif fleksibel berdasarkan jumlah peserta private charter",
        shortDescription:
          "Ekspedisi spearfishing privat 3 hari 2 malam menjelajahi pinnacle lepas pantai dan drop-off karang dalam Jawa Barat untuk target ikan pelagis dan reef fish.",
        description:
          "Paket ekspedisi spearfishing eksklusif dirancang bagi spearo level intermediate hingga advanced. Menawarkan pengalaman berburu di spot-spot terpencil dengan visibilitas prima, didukung perahu berkecepatan tinggi, kapten kapal lokal berpengalaman, dan float safety setup lengkap.",
        highlights: [
          "Charter private boat khusus spearfishing dengan kapten berpengalaman",
          "Eksplorasi spot blue water hunting dan underwater pinnacle",
          "Didampingi safety spearo & guide lokal",
          "Fasilitas cold storage & ice box untuk tangkapan",
          "Akomodasi penginapan 2 malam di dekat dermaga",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Meeting Point, Gear Check & Warm-up Reef Hunt",
            activities: [
              "08:00 - Tiba di basecamp dermaga Anyer / Merak, registrasi",
              "09:00 - Briefing keselamatan, pengecekan speargun, dan alokasi float line",
              "10:00 - Keberangkatan boat menuju Spot Karang Dalam (Sesi 1: Warm-up & Stalking)",
              "13:00 - Makan siang di atas boat & istirahat jeda interval",
              "14:30 - Sesi hunting ke-2 di area drop-off",
              "17:00 - Kembali ke dermaga, handling hasil tangkapan, dan check-in penginapan",
              "19:30 - Makan malam fresh catch BBQ & evaluasi hari pertama",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Full Day Offshore Pinnacle & Pelagic Hunting",
            activities: [
              "06:30 - Sarapan pagi & persiapan amunisi",
              "07:30 - Keberangkatan menuju Offshore Pinnacle Zone (Blue Water Hunting)",
              "09:00 - Sesi perburuan drift diving untuk target pelagis (GT, Tenggiri, Tuna)",
              "12:30 - Lunch break & recovery hydration di boat",
              "14:00 - Pindah spot ke Outer Reef Wall",
              "16:30 - Perjalanan kembali ke darat menikmati sunset pesisir",
              "19:00 - Dinner & santai bersama tim",
            ],
          },
          {
            dayOrTime: "Day 3",
            title: "Morning Quick Session, Packing & Departure",
            activities: [
              "07:00 - Sesi diving/hunting singkat di coastal shallow reef (opsional)",
              "10:30 - Pembagian & packing fillet ikan ke dalam styrofoam box berpendingin",
              "12:00 - Check-out & perjalanan kembali ke kota asal",
            ],
          },
        ],
        inclusions: [
          "Private boat charter khusus selama 3 hari",
          "Penginapan 2 malam (AC, Twin/Triple share)",
          "Kapten boat + Dive Guide / Safety Spearo",
          "Surface buoy, dive flag, dan float line cadangan",
          "Makan selama trip & air mineral tak terbatas di boat",
          "Ice box & es batu untuk penyimpanan hasil tangkapan",
          "Dokumentasi underwater foto/video",
        ],
        exclusions: [
          "Transportasi darat menuju meeting point di Jawa Barat",
          "Peralatan pribadi (Speargun, Wetsuit, Fins, Mask)",
          "Pengeluaran pribadi & tips untuk kru kapal/guide",
          "Asuransi perjalanan pribadi",
        ],
        requirements: [
          "Kemampuan apnea/freediving minimal 10-15m dengan nyaman",
          "Pernah memiliki pengalaman handling speargun sebelumnya",
          "Wajib membawa dive knife pribadi dan peluit darurat",
          "Menandatangani lembar waiver dan kepatuhan aturan keselamatan laut",
        ],
        safetyNotes: [
          "Dilarang keras menembak ikan di luar batas legal ukuran dan jenis yang dilindungi",
          "Wajib mematuhi instruksi kapten terkait kondisi gelombang dan arus bawah",
          "Satu penyelam di dasar, satu buddy wajib mengawasi di permukaan",
        ],
        faqs: [
          {
            question: "Apakah peralatan speargun bisa disewa?",
            answer:
              "Kami menyediakan opsi sewa speargun dan fins dengan reservasi sebelumnya. Silakan konfirmasi ketersediaan ukuran saat konsultasi di WhatsApp.",
          },
          {
            question: "Bagaimana jika cuaca laut buruk?",
            answer:
              "Keamanan adalah prioritas utama kami. Jika kapten menilai kondisi laut tidak aman, rute akan dialihkan ke teluk yang terlindung atau jadwal di-reschedule sesuai kesepakatan.",
          },
        ],
      },
    },
  },
  {
    slug: "custom-spearfishing-charter",
    activity: "spearfishing",
    format: "custom",
    level: "all-levels",
    duration: "Flexible (1 – 5 Days on Request)",
    location: "Entire West Java Coastal & Offshore Zones",
    groupSize: "Custom Private Group",
    priceDisplay: "Custom Quote on Request",
    heroImage:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    translations: {
      en: {
        name: "Custom Private Spearfishing Charter",
        location: "Entire West Java Coastal & Offshore Zones",
        meetingPoint: "Flexible / Custom Pickup (Jakarta Airport, Anyer, or Pelabuhan Ratu)",
        startPoint: "Tailored Departure Pier (Anyer Marina / Merak / Sumur Ujung Kulon)",
        duration: "Flexible (1 – 5 Days on Request)",
        priceDisplay: "Custom Quote on Request",
        priceNote: "*Tailored to vessel type, group size, and custom hunting preferences",
        shortDescription:
          "Bespoke private spearfishing charters for hunting clubs, international spearos, or private teams with fully customized itineraries and vessel options.",
        description:
          "Design your dedicated spearfishing expedition across West Java with our specialist maritime crew. Choose vessel size, multi-day offshore routes, target species zones, and specialized onboard catering.",
        highlights: [
          "100% exclusive private vessel charter for your spearo team",
          "Targeted blue water pelagic zones or deep reef drop-offs",
          "Flexible departure timings and multi-day expedition durations",
          "Onboard cold storage & fresh catch preparation on demand",
          "Full logistical support from land transfer to offshore navigation",
        ],
        itinerary: [
          {
            dayOrTime: "Custom Schedule",
            title: "Tailored to Your Season & Target Pelagic Species",
            activities: [
              "Initial consultation via WhatsApp or Email Inquiry Form",
              "Custom maritime navigation plan and equipment provisioning",
              "Seamless execution with flexible in-field adjustments based on sea conditions",
            ],
          },
        ],
        inclusions: [
          "Dedicated private vessel & crew",
          "Certified safety spearo guides",
          "Marine permits & harbour logistics",
          "Expedition media documentation",
        ],
        exclusions: ["Customized based on agreed proposal"],
        requirements: ["Inquire at least 7 days prior to target departure date"],
        safetyNotes: ["All voyage plans subject to maritime weather verification"],
        faqs: [
          {
            question: "How do I book a Custom Spearfishing Expedition?",
            answer:
              "Submit a booking inquiry form or message us directly on WhatsApp. We will evaluate current ocean conditions and provide an all-inclusive custom proposal.",
          },
        ],
      },
      id: {
        name: "Custom Private Spearfishing Charter",
        location: "Seluruh Pesisir & Spot Karang Lepas Pantai Jawa Barat",
        meetingPoint: "Fleksibel / Sesuai Kesepakatan (Penjemputan Jakarta, Anyer, atau Pelabuhan Ratu)",
        startPoint: "Dermaga Pilihan (Marina Anyer / Merak / Sumur Ujung Kulon)",
        duration: "Fleksibel (1 – 5 Hari Sesuai Permintaan)",
        priceDisplay: "Penawaran Khusus via WhatsApp / Email",
        priceNote: "*Disesuaikan dengan armada kapal, durasi, logistik, dan fasilitas pilihan",
        shortDescription:
          "Layanan ekspedisi spearfishing privat dan charter perahu khusus untuk rombongan, komunitas, maupun spearo internasional dengan itinerary kustom.",
        description:
          "Rancang ekspedisi berburu bawah laut impian Anda bersama tim kami. Kami menyediakan perahu khusus, safety spearo lokal berpengalaman, ice box besar, katering laut segar, serta akses ke spot-spot terpencil.",
        highlights: [
          "Perahu charter privat 100% eksklusif untuk grup spearo Anda",
          "Bebas menentukan target spot (Blue water pelagis / Karang dalam)",
          "Jadwal keberangkatan dan durasi fleksibel",
          "Fasilitas koki perahu & cold storage penyimpanan ikan",
          "Dukungan logistik lengkap dari darat hingga laut lepas",
        ],
        itinerary: [
          {
            dayOrTime: "Custom Schedule",
            title: "Disusun Sesuai Preferensi Target & Musim Terbaik",
            activities: [
              "Konsultasi awal via WhatsApp untuk menentukan tujuan dan target",
              "Penyusunan rencana navigasi laut dan alokasi perlengkapan",
              "Pelaksanaan trip dengan fleksibilitas tinggi di lapangan",
            ],
          },
        ],
        inclusions: [
          "Dedicated Private Boat & Crew",
          "Safety Spearo Guides",
          "Logistik & Perizinan Laut Lokal",
          "Dokumentasi Foto & Video",
        ],
        exclusions: ["Sesuai kesepakatan rincian paket"],
        requirements: ["Konsultasi minimal H-7 sebelum tanggal keberangkatan"],
        safetyNotes: ["Semua rencana pelayaran disesuaikan dengan verifikasi kondisi cuaca maritim"],
        faqs: [
          {
            question: "Bagaimana cara memesan Custom Spearfishing Trip ini?",
            answer:
              "Klik tombol WhatsApp untuk terhubung langsung dengan koordinator ekspedisi kami.",
          },
        ],
      },
    },
  },

  // ==========================================
  // 2. FREEDIVING PACKAGES (2D1N, 3D2N, CUSTOM)
  // ==========================================
  {
    slug: "2d1n-freedive-depth-reef",
    activity: "freediving",
    format: "join-trip",
    level: "all-levels",
    duration: "2 Days / 1 Night",
    location: "West Java Island & Coral Reef",
    diveSiteSlug: "zona-dropoff-pulau",
    groupSize: "6 – 8 Freedivers per Group",
    priceDisplay: "Starting from IDR [Package Price] / Person",
    heroImage:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    schedules: [
      {
        id: "sch-freedive-2d1n-2026-10-17",
        dateDisplay: {
          en: "17 – 18 October 2026",
          id: "17 – 18 Oktober 2026",
        },
        startDate: "2026-10-17",
        endDate: "2026-10-18",
        maxParticipants: 8,
        remainingSpots: 5, // <-- Update manually when admin confirms booking
        note: {
          en: "Beginner & Intermediate Line Training",
          id: "Line Training Pemula & Lanjutan",
        },
      },
      {
        id: "sch-freedive-2d1n-2026-10-24",
        dateDisplay: {
          en: "24 – 25 October 2026",
          id: "24 – 25 Oktober 2026",
        },
        startDate: "2026-10-24",
        endDate: "2026-10-25",
        maxParticipants: 8,
        remainingSpots: 1, // <-- Only 1 spot remaining example
        note: {
          en: "Deep Water Equalization Workshop",
          id: "Workshop Ekualisasi Frenzel",
        },
      },
      {
        id: "sch-freedive-2d1n-2026-10-31",
        dateDisplay: {
          en: "31 Oct – 1 Nov 2026",
          id: "31 Okt – 1 Nov 2026",
        },
        startDate: "2026-10-31",
        endDate: "2026-11-01",
        maxParticipants: 8,
        remainingSpots: 6,
        note: {
          en: "Weekend Ocean Safari & Underwater Photoshoot",
          id: "Ocean Safari & Sesi Foto Bawah Laut",
        },
      },
    ],
    translations: {
      en: {
        name: "2D1N Freediving Depth Training & Reef Safari",
        location: "West Java Island & Coral Reef",
        meetingPoint: "Dermaga Wisata Paku Anyer / Sanghyang Basecamp, Banten",
        startPoint: "Paku Anyer Pier (30-min Boat Transit to Island Deep Wall)",
        duration: "2 Days / 1 Night",
        priceDisplay: "Starting from IDR [Package Price] / Person",
        shortDescription:
          "Weekend immersion combining structured buoy depth line coaching (up to 30m) with scenic reef safaris across West Java's outer island walls.",
        description:
          "The ultimate weekend blend of technical depth training and serene reef exploration. Led by certified freedive instructors, divers improve Frenzel equalization, streamlined posture, and mental calmness in warm tropical waters.",
        highlights: [
          "Certified line training station with depth buoys and counterweights (up to 30m)",
          "Frenzel equalization coaching and video movement analysis",
          "Reef safari along gorgonian sea fan drop-off walls",
          "High-resolution underwater photography & 4K video reel",
          "1 night comfortable beachside accommodation",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Dry Breathing Workshop & Depth Session 1",
            activities: [
              "08:30 - Basecamp rendezvous (Paku Anyer), dry stretching & yoga breathing",
              "10:00 - Transit to calm bay for training buoy station setup",
              "10:30 - Depth Line Session 1 (Free Immersion, CWT drills, posture checks)",
              "13:00 - Healthy lunch & video feedback debrief",
              "15:00 - Afternoon shallow coral reef fun dive",
              "17:30 - Beach sunset relaxation",
              "19:00 - Group dinner & apnea physiology discussion",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Reef Wall Safari & Underwater Photoshoot",
            activities: [
              "06:30 - Morning pranayama yoga & equalization warmup",
              "08:00 - Boat trip to island drop-off wall",
              "08:30 - Reef safari & professional underwater portrait session",
              "11:30 - Return to basecamp, shower, and closing lunch",
              "13:30 - Photo delivery & onward departure",
            ],
          },
        ],
        inclusions: [
          "1 night accommodation (comfortable AC / fan room)",
          "2 days boat trips and marine park fees",
          "Training buoys, bottom plates, safety lanyards, and weights",
          "Certified instructor coaching & safety supervision",
          "All meals, fresh tropical fruits, and drinking water",
          "High-res underwater photo & video gallery",
        ],
        exclusions: [
          "Land transfer to West Java meeting point",
          "Personal gear (mask, snorkel, long fins, wetsuit) - rental available",
          "Official agency certification upgrade fee (optional)",
        ],
        requirements: ["Able to swim unassisted in deep water", "Good ENT health without active barotrauma"],
        safetyNotes: ["Mandatory surface recovery intervals strictly enforced"],
        faqs: [
          {
            question: "Can I join without an existing freedive license?",
            answer:
              "Absolutely. We group divers by experience level, from discovery beginners to certified line divers.",
          },
        ],
      },
      id: {
        name: "2D1N Freediving Depth Training & Reef Safari",
        location: "Pulau & Terumbu Karang Jawa Barat",
        meetingPoint: "Dermaga Wisata Paku Anyer / Basecamp Pulau Sanghyang, Banten",
        startPoint: "Dermaga Paku Anyer (30 Menit Penyeberangan ke Drop-off Wall)",
        duration: "2 Hari / 1 Malam",
        priceDisplay: "Mulai dari IDR [Harga Paket] / Pax",
        shortDescription:
          "Trip akhir pekan freediving terpadu: sesi depth training di buoy line dengan pemandangan karang tropis dan dinding laut alami Jawa Barat.",
        description:
          "Gabungan sempurna antara latihan teknik kedalaman (depth line training) dan fun diving di terumbu karang eksotis. Peserta akan dibimbing oleh instruktur freedive tersertifikasi untuk meningkatkan equalization, posture, dan ketenangan mental.",
        highlights: [
          "Sesi Line Training dengan certified freediving buoy & depth lines (hingga 30m)",
          "Coaching ekualisasi Frenzel dan relaksasi pernapasan",
          "Fun dive reef safari di gugusan karang jernih",
          "Underwater photo & video session beresolusi tinggi",
          "Akomodasi 1 malam dekat pantai",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Breathing Workshop, Dry Stretching & Depth Session 1",
            activities: [
              "08:30 - Tiba di lokasi dermaga Anyer, perkenalan tim & stretching yoga",
              "10:00 - Menuju spot tenang untuk setup training buoy line",
              "10:30 - Sesi Line Training 1 (Warmup, Free Immersion, CWT drill)",
              "13:00 - Makan siang & debriefing video teknik penyelaman",
              "15:00 - Sesi Fun Dive sore mengitari formasi karang dangkal",
              "17:30 - Sunset chill di pinggir pantai",
              "19:00 - Dinner & sharing session seputar fisiologi apnea",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Reef Wall Safari & Underwater Photoshoot",
            activities: [
              "06:30 - Morning yoga & breathing exercise",
              "08:00 - Boat trip ke Drop-off Wall Spot",
              "08:30 - Sesi reef exploration & pengambilan foto/video underwater profesional",
              "11:30 - Kembali ke penginapan, bilas, dan makan siang",
              "13:30 - Penutupan trip, penyerahan file dokumentasi, dan perjalanan pulang",
            ],
          },
        ],
        inclusions: [
          "Akomodasi 1 malam (AC/Kipas nyaman)",
          "Boat trip selama 2 hari",
          "Training buoy, safety lines, dan weights/pemberat",
          "Coaching & pendampingan instruktur freedive",
          "Makan 4 kali + snack & kelapa muda",
          "High-res underwater photo & video gallery",
        ],
        exclusions: [
          "Transportasi ke meeting point Jawa Barat",
          "Peralatan pribadi (Mask, Snorkel, Long Fins, Wetsuit)",
          "Sertifikasi resmi (opsional jika ingin upgrade lisensi)",
        ],
        requirements: [
          "Bisa berenang santai di air dalam",
          "Sehat jasmani tanpa riwayat cedera barotrauma telinga aktif",
        ],
        safetyNotes: [
          "Wajib mematuhi jeda interval permukaan",
          "Tidak diperkenankan memaksakan kedalaman jika telinga terasa nyeri",
        ],
        faqs: [
          {
            question: "Apakah yang belum punya sertifikat freedive boleh ikut?",
            answer:
              "Sangat boleh! Kami membagi grup line training sesuai tingkat kemahiran, mulai dari discovery pemula hingga yang sudah berlisensi.",
          },
        ],
      },
    },
  },
  {
    slug: "3d2n-freediving-expedition",
    activity: "freediving",
    format: "join-trip",
    level: "intermediate",
    duration: "3 Days / 2 Nights",
    location: "Outer Islands & Marine Sanctuaries, West Java",
    diveSiteSlug: "zona-dropoff-pulau",
    groupSize: "6 – 8 Freedivers per Group",
    priceDisplay: "Starting from IDR [Package Price] / Person",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    schedules: [
      {
        id: "sch-freedive-3d2n-2026-10-23",
        dateDisplay: {
          en: "23 – 25 October 2026",
          id: "23 – 25 Oktober 2026",
        },
        startDate: "2026-10-23",
        endDate: "2026-10-25",
        maxParticipants: 8,
        remainingSpots: 3, // <-- Update manually
        note: {
          en: "Outer Sanctuary Expedition",
          id: "Ekspedisi Kepulauan Terluar",
        },
      },
      {
        id: "sch-freedive-3d2n-2026-11-13",
        dateDisplay: {
          en: "13 – 15 November 2026",
          id: "13 – 15 November 2026",
        },
        startDate: "2026-11-13",
        endDate: "2026-11-15",
        maxParticipants: 8,
        remainingSpots: 7,
        note: {
          en: "High Visibility Ocean Window",
          id: "Visibilitas Jernih & Kondisi Tenang",
        },
      },
    ],
    translations: {
      en: {
        name: "3D2N Outer Island Freediving & Ocean Safari",
        location: "Outer Islands & Marine Sanctuaries, West Java",
        meetingPoint: "Anyer Coast Basecamp / Sumur Harbour, Banten",
        startPoint: "Dermaga Wisata Anyer / Pelabuhan Sumur (Fastboat to Outer Marine Sanctuary)",
        duration: "3 Days / 2 Nights",
        priceDisplay: "Starting from IDR [Package Price] / Person",
        priceNote: "*Comprehensive package including 2 nights island stay & multi-spot boat trips",
        shortDescription:
          "Extended 3-day freediving expedition exploring deep drop-off walls, swim-through caves, and blue water clarity across West Java's outer marine sanctuaries.",
        description:
          "An immersive 3D2N expedition for freedivers seeking depth progression and breathtaking underwater topography. Train in calm deep water zones, explore vibrant coral pinnacles, and experience open ocean drifts with seasoned freedive instructors.",
        highlights: [
          "Multiple depth training buoy sessions (up to 35m+)",
          "Exploration of coral drop-offs, swim-throughs, and sea fan gardens",
          "Daily breathwork, equalization masterclasses, and mental relaxation",
          "2 nights oceanfront accommodation",
          "Professional underwater creative portrait & video sessions",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Arrival, Breathwork Workshop & Depth Line Session 1",
            activities: [
              "08:00 - Harbour rendezvous and scenic boat transit to island basecamp",
              "10:00 - Check-in, hydration & dry apnea stretching",
              "11:00 - Depth Line Training Session 1 (Free Immersion & Equalization Checks)",
              "13:30 - Island lunch & surface relaxation",
              "15:30 - Shallow reef exploration & buoyancy tuning",
              "19:00 - Welcome dinner & technical video review",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Deep Wall Safari, Blue Water Line & Sunset Photoshoot",
            activities: [
              "06:30 - Morning yoga, diaphragm stretching & pranayama",
              "08:00 - Boat trip to outer oceanic drop-off wall",
              "08:30 - Depth Line Training Session 2 (CWT / Bi-fins depth progression)",
              "12:30 - Onboard lunch & hydration",
              "14:30 - Outer reef wall safari & underwater photo sessions",
              "17:30 - Sunset cruise return",
              "19:30 - Beachside BBQ dinner",
            ],
          },
          {
            dayOrTime: "Day 3",
            title: "Morning Fun Dive, Media Delivery & Return",
            activities: [
              "07:00 - Fun dive along coral garden swim-throughs",
              "10:00 - Gear rinse, packing, and late breakfast",
              "12:00 - Media handover & boat transit back to main harbour",
            ],
          },
        ],
        inclusions: [
          "2 nights accommodation (air-conditioned oceanfront room)",
          "All boat expeditions and marine entrance permits",
          "Full training buoy setup, counterweights, and lanyards",
          "Certified freedive instructor coaching & safety divers",
          "All meals, snacks, fresh fruit, and drinking water",
          "High-res underwater photo & 4K video reel",
        ],
        exclusions: [
          "Land transport to harbour meeting point",
          "Personal freediving gear (rental available upon request)",
          "Optional official certification fees",
        ],
        requirements: ["Able to swim in open ocean", "Medical fitness for freediving activities"],
        safetyNotes: ["Strict safety protocol: never dive alone; surface recovery monitored"],
        faqs: [
          {
            question: "Can I do my Level 2 / Advanced Freediver certification on this trip?",
            answer:
              "Yes, certification course upgrades (AIDA / SSI / Molchanovs) can be arranged with prior confirmation.",
          },
        ],
      },
      id: {
        name: "3D2N Outer Island Freediving & Ocean Safari",
        location: "Gugusan Pulau Luar & Kawasan Konservasi Jawa Barat",
        meetingPoint: "Basecamp Pesisir Anyer / Pelabuhan Sumur, Banten",
        startPoint: "Dermaga Wisata Anyer / Pelabuhan Sumur (Fastboat ke Kawasan Konservasi)",
        duration: "3 Hari / 2 Malam",
        priceDisplay: "Mulai dari IDR [Harga Paket] / Pax",
        priceNote: "*Paket lengkap mencakup 2 malam penginapan & boat trip multi-spot",
        shortDescription:
          "Ekspedisi freediving 3 hari 2 malam menjelajahi drop-off karang dalam, gua terumbu, dan perairan jernih di kepulauan terluar Jawa Barat.",
        description:
          "Ekspedisi freediving 3D2N yang mendalam untuk meningkatkan kedalaman dan menikmati topografi bawah laut spektakuler. Latihan di perairan tenang berkedalaman tinggi, eksplorasi karang alami, dan sesi foto profesional bersama instruktur berpengalaman.",
        highlights: [
          "Sesi Line Training bertingkat hingga kedalaman 35m+",
          "Eksplorasi dinding karang curam, swim-throughs, dan taman sea fan",
          "Workshop pernapasan harian & perbaikan teknik Frenzel",
          "Akomodasi 2 malam di tepi laut",
          "Dokumentasi foto potret underwater & video reel kreatif 4K",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Kedatangan, Workshop Pernapasan & Depth Session 1",
            activities: [
              "08:00 - Kumpul di dermaga dan penyeberangan ke basecamp pulau",
              "10:00 - Check-in, hidrasi & sesi dry apnea stretching",
              "11:00 - Sesi Line Training 1 (Free Immersion & Cek Ekualisasi)",
              "13:30 - Makan siang pulau & istirahat",
              "15:30 - Fun dive karang dangkal & penyetelan timah/buoyancy",
              "19:00 - Makan malam & review video teknik menyelam",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Deep Wall Safari, Sesi Kedalaman 2 & Sunset Photoshoot",
            activities: [
              "06:30 - Morning yoga, peregangan diafragma & pranayama",
              "08:00 - Menuju spot drop-off wall luar pulau",
              "08:30 - Sesi Line Training 2 (Progress kedalaman CWT / Bi-fins)",
              "12:30 - Makan siang di atas perahu",
              "14:30 - Sesi eksplorasi reef wall & photoshoot underwater",
              "17:30 - Menikmati sunset di atas perahu",
              "19:30 - Makan malam BBQ tepi pantai",
            ],
          },
          {
            dayOrTime: "Day 3",
            title: "Morning Fun Dive, Penyerahan Foto & Kepulangan",
            activities: [
              "07:00 - Sesi fun dive santai di taman karang pulau",
              "10:00 - Cuci alat, packing, dan sarapan",
              "12:00 - Penyerahan file foto/video dan penyeberangan kembali ke pelabuhan utama",
            ],
          },
        ],
        inclusions: [
          "Akomodasi 2 malam (Kamar AC tepi pantai)",
          "Perahu ekspedisi selama 3 hari dan izin kawasan laut",
          "Training buoy lengkap, bottom plate, lanyard pengaman & pemberat",
          "Bimbingan instruktur freedive bersertifikat",
          "Semua makan, snack, buah segar, dan air mineral",
          "Galeri foto & video underwater resolusi tinggi",
        ],
        exclusions: [
          "Transportasi darat ke pelabuhan meeting point",
          "Peralatan freediving pribadi (tersedia rental jika dibutuhkan)",
          "Biaya sertifikasi lisensi resmi jika ingin upgrade",
        ],
        requirements: ["Bisa berenang di laut lepas", "Sehat fisik dan siap menyelam"],
        safetyNotes: ["Wajib mematuhi SOP keselamatan freediving dan selalu didampingi buddy"],
        faqs: [
          {
            question: "Apakah bisa mengambil lisensi sertifikasi pada trip ini?",
            answer:
              "Bisa! Anda dapat mengambil sertifikasi lanjutan (AIDA/SSI/Molchanovs) dengan memberitahukan tim kami saat booking.",
          },
        ],
      },
    },
  },
  {
    slug: "custom-freediving-charter",
    activity: "freediving",
    format: "custom",
    level: "all-levels",
    duration: "Flexible (1 – 5 Days on Request)",
    location: "Selected Islands & Bays, West Java",
    groupSize: "Custom Private Group",
    priceDisplay: "Custom Quote on Request",
    heroImage:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    translations: {
      en: {
        name: "Custom Private Freediving Charter",
        location: "Selected Islands & Bays, West Java",
        meetingPoint: "Flexible / Custom Arranged (Jakarta Airport, Anyer, or Carita)",
        startPoint: "Private Pier Anyer / Karangantu (Exclusive Charter Vessel)",
        duration: "Flexible (1 – 5 Days on Request)",
        priceDisplay: "Custom Quote on Request",
        priceNote: "*Tailored to group size, private instructor ratio, and destination itinerary",
        shortDescription:
          "Bespoke private freediving expeditions tailored for dive clubs, underwater content creators, families, or private depth clinics.",
        description:
          "Enjoy complete freedom on the water with a dedicated private boat, certified private instructors, custom buoy setups, and flexible daily schedules tailored to your team's specific goals.",
        highlights: [
          "100% private boat charter dedicated to your freedive group",
          "Custom buoy lines configured to your preferred depths",
          "Dedicated underwater photographer/videographer included",
          "Flexible training hours tailored to tides and visibility",
          "Full logistical coordination from harbor pickup to ocean safety",
        ],
        itinerary: [
          {
            dayOrTime: "Custom Schedule",
            title: "Personalized Daily Schedule & Spot Selection",
            activities: [
              "Pre-trip consultation to establish depth and exploration goals",
              "Private vessel navigation to optimal sheltered bays and deep walls",
              "Tailored training and creative underwater shoots",
            ],
          },
        ],
        inclusions: [
          "Private vessel & crew",
          "Certified freedive instructor / safety divers",
          "Full buoy & safety line setup",
          "Custom catering & hydration provisions",
          "Expedition photography & 4K video reel",
        ],
        exclusions: ["Customized based on agreed proposal"],
        requirements: ["Inquire at least 7 days prior to target departure date"],
        safetyNotes: ["All sea departures verified against oceanographic forecasts"],
        faqs: [
          {
            question: "Can we book a private charter for an underwater photoshoot?",
            answer:
              "Yes! We regularly host content creators and model freedivers with specialized underwater lighting and media crew.",
          },
        ],
      },
      id: {
        name: "Custom Private Freediving Charter",
        location: "Pulau & Teluk Pilihan di Jawa Barat",
        meetingPoint: "Fleksibel / Sesuai Kesepakatan (Penjemputan Bandara Jakarta, Anyer, atau Carita)",
        startPoint: "Dermaga Privat Anyer / Karangantu (Armada Kapal Eksklusif)",
        duration: "Fleksibel (1 – 5 Hari Sesuai Permintaan)",
        priceDisplay: "Penawaran Khusus via WhatsApp / Email",
        priceNote: "*Disesuaikan dengan jumlah peserta, instruktur privat, dan rute pilihan",
        shortDescription:
          "Layanan charter perahu freediving privat untuk klub selam, konten kreator bawah laut, keluarga, maupun klinik pelatihan kedalaman privat.",
        description:
          "Nikmati kenyamanan maksimal dengan perahu privat, instruktur freediving khusus, setup buoy fleksibel, dan jadwal harian yang disesuaikan sepenuhnya dengan target grup Anda.",
        highlights: [
          "Perahu sewa privat 100% eksklusif untuk grup Anda",
          "Kedalaman buoy line disesuaikan dengan permintaan",
          "Didampingi fotografer & videografer underwater khusus",
          "Jadwal latihan fleksibel mengikuti kondisi arus dan visibilitas terbaik",
          "Koordinasi logistik lengkap dari penjemputan hingga keamanan laut",
        ],
        itinerary: [
          {
            dayOrTime: "Custom Schedule",
            title: "Disusun Sesuai Target Kedalaman & Liburan Anda",
            activities: [
              "Konsultasi awal untuk menentukan spot dan target latihan",
              "Navigasi perahu privat ke teluk tenang dan dinding karang eksotis",
              "Sesi latihan privat dan dokumentasi visual kreatif",
            ],
          },
        ],
        inclusions: [
          "Private Boat & Kapten Khusus",
          "Instruktur Freedive Privat & Safety Divers",
          "Training Buoy & Safety Setup Lengkap",
          "Konsumsi & Katering Pilihan",
          "Dokumentasi Foto & Video 4K",
        ],
        exclusions: ["Sesuai kesepakatan proposal paket"],
        requirements: ["Konsultasi minimal H-7 sebelum tanggal keberangkatan"],
        safetyNotes: ["Rute disesuaikan dengan kondisi maritim terkini"],
        faqs: [
          {
            question: "Apakah bisa menyewa charter privat untuk photoshoot underwater?",
            answer:
              "Bisa banget! Kami sering memfasilitasi kreator konten dan fotografer bawah laut dengan kru berpengalaman.",
          },
        ],
      },
    },
  },

  // ==========================================
  // 3. SCUBA DIVING PACKAGES (2D1N, 3D2N, CUSTOM)
  // ==========================================
  {
    slug: "2d1n-scuba-diving-safari",
    activity: "scuba-diving",
    format: "join-trip",
    level: "intermediate",
    duration: "2 Days / 1 Night (4 Logged Dives)",
    location: "West Java Island & Wall Dives",
    diveSiteSlug: "zona-dropoff-pulau",
    groupSize: "4 – 8 Certified Divers",
    priceDisplay: "Starting from IDR [Package Price] / Person",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    schedules: [
      {
        id: "sch-scuba-2d1n-2026-10-17",
        dateDisplay: {
          en: "17 – 18 October 2026",
          id: "17 – 18 Oktober 2026",
        },
        startDate: "2026-10-17",
        endDate: "2026-10-18",
        maxParticipants: 8,
        remainingSpots: 4, // <-- Update manually when admin confirms booking
        note: {
          en: "4 Boat Dives • Coral Garden & Wall Safari",
          id: "4 Log Dives • Taman Karang & Dinding Laut",
        },
      },
      {
        id: "sch-scuba-2d1n-2026-10-24",
        dateDisplay: {
          en: "24 – 25 October 2026",
          id: "24 – 25 Oktober 2026",
        },
        startDate: "2026-10-24",
        endDate: "2026-10-25",
        maxParticipants: 8,
        remainingSpots: 2, // <-- Limited spots example
        note: {
          en: "Macro & Gorgonian Wall Session",
          id: "Sesi Makro & Wall Gorgonian",
        },
      },
    ],
    translations: {
      en: {
        name: "2D1N Scuba Diving Reef & Drop-Off Safari",
        location: "West Java Island & Wall Dives",
        meetingPoint: "West Java Dive Basecamp, Anyer / Marina Paku",
        startPoint: "Dermaga Marina Anyer (Equipped Scuba Boat with Medical O2)",
        duration: "2 Days / 1 Night (4 Logged Dives)",
        priceDisplay: "Starting from IDR [Package Price] / Person",
        shortDescription:
          "4 guided boat dives exploring pristine coral gardens, swim-throughs, and dramatic sea fan drop-off walls across West Java.",
        description:
          "An ideal weekend scuba getaway for certified divers (Open Water and Advanced). Discover uncrowded dive sites with rich biodiversity, healthy coral plateaus, and macro life escorted by small-ratio Divemasters.",
        highlights: [
          "4 planned boat dives with medical-grade clean air tanks",
          "Maximum 4 divers per Divemaster ratio",
          "Pristine sea fan walls, coral gardens, and drift channels",
          "1 night comfortable accommodation close to departure dock",
          "Post-dive logbook stamping and species debriefing",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Check-in, Equipment Setup & Dive 1 + Dive 2",
            activities: [
              "08:00 - Basecamp arrival (Anyer), certification card check & logbook review",
              "09:00 - Boat loading and dive site profile briefing",
              "10:00 - Dive 1: Coral Garden Reef (Max 18m, 45-50 mins)",
              "11:30 - Island surface interval + lunch",
              "13:30 - Dive 2: Wall Slope & Macro Spot (Max 22m, 45 mins)",
              "15:30 - Harbour return, gear freshwater rinse, and leisure time",
              "19:00 - Group dinner & logbook signing",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Morning Dive 3 + Dive 4 & Departure",
            activities: [
              "07:30 - Breakfast & boat loading",
              "08:30 - Dive 3: Outer Drop-off Drift Dive (Max 25m)",
              "10:00 - Surface interval & fresh snacks",
              "11:00 - Dive 4: Shallow Pinnacle Reef (Max 15m)",
              "13:00 - Lunch, gear packing, and wrap-up (fulfilling standard No-Fly interval)",
            ],
          },
        ],
        inclusions: [
          "4 boat dives with aluminum 80 cu ft tanks + weights",
          "Certified professional Divemaster guide",
          "1 night accommodation (AC, twin share)",
          "All meals during trip + coffee/tea/water on boat",
          "Conservation and harbour permits",
        ],
        exclusions: [
          "Land transportation to West Java meeting harbour",
          "Full scuba set rental (BCD, Reg, Wetsuit, Fins) - available for hire",
          "Dive computer rental",
          "Crew gratuities",
        ],
        requirements: [
          "Open Water Diver certification minimum",
          "At least 5 logged dives and medical fitness",
        ],
        safetyNotes: [
          "Mandatory 3-minute safety stop at 5m on every dive",
          "Strict 18–24 hour No-Fly interval prior to flights",
        ],
        faqs: [
          {
            question: "Can I rent a full scuba gear set?",
            answer: "Yes, well-maintained BCDs, regulators, wetsuits, and computers are available for hire.",
          },
        ],
      },
      id: {
        name: "2D1N Scuba Diving Reef & Drop-Off Safari",
        location: "Dinding Karang & Drop-Off Pulau Jawa Barat",
        meetingPoint: "Basecamp Dive Center Anyer / Dermaga Marina Paku, Banten",
        startPoint: "Dermaga Marina Anyer (Kapal Khusus Scuba Lengkap O2 Medis)",
        duration: "2 Hari / 1 Malam (4 Logged Dives)",
        priceDisplay: "Mulai dari IDR [Harga Paket] / Pax",
        shortDescription:
          "Eksplorasi scuba diving 4 logs selama akhir pekan mengunjungi karang sehat, gorgonian sea fans, dan drop-off wall spektakuler Jawa Barat.",
        description:
          "Trip scuba diving akhir pekan dirancang untuk certified divers (Open Water / Advanced). Nikmati keindahan bawah laut dengan visibilitas menawan, macro life, dan formasi terumbu karang tropis tanpa kerumunan turis.",
        highlights: [
          "4 kali penyelaman terencana (Boat Dive)",
          "Rasio maksimal 4 diver per 1 Divemaster berpengalaman",
          "Spot drop-off wall, coral garden, dan swim-throughs",
          "Tabung udara bersih standar medis & fasilitas bilas gear",
          "Penginapan 1 malam nyaman dekat pelabuhan",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Check-in, Gear Setup & Dive 1 + Dive 2",
            activities: [
              "08:00 - Tiba di basecamp Anyer, verifikasi kartu sertifikasi & logbook",
              "09:00 - Loading perahu dan briefing profil dive site",
              "10:00 - Dive 1: Coral Garden Reef (Max 18m, 45-50 min)",
              "11:30 - Surface interval di pulau / perahu + makan siang",
              "13:30 - Dive 2: Wall Slope & Macro Spot (Max 22m, 45 min)",
              "15:30 - Kembali ke darat, cuci gear, dan santai di dive center",
              "19:00 - Dinner & logbook signing session",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Morning Dive 3 + Dive 4 & Departure",
            activities: [
              "07:30 - Sarapan & loading boat",
              "08:30 - Dive 3: Outer Drop-off & Drift Dive (Max 25m)",
              "10:00 - Surface interval & fresh snacks",
              "11:00 - Dive 4: Shallow Pinnacle Exploration (Max 15m)",
              "13:00 - Makan siang, packing gear, logbook wrap up",
              "15:00 - Siap kembali ke kota asal (memenuhi jeda No-Fly time)",
            ],
          },
        ],
        inclusions: [
          "4x Boat Dives dengan tabung aluminium 80 cu ft + timah",
          "Divemaster bersertifikat profesional",
          "Akomodasi 1 malam (AC, Twin share)",
          "Makan selama trip & air mineral/kopi/teh di kapal",
          "Tiket kawasan konservasi/dermaga",
          "Dokumentasi foto",
        ],
        exclusions: [
          "Transportasi darat ke meeting point Jawa Barat",
          "Sewa set alat Scuba (BCD, Reg, Wetsuit, Mask/Fins) - tersedia paket sewa",
          "Dive Computer (wajib bawa atau sewa)",
          "Tips untuk dive crew",
        ],
        requirements: [
          "Wajib menunjukkan kartu sertifikasi Scuba (Open Water / Advanced)",
          "Minimal 5 logged dives dan sehat secara medis",
        ],
        safetyNotes: [
          "Wajib mematuhi safety stop 3 menit di kedalaman 5 meter",
          "Wajib memperhatikan batas No-Fly Time 18–24 jam sebelum penerbangan pulang",
        ],
        faqs: [
          {
            question: "Apakah saya bisa menyewa satu set alat Scuba lengkap?",
            answer:
              "Bisa, kami menyediakan rental scuba set lengkap (BCD, Regulator, Wetsuit, Mask, Fins, dan Dive Computer) yang selalu diservis berkala.",
          },
        ],
      },
    },
  },
  {
    slug: "3d2n-scuba-diving-expedition",
    activity: "scuba-diving",
    format: "join-trip",
    level: "intermediate",
    duration: "3 Days / 2 Nights (6 Logged Dives + 1 Night Dive)",
    location: "Outer Islands, Wrecks & Pinnacles, West Java",
    diveSiteSlug: "zona-pinnacle-selatan",
    groupSize: "4 – 8 Certified Divers",
    priceDisplay: "Starting from IDR [Package Price] / Person",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    schedules: [
      {
        id: "sch-scuba-3d2n-2026-10-23",
        dateDisplay: {
          en: "23 – 25 October 2026",
          id: "23 – 25 Oktober 2026",
        },
        startDate: "2026-10-23",
        endDate: "2026-10-25",
        maxParticipants: 8,
        remainingSpots: 4, // <-- Update manually
        note: {
          en: "7 Planned Dives (Including Night Dive)",
          id: "7 Kali Penyelaman Termasuk Night Dive",
        },
      },
      {
        id: "sch-scuba-3d2n-2026-11-20",
        dateDisplay: {
          en: "20 – 22 November 2026",
          id: "20 – 22 November 2026",
        },
        startDate: "2026-11-20",
        endDate: "2026-11-22",
        maxParticipants: 8,
        remainingSpots: 6,
        note: {
          en: "Deep Wall & Offshore Pinnacle",
          id: "Spot Dinding Karang & Pinnacle Luar",
        },
      },
    ],
    translations: {
      en: {
        name: "3D2N Deep Wall & Offshore Pinnacle Scuba Safari",
        location: "Outer Islands, Wrecks & Pinnacles, West Java",
        meetingPoint: "Anyer Dive Marina Basecamp / Pelabuhan Merak, Banten",
        startPoint: "Dermaga Marina Anyer (Long-range Scuba Expedition Vessel)",
        duration: "3 Days / 2 Nights (6 Logged Dives + 1 Night Dive)",
        priceDisplay: "Starting from IDR [Package Price] / Person",
        priceNote: "*Includes 7 total dives, full tank fills, and 2 nights island accommodation",
        shortDescription:
          "Comprehensive 3D2N scuba expedition featuring 7 logged boat dives across oceanic pinnacles, outer reef walls, and an unforgettable night dive.",
        description:
          "Experience the best scuba diving West Java has to offer. This multi-day safari takes certified divers to deep drop-offs, dynamic drift channels, and pristine coral formations teeming with schooling fish and macro critters.",
        highlights: [
          "7 guided dives (including 1 exciting night dive)",
          "Exclusive dive sites: Offshore Pinnacles and deep coral walls",
          "Small group ratio: maximum 4 divers per Divemaster",
          "2 nights accommodation near the ocean",
          "Professional dive briefings, logbook logging, and underwater photography",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Arrival, Briefing, Dives 1 & 2 + Night Dive",
            activities: [
              "08:00 - Harbour basecamp arrival (Anyer), gear setup & dive profile briefing",
              "09:30 - Dive 1: Check-out Coral Garden Reef (Max 18m)",
              "12:00 - Surface interval lunch on island",
              "14:00 - Dive 2: Outer Island Wall (Max 24m)",
              "17:00 - Return to basecamp, sunset rest",
              "19:00 - Dive 3: Guided Night Dive (Bioluminescence & Crustaceans)",
              "20:30 - Dinner & logbook signing",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Offshore Pinnacle Expeditions (Dives 4, 5 & 6)",
            activities: [
              "07:00 - Breakfast & boat loading",
              "08:30 - Dive 4: Deep Pinnacle Drift Dive (Max 28m - Pelagic fish encounters)",
              "11:00 - Dive 5: Submerged Ridge & Gorgonian Fans (Max 22m)",
              "13:00 - Hot lunch & rest at protected bay",
              "15:00 - Dive 6: Sloping Reef & Macro Safari (Max 16m)",
              "17:30 - Return to basecamp & gear wash",
              "19:30 - Island BBQ dinner & marine biology discussion",
            ],
          },
          {
            dayOrTime: "Day 3",
            title: "Morning Island Exploration & Departure",
            activities: [
              "08:00 - Relaxed breakfast & beach walk (observing standard 24-hr No-Fly interval)",
              "10:30 - Gear drying, packing, and final logbook verification",
              "12:00 - Check-out & boat transit back to main harbour",
            ],
          },
        ],
        inclusions: [
          "7 boat dives with clean air tanks and weights",
          "Professional certified Divemaster guidance",
          "2 nights comfortable accommodation",
          "All meals, snacks, and boat refreshments",
          "Marine park entry fees and port taxes",
          "High-res underwater photo package",
        ],
        exclusions: [
          "Land transfers to harbour meeting point",
          "Scuba gear set hire (available on request)",
          "Dive torch rental for night dive",
          "Crew tips",
        ],
        requirements: [
          "Advanced Open Water (or Open Water with 15+ logged dives)",
          "Night dive experience (or briefing orientation on site)",
        ],
        safetyNotes: ["Strict computer-guided diving and mandatory surface intervals"],
        faqs: [
          {
            question: "Is Night Dive torch included?",
            answer:
              "Primary and backup dive torches can be rented at the dive shop before departure.",
          },
        ],
      },
      id: {
        name: "3D2N Deep Wall & Offshore Pinnacle Scuba Safari",
        location: "Gugusan Karang Lepas Pantai & Wall Drop-Off Jawa Barat",
        meetingPoint: "Basecamp Dive Marina Anyer / Pelabuhan Merak, Banten",
        startPoint: "Dermaga Marina Anyer (Kapal Ekspedisi Scuba Jarak Jauh)",
        duration: "3 Hari / 2 Malam (6 Logged Dives + 1 Night Dive)",
        priceDisplay: "Mulai dari IDR [Harga Paket] / Pax",
        priceNote: "*Total 7 dives terencana, tabung udara penuh, dan 2 malam penginapan",
        shortDescription:
          "Ekspedisi scuba diving 3 hari 2 malam terlengkap: 7 penyelaman di pinnacle lepas pantai, dinding karang dalam, dan 1 sesi night dive.",
        description:
          "Rasakan pengalaman scuba diving terbaik di Jawa Barat. Safari multi-hari ini membawa certified divers menuju drop-off dramatis, drift diving arus terencana, dan terumbu karang kaya biota pelagis serta macro laut eksotis.",
        highlights: [
          "7 kali penyelaman terpandu (Termasuk 1 kali Night Dive yang memukau)",
          "Akses ke spot unggulan: Offshore Pinnacle dan Wall Dive dalam",
          "Rasio eksklusif: maksimal 4 diver per 1 Divemaster",
          "Penginapan 2 malam nyaman dekat pantai",
          "Briefing profil komprehensif, tanda tangan logbook, dan foto underwater",
        ],
        itinerary: [
          {
            dayOrTime: "Day 1",
            title: "Kedatangan, Briefing, Dive 1 & 2 + Night Dive",
            activities: [
              "08:00 - Tiba di basecamp Anyer, pasang gear & briefing profil penyelaman",
              "09:30 - Dive 1: Coral Garden Check-out Dive (Max 18m)",
              "12:00 - Makan siang di pulau & surface interval",
              "14:00 - Dive 2: Outer Island Wall (Max 24m)",
              "17:00 - Kembali ke basecamp & istirahat senja",
              "19:00 - Dive 3: Night Dive Terpandu (Bioluminescence & Krustasea malam)",
              "20:30 - Makan malam & pengisian logbook",
            ],
          },
          {
            dayOrTime: "Day 2",
            title: "Offshore Pinnacle Expeditions (Dive 4, 5 & 6)",
            activities: [
              "07:00 - Sarapan pagi & loading perahu",
              "08:30 - Dive 4: Deep Pinnacle Drift Dive (Max 28m - Pelagis & Arus Segar)",
              "11:00 - Dive 5: Submerged Ridge & Gorgonian Fans (Max 22m)",
              "13:00 - Makan siang hangat di teluk terlindung",
              "15:00 - Dive 6: Sloping Reef & Macro Safari (Max 16m)",
              "17:30 - Kembali ke basecamp & bilas peralatan menyelam",
              "19:30 - Makan malam BBQ pulau & santai bersama tim",
            ],
          },
          {
            dayOrTime: "Day 3",
            title: "Santai di Pulau, Packing & Kepulangan",
            activities: [
              "08:00 - Sarapan santai & jalan pagi (memenuhi batas aman 24 jam No-Fly Time)",
              "10:30 - Pengeringan gear, packing, dan verifikasi akhir logbook",
              "12:00 - Check-out & penyeberangan kembali ke pelabuhan darat",
            ],
          },
        ],
        inclusions: [
          "7x Boat Dives dengan tabung aluminium 80 cu ft & timah",
          "Panduan Divemaster bersertifikat profesional",
          "Akomodasi 2 malam (Kamar AC nyaman)",
          "Semua makan, snack, dan air mineral/kopi di kapal",
          "Tiket konservasi dan biaya pelabuhan",
          "Paket dokumentasi foto underwater",
        ],
        exclusions: [
          "Transportasi darat ke meeting point Jawa Barat",
          "Sewa set alat Scuba (BCD, Reg, Wetsuit, Fins)",
          "Sewa senter menyelam untuk Night Dive",
          "Tips kru kapal",
        ],
        requirements: [
          "Sertifikasi Advanced Open Water (atau Open Water dengan 15+ logged dives)",
          "Pengalaman night dive (atau orientasi briefing di lokasi)",
        ],
        safetyNotes: ["Wajib menyelam menggunakan dive computer dan mematuhi safety stop"],
        faqs: [
          {
            question: "Apakah senter Night Dive disediakan?",
            answer:
              "Senter utama dan cadangan untuk Night Dive dapat disewa di dive shop sebelum berangkat.",
          },
        ],
      },
    },
  },
  {
    slug: "custom-scuba-diving-charter",
    activity: "scuba-diving",
    format: "custom",
    level: "all-levels",
    duration: "Flexible (1 – 5 Days on Request)",
    location: "All Certified Scuba Sites Across West Java",
    groupSize: "Custom Private Group",
    priceDisplay: "Custom Quote on Request",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    ],
    isFeatured: true,
    available: true,
    translations: {
      en: {
        name: "Custom Private Scuba Dive Charter",
        location: "All Certified Scuba Sites Across West Java",
        meetingPoint: "Flexible / Custom Arranged (Airport Transfer, Anyer, or Carita)",
        startPoint: "Private Scuba Pier Anyer / Karangantu (Dedicated Scuba Vessel)",
        duration: "Flexible (1 – 5 Days on Request)",
        priceDisplay: "Custom Quote on Request",
        priceNote: "*Tailored to dive club requirements, custom dive count, and private boat charter",
        shortDescription:
          "Exclusive private boat charter for scuba dive centers, clubs, family diving holidays, or dedicated underwater macro & wide-angle photographers.",
        description:
          "Plan a completely personalized scuba diving expedition across West Java. From dedicated compressor setups to custom dive schedules, private Divemasters, and tailored catering, we manage all logistics for your team.",
        highlights: [
          "100% exclusive private scuba vessel for your group",
          "Custom number of dives per day and flexible site selections",
          "Private Divemasters and dedicated tank compressor logistics",
          "Ideal for underwater photography workshops and dive clubs",
          "Full logistical support including tank fills, equipment rinse, and island stays",
        ],
        itinerary: [
          {
            dayOrTime: "Custom Schedule",
            title: "Custom Dive Itinerary Tailored to Your Group",
            activities: [
              "Pre-trip consultation on dive objectives (Wreck, Macro, Walls, or Photography)",
              "Custom maritime dive plan with dedicated vessel and tank compressor setup",
              "Private execution with flexible bottom times and surface intervals",
            ],
          },
        ],
        inclusions: [
          "Dedicated private scuba boat & crew",
          "Private certified Divemasters",
          "Tank fills (Air / Nitrox on request) & weights",
          "Custom catering & refreshments",
          "Expedition media documentation",
        ],
        exclusions: ["Tailored based on agreed proposal"],
        requirements: ["Inquire at least 7 days prior to target departure date"],
        safetyNotes: ["All dive plans comply with standard recreational scuba safety guidelines"],
        faqs: [
          {
            question: "Can we arrange Nitrox fills on a custom charter?",
            answer:
              "Yes, Nitrox fills can be arranged in advance for enriched air certified divers.",
          },
        ],
      },
      id: {
        name: "Custom Private Scuba Dive Charter",
        location: "Seluruh Titik Selam Scuba di Jawa Barat",
        meetingPoint: "Fleksibel / Sesuai Kesepakatan (Penjemputan Bandara, Anyer, atau Carita)",
        startPoint: "Dermaga Privat Anyer / Karangantu (Kapal Khusus Scuba Terdedikasi)",
        duration: "Fleksibel (1 – 5 Hari Sesuai Permintaan)",
        priceDisplay: "Penawaran Khusus via WhatsApp / Email",
        priceNote: "*Disesuaikan dengan kebutuhan klub selam, jumlah dive, dan armada kapal pilihan",
        shortDescription:
          "Layanan charter perahu scuba privat eksklusif untuk dive center, komunitas klub selam, liburan keluarga, maupun fotografer bawah laut.",
        description:
          "Rancang ekspedisi scuba diving privat Anda di Jawa Barat. Mulai dari jadwal menyelam fleksibel, Divemaster privat, penyediaan kompresor tabung khusus, hingga katering personal.",
        highlights: [
          "Perahu scuba charter privat 100% eksklusif untuk rombongan Anda",
          "Bebas menentukan jumlah penyelaman harian dan pemilihan spot",
          "Divemaster privat & logistik pengisian tabung terdedikasi",
          "Sangat ideal untuk workshop fotografi bawah laut & klub selam",
          "Dukungan logistik penuh: tabung, bilas alat, dan penginapan",
        ],
        itinerary: [
          {
            dayOrTime: "Custom Schedule",
            title: "Itinerary Fleksibel Sesuai Target Menyelam Anda",
            activities: [
              "Konsultasi awal untuk menentukan fokus penyelaman (Wall, Macro, atau Fotografi)",
              "Penyusunan rencana navigasi perahu privat dan alokasi tabung udara",
              "Pelaksanaan trip dengan waktu menyelam dan surface interval yang santai",
            ],
          },
        ],
        inclusions: [
          "Perahu Scuba Privat & Kru",
          "Divemaster Bersertifikat Privat",
          "Tabung Udara & Pemberat",
          "Katering & Konsumsi Sesuai Permintaan",
          "Dokumentasi Foto & Video",
        ],
        exclusions: ["Sesuai kesepakatan proposal paket"],
        requirements: ["Konsultasi minimal H-7 sebelum tanggal keberangkatan"],
        safetyNotes: ["Semua rencana mematuhi standar keselamatan rekreasi scuba diving"],
        faqs: [
          {
            question: "Apakah bisa menyediakan tabung Nitrox pada custom charter?",
            answer:
              "Bisa, pengisian tabung Nitrox dapat disiapkan sebelumnya untuk penyelam yang memiliki sertifikasi Enriched Air Nitrox.",
          },
        ],
      },
    },
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES_DATA.find((pkg) => pkg.slug === slug);
}

export function getFeaturedPackages(): Package[] {
  return PACKAGES_DATA.filter((pkg) => pkg.isFeatured);
}
