export type Invoice = 
{
  id: string
  tenant_id: string
  amount: number
  currency: string
  status: "pending" | "paid" | "void"
  issued_at: string
  due_at?: string
}
