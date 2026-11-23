import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-himalayan-salt',
    slug: 'himalayan-pink-salt',
    title: 'Himalayan Pink Salt Products',
    subtitle: '100% Raw, Ancient Mineral Salt Sourced from the Khewra Foothills of the Himalayas',
    status: 'active',
    badgeLabel: 'Core Export Line 1 · Active',
    shortDescription: 'Unrefined, unpolluted, and mineral-dense crystal salt excavated directly from centuries-old subterranean rock veins. Supplied in food-grade edible crystals, cooking tiles, handcrafted lamps, and equestrian blocks.',
    fullDescription: 'Utility Home Exports operates direct quarry-to-port supply pipelines for authentic Himalayan Pink Salt from the legendary Khewra mineral corridor in Punjab, Pakistan. Formed over 250 million years ago, our mineral salt is naturally free of modern microplastics and chemical bleaches. We execute multi-stage optical sorting, metal detection, and laboratory chemical analysis to satisfy stringent European, North American, and GCC import compliance standards.',
    heroImage: '/images/pink_salt_banner.jpg',
    origin: 'Salt Range / Khewra Formation, Punjab, Pakistan',
    exportPorts: ['Port Qasim (PKBQM)', 'Karachi Port (PKKHI)'],
    leadTime: '10–14 Days to Port of Loading',
    capacity: '1,500+ Metric Tons / Month',
    certifications: ['ISO 9001:2015', 'ISO 22000 (HACCP)', 'FDA Registered', 'Official Halal Certified', 'Kosher Certified', 'GMP Standard'],
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
        certifications: ['HACCP', 'ISO 22000', 'FDA Registered', 'Halal Certified', 'Kosher Certified'],
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
        name: 'Handcrafted Himalayan Salt Lamps & Decor',
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
        id: 'salt-cooking-tiles',
        name: 'Himalayan Salt Cooking Tiles, Slabs & Bricks',
        categorySlug: 'himalayan-pink-salt',
        subcategory: 'tiles',
        tagline: 'High-Density Gourmet Salt Slabs for Grilling, Searing & Spa Wall Construction',
        description: 'Precision-cut crystalline salt slabs quarried from solid rock veins without fractures or chemical binders. Withstands extreme cooking temperatures up to 450°C (800°F) for table grilling, chilled sushi serving, and architectural speleotherapy wall installations.',
        hsCode: '2501.00.90 / 6802.99',
        moq: '1,000 Units or Combined Container Load',
        grainSizes: [
          'Standard Slab: 8" x 4" x 2" (20 x 10 x 5 cm) · 2.5 kg',
          'Chef Searing Tile: 8" x 8" x 2" (20 x 20 x 5 cm) · 5.0 kg',
          'Large Grilling Block: 12" x 8" x 2" (30 x 20 x 5 cm) · 7.5 kg',
          'Architectural Brick: 8" x 4" x 2.5" with 1-side smooth polish'
        ],
        colorGrades: ['Translucent Peach', 'Marbled Pink-Amber', 'Deep Ruby Veined'],
        certifications: ['Food Contact Safe (FDA / EU)', 'Halal Certified', 'ISPM-15 Wooden Crates'],
        packagingOptions: [
          'Individual Shrink Wrap with Foam Corner Protectors',
          'Corrugated Display Inner Box with Steel Wire Rack Option',
          'Reinforced Master Wooden Crates (ISPM-15 Heat Treated)'
        ],
        containerStuffing: {
          twentyFtFcl: 'Approx. 24–26 MT (Floor or Pallet Loaded)',
          fortyFtFcl: '26 MT (Weight ceiling restricted)',
          palletized: '20 to 22 Heavy Pallets with strap banding'
        },
        keySpecs: [
          { label: 'Thermal Resistance', value: '-20°C to +450°C (-4°F to +800°F)' },
          { label: 'Surface Finish', value: 'Precision cut diamond wire saw; smooth planar sides' },
          { label: 'Density', value: '2.16 g/cm³ solid compact mineral' },
          { label: 'Purity', value: '100% natural sodium chloride crystal' }
        ],
        applications: [
          'High-end culinary gourmet & BBQ hardware brands',
          'Restaurant tabletop live searing & cold sashimi platters',
          'Halotherapy salt cave & luxury sauna architectural walls',
          'Premium culinary gifting & holiday cookware sets'
        ],
        imageUrl: '/images/pink_salt_banner.jpg'
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
        answer: 'Our standard MOQ for edible fine/coarse salt, cooking tiles, and animal licks is 1 x 20ft Full Container Load (FCL), which accommodates approximately 24 to 27 Metric Tons. For handcrafted salt lamps, our MOQ is 500 units or a mixed container load with salt products.'
      },
      {
        question: 'Can Utility Home Exports provide private label packaging and custom retail branding?',
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
    id: 'cat-fresh-produce',
    slug: 'fresh-vegetables',
    title: 'Fresh Agricultural Produce',
    subtitle: 'Farm-Fresh Export Vegetables & Agricultural Commodities from Fertile Punjab Agro Belts',
    status: 'active',
    badgeLabel: 'Core Export Line 2 · Active',
    shortDescription: 'Export-grade Fresh Garlic (NARC-G1), Fresh Ginger Rhizomes, Red Onions, Export Potatoes (Mozika/Asterix), Pungent Green & Red Chillies, and Seasonal Root Vegetables packed in ventilated cold-chain containers.',
    fullDescription: 'Utility Home Exports operates direct farm-to-port supply pipelines for premium fresh vegetables sourced from the fertile agricultural river basins of Jhelum, Okara, and the Punjab agrarian belt in Pakistan. Graded, hydro-cooled, mechanically washed, phytosanitary certified by the Department of Plant Protection (DPP), and dispatched in temperature-controlled reefer containers (40ft High Cube) and express air cargo.',
    heroImage: '/images/seasonal_veg_herbs.jpg',
    origin: 'Jhelum, Okara & Punjab Agricultural Belts, Pakistan',
    exportPorts: ['Karachi Port (PKKHI) Reefer Berths', 'Port Qasim (PKBQM)', 'Jinnah Int Airport (Air Cargo)'],
    leadTime: 'Harvest & Packhouse Loading in 24–48 Hours',
    capacity: '2,500+ Metric Tons / Month',
    certifications: ['GlobalGAP Compliant', 'DPP Phytosanitary Certified', 'ISO 22000 (HACCP)', 'MRL Tested', 'Official Halal Certified'],
    packagingTypes: [
      {
        title: '5kg to 50kg Heavy-Duty Leno Mesh Sacks',
        description: 'High-breathability red, yellow, and green monofilament mesh bags for onions, potatoes, and garlic.',
        capacity: '5kg, 10kg, 25kg, 50kg'
      },
      {
        title: 'Ventilated Telescopic Corrugated Export Boxes',
        description: 'Moisture-resistant 5-ply cartons with air circulation holes for chillies, ginger, and fresh roots.',
        capacity: '4kg, 5kg, 10kg, 13.6kg (30 lbs)'
      },
      {
        title: 'Heavy-Duty Air-Cooled Plastic Crates',
        description: 'Stackable food-grade plastic field crates for delicate root and rhizome transits.',
        capacity: '10kg & 15kg Net Weight'
      }
    ],
    variants: [
      {
        id: 'veg-garlic-narc-g1',
        name: 'Fresh Whole White Garlic (NARC-G1 Export Grade)',
        categorySlug: 'fresh-vegetables',
        subcategory: 'bulbs',
        tagline: 'Jumbo Size, High-Aroma White Garlic Bulbs with High Allicin Potency',
        description: 'Pakistan’s premier NARC-G1 garlic cultivar celebrated for colossal bulb diameters (55mm to 75mm+), tight snow-white skins, and high allicin therapeutic content. Naturally field-cured and graded to zero defects.',
        hsCode: '0703.20.00',
        moq: '1 x 40ft High Cube Reefer (Approx. 26–28 Metric Tons)',
        grainSizes: [
          'Jumbo Extra Grade: 60mm - 75mm+ bulb caliber',
          'Standard Export Grade: 50mm - 60mm caliber',
          'Clove Count: 6 to 10 massive dense cloves per bulb'
        ],
        colorGrades: ['Pure Snow White', 'Natural Sun-Cured Ivory'],
        certifications: ['DPP Phytosanitary', 'GlobalGAP Compliant', 'HACCP Certified', 'MRL Pesticide Free'],
        packagingOptions: [
          '10kg Heavy-Duty Ventilated Red/White Leno Mesh Bags',
          '10kg Corrugated Master Cartons with internal air vents',
          'Retail Pre-Packs: 3 pcs & 5 pcs with barcode label'
        ],
        containerStuffing: {
          twentyFtFcl: '12–14 Metric Tons in 20ft Reefer',
          fortyFtFcl: '26–28 Metric Tons in 40ft High Cube Reefer',
          palletized: '22 to 24 Pallets (Standard Euro / Industrial)'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '-1°C to +1°C / 65–70% RH' },
          { label: 'Curing & Dryness', value: 'Sun-cured, dried tight necks, pulp moisture < 65%' },
          { label: 'Shelf Life', value: '8 to 10 Months in controlled atmosphere' },
          { label: 'Incoterms', value: 'FOB Karachi / CIF Destination Ports' }
        ],
        applications: [
          'Commercial supermarket retail produce chains',
          'Garlic paste, dehydration, and powder extraction plants',
          'Food spice blends and industrial kitchen supply',
          'Pharmaceutical allicin extraction processing'
        ],
        imageUrl: '/images/garlic_bulbs_export.jpg'
      },
      {
        id: 'veg-ginger-rhizomes',
        name: 'Fresh Ginger Rhizomes (Export Grade)',
        categorySlug: 'fresh-vegetables',
        subcategory: 'rhizomes',
        tagline: 'Bold, Plump Hands of Fresh Agricultural Ginger (Washed & Unwashed)',
        description: 'High-aroma, fiber-balanced fresh ginger rhizomes available thoroughly hydro-washed (soil-free, air-dried) or in natural unwashed farm state. Selected for thick fleshy hands, natural golden sheen, plump joints, and high gingerol essential oil potency.',
        hsCode: '0910.11.00',
        moq: '5,000 kg (Air Freight) or 1 x 40ft FCL Reefer (24–26 MT)',
        grainSizes: [
          'Hand Weights: 150g, 200g, 250g+ thick mature hands',
          'Fat Finger Caliber: Min 25mm thickness at joints',
          'Washing States: 100% Soil-free Hydro-washed OR Natural Unwashed'
        ],
        colorGrades: ['Bright Golden Yellow', 'Natural Farm Buff'],
        certifications: ['DPP Phytosanitary Certificate', 'ISO 22000 (HACCP)', 'Residue Screened'],
        packagingOptions: [
          '10kg & 13.6kg (30 lbs) Heavy-Duty Air-Cooled Plastic Crates',
          '10kg Corrugated Master Cartons with dual ventilation slots',
          'ISPM-15 Heat-Treated Wooden Export Crates for air & sea pallets'
        ],
        containerStuffing: {
          twentyFtFcl: '12 MT Reefer',
          fortyFtFcl: '24–26 MT in 40ft Reefer (+12°C non-chilling)',
          palletized: '20 to 22 Pallets with corner braces'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '+12°C to +14°C / 85% RH (Non-chilling Reefer)' },
          { label: 'Shelf Life', value: '60 to 90 Days under recommended storage' },
          { label: 'Moisture Variation', value: '< 12% moisture variation, zero rot or mold' },
          { label: 'Shipping Terms', value: 'FOB Karachi Port / CIF Major Seaports' }
        ],
        applications: [
          'Fresh produce sections of international supermarket chains',
          'Ginger essential oil, oleoresin, and gingerol pharmaceutical extraction',
          'Beverage, ginger ale, and tea blending manufacturing',
          'Culinary foodservice and wholesale produce markets'
        ],
        imageUrl: '/images/fresh_ginger_export.jpg'
      },
      {
        id: 'veg-turnips',
        name: 'Fresh Organic Purple-Top Turnips',
        categorySlug: 'fresh-vegetables',
        subcategory: 'roots',
        tagline: 'Crisp, Tender Alluvial Winter Turnips with Vibrant Purple Crowns',
        description: 'Crisp, sweet, and succulent winter turnips grown in fertile alluvial river loam. Carefully graded for bright purple crowns, pristine snow-white base, and tender, non-fibrous edible texture. Hydro-cooled immediately after harvest to preserve garden freshness.',
        hsCode: '0706.90.00',
        moq: '2,000 kg (Air Freight) or 1 x 40ft Reefer (24 Metric Tons)',
        grainSizes: [
          'Standard Caliber: 50mm - 70mm diameter',
          'Commercial Caliber: 70mm - 90mm diameter',
          'Root Trimming: Clean trimmed taproot, tops removed'
        ],
        colorGrades: ['Vibrant Purple Top with Creamy White Base'],
        certifications: ['DPP Phytosanitary', 'Zero Chemical Residue', 'GlobalGAP Standards'],
        packagingOptions: [
          '5kg & 10kg Ventilated Telescopic Corrugated Boxes',
          '10kg Breathable Mesh Bags with internal protection film',
          'Air Cargo insulated cartons for express deliveries'
        ],
        containerStuffing: {
          twentyFtFcl: '12 MT Reefer',
          fortyFtFcl: '24–26 MT Reefer (0°C to +2°C)',
          palletized: '20 Pallets with air circulation channels'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '0°C to +2°C / 90–95% RH' },
          { label: 'Flesh Texture', value: 'Solid crisp white flesh, 100% woodiness-free' },
          { label: 'Preparation', value: 'Mechanically washed, root hairs trimmed, hydro-cooled' },
          { label: 'Transit Window', value: '30 to 45 Days shelf life under reefer transit' }
        ],
        applications: [
          'Fresh vegetable wholesale markets and grocery retail',
          'Pickling and fermentation food processing industries',
          'Institutional airline catering and foodservice'
        ],
        imageUrl: '/images/fresh_turnips_export.jpg'
      },
      {
        id: 'veg-red-onions',
        name: 'Premium Red Onions (Export Graded)',
        categorySlug: 'fresh-vegetables',
        subcategory: 'bulbs',
        tagline: 'Pungent, Deep-Red Multi-Layered Onions with Thick Outer Cured Husks',
        description: 'Export-grade Pakistani red onions sourced from renowned agricultural tracts in Sindh and Punjab. Features tight papery skins, intense aromatic pungency, and natural curing ensuring long-distance maritime voyage without premature sprouting.',
        hsCode: '0703.10.00',
        moq: '1 x 40ft High Cube Reefer (28–29 Metric Tons)',
        grainSizes: [
          'Medium Caliber: 45mm - 60mm',
          'Large Caliber: 60mm - 80mm+',
          'Jumbo Caliber: 80mm - 100mm'
        ],
        colorGrades: ['Deep Crimson Red', 'Dark Purple-Red'],
        certifications: ['DPP Phytosanitary Certified', 'GlobalGAP', 'HACCP'],
        packagingOptions: [
          '10kg, 20kg & 25kg Red Leno Mesh Bags',
          '50kg Heavy-Duty Jute Sacks for regional maritime routes',
          'Palletized and stretch-strapped container loads'
        ],
        containerStuffing: {
          twentyFtFcl: '14 Metric Tons',
          fortyFtFcl: '28–29 Metric Tons in 40ft Reefer / Ventilated Box',
          palletized: '22 to 24 Industrial Pallets'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '0°C to +4°C / 65–70% RH' },
          { label: 'Skin Layers', value: '3 to 4 dry cured outer protective husks' },
          { label: 'Shelf Life', value: '90 to 120 Days in cold storage' },
          { label: 'Incoterms', value: 'FOB Karachi / CIF Major Destination Ports' }
        ],
        applications: [
          'Supermarket retail, bulk wholesale produce hubs',
          'Food processing, onion powder, and dehydrated flakes',
          'Commercial catering and international restaurants'
        ],
        imageUrl: '/images/onions_potatoes_export.jpg'
      },
      {
        id: 'veg-potatoes',
        name: 'Fresh Export Potatoes (Mozika, Asterix & Lady Rosetta)',
        categorySlug: 'fresh-vegetables',
        subcategory: 'tubers',
        tagline: 'Smooth-Skinned Table and Industrial Chip Potatoes with High Dry Matter',
        description: 'Export-quality Dutch and local potato cultivars grown in fertile agro-tracts. High dry-matter content (ideal for French fries and crisps), shallow eyes, smooth blemish-free skin, and treated with approved natural sprout inhibitors.',
        hsCode: '0701.90.00',
        moq: '1 x 40ft High Cube Reefer (28–30 Metric Tons)',
        grainSizes: [
          'Small / Baby Caliber: 35mm - 45mm',
          'Medium Table Grade: 45mm - 60mm',
          'Large / Jumbo Processing Grade: 60mm - 85mm+'
        ],
        colorGrades: ['Golden Yellow Skin (Mozika)', 'Red Skin (Asterix / Cardinal)'],
        certifications: ['Phytosanitary Clearance', 'GlobalGAP Verified', 'Brown Rot Free Certified'],
        packagingOptions: [
          '10kg, 25kg & 50kg Yellow / Red Breathable Mesh Sacks',
          '10kg Ventilated Corrugated Master Cartons',
          '1,000kg Bulk Big Bags for Industrial Potato Chip Factories'
        ],
        containerStuffing: {
          twentyFtFcl: '14 MT',
          fortyFtFcl: '28–30 MT in 40ft Reefer (+6°C to +8°C)',
          palletized: '24 Pallets'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '+6°C to +8°C / 85–90% RH' },
          { label: 'Dry Matter', value: '20% to 24% (Superior frying quality)' },
          { label: 'Sprout Control', value: 'CIPC / natural essential oil anti-sprout treated' },
          { label: 'Shelf Life', value: 'Up to 6 Months under controlled refrigeration' }
        ],
        applications: [
          'French fries and potato chips manufacturing companies',
          'Direct retail fresh potato distribution',
          'Dehydrated potato flakes and starch extraction'
        ],
        imageUrl: '/images/onions_potatoes_export.jpg'
      },
      {
        id: 'veg-chillies',
        name: 'Pungent Green & Red Hot Chillies',
        categorySlug: 'fresh-vegetables',
        subcategory: 'peppers',
        tagline: 'High-Scoville Green & Red Hot Chillies with Glossy Skin & Intact Stems',
        description: 'Vibrant, fiery fresh hot chillies harvested with green stems intact. Renowned for sharp capsaicin heat, crisp snap, and extended post-harvest shelf life under ventilated cold-chain transit.',
        hsCode: '0709.60.00',
        moq: '2,000 kg (Air Cargo) or 1 x 40ft Reefer (18–20 MT)',
        grainSizes: [
          'Length: 6cm - 10cm slender pods',
          'Diameter: 8mm - 14mm with attached green calyx',
          'Scoville Heat Units: 35,000 to 65,000 SHU'
        ],
        colorGrades: ['Deep Emerald Green', 'Fiery Dark Red'],
        certifications: ['DPP Phytosanitary Certificate', 'MRL Residue Cleared', 'HACCP'],
        packagingOptions: [
          '4kg & 5kg Ventilated Corrugated Export Boxes',
          '10kg Plastic Crates with air-flow holes',
          'Pre-packed 250g / 500g perforated retail punnets'
        ],
        containerStuffing: {
          twentyFtFcl: '8–10 MT',
          fortyFtFcl: '18–20 MT in 40ft Reefer (+8°C to +10°C)',
          palletized: 'Custom stacked with protective dunnage'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '+8°C to +10°C / 90% RH' },
          { label: 'Heat Index', value: 'Medium-High to High Pungency (High Capsaicin)' },
          { label: 'Stem State', value: '100% Fresh green intact stems' },
          { label: 'Shelf Life', value: '21 to 28 Days in cold chain' }
        ],
        applications: [
          'Fresh grocery retail and wholesale chili markets',
          'Hot sauce, chili paste, and condiment manufacturing',
          'Oleoresin capsaicin extraction industries'
        ],
        imageUrl: '/images/seasonal_veg_herbs.jpg'
      },
      {
        id: 'veg-okra',
        name: 'Fresh Green Okra (Lady Finger / Bhindi)',
        categorySlug: 'fresh-vegetables',
        subcategory: 'pods',
        tagline: 'Tender, Dark-Green Five-Ridge Pakistani Okra Harvested Daily for Air & Sea Freight',
        description: 'Tender, young, dark emerald-green Pakistani okra pods harvested at peak freshness before fibrous hardening. Hand-sorted for crisp snap, intact calyx stems, soft non-woody seeds, and zero bruising for rapid air freight and Gulf cold-chain routes.',
        hsCode: '0709.99.90',
        moq: '1,000 kg (Commercial Air Cargo) or 1 x 20ft/40ft Reefer',
        grainSizes: [
          'Baby Tender Grade: 6cm - 9cm pod length',
          'Standard Export Grade: 9cm - 12cm pod length',
          'Strict Sorting: Zero woody pods, clean trimmed stems'
        ],
        colorGrades: ['Deep Emerald Green', 'Vibrant Natural Green'],
        certifications: ['DPP Phytosanitary Certificate', 'MRL Residue Cleared', 'GlobalGAP Compliant', 'HACCP'],
        packagingOptions: [
          '4kg & 5kg Ventilated Telescopic Corrugated Master Cartons',
          '5kg Breathable Air-Cooled Plastic Crates with liners',
          'Micro-Perforated 250g / 500g retail punnets inside master cartons'
        ],
        containerStuffing: {
          twentyFtFcl: '6–8 MT Reefer / Air Pallets',
          fortyFtFcl: '12–16 MT in 40ft Reefer (+7°C to +10°C)',
          palletized: 'Air Cargo LD3 / PMC Cool-Chain Pallets'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '+7°C to +10°C / 90–95% RH' },
          { label: 'Pod Maturity', value: 'Soft tender seeds, crisp snap, zero fiber hardening' },
          { label: 'Pre-Cooling', value: 'Forced-air cooled within 3 hours of morning picking' },
          { label: 'Shelf Life', value: '10 to 14 Days in unbroken cold chain' }
        ],
        applications: [
          'International fresh grocery and ethnic supermarket chains',
          'Commercial foodservice, hospitality, and restaurant supply',
          'IQF frozen cut okra industrial food processing'
        ],
        imageUrl: '/images/fresh_okra_export.jpg'
      },
      {
        id: 'veg-bitter-gourd',
        name: 'Fresh Bitter Gourd (Karela / Bitter Melon)',
        categorySlug: 'fresh-vegetables',
        subcategory: 'gourds',
        tagline: 'Deeply Ridged Glossy Emerald Pakistani Karela with Dense Crisp Flesh',
        description: 'Firm, deeply ridged Pakistani green bitter gourds (Karela) renowned for authentic bitter-tonic richness, glossy emerald-green tubercles, and dense crisp flesh. Graded for uniform size and zero yellowing for UK, GCC, and international specialty supermarkets.',
        hsCode: '0709.99.90',
        moq: '1,000 kg (Commercial Air Cargo) or 1 x 20ft/40ft Reefer',
        grainSizes: [
          'Medium Export Grade: 14cm - 18cm (80g - 110g)',
          'Large Commercial Grade: 18cm - 22cm (110g - 150g)',
          'Skin State: Crisp unyellowed emerald ridges'
        ],
        colorGrades: ['Dark Emerald Green', 'Bright Leaf Green'],
        certifications: ['DPP Phytosanitary Certificate', 'MRL Residue Cleared', 'ISO 22000 (HACCP)'],
        packagingOptions: [
          '5kg & 8kg Ventilated Corrugated Export Master Cartons',
          '10kg Breathable Stackable Plastic Export Crates',
          'Air Cargo Insulated Pallet Cartons with protective liners'
        ],
        containerStuffing: {
          twentyFtFcl: '8–9 MT Reefer / Air Freight Lots',
          fortyFtFcl: '16–18 MT in 40ft Reefer (+10°C to +12°C)',
          palletized: 'Ventilated export cartons strapped on ISPM-15 pallets'
        },
        keySpecs: [
          { label: 'Storage Temperature', value: '+10°C to +12°C / 85–90% RH' },
          { label: 'Maturity Index', value: 'Harvested bright green, zero overripe orange seeds' },
          { label: 'Cold-Chain Handling', value: 'Protected from chilling injury during transit' },
          { label: 'Shelf Life', value: '14 to 21 Days in ventilated reefer chain' }
        ],
        applications: [
          'South Asian, Middle Eastern, and European fresh produce retail',
          'Nutraceutical bitter melon extract & herbal juice processing',
          'Wholesale vegetable terminal distribution'
        ],
        imageUrl: '/images/bitter_gourd_export.jpg'
      }
    ],
    faqs: [
      {
        question: 'What refrigerated container parameters are maintained during ocean voyages?',
        answer: 'Each vegetable species has precise pre-cooling and container transit setpoints. Garlic and onions are shipped at -1°C to +4°C (65–70% RH), ginger at +12°C to +14°C (non-chilling), potatoes at +6°C to +8°C, and fresh turnips/carrots at 0°C to +2°C with high humidity.'
      },
      {
        question: 'Do you provide official Phytosanitary certificates with every vegetable shipment?',
        answer: 'Yes. 100% of our vegetable consignments undergo physical inspection by the Department of Plant Protection (DPP), Ministry of National Food Security & Research, Pakistan. Every shipment includes official Phytosanitary certificates and lab residue test reports.'
      },
      {
        question: 'What is the fastest delivery route for fresh produce?',
        answer: 'For perishable items like fresh chillies, turnips, or ginger samples, we operate direct commercial air cargo from Lahore (LHE) and Karachi (KHI) airports with 24–48 hour touchdown in Dubai, Doha, London, Frankfurt, and New York. For full container maritime shipments, transit from Karachi Port (PKKHI) to Jebel Ali is only 3–5 days, and to Rotterdam 22–26 days.'
      }
    ]
  },
  {
    id: 'cat-surgical-instruments',
    slug: 'surgical-instruments',
    title: 'Surgical & Dental Instruments',
    subtitle: 'Precision Medical, Surgical & Dental Hand Instruments Crafted to ISO 13485 & CE Standards',
    status: 'active',
    badgeLabel: 'Core Export Line 3 · Active',
    shortDescription: 'Precision medical instruments forged from medical-grade German and French stainless steel (AISI 410, 420, 304). Complete product lines for general surgery, orthopedic kits, dental extraction, and tungsten carbide instruments.',
    fullDescription: 'Utility Home Exports supplies world-class medical and surgical hand instruments forged in the world’s renowned surgical manufacturing hub of Sialkot & Jhelum, Punjab, Pakistan. Every instrument is crafted from certified medical-grade stainless steel, precision CNC-milled, hand-honed by master craftsmen, and subjected to ultrasonic cleaning, passivation, and boil tests to guarantee 100% corrosion resistance, flawless tactile feedback, and lifelong autoclave durability.',
    heroImage: '/images/surgical_hero_banner.jpg',
    origin: 'Sialkot & Jhelum Surgical Manufacturing Corridors, Punjab, Pakistan',
    exportPorts: ['Sialkot Dry Port (PKSDT)', 'Karachi Port (PKKHI)', 'Sialkot International Airport (SKT Air Cargo)'],
    leadTime: '7–14 Days for Standard Kits / 21–30 Days for Custom OEM Tooling',
    capacity: '120,000+ Pieces / Month',
    certifications: ['ISO 13485:2016 Medical Devices', 'ISO 9001:2015', 'CE Mark Medical Class I', 'US FDA Compliant', 'cGMP Standard'],
    packagingTypes: [
      {
        title: 'Individual Sterile & Non-Sterile Peel Pouches',
        description: 'Medical-grade Tyvek / transparent film peel pouches with EO and Steam sterilization indicator dots.',
        capacity: 'Single Piece / Tool Set'
      },
      {
        title: 'Custom Velvet & Leatherette Surgical Instrument Kits',
        description: 'Custom zippered leatherette cases with elastic instrument retention loops, color-coded velvet lining, and laser-engraved branding.',
        capacity: '5 to 30 Instruments per Kit'
      },
      {
        title: 'Rigid Anodized Aluminum Sterilization Trays & Cassettes',
        description: 'Autoclavable perforated aluminum cassettes with silicone racks engineered for dental clinics and operating theaters.',
        capacity: '5, 10, 20 Instruments per Cassette'
      },
      {
        title: 'Drop-Tested Corrugated Export Master Cartons',
        description: 'Double-walled cartons with internal bubble shroud and desiccants to prevent maritime humidity during transit.',
        capacity: '50 to 500 Pieces per Master Carton'
      }
    ],
    chemicalAnalysis: [
      { parameter: 'Stainless Steel Grade', result: 'AISI 420 / 410 / 304 (Martensitic & Austenitic)', standard: 'ASTM F899 / ISO 7153-1' },
      { parameter: 'Hardness (Rockwell C)', result: 'HRC 48–56 (Cutting Edges & TC Inserts)', standard: 'ISO 7153-1 Specification' },
      { parameter: 'Corrosion Resistance (Boil Test)', result: 'Zero Rust / Zero Oxidation (Pass)', standard: 'ASTM F1089 Standard Test Method' },
      { parameter: 'Passivation & Surface Finish', result: 'Full Passivation (Satin Matte / Mirror Polish)', standard: 'ASTM A967' },
      { parameter: 'Autoclave Endurance', result: 'Guaranteed 500+ Autoclave Cycles at 134°C', standard: 'EN 285 Hospital Standard' }
    ],
    variants: [
      {
        id: 'surg-ortho-dental-kit',
        name: 'Orthopedic & Dental Extraction Tool Sets',
        categorySlug: 'surgical-instruments',
        subcategory: 'dental',
        tagline: 'Precision Dental Elevators, Extraction Forceps & Orthopedic Bone Instruments',
        description: 'Comprehensive sets of dental extraction forceps (English and American patterns), root tip elevators, bone curettes, rongeurs, and luxators. Ergonomically knurled handles ensure non-slip grip and delicate tactile feedback during oral surgery.',
        hsCode: '9018.49.00 / 9018.90.00',
        moq: '50 Sets or 200 Individual Pieces',
        grainSizes: [
          'Forceps Patterns: #150, #151, #1, #7, #17, #18L/R, #23 Cowhorn',
          'Elevator Tips: Straight, Curved, Cryer (Pairs), Heidbrink, Coupland',
          'Handle Finishes: Hollow Knurled Ergonomic, Solid Satin Grip'
        ],
        colorGrades: ['Anti-Glare Satin Matte', 'High-Luster Mirror Polish', 'Titanium Gold Coated'],
        certifications: ['CE Mark Class I', 'ISO 13485:2016', 'FDA Registered', 'Boil Test Cleared'],
        packagingOptions: [
          'Autoclavable Silicone-Racked Stainless Cassettes',
          'Fine Leatherette Zippered Instrument Wallets with Custom Logo',
          'Individual Sealed Medical Pouches'
        ],
        containerStuffing: {
          twentyFtFcl: 'Approx. 25,000 Kits (Weight/Volume balanced)',
          fortyFtFcl: 'Approx. 50,000 Kits',
          palletized: 'Shrink-wrapped cartons on heat-treated pallets'
        },
        keySpecs: [
          { label: 'Material', value: 'High-Tensile Martensitic Stainless Steel (AISI 420B)' },
          { label: 'Jaw Gripping', value: 'Micro-serrated anatomically contoured beak profiles' },
          { label: 'Autoclavable', value: 'Fully sterilizable up to 134°C (273°F)' },
          { label: 'Warranty', value: '5-Year Manufacturer Warranty against corrosion & material defects' }
        ],
        applications: [
          'Dental clinics, orthodontics practices, and oral surgery hospitals',
          'Medical university dental colleges and training academies',
          'Private-label dental distributor and catalog supply houses'
        ],
        imageUrl: '/images/ortho_dental_kit.jpg'
      },
      {
        id: 'surg-hemostatic-forceps',
        name: 'Hemostatic Forceps & Artery Clamps',
        categorySlug: 'surgical-instruments',
        subcategory: 'hemostatic',
        tagline: 'Precision Box-Joint Artery Clamps with Multi-Position Locking Ratchets',
        description: 'Standard surgical hemostats including Halsted Mosquito, Crile, Kelly, Rochester-Péan, and Mixter right-angle artery forceps. Designed with smooth, interlocking ratchets and precision serrations that occlude bleeding blood vessels without severing delicate tissue.',
        hsCode: '9018.90.84',
        moq: '200 Pieces (Mixed Sizes Supported)',
        grainSizes: [
          'Mosquito Hemostat: 10cm, 12.5cm (Straight & Curved)',
          'Kelly / Crile Forceps: 14cm, 16cm (Straight & Curved)',
          'Rochester-Péan Heavy Clamps: 18cm, 20cm, 24cm'
        ],
        colorGrades: ['Satin Glare-Free Medical Finish', 'Micro-Sandblasted Non-Reflective'],
        certifications: ['ISO 13485', 'CE Medical Device Directive', 'ASTM F899 Passivation'],
        packagingOptions: [
          'Individual Tyvek Pouch with Barcode Label',
          'Box Packs of 10 Units with Protective Tip Sleeves',
          'Master Corrugated Shipping Cartons'
        ],
        containerStuffing: {
          twentyFtFcl: 'Approx. 100,000 Units in master cartons',
          fortyFtFcl: 'Approx. 220,000 Units',
          palletized: 'Air Cargo skid / palletized maritime shipment'
        },
        keySpecs: [
          { label: 'Joint Design', value: 'Precision German Box-Joint (interlocking smooth hinge)' },
          { label: 'Ratchet Mechanism', value: '3-stage smooth locking catch with calibrated spring tension' },
          { label: 'Serration Type', value: 'Transverse parallel interlocking serrations' },
          { label: 'Steel Grade', value: 'AISI 420 Japanese/German stainless steel' }
        ],
        applications: [
          'Hospital general operating rooms and trauma emergency suites',
          'Veterinary surgery clinics and animal hospitals',
          'Disaster relief and military field medical supply kits'
        ],
        imageUrl: '/images/hemostatic_forceps.jpg'
      },
      {
        id: 'surg-scalpel-retractors',
        name: 'Surgical Scalpels, Precision Knives & Tissue Retractors',
        categorySlug: 'surgical-instruments',
        subcategory: 'cutting',
        tagline: 'Standard Scalpel Handles & Handheld Self-Retaining Wound Retractors',
        description: 'Medical surgical scalpel handles (#3, #4, #7, and micro-handles) compatible with all standard surgical blades (#10, #11, #15, #20, #22), paired with tissue retractors including Senn-Miller, Volkmann, Army-Navy, and Weitlaner self-retaining retractors.',
        hsCode: '9018.90.00',
        moq: '150 Pieces',
        grainSizes: [
          'Scalpel Handles: #3 (Fit blades 10-15), #4 (Fit blades 20-25), #7 Slender',
          'Retractors: Senn-Miller 16cm (3-prong), Army-Navy 21cm (Pair)',
          'Self-Retaining: Weitlaner 2x3 & 3x4 sharp/blunt prongs'
        ],
        colorGrades: ['Satin Finished Medical Stainless Steel'],
        certifications: ['CE Mark Class I', 'ISO 13485:2016', 'Boil & Corrosion Resistant'],
        packagingOptions: [
          'Individual Protective Sleeve in Heat-Sealed PE Medical Bag',
          'Master Outer Carton with Desiccant Packets',
          'Custom Importer Laser Marking (Logo, Part Number, CE mark)'
        ],
        containerStuffing: {
          twentyFtFcl: 'Full maritime container loads supported',
          fortyFtFcl: 'Combined air cargo / maritime freight',
          palletized: 'Custom packed to importer specifications'
        },
        keySpecs: [
          { label: 'Blade Fitment', value: 'Precision CNC-machined blade locking channel (zero play)' },
          { label: 'Scale Markings', value: 'Metric cm/mm ruler graduation laser engraved on handle' },
          { label: 'Prong Alignment', value: 'Hand-aligned sharp and blunt prongs with rounded edges' },
          { label: 'Finish', value: 'Anti-glare electro-polished satin finish' }
        ],
        applications: [
          'Dermatology, plastic surgery, and general surgical operating suites',
          'Medical student dissection kits and clinical training sets',
          'Hospital outpatient wound care departments'
        ],
        imageUrl: '/images/scalpel_retractors.jpg'
      },
      {
        id: 'surg-needle-holders',
        name: 'Tungsten Carbide (TC) Needle Holders',
        categorySlug: 'surgical-instruments',
        subcategory: 'holders',
        tagline: 'Gold-Plated Ring TC Needle Holders for Suture Precision & Zero Slippage',
        description: 'Industry-standard needle holders featuring high-density Tungsten Carbide (TC) jaw inserts brazed onto surgical stainless bodies. Identified by gold-plated ring handles. Pyramidal serrations grip suture needles firmly without twisting or bending.',
        hsCode: '9018.90.84',
        moq: '100 Pieces',
        grainSizes: [
          'Mayo-Hegar TC: 14cm, 16cm, 18cm, 20cm, 24cm',
          'Olsen-Hegar TC (with built-in suture scissors): 14cm, 17cm',
          'Castroviejo Micro TC (Spring Action with lock): 14cm, 18cm',
          'Mathieu TC (Plier grip with ratchet): 14cm, 17cm, 20cm'
        ],
        colorGrades: ['Satin Stainless with Distinctive 24K Gold-Plated Finger Rings'],
        certifications: ['ISO 13485:2016', 'CE Mark Class I', 'Hardness Tested (HRC 68–72 TC)'],
        packagingOptions: [
          'Individual Hard-Shell Plastic Case with Foam Insert',
          'Sterilizable Peel Pouches with Lot Numbers',
          'Master Outer Shipping Cartons'
        ],
        containerStuffing: {
          twentyFtFcl: 'Air and Ocean Cargo friendly packaging',
          fortyFtFcl: 'Standard sea freight container packing',
          palletized: 'Export palletized with moisture barrier film'
        },
        keySpecs: [
          { label: 'TC Jaw Insert', value: 'Precision brazed Tungsten Carbide tiles (0.4mm / 0.5mm pitch)' },
          { label: 'Hardness', value: 'HRC 68 to 72 at jaw surface (Virtually wear-free)' },
          { label: 'Needle Range', value: 'Optimized for sutures 2-0 through 6-0 (Micro sets for 7-0 to 10-0)' },
          { label: 'Warranty', value: 'Lifetime guarantee on TC insert adhesion' }
        ],
        applications: [
          'Cardiovascular, plastic, and general operating theaters',
          'Microsurgery and ophthalmology surgical suites',
          'Emergency suture repair and veterinary surgical clinics'
        ],
        imageUrl: '/images/needle_holders.jpg'
      },
      {
        id: 'surg-scissors',
        name: 'Mayo & Metzenbaum Surgical Dissecting Scissors',
        categorySlug: 'surgical-instruments',
        subcategory: 'scissors',
        tagline: 'Razor-Sharp Beveled Cutting Edges with Micro-Honed Pivot Pins',
        description: 'Premium surgical scissors manufactured from heat-treated martensitic stainless steel. Available in blunt/blunt, sharp/blunt, and sharp/sharp profiles in both straight and curved patterns. Engineered for clean tissue dissection without snagging or crushing.',
        hsCode: '9018.90.84',
        moq: '150 Pieces (Straight / Curved mix)',
        grainSizes: [
          'Metzenbaum Tissue Scissors: 14cm, 18cm, 20cm, 23cm (Delicate curved)',
          'Mayo Sturdy Dissecting Scissors: 14cm, 17cm, 23cm (Straight & Curved)',
          'Iris Micro Scissors: 11.5cm (Straight & Curved sharp points)',
          'Lister Bandage Scissors with safety probe nodule: 14cm, 18cm'
        ],
        colorGrades: ['Satin Anti-Glare', 'Super-Cut (One micro-serrated blade + black ring)', 'TC Edge (Gold Ring)'],
        certifications: ['ISO 13485', 'CE Mark Class I', 'Hardness Tested HRC 54–56', 'Passivated ASTM A967'],
        packagingOptions: [
          'Individual Tip-Guarded Peel Pack',
          '10 Pieces per Inner Box with Moisture Desiccant',
          'Heavy Master Corrugated Shipping Boxes'
        ],
        containerStuffing: {
          twentyFtFcl: 'High-density cargo stuffing',
          fortyFtFcl: 'Air freight and maritime shipping',
          palletized: 'ISPM-15 compliant pallets'
        },
        keySpecs: [
          { label: 'Cutting Edge', value: 'Hand-honed razor bevel with zero friction glide' },
          { label: 'Pivot Screw', value: 'Machined recessed screw with calibrated torque retention' },
          { label: 'Blade Geometry', value: 'Curved and straight tapered dissecting tips' },
          { label: 'Corrosion Resistance', value: 'Tested to ASTM F1089 boiling water standard' }
        ],
        applications: [
          'Deep tissue surgical dissection and wound debridement',
          'Plastic and reconstructive surgical clinics',
          'Hospital surgical instrument sets and autoclave packs'
        ],
        imageUrl: '/images/surgical_scissors.jpg'
      }
    ],
    faqs: [
      {
        question: 'What stainless steel grades are utilized for your surgical instruments?',
        answer: 'We exclusively use certified medical-grade stainless steel according to ASTM F899 and ISO 7153-1 standards: AISI 420 (martensitic for scissors and bone cutters), AISI 410 (for forceps and clamps), AISI 304 (for retractor frames and trays), and pure Tungsten Carbide inserts for needle holders and Super-Cut edges.'
      },
      {
        question: 'Can you manufacture custom OEM instrument designs with private branding?',
        answer: 'Yes. We provide complete OEM contract manufacturing. We can laser-mark your company logo, article reference codes, CE marking, and UDI (Unique Device Identifier) barcodes on every tool, and supply custom-branded leatherette wallets, sterile peel packs, or anodized sterilization cassettes.'
      },
      {
        question: 'What quality testing is performed prior to international dispatch?',
        answer: 'Every instrument undergoes 100% individual inspection: Rockwell hardness testing, copper sulfate passivation testing (ASTM A967), 30-minute boiling water corrosion testing (ASTM F1089), optical alignment checks, and smooth action testing on all hinges and ratchets.'
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
