import {
  ColorToken,
  DesignAnnotation,
  FlowStep,
  ProductItem,
  TypeToken,
} from '../types/mockup';

export const JAJANYUK_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: 'Klepon Lumer Gula Aren',
    category: 'pasar',
    categoryName: 'Jajanan Pasar',
    price: 15000,
    rating: 4.9,
    reviews: 142,
    desc: 'Klepon khas Jawa dari tepung ketan alami dengan isian gula aren murni melimpah yang lumer saat digigit.',
    shelfLife: '2 Hari (Suhu Ruang)',
    highlight: 'Terlaris',
    illustrationKey: 'klepon',
  },
  {
    id: 2,
    name: 'Basreng Pedas Daun Jeruk',
    category: 'renyah',
    categoryName: 'Keripik & Renyah',
    price: 18000,
    rating: 4.8,
    reviews: 210,
    desc: 'Bakso goreng gurih iris tipis renyah dengan bumbu cabai rawit asli dan aroma wangi daun jeruk segar.',
    shelfLife: '3 Bulan',
    highlight: 'Pedas Mantap',
    illustrationKey: 'basreng',
  },
  {
    id: 3,
    name: 'Risoles Mayonaise Smoked Beef',
    category: 'basah',
    categoryName: 'Kue & Pastry',
    price: 20000,
    rating: 4.9,
    reviews: 98,
    desc: 'Risoles kulit renyah isi daging smoked beef premium, telur, dan racikan mayo spesial (Isi 5 pcs).',
    shelfLife: '2 Hari',
    highlight: 'Favorit',
    illustrationKey: 'risoles',
  },
  {
    id: 4,
    name: 'Makaroni Pedas Level 10',
    category: 'kekinian',
    categoryName: 'Snack Kekinian',
    price: 12000,
    rating: 4.7,
    reviews: 85,
    desc: 'Makaroni goreng bumbu pedas manis gurih yang meledak di mulut. Pas untuk teman santai atau belajar.',
    shelfLife: '6 Bulan',
    highlight: 'Ekstra Pedas',
    illustrationKey: 'makaroni',
  },
  {
    id: 5,
    name: 'Lapis Legit Special Butter',
    category: 'basah',
    categoryName: 'Kue & Pastry',
    price: 45000,
    rating: 5.0,
    reviews: 64,
    desc: 'Kue lapis berbahan butter impor murni, berlapis lembut dengan aroma rempah manis khas Nusantara.',
    shelfLife: '7 Hari',
    highlight: 'Premium',
    illustrationKey: 'lapis',
  },
  {
    id: 6,
    name: 'Cireng Bumbu Rujak Pedas',
    category: 'kekinian',
    categoryName: 'Snack Kekinian',
    price: 15000,
    rating: 4.8,
    reviews: 112,
    desc: 'Aci digoreng renyah kenyal disajikan lengkap dengan cocolan bumbu rujak pedas manis asam segar (10 pcs).',
    shelfLife: '5 Hari (Kulkas)',
    highlight: 'Renyah',
    illustrationKey: 'cireng',
  },
  {
    id: 7,
    name: 'Keripik Kaca Extra Pedas',
    category: 'renyah',
    categoryName: 'Keripik & Renyah',
    price: 14000,
    rating: 4.7,
    reviews: 76,
    desc: 'Keripik tipis transparan dari singkong pilihan bermandikan minyak cabai dan rempah giling asli.',
    shelfLife: '4 Bulan',
    highlight: 'Populer',
    illustrationKey: 'kaca',
  },
  {
    id: 8,
    name: 'Es Cendol Durian Sawarga',
    category: 'minuman',
    categoryName: 'Minuman Segar',
    price: 18000,
    rating: 4.9,
    reviews: 130,
    desc: 'Minuman cendol pandan wangi dengan kuah santan gurih, gula aren cair, dan topping daging durian asli.',
    shelfLife: '1 Hari',
    highlight: 'Segar',
    illustrationKey: 'cendol',
  },
];

