import React from 'react';
import { 
  ShieldCheck, 
  Package, 
  Truck, 
  Microscope, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Award,
  Globe2
} from 'lucide-react';
import { PageView } from '../../types';

interface ValuePropositionProps {
  onNavigate: (page: PageView) => void;
  onOpenQuickRfq: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
  onNavigate,
  onOpenQuickRfq
}) => {
  const pillars = [
    {
      icon: Microscope,
      title: 'Purity & Optical Sorter Accuracy',
      badge: '98.7% Certified NaCl',
      description: 'Milled from deep subterranean rock strata. Every batch undergoes 3-stage high-definition optical laser sorting to eliminate extraneous dark minerals, ensuring consistent grain hue and zero insoluble foreign objects.',
      bullets: ['Certified 98.7% minimum NaCl purity', 'Zero anti-caking additives or bleaching', 'Full ICP-MS heavy metal screen compliance']
    },
    {
      icon: ShieldCheck,
      title: 'Audited Global Compliance',
      badge: 'FDA & ISO Standards',
      description: 'Fully accredited with ISO 9001:2015, ISO 22000 (HACCP), and US FDA Food Facility Registration. Shipments comply with European Codex Alimentarius, Halal Food Council, and Kosher regulatory benchmarks.',
      bullets: ['US FDA Facility Registration #194829104', 'SGS / Intertek pre-shipment inspections', 'Traceable batch Certificate of Analysis (COA)']
    },
    {
      icon: Package,
      title: 'Turnkey OEM & Custom Packaging',
      badge: 'Private Label Ready',
      description: 'Whether you require bulk 25kg/50kg double-stitched moisture-barrier sacks, 1,000kg FIBC big bags, or bespoke private-label retail pouches with your logo and regional barcodes, we produce to exact specs.',
      bullets: ['25kg & 50kg PP bags with food-grade LDPE liner', 'Standup kraft pouches & glass grinder jars', 'Heat-treated ISPM-15 certified export pallets']
    },
    {
      icon: Truck,
      title: 'High-Volume Bulk Supply Capabilities',
      badge: '18,500+ MT Annual Capacity',
      description: 'Strategically located between the Khewra mining belt and Port Qasim/Karachi container terminals. We guarantee 48-hour container stuffing turnarounds and stable price contracts for international importers.',
      bullets: ['FOB Karachi & CIF worldwide ports', 'Priority bookings with Maersk, MSC, CMA CGM', '24–27 Metric Tons payload per 20ft FCL container']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-xs font-bold uppercase tracking-widest text-orange-700 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Utility Home Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
            Built for Global Importers &amp; Procurement Desks
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            International trade demands zero margin for error. We combine direct quarry extraction rights with certified laboratory oversight and automated maritime packaging.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-orange-300 hover:bg-white hover:shadow-lg transition-all group relative"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-orange-600 text-white flex items-center justify-center transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk'] mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <div className="space-y-2 border-t border-slate-200/80 pt-4">
                  {pillar.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* PROMINENT CALL TO ACTION (CTA) SECTION */}
        <div className="mt-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-bold block">
              Direct B2B Commercial Inquiries
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white">
              Ready to Lock In Container Supply for Your Market?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Whether you require a trial 20ft container (24 MT) or a multi-year monthly supply contract, our trade desk provides transparent FOB/CIF pricing with guaranteed vessel departure schedules.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg hover:shadow-orange-600/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quote Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuickRfq}
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
              >
                <span>Inquire on Product Variants</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>12–24h Proforma Invoice Turnaround</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sample Evaluation Kits Dispatched via DHL/FedEx</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Confirmed Ocean Freight Rate Lock</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
