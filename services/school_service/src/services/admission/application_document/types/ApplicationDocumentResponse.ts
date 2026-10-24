
export type ApplicationDocumentResponse = 
{
  id: number
  public_id: string
  record_code: string
  application_document_id: string
  application_id: string
  document_type_code: string
  file_id?: (string) | null
  is_required: boolean
  status: "pending" | "received" | "verified" | "rejected"
  received_at?: (string) | null
  verified_at?: (string) | null
  verified_by_user_id?: (string) | null
  rejection_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
