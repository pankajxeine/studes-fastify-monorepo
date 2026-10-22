
export type SubsRequest = 
{
  customer_id?: number
  subdomain?: string
  protocol?: string
  shortname?: string
  database_name?: string
  name?: string
  logo?: string
  cloud_print_logo?: string
  logo_zpl?: string
  site_logo?: string
  favicon_icon?: string
  mobile_logo?: string
  industry_id?: number
  package_id?: number
  environment_id?: number
  industry_environment_id?: number
  auth_key?: string
  decimal_value?: number
  s3_folder?: string
  status?: "Active" | "Inactive"
  site_created?: boolean
  allow_package_upgrade?: boolean
  permission_based_on?: "Role" | "User"
  source_of_creation?: "crm" | "cpanel" | "other"
  default_role?: number
  is_role_synced?: boolean
  language_id?: number
  currency_id?: number
  bundle_retail_price?: number
  billing_frequency?: "Monthly" | "Annually"
  signup_date?: string
  last_access?: string
}
