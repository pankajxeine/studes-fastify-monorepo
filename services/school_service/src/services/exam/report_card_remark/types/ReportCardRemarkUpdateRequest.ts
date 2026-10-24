
export type ReportCardRemarkUpdateRequest = 
{
  report_card_id: string
  remark_by_staff_id: string
  remark_kind: "class_teacher" | "subject_teacher" | "principal" | "counsellor"
  course_offering_id: (string) | null
  remark: string
  areas_to_improve: (string) | null
}
