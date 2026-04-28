// ── Site Data
// Images imported from images.ts (auto-generated base64)
import {
  IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8,
  IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16
} from './images';

// Slider images (hero right panel)
// IMG1 = man at laptop (2.4MB AI brand image)
// IMG2 = delivery scene (284KB AI brand image)
export const SLIDER_IMGS = [IMG1, IMG2, IMG3, IMG13];

// Popular products
// IMG3=Red Roses  IMG4=Mixed Bouquet  IMG5=Roses&Choc  IMG6=Premium Box
export interface Product {
  id: string;
  name: string;
  label: string;
  tagline: string;
  img: string;
  priceFrom: string;
  wa: string;
  priceNum: number;
  description: string;
  features: string[];
  categories: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Red Roses Box',
    label: 'Signature Collection',
    tagline: 'Classic, intentional, unforgettable.',
    img: IMG7,
    priceFrom: 'From ₦65,000',
    wa: 'Hello Hemafield! I want to order the *Red Roses Box* — please help me place my order.',
    priceNum: 65000,
    description: 'Our signature Red Roses arrangement is a voluminous display of the finest fresh crimson roses, hand-packed in a premium white gift box tied with a red satin ribbon. This is the arrangement people stop and stare at.',
    features: ['Premium long-stem red roses', 'White gift box with satin ribbon', 'Free personalised message card', 'Available for same-day Lagos delivery'],
    categories: ['Romance', 'Birthday', 'Anniversary'],
  },
  {
    id: 'p2',
    name: 'Mixed Bouquet',
    label: 'Best Seller',
    tagline: 'Vivid, joyful and impossible to ignore — for the person who deserves colour.',
    img: IMG8,
    priceFrom: 'From ₦65,000',
    wa: 'Hello Hemafield! I want to order the *Mixed Bouquet* — please help me place my order.',
    priceNum: 65000,
    description: 'The Mixed Bouquet is a celebration of life in bloom. Red roses, carnations, eucalyptus and seasonal accent flowers are artfully combined for a rich, layered arrangement that photographs beautifully and feels personal. Ideal for birthdays, promotions and everything worth celebrating.',
    features: ['Fresh roses, carnations & eucalyptus', 'Artisan hand-tied arrangement', 'Free personalised message card', 'Available for same-day Lagos delivery'],
    categories: ['Birthday', 'Celebration', 'Self-Love'],
  },
  {
  id: 'p3',
  name: 'Luxury Gift Set',
  label: 'Mixed Floral Bouquet',
  tagline: 'A soft blend of elegance and romance.',
  img: IMG9,
  priceFrom: 'From ₦65,000',
  wa: 'Hello Hemafield! I want to order the *Luxury Gift Set* — please help me place my order.',
  priceNum: 65000,
  description: 'A beautifully curated bouquet featuring a mix of blush pink roses, red blooms, and soft seasonal flowers wrapped in premium pastel packaging. Designed to express warmth, love, and thoughtful gifting in one elegant arrangement.',
  features: [
    'Mixed premium roses & seasonal flowers',
    'Elegant pastel wrapping',
    'Fresh eucalyptus accents',
    'Free personalised message card',
    'Available for same-day Lagos delivery'
  ],
  categories: ['Anniversary', 'Birthday', 'Romance'],
},
{
  id: 'p4',
  name: 'Red Rose Grand Bouquet',
  label: 'Romance & Passion',
  tagline: 'A bold statement of deep love.',
  img: IMG10,
  priceFrom: 'From ₦65,000',
  wa: 'Hello Hemafield! I want to order the *Red Rose Grand Bouquet* — please help me place my order.',
  priceNum: 65000,
  description: 'An abundant arrangement of deep red roses, styled in a luxurious full bouquet with delicate white fillers and premium wrapping. This piece is crafted to make a powerful romantic impression.',
  features: [
    'Dozens of premium red roses',
    'Full luxury bouquet styling',
    'White baby’s breath accents',
    'Elegant wrapping with ribbon finish',
    'Free personalised message card',
    'Available for same-day Lagos delivery'
  ],
  categories: ['Romance', 'Valentine', 'Anniversary'],
}
];

// Occasions (Shop by Occasion section)
// IMG7=Love  IMG8=Apology  IMG9=Self-Love  IMG10=Care
export interface Occasion {
  id: string;
  name: string;
  label: string;
  tagline: string;
  img: string;
  priceFrom: string;
  wa: string;
  // modal-only fields
  priceNum: number;
  description: string;
  features: string[];
  categories: string[];
}

