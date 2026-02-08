-- Notification service tenant schema
create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  channel text not null,
  recipient text not null,
  message text not null,
  created_at timestamptz not null default now()
);
