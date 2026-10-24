
export type PersonDocumentResponse = 
{
  id: number
  public_id: string
  record_code: string
  person_document_id: string
  person_id: string
  document_type_code: string
  file_id: string
  document_no?: (string) | null
  issuing_authority?: (string) | null
  issued_on?: (string) | null
  expires_on?: (string) | null
  verification_status: "pending" | "verified" | "rejected" | "expired"
  submitted_at: string
  verified_by_user_id?: (string) | null
  verified_at?: (string) | null
  rejection_reason?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
