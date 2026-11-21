/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { FeaturedCategories } from './components/home/FeaturedCategories';
import { ValueProposition } from './components/home/ValueProposition';
import { GlobalReachSection } from './components/home/GlobalReachSection';
import { CategoryPage } from './components/pages/CategoryPage';
import { AboutPage } from './components/pages/AboutPage';
import { LogisticsPage } from './components/pages/LogisticsPage';
import { CertificationsPage } from './components/pages/CertificationsPage';
import { ContactRfqPage } from './components/pages/ContactRfqPage';
import { VegetablesPage } from './components/pages/VegetablesPage';
import { RfqDrawer } from './components/rfq/RfqDrawer';
import { ProductSpecModal } from './components/common/ProductSpecModal';
import { CATEGORIES } from './data/catalog';
import { PageView, ProductVariant, RfqCartItem } from './types';
import { Check, CheckCircle2 } from 'lucide-react';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { CustomerReviewsSection } from './components/home/CustomerReviewsSection';
import { SEO } from './components/common/SEO';

const getStateFromPath = (pathname: string): { page: PageView; slug: string } => {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath === '/fresh-vegetables' || cleanPath === '/vegetables') {
    return { page: 'vegetables', slug: 'fresh-vegetables' };
  }
  if (cleanPath === '/about') {
    return { page: 'about', slug: 'himalayan-pink-salt' };
  }
  if (cleanPath === '/logistics') {
    return { page: 'logistics', slug: 'himalayan-pink-salt' };
  }
  if (cleanPath === '/certifications') {
    return { page: 'certifications', slug: 'himalayan-pink-salt' };
  }
  if (cleanPath === '/contact') {
    return { page: 'contact', slug: 'himalayan-pink-salt' };
  }
  if (cleanPath === '/himalayan-pink-salt') {
    return { page: 'category', slug: 'himalayan-pink-salt' };
  }
  if (cleanPath === '/surgical-dental-instruments') {
    return { page: 'category', slug: 'surgical-dental-instruments' };
  }

  return { page: 'home', slug: 'himalayan-pink-salt' };
};

const getPathForNavigation = (page: PageView, categorySlug?: string): string => {
  if (categorySlug === 'fresh-vegetables' || page === 'vegetables') {
    return '/fresh-vegetables';
  }
  if (page === 'category') {
    return `/${categorySlug || 'himalayan-pink-salt'}`;
  }
  if (page === 'home') {
    return '/';
  }
  return `/${page}`;
};

