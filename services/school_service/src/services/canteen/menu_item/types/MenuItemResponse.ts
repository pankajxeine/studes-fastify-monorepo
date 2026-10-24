
export type MenuItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  menu_item_id: string
  canteen_outlet_id: string
  menu_category_code: string
  code: string
  name: string
  description?: (string) | null
  ingredients?: (string) | null
  portion_size?: (string) | null
  price_amount: string
  calories_kcal?: (number) | null
  spice_level: number
  is_vegetarian: boolean
  is_vegan: boolean
  is_halal: boolean
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
