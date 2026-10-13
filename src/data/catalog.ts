import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-himalayan-salt',
    slug: 'himalayan-pink-salt',
    title: 'Himalayan Pink Salt',
    subtitle: '100% Raw, Ancient Mineral Salt Sourced from the Foothills of the Himalayas',
    status: 'active',
    badgeLabel: 'Primary Export Line · Active',
    shortDescription: 'Unrefined, unpolluted, and mineral-dense crystal salt excavated directly from centuries-old subterranean rock veins. Supplied in food-grade, equestrian, decorative, and wellness specifications.',
    fullDescription: 'Utility Home operates direct quarry-to-port supply pipelines for pure Himalayan Pink Salt. Formed over 250 million years ago, our mineral salt is protected from modern marine microplastics and industrial contamination. We perform multi-stage optical sorting, metal detection, and laboratory chemical analysis to satisfy stringent European, North American, and GCC import compliance standards.',
    heroImage: '/images/pink_salt_banner.jpg',
    origin: 'Salt Range / Khewra Formation, Pakistan',
    exportPorts: ['Port Qasim (PKBQM)', 'Karachi Port (PKKHI)'],
    leadTime: '10–14 Days to Port of Loading',
    capacity: '1,500+ Metric Tons / Month',
    certifications: ['ISO 9001:2015', 'ISO 22000 (HACCP)', 'FDA Registered', 'Halal Certified', 'Kosher Certified', 'GMP Standard'],
    packagingTypes: [
      {
        title: 'Bulk 25kg & 50kg Heavy-Duty Polypropylene (PP) Bags',
        description: 'Double-stitched high-tensile woven PP outer bag with food-grade LDPE moisture-barrier inner liner. Ideal for food manufacturers, re-packers, and chemical blenders.',
        capacity: '25kg / 50kg Net Weight'
      },
      {
        title: '1,000kg to 1,200kg Industrial FIBC Jumbo Bags (Big Bags)',
        description: 'UV-stabilized 4-loop big bags with discharge spout and heavy lifting slings. Engineered for automated factory emptying and high-volume industrial repackaging.',
        capacity: '1.0 to 1.2 Metric Tons'
      },
      {
        title: 'OEM Private Label Retail Pouches & Grinder Jars',
        description: 'Custom-printed stand-up pouches (kraft, matte, clear window with zip-lock), glass grinders with ceramic burrs, and shakers customized with your brand artwork.',
        capacity: '200g, 500g, 1000g Jars / Pouches'
      },
      {
        title: 'Shrink-Wrapped Export Pallets (ISPM-15 Certified)',
        description: 'Heat-treated wooden or plastic export pallets with heavy stretch-wrap, corner protectors, and corrugated slip sheets to prevent maritime moisture ingress.',
        capacity: '1,000kg per Pallet Base'
      }
    ],
    chemicalAnalysis: [
      { parameter: 'Sodium Chloride (NaCl)', result: '98.72%', standard: 'Min 97.0% (Codex Stan 150-1985)' },
      { parameter: 'Calcium (Ca)', result: '0.14%', standard: 'Natural mineral bound' },
      { parameter: 'Magnesium (Mg)', result: '0.10%', standard: 'Natural mineral bound' },
      { parameter: 'Potassium (K)', result: '0.08%', standard: 'Natural mineral bound' },
      { parameter: 'Iron Oxide (Fe)', result: '38.5 mg/kg', standard: 'Imparts signature pink tint' },
      { parameter: 'Moisture Content', result: '0.11%', standard: 'Max 0.5% (dry basis)' },
      { parameter: 'Water Insoluble Matter', result: '0.18%', standard: 'Max 0.25%' },
      { parameter: 'Heavy Metals (Pb, Cd, As)', result: 'Non-Detectable (< 0.01 ppm)', standard: 'FDA / EU Food Safety Compliant' }
    ],
    variants: [
      {
        id: 'salt-edible-fine-coarse',
        name: 'Edible Himalayan Pink Salt (Fine & Coarse)',
        categorySlug: 'himalayan-pink-salt',
        subcategory: 'edible',
        tagline: 'Premium Food-Grade Natural Crystal Salt for Retail, Horeca & Food Processing',
        description: 'Triple-washed, optically sorted, and precision-milled edible pink crystal salt. Completely free from anti-caking additives, bleaching chemicals, and microplastics. Available in extra fine powder, table grain, medium grind, and coarse grinder crystals.',
        hsCode: '2501.00.90',
        moq: '1 x 20ft FCL (Approx. 24–27 Metric Tons)',
        grainSizes: [
          'Extra Fine (0.1mm - 0.5mm) · Table / Baking',
          'Fine Table Salt (0.5mm - 1.0mm) · Seasoning',
          'Medium Grain (1.0mm - 2.5mm) · Pre-grinder / Rubs',
          'Coarse Crystal (2.5mm - 5.0mm) · Glass Grinder Refills'
        ],
        colorGrades: ['Light Pink / Peach', 'Classic Medium Pink', 'Dark Rose / Ruby Crystal'],
        certifications: ['HACCP', 'ISO 22000', 'FDA Registered', 'Halal', 'Kosher'],
        packagingOptions: [
          '25 kg Multi-Wall PP Bags with PE liner',
          '50 kg Export Woven Sacks',
          '1000 kg FIBC Big Bags on Pallets',
          'Retail 500g / 1kg Standup Pouches (OEM Brand)'
        ],
        containerStuffing: {
          twentyFtFcl: '27 MT (Floor Loaded) or 24 MT (Palletized)',
          fortyFtFcl: '26 MT (Weight-restricted sea corridors)',
          palletized: '20 to 24 Pallets per 20ft Container'
        },
        keySpecs: [
          { label: 'Purity (NaCl)', value: '≥ 98.7%' },
          { label: 'Moisture', value: '≤ 0.15%' },
          { label: 'Additives', value: 'Zero (No E535 / E536 Anti-caking agents)' },
          { label: 'Shelf Life', value: 'Indefinite (stored dry)' }
        ],
        applications: [
          'Direct table salt and gourmet retail lines',
          'Artisan bakeries and organic snack manufacturing',
          'Meat curing and brining industries',
          'Spice blends and dry seasoning formulations'
        ],
        imageUrl: '/images/pink_salt_edible.jpg'
      },
      {
        id: 'salt-lamps-decor',
        name: 'Handcrafted Himalayan Salt Lamps & Wellness Decor',
        categorySlug: 'himalayan-pink-salt',
        subcategory: 'decor',
        tagline: 'Authentic Carved Rock Salt Lamps with Certified Electrical Assemblies',
        description: 'Authentic solid rock salt extracted by master artisans and hollowed to house gentle illuminating bulbs. When warmed, these crystalline sculptures release hygroscopic wellness ambience. Supplied with customized export electrical fittings (UL, CE, UKCA, SAA certified cords and dimmers).',
        hsCode: '9405.29.00 / 9405.20',
        moq: '500 Pieces or Mixed 20ft Container Load',
        grainSizes: [
          'Natural Rough Cut: 2–3kg, 3–5kg, 5–7kg, 7–10kg, 10–15kg',
          'Geometric Shapes: Sphere, Pyramid, Cube, Cylinder',
          'Fire Bowls with Loose Salt Chunks (includes 8-12 rock crystals)',
          'USB Mini Desktop Lamps with Color-Changing LED'
        ],
        colorGrades: ['Warm Amber / Deep Orange', 'Rose Pink Glow', 'White Calcite (Rare)'],
        certifications: ['CE Electrical', 'UL / cUL Listed', 'RoHS Compliant', 'ISPM-15 Wood Base'],
        packagingOptions: [
          'Individual 5-ply Corrugated Gift Box with Drop-Tested EPE Foam',
          'Master Shipping Cartons (4 to 6 units per carton)',
          'Custom Barcode, SKU label, and multilingual user manual inclusion',
          'Palletized and stretch-wrapped for maritime stability'
        ],
        containerStuffing: {
          twentyFtFcl: 'Approx. 4,500 – 6,000 units (depending on weight mix)',
          fortyFtFcl: 'Approx. 8,000 – 11,000 units in master cartons',
          palletized: 'Custom stacked by carton dimensions'
        },
        keySpecs: [
          { label: 'Base Material', value: 'Polished Rosewood / Neem Wood (Treated)' },
          { label: 'Electricals', value: 'CE, UL, SAA, UKCA certified cables & dimmer switches' },
          { label: 'Bulb Standard', value: '15W / 25W E14 / E12 heat-generating tungsten bulb' },
          { label: 'Weight Tolerances', value: '± 5% per certified weight tier' }
        ],
        applications: [
          'High-volume home decor & gift retail chains',
          'Holistic wellness boutiques & yoga studios',
          'E-commerce fulfillment & private-brand dropshipping',
          'Hospitality lighting & luxury spa lounges'
        ],
        imageUrl: '/images/himalayan_salt_lamp.jpg'
      },
      {
        id: 'salt-animal-licks',
        name: 'Natural Animal & Livestock Salt Lick Blocks',
        categorySlug: 'himalayan-pink-salt',
        subcategory: 'animal',
        tagline: '100% Compressed & Solid Rock Salt Licks for Cattle, Equine & Wildlife',
        description: 'Hard-rock mineral salt blocks carved with center-drilled holes and weather-resistant natural jute/hemp hanging ropes. Unlike soft man-made pressed salt bricks that dissolve in rain, rock salt blocks withstand harsh pastoral conditions and provide livestock with vital trace minerals that stimulate appetite and hydration.',
        hsCode: '2501.00.10',
        moq: '1 x 20ft FCL (Approx. 24–27 Metric Tons)',
        grainSizes: [
          '1.0 kg - 1.5 kg (Small block with rope)',
          '2.0 kg - 2.5 kg (Standard equestrian size with rope)',
          '3.0 kg - 3.5 kg (Pasture cattle size with rope)',
          '4.0 kg - 5.0 kg (Heavy livestock / game reserve block)'
        ],
        colorGrades: ['Natural Pinkish-Red Rock (High Iron & Trace Minerals)'],
        certifications: ['Phytosanitary Certified', 'Non-GMO Feed Grade', 'Free of Chemical Binders'],
        packagingOptions: [
          'Shrink-wrapped individual blocks with color label',
          'Master cartons (e.g. 6 x 2.5kg or 4 x 5kg blocks per box)',
          'Heavy-duty master wooden crates or palletized master cartons',
          'Private label hangtags and barcodes for agricultural distributors'
        ],
        containerStuffing: {
          twentyFtFcl: '24–27 Metric Tons (Approx. 10,000 to 12,000 blocks)',
          fortyFtFcl: '26 MT (Weight ceiling restricted)',
          palletized: '20 to 22 Pallets with water-repellent shroud'
        },
        keySpecs: [
          { label: 'Hardness', value: 'Solid subterranean rock (Rain-resistant)' },
          { label: 'Hole & Rope', value: 'Pre-drilled with heavy untreated hemp/jute rope' },
          { label: 'Mineral Matrix', value: 'Natural Sodium, Calcium, Magnesium, Potassium, Iron' },
          { label: 'Chemicals', value: '100% Chemical-free, no glue or artificial binders' }
        ],
        applications: [
          'Dairy farms and feedlot beef cattle operations',
          'Thoroughbred horse stables and equestrian centers',
          'Sheep, goat, and camel husbandry across arid regions',
          'Wildlife management reserves and hunting stations'
        ],
        imageUrl: '/images/himalayan_salt_lick.jpg'
      },
      {
        id: 'salt-bath-spa',
        name: 'Therapeutic Bath, Spa & Cosmetic Pink Salt',
        categorySlug: 'himalayan-pink-salt',
        subcategory: 'spa',
        tagline: 'Mineral-Rich Crystal Soak Salts for Spa Formulations & Personal Care',
        description: 'Selected crystalline salt harvested from deep subterranean strata, washed in purified brine, and sorted for skin-softening cosmetic purity. Rich in magnesium, potassium, and calcium, this salt is the premier base for aromatherapy bath soaks, body scrubs, foot baths, and halotherapy salt caves.',
        hsCode: '3307.30.00 / 2501.00',
        moq: '5 Metric Tons (or combined with edible salt FCL)',
        grainSizes: [
          'Fine Scrub Powder (0.2mm - 0.6mm) · Exfoliants & Bar Soaps',
          'Medium Bath Crystal (1.0mm - 3.0mm) · Tub Soaks & Jars',
          'Coarse Rock Crystals (3.0mm - 8.0mm) · Spa Pedicures & Displays',
          'Custom Scent-Infused or Herb-Blended Crystals upon request'
        ],
        colorGrades: ['Pure Rose', 'Deep Ruby/Amber', 'Translucent White Crystal'],
        certifications: ['Cosmetic Grade GMP', 'ISO 9001:2015', 'FDA Voluntary Cosmetic Reg'],
        packagingOptions: [
          '25kg Double-Layered PP Bags with Hermetic Seal',
          'Retail 500g, 1kg, 2kg Standup Matte Pouches with Zip',
          'PET / Glass Cosmetic Jars with Aluminium Caps (Custom OEM)',
          '1,000kg Bulk Big Bags for Cosmetic Chemical Formulators'
        ],
        containerStuffing: {
          twentyFtFcl: '24–27 Metric Tons',
          fortyFtFcl: '26 MT',
          palletized: '24 Pallets with tamper-evident film'
        },
        keySpecs: [
          { label: 'Heavy Metals', value: 'Zero detectable contaminants (Cosmetic compliant)' },
          { label: 'Microbiological', value: 'Sterile rock origin, zero pathogens' },
          { label: 'Solubility', value: 'Complete dissolution in warm bath water' },
          { label: 'Fragrance Absorption', value: 'High porosity for essential oils carrier' }
        ],
        applications: [
          'Luxury bath salts and aromatherapy product brands',
          'Spas, thermal resorts, and wellness sanctuaries',
          'Body scrub, exfoliator, and handmade soap manufacturers',
          'Commercial halotherapy rooms and wellness salt caves'
        ],
        imageUrl: '/images/himalayan_bath_salt.jpg'
      }
    ],
    faqs: [
      {
        question: 'What is the minimum order quantity (MOQ) for Himalayan Pink Salt exports?',
        answer: 'Our standard MOQ for edible fine/coarse salt and animal licks is 1 x 20ft Full Container Load (FCL), which accommodates approximately 24 to 27 Metric Tons depending on whether the cargo is palletized or floor-loaded. For handcrafted salt lamps, our MOQ is 500 units or a mixed container load with salt products.'
      },
      {
        question: 'Can Utility Home provide private label packaging and custom retail branding?',
        answer: 'Yes. We provide complete OEM private labeling. We produce stand-up kraft pouches, laminated poly bags, glass grinders with ceramic mills, shakers, and custom-branded master cartons with your barcodes, nutritional tables, and regional language compliance.'
      },
      {
        question: 'What international quality certificates accompany every export shipment?',
        answer: 'Every commercial container dispatch includes a Certificate of Analysis (COA) issued by our certified testing laboratory, Certificate of Origin (COO), Commercial Invoice, Packing List, Phytosanitary & Fumigation Certificate, and Bill of Lading. Pre-shipment inspection by third-party agencies such as SGS, Bureau Veritas, or Intertek is supported upon buyer request.'
      },
      {
        question: 'What incoterms do you export under?',
        answer: 'We routinely export under FOB (Karachi Port / Port Qasim), CIF (to any major sea port worldwide), CFR, and EXW (Karachi/Khewra factory). Our logistics desk handles container bookings with leading global shipping lines including Maersk, MSC, CMA CGM, and Hapag-Lloyd.'
      }
    ]
  },
  {
    id: 'cat-surgical-instruments',
    slug: 'surgical-instruments',
    title: 'Surgical Instruments',
    subtitle: 'Precision Medical & Surgical Instruments Engineered to ISO 13485 & CE MDR Standards',
    status: 'active',
    badgeLabel: 'Medical Division · Active Export',
    shortDescription: 'High-precision German-grade stainless steel surgical, dental, ophthalmic, and orthopedic instruments manufactured in the Sialkot & Gujranwala medical cluster.',
    fullDescription: 'Utility Home Exports manufactures and supplies international hospital systems, clinical distributors, and health procurement bodies with premium-grade surgical instruments. Forged from ASTM F899 / DIN 1.4021 martensitic stainless steels, passivated per ASTM A967, and certified to ISO 13485:2016 and CE Medical Device Regulation standards.',
    heroImage: '/images/surgical_hero_banner.jpg',
    origin: 'Sialkot & Gujranwala Surgical Engineering Zone, Punjab, Pakistan',
    exportPorts: ['Sialkot International Airport (SKT)', 'Lahore Airport (LHE)', 'Port Qasim (PKBQM)'],
    leadTime: '10–14 Days Production Dispatch',
    capacity: '150,000+ Units per Month',
    certifications: ['ISO 13485:2016', 'CE Mark (MDR 2017/745)', 'FDA Listed', 'ASTM F899', 'ISO 7153-1'],
    packagingTypes: [
      {
        title: 'Individual Sterile & Non-Sterile Medical Pouches',
        description: 'Tyvek/Film peel pouches with chemical sterilization indicator dots and laser-etched UDI barcode integration.',
        capacity: 'Single Unit / 5 Pcs Pack'
      },
      {
        title: 'Custom Velvet Presentation Boxes & Surgical Kits',
        description: 'Hard-shell presentation cases lined with plush anti-tarnish velvet, tailored cutouts, and OEM gold foil branding.',
        capacity: '5 to 25 Instrument Sets'
      },
      {
        title: 'Stainless Wire Mesh Sterilization DIN Cassettes',
        description: 'Autoclavable electropolished stainless mesh trays with high-temperature medical silicone hold-down brackets.',
        capacity: 'Hospital Central Sterile Supply Department (CSSD)'
      }
    ],
    variants: [],
    faqs: [
      {
        question: 'What steel alloys do you utilize for surgical cutting instruments?',
        answer: 'We use premium AISI 420 (DIN 1.4021) high-carbon martensitic stainless steel heat-treated to Rockwell HRC 54-56 for razor-sharp edge retention, alongside AISI 316L for corrosion-resistant retractor bodies and ASTM Grade 5 titanium for microsurgical instruments.'
      },
      {
        question: 'Can you manufacture custom instruments with our hospital brand or logo?',
        answer: 'Yes. We offer high-precision fiber laser engraving for private label branding, CE marks, hospital department initials, lot numbers, and GS1 2D DataMatrix barcodes for sterile processing traceability.'
      }
    ]
  },
  {
    id: 'cat-citrus-fruits',
    slug: 'citrus-kinnow',
    title: 'Citrus Fruits & Kinnow Mandarins',
    subtitle: 'High-Brix, Juice-Dense Citrus Packed for Global Cold Chain Maritime Export',
    status: 'upcoming',
    badgeLabel: 'Pipeline Category · Harvest Pre-booking Open',
    shortDescription: 'World-renowned Pakistani Kinnow mandarins known for high juice content, vibrant golden-orange peel, and sweet-tart flavor balance. Processed through modern waxing and fungicide treatment lines.',
    fullDescription: 'Utility Home is expanding its agricultural export infrastructure with dedicated citrus sorting and cold storage facilities in the fertile Indus basin. We supply Grade-A Kinnow mandarins specifically conditioned for 40ft High-Cube refrigerated (reefer) containers maintaining precise controlled atmospheres throughout the 25–40 day transit window.',
    heroImage: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=1600&q=85',
    origin: 'Sargodha & Bhalwal Citrus Belts',
    exportPorts: ['Port Qasim (PKBQM) Reefer Terminal'],
    leadTime: 'Harvest season: November through April',
    capacity: '3,000+ Metric Tons per Season',
    certifications: ['GlobalGAP Compliant', 'Phytosanitary Certified', 'Cold Chain Monitored', 'HACCP'],
    packagingTypes: [
      {
        title: 'Telescopic Corrugated Export Cartons (Top & Bottom)',
        description: 'Moisture-resistant heavy burst-strength corrugated boxes designed to withstand refrigerated humidity without collapsing during ocean freight.',
        capacity: '10 kg & 13 kg Net Box Weight'
      },
      {
        title: 'Plastic Crates for Regional Shipments',
        description: 'Ventilated returnable or one-way food grade crates for expedited transit to GCC and Central Asian destinations.',
        capacity: '12 kg Net'
      }
    ],
    variants: [],
    faqs: [
      {
        question: 'When is the export season for Kinnow mandarins?',
        answer: 'The prime harvest and export window runs annually from late November through April. We accept pre-season contracts starting August each year.'
      },
      {
        question: 'How are the fruits treated for pest control and shelf life?',
        answer: 'All fruits undergo automated washing, hot water dipping, food-grade waxing, antifungal sorting, and precision sizing into 42, 48, 54, 60, and 72 caliber counts.'
      }
    ]
  },
  {
    id: 'cat-fresh-vegetables',
    slug: 'fresh-vegetables',
    title: 'Fresh Vegetables Export',
    subtitle: 'Farm-Fresh Premium Quality Vegetables Exported Worldwide',
    status: 'active',
    badgeLabel: 'Produce Export Line · Active',
    shortDescription: 'Export-grade Red & Yellow Onions, Fresh Potatoes (Mozika/Dutch), Green Chilies, Garlic & Ginger, and Seasonal Produce packed in ventilated mesh & cold-chain cartons.',
    fullDescription: 'Utility Home Exports operates direct farm-to-port supply pipelines for premium fresh vegetables sourced from fertile agricultural basins across Gujranwala and Punjab, Pakistan. Graded, cleaned, phytosanitary certified, and dispatched in climate-controlled reefer containers and air cargo.',
    heroImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=85',
    origin: 'Gujranwala, Okara & Punjab Agricultural Belts, Pakistan',
    exportPorts: ['Karachi Port (PKKHI) Reefer Berths', 'Air Cargo Hubs'],
    leadTime: 'Harvest & Packhouse Loading in 24–48 Hours',
    capacity: '2,500+ Metric Tons / Month',
    certifications: ['GlobalGAP Compliant', 'DPP Phytosanitary Certified', 'ISO 22000 (HACCP)', 'MRL Tested'],
    packagingTypes: [
      {
        title: '5kg to 50kg Heavy-Duty Leno Mesh Sacks',
        description: 'High-breathability red, yellow, and green monofilament mesh bags for onions, potatoes, and garlic.',
        capacity: '5kg, 10kg, 25kg, 50kg'
      },
      {
        title: 'Ventilated Telescopic Corrugated Export Boxes',
        description: 'Moisture-resistant 5-ply cartons with air circulation holes for chilies, capsicum, tomatoes, and okra.',
        capacity: '4kg, 5kg, 10kg'
      }
    ],
    variants: [],
    faqs: [
      {
        question: 'What is the shipping temperature for fresh onions and potatoes?',
        answer: 'Fresh onions are shipped between 0°C to +4°C with 65-70% RH in ventilated reefers, while fresh table and seed potatoes are maintained at +3°C to +8°C with sprout inhibitors.'
      },
      {
        question: 'Do you provide official Phytosanitary certificates?',
        answer: 'Yes. 100% of consignments receive physical inspection and Phytosanitary certificates issued by the Department of Plant Protection (DPP), Ministry of National Food Security & Research.'
      }
    ]
  },
  {
    id: 'cat-fresh-produce',
    slug: 'fresh-produce',
    title: 'Fresh Mangoes & Premium Produce',
    subtitle: 'Hot Water Treated (HWT) Export-Grade Mangoes & Seasonal Horticultural Goods',
    status: 'upcoming',
    badgeLabel: 'Pipeline Category · Seasonal Pipeline',
    shortDescription: 'World-famous Sindhri, Chaunsa, and Anwar Ratol mango varieties known for unparalleled aroma and silky pulp, processed through hot water treatment facilities approved for EU, UK, and GCC entry.',
    fullDescription: 'Complementing our mineral export division, Utility Home’s produce department connects certified commercial orchards directly to international supermarket chains and wholesale food terminals. Every consignment is packed in foam protective sleeves within ventilated cartons and transported via temperature-controlled air freight and marine reefers.',
    heroImage: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1600&q=85',
    origin: 'Multan, Rahim Yar Khan & Mirpur Khas Orchards',
    exportPorts: ['Karachi Port (PKKHI) & Jinnah Int Airport (KHI) Air Cargo'],
    leadTime: 'Season: May through September',
    capacity: '1,200+ Metric Tons per Season',
    certifications: ['GlobalGAP', 'EU HWT Protocol Approved', 'Department of Plant Protection (DPP)'],
    packagingTypes: [
      {
        title: 'Export Corrugated Gift Cartons with Individual Foam Sleeves',
        description: 'Designed for retail presentation with air circulation eyelets and shock-absorbing protective foam nets on each individual fruit.',
        capacity: '2 kg, 4 kg & 5 kg Net'
      }
    ],
    variants: [],
    faqs: [
      {
        question: 'Which mango varieties are available for export?',
        answer: 'We specialize in early-season Sindhri (May-June), mid-season Chaunsa (June-August), and late-season White Chaunsa and Anwar Ratol (July-September).'
      }
    ]
  },
  {
    id: 'cat-industrial-minerals',
    slug: 'industrial-salts',
    title: 'Industrial & De-Icing Mineral Salts',
    subtitle: 'High-Purity Bulk Mineral Salts for Water Softening, Tanning & Highway Safety',
    status: 'upcoming',
    badgeLabel: 'Pipeline Category · B2B Bulk Contracts',
    shortDescription: 'Screened raw mineral salts for industrial chemical plants, chlor-alkali production, highway winter de-icing, and commercial water treatment systems.',
    fullDescription: 'For municipal departments, chemical manufacturers, and highway maintenance authorities requiring dry bulk vessel cargo or containerized tonnage. Available in unwashed coarse rock or kiln-dried granular specifications with moisture resistance.',
    heroImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=85',
    origin: 'Salt Range Formations',
    exportPorts: ['Port Qasim Dry Bulk Berths & Container Terminals'],
    leadTime: 'Continuous All-Year Supply',
    capacity: '10,000+ Metric Tons / Month',
    certifications: ['ISO 9001:2015', 'ASTM / European Highway De-Icing Standards'],
    packagingTypes: [
      {
        title: 'Breakbulk Vessel Charter & FIBC 1.2MT Jumbo Bags',
        description: 'Heavy duty discharge bags or direct hold loading for high-tonnage consignments.',
        capacity: '1,200kg Bags or Vessel Hold'
      }
    ],
    variants: [],
    faqs: [
      {
        question: 'Do you offer vessel chartering for de-icing salt?',
        answer: 'Yes, for winter contracts (October to March), we coordinate both containerized shipments (25MT per container) and chartered coaster/handysize vessels.'
      }
    ]
  }
];

