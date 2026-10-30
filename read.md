# Monthsary Virtual Letter 🌷

A tap-to-open envelope with red tulips, falling petals, and a letter
loaded from Supabase. Hosted free on GitHub Pages.

## 1. Supabase setup

1. Go to https://database.new and create a project.
2. Project Settings → API → copy **Project URL** and **anon public key**.
3. SQL Editor → run:

```sql
create table letters (
  id bigint primary key generated always as identity,
  content text not null,
  updated_at timestamp with time zone default now()
);

alter table letters enable row level security;

create policy "public can read letters"
on public.letters for select to anon
using (true);

grant select on public.letters to anon;