"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamRoleEntity = void 0;
exports.initIamRoleEntity = initIamRoleEntity;
const sequelize_1 = require("sequelize");
class IamRoleEntity extends sequelize_1.Model {
}
exports.IamRoleEntity = IamRoleEntity;
function initIamRoleEntity(sequelize) {
    IamRoleEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_role')"),
        },
        roleCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_code',
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        persona: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'persona',
            allowNull: false,
        },
        portal: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'portal',
            allowNull: false,
        },
        isOrgWide: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_org_wide',
            allowNull: false,
            defaultValue: false,
        },
        isSystem: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_system',
            allowNull: false,
            defaultValue: true,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'iam_role',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return IamRoleEntity;
}
