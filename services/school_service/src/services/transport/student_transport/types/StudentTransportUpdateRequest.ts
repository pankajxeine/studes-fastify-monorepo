
export type StudentTransportUpdateRequest = 
{
  student_id: string
  route_stop_id: string
  academic_year_id: string
  service_type: string
  start_date: string
  end_date: (string) | null
  validity: (string) | null
  status: string
  pickup_person_note: (string) | null
  notes: (string) | null
}
