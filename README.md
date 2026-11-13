# Utility Home Exports (Pvt Ltd)

> **Official Global B2B Export Portal** · [utilityhomeexports.com](https://utilityhomeexports.com)  
> **Headquarters**: Head Office: Jhelum, Pakistan  
> **Executive Desk**: CEO Nafees Arshad · Mobile / WhatsApp: +92 300 6474593  
> **Official Email**: Utilityhomeexport@gmail.com  
> **LinkedIn**: [linkedin.com/in/utilityhome-export](https://www.linkedin.com/in/utilityhome-export)

---

## Overview

Utility Home Exports is a government-registered Pakistani commercial export corporation (FBR & Pakistan Single Window verified, NTN: E435215) and an active corporate member of the Jhelum Chamber of Commerce & Industry (JCCI). 

We deliver authenticated commodities directly from source to international container terminals and sea ports across 42+ countries:

1. **Himalayan Pink Rock Salt**: 100% natural Khewra subterranean mining origin. Food grade edible fine/coarse salt crystals, cooking tiles, searing slabs, handcrafted salt lamps, and animal salt lick blocks.
2. **Fresh Agricultural Produce**: Direct farm-gate sourcing across Punjab river basins and Kunri. NARC-G1 garlic, fresh ginger rhizomes, premium red onions, commercial potatoes (Mozika/Asterix/Lady Rosetta), and purple-top turnips with cold-chain reefer logistics and DPP phytosanitary clearance.
3. **Surgical & Dental Hand Instruments**: Master-crafted in Sialkot and Jhelum. Medical-grade stainless steel extraction forceps, TC needle holders, hemostats, and dental diagnostic sets compliant with ISO 13485 and US FDA standards.

---

## Technical Stack & Architecture

- **Frontend Framework**: React 19 (TypeScript)
- **Bundler & Tooling**: Vite with strict tree-shaking and production asset optimization
- **Styling**: Tailwind CSS
- **Iconography**: Lucide React & FontAwesome 6 (non-blocking)
- **PDF Dossier & Catalog Generation**: jsPDF with vector-optimized client-side rendering
- **Form Routing**: Isolated Formspree endpoints with environment variable configuration
- **Search Optimization**: Semantic HTML5, Schema.org Corporation JSON-LD, OpenGraph, and Twitter Card specifications for `https://utilityhomeexports.com`

---

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or bun

### Local Development

1. Clone or extract the repository:
   ```bash
   cd utility-home-exports
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## Form Endpoints Configuration

Inquiries, RFQs, Contact messages, and Buyer reviews are routed through dedicated endpoints defined in `src/config/forms.ts`. To override them for custom endpoints, specify them in your `.env` file:

```env
VITE_SITE_URL="https://utilityhomeexports.com"
VITE_FORMSPREE_RFQ_ENDPOINT="https://formspree.io/f/your_rfq_id"
VITE_FORMSPREE_CONTACT_ENDPOINT="https://formspree.io/f/your_contact_id"
VITE_FORMSPREE_INQUIRY_ENDPOINT="https://formspree.io/f/your_inquiry_id"
VITE_FORMSPREE_REVIEW_ENDPOINT="https://formspree.io/f/your_review_id"
```

---

## Corporate Compliance & Registrations

- **Federal Board of Revenue (FBR)**: Registered Commercial Exporter (NTN: E435215)
- **Pakistan Single Window (PSW)**: Verified Commercial Customs Entity
- **Trade Development Authority of Pakistan (TDAP)**: Registered Exporter
- **Jhelum Chamber of Commerce & Industry (JCCI)**: Corporate Member
- **Quality Certifications**: ISO 9001:2015, ISO 22000 (HACCP), ISO 13485:2016, US FDA Registered Facility, Halal Certified
