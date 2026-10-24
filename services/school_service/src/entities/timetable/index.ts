import type { Sequelize } from 'sequelize'
import { initTtblBellScheduleEntity } from './ttbl_bell_schedule/ttbl_bell_schedule.entity'
import { initTtblPeriodEntity } from './ttbl_period/ttbl_period.entity'
import { initTtblTimetableEntryEntity } from './ttbl_timetable_entry/ttbl_timetable_entry.entity'
import { initTtblSubstitutionEntity } from './ttbl_substitution/ttbl_substitution.entity'

export type GeneratedModels = {
  ttbl_bell_schedule: ReturnType<typeof initTtblBellScheduleEntity>;
  ttbl_period: ReturnType<typeof initTtblPeriodEntity>;
  ttbl_timetable_entry: ReturnType<typeof initTtblTimetableEntryEntity>;
  ttbl_substitution: ReturnType<typeof initTtblSubstitutionEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      ttbl_bell_schedule: initTtblBellScheduleEntity(sequelize),
      ttbl_period: initTtblPeriodEntity(sequelize),
      ttbl_timetable_entry: initTtblTimetableEntryEntity(sequelize),
      ttbl_substitution: initTtblSubstitutionEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.ttbl_period.belongsTo(models.ttbl_bell_schedule, { as: 'bellSchedule', foreignKey: 'bellScheduleId', targetKey: 'bellScheduleId', onDelete: 'CASCADE' })
  models.ttbl_bell_schedule.hasMany(models.ttbl_period, { as: 'ttblPeriod', foreignKey: 'bellScheduleId', sourceKey: 'bellScheduleId', onDelete: 'CASCADE' })
  models.ttbl_timetable_entry.belongsTo(models.ttbl_period, { as: 'period', foreignKey: 'periodId', targetKey: 'periodId' })
  models.ttbl_period.hasMany(models.ttbl_timetable_entry, { as: 'ttblTimetableEntry', foreignKey: 'periodId', sourceKey: 'periodId' })
  models.ttbl_substitution.belongsTo(models.ttbl_timetable_entry, { as: 'timetableEntry', foreignKey: 'timetableEntryId', targetKey: 'timetableEntryId' })
  models.ttbl_timetable_entry.hasMany(models.ttbl_substitution, { as: 'ttblSubstitution', foreignKey: 'timetableEntryId', sourceKey: 'timetableEntryId' })
}
