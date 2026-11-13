import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/company';
import { X, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  currentPage?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryText, setInquiryText] = useState('');

  const defaultMessage = currentPage === 'vegetables'
    ? 'Hello Utility Home Exports, I would like to inquire about fresh vegetables & produce export orders.'
    : 'Hello Utility Home Exports, I would like to discuss a bulk B2B export order and request quotation.';

  const cleanPhone = COMPANY_INFO.whatsapp.replace(/\D/g, '');

  const handleOpenWhatsApp = (customMessage?: string) => {
    const msg = encodeURIComponent(customMessage || inquiryText || defaultMessage);
    const url = `https://wa.me/${cleanPhone}?text=${msg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-auto max-w-[calc(100vw-2rem)]">
      {/* Expanded Quick Inquiry Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 text-white">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white">
                  <i className="fa-brands fa-whatsapp text-2xl text-emerald-200"></i>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight">Utility Home B2B Desk</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                  <span>Online • Nafees Arshad (CEO)</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Preview / Quick Action Body */}
          <div className="p-4 space-y-3 bg-slate-950/95">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                Instant International Export Desk
              </span>
              <p>
                Get real-time CIF/FOB pricing, container loading schedules, and custom packaging support.
              </p>
              <span className="text-[10px] text-slate-400 block pt-1">
                Typical response time: <strong className="text-white">&lt; 15 minutes</strong>
              </span>
            </div>

            {/* Quick Templates */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Quick Inquiries:
              </span>
              <div className="flex flex-col gap-1.5 text-xs">
                <button
                  onClick={() => handleOpenWhatsApp('Inquiry: Need container load pricing for 20ft/40ft FCL Himalayan Pink Salt.')}
                  className="text-left px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-300 text-[11px] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>🧂 Himalayan Salt FCL Volume Price</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
                <button
                  onClick={() => handleOpenWhatsApp('Inquiry: Fresh Ginger, Garlic, Onions & Vegetables export availability.')}
                  className="text-left px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-lime-300 text-[11px] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>🧄 Fresh Agricultural Produce &amp; Veg</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
                <button
                  onClick={() => handleOpenWhatsApp('Inquiry: Need wholesale export pricing for Dental & Surgical Instruments.')}
                  className="text-left px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sky-300 text-[11px] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>✂️ Surgical &amp; Dental Instruments</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
                <button
                  onClick={() => handleOpenWhatsApp('Inquiry: Need OEM private labeling and custom packaging specifications for export.')}
                  className="text-left px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-orange-300 text-[11px] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>📦 OEM Private Label &amp; Packaging</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleOpenWhatsApp();
                  }}
                  placeholder="Type custom product or order requirement..."
                  className="w-full pl-3 pr-10 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  onClick={() => handleOpenWhatsApp()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="Send via WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>Open Direct Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-950/90 text-white text-xs font-semibold px-3 py-2 rounded-xl border border-emerald-500/40 shadow-xl backdrop-blur-md animate-in fade-in duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Live WhatsApp Inquiry</span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded font-bold border border-emerald-500/30">
              Bulk B2B
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/20 flex items-center justify-center cursor-pointer"
          aria-label="Live WhatsApp Inquiry"
          title="Live WhatsApp Inquiry for Bulk Orders"
        >
          {/* Animated Glow Halo */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-75 blur-md transition duration-500 animate-pulse"></span>

          {/* WhatsApp Icon */}
          <span className="relative flex items-center justify-center">
            <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl"></i>
          </span>

          {/* Active Status Pip */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-slate-950 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};
