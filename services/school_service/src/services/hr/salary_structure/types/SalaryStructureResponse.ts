
export type SalaryStructureResponse = 
{
  id: number
  public_id: string
  record_code: string
  salary_structure_id: string
  campus_id?: (string) | null
  code: string
  name: string
  description?: (string) | null
  pay_frequency: string
  effective_from: string
  effective_to?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
