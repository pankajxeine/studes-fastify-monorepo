
export type AcceptanceConfigurationResponse = 
{
  id: number
  public_id: string
  record_code: string
  acceptance_configuration_id: string
  tenant_application_id: string
  outlet_id: string
  mode_code: string
  merchant_account_id?: (string) | null
  pos_terminal_id?: (string) | null
  channel: "pos" | "web" | "mobile" | "backoffice"
  currency_code: string
  upi_flow?: ("intent" | "dynamic_qr" | "static_qr") | null
  upi_vpa?: (string) | null
  upi_verified_at?: (string) | null
  minimum_amount: number
  maximum_amount?: (number) | null
  capture_mode: "automatic" | "manual"
  is_enabled: boolean
  valid_from: string
  valid_to?: (string) | null
  created_at: string
  updated_at: string
}
