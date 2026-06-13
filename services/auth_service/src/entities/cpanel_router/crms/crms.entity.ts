import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmsAttributes = {
  id?: number | null
  domain: string
  cpanelId: number
  createdAt: Date
  updatedAt: Date
}

export type CrmsCreationAttributes = Optional<CrmsAttributes, "id">

export class CrmsEntity
  extends Model<CrmsAttributes, CrmsCreationAttributes>
  implements CrmsAttributes
{
  declare id: number | null
  declare domain: string
  declare cpanelId: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmsEntity(sequelize: Sequelize): typeof CrmsEntity {
  CrmsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      domain: {
        type: DataTypes.STRING(100),
        field: 'domain',
        allowNull: false,
      },
      cpanelId: {
        type: DataTypes.INTEGER,
        field: 'cpanel_id',
        allowNull: false,
        references: { model: 'cpanels', key: 'id' },
        onDelete: 'CASCADE',
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
      tableName: 'crms',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['domain'] }
      ]
    }
  )
  return CrmsEntity
}
