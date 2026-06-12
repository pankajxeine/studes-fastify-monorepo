import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteDomainsAttributes = {
  id?: number
  institute_id: number
  domain: string
  schema_name: string
  is_primary?: boolean
  status?: string
  created_at?: Date
  updated_at?: Date
}

export type InstituteDomainsCreationAttributes = Optional<InstituteDomainsAttributes, "id" | "is_primary" | "status" | "created_at" | "updated_at">

export class InstituteDomainsEntity
  extends Model<InstituteDomainsAttributes, InstituteDomainsCreationAttributes>
  implements InstituteDomainsAttributes
{
  declare id: number
  declare institute_id: number
  declare domain: string
  declare schema_name: string
  declare is_primary: boolean
  declare status: string
  declare created_at: Date
  declare updated_at: Date
}

export function initInstituteDomainsEntity(sequelize: Sequelize): typeof InstituteDomainsEntity {
  InstituteDomainsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      institute_id: {
        type: DataTypes.INTEGER,
        field: 'institute_id',
        allowNull: false,
      },
      domain: {
        type: DataTypes.STRING(255),
        field: 'domain',
        allowNull: false,
        unique: true,
      },
      schema_name: {
        type: DataTypes.STRING(150),
        field: 'schema_name',
        allowNull: false,
      },
      is_primary: {
        type: DataTypes.BOOLEAN,
        field: 'is_primary',
        allowNull: false,
        defaultValue: "0",
      },
      status: {
        type: DataTypes.ENUM('active','inactive'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'institute_domains',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return InstituteDomainsEntity
}
