
export type InquirySourceResponse = 
{
  id: number
  public_id: string
  record_code: string
  inquiry_source_code?: (string) | null
  name: string
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
