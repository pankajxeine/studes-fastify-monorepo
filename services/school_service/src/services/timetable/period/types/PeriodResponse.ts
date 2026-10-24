
export type PeriodResponse = 
{
  id: number
  public_id: string
  record_code: string
  period_id: string
  bell_schedule_id: string
  code: string
  name: string
  sequence_no: number
  start_time: string
  end_time: string
  is_break: boolean
  duration_minutes?: (number) | null
  time_span?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
