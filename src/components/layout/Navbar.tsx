import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  ChevronDown, 
  Globe2, 
  Menu, 
  X, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  Leaf,
  Scissors,
  Mail
} from 'lucide-react';
import { CATEGORIES } from '../../data/catalog';
import { COMPANY_INFO } from '../../data/company';
import { PageView, RfqCartItem } from '../../types';
import { Logo } from '../common/Logo';

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
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[11px] sm:text-xs">
          
          {/* Left Compliance & Origin */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-300 min-w-0">
            <span className="flex items-center gap-1.5 font-medium text-white truncate">
              <Globe2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">Utility Home Exports · Head Office: Jhelum, Pakistan</span>
            </span>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-semibold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>FBR &amp; PSW Registered Exporter</span>
            </span>
          </div>

          {/* Right: Official Clickable Icons Only (WhatsApp, Email, LinkedIn) - No text links or raw numbers */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-2xs"
              title="Official WhatsApp Direct Chat"
              aria-label="Official WhatsApp Direct Chat"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-7 h-7 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center transition-transform hover:scale-105 shadow-2xs border border-slate-700"
              title={`Corporate Email: ${COMPANY_INFO.email}`}
              aria-label="Corporate Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/utilityhome-export"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-md bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-2xs"
              title="Official LinkedIn Profile - Utility Home Exports"
              aria-label="Official LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          
          {/* Logo & Brand Identity: Green UH Monogram on Dark Charcoal Container */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center text-left focus:outline-none cursor-pointer shrink-0"
            aria-label="Utility Home Exports - Home"
          >
            <Logo 
              size="md" 
              subtitleText="Head Office: Jhelum, Pakistan"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 min-w-0 text-slate-700 font-medium">
            <button
              onClick={() => onNavigate('home')}
              className={`px-2.5 py-2 text-xs xl:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'home' 
                  ? 'text-orange-600 font-bold bg-orange-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Products / 3 Core Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`flex items-center gap-1 px-2.5 py-2 text-xs xl:text-sm font-medium transition-colors rounded-lg cursor-pointer whitespace-nowrap ${
                  currentPage === 'category'
                    ? 'text-orange-600 font-bold bg-orange-50/70'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-expanded={productsDropdownOpen}
              >
                <span>3 Core Export Lines</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} />
              </button>

              {/* Rich Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Primary Export Divisions
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Halal &amp; ISO Verified
                    </span>
                  </div>

                  <div className="py-2 space-y-1">
                    {CATEGORIES.map((cat, idx) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setProductsDropdownOpen(false);
                          if (cat.slug === 'fresh-vegetables') {
                            onNavigate('vegetables');
                          } else {
                            onNavigate('category', cat.slug);
                          }
                        }}
                        className={`w-full text-left p-3 rounded-xl transition-all group flex items-start gap-3 cursor-pointer ${
                          selectedCategorySlug === cat.slug && currentPage === 'category'
                            ? 'bg-orange-50/80 border border-orange-200/60'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 mt-0.5 border border-slate-200 bg-slate-950">
                          <img 
                            src={cat.heroImage} 
                            alt={cat.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/pink_salt_banner.jpg';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {cat.title}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-500 font-mono">
                              0{idx + 1}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {cat.subtitle}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 mt-1 border-t border-slate-100 bg-slate-50/80 -mx-3 -mb-3 p-3 rounded-b-2xl flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Need custom specifications?
                    </span>
                    <button
                      onClick={() => {
                        setProductsDropdownOpen(false);
                        onNavigate('contact');
                      }}
                      className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Custom RFQ Desk</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Link: Fresh Vegetables (Visible on xl+) */}
            <button
              onClick={() => onNavigate('vegetables')}
              className={`hidden xl:flex items-center gap-1 px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors rounded-lg cursor-pointer whitespace-nowrap ${
                currentPage === 'vegetables' 
                  ? 'text-emerald-800 bg-emerald-50 border border-emerald-200 shadow-2xs' 
                  : 'text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50/60'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>Fresh Vegetables</span>
            </button>

            {/* Direct Link: Surgical Instruments (Visible on 2xl+) */}
            <button
              onClick={() => onNavigate('category', 'surgical-instruments')}
              className={`hidden 2xl:flex items-center gap-1 px-2.5 py-2 text-xs xl:text-sm font-semibold transition-colors rounded-lg cursor-pointer whitespace-nowrap ${
                currentPage === 'category' && selectedCategorySlug === 'surgical-instruments'
                  ? 'text-sky-800 bg-sky-50 border border-sky-200 shadow-2xs' 
                  : 'text-sky-700 hover:text-sky-800 hover:bg-sky-50/60'
              }`}
            >
              <Scissors className="w-3.5 h-3.5 text-sky-600" />
              <span>Surgical Tools</span>
            </button>

            <button
              onClick={() => onNavigate('logistics')}
              className={`px-2.5 py-2 text-xs xl:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'logistics' 
                  ? 'text-orange-600 font-bold bg-orange-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Logistics
            </button>

            <button
              onClick={() => onNavigate('certifications')}
              className={`px-2.5 py-2 text-xs xl:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'certifications' 
                  ? 'text-orange-600 font-bold bg-orange-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Compliance
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`px-2.5 py-2 text-xs xl:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'about' 
                  ? 'text-orange-600 font-bold bg-orange-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-2.5 py-2 text-xs xl:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap hover:text-orange-600 hover:bg-slate-50"
            >
              Reviews
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-2.5 py-2 text-xs xl:text-sm rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'contact' 
                  ? 'text-orange-600 font-bold bg-orange-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact / RFQ
            </button>
          </nav>

          {/* Right Header Controls: RFQ Basket & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* RFQ Cart Button */}
            <button
              onClick={onOpenRfqDrawer}
              className="relative p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors bg-white shadow-2xs cursor-pointer shrink-0"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
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
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Home
            </button>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                3 Core Export Divisions
              </span>
              <div className="mt-1 space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      if (cat.slug === 'fresh-vegetables') {
                        onNavigate('vegetables');
                      } else {
                        onNavigate('category', cat.slug);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:text-orange-600 hover:bg-slate-50 rounded-lg flex items-center justify-between cursor-pointer"
                  >
                    <span>{cat.title}</span>
                    <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                      Active
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate('logistics');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Logistics &amp; Incoterms
            </button>

            <button
              onClick={() => {
                onNavigate('certifications');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Quality &amp; Halal Compliance
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              About Us (Company Credentials)
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg cursor-pointer"
            >
              Inquiry / RFQ Desk
            </button>

            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-left px-3 py-2 text-base font-medium text-orange-600 hover:bg-slate-50 rounded-lg cursor-pointer font-semibold"
            >
              ★ International Buyer Reviews
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-center text-sm shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Request a Bulk B2B Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
