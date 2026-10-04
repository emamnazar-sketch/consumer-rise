-- ConsumerRise D1 schema (SQLite).
-- Apply once to the D1 database bound to the Pages project:
--   Cloudflare dashboard → D1 → consumer-rise → Console → paste this file → Execute.
-- Safe to re-run: every statement is IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS subscribers (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_created ON subscribers(created_at);

CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  subject TEXT,
  message TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_messages_created ON contact_messages(created_at);

CREATE TABLE IF NOT EXISTS scans (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  result_summary TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_scans_email ON scans(email);
CREATE INDEX IF NOT EXISTS idx_scans_created ON scans(created_at);
