
export type CpanelCompaniesRequest = 
{
  name?: string
  date_format_id?: number
  timezone_id?: number
  currency_id?: number
  address1?: string
  address2?: string
  city?: string
  state_id?: number
  country_id?: number
  postal_code?: number
  phone?: number
  fax?: string
  email?: string
  website?: string
  title_tag?: string
  status?: string
  theme_json?: Record<string, unknown>
  application?: string
  logo?: string
  favicon_icon?: string
  loading_icon?: string
  bundle_name?: string
}
