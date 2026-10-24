
export type IssuedCertificateResponse = 
{
  id: number
  public_id: string
  record_code: string
  issued_certificate_id: string
  certificate_template_id: string
  person_id: string
  status: "requested" | "approved" | "issued" | "rejected" | "revoked"
  purpose: string
  requested_by_user_id?: (string) | null
  requested_at: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  certificate_no?: (string) | null
  verification_code?: (string) | null
  issued_by_user_id?: (string) | null
  issued_on?: (string) | null
  valid_until?: (string) | null
  file_id?: (string) | null
  merge_data: unknown
  rejection_reason?: (string) | null
  revoked_at?: (string) | null
  revocation_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
