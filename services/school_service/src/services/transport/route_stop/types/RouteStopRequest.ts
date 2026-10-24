
export type RouteStopRequest = 
{
  route_id: string
  stop_id: string
  stop_sequence: number
  pickup_time?: (string) | null
  drop_time?: (string) | null
  distance_from_campus_km?: (number) | null
  is_active?: boolean
}
