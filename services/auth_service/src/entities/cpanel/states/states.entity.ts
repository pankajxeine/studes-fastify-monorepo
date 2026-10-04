import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type StatesAttributes = {
  id: number
  countryId: string | number
  name: string
  code: string
  status?: string
  createdAt: Date
  updatedAt: Date
}

export type StatesCreationAttributes = Optional<StatesAttributes, "status">

export class StatesEntity
  extends Model<StatesAttributes, StatesCreationAttributes>
  implements StatesAttributes
{
  declare id: number
  declare countryId: string | number
  declare name: string
  declare code: string
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initStatesEntity(sequelize: Sequelize): typeof StatesEntity {
  StatesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      countryId: {
        type: DataTypes.BIGINT,
        field: 'country_id',
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(30),
        field: 'name',
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(5),
        field: 'code',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
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
      tableName: 'states',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_states_country_id_name', 'country_id', 'name'] }
      ]
    }
  )
  return StatesEntity
}
