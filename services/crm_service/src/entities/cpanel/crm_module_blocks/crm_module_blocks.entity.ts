import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmModuleBlocksAttributes = {
  id?: string | number | null
  crmModuleId: string | number
  name: string
  sequence?: number
  blockKey: string
  createdAt?: Date
  updatedAt?: Date
}

export type CrmModuleBlocksCreationAttributes = Optional<CrmModuleBlocksAttributes, "id" | "sequence" | "createdAt" | "updatedAt">

export class CrmModuleBlocksEntity
  extends Model<CrmModuleBlocksAttributes, CrmModuleBlocksCreationAttributes>
  implements CrmModuleBlocksAttributes
{
  declare id: string | number | null
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
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      crmModuleId: {
        type: DataTypes.BIGINT,
        field: 'crm_module_id',
        allowNull: false,
        references: { model: 'crm_modules', key: 'id' },
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
      tableName: 'crm_module_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['block_key'] }
      ]
    }
  )
  return CrmModuleBlocksEntity
}
