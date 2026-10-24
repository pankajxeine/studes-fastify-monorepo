
export type LookupValueUpdateRequest = 
{
  lookup_type_code: string
  value_code: string
  label: string
  description: (string) | null
  metadata: (unknown) | null
  sort_order: number
  is_active: boolean
}
