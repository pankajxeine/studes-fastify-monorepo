-- Tenant schema template for School/College Management
-- Run after CREATE SCHEMA tenant_x; then SET search_path

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

create type person_role as enum ('student', 'teacher', 'parent', 'staff');
create type attendance_status as enum ('present', 'absent', 'late', 'excused');
create type leave_status as enum ('pending', 'approved', 'rejected', 'cancelled');
create type notification_channel as enum ('email', 'sms', 'push', 'in_app');
create type assignment_status as enum ('draft', 'published', 'archived');
create type fee_status as enum ('pending', 'paid', 'overdue', 'cancelled');
create type payment_method as enum ('cash', 'card', 'bank_transfer', 'upi', 'online');
create type exam_type as enum ('midterm', 'final', 'quiz', 'assignment', 'practical');
create type transport_status as enum ('active', 'inactive');
create type hostel_status as enum ('active', 'inactive');

create table persons (
  id varchar(8) primary key default next_code('PR'),
  system_id uuid not null default uuid_generate_v4(),
  role person_role not null,
  first_name text not null,
  last_name text not null,
  email text unique,
  phone text,
  alternate_phone text,
  date_of_birth date,
  gender text,
  nationality text,
  marital_status text,
  photo_url text,
  created_at timestamptz not null default now()
);

create table students (
  id varchar(8) primary key default next_code('ST'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) not null references persons(id) on delete cascade,
  admission_no text unique not null,
  grade_level text,
  section text,
  enrolled_at date not null default current_date
);

create table teachers (
  id varchar(8) primary key default next_code('TE'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) not null references persons(id) on delete cascade,
  employee_no text unique not null,
  department text,
  hired_at date not null default current_date
);

create table staff (
  id varchar(8) primary key default next_code('SF'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) not null references persons(id) on delete cascade,
  employee_no text unique not null,
  staff_type text,
  hired_at date not null default current_date
);

create table parents (
  id varchar(8) primary key default next_code('PA'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) not null references persons(id) on delete cascade,
  occupation text
);

create table person_addresses (
  id varchar(8) primary key default next_code('AD'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) not null references persons(id) on delete cascade,
  address_type text not null,
  line1 text not null,
  line2 text,
  city text not null,
  state text,
  postal_code text,
  country text not null,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);

create table person_contacts (
  id varchar(8) primary key default next_code('PC'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) not null references persons(id) on delete cascade,
  contact_type text not null,
  value text not null,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);

create table emergency_contacts (
  id varchar(8) primary key default next_code('EC'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) not null references persons(id) on delete cascade,
  name text not null,
  relation text not null,
  phone text not null,
  alternate_phone text,
  email text,
  address text,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);

create table parent_student (
  id varchar(8) primary key default next_code('PS'),
  system_id uuid not null default uuid_generate_v4(),
  parent_id varchar(8) references parents(id) on delete cascade,
  student_id varchar(8) references students(id) on delete cascade,
  relation text not null,
  unique (parent_id, student_id)
);

create table student_education (
  id varchar(8) primary key default next_code('SE'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id) on delete cascade,
  institution text not null,
  level text,
  board text,
  start_date date,
  end_date date,
  grade text,
  remarks text
);

create table teacher_education (
  id varchar(8) primary key default next_code('TD'),
  system_id uuid not null default uuid_generate_v4(),
  teacher_id varchar(8) not null references teachers(id) on delete cascade,
  degree text not null,
  institution text not null,
  specialization text,
  start_date date,
  end_date date,
  grade text,
  remarks text
);

create table teacher_experience (
  id varchar(8) primary key default next_code('TX'),
  system_id uuid not null default uuid_generate_v4(),
  teacher_id varchar(8) not null references teachers(id) on delete cascade,
  organization text not null,
  role text not null,
  start_date date,
  end_date date,
  years numeric(4,2),
  remarks text
);

create table staff_education (
  id varchar(8) primary key default next_code('SD'),
  system_id uuid not null default uuid_generate_v4(),
  staff_id varchar(8) not null references staff(id) on delete cascade,
  degree text not null,
  institution text not null,
  specialization text,
  start_date date,
  end_date date,
  grade text,
  remarks text
);

create table staff_experience (
  id varchar(8) primary key default next_code('SX'),
  system_id uuid not null default uuid_generate_v4(),
  staff_id varchar(8) not null references staff(id) on delete cascade,
  organization text not null,
  role text not null,
  start_date date,
  end_date date,
  years numeric(4,2),
  remarks text
);

