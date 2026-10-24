import type { FastifyInstance } from 'fastify'
import type { Sequelize } from 'sequelize'
import { createGeneratedModels as createAcademicModels, associateGeneratedModels as associateAcademicModels, type GeneratedModels as AcademicModels } from './academic'
import { createGeneratedModels as createAdmissionModels, associateGeneratedModels as associateAdmissionModels, type GeneratedModels as AdmissionModels } from './admission'
import { createGeneratedModels as createAlumniModels, associateGeneratedModels as associateAlumniModels, type GeneratedModels as AlumniModels } from './alumni'
import { createGeneratedModels as createAttendanceModels, associateGeneratedModels as associateAttendanceModels, type GeneratedModels as AttendanceModels } from './attendance'
import { createGeneratedModels as createAuditModels, associateGeneratedModels as associateAuditModels, type GeneratedModels as AuditModels } from './audit'
import { createGeneratedModels as createCanteenModels, associateGeneratedModels as associateCanteenModels, type GeneratedModels as CanteenModels } from './canteen'
import { createGeneratedModels as createCommsModels, associateGeneratedModels as associateCommsModels, type GeneratedModels as CommsModels } from './comms'
import { createGeneratedModels as createDisciplineModels, associateGeneratedModels as associateDisciplineModels, type GeneratedModels as DisciplineModels } from './discipline'
import { createGeneratedModels as createDocsModels, associateGeneratedModels as associateDocsModels, type GeneratedModels as DocsModels } from './docs'
import { createGeneratedModels as createEventsModels, associateGeneratedModels as associateEventsModels, type GeneratedModels as EventsModels } from './events'
import { createGeneratedModels as createExamModels, associateGeneratedModels as associateExamModels, type GeneratedModels as ExamModels } from './exam'
import { createGeneratedModels as createFinanceModels, associateGeneratedModels as associateFinanceModels, type GeneratedModels as FinanceModels } from './finance'
import { createGeneratedModels as createHealthModels, associateGeneratedModels as associateHealthModels, type GeneratedModels as HealthModels } from './health'
import { createGeneratedModels as createHostelModels, associateGeneratedModels as associateHostelModels, type GeneratedModels as HostelModels } from './hostel'
import { createGeneratedModels as createHrModels, associateGeneratedModels as associateHrModels, type GeneratedModels as HrModels } from './hr'
import { createGeneratedModels as createIamModels, associateGeneratedModels as associateIamModels, type GeneratedModels as IamModels } from './iam'
import { createGeneratedModels as createInventoryModels, associateGeneratedModels as associateInventoryModels, type GeneratedModels as InventoryModels } from './inventory'
import { createGeneratedModels as createLibraryModels, associateGeneratedModels as associateLibraryModels, type GeneratedModels as LibraryModels } from './library'
import { createGeneratedModels as createLmsModels, associateGeneratedModels as associateLmsModels, type GeneratedModels as LmsModels } from './lms'
import { createGeneratedModels as createOrgModels, associateGeneratedModels as associateOrgModels, type GeneratedModels as OrgModels } from './org'
import { createGeneratedModels as createPartnerModels, associateGeneratedModels as associatePartnerModels, type GeneratedModels as PartnerModels } from './partner'
import { createGeneratedModels as createPeopleModels, associateGeneratedModels as associatePeopleModels, type GeneratedModels as PeopleModels } from './people'
import { createGeneratedModels as createSisModels, associateGeneratedModels as associateSisModels, type GeneratedModels as SisModels } from './sis'
import { createGeneratedModels as createTimetableModels, associateGeneratedModels as associateTimetableModels, type GeneratedModels as TimetableModels } from './timetable'
import { createGeneratedModels as createTransportModels, associateGeneratedModels as associateTransportModels, type GeneratedModels as TransportModels } from './transport'
import { createGeneratedModels as createVisitorModels, associateGeneratedModels as associateVisitorModels, type GeneratedModels as VisitorModels } from './visitor'

