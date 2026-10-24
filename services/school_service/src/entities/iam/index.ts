import type { Sequelize } from 'sequelize'
import { initIamAppUserEntity } from './iam_app_user/iam_app_user.entity'
import { initIamRoleEntity } from './iam_role/iam_role.entity'
import { initIamPermissionEntity } from './iam_permission/iam_permission.entity'
import { initIamRolePermissionEntity } from './iam_role_permission/iam_role_permission.entity'
import { initIamUserRoleEntity } from './iam_user_role/iam_user_role.entity'
import { initIamUserSessionEntity } from './iam_user_session/iam_user_session.entity'
import { initIamLoginAttemptEntity } from './iam_login_attempt/iam_login_attempt.entity'
import { initIamPasswordResetTokenEntity } from './iam_password_reset_token/iam_password_reset_token.entity'

export type GeneratedModels = {
  iam_app_user: ReturnType<typeof initIamAppUserEntity>;
  iam_role: ReturnType<typeof initIamRoleEntity>;
  iam_permission: ReturnType<typeof initIamPermissionEntity>;
  iam_role_permission: ReturnType<typeof initIamRolePermissionEntity>;
  iam_user_role: ReturnType<typeof initIamUserRoleEntity>;
  iam_user_session: ReturnType<typeof initIamUserSessionEntity>;
  iam_login_attempt: ReturnType<typeof initIamLoginAttemptEntity>;
  iam_password_reset_token: ReturnType<typeof initIamPasswordResetTokenEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      iam_app_user: initIamAppUserEntity(sequelize),
      iam_role: initIamRoleEntity(sequelize),
      iam_permission: initIamPermissionEntity(sequelize),
      iam_role_permission: initIamRolePermissionEntity(sequelize),
      iam_user_role: initIamUserRoleEntity(sequelize),
      iam_user_session: initIamUserSessionEntity(sequelize),
      iam_login_attempt: initIamLoginAttemptEntity(sequelize),
      iam_password_reset_token: initIamPasswordResetTokenEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.iam_role_permission.belongsTo(models.iam_role, { as: 'roleCode', foreignKey: 'roleCode', targetKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role.hasMany(models.iam_role_permission, { as: 'iamRolePermission', foreignKey: 'roleCode', sourceKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role_permission.belongsTo(models.iam_permission, { as: 'permissionCode', foreignKey: 'permissionCode', targetKey: 'permissionCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_permission.hasMany(models.iam_role_permission, { as: 'iamRolePermission', foreignKey: 'permissionCode', sourceKey: 'permissionCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_user_role.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRole', foreignKey: 'appUserId', sourceKey: 'appUserId' })
  models.iam_user_role.belongsTo(models.iam_role, { as: 'roleCode', foreignKey: 'roleCode', targetKey: 'roleCode', onUpdate: 'CASCADE' })
  models.iam_role.hasMany(models.iam_user_role, { as: 'iamUserRole', foreignKey: 'roleCode', sourceKey: 'roleCode', onUpdate: 'CASCADE' })
  models.iam_user_role.belongsTo(models.iam_app_user, { as: 'grantedByUser', foreignKey: 'grantedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRoleByGrantedByUserId', foreignKey: 'grantedByUserId', sourceKey: 'appUserId' })
  models.iam_user_role.belongsTo(models.iam_app_user, { as: 'revokedByUser', foreignKey: 'revokedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRoleByRevokedByUserId', foreignKey: 'revokedByUserId', sourceKey: 'appUserId' })
  models.iam_user_session.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_app_user.hasMany(models.iam_user_session, { as: 'iamUserSession', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_login_attempt.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_login_attempt, { as: 'iamLoginAttempt', foreignKey: 'appUserId', sourceKey: 'appUserId' })
  models.iam_password_reset_token.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_app_user.hasMany(models.iam_password_reset_token, { as: 'iamPasswordResetToken', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_password_reset_token.belongsTo(models.iam_app_user, { as: 'issuedByUser', foreignKey: 'issuedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_password_reset_token, { as: 'iamPasswordResetTokenByIssuedByUserId', foreignKey: 'issuedByUserId', sourceKey: 'appUserId' })
}
