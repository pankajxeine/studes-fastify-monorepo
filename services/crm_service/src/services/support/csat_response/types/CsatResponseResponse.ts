
export type CsatResponseResponse = 
{
  record_code: string
  csat_response_id: string
  ticket_id: string
  score: number
  comment?: (string) | null
  responded_at: string
}
