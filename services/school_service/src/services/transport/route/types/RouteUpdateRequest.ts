
export type RouteUpdateRequest = 
{
  campus_id: string
  code: string
  name: string
  description: (string) | null
  vehicle_id: (string) | null
  driver_staff_id: (string) | null
  attendant_staff_id: (string) | null
  start_point: string
  end_point: string
  distance_km: (number) | null
  pickup_start_time: (string) | null
  drop_start_time: (string) | null
  term_fee_amount: string
  is_active: boolean
}
