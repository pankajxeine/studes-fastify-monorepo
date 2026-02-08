-- Seed data for a tenant schema
-- Assumes tenant_template.sql already applied and search_path set.

insert into sessions (name, start_date, end_date, is_active)
values ('2025-26', '2025-06-01', '2026-03-31', true)
on conflict (name) do nothing;

insert into courses (code, title, description)
values
  ('MATH101', 'Mathematics I', 'Intro to Algebra and Calculus'),
  ('SCI101', 'Science I', 'Basics of Physics and Chemistry'),
  ('ENG101', 'English I', 'Reading and Composition'),
  ('HIS101', 'History I', 'Foundations of World History')
on conflict (code) do nothing;

insert into persons (role, first_name, last_name, email, phone, date_of_birth, gender)
values
  ('teacher', 'Alice', 'Johnson', 'alice@school.com', '111-222-3333', '1985-04-12', 'female'),
  ('teacher', 'Brian', 'Miller', 'brian@school.com', '111-222-3334', '1980-08-20', 'male'),
  ('student', 'Bob', 'Smith', 'bob@student.com', '222-333-4444', '2010-09-21', 'male'),
  ('student', 'Emma', 'Brown', 'emma@student.com', '222-333-4445', '2011-03-11', 'female'),
  ('student', 'Noah', 'Davis', 'noah@student.com', '222-333-4446', '2010-12-05', 'male'),
  ('parent', 'Carol', 'Smith', 'carol@parent.com', '333-444-5555', '1982-02-18', 'female'),
  ('parent', 'Daniel', 'Brown', 'daniel@parent.com', '333-444-5556', '1981-07-09', 'male'),
  ('staff', 'David', 'Lee', 'david@school.com', '444-555-6666', '1990-07-05', 'male')
on conflict (email) do nothing;

insert into teachers (person_id, employee_no, department)
select id, 'T-1001', 'Math'
from persons where email = 'alice@school.com'
on conflict (employee_no) do nothing;

insert into teachers (person_id, employee_no, department)
select id, 'T-1002', 'Science'
from persons where email = 'brian@school.com'
on conflict (employee_no) do nothing;

insert into students (person_id, admission_no, grade_level, section)
select id, 'S-2001', '10', 'A'
from persons where email = 'bob@student.com'
on conflict (admission_no) do nothing;

insert into students (person_id, admission_no, grade_level, section)
select id, 'S-2002', '10', 'B'
from persons where email = 'emma@student.com'
on conflict (admission_no) do nothing;

insert into students (person_id, admission_no, grade_level, section)
select id, 'S-2003', '9', 'A'
from persons where email = 'noah@student.com'
on conflict (admission_no) do nothing;

insert into parents (person_id, occupation)
select id, 'Engineer'
from persons where email = 'carol@parent.com'
on conflict (person_id) do nothing;

insert into parents (person_id, occupation)
select id, 'Accountant'
from persons where email = 'daniel@parent.com'
on conflict (person_id) do nothing;

insert into staff (person_id, employee_no, staff_type)
select id, 'ST-3001', 'Admin'
from persons where email = 'david@school.com'
on conflict (employee_no) do nothing;

insert into parent_student (parent_id, student_id, relation)
select p.id, s.id, 'mother'
from parents p
join persons pp on pp.id = p.person_id and pp.email = 'carol@parent.com'
join students s on s.person_id = (select id from persons where email = 'bob@student.com')
on conflict do nothing;

insert into parent_student (parent_id, student_id, relation)
select p.id, s.id, 'father'
from parents p
join persons pp on pp.id = p.person_id and pp.email = 'daniel@parent.com'
join students s on s.person_id = (select id from persons where email = 'emma@student.com')
on conflict do nothing;

insert into person_addresses (person_id, address_type, line1, city, state, postal_code, country, is_primary)
select id, 'home', '123 Main St', 'Springfield', 'CA', '90210', 'USA', true
from persons
where email in (
  'alice@school.com', 'brian@school.com', 'bob@student.com', 'emma@student.com', 'noah@student.com',
  'carol@parent.com', 'daniel@parent.com', 'david@school.com'
)
and not exists (
  select 1 from person_addresses a where a.person_id = persons.id and a.address_type = 'home'
);

