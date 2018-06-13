var Twit = require('twit'); //import the module 'twit'

var config = require('./config');
var T = new Twit(config);
var fs = require('fs');
var exec = require('child_process').exec;

var procPath = '/usr/share/processing'

var filename = 'output.png'

function processing()
{
  console.log('Done Drawing');
  var params = {
    encoding: 'base64'
  };
  var b64content = fs.readFileSync('drawing/' + filename, params);
  var mediaData={media_data: b64content};
  T.post('media/upload', mediaData, uploaded)
}

function uploaded(err,data,response){
  if(err)console.log("Complete");
  else console.log("Incomplete");
}

function tweeting()
{
  var cmd = 'processing-java --sketch=`pwd`/drawing --run' + filename;
  exec(cmd, processing);

}

/*var params = {
  q: 'OSU oregon state university',
  count: 20,
  lang: 'en'
}

var tweet = {
  status: 'First tweet from the Inventors Enterprise #twitterbot!'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response)
{
  if(err)
  {
    console.log("Something went wrong");
  }
  else {
    console.log("All clear");
  }

}
*/
/*

T.get('search/tweets', params,gotData);

function gotData(err,data,response){
  console.log(data);
  var tweets = data.statuses;
  for( var i = 0; i < tweets.length; i++)
  {
    console.log("New Tweet:");
    console.log(tweets[i].text);
  }
};
*/
