exports = async function getAllShootings(payload, response) {
  const exclusions = {
    INCIDENT_KEY: 0, JURISDICTION_CODE: 0, LOCATION_DESC: 0, PERP_AGE_GROUP: 0, PERP_SEX: 0, PERP_RACE: 0, X_COORD_CD: 0, Y_COORD_CD: 0,
  };
  const collection = context.services
    .get('mongodb-atlas')
    .db('shootings')
    .collection('shootings');
  const shootings = await collection.find({}, exclusions);

  return shootings;
};
