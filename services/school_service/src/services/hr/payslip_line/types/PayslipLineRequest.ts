
export type PayslipLineRequest = 
{
  payslip_id: string
  salary_component_code: string
  kind: string
  amount: string
  calculation_note?: (string) | null
  sort_order?: number
}
