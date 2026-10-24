
export type CertificateTemplateRequest = 
{
  campus_id?: (string) | null
  code: string
  name: string
  certificate_type: string
  body_template: string
  template_file_id?: (string) | null
  number_prefix: string
  validity_days?: (number) | null
  requires_approval?: boolean
  signatory_title?: string
  is_active?: boolean
}
