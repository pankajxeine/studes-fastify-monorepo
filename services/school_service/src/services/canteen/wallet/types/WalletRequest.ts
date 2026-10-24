
export type WalletRequest = 
{
  person_id: string
  balance_amount?: string
  daily_limit_amount?: (string) | null
  low_balance_alert_amount?: (string) | null
  status?: "active" | "frozen" | "closed"
  frozen_at?: (string) | null
  frozen_reason?: (string) | null
  frozen_by_user_id?: (string) | null
  opened_on?: string
  last_txn_at?: (string) | null
}
