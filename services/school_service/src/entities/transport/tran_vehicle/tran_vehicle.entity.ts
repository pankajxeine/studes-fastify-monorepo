import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TranVehicleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  vehicleId?: string
  campusId: string
  registrationNo: string
  fleetNo: string
  vehicleType?: string
  make: string
  model: string
  manufactureYear: number
  seatingCapacity: number
  fuelType?: string
  odometerKm?: number
  gpsDeviceId?: string | null
  hasCctv?: string
  hasSpeedGovernor?: string
  insuranceProvider?: string | null
  insurancePolicyNo?: string | null
  insuranceExpiryOn: string
  fitnessCertificateNo?: string | null
  fitnessExpiryOn: string
  permitNo?: string | null
  permitExpiryOn?: Date | null
  emissionCertificateNo?: string | null
  emissionExpiryOn?: Date | null
  status?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TranVehicleCreationAttributes = Optional<TranVehicleAttributes, "id" | "publicId" | "recordCode" | "vehicleId" | "vehicleType" | "fuelType" | "odometerKm" | "gpsDeviceId" | "hasCctv" | "hasSpeedGovernor" | "insuranceProvider" | "insurancePolicyNo" | "fitnessCertificateNo" | "permitNo" | "permitExpiryOn" | "emissionCertificateNo" | "emissionExpiryOn" | "status" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TranVehicleEntity
  extends Model<TranVehicleAttributes, TranVehicleCreationAttributes>
  implements TranVehicleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare vehicleId: string
  declare campusId: string
  declare registrationNo: string
  declare fleetNo: string
  declare vehicleType: string
  declare make: string
  declare model: string
  declare manufactureYear: number
  declare seatingCapacity: number
  declare fuelType: string
  declare odometerKm: number
  declare gpsDeviceId: string | null
  declare hasCctv: string
  declare hasSpeedGovernor: string
  declare insuranceProvider: string | null
  declare insurancePolicyNo: string | null
  declare insuranceExpiryOn: string
  declare fitnessCertificateNo: string | null
  declare fitnessExpiryOn: string
  declare permitNo: string | null
  declare permitExpiryOn: Date | null
  declare emissionCertificateNo: string | null
  declare emissionExpiryOn: Date | null
  declare status: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTranVehicleEntity(sequelize: Sequelize): typeof TranVehicleEntity {
  TranVehicleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tran_vehicle')"),
      },
      vehicleId: {
        type: DataTypes.TEXT,
        field: 'vehicle_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      registrationNo: {
        type: DataTypes.STRING(20),
        field: 'registration_no',
        allowNull: false,
      },
      fleetNo: {
        type: DataTypes.STRING(20),
        field: 'fleet_no',
        allowNull: false,
      },
      vehicleType: {
        type: DataTypes.STRING(20),
        field: 'vehicle_type',
        allowNull: false,
        defaultValue: "bus",
      },
      make: {
        type: DataTypes.TEXT,
        field: 'make',
        allowNull: false,
      },
      model: {
        type: DataTypes.TEXT,
        field: 'model',
        allowNull: false,
      },
      manufactureYear: {
        type: DataTypes.SMALLINT,
        field: 'manufacture_year',
        allowNull: false,
      },
      seatingCapacity: {
        type: DataTypes.SMALLINT,
        field: 'seating_capacity',
        allowNull: false,
      },
      fuelType: {
        type: DataTypes.STRING(20),
        field: 'fuel_type',
        allowNull: false,
        defaultValue: "diesel",
      },
      odometerKm: {
        type: DataTypes.INTEGER,
        field: 'odometer_km',
        allowNull: false,
        defaultValue: 0,
      },
      gpsDeviceId: {
        type: DataTypes.STRING(40),
        field: 'gps_device_id',
        allowNull: true,
      },
      hasCctv: {
        type: DataTypes.TEXT,
        field: 'has_cctv',
        allowNull: false,
        defaultValue: false,
      },
      hasSpeedGovernor: {
        type: DataTypes.TEXT,
        field: 'has_speed_governor',
        allowNull: false,
        defaultValue: false,
      },
      insuranceProvider: {
        type: DataTypes.TEXT,
        field: 'insurance_provider',
        allowNull: true,
      },
      insurancePolicyNo: {
        type: DataTypes.STRING(40),
        field: 'insurance_policy_no',
        allowNull: true,
      },
      insuranceExpiryOn: {
        type: DataTypes.TEXT,
        field: 'insurance_expiry_on',
        allowNull: false,
      },
      fitnessCertificateNo: {
        type: DataTypes.STRING(40),
        field: 'fitness_certificate_no',
        allowNull: true,
      },
      fitnessExpiryOn: {
        type: DataTypes.TEXT,
        field: 'fitness_expiry_on',
        allowNull: false,
      },
      permitNo: {
        type: DataTypes.STRING(40),
        field: 'permit_no',
        allowNull: true,
      },
      permitExpiryOn: {
        type: DataTypes.DATEONLY,
        field: 'permit_expiry_on',
        allowNull: true,
      },
      emissionCertificateNo: {
        type: DataTypes.STRING(40),
        field: 'emission_certificate_no',
        allowNull: true,
      },
      emissionExpiryOn: {
        type: DataTypes.DATEONLY,
        field: 'emission_expiry_on',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(20),
        field: 'status',
        allowNull: false,
        defaultValue: "active",
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
      tableName: 'tran_vehicle',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['registration_no'] },
      { unique: true, fields: ['campus_id', 'fleet_no'] }
      ]
    }
  )
  return TranVehicleEntity
}
