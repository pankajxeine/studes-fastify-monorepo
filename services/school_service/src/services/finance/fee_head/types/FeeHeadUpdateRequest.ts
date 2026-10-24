
export type FeeHeadUpdateRequest = 
{
  fee_head_code: (string) | null
  name: string
  description: (string) | null
  is_refundable: boolean
  gl_account_code: (string) | null
  sort_order: number
  is_active: boolean
}
