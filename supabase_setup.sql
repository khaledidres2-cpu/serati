-- =====================================================================
--  Seerati — Supabase database setup
--  Run this ONCE in your Supabase project:
--  Dashboard → SQL Editor → New query → paste all of this → Run.
-- =====================================================================

-- 1) The table that stores each user's resume (one row per user).
create table if not exists public.resumes (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2) Turn on Row Level Security so users can ONLY touch their own row.
alter table public.resumes enable row level security;

-- 3) Policies: a logged-in user may read/insert/update/delete only the row
--    whose user_id equals their own auth id. No one can see anyone else's data.
drop policy if exists "own_select" on public.resumes;
create policy "own_select" on public.resumes
  for select using (auth.uid() = user_id);

drop policy if exists "own_insert" on public.resumes;
create policy "own_insert" on public.resumes
  for insert with check (auth.uid() = user_id);

drop policy if exists "own_update" on public.resumes;
create policy "own_update" on public.resumes
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own_delete" on public.resumes;
create policy "own_delete" on public.resumes
  for delete using (auth.uid() = user_id);
