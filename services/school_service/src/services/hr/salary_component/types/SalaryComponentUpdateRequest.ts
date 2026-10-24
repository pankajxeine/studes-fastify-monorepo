
export type SalaryComponentUpdateRequest = 
{
  salary_component_code: (string) | null
  name: string
  kind: string
  description: (string) | null
  is_taxable: boolean
  is_statutory: boolean
  payslip_label: (string) | null
  sort_order: number
  is_active: boolean
}
