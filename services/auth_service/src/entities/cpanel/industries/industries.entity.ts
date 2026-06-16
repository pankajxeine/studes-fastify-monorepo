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
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return IndustriesEntity
}
