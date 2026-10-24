
export type ApplicationDocumentRequest = 
{
  application_id: string
  document_type_code: string
  file_id?: (string) | null
  is_required?: boolean
  status?: "pending" | "received" | "verified" | "rejected"
  received_at?: (string) | null
  verified_at?: (string) | null
  verified_by_user_id?: (string) | null
  rejection_reason?: (string) | null
}
