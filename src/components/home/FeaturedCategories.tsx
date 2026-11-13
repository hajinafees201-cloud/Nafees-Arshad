import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Package, 
  Layers, 
  CheckCircle2, 
  FileText,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import { Category, PageView } from '../../types';

interface FeaturedCategoriesProps {
  onNavigate: (page: PageView, categorySlug?: string) => void;
  onOpenQuickRfq: (productName: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onNavigate,
  onOpenQuickRfq,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const displayedCategories = activeTab === 'all' 
    ? CATEGORIES 
    : CATEGORIES.filter(c => c.slug === activeTab);

  return (
    <section id="categories" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
              <Layers className="w-4 h-4" />
              <span>Core B2B Export Lines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
              Our 3 Core Export Categories
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Utility Home Exports operates verified, direct-origin export divisions in <strong>Himalayan Pink Salt</strong>, <strong>Fresh Agricultural Produce</strong>, and <strong>Surgical &amp; Dental Instruments</strong>—certified to rigorous international standards.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-end flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 3 Divisions
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.slug)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === cat.slug
                    ? 'bg-orange-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.title.split(' ')[0]} {cat.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Core Categories Layout */}
        <div className="space-y-12">
          {displayedCategories.map((cat, idx) => {
            const isFreshProduce = cat.slug === 'fresh-vegetables';
            const isSurgical = cat.slug === 'surgical-instruments';
            const isPinkSalt = cat.slug === 'himalayan-pink-salt';

            const accentColor = isFreshProduce 
              ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
              : isSurgical 
              ? 'text-sky-700 bg-sky-50 border-sky-200' 
              : 'text-orange-700 bg-orange-50 border-orange-200';

            const buttonColor = isFreshProduce
              ? 'bg-emerald-800 hover:bg-emerald-900'
              : isSurgical
              ? 'bg-sky-800 hover:bg-sky-900'
              : 'bg-orange-600 hover:bg-orange-700';

            return (
              <div 
                key={cat.id} 
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Category Showcase Visual Side */}
                  <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-slate-950 flex flex-col justify-between p-6 sm:p-8">
                    <img
                      src={cat.heroImage}
                      alt={`${cat.title} - Official Export Division Utility Home Exports`}
                      width="600"
                      height="400"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-75 transition-opacity duration-500"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback image in case of network issue
                        (e.target as HTMLImageElement).src = '/images/pink_salt_banner.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 pointer-events-none" />

                    {/* Top Status & Category Index */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                        DIVISION 0{idx + 1}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-semibold border border-slate-700 backdrop-blur-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active Export Line</span>
                      </span>
                    </div>

                    {/* Bottom Metadata & Title */}
                    <div className="relative z-10 text-white space-y-2 mt-20 lg:mt-0">
                      <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block">
                        Origin: {cat.origin.split(',')[0]}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                        {cat.subtitle}
                      </p>

                      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                        <div>
                          <span className="text-slate-400 block text-[11px]">Capacity:</span>
                          <span className="font-semibold text-white">{cat.capacity}</span>
                        </div>
                        <div className="w-px h-6 bg-slate-800 hidden sm:block" />
                        <div>
                          <span className="text-slate-400 block text-[11px]">Loading Lead Time:</span>
                          <span className="font-semibold text-white">{cat.leadTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Details & Product Variants Grid */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Description & Compliance Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Featured Export Specifications ({cat.variants.length} Variants)
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.certifications.slice(0, 3).map((cert, cIdx) => (
                            <span 
                              key={cIdx} 
                              className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed mt-4">
                        {cat.shortDescription}
                      </p>

                      {/* Product Variants Sub-Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                        {cat.variants.slice(0, 4).map((v) => (
                          <div
                            key={v.id}
                            className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-orange-300 hover:shadow-xs transition-all group flex items-start gap-3"
                          >
                            <img
                              src={v.imageUrl}
                              alt={`${v.name} (HS: ${v.hsCode}) - Utility Home Exports`}
                              width="52"
                              height="52"
                              className="w-13 h-13 rounded-lg object-cover border border-slate-200 shadow-2xs shrink-0 group-hover:scale-105 transition-transform bg-white"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/images/pink_salt_banner.jpg';
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors block truncate">
                                {v.name}
                              </span>
                              <span className="text-[11px] font-mono text-slate-500 block">
                                HS Code: {v.hsCode}
                              </span>
                              <span className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                                {v.tagline}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>FOB Karachi / CIF Worldwide · SGS Inspection Supported</span>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          onClick={() => onOpenQuickRfq(cat.title)}
                          className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-colors cursor-pointer text-center"
                        >
                          Request Quote
                        </button>

                        {isFreshProduce ? (
                          <button
                            onClick={() => onNavigate('vegetables')}
                            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${buttonColor}`}
                          >
                            <span>Vegetables Catalog &amp; Dossier</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => onNavigate('category', cat.slug)}
                            className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${buttonColor}`}
                          >
                            <span>Explore Category ({cat.variants.length} items)</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Global Verification & Compliance Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Registered Exporter Compliance</span>
            </div>
            <h4 className="text-xl font-bold font-['Space_Grotesk'] text-white">
              FBR &amp; Pakistan Single Window (PSW) Registered Exporter
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              FBR Verified &amp; PSW Active Exporter · Jhelum Chamber of Commerce &amp; Export License Compliance · 100% Halal Certified Facilities · Third-party SGS / Intertek container stuffing inspections.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('certifications')}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/20 text-center cursor-pointer"
            >
              View Halal &amp; Audit Certificates
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shadow-md text-center cursor-pointer"
            >
              Contact Global Export Desk
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
