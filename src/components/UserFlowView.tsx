import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { USER_FLOW_STEPS } from '../data/jajanyukData';

export const UserFlowView: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(USER_FLOW_STEPS[0].id);
  const activeStep =
    USER_FLOW_STEPS.find((s) => s.id === selectedId) ?? USER_FLOW_STEPS[0];

  return (
    <div className="max-w-[1180px] mx-auto px-6 py-10 space-y-10">
      <div className="max-w-2xl space-y-2">
        <p className="font-mono-tech text-xs uppercase tracking-wider text-orange-600 font-semibold">
          Arsitektur Informasi & User Flow
        </p>
        <h1 className="font-display text-3xl font-bold text-[#1C1917]">
          Alur Pelanggan dari Katalog hingga WhatsApp
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          Klik setiap tahapan alur di bawah untuk memeriksa pemicu interaksi,
          respons sistem, elemen antarmuka, dan penanganan kondisi khusus.
        </p>
      </div>

      {/* Horizontal Flowchart */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[820px] grid grid-cols-5 gap-3 items-stretch">
          {USER_FLOW_STEPS.map((step, index) => {
            const isActive = step.id === activeStep.id;
            return (
              <div key={step.id} className="flex items-stretch gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedId(step.id)}
                  className={`flex-1 text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#29150A] text-white border-[#29150A] shadow-md'
                      : 'bg-white text-stone-900 border-stone-200 hover:border-orange-400'
                  }`}
                >
                  <div className="space-y-2">
                    <span
                      className={`font-mono-tech text-xs font-semibold ${
                        isActive ? 'text-orange-400' : 'text-orange-600'
                      }`}
                    >
                      Langkah {step.stepNumber}
                    </span>
                    <h3 className="text-sm font-bold leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={`text-[11px] mt-4 pt-3 border-t ${
                      isActive
                        ? 'border-white/15 text-amber-100/80'
                        : 'border-stone-100 text-stone-500'
                    }`}
                  >
                    {step.screen}
                  </p>
                </button>
                {index < USER_FLOW_STEPS.length - 1 && (
                  <div className="flex items-center justify-center text-stone-400 shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Step Inspector */}
      <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="font-mono-tech text-xs font-semibold text-orange-600 uppercase tracking-wider">
              Tahap {activeStep.stepNumber} · {activeStep.screen}
            </span>
            <h2 className="font-display text-2xl font-bold text-[#1C1917] mt-1">
              {activeStep.title}
            </h2>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                Aksi / Pemicu Pengguna
              </p>
              <p className="text-stone-700 leading-relaxed">
                {activeStep.trigger}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                Respons Antarmuka
              </p>
              <p className="text-stone-700 leading-relaxed">
                {activeStep.systemResponse}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                Penanganan Edge Case
              </p>
              <p className="text-xs text-stone-700 leading-relaxed">
                {activeStep.edgeCase}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-stone-200 lg:pl-8 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Komponen UI Terlibat
          </h3>
          <ul className="space-y-2.5">
            {activeStep.elements.map((el, i) => (
              <li
                key={el}
                className="p-3 rounded-lg bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs font-semibold text-stone-800"
              >
                <span>{el}</span>
                <span className="font-mono-tech text-stone-400">
                  #{String(i + 1).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
