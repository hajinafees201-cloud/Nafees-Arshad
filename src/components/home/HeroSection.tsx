import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  FileCheck, 
  ChevronRight,
  Download,
  Award
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
NTN Registration   : ${COMPANY_INFO.ntn} (FBR & Pakistan Single Window Registered)
Chamber Membership : ${COMPANY_INFO.chamberOfCommerce}
Mining & Origins   : Khewra Salt Range, Punjab Agricultural Corridors & Sialkot
Export Terminals   : Port Qasim (PKBQM), Karachi Port (PKKHI) & Air Freight Hubs
Annual Capacity    : ${COMPANY_INFO.annualExportVolume}
Destinations       : ${COMPANY_INFO.exportDestinationsCount}

3 CORE EXPORT DIVISIONS:
1. Himalayan Pink Rock Salt (Edible Crystals, Cooking Tiles, Salt Lamps, Animal Licks, Bath Crystals)
2. Fresh Agricultural Produce (NARC-G1 Garlic, Ginger, Turnips, Red Onions, Potatoes, Chillies)
3. Precision Surgical & Dental Instruments (Dental Tool Sets, Forceps, TC Needle Holders, Scissors)

QUALITY & AUDIT STANDARDS:
- Official Halal Certified Facility
- ISO 9001:2015 (Quality Management System)
- ISO 22000 & HACCP (Food Safety Management System)
- ISO 13485:2016 (Medical & Surgical Devices)
- US FDA Facility Registration Compliant
- DPP Phytosanitary Export Inspection Certified
- SGS & Intertek Third-Party Pre-Shipment Inspection Supported

