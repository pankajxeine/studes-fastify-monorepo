
export type InvoiceLineUpdateRequest = 
{
  invoice_id: string
  line_no: number
  fee_head_code: string
  description: string
  quantity: number
  unit_amount: string
  gross_amount: (number) | null
  discount_amount: string
  net_amount: (number) | null
  student_concession_id: (string) | null
  fee_structure_item_id: (string) | null
}
