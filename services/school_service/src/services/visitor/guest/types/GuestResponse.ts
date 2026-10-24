
export type GuestResponse = 
{
  id: number
  public_id: string
  record_code: string
  guest_id: string
  person_id: string
  guest_type: string
  organization_name?: (string) | null
  designation?: (string) | null
  vendor_id?: (string) | null
  id_document_type?: (string) | null
  id_document_no?: (string) | null
  id_document_key?: (string) | null
  photo_file_id?: (string) | null
  vehicle_no?: (string) | null
  safety_induction_on?: (string) | null
  nda_signed_on?: (string) | null
  is_frequent_visitor: boolean
  is_active: boolean
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
