import type { Sequelize } from 'sequelize'
import { initIamAppUserEntity } from './iam_app_user/iam_app_user.entity'
import { initIamRoleEntity } from './iam_role/iam_role.entity'
import { initIamPermissionEntity } from './iam_permission/iam_permission.entity'
import { initIamRolePermissionEntity } from './iam_role_permission/iam_role_permission.entity'
import { initIamRoleConflictEntity } from './iam_role_conflict/iam_role_conflict.entity'
import { initIamUserRoleEntity } from './iam_user_role/iam_user_role.entity'
import { initIamMfaFactorEntity } from './iam_mfa_factor/iam_mfa_factor.entity'
import { initIamUserSessionEntity } from './iam_user_session/iam_user_session.entity'
import { initIamLoginAttemptEntity } from './iam_login_attempt/iam_login_attempt.entity'
import { initIamPasswordResetTokenEntity } from './iam_password_reset_token/iam_password_reset_token.entity'
import { initIamApiTokenEntity } from './iam_api_token/iam_api_token.entity'
import { initIamPrivilegedAccessRequestEntity } from './iam_privileged_access_request/iam_privileged_access_request.entity'
import { initIamAccessReviewEntity } from './iam_access_review/iam_access_review.entity'
import { initIamAccessReviewItemEntity } from './iam_access_review_item/iam_access_review_item.entity'