insert into person_contacts (person_id, contact_type, value, is_primary)
select id, 'email', email, true
from persons
where email in (
  'alice@school.com', 'brian@school.com', 'bob@student.com', 'emma@student.com', 'noah@student.com',
  'carol@parent.com', 'daniel@parent.com', 'david@school.com'
)
and not exists (
  select 1 from person_contacts c where c.person_id = persons.id and c.contact_type = 'email'
);

insert into emergency_contacts (person_id, name, relation, phone, is_primary)
select s.person_id, 'Carol Smith', 'mother', '333-444-5555', true
from students s
join persons p on p.id = s.person_id and p.email = 'bob@student.com'
where not exists (select 1 from emergency_contacts ec where ec.person_id = s.person_id);

insert into emergency_contacts (person_id, name, relation, phone, is_primary)
select s.person_id, 'Daniel Brown', 'father', '333-444-5556', true
from students s
join persons p on p.id = s.person_id and p.email = 'emma@student.com'
where not exists (select 1 from emergency_contacts ec where ec.person_id = s.person_id);

insert into emergency_contacts (person_id, name, relation, phone, is_primary)
select s.person_id, 'Carol Smith', 'mother', '333-444-5555', true
from students s
join persons p on p.id = s.person_id and p.email = 'noah@student.com'
where not exists (select 1 from emergency_contacts ec where ec.person_id = s.person_id);

insert into course_offerings (course_id, session_id, grade_level, section)
select c.id, s.id, '10', 'A'
from courses c
join sessions s on s.name = '2025-26'
where c.code in ('MATH101', 'SCI101', 'ENG101')
on conflict (course_id, session_id, grade_level, section) do nothing;

insert into course_offerings (course_id, session_id, grade_level, section)
select c.id, s.id, '10', 'B'
from courses c
join sessions s on s.name = '2025-26'
where c.code in ('MATH101', 'SCI101')
on conflict (course_id, session_id, grade_level, section) do nothing;

insert into course_offerings (course_id, session_id, grade_level, section)
select c.id, s.id, '9', 'A'
from courses c
join sessions s on s.name = '2025-26'
where c.code in ('ENG101', 'HIS101')
on conflict (course_id, session_id, grade_level, section) do nothing;

insert into teaching_assignments (teacher_id, offering_id, role)
select t.id, o.id, 'instructor'
from teachers t
join persons p on p.id = t.person_id and p.email = 'alice@school.com'
join course_offerings o on o.grade_level = '10' and o.section = 'A'
on conflict (teacher_id, offering_id) do nothing;

insert into teaching_assignments (teacher_id, offering_id, role)
select t.id, o.id, 'instructor'
from teachers t
join persons p on p.id = t.person_id and p.email = 'brian@school.com'
join course_offerings o on o.grade_level = '10' and o.section = 'B'
on conflict (teacher_id, offering_id) do nothing;

insert into teaching_assignments (teacher_id, offering_id, role)
select t.id, o.id, 'instructor'
from teachers t
join persons p on p.id = t.person_id and p.email = 'alice@school.com'
join course_offerings o on o.grade_level = '9' and o.section = 'A'
on conflict (teacher_id, offering_id) do nothing;

insert into enrollments (student_id, offering_id)
select s.id, o.id
from students s
join course_offerings o on o.grade_level = '10' and o.section = 'A'
where s.person_id = (select id from persons where email = 'bob@student.com')
on conflict (student_id, offering_id) do nothing;

insert into enrollments (student_id, offering_id)
select s.id, o.id
from students s
join course_offerings o on o.grade_level = '10' and o.section = 'B'
where s.person_id = (select id from persons where email = 'emma@student.com')
on conflict (student_id, offering_id) do nothing;

insert into enrollments (student_id, offering_id)
select s.id, o.id
from students s
join course_offerings o on o.grade_level = '9' and o.section = 'A'
where s.person_id = (select id from persons where email = 'noah@student.com')
on conflict (student_id, offering_id) do nothing;

