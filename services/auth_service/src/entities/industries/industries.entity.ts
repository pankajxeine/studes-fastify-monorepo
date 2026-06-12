import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustriesAttributes = {
  id?: number
  code: string
  name: string
  description: string
  port: number
  verifone_code?: string
  type?: string
  image?: string | null
  created_at: Date
  updated_at: Date
}

export type IndustriesCreationAttributes = Optional<IndustriesAttributes, "id" | "verifone_code" | "type" | "image">

export class IndustriesEntity
  extends Model<IndustriesAttributes, IndustriesCreationAttributes>
  implements IndustriesAttributes
{
  declare id: number
  declare code: string
  declare name: string
  declare description: string
  declare port: number
  declare verifone_code: string
  declare type: string
  declare image: string | null
  declare created_at: Date
  declare updated_at: Date
}

export function initIndustriesEntity(sequelize: Sequelize): typeof IndustriesEntity {
  IndustriesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        field: 'description',
        allowNull: false,
      },
      port: {
        type: DataTypes.INTEGER,
        field: 'port',
        allowNull: false,
      },
      verifone_code: {
        type: DataTypes.STRING(50),
        field: 'verifone_code',
        allowNull: false,
        defaultValue: "",
      },
      type: {
        type: DataTypes.ENUM('external','internal'),
        field: 'type',
        allowNull: false,
        defaultValue: "External",
      },
      image: {
        type: DataTypes.STRING(100),
        field: 'image',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'industries',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      comment: 'Master table for Industries'
    }
  )
  return IndustriesEntity
}
