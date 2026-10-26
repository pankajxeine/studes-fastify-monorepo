"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamRolePermissionEntity = void 0;
exports.initIamRolePermissionEntity = initIamRolePermissionEntity;
const sequelize_1 = require("sequelize");
class IamRolePermissionEntity extends sequelize_1.Model {
}
exports.IamRolePermissionEntity = IamRolePermissionEntity;
function initIamRolePermissionEntity(sequelize) {
    IamRolePermissionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_role_permission')"),
        },
        roleCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_code',
            allowNull: false,
            references: { model: 'iam_role', key: 'role_code' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        permissionCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'permission_code',
            allowNull: false,
            references: { model: 'iam_permission', key: 'permission_code' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
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
        UNIQUE: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'UNIQUE',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'iam_role_permission',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return IamRolePermissionEntity;
}
