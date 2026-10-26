"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamLoginAttemptEntity = void 0;
exports.initIamLoginAttemptEntity = initIamLoginAttemptEntity;
const sequelize_1 = require("sequelize");
class IamLoginAttemptEntity extends sequelize_1.Model {
}
exports.IamLoginAttemptEntity = IamLoginAttemptEntity;
function initIamLoginAttemptEntity(sequelize) {
    IamLoginAttemptEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_login_attempt')"),
        },
        loginAttemptId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'login_attempt_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        usernameEntered: {
            type: sequelize_1.DataTypes.STRING(254),
            field: 'username_entered',
            allowNull: false,
        },
        attemptedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'attempted_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        isSuccess: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_success',
            allowNull: false,
        },
        failureReason: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'failure_reason',
            allowNull: true,
        },
        ipAddress: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ip_address',
            allowNull: true,
        },
        userAgent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_agent',
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
        tableName: 'iam_login_attempt',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return IamLoginAttemptEntity;
}