insert into student_attendance (student_id, session_id, attendance_date, status, recorded_by)
select s.id, ss.id, current_date, 'present', t.id
from students s
join sessions ss on ss.name = '2025-26'
join teachers t on t.person_id = (select id from persons where email = 'alice@school.com')
where s.person_id = (select id from persons where email = 'bob@student.com')
on conflict (student_id, attendance_date) do nothing;

insert into student_attendance (student_id, session_id, attendance_date, status, recorded_by)
select s.id, ss.id, current_date, 'late', t.id
from students s
join sessions ss on ss.name = '2025-26'
join teachers t on t.person_id = (select id from persons where email = 'brian@school.com')
where s.person_id = (select id from persons where email = 'emma@student.com')
on conflict (student_id, attendance_date) do nothing;

insert into student_attendance (student_id, session_id, attendance_date, status, recorded_by)
select s.id, ss.id, current_date, 'absent', t.id
from students s
join sessions ss on ss.name = '2025-26'
join teachers t on t.person_id = (select id from persons where email = 'alice@school.com')
where s.person_id = (select id from persons where email = 'noah@student.com')
on conflict (student_id, attendance_date) do nothing;

insert into staff_attendance (staff_person_id, attendance_date, status, recorded_by)
select p.id, current_date, 'present', st.id
from persons p
join staff st on st.person_id = p.id
where p.email = 'david@school.com'
on conflict (staff_person_id, attendance_date) do nothing;

insert into assignments (offering_id, title, description, due_date, status, created_by)
select o.id, 'Algebra Worksheet', 'Solve 20 problems', now() + interval '7 days', 'published', t.id
from course_offerings o
join teachers t on t.person_id = (select id from persons where email = 'alice@school.com')
where o.grade_level = '10' and o.section = 'A'
limit 1;

insert into assignments (offering_id, title, description, due_date, status, created_by)
select o.id, 'Science Lab', 'Complete lab report', now() + interval '10 days', 'published', t.id
from course_offerings o
join teachers t on t.person_id = (select id from persons where email = 'brian@school.com')
where o.grade_level = '10' and o.section = 'B'
limit 1;

insert into assignments (offering_id, title, description, due_date, status, created_by)
select o.id, 'History Essay', 'Write 500 words', now() + interval '12 days', 'published', t.id
from course_offerings o
join teachers t on t.person_id = (select id from persons where email = 'alice@school.com')
where o.grade_level = '9' and o.section = 'A'
limit 1;

insert into assignment_submissions (assignment_id, student_id, submitted_at, content_url, grade, feedback)
select a.id, s.id, now(), 'https://example.com/submission/1', 85, 'Good work'
from assignments a
join students s on s.person_id = (select id from persons where email = 'bob@student.com')
on conflict (assignment_id, student_id) do nothing;

insert into assignment_submissions (assignment_id, student_id, submitted_at, content_url, grade, feedback)
select a.id, s.id, now(), 'https://example.com/submission/2', 92, 'Excellent'
from assignments a
join students s on s.person_id = (select id from persons where email = 'emma@student.com')
on conflict (assignment_id, student_id) do nothing;

insert into assignment_submissions (assignment_id, student_id, submitted_at, content_url, grade, feedback)
select a.id, s.id, now(), 'https://example.com/submission/3', 74, 'Needs improvement'
from assignments a
join students s on s.person_id = (select id from persons where email = 'noah@student.com')
on conflict (assignment_id, student_id) do nothing;

insert into fee_structures (name, amount)
values ('Annual Tuition', 1200.00)
on conflict do nothing;

insert into fee_structures (name, amount)
values ('Lab Fee', 150.00)
on conflict do nothing;

insert into fee_assignments (student_id, fee_structure_id, status)
select s.id, f.id, 'pending'
from students s
cross join fee_structures f
where f.name = 'Annual Tuition'
on conflict do nothing;

