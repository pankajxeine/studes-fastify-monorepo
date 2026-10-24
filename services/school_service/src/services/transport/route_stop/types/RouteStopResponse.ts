
export type RouteStopResponse = 
{
  id: number
  public_id: string
  record_code: string
  route_stop_id: string
  route_id: string
  stop_id: string
  stop_sequence: number
  pickup_time?: (string) | null
  drop_time?: (string) | null
  distance_from_campus_km?: (number) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
