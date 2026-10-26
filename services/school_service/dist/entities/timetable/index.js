"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const ttbl_bell_schedule_entity_1 = require("./ttbl_bell_schedule/ttbl_bell_schedule.entity");
const ttbl_period_entity_1 = require("./ttbl_period/ttbl_period.entity");
const ttbl_timetable_entry_entity_1 = require("./ttbl_timetable_entry/ttbl_timetable_entry.entity");
const ttbl_substitution_entity_1 = require("./ttbl_substitution/ttbl_substitution.entity");
function createGeneratedModels(sequelize) {
    const models = {
        ttbl_bell_schedule: (0, ttbl_bell_schedule_entity_1.initTtblBellScheduleEntity)(sequelize),
        ttbl_period: (0, ttbl_period_entity_1.initTtblPeriodEntity)(sequelize),
        ttbl_timetable_entry: (0, ttbl_timetable_entry_entity_1.initTtblTimetableEntryEntity)(sequelize),
        ttbl_substitution: (0, ttbl_substitution_entity_1.initTtblSubstitutionEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.ttbl_period.belongsTo(models.ttbl_bell_schedule, { as: 'bellSchedule', foreignKey: 'bellScheduleId', targetKey: 'bellScheduleId', onDelete: 'CASCADE' });
    models.ttbl_bell_schedule.hasMany(models.ttbl_period, { as: 'ttblPeriod', foreignKey: 'bellScheduleId', sourceKey: 'bellScheduleId', onDelete: 'CASCADE' });
    models.ttbl_timetable_entry.belongsTo(models.ttbl_period, { as: 'period', foreignKey: 'periodId', targetKey: 'periodId' });
    models.ttbl_period.hasMany(models.ttbl_timetable_entry, { as: 'ttblTimetableEntry', foreignKey: 'periodId', sourceKey: 'periodId' });
    models.ttbl_substitution.belongsTo(models.ttbl_timetable_entry, { as: 'timetableEntry', foreignKey: 'timetableEntryId', targetKey: 'timetableEntryId' });
    models.ttbl_timetable_entry.hasMany(models.ttbl_substitution, { as: 'ttblSubstitution', foreignKey: 'timetableEntryId', sourceKey: 'timetableEntryId' });
}
