
export type InstituteDomainsResponse = 
{
  id?: number
  institute_id?: number
  domain?: string
  schema_name?: string
  is_primary?: boolean
  status?: "Active" | "Inactive"
  created_at?: string
  updated_at?: string
}
