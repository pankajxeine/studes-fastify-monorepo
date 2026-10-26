"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamPasswordResetTokenEntity = void 0;
exports.initIamPasswordResetTokenEntity = initIamPasswordResetTokenEntity;
const sequelize_1 = require("sequelize");
class IamPasswordResetTokenEntity extends sequelize_1.Model {
}
exports.IamPasswordResetTokenEntity = IamPasswordResetTokenEntity;
function initIamPasswordResetTokenEntity(sequelize) {
    IamPasswordResetTokenEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_password_reset_token')"),
        },
        passwordResetTokenId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'password_reset_token_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
            onDelete: 'CASCADE',
        },
        tokenHash: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'token_hash',
            allowNull: false,
        },
        channel: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'channel',
            allowNull: false,
            defaultValue: "email",
        },
        requestedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'requested_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        requestedIp: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_ip',
            allowNull: true,
        },
        issuedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        expiresAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'expires_at',
            allowNull: false,
        },
        usedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'used_at',
            allowNull: true,
        },
        invalidatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'invalidated_at',
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
        tableName: 'iam_password_reset_token',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['token_hash'] }
        ]
    });
    return IamPasswordResetTokenEntity;
}
