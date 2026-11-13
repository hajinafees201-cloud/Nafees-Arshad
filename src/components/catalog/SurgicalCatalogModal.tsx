import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ShieldCheck, 
  Package, 
  CheckCircle2, 
  MessageCircle,
  ExternalLink,
  Award,
  Layers,
  MapPin,
  Clock,
  Phone,
  Mail,
  Building2,
  Scissors,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { CATEGORIES } from '../../data/catalog';
import { downloadSurgicalPdfCatalog } from '../../utils/generateSurgicalPdf';

interface SurgicalCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquireDirectly?: (productName: string) => void;
}

export const SurgicalCatalogModal: React.FC<SurgicalCatalogModalProps> = ({
  isOpen,
  onClose,
  onInquireDirectly
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen) return null;

  const surgicalCategory = CATEGORIES.find(c => c.slug === 'surgical-instruments') || CATEGORIES[2];

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    try {
      downloadSurgicalPdfCatalog();
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
    ? surgicalCategory.variants
    : surgicalCategory.variants.filter(v => v.subcategory === activeFilter);

  const whatsappMessage = encodeURIComponent(
    `Hello CEO Nafees Arshad (Utility Home Exports, Jhelum). I reviewed your Surgical & Dental Instruments Export Catalog and would like to request price quotes for clinical tool sets and OEM private label instrument manufacturing.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in print:p-0 print:bg-white print:static">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-sky-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:rounded-none"
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
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-800/80">
                  Official Export Catalog
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  Head Office: Jhelum, Pakistan
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-white">
                Utility Home Exports · Surgical &amp; Dental Instruments Catalog (PDF)
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
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
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-sky-200/80 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>ISO 13485:2016 Certified Medical Device Manufacturing</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight">
                  Surgical &amp; Dental Instruments Export Catalog
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Precision medical instruments forged from certified German and Japanese stainless steel (AISI 410, 420B, 304). Complete lines for oral surgery, extraction kits, hemostatic clamps, retractors, TC needle holders, and dissecting scissors.
                </p>
              </div>

              {/* Fast Download Badge */}
              <div className="shrink-0 flex flex-col items-start md:items-end gap-2 bg-sky-50/60 p-4 rounded-xl border border-sky-200/60">
                <span className="text-[11px] font-bold text-sky-900 uppercase tracking-wider">
                  Document Reference
                </span>
                <span className="text-xs font-mono font-bold text-sky-700 bg-white px-2.5 py-1 rounded border border-sky-200">
                  UHE-CAT-SURG-2026
                </span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  4-Page Medical Technical Dossier
                </span>
              </div>
            </div>

            {/* Credential Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Manufacturing Hubs</span>
                <span className="text-slate-900 font-bold mt-0.5 block">Sialkot &amp; Jhelum</span>
                <span className="text-slate-500 text-[11px]">Punjab, Pakistan</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Raw Material</span>
                <span className="text-sky-700 font-bold mt-0.5 block">AISI 420B / 410 / 304</span>
                <span className="text-slate-500 text-[11px]">Tungsten Carbide Inserts</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Certifications</span>
                <span className="text-slate-900 font-bold mt-0.5 block">ISO 13485:2016</span>
                <span className="text-slate-500 text-[11px]">CE Mark &amp; FDA Compliant</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Autoclave Endurance</span>
                <span className="text-slate-900 font-bold mt-0.5 block">500+ Cycles (134°C)</span>
                <span className="text-slate-500 text-[11px]">ASTM F1089 Boil Test Pass</span>
              </div>
            </div>
          </div>

          {/* 2. Interactive Product Subcategory Filter */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-slate-900">
                  Precision Instrument Categories
                </h3>
                <p className="text-xs text-slate-500">
                  Select a category to view surgical patterns, steel hardness, packaging, and clinical applications.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-sky-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({surgicalCategory.variants.length})
                </button>
                <button
                  onClick={() => setActiveFilter('dental')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'dental'
                      ? 'bg-sky-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dental &amp; Ortho
                </button>
                <button
                  onClick={() => setActiveFilter('hemostatic')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'hemostatic'
                      ? 'bg-sky-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Hemostats &amp; Clamps
                </button>
                <button
                  onClick={() => setActiveFilter('cutting')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'cutting'
                      ? 'bg-sky-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Scalpels &amp; Retractors
                </button>
                <button
                  onClick={() => setActiveFilter('holders')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'holders'
                      ? 'bg-sky-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  TC Needle Holders
                </button>
                <button
                  onClick={() => setActiveFilter('scissors')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'scissors'
                      ? 'bg-sky-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Surgical Scissors
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
                          (e.currentTarget as HTMLImageElement).src = '/images/surgical_hero_banner.jpg';
                        }}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-xs text-white text-[11px] font-mono font-medium border border-slate-700">
                          HS Code: {variant.hsCode}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-sky-700 text-white text-[11px] font-semibold">
                          MOQ: {variant.moq.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                          {variant.name}
                        </h4>
                        <p className="text-xs text-sky-700 font-medium mt-0.5">
                          {variant.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {variant.description}
                      </p>

                      {/* Patterns & Sizes */}
                      {variant.grainSizes && (
                        <div className="p-3 bg-sky-50/50 rounded-xl border border-sky-100 space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-900 block">
                            Key Standard Patterns &amp; Sizes
                          </span>
                          <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-700">
                            {variant.grainSizes.map((g, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                                <span>{g}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Specs */}
                      {variant.keySpecs && (
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            Technical Metallurgy
                          </span>
                          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                            {variant.keySpecs.map((spec, idx) => (
                              <div key={idx} className="p-1.5 bg-slate-50 rounded border border-slate-100">
                                <span className="text-slate-400 block text-[9px] uppercase font-bold">{spec.label}</span>
                                <span className="text-slate-800 font-semibold truncate block">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3 text-xs">
                    <span className="text-slate-500 font-medium">
                      Warranty: 5-Year Anti-Corrosion
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onInquireDirectly?.(variant.name);
                      }}
                      className="font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire Volume</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Surgical Packaging & Sterilization Cassettes Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
                <Package className="w-4 h-4" />
                <span>Medical-Grade Packaging &amp; Cassettes</span>
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
                Sterile &amp; Non-Sterile Clinical Packaging Formats
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Designed to maintain instrument edge protection and enable autoclave sterilization directly inside clinical cassettes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-sky-50/40 border border-sky-200/80 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                  Sterile Barrier
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  Tyvek Peel Pouches
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Medical-grade transparent film and Tyvek backing with Steam and EO gas sterilization indicator dots and batch barcodes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Custom Kit Presentation
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  Leatherette Wallets
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom zippered wallets with velvet lining, elastic instrument loops, and embossed/foil-stamped distributor branding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Autoclave Trays
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  Silicone-Racked Cassettes
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Perforated anodized aluminum and stainless steel cassettes with medical silicone instrument clips for 5 to 20 instruments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Export Protection
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                  Double-Walled Outer Cartons
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reinforced export cartons with protective silicone tip sleeves and moisture-absorbing desiccant sachets.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Certified Metallurgy & Quality Verification Table */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Metallurgical Integrity
                </span>
                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-slate-900">
                  Certified Stainless Steel Mechanical &amp; Chemical Specifications
                </h3>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                ASTM F899 &amp; ISO 7153-1 Compliant
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-200 text-slate-600 uppercase font-semibold">
                    <th className="py-2.5 px-3">Quality Audit Parameter</th>
                    <th className="py-2.5 px-3">Standard Reference</th>
                    <th className="py-2.5 px-3">Audit Batch Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {surgicalCategory.chemicalAnalysis?.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{row.parameter}</td>
                      <td className="py-2.5 px-3 text-slate-500">{row.standard}</td>
                      <td className="py-2.5 px-3 font-mono font-bold text-sky-700">{row.result}</td>
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
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
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
