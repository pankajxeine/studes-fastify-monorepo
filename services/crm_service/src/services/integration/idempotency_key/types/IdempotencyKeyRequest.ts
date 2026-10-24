
export type IdempotencyKeyRequest = 
{
  scope: string
  key: string
  request_hash: string
  response_code?: (number) | null
  response_body?: (unknown) | null
  expires_at?: string
}
