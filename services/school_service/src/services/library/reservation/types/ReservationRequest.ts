
export type ReservationRequest = 
{
  book_id: string
  library_membership_id: string
  reserved_at?: string
  status?: string
  queue_position?: (number) | null
  book_copy_id?: (string) | null
  notified_at?: (string) | null
  hold_until?: (string) | null
  fulfilled_loan_id?: (string) | null
  fulfilled_at?: (string) | null
  cancelled_at?: (string) | null
  cancellation_reason?: (string) | null
}
