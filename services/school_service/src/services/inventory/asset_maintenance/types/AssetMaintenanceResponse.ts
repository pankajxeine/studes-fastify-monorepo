
export type AssetMaintenanceResponse = 
{
  id: number
  public_id: string
  record_code: string
  asset_maintenance_id: string
  asset_id: string
  vendor_id?: (string) | null
  maintenance_type: string
  status: string
  reported_on: string
  scheduled_on?: (string) | null
  completed_on?: (string) | null
  issue_description: string
  work_done?: (string) | null
  cost_amount: string
  is_under_warranty: boolean
  reported_by_user_id?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
