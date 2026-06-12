import type { CourseCreateRequest } from '../openapi/types/CourseCreateRequest'
import type { Course } from '../openapi/types/Course'
import type { CourseList } from '../openapi/types/CourseList'
import type { OfferingCreateRequest } from '../openapi/types/OfferingCreateRequest'
import type { Offering } from '../openapi/types/Offering'
import type { OfferingList } from '../openapi/types/OfferingList'
import type { EnrollmentCreateRequest } from '../openapi/types/EnrollmentCreateRequest'
import type { Enrollment } from '../openapi/types/Enrollment'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AcademicsController } from '../openapi/controller/AcademicsController'

export class AcademicsService implements AcademicsController {
  public async listCourses(app: FastifyInstance,request?: FastifyRequest): Promise<CourseList> {
    void request
    throw new Error('Not implemented')
  }

  public async createCourse(app: FastifyInstance, input: CourseCreateRequest, request?: FastifyRequest): Promise<Course> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async listOfferings(app: FastifyInstance,request?: FastifyRequest): Promise<OfferingList> {
    void request
    throw new Error('Not implemented')
  }

  public async createOffering(app: FastifyInstance, input: OfferingCreateRequest, request?: FastifyRequest): Promise<Offering> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async createEnrollment(app: FastifyInstance, input: EnrollmentCreateRequest, request?: FastifyRequest): Promise<Enrollment> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
