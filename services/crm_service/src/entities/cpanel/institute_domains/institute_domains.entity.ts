import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InstituteDomainsAttributes = {
  id?: string | number | null
  instituteId?: number | null
  domain?: string | null
  schemaName?: string | null
  isPrimary?: string
  status?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type InstituteDomainsCreationAttributes = Optional<InstituteDomainsAttributes, "id" | "instituteId" | "domain" | "schemaName" | "isPrimary" | "status" | "createdAt" | "updatedAt">

export class InstituteDomainsEntity
  extends Model<InstituteDomainsAttributes, InstituteDomainsCreationAttributes>
  implements InstituteDomainsAttributes
{
  declare id: string | number | null
  declare instituteId: number | null
  declare domain: string | null
  declare schemaName: string | null
  declare isPrimary: string
  declare status: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initInstituteDomainsEntity(sequelize: Sequelize): typeof InstituteDomainsEntity {
  InstituteDomainsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      instituteId: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
        references: { model: 'institutes', key: 'id' },
      },
      domain: {
        type: DataTypes.STRING(100),
        field: 'domain',
        allowNull: true,
      },
      schemaName: {
        type: DataTypes.STRING(100),
        field: 'schema_name',
        allowNull: true,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: "TRUE",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
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
      tableName: 'institute_domains',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['domain'] }
      ]
    }
  )
  return InstituteDomainsEntity
}
