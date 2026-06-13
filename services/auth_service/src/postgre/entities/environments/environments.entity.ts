import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EnvironmentsAttributes = {
  id?: number | null
  name?: string | null
  code?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type EnvironmentsCreationAttributes = Optional<EnvironmentsAttributes, "id" | "name" | "code" | "created_at" | "updated_at">

export class EnvironmentsEntity
  extends Model<EnvironmentsAttributes, EnvironmentsCreationAttributes>
  implements EnvironmentsAttributes
{
  declare id: number | null
  declare name: string | null
  declare code: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initEnvironmentsEntity(sequelize: Sequelize): typeof EnvironmentsEntity {
  EnvironmentsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      code: {
        type: DataTypes.CHAR,
        field: 'code',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'environments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return EnvironmentsEntity
}
