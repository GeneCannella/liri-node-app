//providing informative text for the user
console.log("\nRunning the LIRI command line app...")

//testing to see in console what is returned by require("dotenv").config();
//var a = require("dotenv").config();
//console.log(a);

//add my keys (in local .env file) to the environment
require("dotenv").config();

//get my keys from process environment, via keys.js and import
var keys = require("./keys.js");

//testing to see in console what "keys" object looks like
//console.log("~~~~~~~~~~~~~~~~~~~");
//console.log("logging out keys object")
//console.log(keys);

//get a constructor for the node-spotify-api package methods
var Spotify = require('node-spotify-api');

//testing to see in console what the "Spotify" constructor object looks like
//console.log("~~~~~~~~~~~~~~~~~~~");
//console.log("logging out Spotify constructor")
//console.log(Spotify);

//construct a new object from the Spotify constructor, will include my spotify keys
var spotify = new Spotify(keys.spotify);

//testing to see in console what the new spotify object looks like
//console.log("~~~~~~~~~~~~~~~~~~~");
//console.log("logging out spotify object with my keys")
//console.log(spotify);

//get a constructor for the twitter node package methods
var Twitter = require("twitter");

//testing to see in console what the "Twitter" constructor object looks like
//console.log("~~~~~~~~~~~~~~~~~~~");
//console.log("logging out Twitter constructor")
//console.log(Twitter);

//construct a new object from the Twitter constructor, will include my twitter keys
var client = new Twitter(keys.twitter);

//testing to see in console what the new twitter object looks like
//console.log("~~~~~~~~~~~~~~~~~~~");
//console.log("logging out client object with my keys")
//console.log(client);

//testing to see if program execution proceeds through the phase of requiring and constructing
//console.log("got this far");



// Takes in all of the command line arguments
var userArgs = process.argv;

// Parses the command line argument to capture the liri command
var liriCommand = userArgs[2];
console.log("\nRunning the \'" + liriCommand + "\' LIRI command...");



if (liriCommand === "my-tweets") {
    //console.log("Inside the if: my-tweets");

    //build the parameters object "params" to pass to the "get" convenience method
    var params = { screen_name: 'Eneg Allenac', count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {

            //testing to see in console what is passed to the "tweets" parameter in the callback
            //console.log(tweets);

            //formatting output
            console.log("\n~~~~~~~~~~~~~~~");
            console.log("This command logs the twenty most recent tweets from user: " + params.screen_name);
            console.log("~~~~~~~~~~~~~~~");

            //each user tweet is an item in the "tweets" array
            //walk through the "tweets" array and get the text property from each tweet item
            for (var i = 0; i < tweets.length; i++) {
                console.log("\n~~~~~~~~~~~~~~~");
                console.log("Tweet created at: " + tweets[i].created_at);
                console.log("Tweet text: " + tweets[i].text);
                console.log("~~~~~~~~~~~~~~~");
            }
        }
    });


} else if (liriCommand === "spotify-this-song") {
    //console.log("Inside the if: spotify-this-song");
    
    //checking to see if user provided search terms, set default if not
    var trackQuery;
    if (userArgs.length < 4) {
        trackQuery = "The Sign Ace of Base";
        console.log("\nNo search terms provided, therefore...");
    } else {
        trackQuery = userArgs[3];
    }

    //console.log("\nuserArgs[3]:", trackQuery);
    //console.log("typeof userArgs[3] =", typeof trackQuery);
    console.log("\nThis command will search Spotify using the query string: " + trackQuery);
    console.log("\nReturning only the first song matching the search terms...\n")

    spotify.search({ type: 'track', query: trackQuery, limit: 1 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //digging down to find the data for this particular track
        /*
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
        */

        //digging down to get the artists info
        /*
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].artists");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].artists);
        

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].artists[0].name");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].artists[0].name);
        */

        var artistsName = data.tracks.items[0].artists[0].name;
        console.log("Artists name:", artistsName);

        //digging down to get the song name
        /*
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].name");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].name);
        */

        var songName = data.tracks.items[0].name;
        console.log("Song name:", songName);


        //digging down to get the preview url
        /*
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].preview_url");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].preview_url); 
        */

        var previewURL = data.tracks.items[0].preview_url;
        console.log("Spotify song preview link:", previewURL);

        //digging down to get the external url to load the Spotify page for this song
        /*
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].external_urls");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].external_urls); 

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].external_urls.spotify");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].external_urls.spotify); 
        */

        //digging down to get the album name
        /*
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].album");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].album);

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("data.tracks.items[0].album.name");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(data.tracks.items[0].album.name);
        */

        var albumName = data.tracks.items[0].album.name;
        console.log("Album name:", albumName);


    });





} else if (liriCommand === "movie-this") {
    console.log("Inside the if: movie-this");
} else if (liriCommand === "do-what-it-says") {
    console.log("Inside the if: do-what-it-says");
} else {
    //outputNum = "Not a recognized command";
    console.log("Not a recognized command");
}