COMMERCIAL TERMS:
- Incoterms: FOB Karachi / Port Qasim / CIF Worldwide Discharge Ports / CFR / EXW
- Minimum Order: 1 x 20ft/40ft FCL or Commercial Air Cargo Lots
- Official Email: ${COMPANY_INFO.email}
- CEO Direct Email: ${COMPANY_INFO.ceoEmail}
- Direct WhatsApp / Phone: ${COMPANY_INFO.whatsapp}
- LinkedIn: ${COMPANY_INFO.linkedinDisplay}
========================================================================
    `.trim();

    const blob = new Blob([deckText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `UtilityHome-Exports-Capability-Profile.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="relative bg-[#07162c] text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(7, 22, 44, 0.88) 0%, rgba(11, 31, 59, 0.78) 55%, rgba(7, 22, 44, 0.88) 100%), url('/images/seaport_hero_banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle Dark-Blue Atmospheric Radial Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,87,0.14),rgba(7,22,44,0.25))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Indicator Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-orange-300 font-medium shadow-xs flex-wrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FBR &amp; PSW Registered Exporter</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>Halal Certified</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.12]">
              Premier Global Exporter of Authentic <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-300 to-amber-200">
                Himalayan Minerals
              </span>, Fresh Produce &amp; Surgical Tools.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              <strong>Utility Home Exports</strong> (Head Office: Jhelum, Pakistan) connects certified Khewra subterranean mines, fertile agricultural riverbeds, and surgical instrument manufacturing directly to international importers. Supplying 100% pure Himalayan Pink Salt, fresh farm produce, and surgical tools with streamlined FOB/CIF maritime logistics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('categories');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('category', 'himalayan-pink-salt');
                }}
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore 3 Core Divisions</span>
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
                <div className="text-xs text-slate-400 mt-0.5">Destination Seaports</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Halal Certified</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-sky-400">ISO &amp; PSW</div>
                <div className="text-xs text-slate-400 mt-0.5">Government Verified</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Container Freight & RFQ Estimator Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative backdrop-blur-md">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 block">
                    Fast-Track B2B Inquiry Desk
                  </span>
                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white">
                    Instant Commodity Estimate
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
                    Export Commodity / Variant
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <optgroup label="1. Himalayan Pink Salt Products">
                      <option value="Edible Himalayan Pink Salt (Fine & Coarse)">
                        Edible Pink Salt (Fine/Coarse Table Grain) - HS 2501
                      </option>
                      <option value="Handcrafted Himalayan Salt Lamps & Decor">
                        Himalayan Salt Lamps (Natural Rough / Geometric) - HS 9405
                      </option>
                      <option value="Himalayan Salt Cooking Tiles, Slabs & Bricks">
                        Gourmet Salt Cooking Tiles & Searing Slabs - HS 2501
                      </option>
                      <option value="Natural Animal & Livestock Salt Lick Blocks">
                        Livestock Mineral Salt Licks with Hanging Rope - HS 2501
                      </option>
                      <option value="Therapeutic Bath, Spa & Cosmetic Pink Salt">
                        Cosmetic &amp; Spa Pink Bath Salt - HS 3307
                      </option>
                    </optgroup>
                    <optgroup label="2. Fresh Agricultural Produce">
                      <option value="Fresh Whole White Garlic (NARC-G1 Export Grade)">
                        Fresh White Garlic (NARC-G1 Bulbs) - HS 0703
                      </option>
                      <option value="Fresh Ginger Rhizomes (Export Grade)">
                        Fresh Ginger Rhizomes (Washed / Unwashed) - HS 0910
                      </option>
                      <option value="Fresh Organic Purple-Top Turnips">
                        Fresh Organic Purple-Top Turnips - HS 0706
                      </option>
                      <option value="Premium Red Onions (Export Graded)">
                        Export Red Onions (Sindh / Punjab) - HS 0703
                      </option>
                      <option value="Fresh Export Potatoes (Mozika, Asterix & Lady Rosetta)">
                        Fresh Potatoes (Mozika / Dutch) - HS 0701
                      </option>
                      <option value="Pungent Green & Red Hot Chillies">
                        Hot Green &amp; Red Chillies - HS 0709
                      </option>
                    </optgroup>
                    <optgroup label="3. Surgical & Dental Instruments">
                      <option value="Orthopedic & Dental Extraction Tool Sets">
                        Orthopedic &amp; Dental Extraction Tool Sets - HS 9018
                      </option>
                      <option value="Hemostatic Forceps & Artery Clamps">
                        Hemostatic Forceps &amp; Artery Clamps - HS 9018
                      </option>
                      <option value="Surgical Scalpels, Precision Knives & Tissue Retractors">
                        Surgical Scalpels &amp; Retractors - HS 9018
                      </option>
                      <option value="Tungsten Carbide (TC) Needle Holders">
                        Tungsten Carbide (TC) Needle Holders - HS 9018
                      </option>
                      <option value="Mayo & Metzenbaum Surgical Dissecting Scissors">
                        Mayo &amp; Metzenbaum Dissecting Scissors - HS 9018
                      </option>
                    </optgroup>
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
                    Order Volume / Container Selection
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 truncate"
                  >
                    <optgroup label="20ft Standard FCL Containers (Dry Cargo / Salt)">
                      <option value="1 x 20ft FCL (25 MT)">1 x 20ft FCL (25 Metric Tons)</option>
                      <option value="2 x 20ft FCL (50 MT)">2 x 20ft FCL (50 Metric Tons)</option>
                      <option value="5 x 20ft FCL (125 MT)">5 x 20ft FCL (125 Metric Tons)</option>
                      <option value="10 x 20ft FCL (250 MT)">10 x 20ft FCL (250 Metric Tons)</option>
                    </optgroup>
                    <optgroup label="40ft High Cube & Reefer Containers (Produce / Volumetric)">
                      <option value="1 x 40ft Reefer FCL (26 MT)">1 x 40ft Reefer FCL (26 MT Produce)</option>
                      <option value="2 x 40ft Reefer FCL (52 MT)">2 x 40ft Reefer FCL (52 MT Produce)</option>
                      <option value="1 x 40ft High Cube FCL">1 x 40ft High Cube FCL (Lamps / Cartons)</option>
                      <option value="2 x 40ft High Cube FCL">2 x 40ft High Cube FCL (Salt Decor)</option>
                    </optgroup>
                    <optgroup label="Air Cargo & Trial Evaluation">
                      <option value="Commercial Air Cargo (2,000 kg)">Commercial Air Cargo (Perishables / Surgical)</option>
                      <option value="Trial Evaluation Pallet (1 MT)">Trial Evaluation Pallet (1 MT Starter)</option>
                    </optgroup>
                  </select>
                </div>

                {/* Quick Info Strip */}
                <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Export Customs:</span>
                    <span className="text-slate-200 font-medium">Pakistan Single Window (PSW Active)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Export Terms:</span>
                    <span className="text-slate-200 font-medium">FOB, CIF, CFR, EXW Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quality Testing:</span>
                    <span className="text-slate-200 font-medium">SGS / DPP Phyto / COA Included</span>
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
                  Direct dispatch to CEO Nafees Arshad · Proforma response in 12–24h.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
