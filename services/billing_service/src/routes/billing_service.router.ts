import type { FastifyPluginAsync } from 'fastify'
import { BillingServiceService } from '../services/BillingServiceService'

const BillingServiceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingServiceService()

}

export default BillingServiceRoutes
