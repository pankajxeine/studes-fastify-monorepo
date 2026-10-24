
export type TripLogResponse = 
{
  id: number
  public_id: string
  record_code: string
  trip_log_id: string
  route_id: string
  vehicle_id: string
  driver_staff_id: string
  trip_date: string
  direction: string
  status: "scheduled" | "in_progress" | "completed" | "cancelled"
  started_at?: (string) | null
  ended_at?: (string) | null
  odometer_start_km?: (number) | null
  odometer_end_km?: (number) | null
  distance_km?: (number) | null
  last_route_stop_id?: (string) | null
  stop_checkins: unknown
  students_boarded: number
  delay_minutes: number
  incident_notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
