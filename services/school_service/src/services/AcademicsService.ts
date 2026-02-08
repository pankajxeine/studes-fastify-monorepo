import type { CourseCreateRequest } from '../openapi/types/CourseCreateRequest'
import type { Course } from '../openapi/types/Course'
import type { CourseList } from '../openapi/types/CourseList'
import type { OfferingCreateRequest } from '../openapi/types/OfferingCreateRequest'
import type { Offering } from '../openapi/types/Offering'
import type { OfferingList } from '../openapi/types/OfferingList'
import type { EnrollmentCreateRequest } from '../openapi/types/EnrollmentCreateRequest'
import type { Enrollment } from '../openapi/types/Enrollment'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { AcademicsController } from '../openapi/controller/AcademicsController'

export class AcademicsService implements AcademicsController {
  public async listCourses(headers?: RequestHeaders): Promise<CourseList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createCourse(input: CourseCreateRequest, headers?: RequestHeaders): Promise<Course> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async listOfferings(headers?: RequestHeaders): Promise<OfferingList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createOffering(input: OfferingCreateRequest, headers?: RequestHeaders): Promise<Offering> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async createEnrollment(input: EnrollmentCreateRequest, headers?: RequestHeaders): Promise<Enrollment> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
