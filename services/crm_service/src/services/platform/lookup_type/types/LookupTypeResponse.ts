
export type LookupTypeResponse = 
{
  id: number
  public_id: string
  record_code: string
  lookup_type_code: string
  name: string
  description?: (string) | null
  is_system: boolean
  created_at: string
  updated_at: string
}
