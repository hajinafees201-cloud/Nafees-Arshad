import React from 'react';
import { 
  X, 
  Download, 
  FileCheck2, 
  Check, 
  Package, 
  Layers, 
  Scale, 
  Award,
  Plus
} from 'lucide-react';
import { ProductVariant } from '../../types';
import { COMPANY_INFO } from '../../data/company';

interface ProductSpecModalProps {
  product: ProductVariant | null;
  onClose: () => void;
  onAddToRfq: (product: ProductVariant) => void;
}

export const ProductSpecModal: React.FC<ProductSpecModalProps> = ({
  product,
  onClose,
  onAddToRfq
}) => {
  if (!product) return null;

  const handleDownloadSpec = () => {
    const text = `
=================================================================
TECHNICAL SPECIFICATION SHEET - UTILITY HOME B2B EXPORT
=================================================================
Product Name      : ${product.name}
HS Code           : ${product.hsCode}
Subcategory       : ${product.subcategory.toUpperCase()}
Minimum Order Qty : ${product.moq}
Origin            : Khewra / Salt Range, Pakistan

DESCRIPTION:
${product.description}

KEY TECHNICAL SPECIFICATIONS:
${product.keySpecs.map(s => `- ${s.label}: ${s.value}`).join('\n')}

AVAILABLE GRAIN SIZES / CALIBERS:
${product.grainSizes ? product.grainSizes.map(g => `- ${g}`).join('\n') : 'Standard bulk dimensions'}

CONTAINER STUFFING SPECIFICATIONS:
- 20ft FCL Container : ${product.containerStuffing.twentyFtFcl}
- 40ft FCL Container : ${product.containerStuffing.fortyFtFcl}
- Pallet Configuration: ${product.containerStuffing.palletized}

PACKAGING OPTIONS:
${product.packagingOptions.map(p => `- ${p}`).join('\n')}

COMPLIANCE & CERTIFICATIONS:
${product.certifications.map(c => `- ${c}`).join('\n')}

COMMERCIAL CONTACT:
${COMPANY_INFO.name} / ${COMPANY_INFO.legalName}
Contact Person / CEO : ${COMPANY_INFO.ceo}
Location / Address   : ${COMPANY_INFO.headquarters}
Email                : ${COMPANY_INFO.email}
Phone / WhatsApp     : ${COMPANY_INFO.whatsapp}
=================================================================
    `.trim();

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.id}-technical-datasheet.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-600/90 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-orange-400">
                  HS Code: {product.hsCode}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-300">
                  MOQ: {product.moq}
                </span>
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mt-0.5">
                {product.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Overview & Image Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 rounded-xl overflow-hidden aspect-4/3 border border-slate-200 shadow-xs">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                {product.keySpecs.map((spec, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                      {spec.label}
                    </span>
                    <span className="font-semibold text-slate-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grain Sizes / Caliber Breakdown */}
          {product.grainSizes && product.grainSizes.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-orange-600" />
                <span>Available Grain Sizes &amp; Mesh Grading</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.grainSizes.map((size, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{size}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Maritime Container Stuffing Grid */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-orange-600" />
              <span>Container Stuffing &amp; Payload Guide</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 text-[10px] uppercase font-semibold block">
                  20ft FCL Standard
                </span>
                <span className="font-bold text-slate-900 mt-1 block">
                  {product.containerStuffing.twentyFtFcl}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 text-[10px] uppercase font-semibold block">
                  40ft FCL High Cube
                </span>
                <span className="font-bold text-slate-900 mt-1 block">
                  {product.containerStuffing.fortyFtFcl}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 text-[10px] uppercase font-semibold block">
                  Pallet Configuration
                </span>
                <span className="font-bold text-slate-900 mt-1 block">
                  {product.containerStuffing.palletized}
                </span>
              </div>
            </div>
          </div>

          {/* Packaging Options */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-orange-600" />
              <span>Packaging &amp; OEM Options</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.packagingOptions.map((pack, idx) => (
                <li key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-md border border-slate-100 text-slate-700">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>{pack}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Tested Standards &amp; Compliance</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {product.certifications.map((cert, idx) => (
                <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-md font-medium border border-emerald-200/60">
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDownloadSpec}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Technical Sheet (.txt)</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onAddToRfq(product);
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add to RFQ Basket</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
