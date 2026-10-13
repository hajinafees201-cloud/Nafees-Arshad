import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  ChevronDown, 
  Globe2, 
  Menu, 
  X, 
  FileText, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  ShoppingBag, 
  ArrowRight,
  PhoneCall,
  Search,
  Leaf,
  Stethoscope
} from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import { COMPANY_INFO } from '../../data/company';
import { PageView, RfqCartItem } from '../../types';

interface NavbarProps {
  currentPage: PageView;
  selectedCategorySlug: string;
  onNavigate: (page: PageView, categorySlug?: string) => void;
  rfqItems: RfqCartItem[];
  onOpenRfqDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  selectedCategorySlug,
  onNavigate,
  rfqItems,
  onOpenRfqDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalRfqCount = rfqItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      {/* Top Corporate Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Globe2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Utility Home Exports · Gujranwala, Punjab, Pakistan</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>CEO: Nafees Arshad</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hover:text-white transition-colors text-slate-300 font-medium"
            >
              {COMPANY_INFO.email}
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
            >
              <span>WhatsApp / Call:</span>
              <span>{COMPANY_INFO.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:bg-slate-800 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/30 to-transparent pointer-events-none" />
              <Building2 className="w-6 h-6 text-orange-400 relative z-10" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk']">
                  UTILITY HOME
                </span>
                <span className="text-[10px] bg-orange-100 text-orange-800 font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                  EXPORTS
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block">
                Gujranwala, Pakistan · CEO: Nafees Arshad
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Home
            </button>

            {/* Products / Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  currentPage === 'category'
                    ? 'text-orange-600 font-semibold bg-orange-50/70'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={productsDropdownOpen}
              >
                <span>Product Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} />
              </button>

              {/* Rich Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Export Divisions
                    </span>
                    <span className="text-[11px] font-medium text-emerald-600">
                      Modular B2B Catalog
                    </span>
                  </div>

                  <div className="py-2 space-y-1">
                    {CATEGORIES.map((cat) => {
                      const isActiveCategory = cat.status === 'active';
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            if (cat.slug === 'surgical-instruments') {
                              onNavigate('surgical');
                            } else if (cat.slug === 'fresh-vegetables') {
                              onNavigate('vegetables');
                            } else {
                              onNavigate('category', cat.slug);
                            }
                          }}
                          className={`w-full text-left p-3 rounded-lg transition-all group flex items-start gap-3 ${
                            selectedCategorySlug === cat.slug && currentPage === 'category'
                              ? 'bg-orange-50/80 border border-orange-200/60'
                              : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-md overflow-hidden shrink-0 mt-0.5 border ${
                            isActiveCategory ? 'border-orange-200' : 'border-slate-200'
                          }`}>
                            <img 
                              src={cat.heroImage} 
                              alt={cat.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                                {cat.title}
                              </span>
                              {isActiveCategory ? (
                                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                  Export Ready
                                </span>
                              ) : (
                                <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                  Pipeline
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {cat.shortDescription}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 mt-1 border-t border-slate-100 bg-slate-50/80 -mx-3 -mb-3 p-3 rounded-b-xl flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Need custom specifications?
                    </span>
                    <button
                      onClick={() => {
                        setProductsDropdownOpen(false);
                        onNavigate('contact');
                      }}
                      className="font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      <span>Custom Inquiries</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Surgical Instruments Navigation Link (Highlighted Active Category) */}
            <button
              onClick={() => onNavigate('surgical')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-all rounded-lg cursor-pointer ${
                currentPage === 'surgical' 
                  ? 'text-teal-950 bg-teal-50 border-2 border-teal-500 shadow-sm ring-2 ring-teal-500/20 font-bold' 
                  : 'text-teal-800 hover:text-teal-950 hover:bg-teal-50/80 border border-teal-200/80'
              }`}
            >
              <Stethoscope className="w-4 h-4 text-teal-600" />
              <span>Surgical Instruments</span>
              <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                currentPage === 'surgical'
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-teal-100 text-teal-800'
              }`}>
                Active
              </span>
            </button>

            {/* Fresh Vegetables Navigation Link */}
            <button
              onClick={() => onNavigate('vegetables')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors rounded-lg ${
                currentPage === 'vegetables' 
                  ? 'text-emerald-800 bg-emerald-50 border border-emerald-200 shadow-2xs' 
                  : 'text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50/60'
              }`}
            >
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Fresh Vegetables</span>
              <span className="text-[10px] bg-lime-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded-full">
                Produce
              </span>
            </button>

            <button
              onClick={() => onNavigate('logistics')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'logistics' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Logistics &amp; Incoterms
            </button>

            <button
              onClick={() => onNavigate('certifications')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'certifications' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Compliance &amp; QA
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'contact' 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Contact Desk
            </button>
          </nav>

          {/* Right Header Controls: RFQ Basket & Request Quote Button */}
          <div className="flex items-center gap-3">
            {/* RFQ Cart Button */}
            <button
              onClick={onOpenRfqDrawer}
              className="relative p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors bg-white shadow-2xs"
              title="View RFQ Quote Basket"
              aria-label="View RFQ Quote Basket"
            >
              <FileText className="w-4 h-4 text-slate-700" />
              {totalRfqCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-orange-600 text-white text-[11px] font-bold flex items-center justify-center animate-pulse">
                  {totalRfqCount}
                </span>
              )}
            </button>

            {/* Request a Quote CTA */}
            <button
              onClick={() => onNavigate('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Home
            </button>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Product Categories
              </span>
              <div className="mt-1 space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onNavigate('category', cat.slug);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-lg flex items-center justify-between"
                  >
                    <span>{cat.title}</span>
                    <span className="text-[10px] text-slate-400">
                      {cat.status === 'active' ? 'Export Ready' : 'Pipeline'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Surgical Instruments Mobile Link */}
            <button
              onClick={() => {
                onNavigate('surgical');
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 text-base font-bold rounded-lg flex items-center justify-between ${
                currentPage === 'surgical'
                  ? 'text-teal-950 bg-teal-100 border border-teal-300'
                  : 'text-teal-900 bg-teal-50 hover:bg-teal-100/70 border border-teal-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-teal-600" />
                <span>Surgical Instruments Export</span>
              </div>
              <span className="text-[10px] bg-teal-600 text-white px-2 py-0.5 rounded font-extrabold uppercase">
                Active
              </span>
            </button>

            <button
              onClick={() => {
                onNavigate('vegetables');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-bold text-emerald-800 bg-emerald-50 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Fresh Vegetables Export</span>
              </div>
              <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded font-extrabold uppercase">
                New
              </span>
            </button>

            <button
              onClick={() => {
                onNavigate('logistics');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Logistics &amp; Incoterms
            </button>

            <button
              onClick={() => {
                onNavigate('certifications');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Quality &amp; Compliance
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Inquiry / RFP Hub
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-orange-600 text-white rounded-lg font-semibold text-center text-sm shadow-sm"
            >
              Request a B2B Quote
            </button>
            <button
              onClick={() => {
                onOpenRfqDrawer();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 border border-slate-300 text-slate-700 rounded-lg font-medium text-center text-sm"
            >
              View RFQ Cart ({totalRfqCount} items)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
