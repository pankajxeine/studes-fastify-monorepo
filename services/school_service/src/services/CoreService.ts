import type { PersonBase } from '../openapi/types/PersonBase'
import type { StudentCreateRequest } from '../openapi/types/StudentCreateRequest'
import type { Student } from '../openapi/types/Student'
import type { StudentList } from '../openapi/types/StudentList'
import type { TeacherCreateRequest } from '../openapi/types/TeacherCreateRequest'
import type { Teacher } from '../openapi/types/Teacher'
import type { TeacherList } from '../openapi/types/TeacherList'
import type { ParentCreateRequest } from '../openapi/types/ParentCreateRequest'
import type { Parent } from '../openapi/types/Parent'
import type { ParentList } from '../openapi/types/ParentList'
import type { StaffCreateRequest } from '../openapi/types/StaffCreateRequest'
import type { Staff } from '../openapi/types/Staff'
import type { StaffList } from '../openapi/types/StaffList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CoreController } from '../openapi/controller/CoreController'

export class CoreService implements CoreController {
  public async listStudents(app: FastifyInstance,request?: FastifyRequest): Promise<StudentList> {
    void request
    throw new Error('Not implemented')
  }

  public async createStudent(app: FastifyInstance, input: StudentCreateRequest, request?: FastifyRequest): Promise<Student> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async listTeachers(app: FastifyInstance,request?: FastifyRequest): Promise<TeacherList> {
    void request
    throw new Error('Not implemented')
  }

  public async createTeacher(app: FastifyInstance, input: TeacherCreateRequest, request?: FastifyRequest): Promise<Teacher> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async listParents(app: FastifyInstance,request?: FastifyRequest): Promise<ParentList> {
    void request
    throw new Error('Not implemented')
  }

  public async createParent(app: FastifyInstance, input: ParentCreateRequest, request?: FastifyRequest): Promise<Parent> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async listStaff(app: FastifyInstance,request?: FastifyRequest): Promise<StaffList> {
    void request
    throw new Error('Not implemented')
  }

  public async createStaff(app: FastifyInstance, input: StaffCreateRequest, request?: FastifyRequest): Promise<Staff> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
