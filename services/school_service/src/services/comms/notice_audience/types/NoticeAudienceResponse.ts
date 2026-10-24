
export type NoticeAudienceResponse = 
{
  id: number
  public_id: string
  record_code: string
  notice_audience_id: string
  notice_id: string
  audience_type: string
  campus_id?: (string) | null
  role_code?: (string) | null
  program_id?: (string) | null
  grade_level_id?: (string) | null
  section_id?: (string) | null
  course_offering_id?: (string) | null
  person_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
