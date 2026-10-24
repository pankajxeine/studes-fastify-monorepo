
export type MenuItemRequest = 
{
  canteen_outlet_id: string
  menu_category_code: string
  code: string
  name: string
  description?: (string) | null
  ingredients?: (string) | null
  portion_size?: (string) | null
  price_amount: string
  calories_kcal?: (number) | null
  spice_level?: number
  is_vegetarian?: boolean
  is_vegan?: boolean
  is_halal?: boolean
  is_active?: boolean
}
