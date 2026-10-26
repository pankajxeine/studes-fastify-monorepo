"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TtblPeriodEntity = void 0;
exports.initTtblPeriodEntity = initTtblPeriodEntity;
const sequelize_1 = require("sequelize");
class TtblPeriodEntity extends sequelize_1.Model {
}
exports.TtblPeriodEntity = TtblPeriodEntity;
function initTtblPeriodEntity(sequelize) {
    TtblPeriodEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ttbl_period')"),
        },
        periodId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        bellScheduleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bell_schedule_id',
            allowNull: false,
            references: { model: 'ttbl_bell_schedule', key: 'bell_schedule_id' },
            onDelete: 'CASCADE',
        },
        code: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        sequenceNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sequence_no',
            allowNull: false,
        },
        startTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'start_time',
            allowNull: false,
        },
        endTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'end_time',
            allowNull: false,
        },
        isBreak: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_break',
            allowNull: false,
            defaultValue: false,
        },
        durationMinutes: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'duration_minutes',
            allowNull: true,
            autoIncrement: true,
        },
        timeSpan: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'time_span',
            allowNull: true,
            autoIncrement: true,
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
        tableName: 'ttbl_period',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['bell_schedule_id', 'code'] },
            { unique: true, fields: ['bell_schedule_id', 'sequence_no'] }
        ]
    });
    return TtblPeriodEntity;
}
