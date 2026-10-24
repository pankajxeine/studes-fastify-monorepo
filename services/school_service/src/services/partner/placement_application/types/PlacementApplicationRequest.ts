
export type PlacementApplicationRequest = 
{
  placement_drive_id: string
  student_id: string
  academic_year_id: string
  status?: "applied" | "shortlisted" | "in_process" | "selected" | "rejected" | "withdrawn"
  applied_at?: string
  cgpa_at_application?: (number) | null
  cover_note?: (string) | null
  shortlisted_at?: (string) | null
  decided_at?: (string) | null
  rejection_reason?: (string) | null
  withdrawn_at?: (string) | null
  withdrawal_reason?: (string) | null
}
