export type ExamCreateRequest = 
{
  offering_id: string
  exam_type: "midterm" | "final" | "quiz" | "assignment" | "practical"
  date: string
  max_score: number
}