export const DESTINATION_PORTS = [
  { name: 'Rotterdam (NLRTM)', region: 'Europe / Netherlands', transitDays: '22-26 days' },
  { name: 'Hamburg (DEHAM)', region: 'Europe / Germany', transitDays: '24-28 days' },
  { name: 'Antwerp (BEANR)', region: 'Europe / Belgium', transitDays: '23-27 days' },
  { name: 'Felixstowe (GBFXT)', region: 'Europe / United Kingdom', transitDays: '24-28 days' },
  { name: 'Valencia (ESVLC)', region: 'Europe / Spain', transitDays: '18-22 days' },
  { name: 'Genoa (ITGOA)', region: 'Europe / Italy', transitDays: '16-20 days' },
  { name: 'Jebel Ali / Dubai (AEJEA)', region: 'Middle East / UAE', transitDays: '3-5 days' },
  { name: 'Dammam (SADMM)', region: 'Middle East / Saudi Arabia', transitDays: '6-8 days' },
  { name: 'Doha / Hamad (QAHMD)', region: 'Middle East / Qatar', transitDays: '5-7 days' },
  { name: 'Los Angeles / Long Beach (USLAX)', region: 'North America / USA West', transitDays: '30-36 days' },
  { name: 'New York / New Jersey (USNYC)', region: 'North America / USA East', transitDays: '26-32 days' },
  { name: 'Savannah (USSAV)', region: 'North America / USA East', transitDays: '28-34 days' },
  { name: 'Singapore (SGSIN)', region: 'Asia / Singapore Hub', transitDays: '10-14 days' },
  { name: 'Port Klang (MYPKG)', region: 'Asia / Malaysia', transitDays: '11-15 days' },
  { name: 'Yokohama / Tokyo (JPYOK)', region: 'Asia / Japan', transitDays: '18-24 days' },
  { name: 'Sydney (AUSYD)', region: 'Oceania / Australia', transitDays: '22-28 days' },
  { name: 'Santos (BRSSZ)', region: 'South America / Brazil', transitDays: '35-42 days' },
  { name: 'Durban (ZADUR)', region: 'Africa / South Africa', transitDays: '16-20 days' }
];
