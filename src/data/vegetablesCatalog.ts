export interface VegetableCatalogItem {
  id: string;
  name: string;
  urduName: string;
  botanicalName: string;
  variety: string;
  hsCode: string;
  origin: string;
  availableSizes: string;
  dryingAndMoisture: string;
  shelfLife: string;
  storageTemp: string;
  packagingTypes: string[];
  shippingTerms: string;
  containerLoad: string;
  description: string;
  imageUrl: string;
  inSeasonMonths: string;
}

export const PAKISTANI_EXPORT_VEGETABLES: VegetableCatalogItem[] = [
  {
    id: 'garlic-narc-g1',
    name: 'Fresh Whole White Garlic',
    urduName: 'تازہ سفید لہسن',
    botanicalName: 'Allium sativum',
    variety: 'NARC-G1 Giant White Garlic & Local Desi White',
    hsCode: '0703.20.00',
    origin: 'Punjab & Northern Agricultural Valleys, Pakistan',
    availableSizes: '50mm+, 55mm+, 60mm+, 65mm–75mm+ (Grade A Jumbo)',
    dryingAndMoisture: 'Naturally sun-cured & hot-air dried tight necks; pulp moisture < 65%; roots trimmed to 3mm; zero fungal rot.',
    shelfLife: '6 to 9 Months in continuous cold chain (-1°C to 0°C, 65% RH)',
    storageTemp: '-1°C to 0°C / 65% Relative Humidity (Dry & Ventilated)',
    packagingTypes: [
      '5kg, 10kg, 20kg Heavy-Duty Red/White Leno Mesh Bags',
      '10kg Ventilated Corrugated Master Cartons with dividers',
      'Retail net packs (3 pcs / 5 pcs garlic with custom barcode tags)'
    ],
    shippingTerms: 'FOB Karachi Port (PKKHI) / CIF Worldwide Destination Ports',
    containerLoad: '40ft High Cube Reefer (26–28 Metric Tons) / 20ft Reefer (12 MT)',
    description: 'Pristine export-grade whole white garlic bulbs featuring tight papery white skins, plump aromatic cloves, and clean trimmed roots. Naturally sun-cured, graded by millimeter caliber, and certified rot-free.',
    imageUrl: '/images/garlic_bulbs_export.jpg',
    inSeasonMonths: 'Round the Year (Cold-Ventilated Controlled Atmosphere)'
  },
  {
    id: 'fresh-ginger-rhizomes',
    name: 'Fresh Ginger Rhizomes',
    urduName: 'تازہ ادرک',
    botanicalName: 'Zingiber officinale',
    variety: 'Bold Fresh Agricultural Ginger (Washed & Unwashed)',
    hsCode: '0910.11.00',
    origin: 'River Valley Agro Belts & Sub-Tropical Foothills, Pakistan',
    availableSizes: '150g, 200g, 250g+ thick mature hands & plump fingers',
    dryingAndMoisture: 'Available 100% hydro-washed (soil-free, air-dried) or unwashed natural farm origin; moisture controlled < 12% variation, rich in gingerol potency.',
    shelfLife: '60 to 90 Days under proper temperature (+12°C)',
    storageTemp: '+12°C to +14°C / 85% RH (Non-chilling Reefer)',
    packagingTypes: [
      '10kg & 13.6kg (30 lbs) Heavy-Duty Air-Cooled Plastic Crates',
      '10kg Corrugated Master Cartons with dual-sided ventilation holes',
      'ISPM-15 Heat-Treated Wooden Export Crates for maritime pallets'
    ],
    shippingTerms: 'FOB Karachi Port / CIF Major Global Ports',
    containerLoad: '40ft High Cube Reefer (+12°C, 24–26 MT) or Commercial Air Cargo',
    description: 'High-aroma, fiber-balanced fresh ginger rhizomes washed thoroughly to remove field soil. Selected for thick fleshy hands, natural golden sheen, plump joints, and high gingerol essential oil potency.',
    imageUrl: '/images/fresh_ginger_export.jpg',
    inSeasonMonths: 'October to May (Peak Fresh Harvest)'
  },
  {
    id: 'red-onions-sindh-swat',
    name: 'Premium Red Onions',
    urduName: 'لال پیاز',
    botanicalName: 'Allium cepa',
    variety: 'Sindh Red (Nasarpur), Swat Golden Red & Punjab Hybrid',
    hsCode: '0703.10.00',
    origin: 'Sindh (Nasarpur, Matiari) & Punjab Agricultural Corridors, Pakistan',
    availableSizes: 'Sorted sizes: 45mm+, 50mm+, 55mm+, 60mm–85mm (Graded Jumbo)',
    dryingAndMoisture: 'Naturally cured 3–4 layers of tight crispy outer skin; thin dry necks; moisture stabilized; sprout-inhibited for long ocean transits.',
    shelfLife: '90 to 120 Days under conditioned cold chain',
    storageTemp: '0°C to +4°C / 65–70% RH (Ventilated Dry Reefer)',
    packagingTypes: [
      '5kg, 10kg, 25kg, 50kg UV-Stabilized Red Leno Mesh Bags',
      'Heavy-duty Polypropylene (PP) bags with custom buyer tags',
      '1 Ton ISPM-15 Wooden Palletized Jumbo Bins'
    ],
    shippingTerms: 'FOB Karachi Port (PKKHI) / CIF Worldwide Ports',
    containerLoad: '40ft High Cube Reefer (28–29 Metric Tons, approx. 1,160 bags x 25kg)',
    description: 'Crisp, pungent red onions with deep purple-red papery skin and firm dense flesh. High dry matter prevents rotting during ocean transit to the Middle East, UK, and Southeast Asia.',
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=1200&q=80',
    inSeasonMonths: 'November to June (Sindh & Punjab crops)'
  },
  {
    id: 'potatoes-table-chipping',
    name: 'Export Potatoes (Mozika / Asterix / Lady Rosetta)',
    urduName: 'تازہ برآمدی آلو',
    botanicalName: 'Solanum tuberosum',
    variety: 'Mozika (White), Asterix (Red Skin), Lady Rosetta (Chipping), Santana',
    hsCode: '0701.90.00',
    origin: 'Okara, Sahiwal, Jhelum & Chiniot Potato Belt, Punjab, Pakistan',
    availableSizes: '35–45mm (Baby/Canning), 45–55mm (Table Grade), 55–80mm (Processing/Jumbo)',
    dryingAndMoisture: 'Available 100% mechanically washed clean-skin OR peat/dirt-bound protective natural coating for extended maritime voyage; dry matter 20–24%.',
    shelfLife: '90 to 150 Days under refrigerated storage (+4°C to +8°C)',
    storageTemp: '+4°C to +8°C / 85–90% RH (Sprout-inhibited cold storage)',
    packagingTypes: [
      '10kg, 25kg, 50kg Heavy-Duty Yellow/Red Polypropylene Mesh Sacks',
      '10kg & 15kg Corrugated Telescopic Export Master Boxes',
      '1 Ton Jumbo PP Bulk Bags on wooden pallets'
    ],
    shippingTerms: 'FOB Karachi Port / CIF Jebel Ali, Dammam, Doha, Colombo, Rotterdam',
    containerLoad: '40ft High Cube Reefer (28–30 Metric Tons)',
    description: 'Premier Punjab potatoes cultivated in alluvial silt soils. Mozika offers smooth skin for dining, Asterix delivers deep red skin and golden flesh, while Lady Rosetta is certified high dry-matter for potato crisp processing.',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    inSeasonMonths: 'December to May (Fresh Crop), Year-Round (Cold Stores)'
  },
  {
    id: 'green-chillies-kunri-red',
    name: 'Green Chillies & Red Chilli',
    urduName: 'ہری اور لال مرچ',
    botanicalName: 'Capsicum annuum',
    variety: 'G4 Hot Green Chilli, Bullet Chili & Kunri Long Red Chilli',
    hsCode: '0709.60.00 (Fresh) / 0904.21.10 (Dried Red)',
    origin: 'Kunri (Chilli Capital of Asia) & Jhelum Agro Green Belts, Pakistan',
    availableSizes: '6cm–10cm (G4 Hot), 4cm–6cm (Bullet), 8cm–12cm (Red Chilli)',
    dryingAndMoisture: 'High-pungency export grade (SHU 40,000–75,000+); 100% intact firm green stems & fresh calyxes; pre-cooled within 4 hours of morning harvest.',
    shelfLife: '21 to 28 Days under unbroken chilled air chain (+7°C to +10°C)',
    storageTemp: '+7°C to +10°C / 90–95% RH (High-Humidity Chilled)',
    packagingTypes: [
      '3kg, 4kg, 5kg Ventilated Corrugated Master Cartons',
      'Micro-Perforated Food-Grade Punnets (250g / 500g)',
      'Air Cargo Thermal Pallet Blankets with ice gel packs'
    ],
    shippingTerms: 'FOB Karachi / Air CFR Gulf & European Airports / CIF Maritime Reefer',
    containerLoad: 'Air Cargo Shipments (1,000kg – 5,000kg) or 20ft/40ft Reefer',
    description: 'Vibrant, sharp, and highly pungent green and red chillies with glossy unblemished skin and firm flesh. Sourced directly from Kunri and Punjab grower networks for maximum spice and freshness.',
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1200&q=80',
    inSeasonMonths: 'Round the Year (Multi-cycle open field and tunnel harvests)'
  },
  {
    id: 'fresh-turnips-seasonal',
    name: 'Fresh Turnips (Seasonal Produce)',
    urduName: 'تازہ شلجم',
    botanicalName: 'Brassica rapa subsp. rapa',
    variety: 'Purple Top White Globe & Tender Snowball Turnips',
    hsCode: '0706.90.00',
    origin: 'Punjab Fertile River Basins & Jhelum Agricultural Belt, Pakistan',
    availableSizes: '50mm–70mm (Standard Table), 70mm–90mm (Commercial Caliber)',
    dryingAndMoisture: 'Mechanically washed, hydro-cooled, root hairs and crown trimmed; crisp dense white flesh with zero woodiness or internal cavities.',
    shelfLife: '30 to 45 Days at 0°C to +2°C (95% RH)',
    storageTemp: '0°C to +2°C / 95% RH (High-humidity chilled environment)',
    packagingTypes: [
      '5kg & 10kg Ventilated Telescopic Corrugated Master Boxes',
      '10kg Breathable Mesh Bags with internal protection sheets',
      'Air Freight Insulated Master Cartons'
    ],
    shippingTerms: 'FOB Karachi Port / CIF Gulf Ports (Dubai, Dammam, Salalah, Kuwait)',
    containerLoad: '40ft Reefer Container (24–26 MT) or Daily Air Freight Lots',
    description: 'Crisp, sweet, and succulent winter turnips grown in rich alluvial loam. Carefully selected for bright purple crowns, pristine snow-white base, and tender, non-fibrous edible texture.',
    imageUrl: '/images/fresh_turnips_export.jpg',
    inSeasonMonths: 'November to March (Peak Winter Produce)'
  },
  {
    id: 'fresh-carrots-pakistani-red',
    name: 'Fresh Carrots (Pakistani Sweet Red & Kuroda)',
    urduName: 'تازہ گاجر',
    botanicalName: 'Daucus carota subsp. sativus',
    variety: 'Deep Lycopene Red Desi Carrots & Kuroda Orange Hybrid',
    hsCode: '0706.10.00',
    origin: 'Jhelum, Sahiwal & Sheikhupura Agro Corridors, Punjab, Pakistan',
    availableSizes: 'Length: 16cm–24cm | Caliber Diameter: 25mm–42mm (Straight & Uniform)',
    dryingAndMoisture: 'Washed, mechanically brushed, polished, and hydro-cooled down to +2°C; tops neatly trimmed; high brix sweetness and juicy coreless flesh.',
    shelfLife: '45 to 60 Days under controlled temperature (0°C to +1°C)',
    storageTemp: '0°C to +1°C / 95–98% RH (High-humidity reefer storage)',
    packagingTypes: [
      '10kg Transparent Polyethylene (PE) liner inside corrugated cartons',
      '10kg & 15kg Ventilated Plastic Export Crates',
      '20kg Jute / Woven mesh bags for regional truck transit'
    ],
    shippingTerms: 'FOB Karachi Port / CIF Middle East & GCC Ports',
    containerLoad: '40ft Reefer Container (26–28 Metric Tons)',
    description: 'Renowned Pakistani winter red carrots packed with natural lycopene, vibrant ruby-red color, and exceptional sweetness. Hydro-cooled immediately after harvest to preserve crispness for overseas shipment.',
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=80',
    inSeasonMonths: 'December to April (Winter Season)'
  },
  {
    id: 'fresh-okra-bhindi',
    name: 'Fresh Green Okra (Lady Finger / Bhindi)',
    urduName: 'تازہ بھنڈی',
    botanicalName: 'Abelmoschus esculentus',
    variety: 'Sabz Pari, Arka Anamika & Tender Five-Ridge Export Grade',
    hsCode: '0709.99.90',
    origin: 'Punjab Fertile Plains & Sindh River Corridors, Pakistan',
    availableSizes: 'Tender Baby: 6cm–9cm | Standard Export Grade: 9cm–12cm (Young Snapping Pods)',
    dryingAndMoisture: 'Handpicked early morning before woody fiber sets; forced-air pre-cooled within 3 hours to preserve crisp snap and bright emerald color.',
    shelfLife: '10 to 14 Days under unbroken chilled air & reefer chain (+7°C to +10°C)',
    storageTemp: '+7°C to +10°C / 90–95% RH (Anti-Chilling Injury)',
    packagingTypes: [
      '4kg & 5kg Ventilated Telescopic Corrugated Master Cartons',
      '5kg Breathable Air-Cooled Plastic Crates with paper liners',
      'Micro-Perforated Food-Grade Punnets (250g / 500g) inside air master boxes'
    ],
    shippingTerms: 'FOB Karachi / Air CFR London, Gulf & EU Airports / CIF Maritime Reefer',
    containerLoad: 'Air Cargo Shipments (1,000kg – 5,000kg) or 20ft/40ft Reefer (12–16 MT)',
    description: 'Tender, young, dark emerald-green Pakistani okra pods harvested at peak freshness before fibrous hardening. Hand-sorted for crisp snap, intact calyx stems, soft seeds, and zero bruising.',
    imageUrl: '/images/fresh_okra_export.jpg',
    inSeasonMonths: 'March to November (Peak Summer & Monsoon Crop)'
  },
  {
    id: 'bitter-gourd-karela',
    name: 'Fresh Bitter Gourd (Karela / Bitter Melon)',
    urduName: 'تازہ کریلا',
    botanicalName: 'Momordica charantia',
    variety: 'Desi Green Long Karela & Faisalabad Hybrid Dark Emerald',
    hsCode: '0709.99.90',
    origin: 'Jhelum, Faisalabad & Central Punjab Agro Belts, Pakistan',
    availableSizes: 'Length: 14cm–22cm | Individual Weight: 80g–150g Firm Unyellowed Gourds',
    dryingAndMoisture: 'Harvested at peak crisp green stage with intact bumpy ridges and zero premature yellowing; forced-air cooled to +11°C to prevent moisture loss.',
    shelfLife: '14 to 21 Days under conditioned chilled storage (+10°C to +12°C)',
    storageTemp: '+10°C to +12°C / 85–90% RH (Chilled Ventilated Chain)',
    packagingTypes: [
      '5kg & 8kg Ventilated Corrugated Export Master Cartons',
      '10kg Breathable Stackable Plastic Export Crates',
      'Air Cargo Insulated Pallet Cartons with moisture-absorbent sheets'
    ],
    shippingTerms: 'FOB Karachi / Air CFR UK, Dubai, Doha & European Hubs / CIF',
    containerLoad: 'Air Cargo Shipments (1,000kg – 5,000kg) or 40ft Reefer (16–18 MT)',
    description: 'Firm, deeply ridged Pakistani green bitter gourds (Karela) renowned for authentic bitter-tonic richness, glossy emerald-green tubercles, and dense crisp flesh for UK, GCC, and specialty retail markets.',
    imageUrl: '/images/bitter_gourd_export.jpg',
    inSeasonMonths: 'March to October (Spring & Summer Harvest)'
  }
];

