
export type FeeInstallmentResponse = 
{
  id: number
  public_id: string
  record_code: string
  fee_installment_id: string
  fee_structure_id: string
  installment_no: number
  name: string
  term_id?: (string) | null
  issue_on: string
  due_on: string
  amount: string
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
