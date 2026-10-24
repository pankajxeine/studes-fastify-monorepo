
export type FeeInstallmentUpdateRequest = 
{
  fee_structure_id: string
  installment_no: number
  name: string
  term_id: (string) | null
  issue_on: string
  due_on: string
  amount: string
}
