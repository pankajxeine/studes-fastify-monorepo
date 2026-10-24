
export type DonationResponse = 
{
  id: number
  public_id: string
  record_code: string
  donation_id: string
  donation_no: string
  donation_campaign_id?: (string) | null
  donor_person_id: string
  payment_id?: (string) | null
  amount: string
  status: "pledged" | "received" | "refunded" | "cancelled"
  pledged_on: string
  received_at?: (string) | null
  is_anonymous: boolean
  dedication?: (string) | null
  donor_message?: (string) | null
  receipt_no?: (string) | null
  receipt_issued_at?: (string) | null
  cancelled_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
