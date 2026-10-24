
export type IncidentPartyResponse = 
{
  id: number
  public_id: string
  record_code: string
  incident_party_id: string
  incident_id: string
  student_id: string
  party_role: string
  statement?: (string) | null
  statement_recorded_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
