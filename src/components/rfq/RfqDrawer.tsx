import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  FileText, 
  Send, 
  CheckCircle2, 
  Download, 
  Ship, 
  Package, 
  Building, 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight,
  Plus
} from 'lucide-react';
import { RfqCartItem } from '../../types';
import { DESTINATION_PORTS } from '../../data/catalog';
import { COMPANY_INFO } from '../../data/company';

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: RfqCartItem[];
  onUpdateQuantity: (variantId: string, quantity: number) => void;
  onRemoveItem: (variantId: string) => void;
  onClearCart: () => void;
  onOpenQuickAdd: () => void;
}

export const RfqDrawer: React.FC<RfqDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenQuickAdd
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [destinationPort, setDestinationPort] = useState(DESTINATION_PORTS[0].name);
  const [incoterm, setIncoterm] = useState<'FOB' | 'CIF' | 'CFR' | 'EXW'>('CIF');
  const [packagingType, setPackagingType] = useState('Bulk 25kg PP Bags with Liner');
  const [customBranding, setCustomBranding] = useState(false);
  const [samplesRequested, setSamplesRequested] = useState(false);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<{ id: string; timestamp: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const rfqId = `RFQ-UH-${Date.now().toString().slice(-6)}`;
      const timestamp = new Date().toLocaleString();
      
      const payload = {
        rfqId,
        timestamp,
        buyer: { buyerName, companyName, businessEmail, phoneNumber, country },
        terms: { incoterm, destinationPort, packagingType, customBranding, samplesRequested, notes },
        items
      };

      // Store in localStorage for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('utility_home_rfqs') || '[]');
        existing.unshift(payload);
        localStorage.setItem('utility_home_rfqs', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error', err);
      }

      setIsSubmitting(false);
      setSubmittedRfq({ id: rfqId, timestamp });
    }, 800);
  };

  const handleDownloadSummary = () => {
    if (!submittedRfq) return;
    
    const summaryText = `
=====================================================
UTILITY HOME EXPORTS - REQUEST FOR QUOTATION (RFQ)
=====================================================
RFQ Reference : ${submittedRfq.id}
Date Generated: ${submittedRfq.timestamp}
Company       : ${COMPANY_INFO.name} / ${COMPANY_INFO.legalName}
CEO / Contact : ${COMPANY_INFO.ceo}
Location      : ${COMPANY_INFO.headquarters}
Contact Email : ${COMPANY_INFO.email}
Phone/WhatsApp: ${COMPANY_INFO.whatsapp}
Origin Loading: Port Qasim (PKBQM) / Karachi Port (PKKHI), Pakistan

BUYER DETAILS:
-----------------------------------------------------
Buyer Name    : ${buyerName || 'N/A'}
Company       : ${companyName || 'N/A'}
Country       : ${country || 'N/A'}
Business Email: ${businessEmail}
Phone/WhatsApp: ${phoneNumber || 'N/A'}

COMMERCIAL & SHIPPING TERMS:
-----------------------------------------------------
Incoterm      : ${incoterm}
Destination   : ${destinationPort}
Packaging     : ${packagingType}
OEM Branding  : ${customBranding ? 'Custom Private Label Required' : 'Standard Utility Home Export Packaging'}
Sample Kits   : ${samplesRequested ? 'Pre-Shipment Evaluation Samples Requested' : 'Standard Production Batch'}
Special Notes : ${notes || 'Standard maritime seaworthy packaging'}

PRODUCTS & REQUESTED VOLUMES:
-----------------------------------------------------
${items.map((it, i) => `
${i + 1}. ${it.variantName}
   - HS Code  : ${it.hsCode}
   - Category : ${it.categoryName}
   - Quantity : ${it.quantity} ${it.unit}
   - Packaging: ${it.packagingPreference || packagingType}
`).join('')}

=====================================================
This RFQ has been logged into the Utility Home B2B Commercial Dispatch Desk.
Our export trade executive will issue an official Proforma Invoice (PI) with 
freight calculation within 12-24 business hours.
=====================================================
    `.trim();

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${submittedRfq.id}-UtilityHome-Quotation.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base font-['Space_Grotesk'] text-white">
                B2B Request for Quotation (RFQ)
              </h3>
              <p className="text-xs text-slate-300">
                Direct export quote calculation &amp; container inquiry desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close RFQ Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submittedRfq ? (
            /* Confirmation Screen */
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 block mb-1">
                  RFQ Dispatched Successfully
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk']">
                  Reference: {submittedRfq.id}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-slate-800">{buyerName || companyName || 'Procurement Officer'}</strong>. 
                  Our export desk led by CEO <strong>{COMPANY_INFO.ceo}</strong> in Gujranwala, Punjab will review your container volumes and prepare an official Proforma Invoice with current ocean freight rates within 12–24 hours.
                </p>
              </div>

              {/* Inquiry Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs space-y-3">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Incoterm &amp; Port:</span>
                  <span className="font-semibold text-slate-900">{incoterm} — {destinationPort}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Target Items:</span>
                  <span className="font-semibold text-slate-900">{items.length} Product Variants</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Packaging:</span>
                  <span className="font-semibold text-slate-900">{packagingType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Commercial Email:</span>
                  <span className="font-semibold text-slate-900">{businessEmail}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={handleDownloadSummary}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download RFQ Sheet (.txt)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRfq(null);
                    onClearCart();
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-colors"
                >
                  Close &amp; Return to Catalog
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form & Items */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Items Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                    <Package className="w-4 h-4 text-orange-600" />
                    <span>Selected Products ({items.length})</span>
                  </h4>
                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="text-xs text-rose-600 hover:text-rose-700 font-medium"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="p-6 border-2 border-dashed border-slate-200 rounded-xl text-center bg-slate-50/50 space-y-3">
                    <p className="text-sm text-slate-500">
                      Your RFQ basket is currently empty. Browse our Himalayan Pink Salt catalog to add products or add directly below.
                    </p>
                    <button
                      type="button"
                      onClick={onOpenQuickAdd}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Edible Pink Salt to RFQ</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div
                        key={item.variantId}
                        className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white transition-colors flex items-center justify-between gap-3 text-sm"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-slate-900 truncate">
                            {item.variantName}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>HS Code: {item.hsCode}</span>
                            <span>·</span>
                            <span>{item.categoryName}</span>
                          </div>
                        </div>

                        {/* Quantity Adjuster */}
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min="1"
                            max="500"
                            value={item.quantity}
                            onChange={(e) => onUpdateQuantity(item.variantId, Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-16 px-2 py-1 text-center font-semibold text-sm border border-slate-300 rounded bg-white"
                          />
                          <span className="text-xs text-slate-500 shrink-0">
                            {item.unit.split(' ')[0]}
                          </span>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.variantId)}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors ml-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Commercial & Shipping Terms */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <Ship className="w-4 h-4 text-orange-600" />
                  <span>Export Terms &amp; Maritime Logistics</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Incoterm
                    </label>
                    <select
                      value={incoterm}
                      onChange={(e) => setIncoterm(e.target.value as any)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="CIF">CIF (Cost, Insurance &amp; Freight to Destination Port)</option>
                      <option value="FOB">FOB (Free On Board - Karachi / Port Qasim)</option>
                      <option value="CFR">CFR (Cost &amp; Freight)</option>
                      <option value="EXW">EXW (Ex Works Factory Khewra)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Discharge Port of Destination
                    </label>
                    <select
                      value={destinationPort}
                      onChange={(e) => setDestinationPort(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      {DESTINATION_PORTS.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name} ({p.region})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Packaging Specification
                    </label>
                    <select
                      value={packagingType}
                      onChange={(e) => setPackagingType(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="Bulk 25kg PP Bags with Liner">Bulk 25kg PP Bags with PE Liner</option>
                      <option value="Bulk 50kg PP Bags with Liner">Bulk 50kg PP Bags with PE Liner</option>
                      <option value="1000kg FIBC Jumbo Bags">1,000kg FIBC Big Bags on Pallets</option>
                      <option value="OEM Retail Stand-up Pouches">OEM Retail Stand-up Pouches (500g / 1kg)</option>
                      <option value="Gift Box with Wood Base (For Salt Lamps)">Gift Box with Foam &amp; Rosewood Base</option>
                      <option value="Weather-Proof Shrink Wrap Pallets">Shrink-Wrapped Export Pallets (ISPM-15)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Destination Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Germany, USA, UAE, Japan"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                {/* Additional Checkboxes */}
                <div className="flex flex-col sm:flex-row gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={customBranding}
                      onChange={(e) => setCustomBranding(e.target.checked)}
                      className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span>Require Private Label / OEM Packaging</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={samplesRequested}
                      onChange={(e) => setSamplesRequested(e.target.checked)}
                      className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span>Request Courier Sample Evaluation Kit</span>
                  </label>
                </div>
              </div>

              {/* Importer / Company Details */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <Building className="w-4 h-4 text-orange-600" />
                  <span>Buyer / Corporate Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Procurement Officer / Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Vance"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al-Noor Trading GmbH"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="purchasing@company.com"
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp (for freight updates)
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 171 1234567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Technical Requirements or Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide specific grain sizes (e.g. 0.2-0.8mm), monthly container schedule, or certification requests (SGS/Kosher/Halal)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  className="w-full py-3.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Calculating Maritime Freight &amp; Generating RFQ...</span>
                  ) : (
                    <>
                      <span>Submit Request for Quotation</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Official Proforma Invoice (PI) will be dispatched directly to your business email within 12–24h.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
