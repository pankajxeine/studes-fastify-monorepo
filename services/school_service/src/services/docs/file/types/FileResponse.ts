
export type FileResponse = 
{
  id: number
  public_id: string
  record_code: string
  file_id: string
  file_name: string
  mime_type: string
  size_bytes: number
  storage_provider: string
  storage_key: string
  checksum_sha256?: (string) | null
  owner_module: string
  visibility: string
  scan_status: string
  description?: (string) | null
  uploaded_by_user_id?: (string) | null
  uploaded_at: string
  retention_until?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
