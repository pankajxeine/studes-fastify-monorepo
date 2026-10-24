
export type KycDocumentResponse = 
{
  id: number
  public_id: string
  record_code: string
  kyc_document_id: string
  account_id: string
  request_id?: (string) | null
  doc_type: string
  storage_ref: string
  status: string
  verified_by_user_id?: (string) | null
  verified_at?: (string) | null
  rejection_reason?: (string) | null
  expires_on?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
