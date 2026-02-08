export type UpdateEmailSettingsRequest = 
{
  provider?: "smtp" | "sendgrid" | "ses"
  from_email?: string
  from_name?: string
  smtp_host?: string
  smtp_port?: number
  smtp_username?: string
  smtp_password?: string
}
