import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Anchor, 
  Layers, 
  FileCheck, 
  ChevronRight,
  TrendingUp,
  Download
} from 'lucide-react';
import { CATEGORIES, DESTINATION_PORTS } from '../../data/catalog';
import { COMPANY_INFO } from '../../data/company';
import { PageView } from '../../types';

interface HeroSectionProps {
  onNavigate: (page: PageView, categorySlug?: string) => void;
  onOpenQuickRfq: (productName: string, port: string, volume: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenQuickRfq,
}) => {
  const [selectedProduct, setSelectedProduct] = useState('Edible Himalayan Pink Salt (Fine & Coarse)');
  const [selectedPort, setSelectedPort] = useState(DESTINATION_PORTS[0].name);
  const [volume, setVolume] = useState('1 x 20ft FCL (25 MT)');

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuickRfq(selectedProduct, selectedPort, volume);
  };

  const handleDownloadDeck = () => {
    const deckText = `
========================================================================
UTILITY HOME EXPORTS - CORPORATE CAPABILITY PROFILE
========================================================================
Company Name       : ${COMPANY_INFO.name} / ${COMPANY_INFO.legalName}
CEO & Contact      : ${COMPANY_INFO.ceo}
Headquarters       : ${COMPANY_INFO.headquarters}
Mining Extraction  : Khewra Foothills, Salt Range, Pakistan
Export Terminals   : Port Qasim (PKBQM) & Karachi Port (PKKHI)
Annual Capacity    : ${COMPANY_INFO.annualExportVolume}
Destinations       : ${COMPANY_INFO.exportDestinationsCount}

CORE EXPORT CATEGORIES:
1. Himalayan Pink Rock Salt (Edible, Salt Lamps, Livestock Licks, Bath Crystals)
2. Agricultural Produce Pipeline (Kinnow Mandarins & Fresh Mangoes)
3. Industrial Minerals & De-icing Grade Salts

QUALITY AUDIT STANDARDS:
- ISO 9001:2015 (Quality Management System)
- ISO 22000 & HACCP (Food Safety System)
- US FDA Facility Registration #194829104
- Halal & Kosher Food Grade Certificates
- SGS & Intertek Third-Party Pre-Shipment Inspection on request

COMMERCIAL TERMS:
- Incoterms: FOB Karachi / CIF Worldwide Discharge Ports / CFR / EXW
- Minimum Order: 1 x 20ft FCL (24-27 MT)
- Payment: L/C at sight, T/T advance deposit
- Commercial Inquiries: ${COMPANY_INFO.email} | WhatsApp: ${COMPANY_INFO.whatsapp}
========================================================================
    `.trim();

    const blob = new Blob([deckText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `UtilityHome-B2B-Capability-Deck.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Subtle Gradient & Mesh Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,87,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Indicator Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-orange-300 font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Certified Khewra Salt Mining &amp; Export Infrastructure</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.12]">
              Premier Global Exporter of Authentic <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-300 to-amber-200">
                Himalayan Minerals
              </span> &amp; Bulk Commodities.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              <strong>Utility Home</strong> bridges ethical subterranean quarrying directly to multinational food corporations, retail chains, and agricultural importers. Supplying 100% pure Himalayan Pink Salt, custom OEM packaging, and streamlined FOB/CIF maritime logistics worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('category', 'himalayan-pink-salt')}
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Himalayan Salt Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Container Quote</span>
              </button>

              <button
                onClick={handleDownloadDeck}
                className="px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/60 transition-all text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                title="Download export credentials"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Export Profile Deck</span>
              </button>
            </div>

            {/* Credibility Counter Strip */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-white">18,500+</div>
                <div className="text-xs text-slate-400 mt-0.5">Metric Tons / Yr</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-orange-400">42+</div>
                <div className="text-xs text-slate-400 mt-0.5">Destination Ports</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-emerald-400">98.7%</div>
                <div className="text-xs text-slate-400 mt-0.5">Average NaCl Purity</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-sky-400">ISO &amp; FDA</div>
                <div className="text-xs text-slate-400 mt-0.5">Audited Compliance</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Container Freight & RFQ Estimator Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative backdrop-blur-md">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 block">
                    Fast-Track Inquiry Desk
                  </span>
                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white">
                    Instant Container Estimate
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-medium">
                  Active Dispatch
                </span>
              </div>

              <form onSubmit={handleQuickEstimate} className="mt-5 space-y-4">
                {/* Select Product */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Commodity / Product Variant
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="Edible Himalayan Pink Salt (Fine & Coarse)">
                      Edible Pink Salt (Fine/Coarse Table Grain) - HS 2501
                    </option>
                    <option value="Natural Handcrafted Salt Lamps & Decor">
                      Himalayan Salt Lamps (Natural Rough / Geometric) - HS 9405
                    </option>
                    <option value="Animal & Livestock Mineral Salt Licks">
                      Livestock Mineral Salt Licks with Hanging Rope - HS 2501
                    </option>
                    <option value="Therapeutic Bath & Spa Crystals">
                      Cosmetic &amp; Spa Pink Bath Salt - HS 3307
                    </option>
                    <option value="Kinnow Mandarins & Citrus (Pre-Season)">
                      Kinnow Mandarins (Reefer Cold Chain) - Upcoming
                    </option>
                  </select>
                </div>

                {/* Destination Port */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Destination Discharge Port
                  </label>
                  <select
                    value={selectedPort}
                    onChange={(e) => setSelectedPort(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    {DESTINATION_PORTS.map((port) => (
                      <option key={port.name} value={port.name}>
                        {port.name} ({port.region}) · {port.transitDays}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Volume */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Order Volume
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="1 x 20ft FCL (25 MT)">1 x 20ft FCL Container (Approx. 25 Metric Tons)</option>
                    <option value="2 x 20ft FCL (50 MT)">2 x 20ft FCL Containers (Approx. 50 Metric Tons)</option>
                    <option value="5 x 20ft FCL (125 MT)">5 x 20ft FCL Containers (Approx. 125 Metric Tons)</option>
                    <option value="10+ Containers (Annual Contract)">10+ Containers (Annual Procurement Contract)</option>
                    <option value="Trial Pallet (1 MT Sample)">Trial Pallet / Sample Evaluation (1 Metric Ton)</option>
                  </select>
                </div>

                {/* Quick Info Strip */}
                <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Loading Port:</span>
                    <span className="text-slate-200 font-medium">Port Qasim (PKBQM) / Karachi</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Export Terms:</span>
                    <span className="text-slate-200 font-medium">FOB, CIF, CFR, EXW Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <span className="text-slate-200 font-medium">25kg PP Bags / 1MT Big Bags / OEM</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Full RFQ Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-slate-500">
                  Instant quote calculation with verified vessel transit schedules.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
