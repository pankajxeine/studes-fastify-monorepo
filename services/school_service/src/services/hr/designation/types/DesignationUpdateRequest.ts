
export type DesignationUpdateRequest = 
{
  designation_code: (string) | null
  name: string
  staff_category: string
  description: (string) | null
  sort_order: number
  is_active: boolean
}
