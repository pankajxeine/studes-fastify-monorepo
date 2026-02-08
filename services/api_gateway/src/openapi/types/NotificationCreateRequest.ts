export type NotificationCreateRequest = 
{
  channel: "email" | "sms" | "push"
  recipient: string
  message: string
}
