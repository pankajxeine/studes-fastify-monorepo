-- Auth service tenant database
create table if not exists users (
  id char(36) primary key default (uuid()),
  email varchar(320) not null unique,
  password_hash varchar(255) not null,
  created_at timestamp not null default current_timestamp
);
