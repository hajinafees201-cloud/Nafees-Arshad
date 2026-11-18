import { jsPDF } from 'jspdf';
import { COMPANY_INFO } from '../data/company';

export function generatePinkSaltPdfCatalog(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210
  const pageHeight = doc.internal.pageSize.getHeight(); // 297
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182

  const colors = {
    darkAmber: [154, 52, 18] as [number, number, number],     // #9a3412
    orangeAccent: [234, 88, 12] as [number, number, number],   // #ea580c
    roseAccent: [244, 114, 182] as [number, number, number],  // #f472b6
    charcoal: [15, 23, 42] as [number, number, number],       // #0f172a
    slate: [71, 85, 105] as [number, number, number],         // #475569
    lightBg: [255, 247, 237] as [number, number, number],     // #fff7ed
    border: [254, 215, 170] as [number, number, number],      // #fed7aa
    emerald: [16, 149, 106] as [number, number, number],     // #10956a
    white: [255, 255, 255] as [number, number, number]
  };

  const addHeaderAndFooter = (pageNumber: number, totalPages: number) => {
    // Top bar
    doc.setFillColor(...colors.darkAmber);
    doc.rect(0, 0, pageWidth, 12, 'F');

    // Accent line
    doc.setFillColor(...colors.orangeAccent);
    doc.rect(0, 12, pageWidth, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('UTILITY HOME EXPORTS · HIMALAYAN PINK SALT MINERAL DIVISION', margin, 8);
    doc.text('HEAD OFFICE: JHELUM, PAKISTAN', pageWidth - margin, 8, { align: 'right' });

    // Bottom footer bar
    doc.setFillColor(248, 250, 252);
    doc.rect(0, pageHeight - 13, pageWidth, 13, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(0, pageHeight - 13, pageWidth, pageHeight - 13);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.slate);
    doc.text(
      `Utility Home Exports · CEO: ${COMPANY_INFO.ceo} · Email: ${COMPANY_INFO.email} · WhatsApp: ${COMPANY_INFO.whatsapp}`,
      margin,
      pageHeight - 5
    );
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 5, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: COVER & EXECUTIVE OVERVIEW
  // ==========================================
  let yPos = 24;

  // Title Banner
  doc.setFillColor(...colors.lightBg);
  doc.roundedRect(margin, yPos, contentWidth, 34, 3, 3, 'F');
  doc.setDrawColor(...colors.border);
  doc.roundedRect(margin, yPos, contentWidth, 34, 3, 3, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.setTextColor(...colors.darkAmber);
  doc.text('OFFICIAL EXPORT PRODUCT CATALOG', margin + 6, yPos + 10);

  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('Authentic Himalayan Pink Salt Products & Mineral Solutions', margin + 6, yPos + 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text(
    'Direct Khewra Quarry Supply · Triple Optical Sorted · CODEX / FDA / Halal Certified · Zero Additives',
    margin + 6,
    yPos + 26
  );

  yPos += 40;

  // Company Credentials Box
  doc.setFillColor(255, 251, 235);
  doc.roundedRect(margin, yPos, contentWidth, 38, 2.5, 2.5, 'F');
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(margin, yPos, contentWidth, 38, 2.5, 2.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...colors.darkAmber);
  doc.text('COMMERCIAL CREDENTIALS & QUARRY EXPORT DESK', margin + 6, yPos + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.charcoal);

  const col1X = margin + 6;
  const col2X = margin + 96;

  doc.text(`Exporter: ${COMPANY_INFO.name}`, col1X, yPos + 14);
  doc.text(`CEO / Executive: ${COMPANY_INFO.ceo}`, col1X, yPos + 20);
  doc.text(`Origin: Salt Range Khewra, Punjab, Pakistan`, col1X, yPos + 26);
  doc.text(`NTN Registration: Active Exporter (FBR & PSW)`, col1X, yPos + 32);

  doc.text(`Chamber: ${COMPANY_INFO.chamberOfCommerce}`, col2X, yPos + 14);
  doc.text(`Email: ${COMPANY_INFO.email}`, col2X, yPos + 20);
  doc.text(`WhatsApp: ${COMPANY_INFO.whatsapp}`, col2X, yPos + 26);
  doc.text(`Export Ports: Port Qasim (PKBQM) / Karachi Port`, col2X, yPos + 32);

  yPos += 44;

  // Overview Introduction
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('1. Mining Origins & Quality Architecture', margin, yPos);
  yPos += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  const introText = 
    'Utility Home Exports operates direct quarry-to-port pipelines for 100% authentic Himalayan Pink Crystal Salt from the ancient Khewra mineral corridor in Punjab, Pakistan. Formed over 250 million years ago, our mineral salt is unrefined, free of modern microplastics, and naturally packed with 84+ trace minerals including iron, magnesium, potassium, and calcium.\n\n' +
    'Every consignment undergoes rigorous crushing, multi-stage optical sorting, high-sensitivity metal detection, and laboratory chemical analysis (COA) conforming to international food safety (ISO 22000, HACCP, FDA) and global electrical safety standards for salt lamps.';
  const splitIntro = doc.splitTextToSize(introText, contentWidth);
  doc.text(splitIntro, margin, yPos);
  yPos += 26;

  // Key Highlights Grid
  const cardW = (contentWidth - 6) / 3;
  const cards = [
    { title: '≥ 98.7% NaCl PURITY', sub: 'Laboratory certified food grade with natural trace mineral matrix.' },
    { title: '1,500+ MT / MONTH', sub: 'Robust quarry quota with dedicated stockpiles for swift FCL dispatch.' },
    { title: 'ISPM-15 COMPLIANT', sub: 'Heat-treated Euro pallets & moisture-barrier LDPE lined export sacks.' }
  ];

  cards.forEach((card, idx) => {
    const cx = margin + idx * (cardW + 3);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(cx, yPos, cardW, 26, 2, 2, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(cx, yPos, cardW, 26, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...colors.darkAmber);
    doc.text(card.title, cx + 4, yPos + 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.slate);
    const splitSub = doc.splitTextToSize(card.sub, cardW - 8);
    doc.text(splitSub, cx + 4, yPos + 14);
  });

  yPos += 33;

  // Certified Export Categories Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...colors.charcoal);
  doc.text('Core Product Classifications in this Catalog:', margin, yPos);
  yPos += 5;

  const categoriesList = [
    '· Edible Himalayan Pink Salt (Extra Fine, Fine Table Salt, Medium Granules, Coarse Crystal Refills)',
    '· Handcrafted Himalayan Salt Lamps & Geometric Wellness Lights (Natural Rough, Pyramids, Fire Bowls)',
    '· Gourmet Salt Cooking Tiles, Searing Slabs & Architectural Wall Bricks (Thermal Shock Resistant)',
    '· Natural Animal & Livestock Rock Salt Lick Blocks with Hanging Jute Ropes (Equine, Cattle, Camelid)',
    '· Therapeutic Bath, Spa & Cosmetic Pink Crystal Salt (Exfoliants, Body Soaks, Salt Cave Crystals)'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  categoriesList.forEach((cat) => {
    doc.text(cat, margin + 2, yPos);
    yPos += 5.5;
  });

  // ==========================================
  // PAGE 2: PRODUCT VARIANTS DETAIL
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.darkAmber);
  doc.text('2. Comprehensive Himalayan Pink Salt Product Line', margin, yPos);
  yPos += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text('Granular specifications, HS codes, standard MOQs, and industrial & retail applications.', margin, yPos);
  yPos += 8;

  const variants = [
    {
      name: 'Edible Himalayan Pink Salt (Fine, Coarse & Extra Fine)',
      hs: '2501.00.90',
      moq: '1 x 20ft FCL (24–27 Metric Tons)',
      grains: 'Extra Fine (0.1–0.5mm), Table Grain (0.5–1mm), Medium (1–2.5mm), Coarse (2.5–5mm)',
      packaging: '25kg/50kg PP bags with PE liner, 1000kg FIBC bags, Kraft zipper pouches (250g–1kg)',
      desc: 'Triple-washed and optically sorted. Completely additive-free without artificial anticaking agents (E535/E536). Retains 84+ trace minerals.'
    },
    {
      name: 'Handcrafted Himalayan Salt Lamps & Geometric Wellness Decor',
      hs: '9405.29.00',
      moq: '500 Pieces or Mixed FCL',
      grains: 'Natural Rough (2–3kg, 3–5kg, 5–7kg, 7–10kg); Geometric: Pyramid, Sphere, Cube, Fire Bowls',
      packaging: 'Individual 5-ply box with drop-tested EPE foam, master cartons, heat-treated pallets',
      desc: 'Solid rock hollowed for electrical illumination. Fitted with UL, CE, UKCA, SAA certified cords, dimmers, and certified neem/rosewood base.'
    },
    {
      name: 'Himalayan Salt Cooking Tiles, Searing Slabs & Bricks',
      hs: '2501.00.90 / 6802.99',
      moq: '1,000 Units or Combined FCL',
      grains: 'Standard Slab: 8"x4"x2" (2.5kg), Chef Tile: 8"x8"x2" (5kg), Large Block: 12"x8"x2" (7.5kg)',
      packaging: 'Individual shrink wrap with foam corners, inner display boxes, reinforced master wooden crates',
      desc: 'Withstands extreme temperatures (-20°C to +450°C). Used for live table searing, BBQ grilling, sushi serving, and halotherapy sauna walls.'
    },
    {
      name: 'Natural Animal & Livestock Salt Lick Blocks with Rope',
      hs: '2501.00.10',
      moq: '1 x 20ft FCL (24–27 Metric Tons / ~11,000 blocks)',
      grains: '1.0–1.5kg, 2.0–2.5kg (Equestrian), 3.0–3.5kg (Pasture Cattle), 4.0–5.0kg (Heavy Livestock)',
      packaging: 'Individually shrink-wrapped blocks with label, 6x2.5kg master boxes, palletized master cartons',
      desc: 'Solid subterranean rock carved with pre-drilled holes and natural weather-resistant hemp ropes. Does not dissolve or melt in rainy pasture conditions.'
    },
    {
      name: 'Therapeutic Bath, Spa & Cosmetic Pink Crystal Salt',
      hs: '3307.30.00',
      moq: '5 Metric Tons (or combined FCL)',
      grains: 'Fine Scrub Powder (0.2–0.6mm), Medium Bath Crystals (1–3mm), Coarse Rock Crystals (3–8mm)',
      packaging: '25kg double-layer hermetic bags, 500g/1kg standup matte pouches, cosmetic bulk bags',
      desc: 'Rich in magnesium, calcium, and potassium for osmotic skin detoxification, luxury bath salts, foot scrubs, and halotherapy wellness caves.'
    }
  ];

  variants.forEach((v) => {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, yPos, contentWidth, 44, 2, 2, 'F');
    doc.setDrawColor(...colors.border);
    doc.roundedRect(margin, yPos, contentWidth, 44, 2, 2, 'S');

    // Color bar
    doc.setFillColor(...colors.orangeAccent);
    doc.rect(margin, yPos, 2.5, 44, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...colors.darkAmber);
    doc.text(v.name, margin + 5, yPos + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.slate);
    doc.text(`HS Code: ${v.hs}  |  MOQ: ${v.moq}`, margin + 5, yPos + 12);

    doc.setFont('helvetica', 'bold');
    doc.text('Gradations & Sizes:', margin + 5, yPos + 18);
    doc.setFont('helvetica', 'normal');
    doc.text(v.grains, margin + 35, yPos + 18);

    doc.setFont('helvetica', 'bold');
    doc.text('Standard Packaging:', margin + 5, yPos + 24);
    doc.setFont('helvetica', 'normal');
    doc.text(v.packaging, margin + 35, yPos + 24);

    doc.setFont('helvetica', 'bold');
    doc.text('Key Characteristics:', margin + 5, yPos + 30);
    doc.setFont('helvetica', 'normal');
    const splitDesc = doc.splitTextToSize(v.desc, contentWidth - 42);
    doc.text(splitDesc, margin + 35, yPos + 30);

    yPos += 48;
  });

  // ==========================================
  // PAGE 3: PACKAGING & MARITIME LOGISTICS
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.darkAmber);
  doc.text('3. Export Packaging Solutions & Moisture-Barrier Protection', margin, yPos);
  yPos += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text('Mineral salt is hygroscopic. We engineer multi-barrier maritime packaging for long sea voyages.', margin, yPos);
  yPos += 8;

  const packOptions = [
    {
      title: 'A. Retail OEM Kraft Paper Window Zipper Pouches (250g / 500g / 1kg)',
      specs: 'Food-grade natural brown Kraft paper laminated with high-barrier transparent inner film. Features resealable airtight zip-lock, tear notch, transparent crystal viewing window, and custom four-color private label artwork & barcode printing.'
    },
    {
      title: 'B. 25kg & 50kg Heavy-Duty Polypropylene (PP) Sacks with PE Liner',
      specs: 'High-tensile virgin woven polypropylene outer sack with 50-micron high-density polyethylene (LDPE) heat-sealed moisture barrier inner liner. Double-stitched seams designed to endure ocean humidity without caking.'
    },
    {
      title: 'C. 1,000kg to 1,200kg Industrial FIBC Jumbo Big Bags',
      specs: 'UV-stabilized woven polypropylene 4-loop big bags with top filling duffle and bottom discharge chute. Strapped securely to ISPM-15 certified heat-treated wooden export pallets for automated industrial feeding.'
    },
    {
      title: 'D. Drop-Tested Corrugated Gift Boxes with EPE Foam (Lamps & Tiles)',
      specs: '5-ply reinforced corrugated cardboard inner gift box custom molded with dense expanded polyethylene (EPE) drop-protection foam. Outer master cartons strapped with nylon banding for maritime container transit.'
    }
  ];

  packOptions.forEach((pkg) => {
    doc.setFillColor(255, 251, 235);
    doc.roundedRect(margin, yPos, contentWidth, 23, 2, 2, 'F');
    doc.setDrawColor(253, 230, 138);
    doc.roundedRect(margin, yPos, contentWidth, 23, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...colors.darkAmber);
    doc.text(pkg.title, margin + 5, yPos + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    const splitSpecs = doc.splitTextToSize(pkg.specs, contentWidth - 10);
    doc.text(splitSpecs, margin + 5, yPos + 12);

    yPos += 27;
  });

  yPos += 4;

  // Container Stuffing Matrix
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('Maritime Container Stuffing Matrix (Port Qasim / Karachi Port):', margin, yPos);
  yPos += 6;

  // Table header
  doc.setFillColor(...colors.darkAmber);
  doc.rect(margin, yPos, contentWidth, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('CONTAINER TYPE', margin + 3, yPos + 5);
  doc.text('STUFFING METHOD', margin + 45, yPos + 5);
  doc.text('NET CARGO PAYLOAD', margin + 95, yPos + 5);
  doc.text('PACKAGE BREAKDOWN', margin + 140, yPos + 5);
  yPos += 7;

  const containerRows = [
    { type: '20ft Standard FCL', method: 'Floor-Loaded Bags', payload: '25 to 27 Metric Tons (MT)', count: '1,000–1,080 bags (25kg)' },
    { type: '20ft Standard FCL', method: 'ISPM-15 Euro Palletized', payload: '22 to 24 Metric Tons (MT)', count: '20–24 Pallets (Shrink-wrapped)' },
    { type: '20ft Standard FCL', method: 'FIBC Jumbo Bags', payload: '24 to 26 Metric Tons (MT)', count: '20–24 Big Bags (1MT ea)' },
    { type: '40ft High Cube FCL', method: 'Boxed Salt Lamps', payload: '22 to 26 Metric Tons', count: '4,500–8,000 boxed units' },
    { type: '40ft High Cube FCL', method: 'Cooking Tiles / Bricks', payload: '25 to 27 Metric Tons', count: '8,000–10,000 slabs in crates' }
  ];

  containerRows.forEach((row, i) => {
    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252);
    doc.rect(margin, yPos, contentWidth, 7, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, yPos + 7, margin + contentWidth, yPos + 7);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    doc.text(row.type, margin + 3, yPos + 5);

    doc.setFont('helvetica', 'normal');
    doc.text(row.method, margin + 45, yPos + 5);
    doc.text(row.payload, margin + 95, yPos + 5);
    doc.text(row.count, margin + 140, yPos + 5);

    yPos += 7;
  });

  // ==========================================
  // PAGE 4: CERTIFICATE OF ANALYSIS & CONTACT
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.darkAmber);
  doc.text('4. Certified Chemical Analysis (COA) & Purity Standards', margin, yPos);
  yPos += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text('Standard laboratory chemical assay for food-grade Himalayan Pink Salt (Codex Stan 150-1985).', margin, yPos);
  yPos += 8;

  // COA Table Header
  doc.setFillColor(...colors.darkAmber);
  doc.rect(margin, yPos, contentWidth, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('CHEMICAL PARAMETER', margin + 3, yPos + 5);
  doc.text('LABORATORY BATCH RESULT', margin + 65, yPos + 5);
  doc.text('INTERNATIONAL REFERENCE STANDARD', margin + 120, yPos + 5);
  yPos += 7;

  const coaRows = [
    { param: 'Sodium Chloride (NaCl)', result: '98.72%', ref: 'Min 97.0% (Codex Stan 150-1985)' },
    { param: 'Calcium (Ca)', result: '0.14%', ref: 'Natural bound mineral matrix' },
    { param: 'Magnesium (Mg)', result: '0.10%', ref: 'Natural bound mineral matrix' },
    { param: 'Potassium (K)', result: '0.08%', ref: 'Natural bound mineral matrix' },
    { param: 'Iron Oxide (Fe)', result: '38.5 mg/kg', ref: 'Imparts natural pink-rose coloration' },
    { param: 'Moisture Content', result: '0.11%', ref: 'Max 0.5% (dry basis)' },
    { param: 'Water Insoluble Matter', result: '0.18%', ref: 'Max 0.25%' },
    { param: 'Lead (Pb)', result: '< 0.005 ppm', ref: 'Max 2.0 ppm (Codex Alimentarius)' },
    { param: 'Cadmium (Cd)', result: '< 0.001 ppm', ref: 'Max 0.5 ppm (Codex Alimentarius)' },
    { param: 'Arsenic (As)', result: '< 0.001 ppm', ref: 'Max 0.5 ppm (Codex Alimentarius)' },
    { param: 'Microplastics & Additives', result: 'Zero (Non-Detectable)', ref: 'Codex & EU Food Purity Compliant' }
  ];

  coaRows.forEach((row, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 250, idx % 2 === 0 ? 255 : 252);
    doc.rect(margin, yPos, contentWidth, 6.5, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, yPos + 6.5, margin + contentWidth, yPos + 6.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    doc.text(row.param, margin + 3, yPos + 4.5);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.emerald);
    doc.text(row.result, margin + 65, yPos + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(row.ref, margin + 120, yPos + 4.5);

    yPos += 6.5;
  });

  yPos += 14;

  // Quality & Commercial Guarantees
  doc.setFillColor(255, 251, 235);
  doc.roundedRect(margin, yPos, contentWidth, 32, 2.5, 2.5, 'F');
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(margin, yPos, contentWidth, 32, 2.5, 2.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...colors.darkAmber);
  doc.text('DIRECT FACTORY QUOTATION & SAMPLE DISPATCH', margin + 6, yPos + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...colors.charcoal);
  doc.text(
    'Contact CEO Nafees Arshad directly for firm FOB Karachi / CIF destination port price locks, sample courier requests, and custom OEM packaging designs.',
    margin + 6,
    yPos + 14
  );
  doc.text(
    `Official Email: ${COMPANY_INFO.email} | CEO Desk: ${COMPANY_INFO.ceoEmail} | WhatsApp: ${COMPANY_INFO.whatsapp}`,
    margin + 6,
    yPos + 20
  );
  doc.text(
    'Third-Party Inspection: Pre-shipment SGS, Intertek, and Bureau Veritas inspection welcomed upon buyer request.',
    margin + 6,
    yPos + 26
  );

  // Apply header & footer across all 4 pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderAndFooter(i, totalPages);
  }

  return doc;
}

export function downloadPinkSaltPdfCatalog() {
  const doc = generatePinkSaltPdfCatalog();
  doc.save('Utility-Home-Himalayan-Pink-Salt-Export-Catalog.pdf');
}
