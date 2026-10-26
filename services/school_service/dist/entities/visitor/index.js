"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const visitor_guest_entity_1 = require("./visitor_guest/visitor_guest.entity");
const visitor_watchlist_entity_1 = require("./visitor_watchlist/visitor_watchlist.entity");
const visitor_visit_entity_1 = require("./visitor_visit/visitor_visit.entity");
const visitor_gate_pass_entity_1 = require("./visitor_gate_pass/visitor_gate_pass.entity");
const visitor_guest_lecture_entity_1 = require("./visitor_guest_lecture/visitor_guest_lecture.entity");
function createGeneratedModels(sequelize) {
    const models = {
        visitor_guest: (0, visitor_guest_entity_1.initVisitorGuestEntity)(sequelize),
        visitor_watchlist: (0, visitor_watchlist_entity_1.initVisitorWatchlistEntity)(sequelize),
        visitor_visit: (0, visitor_visit_entity_1.initVisitorVisitEntity)(sequelize),
        visitor_gate_pass: (0, visitor_gate_pass_entity_1.initVisitorGatePassEntity)(sequelize),
        visitor_guest_lecture: (0, visitor_guest_lecture_entity_1.initVisitorGuestLectureEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.visitor_visit.belongsTo(models.visitor_guest, { as: 'guest', foreignKey: 'guestId', targetKey: 'guestId' });
    models.visitor_guest.hasMany(models.visitor_visit, { as: 'visitorVisit', foreignKey: 'guestId', sourceKey: 'guestId' });
    models.visitor_visit.belongsTo(models.visitor_watchlist, { as: 'watchlist', foreignKey: 'watchlistId', targetKey: 'watchlistId' });
    models.visitor_watchlist.hasMany(models.visitor_visit, { as: 'visitorVisit', foreignKey: 'watchlistId', sourceKey: 'watchlistId' });
    models.visitor_guest_lecture.belongsTo(models.visitor_guest, { as: 'guest', foreignKey: 'guestId', targetKey: 'guestId' });
    models.visitor_guest.hasMany(models.visitor_guest_lecture, { as: 'visitorGuestLecture', foreignKey: 'guestId', sourceKey: 'guestId' });
    models.visitor_guest_lecture.belongsTo(models.visitor_visit, { as: 'visit', foreignKey: 'visitId', targetKey: 'visitId' });
    models.visitor_visit.hasMany(models.visitor_guest_lecture, { as: 'visitorGuestLecture', foreignKey: 'visitId', sourceKey: 'visitId' });
}
