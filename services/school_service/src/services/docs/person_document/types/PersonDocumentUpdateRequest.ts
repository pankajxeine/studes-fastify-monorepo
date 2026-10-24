
export type PersonDocumentUpdateRequest = 
{
  person_id: string
  document_type_code: string
  file_id: string
  document_no: (string) | null
  issuing_authority: (string) | null
  issued_on: (string) | null
  expires_on: (string) | null
  verification_status: "pending" | "verified" | "rejected" | "expired"
  submitted_at: string
  verified_by_user_id: (string) | null
  verified_at: (string) | null
  rejection_reason: (string) | null
  notes: (string) | null
}
