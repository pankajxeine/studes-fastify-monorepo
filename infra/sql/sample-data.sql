-- Sample data for local development
-- Assumes bootstrap.sql has been run.
-- Idempotent: safe to run multiple times.

-- Create tenants
insert into public.tenants (name, slug, schema_name)
values
  ('Acme Inc', 'acme', 'tenant_acme'),
  ('Globex Corp', 'globex', 'tenant_globex')
on conflict (slug) do nothing;

-- Optional primary domains
insert into public.tenant_domains (tenant_id, domain, is_primary)
select id, 'acme.localtest.me', true
from public.tenants where slug = 'acme'
on conflict (domain) do nothing;

insert into public.tenant_domains (tenant_id, domain, is_primary)
select id, 'globex.localtest.me', true
from public.tenants where slug = 'globex'
on conflict (domain) do nothing;

-- Create tenant schemas if not present
create schema if not exists tenant_acme;
create schema if not exists tenant_globex;

-- Seed data for tenant_acme
set search_path to tenant_acme, public;

-- Ensure tenant tables exist (auth, billing, notification)
create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists invoices (
  id uuid primary key default uuid_generate_v4(),
  amount numeric(12, 2) not null,
  currency char(3) not null,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  channel text not null,
  recipient text not null,
  message text not null,
  created_at timestamptz not null default now()
);

insert into users (email, password_hash)
values
  ('user1@acme.com', '$2a$10$u1mUahwZfZb0X4dL0H7Q7O24m1w7TTw6R7o1iN8mWfGqgOq7oB1aG'),
  ('user2@acme.com', '$2a$10$u1mUahwZfZb0X4dL0H7Q7O24m1w7TTw6R7o1iN8mWfGqgOq7oB1aG')
on conflict (email) do nothing;

insert into invoices (amount, currency, description)
select 49.99, 'USD', 'Starter plan'
where not exists (select 1 from invoices where description = 'Starter plan');

insert into invoices (amount, currency, description)
select 199.00, 'USD', 'Quarterly plan'
where not exists (select 1 from invoices where description = 'Quarterly plan');

insert into notifications (channel, recipient, message)
select 'email', 'user1@acme.com', 'Welcome to Acme!'
where not exists (select 1 from notifications where message = 'Welcome to Acme!');

insert into notifications (channel, recipient, message)
select 'sms', '+15551234567', 'Your invoice is ready.'
where not exists (select 1 from notifications where message = 'Your invoice is ready.');

-- Seed data for tenant_globex
set search_path to tenant_globex, public;

-- Ensure tenant tables exist (auth, billing, notification)
create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists invoices (
  id uuid primary key default uuid_generate_v4(),
  amount numeric(12, 2) not null,
  currency char(3) not null,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  channel text not null,
  recipient text not null,
  message text not null,
  created_at timestamptz not null default now()
);

insert into users (email, password_hash)
values
  ('user1@globex.com', '$2a$10$u1mUahwZfZb0X4dL0H7Q7O24m1w7TTw6R7o1iN8mWfGqgOq7oB1aG'),
  ('user2@globex.com', '$2a$10$u1mUahwZfZb0X4dL0H7Q7O24m1w7TTw6R7o1iN8mWfGqgOq7oB1aG')
on conflict (email) do nothing;

insert into invoices (amount, currency, description)
select 29.99, 'USD', 'Starter plan (Globex)'
where not exists (select 1 from invoices where description = 'Starter plan (Globex)');

insert into invoices (amount, currency, description)
select 149.00, 'USD', 'Annual plan (Globex)'
where not exists (select 1 from invoices where description = 'Annual plan (Globex)');

insert into notifications (channel, recipient, message)
select 'email', 'user1@globex.com', 'Welcome to Globex!'
where not exists (select 1 from notifications where message = 'Welcome to Globex!');

insert into notifications (channel, recipient, message)
select 'push', 'user2@globex.com', 'Your subscription is active.'
where not exists (select 1 from notifications where message = 'Your subscription is active.');