export const JAJANYUK_CATEGORIES = [
  { id: 'all', label: 'Semua Jajanan' },
  { id: 'pasar', label: 'Jajanan Pasar' },
  { id: 'renyah', label: 'Keripik & Renyah' },
  { id: 'basah', label: 'Kue & Pastry' },
  { id: 'kekinian', label: 'Snack Kekinian' },
  { id: 'minuman', label: 'Minuman Segar' },
] as const;

export const JAJANYUK_TESTIMONIALS = [
  {
    id: 1,
    initial: 'S',
    name: 'Siti Rahmawati',
    location: 'Pekalongan Barat',
    rating: '5.0',
    quote:
      'Klepon lumernya juara. Gula arennya benar-benar melimpah dan gurih kelapanya pas. Dikirim dalam kondisi masih hangat.',
  },
  {
    id: 2,
    initial: 'B',
    name: 'Budi Pratama',
    location: 'Pekalongan Timur',
    rating: '5.0',
    quote:
      'Basreng pedas daun jeruknya bikin ketagihan. Bumbunya melimpah dan tidak keras sama sekali saat dikunyah.',
  },
  {
    id: 3,
    initial: 'D',
    name: 'Dina Lestari',
    location: 'Pekalongan Selatan',
    rating: '4.9',
    quote:
      'Pesan via WhatsApp cepat direspon. Kemasan rapi pakai pengaman ekstra, risoles mayonya tetap renyah sampai rumah.',
  },
];

export const JAJANYUK_FAQS = [
  {
    id: 1,
    q: 'Bagaimana cara melakukan pemesanan jajanan?',
    a: 'Pilih jajanan yang diinginkan, klik Tambah ke Keranjang, isi nama dan alamat pengiriman di panel keranjang, lalu tekan Pesan via WhatsApp.',
  },
  {
    id: 2,
    q: 'Berapa lama daya tahan jajanan basah dan kering?',
    a: 'Jajanan basah seperti klepon dan risoles bertahan 1–2 hari pada suhu ruang. Jajanan kering dan keripik bertahan 3–6 bulan dalam kemasan tertutup rapat.',
  },
  {
    id: 3,
    q: 'Apakah melayani pengiriman ke luar kota Pekalongan?',
    a: 'Ya, khusus kategori Keripik & Snack Kekinian melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi kilat.',
  },
];

