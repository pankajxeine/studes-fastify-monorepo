-- Seed data for a CRM tenant schema
-- Assumes crm_tenant_template.sql already applied and search_path set.

insert into crm_roles (name, description, permissions)
values
  ('Owner', 'Full access', array['*']),
  ('Admin', 'Administrative access', array['tenant.manage', 'billing.manage', 'users.manage']),
  ('Agent', 'Sales agent access', array['customers.read', 'customers.write'])
on conflict (name) do nothing;

insert into crm_users (email, full_name, role_id, status, phone, password_hash)
select 'owner@crm.local', 'CRM Owner', r.id, 'active', '111-111-1111', 'bcrypt_hash_here'
from crm_roles r where r.name = 'Owner'
on conflict (email) do nothing;

insert into packages (name, price, currency, status, features)
values
  ('Starter', 49.00, 'USD', 'active', array['tenants:5', 'users:10']),
  ('Pro', 199.00, 'USD', 'active', array['tenants:25', 'users:100', 'reports'])
on conflict (name) do nothing;

insert into settings (timezone, locale, date_format, currency, enable_audit_log)
select 'UTC', 'en-US', 'YYYY-MM-DD', 'USD', true
where not exists (select 1 from settings);

insert into branches (name, city, state, country, status)
values
  ('HQ', 'New York', 'NY', 'USA', 'active'),
  ('West', 'San Francisco', 'CA', 'USA', 'active')
on conflict do nothing;

insert into sales_agents (full_name, email, phone, status, branch_id)
select 'Sarah Agent', 'sarah@crm.local', '222-222-2222', 'active', b.id
from branches b where b.name = 'HQ'
on conflict (email) do nothing;

insert into cpanel_users (agent_id, username, password_hash, status)
select a.id, 'sarah.agent', 'bcrypt_hash_here', 'active'
from sales_agents a where a.email = 'sarah@crm.local'
on conflict (username) do nothing;

insert into reports (report_key, name, description)
values
  ('sales_summary', 'Sales Summary', 'Monthly sales summary'),
  ('tenant_growth', 'Tenant Growth', 'Tenant onboarding trends')
on conflict (report_key) do nothing;

insert into company_profile (name, legal_name, website, phone, address, tax_id)
select 'CRM Company', 'CRM Company LLC', 'https://example.com', '333-333-3333', '123 CRM St', 'TAX-123'
where not exists (select 1 from company_profile);

insert into customers (name, email, phone, status, company)
values
  ('John Doe', 'john@customer.com', '444-444-4444', 'active', 'Acme Inc'),
  ('Jane Roe', 'jane@customer.com', '555-555-5555', 'active', 'Globex')
on conflict do nothing;

insert into email_settings (provider, from_email, from_name, smtp_host, smtp_port, smtp_username, smtp_password)
select 'smtp', 'no-reply@crm.local', 'CRM', 'smtp.local', 587, 'smtp_user', 'smtp_pass'
where not exists (select 1 from email_settings);

insert into email_templates (name, subject, body_html, body_text, status)
values
  ('Welcome', 'Welcome to CRM', '<p>Welcome!</p>', 'Welcome!', 'active'),
  ('Invoice', 'Your Invoice', '<p>Invoice details</p>', 'Invoice details', 'active')
on conflict do nothing;
