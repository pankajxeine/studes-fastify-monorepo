
export type AddonRequest = 
{
  application_id: string
  addon_code: string
  name: string
  description?: (string) | null
  max_quantity?: (number) | null
  purchase_mode?: string
  is_active?: boolean
}
