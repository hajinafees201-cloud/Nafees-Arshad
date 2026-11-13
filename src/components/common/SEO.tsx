import React, { useEffect } from 'react';
import { PageView } from '../../types';
import { COMPANY_INFO } from '../../data/company';

interface SEOProps {
  currentPage: PageView;
  categorySlug?: string;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogImage: string;
  schemaType: string;
}

const PAGE_METADATA: Record<string, PageMeta> = {
  home: {
    title: 'Utility Home Exports – Pakistan B2B Exporter',
    description: 'FBR & PSW registered exporter (Head Office: Jhelum, Pakistan). Direct bulk exporter of Himalayan Pink Salt, Fresh Agricultural Produce, and Surgical Instruments.',
    keywords: 'Pakistan exporter, Himalayan pink salt supplier, fresh vegetables export, surgical instruments Sialkot, Head Office Jhelum Pakistan, B2B exporter Jhelum, PSW registered exporter',
    canonicalPath: '/',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'Corporation'
  },
  'category:himalayan-pink-salt': {
    title: 'Himalayan Pink Salt Exporter | Utility Home',
    description: 'Authentic Khewra rock salt supplier. Food grade fine & coarse pink salt, handcrafted lamps, cooking slabs, and animal salt licks in 20ft/40ft containers.',
    keywords: 'Himalayan pink salt exporter, Khewra rock salt bulk, edible pink salt 25kg bags, pink salt lamps wholesale, animal salt lick blocks, cooking salt slabs',
    canonicalPath: '/?page=category&slug=himalayan-pink-salt',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'Product'
  },
  'category:surgical-instruments': {
    title: 'Surgical & Dental Instruments | Utility Home',
    description: 'ISO 13485 & CE certified surgical & dental hand instruments forged in Sialkot & Jhelum. Stainless steel extraction tools, hemostats, and TC needle holders.',
    keywords: 'Surgical instruments exporter Pakistan, dental extraction forceps, hemostatic artery clamps, TC needle holders, Sialkot surgical tools, ISO 13485 medical devices',
    canonicalPath: '/?page=category&slug=surgical-instruments',
    ogImage: '/images/surgical_hero_banner.jpg',
    schemaType: 'MedicalDevice'
  },
  vegetables: {
    title: 'Fresh Pakistani Vegetables Export | Utility Home',
    description: 'Direct farm-gate exporter of Pakistani garlic, ginger, onions, potatoes, turnips, and chillies. Reefer container & air freight logistics with phytosanitary.',
    keywords: 'Pakistani fresh vegetables export, fresh ginger wholesale, NARC-G1 garlic exporter, fresh potatoes Lady Rosetta, red onions Pakistan, DPP phytosanitary certified',
    canonicalPath: '/?page=vegetables',
    ogImage: '/images/garlic_bulbs_export.jpg',
    schemaType: 'Product'
  },
  about: {
    title: 'About Utility Home Exports – Jhelum Pakistan',
    description: 'Utility Home Exports (Head Office: Jhelum, Pakistan) is led by CEO Nafees Arshad, exporting certified Himalayan salt, fresh produce, and surgical tools.',
    keywords: 'Utility Home Exports about, Nafees Arshad CEO, Jhelum Chamber of Commerce, FBR Pakistan exporter, Khewra salt quarry origin, PSW compliance',
    canonicalPath: '/?page=about',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'Organization'
  },
  logistics: {
    title: 'Logistics & Incoterms (FOB/CIF) | Utility Home',
    description: 'Global maritime freight from Port Qasim and Karachi. Transparent Incoterms 2020 (FOB, CIF, CFR, EXW) with moisture-barrier packaging across 42+ ports.',
    keywords: 'Pakistan maritime logistics, Incoterms 2020 FOB CIF, Port Qasim Karachi container shipping, 20ft FCL salt payload, reefer container schedule',
    canonicalPath: '/?page=logistics',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'WebPage'
  },
  certifications: {
    title: 'Halal & ISO Certifications | Utility Home',
    description: 'Official Halal certified facility, ISO 9001, ISO 22000, ISO 13485, US FDA registered, and Pakistan Single Window (PSW) verified exporter documentation.',
    keywords: 'Halal certified exporter Pakistan, ISO 22000 HACCP salt, ISO 13485 surgical compliance, FDA registered facility Pakistan, DPP phytosanitary certificate',
    canonicalPath: '/?page=certifications',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'WebPage'
  },
  contact: {
    title: 'Request a Bulk Export Quote | Utility Home',
    description: 'Request fast-track FOB/CIF export quotations for full container loads (FCL). Guaranteed Proforma Invoice dispatched within 12–24 business hours.',
    keywords: 'Request for quotation RFQ export, bulk container quote Pakistan, Utility Home contact, Nafees Arshad WhatsApp, export sales desk Jhelum',
    canonicalPath: '/?page=contact',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'ContactPage'
  }
};

