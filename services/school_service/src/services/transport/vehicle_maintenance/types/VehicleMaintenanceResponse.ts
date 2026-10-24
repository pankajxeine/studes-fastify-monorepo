
export type VehicleMaintenanceResponse = 
{
  id: number
  public_id: string
  record_code: string
  vehicle_maintenance_id: string
  vehicle_id: string
  vendor_id?: (string) | null
  maintenance_type: string
  status: string
  scheduled_on: string
  started_on?: (string) | null
  completed_on?: (string) | null
  odometer_km?: (number) | null
  description: string
  cost_amount: string
  invoice_no?: (string) | null
  next_service_due_on?: (string) | null
  next_service_due_km?: (number) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
