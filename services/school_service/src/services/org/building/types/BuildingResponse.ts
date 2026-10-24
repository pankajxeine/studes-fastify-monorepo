
export type BuildingResponse = 
{
  id: number
  public_id: string
  record_code: string
  building_id: string
  campus_id: string
  code: string
  name: string
  floors: number
  year_built?: (number) | null
  has_lift: boolean
  is_accessible: boolean
  is_active: boolean
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
