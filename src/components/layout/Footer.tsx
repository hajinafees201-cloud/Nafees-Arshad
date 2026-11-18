import React from 'react';
import { 
  Building2, 
  Globe2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ExternalLink, 
  ArrowUpRight,
  Anchor,
  FileCheck,
  Award,
  CheckCircle2
} from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import { COMPANY_INFO, CERTIFICATIONS_LIST } from '../../data/company';
import { PageView } from '../../types';
import { Logo } from '../common/Logo';

interface FooterProps {
  onNavigate: (page: PageView, categorySlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Top Banner: Official Halal Certified & Legal Compliance Spotlight */}
      <div className="border-b border-slate-800/80 bg-slate-900/90 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            
            {/* 1. Official Halal Certified Badge */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <Award className="w-6 h-6 text-emerald-100" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-white text-sm">Official Halal Certified</h4>
                  <span className="text-[10px] bg-emerald-400 text-slate-950 font-extrabold px-1.5 py-0.2 rounded">100%</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-1 leading-snug">
                  Audited &amp; certified pure natural origin, free of animal by-products and prohibited additives.
                </p>
              </div>
            </div>

            {/* 2. FBR & PSW Exporter Registration */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">FBR &amp; PSW Registered</h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Government Certified Exporter · Pakistan Single Window integrated export customs clearances.
                </p>
              </div>
            </div>

            {/* 3. Chamber of Commerce & Licensing */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Chamber of Commerce</h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Jhelum Chamber of Commerce &amp; Industry (JCCI) verified commercial export licensee.
                </p>
              </div>
            </div>

            {/* 4. Global Seaports & Air Terminals */}
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Worldwide Sea Corridors</h4>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Direct FOB Port Qasim / Karachi &amp; CIF ocean freight dispatch to 42+ countries worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Corporate Credentials Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer block"
              aria-label="Utility Home Exports - Home"
            >
              <Logo
                size="lg"
                lightText={true}
                subtitleText="Head Office: Jhelum, Pakistan"
              />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Utility Home Exports is a government-registered Pakistani export corporation led by CEO Nafees Arshad, delivering authentic Himalayan Pink Salt, fresh agricultural produce, and precision surgical &amp; dental instruments to premier international buyers worldwide.
            </p>

            {/* Official Compliance Details */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Registration:</span>
                <span className="font-medium text-emerald-400">FBR &amp; Pakistan Single Window (PSW)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Chamber:</span>
                <span className="font-medium text-slate-200">Jhelum Chamber of Commerce (JCCI)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Halal Status:</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Official Halal Certified</span>
                </span>
              </div>
            </div>

            {/* Contact & Social Links */}
            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Official Business Address:</strong> {COMPANY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span><strong className="text-slate-200">Official Business Email:</strong>{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white transition-colors underline">
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span><strong className="text-slate-200">CEO Email:</strong>{' '}
                  <a href="mailto:ceo@utilityexport.com" className="text-slate-300 hover:text-white transition-colors underline">
                    ceo@utilityexport.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-slate-200">WhatsApp / Direct Call:</strong>{' '}
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                    {COMPANY_INFO.whatsapp}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a 
                  href="https://www.linkedin.com/in/utilityhome-export" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white transition-colors flex items-center justify-center shrink-0"
                  aria-label="Official LinkedIn Profile"
                  title="Official LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin text-sm"></i>
                </a>
                <span className="text-slate-300 font-medium">Follow Official LinkedIn</span>
              </div>
            </div>
          </div>

          {/* 3 Core Export Categories Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              3 Core Export Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((cat, idx) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      if (cat.slug === 'fresh-vegetables') {
                        onNavigate('vegetables');
                      } else {
                        onNavigate('category', cat.slug);
                      }
                    }}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-left flex items-center justify-between w-full group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {cat.title}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 px-1.5 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Key Product Highlights
              </span>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>· Himalayan Salt Lamps, Tiles &amp; Edible Salt</li>
                <li>· NARC-G1 Garlic, Ginger, Turnips &amp; Chillies</li>
                <li>· Tungsten Needle Holders &amp; Surgical Tools</li>
                <li>· Orthopedic &amp; Dental Extraction Kits</li>
              </ul>
            </div>
          </div>

          {/* Export & Trade Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Trade &amp; Logistics
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('logistics')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <span>Incoterms: FOB, CIF, CFR, EXW</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('logistics')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <span>20ft &amp; 40ft Reefer Container Stuffing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('logistics')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <span>Clean B/L, COA, Phytosanitary &amp; COO</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('certifications')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <span>SGS Pre-Shipment Inspection</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('certifications')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <span>Official Halal Certified Facility</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="hover:text-amber-400 text-amber-300 font-medium transition-colors text-left flex items-center gap-1 group cursor-pointer"
                >
                  <span>★ Importer Reviews &amp; Feedback</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Procurement */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Direct Export Desk
            </h4>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <span className="text-xs text-slate-400 block">
                Direct container quotes and proforma invoices for global importers:
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 px-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm text-center block cursor-pointer"
              >
                Submit Request for Quotation (RFQ)
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
              </a>
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-sky-400 font-semibold text-xs rounded-xl transition-colors text-center flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <i className="fa-brands fa-linkedin text-sm"></i>
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <div className="mt-4 text-[11px] text-slate-500">
              <span>Notice: In compliance with international export regulations, commercial proforma invoices and export payment instructions are issued strictly under official corporate credentials.</span>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold text-slate-300">Audited Compliance:</span>
              <span className="text-emerald-400 font-bold">Official Halal Certified</span>
              <span>·</span>
              <span className="text-slate-300">ISO 9001:2015</span>
              <span>·</span>
              <span className="text-slate-300">ISO 22000 (HACCP)</span>
              <span>·</span>
              <span className="text-slate-300">ISO 13485:2016</span>
              <span>·</span>
              <span className="text-slate-300">US FDA Registered Facility</span>
              <span>·</span>
              <span className="text-slate-300">DPP Phytosanitary</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Head Office: Jhelum, Pakistan.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
