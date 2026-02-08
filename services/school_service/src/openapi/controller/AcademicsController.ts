import type { CourseCreateRequest } from '../types/CourseCreateRequest'
import type { Course } from '../types/Course'
import type { CourseList } from '../types/CourseList'
import type { OfferingCreateRequest } from '../types/OfferingCreateRequest'
import type { Offering } from '../types/Offering'
import type { OfferingList } from '../types/OfferingList'
import type { EnrollmentCreateRequest } from '../types/EnrollmentCreateRequest'
import type { Enrollment } from '../types/Enrollment'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface AcademicsController {
  listCourses(headers?: RequestHeaders): Promise<CourseList>
  createCourse(input: CourseCreateRequest, headers?: RequestHeaders): Promise<Course>
  listOfferings(headers?: RequestHeaders): Promise<OfferingList>
  createOffering(input: OfferingCreateRequest, headers?: RequestHeaders): Promise<Offering>
  createEnrollment(input: EnrollmentCreateRequest, headers?: RequestHeaders): Promise<Enrollment>
}
