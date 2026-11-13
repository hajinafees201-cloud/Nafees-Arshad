import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ShieldCheck, 
  Package, 
  CheckCircle2, 
  Scale, 
  MessageCircle,
  ExternalLink,
  Sparkles,
  Award,
  Layers,
  MapPin,
  Clock,
  Phone,
  Mail,
  Building2,
  Ship
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { CATEGORIES } from '../../data/catalog';
import { downloadPinkSaltPdfCatalog } from '../../utils/generatePinkSaltPdf';

interface PinkSaltCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquireDirectly?: (productName: string) => void;
}

export const PinkSaltCatalogModal: React.FC<PinkSaltCatalogModalProps> = ({
  isOpen,
  onClose,
  onInquireDirectly
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen) return null;

  const pinkSaltCategory = CATEGORIES.find(c => c.slug === 'himalayan-pink-salt') || CATEGORIES[0];

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    try {
      downloadPinkSaltPdfCatalog();
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setTimeout(() => setIsGeneratingPdf(false), 800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredVariants = activeFilter === 'all'
    ? pinkSaltCategory.variants
    : pinkSaltCategory.variants.filter(v => v.subcategory === activeFilter);

  const whatsappMessage = encodeURIComponent(
    `Hello CEO Nafees Arshad (Utility Home Exports, Jhelum). I reviewed your Himalayan Pink Salt Export Catalog and would like to request FOB Karachi / CIF ocean freight rates and MOQ container allocations.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in print:p-0 print:bg-white print:static">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-orange-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Top Control Bar (Hidden during native print) */}
        <div className="bg-slate-950 text-white px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <img 
              src="/images/utility_home_export_logo.jpeg" 
              alt="Utility Home Export Official Logo"
              className="w-10 h-10 rounded-xl object-cover shadow-sm shrink-0 border border-slate-700/80"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 px-2 py-0.5 rounded-full bg-orange-950/80 border border-orange-800/80">
                  Official Export Catalog
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  Khewra Salt Range, Pakistan
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-white">
                Utility Home Exports · Himalayan Pink Salt Catalog (PDF)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Download high-resolution official PDF catalog"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isGeneratingPdf ? 'Generating...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center"
              title="Print Catalog document"
              aria-label="Print Catalog"
            >
              <Printer className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              title="Direct inquiry with CEO Nafees Arshad"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden md:inline">WhatsApp Inquiries</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-8 bg-slate-50/60 print:bg-white print:p-0">

          {/* 1. Catalog Header & Company Profile Dossier */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-orange-200/80 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-800 border border-orange-200 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  <span>100% Ancient Raw Khewra Salt Range Deposits</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight">
                  Himalayan Pink Salt Export Catalog &amp; Technical Dossier
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Extracted from subterranean rock veins formed over 250 million years ago. Certified food-grade edible salt (fine/coarse), handcrafted illuminated lamps, cooking slabs, animal lick blocks, and spa crystals.
                </p>
              </div>

              {/* Fast Download Badge */}
              <div className="shrink-0 flex flex-col items-start md:items-end gap-2 bg-orange-50/60 p-4 rounded-xl border border-orange-200/60">
                <span className="text-[11px] font-bold text-orange-900 uppercase tracking-wider">
                  Document Reference
                </span>
                <span className="text-xs font-mono font-bold text-orange-700 bg-white px-2.5 py-1 rounded border border-orange-200">
                  UHE-CAT-SALT-2026
                </span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  4-Page Full B2B Dossier
                </span>
              </div>
            </div>

            {/* Credential Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Mines Origin</span>
                <span className="text-slate-900 font-bold mt-0.5 block">Khewra, Salt Range</span>
                <span className="text-slate-500 text-[11px]">Punjab, Pakistan</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">NaCl Purity</span>
                <span className="text-emerald-700 font-bold mt-0.5 block">≥ 98.7% Purity</span>
                <span className="text-slate-500 text-[11px]">84+ Bound Trace Minerals</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Export Compliance</span>
                <span className="text-slate-900 font-bold mt-0.5 block">FBR &amp; PSW Active</span>
                <span className="text-slate-500 text-[11px]">ISO 22000, Halal, FDA</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Monthly Capacity</span>
                <span className="text-slate-900 font-bold mt-0.5 block">1,500+ Metric Tons</span>
                <span className="text-slate-500 text-[11px]">Port Qasim / Karachi</span>
              </div>
            </div>
          </div>

          {/* 2. Interactive Product Subcategory Filter */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-slate-900">
                  Export Product Variants &amp; Gradations
                </h3>
                <p className="text-xs text-slate-500">
                  Select a category below to inspect physical specifications, grain sizes, packaging, and stuffing.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-orange-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({pinkSaltCategory.variants.length})
                </button>
                <button
                  onClick={() => setActiveFilter('edible')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'edible'
                      ? 'bg-orange-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Edible Salt
                </button>
                <button
                  onClick={() => setActiveFilter('decor')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'decor'
                      ? 'bg-orange-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Salt Lamps
                </button>
                <button
                  onClick={() => setActiveFilter('tiles')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'tiles'
                      ? 'bg-orange-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cooking Tiles
                </button>
                <button
                  onClick={() => setActiveFilter('animal')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'animal'
                      ? 'bg-orange-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Animal Licks
                </button>
                <button
                  onClick={() => setActiveFilter('spa')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'spa'
                      ? 'bg-orange-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Spa &amp; Bath
                </button>
              </div>
            </div>

            {/* Product Variants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image & Header */}
                    <div className="relative h-52 bg-slate-950 overflow-hidden">
                      <img
                        src={variant.imageUrl}
                        alt={variant.name}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/images/pink_salt_banner.jpg';
                        }}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-xs text-white text-[11px] font-mono font-medium border border-slate-700">
                          HS Code: {variant.hsCode}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-orange-600/90 text-white text-[11px] font-semibold">
                          MOQ: {variant.moq.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                          {variant.name}
                        </h4>
                        <p className="text-xs text-orange-600 font-medium mt-0.5">
                          {variant.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {variant.description}
                      </p>

                      {/* Gradations & Sizes */}
                      {variant.grainSizes && (
                        <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100 space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-900 block">
                            Available Sizes &amp; Cuts
                          </span>
                          <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-700">
                            {variant.grainSizes.map((g, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                <span>{g}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Packaging preview */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Export Packaging Solutions
                        </span>
                        <div className="flex flex-wrap gap-1 text-[11px]">
                          {variant.packagingOptions.map((pkg, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                              {pkg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3 text-xs">
                    <span className="text-slate-500">
                      Floor: {variant.containerStuffing.twentyFtFcl.split('(')[0]}
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onInquireDirectly?.(variant.name);
                      }}
                      className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire Volume</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. High-Quality Packaging Solutions Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <Package className="w-4 h-4" />
                <span>Moisture-Barrier Packaging Protocols</span>
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
                Export Packaging Configurations for International Importers
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Engineered specifically to protect hygroscopic mineral salt from high oceanic humidity and rough maritime transit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-orange-50/40 border border-orange-200/80 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                  OEM Retail Option
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  Kraft Paper Window Zipper Pouches
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  250g, 500g, and 1,000g food-grade Kraft paper pouches with clear product window, resealable zip-lock, and custom private label brand printing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Commercial Sacks
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  25kg / 50kg PP Bags + PE Liner
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy-duty virgin woven polypropylene outer sack with 50-micron high-density polyethylene moisture-barrier inner liner.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Industrial Bulk
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  1,000kg FIBC Jumbo Bags
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  UV-stabilized 4-loop big bags with bottom discharge chutes on ISPM-15 heat-treated Euro wooden export pallets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Fragile Goods Protection
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  Drop-Tested EPE Foam Boxes
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Individual 5-ply corrugated gift boxes with custom molded expanded polyethylene (EPE) foam for salt lamps and cooking tiles.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Chemical Certificate of Analysis (COA) Table */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Certified Laboratory Report
                </span>
                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-slate-900">
                  Standard Certificate of Analysis (COA) Parameters
                </h3>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                Third-Party SGS / Intertek Inspection Accepted
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-200 text-slate-600 uppercase font-semibold">
                    <th className="py-2.5 px-3">Chemical Parameter</th>
                    <th className="py-2.5 px-3">Batch Result</th>
                    <th className="py-2.5 px-3">International Reference Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {pinkSaltCategory.chemicalAnalysis?.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{row.parameter}</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-emerald-700">{row.result}</td>
                      <td className="py-2.5 px-3 text-slate-500">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Modal Bottom Sticky Action Footer */}
        <div className="bg-slate-950 text-white px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 shrink-0 print:hidden">
          <div className="text-xs text-slate-400">
            <span>Official Export Catalog &amp; Technical Dossier · Utility Home Exports · Head Office: Jhelum, Pakistan</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingPdf ? 'Compiling PDF...' : 'Download Full PDF Catalog'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
