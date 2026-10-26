"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadTermEntity = void 0;
exports.initAcadTermEntity = initAcadTermEntity;
const sequelize_1 = require("sequelize");
class AcadTermEntity extends sequelize_1.Model {
}
exports.AcadTermEntity = AcadTermEntity;
function initAcadTermEntity(sequelize) {
    AcadTermEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_term')"),
        },
        termId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        kind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'kind',
            allowNull: false,
            defaultValue: "term",
        },
        sequenceNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sequence_no',
            allowNull: false,
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
        },
        endDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'end_date',
            allowNull: false,
        },
        span: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'span',
            allowNull: true,
            autoIncrement: true,
        },
        registrationOpensOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'registration_opens_on',
            allowNull: true,
        },
        registrationClosesOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'registration_closes_on',
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
        tableName: 'acad_term',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] },
            { unique: true, fields: ['term_id', 'academic_year_id'] },
            { unique: true, fields: ['academic_year_id', 'campus_id', 'sequence_no'] }
        ]
    });
    return AcadTermEntity;
}
