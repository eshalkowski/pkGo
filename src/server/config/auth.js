// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1818736375026805', // your App ID
        'clientSecret'    : '708fc2ef324762f700afc1771dc5bd66', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '1027034630439-mqov6fp3k125r1o3qusmlo2h4d0fgve0.apps.googleusercontent.com',
        'clientSecret'     : 'r-EkliemMxmNe20Pg3nwFb0L',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};