insert into fee_assignments (student_id, fee_structure_id, status)
select s.id, f.id, 'pending'
from students s
cross join fee_structures f
where f.name = 'Lab Fee'
and s.person_id in (
  select id from persons where email in ('bob@student.com', 'emma@student.com')
)
on conflict do nothing;

insert into fee_payments (fee_assignment_id, amount, method, paid_at)
select fa.id, 1200.00, 'online', now()
from fee_assignments fa
join students s on s.id = fa.student_id
join persons p on p.id = s.person_id and p.email = 'bob@student.com'
on conflict do nothing;

insert into fee_payments (fee_assignment_id, amount, method, paid_at)
select fa.id, 150.00, 'card', now()
from fee_assignments fa
join students s on s.id = fa.student_id
join persons p on p.id = s.person_id and p.email = 'emma@student.com'
join fee_structures fs on fs.id = fa.fee_structure_id and fs.name = 'Lab Fee'
on conflict do nothing;

insert into exams (offering_id, exam_type, date, max_score)
select o.id, 'midterm', current_date + interval '14 days', 100
from course_offerings o
where o.grade_level = '10' and o.section = 'A'
limit 1;

insert into exams (offering_id, exam_type, date, max_score)
select o.id, 'quiz', current_date + interval '9 days', 20
from course_offerings o
where o.grade_level = '10' and o.section = 'B'
limit 1;

insert into exams (offering_id, exam_type, date, max_score)
select o.id, 'final', current_date + interval '30 days', 100
from course_offerings o
where o.grade_level = '9' and o.section = 'A'
limit 1;

insert into exam_results (exam_id, student_id, score)
select e.id, s.id, 78
from exams e
join students s on s.person_id = (select id from persons where email = 'bob@student.com')
on conflict (exam_id, student_id) do nothing;

insert into exam_results (exam_id, student_id, score)
select e.id, s.id, 18
from exams e
join students s on s.person_id = (select id from persons where email = 'emma@student.com')
on conflict (exam_id, student_id) do nothing;

insert into exam_results (exam_id, student_id, score)
select e.id, s.id, 88
from exams e
join students s on s.person_id = (select id from persons where email = 'noah@student.com')
on conflict (exam_id, student_id) do nothing;

insert into notifications (title, message, channel, created_by)
select 'Welcome', 'Welcome to the new academic year', 'in_app', p.id
from persons p
where p.email = 'alice@school.com'
on conflict do nothing;

insert into notification_recipients (notification_id, recipient_id)
select n.id, p.id
from notifications n
join persons p on p.email in ('bob@student.com', 'emma@student.com', 'carol@parent.com', 'daniel@parent.com')
on conflict do nothing;

insert into leave_requests (requester_id, start_date, end_date, reason, status, approver_id)
select p.id, current_date + interval '3 days', current_date + interval '4 days', 'Medical', 'pending', st.id
from persons p
join staff st on st.person_id = (select id from persons where email = 'david@school.com')
where p.email = 'bob@student.com'
on conflict do nothing;

-- Documents, guardian verification, and consent
insert into documents (person_id, document_type, document_number, issued_by, issued_on, file_url)
select p.id, 'id_card', 'ID-12345', 'Govt', '2020-01-10', 'https://example.com/docs/id-12345'
from persons p
where p.email = 'bob@student.com'
and not exists (
  select 1 from documents d where d.person_id = p.id and d.document_type = 'id_card'
);

insert into documents (person_id, document_type, document_number, issued_by, issued_on, file_url)
select p.id, 'id_card', 'ID-23456', 'Govt', '2020-01-10', 'https://example.com/docs/id-23456'
from persons p
where p.email = 'emma@student.com'
and not exists (
  select 1 from documents d where d.person_id = p.id and d.document_type = 'id_card'
);

insert into guardian_verifications (parent_id, verification_method, status, verified_at, verified_by, notes)
select pr.id, 'in_person', 'verified', now(), st.id, 'Verified documents'
from parents pr
join persons p on p.id = pr.person_id and p.email = 'carol@parent.com'
join staff st on st.person_id = (select id from persons where email = 'david@school.com')
where not exists (
  select 1 from guardian_verifications gv where gv.parent_id = pr.id
);

