
export type LessonPlanUpdateRequest = 
{
  course_offering_id: string
  staff_id: string
  planned_date: string
  period_count: number
  sequence_no: (number) | null
  unit_title: string
  topic: string
  learning_objectives: string
  teaching_methods: (string) | null
  resources: (string) | null
  homework: (string) | null
  assessment_notes: (string) | null
  status: "draft" | "submitted" | "approved" | "delivered" | "cancelled"
  submitted_at: (string) | null
  reviewed_by_user_id: (string) | null
  reviewed_at: (string) | null
  review_comment: (string) | null
  delivered_on: (string) | null
  delivery_notes: (string) | null
  cancelled_reason: (string) | null
}
