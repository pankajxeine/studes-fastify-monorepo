import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubModulesAttributes = {
  id?: string | number | null
  subId?: number | null
  moduleId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type SubModulesCreationAttributes = Optional<SubModulesAttributes, "id" | "subId" | "moduleId" | "createdAt" | "updatedAt">

export class SubModulesEntity
  extends Model<SubModulesAttributes, SubModulesCreationAttributes>
  implements SubModulesAttributes
{
  declare id: string | number | null
  declare subId: number | null
  declare moduleId: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSubModulesEntity(sequelize: Sequelize): typeof SubModulesEntity {
  SubModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subId: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
        references: { model: 'subs', key: 'id' },
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
        references: { model: 'modules', key: 'id' },
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
      tableName: 'sub_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubModulesEntity
}
