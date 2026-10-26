"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const evnt_event_entity_1 = require("./evnt_event/evnt_event.entity");
const evnt_event_participant_entity_1 = require("./evnt_event_participant/evnt_event_participant.entity");
const evnt_room_booking_entity_1 = require("./evnt_room_booking/evnt_room_booking.entity");
const evnt_ptm_slot_entity_1 = require("./evnt_ptm_slot/evnt_ptm_slot.entity");
function createGeneratedModels(sequelize) {
    const models = {
        evnt_event: (0, evnt_event_entity_1.initEvntEventEntity)(sequelize),
        evnt_event_participant: (0, evnt_event_participant_entity_1.initEvntEventParticipantEntity)(sequelize),
        evnt_room_booking: (0, evnt_room_booking_entity_1.initEvntRoomBookingEntity)(sequelize),
        evnt_ptm_slot: (0, evnt_ptm_slot_entity_1.initEvntPtmSlotEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.evnt_event_participant.belongsTo(models.evnt_event, { as: 'event', foreignKey: 'eventId', targetKey: 'eventId', onDelete: 'CASCADE' });
    models.evnt_event.hasMany(models.evnt_event_participant, { as: 'evntEventParticipant', foreignKey: 'eventId', sourceKey: 'eventId', onDelete: 'CASCADE' });
    models.evnt_room_booking.belongsTo(models.evnt_event, { as: 'event', foreignKey: 'eventId', targetKey: 'eventId' });
    models.evnt_event.hasMany(models.evnt_room_booking, { as: 'evntRoomBooking', foreignKey: 'eventId', sourceKey: 'eventId' });
    models.evnt_ptm_slot.belongsTo(models.evnt_event, { as: 'event', foreignKey: 'eventId', targetKey: 'eventId', onDelete: 'CASCADE' });
    models.evnt_event.hasMany(models.evnt_ptm_slot, { as: 'evntPtmSlot', foreignKey: 'eventId', sourceKey: 'eventId', onDelete: 'CASCADE' });
}
