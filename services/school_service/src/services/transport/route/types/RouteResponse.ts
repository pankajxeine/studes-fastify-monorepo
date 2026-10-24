
export type RouteResponse = 
{
  id: number
  public_id: string
  record_code: string
  route_id: string
  campus_id: string
  code: string
  name: string
  description?: (string) | null
  vehicle_id?: (string) | null
  driver_staff_id?: (string) | null
  attendant_staff_id?: (string) | null
  start_point: string
  end_point: string
  distance_km?: (number) | null
  pickup_start_time?: (string) | null
  drop_start_time?: (string) | null
  term_fee_amount: string
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
