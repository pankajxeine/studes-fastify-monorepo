
export type PlacementDriveRequest = 
{
  partner_organization_id: string
  campus_id: string
  academic_year_id: string
  coordinator_staff_id: string
  posted_by_partner_contact_id?: (string) | null
  code: string
  title: string
  drive_kind: string
  role_title: string
  job_description?: (string) | null
  work_location?: (string) | null
  work_mode?: string
  positions_count?: number
  ctc_min_amount?: (string) | null
  ctc_max_amount?: (string) | null
  stipend_amount?: (string) | null
  engagement_start_on?: (string) | null
  engagement_end_on?: (string) | null
  registration_opens_on: string
  registration_closes_on: string
  status?: "draft" | "open" | "closed" | "in_progress" | "completed" | "cancelled"
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  cancellation_reason?: (string) | null
  notes?: (string) | null
}
