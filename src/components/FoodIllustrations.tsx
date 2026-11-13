import React from 'react';
import { ProductItem } from '../types/mockup';

interface IllustrationProps {
  type: ProductItem['illustrationKey'] | 'hero' | 'gallery-kitchen' | 'gallery-packaging';
  wireframe?: boolean;
  className?: string;
}

export const FoodIllustration: React.FC<IllustrationProps> = ({
  type,
  wireframe = false,
  className = 'w-full h-full',
}) => {
  if (wireframe) {
    return (
      <div
        className={`${className} bg-wireframe-hatch border border-stone-300 flex flex-col items-center justify-center text-stone-500 p-4`}
      >
        <svg
          className="w-8 h-8 mb-1.5 text-stone-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="font-mono-tech text-[11px] uppercase tracking-wider text-stone-500">
          Asset: {type}
        </span>
      </div>
    );
  }

  switch (type) {
    case 'hero':
      return (
        <svg viewBox="0 0 480 360" className={`${className} object-cover`} aria-label="Ilustrasi sajian JajanYuk Nusantara">
          <defs>
            <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="55%" stopColor="#FDBA74" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <radialGradient id="plateGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="100%" stopColor="#FDE68A" />
            </radialGradient>
          </defs>
          <rect width="480" height="360" fill="url(#heroBg)" />
          {/* Wooden table shadow */}
          <ellipse cx="240" cy="290" rx="170" ry="32" fill="#9A3412" opacity="0.22" />
          {/* Banana leaf base */}
          <path d="M85 210 Q240 130 395 205 Q335 280 240 282 Q135 280 85 210 Z" fill="#15803D" />
          <path d="M95 208 Q240 198 385 206" stroke="#4ADE80" strokeWidth="2.5" opacity="0.55" fill="none" />
          {/* Ceramic Plate */}
          <ellipse cx="240" cy="200" rx="125" ry="72" fill="url(#plateGlow)" stroke="#F59E0B" strokeWidth="3" />
          <ellipse cx="240" cy="200" rx="95" ry="52" fill="#FFFBF5" stroke="#FCD34D" strokeWidth="1.5" />
          {/* Klepon balls */}
          <g transform="translate(175, 168)">
            <circle cx="20" cy="22" r="21" fill="#16A34A" />
            <circle cx="14" cy="15" r="5" fill="#86EFAC" opacity="0.5" />
            <circle cx="52" cy="14" r="22" fill="#22C55E" />
            <circle cx="46" cy="8" r="5" fill="#BBF7D0" opacity="0.5" />
            <circle cx="38" cy="36" r="21" fill="#15803D" />
            {/* Coconut shreds */}
            <path d="M10 18 l6 -2 M24 25 l5 2 M48 10 l6 1 M32 38 l7 -2" stroke="#FEF9C3" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          {/* Risoles & Pastry */}
          <g transform="translate(245, 178)">
            <rect x="0" y="10" width="66" height="26" rx="12" transform="rotate(-12 33 23)" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <rect x="10" y="26" width="66" height="26" rx="12" transform="rotate(8 43 39)" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          </g>
          {/* Side bowl of gula aren */}
          <circle cx="355" cy="245" r="34" fill="#FFFBEB" stroke="#D97706" strokeWidth="2.5" />
          <circle cx="355" cy="245" r="24" fill="#7C2D12" />
          <ellipse cx="349" cy="239" rx="8" ry="4" fill="#B45309" opacity="0.6" />
        </svg>
      );

    case 'klepon':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Klepon Lumer Gula Aren">
          <rect width="400" height="300" fill="#FEF3C7" />
          <path d="M55 185 Q200 105 345 180 Q290 250 200 252 Q105 248 55 185 Z" fill="#15803D" />
          <ellipse cx="200" cy="175" rx="95" ry="52" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="170" cy="165" r="26" fill="#22C55E" />
          <circle cx="222" cy="158" r="27" fill="#16A34A" />
          <circle cx="198" cy="190" r="26" fill="#15803D" />
          {/* Melted gula aren drip */}
          <path d="M188 188 Q198 212 209 188" fill="#7C2D12" />
          <path d="M158 156 l7 -2 M176 168 l6 3 M214 148 l8 1 M228 164 l6 -3 M190 184 l7 2" stroke="#FEF9C3" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'basreng':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Basreng Pedas Daun Jeruk">
          <rect width="400" height="300" fill="#FFEDD5" />
          <circle cx="200" cy="155" r="95" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="3" />
          <circle cx="200" cy="155" r="78" fill="#FFF7ED" />
          {/* Crispy spicy chips */}
          <g fill="#EA580C" stroke="#9A3412" strokeWidth="1.5">
            <rect x="142" y="120" width="48" height="22" rx="10" transform="rotate(-24 166 131)" />
            <rect x="192" y="110" width="52" height="22" rx="10" transform="rotate(18 218 121)" fill="#DC2626" />
            <rect x="155" y="150" width="54" height="24" rx="10" transform="rotate(12 182 162)" fill="#F97316" />
            <rect x="205" y="145" width="50" height="22" rx="10" transform="rotate(-16 230 156)" />
            <rect x="172" y="176" width="54" height="22" rx="10" transform="rotate(-6 199 187)" fill="#DC2626" />
          </g>
          {/* Lime leaves */}
          <ellipse cx="165" cy="142" rx="12" ry="6" transform="rotate(-35 165 142)" fill="#16A34A" />
          <ellipse cx="235" cy="175" rx="13" ry="6" transform="rotate(28 235 175)" fill="#15803D" />
        </svg>
      );

    case 'risoles':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Risoles Mayonaise Smoked Beef">
          <rect width="400" height="300" fill="#FEF9C3" />
          <ellipse cx="200" cy="172" rx="115" ry="60" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
          <rect x="118" y="138" width="96" height="38" rx="16" transform="rotate(-10 166 157)" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <rect x="178" y="152" width="98" height="38" rx="16" transform="rotate(12 227 171)" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          {/* Mayo drizzle */}
          <path d="M135 152 Q150 142 165 154 T195 150" stroke="#FFFBEB" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="255" cy="130" r="14" fill="#DC2626" opacity="0.85" />
        </svg>
      );

    case 'makaroni':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Makaroni Pedas Level 10">
          <rect width="400" height="300" fill="#FEE2E2" />
          <circle cx="200" cy="155" r="88" fill="#FFFBEB" stroke="#F87171" strokeWidth="3" />
          <g fill="none" stroke="#DC2626" strokeWidth="14" strokeLinecap="round">
            <path d="M155 135 Q172 115 190 135" />
            <path d="M210 128 Q232 115 245 138" stroke="#EA580C" />
            <path d="M148 170 Q168 152 184 174" stroke="#B91C1C" />
            <path d="M198 168 Q220 150 238 172" />
            <path d="M175 196 Q198 180 218 198" stroke="#EA580C" />
          </g>
          <circle cx="180" cy="145" r="3" fill="#7F1D1D" />
          <circle cx="222" cy="155" r="3" fill="#7F1D1D" />
          <circle cx="195" cy="180" r="3" fill="#7F1D1D" />
        </svg>
      );

    case 'lapis':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Lapis Legit Special Butter">
          <rect width="400" height="300" fill="#FEF3C7" />
          <ellipse cx="200" cy="215" rx="115" ry="28" fill="#FDE68A" />
          <g transform="translate(125, 95)">
            <rect x="0" y="0" width="150" height="18" rx="3" fill="#92400E" />
            <rect x="0" y="18" width="150" height="18" fill="#F59E0B" />
            <rect x="0" y="36" width="150" height="18" fill="#78350F" />
            <rect x="0" y="54" width="150" height="18" fill="#FBBF24" />
            <rect x="0" y="72" width="150" height="18" fill="#92400E" />
            <rect x="0" y="90" width="150" height="18" rx="3" fill="#F59E0B" />
          </g>
        </svg>
      );

    case 'cireng':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Cireng Bumbu Rujak Pedas">
          <rect width="400" height="300" fill="#FFF7ED" />
          <ellipse cx="200" cy="168" rx="108" ry="58" fill="#FFFFFF" stroke="#FDBA74" strokeWidth="2.5" />
          <ellipse cx="165" cy="150" rx="36" ry="22" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          <ellipse cx="228" cy="148" rx="34" ry="20" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
          <ellipse cx="195" cy="178" rx="38" ry="22" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
          {/* Rujak dip bowl */}
          <circle cx="275" cy="188" r="28" fill="#FFFBEB" stroke="#EA580C" strokeWidth="2" />
          <circle cx="275" cy="188" r="20" fill="#9A3412" />
        </svg>
      );

    case 'kaca':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Keripik Kaca Extra Pedas">
          <rect width="400" height="300" fill="#FFEDD5" />
          <circle cx="200" cy="155" r="88" fill="#FFFFFF" stroke="#FB923C" strokeWidth="2.5" />
          <polygon points="150,130 195,110 210,155 160,165" fill="#FDBA74" opacity="0.85" stroke="#EA580C" strokeWidth="1.5" />
          <polygon points="195,140 250,125 260,175 205,185" fill="#FB923C" opacity="0.8" stroke="#C2410C" strokeWidth="1.5" />
          <polygon points="160,165 215,160 225,205 170,200" fill="#FED7AA" opacity="0.9" stroke="#EA580C" strokeWidth="1.5" />
          <circle cx="185" cy="140" r="3" fill="#DC2626" />
          <circle cx="230" cy="155" r="3" fill="#DC2626" />
          <circle cx="195" cy="185" r="3" fill="#DC2626" />
        </svg>
      );

    case 'cendol':
      return (
        <svg viewBox="0 0 400 300" className={className} aria-label="Es Cendol Durian Sawarga">
          <rect width="400" height="300" fill="#ECFDF5" />
          {/* Tall Glass */}
          <path d="M150 65 L250 65 L235 245 L165 245 Z" fill="#FFFBEB" stroke="#059669" strokeWidth="3" />
          {/* Gula aren bottom */}
          <path d="M161 195 L239 195 L235 245 L165 245 Z" fill="#7C2D12" />
          {/* Cendol droplets */}
          <ellipse cx="182" cy="160" rx="8" ry="4" transform="rotate(30 182 160)" fill="#16A34A" />
          <ellipse cx="205" cy="145" rx="9" ry="4" transform="rotate(-20 205 145)" fill="#22C55E" />
          <ellipse cx="218" cy="172" rx="8" ry="4" transform="rotate(15 218 172)" fill="#15803D" />
          <ellipse cx="188" cy="180" rx="8" ry="4" transform="rotate(-35 188 180)" fill="#22C55E" />
          {/* Durian scoop */}
          <ellipse cx="200" cy="95" rx="32" ry="18" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
        </svg>
      );

    case 'gallery-kitchen':
      return (
        <svg viewBox="0 0 500 360" className={className} aria-label="Dapur Fresh Pekalongan">
          <rect width="500" height="360" fill="#7C2D12" />
          <circle cx="250" cy="180" r="130" fill="#EA580C" opacity="0.35" />
          <ellipse cx="250" cy="235" rx="150" ry="60" fill="#FFFBEB" />
          <ellipse cx="250" cy="230" rx="125" ry="45" fill="#FDE68A" />
          <circle cx="215" cy="215" r="24" fill="#16A34A" />
          <circle cx="255" cy="208" r="24" fill="#22C55E" />
          <rect x="275" y="198" width="60" height="28" rx="12" fill="#D97706" />
          <path d="M195 145 Q205 120 195 95 M250 140 Q260 115 250 90 M305 145 Q315 120 305 95" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
        </svg>
      );

    case 'gallery-packaging':
      return (
        <svg viewBox="0 0 500 260" className={className} aria-label="Kemasan Food Grade Premium">
          <rect width="500" height="260" fill="#29150A" />
          {/* Standing Pouch */}
          <rect x="115" y="45" width="110" height="165" rx="12" fill="#FFFBF5" stroke="#F59E0B" strokeWidth="3" />
          <line x1="125" y1="68" x2="215" y2="68" stroke="#EA580C" strokeWidth="3" strokeDasharray="6 4" />
          <rect x="135" y="95" width="70" height="65" rx="8" fill="#FFEDD5" />
          <circle cx="170" cy="128" r="18" fill="#EA580C" />
          {/* Kraft Box */}
          <rect x="260" y="75" width="135" height="135" rx="12" fill="#D97706" stroke="#FEF3C7" strokeWidth="2.5" />
          <rect x="285" y="110" width="85" height="50" rx="6" fill="#FFFBF5" />
          <line x1="300" y1="130" x2="355" y2="130" stroke="#29150A" strokeWidth="4" strokeLinecap="round" />
          <line x1="310" y1="143" x2="345" y2="143" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
};
