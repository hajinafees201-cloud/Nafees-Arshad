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

const SITE_ORIGIN = 'https://www.utilityexport.com';
const BRAND_NAME = COMPANY_INFO?.name || 'Utility Home Exports';

const PAGE_METADATA: Record<string, PageMeta> = {
  home: {
    title: 'Utility Home | Himalayan Pink Salt, Produce & Cutlery Exporter',
    description: 'Direct B2B exporter from Pakistan supplying Himalayan pink salt, fresh vegetables, citrus, cutlery, and surgical instruments to global buyers.',
    keywords: 'Pakistan exporter, Himalayan pink salt supplier, fresh vegetables exporter Pakistan, citrus exporter Pakistan, cutlery exporter Pakistan, surgical instruments exporter Pakistan, B2B supplier Pakistan',
    canonicalPath: '/',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'Corporation'
  },
  'category:himalayan-pink-salt': {
    title: 'Wholesale Himalayan Pink Salt Exporter | Utility Home',
    description: 'Bulk Khewra Himalayan pink salt from Pakistan: fine & coarse edible salt, salt lamps, animal licks, tiles, and spa salt for wholesale & private label.',
    keywords: 'wholesale Himalayan pink salt supplier, bulk pink salt exporter Pakistan, private label edible pink salt, Himalayan salt lamps wholesale, animal salt lick blocks',
    canonicalPath: '/?page=category&slug=himalayan-pink-salt',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'Product'
  },
  'category:surgical-instruments': {
    title: 'Surgical & Dental Instruments Exporter | Utility Home',
    description: 'Precision stainless steel surgical and dental instruments from Pakistan for international B2B distributors, hospitals, and medical importers.',
    keywords: 'surgical instruments exporter Pakistan, dental instruments wholesale, stainless steel surgical tools B2B, medical instruments supplier Pakistan',
    canonicalPath: '/?page=category&slug=surgical-instruments',
    ogImage: '/images/surgical_hero_banner.jpg',
    schemaType: 'MedicalDevice'
  },
  'category:cutlery': {
    title: 'Cutlery & Blades Exporter Pakistan | Utility Home',
    description: 'Durable export-grade cutlery, kitchen knives, and blades from Pakistan for wholesale distributors and international B2B buyers.',
    keywords: 'cutlery exporter Pakistan, wholesale knives supplier Pakistan, kitchen cutlery B2B export, Pakistan cutlery manufacturer',
    canonicalPath: '/?page=category&slug=cutlery',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'Product'
  },
  vegetables: {
    title: 'Fresh Produce & Citrus Exporter Pakistan | Utility Home',
    description: 'Direct export of fresh Pakistani citrus, vegetables, and agricultural produce via air and sea freight for global wholesale importers.',
    keywords: 'fresh produce exporter Pakistan, citrus exporter Pakistan, fresh vegetables export Dubai, agricultural exporter Pakistan',
    canonicalPath: '/?page=vegetables',
    ogImage: '/images/garlic_bulbs_export.jpg',
    schemaType: 'Product'
  },
  about: {
    title: 'About Utility Home Exports | Pakistan B2B Exporter',
    description: 'Learn about Utility Home Exports in Jhelum, Pakistan—sourcing Himalayan pink salt, fresh produce, citrus, cutlery, and surgical instruments for global B2B trade.',
    keywords: 'Utility Home Exports about, Pakistan export company Jhelum, B2B exporter Pakistan',
    canonicalPath: '/?page=about',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'Organization'
  },
  logistics: {
    title: 'Export Logistics & Shipping Terms | Utility Home',
    description: 'Reliable sea and air freight logistics from Pakistan with transparent export documentation and B2B shipping support for international buyers.',
    keywords: 'export logistics Pakistan, FOB CIF shipping Pakistan, container export Pakistan',
    canonicalPath: '/?page=logistics',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'WebPage'
  },
  certifications: {
    title: 'Export Compliance & Certifications | Utility Home',
    description: 'View registration, quality standards, and export compliance details for Utility Home Exports from Pakistan.',
    keywords: 'export compliance Pakistan, PSW FBR registered exporter, quality standards export Pakistan',
    canonicalPath: '/?page=certifications',
    ogImage: '/images/pink_salt_banner.jpg',
    schemaType: 'WebPage'
  },
  contact: {
    title: 'Contact Utility Home | Export Inquiries & Global B2B Supply',
    description: 'Contact Utility Home for B2B export inquiries, product specifications, pricing, and international trade communication from Pakistan.',
    keywords: 'request export quote Pakistan, B2B RFQ Himalayan pink salt, export inquiry Pakistan',
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

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Helper to set or create meta tag safely
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Helper for link tags (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const fullCanonical = `${SITE_ORIGIN}${meta.canonicalPath}`;
    const fullOgImage = meta.ogImage.startsWith('http')
      ? meta.ogImage
      : `${SITE_ORIGIN}${meta.ogImage}`;

    // 4. Standard & Search Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('meta[name="author"]', 'name', 'author', BRAND_NAME);

    // 5. OpenGraph Metadata
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonical);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullOgImage);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', BRAND_NAME);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 6. Twitter Card Metadata
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullOgImage);

    // 7. Canonical Link
    setLinkTag('canonical', fullCanonical);

    // 8. Structured Data (JSON-LD)
    const sameAsLinks: string[] = [];
    if (COMPANY_INFO?.linkedin) sameAsLinks.push(COMPANY_INFO.linkedin);
    if (COMPANY_INFO?.whatsappUrl) sameAsLinks.push(COMPANY_INFO.whatsappUrl);

    const organizationNode: Record<string, unknown> = {
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
      name: BRAND_NAME,
      url: SITE_ORIGIN,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/images/utility_home_export_logo.jpeg`
      },
      image: `${SITE_ORIGIN}/images/utility_home_export_logo.jpeg`,
      description: meta.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jhelum',
        addressRegion: 'Punjab',
        addressCountry: 'PK'
      }
    };

    if (COMPANY_INFO?.email) organizationNode.email = COMPANY_INFO.email;
    if (COMPANY_INFO?.whatsapp) organizationNode.telephone = COMPANY_INFO.whatsapp;
    if (COMPANY_INFO?.ceo) {
      organizationNode.founder = {
        '@type': 'Person',
        name: COMPANY_INFO.ceo,
        ...(COMPANY_INFO?.designation ? { jobTitle: COMPANY_INFO.designation } : {})
      };
    }
    if (sameAsLinks.length > 0) {
      organizationNode.sameAs = sameAsLinks;
    }

    const schemaOrgData = {
      '@context': 'https://schema.org',
      '@graph': [
        organizationNode,
        {
          '@type': 'WebSite',
          '@id': `${SITE_ORIGIN}/#website`,
          url: SITE_ORIGIN,
          name: BRAND_NAME,
          publisher: {
            '@id': `${SITE_ORIGIN}/#organization`
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
              item: SITE_ORIGIN
            },
            ...(metaKey !== 'home'
              ? [
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: meta.title.split('|')[0].split('–')[0].trim(),
                    item: fullCanonical
                  }
                ]
              : [])
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
