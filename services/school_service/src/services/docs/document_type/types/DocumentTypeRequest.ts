
export type DocumentTypeRequest = 
{
  document_type_code?: (string) | null
  name: string
  description?: (string) | null
  applies_to?: string
  is_identity?: boolean
  requires_verification?: boolean
  has_expiry?: boolean
  max_size_mb?: number
  allowed_mime_types?: string
  sort_order?: number
  is_active?: boolean
}
