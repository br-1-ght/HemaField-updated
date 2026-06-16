// ── Site Data
// Images imported from images.ts (auto-generated base64)
import {
  IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8,
  IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17,
  IMG18, IMG19, IMG20, IMG21, IMG22, IMG23, IMG24, IMG25, IMG26,
  IMG27, IMG28, IMG29, IMG30, IMG31, IMG32, IMG33, IMG34, IMG35, IMG36,
  IMG37, IMG38, IMG39, IMG40, IMG41, IMG42, IMG43, IMG44, IMG45, IMG46
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
},
{
  id: 'p5',
  name: 'Floral Harmony',
  label: 'Signature Bouquet',
  tagline: 'A balanced mix of roses and lilies that complement each other perfectly.',
  img: IMG17,
  priceFrom: '₦250,000',
  wa: 'Hello Hemafield! I want to order the *Floral Harmony* bouquet — please help me place my order.',
  priceNum: 250000,
  description: 'Floral Harmony is a curated masterpiece featuring a balanced mix of roses and lilies that complement each other perfectly. Calm colors, soft textures, and a peaceful, elegant vibe make this bouquet a timeless expression of love and appreciation. Wrapped in premium white and gold packaging with a satin ribbon finish.',
  features: [
    '2 stems of Casablanca Lilies',
    '18 stems of premium mixed roses',
    '2 stems of Gypsophilia (Baby\'s Breath)',
    'Premium white & gold gift wrapping',
    'Free personalised message card',
    'Available for same-day Lagos delivery'
  ],
  categories: ['Romance', 'Anniversary', 'Birthday'],
},
{
  id: 'p6',
  name: 'Velvet',
  label: 'Classic Bouquet',
  tagline: 'Luxurious mixed roses wrapped beautifully to create a classy and eye-catching bouquet.',
  img: IMG18,
  priceFrom: '₦150,000',
  wa: 'Hello Hemafield! I want to order the *Velvet* bouquet — please help me place my order.',
  priceNum: 150000,
  description: 'Velvet brings together luxurious mixed roses in a classy, eye-catching arrangement, finished with elegant satin ribbon wrapping for a refined statement piece.',
  features: ['Luxurious mixed roses', 'Premium satin ribbon finish', 'Free personalised message card', 'Available for same-day Lagos delivery'],
  categories: ['Romance', 'Birthday', 'Anniversary'],
},
{
  id: 'p7',
  name: "Cupid's Touch",
  label: 'Romantic Bouquet',
  tagline: 'A romantic blend of vibrant and soft-toned flowers, inspired by the magic of love.',
  img: IMG19,
  priceFrom: '₦200,000',
  wa: "Hello Hemafield! I want to order the *Cupid's Touch* bouquet — please help me place my order.",
  priceNum: 200000,
  description: "Cupid's Touch is a romantic blend of vibrant and soft-toned flowers, inspired by the magic of love and perfect for making hearts skip a beat.",
  features: ['24 stems of mixed roses', 'Fresh seasonal fillers', 'Premium gift wrapping', 'Free personalised message card'],
  categories: ['Romance', 'Valentine', 'Anniversary'],
},
{
  id: 'p8',
  name: 'Perla Lavanda',
  label: 'Elegant Bouquet',
  tagline: 'Beautiful bouquet designed with elegance and soft luxury.',
  img: IMG20,
  priceFrom: '₦185,000',
  wa: 'Hello Hemafield! I want to order the *Perla Lavanda* bouquet — please help me place my order.',
  priceNum: 185000,
  description: 'Perla Lavanda is designed with elegance and soft luxury in mind, blending white roses, lisianthus, lilies and eucalyptus into a graceful, sophisticated arrangement.',
  features: ['White roses & lilies', 'Purple lisianthus accents', 'Fresh eucalyptus foliage', 'Premium lavender gift wrap'],
  categories: ['Anniversary', 'Birthday', 'Romance'],
},
{
  id: 'p9',
  name: 'Amore Petali',
  label: 'Petite Bouquet',
  tagline: 'A romantic bouquet of fresh petals designed to symbolize love and affection.',
  img: IMG21,
  priceFrom: '₦35,000',
  wa: 'Hello Hemafield! I want to order the *Amore Petali* bouquet — please help me place my order.',
  priceNum: 35000,
  description: 'Amore Petali is a romantic bouquet of fresh red roses surrounded by delicate gypsophila, designed to symbolize love and affection in a compact, thoughtful gift.',
  features: ['Fresh red roses', 'Gypsophila (Baby\'s Breath)', 'Pink & gold gift wrap', 'Perfect for small gestures of love'],
  categories: ['Romance', 'Valentine'],
},
{
  id: 'p10',
  name: 'Pink Cloud Bouquet',
  label: 'Grand Bouquet',
  tagline: 'A fluffy and dreamy bouquet of soft pink blooms designed to feel light, sweet, and magical.',
  img: IMG22,
  priceFrom: '₦500,000',
  wa: 'Hello Hemafield! I want to order the *Pink Cloud Bouquet* — please help me place my order.',
  priceNum: 500000,
  description: 'Pink Cloud Bouquet is a fluffy and dreamy arrangement of soft pink and white roses, designed to feel light, sweet, and magical — a grand gesture for someone special.',
  features: ['50 stems of pink & white roses', 'Premium pink gift wrapping', 'Free personalised message card', 'Available for same-day Lagos delivery'],
  categories: ['Romance', 'Anniversary', 'Birthday'],
},
{
  id: 'p11',
  name: 'Butterfly Petals',
  label: 'Mixed Bouquet',
  tagline: 'A colorful and delicate bouquet inspired by the beauty and softness of butterflies.',
  img: IMG23,
  priceFrom: '₦80,000',
  wa: 'Hello Hemafield! I want to order the *Butterfly Petals* bouquet — please help me place my order.',
  priceNum: 80000,
  description: 'Butterfly Petals is a colorful and delicate bouquet of mixed chrysanthemums and roses, inspired by the beauty and softness of butterflies in flight.',
  features: ['Mixed pink & purple chrysanthemums', 'Fresh seasonal roses', 'Soft, delicate textures', 'Free personalised message card'],
  categories: ['Birthday', 'Appreciation'],
},
{
  id: 'p12',
  name: 'Pure Bliss Flowers',
  label: 'Signature Bouquet',
  tagline: 'Elegant blooms carefully wrapped to create peaceful and joyful floral moments.',
  img: IMG26,
  priceFrom: '₦150,000',
  wa: 'Hello Hemafield! I want to order the *Pure Bliss Flowers* bouquet — please help me place my order.',
  priceNum: 150000,
  description: 'Pure Bliss Flowers brings together elegant chrysanthemums, spray roses and gypsophila, carefully wrapped to create a peaceful and joyful floral moment.',
  features: ['Mixed yellow, pink & white blooms', 'Fresh chrysanthemums & spray roses', 'Gypsophila accents', 'Premium pink gift wrap'],
  categories: ['Birthday', 'Appreciation', 'Anniversary'],
},
{
  id: 'p13',
  name: 'Opal Garden',
  label: 'Grand Bouquet',
  tagline: 'A delicate bouquet inspired by the beauty and softness of precious opal tones.',
  img: IMG27,
  priceFrom: '₦300,000',
  wa: 'Hello Hemafield! I want to order the *Opal Garden* bouquet — please help me place my order.',
  priceNum: 300000,
  description: 'Opal Garden is a delicate bouquet inspired by the beauty and softness of precious opal tones, featuring layers of pink and white roses and chrysanthemums.',
  features: ['30 stems of pink & white roses', 'Mixed chrysanthemum accents', 'Premium gift wrapping', 'Free personalised message card'],
  categories: ['Anniversary', 'Romance', 'Birthday'],
},
{
  id: 'p14',
  name: 'Maison Fleur',
  label: 'Classic Bouquet',
  tagline: 'Elegant bouquet with heavenly beauty and luxurious floral charm.',
  img: IMG28,
  priceFrom: '₦120,000',
  wa: 'Hello Hemafield! I want to order the *Maison Fleur* bouquet — please help me place my order.',
  priceNum: 120000,
  description: 'Maison Fleur is an elegant bouquet of fresh red roses with heavenly beauty and luxurious floral charm, finished with delicate gypsophila accents.',
  features: ['Fresh red roses', 'Gypsophila (Baby\'s Breath)', 'Premium gift wrapping', 'Free personalised message card'],
  categories: ['Romance', 'Anniversary'],
},
{
  id: 'p15',
  name: 'Veloura Luxe',
  label: 'Grand Bouquet',
  tagline: 'A luxurious bouquet with soft romantic blooms.',
  img: IMG29,
  priceFrom: '₦180,000',
  wa: 'Hello Hemafield! I want to order the *Veloura Luxe* bouquet — please help me place my order.',
  priceNum: 180000,
  description: 'Veloura Luxe is a luxurious bouquet of soft romantic red roses, generously gathered for a bold, breathtaking statement of love.',
  features: ['Premium red roses, generously gathered', 'Elegant white & gold wrapping', 'Free personalised message card', 'Available for same-day Lagos delivery'],
  categories: ['Romance', 'Anniversary', 'Valentine'],
},
{
  id: 'p16',
  name: 'Bella',
  label: 'Petite Bouquet',
  tagline: 'Sweet and beautiful bouquet for soft romantic gifting moments.',
  img: IMG30,
  priceFrom: '₦50,000',
  wa: 'Hello Hemafield! I want to order the *Bella* bouquet — please help me place my order.',
  priceNum: 50000,
  description: 'Bella is a sweet and beautiful arrangement of deep red roses styled in a decorative vase with delicate butterfly accents — perfect for soft, romantic gifting moments.',
  features: ['Fresh red roses', 'Decorative butterfly accents', 'Styled in a presentation vase', 'Free personalised message card'],
  categories: ['Romance', 'Appreciation'],
},
{
  id: 'p17',
  name: 'Sweet Serenade',
  label: 'Premium Bouquet',
  tagline: 'Elegant flowers styled with sophistication for luxurious gifting and unforgettable occasions.',
  img: IMG31,
  priceFrom: '₦500,000',
  wa: 'Hello Hemafield! I want to order the *Sweet Serenade* bouquet — please help me place my order.',
  priceNum: 500000,
  description: 'Sweet Serenade is styled with sophistication for luxurious gifting and unforgettable occasions, featuring 50 stems of premium red roses in an elegant, full arrangement.',
  features: ['50 stems of red roses', 'Premium sophisticated styling', 'Elegant gift wrapping', 'Free personalised message card'],
  categories: ['Romance', 'Anniversary', 'Valentine'],
},
{
  id: 'p18',
  name: 'Rose Garden',
  label: 'Luxury Box',
  tagline: 'A delicate arrangement of romantic blooms designed to bring grace, sweetness, and feminine charm.',
  img: IMG32,
  priceFrom: '₦1,000,000',
  wa: 'Hello Hemafield! I want to order the *Rose Garden* (100 stems box) — please help me place my order.',
  priceNum: 1000000,
  description: 'Rose Garden is a delicate arrangement of romantic blooms designed to bring grace, sweetness, and feminine charm — 100 stems of red roses beautifully presented in a luxury box.',
  features: ['100 stems of red roses', 'Presented in a luxury box', 'Free personalised message card', 'Available for same-day Lagos delivery'],
  categories: ['Romance', 'Anniversary', 'Valentine'],
},
{
  id: 'p19',
  name: 'Luna Fiore',
  label: 'Grand Bouquet',
  tagline: 'A dreamy bouquet inspired by moonlight, blending elegance with peaceful beauty.',
  img: IMG33,
  priceFrom: '₦180,000',
  wa: 'Hello Hemafield! I want to order the *Luna Fiore* bouquet — please help me place my order.',
  priceNum: 180000,
  description: 'Luna Fiore is a dreamy bouquet inspired by moonlight, blending elegance with peaceful beauty through a generous gathering of fresh red roses.',
  features: ['Generous gathering of red roses', 'Elegant white gift wrapping', 'Free personalised message card', 'Available for same-day Lagos delivery'],
  categories: ['Romance', 'Anniversary'],
},
{
  id: 'p20',
  name: 'Forever Yours',
  label: 'Signature Bouquet',
  tagline: 'A timeless bouquet of elegant blooms that symbolizes commitment, loyalty, and everlasting love.',
  img: IMG34,
  priceFrom: '₦250,000',
  wa: 'Hello Hemafield! I want to order the *Forever Yours* bouquet — please help me place my order.',
  priceNum: 250000,
  description: 'Forever Yours is a timeless bouquet of elegant blooms that symbolizes commitment, loyalty, and everlasting love — 30 stems of red roses with fillers, beautifully wrapped.',
  features: ['30 stems of red roses', 'Fresh seasonal fillers', 'Beautifully wrapped presentation', 'Free personalised message card'],
  categories: ['Romance', 'Anniversary', 'Valentine'],
},
{
  id: 'p21',
  name: 'Sweetheart Bloom',
  label: 'Mixed Bouquet',
  tagline: 'A soft, charming mix of flowers, perfect for expressing affection in the sweetest and most gentle way.',
  img: IMG35,
  priceFrom: '₦150,000',
  wa: 'Hello Hemafield! I want to order the *Sweetheart Bloom* bouquet — please help me place my order.',
  priceNum: 150000,
  description: 'Sweetheart Bloom is a soft, charming mix of chrysanthemums, spray roses and ruscus, perfect for expressing affection in the sweetest and most gentle way.',
  features: ['Mixed chrysanthemums', 'Fresh spray roses', 'Ruscus foliage accents', 'Free personalised message card'],
  categories: ['Romance', 'Appreciation', 'Birthday'],
},
{
  id: 'p22',
  name: 'Pretty in Pink',
  label: 'Petite Bouquet',
  tagline: 'A playful yet classy mix of fresh pink flowers that gives a bright, happy, and girly vibe.',
  img: IMG36,
  priceFrom: '₦175,000',
  wa: 'Hello Hemafield! I want to order the *Pretty in Pink* bouquet — please help me place my order.',
  priceNum: 175000,
  description: 'Pretty in Pink is a playful yet classy mix of fresh pink flowers that gives a bright, happy, and girly vibe — perfect for birthdays and sweet surprises.',
  features: ["6 fuchsia pink roses", "4 spray pink roses", "6 pink carnations", "Gum leaves & ribbon detailing"],
  categories: ['Birthday', 'Appreciation'],
},
{
  id: 'p23',
  name: 'Golden Petals',
  label: 'Mixed Bouquet',
  tagline: 'A radiant blend of warm-toned flowers with subtle golden touches, giving a bright, rich, celebratory vibe.',
  img: IMG24,
  priceFrom: '₦150,000',
  wa: 'Hello Hemafield! I want to order the *Golden Petals* bouquet — please help me place my order.',
  priceNum: 150000,
  description: 'Golden Petals is a radiant blend of roses, mums and seasonal fillers with subtle golden touches, giving a bright, rich, and celebratory vibe perfect for joyful occasions.',
  features: ['Mixed roses & chrysanthemums', 'Warm golden-toned blooms', 'Fresh seasonal fillers', 'Free personalised message card'],
  categories: ['Birthday', 'Appreciation'],
},
{
  id: 'p24',
  name: 'Soft Kiss Bouquet',
  label: 'Premium Bouquet',
  tagline: 'A delicate floral bouquet designed to express affection with elegance and warmth.',
  img: IMG25,
  priceFrom: '₦200,000',
  wa: 'Hello Hemafield! I want to order the *Soft Kiss Bouquet* — please help me place my order.',
  priceNum: 200000,
  description: 'Soft Kiss Bouquet is a delicate floral arrangement of pink hydrangeas, roses and chrysanthemums designed to express affection with elegance and warmth.',
  features: ['Fresh pink hydrangeas', 'Mixed roses & chrysanthemums', 'Premium pink & gold gift wrap', 'Free personalised message card'],
  categories: ['Romance', 'Anniversary'],
},
{
  id: 'p25',
  name: 'Blush and Bloom',
  label: 'Premium Bouquet',
  tagline: 'A delicate mix of pink-toned roses and fresh lilies, styled for a soft, feminine look.',
  img: IMG37,
  priceFrom: '₦280,000',
  wa: 'Hello Hemafield! I want to order the *Blush and Bloom* bouquet — please help me place my order.',
  priceNum: 280000,
  description: 'Blush and Bloom is a delicate mix of pink-toned roses and fresh lilies, styled for a soft, feminine look. Light, pretty, and effortlessly beautiful.',
  features: ['Fresh white lilies', 'Mixed pink & fuchsia roses', 'Delicate purple filler accents', 'Free personalised message card'],
  categories: ['Romance', 'Birthday', 'Anniversary'],
},
{
  id: 'p26',
  name: 'Blooming Pink Affair',
  label: 'Romantic Bouquet',
  tagline: 'A romantic, pink bouquet designed for special moments. Elegant, soft, and full of charm.',
  img: IMG38,
  priceFrom: '₦150,000',
  wa: 'Hello Hemafield! I want to order the *Blooming Pink Affair* bouquet — please help me place my order.',
  priceNum: 150000,
  description: 'Blooming Pink Affair is a romantic, pink bouquet designed for special moments — elegant, soft, and full of charm.',
  features: ['4 stems of pink roses', '6 fuchsia pink roses', 'Mixed mums', 'Fresh seasonal fillers'],
  categories: ['Romance', 'Birthday'],
},
{
  id: 'p27',
  name: 'Petals Princess Bouquet',
  label: 'Petite Bouquet',
  tagline: 'A delicate and graceful pink bouquet fit for someone who loves soft, feminine beauty and luxury.',
  img: IMG39,
  priceFrom: '₦140,000',
  wa: 'Hello Hemafield! I want to order the *Petals Princess Bouquet* — please help me place my order.',
  priceNum: 140000,
  description: 'Petals Princess Bouquet is a delicate and graceful pink bouquet fit for someone who loves soft, feminine beauty and luxury.',
  features: ['5 stems of white roses', '7 spray pink roses', 'Gypsophila (Baby\'s Breath)', 'Fresh seasonal fillers'],
  categories: ['Romance', 'Birthday', 'Appreciation'],
},
{
  id: 'p28',
  name: 'Pure Elegance Bouquet',
  label: 'Premium Bouquet',
  tagline: 'A simple yet classy combination of lilies and roses that expresses beauty, calmness, and sophistication.',
  img: IMG40,
  priceFrom: '₦400,000',
  wa: 'Hello Hemafield! I want to order the *Pure Elegance Bouquet* — please help me place my order.',
  priceNum: 400000,
  description: 'Pure Elegance Bouquet is a simple yet classy combination of mixed-color roses and lilies that expresses beauty, calmness, and sophistication.',
  features: ['Mixed color roses', 'Fresh pink lilies', 'Premium polka-dot gift wrap', 'Free personalised message card'],
  categories: ['Anniversary', 'Romance', 'Birthday'],
},
{
  id: 'p29',
  name: 'Hidden Love',
  label: 'Romantic Bouquet',
  tagline: "A soft intimate bouquet of roses and delicate blooms, designed to express deep feelings that words can't fully say.",
  img: IMG41,
  priceFrom: '₦350,000',
  wa: 'Hello Hemafield! I want to order the *Hidden Love* bouquet — please help me place my order.',
  priceNum: 350000,
  description: "Hidden Love is a soft, intimate bouquet of red and pink roses with delicate blooms, designed to express deep feelings that words can't fully say.",
  features: ['Mixed red & pink roses', 'Gypsophila accents', 'Premium polka-dot gift wrap', 'Free personalised message card'],
  categories: ['Romance', 'Valentine', 'Anniversary'],
},
{
  id: 'p30',
  name: 'Fiamma',
  label: 'Mixed Bouquet',
  tagline: 'A striking bouquet of vibrant blooms symbolizing love that never fades.',
  img: IMG42,
  priceFrom: '₦150,000',
  wa: 'Hello Hemafield! I want to order the *Fiamma* bouquet — please help me place my order.',
  priceNum: 150000,
  description: 'Fiamma is a striking bouquet of vibrant pink, red and white blooms symbolizing love that never fades.',
  features: ['Mixed red & pink roses', 'White chrysanthemums', 'Purple filler accents', 'Free personalised message card'],
  categories: ['Romance', 'Birthday', 'Appreciation'],
},
{
  id: 'p31',
  name: 'Crimson Love',
  label: 'Classic Bouquet',
  tagline: 'A bold bouquet of deep red roses that speaks pure passion and intense love. Rich, romantic, and unforgettable.',
  img: IMG43,
  priceFrom: '₦120,000',
  wa: 'Hello Hemafield! I want to order the *Crimson Love* bouquet — please help me place my order.',
  priceNum: 120000,
  description: 'Crimson Love is a bold bouquet of deep red roses that speaks pure passion and intense love — rich, romantic, and unforgettable.',
  features: ['12 stems of red roses', 'Gypsophila (Baby\'s Breath)', 'Premium black & gold gift wrap', 'Free personalised message card'],
  categories: ['Romance', 'Valentine'],
},
{
  id: 'p32',
  name: 'Fioritura',
  label: 'Mixed Bouquet',
  tagline: 'A cheerful pink bouquet that feels warm, happy, and full of life.',
  img: IMG44,
  priceFrom: '₦190,000',
  wa: 'Hello Hemafield! I want to order the *Fioritura* bouquet — please help me place my order.',
  priceNum: 190000,
  description: 'Fioritura is a cheerful pink bouquet of roses and chrysanthemums that feels warm, happy, and full of life.',
  features: ['Mixed pink roses', 'Pink & white chrysanthemums', 'Fresh spray roses', 'Free personalised message card'],
  categories: ['Birthday', 'Appreciation'],
},
{
  id: 'p33',
  name: 'Tender Love',
  label: 'Grand Bouquet',
  tagline: 'A gentle and soft bouquet that represents pure, caring, and heartfelt emotions.',
  img: IMG45,
  priceFrom: '₦400,000',
  wa: 'Hello Hemafield! I want to order the *Tender Love* bouquet — please help me place my order.',
  priceNum: 400000,
  description: 'Tender Love is a gentle and soft grand bouquet of pink lilies, mixed roses and seasonal fillers that represents pure, caring, and heartfelt emotions.',
  features: ['Fresh pink lilies', 'Mixed orange, yellow & pink roses', 'Premium gift wrapping', 'Free personalised message card'],
  categories: ['Romance', 'Anniversary'],
},
{
  id: 'p34',
  name: 'External Ivory',
  label: 'Signature Bouquet',
  tagline: 'A sophisticated bouquet crafted with white blooms to represent everlasting love.',
  img: IMG46,
  priceFrom: '₦200,000',
  wa: 'Hello Hemafield! I want to order the *External Ivory* bouquet — please help me place my order.',
  priceNum: 200000,
  description: 'External Ivory is a sophisticated bouquet crafted entirely with white roses and chrysanthemums to represent everlasting love.',
  features: ['Fresh white roses', 'White chrysanthemums', 'Gypsophila (Baby\'s Breath)', 'Free personalised message card'],
  categories: ['Anniversary', 'Sympathy', 'Romance'],
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