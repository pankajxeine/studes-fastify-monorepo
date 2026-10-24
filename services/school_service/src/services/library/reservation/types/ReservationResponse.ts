
export type ReservationResponse = 
{
  id: number
  public_id: string
  record_code: string
  reservation_id: string
  book_id: string
  library_membership_id: string
  reserved_at: string
  status: string
  queue_position?: (number) | null
  book_copy_id?: (string) | null
  notified_at?: (string) | null
  hold_until?: (string) | null
  fulfilled_loan_id?: (string) | null
  fulfilled_at?: (string) | null
  cancelled_at?: (string) | null
  cancellation_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
