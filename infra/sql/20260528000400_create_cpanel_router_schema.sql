-- Public router entry for the cpanel tenant.
-- Run before creating the cpanel schema.

create extension if not exists "uuid-ossp";

create table if not exists public.tenants (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  schema_name text not null unique,
  db_name varchar(63),
  tenant_type text not null default 'school',
  status text not null default 'active',
  created_at timestamptz not null default now()
);

alter table public.tenants
  add column if not exists db_name varchar(63);

create table if not exists public.tenant_domains (
  id uuid primary key default uuid_generate_v4(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  domain text not null unique,
  domain_type text not null default 'tenant',
  application_code text not null default 'school',
  name text,
  title text,
  description text,
  api_endpoint text,
  web_endpoint text,
  logo_url text,
  favicon_url text,
  images jsonb not null default '[]'::jsonb,
  config jsonb not null default '{}'::jsonb,
  is_active boolean not null default true,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.tenant_domains
  add column if not exists domain_type text not null default 'tenant',
  add column if not exists application_code text not null default 'school',
  add column if not exists name text,
  add column if not exists title text,
  add column if not exists description text,
  add column if not exists api_endpoint text,
  add column if not exists web_endpoint text,
  add column if not exists logo_url text,
  add column if not exists favicon_url text,
  add column if not exists images jsonb not null default '[]'::jsonb,
  add column if not exists config jsonb not null default '{}'::jsonb,
  add column if not exists is_active boolean not null default true,
  add column if not exists is_primary boolean not null default false;

do $$
begin
  if not exists (
    select 1 from pg_constraint
     where conname = 'ck_tenant_domains_domain_type'
       and conrelid = 'public.tenant_domains'::regclass
  ) then
    alter table public.tenant_domains
      add constraint ck_tenant_domains_domain_type
      check (domain_type in ('tenant', 'cpanel', 'crm'));
  end if;
  if not exists (
    select 1 from pg_constraint
     where conname = 'ck_tenant_domains_application_code'
       and conrelid = 'public.tenant_domains'::regclass
  ) then
    alter table public.tenant_domains
      add constraint ck_tenant_domains_application_code
      check (application_code ~ '^[a-z][a-z0-9_-]{0,29}$');
  end if;
  if not exists (
    select 1 from pg_constraint
     where conname = 'ck_tenant_domains_public_json'
       and conrelid = 'public.tenant_domains'::regclass
  ) then
    alter table public.tenant_domains
      add constraint ck_tenant_domains_public_json
      check (jsonb_typeof(images) = 'array' and jsonb_typeof(config) = 'object');
  end if;
end $$;

create index if not exists ix_tenant_domains_active_type
  on public.tenant_domains (domain_type, application_code, domain)
  where is_active;

create unique index if not exists uix_tenant_domains_primary_application
  on public.tenant_domains (tenant_id, application_code)
  where is_primary;

comment on table public.tenants is
  'Organization registry. Each row points to an isolated organization schema; CRM organizations are onboarded by the root CRM super administrator.';
comment on column public.tenant_domains.config is
  'Public bootstrap configuration only. Never store passwords, tokens, connection strings, or other secrets.';

insert into public.tenants (name, slug, schema_name, tenant_type, status)
values ('Control Panel', 'cpanel', 'cpanel', 'cpanel', 'active')
on conflict (slug) do update
set
  name = excluded.name,
  schema_name = excluded.schema_name,
  tenant_type = excluded.tenant_type,
  status = excluded.status;

create schema if not exists cpanel;
