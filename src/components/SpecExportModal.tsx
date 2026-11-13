import React, { useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import {
  COLOR_TOKENS,
  DESIGN_ANNOTATIONS,
  TYPE_TOKENS,
  USER_FLOW_STEPS,
} from '../data/jajanyukData';

interface SpecExportModalProps {
  open: boolean;
  onClose: () => void;
}

export const SpecExportModal: React.FC<SpecExportModalProps> = ({
  open,
  onClose,
}) => {
  const [format, setFormat] = useState<'markdown' | 'json'>('markdown');
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const markdownContent = `# Spesifikasi Desain UI/UX — JajanYuk! Pekalongan

## 1. Palet Warna (60-30-10)
${COLOR_TOKENS.map((c) => `- **${c.name}** (\`${c.hex}\`): ${c.role} — ${c.usage}`).join('\n')}

## 2. Tipografi
${TYPE_TOKENS.map((t) => `- **${t.name}**: ${t.fontFamily} (${t.size}, Line Height ${t.lineHeight})`).join('\n')}

## 3. Struktur Seksi & Catatan UX
${DESIGN_ANNOTATIONS.map((a) => `### ${String(a.id).padStart(2, '0')}. ${a.title} (\`${a.componentName}\`)\n${a.rationale}\n- Rekomendasi: ${a.improvements}`).join('\n\n')}

## 4. Alur Pengguna (User Flow)
${USER_FLOW_STEPS.map((s) => `${s.stepNumber}. **${s.title}** (${s.screen}): ${s.trigger} -> ${s.systemResponse}`).join('\n')}`;

  const jsonContent = JSON.stringify(
    {
      project: 'JajanYuk! Pekalongan',
      colors: COLOR_TOKENS,
      typography: TYPE_TOKENS,
      annotations: DESIGN_ANNOTATIONS,
      userFlow: USER_FLOW_STEPS,
    },
    null,
    2
  );

  const activeText = format === 'markdown' ? markdownContent : jsonContent;

  const handleCopy = () => {
    navigator.clipboard?.writeText(activeText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-xl bg-white border border-stone-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-lg font-bold text-stone-900">
              Ekspor Spesifikasi Desain
            </h2>
            <p className="text-xs text-stone-500">
              Salin dokumentasi mockup dan token desain untuk tim atau arsip proyek.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal ekspor"
            className="p-2 rounded-lg text-stone-500 hover:bg-stone-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-stone-200/70">
            <button
              type="button"
              onClick={() => setFormat('markdown')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                format === 'markdown'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Markdown Spec
            </button>
            <button
              type="button"
              onClick={() => setFormat('json')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                format === 'json'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              JSON Tokens
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-700 flex items-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" /> Tersalin
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Salin Dokumen
              </>
            )}
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 bg-[#FAF9F6]">
          <pre className="font-mono-tech text-xs text-stone-800 whitespace-pre-wrap leading-relaxed">
            {activeText}
          </pre>
        </div>
      </div>
    </div>
  );
};