insert into guardian_verifications (parent_id, verification_method, status, verified_at, verified_by, notes)
select pr.id, 'video_call', 'verified', now(), st.id, 'KYC completed'
from parents pr
join persons p on p.id = pr.person_id and p.email = 'daniel@parent.com'
join staff st on st.person_id = (select id from persons where email = 'david@school.com')
where not exists (
  select 1 from guardian_verifications gv where gv.parent_id = pr.id
);

insert into consent_records (parent_id, student_id, consent_type, status, granted_at, notes)
select pr.id, s.id, 'field_trip', 'granted', now(), 'Signed consent'
from parents pr
join students s on s.person_id = (select id from persons where email = 'bob@student.com')
where pr.person_id = (select id from persons where email = 'carol@parent.com')
and not exists (
  select 1 from consent_records cr where cr.parent_id = pr.id and cr.student_id = s.id and cr.consent_type = 'field_trip'
);

insert into consent_records (parent_id, student_id, consent_type, status, granted_at, notes)
select pr.id, s.id, 'sports_day', 'granted', now(), 'Signed consent'
from parents pr
join students s on s.person_id = (select id from persons where email = 'emma@student.com')
where pr.person_id = (select id from persons where email = 'daniel@parent.com')
and not exists (
  select 1 from consent_records cr where cr.parent_id = pr.id and cr.student_id = s.id and cr.consent_type = 'sports_day'
);

-- Timetable
insert into timetable (offering_id, day_of_week, start_time, end_time)
select o.id, 1, '09:00', '10:00'
from course_offerings o
where o.grade_level = '10' and o.section = 'A'
and not exists (
  select 1 from timetable t where t.offering_id = o.id and t.day_of_week = 1 and t.start_time = '09:00'
);

insert into timetable (offering_id, day_of_week, start_time, end_time)
select o.id, 2, '10:00', '11:00'
from course_offerings o
where o.grade_level = '10' and o.section = 'B'
and not exists (
  select 1 from timetable t where t.offering_id = o.id and t.day_of_week = 2 and t.start_time = '10:00'
);

insert into timetable (offering_id, day_of_week, start_time, end_time)
select o.id, 3, '11:00', '12:00'
from course_offerings o
where o.grade_level = '9' and o.section = 'A'
and not exists (
  select 1 from timetable t where t.offering_id = o.id and t.day_of_week = 3 and t.start_time = '11:00'
);

-- Transport
insert into transport_routes (name)
select 'Route A'
where not exists (select 1 from transport_routes where name = 'Route A');

insert into transport_routes (name)
select 'Route B'
where not exists (select 1 from transport_routes where name = 'Route B');

insert into transport_vehicles (route_id, vehicle_no, driver_name, status)
select r.id, 'BUS-01', 'Sam Driver', 'active'
from transport_routes r
where r.name = 'Route A'
and not exists (select 1 from transport_vehicles v where v.vehicle_no = 'BUS-01');

insert into transport_vehicles (route_id, vehicle_no, driver_name, status)
select r.id, 'BUS-02', 'Nina Driver', 'active'
from transport_routes r
where r.name = 'Route B'
and not exists (select 1 from transport_vehicles v where v.vehicle_no = 'BUS-02');

insert into transport_assignments (student_id, vehicle_id)
select s.id, v.id
from students s
join transport_vehicles v on v.vehicle_no = 'BUS-01'
where s.person_id = (select id from persons where email = 'bob@student.com')
and not exists (
  select 1 from transport_assignments ta where ta.student_id = s.id and ta.vehicle_id = v.id
);

insert into transport_assignments (student_id, vehicle_id)
select s.id, v.id
from students s
join transport_vehicles v on v.vehicle_no = 'BUS-02'
where s.person_id = (select id from persons where email = 'emma@student.com')
and not exists (
  select 1 from transport_assignments ta where ta.student_id = s.id and ta.vehicle_id = v.id
);

