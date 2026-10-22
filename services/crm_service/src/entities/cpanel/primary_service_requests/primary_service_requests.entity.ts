import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrimaryServiceRequestsAttributes = {
  id?: string | number | null
  name: string
  status?: string
}

export type PrimaryServiceRequestsCreationAttributes = Optional<PrimaryServiceRequestsAttributes, "id" | "status">

export class PrimaryServiceRequestsEntity
  extends Model<PrimaryServiceRequestsAttributes, PrimaryServiceRequestsCreationAttributes>
  implements PrimaryServiceRequestsAttributes
{
  declare id: string | number | null
  declare name: string
  declare status: string
}

export function initPrimaryServiceRequestsEntity(sequelize: Sequelize): typeof PrimaryServiceRequestsEntity {
  PrimaryServiceRequestsEntity.init(
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
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      }
    },
    {
      sequelize,
      tableName: 'primary_service_requests',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['name'] }
      ]
    }
  )
  return PrimaryServiceRequestsEntity
}
