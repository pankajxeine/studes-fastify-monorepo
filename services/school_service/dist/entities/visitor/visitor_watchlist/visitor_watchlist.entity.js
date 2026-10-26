"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorWatchlistEntity = void 0;
exports.initVisitorWatchlistEntity = initVisitorWatchlistEntity;
const sequelize_1 = require("sequelize");
class VisitorWatchlistEntity extends sequelize_1.Model {
}
exports.VisitorWatchlistEntity = VisitorWatchlistEntity;
function initVisitorWatchlistEntity(sequelize) {
    VisitorWatchlistEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('visitor_watchlist')"),
        },
        watchlistId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'watchlist_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        fullName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'full_name',
            allowNull: false,
        },
        dateOfBirth: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'date_of_birth',
            allowNull: true,
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
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        reasonCategory: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'reason_category',
            allowNull: false,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        referenceNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'reference_no',
            allowNull: true,
        },
        matchAction: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'match_action',
            allowNull: false,
            defaultValue: "deny_entry",
        },
        severity: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'severity',
            allowNull: false,
            defaultValue: "high",
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
        },
        addedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'added_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        liftedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'lifted_at',
            allowNull: true,
        },
        liftedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lifted_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        liftReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lift_reason',
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
        tableName: 'visitor_watchlist',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return VisitorWatchlistEntity;
}
