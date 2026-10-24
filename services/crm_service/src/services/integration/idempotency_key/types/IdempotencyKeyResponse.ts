
export type IdempotencyKeyResponse = 
{
  id: number
  public_id: string
  record_code: string
  scope: string
  key: string
  request_hash: string
  response_code?: (number) | null
  response_body?: (unknown) | null
  created_at: string
  expires_at: string
}
