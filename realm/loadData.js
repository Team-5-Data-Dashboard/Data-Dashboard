exports = function loadData(payload, response) {
  let shootings = {};
  const result = {};

  if (payload.body) {
    // Parse the body to get the array of shooting objects...
    shootings = EJSON.parse(payload.body.text());
    console.log('Parsed Payload body: ', JSON.stringify(shootings));

    // Get a reference to the todos database and collection...
    const collection = context.services
      .get('mongodb-atlas')
      .db('shootings')
      .collection('shootings');

    // Insert the new shootings...
    return collection.insertMany(shootings);
  }
  return result;
};
