exports = async function getAllShootings(payload, response) {
  const collection = context.services
    .get('mongodb-atlas')
    .db('shootings')
    .collection('shootings');
  const shootings = await collection.find();

  return shootings;
};
