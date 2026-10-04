import AcademicsRoutes from './academics.router'
import AssignmentsRoutes from './assignments.router'
import AttendanceRoutes from './attendance.router'
import CoreRoutes from './core.router'
import ExamsRoutes from './exams.router'
import FeesRoutes from './fees.router'
import HostelRoutes from './hostel.router'
import LeaveRoutes from './leave.router'
import LibraryRoutes from './library.router'
import NotificationsRoutes from './notifications.router'
import TimetableRoutes from './timetable.router'
import TransportRoutes from './transport.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(AcademicsRoutes)
  await app.register(AssignmentsRoutes)
  await app.register(AttendanceRoutes)
  await app.register(CoreRoutes)
  await app.register(ExamsRoutes)
  await app.register(FeesRoutes)
  await app.register(HostelRoutes)
  await app.register(LeaveRoutes)
  await app.register(LibraryRoutes)
  await app.register(NotificationsRoutes)
  await app.register(TimetableRoutes)
  await app.register(TransportRoutes)
}
