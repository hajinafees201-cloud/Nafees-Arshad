import { VegetableProduct } from '../types';

export const VEGETABLE_PRODUCTS: VegetableProduct[] = [
  {
    id: 'veg-garlic-grade-a',
    name: 'Fresh Whole White Garlic Bulbs (Grade A)',
    botanicalName: 'Allium sativum',
    variety: 'NARC-G1 Giant White Garlic (55mm–75mm+)',
    category: 'Bulb Vegetables',
    hsCode: '0703.20.00',
    origin: 'Punjab & Northern Agricultural Valleys, Pakistan',
    seasonality: 'Round the Year (Controlled Cold Ventilation)',
    packagingOptions: [
      '10kg & 20kg White/Red Heavy-Duty Leno Mesh Bags',
      '10kg Ventilated Corrugated Master Cartons with dividers',
      'Retail Net Packs (3 pcs / 5 pcs garlic with custom barcode tags)'
    ],
    shelfLife: '120 to 180 Days at -1°C to 0°C (65% RH)',
    storageTemp: '-1°C to 0°C / 65% RH (Dry & Ventilated Reefer)',
    shippingMode: '40ft Reefer Ocean Container (26 MT) or 20ft FCL (12 MT)',
    moq: '1 x 20ft FCL (Approx. 12 Metric Tons) / 1 x 40ft FCL (26 MT)',
    description: 'Pristine export-grade whole white garlic bulbs featuring tight papery white skins, plump aromatic cloves, and clean trimmed roots. Naturally sun-cured, graded by caliber, and certified rot-free.',
    keySpecs: [
      { label: 'Caliber / Size', value: '55mm+, 60mm+, 65mm+, 75mm+ (Grade A Jumbo)' },
      { label: 'Clove Structure', value: '6 to 10 massive dense cloves per bulb' },
      { label: 'Moisture Curing', value: 'Sun-cured tight necks, < 65% pulp moisture' },
      { label: 'Phytosanitary', value: '100% DPP inspected, sprout & mite free' }
    ],
    imageUrl: '/images/garlic_bulbs_export.jpg'
  },
  {
    id: 'veg-ginger-rhizomes',
    name: 'Fresh Ginger Rhizomes (Global Standards)',
    botanicalName: 'Zingiber officinale',
    variety: 'Bold Fresh Agricultural Ginger (Washed / Export Grade)',
    category: 'Rhizomes & Roots',
    hsCode: '0910.11.00',
    origin: 'River Valley Agro Belts, Pakistan',
    seasonality: 'October to April (Peak Fresh Harvest)',
    packagingOptions: [
      '10kg & 13.6kg (30 lbs) Heavy-Duty Air-Cooled Mesh Sacks',
      '10kg Corrugated Master Cartons with ventilation vents',
      'Air Freight Palletized ISPM-15 Crates'
    ],
    shelfLife: '60 to 90 Days under proper temperature (+12°C)',
    storageTemp: '+12°C to +14°C / 85% RH (Non-chilling Reefer)',
    shippingMode: '40ft High Cube Reefer (+12°C) or Commercial Air Cargo',
    moq: '5,000 kg (Commercial Air Cargo) or 1 x 40ft FCL Reefer (24 MT)',
    description: 'High-aroma, fiber-balanced fresh ginger rhizomes washed thoroughly to remove field soil. Selected for thick fleshy hands, natural golden sheen, plump joints, and high gingerol essential oil potency.',
    keySpecs: [
      { label: 'Rhizome Hand Size', value: '150g, 200g, 250g+ thick mature hands' },
      { label: 'Washing State', value: '100% Washed, air-dried, zero surface dirt' },
      { label: 'Pungency Index', value: 'High gingerol content & spicy aromatic oils' },
      { label: 'Quality Standard', value: 'Codex Alimentarius & GlobalGAP Compliant' }
    ],
    imageUrl: '/images/ginger_rhizomes_export.jpg'
  },
  {
    id: 'veg-onions-potatoes',
    name: 'Fresh Onions & Potatoes (Export Pack)',
    botanicalName: 'Allium cepa & Solanum tuberosum',
    variety: 'Sindh Red / Swat Golden Onions & Mozika / Dutch Potatoes',
    category: 'Bulb & Tuber Export Packs',
    hsCode: '0703.10.00 / 0701.90.00',
    origin: 'Okara, Sahiwal, Gujranwala & Sindh Agricultural Belts',
    seasonality: 'Round the Year (Multi-crop rotational harvests)',
    packagingOptions: [
      '10kg, 25kg, 50kg Red/Yellow Leno Mesh Sacks',
      'Heavy-Duty Polypropylene Export Bags with UV stabilizer',
      '1 Ton ISPM-15 Heat-Treated Palletized Bins'
    ],
    shelfLife: '60 to 120 Days under conditioned storage',
    storageTemp: 'Onions: 0°C to +4°C | Potatoes: +3°C to +8°C',
    shippingMode: '40ft High Cube Reefer (+4°C Set Point, 28–30 MT)',
    moq: '1 x 40ft FCL Reefer Container (Approx. 28–30 Metric Tons)',
    description: 'Crisp, pungent red and golden onions with firm dry skins paired alongside high-dry-matter washed potatoes. Tailored for maritime container shipping with sprout inhibition and zero weight loss during voyages.',
    keySpecs: [
      { label: 'Onion Caliber', value: '45–55mm, 55–65mm, 65–85mm (Graded)' },
      { label: 'Potato Sizes', value: '35–45mm (Baby), 45–55mm (Table), 55–80mm (Jumbo)' },
      { label: 'Dry Matter', value: '20–24% high solids, low reducing sugars' },
      { label: 'Container Load', value: '28–30 MT per 40ft High-Cube Reefer' }
    ],
    imageUrl: '/images/onions_potatoes_export.jpg'
  },
  {
    id: 'veg-seasonal-herbs',
    name: 'Seasonal Vegetables & Herbs',
    botanicalName: 'Capsicum annuum, Lycopersicon, Coriandrum sativum',
    variety: 'G4 Hot Chilies, Bell Peppers, Vine Tomatoes & Fresh Herbs',
    category: 'Horticultural Produce & Fresh Herbs',
    hsCode: '0709.60.00 / 0702.00.00 / 0709.99.00',
    origin: 'Gujranwala, Kunri & Punjab Green Belt Farm Hubs',
    seasonality: 'Year-Round Harvests (Daily Morning Picks)',
    packagingOptions: [
      '3kg, 4kg, 5kg Ventilated Corrugated Export Master Cartons',
      'Food-Grade Micro-Perforated Punnets (250g / 500g)',
      'Air Cargo Pallets with Thermal Insulating Foil Jackets'
    ],
    shelfLife: '14 to 28 Days under unbroken cold chain (+7°C to +10°C)',
    storageTemp: '+7°C to +10°C / 90–95% RH (High Humidity Chilled)',
    shippingMode: 'Commercial Air Cargo Flights / Expedited Ocean Reefers',
    moq: '1,000 kg (Commercial Air Cargo) or 1 x 20ft/40ft Reefer',
    description: 'Harvest-fresh green chilies with intact calyxes, glossy sweet bell peppers, field-ripened tomatoes, and aromatic culinary herbs. Rapid hydro-cooled to lock in field crunch, color, and natural flavor.',
    keySpecs: [
      { label: 'Chili Length', value: '6cm–9cm (G4 Hot) / 4cm–6cm (Bullet Chili)' },
      { label: 'Stem Freshness', value: '100% Intact green stems and fresh turgid calyx' },
      { label: 'Pesticide Status', value: 'Codex & EU MRL Compliant, lab certified' },
      { label: 'Handling Speed', value: 'Packed and pre-cooled within 6 hours of harvest' }
    ],
    imageUrl: '/images/seasonal_veg_herbs.jpg'
  }
];

