import type { StudentAttendanceCreateRequest } from './types/StudentAttendanceCreateRequest'
import type { StudentAttendance } from './types/StudentAttendance'
import type { StaffAttendanceCreateRequest } from './types/StaffAttendanceCreateRequest'
import type { StaffAttendance } from './types/StaffAttendance'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AttendanceController, ListItem, PaginatedResponse } from './AttendanceController'

export class AttendanceService implements AttendanceController {
      public async markStudentAttendance(app: FastifyInstance, input: StudentAttendanceCreateRequest, request?: FastifyRequest): Promise<StudentAttendance> {
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

      public async markStaffAttendance(app: FastifyInstance, input: StaffAttendanceCreateRequest, request?: FastifyRequest): Promise<StaffAttendance> {
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
