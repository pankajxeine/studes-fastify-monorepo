
export type BellScheduleUpdateRequest = 
{
  campus_id: string
  code: string
  name: string
  description: (string) | null
  applies_from: (string) | null
  applies_to: (string) | null
  validity: (string) | null
  is_default: boolean
  is_active: boolean
}
