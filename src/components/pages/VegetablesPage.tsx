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
  Filter
} from 'lucide-react';
import { VEGETABLE_PRODUCTS, VEGETABLE_SPECS_TABLE, VEGETABLE_STEPS, VEGETABLE_VALUE_PROPS } from '../../data/vegetables';
import { DESTINATION_PORTS } from '../../data/catalog';
import { COMPANY_INFO } from '../../data/company';
import { VegetableProduct, PageView } from '../../types';

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
  const [submittedId, setSubmittedId] = useState<string | null>(null);

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

  const handleDownloadCatalog = () => {
    const catalogText = `
================================================================================
UTILITY HOME EXPORTS - FRESH VEGETABLES EXPORT CATALOG & SPECIFICATIONS
================================================================================
Exporter           : ${COMPANY_INFO.name} / ${COMPANY_INFO.legalName}
CEO & Leadership   : ${COMPANY_INFO.ceo}
Headquarters       : ${COMPANY_INFO.headquarters}
Direct Email       : ${COMPANY_INFO.email}
Phone / WhatsApp   : ${COMPANY_INFO.whatsapp}
Agricultural Belts : Punjab River Basins & Gujranwala Agro Corridors, Pakistan
Export Corridors   : Reefer Sea Freight via Karachi Port (PKKHI) & Air Cargo Hubs

FEATURED COMMODITIES:
--------------------------------------------------------------------------------
1. Red & Yellow Onions (Allium cepa)
   - Varieties: Sindh Red, Swat Golden Yellow & Nashik Hybrid
   - Calibers: 40-50mm, 50-60mm, 60-80mm+
   - Packaging: 5kg, 10kg, 25kg, 50kg Red/Yellow Leno Mesh Sacks & Corrugated Boxes
   - Storage Temp: 0°C to +4°C (65-70% RH, Dry & Ventilated)
   - Transit: 40ft High Cube Reefer (28-29 MT)

2. Fresh Potatoes (Solanum tuberosum)
   - Varieties: Mozika, Santana, Lady Rosetta, Dutch Table & Chipping Grade
   - Calibers: 35-45mm (Baby), 45-55mm, 55-80mm (Jumbo)
   - Packaging: 10kg, 25kg, 50kg Heavy-Duty PP Mesh Sacks & Pallet Bins
   - Storage Temp: +3°C to +8°C (85-90% RH, Sprout Inhibited)
   - Transit: 40ft High Cube Reefer (+4°C Set Point, 28-30 MT)

3. Green Chilies & Capsicum (Capsicum annuum)
   - Varieties: G4 Hot Chili, Bullet Chili & Triple-Lobe Bell Peppers
   - Packaging: 3kg, 4kg, 5kg Ventilated Corrugated Export Master Cartons
   - Storage Temp: +7°C to +10°C (90-95% RH)
   - Transit: Commercial Air Cargo & Expedited Cold-Chain Maritime

4. Fresh Garlic & Ginger (Allium sativum & Zingiber officinale)
   - Varieties: NARC-G1 Giant White Garlic (55-75mm+) & Bold Clean Ginger
   - Packaging: 5kg, 10kg, 20kg Leno Mesh Bags & Master Boxes
   - Storage Temp: Garlic -1°C to 0°C | Ginger +12°C to +14°C

5. Seasonal Fresh Produce (Tomatoes, Okra, Brinjal)
   - Varieties: Roma / Beef Tomatoes, Tender Green Okra, Long Purple Eggplant
   - Packaging: 4kg, 5kg, 6kg Ventilated Telescopic Corrugated Boxes
   - Transit: Direct Air Freight & Fast Reefer Containers

QUALITY ASSURANCE & STANDARDS:
--------------------------------------------------------------------------------
- 100% Pre-Shipment DPP (Department of Plant Protection) Phytosanitary Inspection
- GlobalGAP compliant certified grower networks
- Continuous temperature data logger recording in reefers
- MRL (Maximum Residue Limits) lab tested to EU, UK, and GCC standards
- Fast-track ocean bookings with Maersk, MSC, CMA CGM, Hapag-Lloyd

COMMERCIAL TERMS:
- Incoterms: FOB Karachi / CIF Worldwide Destination Ports / CFR / Air CFR
- Lead Time: Harvest & packhouse loading within 24-48 hours from order confirmation
================================================================================
    `.trim();

    const blob = new Blob([catalogText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `UtilityHome-Fresh-Vegetables-Export-Catalog.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const inquiryId = `VEG-UH-${Date.now().toString().slice(-6)}`;
      const payload = {
        inquiryId,
        timestamp: new Date().toLocaleString(),
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

      setIsSubmitting(false);
      setSubmittedId(inquiryId);
    }, 700);
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
                className="px-6 py-3.5 rounded-xl bg-lime-600 hover:bg-lime-500 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-lime-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Fresh Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadCatalog}
                className="px-5 py-3.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-800 border border-emerald-700 text-emerald-100 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
              >
                <Download className="w-4 h-4 text-lime-400" />
                <span>Download Product Catalog (.txt)</span>
              </button>
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
                <span className="text-2xl font-bold font-['Space_Grotesk'] text-lime-400 block">Gujranwala</span>
                <span className="text-emerald-300 mt-0.5 block">Agro Hub Headquarters</span>
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
                      alt={prod.name}
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
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                        Fresh Produce RFQ Transmitted
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                        Inquiry Reference: {submittedId}
                      </h3>
                      <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2">
                        Thank you, <strong className="text-slate-800">{buyerName || companyName}</strong>. 
                        Your requirements for <strong>{selectedProduct}</strong> to <strong>{targetPort}</strong> have been forwarded directly to CEO <strong>{COMPANY_INFO.ceo}</strong> in Gujranwala, Punjab. A confirmed freight quote and availability confirmation will be sent to <strong>{contactEmail}</strong> within 12 business hours.
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
                        onClick={handleDownloadCatalog}
                        className="px-6 py-3 rounded-xl border border-stone-300 hover:bg-stone-100 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Download Full Product Specs
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitInquiry} className="space-y-6">
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
                            min="1"
                            required
                            value={requiredQuantity}
                            onChange={(e) => setRequiredQuantity(e.target.value)}
                            className="w-1/2 px-3 py-2 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 font-semibold"
                          />
                          <select
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
                        placeholder="Specify calibers (e.g., 55mm+ Onions, Lady Rosetta potatoes), packaging (e.g., 10kg mesh vs carton), delivery timeframe, or phytosanitary standards..."
                        value={specialRequirements}
                        onChange={(e) => setSpecialRequirements(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Calculating Cold Chain Logistics &amp; Transmitting...</span>
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
                      <span className="text-[11px] text-emerald-300 block mt-0.5">{COMPANY_INFO.designation}</span>
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
                  <span>Okara, Sahiwal, and Gujranwala Agro Depots</span>
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

    </div>
  );
};
