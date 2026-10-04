import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubCronsAttributes = {
  id: number
  subId: string | number
  cronId: string | number
  status?: string
  createdAt: Date
  updatedAt: Date
}

export type SubCronsCreationAttributes = Optional<SubCronsAttributes, "status">

export class SubCronsEntity
  extends Model<SubCronsAttributes, SubCronsCreationAttributes>
  implements SubCronsAttributes
{
  declare id: number
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
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      subId: {
        type: DataTypes.BIGINT,
        field: 'sub_id',
        allowNull: false,
      },
      cronId: {
        type: DataTypes.BIGINT,
        field: 'cron_id',
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
      tableName: 'sub_crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubCronsEntity
}
