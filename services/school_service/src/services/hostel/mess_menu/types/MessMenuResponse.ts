
export type MessMenuResponse = 
{
  id: number
  public_id: string
  record_code: string
  mess_menu_id: string
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
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
