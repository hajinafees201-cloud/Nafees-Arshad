export const COMPANY_INFO = {
  name: 'Utility Home',
  legalName: 'Utility Home Exports',
  ceo: 'Nafees Arshad',
  contactPerson: 'Nafees Arshad',
  designation: 'CEO & Head of Global Exports',
  tagline: 'Premier Mineral & Agricultural Exporter to Global Markets',
  foundedYear: '2012',
  exportOrigins: 'Salt Range / Khewra, Punjab & Maritime Corridors',
  headquarters: 'Gujranwala, Punjab, Pakistan',
  location: 'Gujranwala, Punjab, Pakistan',
  factoryDepot: 'Plot 44-B, Industrial Area, Gujranwala & Khewra Corridor, Punjab, Pakistan',
  phone: '+923006474593',
  whatsapp: '+923006474593',
  email: 'Hajinafees201@gmail.com',
  procurementEmail: 'Hajinafees201@gmail.com',
  workingHours: 'Mon - Sat: 08:00 - 18:00 PKT (24/7 International Desk)',
  annualExportVolume: '18,500+ Metric Tons',
  exportDestinationsCount: '42+ Countries Worldwide',
  satisfactionRate: '99.4% Contract Fulfillment',
  containerTurnaround: '48hr Loading from Depot'
};

export const CERTIFICATIONS_LIST = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    authority: 'TÜV Rheinland / UKAS',
    description: 'Certified Quality Management System covering mining extraction, optical grading, processing, and containerized dispatch.',
    scope: 'Quality & Process Reliability',
    validUntil: '2028'
  },
  {
    id: 'iso-22000',
    name: 'ISO 22000 & HACCP',
    authority: 'SGS International',
    description: 'Food Safety Management System standard certifying zero microbiological contamination, food grade machinery, and hygienic packaging.',
    scope: 'Edible Food Safety',
    validUntil: '2027'
  },
  {
    id: 'fda-reg',
    name: 'US FDA Food Facility',
    authority: 'U.S. Food & Drug Administration',
    description: 'Registered Food Facility (Registration #194829104) compliant with the Food Safety Modernization Act (FSMA) and Foreign Supplier Verification Program (FSVP).',
    scope: 'US Market Import Clearance',
    validUntil: 'Active (Biennial Renewal)'
  },
  {
    id: 'halal-kosher',
    name: 'Halal & Kosher Certified',
    authority: 'International Halal Services / Orthodox Rabbinical Council',
    description: '100% pure mineral origin certified completely free of animal by-products, cross-contamination, or synthetic additives.',
    scope: 'Global Religious Dietary Compliance',
    validUntil: '2027'
  },
  {
    id: 'gmp-standard',
    name: 'Good Manufacturing Practice (GMP)',
    authority: 'Global Standard Certification',
    description: 'Adherence to pharmaceutical and cosmetic grade hygienic processing standards for therapeutic bath salts and personal care formulations.',
    scope: 'Cosmetic & Wellness Integrity',
    validUntil: '2028'
  },
  {
    id: 'ispm-15',
    name: 'ISPM-15 Heat-Treated Pallets',
    authority: 'Plant Protection Directorate',
    description: 'All timber pallets, wooden lamp bases, and dunnage receive mandatory HT (Heat Treatment) stamping ensuring international customs biosecurity clearance.',
    scope: 'Phytosanitary & Maritime Palletization',
    validUntil: 'Continuous Compliance'
  }
];

export const INCOTERMS_GUIDE = [
  {
    term: 'FOB',
    title: 'Free On Board (Port Qasim / Karachi Port)',
    badge: 'Most Popular for Corporate Importers',
    explanation: 'Utility Home handles internal freight from Khewra mine/processing depot, customs clearance, export terminal handling charges (THC), and loads cargo onto the buyer\'s appointed sea vessel. Buyer covers ocean freight and destination port clearance.',
    recommendedFor: 'Importers with existing global freight forwarding contracts and negotiated carrier rates.',
    responsibilityBorder: 'Ship rail / Cargo passed on board container vessel in Karachi.'
  },
  {
    term: 'CIF',
    title: 'Cost, Insurance & Freight (To Your Discharge Port)',
    badge: 'Hassle-Free End-to-End Maritime Delivery',
    explanation: 'Utility Home covers all origin costs, bookings with top shipping lines (Maersk, MSC, CMA CGM, Hapag-Lloyd), and provides Institute Cargo Clauses (A/C) maritime insurance up to your designated sea port.',
    recommendedFor: 'Procurement teams seeking locked-in delivered container costs without managing ocean freight volatility.',
    responsibilityBorder: 'Cargo arrives at buyer\'s destination port of discharge.'
  },
  {
    term: 'CFR',
    title: 'Cost and Freight (Destination Sea Port)',
    badge: 'Preferred by Asian & European Bulk Buyers',
    explanation: 'Utility Home pays for transportation of goods up to the named destination port. Marine insurance is independently procured by the buyer\'s policy.',
    recommendedFor: 'Companies with corporate umbrella marine insurance policies that require supplier-managed shipping.',
    responsibilityBorder: 'Vessel arrives at destination port.'
  },
  {
    term: 'EXW',
    title: 'Ex Works (Utility Home Factory / Khewra Depot)',
    badge: 'Direct Factory Collection',
    explanation: 'Cargo is made ready for loading at our Khewra or Karachi processing plant. Buyer coordinates pick-up, domestic transport, export customs, and maritime transport.',
    recommendedFor: 'Domestic consolidators and trading houses with local trucking infrastructure.',
    responsibilityBorder: 'Factory loading dock.'
  }
];

export const EXPORT_DOCUMENTATION = [
  {
    code: 'B/L',
    name: 'Clean on Board Bill of Lading',
    issuer: 'International Ocean Carrier (e.g. Maersk / MSC)',
    detail: 'Legal document evidencing carriage of goods and title transfer, issued as 3/3 original negotiable set or Telex Release.'
  },
  {
    code: 'COA',
    name: 'Certificate of Analysis (Laboratory Tested)',
    issuer: 'Utility Home QA Lab & Third-Party (SGS/Intertek)',
    detail: 'Granular breakdown of NaCl purity (98.7%+), trace minerals, moisture levels, microbial count, and heavy metal screening.'
  },
  {
    code: 'COO',
    name: 'Certificate of Origin (Form A / Chamber of Commerce)',
    issuer: 'Karachi Chamber of Commerce & Industry / TDAP',
    detail: 'Certifies 100% authentic extraction from the Khewra Himalayan mineral corridor in Pakistan.'
  },
  {
    code: 'PHYTO',
    name: 'Phytosanitary & Fumigation Certificate',
    issuer: 'Department of Plant Protection (Ministry of Food Security)',
    detail: 'Guarantees compliance with international quarantine regulations for agricultural goods and palletized mineral shipments.'
  },
  {
    code: 'INV/PL',
    name: 'Commercial Invoice & Packing List',
    issuer: 'Utility Home Finance & Logistics Desk',
    detail: 'Itemized breakdown with HS codes, net/gross weights, batch numbers, container numbers, and seal IDs.'
  }
];
