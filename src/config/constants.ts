// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.verdevida.in',
  WHATSAPP_API: import.meta.env.VITE_WHATSAPP_API || '',
  EMAIL_API: import.meta.env.VITE_EMAIL_API || '',
};

// Company Information
export const COMPANY_INFO = {
  name: 'VERDEVIDA ENERGIES PRIVATE LIMITED',
  shortName: 'VerdeVida',
  tagline: 'Green Life, Green Future',
  email: 'verdevidaenergies@gmail.com',
  phone: '+91 8839227692',
  whatsapp: '+91 8839227692',
  address: {
    line1: 'VerdeVida Energies Pvt. Ltd.',
    line2: '118,S.R.VIHAR, NEAR D-MART',
    city: 'SEHORE',
    state: 'Madhya Pradesh',
    country: 'India',
    pincode: '466001',
  },
  social: {
    linkedin: 'https://linkedin.com/company/verdevida',
    twitter: 'https://twitter.com/verdevida',
    facebook: 'https://facebook.com/verdevida',
    instagram: 'https://instagram.com/verdevida',
  },
};

// Product Information
export const PRODUCT_INFO = {
  name: 'HTS Panel',
  fullName: 'Hybrid Thermal Solar Panel',
  costReduction: 60,
  roiYears: 3,
  warrantyYears: 5,
  lifespanYears: 15,
  co2ReductionMT: 150,
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Projects', path: '/projects' },
  { name: 'Founders', path: '/founders' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

// Case Studies / Projects
export const PROJECTS = [
  {
    id: 1,
    company: 'L&T',
    location: 'Surat, Gujarat',
    description: 'Large-scale industrial HVAC optimization',
    savingsPercent: 58,
    image: '/projects/lt-surat.jpg',
  },
  {
    id: 2,
    company: 'Adani Group',
    location: 'Ahmedabad, Gujarat',
    description: 'Corporate campus cooling solution',
    savingsPercent: 62,
    image: '/projects/adani-gujarat.jpg',
  },
  {
    id: 3,
    company: 'Siemens',
    location: 'Navi Mumbai, Maharashtra',
    description: 'Technology center climate control',
    savingsPercent: 55,
    image: '/projects/siemens-mumbai.jpg',
  },
  {
    id: 4,
    company: 'ICICI Bank',
    location: 'Mumbai, Maharashtra',
    description: 'Banking headquarters energy efficiency',
    savingsPercent: 52,
    image: '/projects/icici-mumbai.jpg',
  },
  {
    id: 5,
    company: 'AIIMS',
    location: 'New Delhi',
    description: 'Hospital cooling infrastructure upgrade',
    savingsPercent: 48,
    image: '/projects/aiims-delhi.jpg',
  },
];

// Stats for display
export const STATS = [
  { value: '60%', label: 'Cost Reduction', description: 'In AC electricity bills' },
  { value: '3 Years', label: 'ROI Period', description: 'Quick return on investment' },
  { value: '15+ Years', label: 'Lifespan', description: 'Long-lasting performance' },
  { value: '150 MMT', label: 'CO₂ Reduction', description: 'Potential annual impact' },
];

// Benefits
export const BENEFITS = [
  {
    title: 'Massive Cost Savings',
    description: 'Reduce your AC electricity consumption by up to 60%, leading to significant monthly savings.',
    icon: 'TrendingDown',
  },
  {
    title: 'Eco-Friendly Solution',
    description: 'Help reduce greenhouse gas emissions and contribute to a sustainable future.',
    icon: 'Leaf',
  },
  {
    title: 'Quick ROI',
    description: 'Recover your investment within 3 years with continuous savings thereafter.',
    icon: 'Clock',
  },
  {
    title: 'Long Lifespan',
    description: '15+ years of reliable performance with 5 years manufacturing warranty.',
    icon: 'Shield',
  },
  {
    title: 'Inverter AC Compatible',
    description: 'Works seamlessly with modern inverter AC units for optimal efficiency.',
    icon: 'Zap',
  },
  {
    title: 'Peak Load Reduction',
    description: 'Helps reduce peak summer power demand and strain on the grid.',
    icon: 'BarChart',
  },
];
