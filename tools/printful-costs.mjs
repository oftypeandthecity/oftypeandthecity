#!/usr/bin/env node
/* =========================================================
   printful-costs.mjs — what Printful charges you.

   Run this locally before setting retail prices in prints.js.
   It never runs on the site and the token never leaves your
   machine: this is a static site, so it has no server to keep
   a secret on.

   Usage:
     export PRINTFUL_TOKEN="your_private_token"
     node tools/printful-costs.mjs                 # find poster products
     node tools/printful-costs.mjs --product 171   # variant costs

   Get a token at printful.com → Settings → Developers →
   "Add private token" (scope: read on catalog is enough).

   Uses the stable v1 catalog API. Prices come back in your
   Printful account's default currency — set that to GBP so
   the numbers line up with prints.js.
   ========================================================= */

const TOKEN = process.env.PRINTFUL_TOKEN;
const API = "https://api.printful.com";

if (!TOKEN) {
  console.error("Missing PRINTFUL_TOKEN.\n  export PRINTFUL_TOKEN=\"your_private_token\"");
  process.exit(1);
}

async function api(path) {
  const res = await fetch(API + path, {
    headers: { Authorization: "Bearer " + TOKEN },
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const reason = body?.error?.message || body?.result || res.statusText;
    throw new Error(`${res.status} on ${path}: ${reason}`);
  }
  return body.result;
}

/* Printful ships posters as several distinct catalog products
   (enhanced matte, museum-quality, framed, canvas...). Find them
   by name rather than hardcoding IDs, which do change. */
async function listPosterProducts() {
  const products = await api("/products");
  const wanted = /poster|framed|canvas|art print|giclee|giclée/i;
  const matches = products.filter(p => wanted.test(p.title));

  console.log(`\n${matches.length} print-like products in the catalog:\n`);
  for (const p of matches) {
    console.log(`  ${String(p.id).padStart(5)}  ${p.title}`);
  }
  console.log("\nInspect one with:  node tools/printful-costs.mjs --product <id>\n");
}

async function showProduct(id) {
  const { product, variants } = await api(`/products/${id}`);
  console.log(`\n${product.title}  (id ${product.id})`);
  console.log(`${product.description?.split("\n")[0] || ""}\n`);

  /* Suggested retail assumes you want roughly a 3× markup after
     Printful's cut — adjust to taste, it is only a starting point. */
  const rows = variants.map(v => ({
    id: v.id,
    name: v.name,
    size: v.size || "—",
    cost: Number(v.price),
  }));

  const w = Math.max(...rows.map(r => r.name.length));
  console.log(
    "  " + "variant".padEnd(8) + "name".padEnd(w + 2) + "cost".padStart(9) + "suggest".padStart(10)
  );
  for (const r of rows.sort((a, b) => a.cost - b.cost)) {
    const suggest = Math.ceil((r.cost * 3) / 5) * 5; // round up to nearest 5
    console.log(
      "  " + String(r.id).padEnd(8) + r.name.padEnd(w + 2) +
      r.cost.toFixed(2).padStart(9) + String(suggest).padStart(10)
    );
  }
  console.log(
    "\n  cost = what Printful bills you, before shipping and tax." +
    "\n  suggest = cost × 3, rounded up to the nearest 5. Sanity-check it" +
    "\n  against shipping to your main markets before committing.\n"
  );
}

const argv = process.argv.slice(2);
const productFlag = argv.indexOf("--product");

try {
  if (productFlag !== -1) {
    const id = argv[productFlag + 1];
    if (!id) throw new Error("--product needs a catalog product id");
    await showProduct(id);
  } else {
    await listPosterProducts();
  }
} catch (err) {
  console.error("\n" + err.message + "\n");
  process.exit(1);
}
