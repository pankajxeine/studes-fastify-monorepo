
export type RoleConflictResponse = 
{
  record_code: string
  role_conflict_id: string
  role_code_a: string
  role_code_b: string
  severity: string
  rationale: string
  created_at: string
  created_by?: (string) | null
}
