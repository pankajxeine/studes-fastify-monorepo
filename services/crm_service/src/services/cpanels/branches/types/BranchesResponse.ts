
export type BranchesResponse = 
{
  id?: number
  name?: string
  address1?: string
  address2?: string
  notes?: string
  city?: string
  state_id?: number
  country_id?: number
  postal_code?: string
  status?: "Active" | "Inactive"
  created_by?: number
  updated_by?: number
  created_at?: string
  updated_at?: string
}
