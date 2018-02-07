//var a = require("dotenv").config();
//console.log(a);
require("dotenv").config();

var keys = require("./keys.js");
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("logging out keys object")
//console.log(keys);

var Spotify = require('node-spotify-api');
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("logging out Spotify constructor")
//console.log(Spotify);

var spotify = new Spotify(keys.spotify);
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("logging out spotify object with my keys")
//console.log(spotify);

var Twitter = require("twitter");
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("logging out Twitter constructor")
//console.log(Twitter);

var client = new Twitter(keys.twitter);
console.log("~~~~~~~~~~~~~~~~~~~");
console.log("logging out client object with my keys")
//console.log(client);

console.log("got this far");


// Takes in all of the command line arguments
var userArgs = process.argv;

// Parses the command line argument to capture the liri command
var liriCommand = userArgs[2];
console.log("liriCommand = ");
console.log(liriCommand);



if (liriCommand === "my-tweets") {
    console.log("Inside the if: my-tweets");
    var tweetsToGet = 100;
    var params = { screen_name: 'Eneg Allenac', count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            //console.log(tweets);
            if (tweets.length < tweetsToGet) {
                tweetsToGet = tweets.length;
            }
            for (var i = 0; i < tweetsToGet; i++) {
                console.log(tweets[i].text);
            }
        }
    });


} else if (liriCommand === "spotify-this-song") {
    console.log("Inside the if: spotify-this-song");
} else if (liriCommand === "movie-this") {
    console.log("Inside the if: movie-this");
} else if (liriCommand === "do-what-it-says") {
    console.log("Inside the if: do-what-it-says");
} else {
    //outputNum = "Not a recognized command";
    console.log("Not a recognized command");
}