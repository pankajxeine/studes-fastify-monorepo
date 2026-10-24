import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PplEmergencyContactAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  emergencyContactId?: string
  personId: string
  contactPersonId?: string | null
  contactName?: string | null
  relationshipTypeCode: string
  phone: string
  altPhone?: string | null
  email?: string | null
  priority?: number
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PplEmergencyContactCreationAttributes = Optional<PplEmergencyContactAttributes, "id" | "publicId" | "recordCode" | "emergencyContactId" | "contactPersonId" | "contactName" | "altPhone" | "email" | "priority" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PplEmergencyContactEntity
  extends Model<PplEmergencyContactAttributes, PplEmergencyContactCreationAttributes>
  implements PplEmergencyContactAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare emergencyContactId: string
  declare personId: string
  declare contactPersonId: string | null
  declare contactName: string | null
  declare relationshipTypeCode: string
  declare phone: string
  declare altPhone: string | null
  declare email: string | null
  declare priority: number
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPplEmergencyContactEntity(sequelize: Sequelize): typeof PplEmergencyContactEntity {
  PplEmergencyContactEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ppl_emergency_contact')"),
      },
      emergencyContactId: {
        type: DataTypes.TEXT,
        field: 'emergency_contact_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
        onDelete: 'CASCADE',
      },
      contactPersonId: {
        type: DataTypes.TEXT,
        field: 'contact_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      contactName: {
        type: DataTypes.TEXT,
        field: 'contact_name',
        allowNull: true,
      },
      relationshipTypeCode: {
        type: DataTypes.TEXT,
        field: 'relationship_type_code',
        allowNull: false,
        references: { model: 'ppl_relationship_type', key: 'relationship_type_code' },
        onUpdate: 'CASCADE',
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: false,
      },
      altPhone: {
        type: DataTypes.TEXT,
        field: 'alt_phone',
        allowNull: true,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: true,
      },
      priority: {
        type: DataTypes.SMALLINT,
        field: 'priority',
        allowNull: false,
        defaultValue: 1,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
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
      tableName: 'ppl_emergency_contact',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id', 'priority'] }
      ]
    }
  )
  return PplEmergencyContactEntity
}