export const DESIGN_ANNOTATIONS: DesignAnnotation[] = [
  {
    id: 1,
    section: 'hero',
    title: 'Navigasi Atas 3-Zona & Aksi Keranjang',
    componentName: 'StickyHeaderBar',
    rationale:
      'Menjaga tinggi header <= 72px agar tidak menyita viewport mobile. Pencarian, tautan seksi utama, dan tombol keranjang dengan penghitung item selalu terjangkau di lapisan pertama.',
    specs: [
      { label: 'Tinggi Header', value: '72px (Desktop) / 60px (Mobile)' },
      { label: 'Kontrak Zona', value: 'Brand · 4–5 Tautan · Cari & Keranjang' },
      { label: 'Backdrop', value: '#FFFBF5 / blur(12px)' },
    ],
    improvements:
      'Pada desain perbaikan ini, jumlah tautan header diringkas agar tidak berdesakan dan label sub-teks dipindahkan ke Hero agar header tetap bersih satu baris.',
  },
  {
    id: 2,
    section: 'hero',
    title: 'Hero Split-Screen & Jangkar Visual Tunggal',
    componentName: 'StorefrontHero',
    rationale:
      'Menggunakan rasio 7:5 di desktop agar headline Fraunces tampil tegas tanpa menabrak kartu foto di sisi kanan. Tombol CTA utama "Jelajahi Menu" menjadi fokus kontras tertinggi.',
    specs: [
      { label: 'Grid Split', value: '12-Kolom (7 Teks / 5 Visual)' },
      { label: 'Headline', value: 'Fraunces 700 · clamp(2.25rem, 4vw, 3.5rem)' },
      { label: 'Bukti Sosial', value: '3 Metrik sejajar dengan tabular-nums' },
    ],
    improvements:
      'Menghilangkan ornamen melayang berlebihan di sekitar foto produk agar fokus langsung tertuju pada kualitas visual makanan.',
  },
  {
    id: 3,
    section: 'katalog',
    title: 'Filter Kategori Interaktif & Kartu Produk Konsisten',
    componentName: 'ProductCatalogGrid',
    rationale:
      'Setiap kartu produk memiliki rasio gambar seragam (4:3), urutan metadata yang identik (Kategori · Rating · Judul · Deskripsi 2 baris · Harga & Tombol Tambah), sehingga mata mudah memindai harga.',
    specs: [
      { label: 'Kolom Grid', value: '4 Kolom (Desktop) / 2 (Tablet) / 1 (Mobile)' },
      { label: 'Rasio Foto', value: '4:3 (Seragam antar kartu)' },
      { label: 'Format Harga', value: 'Tabular Numerals · Rata Kiri Bawah' },
    ],
    improvements:
      'Mengganti tumpukan lencana warna-warni di atas foto dengan satu teks keterangan ringan agar foto makanan tampil maksimal.',
  },
  {
    id: 4,
    section: 'galeri',
    title: 'Galeri Bento Kemasan & Kualitas Dapur',
    componentName: 'PackagingBentoGrid',
    rationale:
      'Menjawab keraguan pembeli makanan online terkait kebersihan dan keamanan pengiriman. Komposisi bento asimetris (1 kartu besar + 1 lebar + 2 kotak) memecah ritme grid produk.',
    specs: [
      { label: 'Struktur Grid', value: '4 Kolom × 2 Baris Asimetris' },
      { label: 'Overlay Teks', value: 'Linear Scrim #29150A 85% -> 0%' },
      { label: 'Kontras Teks', value: '>= 7.2:1 di atas foto' },
    ],
    improvements:
      'Menggunakan scrim gelap bertingkat pada bagian bawah kartu agar teks putih selalu terbaca jelas di berbagai tingkat kecerahan foto.',
  },
  {
    id: 5,
    section: 'cara-pesan',
    title: 'Alur 4 Langkah Tanpa Login & Checkout WhatsApp',
    componentName: 'OrderStepsStrip',
    rationale:
      'Target pembeli jajanan lokal mengutamakan kecepatan. Menghilangkan proses registrasi akun dan langsung memformat pesan WhatsApp terstruktur meningkatkan tingkat konversi.',
    specs: [
      { label: 'Tahapan', value: '01 Pilih · 02 Cek · 03 Kirim WA · 04 Antar' },
      { label: 'Validasi Form', value: 'Nama Lengkap & Alamat Wajib Diisi' },
      { label: 'Kanal Order', value: 'wa.me/6285867815390 (Pre-filled)' },
    ],
    improvements:
      'Menambahkan status pratinjau Cart Drawer dan Product Modal langsung di mockup agar alur checkout dapat diuji sebelum implementasi.',
  },
  {
    id: 6,
    section: 'testimoni-faq',
    title: 'Ulasan Lokal Pekalongan, Akordion FAQ & Footer',
    componentName: 'TrustAndSupportSection',
    rationale:
      'Testimoni dengan nama dan kecamatan nyata di Pekalongan ditempatkan sebelum FAQ untuk mengurangi keraguan soal ketahanan kue basah dan pengiriman luar kota.',
    specs: [
      { label: 'Kartu Testimoni', value: '3 Kolom · Nama + Lokasi + Skor' },
      { label: 'Pola FAQ', value: 'Akordion Hemat Ruang (Single Expand)' },
      { label: 'Footer Gelap', value: '#1F1109 dengan teks #FDE68A' },
    ],
    improvements:
      'Memastikan tinggi teks deskripsi seragam dan ikon penanda akordion berputar mulus 180 derajat saat dibuka.',
  },
];