export type GeneratedModels = {
  iam_app_user: ReturnType<typeof initIamAppUserEntity>;
  iam_role: ReturnType<typeof initIamRoleEntity>;
  iam_permission: ReturnType<typeof initIamPermissionEntity>;
  iam_role_permission: ReturnType<typeof initIamRolePermissionEntity>;
  iam_role_conflict: ReturnType<typeof initIamRoleConflictEntity>;
  iam_user_role: ReturnType<typeof initIamUserRoleEntity>;
  iam_mfa_factor: ReturnType<typeof initIamMfaFactorEntity>;
  iam_user_session: ReturnType<typeof initIamUserSessionEntity>;
  iam_login_attempt: ReturnType<typeof initIamLoginAttemptEntity>;
  iam_password_reset_token: ReturnType<typeof initIamPasswordResetTokenEntity>;
  iam_api_token: ReturnType<typeof initIamApiTokenEntity>;
  iam_privileged_access_request: ReturnType<typeof initIamPrivilegedAccessRequestEntity>;
  iam_access_review: ReturnType<typeof initIamAccessReviewEntity>;
  iam_access_review_item: ReturnType<typeof initIamAccessReviewItemEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      iam_app_user: initIamAppUserEntity(sequelize),
      iam_role: initIamRoleEntity(sequelize),
      iam_permission: initIamPermissionEntity(sequelize),
      iam_role_permission: initIamRolePermissionEntity(sequelize),
      iam_role_conflict: initIamRoleConflictEntity(sequelize),
      iam_user_role: initIamUserRoleEntity(sequelize),
      iam_mfa_factor: initIamMfaFactorEntity(sequelize),
      iam_user_session: initIamUserSessionEntity(sequelize),
      iam_login_attempt: initIamLoginAttemptEntity(sequelize),
      iam_password_reset_token: initIamPasswordResetTokenEntity(sequelize),
      iam_api_token: initIamApiTokenEntity(sequelize),
      iam_privileged_access_request: initIamPrivilegedAccessRequestEntity(sequelize),
      iam_access_review: initIamAccessReviewEntity(sequelize),
      iam_access_review_item: initIamAccessReviewItemEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.iam_app_user.belongsTo(models.iam_app_user, { as: 'managerUser', foreignKey: 'managerUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_app_user, { as: 'iamAppUser', foreignKey: 'managerUserId', sourceKey: 'appUserId' })
  models.iam_role_permission.belongsTo(models.iam_role, { as: 'roleCode', foreignKey: 'roleCode', targetKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role.hasMany(models.iam_role_permission, { as: 'iamRolePermission', foreignKey: 'roleCode', sourceKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role_permission.belongsTo(models.iam_permission, { as: 'permissionCode', foreignKey: 'permissionCode', targetKey: 'permissionCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_permission.hasMany(models.iam_role_permission, { as: 'iamRolePermission', foreignKey: 'permissionCode', sourceKey: 'permissionCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role_conflict.belongsTo(models.iam_role, { as: 'roleCodeA', foreignKey: 'roleCodeA', targetKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role.hasMany(models.iam_role_conflict, { as: 'iamRoleConflict', foreignKey: 'roleCodeA', sourceKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role_conflict.belongsTo(models.iam_role, { as: 'roleCodeB', foreignKey: 'roleCodeB', targetKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_role.hasMany(models.iam_role_conflict, { as: 'iamRoleConflictByRoleCodeB', foreignKey: 'roleCodeB', sourceKey: 'roleCode', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  models.iam_user_role.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRole', foreignKey: 'appUserId', sourceKey: 'appUserId' })
  models.iam_user_role.belongsTo(models.iam_role, { as: 'roleCode', foreignKey: 'roleCode', targetKey: 'roleCode', onUpdate: 'CASCADE' })
  models.iam_role.hasMany(models.iam_user_role, { as: 'iamUserRole', foreignKey: 'roleCode', sourceKey: 'roleCode', onUpdate: 'CASCADE' })
  models.iam_user_role.belongsTo(models.iam_app_user, { as: 'grantedByUser', foreignKey: 'grantedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRoleByGrantedByUserId', foreignKey: 'grantedByUserId', sourceKey: 'appUserId' })
  models.iam_user_role.belongsTo(models.iam_app_user, { as: 'revokedByUser', foreignKey: 'revokedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_user_role, { as: 'iamUserRoleByRevokedByUserId', foreignKey: 'revokedByUserId', sourceKey: 'appUserId' })
  models.iam_mfa_factor.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_app_user.hasMany(models.iam_mfa_factor, { as: 'iamMfaFactor', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_user_session.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_app_user.hasMany(models.iam_user_session, { as: 'iamUserSession', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_login_attempt.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_login_attempt, { as: 'iamLoginAttempt', foreignKey: 'appUserId', sourceKey: 'appUserId' })
  models.iam_password_reset_token.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_app_user.hasMany(models.iam_password_reset_token, { as: 'iamPasswordResetToken', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_password_reset_token.belongsTo(models.iam_app_user, { as: 'issuedByUser', foreignKey: 'issuedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_password_reset_token, { as: 'iamPasswordResetTokenByIssuedByUserId', foreignKey: 'issuedByUserId', sourceKey: 'appUserId' })
  models.iam_api_token.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_app_user.hasMany(models.iam_api_token, { as: 'iamApiToken', foreignKey: 'appUserId', sourceKey: 'appUserId', onDelete: 'CASCADE' })
  models.iam_api_token.belongsTo(models.iam_app_user, { as: 'revokedByUser', foreignKey: 'revokedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_api_token, { as: 'iamApiTokenByRevokedByUserId', foreignKey: 'revokedByUserId', sourceKey: 'appUserId' })
  models.iam_privileged_access_request.belongsTo(models.iam_app_user, { as: 'appUser', foreignKey: 'appUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_privileged_access_request, { as: 'iamPrivilegedAccessRequest', foreignKey: 'appUserId', sourceKey: 'appUserId' })
  models.iam_privileged_access_request.belongsTo(models.iam_role, { as: 'roleCode', foreignKey: 'roleCode', targetKey: 'roleCode', onUpdate: 'CASCADE' })
  models.iam_role.hasMany(models.iam_privileged_access_request, { as: 'iamPrivilegedAccessRequest', foreignKey: 'roleCode', sourceKey: 'roleCode', onUpdate: 'CASCADE' })
  models.iam_privileged_access_request.belongsTo(models.iam_app_user, { as: 'decidedByUser', foreignKey: 'decidedByUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_privileged_access_request, { as: 'iamPrivilegedAccessRequestByDecidedByUserId', foreignKey: 'decidedByUserId', sourceKey: 'appUserId' })
  models.iam_access_review_item.belongsTo(models.iam_access_review, { as: 'accessReview', foreignKey: 'accessReviewId', targetKey: 'accessReviewId', onDelete: 'CASCADE' })
  models.iam_access_review.hasMany(models.iam_access_review_item, { as: 'iamAccessReviewItem', foreignKey: 'accessReviewId', sourceKey: 'accessReviewId', onDelete: 'CASCADE' })
  models.iam_access_review_item.belongsTo(models.iam_user_role, { as: 'userRole', foreignKey: 'userRoleId', targetKey: 'userRoleId' })
  models.iam_user_role.hasMany(models.iam_access_review_item, { as: 'iamAccessReviewItem', foreignKey: 'userRoleId', sourceKey: 'userRoleId' })
  models.iam_access_review_item.belongsTo(models.iam_app_user, { as: 'reviewerUser', foreignKey: 'reviewerUserId', targetKey: 'appUserId' })
  models.iam_app_user.hasMany(models.iam_access_review_item, { as: 'iamAccessReviewItem', foreignKey: 'reviewerUserId', sourceKey: 'appUserId' })
}
