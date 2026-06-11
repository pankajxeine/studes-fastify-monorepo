-- Cpanel schema.
-- Run after 20260528000400_create_cpanel_router_schema.sql.

create extension if not exists "uuid-ossp";
create schema if not exists cpanel;
set search_path to cpanel, public;

create table if not exists id_counters (
  prefix text not null,
  year smallint not null,
  month smallint not null,
  seq smallint not null default 0,
  primary key (prefix, year, month)
);

create or replace function next_code(p_prefix text)
returns varchar(8) as $$
declare
  yy smallint := extract(year from current_date)::int % 100;
  mm smallint := extract(month from current_date)::int;
  next_seq smallint;
  code varchar(8);
begin
  loop
    update id_counters
      set seq = seq + 1
    where prefix = p_prefix and year = yy and month = mm
    returning seq into next_seq;

    if found then
      exit;
    end if;

    begin
      insert into id_counters (prefix, year, month, seq)
      values (p_prefix, yy, mm, 1)
      returning seq into next_seq;
      exit;
    exception when unique_violation then
      -- Retry if another transaction created the same counter.
    end;
  end loop;

  code := p_prefix || lpad(mm::text, 2, '0') || lpad(yy::text, 2, '0') || lpad(next_seq::text, 2, '0');
  return code;
end;
$$ language plpgsql;

do $$
begin
  create type crm_status as enum ('active', 'inactive');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type tenant_status as enum ('active', 'suspended', 'inactive');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type invoice_status as enum ('pending', 'paid', 'void');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type payment_method as enum ('card', 'bank_transfer', 'cash', 'online');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type cpanel_status as enum ('active', 'suspended');
exception when duplicate_object then null;
end $$;

do $$
begin
  create type email_provider as enum ('smtp', 'sendgrid', 'ses');
exception when duplicate_object then null;
end $$;

create table if not exists crm_roles (
  id varchar(8) primary key default next_code('RL'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null unique,
  description text,
  permissions text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists crm_users (
  id varchar(8) primary key default next_code('CU'),
  system_id uuid not null default uuid_generate_v4(),
  email text not null unique,
  full_name text not null,
  role_id varchar(8) references crm_roles(id),
  status crm_status not null default 'active',
  phone text,
  password_hash text,
  created_at timestamptz not null default now()
);

create table if not exists crm_tenants (
  id varchar(8) primary key default next_code('TN'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  schema_name text not null unique,
  primary_domain text,
  status tenant_status not null default 'active',
  onboarded_at timestamptz not null default now()
);

create table if not exists tenant_domains (
  id varchar(8) primary key default next_code('TD'),
  system_id uuid not null default uuid_generate_v4(),
  tenant_id varchar(8) not null references crm_tenants(id) on delete cascade,
  domain text not null,
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  unique (tenant_id, domain)
);

create table if not exists packages (
  id varchar(8) primary key default next_code('PK'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null unique,
  price numeric(12,2) not null,
  currency text not null,
  status crm_status not null default 'active',
  features text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists tenant_packages (
  id varchar(8) primary key default next_code('TP'),
  system_id uuid not null default uuid_generate_v4(),
  tenant_id varchar(8) not null references crm_tenants(id) on delete cascade,
  package_id varchar(8) not null references packages(id),
  starts_on date not null default current_date,
  ends_on date,
  status crm_status not null default 'active',
  unique (tenant_id, package_id)
);

create table if not exists invoices (
  id varchar(8) primary key default next_code('IN'),
  system_id uuid not null default uuid_generate_v4(),
  tenant_id varchar(8) not null references crm_tenants(id) on delete cascade,
  amount numeric(12,2) not null,
  currency text not null,
  status invoice_status not null default 'pending',
  issued_at timestamptz not null default now(),
  due_at timestamptz
);

create table if not exists payments (
  id varchar(8) primary key default next_code('PY'),
  system_id uuid not null default uuid_generate_v4(),
  invoice_id varchar(8) not null references invoices(id) on delete cascade,
  amount numeric(12,2) not null,
  method payment_method not null,
  paid_at timestamptz not null default now()
);

create table if not exists settings (
  id varchar(8) primary key default next_code('ST'),
  system_id uuid not null default uuid_generate_v4(),
  timezone text not null,
  locale text not null,
  date_format text not null,
  currency text,
  enable_audit_log boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists branches (
  id varchar(8) primary key default next_code('BR'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  city text not null,
  state text,
  country text,
  status crm_status not null default 'active'
);

create table if not exists sales_agents (
  id varchar(8) primary key default next_code('SA'),
  system_id uuid not null default uuid_generate_v4(),
  full_name text not null,
  email text not null unique,
  phone text,
  status crm_status not null default 'active',
  branch_id varchar(8) references branches(id)
);

create table if not exists cpanel_users (
  id varchar(8) primary key default next_code('CP'),
  system_id uuid not null default uuid_generate_v4(),
  agent_id varchar(8) not null references sales_agents(id) on delete cascade,
  username text not null unique,
  password_hash text,
  status cpanel_status not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists reports (
  id varchar(8) primary key default next_code('RP'),
  system_id uuid not null default uuid_generate_v4(),
  report_key text not null unique,
  name text not null,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists company_profile (
  id varchar(8) primary key default next_code('CO'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  legal_name text,
  website text,
  phone text,
  address text,
  tax_id text
);

create table if not exists customers (
  id varchar(8) primary key default next_code('CS'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  status crm_status not null default 'active',
  company text
);

create index if not exists idx_customers_email on customers(email);

create table if not exists email_settings (
  id varchar(8) primary key default next_code('ES'),
  system_id uuid not null default uuid_generate_v4(),
  provider email_provider not null,
  from_email text not null,
  from_name text,
  smtp_host text,
  smtp_port int,
  smtp_username text,
  smtp_password text,
  updated_at timestamptz not null default now()
);

create table if not exists email_templates (
  id varchar(8) primary key default next_code('ET'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  subject text not null,
  body_html text not null,
  body_text text,
  status crm_status not null default 'active',
  created_at timestamptz not null default now()
);

create index if not exists idx_email_templates_name on email_templates(name);
