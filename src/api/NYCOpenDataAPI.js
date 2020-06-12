import $ from 'jquery';

const MAX_FETCH = 500;
const APP_TOKEN = ''; // INSERT APP_TOKEN HERE

// Replace with Firestore request
const fetchShootingIncidence = () =>
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/833y-fsy8.json",
        type: "GET",
        data: {
          "$limit" : MAX_FETCH,
          "$$app_token" : APP_TOKEN
        }
    });

export { fetchShootingIncidence };
