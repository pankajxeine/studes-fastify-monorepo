import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmResourceFoldersAttributes = {
  id?: string | number | null
  folderName?: string | null
  parentFolderId?: number | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CrmResourceFoldersCreationAttributes = Optional<CrmResourceFoldersAttributes, "id" | "folderName" | "parentFolderId" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class CrmResourceFoldersEntity
  extends Model<CrmResourceFoldersAttributes, CrmResourceFoldersCreationAttributes>
  implements CrmResourceFoldersAttributes
{
  declare id: string | number | null
  declare folderName: string | null
  declare parentFolderId: number | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmResourceFoldersEntity(sequelize: Sequelize): typeof CrmResourceFoldersEntity {
  CrmResourceFoldersEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      folderName: {
        type: DataTypes.STRING(100),
        field: 'folder_name',
        allowNull: true,
      },
      parentFolderId: {
        type: DataTypes.INTEGER,
        field: 'parent_folder_id',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
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
      tableName: 'crm_resource_folders',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmResourceFoldersEntity
}
