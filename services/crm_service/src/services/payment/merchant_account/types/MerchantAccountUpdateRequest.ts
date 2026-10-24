
export type MerchantAccountUpdateRequest = 
{
  tenant_application_id: string
  name: string
  provider_code: string
  provider_merchant_ref: string
  environment: "test" | "live"
  currency_code: string
  credential_secret_ref: string
  webhook_secret_ref: string
  settlement_account_ref: (string) | null
  status: "draft" | "active" | "suspended" | "closed"
  verified_at: (string) | null
}
