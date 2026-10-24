
export type FileUpdateRequest = 
{
  file_name: string
  mime_type: string
  size_bytes: number
  storage_provider: string
  storage_key: string
  checksum_sha256: (string) | null
  owner_module: string
  visibility: string
  scan_status: string
  description: (string) | null
  uploaded_by_user_id: (string) | null
  uploaded_at: string
  retention_until: (string) | null
}
