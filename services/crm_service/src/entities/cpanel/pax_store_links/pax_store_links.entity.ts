import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaxStoreLinksAttributes = {
  id?: string | number | null
  appLink?: string | null
  industry?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type PaxStoreLinksCreationAttributes = Optional<PaxStoreLinksAttributes, "id" | "appLink" | "industry" | "createdAt" | "updatedAt">

export class PaxStoreLinksEntity
  extends Model<PaxStoreLinksAttributes, PaxStoreLinksCreationAttributes>
  implements PaxStoreLinksAttributes
{
  declare id: string | number | null
  declare appLink: string | null
  declare industry: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPaxStoreLinksEntity(sequelize: Sequelize): typeof PaxStoreLinksEntity {
  PaxStoreLinksEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      appLink: {
        type: DataTypes.STRING(150),
        field: 'app_link',
        allowNull: true,
      },
      industry: {
        type: DataTypes.TEXT,
        field: 'industry',
        allowNull: true,
        primaryKey: true,
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
      tableName: 'pax_store_links',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PaxStoreLinksEntity
}
