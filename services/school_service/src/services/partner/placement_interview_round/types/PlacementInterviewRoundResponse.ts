
export type PlacementInterviewRoundResponse = 
{
  id: number
  public_id: string
  record_code: string
  placement_interview_round_id: string
  placement_drive_id: string
  round_no: number
  name: string
  round_type: string
  mode: string
  scheduled_at?: (string) | null
  duration_minutes?: (number) | null
  venue?: (string) | null
  meeting_url?: (string) | null
  is_elimination: boolean
  status: string
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
