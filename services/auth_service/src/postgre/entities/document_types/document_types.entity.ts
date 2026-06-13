import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocumentTypesAttributes = {
  id?: number | null
  name?: string | null
  status?: string | null
  created_by?: number | null
  updated_by?: number | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type DocumentTypesCreationAttributes = Optional<DocumentTypesAttributes, "id" | "name" | "status" | "created_by" | "updated_by" | "created_at" | "updated_at" | "deleted_at">

export class DocumentTypesEntity
  extends Model<DocumentTypesAttributes, DocumentTypesCreationAttributes>
  implements DocumentTypesAttributes
{
  declare id: number | null
  declare name: string | null
  declare status: string | null
  declare created_by: number | null
  declare updated_by: number | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initDocumentTypesEntity(sequelize: Sequelize): typeof DocumentTypesEntity {
  DocumentTypesEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      },
      deleted_at: {
        type: DataTypes.CHAR,
        field: 'deleted_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'document_types',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return DocumentTypesEntity
}
