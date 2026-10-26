export function verifyDbSchema(schema: string | null | undefined): asserts schema is string {
    if (!schema) throw new Error('schema missing from request context')
}

export function verifyDbModel(model?: any): void {
    if (!model) throw new Error('db model missing from app context')
}
