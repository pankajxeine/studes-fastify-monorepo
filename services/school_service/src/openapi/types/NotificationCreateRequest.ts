export type NotificationCreateRequest = 
{
  title: string
  message: string
  channel: "email" | "sms" | "push" | "in_app"
}
