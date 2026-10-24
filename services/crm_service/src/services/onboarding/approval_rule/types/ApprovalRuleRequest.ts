
export type ApprovalRuleRequest = 
{
  step_no: number
  approver_role_code: string
  applies_if: string
  threshold?: (number) | null
  is_active?: boolean
}
