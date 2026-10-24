
export type StockTransactionResponse = 
{
  id: number
  public_id: string
  record_code: string
  stock_transaction_id: string
  txn_no: string
  item_id: string
  campus_id: string
  room_id: string
  to_room_id?: (string) | null
  txn_type: string
  quantity: number
  quantity_delta?: (number) | null
  unit_cost_amount: string
  total_cost_amount?: (number) | null
  balance_after: number
  purchase_order_line_id?: (string) | null
  issued_to_person_id?: (string) | null
  reference_no?: (string) | null
  reason?: (string) | null
  txn_at: string
  performed_by_user_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
