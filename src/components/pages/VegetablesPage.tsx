import React, { useState, useRef } from 'react';
import { 
  Leaf, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Package, 
  Truck, 
  Plane, 
  Ship, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Calendar, 
  FileText, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  Award, 
  Check, 
  Layers,
  ChevronRight,
  Filter,
  Eye,
  Printer,
  AlertCircle
} from 'lucide-react';
import { VEGETABLE_PRODUCTS, VEGETABLE_SPECS_TABLE, VEGETABLE_STEPS, VEGETABLE_VALUE_PROPS } from '../../data/vegetables';
import { DESTINATION_PORTS } from '../../data/catalog';
import { COMPANY_INFO } from '../../data/company';
import { FORM_ENDPOINTS } from '../../config/forms';
import { VegetableProduct, PageView } from '../../types';
import { VegetablesCatalogModal } from '../vegetables/VegetablesCatalogModal';
import { downloadVegetablesPdfCatalog } from '../../utils/generateVegetablesPdf';
import { PAKISTANI_EXPORT_VEGETABLES, CATALOG_COMPANY_CREDENTIALS } from '../../data/vegetablesCatalog';

interface VegetablesPageProps {
  onNavigate: (page: PageView, categorySlug?: string) => void;
  onOpenQuickRfq: (productName: string, port?: string, volume?: string) => void;
}

