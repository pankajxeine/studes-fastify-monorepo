
export type CanteenStaffAssignmentResponse = 
{
  id: number
  public_id: string
  record_code: string
  canteen_staff_assignment_id: string
  canteen_outlet_id: string
  staff_id: string
  duty_role: string
  shift_start_time?: (string) | null
  shift_end_time?: (string) | null
  can_override_allergen: boolean
  valid_from: string
  valid_to?: (string) | null
  validity?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
