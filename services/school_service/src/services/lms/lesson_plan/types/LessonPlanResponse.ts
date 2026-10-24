
export type LessonPlanResponse = 
{
  id: number
  public_id: string
  record_code: string
  lesson_plan_id: string
  course_offering_id: string
  staff_id: string
  planned_date: string
  period_count: number
  sequence_no?: (number) | null
  unit_title: string
  topic: string
  learning_objectives: string
  teaching_methods?: (string) | null
  resources?: (string) | null
  homework?: (string) | null
  assessment_notes?: (string) | null
  status: "draft" | "submitted" | "approved" | "delivered" | "cancelled"
  submitted_at?: (string) | null
  reviewed_by_user_id?: (string) | null
  reviewed_at?: (string) | null
  review_comment?: (string) | null
  delivered_on?: (string) | null
  delivery_notes?: (string) | null
  cancelled_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
