
export type PeriodRequest = 
{
  bell_schedule_id: string
  code: string
  name: string
  sequence_no: number
  start_time: string
  end_time: string
  is_break?: boolean
  duration_minutes?: (number) | null
  time_span?: (string) | null
}
