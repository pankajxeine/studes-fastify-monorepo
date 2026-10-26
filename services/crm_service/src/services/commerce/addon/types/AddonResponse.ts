
export type AddonResponse = 
{
  record_code: string
  addon_id: string
  application_id: string
  addon_code: string
  name: string
  description?: (string) | null
  max_quantity?: (number) | null
  purchase_mode: string
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
