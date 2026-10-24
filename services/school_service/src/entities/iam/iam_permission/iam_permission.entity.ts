import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamPermissionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  permissionCode?: string | null
  module: string
  resource: string
  action: string
  name: string
  description?: string | null
  isSensitive?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IamPermissionCreationAttributes = Optional<IamPermissionAttributes, "id" | "publicId" | "recordCode" | "permissionCode" | "description" | "isSensitive" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IamPermissionEntity
  extends Model<IamPermissionAttributes, IamPermissionCreationAttributes>
  implements IamPermissionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare permissionCode: string | null
  declare module: string
  declare resource: string
  declare action: string
  declare name: string
  declare description: string | null
  declare isSensitive: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initIamPermissionEntity(sequelize: Sequelize): typeof IamPermissionEntity {
  IamPermissionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_permission')"),
      },
      permissionCode: {
        type: DataTypes.TEXT,
        field: 'permission_code',
        allowNull: true,
        unique: true,
      },
      module: {
        type: DataTypes.STRING(20),
        field: 'module',
        allowNull: false,
      },
      resource: {
        type: DataTypes.STRING(40),
        field: 'resource',
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING(10),
        field: 'action',
        allowNull: false,
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
      isSensitive: {
        type: DataTypes.TEXT,
        field: 'is_sensitive',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'iam_permission',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamPermissionEntity
}
