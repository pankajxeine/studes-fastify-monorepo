
export type InvoiceLineResponse = 
{
  id: number
  public_id: string
  record_code: string
  invoice_line_id: string
  invoice_id: string
  line_no: number
  fee_head_code: string
  description: string
  quantity: number
  unit_amount: string
  gross_amount?: (number) | null
  discount_amount: string
  net_amount?: (number) | null
  student_concession_id?: (string) | null
  fee_structure_item_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
