import type { Sequelize } from 'sequelize'
import { initOrgOrganizationEntity } from './org_organization/org_organization.entity'
import { initOrgCampusEntity } from './org_campus/org_campus.entity'
import { initOrgBuildingEntity } from './org_building/org_building.entity'
import { initOrgRoomTypeEntity } from './org_room_type/org_room_type.entity'
import { initOrgRoomEntity } from './org_room/org_room.entity'
import { initOrgDepartmentEntity } from './org_department/org_department.entity'
import { initOrgVendorEntity } from './org_vendor/org_vendor.entity'
import { initOrgSettingEntity } from './org_setting/org_setting.entity'

export type GeneratedModels = {
  org_organization: ReturnType<typeof initOrgOrganizationEntity>;
  org_campus: ReturnType<typeof initOrgCampusEntity>;
  org_building: ReturnType<typeof initOrgBuildingEntity>;
  org_room_type: ReturnType<typeof initOrgRoomTypeEntity>;
  org_room: ReturnType<typeof initOrgRoomEntity>;
  org_department: ReturnType<typeof initOrgDepartmentEntity>;
  org_vendor: ReturnType<typeof initOrgVendorEntity>;
  org_setting: ReturnType<typeof initOrgSettingEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      org_organization: initOrgOrganizationEntity(sequelize),
      org_campus: initOrgCampusEntity(sequelize),
      org_building: initOrgBuildingEntity(sequelize),
      org_room_type: initOrgRoomTypeEntity(sequelize),
      org_room: initOrgRoomEntity(sequelize),
      org_department: initOrgDepartmentEntity(sequelize),
      org_vendor: initOrgVendorEntity(sequelize),
      org_setting: initOrgSettingEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.org_campus.belongsTo(models.org_organization, { as: 'organization', foreignKey: 'organizationId', targetKey: 'organizationId' })
  models.org_organization.hasMany(models.org_campus, { as: 'orgCampus', foreignKey: 'organizationId', sourceKey: 'organizationId' })
  models.org_building.belongsTo(models.org_campus, { as: 'campus', foreignKey: 'campusId', targetKey: 'campusId' })
  models.org_campus.hasMany(models.org_building, { as: 'orgBuilding', foreignKey: 'campusId', sourceKey: 'campusId' })
  models.org_room.belongsTo(models.org_room_type, { as: 'roomTypeCode', foreignKey: 'roomTypeCode', targetKey: 'roomTypeCode', onUpdate: 'CASCADE' })
  models.org_room_type.hasMany(models.org_room, { as: 'orgRoom', foreignKey: 'roomTypeCode', sourceKey: 'roomTypeCode', onUpdate: 'CASCADE' })
  models.org_room.belongsTo(models.org_building, { as: 'building', foreignKey: 'buildingId', targetKey: 'buildingId', onUpdate: 'CASCADE' })
  models.org_building.hasMany(models.org_room, { as: 'orgRoom', foreignKey: 'buildingId', sourceKey: 'buildingId', onUpdate: 'CASCADE' })
  models.org_department.belongsTo(models.org_campus, { as: 'campus', foreignKey: 'campusId', targetKey: 'campusId' })
  models.org_campus.hasMany(models.org_department, { as: 'orgDepartment', foreignKey: 'campusId', sourceKey: 'campusId' })
  models.org_department.belongsTo(models.org_department, { as: 'parentDepartment', foreignKey: 'parentDepartmentId', targetKey: 'departmentId' })
  models.org_department.hasMany(models.org_department, { as: 'orgDepartment', foreignKey: 'parentDepartmentId', sourceKey: 'departmentId' })
  models.org_setting.belongsTo(models.org_campus, { as: 'campus', foreignKey: 'campusId', targetKey: 'campusId' })
  models.org_campus.hasMany(models.org_setting, { as: 'orgSetting', foreignKey: 'campusId', sourceKey: 'campusId' })
}
