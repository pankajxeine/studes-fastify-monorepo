
export type AllergenRequest = 
{
  allergen_code?: (string) | null
  name: string
  description?: (string) | null
  is_major?: boolean
  sort_order?: number
  is_active?: boolean
}