export const OCCASIONS: Occasion[] = [
  {
    id: 'o1', name: 'Love & Connection', label: 'Joy and Happiness',
    tagline: 'Say "I love you" without words', img: IMG7, priceFrom: 'From ₦65,000',
    wa: 'Hello Hemafield! I want to order flowers for *Love & Connection* — please help me choose the right arrangement.',
    priceNum: 65000,
    description: 'Our signature Red Roses arrangement is a voluminous display of the finest fresh crimson roses, hand-packed in a premium white gift box tied with a red satin ribbon. This is the arrangement people stop and stare at. Classic, intentional, unforgettable.',
    features: ['Premium long-stem red roses', 'White gift box with satin ribbon', 'Free personalised message card', 'Available for Same-day Lagos delivery'],
    categories: ['Romance', 'Birthday', 'Anniversary  '],
  },
  {
    id: 'o2', name: 'Apology', label: 'Show Sympathy',
    tagline: 'Vivid, joyful and impossible to ignore — for the person who deserves colour.', img: IMG8, priceFrom: 'From ₦65,000',
    wa: 'Hello Hemafield! I want to send flowers for an *Apology*. Please help me choose.',
    priceNum: 65000,
    description: 'The Mixed Bouquet is a celebration of life in bloom. Red roses, carnations, eucalyptus and seasonal accent flowers are artfully combined for a rich, layered arrangement that photographs beautifully and feels personal. Ideal for birthdays, promotions and everything worth celebrating',
    features: ['Fresh roses, carnations & eucalyptus', 'Artisan hand-tied arrangement', 'Free personalised message card', 'Available for Same-day Lagos delivery'],
    categories: ['Birthday', 'Celebration', 'Self-Love'],
  },
  {
    id: 'o3', name: 'Self-Love', label: 'Gratitude',
    tagline: 'Brighten your day unexpectedly', img: IMG9, priceFrom: 'From ₦65,000',
    wa: 'Hello Hemafield! I want to order flowers for *Self-Love / Gratitude*. Please help me choose.',
    priceNum: 65000,
    description: 'You deserve flowers too. A vibrant, joyful arrangement celebrating you — whether it\'s a personal milestone, a mood boost, or simply because you\'re worth it.',
    features: ['Bold mixed seasonal blooms', 'Uplifting colour palette', 'Free personalised message card', 'Available for Same-day Lagos delivery'],
    categories: ['Self-Love', 'Gratitude', 'Celebration'],
  },
  {
    id: 'o4', name: 'Care & Support', label: 'Celebration & Encouragement',
    tagline: 'Express your heartfelt support', img: IMG10, priceFrom: 'From ₦65,000',
    wa: 'Hello Hemafield! I want to send flowers for *Care & Support*. Please help me choose.',
    priceNum: 65000,
    description: 'Let someone know you\'re in their corner. A warm, comforting arrangement that carries your encouragement and care — perfect for difficult times or big milestones.',
    features: ['Warm toned mixed blooms', 'Thoughtfully arranged by hand', 'Free personalised message card', 'Available for Same-day Lagos delivery'],
    categories: ['Care', 'Support', 'Encouragement'],
  },
];

// For-cards (Shop by Feeling section)
// IMG11 IMG12 IMG13 IMG14
export interface ForCard {
  bg: string;
  items: string[];
  priceFrom: string;
  wa: string;
}

export const FOR_CARDS: ForCard[] = [
  {
    bg: IMG11, priceFrom: 'From ₦65,000',
    items: ['Valentine','Proposal','Birthdays','Anniversary','Romance'],
    wa: 'Hello Hemafield! I want to send flowers for a *romantic occasion*. Please help me choose.',
  },
  {
    bg: IMG12, priceFrom: 'From ₦65,000',
    items: ['Forgiveness','Apology','Funeral','Heart Breaks'],
    wa: 'Hello Hemafield! I want to send flowers for *healing / sympathy*. Please help me choose.',
  },
  {
    bg: IMG13, priceFrom: 'From ₦65,000',
    items: ['Graduations','Promotions','I did it','Achieved Goals','Nobody Celebrated Me'],
    wa: 'Hello Hemafield! I want to send flowers to *celebrate an achievement*. Please help me choose.',
  },
  {
    bg: IMG14, priceFrom: 'From ₦65,000',
    items: ['Appreciation','God Did','For Your Boss','Get Well Soon'],
    wa: 'Hello Hemafield! I want to send flowers for *appreciation / encouragement*. Please help me choose.',
  },
];

// Diaspora section images: IMG15, IMG16
export const DIASPORA_IMGS = [IMG15, IMG16];

// Contact & business details
export const CONTACT = {
  phone: '+234 803 303 0982',
  waNumber: '2348033030982',
  email: 'info@hemafieldflowers.com.ng',
  address: '16, Maitama Sule Off Awolowo Road, Ikoyi, Lagos',
  cutoff: 'Order by 2PM for same-day Lagos delivery',
  facebook: 'https://web.facebook.com/hemafield/?_rdc=1&_rdr#',
  instagram: 'https://www.instagram.com/hemafieldflowers/',
};

export const PAYSTACK_KEY = 'YOUR_PAYSTACK_PUBLIC_KEY';
