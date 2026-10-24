
export type CanteenStaffAssignmentUpdateRequest = 
{
  canteen_outlet_id: string
  staff_id: string
  duty_role: string
  shift_start_time: (string) | null
  shift_end_time: (string) | null
  can_override_allergen: boolean
  valid_from: string
  valid_to: (string) | null
  validity: (string) | null
  notes: (string) | null
}
