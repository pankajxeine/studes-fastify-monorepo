
export type SalaryStructureRequest = 
{
  campus_id?: (string) | null
  code: string
  name: string
  description?: (string) | null
  pay_frequency?: string
  effective_from: string
  effective_to?: (string) | null
  is_active?: boolean
}
