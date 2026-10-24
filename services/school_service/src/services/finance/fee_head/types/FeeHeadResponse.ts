
export type FeeHeadResponse = 
{
  id: number
  public_id: string
  record_code: string
  fee_head_code?: (string) | null
  name: string
  description?: (string) | null
  is_refundable: boolean
  gl_account_code?: (string) | null
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
