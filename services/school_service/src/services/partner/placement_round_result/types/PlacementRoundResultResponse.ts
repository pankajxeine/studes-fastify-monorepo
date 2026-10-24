
export type PlacementRoundResultResponse = 
{
  id: number
  public_id: string
  record_code: string
  placement_round_result_id: string
  placement_interview_round_id: string
  placement_application_id: string
  placement_drive_id: string
  result: "pending" | "passed" | "failed" | "absent" | "on_hold"
  score?: (number) | null
  interviewer_name?: (string) | null
  feedback?: (string) | null
  evaluated_at?: (string) | null
  recorded_by_user_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
