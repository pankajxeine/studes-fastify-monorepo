
export type ExamUpdateRequest = 
{
  academic_year_id: string
  term_id: string
  campus_id: string
  assessment_type_code: string
  code: string
  name: string
  description: (string) | null
  start_date: string
  end_date: string
  exam_window: (string) | null
  status: "draft" | "scheduled" | "ongoing" | "marks_entry" | "published" | "cancelled"
  marks_entry_due_on: (string) | null
  results_planned_on: (string) | null
  published_at: (string) | null
  published_by_user_id: (string) | null
  cancelled_reason: (string) | null
}
