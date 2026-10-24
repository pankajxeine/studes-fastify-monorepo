import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamRolePermissionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  roleCode: string
  permissionCode: string
  createdAt?: Date
  createdBy?: string | null
  UNIQUE?: string | null
}

export type IamRolePermissionCreationAttributes = Optional<IamRolePermissionAttributes, "id" | "publicId" | "recordCode" | "createdAt" | "createdBy" | "UNIQUE">

export class IamRolePermissionEntity
  extends Model<IamRolePermissionAttributes, IamRolePermissionCreationAttributes>
  implements IamRolePermissionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare roleCode: string
  declare permissionCode: string
  declare createdAt: Date
  declare createdBy: string | null
  declare UNIQUE: string | null
}

export function initIamRolePermissionEntity(sequelize: Sequelize): typeof IamRolePermissionEntity {
  IamRolePermissionEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_role_permission')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'iam_role_permission',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamRolePermissionEntity
}
