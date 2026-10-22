import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmModulesAttributes = {
  id?: string | number | null
  name: string
  moduleKey: string
  sequence?: number
  createdAt?: Date
  updatedAt?: Date
}

export type CrmModulesCreationAttributes = Optional<CrmModulesAttributes, "id" | "sequence" | "createdAt" | "updatedAt">

export class CrmModulesEntity
  extends Model<CrmModulesAttributes, CrmModulesCreationAttributes>
  implements CrmModulesAttributes
{
  declare id: string | number | null
  declare name: string
  declare moduleKey: string
  declare sequence: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmModulesEntity(sequelize: Sequelize): typeof CrmModulesEntity {
  CrmModulesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      moduleKey: {
        type: DataTypes.STRING(50),
        field: 'module_key',
        allowNull: false,
      },
      sequence: {
        type: DataTypes.INTEGER,
        field: 'sequence',
        allowNull: false,
        defaultValue: "0",
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
      tableName: 'crm_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['module_key'] }
      ]
    }
  )
  return CrmModulesEntity
}