export type GeneratedEntityDecorations =
  AcademicModels &
  AdmissionModels &
  AlumniModels &
  AttendanceModels &
  AuditModels &
  CanteenModels &
  CommsModels &
  DisciplineModels &
  DocsModels &
  EventsModels &
  ExamModels &
  FinanceModels &
  HealthModels &
  HostelModels &
  HrModels &
  IamModels &
  InventoryModels &
  LibraryModels &
  LmsModels &
  OrgModels &
  PartnerModels &
  PeopleModels &
  SisModels &
  TimetableModels &
  TransportModels &
  VisitorModels

export function registerGeneratedEntityDecorators(app: FastifyInstance, sequelize: Sequelize): GeneratedEntityDecorations {
  const academicModels = createAcademicModels(sequelize)
  const admissionModels = createAdmissionModels(sequelize)
  const alumniModels = createAlumniModels(sequelize)
  const attendanceModels = createAttendanceModels(sequelize)
  const auditModels = createAuditModels(sequelize)
  const canteenModels = createCanteenModels(sequelize)
  const commsModels = createCommsModels(sequelize)
  const disciplineModels = createDisciplineModels(sequelize)
  const docsModels = createDocsModels(sequelize)
  const eventsModels = createEventsModels(sequelize)
  const examModels = createExamModels(sequelize)
  const financeModels = createFinanceModels(sequelize)
  const healthModels = createHealthModels(sequelize)
  const hostelModels = createHostelModels(sequelize)
  const hrModels = createHrModels(sequelize)
  const iamModels = createIamModels(sequelize)
  const inventoryModels = createInventoryModels(sequelize)
  const libraryModels = createLibraryModels(sequelize)
  const lmsModels = createLmsModels(sequelize)
  const orgModels = createOrgModels(sequelize)
  const partnerModels = createPartnerModels(sequelize)
  const peopleModels = createPeopleModels(sequelize)
  const sisModels = createSisModels(sequelize)
  const timetableModels = createTimetableModels(sequelize)
  const transportModels = createTransportModels(sequelize)
  const visitorModels = createVisitorModels(sequelize)
  associateAcademicModels(academicModels)
  associateAdmissionModels(admissionModels)
  associateAlumniModels(alumniModels)
  associateAttendanceModels(attendanceModels)
  associateAuditModels(auditModels)
  associateCanteenModels(canteenModels)
  associateCommsModels(commsModels)
  associateDisciplineModels(disciplineModels)
  associateDocsModels(docsModels)
  associateEventsModels(eventsModels)
  associateExamModels(examModels)
  associateFinanceModels(financeModels)
  associateHealthModels(healthModels)
  associateHostelModels(hostelModels)
  associateHrModels(hrModels)
  associateIamModels(iamModels)
  associateInventoryModels(inventoryModels)
  associateLibraryModels(libraryModels)
  associateLmsModels(lmsModels)
  associateOrgModels(orgModels)
  associatePartnerModels(partnerModels)
  associatePeopleModels(peopleModels)
  associateSisModels(sisModels)
  associateTimetableModels(timetableModels)
  associateTransportModels(transportModels)
  associateVisitorModels(visitorModels)
  const models: GeneratedEntityDecorations = {
    ...academicModels,
    ...admissionModels,
    ...alumniModels,
    ...attendanceModels,
    ...auditModels,
    ...canteenModels,
    ...commsModels,
    ...disciplineModels,
    ...docsModels,
    ...eventsModels,
    ...examModels,
    ...financeModels,
    ...healthModels,
    ...hostelModels,
    ...hrModels,
    ...iamModels,
    ...inventoryModels,
    ...libraryModels,
    ...lmsModels,
    ...orgModels,
    ...partnerModels,
    ...peopleModels,
    ...sisModels,
    ...timetableModels,
    ...transportModels,
    ...visitorModels
  }
  app.decorate('models', models)

  return models
}

declare module 'fastify' {
  interface FastifyInstance {
    models: GeneratedEntityDecorations
  }
}
