
export type MessMenuRequest = 
{
  hostel_id: string
  day_of_week: string
  meal: string
  menu_items: string
  vegetarian_option?: (string) | null
  allergen_notes?: (string) | null
  serving_start_time: string
  serving_end_time: string
  valid_from: string
  valid_to?: (string) | null
  validity?: (string) | null
}
