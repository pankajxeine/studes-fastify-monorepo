
export type AllergenResponse = 
{
  id: number
  public_id: string
  record_code: string
  allergen_code?: (string) | null
  name: string
  description?: (string) | null
  is_major: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
