-- CRM tenant schema template
-- Run after CREATE SCHEMA crm_tenant_x; then SET search_path

create extension if not exists "uuid-ossp";

-- ID generator (prefix + MM + YY + seq)
create table if not exists id_counters (
  prefix text not null,
  year smallint not null,
  month smallint not null,
  seq smallint not null default 0,
  primary key (prefix, year, month)
);

create or replace function next_code(prefix text)
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
    where prefix = prefix and year = yy and month = mm
    returning seq into next_seq;

    if found then
      exit;
    end if;

    begin
      insert into id_counters (prefix, year, month, seq)
      values (prefix, yy, mm, 1)
      returning seq into next_seq;
      exit;
    exception when unique_violation then
      -- retry
    end;
  end loop;

  code := prefix || lpad(mm::text, 2, '0') || lpad(yy::text, 2, '0') || lpad(next_seq::text, 2, '0');
  return code;
end;
$$ language plpgsql;

create type crm_status as enum ('active', 'inactive');
create type tenant_status as enum ('active', 'suspended', 'inactive');
create type invoice_status as enum ('pending', 'paid', 'void');
create type payment_method as enum ('card', 'bank_transfer', 'cash', 'online');
create type cpanel_status as enum ('active', 'suspended');
create type email_provider as enum ('smtp', 'sendgrid', 'ses');

-- CRM roles and users
create table crm_roles (
  id varchar(8) primary key default next_code('RL'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null unique,
  description text,
  permissions text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table crm_users (
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

-- CRM tenants (school tenants managed by CRM)
create table crm_tenants (
  id varchar(8) primary key default next_code('TN'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  schema_name text not null unique,
  primary_domain text,
  status tenant_status not null default 'active',
  onboarded_at timestamptz not null default now()
);

create table tenant_domains (
  id varchar(8) primary key default next_code('TD'),
  system_id uuid not null default uuid_generate_v4(),
  tenant_id varchar(8) not null references crm_tenants(id) on delete cascade,
  domain text not null,
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  unique (tenant_id, domain)
);

-- Packages and tenant subscriptions
create table packages (
  id varchar(8) primary key default next_code('PK'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null unique,
  price numeric(12,2) not null,
  currency text not null,
  status crm_status not null default 'active',
  features text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table tenant_packages (
  id varchar(8) primary key default next_code('TP'),
  system_id uuid not null default uuid_generate_v4(),
  tenant_id varchar(8) not null references crm_tenants(id) on delete cascade,
  package_id varchar(8) not null references packages(id),
  starts_on date not null default current_date,
  ends_on date,
  status crm_status not null default 'active',
  unique (tenant_id, package_id)
);

-- Billing
create table invoices (
  id varchar(8) primary key default next_code('IN'),
  system_id uuid not null default uuid_generate_v4(),
  tenant_id varchar(8) not null references crm_tenants(id) on delete cascade,
  amount numeric(12,2) not null,
  currency text not null,
  status invoice_status not null default 'pending',
  issued_at timestamptz not null default now(),
  due_at timestamptz
);

create table payments (
  id varchar(8) primary key default next_code('PY'),
  system_id uuid not null default uuid_generate_v4(),
  invoice_id varchar(8) not null references invoices(id) on delete cascade,
  amount numeric(12,2) not null,
  method payment_method not null,
  paid_at timestamptz not null default now()
);

-- Settings
create table settings (
  id varchar(8) primary key default next_code('ST'),
  system_id uuid not null default uuid_generate_v4(),
  timezone text not null,
  locale text not null,
  date_format text not null,
  currency text,
  enable_audit_log boolean not null default false,
  updated_at timestamptz not null default now()
);

-- Sales agents and branches
create table branches (
  id varchar(8) primary key default next_code('BR'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  city text not null,
  state text,
  country text,
  status crm_status not null default 'active'
);

create table sales_agents (
  id varchar(8) primary key default next_code('SA'),
  system_id uuid not null default uuid_generate_v4(),
  full_name text not null,
  email text not null unique,
  phone text,
  status crm_status not null default 'active',
  branch_id varchar(8) references branches(id)
);

create table cpanel_users (
  id varchar(8) primary key default next_code('CP'),
  system_id uuid not null default uuid_generate_v4(),
  agent_id varchar(8) not null references sales_agents(id) on delete cascade,
  username text not null unique,
  password_hash text,
  status cpanel_status not null default 'active',
  created_at timestamptz not null default now()
);

-- Reports registry
create table reports (
  id varchar(8) primary key default next_code('RP'),
  system_id uuid not null default uuid_generate_v4(),
  report_key text not null unique,
  name text not null,
  description text,
  created_at timestamptz not null default now()
);

-- Company and customers (CRM customers)
create table company_profile (
  id varchar(8) primary key default next_code('CO'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  legal_name text,
  website text,
  phone text,
  address text,
  tax_id text
);

create table customers (
  id varchar(8) primary key default next_code('CS'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  status crm_status not null default 'active',
  company text
);

create index idx_customers_email on customers(email);

-- Email settings and templates
create table email_settings (
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

create table email_templates (
  id varchar(8) primary key default next_code('ET'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  subject text not null,
  body_html text not null,
  body_text text,
  status crm_status not null default 'active',
  created_at timestamptz not null default now()
);

create index idx_email_templates_name on email_templates(name);
