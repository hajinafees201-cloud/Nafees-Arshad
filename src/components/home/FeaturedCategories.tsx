import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Clock, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  Plus
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
  const [filter, setFilter] = useState<'all' | 'active' | 'upcoming'>('all');

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (filter === 'active') return cat.status === 'active';
    if (filter === 'upcoming') return cat.status === 'upcoming';
    return true;
  });

  const activeCategory = CATEGORIES.find((c) => c.slug === 'himalayan-pink-salt')!;

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
              <Layers className="w-4 h-4" />
              <span>Modular Export Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
              Export Product Categories
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              Engineered for seamless product onboarding. Currently featuring full-scale active production in authentic <strong>Himalayan Pink Salt</strong>, with dedicated logistical pipelines for seasonal agriculture and industrial minerals.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Categories ({CATEGORIES.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === 'active'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Active Export ({CATEGORIES.filter((c) => c.status === 'active').length})
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === 'upcoming'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pipeline Ready ({CATEGORIES.filter((c) => c.status === 'upcoming').length})
            </button>
          </div>
        </div>

        {/* PRIMARY ACTIVE CATEGORY SPOTLIGHT HERO CARD */}
        {(filter === 'all' || filter === 'active') && (
          <div className="mb-12 bg-white rounded-2xl border-2 border-orange-500/20 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Visual Showcase & Active Tag */}
              <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full overflow-hidden bg-slate-950">
                <img
                  src={activeCategory.heroImage}
                  alt={activeCategory.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/15 pointer-events-none" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold tracking-wide uppercase shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>Primary Active Category</span>
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-orange-300 font-semibold block">
                    Origin: {activeCategory.origin}
                  </span>
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] mt-1 text-white">
                    {activeCategory.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-2">
                    <span>Capacity: {activeCategory.capacity}</span>
                    <span>·</span>
                    <span>Lead Time: {activeCategory.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Product Variants & Specs */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Export Ready Variants ({activeCategory.variants.length})
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.certifications.slice(0, 3).map((c, i) => (
                        <span key={i} className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mt-4">
                    {activeCategory.shortDescription}
                  </p>

                  {/* 4 Active Variants Preview Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {activeCategory.variants.map((v) => (
                      <div
                        key={v.id}
                        className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-orange-50/50 hover:border-orange-300 transition-all group"
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={v.imageUrl}
                            alt={v.name}
                            className="w-12 h-12 rounded-lg object-cover border border-slate-200/90 shadow-xs shrink-0 group-hover:scale-105 group-hover:border-orange-300 transition-all duration-300 bg-white"
                            loading="lazy"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors block truncate">
                              {v.name}
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono block">
                              HS Code: {v.hsCode}
                            </span>
                            <span className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                              {v.tagline}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Food-grade certified, 98.7%+ NaCl, SGS pre-shipment tested</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenQuickRfq('Himalayan Pink Salt')}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Instant Quote
                    </button>
                    <button
                      onClick={() => onNavigate('category', 'himalayan-pink-salt')}
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore Category Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* MODULAR PIPELINE & EXPANSION CATEGORIES (Scalable Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCategories
            .filter((c) => c.slug !== 'himalayan-pink-salt')
            .map((cat) => {
              const isActive = cat.status === 'active';
              return (
                <div
                  key={cat.id}
                  className={`bg-white rounded-2xl border overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                    isActive ? 'border-emerald-300 ring-1 ring-emerald-400/20' : 'border-slate-200'
                  }`}
                >
                  <div>
                    {/* Category Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={cat.heroImage}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        {isActive ? (
                          <span className="px-2.5 py-1 rounded-md bg-emerald-900/90 backdrop-blur-xs text-lime-300 text-[11px] font-bold flex items-center gap-1 border border-emerald-700 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                            <span>Active Export Line</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-slate-200 text-[11px] font-semibold flex items-center gap-1 border border-slate-700">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <span>Pipeline Slot</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>Origin: {cat.origin.split(',')[0]}</span>
                        <span className={`font-semibold ${isActive ? 'text-emerald-700' : 'text-orange-600'}`}>
                          {cat.badgeLabel?.split('·')[1] || (isActive ? 'Active' : 'Pre-booking')}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold font-['Space_Grotesk'] transition-colors ${
                        isActive ? 'text-slate-900 group-hover:text-emerald-700' : 'text-slate-900 group-hover:text-orange-600'
                      }`}>
                        {cat.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {cat.shortDescription}
                      </p>

                      <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                        <div className="flex justify-between">
                          <span>Lead Time:</span>
                          <span className="font-medium text-slate-800">{cat.leadTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capacity:</span>
                          <span className="font-medium text-slate-800">{cat.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-5 pt-0">
                    {cat.slug === 'fresh-vegetables' ? (
                      <button
                        onClick={() => onNavigate('vegetables')}
                        className="w-full py-2.5 px-3 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                      >
                        <span>Explore Fresh Vegetables Page</span>
                        <ArrowRight className="w-3.5 h-3.5 text-lime-400" />
                      </button>
                    ) : (
                      <button
                        onClick={() => onNavigate('category', cat.slug)}
                        className="w-full py-2.5 px-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>View Specifications &amp; Schedule</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Scalability Architecture Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Modular B2B Expansion System
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                New product lines (fresh fruits, mineral grades, textile raw materials) attach seamlessly into this unified procurement engine with dedicated specs, customs HS codes, and container freight calculations.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Inquire About Custom Commodities
          </button>
        </div>

      </div>
    </section>
  );
};
