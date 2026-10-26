"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toModelAttributes = toModelAttributes;
exports.toApiAttributes = toApiAttributes;
function toModelAttributes(input) {
    return Object.fromEntries(Object.entries(input).map(([key, value]) => [
        key.replace(/_([a-z])/g, (_match, character) => character.toUpperCase()),
        value,
    ]));
}
function toApiAttributes(attributes) {
    return Object.fromEntries(Object.entries(attributes).map(([key, value]) => [
        key.replace(/[A-Z]/g, (character) => `_${character.toLowerCase()}`),
        value,
    ]));
}
