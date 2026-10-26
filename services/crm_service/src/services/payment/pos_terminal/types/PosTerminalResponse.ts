
export type PosTerminalResponse = 
{
  record_code: string
  pos_terminal_id: string
  tenant_application_id: string
  outlet_id: string
  merchant_account_id: string
  terminal_code: string
  provider_terminal_ref: string
  device_serial: string
  manufacturer?: (string) | null
  model?: (string) | null
  connection_type: "cloud" | "lan" | "usb" | "bluetooth"
  pairing_secret_ref?: (string) | null
  status: "pending" | "active" | "disabled" | "retired"
  paired_at?: (string) | null
  last_seen_at?: (string) | null
  created_at: string
  updated_at: string
}
