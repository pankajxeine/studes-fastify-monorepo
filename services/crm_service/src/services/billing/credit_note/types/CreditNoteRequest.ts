
export type CreditNoteRequest = 
{
  credit_note_number?: (string) | null
  invoice_id: string
  amount: string
  reason: string
  description?: (string) | null
  status?: string
  issued_at?: string
  issued_by_user_id: string
  approved_by_user_id?: (string) | null
  voided_at?: (string) | null
}
