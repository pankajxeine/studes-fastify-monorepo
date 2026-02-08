export type RunReportResponse = 
{
  report_key: string
  generated_at: string
  rows: Record<string, unknown>[]
}
