import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamRolePermissionAttributes = {
  recordCode?: string
  rolePermissionId: string | null
  roleCode: string
  permissionCode: string
  createdAt?: Date
  createdBy?: string | null
}

export type IamRolePermissionCreationAttributes = Optional<IamRolePermissionAttributes, "recordCode" | "createdAt" | "createdBy">

export class IamRolePermissionEntity
  extends Model<IamRolePermissionAttributes, IamRolePermissionCreationAttributes>
  implements IamRolePermissionAttributes
{
  declare recordCode: string
  declare rolePermissionId: string | null
  declare roleCode: string
  declare permissionCode: string
  declare createdAt: Date
  declare createdBy: string | null
}

export function initIamRolePermissionEntity(sequelize: Sequelize): typeof IamRolePermissionEntity {
  IamRolePermissionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_role_permission')"),
      },
      rolePermissionId: {
        type: DataTypes.TEXT,
        field: 'role_permission_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      roleCode: {
        type: DataTypes.TEXT,
        field: 'role_code',
        allowNull: false,
        references: { model: 'iam_role', key: 'role_code' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      permissionCode: {
        type: DataTypes.TEXT,
        field: 'permission_code',
        allowNull: false,
        references: { model: 'iam_permission', key: 'permission_code' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
      }
    },
    {
      sequelize,
      tableName: 'iam_role_permission',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['role_code', 'permission_code'] }
      ]
    }
  )
  return IamRolePermissionEntity
}
