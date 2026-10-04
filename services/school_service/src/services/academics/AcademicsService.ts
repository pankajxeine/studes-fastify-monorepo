import type { CourseCreateRequest } from './types/CourseCreateRequest'
import type { Course } from './types/Course'
import type { CourseList } from './types/CourseList'
import type { OfferingCreateRequest } from './types/OfferingCreateRequest'
import type { Offering } from './types/Offering'
import type { OfferingList } from './types/OfferingList'
import type { EnrollmentCreateRequest } from './types/EnrollmentCreateRequest'
import type { Enrollment } from './types/Enrollment'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AcademicsController, ListItem, PaginatedResponse } from './AcademicsController'

export class AcademicsService implements AcademicsController {
      public async listCourses(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CourseList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createCourse(app: FastifyInstance, input: CourseCreateRequest, request?: FastifyRequest): Promise<Course> {
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

      public async listOfferings(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OfferingList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createOffering(app: FastifyInstance, input: OfferingCreateRequest, request?: FastifyRequest): Promise<Offering> {
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

      public async createEnrollment(app: FastifyInstance, input: EnrollmentCreateRequest, request?: FastifyRequest): Promise<Enrollment> {
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
