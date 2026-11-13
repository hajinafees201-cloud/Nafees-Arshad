import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Microscope, 
  ArrowRight,
  FileCheck,
  Mail,
  Phone,
  Scale
} from 'lucide-react';
import { COMPANY_INFO, CERTIFICATIONS_LIST } from '../../data/company';
import { PageView } from '../../types';

interface AboutPageProps {
  onNavigate: (page: PageView, categorySlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Corporate Credentials &amp; Legal Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              About Utility Home Exports
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              A premier Pakistani export house (Head Office: Jhelum, Pakistan), delivering authentic Himalayan Pink Salt, fresh agricultural produce, and precision surgical &amp; dental instruments to international buyers worldwide under government-audited compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Trust & Legal Compliance Credentials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: FBR & PSW */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
              Government Regulatory Compliance
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-['Space_Grotesk']">
              FBR &amp; Pakistan Single Window (PSW)
            </h3>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 font-mono">
              <div><strong className="text-slate-700">Exporter Status:</strong> <span className="text-emerald-600 font-bold">FBR &amp; PSW Active Verified</span></div>
              <div><strong className="text-slate-700">Customs Clearance:</strong> PSW Digital Port Integration</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Officially registered with the Federal Board of Revenue (FBR) and Pakistan Single Window (PSW) for paperless electronic customs clearance, fast-track container release, and verified commercial invoices.
            </p>
          </div>

          {/* Card 2: Chamber of Commerce */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
              Commercial Trade Licensing
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-['Space_Grotesk']">
              Chamber of Commerce &amp; TDAP
            </h3>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 font-mono">
              <div><strong className="text-slate-700">Chamber:</strong> Jhelum Chamber (JCCI)</div>
              <div><strong className="text-slate-700">License Status:</strong> Verified Commercial Exporter</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Active corporate member of the Jhelum Chamber of Commerce &amp; Industry (JCCI) and Trade Development Authority of Pakistan (TDAP), issuing certified Certificates of Origin (Form A) for global customs tariff preferences.
            </p>
          </div>

          {/* Card 3: Halal & Global Quality */}
          <div className="p-6 rounded-3xl bg-white border border-emerald-300 shadow-xs space-y-3 bg-gradient-to-b from-emerald-50/30 to-white">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
              Religious &amp; Food Safety Standards
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-['Space_Grotesk'] flex items-center gap-2">
              <span>Official Halal Certified Facility</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </h3>
            <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-1 font-mono text-emerald-900">
              <div><strong>Status:</strong> 100% Halal Certified Production</div>
              <div><strong>Scope:</strong> Edible Salt &amp; Agricultural Produce</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fully compliant with international Halal food safety management systems, certifying complete freedom from cross-contamination, animal derivatives, and synthetic chemical additives.
            </p>
          </div>

        </div>

        {/* 3 Core Export Categories Overview */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Direct Supply Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900 mt-1">
              Our 3 Core Export Operations
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Utility Home Exports operates specialized processing hubs across Punjab’s primary industrial and agrarian corridors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Division 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                Himalayan Pink Salt Products
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quarried from the subterranean Khewra salt beds. Products include food-grade edible table &amp; grinder salt, gourmet cooking tiles, hand-carved ambient salt lamps, animal lick blocks, and spa bath salts.
              </p>
              <button
                onClick={() => onNavigate('category', 'himalayan-pink-salt')}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 pt-1 cursor-pointer"
              >
                <span>View Salt Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Division 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                Fresh Agricultural Produce
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct farm harvests from Jhelum, Okara, and the Punjab river basins. Specializing in NARC-G1 garlic, bold ginger rhizomes, export red onions, Dutch potatoes, fresh turnips, and hot green/red chillies.
              </p>
              <button
                onClick={() => onNavigate('vegetables')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 pt-1 cursor-pointer"
              >
                <span>View Produce Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Division 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                Surgical &amp; Dental Instruments
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Crafted in Sialkot and Jhelum from premium medical-grade AISI 420 stainless steel. Complete product lines for dental extraction, orthopedic sets, hemostatic forceps, scalpel retractors, and TC needle holders.
              </p>
              <button
                onClick={() => onNavigate('category', 'surgical-instruments')}
                className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 pt-1 cursor-pointer"
              >
                <span>View Surgical Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Corporate Contact & Leadership Desk */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Direct B2B Trade Communication
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white mt-1">
              Connect Directly with Our Executive Export Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              We respond promptly to commercial RFQs, tender specifications, and container rate inquiries. For immediate freight calculations and proforma requests:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-slate-400 block font-semibold">Chief Executive Officer:</span>
              <span className="text-white font-bold text-sm block">{COMPANY_INFO.ceo}</span>
              <span className="text-slate-400 text-[11px] block">Head of International Trade</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-slate-400 block font-semibold">Official Business Email:</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-orange-400 hover:text-orange-300 font-bold text-sm block underline truncate">
                {COMPANY_INFO.email}
              </a>
              <span className="text-slate-400 text-[11px] block">RFQ &amp; Procurement Desk</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
              <span className="text-slate-400 block font-semibold">WhatsApp &amp; Phone:</span>
              <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold text-sm block">
                {COMPANY_INFO.whatsapp}
              </a>
              <span className="text-slate-400 text-[11px] block">24/7 International Desk</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-slate-400 block font-semibold">Official LinkedIn:</span>
              <a 
                href={COMPANY_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 p-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white transition-colors"
                title="Utility Home Exports LinkedIn Profile"
                aria-label="Utility Home Exports LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin text-lg"></i>
                <span className="text-xs font-semibold">Follow on LinkedIn</span>
              </a>
              <span className="text-slate-400 text-[11px] block">Verified Company Profile</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span><strong>Headquarters Address:</strong> {COMPANY_INFO.headquarters}</span>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors shadow-md cursor-pointer"
            >
              Submit Formal Inquiry (RFQ)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
