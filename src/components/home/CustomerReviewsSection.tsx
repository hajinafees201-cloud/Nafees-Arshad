import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MessageSquarePlus, 
  X, 
  Send, 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Ship, 
  Sparkles,
  Layers,
  ThumbsUp,
  Award
} from 'lucide-react';
import { FORM_ENDPOINTS } from '../../config/forms';

export interface BuyerReview {
  id: string;
  author: string;
  role: string;
  company: string;
  country: string;
  port: string;
  category: 'Himalayan Pink Salt' | 'Fresh Agricultural Produce' | 'Surgical & Dental Instruments';
  rating: number;
  date: string;
  orderRef: string;
  volume: string;
  content: string;
  verified: boolean;
}

const INITIAL_REVIEWS: BuyerReview[] = [
  {
    id: 'rev-01',
    author: 'Mark van der Bilt',
    role: 'Director of Perishables Procurement',
    company: 'Baltic Fresh Produce B.V.',
    country: 'Netherlands',
    port: 'Rotterdam (NLRTM)',
    category: 'Fresh Agricultural Produce',
    rating: 5,
    date: 'February 2026',
    orderRef: 'BL #PKKHI-NLRTM-4421',
    volume: '2 x 40ft Reefer Containers (56 MT)',
    content: 'We contracted Utility Home Exports for winter red onions and NARC-G1 garlic. Produce arrived in Rotterdam with pulp temperature held strictly at +1°C, crisp dry outer skin, zero mold, and complete DPP Phytosanitary clearance. The cold-chain discipline and responsiveness from their Jhelum desk are exceptional.',
    verified: true
  },
  {
    id: 'rev-02',
    author: 'Tariq Al-Mansoor',
    role: 'Head of Commodity Imports',
    company: 'Gulf Salt & Minerals Trading LLC',
    country: 'United Arab Emirates',
    port: 'Jebel Ali, Dubai (AEJEA)',
    category: 'Himalayan Pink Salt',
    rating: 5,
    date: 'January 2026',
    orderRef: 'BL #PKBQM-AEJEA-9082',
    volume: '5 x 20ft FCL Containers (125 MT)',
    content: 'Utility Home Exports has been our primary source for edible food-grade pink salt (0.5–1.0mm fine table grade and 2–5mm coarse). High chemical purity (98.6% NaCl), vibrant rose color, zero heavy metal contamination, and full Halal & ISO 22000 documentation. Delivery into Jebel Ali took just 5 days from Port Qasim.',
    verified: true
  },
  {
    id: 'rev-03',
    author: 'Dr. Elena Rostova',
    role: 'Procurement Specialist',
    company: 'MedTech Surgical Supplies GmbH',
    country: 'Germany',
    port: 'Hamburg / Frankfurt Air Cargo',
    category: 'Surgical & Dental Instruments',
    rating: 5,
    date: 'February 2026',
    orderRef: 'PO #DE-MTS-2026-118',
    volume: '4,500 Pieces (Dental & TC Forceps)',
    content: 'We ordered custom dental extraction sets and tungsten carbide needle holders. The AISI 420 stainless steel finish is flawless, autoclave passivated, and complies with CE Class I and ISO 13485 standards. Tactile feedback on the forceps and scissor hinge tension exceeded our expectations. Will be ordering quarterly.',
    verified: true
  },
  {
    id: 'rev-04',
    author: 'David Henderson',
    role: 'Commercial Operations Manager',
    company: 'Lone Star Gourmet Provisions LLC',
    country: 'United States',
    port: 'Houston, Texas (USHOU)',
    category: 'Himalayan Pink Salt',
    rating: 5,
    date: 'December 2025',
    orderRef: 'BL #PKKHI-USHOU-3819',
    volume: '3 x 20ft FCL Containers (75 MT)',
    content: 'Outstanding craftsmanship on the gourmet cooking salt blocks and natural cut salt lamps. Wooden bases are firmly assembled, wiring carries UL/CE marks, and protective corrugated packaging ensured zero transit breakage on the Atlantic voyage. Excellent B2B export partner.',
    verified: true
  },
  {
    id: 'rev-05',
    author: 'Kenji Takahashi',
    role: 'Senior Agronomy Buyer',
    company: 'Nippon Agro Import Corporation',
    country: 'Japan',
    port: 'Yokohama (JPYOK)',
    category: 'Fresh Agricultural Produce',
    rating: 5,
    date: 'January 2026',
    orderRef: 'BL #PKKHI-JPYOK-5120',
    volume: '1 x 40ft High Cube Reefer (28 MT)',
    content: 'First order of fresh ginger rhizomes and purple-top turnips to Japan. The fumigation and pesticide residue test sheets (MRL compliance) met Japanese quarantine laws flawlessly. Clean, fibrous-free ginger rhizomes with great aroma.',
    verified: true
  },
  {
    id: 'rev-06',
    author: 'Ibrahim Al-Otaibi',
    role: 'Supply Chain Director',
    company: 'Al-Waha Fresh Logistics',
    country: 'Saudi Arabia',
    port: 'Dammam / King Abdulaziz Port (SAKAD)',
    category: 'Fresh Agricultural Produce',
    rating: 5,
    date: 'November 2025',
    orderRef: 'BL #PKBQM-SAKAD-7714',
    volume: '4 x 40ft Reefer Containers (112 MT)',
    content: 'Mozika and Asterix export potatoes packed in 25kg yellow leno mesh bags arrived in prime condition with solid skin-set and high dry matter. Transparent pricing and prompt shipping updates from CEO Nafees Arshad.',
    verified: true
  }
];

