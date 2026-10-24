
export type KycDocumentRequest = 
{
  account_id: string
  request_id?: (string) | null
  doc_type: string
  storage_ref: string
  status?: string
  verified_by_user_id?: (string) | null
  verified_at?: (string) | null
  rejection_reason?: (string) | null
  expires_on?: (string) | null
}
