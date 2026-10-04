import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmModuleBlocksAttributes = {
  id: number
  crmModuleId: string | number
  name: string
  sequence?: number
  blockKey: string
  createdAt: Date
  updatedAt: Date
}

export type CrmModuleBlocksCreationAttributes = Optional<CrmModuleBlocksAttributes, "sequence">

export class CrmModuleBlocksEntity
  extends Model<CrmModuleBlocksAttributes, CrmModuleBlocksCreationAttributes>
  implements CrmModuleBlocksAttributes
{
  declare id: number
  declare crmModuleId: string | number
  declare name: string
  declare sequence: number
  declare blockKey: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmModuleBlocksEntity(sequelize: Sequelize): typeof CrmModuleBlocksEntity {
  CrmModuleBlocksEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      crmModuleId: {
        type: DataTypes.BIGINT,
        field: 'crm_module_id',
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      sequence: {
        type: DataTypes.INTEGER,
        field: 'sequence',
        allowNull: false,
        defaultValue: "0",
      },
      blockKey: {
        type: DataTypes.STRING(100),
        field: 'block_key',
        allowNull: false,
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
      tableName: 'crm_module_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_crm_module_blocks_block_key', 'block_key'] }
      ]
    }
  )
  return CrmModuleBlocksEntity
}
