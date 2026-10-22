import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CronsAttributes = {
  id?: string | number | null
  name: string
  shortDescription?: string | null
  description?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type CronsCreationAttributes = Optional<CronsAttributes, "id" | "shortDescription" | "description" | "createdAt" | "updatedAt">

export class CronsEntity
  extends Model<CronsAttributes, CronsCreationAttributes>
  implements CronsAttributes
{
  declare id: string | number | null
  declare name: string
  declare shortDescription: string | null
  declare description: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCronsEntity(sequelize: Sequelize): typeof CronsEntity {
  CronsEntity.init(
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
        type: DataTypes.STRING(50),
        field: 'name',
        allowNull: false,
      },
      shortDescription: {
        type: DataTypes.STRING(255),
        field: 'short_description',
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(200),
        field: 'description',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return CronsEntity
}
