
export type IncidentResponse = 
{
  id: number
  public_id: string
  record_code: string
  incident_id: string
  incident_no: string
  campus_id: string
  incident_category_code: string
  severity: number
  occurred_at: string
  location?: (string) | null
  section_id?: (string) | null
  description: string
  is_confidential: boolean
  reported_by_user_id: string
  reported_at: string
  status: string
  resolved_at?: (string) | null
  resolution_summary?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
