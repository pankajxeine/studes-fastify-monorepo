type MetricsOptions = {
    includeTenant?: boolean;
    path?: string;
    requireTenant?: boolean;
    requireAuth?: boolean;
};
export declare function createMetricsPlugin(options?: MetricsOptions): import("fastify").FastifyPluginAsync<unknown, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault>;
export {};
