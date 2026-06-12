import type { CourseCreateRequest } from '../types/CourseCreateRequest'
import type { Course } from '../types/Course'
import type { CourseList } from '../types/CourseList'
import type { OfferingCreateRequest } from '../types/OfferingCreateRequest'
import type { Offering } from '../types/Offering'
import type { OfferingList } from '../types/OfferingList'
import type { EnrollmentCreateRequest } from '../types/EnrollmentCreateRequest'
import type { Enrollment } from '../types/Enrollment'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface AcademicsController {
  listCourses(app: FastifyInstance, request?: FastifyRequest): Promise<CourseList>
  createCourse(app: FastifyInstance, input: CourseCreateRequest, request?: FastifyRequest): Promise<Course>
  listOfferings(app: FastifyInstance, request?: FastifyRequest): Promise<OfferingList>
  createOffering(app: FastifyInstance, input: OfferingCreateRequest, request?: FastifyRequest): Promise<Offering>
  createEnrollment(app: FastifyInstance, input: EnrollmentCreateRequest, request?: FastifyRequest): Promise<Enrollment>
}
