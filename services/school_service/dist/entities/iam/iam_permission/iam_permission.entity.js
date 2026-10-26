"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamPermissionEntity = void 0;
exports.initIamPermissionEntity = initIamPermissionEntity;
const sequelize_1 = require("sequelize");
class IamPermissionEntity extends sequelize_1.Model {
}
exports.IamPermissionEntity = IamPermissionEntity;
function initIamPermissionEntity(sequelize) {
    IamPermissionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_permission')"),
        },
        permissionCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'permission_code',
            allowNull: true,
            unique: true,
        },
        module: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'module',
            allowNull: false,
        },
        resource: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'resource',
            allowNull: false,
        },
        action: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'action',
            allowNull: false,
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
        isSensitive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_sensitive',
            allowNull: false,
            defaultValue: false,
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
        tableName: 'iam_permission',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return IamPermissionEntity;
}
