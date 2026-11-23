import { VegetableProduct } from '../types';

export const VEGETABLE_PRODUCTS: VegetableProduct[] = [
  {
    id: 'veg-garlic-grade-a',
    name: 'Fresh Whole White Garlic (Grade A)',
    botanicalName: 'Allium sativum (لہسن)',
    variety: 'NARC-G1 Giant White Garlic & Local Desi White',
    category: 'Bulb Vegetables',
    hsCode: '0703.20.00',
    origin: 'Punjab & Northern Agricultural Valleys, Pakistan',
    seasonality: 'Round the Year (Controlled Cold Atmosphere)',
    packagingOptions: [
      '5kg, 10kg, 20kg Heavy-Duty Red/White Leno Mesh Sacks',
      '10kg Ventilated Corrugated Master Cartons with dividers',
      'Retail Net Packs (3 pcs / 5 pcs garlic with custom barcode tags)'
    ],
    shelfLife: '6 to 9 Months at -1°C to 0°C (65% RH)',
    storageTemp: '-1°C to 0°C / 65% RH (Dry & Ventilated Reefer)',
    shippingMode: '40ft High Cube Reefer (26–28 MT) / 20ft Reefer (12 MT)',
    moq: '1 x 20ft FCL (12 Metric Tons) / 1 x 40ft FCL (26 MT)',
    description: 'Pristine export-grade whole white garlic bulbs featuring tight papery white skins, plump aromatic cloves, and clean trimmed roots. Naturally sun-cured, graded by millimeter caliber, and certified rot-free.',
    keySpecs: [
      { label: 'Caliber / Size', value: '50mm+, 55mm+, 60mm+, 65mm–75mm+ (Grade A Jumbo)' },
      { label: 'Drying & Curing', value: 'Sun-cured & kiln-dried tight necks, pulp moisture < 65%' },
      { label: 'Clove Structure', value: '6 to 10 massive dense aromatic cloves per bulb' },
      { label: 'Shipping Terms', value: 'FOB Karachi Port (PKKHI) / CIF Destination Ports' }
    ],
    imageUrl: '/images/garlic_bulbs_export.jpg'
  },
  {
    id: 'veg-ginger-rhizomes',
    name: 'Fresh Ginger Rhizomes (Export Grade)',
    botanicalName: 'Zingiber officinale (ادرک)',
    variety: 'Bold Fresh Agricultural Ginger (Washed & Unwashed)',
    category: 'Rhizomes & Roots',
    hsCode: '0910.11.00',
    origin: 'River Valley Agro Belts, Pakistan',
    seasonality: 'October to May (Peak Fresh Harvest)',
    packagingOptions: [
      '10kg & 13.6kg (30 lbs) Heavy-Duty Air-Cooled Plastic Crates',
      '10kg Corrugated Master Cartons with dual ventilation slots',
      'ISPM-15 Heat-Treated Wooden Export Crates for air & sea pallets'
    ],
    shelfLife: '60 to 90 Days under proper temperature (+12°C)',
    storageTemp: '+12°C to +14°C / 85% RH (Non-chilling Reefer)',
    shippingMode: '40ft High Cube Reefer (+12°C, 24–26 MT) or Commercial Air Cargo',
    moq: '5,000 kg (Commercial Air Cargo) or 1 x 40ft FCL Reefer (24 MT)',
    description: 'High-aroma, fiber-balanced fresh ginger rhizomes available thoroughly hydro-washed or in natural unwashed farm state. Selected for thick fleshy hands, natural golden sheen, plump joints, and high gingerol essential oil potency.',
    keySpecs: [
      { label: 'Rhizome Hand Size', value: '150g, 200g, 250g+ thick mature hands & fat fingers' },
      { label: 'Washing State', value: 'Washed soil-free OR unwashed natural origin' },
      { label: 'Moisture Control', value: '< 12% moisture variation, zero mildew or decay' },
      { label: 'Shipping Terms', value: 'FOB Karachi Port / CIF Major Global Seaports' }
    ],
    imageUrl: '/images/fresh_ginger_export.jpg'
  },
  {
    id: 'veg-red-onions',
    name: 'Premium Red Onions (Export Graded)',
    botanicalName: 'Allium cepa (لال پیاز)',
    variety: 'Sindh Red (Nasarpur), Swat Golden Red & Punjab Hybrid',
    category: 'Bulb Vegetables',
    hsCode: '0703.10.00',
    origin: 'Sindh (Nasarpur, Matiari) & Punjab Agricultural Belts, Pakistan',
    seasonality: 'Round the Year (Rotational Harvests)',
    packagingOptions: [
      '5kg, 10kg, 25kg, 50kg UV-Stabilized Red Leno Mesh Bags',
      'Heavy-Duty Polypropylene Export Bags with custom tags',
      '1 Ton ISPM-15 Heat-Treated Palletized Bins'
    ],
    shelfLife: '90 to 120 Days under conditioned cold chain',
    storageTemp: '0°C to +4°C / 65–70% RH (Dry & Ventilated Reefer)',
    shippingMode: '40ft High Cube Reefer (+2°C to +4°C, 28–29 MT)',
    moq: '1 x 40ft FCL Reefer Container (Approx. 1,160 bags x 25kg / 29 MT)',
    description: 'Crisp, pungent red onions with deep reddish-purple papery skin and dense globe flesh. Graded for uniform caliber with thin dry necks and sprout inhibition for seamless ocean voyages to GCC, Europe, and Asia.',
    keySpecs: [
      { label: 'Caliber / Sizes', value: 'Sorted 45mm+, 50mm+, 55mm+, 60mm–85mm (Graded Jumbo)' },
      { label: 'Curing & Dryness', value: '3–4 layers dry papery wrapper skin, cured necks' },
      { label: 'Cold-Chain Ready', value: 'Pre-cooled & shipped in ventilated reefer containers' },
      { label: 'Shipping Terms', value: 'FOB Karachi Port (PKKHI) / CIF Global Seaports' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'veg-potatoes-export',
    name: 'Export Potatoes (Mozika / Asterix / Lady Rosetta)',
    botanicalName: 'Solanum tuberosum (برآمدی آلو)',
    variety: 'Mozika (White), Asterix (Red Skin), Lady Rosetta (Chipping), Santana',
    category: 'Tubers & Processing Potatoes',
    hsCode: '0701.90.00',
    origin: 'Okara, Sahiwal, Jhelum & Chiniot Potato Belt, Punjab, Pakistan',
    seasonality: 'December to May (Fresh Crop), Year-Round (Cold Stores)',
    packagingOptions: [
      '10kg, 25kg, 50kg Heavy-Duty Yellow/Red Polypropylene Mesh Sacks',
      '10kg & 15kg Corrugated Telescopic Export Master Boxes',
      '1 Ton Jumbo PP Bulk Bags on wooden pallets'
    ],
    shelfLife: '90 to 150 Days under refrigerated storage (+4°C to +8°C)',
    storageTemp: '+4°C to +8°C / 85–90% RH (Sprout-inhibited cold storage)',
    shippingMode: '40ft High Cube Reefer (+4°C Set Point, 28–30 MT)',
    moq: '1 x 40ft FCL Reefer Container (Approx. 28–30 Metric Tons)',
    description: 'Premier Punjab potatoes cultivated in nutrient-rich alluvial soils. Mozika offers smooth skin for table cooking, Asterix delivers deep red skin and golden flesh, and Lady Rosetta provides certified 22%+ dry-matter for industrial chip processing.',
    keySpecs: [
      { label: 'Caliber / Sizes', value: '35–45mm (Baby), 45–55mm (Table), 55–80mm (Processing)' },
      { label: 'Surface Finish', value: '100% Hydro-washed clean skin OR natural dirt-bound' },
      { label: 'Dry Matter Content', value: '20% to 24% high solids, low reducing sugars' },
      { label: 'Shipping Terms', value: 'FOB Karachi Port / CIF Jebel Ali, Dammam, Rotterdam' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'veg-chillies-g4-red',
    name: 'Green Chillies & Red Chilli (High Pungency)',
    botanicalName: 'Capsicum annuum (ہری اور لال مرچ)',
    variety: 'G4 Hot Green Chilli, Bullet Chilli & Kunri Long Red Chilli',
    category: 'Spices & Hot Produce',
    hsCode: '0709.60.00 (Fresh) / 0904.21.10 (Dried Red)',
    origin: 'Kunri (Chilli Capital of Asia) & Jhelum Green Corridors, Pakistan',
    seasonality: 'Round the Year (Multi-cycle open field & tunnel harvests)',
    packagingOptions: [
      '3kg, 4kg, 5kg Ventilated Corrugated Export Master Cartons',
      'Food-Grade Micro-Perforated Punnets (250g / 500g)',
      'Air Cargo Thermal Pallet Blankets with dry cooling packs'
    ],
    shelfLife: '21 to 28 Days under unbroken chilled air chain (+7°C to +10°C)',
    storageTemp: '+7°C to +10°C / 90–95% RH (High-Humidity Chilled)',
    shippingMode: 'Commercial Air Cargo Flights / Expedited Ocean Reefers',
    moq: '1,000 kg (Commercial Air Cargo) or 1 x 20ft/40ft Reefer',
    description: 'Vibrant, sharp, and highly pungent green and red chillies with glossy unblemished skin and firm flesh. Sourced directly from Kunri and Punjab grower networks for maximum Scoville heat, fresh green calyxes, and spicy aroma.',
    keySpecs: [
      { label: 'Chilli Length', value: '6cm–10cm (G4 Hot) / 4cm–6cm (Bullet) / 8cm–12cm (Red)' },
      { label: 'Pungency Level', value: 'High Scoville Heat (SHU 40,000–75,000+)' },
      { label: 'Calyx & Stem', value: '100% Intact fresh green stems and crisp turgid calyx' },
      { label: 'Shipping Terms', value: 'FOB Karachi / Air CFR Gulf & UK Airports / CIF' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'veg-fresh-turnips',
    name: 'Fresh Turnips (Seasonal Produce)',
    botanicalName: 'Brassica rapa subsp. rapa (تازہ شلجم)',
    variety: 'Purple Top White Globe & Tender Sweet Snowball Turnips',
    category: 'Root Vegetables',
    hsCode: '0706.90.00',
    origin: 'Central Punjab Fertile River Basins & Jhelum Agro Hub, Pakistan',
    seasonality: 'November to March (Winter Season Produce)',
    packagingOptions: [
      '5kg & 10kg Ventilated Telescopic Corrugated Master Boxes',
      '10kg Breathable Mesh Bags with internal protection sheets',
      'Air Freight Insulated Master Cartons'
    ],
    shelfLife: '30 to 45 Days at 0°C to +2°C (95% RH)',
    storageTemp: '0°C to +2°C / 95% RH (High-humidity chilled environment)',
    shippingMode: '40ft Reefer Container (24–26 MT) or Daily Air Freight Lots',
    moq: '2,000 kg (Air Freight) or 1 x 40ft Reefer (24 Metric Tons)',
    description: 'Crisp, sweet, and succulent winter turnips grown in rich alluvial loam. Carefully selected for bright purple crowns, pristine snow-white base, and tender, non-fibrous edible texture. Hydro-cooled to preserve farm freshness.',
    keySpecs: [
      { label: 'Caliber / Sizes', value: '50mm–70mm (Standard Table), 70mm–90mm (Commercial)' },
      { label: 'Preparation', value: 'Mechanically washed, hydro-cooled, root hairs trimmed' },
      { label: 'Texture & Pith', value: 'Dense solid white flesh, zero woodiness or spongy core' },
      { label: 'Shipping Terms', value: 'FOB Karachi Port / CIF Gulf Ports (Dubai, Dammam, Salalah)' }
    ],
    imageUrl: '/images/fresh_turnips_export.jpg'
  },
  {
    id: 'veg-fresh-carrots',
    name: 'Fresh Carrots (Pakistani Sweet Red & Kuroda)',
    botanicalName: 'Daucus carota subsp. sativus (تازہ گاجر)',
    variety: 'Deep Lycopene Red Desi Carrots & Kuroda Orange Hybrid',
    category: 'Root Vegetables',
    hsCode: '0706.10.00',
    origin: 'Jhelum, Sahiwal & Sheikhupura Agro Corridors, Punjab, Pakistan',
    seasonality: 'December to April (Peak Winter Crop)',
    packagingOptions: [
      '10kg Transparent Polyethylene (PE) liner inside corrugated cartons',
      '10kg & 15kg Ventilated Plastic Export Crates',
      '20kg Jute / Woven mesh bags for regional refrigerated transport'
    ],
    shelfLife: '45 to 60 Days under controlled temperature (0°C to +1°C)',
    storageTemp: '0°C to +1°C / 95–98% RH (High-humidity reefer storage)',
    shippingMode: '40ft Reefer Container (26–28 Metric Tons)',
    moq: '1 x 40ft FCL Reefer Container (Approx. 26–28 Metric Tons)',
    description: 'Renowned Pakistani winter red carrots packed with natural lycopene, vibrant ruby-red color, and exceptional sweetness. Hydro-cooled immediately after harvest to preserve crunchiness for overseas shipment to Gulf and European markets.',
    keySpecs: [
      { label: 'Length & Diameter', value: 'Length: 16cm–24cm | Diameter: 25mm–42mm (Straight)' },
      { label: 'Washing & Polish', value: 'Mechanically washed, polished, tops trimmed, hydro-cooled' },
      { label: 'Sweetness & Core', value: 'High brix natural sweetness, tender juicy small core' },
      { label: 'Shipping Terms', value: 'FOB Karachi Port / CIF Middle East & GCC Ports' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'veg-fresh-okra',
    name: 'Fresh Green Okra (Lady Finger / Bhindi)',
    botanicalName: 'Abelmoschus esculentus (تازہ بھنڈی)',
    variety: 'Sabz Pari, Arka Anamika & Tender Five-Ridge Export Grade',
    category: 'Fruit & Pod Vegetables',
    hsCode: '0709.99.90',
    origin: 'Punjab Fertile Plains & Sindh River Corridors, Pakistan',
    seasonality: 'March to November (Extended Summer & Monsoon Crop)',
    packagingOptions: [
      '4kg & 5kg Ventilated Telescopic Corrugated Master Cartons',
      '5kg Breathable Air-Cooled Plastic Crates with protective paper liners',
      'Food-Grade Micro-Perforated Punnets (250g / 500g) inside air cargo boxes'
    ],
    shelfLife: '10 to 14 Days under unbroken chilled chain (+7°C to +10°C)',
    storageTemp: '+7°C to +10°C / 90–95% RH (Chilled, Anti-Chilling Injury)',
    shippingMode: 'Commercial Air Cargo Flights / Expedited Gulf Reefer',
    moq: '1,000 kg (Commercial Air Cargo) or 1 x 20ft/40ft Reefer',
    description: 'Tender, young, dark emerald-green Pakistani okra pods harvested at peak freshness before fibrous hardening. Hand-sorted for crisp snap, intact calyx stems, soft non-woody seeds, and zero bruising for rapid air freight to UK, EU, and GCC supermarkets.',
    keySpecs: [
      { label: 'Pod Length / Grade', value: '6cm–9cm (Tender Baby), 9cm–12cm (Standard Export Grade)' },
      { label: 'Harvest & Pre-Cooling', value: 'Handpicked early morning & forced-air cooled within 3 hours' },
      { label: 'Texture & Pod State', value: 'Bright dark-green glossy ridges, 100% snapping tender pods' },
      { label: 'Shipping Terms', value: 'FOB Karachi / Air CFR London, Gulf & EU Airports / CIF' }
    ],
    imageUrl: '/images/fresh_okra_export.jpg'
  },
  {
    id: 'veg-bitter-gourd',
    name: 'Fresh Bitter Gourd (Karela / Bitter Melon)',
    botanicalName: 'Momordica charantia (تازہ کریلا)',
    variety: 'Desi Green Long Karela & Faisalabad Hybrid Dark Emerald',
    category: 'Gourds & Vine Vegetables',
    hsCode: '0709.99.90',
    origin: 'Jhelum, Faisalabad & Central Punjab Agro Belts, Pakistan',
    seasonality: 'March to October (Peak Spring & Summer Harvest)',
    packagingOptions: [
      '5kg & 8kg Ventilated Corrugated Export Master Cartons',
      '10kg Breathable Stackable Plastic Export Crates',
      'Air Cargo Insulated Pallet Cartons with moisture-absorbent sheets'
    ],
    shelfLife: '14 to 21 Days at +10°C to +12°C (85–90% RH)',
    storageTemp: '+10°C to +12°C / 85–90% RH (Chilled Ventilated Chain)',
    shippingMode: 'Commercial Air Cargo Flights / 40ft Reefer (GCC & UK)',
    moq: '1,000 kg (Commercial Air Cargo) or 1 x 20ft/40ft Reefer',
    description: 'Firm, deeply ridged Pakistani green bitter gourds (Karela) renowned for authentic bitter-tonic richness, glossy emerald-green tubercles, and dense crisp flesh. Graded for uniform size and zero yellowing, packed in ventilated boxes for UK, GCC, and international specialty supermarkets.',
    keySpecs: [
      { label: 'Fruit Size & Weight', value: '14cm–22cm Length | 80g–150g per firm unyellowed gourd' },
      { label: 'Maturity & Skin', value: 'Harvested crisp emerald-green, zero overripe orange seeds' },
      { label: 'Cold-Chain Handling', value: 'Pre-cooled to +11°C to prevent chilling injury & dehydration' },
      { label: 'Shipping Terms', value: 'FOB Karachi / Air CFR UK, Dubai, Doha & European Hubs' }
    ],
    imageUrl: '/images/bitter_gourd_export.jpg'
  }
];

export const VEGETABLE_SPECS_TABLE = [
  {
    name: 'Fresh Whole White Garlic',
    botanical: 'Allium sativum (لہسن)',
    origin: 'Punjab & Northern Valleys, Pakistan',
    packaging: '5kg, 10kg, 20kg Leno Mesh Sacks & Cartons',
    storageTemp: '-1°C to 0°C (65% RH)',
    shippingMode: '40ft Reefer Container (26–28 MT)'
  },
  {
    name: 'Fresh Ginger Rhizomes',
    botanical: 'Zingiber officinale (ادرک)',
    origin: 'River Valley Agro Belts, Pakistan',
    packaging: '10kg Crates, Cartons & Wooden Crates',
    storageTemp: '+12°C to +14°C (85% RH)',
    shippingMode: '40ft Reefer (+12°C) / Air Cargo'
  },
  {
    name: 'Premium Red Onions',
    botanical: 'Allium cepa (لال پیاز)',
    origin: 'Sindh (Nasarpur) & Punjab, Pakistan',
    packaging: '10kg, 25kg, 50kg Red Leno Mesh Bags',
    storageTemp: '0°C to +4°C (65–70% RH)',
    shippingMode: '40ft High Cube Reefer (28–29 MT)'
  },
  {
    name: 'Export Potatoes (Mozika/Asterix/Rosetta)',
    botanical: 'Solanum tuberosum (آلو)',
    origin: 'Okara, Sahiwal & Jhelum, Punjab',
    packaging: '10kg, 25kg Mesh Sacks & 1T Jumbo Bins',
    storageTemp: '+4°C to +8°C (85–90% RH)',
    shippingMode: '40ft High Cube Reefer (+4°C, 28–30 MT)'
  },
  {
    name: 'Green Chillies & Red Chilli',
    botanical: 'Capsicum annuum (مرچ)',
    origin: 'Kunri & Jhelum Green Corridors',
    packaging: '3kg, 4kg, 5kg Ventilated Corrugated Boxes',
    storageTemp: '+7°C to +10°C (90–95% RH)',
    shippingMode: 'Air Cargo Flights / Fast Reefer'
  },
  {
    name: 'Fresh Turnips (Seasonal Produce)',
    botanical: 'Brassica rapa (تازہ شلجم)',
    origin: 'Central Punjab River Basins, Pakistan',
    packaging: '5kg, 10kg Telescopic Cartons & Mesh',
    storageTemp: '0°C to +2°C (95% RH)',
    shippingMode: '40ft Reefer Container (24–26 MT)'
  },
  {
    name: 'Fresh Carrots (Pakistani Red & Kuroda)',
    botanical: 'Daucus carota (تازہ گاجر)',
    origin: 'Jhelum & Sahiwal Agro Belts',
    packaging: '10kg PE Liner Master Cartons & Crates',
    storageTemp: '0°C to +1°C (95–98% RH)',
    shippingMode: '40ft Reefer Container (26–28 MT)'
  },
  {
    name: 'Fresh Green Okra (Lady Finger / Bhindi)',
    botanical: 'Abelmoschus esculentus (تازہ بھنڈی)',
    origin: 'Punjab & Sindh Agro Belts, Pakistan',
    packaging: '4kg, 5kg Ventilated Cartons & Punnets',
    storageTemp: '+7°C to +10°C (90–95% RH)',
    shippingMode: 'Air Cargo Flights / Fast Reefer'
  },
  {
    name: 'Fresh Bitter Gourd (Karela)',
    botanical: 'Momordica charantia (تازہ کریلا)',
    origin: 'Jhelum & Central Punjab, Pakistan',
    packaging: '5kg, 8kg Ventilated Cartons & Crates',
    storageTemp: '+10°C to +12°C (85–90% RH)',
    shippingMode: 'Air Cargo Flights / Fast Reefer'
  }
];

export const VEGETABLE_STEPS = [
  {
    step: '01',
    title: 'Order Sourcing & Quality Inspection',
    description: 'Direct procurement contracts with GlobalGAP and certified commercial farm clusters across Jhelum and Punjab. Field agronomy teams inspect crop health, pest-free status, and physiological maturity before harvest.'
  },
  {
    step: '02',
    title: 'Sorting, Cleaning & Grading',
    description: 'Automated conveyor lines wash (where specified), air dry, brush, and grade produce by millimeter caliber and weight into uniform export classes, removing blemishes, cuts, and undersized units.'
  },
  {
    step: '03',
    title: 'Phytosanitary Certification & Custom Packaging',
    description: 'Mandatory pre-shipment inspection by the Department of Plant Protection (DPP). Produce is packed in breathable leno mesh bags, telescopic corrugated cartons, or OEM private-label packaging with lot traceability codes.'
  },
  {
    step: '04',
    title: 'Temperature-Controlled Shipment & On-Time Delivery',
    description: 'Immediate blast pre-cooling down to pulp target temperature. Fast dispatch in temperature-monitored refrigerated containers (Reefers) via Karachi Port or expedited air freight from nearby international cargo hubs.'
  }
];

export const VEGETABLE_VALUE_PROPS = [
  {
    title: '100% Farm Fresh & Handpicked',
    subtitle: 'Direct Sourcing from Certified Growers',
    description: 'Zero third-party middlemen. We harvest directly from prime fertile alluvial soils across Punjab, ensuring field-to-packhouse turnaround within hours for unmatched natural freshness, moisture, and crisp texture.'
  },
  {
    title: 'Strict Quality Control',
    subtitle: 'Grading & Phytosanitary Inspection',
    description: 'Every consignment undergoes multi-stage manual and optical screening, caliber measurement, and mandatory official Phytosanitary & Pest-Free certification complying with EU, UK, and GCC import protocols.'
  },
  {
    title: 'Cold Chain Logistics',
    subtitle: 'Temperature-Controlled Air & Sea Options',
    description: 'Unbroken refrigerated chain with computerized data loggers. Precision temperature and humidity management in modern 40ft High Cube Reefer containers and commercial air freight for perishables.'
  },
  {
    title: 'Custom B2B Packaging',
    subtitle: 'Mesh Bags, Cartons & OEM Branding',
    description: 'Tailored for retail chains, wholesale food markets, and restaurant distributors. Available in 5kg, 10kg, 25kg, 50kg leno mesh bags, heavy burst-strength corrugated boxes, wooden crates, and your custom brand graphics.'
  }
];
