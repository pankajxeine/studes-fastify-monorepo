
export type CurrenciesRequest = 
{
  id?: number
  name?: string
  code?: string
  symbol_right?: string
  symbol_left?: string
  value?: number
  status?: "Active" | "Inactive"
}
