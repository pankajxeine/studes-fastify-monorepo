import type { PersonBase } from './types/PersonBase'
import type { StudentCreateRequest } from './types/StudentCreateRequest'
import type { Student } from './types/Student'
import type { StudentList } from './types/StudentList'
import type { TeacherCreateRequest } from './types/TeacherCreateRequest'
import type { Teacher } from './types/Teacher'
import type { TeacherList } from './types/TeacherList'
import type { ParentCreateRequest } from './types/ParentCreateRequest'
import type { Parent } from './types/Parent'
import type { ParentList } from './types/ParentList'
import type { StaffCreateRequest } from './types/StaffCreateRequest'
import type { Staff } from './types/Staff'
import type { StaffList } from './types/StaffList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CoreController, ListItem, PaginatedResponse } from './CoreController'

export class CoreService implements CoreController {
      public async listStudents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createStudent(app: FastifyInstance, input: StudentCreateRequest, request?: FastifyRequest): Promise<Student> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async listTeachers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TeacherList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createTeacher(app: FastifyInstance, input: TeacherCreateRequest, request?: FastifyRequest): Promise<Teacher> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async listParents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ParentList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createParent(app: FastifyInstance, input: ParentCreateRequest, request?: FastifyRequest): Promise<Parent> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async listStaff(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StaffList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createStaff(app: FastifyInstance, input: StaffCreateRequest, request?: FastifyRequest): Promise<Staff> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
