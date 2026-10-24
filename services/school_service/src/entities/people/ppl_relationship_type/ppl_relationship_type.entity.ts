import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PplRelationshipTypeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  relationshipTypeCode?: string | null
  name: string
  isGuardianEligible?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PplRelationshipTypeCreationAttributes = Optional<PplRelationshipTypeAttributes, "id" | "publicId" | "recordCode" | "relationshipTypeCode" | "isGuardianEligible" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PplRelationshipTypeEntity
  extends Model<PplRelationshipTypeAttributes, PplRelationshipTypeCreationAttributes>
  implements PplRelationshipTypeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare relationshipTypeCode: string | null
  declare name: string
  declare isGuardianEligible: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPplRelationshipTypeEntity(sequelize: Sequelize): typeof PplRelationshipTypeEntity {
  PplRelationshipTypeEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ppl_relationship_type')"),
      },
      relationshipTypeCode: {
        type: DataTypes.TEXT,
        field: 'relationship_type_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      isGuardianEligible: {
        type: DataTypes.TEXT,
        field: 'is_guardian_eligible',
        allowNull: false,
        defaultValue: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'ppl_relationship_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PplRelationshipTypeEntity
}
