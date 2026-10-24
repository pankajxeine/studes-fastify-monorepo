
export type ItemCategoryUpdateRequest = 
{
  item_category_code: (string) | null
  name: string
  description: (string) | null
  is_consumable: boolean
  sort_order: number
  is_active: boolean
}
