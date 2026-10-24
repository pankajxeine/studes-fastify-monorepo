export function toModelAttributes(input: object): Record<string, unknown> {
    return Object.fromEntries(
        Object.entries(input).map(([key, value]) => [
            key.replace(/_([a-z])/g, (_match, character: string) => character.toUpperCase()),
            value,
        ])
    )
}

export function toApiAttributes<T>(attributes: Record<string, unknown>): T {
    return Object.fromEntries(
        Object.entries(attributes).map(([key, value]) => [
            key.replace(/[A-Z]/g, (character) => `_${character.toLowerCase()}`),
            value,
        ])
    ) as T
}