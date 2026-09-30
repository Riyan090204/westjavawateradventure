import { DiveSite } from "@/types/dive-site";

export const DIVE_SITES_DATA: DiveSite[] = [
  {
    slug: "zona-pesisir-karang",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    activities: ["spearfishing", "freediving", "scuba-diving"],
    relatedPackageSlugs: [
      "2d1n-spearfishing-trip",
      "2d1n-freedive-depth-reef",
      "2d1n-scuba-diving-safari",
    ],
    divePoints: [
      {
        id: "dp-1a",
        depthRange: "3 – 8 Meters",
        currentLevel: "Gentle",
        visibilityRange: "8 – 15 Meters",
        suitableActivities: ["freediving", "scuba-diving", "spearfishing"],
        translations: {
          en: {
            name: "[Dive Point 1] - Shallow Coral Garden",
            bottomType: "Hard & Soft Coral, White Sand",
            highlight: "Pristine table corals, sea anemones, clownfish colonies, and schooling damselfish in sheltered waters.",
          },
          id: {
            name: "[Dive Point 1] - Karang Dangkal & Coral Garden",
            bottomType: "Hard & Soft Karang, Pasir Putih",
            highlight: "Taman karang meja dengan koloni anemon, clownfish, dan schooling damselfish.",
          },
        },
      },
      {
        id: "dp-1b",
        depthRange: "6 – 14 Meters",
        currentLevel: "Moderate",
        visibilityRange: "10 – 18 Meters",
        suitableActivities: ["spearfishing", "freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 2] - Reef Slope & Ridge",
            bottomType: "Coral Slope, Rocky Outcrops",
            highlight: "Sloping reef contour with grouper, red snapper, and schools of bluefin trevally.",
          },
          id: {
            name: "[Dive Point 2] - Slope Karang & Reef Ridge",
            bottomType: "Kemiringan Karang, Bebatuan Alami",
            highlight: "Kemiringan kontur terumbu karang dengan populasi ikan kerapu dan kakap.",
          },
        },
      },
      {
        id: "dp-1c",
        depthRange: "2 – 6 Meters",
        currentLevel: "Gentle",
        visibilityRange: "6 – 12 Meters",
        suitableActivities: ["freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 3] - Sheltered Lagoon & Seagrass",
            bottomType: "Sand, Seagrass, Patch Reef",
            highlight: "Calm, wave-protected waters perfect for beginner duck dives and buoyancy checks.",
          },
          id: {
            name: "[Dive Point 3] - Teluk Terlindung & Seagrass Bed",
            bottomType: "Pasir, Lamun, Patch Karang",
            highlight: "Area tenang tanpa ombak besar, sangat ideal untuk adaptasi duck dive & buoyancy check.",
          },
        },
      },
      {
        id: "dp-1d",
        depthRange: "10 – 18 Meters",
        currentLevel: "Moderate",
        visibilityRange: "10 – 20 Meters",
        suitableActivities: ["spearfishing", "freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 4] - Outer Channel Drift",
            bottomType: "Reef Ridge & Sandy Channel",
            highlight: "Tidal current corridor frequented by barracudas, trevallies, and sea turtles.",
          },
          id: {
            name: "[Dive Point 4] - Karang Luar & Channel Drift",
            bottomType: "Reef Ridge & Alur Pasir",
            highlight: "Jalur perlintasan ikan kuwe (trevally) dan barakuda kecil saat pasang masuk.",
          },
        },
      },
    ],
    translations: {
      en: {
        name: "West Coast Fringing Reef & Bay Zone",
        region: "West Java (West Coast / [Location Name A])",
        shortDescription:
          "Sheltered bay and fringing coral reefs with gentle swells, ideal for introductory spearfishing, freediving fun dives, and beginner scuba.",
        description:
          "This coastal zone features expansive fringing reefs with gentle sloping contours down to 15 meters. Protected from intense oceanic swell, it serves as an exceptional training ground and weekend excursion spot with rich coral diversity.",
        conditions: {
          bestSeason: "April – November",
          waterTemp: "27°C – 29°C",
          visibility: "8 – 18 Meters",
          currents: "Gentle in the bay, moderate around headland points",
        },
        marineLife: [
          "Acropora Table Corals",
          "Groupers & Snappers",
          "Clownfish & Sea Anemones",
          "Bluefin Trevally",
          "Hawksbill Sea Turtles",
        ],
        access: "15–25 minutes via local wooden dive boat from the departure harbour.",
        safetyNotes: [
          "Always deploy dive floats and flags due to local coastal boat traffic.",
          "Check tidal current shifts during rising and falling tides.",
        ],
      },
      id: {
        name: "Zona Pesisir & Terumbu Karang Barat",
        region: "Jawa Barat (Pesisir Barat / [Location Name A])",
        shortDescription:
          "Kawasan teluk dan terumbu karang dangkal berombak tenang, ideal untuk pengenalan spearfishing karang, freediving fun dive, dan discovery scuba diving.",
        description:
          "Zona pesisir ini memiliki bentang karang tepi (fringing reef) yang luas dengan topografi landai hingga kedalaman 15 meter. Kondisi airnya relatif terlindung dari arus kencang samudra, menjadikannya lokasi sempurna untuk klinik pelatihan maupun perburuan karang pemula hingga menengah.",
        conditions: {
          bestSeason: "April – November",
          waterTemp: "27°C – 29°C",
          visibility: "8 – 18 Meter",
          currents: "Tenang di dalam teluk, Menengah di ujung tanjung",
        },
        marineLife: [
          "Table Coral (Acropora)",
          "Kerapu & Kakap Merah",
          "Clownfish & Sea Anemones",
          "Bluefin Trevally",
          "Penyu Sisik (Hawksbill Turtle)",
        ],
        access: "15–25 menit menggunakan traditional wooden dive boat dari dermaga lokal pesisir barat.",
        safetyNotes: [
          "Gunakan float & dive flag karena terdapat lalu lintas perahu nelayan tradisional di sekitar selat.",
          "Perhatikan perubahan arah arus saat pergantian pasang surut.",
        ],
      },
    },
  },
  {
    slug: "zona-pinnacle-selatan",
    heroImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    activities: ["spearfishing", "freediving", "scuba-diving"],
    relatedPackageSlugs: [
      "3d2n-spearfishing-expedition",
      "3d2n-scuba-diving-expedition",
      "custom-spearfishing-charter",
    ],
    divePoints: [
      {
        id: "dp-2a",
        depthRange: "10 – 35 Meters",
        currentLevel: "Strong",
        visibilityRange: "15 – 25+ Meters",
        suitableActivities: ["spearfishing", "freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 1] - South Pinnacle Apex",
            bottomType: "Basalt Rock, Barnacles & Gorgonians",
            highlight: "Submerged sea mount gathering point for Giant Trevally (GT), Spanish Mackerel, and pelagic schools.",
          },
          id: {
            name: "[Dive Point 1] - South Pinnacle Peak",
            bottomType: "Basalt Rock, Barnacles & Gorgonians",
            highlight: "Puncak batu tempat berkumpulnya Giant Trevally (GT) dan Spanish Mackerel (Tenggiri).",
          },
        },
      },
      {
        id: "dp-2b",
        depthRange: "18 – 45 Meters",
        currentLevel: "Strong",
        visibilityRange: "20 – 30 Meters",
        suitableActivities: ["spearfishing", "freediving"],
        translations: {
          en: {
            name: "[Dive Point 2] - Deep Blue Drop Zone",
            bottomType: "Open Oceanic Blue & Deep Wall",
            highlight: "Pure bluewater hunting zone with sightings of Dogtooth Tuna, Mahi-mahi, and oceanic rays.",
          },
          id: {
            name: "[Dive Point 2] - Deep Blue Drop Zone",
            bottomType: "Open Oceanic Blue & Deep Wall",
            highlight: "Spot blue water hunting murni dengan kemungkinan melihat tuna, mahi-mahi, dan ray besar.",
          },
        },
      },
      {
        id: "dp-2c",
        depthRange: "8 – 22 Meters",
        currentLevel: "Moderate",
        visibilityRange: "12 – 20 Meters",
        suitableActivities: ["spearfishing", "freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 3] - North Submerged Reef",
            bottomType: "Plate Coral & Massive Boulders",
            highlight: "Intermediate stalking area with rock crevices sheltering coral trout and sweetlips.",
          },
          id: {
            name: "[Dive Point 3] - North Submerged Reef",
            bottomType: "Plate Coral & Massive Boulders",
            highlight: "Spot perburuan karang intermediate dengan celah batu tempat persembunyian ikan kakap batu.",
          },
        },
      },
      {
        id: "dp-2d",
        depthRange: "12 – 28 Meters",
        currentLevel: "Strong",
        visibilityRange: "15 – 25 Meters",
        suitableActivities: ["scuba-diving", "freediving", "spearfishing"],
        translations: {
          en: {
            name: "[Dive Point 4] - Pelagic Drift Runway",
            bottomType: "Sloping Rock & Drift Channel",
            highlight: "Exhilarating fast-paced drift dive over nutrient-rich upwelling zones with schooling surgeonfish.",
          },
          id: {
            name: "[Dive Point 4] - Pelagic Drift Runway",
            bottomType: "Sloping Rock & Drift Channel",
            highlight: "Sensasi drift dive cepat mengikuti arus kaya plankton bersama schooling surgeonfish.",
          },
        },
      },
    ],
    translations: {
      en: {
        name: "South Offshore Pinnacle & Deep Blue Zone",
        region: "West Java (South Coast / [Location Name B])",
        shortDescription:
          "Offshore submerged sea mounts with dynamic oceanic currents, a paradise for blue water spearfishing and deep apnea expeditions.",
        description:
          "Rising from the Indian Ocean abyss from 40m depths up to 10m below the surface, this offshore pinnacle creates a powerful upwelling zone attracting schools of mature pelagic predators and offering world-class blue water clarity.",
        conditions: {
          bestSeason: "May – October (Consistent ocean swells & prime visibility)",
          waterTemp: "25°C – 28°C (Occasional refreshing thermoclines)",
          visibility: "15 – 25+ Meters",
          currents: "Moderate to Strong (Open ocean dynamics)",
        },
        marineLife: [
          "Giant Trevally (GT)",
          "Spanish Mackerel (Tenggiri)",
          "Dogtooth & Yellowfin Tuna",
          "Barracuda Schools",
          "Eagle Rays & Reef Sharks",
        ],
        access: "40–60 minutes from the launch harbour via twin-engine speed vessel.",
        safetyNotes: [
          "Recommended for divers with solid physical conditioning and oceanic current comfort.",
          "Mandatory heavy-duty slip-tips and high-buoyancy bungee floatlines for spearfishing.",
          "Vessels maintain continuous active surface tracking along diver drift lines.",
        ],
      },
      id: {
        name: "Zona Pinnacle & Laut Dalam Selatan",
        region: "Jawa Barat (Pesisir Selatan / [Location Name B])",
        shortDescription:
          "Formasi gunung karang bawah laut lepas pantai dengan arus samudra yang menantang, surga bagi blue water spearfishing dan deep freediving.",
        description:
          "Kawasan offshore pinnacle ini langsung berbatasan dengan laut terbuka Samudra Hindia. Puncak pinnacle muncul dari kedalaman 40 meter hingga 10 meter di bawah permukaan, menciptakan zona upwelling kaya nutrisi yang menarik schooling ikan pelagis besar.",
        conditions: {
          bestSeason: "Mei – Oktober (Ombak lebih teratur & visibilitas maksimal)",
          waterTemp: "25°C – 28°C (Kadang terjadi thermocline segar)",
          visibility: "15 – 25+ Meter",
          currents: "Sedang hingga Kuat (Khas Samudra Terbuka)",
        },
        marineLife: [
          "Giant Trevally (GT)",
          "Spanish Mackerel (Tenggiri)",
          "Dogtooth Tuna & Yellowfin",
          "Barracuda Schools",
          "Eagle Rays & Reef Sharks",
        ],
        access: "40–60 menit dari dermaga pendaratan menggunakan speedboat berkekuatan ganda.",
        safetyNotes: [
          "Hanya untuk peserta dengan kebugaran fisik prima dan kenyamanan di arus lepas.",
          "Wajib menggunakan slip-tip dan bungee float line bervolume tinggi untuk spearfishing.",
          "Perahu ekspedisi akan selalu standby membuntuti arah drift penyelam.",
        ],
      },
    },
  },
  {
    slug: "zona-dropoff-pulau",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    activities: ["spearfishing", "freediving", "scuba-diving"],
    relatedPackageSlugs: [
      "2d1n-freedive-depth-reef",
      "3d2n-freediving-expedition",
      "2d1n-scuba-diving-safari",
    ],
    divePoints: [
      {
        id: "dp-3a",
        depthRange: "5 – 35 Meters",
        currentLevel: "Moderate",
        visibilityRange: "15 – 25 Meters",
        suitableActivities: ["freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 1] - East Island Vertical Wall",
            bottomType: "Vertical Limestone Wall & Sea Fans",
            highlight: "Sheer vertical drop covered in giant gorgonian fans, colorful soft corals, and schooling fusiliers.",
          },
          id: {
            name: "[Dive Point 1] - East Island Vertical Wall",
            bottomType: "Vertical Limestone Wall & Sea Fans",
            highlight: "Dinding karang berhiaskan kipas laut raksasa (gorgonian) dan koral lunak warna-warni.",
          },
        },
      },
      {
        id: "dp-3b",
        depthRange: "10 – 20 Meters",
        currentLevel: "Gentle",
        visibilityRange: "12 – 20 Meters",
        suitableActivities: ["freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 2] - The Underwater Archway",
            bottomType: "Natural Cave & Coral Overhangs",
            highlight: "Stunning natural swim-through archway offering dramatic light rays for underwater photography.",
          },
          id: {
            name: "[Dive Point 2] - The Underwater Arch & Swim-Through",
            bottomType: "Cave Formations & Coral Overhangs",
            highlight: "Formasi lorong batu alami yang menakjubkan untuk foto underwater siluet.",
          },
        },
      },
      {
        id: "dp-3c",
        depthRange: "8 – 24 Meters",
        currentLevel: "Moderate",
        visibilityRange: "15 – 22 Meters",
        suitableActivities: ["spearfishing", "freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 3] - North Reef Point & Pelagic Pass",
            bottomType: "Coral Plateau & Sloping Drop",
            highlight: "Current convergence corner frequented by rainbow runners, sweetlips, and passing turtles.",
          },
          id: {
            name: "[Dive Point 3] - North Reef Point & Pelagic Pass",
            bottomType: "Coral Plateau & Sloping Drop",
            highlight: "Ujung pulau dengan pertemuan arus tempat lewatnya schooling rainbow runner & sweetlips.",
          },
        },
      },
      {
        id: "dp-3d",
        depthRange: "0 – 30 Meters",
        currentLevel: "Gentle",
        visibilityRange: "15 – 25 Meters",
        suitableActivities: ["freediving", "scuba-diving"],
        translations: {
          en: {
            name: "[Dive Point 4] - Calm Lagoon & Depth Line Station",
            bottomType: "Deep Sheltered Water",
            highlight: "Wind-protected deep water perfect for stable freediving depth training buoy setups.",
          },
          id: {
            name: "[Dive Point 4] - Calm Lagoon & Depth Line Station",
            bottomType: "Deep Sheltered Water",
            highlight: "Area terlindung angin yang menjadi stasiun pemasangan tali buoy depth training freediving.",
          },
        },
      },
    ],
    translations: {
      en: {
        name: "Outer Island Cluster & Drop-Off Wall",
        region: "West Java (Island Archipelago / [Location Name C])",
        shortDescription:
          "Spectacular vertical drop-off walls, natural swim-through caves, and crystal-clear waters surrounding offshore island groups.",
        description:
          "This island cluster offers dramatic wall topography plunging from 3 meters to over 40 meters. Consistently clear visibility makes it a premier destination for freediving depth coaching, scuba macro photography, and selective reef hunting.",
        conditions: {
          bestSeason: "Year-Round (Peak March – December)",
          waterTemp: "27°C – 30°C",
          visibility: "12 – 25 Meters",
          currents: "Calm inside the lagoon, moderate along outer wall slopes",
        },
        marineLife: [
          "Gorgonian Sea Fans",
          "Nudibranchs & Macro Critters",
          "Sweetlips & Emperor Fish",
          "Rainbow Runners",
          "Reef Cuttlefish",
        ],
        access: "30 minutes via speedboat from the island crossing terminal.",
        safetyNotes: [
          "Maintain proper buoyancy control when approaching vertical walls to protect delicate sea fans.",
          "Dive computers are mandatory for wall depth profile monitoring.",
        ],
      },
      id: {
        name: "Zona Gugusan Pulau & Drop-off Wall",
        region: "Jawa Barat (Gugusan Pulau / [Location Name C])",
        shortDescription:
          "Dinding vertikal bawah laut dengan tutupan soft coral spektakuler, gua-gua kecil, dan air biru jernih di sekitar pulau-pulau lepas pantai.",
        description:
          "Gugusan pulau ini menyajikan perpaduan kontur dinding curam (wall drop-off) yang menghujam dari 3 meter hingga lebih dari 40 meter. Visibilitas yang konsisten jernih menjadikannya spot favorit untuk depth training freediving, macro scuba photography, dan reef spearfishing.",
        conditions: {
          bestSeason: "Sepanjang tahun (Kondisi puncak Maret – Desember)",
          waterTemp: "27°C – 30°C",
          visibility: "12 – 25 Meter",
          currents: "Tenang di teluk laguna, Menengah di sisi dinding luar",
        },
        marineLife: [
          "Gorgonian Sea Fans",
          "Nudibranch & Macro Critters",
          "Sweetlips & Emperor Fish",
          "Rainbow Runners",
          "Reef Cuttlefish (Sotong)",
        ],
        access: "30 menit menggunakan perahu cepat dari dermaga penyeberangan.",
        safetyNotes: [
          "Perhatikan kontrol buoyancy saat mendekati dinding karang agar tidak menyentuh biota sensitif.",
          "Gunakan dive computer untuk memantau kedalaman saat wall dive.",
        ],
      },
    },
  },
];

export function getDiveSiteBySlug(slug: string): DiveSite | undefined {
  return DIVE_SITES_DATA.find((site) => site.slug === slug);
}
