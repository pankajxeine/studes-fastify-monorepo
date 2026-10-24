import AcademicYearRoutes from './academic/academic_year.router'
import CourseOfferingRoutes from './academic/course_offering.router'
import CoursePrerequisiteRoutes from './academic/course_prerequisite.router'
import CourseRoutes from './academic/course.router'
import GradeLevelRoutes from './academic/grade_level.router'
import GradingSchemeBandRoutes from './academic/grading_scheme_band.router'
import GradingSchemeRoutes from './academic/grading_scheme.router'
import HolidayRoutes from './academic/holiday.router'
import OfferingInstructorRoutes from './academic/offering_instructor.router'
import ProgramCourseRoutes from './academic/program_course.router'
import ProgramRoutes from './academic/program.router'
import SectionRoutes from './academic/section.router'
import TermRoutes from './academic/term.router'
import AdmissionCycleSeatRoutes from './admission/admission_cycle_seat.router'
import AdmissionCycleRoutes from './admission/admission_cycle.router'
import ApplicationAssessmentRoutes from './admission/application_assessment.router'
import ApplicationDocumentRoutes from './admission/application_document.router'
import ApplicationGuardianRoutes from './admission/application_guardian.router'
import ApplicationStatusHistoryRoutes from './admission/application_status_history.router'
import ApplicationRoutes from './admission/application.router'
import InquiryFollowUpRoutes from './admission/inquiry_follow_up.router'
import InquirySourceRoutes from './admission/inquiry_source.router'
import InquiryRoutes from './admission/inquiry.router'
import AlumniEmploymentRoutes from './alumni/alumni_employment.router'
import AlumniHigherEducationRoutes from './alumni/alumni_higher_education.router'
import AlumnusRoutes from './alumni/alumnus.router'
import DonationCampaignRoutes from './alumni/donation_campaign.router'
import DonationRoutes from './alumni/donation.router'
import MentorshipRoutes from './alumni/mentorship.router'
import AttendanceTypeRoutes from './attendance/attendance_type.router'
import StaffAttendanceRoutes from './attendance/staff_attendance.router'
import StudentAttendanceSessionRoutes from './attendance/student_attendance_session.router'
import StudentAttendanceRoutes from './attendance/student_attendance.router'
import StudentLeaveRequestRoutes from './attendance/student_leave_request.router'
import ActivityLogRoutes from './audit/activity_log.router'
import RowChangeLogRoutes from './audit/row_change_log.router'
import AllergenRoutes from './canteen/allergen.router'
import CanteenOrderLineRoutes from './canteen/canteen_order_line.router'
import CanteenOrderStatusHistoryRoutes from './canteen/canteen_order_status_history.router'
import CanteenOrderRoutes from './canteen/canteen_order.router'
import CanteenOutletRoutes from './canteen/canteen_outlet.router'
import CanteenStaffAssignmentRoutes from './canteen/canteen_staff_assignment.router'
import DailyMenuItemRoutes from './canteen/daily_menu_item.router'
import DailyMenuRoutes from './canteen/daily_menu.router'
import MealPeriodRoutes from './canteen/meal_period.router'
import MealPlanPeriodRoutes from './canteen/meal_plan_period.router'
import MealPlanRoutes from './canteen/meal_plan.router'
import MealSubscriptionRoutes from './canteen/meal_subscription.router'
import MenuCategoryRoutes from './canteen/menu_category.router'
import MenuItemAllergenRoutes from './canteen/menu_item_allergen.router'
import MenuItemRoutes from './canteen/menu_item.router'
import PersonAllergenRoutes from './canteen/person_allergen.router'
import WalletTransactionRoutes from './canteen/wallet_transaction.router'
import WalletRoutes from './canteen/wallet.router'
import WeeklyMenuItemRoutes from './canteen/weekly_menu_item.router'
import WeeklyMenuRoutes from './canteen/weekly_menu.router'
import MessageThreadRoutes from './comms/message_thread.router'
import MessageRoutes from './comms/message.router'
import NoticeAudienceRoutes from './comms/notice_audience.router'
import NoticeReadRoutes from './comms/notice_read.router'
import NoticeRoutes from './comms/notice.router'
import NotificationPreferenceRoutes from './comms/notification_preference.router'
import NotificationTemplateRoutes from './comms/notification_template.router'
import NotificationRoutes from './comms/notification.router'
import ThreadParticipantRoutes from './comms/thread_participant.router'
import DisciplinaryActionRoutes from './discipline/disciplinary_action.router'
import IncidentCategoryRoutes from './discipline/incident_category.router'
import IncidentPartyRoutes from './discipline/incident_party.router'
import IncidentRoutes from './discipline/incident.router'
import MeritRecordRoutes from './discipline/merit_record.router'
import CertificateTemplateRoutes from './docs/certificate_template.router'
import DocumentTypeRoutes from './docs/document_type.router'
import FileRoutes from './docs/file.router'
import IssuedCertificateRoutes from './docs/issued_certificate.router'
import PersonDocumentRoutes from './docs/person_document.router'
import EventParticipantRoutes from './events/event_participant.router'
import EventRoutes from './events/event.router'
import PtmSlotRoutes from './events/ptm_slot.router'
import RoomBookingRoutes from './events/room_booking.router'
import AssessmentTypeRoutes from './exam/assessment_type.router'
import AssessmentWeightRoutes from './exam/assessment_weight.router'
import CourseResultRoutes from './exam/course_result.router'
import ExamScheduleRoutes from './exam/exam_schedule.router'
import ExamRoutes from './exam/exam.router'
import ReportCardRemarkRoutes from './exam/report_card_remark.router'
import ReportCardRoutes from './exam/report_card.router'
import StudentMarkRoutes from './exam/student_mark.router'
import ConcessionTypeRoutes from './finance/concession_type.router'
import ExpenseCategoryRoutes from './finance/expense_category.router'
import ExpenseRoutes from './finance/expense.router'
import FeeHeadRoutes from './finance/fee_head.router'
import FeeInstallmentRoutes from './finance/fee_installment.router'
import FeeStructureItemRoutes from './finance/fee_structure_item.router'
import FeeStructureRoutes from './finance/fee_structure.router'
import InvoiceLineRoutes from './finance/invoice_line.router'
import InvoiceRoutes from './finance/invoice.router'
import LateFeeRuleRoutes from './finance/late_fee_rule.router'
import PaymentAllocationRoutes from './finance/payment_allocation.router'
import PaymentRoutes from './finance/payment.router'
import RefundRoutes from './finance/refund.router'
import ScholarshipRoutes from './finance/scholarship.router'
import StudentConcessionRoutes from './finance/student_concession.router'
import ClinicVisitRoutes from './health/clinic_visit.router'
import HealthCheckupRoutes from './health/health_checkup.router'
import HealthRoutes from './health/health.router'
import ImmunizationRoutes from './health/immunization.router'
import MedicalProfileRoutes from './health/medical_profile.router'
import BedAllocationRoutes from './hostel/bed_allocation.router'
import BedRoutes from './hostel/bed.router'
import HostelRoomRoutes from './hostel/hostel_room.router'
import HostelRoutes from './hostel/hostel.router'
import MessMenuRoutes from './hostel/mess_menu.router'
import OutpassRoutes from './hostel/outpass.router'
import DesignationRoutes from './hr/designation.router'
import LeaveBalanceRoutes from './hr/leave_balance.router'
import LeaveRequestRoutes from './hr/leave_request.router'
import LeaveTypeRoutes from './hr/leave_type.router'
import PayrollRunRoutes from './hr/payroll_run.router'
import PayslipLineRoutes from './hr/payslip_line.router'
import PayslipRoutes from './hr/payslip.router'
import SalaryComponentRoutes from './hr/salary_component.router'
import SalaryStructureComponentRoutes from './hr/salary_structure_component.router'
import SalaryStructureRoutes from './hr/salary_structure.router'
import StaffExperienceRoutes from './hr/staff_experience.router'
import StaffQualificationRoutes from './hr/staff_qualification.router'
import StaffSalaryAssignmentRoutes from './hr/staff_salary_assignment.router'
import StaffRoutes from './hr/staff.router'
import AppUserRoutes from './iam/app_user.router'
import LoginAttemptRoutes from './iam/login_attempt.router'
import PasswordResetTokenRoutes from './iam/password_reset_token.router'
import PermissionRoutes from './iam/permission.router'
import RolePermissionRoutes from './iam/role_permission.router'
import RoleRoutes from './iam/role.router'
import UserRoleRoutes from './iam/user_role.router'
import UserSessionRoutes from './iam/user_session.router'
import AssetMaintenanceRoutes from './inventory/asset_maintenance.router'
import AssetRoutes from './inventory/asset.router'
import ItemCategoryRoutes from './inventory/item_category.router'
import ItemRoutes from './inventory/item.router'
import PurchaseOrderLineRoutes from './inventory/purchase_order_line.router'
import PurchaseOrderRoutes from './inventory/purchase_order.router'
import StockTransactionRoutes from './inventory/stock_transaction.router'
import BookAuthorRoutes from './library/book_author.router'
import BookCategoryRoutes from './library/book_category.router'
import BookCopyRoutes from './library/book_copy.router'
import BookRoutes from './library/book.router'
import LibraryMembershipRoutes from './library/library_membership.router'
import LoanRoutes from './library/loan.router'
import ReservationRoutes from './library/reservation.router'
import AssignmentSubmissionRoutes from './lms/assignment_submission.router'
import AssignmentRoutes from './lms/assignment.router'
import LessonPlanRoutes from './lms/lesson_plan.router'
import StudyMaterialRoutes from './lms/study_material.router'
import BuildingRoutes from './org/building.router'
import CampusRoutes from './org/campus.router'
import DepartmentRoutes from './org/department.router'
import OrganizationRoutes from './org/organization.router'
import RoomTypeRoutes from './org/room_type.router'
import RoomRoutes from './org/room.router'
import SettingRoutes from './org/setting.router'
import VendorRoutes from './org/vendor.router'
import InternshipRoutes from './partner/internship.router'
import JobOfferRoutes from './partner/job_offer.router'
import PartnerAgreementRoutes from './partner/partner_agreement.router'
import PartnerContactRoutes from './partner/partner_contact.router'
import PartnerOrganizationRoutes from './partner/partner_organization.router'
import PartnerTypeRoutes from './partner/partner_type.router'
import PlacementApplicationRoutes from './partner/placement_application.router'
import PlacementDriveEligibilityRoutes from './partner/placement_drive_eligibility.router'
import PlacementDriveRoutes from './partner/placement_drive.router'
import PlacementInterviewRoundRoutes from './partner/placement_interview_round.router'
import PlacementRoundResultRoutes from './partner/placement_round_result.router'
import SponsorshipRoutes from './partner/sponsorship.router'
import EmergencyContactRoutes from './people/emergency_contact.router'
import GenderRoutes from './people/gender.router'
import GuardianRoutes from './people/guardian.router'
import PersonAddressRoutes from './people/person_address.router'
import PersonContactRoutes from './people/person_contact.router'
import PersonRoutes from './people/person.router'
import RelationshipTypeRoutes from './people/relationship_type.router'
import CourseRegistrationRoutes from './sis/course_registration.router'
import HouseRoutes from './sis/house.router'
import PreviousEducationRoutes from './sis/previous_education.router'
import StudentEnrollmentRoutes from './sis/student_enrollment.router'
import StudentGuardianRoutes from './sis/student_guardian.router'
import StudentStatusHistoryRoutes from './sis/student_status_history.router'
import StudentTransferRoutes from './sis/student_transfer.router'
import StudentRoutes from './sis/student.router'
import BellScheduleRoutes from './timetable/bell_schedule.router'
import PeriodRoutes from './timetable/period.router'
import SubstitutionRoutes from './timetable/substitution.router'
import TimetableEntryRoutes from './timetable/timetable_entry.router'
import RouteStopRoutes from './transport/route_stop.router'
import RouteRoutes from './transport/route.router'
import StopRoutes from './transport/stop.router'
import StudentTransportRoutes from './transport/student_transport.router'
import TripLogRoutes from './transport/trip_log.router'
import VehicleMaintenanceRoutes from './transport/vehicle_maintenance.router'
import VehicleRoutes from './transport/vehicle.router'
import GatePassRoutes from './visitor/gate_pass.router'
import GuestLectureRoutes from './visitor/guest_lecture.router'
import GuestRoutes from './visitor/guest.router'
import VisitRoutes from './visitor/visit.router'
import WatchlistRoutes from './visitor/watchlist.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(AcademicYearRoutes)
  await app.register(CourseOfferingRoutes)
  await app.register(CoursePrerequisiteRoutes)
  await app.register(CourseRoutes)
  await app.register(GradeLevelRoutes)
  await app.register(GradingSchemeBandRoutes)
  await app.register(GradingSchemeRoutes)
  await app.register(HolidayRoutes)
  await app.register(OfferingInstructorRoutes)
  await app.register(ProgramCourseRoutes)
  await app.register(ProgramRoutes)
  await app.register(SectionRoutes)
  await app.register(TermRoutes)
  await app.register(AdmissionCycleSeatRoutes)
  await app.register(AdmissionCycleRoutes)
  await app.register(ApplicationAssessmentRoutes)
  await app.register(ApplicationDocumentRoutes)
  await app.register(ApplicationGuardianRoutes)
  await app.register(ApplicationStatusHistoryRoutes)
  await app.register(ApplicationRoutes)
  await app.register(InquiryFollowUpRoutes)
  await app.register(InquirySourceRoutes)
  await app.register(InquiryRoutes)
  await app.register(AlumniEmploymentRoutes)
  await app.register(AlumniHigherEducationRoutes)
  await app.register(AlumnusRoutes)
  await app.register(DonationCampaignRoutes)
  await app.register(DonationRoutes)
  await app.register(MentorshipRoutes)
  await app.register(AttendanceTypeRoutes)
  await app.register(StaffAttendanceRoutes)
  await app.register(StudentAttendanceSessionRoutes)
  await app.register(StudentAttendanceRoutes)
  await app.register(StudentLeaveRequestRoutes)
  await app.register(ActivityLogRoutes)
  await app.register(RowChangeLogRoutes)
  await app.register(AllergenRoutes)
  await app.register(CanteenOrderLineRoutes)
  await app.register(CanteenOrderStatusHistoryRoutes)
  await app.register(CanteenOrderRoutes)
  await app.register(CanteenOutletRoutes)
  await app.register(CanteenStaffAssignmentRoutes)
  await app.register(DailyMenuItemRoutes)
  await app.register(DailyMenuRoutes)
  await app.register(MealPeriodRoutes)
  await app.register(MealPlanPeriodRoutes)
  await app.register(MealPlanRoutes)
  await app.register(MealSubscriptionRoutes)
  await app.register(MenuCategoryRoutes)
  await app.register(MenuItemAllergenRoutes)
  await app.register(MenuItemRoutes)
  await app.register(PersonAllergenRoutes)
  await app.register(WalletTransactionRoutes)
  await app.register(WalletRoutes)
  await app.register(WeeklyMenuItemRoutes)
  await app.register(WeeklyMenuRoutes)
  await app.register(MessageThreadRoutes)
  await app.register(MessageRoutes)
  await app.register(NoticeAudienceRoutes)
  await app.register(NoticeReadRoutes)
  await app.register(NoticeRoutes)
  await app.register(NotificationPreferenceRoutes)
  await app.register(NotificationTemplateRoutes)
  await app.register(NotificationRoutes)
  await app.register(ThreadParticipantRoutes)
  await app.register(DisciplinaryActionRoutes)
  await app.register(IncidentCategoryRoutes)
  await app.register(IncidentPartyRoutes)
  await app.register(IncidentRoutes)
  await app.register(MeritRecordRoutes)
  await app.register(CertificateTemplateRoutes)
  await app.register(DocumentTypeRoutes)
  await app.register(FileRoutes)
  await app.register(IssuedCertificateRoutes)
  await app.register(PersonDocumentRoutes)
  await app.register(EventParticipantRoutes)
  await app.register(EventRoutes)
  await app.register(PtmSlotRoutes)
  await app.register(RoomBookingRoutes)
  await app.register(AssessmentTypeRoutes)
  await app.register(AssessmentWeightRoutes)
  await app.register(CourseResultRoutes)
  await app.register(ExamScheduleRoutes)
  await app.register(ExamRoutes)
  await app.register(ReportCardRemarkRoutes)
  await app.register(ReportCardRoutes)
  await app.register(StudentMarkRoutes)
  await app.register(ConcessionTypeRoutes)
  await app.register(ExpenseCategoryRoutes)
  await app.register(ExpenseRoutes)
  await app.register(FeeHeadRoutes)
  await app.register(FeeInstallmentRoutes)
  await app.register(FeeStructureItemRoutes)
  await app.register(FeeStructureRoutes)
  await app.register(InvoiceLineRoutes)
  await app.register(InvoiceRoutes)
  await app.register(LateFeeRuleRoutes)
  await app.register(PaymentAllocationRoutes)
  await app.register(PaymentRoutes)
  await app.register(RefundRoutes)
  await app.register(ScholarshipRoutes)
  await app.register(StudentConcessionRoutes)
  await app.register(ClinicVisitRoutes)
  await app.register(HealthCheckupRoutes)
  await app.register(HealthRoutes)
  await app.register(ImmunizationRoutes)
  await app.register(MedicalProfileRoutes)
  await app.register(BedAllocationRoutes)
  await app.register(BedRoutes)
  await app.register(HostelRoomRoutes)
  await app.register(HostelRoutes)
  await app.register(MessMenuRoutes)
  await app.register(OutpassRoutes)
  await app.register(DesignationRoutes)
  await app.register(LeaveBalanceRoutes)
  await app.register(LeaveRequestRoutes)
  await app.register(LeaveTypeRoutes)
  await app.register(PayrollRunRoutes)
  await app.register(PayslipLineRoutes)
  await app.register(PayslipRoutes)
  await app.register(SalaryComponentRoutes)
  await app.register(SalaryStructureComponentRoutes)
  await app.register(SalaryStructureRoutes)
  await app.register(StaffExperienceRoutes)
  await app.register(StaffQualificationRoutes)
  await app.register(StaffSalaryAssignmentRoutes)
  await app.register(StaffRoutes)
  await app.register(AppUserRoutes)
  await app.register(LoginAttemptRoutes)
  await app.register(PasswordResetTokenRoutes)
  await app.register(PermissionRoutes)
  await app.register(RolePermissionRoutes)
  await app.register(RoleRoutes)
  await app.register(UserRoleRoutes)
  await app.register(UserSessionRoutes)
  await app.register(AssetMaintenanceRoutes)
  await app.register(AssetRoutes)
  await app.register(ItemCategoryRoutes)
  await app.register(ItemRoutes)
  await app.register(PurchaseOrderLineRoutes)
  await app.register(PurchaseOrderRoutes)
  await app.register(StockTransactionRoutes)
  await app.register(BookAuthorRoutes)
  await app.register(BookCategoryRoutes)
  await app.register(BookCopyRoutes)
  await app.register(BookRoutes)
  await app.register(LibraryMembershipRoutes)
  await app.register(LoanRoutes)
  await app.register(ReservationRoutes)
  await app.register(AssignmentSubmissionRoutes)
  await app.register(AssignmentRoutes)
  await app.register(LessonPlanRoutes)
  await app.register(StudyMaterialRoutes)
  await app.register(BuildingRoutes)
  await app.register(CampusRoutes)
  await app.register(DepartmentRoutes)
  await app.register(OrganizationRoutes)
  await app.register(RoomTypeRoutes)
  await app.register(RoomRoutes)
  await app.register(SettingRoutes)
  await app.register(VendorRoutes)
  await app.register(InternshipRoutes)
  await app.register(JobOfferRoutes)
  await app.register(PartnerAgreementRoutes)
  await app.register(PartnerContactRoutes)
  await app.register(PartnerOrganizationRoutes)
  await app.register(PartnerTypeRoutes)
  await app.register(PlacementApplicationRoutes)
  await app.register(PlacementDriveEligibilityRoutes)
  await app.register(PlacementDriveRoutes)
  await app.register(PlacementInterviewRoundRoutes)
  await app.register(PlacementRoundResultRoutes)
  await app.register(SponsorshipRoutes)
  await app.register(EmergencyContactRoutes)
  await app.register(GenderRoutes)
  await app.register(GuardianRoutes)
  await app.register(PersonAddressRoutes)
  await app.register(PersonContactRoutes)
  await app.register(PersonRoutes)
  await app.register(RelationshipTypeRoutes)
  await app.register(CourseRegistrationRoutes)
  await app.register(HouseRoutes)
  await app.register(PreviousEducationRoutes)
  await app.register(StudentEnrollmentRoutes)
  await app.register(StudentGuardianRoutes)
  await app.register(StudentStatusHistoryRoutes)
  await app.register(StudentTransferRoutes)
  await app.register(StudentRoutes)
  await app.register(BellScheduleRoutes)
  await app.register(PeriodRoutes)
  await app.register(SubstitutionRoutes)
  await app.register(TimetableEntryRoutes)
  await app.register(RouteStopRoutes)
  await app.register(RouteRoutes)
  await app.register(StopRoutes)
  await app.register(StudentTransportRoutes)
  await app.register(TripLogRoutes)
  await app.register(VehicleMaintenanceRoutes)
  await app.register(VehicleRoutes)
  await app.register(GatePassRoutes)
  await app.register(GuestLectureRoutes)
  await app.register(GuestRoutes)
  await app.register(VisitRoutes)
  await app.register(WatchlistRoutes)
}
