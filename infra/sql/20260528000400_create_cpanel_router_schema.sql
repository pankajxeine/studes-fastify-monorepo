-- Public router entry for the cpanel tenant.
-- Run before creating the cpanel schema.

create extension if not exists "uuid-ossp";

create table if not exists public.tenants (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  schema_name text not null unique,
  tenant_type text not null default 'school',
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.tenant_domains (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  domain text not null unique,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);

insert into public.tenants (name, slug, schema_name, tenant_type, status)
values ('Control Panel', 'cpanel', 'cpanel', 'cpanel', 'active')
on conflict (slug) do update
set
  name = excluded.name,
  schema_name = excluded.schema_name,
  tenant_type = excluded.tenant_type,
  status = excluded.status;

create schema if not exists cpanel;
