import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EnvironmentsAttributes = {
  id?: number | null
  name?: string | null
  code?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type EnvironmentsCreationAttributes = Optional<EnvironmentsAttributes, "id" | "name" | "code" | "createdAt" | "updatedAt">

export class EnvironmentsEntity
  extends Model<EnvironmentsAttributes, EnvironmentsCreationAttributes>
  implements EnvironmentsAttributes
{
  declare id: number | null
  declare name: string | null
  declare code: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initEnvironmentsEntity(sequelize: Sequelize): typeof EnvironmentsEntity {
  EnvironmentsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.CHAR(30),
        field: 'name',
        allowNull: true,
      },
      code: {
        type: DataTypes.CHAR(30),
        field: 'code',
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
      tableName: 'environments',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return EnvironmentsEntity
}
