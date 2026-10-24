
export type AdmissionCycleResponse = 
{
  id: number
  public_id: string
  record_code: string
  admission_cycle_id: string
  academic_year_id: string
  campus_id: string
  program_id: string
  code: string
  name: string
  opens_on: string
  closes_on: string
  application_window?: (string) | null
  status: "planned" | "open" | "closed"
  application_fee_amount: string
  offer_validity_days: number
  description?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
