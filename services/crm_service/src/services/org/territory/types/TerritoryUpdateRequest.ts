
export type TerritoryUpdateRequest = 
{
  territory_code: string
  name: string
  parent_territory_id: (string) | null
  country_codes: (string) | null
  is_active: boolean
}
