import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type StatesAttributes = {
  id?: string | number | null
  countryId: string | number
  name: string
  code: string
  status?: string
}

export type StatesCreationAttributes = Optional<StatesAttributes, "id" | "status">

export class StatesEntity
  extends Model<StatesAttributes, StatesCreationAttributes>
  implements StatesAttributes
{
  declare id: string | number | null
  declare countryId: string | number
  declare name: string
  declare code: string
  declare status: string
}

export function initStatesEntity(sequelize: Sequelize): typeof StatesEntity {
  StatesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      countryId: {
        type: DataTypes.BIGINT,
        field: 'country_id',
        allowNull: false,
        references: { model: 'countries', key: 'id' },
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
        defaultValue: "Active",
      }
    },
    {
      sequelize,
      tableName: 'states',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['country_id', 'name'] }
      ]
    }
  )
  return StatesEntity
}
