
export type BranchRequest = 
{
  branch_code: string
  name: string
  legal_entity_id: string
  territory_id?: (string) | null
  country_code: string
  timezone: string
  address?: (unknown) | null
  calendar_id?: (string) | null
  manager_user_id?: (string) | null
  is_active?: boolean
}
