
export type PlacementInterviewRoundRequest = 
{
  placement_drive_id: string
  round_no: number
  name: string
  round_type: string
  mode?: string
  scheduled_at?: (string) | null
  duration_minutes?: (number) | null
  venue?: (string) | null
  meeting_url?: (string) | null
  is_elimination?: boolean
  status?: string
  notes?: (string) | null
}
