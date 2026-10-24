
export type LookupValueResponse = 
{
  id: number
  public_id: string
  record_code: string
  lookup_type_code: string
  value_code: string
  label: string
  description?: (string) | null
  metadata?: (unknown) | null
  sort_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}
