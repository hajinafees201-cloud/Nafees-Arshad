import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight,
  Download,
  FileCheck,
  Building2
} from 'lucide-react';
import { CERTIFICATIONS_LIST, COMPANY_INFO } from '../../data/company';
import { PageView } from '../../types';

interface CertificationsPageProps {
  onNavigate: (page: PageView) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              International Audit &amp; Legal Governance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Quality Assurance &amp; Legal Compliance
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every shipment dispatched by Utility Home Exports adheres to international religious dietary standards, food safety protocols, medical device directives, and official government customs verification.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Prominent Official Halal Certified & Exporter Registration Feature Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Halal Feature */}
          <div className="p-6 rounded-3xl bg-emerald-950 text-white border-2 border-emerald-500/40 shadow-xl space-y-3 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white">
              <Award className="w-7 h-7 text-emerald-100" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-900 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
              <span>100% Guaranteed</span>
            </div>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
              Official Halal Certified Facility
            </h3>
            <p className="text-xs text-emerald-200/90 leading-relaxed">
              Our extraction, processing, and packaging facilities in Punjab are certified 100% Halal by recognized Islamic dietary authorities. Completely free from pork derivatives, alcohol contact, or prohibited cross-contamination.
            </p>
            <div className="pt-2 border-t border-emerald-800/80 text-[11px] text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full compliance for GCC, MENA, Southeast Asia &amp; Western Muslim markets</span>
            </div>
          </div>

          {/* FBR & PSW Registration */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-orange-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
              Customs &amp; Tax Compliance
            </span>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-slate-900">
              FBR &amp; Pakistan Single Window (PSW)
            </h3>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
              <span className="text-slate-500">Registration:</span>{' '}
              <strong className="text-emerald-600 font-bold text-sm">FBR &amp; PSW Active Exporter</strong>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Active commercial exporter registered with the Federal Board of Revenue (FBR) and integrated with the Pakistan Single Window (PSW) customs platform for expedited electronic documentation.
            </p>
          </div>

          {/* Chamber of Commerce */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <FileCheck className="w-7 h-7 text-sky-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
              Trade Association License
            </span>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-slate-900">
              Chamber of Commerce &amp; TDAP
            </h3>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
              <span className="text-slate-500">Chamber:</span>{' '}
              <strong className="text-slate-800 font-bold">Jhelum Chamber (JCCI)</strong>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Corporate member of the Jhelum Chamber of Commerce &amp; Industry (JCCI). We issue official Chamber Certificates of Origin (COO) and Phytosanitary certificates for destination customs clearance.
            </p>
          </div>

        </div>

        {/* Certification Cards Grid */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Quality Audits
            </span>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1">
              International Audit Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_LIST.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Valid {cert.validUntil}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-['Space_Grotesk'] text-slate-900">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 block">
                    Certifying Authority: {cert.authority}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Audit Scope:</span>
                    <span>{cert.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third-Party Inspection Protocol (SGS / Intertek) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Pre-Shipment Verification
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900 mt-1">
              Independent Third-Party Inspection Support
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              For institutional buyers, government procurement tenders, and corporate supermarket chains, Utility Home Exports coordinates on-site pre-shipment inspection (PSI) with SGS, Bureau Veritas, or Intertek directly at our loading berths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">1. Sampling &amp; Sizing Protocol</span>
              <p className="text-slate-600 leading-relaxed">
                Inspectors draw composite samples across master cartons and bulk packaging following ISO 2859-1 AQL standards to verify physical sizing tolerances.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">2. Laboratory Chemical Assay</span>
              <p className="text-slate-600 leading-relaxed">
                Sealed sample vials undergo optical assay for Sodium Chloride purity (≥98.7%), moisture content (&le;0.15%), and zero heavy metals or microbial contaminants.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">3. Container Stuffing Supervision</span>
              <p className="text-slate-600 leading-relaxed">
                Inspectors supervise container floor inspection, pallet placement, dunnage air bags, and apply tamper-evident high-security customs bolt seals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
              Need Certified Certificate Copies for Tender Submission?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our regulatory compliance desk provides notarized certificates, Halal declarations, MSDS sheets, and FDA verification letters upon request.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            Request Regulatory Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
