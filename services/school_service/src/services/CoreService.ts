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
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CoreController } from '../openapi/controller/CoreController'

export class CoreService implements CoreController {
  public async listStudents(headers?: RequestHeaders): Promise<StudentList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createStudent(input: StudentCreateRequest, headers?: RequestHeaders): Promise<Student> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async listTeachers(headers?: RequestHeaders): Promise<TeacherList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createTeacher(input: TeacherCreateRequest, headers?: RequestHeaders): Promise<Teacher> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async listParents(headers?: RequestHeaders): Promise<ParentList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createParent(input: ParentCreateRequest, headers?: RequestHeaders): Promise<Parent> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async listStaff(headers?: RequestHeaders): Promise<StaffList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createStaff(input: StaffCreateRequest, headers?: RequestHeaders): Promise<Staff> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
