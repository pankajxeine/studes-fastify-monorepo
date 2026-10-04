import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CronsAttributes = {
  id: number
  name: string
  shortDescription?: string | null
  description?: string | null
  createdAt: Date
  updatedAt: Date
}

export type CronsCreationAttributes = Optional<CronsAttributes, "shortDescription" | "description">

export class CronsEntity
  extends Model<CronsAttributes, CronsCreationAttributes>
  implements CronsAttributes
{
  declare id: number
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
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_crons_name', 'name'] }
      ]
    }
  )
  return CronsEntity
}
