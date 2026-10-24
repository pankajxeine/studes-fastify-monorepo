
export type DonationRequest = 
{
  donation_no: string
  donation_campaign_id?: (string) | null
  donor_person_id: string
  payment_id?: (string) | null
  amount: string
  status?: "pledged" | "received" | "refunded" | "cancelled"
  pledged_on?: string
  received_at?: (string) | null
  is_anonymous?: boolean
  dedication?: (string) | null
  donor_message?: (string) | null
  receipt_no?: (string) | null
  receipt_issued_at?: (string) | null
  cancelled_reason?: (string) | null
}