export const COLOR_TOKENS: ColorToken[] = [
  {
    name: 'Warm Cream Canvas',
    token: '--bg-canvas',
    hex: '#FFFBF5',
    role: '60% Latar Utama',
    usage: 'Latar halaman storefront dan header transparan agar nuansa kuliner terasa hangat dan bersih.',
    contrastNote: 'AA/AAA dengan #29150A (14.8:1)',
    textDark: true,
  },
  {
    name: 'Pure Card Surface',
    token: '--bg-surface',
    hex: '#FFFFFF',
    role: '30% Permukaan Kartu',
    usage: 'Kartu produk, modal detail, drawer keranjang, dan kotak testimoni.',
    contrastNote: 'Delta kecerahan <= 5% dari canvas',
    textDark: true,
  },
  {
    name: 'Soft Apricot Tint',
    token: '--bg-section-alt',
    hex: '#FFF7ED',
    role: '30% Pemisah Seksi',
    usage: 'Latar belakang seksi keunggulan dan sorotan galeri tanpa garis pemisah keras.',
    contrastNote: 'Dipasangkan border #FED7AA',
    textDark: true,
  },
  {
    name: 'Espresso Ink',
    token: '--text-primary',
    hex: '#29150A',
    role: 'Teks Utama & Judul',
    usage: 'Judul Fraunces, nama produk, dan footer gelap (#1F1109) sebagai jangkar kontras.',
    contrastNote: 'Kontras 14.8:1 pada putih',
    textDark: false,
  },
  {
    name: 'Terracotta Orange',
    token: '--accent-brand',
    hex: '#EA580C',
    role: '10% Aksen Utama',
    usage: 'Tombol CTA utama, harga produk, tab kategori aktif, dan indikator interaktif.',
    contrastNote: 'Putih di atas #EA580C (3.7:1 Large / Bold)',
    textDark: false,
  },
  {
    name: 'WhatsApp Emerald',
    token: '--accent-checkout',
    hex: '#059669',
    role: 'Aksi Checkout Final',
    usage: 'Khusus tombol "Pesan via WhatsApp" di Cart Drawer dan penanda bahan alami.',
    contrastNote: 'Putih di atas #059669 (3.8:1 Bold)',
    textDark: false,
  },
];

export const TYPE_TOKENS: TypeToken[] = [
  {
    name: 'Display Hero (H1)',
    fontFamily: 'Fraunces',
    size: '48px – 56px',
    lineHeight: '1.15',
    weight: '700 (Bold)',
    sample: 'Nikmati Gurih & Manisnya Jajanan Favorit Keluarga!',
    usage: 'Judul utama Hero storefront dengan text-wrap: balance.',
  },
  {
    name: 'Section Heading (H2)',
    fontFamily: 'Fraunces',
    size: '30px – 36px',
    lineHeight: '1.22',
    weight: '700 (Bold)',
    sample: 'Pilihan Jajanan Terfavorit Pekalongan',
    usage: 'Pembuka setiap seksi utama (Katalog, Galeri, Cara Pesan, Testimoni, FAQ).',
  },
  {
    name: 'Product Title (H3)',
    fontFamily: 'Plus Jakarta Sans',
    size: '16px',
    lineHeight: '1.4',
    weight: '700 (Bold)',
    sample: 'Klepon Lumer Gula Aren',
    usage: 'Judul kartu produk dan langkah cara pemesanan.',
  },
  {
    name: 'Body Copy',
    fontFamily: 'Plus Jakarta Sans',
    size: '15px – 16px',
    lineHeight: '1.6',
    weight: '400 (Regular)',
    sample: 'Diracik segar setiap hari dengan bahan pilihan tanpa pengawet buatan.',
    usage: 'Paragraf deskripsi produk, testimoni, dan jawaban FAQ.',
  },
  {
    name: 'Price & Spec Numbers',
    fontFamily: 'JetBrains Mono',
    size: '14px – 18px',
    lineHeight: '1.2',
    weight: '600 (SemiBold)',
    sample: 'Rp 15.000 · 4.9 ★ · 10.000+',
    usage: 'Angka harga, subtotal keranjang, dan metrik statistik dengan tabular-nums.',
  },
];

