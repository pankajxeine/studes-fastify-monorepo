import type { Sequelize } from 'sequelize'
import { initEvntEventEntity } from './evnt_event/evnt_event.entity'
import { initEvntEventParticipantEntity } from './evnt_event_participant/evnt_event_participant.entity'
import { initEvntRoomBookingEntity } from './evnt_room_booking/evnt_room_booking.entity'
import { initEvntPtmSlotEntity } from './evnt_ptm_slot/evnt_ptm_slot.entity'

export type GeneratedModels = {
  evnt_event: ReturnType<typeof initEvntEventEntity>;
  evnt_event_participant: ReturnType<typeof initEvntEventParticipantEntity>;
  evnt_room_booking: ReturnType<typeof initEvntRoomBookingEntity>;
  evnt_ptm_slot: ReturnType<typeof initEvntPtmSlotEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      evnt_event: initEvntEventEntity(sequelize),
      evnt_event_participant: initEvntEventParticipantEntity(sequelize),
      evnt_room_booking: initEvntRoomBookingEntity(sequelize),
      evnt_ptm_slot: initEvntPtmSlotEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.evnt_event_participant.belongsTo(models.evnt_event, { as: 'event', foreignKey: 'eventId', targetKey: 'eventId', onDelete: 'CASCADE' })
  models.evnt_event.hasMany(models.evnt_event_participant, { as: 'evntEventParticipant', foreignKey: 'eventId', sourceKey: 'eventId', onDelete: 'CASCADE' })
  models.evnt_room_booking.belongsTo(models.evnt_event, { as: 'event', foreignKey: 'eventId', targetKey: 'eventId' })
  models.evnt_event.hasMany(models.evnt_room_booking, { as: 'evntRoomBooking', foreignKey: 'eventId', sourceKey: 'eventId' })
  models.evnt_ptm_slot.belongsTo(models.evnt_event, { as: 'event', foreignKey: 'eventId', targetKey: 'eventId', onDelete: 'CASCADE' })
  models.evnt_event.hasMany(models.evnt_ptm_slot, { as: 'evntPtmSlot', foreignKey: 'eventId', sourceKey: 'eventId', onDelete: 'CASCADE' })
}
