import { jsPDF } from 'jspdf';
import { PAKISTANI_EXPORT_VEGETABLES, CATALOG_COMPANY_CREDENTIALS } from '../data/vegetablesCatalog';

export function generateVegetablesPdfCatalog(): jsPDF {
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
    darkGreen: [6, 78, 59] as [number, number, number],      // #064e3b
    emerald: [16, 149, 106] as [number, number, number],    // #10956a
    limeAccent: [132, 204, 22] as [number, number, number],  // #84cc16
    charcoal: [15, 23, 42] as [number, number, number],      // #0f172a
    slate: [71, 85, 105] as [number, number, number],        // #475569
    lightBg: [248, 250, 252] as [number, number, number],    // #f8fafc
    border: [226, 232, 240] as [number, number, number],     // #e2e8f0
    white: [255, 255, 255] as [number, number, number]
  };

  const addHeaderAndFooter = (pageNumber: number, totalPages: number) => {
    // Top bar
    doc.setFillColor(...colors.darkGreen);
    doc.rect(0, 0, pageWidth, 12, 'F');

    // Thin lime accent stripe
    doc.setFillColor(...colors.limeAccent);
    doc.rect(0, 12, pageWidth, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(255, 255, 255);
    doc.text('UTILITY HOME EXPORTS · FRESH VEGETABLES & AGRO PRODUCE DIVISION', margin, 8);
    doc.text('JHELUM, PUNJAB, PAKISTAN', pageWidth - margin, 8, { align: 'right' });

    // Bottom footer bar
    doc.setFillColor(...colors.lightBg);
    doc.rect(0, pageHeight - 13, pageWidth, 13, 'F');
    doc.setDrawColor(...colors.border);
    doc.setLineWidth(0.3);
    doc.line(0, pageHeight - 13, pageWidth, pageHeight - 13);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.slate);
    doc.text(
      `Utility Home Exports · CEO: ${CATALOG_COMPANY_CREDENTIALS.ceo} · Email: ${CATALOG_COMPANY_CREDENTIALS.officialEmail} · WhatsApp: ${CATALOG_COMPANY_CREDENTIALS.phoneWhatsApp}`,
      margin,
      pageHeight - 5
    );
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, pageHeight - 5, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: COVER & EXECUTIVE OVERVIEW
  // ==========================================
  let yPos = 24;

  // Title Box
  doc.setFillColor(...colors.lightBg);
  doc.roundedRect(margin, yPos, contentWidth, 34, 3, 3, 'F');
  doc.setDrawColor(...colors.border);
  doc.roundedRect(margin, yPos, contentWidth, 34, 3, 3, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...colors.darkGreen);
  doc.text('OFFICIAL EXPORT PRODUCT CATALOG', margin + 6, yPos + 10);

  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('Pakistani In-Season Farm-Fresh Vegetables & Commercial Produce', margin + 6, yPos + 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.slate);
  doc.text(
    'Direct Farm Sourcing · Cold-Chain Reefer Logistics · Phyto & DPP Inspected · Seaworthy Export Packaging',
    margin + 6,
    yPos + 26
  );

  yPos += 40;

  // Company Credentials Box
  doc.setFillColor(240, 253, 244); // light green bg
  doc.roundedRect(margin, yPos, contentWidth, 38, 2.5, 2.5, 'F');
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(margin, yPos, contentWidth, 38, 2.5, 2.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...colors.darkGreen);
  doc.text('EXPORTER CREDENTIALS & COMMERCIAL CONTACT', margin + 6, yPos + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...colors.charcoal);

  // Two columns
  const col1X = margin + 6;
  const col2X = margin + 96;

  doc.text(`Company: Utility Home Exports (Pvt Ltd)`, col1X, yPos + 14);
  doc.text(`Headquarters: ${CATALOG_COMPANY_CREDENTIALS.headquarters}`, col1X, yPos + 20);
  doc.text(`CEO / Executive: ${CATALOG_COMPANY_CREDENTIALS.ceo}`, col1X, yPos + 26);
  doc.text(`Agro Harvest Belts: Punjab River Basins & Kunri, Pakistan`, col1X, yPos + 32);

  doc.text(`Direct Email: ${CATALOG_COMPANY_CREDENTIALS.ceoEmail}`, col2X, yPos + 14);
  doc.text(`General Email: ${CATALOG_COMPANY_CREDENTIALS.officialEmail}`, col2X, yPos + 20);
  doc.text(`WhatsApp / Tel: ${CATALOG_COMPANY_CREDENTIALS.phoneWhatsApp}`, col2X, yPos + 26);
  doc.text(`Export Seaports: Karachi Port & Port Qasim`, col2X, yPos + 32);

  yPos += 45;

  // Quality Standards Strip
  doc.setFillColor(...colors.darkGreen);
  doc.roundedRect(margin, yPos, contentWidth, 18, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('GLOBAL QUALITY ASSURANCE & PHYTOSANITARY COMPLIANCE', margin + 6, yPos + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(220, 252, 231);
  doc.text(
    '· 100% Pre-Shipment DPP (Dept. of Plant Protection) Inspection · ISO 9001:2015 · ISO 22000 Food Safety · EU/GCC MRL Tested · 0-10°C Continuous Reefer Data Logging',
    margin + 6,
    yPos + 12
  );

  yPos += 24;

  // Overview Table of the 7 Pakistani Export Vegetables
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...colors.charcoal);
  doc.text('IN-SEASON EXPORT COMMODITIES MATRIX', margin, yPos);
  yPos += 4;

  // Table header
  doc.setFillColor(...colors.slate);
  doc.rect(margin, yPos, contentWidth, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);

  doc.text('Product Name', margin + 3, yPos + 4.8);
  doc.text('HS Code', margin + 50, yPos + 4.8);
  doc.text('Origin (Pakistan)', margin + 75, yPos + 4.8);
  doc.text('Caliber / Available Sizes', margin + 115, yPos + 4.8);
  doc.text('Packaging Types', margin + 155, yPos + 4.8);
  yPos += 7;

  // Table rows
  PAKISTANI_EXPORT_VEGETABLES.forEach((item, index) => {
    if (index % 2 === 1) {
      doc.setFillColor(...colors.lightBg);
      doc.rect(margin, yPos, contentWidth, 8, 'F');
    }
    doc.setDrawColor(...colors.border);
    doc.line(margin, yPos + 8, margin + contentWidth, yPos + 8);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    doc.text(item.name.slice(0, 26), margin + 3, yPos + 5.2);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(item.hsCode.slice(0, 11), margin + 50, yPos + 5.2);
    doc.text(item.origin.split(',')[0].slice(0, 22), margin + 75, yPos + 5.2);
    doc.text(item.availableSizes.split('(')[0].slice(0, 24), margin + 115, yPos + 5.2);
    doc.text(item.packagingTypes[0].slice(0, 22), margin + 155, yPos + 5.2);

    yPos += 8;
  });

  yPos += 6;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(...colors.slate);
  doc.text(
    '* All commodities loaded in sanitized 40ft High Cube Reefer ocean containers or expedited air cargo with continuous temperature loggers.',
    margin,
    yPos
  );

  // ==========================================
  // PAGE 2: DETAILED SPECS - ITEMS 1 to 3
  // (Garlic, Ginger, Red Onions)
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.darkGreen);
  doc.text('TECHNICAL EXPORT SPECIFICATIONS · SECTION 1', margin, yPos);
  yPos += 6;

  const renderProductCard = (item: typeof PAKISTANI_EXPORT_VEGETABLES[0], currentY: number) => {
    const cardHeight = 72;
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, currentY, contentWidth, cardHeight, 2, 2, 'F');
    doc.setDrawColor(...colors.border);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, currentY, contentWidth, cardHeight, 2, 2, 'S');

    // Title bar
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, currentY, contentWidth, 8, 'F');
    doc.setDrawColor(...colors.border);
    doc.line(margin, currentY + 8, margin + contentWidth, currentY + 8);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...colors.darkGreen);
    doc.text(`${item.name} (${item.urduName})`, margin + 4, currentY + 5.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.slate);
    doc.text(`HS Code: ${item.hsCode} | Origin: ${item.origin}`, margin + contentWidth - 4, currentY + 5.5, { align: 'right' });

    let lineY = currentY + 14;

    // Spec lines
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.charcoal);
    doc.text('Botanical & Variety:', margin + 4, lineY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(`${item.botanicalName} · ${item.variety}`, margin + 35, lineY);

    lineY += 5.5;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.charcoal);
    doc.text('Available Calibers/Sizes:', margin + 4, lineY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(item.availableSizes, margin + 40, lineY);

    lineY += 5.5;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.charcoal);
    doc.text('Curing / Moisture Specs:', margin + 4, lineY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    const dryingLines = doc.splitTextToSize(item.dryingAndMoisture, contentWidth - 46);
    doc.text(dryingLines, margin + 42, lineY);
    lineY += (dryingLines.length - 1) * 3.5 + 5.5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.charcoal);
    doc.text('Shelf-Life & Storage Temp:', margin + 4, lineY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(`${item.shelfLife} | Storage: ${item.storageTemp}`, margin + 45, lineY);

    lineY += 5.5;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.charcoal);
    doc.text('Export Packaging Types:', margin + 4, lineY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(item.packagingTypes.join('; '), margin + 42, lineY);

    lineY += 5.5;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.charcoal);
    doc.text('Shipping Terms & Capacity:', margin + 4, lineY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    doc.text(`${item.shippingTerms} | Load: ${item.containerLoad}`, margin + 45, lineY);

    lineY += 5.5;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.charcoal);
    doc.text('Seasonality Window:', margin + 4, lineY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.darkGreen);
    doc.text(item.inSeasonMonths, margin + 35, lineY);

    return cardHeight + 4;
  };

  // Render items 0, 1, 2
  yPos += renderProductCard(PAKISTANI_EXPORT_VEGETABLES[0], yPos); // Garlic
  yPos += renderProductCard(PAKISTANI_EXPORT_VEGETABLES[1], yPos); // Ginger
  renderProductCard(PAKISTANI_EXPORT_VEGETABLES[2], yPos); // Red Onions

  // ==========================================
  // PAGE 3: DETAILED SPECS - ITEMS 4 to 6
  // (Potatoes, Chillies, Turnips)
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.darkGreen);
  doc.text('TECHNICAL EXPORT SPECIFICATIONS · SECTION 2', margin, yPos);
  yPos += 6;

  yPos += renderProductCard(PAKISTANI_EXPORT_VEGETABLES[3], yPos); // Potatoes
  yPos += renderProductCard(PAKISTANI_EXPORT_VEGETABLES[4], yPos); // Green/Red Chillies
  renderProductCard(PAKISTANI_EXPORT_VEGETABLES[5], yPos); // Fresh Turnips

  // ==========================================
  // PAGE 4: DETAILED SPECS - ITEM 7 (Carrots) & COMMERCIAL INSTRUCTIONS
  // ==========================================
  doc.addPage();
  yPos = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.darkGreen);
  doc.text('TECHNICAL EXPORT SPECIFICATIONS & COMMERCIAL PROTOCOLS', margin, yPos);
  yPos += 6;

  yPos += renderProductCard(PAKISTANI_EXPORT_VEGETABLES[6], yPos); // Carrots
  yPos += 4;

  // Commercial Shipping Terms Box
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, yPos, contentWidth, 75, 2.5, 2.5, 'F');
  doc.setDrawColor(...colors.border);
  doc.roundedRect(margin, yPos, contentWidth, 75, 2.5, 2.5, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...colors.darkGreen);
  doc.text('COMMERCIAL TERMS, INCOTERMS & COLD-CHAIN LOGISTICS', margin + 6, yPos + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...colors.charcoal);

  let termY = yPos + 15;
  const termsList = [
    { title: 'Incoterms Supported:', desc: 'FOB (Karachi Port / Port Qasim), CIF (to any major global seaport), CFR, and Air Cargo CFR to Middle East / Europe / UK hubs.' },
    { title: 'Reefer Cold Chain:', desc: 'Strict continuous cold chain with pre-cooling within 4 hours of harvest. USB/Cellular temperature data recorders included in every container.' },
    { title: 'Payment Terms:', desc: 'Irrevocable Letter of Credit (L/C at sight) from first-class international banks, or Wire Transfer (30% advance deposit, 70% against Bill of Lading copy).' },
    { title: 'Standard Export Dossier:', desc: 'Commercial Invoice, Packing List, Clean On-Board Ocean Bill of Lading, Certificate of Origin (Chamber), Phytosanitary Certificate (DPP).' },
    { title: 'Private Label OEM:', desc: 'Custom brand graphics, retail punnets, barcode labels, and mesh bag printing available for supermarket chains and food importers.' }
  ];

  termsList.forEach((t) => {
    doc.setFont('helvetica', 'bold');
    doc.text(t.title, margin + 6, termY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.slate);
    const lines = doc.splitTextToSize(t.desc, contentWidth - 48);
    doc.text(lines, margin + 46, termY);
    doc.setTextColor(...colors.charcoal);
    termY += (lines.length - 1) * 3.5 + 5.5;
  });

  // Direct Order Box at the bottom of Page 4
  yPos += 80;
  doc.setFillColor(...colors.darkGreen);
  doc.roundedRect(margin, yPos, contentWidth, 24, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text('DIRECT BULK CONTRACT PROCUREMENT', margin + 6, yPos + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(220, 252, 231);
  doc.text(
    `Contact CEO ${CATALOG_COMPANY_CREDENTIALS.ceo} directly for live seasonal farm-gate commodity rates and weekly reefer freight allocations.`,
    margin + 6,
    yPos + 14
  );
  doc.text(
    `Email: ${CATALOG_COMPANY_CREDENTIALS.officialEmail} | WhatsApp / Call: ${CATALOG_COMPANY_CREDENTIALS.phoneWhatsApp} | Head Office: Jhelum, Pakistan`,
    margin + 6,
    yPos + 19
  );

  // Apply header & footer across all 4 pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderAndFooter(i, totalPages);
  }

  return doc;
}

export function downloadVegetablesPdfCatalog() {
  const doc = generateVegetablesPdfCatalog();
  doc.save('Utility-Home-Fresh-Vegetables-Export-Catalog.pdf');
}
