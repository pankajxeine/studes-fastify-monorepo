
export type PartnerOrganizationResponse = 
{
  id: number
  public_id: string
  record_code: string
  partner_organization_id: string
  partner_type_code: string
  code: string
  name: string
  legal_name?: (string) | null
  industry?: (string) | null
  website_url?: (string) | null
  email?: (string) | null
  phone?: (string) | null
  address_line1?: (string) | null
  address_line2?: (string) | null
  city?: (string) | null
  state_region?: (string) | null
  postal_code?: (string) | null
  country_code?: (string) | null
  tax_registration_no?: (string) | null
  relationship_manager_staff_id?: (string) | null
  logo_file_id?: (string) | null
  partner_since_on?: (string) | null
  is_active: boolean
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
