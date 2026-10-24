
export type CanteenOutletResponse = 
{
  id: number
  public_id: string
  record_code: string
  canteen_outlet_id: string
  campus_id: string
  room_id: string
  code: string
  name: string
  outlet_type: string
  manager_staff_id?: (string) | null
  operator_vendor_id?: (string) | null
  opening_time: string
  closing_time: string
  pre_order_cutoff_time?: (string) | null
  seating_capacity?: (number) | null
  contact_phone?: (string) | null
  is_cash_accepted: boolean
  is_card_accepted: boolean
  is_wallet_accepted: boolean
  is_pre_order_enabled: boolean
  is_active: boolean
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
