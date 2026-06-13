import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustriesAttributes = {
  id?: number | null
  code?: string | null
  name?: string | null
  description?: string | null
  type?: string | null
  image?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type IndustriesCreationAttributes = Optional<IndustriesAttributes, "id" | "code" | "name" | "description" | "type" | "image" | "createdAt" | "updatedAt">

export class IndustriesEntity
  extends Model<IndustriesAttributes, IndustriesCreationAttributes>
  implements IndustriesAttributes
{
  declare id: number | null
  declare code: string | null
  declare name: string | null
  declare description: string | null
  declare type: string | null
  declare image: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initIndustriesEntity(sequelize: Sequelize): typeof IndustriesEntity {
  IndustriesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      code: {
        type: DataTypes.CHAR(8),
        field: 'code',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR(7),
        field: 'name',
        allowNull: true,
      },
      description: {
        type: DataTypes.CHAR(17),
        field: 'description',
        allowNull: true,
      },
      type: {
        type: DataTypes.CHAR(8),
        field: 'type',
        allowNull: true,
      },
      image: {
        type: DataTypes.CHAR(12),
        field: 'image',
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
      tableName: 'industries',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return IndustriesEntity
}
