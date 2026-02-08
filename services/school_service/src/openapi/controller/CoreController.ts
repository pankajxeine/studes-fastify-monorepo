import type { PersonBase } from '../types/PersonBase'
import type { StudentCreateRequest } from '../types/StudentCreateRequest'
import type { Student } from '../types/Student'
import type { StudentList } from '../types/StudentList'
import type { TeacherCreateRequest } from '../types/TeacherCreateRequest'
import type { Teacher } from '../types/Teacher'
import type { TeacherList } from '../types/TeacherList'
import type { ParentCreateRequest } from '../types/ParentCreateRequest'
import type { Parent } from '../types/Parent'
import type { ParentList } from '../types/ParentList'
import type { StaffCreateRequest } from '../types/StaffCreateRequest'
import type { Staff } from '../types/Staff'
import type { StaffList } from '../types/StaffList'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CoreController {
  listStudents(headers?: RequestHeaders): Promise<StudentList>
  createStudent(input: StudentCreateRequest, headers?: RequestHeaders): Promise<Student>
  listTeachers(headers?: RequestHeaders): Promise<TeacherList>
  createTeacher(input: TeacherCreateRequest, headers?: RequestHeaders): Promise<Teacher>
  listParents(headers?: RequestHeaders): Promise<ParentList>
  createParent(input: ParentCreateRequest, headers?: RequestHeaders): Promise<Parent>
  listStaff(headers?: RequestHeaders): Promise<StaffList>
  createStaff(input: StaffCreateRequest, headers?: RequestHeaders): Promise<Staff>
}
