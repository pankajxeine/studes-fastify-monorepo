
export type WatchlistUpdateRequest = 
{
  person_id: (string) | null
  full_name: string
  date_of_birth: (string) | null
  id_document_type: (string) | null
  id_document_no: (string) | null
  id_document_key: (string) | null
  photo_file_id: (string) | null
  campus_id: (string) | null
  reason_category: string
  reason: string
  reference_no: (string) | null
  match_action: string
  severity: string
  valid_from: string
  valid_to: (string) | null
  validity: (string) | null
  added_by_user_id: string
  lifted_at: (string) | null
  lifted_by_user_id: (string) | null
  lift_reason: (string) | null
}
