import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ShieldCheck, 
  Truck, 
  Ship, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle,
  Leaf,
  Calendar,
  ThermometerSnowflake,
  Package,
  MapPin,
  Mail,
  Phone,
  Building2,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';
import { PAKISTANI_EXPORT_VEGETABLES, CATALOG_COMPANY_CREDENTIALS } from '../../data/vegetablesCatalog';
import { downloadVegetablesPdfCatalog } from '../../utils/generateVegetablesPdf';

interface VegetablesCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuickRfq?: (productName: string) => void;
}

export const VegetablesCatalogModal: React.FC<VegetablesCatalogModalProps> = ({
  isOpen,
  onClose,
  onOpenQuickRfq
}) => {
  const [activeItemFilter, setActiveItemFilter] = useState<string>('all');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    try {
      downloadVegetablesPdfCatalog();
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setTimeout(() => setIsGeneratingPdf(false), 800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredItems = activeItemFilter === 'all' 
    ? PAKISTANI_EXPORT_VEGETABLES 
    : PAKISTANI_EXPORT_VEGETABLES.filter(item => item.id === activeItemFilter);

  const whatsappMessage = encodeURIComponent(
    `Hello CEO Nafees Arshad (Utility Home Exports, Jhelum). I reviewed your Fresh Vegetables Export Catalog (Garlic, Ginger, Red Onions, Potatoes, Chillies, Turnips, Carrots, Okra, Bitter Gourd) and would like to request FOB/CIF price quotes for bulk reefer container shipments.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in print:p-0 print:bg-white print:static">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Top Control Bar (Hidden during native print) */}
        <div className="bg-emerald-950 text-white px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-900 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <img 
              src="/images/utility_home_export_logo.jpeg" 
              alt="Utility Home Export Official Logo"
              className="w-10 h-10 rounded-xl object-cover shadow-sm shrink-0 border border-slate-700/80"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-lime-400 px-2 py-0.5 rounded-full bg-emerald-900 border border-emerald-800">
                  Official Export Catalog
                </span>
                <span className="text-xs text-emerald-300 font-medium hidden sm:inline">
                  {PAKISTANI_EXPORT_VEGETABLES.length} In-Season Pakistani Commodities
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-white">
                Utility Home Exports · Fresh Vegetables Catalog (PDF)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-3.5 py-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Download PDF directly to your device"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download PDF (.pdf)'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700 text-emerald-100 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer hidden sm:flex"
              title="Print document or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-lime-400" />
              <span>Print / Save</span>
            </button>

            <a
              href={`https://wa.me/${CATALOG_COMPANY_CREDENTIALS.phoneWhatsApp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Direct WhatsApp Inquiry to CEO"
            >
              <MessageCircle className="w-3.5 h-3.5 text-lime-400" />
              <span className="hidden md:inline">WhatsApp CEO</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-emerald-900/80 hover:bg-red-700/80 text-emerald-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
              aria-label="Close catalog modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-toolbar with item filter tabs (Hidden during print) */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 overflow-x-auto shrink-0 print:hidden">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className="font-semibold text-slate-800 shrink-0">Filter Items:</span>
            <button
              onClick={() => setActiveItemFilter('all')}
              className={`px-2.5 py-1 rounded-lg font-medium text-xs transition-colors ${
                activeItemFilter === 'all' 
                  ? 'bg-emerald-800 text-white shadow-2xs' 
                  : 'text-slate-600 hover:bg-stone-200'
              }`}
            >
              All {PAKISTANI_EXPORT_VEGETABLES.length} Commodities
            </button>
            {PAKISTANI_EXPORT_VEGETABLES.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItemFilter(item.id)}
                className={`px-2.5 py-1 rounded-lg font-medium text-xs whitespace-nowrap transition-colors ${
                  activeItemFilter === item.id 
                    ? 'bg-emerald-800 text-white shadow-2xs' 
                    : 'text-slate-600 hover:bg-stone-200'
                }`}
              >
                {item.name.split(' ')[1] || item.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-stone-500 hidden lg:block shrink-0">
            FOB Karachi Port · CIF Global Destination Ports
          </div>
        </div>

        {/* Scrollable Printable Catalog Sheet Body */}
        <div className="overflow-y-auto p-4 sm:p-8 md:p-10 space-y-8 bg-stone-100/60 print:p-0 print:bg-white print:overflow-visible">
          
          {/* Document Sheet Simulation */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-stone-200 p-6 sm:p-10 space-y-8 print:border-none print:shadow-none print:p-0">
            
            {/* 1. OFFICIAL LETTERHEAD & CREDENTIALS BANNER */}
            <div className="border-b-2 border-emerald-900 pb-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Brand info */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800">
                    <Leaf className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Horticultural &amp; Agricultural Exports</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
                    {CATALOG_COMPANY_CREDENTIALS.companyName}
                  </h1>
                  <p className="text-xs sm:text-sm font-medium text-emerald-800">
                    {CATALOG_COMPANY_CREDENTIALS.division}
                  </p>
                  <p className="text-xs text-slate-600 flex items-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Headquarters &amp; Processing Depots: <strong>{CATALOG_COMPANY_CREDENTIALS.headquarters}</strong></span>
                  </p>
                </div>

                {/* CEO & Direct Contact credentials */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950 text-white space-y-1.5 text-xs sm:min-w-[260px] border border-emerald-900">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-lime-400">
                    Executive Export Desk
                  </div>
                  <div className="font-bold text-white text-sm">
                    CEO: {CATALOG_COMPANY_CREDENTIALS.ceo}
                  </div>
                  <div className="text-emerald-200 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                    <a href={`mailto:${CATALOG_COMPANY_CREDENTIALS.ceoEmail}`} className="hover:text-white underline">
                      {CATALOG_COMPANY_CREDENTIALS.ceoEmail}
                    </a>
                  </div>
                  <div className="text-emerald-200 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                    <span>{CATALOG_COMPANY_CREDENTIALS.phoneWhatsApp}</span>
                  </div>
                  <div className="text-[11px] text-lime-300 font-mono pt-1 border-t border-emerald-900">
                    Incoterms: FOB Karachi / CIF Worldwide
                  </div>
                </div>

              </div>

              {/* Badges strip */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  DPP Phytosanitary Certified
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200">
                  <Award className="w-3.5 h-3.5 text-emerald-700" />
                  ISO 9001:2015 &amp; ISO 22000
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200">
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-sky-600" />
                  0°C–10°C Reefer Cold Chain
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200">
                  <Ship className="w-3.5 h-3.5 text-emerald-700" />
                  Karachi Port (PKKHI) &amp; Port Qasim
                </span>
              </div>
            </div>

            {/* 2. EXECUTIVE INTRO */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-700 leading-relaxed space-y-1">
              <strong className="text-slate-900 block font-['Space_Grotesk'] text-sm">
                Pakistani Agricultural Export Standards &amp; Seasonality Overview
              </strong>
              <p>
                Utility Home Exports provides complete export supply chain management for premier Pakistani agricultural commodities. 
                All vegetables are harvested from certified growers in Punjab and Sindh, graded by millimeter caliber, cured or washed to international standards, and dispatched in refrigerated containers (40ft High Cube Reefers) with active temperature logging to protect pulp freshness and shelf-life.
              </p>
            </div>

            {/* 3. PRODUCT CATALOG ITEMS (9 SEASONAL COMMODITIES) */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <h2 className="text-lg sm:text-xl font-bold font-['Space_Grotesk'] text-slate-900 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-700" />
                  <span>In-Season Export Vegetables Catalog ({filteredItems.length} Products)</span>
                </h2>
                <span className="text-xs text-stone-500 font-mono">
                  Catalog Edition: 2026-Q4
                </span>
              </div>

              <div className="space-y-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-emerald-300 transition-all space-y-4 print:border-stone-300 print:break-inside-avoid"
                  >
                    {/* Top Row: Thumbnail + Core Specs */}
                    <div className="flex flex-col sm:flex-row gap-5">
                      
                      {/* High-Resolution Unsplash Image Thumbnail */}
                      <div className="relative w-full sm:w-48 h-40 sm:h-auto rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.name.includes('Ginger') ? 'Fresh Ginger Rhizomes - Utility Home Exports' : item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/seasonal_veg_herbs.jpg';
                          }}
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-mono border border-slate-700">
                          {item.hsCode}
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-emerald-950/85 backdrop-blur-xs text-lime-300 text-[10px] font-semibold text-center truncate">
                          {item.urduName}
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                              Item #{index + 1} · {item.variety}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk']">
                              {item.name}
                            </h3>
                            <span className="text-xs text-emerald-700 font-serif italic">
                              {item.botanicalName}
                            </span>
                          </div>

                          <div className="text-right">
                            <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                              {item.inSeasonMonths}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                          <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                            <span className="text-stone-500 font-bold uppercase text-[10px] block">
                              Origin &amp; Calibers:
                            </span>
                            <span className="text-slate-900 font-semibold block">{item.origin}</span>
                            <span className="text-emerald-800 font-medium text-[11px]">{item.availableSizes}</span>
                          </div>

                          <div className="p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                            <span className="text-stone-500 font-bold uppercase text-[10px] block">
                              Shelf-Life &amp; Storage:
                            </span>
                            <span className="text-slate-900 font-semibold block">{item.shelfLife}</span>
                            <span className="text-emerald-800 font-medium text-[11px]">{item.storageTemp}</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Full Width Specs Detail: Curing, Packaging & Shipping Terms */}
                    <div className="pt-3 border-t border-stone-100 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      
                      {/* Drying & Moisture */}
                      <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                        <span className="text-emerald-900 font-bold uppercase text-[10px] flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-emerald-700" />
                          Drying &amp; Moisture Specs:
                        </span>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {item.dryingAndMoisture}
                        </p>
                      </div>

                      {/* Packaging Types */}
                      <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 space-y-1">
                        <span className="text-amber-900 font-bold uppercase text-[10px] flex items-center gap-1">
                          <Package className="w-3 h-3 text-amber-700" />
                          Packaging Types:
                        </span>
                        <ul className="text-slate-700 text-[11px] space-y-0.5">
                          {item.packagingTypes.map((pkg, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-1">
                              <span className="text-amber-600 font-bold">·</span>
                              <span>{pkg}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Shipping Terms & Container Loading */}
                      <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1">
                        <span className="text-blue-900 font-bold uppercase text-[10px] flex items-center gap-1">
                          <Ship className="w-3 h-3 text-blue-700" />
                          Shipping Terms:
                        </span>
                        <p className="text-slate-900 font-semibold text-[11px]">
                          {item.shippingTerms}
                        </p>
                        <p className="text-blue-800 text-[11px] font-mono">
                          {item.containerLoad}
                        </p>
                      </div>

                    </div>

                    {/* Action Bar for this specific item (Hidden on print) */}
                    <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs print:hidden">
                      <div className="text-[11px] text-stone-500">
                        HS: <span className="font-mono text-slate-800 font-semibold">{item.hsCode}</span> | DPP Checked
                      </div>
                      {onOpenQuickRfq && (
                        <button
                          onClick={() => {
                            onClose();
                            onOpenQuickRfq(item.name);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                        >
                          Request Quotation for {item.name.split(' ')[1] || item.name.split(' ')[0]}
                        </button>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* 4. COMMERCIAL INCOTERMS & PACKAGING SUMMARY */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 print:bg-white print:text-slate-900 print:border print:border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold font-['Space_Grotesk'] text-white print:text-slate-900 flex items-center gap-2">
                  <Ship className="w-5 h-5 text-lime-400" />
                  <span>Commercial Incoterms &amp; Cold-Chain Execution</span>
                </h3>
                <span className="text-xs text-lime-400 font-mono">
                  Origin: Head Office: Jhelum, Pakistan &amp; Port Qasim / Karachi Ports
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Incoterms:</span>
                  <span className="font-semibold text-white print:text-slate-900 block">FOB Karachi Port</span>
                  <span className="text-slate-300 print:text-slate-600 text-[11px]">CIF / CFR Destination Seaports &amp; Air Hubs</span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Loading Port:</span>
                  <span className="font-semibold text-white print:text-slate-900 block">Karachi (PKKHI) &amp; Port Qasim</span>
                  <span className="text-slate-300 print:text-slate-600 text-[11px]">Fast customs dispatch via major liners</span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Payment Terms:</span>
                  <span className="font-semibold text-white print:text-slate-900 block">L/C at Sight / Wire T/T</span>
                  <span className="text-slate-300 print:text-slate-600 text-[11px]">30% Advance + 70% against B/L copy</span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 uppercase text-[10px] font-bold block">Shipping Dossier:</span>
                  <span className="font-semibold text-white print:text-slate-900 block">DPP Phyto + Inv + P/L</span>
                  <span className="text-slate-300 print:text-slate-600 text-[11px]">Clean On-Board B/L &amp; Certificate of Origin</span>
                </div>
              </div>
            </div>

            {/* 5. OFFICIAL SIGNATURE & CREDENTIALS FOOTER */}
            <div className="pt-6 border-t-2 border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-bold text-slate-900 font-['Space_Grotesk'] text-sm">
                  {CATALOG_COMPANY_CREDENTIALS.companyName}
                </div>
                <p className="text-[11px]">
                  Head Office: Jhelum, Pakistan · Reg. with TDAP &amp; Chamber of Commerce
                </p>
                <p className="text-[11px] text-emerald-800 font-medium">
                  Direct Line: {CATALOG_COMPANY_CREDENTIALS.phoneWhatsApp} | Email: {CATALOG_COMPANY_CREDENTIALS.officialEmail}
                </p>
              </div>

              <div className="text-center sm:text-right p-3 rounded-xl bg-stone-50 border border-stone-200">
                <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                  Authorized Signatory
                </div>
                <div className="text-sm font-extrabold text-slate-900 font-['Space_Grotesk']">
                  {CATALOG_COMPANY_CREDENTIALS.ceo}
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold">
                  {CATALOG_COMPANY_CREDENTIALS.designation}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Action Bar (Fixed footer) */}
        <div className="bg-white border-t border-stone-200 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0 print:hidden">
          <div className="text-xs text-slate-500">
            Document format: <strong className="text-slate-800">ISO A4 Export Catalog PDF</strong> (Vector &amp; High-Res Graphics)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-lime-400" />
              <span>{isGeneratingPdf ? 'Compiling PDF File...' : 'Download Catalog PDF (.pdf)'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