export const VegetablesPage: React.FC<VegetablesPageProps> = ({
  onNavigate,
  onOpenQuickRfq,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  // Inquiry Form state
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [targetPort, setTargetPort] = useState(DESTINATION_PORTS[0].name);
  const [selectedProduct, setSelectedProduct] = useState(VEGETABLE_PRODUCTS[0].name);
  const [requiredQuantity, setRequiredQuantity] = useState('28');
  const [quantityUnit, setQuantityUnit] = useState<'Metric Tons (MT)' | '40ft Reefer Containers' | '20ft Reefer Containers' | 'Air Cargo Pallets'>('Metric Tons (MT)');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Catalog PDF Modal and Download State
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  // Table filter
  const [tableFilter, setTableFilter] = useState<'all' | 'sea' | 'air'>('all');

  const scrollToForm = (prefilledProduct?: string) => {
    if (prefilledProduct) {
      setSelectedProduct(prefilledProduct);
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCatalog = () => {
    setIsCatalogModalOpen(true);
  };

  const handleDirectDownloadPdf = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsDownloadingPdf(true);
    try {
      downloadVegetablesPdfCatalog();
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setTimeout(() => setIsDownloadingPdf(false), 800);
    }
  };

  const handleSubmitInquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const inquiryId = `VEG-UH-${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toLocaleString();

    const formspreePayload = {
      product_category: 'Fresh Vegetables & Agro Produce',
      product_variant: selectedProduct,
      volume: `${requiredQuantity} ${quantityUnit}`,
      incoterm: 'CIF / FOB Port Qasim / Karachi',
      packaging: 'Export Standard Ventilated Packaging',
      destination_port: targetPort,
      company_name: companyName,
      full_name: buyerName,
      email: contactEmail,
      whatsapp_phone: contactPhone,
      country: country,
      special_instructions: specialRequirements,
      rfq_reference: inquiryId,
      submitted_at: timestamp
    };

    try {
      const response = await fetch(FORM_ENDPOINTS.inquiry, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formspreePayload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to send inquiry to the fresh produce desk. Please try again.');
      }

      // Store local record
      const payload = {
        inquiryId,
        timestamp,
        buyer: { buyerName, companyName, country, contactEmail, contactPhone },
        specs: {
          product: selectedProduct,
          quantity: `${requiredQuantity} ${quantityUnit}`,
          targetPort,
          specialRequirements
        }
      };

      try {
        const stored = JSON.parse(localStorage.getItem('utility_home_rfqs') || '[]');
        stored.unshift(payload);
        localStorage.setItem('utility_home_rfqs', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }

      setSubmittedId(inquiryId);
    } catch (err: any) {
      console.error('Formspree inquiry error:', err);
      setSubmitError(err.message || 'An error occurred while submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredSpecs = VEGETABLE_SPECS_TABLE.filter((item) => {
    if (tableFilter === 'sea') return item.shippingMode.toLowerCase().includes('reefer') || item.shippingMode.toLowerCase().includes('sea');
    if (tableFilter === 'air') return item.shippingMode.toLowerCase().includes('air');
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-50/50 pb-24 text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white overflow-hidden py-18 lg:py-24 border-b border-emerald-800">
        {/* Photographic Background with overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2000&q=85"
            alt="Farm fresh vegetables harvest"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Subtle radial glow & leaf accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-700/80 text-xs font-semibold text-emerald-200 shadow-sm backdrop-blur-xs">
              <Leaf className="w-3.5 h-3.5 text-lime-400" />
              <span>Utility Home Exports · Agricultural Produce Division</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight leading-[1.12]">
              Farm-Fresh Premium Quality Vegetables Exported Worldwide
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-emerald-100/90 leading-relaxed font-normal">
              Sourced directly from fertile farmlands, packed with care, and shipped via climate-controlled logistics.
            </p>

            {/* Primary Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToForm()}
                className="px-6 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-lime-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Fresh Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenCatalog}
                  className="px-5 py-3.5 rounded-xl bg-emerald-900/90 hover:bg-emerald-800 border-2 border-lime-400 text-white font-bold text-sm shadow-xl hover:shadow-lime-500/25 transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-xs group"
                  title="View and download complete 9-item Pakistani vegetable export catalog"
                >
                  <div className="w-6 h-6 rounded-lg bg-lime-500/20 flex items-center justify-center text-lime-300 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span>Download Product Catalog (PDF)</span>
                  <Download className="w-4 h-4 text-lime-400 group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={handleDirectDownloadPdf}
                  disabled={isDownloadingPdf}
                  className="px-3.5 py-3.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-800 border border-emerald-700/80 text-emerald-200 hover:text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer backdrop-blur-xs disabled:opacity-50"
                  title="Direct PDF file download"
                >
                  <Download className="w-3.5 h-3.5 text-lime-400" />
                  <span className="hidden sm:inline">{isDownloadingPdf ? '...' : '.PDF'}</span>
                </button>
              </div>
            </div>

            {/* Key Trust Metrics */}
            <div className="pt-8 border-t border-emerald-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-emerald-200">
              <div>
                <span className="text-2xl font-bold font-['Space_Grotesk'] text-white block">100%</span>
                <span className="text-emerald-300 mt-0.5 block">Farm Direct Sourcing</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-['Space_Grotesk'] text-lime-400 block">0°C – 10°C</span>
                <span className="text-emerald-300 mt-0.5 block">Active Reefer Cold Chain</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-['Space_Grotesk'] text-white block">DPP &amp; Phyto</span>
                <span className="text-emerald-300 mt-0.5 block">Certified Quality Checks</span>
              </div>
              <div>
                <span className="text-xl font-bold font-['Space_Grotesk'] text-lime-400 block">Jhelum HQ</span>
                <span className="text-emerald-300 mt-0.5 block">Head Office: Jhelum, Pakistan</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE OUR FRESH PRODUCE? (VALUE PROPOSITION) */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-widest text-emerald-800">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>Purity, Cold Chain &amp; Global Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
              Why Choose Our Fresh Produce?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We connect the agricultural heartland of Punjab directly to international wholesale food terminals and retail supermarket chains with zero delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VEGETABLE_VALUE_PROPS.map((prop, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200 hover:border-emerald-300 hover:bg-white hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800 text-lime-300 group-hover:bg-emerald-700 flex items-center justify-center transition-colors shadow-xs">
                    {idx === 0 && <Leaf className="w-6 h-6" />}
                    {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 2 && <ThermometerSnowflake className="w-6 h-6" />}
                    {idx === 3 && <Package className="w-6 h-6" />}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      {prop.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-['Space_Grotesk']">
                      {prop.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Fresh Harvest</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2.5 EXPORT CATALOG (PDF) SHOWCASE SECTION */}
      <section className="py-14 bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 text-white border-y border-emerald-800 relative overflow-hidden shadow-inner">
        {/* Glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-emerald-900/40 rounded-3xl p-6 sm:p-10 border border-emerald-700/60 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/20 border border-lime-400/40 text-xs font-bold uppercase tracking-wider text-lime-300">
                <FileText className="w-3.5 h-3.5 text-lime-400" />
                <span>Official B2B Export Dossier · 2026 Edition</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight leading-tight">
                Pakistani Seasonal Vegetables Export Catalog (PDF)
              </h2>

              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Download or preview our verified export specification dossier featuring <strong>9 in-season, high-demand Pakistani export vegetables</strong>: Fresh Whole White Garlic (NARC-G1), Fresh Ginger Rhizomes, Export Red Onions, Potatoes (Mozika, Asterix, Lady Rosetta), High-Pungency Green &amp; Red Chillies, Fresh Turnips, Sweet Red Carrots, Fresh Green Okra (Bhindi), and Bitter Gourd (Karela).
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
                <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/80">
                  <span className="text-[10px] text-lime-400 uppercase font-bold block">Origin:</span>
                  <span className="text-white font-medium">Punjab &amp; Sindh Belts</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/80">
                  <span className="text-[10px] text-lime-400 uppercase font-bold block">Incoterms:</span>
                  <span className="text-white font-medium">FOB / CIF Seaports</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/80">
                  <span className="text-[10px] text-lime-400 uppercase font-bold block">Packaging:</span>
                  <span className="text-white font-medium">Mesh, Cartons &amp; Crates</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/80">
                  <span className="text-[10px] text-lime-400 uppercase font-bold block">Exporter:</span>
                  <span className="text-white font-medium truncate block">CEO Nafees Arshad</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={handleOpenCatalog}
                className="px-6 py-4 rounded-2xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-extrabold text-sm shadow-xl hover:shadow-lime-500/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Eye className="w-4.5 h-4.5 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>View Interactive PDF Catalog</span>
              </button>

              <button
                onClick={handleDirectDownloadPdf}
                disabled={isDownloadingPdf}
                className="px-6 py-3.5 rounded-2xl bg-emerald-950/90 hover:bg-emerald-800 border-2 border-emerald-600 text-emerald-100 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Download className="w-4 h-4 text-lime-400" />
                <span>{isDownloadingPdf ? 'Generating PDF...' : 'Download Catalog PDF (.pdf)'}</span>
              </button>

              <div className="text-center text-[11px] text-emerald-300/80">
                Utility Home Exports · Head Office: Jhelum, Pakistan
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS GRID (CARD LAYOUT) */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
                <Layers className="w-4 h-4" />
                <span>Harvest &amp; Export Lines</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
                Featured Fresh Vegetables
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Graded to international export tolerances, packaged in ventilated seaworthy packaging, and available in flexible 20ft/40ft container programs.
              </p>
            </div>

            <button
              onClick={() => scrollToForm()}
              className="self-start md:self-end px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-2"
            >
              <span>Bulk Order Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEGETABLE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Card */}
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={prod.imageUrl}
                      alt={`${prod.name} (HS: ${prod.hsCode}) - Fresh Pakistani Export Produce - Utility Home Exports`}
                      width="600"
                      height="400"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-mono border border-slate-700">
                        HS: {prod.hsCode}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-800/90 text-white text-[11px] font-semibold">
                        {prod.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk'] group-hover:text-emerald-700 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-emerald-700 font-serif italic mt-0.5">
                        {prod.botanicalName}
                      </p>
                      <span className="text-[11px] text-stone-500 block mt-1">
                        Variety: {prod.variety}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {prod.description}
                    </p>

                    {/* Packaging Options */}
                    <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/70 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                        Packaging Options:
                      </span>
                      <ul className="text-xs text-slate-700 space-y-1">
                        {prod.packagingOptions.map((opt, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                            <span>{opt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Shelf Life & Storage strip */}
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-emerald-50/60 rounded-lg border border-emerald-100">
                        <span className="text-emerald-800 font-semibold block text-[10px] uppercase">
                          Shelf Life:
                        </span>
                        <span className="text-slate-800 font-medium">
                          {prod.shelfLife}
                        </span>
                      </div>
                      <div className="p-2 bg-emerald-50/60 rounded-lg border border-emerald-100">
                        <span className="text-emerald-800 font-semibold block text-[10px] uppercase">
                          Temp Set Point:
                        </span>
                        <span className="text-slate-800 font-medium">
                          {prod.storageTemp.split('/')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => scrollToForm(prod.name)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire Now for {prod.name.split('(')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EXPORT SPECIFICATIONS & QUALITY ASSURANCE TABLE */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Technical Export Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                Export Specifications &amp; Quality Assurance Table
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Precision logistics parameters, storage temperatures, and packaging standards for international customs clearance.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs self-start sm:self-auto">
              <button
                onClick={() => setTableFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  tableFilter === 'all' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Modes ({VEGETABLE_SPECS_TABLE.length})
              </button>
              <button
                onClick={() => setTableFilter('sea')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  tableFilter === 'sea' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Reefer Ocean
              </button>
              <button
                onClick={() => setTableFilter('air')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  tableFilter === 'air' ? 'bg-emerald-800 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Air Cargo
              </button>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-emerald-900 text-white uppercase tracking-wider font-semibold">
                    <th className="py-3.5 px-4">Product Name &amp; Botanical</th>
                    <th className="py-3.5 px-4">Origin / Harvest Belt</th>
                    <th className="py-3.5 px-4">Packaging Style</th>
                    <th className="py-3.5 px-4">Storage Temp (°C)</th>
                    <th className="py-3.5 px-4">Shipping Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white text-slate-700">
                  {filteredSpecs.map((row, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        <div>{row.name}</div>
                        <span className="text-[11px] text-emerald-700 font-serif italic">{row.botanical}</span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-600">
                        {row.origin}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        {row.packaging}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-emerald-800">
                        {row.storageTemp}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-slate-800 font-medium text-[11px]">
                          {row.shippingMode.toLowerCase().includes('air') ? (
                            <Plane className="w-3 h-3 text-sky-600 shrink-0" />
                          ) : (
                            <Ship className="w-3 h-3 text-emerald-700 shrink-0" />
                          )}
                          <span>{row.shippingMode}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 5. EXPORT PROCESS / HOW WE WORK (STEP-BY-STEP) */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              End-to-End Cold Chain Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
              Export Process: How We Work
            </h2>
            <p className="text-base text-slate-600">
              From contract farming harvest to destination sea/air port customs clearance in 4 transparent stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEGETABLE_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-['Space_Grotesk'] text-emerald-700">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      Stage {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Standard Operating Procedure</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INQUIRY / QUOTE REQUEST FORM (CTA SECTION) */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="bg-stone-50/70 border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs">
                
                {submittedId ? (
                  <div className="text-center py-10 space-y-5">
                    {/* User Success Notification */}
                    <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-semibold flex items-center justify-center gap-2 max-w-lg mx-auto shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                      <span>Thank you! Your inquiry has been sent successfully.</span>
                    </div>

                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                        Fresh Produce RFQ Transmitted via Formspree
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                        Inquiry Reference: {submittedId}
                      </h3>
                      <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2">
                        Thank you, <strong className="text-slate-800">{buyerName || companyName}</strong>. 
                        Your requirements for <strong>{selectedProduct}</strong> to <strong>{targetPort}</strong> have been forwarded directly to CEO <strong>{COMPANY_INFO.ceo}</strong> at Head Office: Jhelum, Pakistan. A confirmed freight quote and availability confirmation will be sent to <strong>{contactEmail}</strong> within 12 business hours.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                      <button
                        onClick={() => setSubmittedId(null)}
                        className="px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                      >
                        Submit Another Fresh Inquire
                      </button>
                      <button
                        onClick={handleOpenCatalog}
                        className="px-6 py-3 rounded-xl border-2 border-emerald-700 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4 text-emerald-700" />
                        <span>Download Product Catalog (PDF)</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    action={FORM_ENDPOINTS.inquiry}
                    method="POST"
                    onSubmit={handleSubmitInquiry}
                    className="space-y-6"
                  >
                    {/* Formspree Core Hidden Fields */}
                    <input type="hidden" name="product_category" value="Fresh Vegetables & Agro Produce" />
                    <input type="hidden" name="volume" value={`${requiredQuantity} ${quantityUnit}`} />
                    <input type="hidden" name="incoterm" value="CIF / FOB Port Qasim / Karachi" />
                    <input type="hidden" name="packaging" value="Export Standard Ventilated Packaging" />

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                        Direct B2B Fresh Procurement
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-['Space_Grotesk'] mt-0.5">
                        Request a Fresh Produce Quote
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in your target container specifications below for current sea freight and farm-gate commodity quotes.
                      </p>
                    </div>

                    {/* Form Fields Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name / Procurement Officer *
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          required
                          placeholder="e.g. Johnathan Miller"
                          value={buyerName}
                          onChange={(e) => setBuyerName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Importer Name *
                        </label>
                        <input
                          type="text"
                          name="company_name"
                          required
                          placeholder="e.g. EuroFresh Logistics BV"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Corporate Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="purchasing@company.com"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          name="whatsapp_phone"
                          placeholder="+31 10 1234567"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Country of Import *
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          placeholder="e.g. Netherlands, UAE, UK"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Target Discharge Sea / Air Port *
                        </label>
                        <select
                          name="destination_port"
                          value={targetPort}
                          onChange={(e) => setTargetPort(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                        >
                          {DESTINATION_PORTS.map((p) => (
                            <option key={p.name} value={p.name}>
                              {p.name} ({p.region})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Product Interest *
                        </label>
                        <select
                          name="product_variant"
                          value={selectedProduct}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                        >
                          {VEGETABLE_PRODUCTS.map((prod) => (
                            <option key={prod.id} value={prod.name}>
                              {prod.name} ({prod.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Required Quantity (Tons / Containers) *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            name="volume_qty"
                            min="1"
                            required
                            value={requiredQuantity}
                            onChange={(e) => setRequiredQuantity(e.target.value)}
                            className="w-1/2 px-3 py-2 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 font-semibold"
                          />
                          <select
                            name="volume_unit"
                            value={quantityUnit}
                            onChange={(e) => setQuantityUnit(e.target.value as any)}
                            className="w-1/2 px-2.5 py-2 text-xs border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 font-medium"
                          >
                            <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                            <option value="40ft Reefer Containers">40ft Reefers</option>
                            <option value="20ft Reefer Containers">20ft Reefers</option>
                            <option value="Air Cargo Pallets">Air Pallets</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Special Packaging, Sizing or MRL Requirements
                      </label>
                      <textarea
                        rows={3}
                        name="special_instructions"
                        placeholder="Specify calibers (e.g., 55mm+ Onions, Lady Rosetta potatoes), packaging (e.g., 10kg mesh vs carton), delivery timeframe, or phytosanitary standards..."
                        value={specialRequirements}
                        onChange={(e) => setSpecialRequirements(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      />
                    </div>

                    {/* Submission Error Banner */}
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold">Submission Notice</p>
                          <p className="mt-0.5">{submitError}</p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Transmitting to Formspree &amp; Cold Chain Desk...</span>
                      ) : (
                        <>
                          <span>Transmit Fresh Produce RFQ</span>
                          <Send className="w-4 h-4 text-lime-400" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-stone-500 text-center">
                      Reviewed directly by CEO Nafees Arshad. Confirmed farm-gate rates &amp; reefer freight locked upon Proforma Invoice.
                    </p>
                  </form>
                )}

              </div>
            </div>

            {/* Right Information & Contact Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Agro Desk Card */}
              <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-7 border border-emerald-900 shadow-xl space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-lime-400 block">
                    Agro Export Desk
                  </span>
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mt-0.5">
                    Utility Home Exports
                  </h3>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    Fresh Produce &amp; Horticultural Division
                  </p>
                </div>

                <div className="space-y-4 text-xs text-emerald-100">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-900/60 border border-emerald-800/80">
                    <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Contact Person / CEO:</span>
                      <span className="text-lime-300 font-bold text-sm">{COMPANY_INFO.ceo}</span>
                      <a href={`mailto:${COMPANY_INFO.ceoEmail}`} className="text-emerald-200 hover:text-white text-[11px] block mt-0.5 underline">
                        {COMPANY_INFO.ceoEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Location / Head Office:</span>
                      <span>{COMPANY_INFO.headquarters}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Official Business Email:</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-lime-300 hover:text-white underline font-medium">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">Phone / WhatsApp Line:</span>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lime-300 hover:text-white font-bold"
                      >
                        {COMPANY_INFO.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-900 text-[11px] text-emerald-300">
                  <span className="block font-semibold text-white">Cold Storage Facilities:</span>
                  <span>Okara, Sahiwal, and Jhelum Agro Depots</span>
                </div>
              </div>

              {/* Quality Guarantee Card */}
              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-2xs space-y-3 text-xs">
                <h4 className="font-bold text-slate-900 font-['Space_Grotesk'] flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>Phytosanitary &amp; Cold Chain Standards</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Every vegetable consignment is inspected by the Department of Plant Protection (Ministry of National Food Security) with original Phytosanitary certificates and cold chain data recorders included in the shipping dossier.
                </p>
                <div className="pt-2 border-t border-stone-100 text-[11px] text-slate-500 space-y-1">
                  <div>· Pre-cooling within 4 hours of harvest</div>
                  <div>· Continuous USB temperature data logging</div>
                  <div>· Export packaging with shock absorbers</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PRODUCT CATALOG (PDF) PREVIEW & DOWNLOAD MODAL */}
      <VegetablesCatalogModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
        onOpenQuickRfq={(prod) => scrollToForm(prod)}
      />

    </div>
  );
};
