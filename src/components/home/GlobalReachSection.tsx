import React, { useState } from 'react';
import { 
  Globe2, 
  Ship, 
  Anchor, 
  ArrowRight, 
  Compass, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { PageView } from '../../types';

interface GlobalReachSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenQuickRfq: (productName: string, port?: string) => void;
}

interface MapPort {
  id: string;
  name: string;
  code: string;
  country: string;
  region: 'europe' | 'middle-east' | 'americas' | 'asia-pacific' | 'other';
  x: number;
  y: number;
  transitDays: string;
  primaryCargo: string;
  frequency: string;
  annualTeu: string;
}

const MAP_PORTS: MapPort[] = [
  // Europe
  {
    id: 'rotterdam',
    name: 'Rotterdam',
    code: 'NLRTM',
    country: 'Netherlands',
    region: 'europe',
    x: 495,
    y: 155,
    transitDays: '22–26 Days',
    primaryCargo: 'Himalayan Pink Salt (Fine/Coarse) & Spa Crystals',
    frequency: 'Weekly Direct Feeder',
    annualTeu: '420+ TEU'
  },
  {
    id: 'hamburg',
    name: 'Hamburg',
    code: 'DEHAM',
    country: 'Germany',
    region: 'europe',
    x: 512,
    y: 145,
    transitDays: '24–28 Days',
    primaryCargo: 'Edible Gourmet Salt & Organic Food Processing Salt',
    frequency: 'Bi-Weekly Ocean',
    annualTeu: '310+ TEU'
  },
  {
    id: 'felixstowe',
    name: 'Felixstowe',
    code: 'GBFXT',
    country: 'United Kingdom',
    region: 'europe',
    x: 478,
    y: 148,
    transitDays: '24–28 Days',
    primaryCargo: 'Retail Standup Pouches & Salt Lamps',
    frequency: 'Weekly Ocean',
    annualTeu: '260+ TEU'
  },
  {
    id: 'valencia',
    name: 'Valencia',
    code: 'ESVLC',
    country: 'Spain',
    region: 'europe',
    x: 472,
    y: 188,
    transitDays: '18–22 Days',
    primaryCargo: 'Bulk 25kg PP Salt Bags & Animal Licks',
    frequency: 'Weekly Line',
    annualTeu: '180+ TEU'
  },
  {
    id: 'genoa',
    name: 'Genoa',
    code: 'ITGOA',
    country: 'Italy',
    region: 'europe',
    x: 502,
    y: 172,
    transitDays: '16–20 Days',
    primaryCargo: 'Food Grade Salt & Cosmetic Crystals',
    frequency: 'Direct Maritime',
    annualTeu: '150+ TEU'
  },
  // Middle East & GCC
  {
    id: 'jebel-ali',
    name: 'Jebel Ali / Dubai',
    code: 'AEJEA',
    country: 'UAE',
    region: 'middle-east',
    x: 608,
    y: 242,
    transitDays: '3–5 Days',
    primaryCargo: 'Fresh Produce (Onions, Potatoes) & Edible Salt',
    frequency: 'Tri-Weekly Direct',
    annualTeu: '850+ TEU'
  },
  {
    id: 'dammam',
    name: 'Dammam',
    code: 'SADMM',
    country: 'Saudi Arabia',
    region: 'middle-east',
    x: 596,
    y: 236,
    transitDays: '6–8 Days',
    primaryCargo: 'Fresh Vegetables & Handcrafted Salt Lamps',
    frequency: 'Weekly Direct',
    annualTeu: '390+ TEU'
  },
  {
    id: 'doha',
    name: 'Doha / Hamad',
    code: 'QAHMD',
    country: 'Qatar',
    region: 'middle-east',
    x: 602,
    y: 240,
    transitDays: '5–7 Days',
    primaryCargo: 'Fresh Agricultural Produce & Rock Salt',
    frequency: 'Weekly Feeder',
    annualTeu: '210+ TEU'
  },
  // North America
  {
    id: 'new-york',
    name: 'New York / New Jersey',
    code: 'USNYC',
    country: 'United States',
    region: 'americas',
    x: 285,
    y: 175,
    transitDays: '26–32 Days',
    primaryCargo: 'Handcrafted Salt Lamps, Animal Licks & Bath Salt',
    frequency: 'Weekly Ocean',
    annualTeu: '480+ TEU'
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles / Long Beach',
    code: 'USLAX',
    country: 'United States',
    region: 'americas',
    x: 175,
    y: 195,
    transitDays: '30–36 Days',
    primaryCargo: 'Gourmet Culinary Salt & Equestrian Licks',
    frequency: 'Bi-Weekly Ocean',
    annualTeu: '340+ TEU'
  },
  {
    id: 'savannah',
    name: 'Savannah',
    code: 'USSAV',
    country: 'United States',
    region: 'americas',
    x: 265,
    y: 202,
    transitDays: '28–34 Days',
    primaryCargo: 'Bulk 1000kg FIBC Jumbo Bags',
    frequency: 'Weekly Ocean',
    annualTeu: '220+ TEU'
  },
  // Asia-Pacific & Oceania
  {
    id: 'singapore',
    name: 'Singapore Port',
    code: 'SGSIN',
    country: 'Singapore',
    region: 'asia-pacific',
    x: 765,
    y: 295,
    transitDays: '10–14 Days',
    primaryCargo: 'Transshipment Hub · Salt & Produce',
    frequency: 'Weekly Direct',
    annualTeu: '520+ TEU'
  },
  {
    id: 'yokohama',
    name: 'Yokohama / Tokyo',
    code: 'JPYOK',
    country: 'Japan',
    region: 'asia-pacific',
    x: 865,
    y: 192,
    transitDays: '18–24 Days',
    primaryCargo: 'Ultra-Pure Food Salt & High-End Wellness Lamps',
    frequency: 'Weekly Ocean',
    annualTeu: '290+ TEU'
  },
  {
    id: 'sydney',
    name: 'Sydney Port Botany',
    code: 'AUSYD',
    country: 'Australia',
    region: 'asia-pacific',
    x: 890,
    y: 405,
    transitDays: '22–28 Days',
    primaryCargo: 'Livestock Rock Salt Licks & Bath Soaks',
    frequency: 'Bi-Weekly Direct',
    annualTeu: '230+ TEU'
  },
  // Other (South America / Africa)
  {
    id: 'santos',
    name: 'Santos',
    code: 'BRSSZ',
    country: 'Brazil',
    region: 'other',
    x: 360,
    y: 375,
    transitDays: '35–42 Days',
    primaryCargo: 'Industrial & Animal Mineral Blocks',
    frequency: 'Monthly Ocean',
    annualTeu: '120+ TEU'
  },
  {
    id: 'durban',
    name: 'Durban',
    code: 'ZADUR',
    country: 'South Africa',
    region: 'other',
    x: 565,
    y: 385,
    transitDays: '16–20 Days',
    primaryCargo: 'Agricultural Produce & Bulk Mineral Salt',
    frequency: 'Fortnightly Ocean',
    annualTeu: '160+ TEU'
  }
];

