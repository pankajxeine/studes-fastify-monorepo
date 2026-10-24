
export type ApprovalRequest = 
{
  request_id: string
  step_no: number
  approver_role_code: string
  decision?: string
  decided_by_user_id?: (string) | null
  decided_at?: (string) | null
  comment?: (string) | null
}
