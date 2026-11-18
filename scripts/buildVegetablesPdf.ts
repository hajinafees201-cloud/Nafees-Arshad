import { jsPDF } from 'jspdf';
import * as fs from 'fs';
import * as path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 14;
const contentWidth = pageWidth - margin * 2;

// Header
doc.setFillColor(6, 78, 59);
doc.rect(0, 0, pageWidth, 12, 'F');
doc.setFillColor(132, 204, 22);
doc.rect(0, 12, pageWidth, 1.5, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(255, 255, 255);
doc.text('UTILITY HOME EXPORTS · FRESH VEGETABLES & AGRO PRODUCE DIVISION', margin, 8);
doc.text('HEAD OFFICE: JHELUM, PAKISTAN', pageWidth - margin, 8, { align: 'right' });

// Title
let y = 24;
doc.setFillColor(248, 250, 252);
doc.roundedRect(margin, y, contentWidth, 34, 3, 3, 'F');
doc.setDrawColor(226, 232, 240);
doc.roundedRect(margin, y, contentWidth, 34, 3, 3, 'S');

doc.setFont('helvetica', 'bold');
doc.setFontSize(18);
doc.setTextColor(6, 78, 59);
doc.text('OFFICIAL EXPORT PRODUCT CATALOG', margin + 6, y + 10);

doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('Pakistani In-Season Farm-Fresh Vegetables & Commercial Produce', margin + 6, y + 18);

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(71, 85, 105);
doc.text(
  'Direct Farm Sourcing · Cold-Chain Reefer Logistics · Phyto & DPP Inspected · Seaworthy Export Packaging',
  margin + 6,
  y + 26
);

y += 40;

// Company Credentials
doc.setFillColor(240, 253, 244);
doc.roundedRect(margin, y, contentWidth, 38, 2.5, 2.5, 'F');
doc.setDrawColor(187, 247, 208);
doc.roundedRect(margin, y, contentWidth, 38, 2.5, 2.5, 'S');

doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(6, 78, 59);
doc.text('EXPORTER CREDENTIALS & COMMERCIAL CONTACT', margin + 6, y + 7);

doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(15, 23, 42);

doc.text('Company: Utility Home Exports (Pvt Ltd)', margin + 6, y + 14);
doc.text('Headquarters: Head Office: Jhelum, Pakistan', margin + 6, y + 20);
doc.text('CEO / Executive: Nafees Arshad', margin + 6, y + 26);
doc.text('Agro Belts: Punjab River Basins & Kunri, Pakistan', margin + 6, y + 32);

doc.text('Direct Email: ceo@utilityexport.com', margin + 96, y + 14);
doc.text('WhatsApp / Tel: +92 300 6474593', margin + 96, y + 20);
doc.text('Export Seaports: Karachi Port (PKKHI) & Port Qasim', margin + 96, y + 26);
doc.text('Commercial Incoterms: FOB Karachi / CIF Destination Ports', margin + 96, y + 32);

y += 45;

// Quality standards banner
doc.setFillColor(6, 78, 59);
doc.roundedRect(margin, y, contentWidth, 18, 2, 2, 'F');
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(255, 255, 255);
doc.text('GLOBAL QUALITY ASSURANCE & PHYTOSANITARY COMPLIANCE', margin + 6, y + 6);
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(220, 252, 231);
doc.text(
  '100% Pre-Shipment DPP (Dept. of Plant Protection) Inspection · ISO 9001:2015 · ISO 22000 Food Safety · EU/GCC MRL Tested',
  margin + 6,
  y + 12
);

y += 24;

// 7 Vegetables Specifications Table
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(15, 23, 42);
doc.text('7 IN-SEASON PAKISTANI EXPORT VEGETABLES', margin, y);
y += 5;

const items = [
  { name: '1. Fresh Garlic (NARC-G1 White)', hs: '0703.20.00', sizes: '50mm+, 55mm+, 60mm–75mm+', pack: '5kg/10kg/20kg Leno Mesh Sacks', terms: 'FOB / CIF' },
  { name: '2. Fresh Ginger Rhizomes', hs: '0910.11.00', sizes: '150g, 200g, 250g+ Hands', pack: '10kg Crates & Cartons', terms: 'FOB / CIF' },
  { name: '3. Premium Red Onions', hs: '0703.10.00', sizes: '45mm+, 50mm+, 55mm–85mm', pack: '10kg/25kg/50kg Leno Mesh Bags', terms: 'FOB / CIF' },
  { name: '4. Fresh Potatoes (Mozika/Asterix/Rosetta)', hs: '0701.90.00', sizes: '35-45mm, 45-55mm, 55-80mm', pack: '10kg/25kg Mesh & 1T Jumbo Bins', terms: 'FOB / CIF' },
  { name: '5. Green Chillies & Red Chilli', hs: '0709.60.00', sizes: 'G4 Hot 6-10cm / Bullet 4-6cm', pack: '3kg/4kg/5kg Corrugated Master Boxes', terms: 'FOB / Air CFR' },
  { name: '6. Fresh Turnips (Seasonal Produce)', hs: '0706.90.00', sizes: '50-70mm, 70-90mm Caliber', pack: '5kg/10kg Corrugated Boxes / Mesh', terms: 'FOB / CIF' },
  { name: '7. Fresh Carrots (Pakistani Red & Kuroda)', hs: '0706.10.00', sizes: 'Length 16-24cm, Dia 25-42mm', pack: '10kg PE Liner Cartons / Crates', terms: 'FOB / CIF' }
];

doc.setFillColor(71, 85, 105);
doc.rect(margin, y, contentWidth, 7, 'F');
doc.setFont('helvetica', 'bold');
doc.setFontSize(7.5);
doc.setTextColor(255, 255, 255);
doc.text('Commodity Name', margin + 3, y + 4.8);
doc.text('HS Code', margin + 65, y + 4.8);
doc.text('Caliber / Sizes', margin + 95, y + 4.8);
doc.text('Packaging Style', margin + 140, y + 4.8);
y += 7;

items.forEach((item, index) => {
  if (index % 2 === 1) {
    doc.setFillColor(248, 250, 252);
    doc.rect(margin, y, contentWidth, 7.5, 'F');
  }
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y + 7.5, margin + contentWidth, y + 7.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text(item.name, margin + 3, y + 5);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(item.hs, margin + 65, y + 5);
  doc.text(item.sizes, margin + 95, y + 5);
  doc.text(item.pack, margin + 140, y + 5);

  y += 7.5;
});

y += 10;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(6, 78, 59);
doc.text('COMMERCIAL ORDERING & LOGISTICS DESK', margin, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(71, 85, 105);
doc.text('Container bookings via 40ft High Cube Reefer (28-30 MT) with active temperature loggers. Port of loading: Karachi (PKKHI).', margin, y);
y += 4;
doc.text('Direct contact: CEO Nafees Arshad · Mobile/WhatsApp: +92 300 6474593 · Email: ceo@utilityexport.com', margin, y);

// Footer
doc.setFillColor(248, 250, 252);
doc.rect(0, pageHeight - 12, pageWidth, 12, 'F');
doc.setDrawColor(226, 232, 240);
doc.line(0, pageHeight - 12, pageWidth, pageHeight - 12);
doc.setFont('helvetica', 'normal');
doc.setFontSize(7);
doc.setTextColor(71, 85, 105);
doc.text('Utility Home Exports · Head Office: Jhelum, Pakistan · CEO: Nafees Arshad · info@utilityexport.com', margin, pageHeight - 4.5);
doc.text('Official Export Catalog · Fresh Produce Division', pageWidth - margin, pageHeight - 4.5, { align: 'right' });

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
const outputPath = path.resolve(process.cwd(), 'public', 'utility-home-vegetables-catalog.pdf');
fs.writeFileSync(outputPath, pdfBuffer);
console.log('Successfully generated', outputPath, 'bytes:', pdfBuffer.length);
