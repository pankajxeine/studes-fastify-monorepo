"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGeneratedEntities = initGeneratedEntities;
const cpanels_entity_1 = require("./cpanels/cpanels.entity");
const crms_entity_1 = require("./crms/crms.entity");
const master_passwords_entity_1 = require("./master_passwords/master_passwords.entity");
const migration_details_entity_1 = require("./migration_details/migration_details.entity");
const sites_entity_1 = require("./sites/sites.entity");
const skeleton_details_entity_1 = require("./skeleton_details/skeleton_details.entity");
function initGeneratedEntities(sequelize) {
    return {
        models: {
            cpanels: (0, cpanels_entity_1.initCpanelsEntity)(sequelize),
            crms: (0, crms_entity_1.initCrmsEntity)(sequelize),
            master_passwords: (0, master_passwords_entity_1.initMasterPasswordsEntity)(sequelize),
            migration_details: (0, migration_details_entity_1.initMigrationDetailsEntity)(sequelize),
            sites: (0, sites_entity_1.initSitesEntity)(sequelize),
            skeleton_details: (0, skeleton_details_entity_1.initSkeletonDetailsEntity)(sequelize)
        }
    };
}
