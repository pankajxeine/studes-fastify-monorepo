
export type VehicleMaintenanceUpdateRequest = 
{
  vehicle_id: string
  vendor_id: (string) | null
  maintenance_type: string
  status: string
  scheduled_on: string
  started_on: (string) | null
  completed_on: (string) | null
  odometer_km: (number) | null
  description: string
  cost_amount: string
  invoice_no: (string) | null
  next_service_due_on: (string) | null
  next_service_due_km: (number) | null
  notes: (string) | null
}
