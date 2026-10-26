"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisAdmissionCycleSeatEntity = void 0;
exports.initAdmisAdmissionCycleSeatEntity = initAdmisAdmissionCycleSeatEntity;
const sequelize_1 = require("sequelize");
class AdmisAdmissionCycleSeatEntity extends sequelize_1.Model {
}
exports.AdmisAdmissionCycleSeatEntity = AdmisAdmissionCycleSeatEntity;
function initAdmisAdmissionCycleSeatEntity(sequelize) {
    AdmisAdmissionCycleSeatEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('admis_admission_cycle_seat')"),
        },
        admissionCycleSeatId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'admission_cycle_seat_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        admissionCycleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'admission_cycle_id',
            allowNull: false,
            references: { model: 'admis_admission_cycle', key: 'admission_cycle_id' },
            onDelete: 'CASCADE',
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_level_id',
            allowNull: false,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
        },
        seatsTotal: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'seats_total',
            allowNull: false,
        },
        seatsReserved: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'seats_reserved',
            allowNull: false,
            defaultValue: 0,
        },
        waitlistLimit: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'waitlist_limit',
            allowNull: false,
            defaultValue: 0,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'admis_admission_cycle_seat',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['admission_cycle_id', 'grade_level_id'] }
        ]
    });
    return AdmisAdmissionCycleSeatEntity;
}
