import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmUserModuleBlocksAttributes = {
  id: number
  crmUserModuleId: string | number
  blockId: string | number
  permission?: string
  createdAt: Date
  updatedAt: Date
}

export type CrmUserModuleBlocksCreationAttributes = Optional<CrmUserModuleBlocksAttributes, "permission">

export class CrmUserModuleBlocksEntity
  extends Model<CrmUserModuleBlocksAttributes, CrmUserModuleBlocksCreationAttributes>
  implements CrmUserModuleBlocksAttributes
{
  declare id: number
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
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      crmUserModuleId: {
        type: DataTypes.BIGINT,
        field: 'crm_user_module_id',
        allowNull: false,
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
        defaultValue: "'Full' CHECK (\n        \"permission\" IN (\n            'Add & Update Only'",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'crm_user_module_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmUserModuleBlocksEntity
}
