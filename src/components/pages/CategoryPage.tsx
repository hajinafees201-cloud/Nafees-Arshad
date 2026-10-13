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
  Scale
} from 'lucide-react';
import { Category, ProductVariant, PageView } from '../../types';
import { CATEGORIES } from '../../data/catalog';

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
  const [containerCalcCount, setContainerCalcCount] = useState<number>(2);

  const category = CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];
  const isActiveCategory = category.status === 'active';

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
            alt={category.title}
            className="w-full h-full object-cover object-center" 
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

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request B2B Quote for {category.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* If Active Category with Variants (Himalayan Pink Salt) */}
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
                <button
                  onClick={() => setSelectedSubcategory('edible')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedSubcategory === 'edible'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Edible Food Grade
                </button>
                <button
                  onClick={() => setSelectedSubcategory('decor')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedSubcategory === 'decor'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Salt Lamps &amp; Decor
                </button>
                <button
                  onClick={() => setSelectedSubcategory('animal')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedSubcategory === 'animal'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Livestock Salt Licks
                </button>
                <button
                  onClick={() => setSelectedSubcategory('spa')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedSubcategory === 'spa'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Spa &amp; Bath Crystals
                </button>
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
                        alt={variant.name}
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
            
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                <Scale className="w-4 h-4" />
                <span>Maritime Logistics Estimator</span>
              </div>
              <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                Calculate Container Payload &amp; Packaging Breakdown
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estimate total metric tonnage, pallet counts, and 25kg bag quantities for your scheduled shipment departing Port Qasim or Karachi Port.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs text-slate-400">Containers (20ft FCL):</span>
                {[1, 2, 5, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => setContainerCalcCount(num)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      containerCalcCount === num
                        ? 'bg-orange-600 text-white shadow-xs'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {num} Container{num > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-xl border border-slate-800 text-xs space-y-3">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Total Net Payload:</span>
                <span className="font-bold text-orange-400 text-sm">
                  {containerCalcCount * 25} to {containerCalcCount * 27} Metric Tons (MT)
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">25kg PP Export Sacks:</span>
                <span className="font-semibold text-white">
                  {(containerCalcCount * 25 * 1000) / 25} Bags
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Standard Euro Pallets (ISPM-15):</span>
                <span className="font-semibold text-white">
                  {containerCalcCount * 20} to {containerCalcCount * 24} Pallets
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Port Turnaround:</span>
                <span className="font-semibold text-emerald-400">48 Hours from Factory Depot</span>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full mt-2 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Inquire on This Volume ({containerCalcCount * 25} MT)
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

    </div>
  );
};
