
export type VehicleResponse = 
{
  id: number
  public_id: string
  record_code: string
  vehicle_id: string
  campus_id: string
  registration_no: string
  fleet_no: string
  vehicle_type: string
  make: string
  model: string
  manufacture_year: number
  seating_capacity: number
  fuel_type: string
  odometer_km: number
  gps_device_id?: (string) | null
  has_cctv: boolean
  has_speed_governor: boolean
  insurance_provider?: (string) | null
  insurance_policy_no?: (string) | null
  insurance_expiry_on: string
  fitness_certificate_no?: (string) | null
  fitness_expiry_on: string
  permit_no?: (string) | null
  permit_expiry_on?: (string) | null
  emission_certificate_no?: (string) | null
  emission_expiry_on?: (string) | null
  status: string
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
