
export type PayslipLineResponse = 
{
  id: number
  public_id: string
  record_code: string
  payslip_line_id: string
  payslip_id: string
  salary_component_code: string
  kind: string
  amount: string
  calculation_note?: (string) | null
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
