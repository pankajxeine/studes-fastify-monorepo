import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamRoleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  roleCode?: string | null
  name: string
  description?: string | null
  persona: string
  portal: string
  isOrgWide?: string
  isSystem?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IamRoleCreationAttributes = Optional<IamRoleAttributes, "id" | "publicId" | "recordCode" | "roleCode" | "description" | "isOrgWide" | "isSystem" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IamRoleEntity
  extends Model<IamRoleAttributes, IamRoleCreationAttributes>
  implements IamRoleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare roleCode: string | null
  declare name: string
  declare description: string | null
  declare persona: string
  declare portal: string
  declare isOrgWide: string
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_role')"),
      },
      roleCode: {
        type: DataTypes.TEXT,
        field: 'role_code',
        allowNull: true,
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
      portal: {
        type: DataTypes.STRING(30),
        field: 'portal',
        allowNull: false,
      },
      isOrgWide: {
        type: DataTypes.TEXT,
        field: 'is_org_wide',
        allowNull: false,
        defaultValue: false,
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
