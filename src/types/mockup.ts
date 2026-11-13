export type StudioTab = 'mockup' | 'wireframe' | 'tokens' | 'flow';

export type DeviceViewport = 'desktop' | 'tablet' | 'mobile';

export type MockupSectionId =
  | 'all'
  | 'hero'
  | 'katalog'
  | 'galeri'
  | 'cara-pesan'
  | 'testimoni-faq';

export type OverlayPreviewMode = 'none' | 'product-modal' | 'cart-drawer';

export interface ProductItem {
  id: number;
  name: string;
  category: 'pasar' | 'renyah' | 'basah' | 'kekinian' | 'minuman';
  categoryName: string;
  price: number;
  rating: number;
  reviews: number;
  desc: string;
  shelfLife: string;
  highlight: string;
  illustrationKey:
    | 'klepon'
    | 'basreng'
    | 'risoles'
    | 'makaroni'
    | 'lapis'
    | 'cireng'
    | 'kaca'
    | 'cendol';
}

export interface DesignAnnotation {
  id: number;
  section: Exclude<MockupSectionId, 'all'>;
  title: string;
  componentName: string;
  rationale: string;
  specs: {
    label: string;
    value: string;
  }[];
  improvements: string;
}

export interface ColorToken {
  name: string;
  token: string;
  hex: string;
  role: string;
  usage: string;
  contrastNote: string;
  textDark: boolean;
}

export interface TypeToken {
  name: string;
  fontFamily: 'Fraunces' | 'Plus Jakarta Sans' | 'JetBrains Mono';
  size: string;
  lineHeight: string;
  weight: string;
  sample: string;
  usage: string;
}

export interface FlowStep {
  id: string;
  stepNumber: string;
  title: string;
  screen: string;
  trigger: string;
  systemResponse: string;
  edgeCase: string;
  elements: string[];
}
