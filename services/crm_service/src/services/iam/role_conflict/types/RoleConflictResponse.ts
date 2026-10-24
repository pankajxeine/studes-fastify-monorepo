
export type RoleConflictResponse = 
{
  id: number
  public_id: string
  record_code: string
  role_code_a: string
  role_code_b: string
  severity: string
  rationale: string
  created_at: string
  created_by?: (string) | null
}
