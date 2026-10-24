
export type StopRequest = 
{
  campus_id: string
  code: string
  name: string
  landmark?: (string) | null
  address_line?: (string) | null
  latitude?: (number) | null
  longitude?: (number) | null
  is_active?: boolean
}