-- Hostel
insert into hostels (name)
select 'North Hostel'
where not exists (select 1 from hostels where name = 'North Hostel');

insert into hostels (name)
select 'South Hostel'
where not exists (select 1 from hostels where name = 'South Hostel');

insert into hostel_rooms (hostel_id, room_no, capacity)
select h.id, '101', 2
from hostels h
where h.name = 'North Hostel'
and not exists (select 1 from hostel_rooms r where r.hostel_id = h.id and r.room_no = '101');

insert into hostel_rooms (hostel_id, room_no, capacity)
select h.id, '102', 2
from hostels h
where h.name = 'South Hostel'
and not exists (select 1 from hostel_rooms r where r.hostel_id = h.id and r.room_no = '102');

insert into hostel_allocations (student_id, room_id, status)
select s.id, r.id, 'active'
from students s
join hostel_rooms r on r.room_no = '101'
where s.person_id = (select id from persons where email = 'bob@student.com')
and not exists (
  select 1 from hostel_allocations ha where ha.student_id = s.id and ha.room_id = r.id
);

insert into hostel_allocations (student_id, room_id, status)
select s.id, r.id, 'active'
from students s
join hostel_rooms r on r.room_no = '102'
where s.person_id = (select id from persons where email = 'emma@student.com')
and not exists (
  select 1 from hostel_allocations ha where ha.student_id = s.id and ha.room_id = r.id
);

-- Library
insert into library_books (title, author, isbn)
select 'Algebra Basics', 'J. Doe', 'ISBN-001'
where not exists (select 1 from library_books where isbn = 'ISBN-001');

insert into library_books (title, author, isbn)
select 'Science Basics', 'A. Roe', 'ISBN-002'
where not exists (select 1 from library_books where isbn = 'ISBN-002');

insert into library_loans (book_id, borrower_id, loaned_at, due_date)
select b.id, p.id, current_date, current_date + interval '14 days'
from library_books b
join persons p on p.email = 'bob@student.com'
where b.isbn = 'ISBN-001'
and not exists (
  select 1 from library_loans l where l.book_id = b.id and l.borrower_id = p.id and l.returned_at is null
);

insert into library_loans (book_id, borrower_id, loaned_at, due_date)
select b.id, p.id, current_date, current_date + interval '14 days'
from library_books b
join persons p on p.email = 'emma@student.com'
where b.isbn = 'ISBN-002'
and not exists (
  select 1 from library_loans l where l.book_id = b.id and l.borrower_id = p.id and l.returned_at is null
);

-- Promotions and Alumni
insert into promotions (student_id, from_grade, to_grade, promoted_at)
select s.id, '9', '10', current_date - interval '30 days'
from students s
where s.person_id = (select id from persons where email = 'bob@student.com')
and not exists (select 1 from promotions p where p.student_id = s.id);

insert into promotions (student_id, from_grade, to_grade, promoted_at)
select s.id, '8', '9', current_date - interval '30 days'
from students s
where s.person_id = (select id from persons where email = 'noah@student.com')
and not exists (select 1 from promotions p where p.student_id = s.id);

insert into alumni (student_id, graduated_at)
select s.id, current_date - interval '365 days'
from students s
where s.person_id = (select id from persons where email = 'bob@student.com')
and not exists (select 1 from alumni a where a.student_id = s.id);

-- Extra test rows
insert into persons (role, first_name, last_name, email, phone, date_of_birth, gender)
values
  ('student', 'Liam', 'King', 'liam@student.com', '222-333-4447', '2011-05-14', 'male'),
  ('student', 'Olivia', 'Wright', 'olivia@student.com', '222-333-4448', '2010-10-22', 'female'),
  ('parent', 'Sophia', 'King', 'sophia@parent.com', '333-444-5557', '1983-11-02', 'female'),
  ('parent', 'Ethan', 'Wright', 'ethan@parent.com', '333-444-5558', '1980-01-27', 'male')
on conflict (email) do nothing;

insert into students (person_id, admission_no, grade_level, section)
select id, 'S-2004', '9', 'A'
from persons where email = 'liam@student.com'
on conflict (admission_no) do nothing;

