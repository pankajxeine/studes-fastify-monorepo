
export type ImmunizationUpdateRequest = 
{
  person_id: string
  vaccine_name: string
  dose_no: number
  administered_on: string
  next_due_on: (string) | null
  provider: (string) | null
  batch_no: (string) | null
  file_id: (string) | null
  verified_by_staff_id: (string) | null
  notes: (string) | null
}
