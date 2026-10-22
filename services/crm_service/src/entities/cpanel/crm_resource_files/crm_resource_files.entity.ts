import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmResourceFilesAttributes = {
  id?: string | number | null
  folderId?: number | null
  fileName?: string | null
  fileOrigionalName?: string | null
  fileDescription?: string | null
  fileType?: string | null
  fileSize?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CrmResourceFilesCreationAttributes = Optional<CrmResourceFilesAttributes, "id" | "folderId" | "fileName" | "fileOrigionalName" | "fileDescription" | "fileType" | "fileSize" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt">

export class CrmResourceFilesEntity
  extends Model<CrmResourceFilesAttributes, CrmResourceFilesCreationAttributes>
  implements CrmResourceFilesAttributes
{
  declare id: string | number | null
  declare folderId: number | null
  declare fileName: string | null
  declare fileOrigionalName: string | null
  declare fileDescription: string | null
  declare fileType: string | null
  declare fileSize: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmResourceFilesEntity(sequelize: Sequelize): typeof CrmResourceFilesEntity {
  CrmResourceFilesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      folderId: {
        type: DataTypes.INTEGER,
        field: 'folder_id',
        allowNull: true,
      },
      fileName: {
        type: DataTypes.STRING(150),
        field: 'file_name',
        allowNull: true,
      },
      fileOrigionalName: {
        type: DataTypes.STRING(150),
        field: 'file_origional_name',
        allowNull: true,
      },
      fileDescription: {
        type: DataTypes.STRING(150),
        field: 'file_description',
        allowNull: true,
      },
      fileType: {
        type: DataTypes.STRING(150),
        field: 'file_type',
        allowNull: true,
      },
      fileSize: {
        type: DataTypes.STRING(50),
        field: 'file_size',
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
      tableName: 'crm_resource_files',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmResourceFilesEntity
}
