
export type TerritoryResponse = 
{
  record_code: string
  territory_id: string
  territory_code: string
  name: string
  parent_territory_id?: (string) | null
  country_codes?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
