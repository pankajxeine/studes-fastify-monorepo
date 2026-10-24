import type { Sequelize } from 'sequelize'
import { initVisitorGuestEntity } from './visitor_guest/visitor_guest.entity'
import { initVisitorWatchlistEntity } from './visitor_watchlist/visitor_watchlist.entity'
import { initVisitorVisitEntity } from './visitor_visit/visitor_visit.entity'
import { initVisitorGatePassEntity } from './visitor_gate_pass/visitor_gate_pass.entity'
import { initVisitorGuestLectureEntity } from './visitor_guest_lecture/visitor_guest_lecture.entity'

export type GeneratedModels = {
  visitor_guest: ReturnType<typeof initVisitorGuestEntity>;
  visitor_watchlist: ReturnType<typeof initVisitorWatchlistEntity>;
  visitor_visit: ReturnType<typeof initVisitorVisitEntity>;
  visitor_gate_pass: ReturnType<typeof initVisitorGatePassEntity>;
  visitor_guest_lecture: ReturnType<typeof initVisitorGuestLectureEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      visitor_guest: initVisitorGuestEntity(sequelize),
      visitor_watchlist: initVisitorWatchlistEntity(sequelize),
      visitor_visit: initVisitorVisitEntity(sequelize),
      visitor_gate_pass: initVisitorGatePassEntity(sequelize),
      visitor_guest_lecture: initVisitorGuestLectureEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.visitor_visit.belongsTo(models.visitor_guest, { as: 'guest', foreignKey: 'guestId', targetKey: 'guestId' })
  models.visitor_guest.hasMany(models.visitor_visit, { as: 'visitorVisit', foreignKey: 'guestId', sourceKey: 'guestId' })
  models.visitor_visit.belongsTo(models.visitor_watchlist, { as: 'watchlist', foreignKey: 'watchlistId', targetKey: 'watchlistId' })
  models.visitor_watchlist.hasMany(models.visitor_visit, { as: 'visitorVisit', foreignKey: 'watchlistId', sourceKey: 'watchlistId' })
  models.visitor_guest_lecture.belongsTo(models.visitor_guest, { as: 'guest', foreignKey: 'guestId', targetKey: 'guestId' })
  models.visitor_guest.hasMany(models.visitor_guest_lecture, { as: 'visitorGuestLecture', foreignKey: 'guestId', sourceKey: 'guestId' })
  models.visitor_guest_lecture.belongsTo(models.visitor_visit, { as: 'visit', foreignKey: 'visitId', targetKey: 'visitId' })
  models.visitor_visit.hasMany(models.visitor_guest_lecture, { as: 'visitorGuestLecture', foreignKey: 'visitId', sourceKey: 'visitId' })
}
