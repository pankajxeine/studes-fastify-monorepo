"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorGuestEntity = void 0;
exports.initVisitorGuestEntity = initVisitorGuestEntity;
const sequelize_1 = require("sequelize");
class VisitorGuestEntity extends sequelize_1.Model {
}
exports.VisitorGuestEntity = VisitorGuestEntity;
function initVisitorGuestEntity(sequelize) {
    VisitorGuestEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('visitor_guest')"),
        },
        guestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guest_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        guestType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guest_type',
            allowNull: false,
            defaultValue: "visitor",
        },
        organizationName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'organization_name',
            allowNull: true,
        },
        designation: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'designation',
            allowNull: true,
        },
        vendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vendor_id',
            allowNull: true,
            references: { model: 'org_vendor', key: 'vendor_id' },
        },
        idDocumentType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'id_document_type',
            allowNull: true,
        },
        idDocumentNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'id_document_no',
            allowNull: true,
        },
        idDocumentKey: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'id_document_key',
            allowNull: true,
            autoIncrement: true,
        },
        photoFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'photo_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        vehicleNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'vehicle_no',
            allowNull: true,
        },
        safetyInductionOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'safety_induction_on',
            allowNull: true,
        },
        ndaSignedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'nda_signed_on',
            allowNull: true,
        },
        isFrequentVisitor: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_frequent_visitor',
            allowNull: false,
            defaultValue: false,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'visitor_guest',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id'] }
        ]
    });
    return VisitorGuestEntity;
}
