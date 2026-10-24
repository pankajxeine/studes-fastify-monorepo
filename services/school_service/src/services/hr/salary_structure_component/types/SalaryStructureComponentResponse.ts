
export type SalaryStructureComponentResponse = 
{
  id: number
  public_id: string
  record_code: string
  salary_structure_component_id: string
  salary_structure_id: string
  salary_component_code: string
  calculation_type: string
  fixed_amount?: (string) | null
  percentage?: (string) | null
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
