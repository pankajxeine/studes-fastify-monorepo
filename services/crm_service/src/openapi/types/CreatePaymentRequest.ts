export type CreatePaymentRequest = 
{
  invoice_id: string
  amount: number
  method: "card" | "bank_transfer" | "cash" | "online"
}
