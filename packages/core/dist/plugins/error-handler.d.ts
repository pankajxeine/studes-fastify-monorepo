import { FastifyInstance } from "fastify";
type ErrorHandlerOptions = {
    includeZod?: boolean;
};
export declare function registerErrorHandler(app: FastifyInstance, options?: ErrorHandlerOptions): void;
export {};
