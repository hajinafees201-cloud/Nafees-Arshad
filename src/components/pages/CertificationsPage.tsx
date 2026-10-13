import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Microscope, 
  CheckCircle2, 
  ArrowRight,
  Download,
  AlertCircle
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
              Audit &amp; Quality Governance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Quality Assurance &amp; Compliance Standards
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every container dispatched by Utility Home adheres to international food safety, phytosanitary, and chemical purity benchmarks audited by premier global certification bodies.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Certification Cards Grid */}
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
              For high-volume import tenders and institutional buyers, Utility Home facilitates on-site pre-shipment inspection (PSI) directly at our Khewra plant or Karachi loading docks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">1. Sampling &amp; Grain Sizing</span>
              <p className="text-slate-600 leading-relaxed">
                Independent inspectors take composite samples across master cartons and 25kg bags according to ISO 2859-1 AQL standards to verify sieve calibration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">2. Moisture &amp; Chemical Assay</span>
              <p className="text-slate-600 leading-relaxed">
                Sealed sample kits are analyzed for Sodium Chloride purity (≥98.7%), moisture content (&le;0.15%), and non-detectable heavy metals (Pb, Cd, As).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block">3. Container Stuffing Supervision</span>
              <p className="text-slate-600 leading-relaxed">
                Inspector witnesses container floor sweeping, pallet integrity, cargo strapping, and applies customs-recognized high-security bolt seals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
              Need Certificate Copies for Regulatory Tender Submission?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our regulatory affairs desk can provide notarized certificates, MSDS sheets, and FDA registration confirmations.
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
