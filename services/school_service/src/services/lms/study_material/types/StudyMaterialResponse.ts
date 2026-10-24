
export type StudyMaterialResponse = 
{
  id: number
  public_id: string
  record_code: string
  study_material_id: string
  course_offering_id: string
  lesson_plan_id?: (string) | null
  title: string
  description?: (string) | null
  material_type: string
  file_id?: (string) | null
  external_url?: (string) | null
  unit_title?: (string) | null
  uploaded_by_user_id: string
  is_published: boolean
  published_at?: (string) | null
  available_from?: (string) | null
  available_until?: (string) | null
  availability?: (string) | null
  view_count: number
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
