
export type ApplicationAssessmentRequest = 
{
  application_id: string
  assessor_staff_id?: (string) | null
  room_id?: (string) | null
  assessment_type: string
  scheduled_at: string
  ends_at: string
  slot?: (string) | null
  status?: "scheduled" | "completed" | "no_show" | "cancelled"
  score?: (number) | null
  max_score?: (number) | null
  result?: (string) | null
  remarks?: (string) | null
}
