
export type AdmissionCycleSeatRequest = 
{
  admission_cycle_id: string
  grade_level_id: string
  seats_total: number
  seats_reserved?: number
  waitlist_limit?: number
  notes?: (string) | null
}
