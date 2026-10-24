import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnPersonAllergenAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  personAllergenId?: string
  personId: string
  allergenCode: string
  medicalProfileId?: string | null
  severity: string
  reaction?: string | null
  actionPlan?: string | null
  isActive?: string
  verifiedOn?: Date | null
  verifiedByStaffId?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnPersonAllergenCreationAttributes = Optional<CntnPersonAllergenAttributes, "id" | "publicId" | "recordCode" | "personAllergenId" | "medicalProfileId" | "reaction" | "actionPlan" | "isActive" | "verifiedOn" | "verifiedByStaffId" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnPersonAllergenEntity
  extends Model<CntnPersonAllergenAttributes, CntnPersonAllergenCreationAttributes>
  implements CntnPersonAllergenAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare personAllergenId: string
  declare personId: string
  declare allergenCode: string
  declare medicalProfileId: string | null
  declare severity: string
  declare reaction: string | null
  declare actionPlan: string | null
  declare isActive: string
  declare verifiedOn: Date | null
  declare verifiedByStaffId: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnPersonAllergenEntity(sequelize: Sequelize): typeof CntnPersonAllergenEntity {
  CntnPersonAllergenEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_person_allergen')"),
      },
      personAllergenId: {
        type: DataTypes.TEXT,
        field: 'person_allergen_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      allergenCode: {
        type: DataTypes.TEXT,
        field: 'allergen_code',
        allowNull: false,
        references: { model: 'cntn_allergen', key: 'allergen_code' },
        onUpdate: 'CASCADE',
      },
      medicalProfileId: {
        type: DataTypes.TEXT,
        field: 'medical_profile_id',
        allowNull: true,
        references: { model: 'health_medical_profile', key: 'medical_profile_id' },
      },
      severity: {
        type: DataTypes.TEXT,
        field: 'severity',
        allowNull: false,
      },
      reaction: {
        type: DataTypes.TEXT,
        field: 'reaction',
        allowNull: true,
      },
      actionPlan: {
        type: DataTypes.TEXT,
        field: 'action_plan',
        allowNull: true,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      verifiedOn: {
        type: DataTypes.DATEONLY,
        field: 'verified_on',
        allowNull: true,
      },
      verifiedByStaffId: {
        type: DataTypes.TEXT,
        field: 'verified_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
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
      tableName: 'cntn_person_allergen',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id', 'allergen_code'] }
      ]
    }
  )
  return CntnPersonAllergenEntity
}
