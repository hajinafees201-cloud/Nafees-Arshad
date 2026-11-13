import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Package, 
  Ship, 
  Download, 
  Check, 
  HelpCircle, 
  FileCheck2, 
  Plus, 
  Send, 
  ArrowRight,
  Info,
  ChevronDown,
  Sparkles,
  Scale,
  Eye,
  FileText,
  BookOpen
} from 'lucide-react';
import { Category, ProductVariant, PageView } from '../../types';
import { CATEGORIES } from '../../data/catalog';
import { PinkSaltCatalogModal } from '../catalog/PinkSaltCatalogModal';
import { SurgicalCatalogModal } from '../catalog/SurgicalCatalogModal';
import { downloadPinkSaltPdfCatalog } from '../../utils/generatePinkSaltPdf';
import { downloadSurgicalPdfCatalog } from '../../utils/generateSurgicalPdf';

interface CategoryPageProps {
  categorySlug: string;
  onNavigate: (page: PageView, categorySlug?: string) => void;
  onSelectProductForSpec: (product: ProductVariant) => void;
  onAddToRfq: (product: ProductVariant) => void;
  onInquireDirectly: (product: ProductVariant) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  onNavigate,
  onSelectProductForSpec,
  onAddToRfq,
  onInquireDirectly
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [containerSizeType, setContainerSizeType] = useState<'20ft' | '40ft'>('20ft');
  const [containerCalcCount, setContainerCalcCount] = useState<number>(2);
  const [isPinkSaltCatalogOpen, setIsPinkSaltCatalogOpen] = useState(false);
  const [isSurgicalCatalogOpen, setIsSurgicalCatalogOpen] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  const handleDownloadCatalog = (type: 'salt' | 'surgical') => {
    setIsDownloadingPdf(true);
    try {
      if (type === 'salt') {
        downloadPinkSaltPdfCatalog();
      } else {
        downloadSurgicalPdfCatalog();
      }
    } catch (err) {
      console.error('Catalog download error:', err);
    } finally {
      setTimeout(() => setIsDownloadingPdf(false), 800);
    }
  };

