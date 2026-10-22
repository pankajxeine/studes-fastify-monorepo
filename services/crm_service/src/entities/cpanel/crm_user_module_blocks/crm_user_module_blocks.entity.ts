import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmUserModuleBlocksAttributes = {
  id?: string | number | null
  crmUserModuleId: string | number
  blockId: string | number
  permission?: string
  createdAt?: Date
  updatedAt?: Date
}

export type CrmUserModuleBlocksCreationAttributes = Optional<CrmUserModuleBlocksAttributes, "id" | "permission" | "createdAt" | "updatedAt">

export class CrmUserModuleBlocksEntity
  extends Model<CrmUserModuleBlocksAttributes, CrmUserModuleBlocksCreationAttributes>
  implements CrmUserModuleBlocksAttributes
{
  declare id: string | number | null
  declare crmUserModuleId: string | number
  declare blockId: string | number
  declare permission: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmUserModuleBlocksEntity(sequelize: Sequelize): typeof CrmUserModuleBlocksEntity {
  CrmUserModuleBlocksEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      crmUserModuleId: {
        type: DataTypes.BIGINT,
        field: 'crm_user_module_id',
        allowNull: false,
        references: { model: 'crm_user_modules', key: 'id' },
      },
      blockId: {
        type: DataTypes.BIGINT,
        field: 'block_id',
        allowNull: false,
      },
      permission: {
        type: DataTypes.TEXT,
        field: 'permission',
        allowNull: false,
        defaultValue: "full",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'crm_user_module_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmUserModuleBlocksEntity
}
