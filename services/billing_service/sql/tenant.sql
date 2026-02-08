-- Billing service tenant schema
create table if not exists invoices (
  id uuid primary key default uuid_generate_v4(),
  amount numeric(12, 2) not null,
  currency char(3) not null,
  description text not null,
  created_at timestamptz not null default now()
);
