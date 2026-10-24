
export type StudentTransportResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_transport_id: string
  student_id: string
  route_stop_id: string
  academic_year_id: string
  service_type: string
  start_date: string
  end_date?: (string) | null
  validity?: (string) | null
  status: string
  pickup_person_note?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
