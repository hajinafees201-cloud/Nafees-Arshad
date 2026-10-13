import React, { useState } from 'react';
import { 
  Ship, 
  Anchor, 
  FileCheck2, 
  Package, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  Download,
  Info,
  Scale
} from 'lucide-react';
import { INCOTERMS_GUIDE, EXPORT_DOCUMENTATION, COMPANY_INFO } from '../../data/company';
import { DESTINATION_PORTS } from '../../data/catalog';
import { PageView } from '../../types';

interface LogisticsPageProps {
  onNavigate: (page: PageView) => void;
}

export const LogisticsPage: React.FC<LogisticsPageProps> = ({ onNavigate }) => {
  const [selectedIncoterm, setSelectedIncoterm] = useState<string>('FOB');
  const [filterRegion, setFilterRegion] = useState<string>('all');

  const filteredPorts = DESTINATION_PORTS.filter((p) => {
    if (filterRegion === 'all') return true;
    if (filterRegion === 'europe') return p.region.includes('Europe');
    if (filterRegion === 'middle-east') return p.region.includes('Middle East');
    if (filterRegion === 'americas') return p.region.includes('America');
    if (filterRegion === 'asia') return p.region.includes('Asia') || p.region.includes('Oceania');
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              International Trade Standards
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Global Logistics &amp; Export Standards
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Transparent trade terms, ISO container optimization, and maritime packaging engineered to prevent moisture ingress across 42+ destination ports worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Incoterms (FOB / CIF / CFR / EXW) Comparison */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Commercial Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900 mt-1">
                International Commercial Terms (Incoterms 2020)
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                We accommodate buyer freight preferences with transparent origin loading and ocean freight rate locks.
              </p>
            </div>

            <div className="flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
              {['FOB', 'CIF', 'CFR', 'EXW'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSelectedIncoterm(term)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    selectedIncoterm === term
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCOTERMS_GUIDE.map((guide) => {
              const isSelected = selectedIncoterm === guide.term;
              return (
                <div
                  key={guide.term}
                  onClick={() => setSelectedIncoterm(guide.term)}
                  className={`p-6 rounded-2xl bg-white border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-orange-500 ring-2 ring-orange-500/10 shadow-lg'
                      : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold font-['Space_Grotesk'] text-slate-900">
                        {guide.term}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-orange-100 text-orange-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {guide.term === 'FOB' ? 'Karachi Port' : 'Discharge Port'}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-800">
                      {guide.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.explanation}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    <span className="font-semibold text-slate-700 block">Best suited for:</span>
                    <span>{guide.recommendedFor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Maritime Packaging Standards & Protection */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Moisture &amp; Transit Integrity
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900 mt-1">
              Custom Maritime Packaging &amp; Palletization
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Mineral salt is hygroscopic and sensitive to high ocean humidity. We utilize multi-layer protective packaging protocols engineered specifically for long-distance maritime corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                25kg
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                Double-Stitched PP Bags + LDPE Liner
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Virgin polypropylene woven fabric with 50-micron high-density polyethylene inner bag to prevent seawater humidity ingress.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                1.2 MT
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                UV-Treated FIBC Jumbo Big Bags
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                4-point cross-corner lifting loops with bottom discharge chute and dust-proof seams for industrial factory hoppers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                OEM
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                Private Label Retail Pouches &amp; Jars
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stand-up resealable pouches, glass grinder bottles with ceramic mechanisms, customized barcodes, and master shipping cartons.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                HT
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                ISPM-15 Heat-Treated Pallets
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified HT stamped timber pallets, heavy-gauge stretch wrapping, corrugated top covers, and container desiccant bags.
              </p>
            </div>
          </div>
        </div>

        {/* Container Stuffing & Payload Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-bold">
              Container Optimization
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
              Standard Maritime Container Payload Guidelines
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Due to the high bulk density of mineral salt, ocean shipments max out container payload weight limits before utilizing total cubic volume. We engineer stuffing plans to maximize container economics.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>20ft Standard FCL (Floor-Loaded):</strong> 25 to 27 Metric Tons (1,000–1,080 bags of 25kg)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>20ft Standard FCL (Palletized):</strong> 22 to 24 Metric Tons (20 to 24 Euro Pallets)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>40ft High-Cube FCL (Lamps &amp; Decor):</strong> 4,500 to 8,000 boxed units with drop-protection EPE foam</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold font-['Space_Grotesk'] text-white">
              Ocean Carrier Network
            </h4>
            <p className="text-xs text-slate-400">
              Direct service contracts with tier-1 international shipping lines:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-1 font-semibold">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">· Maersk Line</div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">· MSC Mediterranean</div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">· CMA CGM</div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">· Hapag-Lloyd</div>
            </div>
          </div>
        </div>

        {/* Export Documentation Checklist */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Customs Clearance Compliance
            </span>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
              Standard Export Documentation Checklist
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Every shipment is accompanied by a full legal dossier to guarantee swift customs entry without port demurrage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPORT_DOCUMENTATION.map((doc) => (
              <div
                key={doc.code}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {doc.code}
                    </span>
                    <span className="text-[11px] text-slate-400">Mandatory</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk'] mt-1">
                    {doc.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {doc.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span>Issued By: {doc.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Port Transit Schedule Matrix */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Maritime Routes
              </span>
              <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
                Typical Port Transit Times from Port Qasim / Karachi
              </h3>
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <button
                onClick={() => setFilterRegion('all')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  filterRegion === 'all' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                All Ports
              </button>
              <button
                onClick={() => setFilterRegion('europe')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  filterRegion === 'europe' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                Europe
              </button>
              <button
                onClick={() => setFilterRegion('middle-east')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  filterRegion === 'middle-east' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                Middle East
              </button>
              <button
                onClick={() => setFilterRegion('americas')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  filterRegion === 'americas' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                Americas
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredPorts.map((port) => (
              <div
                key={port.name}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-colors flex items-center justify-between gap-2 text-xs"
              >
                <div>
                  <span className="font-bold text-slate-900 block">{port.name}</span>
                  <span className="text-[11px] text-slate-500">{port.region}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-orange-600 block">{port.transitDays}</span>
                  <span className="text-[10px] text-slate-400">Direct / Feedered</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Need freight estimation to an unlisted discharge port?
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Request Custom Ocean Freight Rate
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
