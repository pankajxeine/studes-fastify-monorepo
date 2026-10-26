"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranStudentTransportEntity = void 0;
exports.initTranStudentTransportEntity = initTranStudentTransportEntity;
const sequelize_1 = require("sequelize");
class TranStudentTransportEntity extends sequelize_1.Model {
}
exports.TranStudentTransportEntity = TranStudentTransportEntity;
function initTranStudentTransportEntity(sequelize) {
    TranStudentTransportEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('tran_student_transport')"),
        },
        studentTransportId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_transport_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        routeStopId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'route_stop_id',
            allowNull: false,
            references: { model: 'tran_route_stop', key: 'route_stop_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        serviceType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'service_type',
            allowNull: false,
            defaultValue: "both",
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
        },
        endDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'end_date',
            allowNull: true,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'status',
            allowNull: false,
            defaultValue: "active",
        },
        pickupPersonNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pickup_person_note',
            allowNull: true,
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
        tableName: 'tran_student_transport',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return TranStudentTransportEntity;
}
