
export type IncidentPartyRequest = 
{
  incident_id: string
  student_id: string
  party_role: string
  statement?: (string) | null
  statement_recorded_at?: (string) | null
}
