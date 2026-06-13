/**
 * Safely escape PostgreSQL identifiers (schemas, tables, columns).
 * Prevents SQL injection by validating allowed characters.
 */
export function escapeIdentifier(name: string): string {
    // Allow only alphanumeric + underscore
    if (!/^[a-zA-Z0-9_]+$/.test(name)) {
        throw new Error(`Invalid identifier: ${name}`);
    }
    return `"${name}"`; // wrap in double quotes
}
