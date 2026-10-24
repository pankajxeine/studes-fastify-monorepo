
export type SalaryComponentResponse = 
{
  id: number
  public_id: string
  record_code: string
  salary_component_code?: (string) | null
  name: string
  kind: string
  description?: (string) | null
  is_taxable: boolean
  is_statutory: boolean
  payslip_label?: (string) | null
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
