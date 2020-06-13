exports = async function getAllByYear(payload, response) {
  const { startDate, endDate } = payload.query;
  const exclusions = {
    INCIDENT_KEY: 0, JURISDICTION_CODE: 0, LOCATION_DESC: 0, PERP_AGE_GROUP: 0, PERP_SEX: 0, PERP_RACE: 0, X_COORD_CD: 0, Y_COORD_CD: 0,
  };
  const collection = context.services.get('mongodb-atlas').db('shootings').collection('shootings');
  const shootings = await collection.find({ OCCUR_DATE: { $gt: startDate, $lt: endDate } }, exclusions);

  return shootings;
};
