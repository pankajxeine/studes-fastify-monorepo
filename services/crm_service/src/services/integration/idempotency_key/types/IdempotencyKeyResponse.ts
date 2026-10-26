
export type IdempotencyKeyResponse = 
{
  record_code: string
  idempotency_key_id: string
  scope: string
  key: string
  request_hash: string
  response_code?: (number) | null
  response_body?: (unknown) | null
  created_at: string
  expires_at: string
}
