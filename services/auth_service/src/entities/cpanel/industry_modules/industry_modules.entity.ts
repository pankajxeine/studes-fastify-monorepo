import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryModulesAttributes = {
  id?: number | null
  industryId?: number | null
  moduleId?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type IndustryModulesCreationAttributes = Optional<IndustryModulesAttributes, "id" | "industryId" | "moduleId" | "createdAt" | "updatedAt">

export class IndustryModulesEntity
  extends Model<IndustryModulesAttributes, IndustryModulesCreationAttributes>
  implements IndustryModulesAttributes
{
  declare id: number | null
  declare industryId: number | null
  declare moduleId: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initIndustryModulesEntity(sequelize: Sequelize): typeof IndustryModulesEntity {
  IndustryModulesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      industryId: {
        type: DataTypes.TEXT,
        field: 'industry_id',
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'industry_modules',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return IndustryModulesEntity
}