// Origin Hub in Pakistan
const ORIGIN = {
  name: 'Karachi Port / Port Qasim & Gujranwala HQ',
  code: 'PKKHI / PKBQM',
  x: 632,
  y: 232
};

export const GlobalReachSection: React.FC<GlobalReachSectionProps> = ({
  onNavigate,
  onOpenQuickRfq
}) => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'europe' | 'middle-east' | 'americas' | 'asia-pacific'>('all');
  const [activePort, setActivePort] = useState<MapPort>(MAP_PORTS[0]);

  const filteredPorts = MAP_PORTS.filter((p) => {
    if (selectedRegion === 'all') return true;
    return p.region === selectedRegion;
  });

  return (
    <section className="py-22 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(14,165,233,0.08),rgba(11,25,44,0))] pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400">
              <Globe2 className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>International Supply Corridors &amp; Maritime Routes</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              Global Reach &amp; Export Corridors
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Exporting from our headquarters in <strong>Gujranwala, Punjab</strong> and container berths at <strong>Port Qasim &amp; Karachi Port</strong> across 42+ destinations worldwide.
            </p>
          </div>

          {/* Region Filter Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-md self-start lg:self-end">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedRegion === 'all'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Routes ({MAP_PORTS.length})
            </button>
            <button
              onClick={() => setSelectedRegion('europe')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedRegion === 'europe'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Europe &amp; UK
            </button>
            <button
              onClick={() => setSelectedRegion('middle-east')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedRegion === 'middle-east'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Middle East &amp; GCC
            </button>
            <button
              onClick={() => setSelectedRegion('americas')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedRegion === 'americas'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              North America
            </button>
            <button
              onClick={() => setSelectedRegion('asia-pacific')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedRegion === 'asia-pacific'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Asia-Pacific &amp; ANZ
            </button>
          </div>
        </div>

        {/* INTERACTIVE VISUAL TRADE MAP CANVAS */}
        <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          {/* Top Control Bar of Map */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-2 border-b border-slate-800/80 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>Origin Hub: Port Qasim (PKBQM) &amp; Karachi Port</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">
                Head Office: Gujranwala, Punjab, Pakistan
              </span>
            </div>

            <span className="text-[11px] text-slate-400">
              Click any port marker to view transit duration &amp; cargo profile
            </span>
          </div>

          {/* SVG Visual Map & Arcs */}
          <div className="relative w-full aspect-2/1 sm:aspect-21/9 min-h-[340px] max-h-[560px] overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/80">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Linear Gradients for maritime trade arcs */}
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="activeRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                </linearGradient>

                {/* Filter for glow */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* World Map Background Grid lines */}
              <g opacity="0.15" stroke="#475569" strokeWidth="0.5" strokeDasharray="3,3">
                <line x1="0" y1="125" x2="1000" y2="125" />
                <line x1="0" y1="250" x2="1000" y2="250" />
                <line x1="0" y1="375" x2="1000" y2="375" />
                <line x1="250" y1="0" x2="250" y2="500" />
                <line x1="500" y1="0" x2="500" y2="500" />
                <line x1="750" y1="0" x2="750" y2="500" />
              </g>

              {/* Simplified Stylized Continents Outlines */}
              <g fill="#1e293b" opacity="0.45" stroke="#334155" strokeWidth="0.75">
                {/* North America */}
                <path d="M 120 70 L 220 60 L 320 100 L 290 180 L 260 210 L 230 250 L 200 240 L 150 200 L 100 130 Z" />
                {/* Central America & Carib */}
                <path d="M 230 250 L 270 280 L 260 300 L 230 280 Z" />
                {/* South America */}
                <path d="M 270 300 L 370 320 L 390 390 L 350 460 L 300 420 L 270 330 Z" />
                {/* Europe */}
                <path d="M 460 110 L 540 100 L 560 160 L 520 200 L 460 190 L 440 150 Z" />
                {/* Africa */}
                <path d="M 450 210 L 560 210 L 590 300 L 560 410 L 490 400 L 440 270 Z" />
                {/* Asia / Eurasia */}
                <path d="M 550 90 L 820 90 L 890 180 L 820 260 L 720 280 L 630 240 L 560 180 Z" />
                {/* Australia */}
                <path d="M 800 340 L 920 340 L 910 420 L 810 420 Z" />
              </g>

              {/* Ocean Shipping Arcs from Pakistan Origin */}
              {filteredPorts.map((port) => {
                const isActive = activePort.id === port.id;
                // Calculate curved bezier midpoint
                const midX = (ORIGIN.x + port.x) / 2;
                const midY = Math.min(ORIGIN.y, port.y) - Math.abs(ORIGIN.x - port.x) * 0.16;

                return (
                  <g key={port.id}>
                    {/* Shadow curve */}
                    <path
                      d={`M ${ORIGIN.x} ${ORIGIN.y} Q ${midX} ${midY} ${port.x} ${port.y}`}
                      fill="none"
                      stroke={isActive ? '#38bdf8' : '#334155'}
                      strokeWidth={isActive ? 2.5 : 1}
                      strokeOpacity={isActive ? 0.9 : 0.35}
                      strokeDasharray={isActive ? 'none' : '4,4'}
                    />
                    
                    {/* Active Route Pulse Animation */}
                    {isActive && (
                      <path
                        d={`M ${ORIGIN.x} ${ORIGIN.y} Q ${midX} ${midY} ${port.x} ${port.y}`}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="3"
                        strokeDasharray="8,8"
                        className="animate-pulse"
                      />
                    )}
                  </g>
                );
              })}

              {/* Destination Port Markers */}
              {filteredPorts.map((port) => {
                const isSelected = activePort.id === port.id;
                return (
                  <g
                    key={port.id}
                    className="cursor-pointer transition-transform"
                    onClick={() => setActivePort(port)}
                  >
                    {/* Outer target pulse if selected */}
                    {isSelected && (
                      <circle
                        cx={port.x}
                        cy={port.y}
                        r="14"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1.5"
                        opacity="0.8"
                        className="animate-ping"
                      />
                    )}

                    {/* Port Outer Circle */}
                    <circle
                      cx={port.x}
                      cy={port.y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? '#38bdf8' : '#94a3b8'}
                      stroke="#0f172a"
                      strokeWidth="2"
                    />

                    {/* Port Label */}
                    <text
                      x={port.x}
                      y={port.y - (isSelected ? 9 : 7)}
                      textAnchor="middle"
                      fill={isSelected ? '#ffffff' : '#cbd5e1'}
                      fontSize={isSelected ? '10' : '8'}
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                    >
                      {port.name}
                    </text>
                  </g>
                );
              })}

              {/* Pakistan Origin Hub Beacon */}
              <g>
                <circle
                  cx={ORIGIN.x}
                  cy={ORIGIN.y}
                  r="16"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  opacity="0.6"
                  className="animate-ping"
                />
                <circle
                  cx={ORIGIN.x}
                  cy={ORIGIN.y}
                  r="8"
                  fill="#10b981"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text
                  x={ORIGIN.x}
                  y={ORIGIN.y + 18}
                  textAnchor="middle"
                  fill="#34d399"
                  fontSize="11"
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="bold"
                >
                  PK ORIGIN (Karachi / Gujranwala)
                </text>
              </g>
            </svg>

            {/* Quick Map Legend Overlay */}
            <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-800 rounded-xl px-3 py-2 text-[10px] text-slate-300 space-y-1 backdrop-blur-xs hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                <span>Origin Terminal: Port Qasim (PKBQM) / Karachi (PKKHI)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" />
                <span>Active Discharge Ports (FOB / CIF / CFR Terms)</span>
              </div>
            </div>
          </div>

          {/* ACTIVE SELECTED PORT SPOTLIGHT DRAWER CARD */}
          <div className="mt-5 p-5 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                <Ship className="w-7 h-7" />
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                    {activePort.code}
                  </span>
                  <span className="text-xs text-slate-400">
                    {activePort.country} · {activePort.region.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                  Port of {activePort.name}
                </h3>

                <p className="text-xs text-slate-300">
                  <strong className="text-slate-200">Primary Commodities:</strong> {activePort.primaryCargo}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Maritime Transit</span>
                <span className="font-bold text-emerald-400 text-sm mt-0.5 block">{activePort.transitDays}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Service Frequency</span>
                <span className="font-semibold text-white mt-0.5 block">{activePort.frequency}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Annual Throughput</span>
                <span className="font-semibold text-sky-300 mt-0.5 block">{activePort.annualTeu}</span>
              </div>

              <button
                onClick={() => onOpenQuickRfq('Himalayan Pink Salt', `${activePort.name} (${activePort.code})`)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer ml-auto"
              >
                <span>Calculate Freight to {activePort.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 4 REGIONAL EXPORT SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Europe */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">European Union &amp; UK</span>
                <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">42% Volume</span>
              </div>
              <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white">Rotterdam, Hamburg, UK</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regular weekly container consignments for food-grade edible salt, private-label retail pouches, and organic bakeries.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <span>Avg Transit: <strong>22–26 Days</strong> · Full B/L Telex</span>
            </div>
          </div>

          {/* Card 2: GCC */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Middle East &amp; GCC</span>
                <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">28% Volume</span>
              </div>
              <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white">Jebel Ali, Dammam, Doha</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct short-sea feeder lines. High-velocity shipments of fresh potatoes, onions, chilies, and industrial mineral salt.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <span>Avg Transit: <strong>3–7 Days</strong> · Express Clearance</span>
            </div>
          </div>

          {/* Card 3: North America */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">North America</span>
                <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">18% Volume</span>
              </div>
              <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white">New York, Los Angeles</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Handcrafted salt lamps, animal mineral licks for equestrian stables, and FDA-registered bulk salt in 25kg sacks.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <span>Avg Transit: <strong>26–34 Days</strong> · FDA FSVP Compliant</span>
            </div>
          </div>

          {/* Card 4: Asia-Pacific & Oceania */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Asia-Pacific &amp; ANZ</span>
                <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">12% Volume</span>
              </div>
              <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white">Singapore, Tokyo, Sydney</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gourmet culinary salt, livestock lick blocks with hanging ropes, and cosmetic spa crystal consignments.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <span>Avg Transit: <strong>12–28 Days</strong> · Biosecurity Tested</span>
            </div>
          </div>

        </div>

        {/* BOTTOM OCEAN CARRIER NETWORK & ACTIONS */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Guaranteed Carrier Bookings:</strong> Direct service contracts with Maersk, MSC, CMA CGM, and Hapag-Lloyd ensuring locked ocean freight rates and confirmed vessel space.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('logistics')}
              className="px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              View All Port Schedules
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              Request Custom Freight Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