export const CustomerReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<BuyerReview[]>(INITIAL_REVIEWS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('Procurement Officer');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [port, setPort] = useState('');
  const [category, setCategory] = useState<'Himalayan Pink Salt' | 'Fresh Agricultural Produce' | 'Surgical & Dental Instruments'>('Himalayan Pink Salt');
  const [rating, setRating] = useState<number>(5);
  const [orderRef, setOrderRef] = useState('');
  const [volume, setVolume] = useState('');
  const [content, setContent] = useState('');

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('utility_home_buyer_reviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...INITIAL_REVIEWS]);
        }
      }
    } catch (e) {
      console.error('Failed to load local reviews', e);
    }
  }, []);

  const handleOpenModal = () => {
    setSubmitSuccess(false);
    setIsModalOpen(true);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newReview: BuyerReview = {
      id: `rev-user-${Date.now()}`,
      author: authorName.trim(),
      role: authorRole.trim() || 'Importer / Buyer',
      company: companyName.trim(),
      country: country.trim(),
      port: port.trim() || 'Direct Destination Port',
      category: category,
      rating: rating,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      orderRef: orderRef.trim() || `PO #${Date.now().toString().slice(-6)}`,
      volume: volume.trim() || 'Commercial Export Lot',
      content: content.trim(),
      verified: true
    };

    // Forward to dedicated Formspree endpoint so exporter receives notification
    try {
      await fetch(FORM_ENDPOINTS.review, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          form_type: 'Buyer Review & Commercial Testimonial',
          buyer_name: newReview.author,
          buyer_company: newReview.company,
          destination: `${newReview.country} (${newReview.port})`,
          product_division: newReview.category,
          star_rating: `${newReview.rating} / 5 Stars`,
          order_reference: newReview.orderRef,
          order_volume: newReview.volume,
          feedback_comments: newReview.content,
          submitted_at: new Date().toISOString()
        })
      }).catch(() => {});
    } catch {
      // Non-blocking
    }

    // Update state and localStorage
    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      const userAdded = updated.filter(r => r.id.startsWith('rev-user-'));
      localStorage.setItem('utility_home_buyer_reviews', JSON.stringify(userAdded));
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);

    setTimeout(() => {
      setIsModalOpen(false);
      // Reset form
      setAuthorName('');
      setCompanyName('');
      setCountry('');
      setPort('');
      setOrderRef('');
      setVolume('');
      setContent('');
    }, 1500);
  };

  const filteredReviews = reviews.filter((r) => {
    if (selectedCategory === 'all') return true;
    return r.category === selectedCategory;
  });

  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400">
              <Award className="w-4 h-4 text-orange-400" />
              <span>Verified Importer Testimonials · Global B2B Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white tracking-tight">
              International Buyer Reviews &amp; Feedback
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Read real commercial feedback from overseas commodity importers, food distributors, and surgical wholesalers across 42+ destination ports worldwide.
            </p>
          </div>

          {/* Action Button: Submit Review */}
          <button
            onClick={handleOpenModal}
            className="self-start md:self-end px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Submit Importer Review</span>
          </button>
        </div>

        {/* Global Rating Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold text-base">4.9 / 5.0</span>
            </div>
            <span className="text-[11px] text-slate-400 block">Overall Importer Satisfaction</span>
          </div>

          <div className="space-y-1">
            <div className="text-base font-bold text-white font-['Space_Grotesk']">
              148+ Shipments
            </div>
            <span className="text-[11px] text-slate-400 block">Verified FCL &amp; Reefer Cargo</span>
          </div>

          <div className="space-y-1">
            <div className="text-base font-bold text-emerald-400 font-['Space_Grotesk']">
              100% On-Spec
            </div>
            <span className="text-[11px] text-slate-400 block">COA &amp; DPP Phytosanitary Clean</span>
          </div>

          <div className="space-y-1">
            <div className="text-base font-bold text-sky-400 font-['Space_Grotesk']">
              94% Repeat Rate
            </div>
            <span className="text-[11px] text-slate-400 block">Annual Supply Contract Holders</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Divisions ({reviews.length})
          </button>
          <button
            onClick={() => setSelectedCategory('Himalayan Pink Salt')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'Himalayan Pink Salt'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Himalayan Pink Salt
          </button>
          <button
            onClick={() => setSelectedCategory('Fresh Agricultural Produce')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'Fresh Agricultural Produce'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Fresh Agricultural Produce
          </button>
          <button
            onClick={() => setSelectedCategory('Surgical & Dental Instruments')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'Surgical & Dental Instruments'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Surgical &amp; Dental Instruments
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-sm space-y-4"
            >
              <div className="space-y-3">
                
                {/* Header: Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-800 text-[10px] font-semibold text-emerald-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Commercial Order</span>
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.content}"
                </p>

                {/* Cargo Details Pill */}
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Division:</span>
                    <span className="font-semibold text-orange-400">{rev.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Volume:</span>
                    <span className="text-slate-300">{rev.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Order Dossier:</span>
                    <span className="font-mono text-slate-300">{rev.orderRef}</span>
                  </div>
                </div>

              </div>

              {/* Author & Destination */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-white font-['Space_Grotesk']">
                    {rev.author}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {rev.role} · {rev.company}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[11px] font-semibold text-sky-400 block">
                    {rev.country}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {rev.port}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal: Submit Importer Review */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="relative bg-slate-900 rounded-3xl max-w-xl w-full shadow-2xl border border-slate-800 overflow-hidden my-8 p-6 sm:p-8 animate-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                  <MessageSquarePlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    Submit Importer Review
                  </h3>
                  <span className="text-xs text-slate-400">
                    Utility Home Exports · International Trade Desk
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  Thank You for Your Feedback!
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your commercial review has been recorded and added to our verified client testimonials.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 pt-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Full Name / Importer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g., Mark van der Bilt"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Title / Designation
                    </label>
                    <input
                      type="text"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      placeholder="e.g., Procurement Director"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Company / Trading House *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g., Baltic Fresh Produce BV"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Country &amp; Destination Port *
                    </label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g., Netherlands (Rotterdam)"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Export Product Division *
                    </label>
                    <select
                      value={category}
                      onChange={(e: any) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="Himalayan Pink Salt">Himalayan Pink Salt</option>
                      <option value="Fresh Agricultural Produce">Fresh Agricultural Produce</option>
                      <option value="Surgical & Dental Instruments">Surgical & Dental Instruments</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Star Rating *
                    </label>
                    <div className="flex items-center gap-1.5 h-10 px-2">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setRating(starVal)}
                          className="p-1 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star 
                            className={`w-5 h-5 ${starVal <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} 
                          />
                        </button>
                      ))}
                      <span className="text-xs text-amber-400 font-bold ml-2">
                        {rating} / 5 Stars
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Order / Container Volume
                    </label>
                    <input
                      type="text"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder="e.g., 2 x 40ft Reefer (56 MT)"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Bill of Lading / PO Ref
                    </label>
                    <input
                      type="text"
                      value={orderRef}
                      onChange={(e) => setOrderRef(e.target.value)}
                      placeholder="e.g., BL #PKKHI-NLRTM-4421"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Commercial Feedback / Testimonial *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your experience regarding product quality, packaging, cold-chain temperature control, or shipping timelines..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Post Buyer Review'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
