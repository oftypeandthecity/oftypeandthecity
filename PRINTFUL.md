# Selling prints — how this works

## The short version

Found Subjects is a static site on GitHub Pages. That shapes everything below.

Printful is a **fulfilment service, not a shop**. It prints and posts things; it does
not take card payments and it has no checkout of its own. Its API needs a secret
token, and a static site has nowhere to keep a secret — anything in this repo is
public, and a leaked Printful token lets a stranger place orders billed to your card.

So the shop is split in three:

| Job | Who does it | Where |
|---|---|---|
| Show the prints, sizes, prices | This repo | `prints.html` + `prints.js` |
| Take the money | Stripe | Stripe Payment Links |
| Print and post it | Printful | printful.com dashboard |

No secrets live in this repo, and nothing needs a server.

---

## What's already built

- **`prints.html`** — the shop page, styled to match the gallery. Grid of prints →
  click one → choose paper and size → price updates → Buy.
- **`prints.js`** — the only file you edit. Products, sizes, prices, and which
  photographs are for sale.
- **`tools/printful-costs.mjs`** — a local script that asks Printful what it will
  charge you, so you can price with real numbers.
- Nav and footer links from the gallery through to the shop.

The page works right now. Every size with no Stripe link yet shows **"Enquire to
order"** and opens a pre-filled email instead of a dead button — so you can publish
today and wire up Stripe as you go.

---

## Setup, once

### 1. Printful account and products

1. Sign up at [printful.com](https://www.printful.com) and set your account currency
   to **GBP** (Settings → Billing), so the costs you see match `prints.js`.
2. For each photograph you want to sell, create a product in the Printful dashboard
   (Product templates → Create). You'll create it three times if you're selling all
   three stocks — Enhanced Matte Poster, Museum-Quality Matte Poster, Framed Poster.
3. Upload the **high-resolution** file. This is the one that matters, and it does
   **not** go in this repo — the images in `photos/` are ~1800px web previews, far too
   small to print at A3. Printful wants roughly 300 DPI at the finished size:

   | Size | Pixels needed at 300 DPI |
   |---|---|
   | A4 | 2480 × 3508 |
   | A3 | 3508 × 4961 |
   | A2 *(bespoke only)* | 4961 × 7016 |

4. **Aspect ratio.** A-series paper is 1:1.414; your 3:2 camera frames are not. If you
   let Printful fill the sheet it will crop your composition. Better: export the print
   file at the exact paper ratio with the photograph centred inside a white margin.
   It looks intentional, it survives framing, and nothing gets cut off.

### 2. Set your prices

Get a read-only token at Printful → Settings → Developers → *Add private token*, then:

```sh
export PRINTFUL_TOKEN="your_private_token"
node tools/printful-costs.mjs                # list the poster products
node tools/printful-costs.mjs --product 171  # costs per size
```

Never commit that token. It's a local export only.

Then edit the `price` fields in `PRINT_PRODUCTS` in `prints.js`. The numbers in there
now are sensible placeholders, not quotes — check them against live costs. Remember
Printful bills you **cost + shipping + VAT**, so your margin is thinner than
`retail − cost` suggests.

### 3. Stripe Payment Links

One link per variant you want to sell — i.e. per photograph × paper × size. That's a
lot of links if you sell everything, so start with your best sellers and let the rest
sit on "Enquire to order".

In the Stripe dashboard → Payment Links → Create:

- **Product name:** `Found Subjects — Outernet (Enhanced matte, A3)`. Be specific;
  this is what you'll read off the receipt when placing the Printful order.
- **Price:** match `prints.js` exactly.
- **Collect customer address:** turn **Shipping address** on. Printful cannot post
  anything without it, and Payment Links won't ask unless you tell them to.
- **Shipping rates:** add rates for your regions (UK / Europe / Rest of world). Payment
  Links can't do live Printful shipping quotes — set flat rates that comfortably cover
  Printful's charge.
- **After payment:** redirect back to `https://foundsubjects.com/prints.html` so people
  land somewhere familiar.

Copy each link into the matching print's `buy` map in `prints.js`, keyed
`"productId:sizeId"`:

```js
{
  id: "outernet",
  src: "photos/DSCF2537-web.jpg",
  title: "The Outernet",
  place: "London",
  year: 2026,
  buy: {
    "matte:a4":  "https://buy.stripe.com/xxxxxxxxxxxx",
    "matte:a3":  "https://buy.stripe.com/yyyyyyyyyyyy",
    "museum:a3": "https://buy.stripe.com/zzzzzzzzzzzz",
  },
},
```

Product ids are `matte`, `museum`, `framed`; size ids are `a4` and `a3`. Both are
defined at the top of `prints.js` — change them there and the keys change with them.

Commit, push, done. GitHub Pages redeploys on push.

---

## When an order comes in

Stripe emails you. The receipt has the product name (which tells you the photograph,
paper and size) and the shipping address. Go to Printful → Orders → New order, pick the
product, paste the address, pay Printful's invoice. They print and post it.

At a few orders a week this takes two minutes and costs nothing. It's the right amount
of machinery for where the site is now.

**When that gets tedious**, automate it without writing a server: Zapier, Make and
Pipedream all have a *Stripe → new payment* trigger and a *Printful → create order*
action. Map the Stripe product name to a Printful variant and the address fields
across. Roughly £20/month, no code.

---

## Adding a print later

1. Put a web-sized preview in `photos/` (the `.gitignore` only publishes `*-web.jpg`,
   so name it that way).
2. Add an entry to `PRINTS` in `prints.js`.
3. Create the Printful product with the high-res file.
4. Create the Stripe links and paste them into `buy`.

Step 2 alone is enough to get it on the site with an email enquiry button.

---

## Things worth knowing

**Sizes stop at A3.** Every print detail carries a *"Larger than A3?"* link that opens
an email enquiry, so the demand still reaches you without committing to a price. Quote
those by hand — a large print depends on the original file, and not every frame holds
up past A3. If a size starts selling often enough to be worth it, add it to
`PRINT_PRODUCTS` and make the Payment Links.

**VAT.** Printful charges you VAT on UK/EU orders. Once you're over the UK registration
threshold you'll need to charge it too — Stripe Tax handles this on Payment Links for a
small fee. Below the threshold you don't need to do anything, but keep the records.

**No basket.** Payment Links are one item at a time. Someone buying three prints pays
three times and you pay three lots of shipping. If that starts happening, that's the
signal to move up to the next tier.

**The upgrade path**, when volume justifies it: a single Cloudflare Worker (free) holding
your Printful and Stripe keys can do live shipping quotes, a real multi-item basket, and
create the Printful order automatically on payment. `prints.js` and `prints.html` are
built so only the buy button's target changes — the catalogue and UI stay as they are.

**Copyright.** The footer notice already covers reproduction. Selling a print doesn't
transfer any rights, and it's worth saying so on the receipt if anyone asks.
