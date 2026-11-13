import React, { useState } from 'react';
import {
  Grid,
  Laptop,
  Layers,
  MapPin,
  Smartphone,
  Tablet,
} from 'lucide-react';
import { DesignTokensView } from './components/DesignTokensView';
import { JajanYukMockupScreen } from './components/JajanYukMockupScreen';
import { SpecExportModal } from './components/SpecExportModal';
import { UserFlowView } from './components/UserFlowView';
import { DESIGN_ANNOTATIONS } from './data/jajanyukData';
import {
  DeviceViewport,
  MockupSectionId,
  OverlayPreviewMode,
  StudioTab,
} from './types/mockup';

export default function App() {
  const [activeTab, setActiveTab] = useState<StudioTab>('mockup');
  const [viewport, setViewport] = useState<DeviceViewport>('desktop');
  const [showGrid, setShowGrid] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [activeAnnotationId, setActiveAnnotationId] = useState<number>(1);
  const [focusSection, setFocusSection] = useState<MockupSectionId>('all');
  const [overlayMode, setOverlayMode] = useState<OverlayPreviewMode>('none');
  const [zoomScale, setZoomScale] = useState<75 | 100>(100);
  const [exportOpen, setExportOpen] = useState(false);

  const isCanvasView = activeTab === 'mockup' || activeTab === 'wireframe';
  const isWireframe = activeTab === 'wireframe';

  const activeAnnotation =
    DESIGN_ANNOTATIONS.find((a) => a.id === activeAnnotationId) ??
    DESIGN_ANNOTATIONS[0];

  const frameWidthClass =
    viewport === 'desktop'
      ? 'w-full max-w-[1160px]'
      : viewport === 'tablet'
      ? 'w-[768px]'
      : 'w-[390px]';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1C1917]">
      {/* 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-stone-200 px-6 py-3.5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single-line brand wordmark */}
          <button
            type="button"
            onClick={() => setActiveTab('mockup')}
            className="font-display text-lg font-bold tracking-tight text-[#29150A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded"
          >
            JajanYuk! Studio
          </button>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Navigasi Studio Desain"
            className="flex items-center gap-6 overflow-x-auto no-scrollbar"
          >
            {(
              [
                { id: 'mockup', label: 'Mockup Layar' },
                { id: 'wireframe', label: 'Wireframe' },
                { id: 'tokens', label: 'Sistem Desain' },
                { id: 'flow', label: 'Alur Pengguna' },
              ] as const
            ).map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded ${
                    active
                      ? 'text-orange-600 font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-[15px] h-[2px] bg-orange-600"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setExportOpen(true)}
              className="px-4 py-2 rounded-lg bg-[#29150A] text-white text-xs font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
            >
              Ekspor Spesifikasi
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      {isCanvasView ? (
        <div className="flex-1 flex flex-col">
          {/* Canvas Toolbar */}
          <div className="bg-white border-b border-stone-200 px-6 py-2.5">
            <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
              {/* Viewport Switcher */}
              <div className="flex items-center gap-3 flex-wrap">
                <div
                  role="group"
                  aria-label="Pilih ukuran perangkat"
                  className="flex items-center gap-1 p-1 rounded-lg bg-stone-100 border border-stone-200/70"
                >
                  {(
                    [
                      { id: 'desktop', label: 'Desktop 1440', Icon: Laptop },
                      { id: 'tablet', label: 'Tablet 768', Icon: Tablet },
                      { id: 'mobile', label: 'Mobile 390', Icon: Smartphone },
                    ] as const
                  ).map(({ id, label, Icon }) => {
                    const active = viewport === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setViewport(id)}
                        className={`px-2.5 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                          active
                            ? 'bg-white text-stone-900 shadow-xs font-semibold'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Section Focus */}
                <label className="flex items-center gap-2 text-xs text-stone-600">
                  <span className="font-medium whitespace-nowrap">Seksi:</span>
                  <select
                    value={focusSection}
                    onChange={(e) =>
                      setFocusSection(e.target.value as MockupSectionId)
                    }
                    className="bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-stone-800 focus:outline-none focus:border-orange-500"
                  >
                    <option value="all">Semua Seksi (Full Page)</option>
                    <option value="hero">01. Hero & Keunggulan</option>
                    <option value="katalog">02. Katalog Produk</option>
                    <option value="galeri">03. Galeri & Kemasan</option>
                    <option value="cara-pesan">04. Cara Pemesanan</option>
                    <option value="testimoni-faq">05. Testimoni, FAQ & Footer</option>
                  </select>
                </label>

                {/* Overlay State Switcher */}
                <div
                  role="group"
                  aria-label="Pratinjau overlay"
                  className="flex items-center gap-1 p-1 rounded-lg bg-stone-100 border border-stone-200/70"
                >
                  {(
                    [
                      { id: 'none', label: 'Halaman' },
                      { id: 'product-modal', label: 'Modal Produk' },
                      { id: 'cart-drawer', label: 'Drawer Keranjang' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setOverlayMode(item.id)}
                      className={`px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                        overlayMode === item.id
                          ? 'bg-white text-stone-900 shadow-xs font-semibold'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid, Annotation & Zoom Controls */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setShowGrid((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                    showGrid
                      ? 'bg-orange-50 border-orange-300 text-orange-700'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Grid Kolom</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAnnotations((v) => !v)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                    showAnnotations
                      ? 'bg-orange-50 border-orange-300 text-orange-700'
                      : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pin Anotasi</span>
                </button>

                <div className="flex items-center gap-1 p-1 rounded-lg bg-stone-100 border border-stone-200/70">
                  {([75, 100] as const).map((z) => (
                    <button
                      key={z}
                      type="button"
                      onClick={() => setZoomScale(z)}
                      className={`font-mono-tech px-2 py-1 rounded text-xs font-medium transition-colors ${
                        zoomScale === z
                          ? 'bg-white text-stone-900 shadow-xs font-semibold'
                          : 'text-stone-600'
                      }`}
                    >
                      {z}%
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Artboard + Right Spec Inspector */}
          <div className="flex-1 max-w-[1440px] w-full mx-auto grid grid-cols-1 xl:grid-cols-12">
            {/* Artboard Canvas */}
            <div className="xl:col-span-9 bg-studio-canvas p-4 sm:p-8 overflow-x-auto flex flex-col items-center">
              {/* Artboard Header Metadata (Unboxed text) */}
              <div className="w-full max-w-[1160px] mb-3 flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-2 font-mono-tech">
                  <span>{isWireframe ? 'Lo-Fi Wireframe' : 'Hi-Fi Mockup'}</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {viewport === 'desktop'
                      ? '1440px Container'
                      : viewport === 'tablet'
                      ? '768px Tablet'
                      : '390px Mobile'}
                  </span>
                </div>
                <span className="font-mono-tech text-stone-500">
                  Klik elemen di layar untuk uji interaksi
                </span>
              </div>

              {/* Device Shell */}
              <div
                className={`${frameWidthClass} transition-all duration-300 origin-top ${
                  zoomScale === 75 ? 'scale-[0.82]' : 'scale-100'
                }`}
              >
                <div className="rounded-xl border border-stone-300 bg-white shadow-xl overflow-hidden">
                  {/* Browser / Mobile Top Chrome */}
                  <div className="bg-stone-100 border-b border-stone-200 px-4 py-2.5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                    </div>
                    <div className="flex-1 max-w-sm bg-white border border-stone-200 rounded-md px-3 py-1 text-center font-mono-tech text-[11px] text-stone-500 truncate">
                      jajanyuk-pekalongan.id
                    </div>
                    <span className="font-mono-tech text-[11px] text-stone-400">
                      {viewport.toUpperCase()}
                    </span>
                  </div>

                  {/* Interactive Screen Content */}
                  <JajanYukMockupScreen
                    viewport={viewport}
                    wireframe={isWireframe}
                    showGrid={showGrid}
                    showAnnotations={showAnnotations}
                    activeAnnotationId={activeAnnotationId}
                    onSelectAnnotation={(id) => {
                      setActiveAnnotationId(id);
                      const found = DESIGN_ANNOTATIONS.find((a) => a.id === id);
                      if (found && focusSection !== 'all') {
                        setFocusSection(found.section);
                      }
                    }}
                    focusSection={focusSection}
                    overlayMode={overlayMode}
                    onChangeOverlayMode={setOverlayMode}
                  />
                </div>
              </div>
            </div>

            {/* Right UX Annotation & Spec Inspector */}
            <aside className="xl:col-span-3 bg-white border-t xl:border-t-0 xl:border-l border-stone-200 p-6 flex flex-col justify-between gap-6">
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Inspektur Desain</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-stone-900">
                    Catatan & Spesifikasi UX
                  </h2>
                </div>

                {/* Annotation Selector List */}
                <div className="space-y-1.5">
                  {DESIGN_ANNOTATIONS.map((item) => {
                    const active = item.id === activeAnnotation.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveAnnotationId(item.id);
                          setFocusSection(item.section);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-lg border text-xs transition-colors flex items-center gap-2.5 ${
                          active
                            ? 'bg-orange-50 border-orange-300 text-stone-900 font-semibold'
                            : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                        }`}
                      >
                        <span
                          className={`font-mono-tech w-6 h-6 rounded-full flex items-center justify-center text-[11px] shrink-0 ${
                            active
                              ? 'bg-orange-600 text-white'
                              : 'bg-stone-200 text-stone-700'
                          }`}
                        >
                          {String(item.id).padStart(2, '0')}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Annotation Detail */}
                <div className="pt-4 border-t border-stone-200 space-y-4">
                  <div>
                    <span className="font-mono-tech text-[11px] text-stone-500">
                      Komponen: {activeAnnotation.componentName}
                    </span>
                    <h3 className="text-base font-bold text-stone-900 mt-0.5">
                      {activeAnnotation.title}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {activeAnnotation.rationale}
                  </p>

                  <div className="space-y-2">
                    {activeAnnotation.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-2 text-xs"
                      >
                        <span className="text-stone-500">{spec.label}</span>
                        <span className="font-mono-tech font-medium text-stone-900 text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                      Peningkatan Desain
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {activeAnnotation.improvements}
                    </p>
                  </div>
                </div>
              </div>

              {focusSection !== 'all' && (
                <button
                  type="button"
                  onClick={() => setFocusSection('all')}
                  className="w-full py-2.5 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  Tampilkan Semua Seksi Halaman
                </button>
              )}
            </aside>
          </div>
        </div>
      ) : activeTab === 'tokens' ? (
        <main className="flex-1">
          <DesignTokensView />
        </main>
      ) : (
        <main className="flex-1">
          <UserFlowView />
        </main>
      )}

      {/* Quiet Studio Footer */}
      <footer className="bg-white border-t border-stone-200 px-6 py-4 text-xs text-stone-500">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <span>JajanYuk! Pekalongan · Dokumentasi Mockup & Sistem Desain</span>
          <span className="font-mono-tech">
            Desktop 1440px · Tablet 768px · Mobile 390px
          </span>
        </div>
      </footer>

      <SpecExportModal
        open={exportOpen}
        onClose={() => setExportOpen(false)}
      />
    </div>
  );
}
