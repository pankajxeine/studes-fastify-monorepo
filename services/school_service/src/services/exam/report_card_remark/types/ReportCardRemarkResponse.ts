
export type ReportCardRemarkResponse = 
{
  id: number
  public_id: string
  record_code: string
  report_card_remark_id: string
  report_card_id: string
  remark_by_staff_id: string
  remark_kind: "class_teacher" | "subject_teacher" | "principal" | "counsellor"
  course_offering_id?: (string) | null
  remark: string
  areas_to_improve?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
