export type Payment = 
{
  id: string
  invoice_id: string
  amount: number
  method: "card" | "bank_transfer" | "cash" | "online"
  paid_at: string
}
