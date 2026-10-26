"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamUserRoleEntity = void 0;
exports.initIamUserRoleEntity = initIamUserRoleEntity;
const sequelize_1 = require("sequelize");
class IamUserRoleEntity extends sequelize_1.Model {
}
exports.IamUserRoleEntity = IamUserRoleEntity;
function initIamUserRoleEntity(sequelize) {
    IamUserRoleEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_user_role')"),
        },
        userRoleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_role_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        roleCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_code',
            allowNull: false,
            references: { model: 'iam_role', key: 'role_code' },
            onUpdate: 'CASCADE',
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        grantedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'granted_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        grantedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'granted_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        revokedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'revoked_at',
            allowNull: true,
        },
        revokedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'revoked_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        revokeReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'revoke_reason',
            allowNull: true,
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
        tableName: 'iam_user_role',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return IamUserRoleEntity;
}
