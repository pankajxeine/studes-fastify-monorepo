
export type CertificateTemplateResponse = 
{
  id: number
  public_id: string
  record_code: string
  certificate_template_id: string
  campus_id?: (string) | null
  code: string
  name: string
  certificate_type: string
  body_template: string
  template_file_id?: (string) | null
  number_prefix: string
  validity_days?: (number) | null
  requires_approval: boolean
  signatory_title: string
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
