"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeIdentifier = escapeIdentifier;
/**
 * Safely escape PostgreSQL identifiers (schemas, tables, columns).
 * Prevents SQL injection by validating allowed characters.
 */
function escapeIdentifier(name) {
    // Allow only alphanumeric + underscore
    if (!/^[a-zA-Z0-9_]+$/.test(name)) {
        throw new Error(`Invalid identifier: ${name}`);
    }
    return `"${name}"`; // wrap in double quotes
}
