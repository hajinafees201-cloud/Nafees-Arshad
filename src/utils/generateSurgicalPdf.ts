import { jsPDF } from 'jspdf';
import { COMPANY_INFO } from '../data/company';

export function generateSurgicalPdfCatalog(): jsPDF {
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
    darkBlue: [15, 23, 42] as [number, number, number],       // #0f172a
    navy: [30, 58, 138] as [number, number, number],          // #1e3a8a
    skyAccent: [14, 165, 233] as [number, number, number],     // #0ea5e9
    charcoal: [15, 23, 42] as [number, number, number],       // #0f172a
    slate: [71, 85, 105] as [number, number, number],         // #475569
    lightBg: [240, 249, 255] as [number, number, number],     // #f0f9ff
    border: [186, 230, 253] as [number, number, number],      // #bae6fd
    emerald: [16, 149, 106] as [number, number, number],     // #10956a
    gold: [202, 138, 4] as [number, number, number],          // #ca8a04
    white: [255, 255, 255] as [number, number, number]
  };

  const addHeaderAndFooter = (pageNumber: number, totalPages: number) => {
    // Top bar
    doc.setFillColor(...colors.navy);
    doc.rect(0, 0, pageWidth, 12, 'F');

    // Accent line
    doc.setFillColor(...colors.skyAccent);
    doc.rect(0, 12, pageWidth, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('UTILITY HOME EXPORTS · SURGICAL & DENTAL INSTRUMENTS DIVISION', margin, 8);
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
  doc.setTextColor(...colors.navy);
  doc.text('OFFICIAL EXPORT PRODUCT CATALOG', margin + 6, yPos + 10);

  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('Precision Medical, Surgical & Dental Hand Instruments', margin + 6, yPos + 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text(
    'ISO 13485:2016 Certified · CE Mark Medical Class I · US FDA Compliant · Autoclave Durable 134°C',
    margin + 6,
    yPos + 26
  );

  yPos += 40;

  // Company Credentials Box
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, yPos, contentWidth, 38, 2.5, 2.5, 'F');
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, yPos, contentWidth, 38, 2.5, 2.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...colors.navy);
  doc.text('SURGICAL MANUFACTURING HUB & EXPORT CREDENTIALS', margin + 6, yPos + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.charcoal);

  const col1X = margin + 6;
  const col2X = margin + 96;

  doc.text(`Manufacturer: ${COMPANY_INFO.name}`, col1X, yPos + 14);
  doc.text(`CEO / Executive: ${COMPANY_INFO.ceo}`, col1X, yPos + 20);
  doc.text(`Origins: Sialkot & Jhelum Surgical Clusters`, col1X, yPos + 26);
  doc.text(`Standards: ISO 13485:2016, CE Mark, FDA Reg.`, col1X, yPos + 32);

  doc.text(`Chamber: ${COMPANY_INFO.chamberOfCommerce}`, col2X, yPos + 14);
  doc.text(`Email: ${COMPANY_INFO.email}`, col2X, yPos + 20);
  doc.text(`WhatsApp: ${COMPANY_INFO.whatsapp}`, col2X, yPos + 26);
  doc.text(`Terminals: Sialkot Dry Port / SKT Airport / Karachi Port`, col2X, yPos + 32);

  yPos += 44;

  // Overview Introduction
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('1. Surgical Craftsmanship & Metallurgy Standards', margin, yPos);
  yPos += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  const introText = 
    'Utility Home Exports delivers world-class precision medical and surgical instruments forged in the world-renowned surgical industrial cluster of Sialkot and Jhelum, Punjab, Pakistan. Sialkot manufactures over 70% of the world’s handheld surgical instruments, combining centuries of master metalsmithing with computerized CNC machining, precision passivation, and automated ultrasonic cleaning.\n\n' +
    'Every instrument is forged from certified medical-grade stainless steel (AISI 410, AISI 420B martensitic and AISI 304 austenitic), heat-treated to Rockwell HRC 48-56, and subjected to ASTM F1089 boil and corrosion resistance testing. We offer custom OEM private labeling, laser marking, and customized clinical kit assemblies.';
  const splitIntro = doc.splitTextToSize(introText, contentWidth);
  doc.text(splitIntro, margin, yPos);
  yPos += 26;

  // Key Highlights Grid
  const cardW = (contentWidth - 6) / 3;
  const cards = [
    { title: 'ISO 13485:2016 & CE', sub: 'Fully compliant medical quality management and CE Class I certified.' },
    { title: 'AISI 420/410 STEEL', sub: 'High-tensile Japanese & German grade medical steel with zero corrosion.' },
    { title: '500+ AUTOCLAVE CYCLES', sub: 'Engineered for hospital steam sterilization at 134°C without discoloration.' }
  ];

  cards.forEach((card, idx) => {
    const cx = margin + idx * (cardW + 3);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(cx, yPos, cardW, 26, 2, 2, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(cx, yPos, cardW, 26, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...colors.navy);
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
  doc.text('Key Instrument Divisions Detailed in this Catalog:', margin, yPos);
  yPos += 5;

  const categoriesList = [
    '· Orthopedic & Dental Extraction Tool Sets (Forceps, Root Elevators, Bone Rongeurs, Curettes)',
    '· Hemostatic Forceps & Artery Clamps (Halsted Mosquito, Crile, Kelly, Rochester-Péan with Box-Joints)',
    '· Surgical Scalpels, Precision Knives & Tissue Retractors (Handles #3, #4, #7; Senn-Miller, Weitlaner)',
    '· Tungsten Carbide (TC) Needle Holders with 24K Gold Plated Rings (Mayo-Hegar, Olsen-Hegar, Castroviejo)',
    '· Mayo & Metzenbaum Surgical Dissecting Scissors (Delicate Curved, Sturdy Straight, Micro Iris)'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  categoriesList.forEach((cat) => {
    doc.text(cat, margin + 2, yPos);
    yPos += 5.5;
  });

  // ==========================================
  // PAGE 2: INSTRUMENT DIVISIONS DETAIL
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.navy);
  doc.text('2. Precision Surgical & Dental Instrument Lines', margin, yPos);
  yPos += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text('Granular metallurgy, HS classification, minimum order quantities, and clinical applications.', margin, yPos);
  yPos += 8;

  const instruments = [
    {
      name: 'Orthopedic & Dental Extraction Tool Sets',
      hs: '9018.49.00 / 9018.90.00',
      moq: '50 Sets or 200 Individual Pieces',
      patterns: 'Forceps: #150, #151, #1, #7, #17, #18L/R, #23 Cowhorn; Elevators: Straight, Cryer, Heidbrink',
      material: 'AISI 420B Martensitic Stainless Steel · Non-slip knurled handles · Anti-glare satin finish',
      desc: 'Anatomically contoured beaks with micro-serrations for secure tooth gripping and atraumatic bone elevation. Autoclavable up to 134°C with 5-year anti-corrosion guarantee.'
    },
    {
      name: 'Hemostatic Forceps & Artery Clamps (Box-Joint)',
      hs: '9018.90.84',
      moq: '200 Pieces (Mixed Sizes Supported)',
      patterns: 'Halsted Mosquito: 10/12.5cm; Kelly & Crile: 14/16cm; Rochester-Péan: 18/20/24cm (Straight & Curved)',
      material: 'AISI 420 Japanese/German stainless steel · German box-joint · 3-position locking ratchet',
      desc: 'Precision transverse interlocking serrations that occlude bleeding blood vessels without severing delicate tissue. Smooth calibrated spring action.'
    },
    {
      name: 'Surgical Scalpels, Precision Knives & Tissue Retractors',
      hs: '9018.90.00',
      moq: '150 Pieces',
      patterns: 'Handles: #3 (Blades 10-15), #4 (Blades 20-25), #7 Slender; Retractors: Senn-Miller 16cm, Weitlaner',
      material: 'AISI 304 & 420 stainless steel · Laser-engraved metric graduations · CNC blade channel',
      desc: 'Precision CNC-machined blade locking channel ensuring zero play. Retractors available with sharp or blunt hand-polished prongs for operating site exposure.'
    },
    {
      name: 'Tungsten Carbide (TC) Needle Holders (Gold Rings)',
      hs: '9018.90.84',
      moq: '100 Pieces',
      patterns: 'Mayo-Hegar TC: 14–24cm; Olsen-Hegar TC (with scissors): 14/17cm; Castroviejo Micro TC: 14/18cm',
      material: 'High-density brazed Tungsten Carbide tiles (HRC 68–72) · 24K Gold-plated finger rings',
      desc: 'Precision pyramidal serrations grip delicate surgical needles firmly without twisting or bending. Optimized for sutures 2-0 through 6-0 (Micro sets for 7-0 to 10-0).'
    },
    {
      name: 'Mayo & Metzenbaum Surgical Dissecting Scissors',
      hs: '9018.90.84',
      moq: '150 Pieces (Straight / Curved Mix)',
      patterns: 'Metzenbaum: 14–23cm (Delicate curved); Mayo: 14–23cm (Sturdy dissecting); Iris: 11.5cm (Micro)',
      material: 'Heat-treated martensitic steel (HRC 52–56) · Micro-honed pivot screw · Beveled razor edge',
      desc: 'Engineered for effortless tissue dissection without crushing or snagging. Available in blunt/blunt, sharp/blunt, and sharp/sharp clinical configurations.'
    }
  ];

  instruments.forEach((item) => {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, yPos, contentWidth, 44, 2, 2, 'F');
    doc.setDrawColor(...colors.border);
    doc.roundedRect(margin, yPos, contentWidth, 44, 2, 2, 'S');

    // Color bar
    doc.setFillColor(...colors.skyAccent);
    doc.rect(margin, yPos, 2.5, 44, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...colors.navy);
    doc.text(item.name, margin + 5, yPos + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.slate);
    doc.text(`HS Code: ${item.hs}  |  MOQ: ${item.moq}`, margin + 5, yPos + 12);

    doc.setFont('helvetica', 'bold');
    doc.text('Key Patterns / Sizes:', margin + 5, yPos + 18);
    doc.setFont('helvetica', 'normal');
    doc.text(item.patterns, margin + 35, yPos + 18);

    doc.setFont('helvetica', 'bold');
    doc.text('Metallurgy / Handle:', margin + 5, yPos + 24);
    doc.setFont('helvetica', 'normal');
    doc.text(item.material, margin + 35, yPos + 24);

    doc.setFont('helvetica', 'bold');
    doc.text('Clinical Function:', margin + 5, yPos + 30);
    doc.setFont('helvetica', 'normal');
    const splitDesc = doc.splitTextToSize(item.desc, contentWidth - 42);
    doc.text(splitDesc, margin + 35, yPos + 30);

    yPos += 48;
  });

  // ==========================================
  // PAGE 3: METALLURGY, PACKAGING & QUALITY
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.navy);
  doc.text('3. Material Metallurgy, Packaging & Sterilization Specs', margin, yPos);
  yPos += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text('Certified medical raw materials conforming to ASTM F899, ISO 7153-1, and hospital autoclave protocols.', margin, yPos);
  yPos += 8;

  const packOptions = [
    {
      title: 'A. Individual Medical-Grade Tyvek & Film Peel Pouches',
      specs: 'Transparent puncture-resistant sterile barrier film sealed to medical Tyvek paper. Includes chemical sterilization process indicator dots (Steam / EO Gas), lot numbers, and custom importer barcode labels.'
    },
    {
      title: 'B. Custom Leatherette Zippered Surgical Instrument Wallets',
      specs: 'Reinforced leatherette zippered travel cases with internal color-coded velvet lining and elastic instrument retention loops. Designed for multi-instrument clinical kits (5 to 30 tools) with custom foil-stamped or laser branding.'
    },
    {
      title: 'C. Rigid Anodized Aluminum Sterilization Cassettes & Trays',
      specs: 'Perforated heavy-gauge anodized aluminum trays fitted with heat-resistant medical silicone racks. Compatible with all autoclave cycles up to 134°C (273°F) for dental practices and surgical theatres.'
    },
    {
      title: 'D. Double-Walled Export Master Shipping Cartons',
      specs: 'Double-fluted export cartons lined with shock-absorbent bubble wraps, tip protector sleeves, and silica desiccant bags to prevent moisture during maritime or air transit.'
    }
  ];

  packOptions.forEach((pkg) => {
    doc.setFillColor(240, 249, 255);
    doc.roundedRect(margin, yPos, contentWidth, 23, 2, 2, 'F');
    doc.setDrawColor(186, 230, 253);
    doc.roundedRect(margin, yPos, contentWidth, 23, 2, 2, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...colors.navy);
    doc.text(pkg.title, margin + 5, yPos + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    const splitSpecs = doc.splitTextToSize(pkg.specs, contentWidth - 10);
    doc.text(splitSpecs, margin + 5, yPos + 12);

    yPos += 27;
  });

  yPos += 4;

  // Metallurgy & Hardness Table
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('Certified Stainless Steel Chemical & Mechanical Specifications:', margin, yPos);
  yPos += 6;

  // Table header
  doc.setFillColor(...colors.navy);
  doc.rect(margin, yPos, contentWidth, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('STEEL ALLOY GRADE', margin + 3, yPos + 5);
  doc.text('METALLURGICAL TYPE', margin + 45, yPos + 5);
  doc.text('HARDNESS (ROCKWELL)', margin + 95, yPos + 5);
  doc.text('APPLICATIONS / COMPLIANCE', margin + 140, yPos + 5);
  yPos += 7;

  const steelRows = [
    { grade: 'AISI 420B Stainless', type: 'Martensitic (Hardened)', hardness: 'HRC 48–54', app: 'Scissors, Forceps, Beaks' },
    { grade: 'AISI 410 Stainless', type: 'Martensitic (Medium)', hardness: 'HRC 42–46', app: 'Artery Hemostats, Clamps' },
    { grade: 'AISI 304 Stainless', type: 'Austenitic (Non-Magnetic)', hardness: 'HRC 25–30', app: 'Retractors, Speculums, Trays' },
    { grade: 'Tungsten Carbide (TC)', type: 'Sintered Carbide Inserts', hardness: 'HRC 68–72', app: 'Needle Holder Jaws, Wire Cutters' },
    { grade: 'Passivation Layer', type: 'ASTM A967 Citric/Nitric', hardness: 'Boil Test Cleared', app: 'Zero corrosion / Zero pitting' }
  ];

  steelRows.forEach((row, i) => {
    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252);
    doc.rect(margin, yPos, contentWidth, 7, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, yPos + 7, margin + contentWidth, yPos + 7);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    doc.text(row.grade, margin + 3, yPos + 5);

    doc.setFont('helvetica', 'normal');
    doc.text(row.type, margin + 45, yPos + 5);
    doc.text(row.hardness, margin + 95, yPos + 5);
    doc.text(row.app, margin + 140, yPos + 5);

    yPos += 7;
  });

  // ==========================================
  // PAGE 4: QUALITY TESTING & COMMERCIAL CONTACT
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.navy);
  doc.text('4. Quality Verification & Commercial Ordering Framework', margin, yPos);
  yPos += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text('Every manufacturing batch passes multi-stage mechanical and chemical audits before dispatch.', margin, yPos);
  yPos += 8;

  // Quality Verification Checklist Table
  doc.setFillColor(...colors.navy);
  doc.rect(margin, yPos, contentWidth, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('TEST / VERIFICATION STAGE', margin + 3, yPos + 5);
  doc.text('TEST STANDARD & PROTOCOL', margin + 65, yPos + 5);
  doc.text('BATCH AUDIT RESULT', margin + 130, yPos + 5);
  yPos += 7;

  const testRows = [
    { test: 'Boil & Corrosion Test', std: 'ASTM F1089 (30 min boil + 24h air dry)', res: '100% Pass (No Rust / No Pitting)' },
    { test: 'Rockwell Hardness Test', std: 'ISO 7153-1 Diamond Indenter', res: 'Conforms to HRC 48-56 Spec' },
    { test: 'Ultrasonic Cleaning', std: 'Multi-stage alkaline ultrasonic bath', res: 'Zero polishing residue / burrs' },
    { test: 'Passivation Verification', std: 'Copper Sulfate / ASTM A967', res: 'Passive chromium-oxide barrier' },
    { test: 'Autoclave Endurance', std: 'EN 285 Steam sterilization at 134°C', res: 'Guaranteed 500+ cycles' },
    { test: 'Optical Laser Marking', std: 'High-contrast fiber laser etching', res: 'CE Mark, SKU, Lot traceability' },
    { test: 'Tactile Spring Feedback', std: 'Mechanical 10,000-cycle closure cycle', res: 'Smooth ratchet engagement' }
  ];

  testRows.forEach((row, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 250, idx % 2 === 0 ? 255 : 252);
    doc.rect(margin, yPos, contentWidth, 6.5, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, yPos + 6.5, margin + contentWidth, yPos + 6.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    doc.text(row.test, margin + 3, yPos + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(row.std, margin + 65, yPos + 4.5);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.emerald);
    doc.text(row.res, margin + 130, yPos + 4.5);

    yPos += 6.5;
  });

  yPos += 14;

  // Commercial Desk Box
  doc.setFillColor(240, 249, 255);
  doc.roundedRect(margin, yPos, contentWidth, 34, 2.5, 2.5, 'F');
  doc.setDrawColor(186, 230, 253);
  doc.roundedRect(margin, yPos, contentWidth, 34, 2.5, 2.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...colors.navy);
  doc.text('DIRECT FACTORY QUOTATION & OEM TOOLING INQUIRIES', margin + 6, yPos + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...colors.charcoal);
  doc.text(
    'Contact CEO Nafees Arshad for customized clinic kits, private label laser marking, and expedited DHL/FedEx sample dispatches.',
    margin + 6,
    yPos + 14
  );
  doc.text(
    `Official Corporate Email: ${COMPANY_INFO.email} | WhatsApp / Call: ${COMPANY_INFO.whatsapp}`,
    margin + 6,
    yPos + 20
  );
  doc.text(
    'Shipping Terminals: Sialkot International Airport (SKT Air Cargo, 3-5 days delivery) and Karachi Port (PKKHI Maritime).',
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

export function downloadSurgicalPdfCatalog() {
  const doc = generateSurgicalPdfCatalog();
  doc.save('Utility-Home-Surgical-Dental-Instruments-Export-Catalog.pdf');
}
