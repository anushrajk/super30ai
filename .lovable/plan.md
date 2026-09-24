# Traffic Dashboard (live + history)

A private page at **/admin/traffic** where only you (admins) can see every visit to thesuper30.ai, live and for any past date range, with CSV download.

## What you'll see
- **Date filter:** Live (last 30 min, auto-refresh every 15s), Today, 7 days, 28 days, custom range.
- **Top cards:** Sessions, unique visitors (by IP), engaged visits, bounce rate, avg. time on page, button clicks, form starts / submits, enquiries.
- **Live now panel:** visitors active in the last 5 minutes, page they're on, city, source.
- **Traffic trend chart:** sessions and unique visitors per day (or per hour for Today/Live).
- **Sources:** Google organic, direct, social, referral, ads (from referrer / UTM).
- **Page-by-page table** (same columns as the CSV): page, sessions, unique visitors, bounce rate, avg. time, avg. scroll depth, 25/50/75/100% scroll reach, button / link / phone / WhatsApp / email / outbound clicks, form starts, form submits, enquiries, plus Google clicks, views, click rate and position.
- **Visitor log:** each visit with time (IST), landing page, source, city, browser, pages seen, engaged yes/no.
- **Download CSV** button for the page table and the visitor log, respecting the current filter.

## Google Search data
Google clicks/views/position per page come from your Search Console. To show them inside the dashboard, the Search Console connection needs to be linked to the site (one approval card). Google data lags about 2 days, so "Live" shows your own tracking only.

## Access
Sign in with your existing admin login; I'll mark your account as admin. Anyone else gets "no access".

## Technical details
- Migration: `app_role` enum, `user_roles` table + `has_role()` security-definer function (grants + RLS), assign admin to the existing blog author account.
- Edge function `traffic-dashboard`: verifies JWT + `has_role(admin)`, reads `sessions`, `engagement_metrics`, `leads` with service role, aggregates per page/day/source; optional `gsc` mode calls Search Console via gateway (lists verified properties, uses https://www.thesuper30.ai/).
- Frontend: `src/pages/admin/AdminTraffic.tsx`, recharts, shadcn table/date picker, IST formatting per project standard, CSV export client-side.
- Only real recorded data; empty states where nothing was tracked (no fallbacks).
