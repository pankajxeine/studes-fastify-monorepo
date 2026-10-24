
export type HostelRequest = 
{
  campus_id: string
  building_id?: (string) | null
  code: string
  name: string
  gender_policy: string
  warden_staff_id?: (string) | null
  phone?: (string) | null
  curfew_time?: string
  visiting_hours?: (string) | null
  term_fee_amount?: string
  is_active?: boolean
  notes?: (string) | null
}
