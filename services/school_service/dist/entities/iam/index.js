"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const iam_app_user_entity_1 = require("./iam_app_user/iam_app_user.entity");
const iam_role_entity_1 = require("./iam_role/iam_role.entity");
const iam_permission_entity_1 = require("./iam_permission/iam_permission.entity");
const iam_role_permission_entity_1 = require("./iam_role_permission/iam_role_permission.entity");
const iam_user_role_entity_1 = require("./iam_user_role/iam_user_role.entity");
const iam_user_session_entity_1 = require("./iam_user_session/iam_user_session.entity");
const iam_login_attempt_entity_1 = require("./iam_login_attempt/iam_login_attempt.entity");
const iam_password_reset_token_entity_1 = require("./iam_password_reset_token/iam_password_reset_token.entity");
function createGeneratedModels(sequelize) {
    const models = {
        iam_app_user: (0, iam_app_user_entity_1.initIamAppUserEntity)(sequelize),
        iam_role: (0, iam_role_entity_1.initIamRoleEntity)(sequelize),
        iam_permission: (0, iam_permission_entity_1.initIamPermissionEntity)(sequelize),
        iam_role_permission: (0, iam_role_permission_entity_1.initIamRolePermissionEntity)(sequelize),
        iam_user_role: (0, iam_user_role_entity_1.initIamUserRoleEntity)(sequelize),
        iam_user_session: (0, iam_user_session_entity_1.initIamUserSessionEntity)(sequelize),
        iam_login_attempt: (0, iam_login_attempt_entity_1.initIamLoginAttemptEntity)(sequelize),
        iam_password_reset_token: (0, iam_password_reset_token_entity_1.initIamPasswordResetTokenEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.iam_role_permission.belongsTo(models.iam_role, { as: 'roleCode', foreignKey: 'roleCode', targetKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    models.iam_role.hasMany(models.iam_role_permission, { as: 'iamRolePermission', foreignKey: 'roleCode', sourceKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    models.iam_role_permission.belongsTo(models.iam_permission, { as: 'permissionCode', foreignKey: 'permissionCode', targetKey: 'permissionCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    models.iam_permission.hasMany(models.iam_role_permission, { as: 'iamRolePermission', foreignKey: 'permissionCode', sourceKey: 'permissionCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    models.iam_user_role.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId' });
    models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRole', foreignKey: 'appUserId', sourceKey: 'appUserId' });
    models.iam_user_role.belongsTo(models.iam_role, { as: 'roleCode', foreignKey: 'roleCode', targetKey: 'roleCode', onUpdate: 'CASCADE' });
    models.iam_role.hasMany(models.iam_user_role, { as: 'iamUserRole', foreignKey: 'roleCode', sourceKey: 'roleCode', onUpdate: 'CASCADE' });
    models.iam_user_role.belongsTo(models.iam_app_user, { as: 'grantedByUser', foreignKey: 'grantedByUserId', targetKey: 'appUserId' });
    models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRoleByGrantedByUserId', foreignKey: 'grantedByUserId', sourceKey: 'appUserId' });
    models.iam_user_role.belongsTo(models.iam_app_user, { as: 'revokedByUser', foreignKey: 'revokedByUserId', targetKey: 'appUserId' });
    models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRoleByRevokedByUserId', foreignKey: 'revokedByUserId', sourceKey: 'appUserId' });
    models.iam_user_session.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' });
    models.iam_app_user.hasMany(models.iam_user_session, { as: 'iamUserSession', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' });
    models.iam_login_attempt.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId' });
    models.iam_app_user.hasMany(models.iam_login_attempt, { as: 'iamLoginAttempt', foreignKey: 'appUserId', sourceKey: 'appUserId' });
    models.iam_password_reset_token.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' });
    models.iam_app_user.hasMany(models.iam_password_reset_token, { as: 'iamPasswordResetToken', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' });
    models.iam_password_reset_token.belongsTo(models.iam_app_user, { as: 'issuedByUser', foreignKey: 'issuedByUserId', targetKey: 'appUserId' });
    models.iam_app_user.hasMany(models.iam_password_reset_token, { as: 'iamPasswordResetTokenByIssuedByUserId', foreignKey: 'issuedByUserId', sourceKey: 'appUserId' });
}