export default function App() {
  const initialState = getStateFromPath(window.location.pathname);
  const [currentPage, setCurrentPage] = useState<PageView>(initialState.page);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>(initialState.slug);

  // RFQ Basket state
  const [rfqItems, setRfqItems] = useState<RfqCartItem[]>([
    {
      variantId: 'salt-edible-fine-coarse',
      variantName: 'Edible Himalayan Pink Salt (Fine & Coarse)',
      categoryName: 'Himalayan Pink Salt',
      hsCode: '2501.00.90',
      quantity: 1,
      unit: '20ft FCL Containers',
      packagingPreference: '25kg Multi-Wall PP Bags with PE liner',
      targetIncoterm: 'CIF',
      destinationPort: 'Rotterdam (NLRTM)'
    }
  ]);
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState<boolean>(false);
  const [productForSpec, setProductForSpec] = useState<ProductVariant | null>(null);

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Pre-fill state for contact page
  const [contactPrefill, setContactPrefill] = useState<{
    product?: string;
    port?: string;
    volume?: string;
  }>({});

  useEffect(() => {
    const handlePopState = () => {
      const nextState = getStateFromPath(window.location.pathname);
      setCurrentPage(nextState.page);
      setSelectedCategorySlug(nextState.slug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (page: PageView, categorySlug?: string) => {
    const targetPath = getPathForNavigation(page, categorySlug);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

    if (categorySlug === 'fresh-vegetables' || page === 'vegetables') {
      setSelectedCategorySlug('fresh-vegetables');
      setCurrentPage('vegetables');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (categorySlug) {
      setSelectedCategorySlug(categorySlug);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: ProductVariant) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.variantId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.variantId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const parentCategory = CATEGORIES.find((cat) => cat.variants.some((v) => v.id === product.id));
      return [
        ...prev,
        {
          variantId: product.id,
          variantName: product.name,
          categoryName: parentCategory ? parentCategory.title : 'Export Line',
          hsCode: product.hsCode,
          quantity: 1,
          unit: '20ft FCL Containers',
          packagingPreference: product.packagingOptions[0] || '25kg PP Bags',
          targetIncoterm: 'CIF'
        }
      ];
    });
    showToast(`Added ${product.name} to RFQ Cart`);
  };

  const handleInquireDirectly = (product: ProductVariant) => {
    setContactPrefill({
      product: product.name,
      volume: '1 x 20ft FCL (25 MT)'
    });
    handleNavigate('contact');
  };

  const handleHeroQuickRfq = (productName: string, port?: string, volume?: string) => {
    setContactPrefill({
      product: productName,
      port: port,
      volume: volume
    });
    handleNavigate('contact');
  };

  const handleUpdateQuantity = (variantId: string, quantity: number) => {
    setRfqItems((prev) =>
      prev.map((item) =>
        item.variantId === variantId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (variantId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.variantId !== variantId));
  };

  const handleClearCart = () => {
    setRfqItems([]);
  };

  const handleAddDefaultProduct = () => {
    const defaultProduct = CATEGORIES[0].variants[0];
    if (defaultProduct) {
      handleAddToCart(defaultProduct);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-600 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Dynamic SEO & Schema.org Controller */}
      <SEO currentPage={currentPage} categorySlug={selectedCategorySlug} />

      {/* Accessibility: Skip to Main Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:text-xs focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Toast Notification (Left positioned to not conflict with floating WhatsApp) */}
      {toastMessage && (
        <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[calc(100vw-2rem)] z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 border border-slate-700 animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Global Header */}
      <Navbar
        currentPage={currentPage}
        selectedCategorySlug={selectedCategorySlug}
        onNavigate={handleNavigate}
        rfqItems={rfqItems}
        onOpenRfqDrawer={() => setIsRfqDrawerOpen(true)}
      />

      {/* Page Body Views */}
      <main id="main-content" className="flex-1 w-full max-w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenQuickRfq={handleHeroQuickRfq}
            />
            <FeaturedCategories
              onNavigate={handleNavigate}
              onOpenQuickRfq={(prod) => handleHeroQuickRfq(prod)}
            />
            <GlobalReachSection
              onNavigate={handleNavigate}
              onOpenQuickRfq={handleHeroQuickRfq}
            />
            <CustomerReviewsSection />
            <ValueProposition
              onNavigate={handleNavigate}
              onOpenQuickRfq={() => setIsRfqDrawerOpen(true)}
            />
          </>
        )}

        {currentPage === 'category' && (
          <CategoryPage
            categorySlug={selectedCategorySlug}
            onNavigate={handleNavigate}
            onSelectProductForSpec={(prod) => setProductForSpec(prod)}
            onAddToRfq={handleAddToCart}
            onInquireDirectly={handleInquireDirectly}
          />
        )}

        {currentPage === 'vegetables' && (
          <VegetablesPage
            onNavigate={handleNavigate}
            onOpenQuickRfq={handleHeroQuickRfq}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'logistics' && (
          <LogisticsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'certifications' && (
          <CertificationsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactRfqPage
            initialProduct={contactPrefill.product}
            initialPort={contactPrefill.port}
            initialVolume={contactPrefill.volume}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive RFQ Basket Drawer */}
      <RfqDrawer
        isOpen={isRfqDrawerOpen}
        onClose={() => setIsRfqDrawerOpen(false)}
        items={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenQuickAdd={handleAddDefaultProduct}
      />

      {/* Technical Spec Sheet Modal */}
      <ProductSpecModal
        product={productForSpec}
        onClose={() => setProductForSpec(null)}
        onAddToRfq={handleAddToCart}
      />

      {/* Live WhatsApp Inquiry Floating Button (Bottom Right) */}
      <WhatsAppFloatingButton currentPage={currentPage} />
    </div>
  );
}
