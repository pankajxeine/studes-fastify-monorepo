
export type PlacementDriveEligibilityResponse = 
{
  id: number
  public_id: string
  record_code: string
  placement_drive_eligibility_id: string
  placement_drive_id: string
  program_id: string
  grade_level_id?: (string) | null
  min_cgpa?: (number) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
