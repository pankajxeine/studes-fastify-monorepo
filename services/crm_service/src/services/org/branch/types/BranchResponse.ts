
export type BranchResponse = 
{
  id: number
  public_id: string
  record_code: string
  branch_id: string
  branch_code: string
  name: string
  legal_entity_id: string
  territory_id?: (string) | null
  country_code: string
  timezone: string
  address?: (unknown) | null
  calendar_id?: (string) | null
  manager_user_id?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
