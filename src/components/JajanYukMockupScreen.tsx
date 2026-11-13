import React, { useMemo, useState } from 'react';
import {
  Award,
  Check,
  ChevronDown,
  Clock,
  Layers,
  MapPin,
  Menu,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingBag,
  ShieldCheck,
  Star,
  Truck,
  X,
} from 'lucide-react';
import {
  DESIGN_ANNOTATIONS,
  JAJANYUK_CATEGORIES,
  JAJANYUK_FAQS,
  JAJANYUK_PRODUCTS,
  JAJANYUK_TESTIMONIALS,
} from '../data/jajanyukData';
import {
  DeviceViewport,
  MockupSectionId,
  OverlayPreviewMode,
  ProductItem,
} from '../types/mockup';
import { FoodIllustration } from './FoodIllustrations';

interface JajanYukMockupScreenProps {
  viewport: DeviceViewport;
  wireframe: boolean;
  showGrid: boolean;
  showAnnotations: boolean;
  activeAnnotationId: number | null;
  onSelectAnnotation: (id: number) => void;
  focusSection: MockupSectionId;
  overlayMode: OverlayPreviewMode;
  onChangeOverlayMode: (mode: OverlayPreviewMode) => void;
}

export const JajanYukMockupScreen: React.FC<JajanYukMockupScreenProps> = ({
  viewport,
  wireframe,
  showGrid,
  showAnnotations,
  activeAnnotationId,
  onSelectAnnotation,
  focusSection,
  overlayMode,
  onChangeOverlayMode,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(
    JAJANYUK_PRODUCTS[0]
  );
  const [cartItems, setCartItems] = useState<{ product: ProductItem; qty: number }[]>([
    { product: JAJANYUK_PRODUCTS[0], qty: 2 },
    { product: JAJANYUK_PRODUCTS[1], qty: 1 },
  ]);
  const [customerName, setCustomerName] = useState('Siti Rahmawati');
  const [customerAddress, setCustomerAddress] = useState(
    'Jl. Hayam Wuruk No. 42, Pekalongan Barat'
  );
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile = viewport === 'mobile';
  const isTablet = viewport === 'tablet';
  const isDesktop = viewport === 'desktop';

  const filteredProducts = useMemo(() => {
    return JAJANYUK_PRODUCTS.filter((p) => {
      const matchCat =
        selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2200);
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    triggerToast(`"${product.name}" ditambahkan ke keranjang`);
  };

  const handleUpdateQty = (productId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, qty: item.qty + delta }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const shouldShowSection = (id: Exclude<MockupSectionId, 'all'>) =>
    focusSection === 'all' || focusSection === id;

  const renderAnnotationPin = (id: number, className = '') => {
    if (!showAnnotations) return null;
    const isActive = activeAnnotationId === id;
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelectAnnotation(id);
        }}
        title={DESIGN_ANNOTATIONS.find((a) => a.id === id)?.title}
        className={`z-30 flex items-center justify-center w-7 h-7 rounded-full font-mono-tech text-[11px] font-semibold shadow-md transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 ${
          isActive
            ? 'bg-orange-600 text-white scale-110 ring-4 ring-orange-600/25'
            : 'bg-[#1C1917] text-white hover:bg-orange-600 hover:scale-105'
        } ${className}`}
      >
        {String(id).padStart(2, '0')}
      </button>
    );
  };

  return (
    <div
      className={`relative w-full min-h-[680px] overflow-hidden ${
        wireframe ? 'bg-white text-stone-900' : 'bg-[#FFFBF5] text-[#29150A]'
      }`}
    >
      {/* Optional Layout Grid Overlay */}
      {showGrid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 px-4 sm:px-6"
        >
          <div
            className={`h-full mx-auto grid gap-4 ${
              isMobile ? 'grid-cols-4' : isTablet ? 'grid-cols-8' : 'grid-cols-12 max-w-[1160px]'
            }`}
          >
            {Array.from({
              length: isMobile ? 4 : isTablet ? 8 : 12,
            }).map((_, idx) => (
              <div
                key={idx}
                className="h-full bg-orange-500/[0.06] border-x border-orange-500/15"
              />
            ))}
          </div>
        </div>
      )}

      {/* Mockup Sticky Header (3-Zone Contract) */}
      <header
        className={`relative z-10 border-b ${
          wireframe
            ? 'bg-stone-50 border-stone-300'
            : 'bg-[#FFFBF5]/95 border-amber-200/70'
        } ${isMobile ? 'px-4 py-3' : 'px-6 py-4'}`}
      >
        {renderAnnotationPin(1, 'absolute -bottom-3.5 left-6')}
        <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-6">
          {/* Zone 1: Single-line Brand */}
          <span
            className={`whitespace-nowrap shrink-0 font-bold tracking-tight ${
              wireframe
                ? 'font-mono-tech text-base text-stone-900'
                : 'font-display text-xl text-[#29150A]'
            }`}
          >
            JajanYuk!
          </span>

          {/* Zone 2: Clean Nav Links (Desktop & Tablet) */}
          {!isMobile && (
            <nav className="flex items-center gap-6 text-[13px] font-medium">
              {['Beranda', 'Keunggulan', 'Katalog', 'Galeri', 'FAQ'].map(
                (label) => (
                  <span
                    key={label}
                    className={`whitespace-nowrap shrink-0 cursor-pointer ${
                      wireframe
                        ? 'text-stone-600 underline decoration-stone-300 underline-offset-4'
                        : 'text-stone-700 hover:text-orange-600 transition-colors'
                    }`}
                  >
                    {label}
                  </span>
                )
              )}
            </nav>
          )}

          {/* Zone 3: Search + Cart Action */}
          <div className="flex items-center gap-2.5 shrink-0">
            {!isMobile && (
              <div className="relative w-44">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari jajanan..."
                  className={`w-full text-xs py-2 pl-8 pr-3 rounded-lg border focus:outline-none ${
                    wireframe
                      ? 'bg-white border-stone-300 text-stone-700 placeholder-stone-400'
                      : 'bg-white border-amber-200 text-stone-800 placeholder-stone-400 focus:border-orange-500'
                  }`}
                />
              </div>
            )}

            <button
              type="button"
              onClick={() =>
                onChangeOverlayMode(
                  overlayMode === 'cart-drawer' ? 'none' : 'cart-drawer'
                )
              }
              className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                wireframe
                  ? 'bg-stone-900 text-white border border-stone-900'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Keranjang</span>
              <span className="font-mono-tech tabular-nums px-1.5 py-0.5 rounded bg-black/20 text-[11px]">
                {totalItems}
              </span>
            </button>

            {isMobile && (
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="Toggle Menu"
                className="p-2 rounded-lg border border-stone-300 bg-white text-stone-700"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Drawer Nav */}
        {isMobile && mobileMenuOpen && (
          <div className="mt-3 pt-3 border-t border-stone-200 space-y-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari jajanan favorit..."
                className="w-full text-xs py-2 pl-8 pr-3 rounded-lg border border-stone-300 bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-stone-700">
              {['Beranda', 'Keunggulan', 'Katalog', 'Galeri', 'Cara Pesan', 'FAQ'].map(
                (item) => (
                  <span key={item} className="py-1">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* SECTION 01: HERO & KEUNGGULAN */}
      {shouldShowSection('hero') && (
        <section
          className={`relative ${
            wireframe
              ? 'bg-white border-b border-stone-200'
              : 'bg-gradient-to-b from-orange-50/90 to-[#FFFBF5] border-b border-amber-200/50'
          } ${isMobile ? 'px-4 py-8' : 'px-6 py-12'}`}
        >
          {renderAnnotationPin(2, 'absolute top-4 right-6')}
          <div
            className={`max-w-[1160px] mx-auto grid items-stretch gap-8 ${
              isDesktop ? 'grid-cols-12' : 'grid-cols-1'
            }`}
          >
            {/* Left Copy */}
            <div
              className={`${
                isDesktop ? 'col-span-7' : ''
              } flex flex-col justify-center space-y-5`}
            >
              <p
                className={`text-xs font-semibold tracking-wider uppercase ${
                  wireframe ? 'font-mono-tech text-stone-500' : 'text-orange-700'
                }`}
              >
                Pekalongan · Jajanan Nusantara & Kekinian
              </p>

              <h1
                className={`text-balance leading-[1.15] font-bold ${
                  wireframe
                    ? 'font-sans text-stone-900'
                    : 'font-display text-[#29150A]'
                } ${
                  isMobile
                    ? 'text-3xl'
                    : isTablet
                    ? 'text-4xl'
                    : 'text-[44px]'
                }`}
              >
                Nikmati Gurih & Manisnya Jajanan Favorit Keluarga
              </h1>

              <p
                className={`text-[15px] leading-relaxed max-w-xl ${
                  wireframe ? 'text-stone-600' : 'text-stone-600'
                }`}
              >
                Dari kue tradisional yang lumer di mulut hingga keripik pedas
                renyah kekinian. Diracik segar setiap hari dengan bahan pilihan
                tanpa pengawet buatan.
              </p>

              <div
                className={`flex flex-wrap items-center gap-3 pt-1 ${
                  isMobile ? 'flex-col items-stretch' : ''
                }`}
              >
                <a
                  href="#mockup-katalog"
                  className={`px-6 py-3 rounded-lg text-sm font-semibold text-center whitespace-nowrap transition-colors ${
                    wireframe
                      ? 'bg-stone-900 text-white'
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}
                >
                  Jelajahi Menu Jajanan
                </a>
                <button
                  type="button"
                  onClick={() => onChangeOverlayMode('cart-drawer')}
                  className={`px-5 py-3 rounded-lg text-sm font-semibold border whitespace-nowrap transition-colors ${
                    wireframe
                      ? 'bg-white border-stone-300 text-stone-800'
                      : 'bg-white border-amber-200 text-[#29150A] hover:border-orange-500'
                  }`}
                >
                  Cek Keranjang ({totalItems})
                </button>
              </div>

              {/* 3 Trust Metrics */}
              <div className="pt-5 border-t border-stone-200/80 grid grid-cols-3 gap-4 max-w-md">
                <div>
                  <span
                    className={`block font-mono-tech tabular-nums text-xl font-bold ${
                      wireframe ? 'text-stone-900' : 'text-orange-600'
                    }`}
                  >
                    10.000+
                  </span>
                  <span className="text-xs text-stone-500">Pelanggan Puas</span>
                </div>
                <div>
                  <span
                    className={`block font-mono-tech tabular-nums text-xl font-bold ${
                      wireframe ? 'text-stone-900' : 'text-orange-600'
                    }`}
                  >
                    4.9 / 5
                  </span>
                  <span className="text-xs text-stone-500">Rating Rasa</span>
                </div>
                <div>
                  <span
                    className={`block font-mono-tech tabular-nums text-xl font-bold ${
                      wireframe ? 'text-stone-900' : 'text-orange-600'
                    }`}
                  >
                    100%
                  </span>
                  <span className="text-xs text-stone-500">Fresh Harian</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className={isDesktop ? 'col-span-5' : ''}>
              <div
                className={`h-full rounded-xl overflow-hidden border ${
                  wireframe
                    ? 'border-stone-300 bg-stone-100'
                    : 'border-amber-200/80 bg-white shadow-sm'
                }`}
              >
                <div className="aspect-[4/3] lg:h-full w-full">
                  <FoodIllustration
                    type="hero"
                    wireframe={wireframe}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4-Pillar Keunggulan Strip */}
          <div
            className={`max-w-[1160px] mx-auto mt-10 pt-8 border-t ${
              wireframe ? 'border-stone-200' : 'border-amber-200/60'
            } grid gap-4 ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'
            }`}
          >
            {[
              {
                icon: ShieldCheck,
                title: 'Terjamin Halal',
                desc: 'Bahan baku halal & dapur higienis',
              },
              {
                icon: Award,
                title: 'Rasa Otentik',
                desc: 'Resep warisan kuliner Nusantara',
              },
              {
                icon: Truck,
                title: 'Pengiriman Cepat',
                desc: 'Dikirim langsung di hari pembuatan',
              },
              {
                icon: Package,
                title: 'Kemasan Rapi',
                desc: 'Standing pouch & box food-grade',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-4 rounded-xl border ${
                    wireframe
                      ? 'bg-stone-50 border-stone-200'
                      : 'bg-white border-amber-100'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mb-2.5 ${
                      wireframe ? 'text-stone-600' : 'text-orange-600'
                    }`}
                  />
                  <h3 className="text-sm font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 02: KATALOG PRODUK */}
      {shouldShowSection('katalog') && (
        <section
          id="mockup-katalog"
          className={`relative ${
            wireframe ? 'bg-white' : 'bg-[#FFFBF5]'
          } ${isMobile ? 'px-4 py-8' : 'px-6 py-12'}`}
        >
          {renderAnnotationPin(3, 'absolute top-5 right-6')}
          <div className="max-w-[1160px] mx-auto">
            <div className="flex flex-col gap-2 max-w-xl mb-6">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  wireframe ? 'font-mono-tech text-stone-500' : 'text-orange-600'
                }`}
              >
                Katalog Menu
              </span>
              <h2
                className={`font-bold ${
                  wireframe
                    ? 'font-sans text-stone-900'
                    : 'font-display text-[#29150A]'
                } ${isMobile ? 'text-2xl' : 'text-3xl'}`}
              >
                Pilihan Jajanan Terfavorit
              </h2>
              <p className="text-sm text-stone-600">
                Klik foto produk untuk melihat detail ketahanan, atau klik Tambah
                untuk memasukkan ke keranjang WhatsApp.
              </p>
            </div>

            {/* Interactive Category Filter Segmented Controls */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
              {JAJANYUK_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 border transition-colors ${
                      active
                        ? wireframe
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-orange-600 text-white border-orange-600'
                        : wireframe
                        ? 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-orange-400 hover:text-orange-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="p-10 rounded-xl border border-stone-200 bg-white text-center">
                <p className="text-sm font-semibold text-stone-800">
                  Jajanan tidak ditemukan
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Coba pilih kategori lain atau hapus kata kunci pencarian.
                </p>
              </div>
            ) : (
              <div
                className={`grid gap-5 ${
                  isMobile
                    ? 'grid-cols-1'
                    : isTablet
                    ? 'grid-cols-2'
                    : 'grid-cols-4'
                }`}
              >
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${
                      wireframe
                        ? 'bg-white border-stone-300'
                        : 'bg-white border-stone-200/80 shadow-xs'
                    }`}
                  >
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProduct(product);
                          onChangeOverlayMode('product-modal');
                        }}
                        className="w-full aspect-[4/3] block overflow-hidden text-left focus-visible:outline-none"
                      >
                        <FoodIllustration
                          type={product.illustrationKey}
                          wireframe={wireframe}
                          className="w-full h-full"
                        />
                      </button>

                      <div className="p-4 space-y-1.5">
                        {/* Clean unboxed metadata */}
                        <div className="flex items-center justify-between gap-2 text-[11px] text-stone-500">
                          <span className="uppercase tracking-wide font-medium truncate">
                            {product.categoryName}
                          </span>
                          <span className="font-mono-tech tabular-nums shrink-0 flex items-center gap-1 text-stone-700 font-medium">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            {product.rating.toFixed(1)}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedProduct(product);
                            onChangeOverlayMode('product-modal');
                          }}
                          className="block text-left w-full"
                        >
                          <h3 className="text-[15px] font-bold text-stone-900 hover:text-orange-600 transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                        </button>

                        <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                          {product.desc}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="block text-[10px] text-stone-400 uppercase tracking-wider">
                          Harga
                        </span>
                        <span
                          className={`font-mono-tech tabular-nums text-sm font-bold ${
                            wireframe ? 'text-stone-900' : 'text-orange-600'
                          }`}
                        >
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors ${
                          wireframe
                            ? 'bg-stone-900 text-white'
                            : 'bg-orange-50 text-orange-700 hover:bg-orange-600 hover:text-white'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Tambah
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* SECTION 03: GALERI BENTO & KEMASAN */}
      {shouldShowSection('galeri') && (
        <section
          className={`relative border-y ${
            wireframe
              ? 'bg-stone-50 border-stone-200'
              : 'bg-[#FFF7ED]/70 border-amber-200/50'
          } ${isMobile ? 'px-4 py-8' : 'px-6 py-12'}`}
        >
          {renderAnnotationPin(4, 'absolute top-5 right-6')}
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-xl mb-7 space-y-1.5">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  wireframe ? 'font-mono-tech text-stone-500' : 'text-orange-600'
                }`}
              >
                Galeri & Kemasan
              </span>
              <h2
                className={`font-bold ${
                  wireframe
                    ? 'font-sans text-stone-900'
                    : 'font-display text-[#29150A]'
                } ${isMobile ? 'text-2xl' : 'text-3xl'}`}
              >
                Sajian Fresh & Kemasan Higienis
              </h2>
            </div>

            <div
              className={`grid gap-4 ${
                isMobile ? 'grid-cols-1' : 'grid-cols-4 grid-rows-2'
              }`}
            >
              {/* Bento Large 2x2 */}
              <div
                className={`${
                  isMobile ? 'min-h-[220px]' : 'col-span-2 row-span-2 min-h-[300px]'
                } relative rounded-xl overflow-hidden border border-stone-200`}
              >
                <FoodIllustration
                  type="gallery-kitchen"
                  wireframe={wireframe}
                  className="w-full h-full"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 p-5 ${
                    wireframe
                      ? 'bg-white/95 border-t border-stone-300 text-stone-900'
                      : 'bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white'
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-wider opacity-80">
                    Dapur Pekalongan
                  </p>
                  <h3 className="text-lg font-bold mt-0.5">
                    Diolah Hangat Setiap Pagi
                  </h3>
                  <p className="text-xs opacity-85 mt-1">
                    Resep autentik tanpa pengawet untuk menjaga cita rasa alami.
                  </p>
                </div>
              </div>

              {/* Bento Wide 2x1 */}
              <div
                className={`${
                  isMobile ? 'min-h-[180px]' : 'col-span-2 min-h-[145px]'
                } relative rounded-xl overflow-hidden border border-stone-200`}
              >
                <FoodIllustration
                  type="gallery-packaging"
                  wireframe={wireframe}
                  className="w-full h-full"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 p-4 ${
                    wireframe
                      ? 'bg-white/95 border-t border-stone-300 text-stone-900'
                      : 'bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white'
                  }`}
                >
                  <h3 className="text-sm font-bold">
                    Standing Pouch & Box Food-Grade
                  </h3>
                  <p className="text-xs opacity-85 mt-0.5">
                    Aman dikirim dalam kota maupun ekspedisi luar kota.
                  </p>
                </div>
              </div>

              {/* Bento Square 1 */}
              <div className="relative rounded-xl overflow-hidden border border-stone-200 min-h-[145px]">
                <FoodIllustration
                  type="lapis"
                  wireframe={wireframe}
                  className="w-full h-full"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 p-3.5 ${
                    wireframe
                      ? 'bg-white/95 border-t border-stone-300 text-stone-900'
                      : 'bg-gradient-to-t from-black/80 to-transparent text-white'
                  }`}
                >
                  <p className="text-xs font-bold">Kue & Pastry Lembut</p>
                </div>
              </div>

              {/* Bento Square 2 */}
              <div className="relative rounded-xl overflow-hidden border border-stone-200 min-h-[145px]">
                <FoodIllustration
                  type="basreng"
                  wireframe={wireframe}
                  className="w-full h-full"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 p-3.5 ${
                    wireframe
                      ? 'bg-white/95 border-t border-stone-300 text-stone-900'
                      : 'bg-gradient-to-t from-black/80 to-transparent text-white'
                  }`}
                >
                  <p className="text-xs font-bold">Keripik Renyah Berbumbu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 04: CARA PESAN (4 LANGKAH) */}
      {shouldShowSection('cara-pesan') && (
        <section
          className={`relative ${
            wireframe ? 'bg-white' : 'bg-[#FFFBF5]'
          } ${isMobile ? 'px-4 py-8' : 'px-6 py-12'}`}
        >
          {renderAnnotationPin(5, 'absolute top-5 right-6')}
          <div className="max-w-[1160px] mx-auto">
            <div className="max-w-xl mb-7 space-y-1.5">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${
                  wireframe ? 'font-mono-tech text-stone-500' : 'text-orange-600'
                }`}
              >
                Alur Pemesanan
              </span>
              <h2
                className={`font-bold ${
                  wireframe
                    ? 'font-sans text-stone-900'
                    : 'font-display text-[#29150A]'
                } ${isMobile ? 'text-2xl' : 'text-3xl'}`}
              >
                4 Langkah Mudah Pesan Jajanan
              </h2>
            </div>

            <div
              className={`grid gap-4 ${
                isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'
              }`}
            >
              {[
                {
                  num: '01',
                  title: 'Pilih Jajanan',
                  desc: 'Jelajahi katalog dan klik Tambah pada menu favorit.',
                },
                {
                  num: '02',
                  title: 'Cek Keranjang',
                  desc: 'Atur jumlah porsi lalu isi nama & alamat lengkap.',
                },
                {
                  num: '03',
                  title: 'Kirim Order WA',
                  desc: 'Daftar pesanan terformat otomatis menuju WhatsApp admin.',
                },
                {
                  num: '04',
                  title: 'Diantar Fresh',
                  desc: 'Jajanan disiapkan segar dan langsung dikirim ke rumah.',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className={`p-5 rounded-xl border ${
                    wireframe
                      ? 'bg-stone-50 border-stone-200'
                      : 'bg-white border-stone-200/80'
                  }`}
                >
                  <span
                    className={`font-mono-tech text-xs font-semibold ${
                      wireframe ? 'text-stone-500' : 'text-orange-600'
                    }`}
                  >
                    {step.num}.
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 05: TESTIMONI, FAQ & FOOTER */}
      {shouldShowSection('testimoni-faq') && (
        <>
          <section
            className={`relative border-t ${
              wireframe
                ? 'bg-stone-50 border-stone-200'
                : 'bg-[#FFF7ED]/60 border-amber-200/50'
            } ${isMobile ? 'px-4 py-8' : 'px-6 py-12'}`}
          >
            {renderAnnotationPin(6, 'absolute top-5 right-6')}
            <div className="max-w-[1160px] mx-auto space-y-12">
              {/* Testimonials */}
              <div>
                <div className="max-w-xl mb-6 space-y-1.5">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      wireframe ? 'font-mono-tech text-stone-500' : 'text-orange-600'
                    }`}
                  >
                    Ulasan Pelanggan
                  </span>
                  <h2
                    className={`font-bold ${
                      wireframe
                        ? 'font-sans text-stone-900'
                        : 'font-display text-[#29150A]'
                    } ${isMobile ? 'text-2xl' : 'text-3xl'}`}
                  >
                    Cerita Pelanggan Pekalongan
                  </h2>
                </div>

                <div
                  className={`grid gap-5 ${
                    isMobile ? 'grid-cols-1' : 'grid-cols-3'
                  }`}
                >
                  {JAJANYUK_TESTIMONIALS.map((t) => (
                    <div
                      key={t.id}
                      className="p-5 rounded-xl border border-stone-200 bg-white flex flex-col justify-between space-y-4"
                    >
                      <p className="text-xs text-stone-600 leading-relaxed">
                        “{t.quote}”
                      </p>
                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                        <div>
                          <p className="font-bold text-stone-900">{t.name}</p>
                          <p className="text-stone-500">{t.location}</p>
                        </div>
                        <span className="font-mono-tech tabular-nums font-semibold text-stone-700">
                          {t.rating} ★
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="max-w-2xl">
                <h3
                  className={`font-bold mb-4 ${
                    wireframe
                      ? 'font-sans text-stone-900'
                      : 'font-display text-[#29150A]'
                  } text-2xl`}
                >
                  Pertanyaan Umum (FAQ)
                </h3>
                <div className="space-y-2.5">
                  {JAJANYUK_FAQS.map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-xl border border-stone-200 bg-white overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaqId(isOpen ? null : faq.id)
                          }
                          className="w-full text-left px-4 py-3.5 text-sm font-semibold text-stone-900 flex items-center justify-between gap-4 hover:bg-stone-50"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 shrink-0 text-stone-500 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`${
              wireframe
                ? 'bg-stone-900 text-stone-200'
                : 'bg-[#1F1109] text-amber-100/85'
            } ${isMobile ? 'px-4 py-8' : 'px-6 py-10'}`}
          >
            <div
              className={`max-w-[1160px] mx-auto grid gap-6 pb-8 border-b border-white/10 ${
                isMobile ? 'grid-cols-1' : 'grid-cols-3'
              }`}
            >
              <div className="space-y-2">
                <span className="font-display text-lg font-bold text-white">
                  JajanYuk!
                </span>
                <p className="text-xs opacity-75 leading-relaxed max-w-xs">
                  Aneka jajanan tradisional & camilan kekinian khas Pekalongan
                  yang dibuat segar setiap hari.
                </p>
              </div>
              <div className="space-y-2 text-xs">
                <p className="font-semibold text-white">Navigasi</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 opacity-80">
                  <span>Beranda</span>
                  <span>Katalog</span>
                  <span>Galeri</span>
                  <span>Cara Pesan</span>
                  <span>FAQ</span>
                </div>
              </div>
              <div className="space-y-1.5 text-xs">
                <p className="font-semibold text-white">Kontak Pekalongan</p>
                <p className="font-mono-tech opacity-80">+62 858-6781-5390</p>
                <p className="opacity-80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Pekalongan, Jawa Tengah
                </p>
              </div>
            </div>
            <div className="max-w-[1160px] mx-auto pt-5 text-xs opacity-65">
              © 2026 JajanYuk! Pekalongan.
            </div>
          </footer>
        </>
      )}

      {/* OVERLAY PREVIEW: PRODUCT DETAIL MODAL */}
      {overlayMode === 'product-modal' && (
        <div
          className="absolute inset-0 z-40 bg-black/50 flex items-center justify-center p-4"
          onClick={() => onChangeOverlayMode('none')}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-xl bg-white border border-stone-200 shadow-2xl overflow-hidden"
          >
            <div className="relative aspect-[16/10] w-full">
              <FoodIllustration
                type={selectedProduct.illustrationKey}
                wireframe={wireframe}
                className="w-full h-full"
              />
              <button
                type="button"
                onClick={() => onChangeOverlayMode('none')}
                aria-label="Tutup detail produk"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-stone-700 shadow flex items-center justify-center hover:bg-stone-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    {selectedProduct.categoryName}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    {selectedProduct.name}
                  </h3>
                </div>
                <span className="font-mono-tech tabular-nums text-base font-bold text-orange-600 shrink-0">
                  Rp {selectedProduct.price.toLocaleString('id-ID')}
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedProduct.desc}
              </p>

              <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between text-xs text-stone-700">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  Ketahanan: <strong>{selectedProduct.shelfLife}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-stone-500" />
                  Pouch Premium
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  onChangeOverlayMode('none');
                }}
                className={`w-full py-2.5 rounded-lg text-xs font-semibold text-white transition-colors ${
                  wireframe
                    ? 'bg-stone-900'
                    : 'bg-orange-600 hover:bg-orange-700'
                }`}
              >
                Tambahkan ke Keranjang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY PREVIEW: CART SLIDE-OVER DRAWER */}
      {overlayMode === 'cart-drawer' && (
        <div
          className="absolute inset-0 z-40 bg-black/45 flex justify-end"
          onClick={() => onChangeOverlayMode('none')}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[340px] h-full bg-white border-l border-stone-200 shadow-2xl flex flex-col"
          >
            <div className="px-4 py-3.5 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-orange-600" />
                <h3 className="text-sm font-bold text-stone-900">
                  Keranjang Belanja ({totalItems})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onChangeOverlayMode('none')}
                aria-label="Tutup keranjang"
                className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cartItems.length === 0 ? (
                <div className="py-12 text-center text-xs text-stone-500">
                  Keranjang masih kosong. Klik Tambah pada menu untuk simulasi.
                </div>
              ) : (
                cartItems.map(({ product, qty }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-2.5 rounded-lg border border-stone-200 bg-stone-50/70"
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden shrink-0 border border-stone-200">
                      <FoodIllustration
                        type={product.illustrationKey}
                        wireframe={wireframe}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">
                        {product.name}
                      </p>
                      <p className="font-mono-tech tabular-nums text-xs font-semibold text-orange-600">
                        Rp {(product.price * qty).toLocaleString('id-ID')}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleUpdateQty(product.id, -1)}
                        className="w-6 h-6 rounded border border-stone-300 bg-white flex items-center justify-center text-stone-700 hover:bg-stone-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono-tech tabular-nums text-xs font-semibold w-4 text-center">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleUpdateQty(product.id, 1)}
                        className="w-6 h-6 rounded border border-stone-300 bg-white flex items-center justify-center text-stone-700 hover:bg-stone-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-600">Total Pembayaran</span>
                <span className="font-mono-tech tabular-nums text-sm font-bold text-stone-900">
                  Rp {subtotal.toLocaleString('id-ID')}
                </span>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Nama Lengkap"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white"
                />
                <textarea
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Alamat Lengkap Pengiriman"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white resize-none"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  if (cartItems.length === 0) {
                    triggerToast('Keranjang masih kosong');
                    return;
                  }
                  if (!customerName.trim() || !customerAddress.trim()) {
                    triggerToast('Lengkapi nama dan alamat pengiriman');
                    return;
                  }
                  triggerToast(
                    `Format WhatsApp siap dikirim (${totalItems} item · Rp ${subtotal.toLocaleString('id-ID')})`
                  );
                }}
                className={`w-full py-2.5 rounded-lg text-xs font-semibold text-white transition-colors ${
                  wireframe
                    ? 'bg-stone-900'
                    : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                Pesan via WhatsApp
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="sticky bottom-4 mx-auto w-fit z-50 bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
