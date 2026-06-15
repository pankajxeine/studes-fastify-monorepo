import type { FastifyPluginAsync } from 'fastify'
import { AdminUsersService } from '../services/admin_users/AdminUsersService'

const AdminUsersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AdminUsersService()

}

export default AdminUsersRoutes
