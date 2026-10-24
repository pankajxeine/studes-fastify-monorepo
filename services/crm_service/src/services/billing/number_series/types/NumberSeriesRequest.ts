
export type NumberSeriesRequest = 
{
  legal_entity_id: string
  document_type: string
  fiscal_year: number
  prefix: string
  next_number?: number
  padding?: number
}
