export type FeePaymentCreateRequest = 
{
  fee_assignment_id: string
  amount: number
  method: "cash" | "card" | "bank_transfer" | "upi" | "online"
}
