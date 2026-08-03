/* =========================================================
   THE PRINTS — the only file to edit to run the shop.

   Three things live here:
     1. PRINT_SETTINGS  — currency, fallback email, standing copy
     2. PRINT_PRODUCTS  — what you sell (paper stock × size × price)
     3. PRINTS          — which photographs are available as prints

   Adding a print:
     a. Add an entry to PRINTS below, pointing `src` at a
        web-sized preview in photos/ (the same file the gallery
        uses is fine — this is only the on-screen preview).
     b. In Printful, create the product and upload the HIGH-RES
        print file. The big file never lives in this repo.
     c. In Stripe, make one Payment Link per size you want to
        sell, then paste the URLs into that print's `buy` map,
        keyed "productId:sizeId" — e.g. "matte:a3".

   A size with no Payment Link still shows, but the button
   falls back to an email enquiry, so nothing looks broken
   while you are still setting things up.

   Full walkthrough: see PRINTFUL.md
   ========================================================= */

const PRINT_SETTINGS = {
  currency: "GBP",
  symbol: "£",

  /* Where "Enquire" buttons go when a size has no Payment Link yet. */
  enquiryEmail: "craigwilkinson@me.com",

  /* Standing copy shown on every print. */
  dispatchNote: "Printed and dispatched by Printful within 2–5 business days. Shipping calculated at checkout.",
  editionNote: "Open edition, signed on the reverse on request.",

  /* Sizes stop at A3. Anything larger is quoted by hand — it depends on
     the original file, and not every frame holds up past A3. */
  largerLabel: "Larger than A3?",
  largerLink: "Ask about a bigger print",
};

/* ---------------------------------------------------------
   PRINT_PRODUCTS — the paper stocks and sizes you offer.

   `price` is what the customer pays, in whole units of the
   currency above. It must cover Printful's fulfilment cost
   plus your margin — run `node tools/printful-costs.mjs` to
   pull live costs before you set these.

   `printfulProduct` is recorded for your reference only. The
   site never calls the Printful API — it cannot, because the
   API key is secret and this is a static site.
   --------------------------------------------------------- */
const PRINT_PRODUCTS = [
  {
    id: "matte",
    name: "Enhanced matte paper",
    blurb: "189 g/m² uncoated matte stock. Warm, low-glare, no reflections under gallery light — the everyday choice.",
    printfulProduct: "Enhanced Matte Paper Poster",
    sizes: [
      { id: "a4", label: "A4", dims: "21 × 29.7 cm", price: 30 },
      { id: "a3", label: "A3", dims: "29.7 × 42 cm", price: 45 },
    ],
  },
  {
    id: "museum",
    name: "Museum-quality giclée",
    blurb: "250 g/m² archival matte, pigment inks. Deeper blacks and a heavier hand — for the frames you keep.",
    printfulProduct: "Museum-Quality Matte Paper Poster",
    sizes: [
      { id: "a4", label: "A4", dims: "21 × 29.7 cm", price: 45 },
      { id: "a3", label: "A3", dims: "29.7 × 42 cm", price: 65 },
    ],
  },
  {
    id: "framed",
    name: "Framed",
    blurb: "Museum-quality paper in a slim black wood frame behind shatterproof glazing. Arrives ready to hang.",
    printfulProduct: "Framed Poster (black frame)",
    sizes: [
      { id: "a4", label: "A4", dims: "21 × 29.7 cm", price: 75 },
      { id: "a3", label: "A3", dims: "29.7 × 42 cm", price: 100 },
    ],
  },
];

/* ---------------------------------------------------------
   PRINTS — the photographs offered for sale.

   This list is deliberately separate from photos.js: the
   gallery is the whole archive, the shop is a chosen few.
   --------------------------------------------------------- */
const PRINTS = [
  {
    id: "funchal",
    src: "photos/DSCF0334-web.jpg",
    title: "Funchal",
    place: "Madeira",
    year: 2026,
    buy: {},
  },
  {
    id: "outernet",
    src: "photos/DSCF2537-web.jpg",
    title: "The Outernet",
    place: "London",
    year: 2026,
    buy: {},
  },
  {
    id: "london-2026-i",
    src: "photos/DSC0507912-web.jpg",
    title: "Untitled I",
    place: "London",
    year: 2026,
    buy: {},
  },
  {
    id: "london-2026-ii",
    src: "photos/DSCF251812-web.jpg",
    title: "Untitled II",
    place: "London",
    year: 2026,
    buy: {},
  },
  {
    id: "london-2026-iii",
    src: "photos/DSCF252312-web.jpg",
    title: "Untitled III",
    place: "London",
    year: 2026,
    buy: {},
  },
  {
    id: "rome-2025-i",
    src: "photos/DSCF968012-web.jpg",
    title: "Rome I",
    place: "Rome",
    year: 2025,
    buy: {},
  },
  {
    id: "rome-2025-ii",
    src: "photos/DSCF972312-web.jpg",
    title: "Rome II",
    place: "Rome",
    year: 2025,
    buy: {},
  },
  {
    id: "rome-2025-iii",
    src: "photos/DSCF966912-web.jpg",
    title: "Rome III",
    place: "Rome",
    year: 2025,
    buy: {},
  },
  {
    id: "london-2025-i",
    src: "photos/DSCF123412-web.jpg",
    title: "Untitled IV",
    place: "London",
    year: 2025,
    buy: {},
  },
  {
    id: "london-2025-ii",
    src: "photos/DSCF514612-web.jpg",
    title: "Untitled V",
    place: "London",
    year: 2025,
    buy: {},
  },
  {
    id: "london-2025-iii",
    src: "photos/DSCF521412-web.jpg",
    title: "Untitled VI",
    place: "London",
    year: 2025,
    buy: {},
  },
  {
    id: "london-2024-i",
    src: "photos/DSC0508112-web.jpg",
    title: "Untitled VII",
    place: "London",
    year: 2024,
    buy: {},
  },
  {
    id: "london-2024-ii",
    src: "photos/R000046412-web.jpg",
    title: "Untitled VIII",
    place: "London",
    year: 2024,
    buy: {},
  },
  {
    id: "london-2024-iii",
    src: "photos/DSCF120112-web.jpg",
    title: "Untitled IX",
    place: "London",
    year: 2024,
    buy: {},
  },
];
