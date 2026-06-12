import { FastifyInstance } from "fastify";
import AuthRoutes from "./auth.router";
import CpanelRoutes from "./cpanel.router";
import Cpanels from "./cpanel.router";
import HealthRoutes from "./health.router";

export default async function registerRoutes(fastify: FastifyInstance) {
    await fastify.register(AuthRoutes);
    await fastify.register(CpanelRoutes);
    await fastify.register(HealthRoutes);
    await fastify.register(Cpanels);
}