export const SEO: React.FC<SEOProps> = ({ currentPage, categorySlug }) => {
  useEffect(() => {
    const metaKey = currentPage === 'category' && categorySlug 
      ? `category:${categorySlug}` 
      : currentPage;

    const meta = PAGE_METADATA[metaKey] || PAGE_METADATA.home;

    // 1. Update Title (Strictly under 60 characters)
    document.title = meta.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // Helper for link tags (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    const origin = 'https://utilityhomeexports.com';
    const fullCanonical = `${origin}${meta.canonicalPath}`;
    const fullOgImage = meta.ogImage.startsWith('http') ? meta.ogImage : `${origin}${meta.ogImage}`;

    // 3. Technical Meta Description (Strictly 120-160 characters)
    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('meta[name="author"]', 'name', 'author', 'Utility Home Exports');

    // 4. OpenGraph Social Cards
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonical);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullOgImage);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Utility Home Exports');
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 5. Twitter / X Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullOgImage);

    // 6. Canonical Link Tag
    setLinkTag('canonical', fullCanonical);

    // 7. Dynamic Schema.org JSON-LD Structured Data
    const schemaOrgData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Corporation',
          '@id': `${origin}/#corporation`,
          name: COMPANY_INFO.name,
          legalName: COMPANY_INFO.legalName,
          url: origin,
          logo: `${origin}/images/utility_home_export_logo.jpeg`,
          image: `${origin}/images/utility_home_export_logo.jpeg`,
          description: meta.description,
          email: COMPANY_INFO.email,
          telephone: COMPANY_INFO.whatsapp,
          founder: {
            '@type': 'Person',
            name: COMPANY_INFO.ceo,
            jobTitle: COMPANY_INFO.designation
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Head Office: Jhelum, Pakistan',
            addressLocality: 'Jhelum',
            addressRegion: 'Punjab',
            addressCountry: 'PK'
          },
          sameAs: [
            COMPANY_INFO.linkedin,
            COMPANY_INFO.whatsappUrl
          ],
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Pakistan Single Window (PSW) Verified Exporter'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'FBR National Tax Number (NTN) Registered'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'ISO 22000 HACCP Food Safety Certified'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'ISO 13485:2016 Medical Devices Standard'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'Official Halal Certified Facility'
            }
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${origin}/#website`,
          url: origin,
          name: COMPANY_INFO.name,
          publisher: {
            '@id': `${origin}/#corporation`
          },
          inLanguage: 'en-US'
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${fullCanonical}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: origin
            },
            ...(metaKey !== 'home' ? [{
              '@type': 'ListItem',
              position: 2,
              name: meta.title.split('|')[0].split('–')[0].trim(),
              item: fullCanonical
            }] : [])
          ]
        }
      ]
    };

    let scriptEl = document.getElementById('schema-org-jsonld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'schema-org-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaOrgData);

  }, [currentPage, categorySlug]);

  return null;
};
