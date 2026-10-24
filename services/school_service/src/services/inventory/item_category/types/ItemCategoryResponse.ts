
export type ItemCategoryResponse = 
{
  id: number
  public_id: string
  record_code: string
  item_category_code?: (string) | null
  name: string
  description?: (string) | null
  is_consumable: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
