/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { SurgicalPage } from './components/pages/SurgicalPage';
import { RfqDrawer } from './components/rfq/RfqDrawer';
import { ProductSpecModal } from './components/common/ProductSpecModal';
import { CATEGORIES } from './data/catalog';
import { PageView, ProductVariant, RfqCartItem } from './types';
import { Check, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('surgical');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('himalayan-pink-salt');
  
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

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (page: PageView, categorySlug?: string) => {
    if (categorySlug === 'fresh-vegetables' || page === 'vegetables') {
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
      return [
        ...prev,
        {
          variantId: product.id,
          variantName: product.name,
          categoryName: 'Himalayan Pink Salt',
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 border border-slate-700 animate-in slide-in-from-bottom-3 duration-200">
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
      <main className="flex-1">
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
    </div>
  );
}
