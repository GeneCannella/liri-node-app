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
    //var tweetsToGet = 100;
    var params = { screen_name: 'Eneg Allenac', count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            //console.log(tweets);
            //if (tweets.length < tweetsToGet) {
            //tweetsToGet = tweets.length;
            //}

            //for (var i = 0; i < tweetsToGet; i++) {tweets.length
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        }
    });


} else if (liriCommand === "spotify-this-song") {
    console.log("Inside the if: spotify-this-song");
    spotify.search({ type: 'track', query: 'All the Small Things', limit: 1}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //digging down to find the data for this particular track
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data);

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks);

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items);  

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0]");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0]);

        //digging down to get the artists info
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].artists");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].artists);

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].artists[0].name");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].artists[0].name);

        //digging down to get the song name
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].name");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].name);

        //digging down to get the preview url
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].external_urls");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].external_urls); 

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].external_urls.spotify");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].external_urls.spotify);  

        //digging down to get the album name
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].album");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].album);

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].album.name");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].album.name);
        
    });





} else if (liriCommand === "movie-this") {
    console.log("Inside the if: movie-this");
} else if (liriCommand === "do-what-it-says") {
    console.log("Inside the if: do-what-it-says");
} else {
    //outputNum = "Not a recognized command";
    console.log("Not a recognized command");
}