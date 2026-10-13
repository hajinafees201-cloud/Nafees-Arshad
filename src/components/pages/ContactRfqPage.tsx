import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Download, 
  Ship, 
  Package, 
  Clock, 
  Globe2, 
  FileText, 
  ShieldCheck, 
  HelpCircle,
  Check
} from 'lucide-react';
import { DESTINATION_PORTS } from '../../data/catalog';
import { COMPANY_INFO } from '../../data/company';

interface ContactRfqPageProps {
  initialProduct?: string;
  initialPort?: string;
  initialVolume?: string;
}

export const ContactRfqPage: React.FC<ContactRfqPageProps> = ({
  initialProduct = '',
  initialPort = '',
  initialVolume = ''
}) => {
  const [selectedVariants, setSelectedVariants] = useState<string[]>(
    initialProduct ? [initialProduct] : ['Edible Himalayan Pink Salt (Fine Table 0.5-1.0mm)']
  );
  const [volume, setVolume] = useState<string>(initialVolume ? initialVolume.replace(/[^0-9]/g, '') || '25' : '25');
  const [volumeUnit, setVolumeUnit] = useState<string>('Metric Tons (MT)');
  const [incoterm, setIncoterm] = useState<'FOB' | 'CIF' | 'CFR' | 'EXW'>('CIF');
  const [destinationPort, setDestinationPort] = useState<string>(
    initialPort || DESTINATION_PORTS[0].name
  );
  const [packagingPreference, setPackagingPreference] = useState<string>('25kg Multi-Wall PP Bags with PE Liner');
  const [timeline, setTimeline] = useState<string>('Within 30 Days (Standard Maritime)');
  const [sampleRequired, setSampleRequired] = useState<boolean>(false);
  const [oemBrandingRequired, setOemBrandingRequired] = useState<boolean>(false);
  
  // Buyer fields
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [businessEmail, setBusinessEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRfq, setSubmittedRfq] = useState<{ id: string; timestamp: string } | null>(null);

  // Sync if initial props change
  useEffect(() => {
    if (initialProduct && !selectedVariants.includes(initialProduct)) {
      setSelectedVariants([initialProduct]);
    }
    if (initialPort) {
      setDestinationPort(initialPort);
    }
  }, [initialProduct, initialPort]);

  const toggleVariant = (name: string) => {
    if (selectedVariants.includes(name)) {
      if (selectedVariants.length > 1) {
        setSelectedVariants(selectedVariants.filter((v) => v !== name));
      }
    } else {
      setSelectedVariants([...selectedVariants, name]);
    }
  };

  const selectedPortObj = DESTINATION_PORTS.find((p) => p.name === destinationPort) || DESTINATION_PORTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const rfqId = `RFQ-UH-${Date.now().toString().slice(-6)}`;
      const timestamp = new Date().toLocaleString();

      const rfqRecord = {
        rfqId,
        timestamp,
        buyer: { fullName, companyName, businessEmail, phoneNumber, country },
        specs: {
          selectedVariants,
          volume: `${volume} ${volumeUnit}`,
          incoterm,
          destinationPort,
          packagingPreference,
          timeline,
          sampleRequired,
          oemBrandingRequired,
          notes
        }
      };

      try {
        const stored = JSON.parse(localStorage.getItem('utility_home_rfqs') || '[]');
        stored.unshift(rfqRecord);
        localStorage.setItem('utility_home_rfqs', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setSubmittedRfq({ id: rfqId, timestamp });
    }, 700);
  };

  const handleDownloadRfqSummary = () => {
    if (!submittedRfq) return;

    const summaryText = `
================================================================================
UTILITY HOME EXPORTS - OFFICIAL REQUEST FOR QUOTATION (RFQ)
================================================================================
Reference Number   : ${submittedRfq.id}
Date Generated     : ${submittedRfq.timestamp}
Company / Exporter : ${COMPANY_INFO.name} / ${COMPANY_INFO.legalName}
Contact Person/CEO : ${COMPANY_INFO.ceo}
Location / Address : ${COMPANY_INFO.headquarters}
Corporate Email    : ${COMPANY_INFO.email}
Phone / WhatsApp   : ${COMPANY_INFO.whatsapp}
Origin Loading     : Port Qasim (PKBQM) / Karachi Port (PKKHI), Pakistan

1. BUYER & IMPORTER DETAILS:
--------------------------------------------------------------------------------
Contact Name       : ${fullName || 'Procurement Executive'}
Company Name       : ${companyName || 'Importing Enterprise'}
Country            : ${country || 'N/A'}
Corporate Email    : ${businessEmail}
Phone / WhatsApp   : ${phoneNumber || 'N/A'}

2. PRODUCT SPECIFICATIONS & REQUIRED COMMODITIES:
--------------------------------------------------------------------------------
Selected Variants  :
${selectedVariants.map((v, i) => `  ${i + 1}. ${v}`).join('\n')}

Order Volume       : ${volume} ${volumeUnit}
Packaging Choice   : ${packagingPreference}
OEM / Private Label: ${oemBrandingRequired ? 'YES (Custom Branded Pouches/Cartons Required)' : 'Standard Utility Home Export Packaging'}
Pre-Shipment Sample: ${sampleRequired ? 'YES (Courier Sample Kit Requested)' : 'Standard Production Batch'}

3. MARITIME LOGISTICS & INCOTERMS:
--------------------------------------------------------------------------------
Target Incoterm    : ${incoterm}
Port of Discharge  : ${destinationPort} (${selectedPortObj.region})
Estimated Transit  : ${selectedPortObj.transitDays}
Shipping Timeline  : ${timeline}
Loading Port       : Karachi Port / Port Qasim, Pakistan

4. BUYER SPECIAL INSTRUCTIONS:
--------------------------------------------------------------------------------
${notes || 'Standard seaworthy containerized cargo with pallet shrink wrap and desiccant bags.'}

================================================================================
This inquiry has been logged into the Utility Home B2B Trading Engine.
An official Proforma Invoice (PI) and freight confirmation will be dispatched
to ${businessEmail} within 12–24 business hours.
================================================================================
    `.trim();

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${submittedRfq.id}-UtilityHome-Official-RFQ.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Commercial Export Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Request for Quotation (RFQ) &amp; Contact
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Submit your container requirements for immediate FOB Karachi or CIF destination port pricing. Our trade executives provide transparent Proforma Invoices within 12–24 business hours.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Inquiry Form Column */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              
              {submittedRfq ? (
                /* Success Confirmation */
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-1">
                      Inquiry Dispatched Successfully
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                      RFQ Reference: {submittedRfq.id}
                    </h2>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto mt-2">
                      Thank you, <strong className="text-slate-800">{fullName || companyName}</strong>. 
                      Your inquiry has been received directly by our export desk led by CEO <strong>{COMPANY_INFO.ceo}</strong> in Gujranwala, Punjab, Pakistan. We are calculating current vessel rates to <strong>{destinationPort}</strong> under <strong>{incoterm}</strong> terms.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto text-left text-xs space-y-2.5">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Volume &amp; Commodity:</span>
                      <span className="font-semibold text-slate-900">{volume} {volumeUnit}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Incoterm &amp; Port:</span>
                      <span className="font-semibold text-slate-900">{incoterm} — {destinationPort}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Packaging:</span>
                      <span className="font-semibold text-slate-900">{packagingPreference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Response Contact:</span>
                      <span className="font-semibold text-slate-900">{businessEmail}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <button
                      type="button"
                      onClick={handleDownloadRfqSummary}
                      className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download RFQ Summary (.txt)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmittedRfq(null)}
                      className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step 1: Product Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold font-['Space_Grotesk'] text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">1</span>
                        <span>Product Requirement &amp; Variants</span>
                      </h3>
                      <span className="text-xs text-slate-500">Select one or more items</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Edible Himalayan Pink Salt (Fine Table 0.5-1.0mm)',
                        'Edible Himalayan Pink Salt (Coarse Grinder 2.5-5.0mm)',
                        'Handcrafted Himalayan Salt Lamps (2-5kg Natural Rough)',
                        'Geometric Himalayan Salt Lamps & Fire Bowls',
                        'Animal & Livestock Rock Salt Lick Blocks (2.5-5kg)',
                        'Therapeutic Spa & Bath Pink Crystals',
                        'Kinnow Mandarins & Citrus (Pre-Season Contract)',
                        'Custom Specification / Special Mineral Grade'
                      ].map((item) => {
                        const isChecked = selectedVariants.includes(item);
                        return (
                          <div
                            key={item}
                            onClick={() => toggleVariant(item)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                              isChecked
                                ? 'bg-orange-50/80 border-orange-300 text-slate-900 font-semibold'
                                : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                              isChecked ? 'bg-orange-600 border-orange-600 text-white' : 'border-slate-300 bg-white'
                            }`}>
                              {isChecked && <Check className="w-3 h-3" />}
                            </div>
                            <span className="leading-snug">{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Volume, Incoterm & Destination Port */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-base font-bold font-['Space_Grotesk'] text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">2</span>
                      <span>Required Volume &amp; Destination Logistics</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Quantity & Unit */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Estimated Order Quantity *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            min="1"
                            required
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                            className="w-1/2 px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-semibold"
                          />
                          <select
                            value={volumeUnit}
                            onChange={(e) => setVolumeUnit(e.target.value)}
                            className="w-1/2 px-3 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 font-medium"
                          >
                            <option value="Metric Tons (MT)">Metric Tons (MT)</option>
                            <option value="20ft FCL Containers">20ft Containers</option>
                            <option value="40ft FCL Containers">40ft Containers</option>
                            <option value="Pallets (1 MT ea)">Pallets</option>
                            <option value="Master Cartons">Master Cartons</option>
                          </select>
                        </div>
                      </div>

                      {/* Incoterm */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Trade Incoterm *
                        </label>
                        <select
                          value={incoterm}
                          onChange={(e) => setIncoterm(e.target.value as any)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        >
                          <option value="CIF">CIF (Cost, Insurance &amp; Freight to Destination Port)</option>
                          <option value="FOB">FOB (Free On Board - Karachi / Port Qasim)</option>
                          <option value="CFR">CFR (Cost &amp; Freight Destination Port)</option>
                          <option value="EXW">EXW (Ex Works Factory Khewra)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Destination Port */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Discharge Port of Destination *
                        </label>
                        <select
                          value={destinationPort}
                          onChange={(e) => setDestinationPort(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        >
                          {DESTINATION_PORTS.map((p) => (
                            <option key={p.name} value={p.name}>
                              {p.name} ({p.region}) — {p.transitDays}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Packaging Preference */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Packaging Specification *
                        </label>
                        <select
                          value={packagingPreference}
                          onChange={(e) => setPackagingPreference(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        >
                          <option value="25kg Multi-Wall PP Bags with PE Liner">25kg PP Woven Bags with PE Moisture Liner</option>
                          <option value="50kg Multi-Wall PP Bags with PE Liner">50kg PP Woven Bags with PE Moisture Liner</option>
                          <option value="1000kg FIBC Jumbo Big Bags">1,000kg FIBC Big Bags on Wooden Pallets</option>
                          <option value="Retail Standup Pouches (500g / 1kg OEM)">Retail Standup Pouches (500g / 1kg Private Label)</option>
                          <option value="Individual Gift Box with EPE Foam (Lamps)">Individual Gift Box with EPE Foam (Salt Lamps)</option>
                          <option value="Shrink-Wrapped Euro Pallets (ISPM-15)">Shrink-Wrapped Euro Pallets (ISPM-15 Heat Treated)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Target Shipment Window
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        >
                          <option value="Immediate Spot Dispatch (10–14 days)">Immediate Spot Dispatch (10–14 days)</option>
                          <option value="Within 30 Days (Standard Maritime)">Within 30 Days (Standard Maritime)</option>
                          <option value="Within 60 Days (Scheduled Cargo)">Within 60 Days (Scheduled Cargo)</option>
                          <option value="Annual / Quarterly Fixed Contract">Annual / Quarterly Fixed Supply Contract</option>
                        </select>
                      </div>

                      <div className="flex flex-col justify-end space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                          <input
                            type="checkbox"
                            checked={oemBrandingRequired}
                            onChange={(e) => setOemBrandingRequired(e.target.checked)}
                            className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                          />
                          <span>Require OEM Private Label Branding</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                          <input
                            type="checkbox"
                            checked={sampleRequired}
                            onChange={(e) => setSampleRequired(e.target.checked)}
                            className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                          />
                          <span>Request Courier Sample Evaluation Kit</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Importer Details */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-base font-bold font-['Space_Grotesk'] text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">3</span>
                      <span>Company &amp; Commercial Contacts</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Contact Person / Procurement Officer *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Marcus Weber"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Importer Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Weber Imports GmbH"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="trade@company.com"
                          value={businessEmail}
                          onChange={(e) => setBusinessEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone / WhatsApp Desk
                        </label>
                        <input
                          type="tel"
                          placeholder="+49 40 1234567"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Destination Country *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Germany"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Specific Grain Sizes, Tolerances, or Delivery Directives
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Detail specific grain sizing (e.g. 0.2-0.8mm for table salt, 2-5mm for grinders), SGS pre-shipment inspection requests, or port requirements..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Container Route &amp; Generating Proforma Quote...</span>
                      ) : (
                        <>
                          <span>Transmit Official RFQ to Utility Home Exports Desk</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Direct review by CEO Nafees Arshad and export logistics team. Binding quotation within 12–24h.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Information & Contact Details Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Commercial Desk Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 block">
                  Export Operations
                </span>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mt-0.5">
                  Utility Home Exports
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Official Trade &amp; Commercial Procurement Desk
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Contact Person / CEO:</span>
                    <span className="text-emerald-300 font-bold text-sm">{COMPANY_INFO.ceo}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{COMPANY_INFO.designation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Location / Address:</span>
                    <span className="text-slate-200 font-medium">{COMPANY_INFO.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Official Business Email:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-orange-300 hover:text-white transition-colors underline font-medium">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Phone / Mobile Line:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-200 hover:text-white font-medium">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">WhatsApp Direct Desk:</span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold"
                    >
                      {COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Working Coverage:</span>
                <span className="text-slate-200 font-medium">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Maritime Guarantee Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 font-['Space_Grotesk'] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Trade Assurance Protocol</span>
              </h4>
              <p className="text-slate-600 leading-relaxed">
                We accept Irrevocable Letters of Credit (L/C at sight) confirmed by international prime banks, as well as telegraphic transfer (T/T) deposit terms.
              </p>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div>· SGS / Intertek inspection supported</div>
                <div>· Comprehensive Institute Cargo Clauses (A) insurance</div>
                <div>· Complete original 3/3 Bill of Lading sets</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
