
export type ApprovalRuleResponse = 
{
  record_code: string
  approval_rule_id: string
  step_no: number
  approver_role_code: string
  applies_if: string
  threshold?: (number) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
}
