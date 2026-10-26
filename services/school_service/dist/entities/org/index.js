"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const org_organization_entity_1 = require("./org_organization/org_organization.entity");
const org_campus_entity_1 = require("./org_campus/org_campus.entity");
const org_building_entity_1 = require("./org_building/org_building.entity");
const org_room_type_entity_1 = require("./org_room_type/org_room_type.entity");
const org_room_entity_1 = require("./org_room/org_room.entity");
const org_department_entity_1 = require("./org_department/org_department.entity");
const org_vendor_entity_1 = require("./org_vendor/org_vendor.entity");
const org_setting_entity_1 = require("./org_setting/org_setting.entity");
function createGeneratedModels(sequelize) {
    const models = {
        org_organization: (0, org_organization_entity_1.initOrgOrganizationEntity)(sequelize),
        org_campus: (0, org_campus_entity_1.initOrgCampusEntity)(sequelize),
        org_building: (0, org_building_entity_1.initOrgBuildingEntity)(sequelize),
        org_room_type: (0, org_room_type_entity_1.initOrgRoomTypeEntity)(sequelize),
        org_room: (0, org_room_entity_1.initOrgRoomEntity)(sequelize),
        org_department: (0, org_department_entity_1.initOrgDepartmentEntity)(sequelize),
        org_vendor: (0, org_vendor_entity_1.initOrgVendorEntity)(sequelize),
        org_setting: (0, org_setting_entity_1.initOrgSettingEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.org_campus.belongsTo(models.org_organization, { as: 'organization', foreignKey: 'organizationId', targetKey: 'organizationId' });
    models.org_organization.hasMany(models.org_campus, { as: 'orgCampus', foreignKey: 'organizationId', sourceKey: 'organizationId' });
    models.org_building.belongsTo(models.org_campus, { as: 'campus', foreignKey: 'campusId', targetKey: 'campusId' });
    models.org_campus.hasMany(models.org_building, { as: 'orgBuilding', foreignKey: 'campusId', sourceKey: 'campusId' });
    models.org_room.belongsTo(models.org_room_type, { as: 'roomTypeCode', foreignKey: 'roomTypeCode', targetKey: 'roomTypeCode', onUpdate: 'CASCADE' });
    models.org_room_type.hasMany(models.org_room, { as: 'orgRoom', foreignKey: 'roomTypeCode', sourceKey: 'roomTypeCode', onUpdate: 'CASCADE' });
    models.org_room.belongsTo(models.org_building, { as: 'building', foreignKey: 'buildingId', targetKey: 'buildingId', onUpdate: 'CASCADE' });
    models.org_building.hasMany(models.org_room, { as: 'orgRoom', foreignKey: 'buildingId', sourceKey: 'buildingId', onUpdate: 'CASCADE' });
    models.org_department.belongsTo(models.org_campus, { as: 'campus', foreignKey: 'campusId', targetKey: 'campusId' });
    models.org_campus.hasMany(models.org_department, { as: 'orgDepartment', foreignKey: 'campusId', sourceKey: 'campusId' });
    models.org_department.belongsTo(models.org_department, { as: 'parentDepartment', foreignKey: 'parentDepartmentId', targetKey: 'departmentId' });
    models.org_department.hasMany(models.org_department, { as: 'orgDepartment', foreignKey: 'parentDepartmentId', sourceKey: 'departmentId' });
    models.org_setting.belongsTo(models.org_campus, { as: 'campus', foreignKey: 'campusId', targetKey: 'campusId' });
    models.org_campus.hasMany(models.org_setting, { as: 'orgSetting', foreignKey: 'campusId', sourceKey: 'campusId' });
}
