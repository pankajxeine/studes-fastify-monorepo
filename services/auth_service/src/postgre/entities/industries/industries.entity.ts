import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustriesAttributes = {
  id?: number | null
  code?: string | null
  name?: string | null
  description?: string | null
  port?: number | null
  verifone_code?: string | null
  type?: string | null
  image?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type IndustriesCreationAttributes = Optional<IndustriesAttributes, "id" | "code" | "name" | "description" | "port" | "verifone_code" | "type" | "image" | "created_at" | "updated_at">

export class IndustriesEntity
  extends Model<IndustriesAttributes, IndustriesCreationAttributes>
  implements IndustriesAttributes
{
  declare id: number | null
  declare code: string | null
  declare name: string | null
  declare description: string | null
  declare port: number | null
  declare verifone_code: string | null
  declare type: string | null
  declare image: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initIndustriesEntity(sequelize: Sequelize): typeof IndustriesEntity {
  IndustriesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      code: {
        type: DataTypes.CHAR,
        field: 'code',
        allowNull: true,
        defaultValue: null,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.CHAR,
        field: 'description',
        allowNull: true,
        defaultValue: null,
      },
      port: {
        type: DataTypes.TEXT,
        field: 'port',
        allowNull: true,
      },
      verifone_code: {
        type: DataTypes.CHAR,
        field: 'verifone_code',
        allowNull: true,
        defaultValue: null,
      },
      type: {
        type: DataTypes.CHAR,
        field: 'type',
        allowNull: true,
        defaultValue: null,
      },
      image: {
        type: DataTypes.CHAR,
        field: 'image',
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
      tableName: 'industries',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return IndustriesEntity
}
