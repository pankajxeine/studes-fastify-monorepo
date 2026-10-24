
export type DepartmentUpdateRequest = 
{
  campus_id: (string) | null
  parent_department_id: (string) | null
  code: string
  name: string
  kind: string
  head_staff_id: (string) | null
  email: (string) | null
  phone: (string) | null
  is_active: boolean
}
