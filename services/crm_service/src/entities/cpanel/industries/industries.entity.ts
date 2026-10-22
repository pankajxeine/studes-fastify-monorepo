import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustriesAttributes = {
  id?: string | number | null
  code?: string | null
  name?: string | null
  description?: string | null
  type?: string | null
  image?: string | null
}

export type IndustriesCreationAttributes = Optional<IndustriesAttributes, "id" | "code" | "name" | "description" | "type" | "image">

export class IndustriesEntity
  extends Model<IndustriesAttributes, IndustriesCreationAttributes>
  implements IndustriesAttributes
{
  declare id: string | number | null
  declare code: string | null
  declare name: string | null
  declare description: string | null
  declare type: string | null
  declare image: string | null
}

export function initIndustriesEntity(sequelize: Sequelize): typeof IndustriesEntity {
  IndustriesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      code: {
        type: DataTypes.STRING(8),
        field: 'code',
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(7),
        field: 'name',
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(17),
        field: 'description',
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING(8),
        field: 'type',
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(12),
        field: 'image',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'industries',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return IndustriesEntity
}
