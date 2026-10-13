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
  FileCheck
} from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import { COMPANY_INFO, CERTIFICATIONS_LIST } from '../../data/company';
import { PageView } from '../../types';

interface FooterProps {
  onNavigate: (page: PageView, categorySlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Export Assurance */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">Full Quality Certification</h4>
                <p className="text-xs text-slate-400 mt-1">
                  ISO 9001, ISO 22000, HACCP, Halal, Kosher &amp; US FDA Facility registered.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Anchor className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">Global Maritime Corridors</h4>
                <p className="text-xs text-slate-400 mt-1">
                  FOB Port Qasim / Karachi &amp; CIF discharge to 42+ countries across Europe, Americas &amp; GCC.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileCheck className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">Direct Mine Origin</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Direct quarry extraction from the Khewra Himalayan mineral formations with batch COA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">OEM Private Label</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Custom retail packaging, barcoding, master cartons &amp; bulk 25kg/1MT jumbo sacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-extrabold text-white font-['Space_Grotesk'] tracking-wider">
                    UTILITY HOME
                  </span>
                  <span className="text-[10px] bg-orange-600 text-white font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    EXPORTS
                  </span>
                </div>
                <span className="text-[10px] block text-orange-400 uppercase tracking-widest font-semibold">
                  Gujranwala, Pakistan · Mineral &amp; Commodity Exporter
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Utility Home Exports is a premier global export house led by CEO Nafees Arshad, supplying authentic certified Himalayan minerals and agricultural commodities worldwide.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-slate-200">Contact Person / CEO:</strong> {COMPANY_INFO.ceo}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Address:</strong> {COMPANY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span><strong className="text-slate-200">Email:</strong>{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white transition-colors underline">
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-slate-200">Phone / WhatsApp:</strong>{' '}
                  <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300">
                    {COMPANY_INFO.phone}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Export Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', cat.slug)}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {cat.title}
                    </span>
                    {cat.status === 'active' && (
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 px-1.5 py-0.5 rounded">
                        Active
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Himalayan Salt Variants
              </span>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>· Edible Fine &amp; Coarse Salt</li>
                <li>· Handcrafted Salt Lamps</li>
                <li>· Livestock Mineral Salt Licks</li>
                <li>· Therapeutic Bath &amp; Spa Salt</li>
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
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span>Incoterms: FOB, CIF, CFR, EXW</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('logistics')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span>20ft &amp; 40ft Container Stuffing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('logistics')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span>Export Documentation (B/L, COA, COO)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('logistics')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span>Moisture &amp; Pallet Protection</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('certifications')} 
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <span>SGS Pre-Shipment Inspection</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Procurement */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Commercial Desk
            </h4>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
              <span className="text-xs text-slate-400 block">
                Direct quotation &amp; contract inquiries for container shipments:
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2 px-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-sm text-center block"
              >
                Submit RFP / Inquire
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-semibold text-xs rounded-lg transition-colors border border-emerald-600/30 text-center block"
              >
                WhatsApp Direct Desk
              </a>
            </div>

            <div className="mt-4 text-[11px] text-slate-500">
              <span>Khewra Plant: {COMPANY_INFO.factoryDepot}</span>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold text-slate-300">Audited Compliance:</span>
              {CERTIFICATIONS_LIST.map((cert) => (
                <span key={cert.id} className="text-slate-400 hover:text-slate-200 transition-colors">
                  {cert.name}
                </span>
              ))}
            </div>
            <div>
              <span>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
