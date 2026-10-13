import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Users, 
  Microscope, 
  Truck, 
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, CERTIFICATIONS_LIST } from '../../data/company';
import { PageView } from '../../types';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Corporate Credentials &amp; Origin
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              About Utility Home
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Founded to establish a modern, dependable bridge between the ancient mineral treasures of the Khewra Salt Range and premier multinational buyers across Europe, the Americas, Asia, and the Middle East.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Core Narrative & Origins */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold uppercase tracking-wider text-orange-700">
              <span>Origin &amp; Geological Heritage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk']">
              Direct Extraction from the World&apos;s Purest Prehistoric Salt Veins
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nestled at the foothills of the Himalayan mountain belt, the Khewra Salt Range contains sedimentary mineral formations that crystallized over 250 million years ago from pristine primordial oceans. Isolated from modern pollution and microplastics by tectonic shifts, this mineral bed yields the distinctive iron-tinted pink rock salt celebrated globally for culinary and holistic excellence.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Utility Home / Utility Home Exports</strong>, spearheaded by CEO <strong>Nafees Arshad</strong> from our headquarters in <strong>Gujranwala, Punjab</strong>, eliminates intermediate brokering by overseeing quarry extraction contracts, inland container movement, automated processing plants, and sea terminal staging at Port Qasim and Karachi Port.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-semibold">Leadership / CEO:</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{COMPANY_INFO.ceo}</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-semibold">Headquarters:</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{COMPANY_INFO.headquarters}</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block font-semibold">Maritime Ports:</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">Port Qasim &amp; Karachi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                alt="Khewra Himalayan salt quarry processing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl border border-slate-800 max-w-xs hidden sm:block">
              <span className="text-2xl font-bold font-['Space_Grotesk'] text-orange-400">18,500+ MT</span>
              <p className="text-xs text-slate-300 mt-1">
                Annual export tonnage shipped under stringent ISO 22000 &amp; HACCP quality standards.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Standards & Processing Infrastructure */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Technical Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900 mt-1">
              State-of-the-Art Processing &amp; Optical Sorters
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Unlike traditional raw-salt operations, our processing plant in the Khewra corridor features advanced industrial automation engineered to satisfy European and American food-contact standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                Multi-Stage Optical Laser Sorting
              </h4>
              <p className="text-slate-600 leading-relaxed">
                High-speed CCD cameras and chromatic sensors inspect every salt crystal on conveyor flumes, rejecting dark anhydrite stones and ensuring uniform pink coloration.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                Magnetic Separation &amp; Metal Detectors
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Triple rare-earth high-intensity magnets (12,000 Gauss) and end-of-line industrial metal detectors guarantee absolute zero ferrous, non-ferrous, or stainless particulates.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-['Space_Grotesk']">
                In-House QA Laboratory
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Continuous moisture titration, sieve analysis, and atomic absorption spectroscopy tests verify NaCl percentage (≥98.7%) before any container seal is locked.
              </p>
            </div>
          </div>
        </div>

        {/* Global Certifications Showcase */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Verified Compliance
            </span>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
              International Audit Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_LIST.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-['Space_Grotesk'] text-slate-900">
                      {cert.name}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                      Valid {cert.validUntil}
                    </span>
                  </div>
                  <span className="text-xs text-orange-600 font-semibold block mt-1">
                    Audited by: {cert.authority}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span>Scope: {cert.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Reliability & Leadership CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-orange-400 font-bold">
              Reliable Global Partner
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
              Direct Access to Our Trade &amp; Technical Desks
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We welcome international procurement audits, facility visits at our Khewra plant, and container pre-shipment inspections by SGS or Bureau Veritas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors text-center cursor-pointer"
            >
              Contact Our Trade Desk
            </button>
            <button
              onClick={() => onNavigate('logistics')}
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors text-center cursor-pointer"
            >
              Explore Shipping Standards
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