insert into students (person_id, admission_no, grade_level, section)
select id, 'S-2005', '10', 'B'
from persons where email = 'olivia@student.com'
on conflict (admission_no) do nothing;

insert into parents (person_id, occupation)
select id, 'Nurse'
from persons where email = 'sophia@parent.com'
on conflict (person_id) do nothing;

insert into parents (person_id, occupation)
select id, 'Architect'
from persons where email = 'ethan@parent.com'
on conflict (person_id) do nothing;

insert into parent_student (parent_id, student_id, relation)
select p.id, s.id, 'mother'
from parents p
join persons pp on pp.id = p.person_id and pp.email = 'sophia@parent.com'
join students s on s.person_id = (select id from persons where email = 'liam@student.com')
on conflict do nothing;

insert into parent_student (parent_id, student_id, relation)
select p.id, s.id, 'father'
from parents p
join persons pp on pp.id = p.person_id and pp.email = 'ethan@parent.com'
join students s on s.person_id = (select id from persons where email = 'olivia@student.com')
on conflict do nothing;

insert into enrollments (student_id, offering_id)
select s.id, o.id
from students s
join course_offerings o on o.grade_level = '9' and o.section = 'A'
where s.person_id = (select id from persons where email = 'liam@student.com')
on conflict (student_id, offering_id) do nothing;

insert into enrollments (student_id, offering_id)
select s.id, o.id
from students s
join course_offerings o on o.grade_level = '10' and o.section = 'B'
where s.person_id = (select id from persons where email = 'olivia@student.com')
on conflict (student_id, offering_id) do nothing;

insert into student_attendance (student_id, session_id, attendance_date, status, recorded_by)
select s.id, ss.id, current_date - interval '1 day', 'present', t.id
from students s
join sessions ss on ss.name = '2025-26'
join teachers t on t.person_id = (select id from persons where email = 'brian@school.com')
where s.person_id = (select id from persons where email = 'olivia@student.com')
on conflict (student_id, attendance_date) do nothing;

insert into student_attendance (student_id, session_id, attendance_date, status, recorded_by)
select s.id, ss.id, current_date - interval '1 day', 'present', t.id
from students s
join sessions ss on ss.name = '2025-26'
join teachers t on t.person_id = (select id from persons where email = 'alice@school.com')
where s.person_id = (select id from persons where email = 'liam@student.com')
on conflict (student_id, attendance_date) do nothing;

insert into assignments (offering_id, title, description, due_date, status, created_by)
select o.id, 'Reading Comprehension', 'Read chapter 3 and answer questions', now() + interval '5 days', 'published', t.id
from course_offerings o
join teachers t on t.person_id = (select id from persons where email = 'alice@school.com')
where o.grade_level = '9' and o.section = 'A'
limit 1;

insert into assignment_submissions (assignment_id, student_id, submitted_at, content_url, grade, feedback)
select a.id, s.id, now(), 'https://example.com/submission/4', 88, 'Well done'
from assignments a
join students s on s.person_id = (select id from persons where email = 'liam@student.com')
on conflict (assignment_id, student_id) do nothing;

insert into exams (offering_id, exam_type, date, max_score)
select o.id, 'quiz', current_date + interval '5 days', 20
from course_offerings o
where o.grade_level = '9' and o.section = 'A'
limit 1;

insert into exam_results (exam_id, student_id, score)
select e.id, s.id, 16
from exams e
join students s on s.person_id = (select id from persons where email = 'liam@student.com')
on conflict (exam_id, student_id) do nothing;

insert into notifications (title, message, channel, created_by)
select 'PTA Meeting', 'PTA meeting scheduled for next week', 'email', p.id
from persons p
where p.email = 'david@school.com'
on conflict do nothing;

insert into notification_recipients (notification_id, recipient_id)
select n.id, p.id
from notifications n
join persons p on p.email in ('sophia@parent.com', 'ethan@parent.com')
where n.title = 'PTA Meeting'
on conflict do nothing;
