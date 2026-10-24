
export type VisitResponse = 
{
  id: number
  public_id: string
  record_code: string
  visit_id: string
  visit_no: string
  guest_id: string
  campus_id: string
  host_person_id?: (string) | null
  purpose: string
  purpose_detail?: (string) | null
  status: string
  check_in_method?: (string) | null
  expected_at?: (string) | null
  expected_until?: (string) | null
  pre_registered_by_user_id?: (string) | null
  party_size: number
  destination_room_id?: (string) | null
  escort_person_id?: (string) | null
  badge_no?: (string) | null
  vehicle_no?: (string) | null
  items_declared?: (string) | null
  checked_in_at?: (string) | null
  checked_in_by_user_id?: (string) | null
  checked_out_at?: (string) | null
  checked_out_by_user_id?: (string) | null
  watchlist_id?: (string) | null
  denied_reason?: (string) | null
  cancelled_reason?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
