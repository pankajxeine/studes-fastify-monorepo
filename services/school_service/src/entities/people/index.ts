import type { Sequelize } from 'sequelize'
import { initPplGenderEntity } from './ppl_gender/ppl_gender.entity'
import { initPplRelationshipTypeEntity } from './ppl_relationship_type/ppl_relationship_type.entity'
import { initPplPersonEntity } from './ppl_person/ppl_person.entity'
import { initPplPersonAddressEntity } from './ppl_person_address/ppl_person_address.entity'
import { initPplPersonContactEntity } from './ppl_person_contact/ppl_person_contact.entity'
import { initPplEmergencyContactEntity } from './ppl_emergency_contact/ppl_emergency_contact.entity'
import { initPplGuardianEntity } from './ppl_guardian/ppl_guardian.entity'

export type GeneratedModels = {
  ppl_gender: ReturnType<typeof initPplGenderEntity>;
  ppl_relationship_type: ReturnType<typeof initPplRelationshipTypeEntity>;
  ppl_person: ReturnType<typeof initPplPersonEntity>;
  ppl_person_address: ReturnType<typeof initPplPersonAddressEntity>;
  ppl_person_contact: ReturnType<typeof initPplPersonContactEntity>;
  ppl_emergency_contact: ReturnType<typeof initPplEmergencyContactEntity>;
  ppl_guardian: ReturnType<typeof initPplGuardianEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      ppl_gender: initPplGenderEntity(sequelize),
      ppl_relationship_type: initPplRelationshipTypeEntity(sequelize),
      ppl_person: initPplPersonEntity(sequelize),
      ppl_person_address: initPplPersonAddressEntity(sequelize),
      ppl_person_contact: initPplPersonContactEntity(sequelize),
      ppl_emergency_contact: initPplEmergencyContactEntity(sequelize),
      ppl_guardian: initPplGuardianEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.ppl_person.belongsTo(models.ppl_gender, { as: 'genderCode', foreignKey: 'genderCode', targetKey: 'genderCode', onUpdate: 'CASCADE' })
  models.ppl_gender.hasMany(models.ppl_person, { as: 'pplPerson', foreignKey: 'genderCode', sourceKey: 'genderCode', onUpdate: 'CASCADE' })
  models.ppl_person_address.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId', onDelete: 'CASCADE' })
  models.ppl_person.hasMany(models.ppl_person_address, { as: 'pplPersonAddress', foreignKey: 'personId', sourceKey: 'personId', onDelete: 'CASCADE' })
  models.ppl_person_contact.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId', onDelete: 'CASCADE' })
  models.ppl_person.hasMany(models.ppl_person_contact, { as: 'pplPersonContact', foreignKey: 'personId', sourceKey: 'personId', onDelete: 'CASCADE' })
  models.ppl_emergency_contact.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId', onDelete: 'CASCADE' })
  models.ppl_person.hasMany(models.ppl_emergency_contact, { as: 'pplEmergencyContact', foreignKey: 'personId', sourceKey: 'personId', onDelete: 'CASCADE' })
  models.ppl_emergency_contact.belongsTo(models.ppl_person, { as: 'contactPerson', foreignKey: 'contactPersonId', targetKey: 'personId' })
  models.ppl_person.hasMany(models.ppl_emergency_contact, { as: 'pplEmergencyContactByContactPersonId', foreignKey: 'contactPersonId', sourceKey: 'personId' })
  models.ppl_emergency_contact.belongsTo(models.ppl_relationship_type, { as: 'relationshipTypeCode', foreignKey: 'relationshipTypeCode', targetKey: 'relationshipTypeCode', onUpdate: 'CASCADE' })
  models.ppl_relationship_type.hasMany(models.ppl_emergency_contact, { as: 'pplEmergencyContact', foreignKey: 'relationshipTypeCode', sourceKey: 'relationshipTypeCode', onUpdate: 'CASCADE' })
  models.ppl_guardian.belongsTo(models.ppl_person, { as: 'person', foreignKey: 'personId', targetKey: 'personId' })
  models.ppl_person.hasMany(models.ppl_guardian, { as: 'pplGuardian', foreignKey: 'personId', sourceKey: 'personId' })
}
