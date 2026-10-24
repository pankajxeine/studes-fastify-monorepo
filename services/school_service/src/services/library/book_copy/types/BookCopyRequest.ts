
export type BookCopyRequest = 
{
  book_id: string
  campus_id: string
  room_id?: (string) | null
  accession_no: string
  barcode: string
  shelf_location?: (string) | null
  status?: string
  is_loanable?: boolean
  acquired_on: string
  acquisition_source?: string
  price_amount?: (string) | null
  vendor_id?: (string) | null
  condition_note?: (string) | null
  withdrawn_on?: (string) | null
}
