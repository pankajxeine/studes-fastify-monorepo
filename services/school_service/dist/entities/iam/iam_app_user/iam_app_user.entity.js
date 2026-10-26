"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamAppUserEntity = void 0;
exports.initIamAppUserEntity = initIamAppUserEntity;
const sequelize_1 = require("sequelize");
class IamAppUserEntity extends sequelize_1.Model {
}
exports.IamAppUserEntity = IamAppUserEntity;
function initIamAppUserEntity(sequelize) {
    IamAppUserEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('iam_app_user')"),
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        username: {
            type: sequelize_1.DataTypes.STRING(60),
            field: 'username',
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email',
            allowNull: false,
        },
        passwordHash: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'password_hash',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "invited",
        },
        defaultCampusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'default_campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        lastLoginAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_login_at',
            allowNull: true,
        },
        failedLoginCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'failed_login_count',
            allowNull: false,
            defaultValue: 0,
        },
        lockedUntil: {
            type: sequelize_1.DataTypes.DATE,
            field: 'locked_until',
            allowNull: true,
        },
        passwordChangedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'password_changed_at',
            allowNull: true,
        },
        mustChangePassword: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'must_change_password',
            allowNull: false,
            defaultValue: false,
        },
        isMfaEnabled: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_mfa_enabled',
            allowNull: false,
            defaultValue: false,
        },
        locale: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'locale',
            allowNull: false,
            defaultValue: "en-US",
        },
        invitedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'invited_at',
            allowNull: true,
        },
        activatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'activated_at',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'iam_app_user',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['person_id'] }
        ]
    });
    return IamAppUserEntity;
}
