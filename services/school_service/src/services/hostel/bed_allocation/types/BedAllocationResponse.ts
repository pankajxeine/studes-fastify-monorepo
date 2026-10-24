
export type BedAllocationResponse = 
{
  id: number
  public_id: string
  record_code: string
  bed_allocation_id: string
  bed_id: string
  student_id: string
  academic_year_id: string
  start_date: string
  end_date?: (string) | null
  stay?: (string) | null
  status: "reserved" | "active" | "ended" | "cancelled"
  checked_in_at?: (string) | null
  checked_out_at?: (string) | null
  allocated_by_user_id?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
