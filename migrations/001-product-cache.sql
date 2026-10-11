-- ConsumerRise D1 migration: product_cache for barcode lookups.
-- Phase 1 of the product database (Open Food Facts / Open Beauty Facts).
-- Apply to the D1 database bound to the Pages project:
--   Cloudflare dashboard → D1 → consumer-rise → Console → paste this file → Execute.
-- Safe to re-run: every statement is IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS product_cache (
  barcode TEXT PRIMARY KEY,
  db TEXT NOT NULL,
  name TEXT,
  brands TEXT,
  categories TEXT,
  ingredients_text TEXT,
  fetched_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_product_cache_db ON product_cache(db);
CREATE INDEX IF NOT EXISTS idx_product_cache_fetched ON product_cache(fetched_at);