create table documents (
  id varchar(8) primary key default next_code('DO'),
  system_id uuid not null default uuid_generate_v4(),
  person_id varchar(8) references persons(id) on delete cascade,
  document_type text not null,
  document_number text,
  issued_by text,
  issued_on date,
  expires_on date,
  file_url text,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index idx_documents_person_type on documents(person_id, document_type);
create index idx_documents_created_at on documents(created_at);

create table guardian_verifications (
  id varchar(8) primary key default next_code('GV'),
  system_id uuid not null default uuid_generate_v4(),
  parent_id varchar(8) not null references parents(id) on delete cascade,
  verification_method text not null,
  status text not null,
  verified_at timestamptz,
  verified_by varchar(8) references staff(id),
  notes text,
  created_at timestamptz not null default now()
);

create index idx_guardian_verifications_parent on guardian_verifications(parent_id);
create index idx_guardian_verifications_status on guardian_verifications(status);

create table consent_records (
  id varchar(8) primary key default next_code('CR'),
  system_id uuid not null default uuid_generate_v4(),
  parent_id varchar(8) not null references parents(id) on delete cascade,
  student_id varchar(8) references students(id) on delete cascade,
  consent_type text not null,
  status text not null,
  granted_at timestamptz,
  revoked_at timestamptz,
  notes text,
  created_at timestamptz not null default now()
);

create index idx_consent_parent_student on consent_records(parent_id, student_id);
create index idx_consent_status on consent_records(status);

create table guardian_verification_audit (
  id varchar(8) primary key default next_code('GA'),
  system_id uuid not null default uuid_generate_v4(),
  verification_id varchar(8) not null references guardian_verifications(id) on delete cascade,
  old_status text,
  new_status text,
  changed_by varchar(8) references staff(id),
  changed_at timestamptz not null default now(),
  notes text
);

create index idx_guardian_verification_audit_verification on guardian_verification_audit(verification_id);

create table consent_audit (
  id varchar(8) primary key default next_code('CA'),
  system_id uuid not null default uuid_generate_v4(),
  consent_id varchar(8) not null references consent_records(id) on delete cascade,
  old_status text,
  new_status text,
  changed_by varchar(8) references staff(id),
  changed_at timestamptz not null default now(),
  notes text
);

create index idx_consent_audit_consent on consent_audit(consent_id);

create table sessions (
  id varchar(8) primary key default next_code('SS'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  start_date date not null,
  end_date date not null,
  is_active boolean not null default false,
  unique (name)
);

create table courses (
  id varchar(8) primary key default next_code('CO'),
  system_id uuid not null default uuid_generate_v4(),
  code text unique not null,
  title text not null,
  description text
);

create table course_offerings (
  id varchar(8) primary key default next_code('OF'),
  system_id uuid not null default uuid_generate_v4(),
  course_id varchar(8) not null references courses(id) on delete cascade,
  session_id varchar(8) not null references sessions(id) on delete cascade,
  grade_level text,
  section text,
  unique (course_id, session_id, grade_level, section)
);

create table teaching_assignments (
  id varchar(8) primary key default next_code('TA'),
  system_id uuid not null default uuid_generate_v4(),
  teacher_id varchar(8) not null references teachers(id) on delete cascade,
  offering_id varchar(8) not null references course_offerings(id) on delete cascade,
  role text default 'instructor',
  unique (teacher_id, offering_id)
);

create table enrollments (
  id varchar(8) primary key default next_code('EN'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id) on delete cascade,
  offering_id varchar(8) not null references course_offerings(id) on delete cascade,
  enrolled_at date not null default current_date,
  unique (student_id, offering_id)
);

create table student_attendance (
  id varchar(8) primary key default next_code('SA'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id) on delete cascade,
  session_id varchar(8) not null references sessions(id) on delete cascade,
  attendance_date date not null,
  status attendance_status not null,
  recorded_by varchar(8) references teachers(id),
  remark text,
  unique (student_id, attendance_date)
);

create table staff_attendance (
  id varchar(8) primary key default next_code('FA'),
  system_id uuid not null default uuid_generate_v4(),
  staff_person_id varchar(8) not null references persons(id) on delete cascade,
  attendance_date date not null,
  status attendance_status not null,
  recorded_by varchar(8) references staff(id),
  remark text,
  unique (staff_person_id, attendance_date)
);

create table assignments (
  id varchar(8) primary key default next_code('AS'),
  system_id uuid not null default uuid_generate_v4(),
  offering_id varchar(8) not null references course_offerings(id) on delete cascade,
  title text not null,
  description text,
  due_date timestamptz,
  status assignment_status not null default 'draft',
  created_by varchar(8) not null references teachers(id),
  created_at timestamptz not null default now()
);

create table assignment_submissions (
  id varchar(8) primary key default next_code('SU'),
  system_id uuid not null default uuid_generate_v4(),
  assignment_id varchar(8) not null references assignments(id) on delete cascade,
  student_id varchar(8) not null references students(id) on delete cascade,
  submitted_at timestamptz,
  content_url text,
  grade numeric(5,2),
  feedback text,
  unique (assignment_id, student_id)
);

create table notifications (
  id varchar(8) primary key default next_code('NT'),
  system_id uuid not null default uuid_generate_v4(),
  title text not null,
  message text not null,
  channel notification_channel not null,
  created_at timestamptz not null default now(),
  created_by varchar(8) references persons(id)
);

create table notification_recipients (
  id varchar(8) primary key default next_code('NR'),
  system_id uuid not null default uuid_generate_v4(),
  notification_id varchar(8) references notifications(id) on delete cascade,
  recipient_id varchar(8) references persons(id) on delete cascade,
  read_at timestamptz,
  unique (notification_id, recipient_id)
);

create table leave_requests (
  id varchar(8) primary key default next_code('LR'),
  system_id uuid not null default uuid_generate_v4(),
  requester_id varchar(8) not null references persons(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  reason text,
  status leave_status not null default 'pending',
  approver_id varchar(8) references staff(id),
  created_at timestamptz not null default now()
);

create table fee_structures (
  id varchar(8) primary key default next_code('FS'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null,
  amount numeric(12,2) not null
);

create table fee_assignments (
  id varchar(8) primary key default next_code('FA'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id) on delete cascade,
  fee_structure_id varchar(8) not null references fee_structures(id) on delete cascade,
  status fee_status not null default 'pending'
);

create table fee_payments (
  id varchar(8) primary key default next_code('FP'),
  system_id uuid not null default uuid_generate_v4(),
  fee_assignment_id varchar(8) not null references fee_assignments(id) on delete cascade,
  amount numeric(12,2) not null,
  method payment_method not null,
  paid_at timestamptz not null default now()
);

create table exams (
  id varchar(8) primary key default next_code('EX'),
  system_id uuid not null default uuid_generate_v4(),
  offering_id varchar(8) not null references course_offerings(id),
  exam_type exam_type not null,
  date date not null,
  max_score numeric(5,2) not null
);

create table exam_results (
  id varchar(8) primary key default next_code('ER'),
  system_id uuid not null default uuid_generate_v4(),
  exam_id varchar(8) not null references exams(id),
  student_id varchar(8) not null references students(id),
  score numeric(5,2) not null,
  unique (exam_id, student_id)
);

create table timetable (
  id varchar(8) primary key default next_code('TT'),
  system_id uuid not null default uuid_generate_v4(),
  offering_id varchar(8) not null references course_offerings(id),
  day_of_week int not null,
  start_time time not null,
  end_time time not null
);

create table transport_routes (
  id varchar(8) primary key default next_code('TR'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null
);

create table transport_vehicles (
  id varchar(8) primary key default next_code('TV'),
  system_id uuid not null default uuid_generate_v4(),
  route_id varchar(8) not null references transport_routes(id) on delete cascade,
  vehicle_no text not null,
  driver_name text not null,
  status transport_status not null default 'active'
);

create table transport_assignments (
  id varchar(8) primary key default next_code('TP'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id),
  vehicle_id varchar(8) not null references transport_vehicles(id)
);

create table hostels (
  id varchar(8) primary key default next_code('HO'),
  system_id uuid not null default uuid_generate_v4(),
  name text not null
);

create table hostel_rooms (
  id varchar(8) primary key default next_code('HR'),
  system_id uuid not null default uuid_generate_v4(),
  hostel_id varchar(8) not null references hostels(id),
  room_no text not null,
  capacity int not null
);

create table hostel_allocations (
  id varchar(8) primary key default next_code('HA'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id),
  room_id varchar(8) not null references hostel_rooms(id),
  status hostel_status not null default 'active'
);

create table library_books (
  id varchar(8) primary key default next_code('LB'),
  system_id uuid not null default uuid_generate_v4(),
  title text not null,
  author text not null,
  isbn text unique
);

create table library_loans (
  id varchar(8) primary key default next_code('LL'),
  system_id uuid not null default uuid_generate_v4(),
  book_id varchar(8) not null references library_books(id),
  borrower_id varchar(8) not null references persons(id),
  loaned_at date not null default current_date,
  due_date date not null,
  returned_at date
);

create table promotions (
  id varchar(8) primary key default next_code('PM'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id),
  from_grade text,
  to_grade text,
  promoted_at date not null default current_date
);

create table alumni (
  id varchar(8) primary key default next_code('AL'),
  system_id uuid not null default uuid_generate_v4(),
  student_id varchar(8) not null references students(id) on delete cascade,
  graduated_at date not null
);
