import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Check, 
  Sparkles, 
  Stethoscope, 
  Layers, 
  Phone, 
  Mail, 
  Send,
  ExternalLink,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import { SURGICAL_PRODUCTS, SURGICAL_CERTIFICATIONS, SURGICAL_QUALITY_STEPS } from '../../data/surgical';
import { COMPANY_INFO } from '../../data/company';
import { PageView, SurgicalProduct } from '../../types';

interface SurgicalPageProps {
  onNavigate: (page: PageView, categorySlug?: string) => void;
  onOpenQuickRfq?: (productName: string, port?: string, volume?: string) => void;
}

export const SurgicalPage: React.FC<SurgicalPageProps> = ({
  onNavigate,
  onOpenQuickRfq
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<SurgicalProduct | null>(null);

  // Quote form state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneWhatsApp: '',
    country: '',
    destinationPort: '',
    productInterest: 'All Surgical Categories (General Surgery Sets)',
    estimatedQuantity: '100 - 500 Pieces',
    packagingRequirement: 'Individual Medical Pouch with Barcode',
    customBranding: true,
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = [
    { id: 'all', label: 'All Instruments' },
    { id: 'Cutting & Dissection', label: 'Scissors & Cutting' },
    { id: 'Hemostasis & Clamping', label: 'Hemostatic Clamps' },
    { id: 'Incision & Excision', label: 'Scalpel Handles' },
    { id: 'Suturing & Wound Closure', label: 'Needle Holders' },
    { id: 'Exposure & Retraction', label: 'Retractors & Specula' },
    { id: 'Tissue Grasping & Handling', label: 'Forceps & Tweezers' },
    { id: 'Dental & Oral Surgery', label: 'Dental Instruments' },
    { id: 'Orthopedic & Trauma Surgery', label: 'Orthopedic Tools' },
    { id: 'Microsurgery & Cardiovascular', label: 'Microsurgery' }
  ];

  const filteredProducts = SURGICAL_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategoryFilter === 'all' || prod.category === selectedCategoryFilter;
    const matchesSearch = prod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          prod.material.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquireProduct = (product: SurgicalProduct) => {
    setFormData((prev) => ({
      ...prev,
      productInterest: product.title,
      message: `We would like to request technical specifications, FOB/CIF pricing, and MOQ lead times for: ${product.title} (${product.material}).`
    }));
    
    // Scroll smoothly to quote section
    const el = document.getElementById('surgical-quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        businessEmail: '',
        phoneWhatsApp: '',
        country: '',
        destinationPort: '',
        productInterest: 'All Surgical Categories (General Surgery Sets)',
        estimatedQuantity: '100 - 500 Pieces',
        packagingRequirement: 'Individual Medical Pouch with Barcode',
        customBranding: true,
        message: ''
      });
    }, 6000);
  };

  const handleDownloadCatalog = () => {
    const link = document.createElement('a');
    link.href = '/utility-home-surgical-catalog.pdf';
    link.download = 'utility-home-surgical-catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-teal-900/40 pt-8 pb-20 md:py-24">
        {/* Background glow and subtle surgical grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        {/* Hero Background Image with Medical Dark Overlay */}
        <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
          {/* IMAGE SOURCE: Local commercial hero photograph of sterile surgical instruments: /images/surgical_hero_banner.jpg */}
          <img 
            src="/images/surgical_hero_banner.jpg" 
            alt="Surgical Instruments Hero Background" 
            className="w-full h-full object-cover object-center filter blur-[1px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950/80 text-teal-300 border border-teal-700/60 shadow-xs">
                  <i className="fa-solid fa-certificate text-teal-400 text-xs"></i>
                  <span>ISO 13485:2016 &amp; CE MDR Certified</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700">
                  <span className="font-urdu text-sm text-amber-400">یوٹیلٹی حوم</span>
                  <span className="text-slate-400">· Utility Home Exports</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">
                  HS CODE 9018.90
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.12]">
                Premium Export-Quality <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400">
                  Surgical &amp; Medical Instruments
                </span>
              </h1>

              {/* Sub-headline / Introduction */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Manufactured in Pakistan's historic medical engineering cluster. Crafted from medical-grade AISI 420/316L Japanese and German stainless steels with precision tungsten carbide inserts. 100% passivation-tested, autoclavable at 134°C, and supplied to global hospitals, distributors, and surgical clinics.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleDownloadCatalog}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-950 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Surgical Catalog (PDF)</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('surgical-quote-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-teal-300 hover:text-white font-semibold text-sm border border-teal-800/60 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>Request Wholesale Quotation</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-t border-slate-800/80">
                <div className="space-y-1">
                  <span className="text-slate-400 block text-[11px]">Material Alloy</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <i className="fa-solid fa-check text-teal-400 text-[10px]"></i> AISI 420 / 316L
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 block text-[11px]">Autoclave Safe</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <i className="fa-solid fa-check text-teal-400 text-[10px]"></i> 134°C / 273°F
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 block text-[11px]">Passivation</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <i className="fa-solid fa-check text-teal-400 text-[10px]"></i> ASTM A967 Tested
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 block text-[11px]">Export Markets</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <i className="fa-solid fa-check text-teal-400 text-[10px]"></i> 50+ Countries
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Card with High-Tech Medical Accents */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Neon blur border behind card */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500/30 to-cyan-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-teal-700/50 shadow-2xl">
                  {/* Image Header with Clinical Overlay */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                    {/* IMAGE SOURCE: Studio shot of surgical instruments on operating table: /images/surgical_hero_banner.jpg */}
                    <img 
                      src="/images/surgical_hero_banner.jpg" 
                      alt="Precision Medical Grade Surgical Instruments" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    
                    {/* Top Status Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded bg-slate-950/90 text-teal-300 font-mono text-[11px] border border-teal-600/40">
                        SURGICAL STEEL DIN 1.4021
                      </span>
                      <span className="px-2.5 py-1 rounded bg-teal-600/90 text-white font-semibold text-[11px]">
                        HRC 54-56
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                      <span className="flex items-center gap-1.5 font-medium">
                        <i className="fa-solid fa-fingerprint text-teal-400"></i> Laser UDI Serialized
                      </span>
                      <span className="text-teal-400 font-mono text-[11px]">CE Class I &amp; IIa</span>
                    </div>
                  </div>

                  {/* Card Content Features */}
                  <div className="p-6 space-y-4 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                          Hospital &amp; Distributor Supply
                        </h3>
                        <p className="text-xs text-slate-400">
                          Direct manufacturing batches shipped via Air Cargo &amp; Ocean FCL
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-600/40 flex items-center justify-center text-teal-400 shrink-0">
                        <i className="fa-solid fa-hospital text-lg"></i>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400">Standard Lead Time</span>
                        <span className="font-semibold text-white">10 – 14 Days Dispatch</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400">Custom Packaging</span>
                        <span className="font-semibold text-teal-400">OEM Laser Marking &amp; Boxes</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <span className="text-slate-400">Compliance Documentation</span>
                        <span className="font-semibold text-white">Full CoC, MTR &amp; CE DoC</span>
                      </div>
                    </div>

                    <button
                      onClick={handleDownloadCatalog}
                      className="w-full py-2.5 rounded-lg bg-teal-900/40 hover:bg-teal-900/70 text-teal-300 text-xs font-bold border border-teal-700/50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <i className="fa-solid fa-file-pdf text-red-400"></i>
                      <span>Download Technical Catalog (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRODUCT FILTER & SEARCH BAR */}
      <section className="sticky top-20 z-30 bg-slate-900/95 backdrop-blur-md border-b border-teal-900/30 py-3.5 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategoryFilter === cat.id
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search instruments, alloys..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>

        </div>
      </section>

      {/* 3. PRODUCT GRID LAYOUT (8 TO 10 DISTINCT PRODUCTS) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-1.5">
              <i className="fa-solid fa-shapes"></i>
              <span>Surgical Instruments Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
              Featured Export Product Lines
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Showing {filteredProducts.length} export-grade surgical instruments. Every unit undergoes multi-stage metallurgical hardness testing and passivation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">Need custom set packaging?</span>
            <button
              onClick={() => {
                const el = document.getElementById('surgical-quote-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-teal-950 text-teal-300 border border-teal-700/60 text-xs font-bold hover:bg-teal-900/60 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Build Custom Surgical Set</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* CSS GRID OF SURGICAL PRODUCT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-teal-600/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-teal-950/40 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Clear Source Comments */}
                {/* 
                  IMAGE SOURCE COMMENT: 
                  Product: ${product.title}
                  Path: ${product.imageUrl}
                  Note: ${product.imageSourceComment}
                */}
                <div className="relative h-60 overflow-hidden bg-slate-950 flex items-center justify-center p-3 border-b border-slate-800/80">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category & HS Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-slate-950/90 backdrop-blur-md text-slate-200 text-[10px] font-mono border border-slate-700/70">
                      HS: {product.hsCode}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-teal-950/90 text-teal-300 text-[10px] font-semibold border border-teal-800/60">
                      {product.category}
                    </span>
                  </div>

                  {/* Packaging Detail Badge (Requested Feature) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/95 text-amber-300 text-[11px] font-semibold border border-amber-600/30 flex items-center gap-1.5 shadow-sm">
                      <i className="fa-solid fa-box-open text-[10px] text-amber-400"></i>
                      <span>{product.packagingBadge}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-400 text-[10px] font-mono border border-slate-800">
                      {product.hardness.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Title & Subcategory */}
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] group-hover:text-teal-300 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Technical Specs Tags (Requested Feature) */}
                  <div className="space-y-2 pt-1 border-t border-slate-800/80">
                    <div className="flex items-start gap-2 text-xs">
                      <span className="text-slate-400 font-medium shrink-0 w-20">Material:</span>
                      <span className="text-teal-300 font-semibold">{product.material}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <span className="text-slate-400 font-medium shrink-0 w-20">Finish:</span>
                      <span className="text-slate-300">{product.finish}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <span className="text-slate-400 font-medium shrink-0 w-20">Autoclave:</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <i className="fa-solid fa-temperature-arrow-up text-[11px]"></i>
                        <span>{product.autoclavable}</span>
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <span className="text-slate-400 font-medium shrink-0 w-20">Standards:</span>
                      <div className="flex flex-wrap gap-1">
                        {product.certifications.map((cert, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Feature Specs Pill List */}
                  <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Engineering Highlights:
                    </span>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {product.technicalSpecs.slice(0, 2).map((spec, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                          <span><strong className="text-slate-200">{spec.label}:</strong> {spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Card Footer: Inquire Now Button & Spec Sheet trigger */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => handleInquireProduct(product)}
                  className="w-full py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-teal-500/20"
                >
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                  <span>Inquire Now for {product.title.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="w-full py-1.5 text-center text-xs text-slate-400 hover:text-teal-300 transition-colors font-medium flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>View Complete Engineering Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No instruments found matching your search. Please try a different query or browse all categories.</p>
            <button
              onClick={() => { setSelectedCategoryFilter('all'); setSearchTerm(''); }}
              className="mt-4 px-4 py-2 rounded-lg bg-teal-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. EXPORT & QUALITY CERTIFICATION SECTION */}
      <section className="py-20 bg-slate-900 border-y border-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950 text-teal-400 border border-teal-700/60">
              <i className="fa-solid fa-shield-virus"></i>
              <span>Global Medical Device Compliance</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk']">
              Export Certifications &amp; Quality Assurance
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every instrument manufactured and exported by Utility Home undergoes validated quality control workflows meeting European Union MDR and American FDA technical specifications.
            </p>
          </div>

          {/* Certifications 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SURGICAL_CERTIFICATIONS.map((cert, i) => (
              <div 
                key={i}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-teal-600/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-950/90 border border-teal-700/40 flex items-center justify-center text-teal-400">
                    <i className={`${cert.icon} text-xl`}></i>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block">
                      {cert.badge}
                    </span>
                    <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mt-0.5">
                      {cert.code}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {cert.authority}
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Audited &amp; Verified for Export</span>
                </div>
              </div>
            ))}
          </div>

          {/* 6-Step Manufacturing Workflow */}
          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1">
                From Raw Billet to Sterile O.R. Ready
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
                Precision Quality Control Protocols
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SURGICAL_QUALITY_STEPS.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-teal-500/80 font-mono">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 text-xs">
                      <i className={step.icon}></i>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. PROMINENT DOWNLOAD CATALOG SECTION (PDF BUTTON & PREVIEW) */}
      <section className="py-16 bg-gradient-to-r from-teal-950 via-slate-900 to-cyan-950 border-b border-teal-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-950/90 rounded-2xl p-8 md:p-12 border border-teal-700/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950 text-teal-300 text-xs font-mono border border-teal-700/50">
                <i className="fa-solid fa-file-pdf text-red-400"></i>
                <span>utility-home-surgical-catalog.pdf · 2026 Edition</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
                Download the Complete 2026 B2B Surgical Instruments Catalog
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Includes full technical blueprints, dimensional schematics, steel alloy breakdown (DIN 1.4021 &amp; ASTM F899), ISO 13485 audit certificates, and bulk packaging specifications for 150+ hospital instruments.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-400" /> Instant PDF Download
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-400" /> Full OEM Specification Guide
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-400" /> FOB / CIF Price Tiers Included
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <a
                href="/utility-home-surgical-catalog.pdf"
                download="utility-home-surgical-catalog.pdf"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-teal-500/25 transition-all flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>Download Surgical Catalog (PDF)</span>
              </a>
              <span className="text-[11px] text-center text-slate-400">
                Direct file: utility-home-surgical-catalog.pdf (No signup required)
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. B2B INQUIRY & QUOTE REQUEST FORM */}
      <section id="surgical-quote-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact & Export Desk Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">
                Global Export Procurement
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk']">
                Request an Export Quotation
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Connect directly with the CEO &amp; Export Desk for volume hospital contracts, distributor terms, and custom laser-etched OEM manufacturing.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-teal-950 border border-teal-700/50 flex items-center justify-center text-teal-400 shrink-0">
                  <i className="fa-solid fa-user-tie text-base"></i>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Export Director &amp; CEO</span>
                  <span className="text-sm font-bold text-white">Nafees Arshad</span>
                  <span className="text-[11px] text-teal-400 block">Head of International Trade</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct WhatsApp &amp; Mobile</span>
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-bold text-emerald-400 hover:underline"
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                  <span className="text-[10px] text-slate-500 block">Available 24/7 for International RFQs</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Procurement &amp; Tender Email</span>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-cyan-400 hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <span className="text-[10px] text-slate-500 block">Guaranteed response within 4 hours</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                  <i className="fa-solid fa-location-dot text-base"></i>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Manufacturing &amp; Export Office</span>
                  <span className="text-xs font-semibold text-white">
                    Gujranwala &amp; Sialkot Surgical Industrial Zone, Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* In-stock note */}
            <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-800/40 text-xs text-teal-300 space-y-1">
              <span className="font-bold block flex items-center gap-1.5">
                <i className="fa-solid fa-plane-departure text-teal-400"></i> Worldwide Air &amp; Sea Logistics
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Expedited delivery via DHL/FedEx for evaluation samples (3–5 business days). Bulk commercial consignments dispatched via Lahore/Islamabad International Airport and Port Qasim / Karachi Port.
              </p>
            </div>
          </div>

          {/* Right Column: Clean B2B Quotation Form */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-2">
              Surgical Quote Specification Sheet
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Complete the parameters below to receive our formal Proforma Invoice and technical datasheet.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-teal-950/40 rounded-xl border border-teal-700/60 p-6 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center mx-auto text-2xl font-bold">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Quotation Request Received!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you. Our Head of Global Exports, <strong>Nafees Arshad</strong>, has received your specifications. Our export desk will dispatch our CIF quotation and compliance dossiers within 4 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-teal-400 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Thomas Reed / Purchasing Dir."
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Company / Hospital / Clinic Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Health Logistics Ltd"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      placeholder="procurement@hospital.com"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      WhatsApp / Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneWhatsApp}
                      onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Target Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Germany, UK, USA, UAE"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Destination Airport / Sea Port
                    </label>
                    <input
                      type="text"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      placeholder="e.g. Frankfurt Airport / Hamburg"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Instrument Category of Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="All Surgical Categories (General Surgery Sets)">All Surgical Categories (General Sets)</option>
                      {SURGICAL_PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.title}>
                          {prod.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Required Quantity / Order Volume
                    </label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="Sample Evaluation Set (10-25 Pieces)">Sample Evaluation Set (10-25 Pieces)</option>
                      <option value="100 - 500 Pieces">100 - 500 Pieces</option>
                      <option value="500 - 2,000 Pieces">500 - 2,000 Pieces</option>
                      <option value="5,000+ Pieces (Contract Tender)">5,000+ Pieces (Contract Tender)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Packaging &amp; Presentation Specification
                  </label>
                  <select
                    value={formData.packagingRequirement}
                    onChange={(e) => setFormData({ ...formData, packagingRequirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="Individual Medical Pouch with Barcode">Individual Medical Pouch with Barcode</option>
                    <option value="Custom Velvet Presentation Box with OEM Gold Foil">Custom Velvet Presentation Box with OEM Gold Foil</option>
                    <option value="Export Blister Packing (Euro-slot Hang Tab)">Export Blister Packing (Euro-slot Hang Tab)</option>
                    <option value="Stainless Wire Mesh Autoclave DIN Cassette">Stainless Wire Mesh Autoclave DIN Cassette</option>
                    <option value="Bulk Non-Sterile Master Cartons (Lowest Cost)">Bulk Non-Sterile Master Cartons (Lowest Cost)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Specific Dimensions, Tooth Patterns or Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide specific model numbers, jaw curvature preferences, or laser logo specifications..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Official RFQ to Utility Home Exports</span>
                  </button>
                  <span className="text-[10px] text-center text-slate-500 block mt-2">
                    Directly sent to CEO Nafees Arshad (Hajinafees201@gmail.com). Privacy guaranteed.
                  </span>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 7. MODAL POPUP FOR DETAILED PRODUCT SPECIFICATION */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-teal-700/60 rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative my-8">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-xl bg-slate-950 border border-slate-800 p-2 shrink-0">
                <img 
                  src={activeModalProduct.imageUrl} 
                  alt={activeModalProduct.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono text-teal-400 px-2 py-0.5 rounded bg-teal-950 border border-teal-800/50">
                  HS: {activeModalProduct.hsCode}
                </span>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mt-1">
                  {activeModalProduct.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Category: {activeModalProduct.category} · {activeModalProduct.hardness}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activeModalProduct.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Technical Blueprint &amp; Metallurgy
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeModalProduct.technicalSpecs.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">{spec.label}</span>
                    <span className="text-slate-200 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Export Packaging Configurations
              </h4>
              <ul className="text-xs text-slate-300 space-y-1">
                {activeModalProduct.packagingOptions.map((opt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400 text-[10px]"></i>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  const prod = activeModalProduct;
                  setActiveModalProduct(null);
                  handleInquireProduct(prod);
                }}
                className="flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md"
              >
                Inquire for This Instrument
              </button>
              <button
                onClick={handleDownloadCatalog}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>PDF Sheet</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
