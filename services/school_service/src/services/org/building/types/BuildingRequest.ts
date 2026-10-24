
export type BuildingRequest = 
{
  campus_id: string
  code: string
  name: string
  floors?: number
  year_built?: (number) | null
  has_lift?: boolean
  is_accessible?: boolean
  is_active?: boolean
  notes?: (string) | null
}
