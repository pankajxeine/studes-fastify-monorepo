
export type GenderResponse = 
{
  id: number
  public_id: string
  record_code: string
  gender_code?: (string) | null
  name: string
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
