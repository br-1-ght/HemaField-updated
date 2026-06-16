# Hemafield Flowers — React + TypeScript + Tailwind CSS

Premium flower delivery website for Lagos, Nigeria.

## Tech Stack
- **React 18** + **TypeScript**
- **Tailwind CSS v3**
- **Vite** (build tool)
- **Paystack** (payment gateway — inline.js)

---

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## Build for Production

```bash
npm run build
# Output in /dist — upload to any static host
```

---

## Deploy

### Vercel (recommended — free)
1. Push to GitHub
2. Connect repo on vercel.com
3. Auto-deploys on every push to `main`

### Netlify
1. `npm run build`
2. Drag the `/dist` folder to netlify.com/drop

### cPanel / Shared Hosting
1. `npm run build`
2. Upload contents of `/dist` folder to `public_html`

---

## Configure Paystack

Open `src/data/data.ts` and replace:
```ts
export const PAYSTACK_KEY = 'YOUR_PAYSTACK_PUBLIC_KEY';
```
With your live public key from Paystack Dashboard → Settings → API Keys:
```ts
export const PAYSTACK_KEY = 'pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```

---

## Images

All product images are stored as base64 in `src/data/images.ts`.
To replace any image:
1. Convert your new image to base64 (`base64 -i image.jpg`)
2. Replace the corresponding `IMG1`–`IMG16` export in `images.ts`

Image mapping:
- `IMG1` — Hero slider: Man at laptop (brand shot)
- `IMG2` — Hero slider: Delivery scene
- `IMG3` — Red Roses product
- `IMG4` — Mixed Bouquet product
- `IMG5` — Roses & Chocolates product
- `IMG6` — Premium Box product
- `IMG7–IMG10` — Occasion cards (Love, Apology, Self-Love, Care)
- `IMG11–IMG14` — "Shop by Feeling" cards
- `IMG15–IMG16` — Additional brand images

---

## Contact Number

In `src/data/data.ts`:
```ts
waNumber: '2348033030982',   // WhatsApp number (no + or spaces)
phone: '+234 803 303 0982',  // Display number
```

## Pre-Launch Checklist
- [ ] Replace `YOUR_PAYSTACK_PUBLIC_KEY` with live key
- [ ] Test all Order Now buttons (Paystack + WhatsApp)
- [ ] Test on mobile (375px)
- [ ] Verify all WhatsApp links open correct number
- [ ] Confirm Facebook / Instagram links are correct
- [ ] Run `npm run build` — no TypeScript errors
- [ ] Deploy to staging and get client sign-off
