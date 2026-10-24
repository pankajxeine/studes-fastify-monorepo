
export type AdmissionCycleSeatResponse = 
{
  id: number
  public_id: string
  record_code: string
  admission_cycle_seat_id: string
  admission_cycle_id: string
  grade_level_id: string
  seats_total: number
  seats_reserved: number
  waitlist_limit: number
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
