import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IndustryCronsAttributes = {
  id: number
  industryId: string | number
  cronId: string | number
  createdAt: Date
  updatedAt: Date
}

export type IndustryCronsCreationAttributes = Optional<IndustryCronsAttributes, never>

export class IndustryCronsEntity
  extends Model<IndustryCronsAttributes, IndustryCronsCreationAttributes>
  implements IndustryCronsAttributes
{
  declare id: number
  declare industryId: string | number
  declare cronId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initIndustryCronsEntity(sequelize: Sequelize): typeof IndustryCronsEntity {
  IndustryCronsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
      tableName: 'industry_crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return IndustryCronsEntity
}
