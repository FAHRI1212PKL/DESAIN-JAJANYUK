import React, { useState } from 'react';
import { Check, Copy, Plus, Star } from 'lucide-react';
import { COLOR_TOKENS, JAJANYUK_PRODUCTS, TYPE_TOKENS } from '../data/jajanyukData';
import { FoodIllustration } from './FoodIllustrations';

export const DesignTokensView: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [previewQty, setPreviewQty] = useState(1);

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    window.setTimeout(() => setCopiedHex(null), 1600);
  };

  const sampleProduct = JAJANYUK_PRODUCTS[0];

  return (
    <div className="max-w-[1180px] mx-auto px-6 py-10 space-y-14">
      {/* Intro */}
      <div className="max-w-2xl space-y-2">
        <p className="font-mono-tech text-xs uppercase tracking-wider text-orange-600 font-semibold">
          Sistem Desain JajanYuk!
        </p>
        <h1 className="font-display text-3xl font-bold text-[#1C1917]">
          Token Warna, Tipografi & Anatomi Komponen
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Fondasi visual yang mengunci konsistensi seluruh halaman JajanYuk!
          Pekalongan menggunakan aturan proporsi warna 60-30-10, pasangan huruf
          Fraunces dan Plus Jakarta Sans, serta komponen kartu produk standar.
        </p>
      </div>

      {/* Color System */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between border-b border-stone-200 pb-3">
          <h2 className="font-display text-xl font-bold text-[#1C1917]">
            01. Palet Warna (60-30-10)
          </h2>
          <span className="font-mono-tech text-xs text-stone-500">
            Klik kode hex untuk menyalin
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COLOR_TOKENS.map((color) => (
            <div
              key={color.token}
              className="rounded-xl border border-stone-200 bg-white overflow-hidden"
            >
              <div
                className="h-24 p-4 flex items-end justify-between border-b border-stone-200/70"
                style={{ backgroundColor: color.hex }}
              >
                <span
                  className={`text-xs font-semibold ${
                    color.textDark ? 'text-stone-800' : 'text-white'
                  }`}
                >
                  {color.role}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(color.hex)}
                  className={`font-mono-tech text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors ${
                    color.textDark
                      ? 'bg-black/10 text-stone-900 hover:bg-black/15'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {copiedHex === color.hex ? (
                    <>
                      <Check className="w-3 h-3" /> Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> {color.hex}
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-stone-900">
                    {color.name}
                  </h3>
                  <span className="font-mono-tech text-[11px] text-stone-500">
                    {color.token}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {color.usage}
                </p>
                <p className="font-mono-tech text-[11px] text-stone-500 pt-1">
                  {color.contrastNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Scale */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between border-b border-stone-200 pb-3">
          <h2 className="font-display text-xl font-bold text-[#1C1917]">
            02. Skala Tipografi (2+1 Font Rule)
          </h2>
          <span className="font-mono-tech text-xs text-stone-500">
            Fraunces · Plus Jakarta Sans · JetBrains Mono
          </span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white divide-y divide-stone-200">
          {TYPE_TOKENS.map((t) => (
            <div
              key={t.name}
              className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
            >
              <div className="lg:col-span-4 space-y-1">
                <p className="text-sm font-bold text-stone-900">{t.name}</p>
                <p className="font-mono-tech text-xs text-stone-500">
                  {t.fontFamily} · {t.size} · LH {t.lineHeight}
                </p>
                <p className="text-xs text-stone-500">{t.usage}</p>
              </div>
              <div className="lg:col-span-8">
                <p
                  className={
                    t.fontFamily === 'Fraunces'
                      ? 'font-display font-bold text-2xl text-[#29150A]'
                      : t.fontFamily === 'JetBrains Mono'
                      ? 'font-mono-tech font-semibold text-base text-orange-600'
                      : 'text-base text-stone-800 font-medium'
                  }
                >
                  {t.sample}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Component Anatomy */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between border-b border-stone-200 pb-3">
          <h2 className="font-display text-xl font-bold text-[#1C1917]">
            03. Anatomi Komponen Kartu & Kontrol Interaktif
          </h2>
          <span className="font-mono-tech text-xs text-stone-500">
            Radius 12px · Padding 16px · Rasio Gambar 4:3
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Live Product Card Specimen */}
          <div className="lg:col-span-5 p-6 rounded-xl border border-stone-200 bg-[#FFFBF5]">
            <p className="font-mono-tech text-[11px] uppercase tracking-wider text-stone-500 mb-3">
              Spesimen Kartu Produk Standar
            </p>
            <div className="max-w-[290px] mx-auto rounded-xl border border-stone-200 bg-white overflow-hidden shadow-xs">
              <div className="aspect-[4/3] w-full">
                <FoodIllustration
                  type={sampleProduct.illustrationKey}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span className="uppercase tracking-wide font-medium">
                    {sampleProduct.categoryName}
                  </span>
                  <span className="font-mono-tech tabular-nums flex items-center gap-1 text-stone-700 font-semibold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    4.9
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-stone-900">
                  {sampleProduct.name}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-2">
                  {sampleProduct.desc}
                </p>
              </div>
              <div className="px-4 pb-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-stone-400 uppercase">
                    Harga
                  </span>
                  <span className="font-mono-tech tabular-nums text-sm font-bold text-orange-600">
                    Rp {(sampleProduct.price * previewQty).toLocaleString('id-ID')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewQty((q) => (q >= 5 ? 1 : q + 1))}
                  className="px-3 py-2 rounded-lg bg-orange-600 text-white text-xs font-semibold flex items-center gap-1 hover:bg-orange-700 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Tambah ({previewQty})
                </button>
              </div>
            </div>
          </div>

          {/* Spec Rules & Button States */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-4">
              <h3 className="text-sm font-bold text-stone-900">
                Hierarki Tombol & Status Aksi
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 transition-colors"
                >
                  Aksi Utama (CTA)
                </button>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Checkout WhatsApp
                </button>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:border-orange-500 transition-colors"
                >
                  Aksi Sekunder
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-orange-50 text-orange-700 text-xs font-semibold hover:bg-orange-600 hover:text-white transition-colors"
                >
                  Quick Add
                </button>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-stone-200 bg-white space-y-3">
              <h3 className="text-sm font-bold text-stone-900">
                Aturan Spasial & Proporsi
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="font-mono-tech text-stone-500 block">
                    Container Max Width
                  </span>
                  <span className="font-bold text-stone-900">
                    1160px – 1280px
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="font-mono-tech text-stone-500 block">
                    Grid Gap Standar
                  </span>
                  <span className="font-bold text-stone-900">
                    20px (gap-5) / 24px (gap-6)
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="font-mono-tech text-stone-500 block">
                    Target Sentuh Mobile
                  </span>
                  <span className="font-bold text-stone-900">
                    Minimum 40px × 40px
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="font-mono-tech text-stone-500 block">
                    Elevasi Kartu
                  </span>
                  <span className="font-bold text-stone-900">
                    1px Border (#E7E5E4) / 1 Level
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
