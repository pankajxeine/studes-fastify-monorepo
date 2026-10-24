
export type PaymentUpdateRequest = 
{
  receipt_no: string
  campus_id: string
  payer_person_id: string
  student_id: (string) | null
  purpose: string
  payment_method: string
  status: string
  amount: string
  allocated_amount: string
  refunded_amount: string
  unallocated_amount: (number) | null
  paid_at: (string) | null
  reference_no: (string) | null
  bank_name: (string) | null
  gateway_name: (string) | null
  received_by_user_id: (string) | null
  receipt_file_id: (string) | null
  notes: (string) | null
  reversed_at: (string) | null
  reversal_reason: (string) | null
}
