
export type WalletTransactionRequest = 
{
  wallet_id: string
  txn_type: "top_up" | "purchase" | "refund" | "adjustment"
  txn_amount: number
  balance_after_amount?: string
  payment_id?: (string) | null
  canteen_order_id?: (string) | null
  reverses_wallet_transaction_id?: (string) | null
  txn_at?: string
  description?: (string) | null
  performed_by_user_id?: (string) | null
}
