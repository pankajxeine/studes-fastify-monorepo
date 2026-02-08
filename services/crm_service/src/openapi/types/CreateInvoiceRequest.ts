export type CreateInvoiceRequest = 
{
  tenant_id: string
  amount: number
  currency: string
  due_at?: string
}