  const category = CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];
  const isActiveCategory = category.status === 'active';

  React.useEffect(() => {
    setSelectedSubcategory('all');
  }, [categorySlug]);

  const uniqueSubcategories = React.useMemo(() => {
    return Array.from(new Set(category.variants.map((v) => v.subcategory))).filter(Boolean);
  }, [category.variants]);

  const formatSubcategoryLabel = (sub: string) => {
    return sub
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  };

  const filteredVariants = category.variants.filter((v) => {
    if (selectedSubcategory === 'all') return true;
    return v.subcategory === selectedSubcategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Category Hero Banner */}
      <div className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-20 border-b border-slate-800">
        <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
          <img 
            src={category.heroImage} 
            alt={`${category.title} - Certified Export Division Utility Home Exports`}
            width="1200"
            height="500"
            className="w-full h-full object-cover object-center" 
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button 
                onClick={() => onNavigate('home')} 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Categories</span>
              <span className="text-slate-600">/</span>
              <span className="text-orange-400 font-semibold">{category.title}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold">
              <span className={`w-2 h-2 rounded-full ${isActiveCategory ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-slate-200">{category.badgeLabel || 'Export Grade Product Line'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              {category.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {category.fullDescription}
            </p>

            {/* Quick Export Parameters */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs border-t border-slate-800/80">
              <div>
                <span className="text-slate-400 block">Origin:</span>
                <span className="text-white font-semibold mt-0.5 block">{category.origin}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Export Terminals:</span>
                <span className="text-white font-semibold mt-0.5 block">{category.exportPorts.join(' & ')}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Monthly Capacity:</span>
                <span className="text-white font-semibold mt-0.5 block">{category.capacity}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Production Lead Time:</span>
                <span className="text-white font-semibold mt-0.5 block">{category.leadTime}</span>
              </div>
            </div>

            {/* Primary Action Buttons: View Catalog & Download Catalog */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              {categorySlug === 'himalayan-pink-salt' && (
                <>
                  <button
                    onClick={() => setIsPinkSaltCatalogOpen(true)}
                    className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-extrabold text-xs shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2 cursor-pointer"
                    title="Open interactive visual catalog preview"
                  >
                    <BookOpen className="w-4 h-4 text-slate-950" />
                    <span>View Catalog</span>
                  </button>

                  <button
                    onClick={() => handleDownloadCatalog('salt')}
                    disabled={isDownloadingPdf}
                    className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border-2 border-orange-400 text-white font-bold text-xs shadow-md hover:shadow-orange-400/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    title="Download high-resolution official Pink Salt PDF catalog"
                  >
                    <Download className="w-4 h-4 text-orange-400" />
                    <span>{isDownloadingPdf ? 'Generating...' : 'Download Catalog'}</span>
                  </button>
                </>
              )}

              {categorySlug === 'surgical-instruments' && (
                <>
                  <button
                    onClick={() => setIsSurgicalCatalogOpen(true)}
                    className="px-5 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-xs shadow-lg hover:shadow-sky-400/30 transition-all flex items-center gap-2 cursor-pointer"
                    title="Open interactive visual surgical catalog preview"
                  >
                    <BookOpen className="w-4 h-4 text-slate-950" />
                    <span>View Catalog</span>
                  </button>

                  <button
                    onClick={() => handleDownloadCatalog('surgical')}
                    disabled={isDownloadingPdf}
                    className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border-2 border-sky-400 text-white font-bold text-xs shadow-md hover:shadow-sky-400/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    title="Download high-resolution official Surgical & Dental PDF catalog"
                  >
                    <Download className="w-4 h-4 text-sky-400" />
                    <span>{isDownloadingPdf ? 'Generating...' : 'Download Catalog'}</span>
                  </button>
                </>
              )}

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request B2B Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Visual Catalog Feature Card */}
        {categorySlug === 'himalayan-pink-salt' && (
          <div className="bg-gradient-to-r from-orange-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-orange-800/60 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/60 border border-orange-700/80 text-xs font-semibold text-orange-200">
                <FileText className="w-3.5 h-3.5 text-orange-400" />
                <span>Official Product Catalog &amp; Technical Dossier (PDF)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                Himalayan Pink Salt Product Specifications &amp; Packaging Catalog
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Includes fine/coarse/granule crystals, handcrafted lamps, cooking slabs, Kraft paper window zipper pouches, 25kg PP bags, 1000kg FIBC jumbo bags, and certified chemical COA analysis (98.7% NaCl).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setIsPinkSaltCatalogOpen(true)}
                className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Catalog</span>
              </button>
              <button
                onClick={() => handleDownloadCatalog('salt')}
                disabled={isDownloadingPdf}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-orange-400/80 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Download Catalog</span>
              </button>
            </div>
          </div>
        )}

        {categorySlug === 'surgical-instruments' && (
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-800/60 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/60 border border-sky-700/80 text-xs font-semibold text-sky-200">
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Official Surgical Catalog &amp; Metallurgy Dossier (PDF)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                Surgical &amp; Dental Instruments Full Product Catalog
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Featuring dental extraction sets, hemostats, tissue retractors, gold-ring TC needle holders, dissecting scissors, AISI 420/410/304 metallurgy, and autoclave steam durability standards.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setIsSurgicalCatalogOpen(true)}
                className="px-5 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Catalog</span>
              </button>
              <button
                onClick={() => handleDownloadCatalog('surgical')}
                disabled={isDownloadingPdf}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-sky-400/80 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Catalog</span>
              </button>
            </div>
          </div>
        )}

        {/* If Active Category with Variants (Himalayan Pink Salt / Surgical Instruments) */}
        {category.variants.length > 0 ? (
          <div className="space-y-8">
            
            {/* Subcategory Filter Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900">
                  Export Product Variants
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select a product variant to view granular chemical specs, packaging options, and container stuffing.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <button
                  onClick={() => setSelectedSubcategory('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedSubcategory === 'all'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({category.variants.length})
                </button>
                {uniqueSubcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      selectedSubcategory === sub
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {formatSubcategoryLabel(sub)}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Variants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVariants.map((variant) => (
                <div
                  key={variant.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Variant Image & Badges */}
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <img
                        src={variant.imageUrl}
                        alt={`${variant.name} (HS: ${variant.hsCode}) - Export Specification - Utility Home Exports`}
                        width="600"
                        height="400"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-mono font-medium border border-slate-700">
                          HS Code: {variant.hsCode}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-orange-600/90 backdrop-blur-xs text-white text-[11px] font-semibold">
                          MOQ: {variant.moq.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Variant Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk']">
                          {variant.name}
                        </h3>
                        <p className="text-xs text-orange-600 font-medium mt-0.5">
                          {variant.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {variant.description}
                      </p>

                      {/* Grain Sizes / Specs preview */}
                      {variant.grainSizes && (
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            Available Gradations &amp; Sizes
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700">
                            {variant.grainSizes.slice(0, 4).map((g, idx) => (
                              <div key={idx} className="flex items-center gap-1.5 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                <span className="truncate">{g}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Container stuffing highlights */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <span className="text-slate-400 text-[10px] uppercase font-semibold block">
                            20ft Container
                          </span>
                          <span className="font-semibold text-slate-800 text-[11px]">
                            {variant.containerStuffing.twentyFtFcl}
                          </span>
                        </div>
                        <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <span className="text-slate-400 text-[10px] uppercase font-semibold block">
                            Pallet Loading
                          </span>
                          <span className="font-semibold text-slate-800 text-[11px]">
                            {variant.containerStuffing.palletized}
                          </span>
                        </div>
                      </div>

                      {/* Key application tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {variant.applications.slice(0, 3).map((app, i) => (
                          <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                            {app}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex flex-col sm:flex-row items-center gap-2">
                    <button
                      onClick={() => onSelectProductForSpec(variant)}
                      className="w-full sm:w-auto flex-1 py-2.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                      <span>Spec Sheet</span>
                    </button>

                    <button
                      onClick={() => onAddToRfq(variant)}
                      className="w-full sm:w-auto flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 text-orange-400" />
                      <span>Add to RFQ</span>
                    </button>

                    <button
                      onClick={() => onInquireDirectly(variant)}
                      className="w-full sm:w-auto flex-1 py-2.5 px-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ) : (
          /* Upcoming Category Pipeline Details */
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk']">
                {category.title} — Seasonal Harvest &amp; Contract Allocation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {category.fullDescription}
              </p>
            </div>

            <div className="max-w-xl mx-auto p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Origin / Region:</span>
                <span>{category.origin}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Scheduled Dispatch:</span>
                <span>{category.leadTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-500">Seasonal Quota:</span>
                <span>{category.capacity}</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Pre-Book Container Allocation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Granular Chemical Analysis Certificate (COA) Table */}
        {category.chemicalAnalysis && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified Laboratory Analysis</span>
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
                  Standard Certificate of Analysis (COA) Parameters
                </h3>
              </div>
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                Independent SGS / Intertek Verification Available
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-200 text-slate-500 uppercase font-semibold">
                    <th className="py-3 px-4">Chemical Parameter</th>
                    <th className="py-3 px-4">Utility Home Lab Batch Result</th>
                    <th className="py-3 px-4">International Food Standard Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {category.chemicalAnalysis.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900">{row.parameter}</td>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-700">{row.result}</td>
                      <td className="py-3 px-4 text-slate-500">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Maritime Container Payload Calculator */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                <Scale className="w-4 h-4" />
                <span>Maritime Logistics Estimator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                Container Payload &amp; Packaging Breakdown
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Configure both 20ft Standard FCL and 40ft High-Cube / Reefer shipments with real-time payload, bag counts, and pallet estimates departing Port Qasim or Karachi Port.
              </p>

              {/* 1. Container Size Selector: 20ft vs 40ft FCL */}
              <div className="space-y-1.5 pt-1">
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Select Container Dimension &amp; Mode:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
                  <button
                    type="button"
                    onClick={() => setContainerSizeType('20ft')}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer border ${
                      containerSizeType === '20ft'
                        ? 'bg-orange-600 text-white border-orange-500 shadow-sm'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div>
                      <div className="font-bold">20ft Standard FCL</div>
                      <div className="text-[10px] opacity-80 font-normal">Dry Bulk / Salt (25–27 MT)</div>
                    </div>
                    {containerSizeType === '20ft' && (
                      <span className="w-2 h-2 rounded-full bg-white shrink-0 ml-2" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setContainerSizeType('40ft')}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer border ${
                      containerSizeType === '40ft'
                        ? 'bg-orange-600 text-white border-orange-500 shadow-sm'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div>
                      <div className="font-bold">40ft High Cube / Reefer</div>
                      <div className="text-[10px] opacity-80 font-normal">Produce / Volumetric (26–28 MT)</div>
                    </div>
                    {containerSizeType === '40ft' && (
                      <span className="w-2 h-2 rounded-full bg-white shrink-0 ml-2" />
                    )}
                  </button>
                </div>
              </div>

              {/* 2. Container Quantity Selector */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between max-w-lg">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Number of {containerSizeType} Containers:
                  </span>
                  <span className="text-xs font-bold text-orange-400">
                    {containerCalcCount} x {containerSizeType} FCL
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 max-w-lg">
                  {[1, 2, 5, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setContainerCalcCount(num)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border ${
                        containerCalcCount === num
                          ? 'bg-orange-600 text-white border-orange-500 shadow-sm ring-2 ring-orange-500/20'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      {num} {num === 1 ? 'FCL' : 'FCLs'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Dynamic Payload & Packaging Output Card */}
            <div className="lg:col-span-5 bg-slate-950/90 p-5 sm:p-6 rounded-2xl border border-slate-800 text-xs space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                  Configured Shipment
                </span>
                <span className="font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded text-[11px]">
                  {containerCalcCount} x {containerSizeType} FCL
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">Total Net Payload:</span>
                <span className="font-bold text-orange-400 text-sm">
                  {containerSizeType === '20ft'
                    ? `${containerCalcCount * 25} to ${containerCalcCount * 27} MT`
                    : `${containerCalcCount * 26} to ${containerCalcCount * 28} MT`}
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">
                  {containerSizeType === '20ft' ? '25kg PP Export Sacks:' : 'Package / Unit Count:'}
                </span>
                <span className="font-semibold text-white">
                  {containerSizeType === '20ft'
                    ? `${(containerCalcCount * 1000).toLocaleString()} to ${(containerCalcCount * 1080).toLocaleString()} Bags`
                    : `${(containerCalcCount * 1040).toLocaleString()} Bags / 4,500+ Boxed`}
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">ISPM-15 Euro Pallets:</span>
                <span className="font-semibold text-white">
                  {containerSizeType === '20ft'
                    ? `${containerCalcCount * 20} to ${containerCalcCount * 24} Pallets`
                    : `${containerCalcCount * 24} to ${containerCalcCount * 28} Pallets`}
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800/60 pb-2.5">
                <span className="text-slate-400">Cubic Capacity (Est):</span>
                <span className="font-semibold text-slate-300">
                  {containerSizeType === '20ft'
                    ? `${containerCalcCount * 33} CBM`
                    : `${containerCalcCount * 76} CBM (High Cube)`}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Depot to Port Transit:</span>
                <span className="font-semibold text-emerald-400">48h to Port Qasim / Karachi</span>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full mt-3 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Quotation for {containerCalcCount} x {containerSizeType} FCL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Packaging Types Grid */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
              <Package className="w-4 h-4" />
              <span>Packaging Solutions</span>
            </div>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
              Export-Grade Packaging &amp; OEM Options
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.packagingTypes.map((pkg, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block">
                    {pkg.capacity}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk'] mt-1">
                    {pkg.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {pkg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span>Procurement Guidance</span>
          </div>
          <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900">
            Frequently Asked Export Questions
          </h3>

          <div className="divide-y divide-slate-100">
            {category.faqs.map((faq, index) => {
              const isExpanded = expandedFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setExpandedFaqIndex(isExpanded ? null : index)}
                    className="w-full flex items-center justify-between text-left text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} />
                  </button>
                  {isExpanded && (
                    <p className="text-xs text-slate-600 leading-relaxed mt-2.5 pr-6 animate-in fade-in duration-150">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Visual Catalog Modals */}
      <PinkSaltCatalogModal
        isOpen={isPinkSaltCatalogOpen}
        onClose={() => setIsPinkSaltCatalogOpen(false)}
        onInquireDirectly={(prodName) => {
          const matched = category.variants.find((v) => v.name === prodName) || category.variants[0];
          if (matched) onInquireDirectly(matched);
        }}
      />

      <SurgicalCatalogModal
        isOpen={isSurgicalCatalogOpen}
        onClose={() => setIsSurgicalCatalogOpen(false)}
        onInquireDirectly={(prodName) => {
          const surgCat = CATEGORIES.find((c) => c.slug === 'surgical-instruments') || category;
          const matched = surgCat.variants.find((v) => v.name === prodName) || surgCat.variants[0];
          if (matched) onInquireDirectly(matched);
        }}
      />

    </div>
  );
};
