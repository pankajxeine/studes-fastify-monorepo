import type { Sequelize } from 'sequelize'
import { initHstlHostelEntity } from './hstl_hostel/hstl_hostel.entity'
import { initHstlHostelRoomEntity } from './hstl_hostel_room/hstl_hostel_room.entity'
import { initHstlBedEntity } from './hstl_bed/hstl_bed.entity'
import { initHstlBedAllocationEntity } from './hstl_bed_allocation/hstl_bed_allocation.entity'
import { initHstlOutpassEntity } from './hstl_outpass/hstl_outpass.entity'
import { initHstlMessMenuEntity } from './hstl_mess_menu/hstl_mess_menu.entity'

export type GeneratedModels = {
  hstl_hostel: ReturnType<typeof initHstlHostelEntity>;
  hstl_hostel_room: ReturnType<typeof initHstlHostelRoomEntity>;
  hstl_bed: ReturnType<typeof initHstlBedEntity>;
  hstl_bed_allocation: ReturnType<typeof initHstlBedAllocationEntity>;
  hstl_outpass: ReturnType<typeof initHstlOutpassEntity>;
  hstl_mess_menu: ReturnType<typeof initHstlMessMenuEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      hstl_hostel: initHstlHostelEntity(sequelize),
      hstl_hostel_room: initHstlHostelRoomEntity(sequelize),
      hstl_bed: initHstlBedEntity(sequelize),
      hstl_bed_allocation: initHstlBedAllocationEntity(sequelize),
      hstl_outpass: initHstlOutpassEntity(sequelize),
      hstl_mess_menu: initHstlMessMenuEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.hstl_hostel_room.belongsTo(models.hstl_hostel, { as: 'hostel', foreignKey: 'hostelId', targetKey: 'hostelId' })
  models.hstl_hostel.hasMany(models.hstl_hostel_room, { as: 'hstlHostelRoom', foreignKey: 'hostelId', sourceKey: 'hostelId' })
  models.hstl_bed.belongsTo(models.hstl_hostel_room, { as: 'hostelRoom', foreignKey: 'hostelRoomId', targetKey: 'hostelRoomId', onDelete: 'CASCADE' })
  models.hstl_hostel_room.hasMany(models.hstl_bed, { as: 'hstlBed', foreignKey: 'hostelRoomId', sourceKey: 'hostelRoomId', onDelete: 'CASCADE' })
  models.hstl_bed_allocation.belongsTo(models.hstl_bed, { as: 'bed', foreignKey: 'bedId', targetKey: 'bedId' })
  models.hstl_bed.hasMany(models.hstl_bed_allocation, { as: 'hstlBedAllocation', foreignKey: 'bedId', sourceKey: 'bedId' })
  models.hstl_outpass.belongsTo(models.hstl_hostel, { as: 'hostel', foreignKey: 'hostelId', targetKey: 'hostelId' })
  models.hstl_hostel.hasMany(models.hstl_outpass, { as: 'hstlOutpass', foreignKey: 'hostelId', sourceKey: 'hostelId' })
  models.hstl_mess_menu.belongsTo(models.hstl_hostel, { as: 'hostel', foreignKey: 'hostelId', targetKey: 'hostelId' })
  models.hstl_hostel.hasMany(models.hstl_mess_menu, { as: 'hstlMessMenu', foreignKey: 'hostelId', sourceKey: 'hostelId' })
}
