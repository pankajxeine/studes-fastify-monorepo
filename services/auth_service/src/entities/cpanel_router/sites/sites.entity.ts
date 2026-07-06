import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SitesAttributes = {
  id?: number | null
  domain: string
  shortCode: string
  mobileLogo: string
  domainType?: string | null
  cpanelId: number
  createdAt: Date
  updatedAt: Date
}

export type SitesCreationAttributes = Optional<SitesAttributes, "id" | "domainType">

export class SitesEntity
  extends Model<SitesAttributes, SitesCreationAttributes>
  implements SitesAttributes
{
  declare id: number | null
  declare domain: string
  declare shortCode: string
  declare mobileLogo: string
  declare domainType: string | null
  declare cpanelId: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSitesEntity(sequelize: Sequelize): typeof SitesEntity {
  SitesEntity.init(
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
      shortCode: {
        type: DataTypes.STRING(100),
        field: 'short_code',
        allowNull: false,
      },
      mobileLogo: {
        type: DataTypes.STRING(255),
        field: 'mobile_logo',
        allowNull: false,
      },
      domainType: {
        type: DataTypes.TEXT,
        field: 'domain_type',
        allowNull: true,
        defaultValue: "tenant",
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
      tableName: 'sites',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['domain'] }
      ]
    }
  )
  return SitesEntity
}
