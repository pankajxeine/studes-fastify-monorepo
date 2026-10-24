
export type PartnerAgreementUpdateRequest = 
{
  partner_organization_id: string
  campus_id: (string) | null
  agreement_type: string
  reference_no: string
  title: string
  status: "draft" | "under_review" | "active" | "expired" | "terminated"
  valid_from: string
  valid_to: (string) | null
  validity: (string) | null
  is_auto_renew: boolean
  renewal_notice_days: (number) | null
  signed_on: (string) | null
  signed_by_user_id: (string) | null
  partner_signatory_name: (string) | null
  agreement_file_id: (string) | null
  terms_summary: (string) | null
  terminated_on: (string) | null
  termination_reason: (string) | null
}
