import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocumentTypesAttributes = {
  id?: string | number | null
  name?: string | null
  status?: string | null
}

export type DocumentTypesCreationAttributes = Optional<DocumentTypesAttributes, "id" | "name" | "status">

export class DocumentTypesEntity
  extends Model<DocumentTypesAttributes, DocumentTypesCreationAttributes>
  implements DocumentTypesAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare status: string | null
}

export function initDocumentTypesEntity(sequelize: Sequelize): typeof DocumentTypesEntity {
  DocumentTypesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(100),
        field: 'name',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      }
    },
    {
      sequelize,
      tableName: 'document_types',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return DocumentTypesEntity
}
