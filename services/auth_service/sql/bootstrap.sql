-- Auth service shared database
create table if not exists tenants (
  id char(36) primary key default (uuid()),
  name varchar(255) not null,
  slug varchar(255) not null unique,
  schema_name varchar(255) not null unique,
  tenant_type varchar(50) not null default 'school',
  status varchar(50) not null default 'active',
  created_at timestamp not null default current_timestamp
);

create table if not exists tenant_domains (
  id char(36) primary key default (uuid()),
  tenant_id char(36) not null,
  domain varchar(255) not null unique,
  is_primary boolean not null default false,
  created_at timestamp not null default current_timestamp,
  constraint fk_tenant_domains_tenant
    foreign key (tenant_id) references tenants(id)
    on delete cascade
);
