import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamRoleAttributes = {
  recordCode?: string
  roleId: string | null
  roleCode: string
  name: string
  description?: string | null
  persona: string
  allowedScopes?: string
  allowedUserTypes?: string
  isPrivileged?: string
  requiresMfa?: string
  maxGrantDays?: number | null
  isSystem?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IamRoleCreationAttributes = Optional<IamRoleAttributes, "recordCode" | "description" | "allowedScopes" | "allowedUserTypes" | "isPrivileged" | "requiresMfa" | "maxGrantDays" | "isSystem" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IamRoleEntity
  extends Model<IamRoleAttributes, IamRoleCreationAttributes>
  implements IamRoleAttributes
{
  declare recordCode: string
  declare roleId: string | null
  declare roleCode: string
  declare name: string
  declare description: string | null
  declare persona: string
  declare allowedScopes: string
  declare allowedUserTypes: string
  declare isPrivileged: string
  declare requiresMfa: string
  declare maxGrantDays: number | null
  declare isSystem: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initIamRoleEntity(sequelize: Sequelize): typeof IamRoleEntity {
  IamRoleEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_role')"),
      },
      roleId: {
        type: DataTypes.TEXT,
        field: 'role_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      roleCode: {
        type: DataTypes.TEXT,
        field: 'role_code',
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      persona: {
        type: DataTypes.STRING(20),
        field: 'persona',
        allowNull: false,
      },
      allowedScopes: {
        type: DataTypes.TEXT,
        field: 'allowed_scopes',
        allowNull: false,
        defaultValue: "{global}",
      },
      allowedUserTypes: {
        type: DataTypes.TEXT,
        field: 'allowed_user_types',
        allowNull: false,
        defaultValue: "{staff}",
      },
      isPrivileged: {
        type: DataTypes.TEXT,
        field: 'is_privileged',
        allowNull: false,
        defaultValue: false,
      },
      requiresMfa: {
        type: DataTypes.TEXT,
        field: 'requires_mfa',
        allowNull: false,
        defaultValue: false,
      },
      maxGrantDays: {
        type: DataTypes.SMALLINT,
        field: 'max_grant_days',
        allowNull: true,
      },
      isSystem: {
        type: DataTypes.TEXT,
        field: 'is_system',
        allowNull: false,
        defaultValue: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'iam_role',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamRoleEntity
}
