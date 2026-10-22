
export type HardwaresResponse = 
{
  id?: number
  device_id?: number
  customer_id?: number
  pos_tsys_setting_id?: number
  pos_expinet_terminal_id?: number
  pos_verifone_setting_id?: number
  purchase_date?: string
  sold_by?: string
  terminal_id?: string
  tracking_number?: string
  delivery_status?: "Cancelled" | "Delivered" | "Ordered" | "Shipped"
  shipping_method_id?: number
  price?: number
  notes?: string
  serial_number?: string
  transaction_id?: string
  user_id?: string
  api_key?: string
  hash_key?: string
  location_id?: string
  mid?: string
  virtual_terminal?: string
  user_name?: string
  password?: string
  developer_id?: string
  terminal_name?: string
  terminal_type?: "Auto_fuel_dispenser" | "Auto_teller_machine" | "Call_centre" | "Electronic_cash_register" | "Inflight_commerce_terminal" | "Inter_voice_response" | "Kiosk" | "Mobile" | "Point_of_sale" | "Rf_device" | "Standalone" | "Ticket" | "Unattended" | "Unspecified" | "Virtual"
  terminal_status?: "Active" | "Inactive"
  verifone_order_id?: string
  device_id_value?: string
  software_id?: number
  store_id?: number
  store_number?: string
  terminal_number?: string
  timezone?: string
  is_store_address?: boolean
  created_at?: string
  updated_at?: string
  created_by?: number
  updated_by?: number
}
