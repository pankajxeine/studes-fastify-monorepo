"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgDepartmentEntity = void 0;
exports.initOrgDepartmentEntity = initOrgDepartmentEntity;
const sequelize_1 = require("sequelize");
class OrgDepartmentEntity extends sequelize_1.Model {
}
exports.OrgDepartmentEntity = OrgDepartmentEntity;
function initOrgDepartmentEntity(sequelize) {
    OrgDepartmentEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('org_department')"),
        },
        departmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'department_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        parentDepartmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'parent_department_id',
            allowNull: true,
            references: { model: 'org_department', key: 'department_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        kind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'kind',
            allowNull: false,
        },
        headStaffId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'head_staff_id',
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email',
            allowNull: true,
        },
        phone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'phone',
            allowNull: true,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'org_department',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'code'] }
        ]
    });
    return OrgDepartmentEntity;
}