export const VEGETABLE_SPECS_TABLE = [
  {
    name: 'Red & Yellow Onions',
    botanical: 'Allium cepa',
    origin: 'Punjab & Sindh, Pakistan',
    packaging: '5kg, 10kg, 25kg, 50kg Leno Mesh Bags & Cartons',
    storageTemp: '0°C to +4°C (65% RH)',
    shippingMode: '40ft Reefer Container / Sea Freight'
  },
  {
    name: 'Fresh Potatoes (Mozika / Dutch)',
    botanical: 'Solanum tuberosum',
    origin: 'Okara & Gujranwala, Punjab',
    packaging: '10kg, 25kg, 50kg PP Sacks / Pallet Bins / Cartons',
    storageTemp: '+3°C to +8°C (85% RH)',
    shippingMode: '40ft High Cube Reefer Container (+4°C)'
  },
  {
    name: 'Green Chilies & Capsicum',
    botanical: 'Capsicum annuum',
    origin: 'Kunri & Gujranwala Agro Belts',
    packaging: '3kg, 4kg, 5kg Ventilated Corrugated Cartons',
    storageTemp: '+7°C to +10°C (90% RH)',
    shippingMode: 'Air Cargo Freight / Fast Reefer'
  },
  {
    name: 'Fresh Garlic (NARC-G1) & Ginger',
    botanical: 'Allium sativum & Z. officinale',
    origin: 'Punjab & KPK Farms',
    packaging: '5kg, 10kg, 20kg Mesh Bags / Cartons',
    storageTemp: 'Garlic: -1°C to 0°C | Ginger: +12°C',
    shippingMode: '40ft Reefer Ocean Container'
  },
  {
    name: 'Fresh Tomatoes (Roma / Round)',
    botanical: 'Lycopersicon esculentum',
    origin: 'Gujranwala & Central Punjab',
    packaging: '5kg, 6kg Telescopic Corrugated Boxes',
    storageTemp: '+10°C to +12°C (85% RH)',
    shippingMode: 'Air Cargo / Expedited Reefer'
  },
  {
    name: 'Fresh Okra (Lady Finger)',
    botanical: 'Abelmoschus esculentus',
    origin: 'Punjab Green Belts',
    packaging: '4kg, 5kg Ventilated Export Cartons',
    storageTemp: '+8°C to +10°C (90% RH)',
    shippingMode: 'Commercial Air Cargo (Daily Flights)'
  },
  {
    name: 'Fresh Brinjal (Eggplant)',
    botanical: 'Solanum melongena',
    origin: 'Punjab Green Belts',
    packaging: '5kg Corrugated Cartons with protective sheets',
    storageTemp: '+10°C to +12°C (85% RH)',
    shippingMode: 'Air Cargo / Sea Reefer'
  }
];

export const VEGETABLE_STEPS = [
  {
    step: '01',
    title: 'Order Sourcing & Quality Inspection',
    description: 'Direct procurement contracts with GlobalGAP and certified commercial farm clusters across Gujranwala and Punjab. Field agronomy teams inspect crop health, pest-free status, and physiological maturity before harvest.'
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
    description: 'Tailored for retail chains, wholesale food markets, and restaurant distributors. Available in 5kg, 10kg, 25kg, 50kg leno mesh bags, heavy burst-strength corrugated boxes, jute sacks, and your custom brand graphics.'
  }
];
