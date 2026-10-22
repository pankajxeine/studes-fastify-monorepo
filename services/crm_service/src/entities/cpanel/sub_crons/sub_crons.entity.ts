import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubCronsAttributes = {
  id?: string | number | null
  subId: string | number
  cronId: string | number
  status?: string
  createdAt?: Date
  updatedAt?: Date
}

export type SubCronsCreationAttributes = Optional<SubCronsAttributes, "id" | "status" | "createdAt" | "updatedAt">

export class SubCronsEntity
  extends Model<SubCronsAttributes, SubCronsCreationAttributes>
  implements SubCronsAttributes
{
  declare id: string | number | null
  declare subId: string | number
  declare cronId: string | number
  declare status: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSubCronsEntity(sequelize: Sequelize): typeof SubCronsEntity {
  SubCronsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subId: {
        type: DataTypes.BIGINT,
        field: 'sub_id',
        allowNull: false,
        references: { model: 'subs', key: 'id' },
      },
      cronId: {
        type: DataTypes.BIGINT,
        field: 'cron_id',
        allowNull: false,
        references: { model: 'crons', key: 'id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
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
      tableName: 'sub_crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubCronsEntity
}
