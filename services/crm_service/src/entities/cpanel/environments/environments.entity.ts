import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type EnvironmentsAttributes = {
  id?: string | number | null
  name?: string | null
  code?: string | null
}

export type EnvironmentsCreationAttributes = Optional<EnvironmentsAttributes, "id" | "name" | "code">

export class EnvironmentsEntity
  extends Model<EnvironmentsAttributes, EnvironmentsCreationAttributes>
  implements EnvironmentsAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare code: string | null
}

export function initEnvironmentsEntity(sequelize: Sequelize): typeof EnvironmentsEntity {
  EnvironmentsEntity.init(
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
        type: DataTypes.STRING(30),
        field: 'name',
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING(30),
        field: 'code',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'environments',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return EnvironmentsEntity
}
