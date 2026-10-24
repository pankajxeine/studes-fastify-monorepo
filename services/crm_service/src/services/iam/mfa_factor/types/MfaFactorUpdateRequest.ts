
export type MfaFactorUpdateRequest = 
{
  app_user_id: string
  kind: string
  label: (string) | null
  secret_ref: string
  webauthn_credential_id: (string) | null
  is_primary: boolean
  verified_at: (string) | null
  last_used_at: (string) | null
  revoked_at: (string) | null
}
