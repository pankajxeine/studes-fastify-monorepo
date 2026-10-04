import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaxStoreLinksAttributes = {
  id?: number
  appLink?: string | null
  industry?: string | null
}

export type PaxStoreLinksCreationAttributes = Optional<PaxStoreLinksAttributes, "id" | "appLink" | "industry">

export class PaxStoreLinksEntity
  extends Model<PaxStoreLinksAttributes, PaxStoreLinksCreationAttributes>
  implements PaxStoreLinksAttributes
{
  declare id: number
  declare appLink: string | null
  declare industry: string | null
}

export function initPaxStoreLinksEntity(sequelize: Sequelize): typeof PaxStoreLinksEntity {
  PaxStoreLinksEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      }
    },
    {
      sequelize,
      tableName: 'pax_store_links',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return PaxStoreLinksEntity
}
