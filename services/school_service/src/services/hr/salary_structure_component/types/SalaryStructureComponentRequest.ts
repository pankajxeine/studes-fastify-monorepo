
export type SalaryStructureComponentRequest = 
{
  salary_structure_id: string
  salary_component_code: string
  calculation_type: string
  fixed_amount?: (string) | null
  percentage?: (string) | null
  sort_order?: number
}