export const CATALOG_COMPANY_CREDENTIALS = {
  companyName: 'Utility Home Exports',
  legalName: 'Utility Home Private Limited',
  division: 'Agricultural Produce & Fresh Vegetables Export Division',
  headquarters: 'Head Office: Jhelum, Pakistan',
  location: 'Head Office: Jhelum, Pakistan',
  ceo: 'Nafees Arshad',
  designation: 'Chief Executive Officer (CEO)',
  officialEmail: 'info@utilityexport.com',
  ceoEmail: 'ceo@utilityexport.com',
  phoneWhatsApp: '+92 300 6474593',
  exportOrigins: 'Punjab River Basins, Sindh & Kunri Agro Corridors, Pakistan',
  shippingHubs: 'Karachi Port (PKKHI), Port Qasim (PKBQM) & Lahore / Sialkot Air Cargo Terminals',
  certifications: [
    'Department of Plant Protection (DPP) Phytosanitary Inspection',
    'ISO 9001:2015 Quality Management System',
    'ISO 22000 / HACCP Food Safety Standard',
    'GlobalGAP Compliant Grower Network',
    'Chamber of Commerce & Industry (GCCI) Registered'
  ],
  incotermsOffered: 'FOB Karachi / CIF Destination Sea Ports / CFR / Air CFR Worldwide'
};
