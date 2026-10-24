import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadOfferingInstructorAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  offeringInstructorId?: string
  courseOfferingId: string
  staffId: string
  instructorRole?: string
  isPrimary?: string
  validFrom: string
  validTo?: Date | null
  validity?: string | null
  loadPercentage?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadOfferingInstructorCreationAttributes = Optional<AcadOfferingInstructorAttributes, "id" | "publicId" | "recordCode" | "offeringInstructorId" | "instructorRole" | "isPrimary" | "validTo" | "validity" | "loadPercentage" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadOfferingInstructorEntity
  extends Model<AcadOfferingInstructorAttributes, AcadOfferingInstructorCreationAttributes>
  implements AcadOfferingInstructorAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare offeringInstructorId: string
  declare courseOfferingId: string
  declare staffId: string
  declare instructorRole: string
  declare isPrimary: string
  declare validFrom: string
  declare validTo: Date | null
  declare validity: string | null
  declare loadPercentage: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadOfferingInstructorEntity(sequelize: Sequelize): typeof AcadOfferingInstructorEntity {
  AcadOfferingInstructorEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_offering_instructor')"),
      },
      offeringInstructorId: {
        type: DataTypes.TEXT,
        field: 'offering_instructor_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: false,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
        onDelete: 'CASCADE',
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      instructorRole: {
        type: DataTypes.STRING(20),
        field: 'instructor_role',
        allowNull: false,
        defaultValue: "primary",
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: true,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      loadPercentage: {
        type: DataTypes.TEXT,
        field: 'load_percentage',
        allowNull: false,
        defaultValue: 100,
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
      tableName: 'acad_offering_instructor',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AcadOfferingInstructorEntity
}
