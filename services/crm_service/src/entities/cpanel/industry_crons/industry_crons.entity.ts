import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryCronsAttributes = {
  id?: string | number | null
  industryId: string | number
  cronId: string | number
  createdAt?: Date
  updatedAt?: Date
}

export type IndustryCronsCreationAttributes = Optional<IndustryCronsAttributes, "id" | "createdAt" | "updatedAt">

export class IndustryCronsEntity
  extends Model<IndustryCronsAttributes, IndustryCronsCreationAttributes>
  implements IndustryCronsAttributes
{
  declare id: string | number | null
  declare industryId: string | number
  declare cronId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initIndustryCronsEntity(sequelize: Sequelize): typeof IndustryCronsEntity {
  IndustryCronsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      industryId: {
        type: DataTypes.BIGINT,
        field: 'industry_id',
        allowNull: false,
      },
      cronId: {
        type: DataTypes.BIGINT,
        field: 'cron_id',
        allowNull: false,
        references: { model: 'crons', key: 'id' },
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
      tableName: 'industry_crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return IndustryCronsEntity
}
