
export type BookCopyResponse = 
{
  id: number
  public_id: string
  record_code: string
  book_copy_id: string
  book_id: string
  campus_id: string
  room_id?: (string) | null
  accession_no: string
  barcode: string
  shelf_location?: (string) | null
  status: string
  is_loanable: boolean
  acquired_on: string
  acquisition_source: string
  price_amount?: (string) | null
  vendor_id?: (string) | null
  condition_note?: (string) | null
  withdrawn_on?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
