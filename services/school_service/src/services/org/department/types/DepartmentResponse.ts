
export type DepartmentResponse = 
{
  id: number
  public_id: string
  record_code: string
  department_id: string
  campus_id?: (string) | null
  parent_department_id?: (string) | null
  code: string
  name: string
  kind: string
  head_staff_id?: (string) | null
  email?: (string) | null
  phone?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
