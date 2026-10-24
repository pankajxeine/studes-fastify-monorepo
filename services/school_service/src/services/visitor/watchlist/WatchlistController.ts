import type { WatchlistRequest } from './types/WatchlistRequest'
import type { WatchlistUpdateRequest } from './types/WatchlistUpdateRequest'
import type { WatchlistResponse } from './types/WatchlistResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface WatchlistController {
  listWatchlist(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WatchlistResponse[]>>>
  createWatchlist(app: FastifyInstance, input: WatchlistRequest, request?: FastifyRequest): Promise<WatchlistResponse>
  getWatchlistById(app: FastifyInstance, request?: FastifyRequest): Promise<WatchlistResponse>
  updateWatchlist(app: FastifyInstance, input: WatchlistUpdateRequest, request?: FastifyRequest): Promise<WatchlistResponse>
  deleteWatchlist(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
