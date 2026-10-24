
export type PlacementApplicationResponse = 
{
  id: number
  public_id: string
  record_code: string
  placement_application_id: string
  placement_drive_id: string
  student_id: string
  academic_year_id: string
  status: "applied" | "shortlisted" | "in_process" | "selected" | "rejected" | "withdrawn"
  applied_at: string
  cgpa_at_application?: (number) | null
  cover_note?: (string) | null
  shortlisted_at?: (string) | null
  decided_at?: (string) | null
  rejection_reason?: (string) | null
  withdrawn_at?: (string) | null
  withdrawal_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
