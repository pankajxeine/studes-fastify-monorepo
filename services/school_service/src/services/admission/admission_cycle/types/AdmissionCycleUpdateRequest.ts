
export type AdmissionCycleUpdateRequest = 
{
  academic_year_id: string
  campus_id: string
  program_id: string
  code: string
  name: string
  opens_on: string
  closes_on: string
  application_window: (string) | null
  status: "planned" | "open" | "closed"
  application_fee_amount: string
  offer_validity_days: number
  description: (string) | null
}
