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
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CoreController {
  listStudents(app: FastifyInstance, request?: FastifyRequest): Promise<StudentList>
  createStudent(app: FastifyInstance, input: StudentCreateRequest, request?: FastifyRequest): Promise<Student>
  listTeachers(app: FastifyInstance, request?: FastifyRequest): Promise<TeacherList>
  createTeacher(app: FastifyInstance, input: TeacherCreateRequest, request?: FastifyRequest): Promise<Teacher>
  listParents(app: FastifyInstance, request?: FastifyRequest): Promise<ParentList>
  createParent(app: FastifyInstance, input: ParentCreateRequest, request?: FastifyRequest): Promise<Parent>
  listStaff(app: FastifyInstance, request?: FastifyRequest): Promise<StaffList>
  createStaff(app: FastifyInstance, input: StaffCreateRequest, request?: FastifyRequest): Promise<Staff>
}
