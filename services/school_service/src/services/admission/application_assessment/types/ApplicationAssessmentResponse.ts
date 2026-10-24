
export type ApplicationAssessmentResponse = 
{
  id: number
  public_id: string
  record_code: string
  application_assessment_id: string
  application_id: string
  assessor_staff_id?: (string) | null
  room_id?: (string) | null
  assessment_type: string
  scheduled_at: string
  ends_at: string
  slot?: (string) | null
  status: "scheduled" | "completed" | "no_show" | "cancelled"
  score?: (number) | null
  max_score?: (number) | null
  result?: (string) | null
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
