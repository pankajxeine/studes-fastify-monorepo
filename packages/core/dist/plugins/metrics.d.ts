import { FastifyInstance } from 'fastify';
type MetricsOptions = {
    includeTenant?: boolean;
    path?: string;
    requireTenant?: boolean;
    requireAuth?: boolean;
};
export declare function createMetricsPlugin(options?: MetricsOptions): (app: FastifyInstance) => Promise<void>;
export { };
