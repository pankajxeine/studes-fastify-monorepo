import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EnvironmentsAttributes = {
  id?: number
  name?: string | null
  code?: string | null
  created_at?: Date | null
  updated_at?: Date | null
}

export type EnvironmentsCreationAttributes = Optional<EnvironmentsAttributes, "id" | "name" | "code" | "created_at" | "updated_at">

export class EnvironmentsEntity
  extends Model<EnvironmentsAttributes, EnvironmentsCreationAttributes>
  implements EnvironmentsAttributes
{
  declare id: number
  declare name: string | null
  declare code: string | null
  declare created_at: Date | null
  declare updated_at: Date | null
}

export function initEnvironmentsEntity(sequelize: Sequelize): typeof EnvironmentsEntity {
  EnvironmentsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: true,
        unique: true,
        defaultValue: null,
      },
      code: {
        type: DataTypes.STRING(50),
        field: 'code',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.DATE,
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
