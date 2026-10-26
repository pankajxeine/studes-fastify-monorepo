"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const ppl_gender_entity_1 = require("./ppl_gender/ppl_gender.entity");
const ppl_relationship_type_entity_1 = require("./ppl_relationship_type/ppl_relationship_type.entity");
const ppl_person_entity_1 = require("./ppl_person/ppl_person.entity");
const ppl_person_address_entity_1 = require("./ppl_person_address/ppl_person_address.entity");
const ppl_person_contact_entity_1 = require("./ppl_person_contact/ppl_person_contact.entity");
const ppl_emergency_contact_entity_1 = require("./ppl_emergency_contact/ppl_emergency_contact.entity");
const ppl_guardian_entity_1 = require("./ppl_guardian/ppl_guardian.entity");
function createGeneratedModels(sequelize) {
    const models = {
        ppl_gender: (0, ppl_gender_entity_1.initPplGenderEntity)(sequelize),
        ppl_relationship_type: (0, ppl_relationship_type_entity_1.initPplRelationshipTypeEntity)(sequelize),
        ppl_person: (0, ppl_person_entity_1.initPplPersonEntity)(sequelize),
        ppl_person_address: (0, ppl_person_address_entity_1.initPplPersonAddressEntity)(sequelize),
        ppl_person_contact: (0, ppl_person_contact_entity_1.initPplPersonContactEntity)(sequelize),
        ppl_emergency_contact: (0, ppl_emergency_contact_entity_1.initPplEmergencyContactEntity)(sequelize),
        ppl_guardian: (0, ppl_guardian_entity_1.initPplGuardianEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.ppl_person.belongsTo(models.ppl_gender, { as: 'genderCode', foreignKey: 'genderCode', targetKey: 'genderCode', onUpdate: 'CASCADE' });
    models.ppl_gender.hasMany(models.ppl_person, { as: 'pplPerson', foreignKey: 'genderCode', sourceKey: 'genderCode', onUpdate: 'CASCADE' });
    models.ppl_person_address.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId', onDelete: 'CASCADE' });
    models.ppl_person.hasMany(models.ppl_person_address, { as: 'pplPersonAddress', foreignKey: 'personId', sourceKey: 'personId', onDelete: 'CASCADE' });
    models.ppl_person_contact.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId', onDelete: 'CASCADE' });
    models.ppl_person.hasMany(models.ppl_person_contact, { as: 'pplPersonContact', foreignKey: 'personId', sourceKey: 'personId', onDelete: 'CASCADE' });
    models.ppl_emergency_contact.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId', onDelete: 'CASCADE' });
    models.ppl_person.hasMany(models.ppl_emergency_contact, { as: 'pplEmergencyContact', foreignKey: 'personId', sourceKey: 'personId', onDelete: 'CASCADE' });
    models.ppl_emergency_contact.belongsTo(models.ppl_person, { as: 'contactPerson', foreignKey: 'contactPersonId', targetKey: 'personId' });
    models.ppl_person.hasMany(models.ppl_emergency_contact, { as: 'pplEmergencyContactByContactPersonId', foreignKey: 'contactPersonId', sourceKey: 'personId' });
    models.ppl_emergency_contact.belongsTo(models.ppl_relationship_type, { as: 'relationshipTypeCode', foreignKey: 'relationshipTypeCode', targetKey: 'relationshipTypeCode', onUpdate: 'CASCADE' });
    models.ppl_relationship_type.hasMany(models.ppl_emergency_contact, { as: 'pplEmergencyContact', foreignKey: 'relationshipTypeCode', sourceKey: 'relationshipTypeCode', onUpdate: 'CASCADE' });
    models.ppl_guardian.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId' });
    models.ppl_person.hasMany(models.ppl_guardian, { as: 'pplGuardian', foreignKey: 'personId', sourceKey: 'personId' });
}
