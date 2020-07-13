const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAyPOYyRNxTVcUv87pJ7ZeD1yGFNt9zIS0",
    authDomain: "isay-31454.firebaseapp.com",
    databaseURL: "https://isay-31454.firebaseio.com",
    projectId: "isay-31454",
    storageBucket: "isay-31454.appspot.com",
    messagingSenderId: "326812005713",
    appId: "1:326812005713:web:41a3319d1cba6daba48f70"
}

firebase.initializeApp(config);
module.exports = firebase;