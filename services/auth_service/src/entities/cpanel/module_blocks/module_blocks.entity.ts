import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ModuleBlocksAttributes = {
  id: number
  moduleId: string | number
  name: string
  blockKey: string
  createdAt: Date
  updatedAt: Date
}

export type ModuleBlocksCreationAttributes = Optional<ModuleBlocksAttributes, never>

export class ModuleBlocksEntity
  extends Model<ModuleBlocksAttributes, ModuleBlocksCreationAttributes>
  implements ModuleBlocksAttributes
{
  declare id: number
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
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      moduleId: {
        type: DataTypes.BIGINT,
        field: 'module_id',
        allowNull: false,
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'module_blocks',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_module_blocks_block_key', 'block_key'] }
      ]
    }
  )
  return ModuleBlocksEntity
}
