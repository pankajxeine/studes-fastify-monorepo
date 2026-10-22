import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ModuleBlocksAttributes = {
  id?: string | number | null
  moduleId: string | number
  name: string
  blockKey: string
  createdAt?: Date
  updatedAt?: Date
}

export type ModuleBlocksCreationAttributes = Optional<ModuleBlocksAttributes, "id" | "createdAt" | "updatedAt">

export class ModuleBlocksEntity
  extends Model<ModuleBlocksAttributes, ModuleBlocksCreationAttributes>
  implements ModuleBlocksAttributes
{
  declare id: string | number | null
  declare moduleId: string | number
  declare name: string
  declare blockKey: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initModuleBlocksEntity(sequelize: Sequelize): typeof ModuleBlocksEntity {
  ModuleBlocksEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      moduleId: {
        type: DataTypes.BIGINT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'modules', key: 'id' },
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
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
      tableName: 'module_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['block_key'] }
      ]
    }
  )
  return ModuleBlocksEntity
}