export const USER_FLOW_STEPS: FlowStep[] = [
  {
    id: 'discover',
    stepNumber: '01',
    title: 'Eksplorasi Storefront',
    screen: 'Hero & Keunggulan',
    trigger: 'Pengunjung membuka halaman utama JajanYuk!',
    systemResponse:
      'Menampilkan proposisi nilai (fresh daily, halal), bukti sosial 10.000+ pelanggan, dan CTA menuju katalog.',
    edgeCase: 'Pada mobile, menu navigasi diringkas dalam drawer agar header tetap ringkas.',
    elements: ['Sticky Header', 'Hero Split 7:5', '4 Kartu Keunggulan'],
  },
  {
    id: 'filter',
    stepNumber: '02',
    title: 'Cari & Filter Kategori',
    screen: 'Katalog Produk',
    trigger: 'Klik tab kategori (mis. Keripik & Renyah) atau ketik kata kunci di kolom pencarian.',
    systemResponse:
      'Grid produk diperbarui instan tanpa reload halaman. Menampilkan status kosong informatif jika kata kunci tidak cocok.',
    edgeCase: 'Pencarian tidak sensitif huruf besar/kecil dan mencari di judul maupun deskripsi.',
    elements: ['6 Tab Kategori', 'Input Pencarian', 'Grid Kartu 4:3'],
  },
  {
    id: 'inspect',
    stepNumber: '03',
    title: 'Tinjau Detail Produk',
    screen: 'Product Detail Modal',
    trigger: 'Klik foto atau judul kartu produk.',
    systemResponse:
      'Membuka modal informasi lengkap: ketahanan suhu ruang/kulkas, jenis kemasan pouch, deskripsi bahan, dan tombol Tambah.',
    edgeCase: 'Klik backdrop atau tombol tutup mengembalikan fokus ke posisi gulir katalog terakhir.',
    elements: ['Foto 4:3 Besar', 'Info Ketahanan', 'Info Kemasan', 'CTA Tambah'],
  },
  {
    id: 'cart',
    stepNumber: '04',
    title: 'Kelola Keranjang Belanja',
    screen: 'Slide-Over Cart Drawer',
    trigger: 'Klik tombol "+ Tambah" pada kartu atau ikon tas belanja di header.',
    systemResponse:
      'Badge jumlah item di header bertambah, toast konfirmasi muncul 2.6 detik, dan subtotal dihitung otomatis.',
    edgeCase: 'Mengurangi jumlah item hingga 0 otomatis menghapus produk dari daftar keranjang.',
    elements: ['Counter +/- Qty', 'Subtotal Tabular', 'Empty State Keranjang'],
  },
  {
    id: 'checkout',
    stepNumber: '05',
    title: 'Checkout Terformat ke WhatsApp',
    screen: 'Form Alamat & WhatsApp Redirect',
    trigger: 'Isi Nama Lengkap + Alamat Pengiriman lalu tekan "Pesan via WhatsApp".',
    systemResponse:
      'Memvalidasi input wajib, menyusun template pesan berisi rincian item, kuantitas, dan total harga, lalu membuka chat admin.',
    edgeCase: 'Jika keranjang kosong atau alamat belum diisi, toast peringatan muncul tanpa menutup drawer.',
    elements: ['Input Nama', 'Textarea Alamat', 'Generator Pesan wa.me'],
  },
];
