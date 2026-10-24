
export type IncidentCategoryUpdateRequest = 
{
  incident_category_code: (string) | null
  name: string
  description: (string) | null
  severity: number
  sort_order: number
  is_active: boolean
}
