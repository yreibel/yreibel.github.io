
var express = require('express');
var router = express.Router();

//import fetch from "../node_modules/cross-fetch/node_modules/node-fetch/lib/index.js";
//fetch = require('cross-fetch/node_modules/node-fetch/lib/index.mjs');
//import fetch from 'node-fetch';
const fetch = require('node-fetch');


router.get('/', function(req, res, next) {
    res.send('Working  ok');
    //res.json({ ok: 'Working ?' })
});

router.get('/po', async function(req, res, next) {

    let city = req.query.city;

    if(city == null ){
        
        let response = await fetch('https://geolocation-db.com/json');
        let data = await response.json();
        city = data.city;
    }
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=96b93715b2af3387f93252f194d5a149')
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                //console.log(data.list[0]);
                //res.json(data);
                res.json(formatWeather(data));
                //console.log(formatWeather(data));
    });

    
});

function formatWeather(data){

    let jsonDoc = {};
    let currentKey = 0;

    let dayKey = 0;
    let daywait;

    let toLoop;

    let limitDays = 2;

    let dayK
    
    daywait = howManyMoreToLoop(extractCurrentTime(data.list[0].dt_txt));
    dayK = extractCurrentDay(data.list[0].dt_txt);
    toLoop = daywait + currentKey;


    // Compare the current date with the first index corresponding to the date in the json file retrieved from the request
    var d = new Date(extractCurrentYear(data.list[currentKey].dt_txt),
                    transformMonthIntoDateFormat(extractCurrentMonth(data.list[currentKey].dt_txt)),
                    extractCurrentDay(data.list[currentKey].dt_txt));

    
    if(getCurrentDate() < d && checkDaysAreDifferent(extractCurrentDay(data.list[currentKey].dt_txt))){
        if(!jsonDoc.days)jsonDoc.days={};
        if(!jsonDoc.days[dayK])jsonDoc.days[dayK]={};
        if(!jsonDoc.days[dayK].hours)jsonDoc.days[dayK].hours={};


        jsonDoc.days[dayK].hours[extractCurrentTime(data.list[currentKey].dt_txt)] = {
            "name": getName(data),
            "time": getTime(data),
            "temp": getTemperature(data.list[currentKey]),
            "icon": getIcon(data.list[currentKey]),
            "sky": getSky(data.list[currentKey]),
            "cloud_coverage" : getCloudCoverage(data.list[currentKey]),
            "sunrise" : getSunrise(data),
            "sunset"  : getSunset(data),
            "wind_speed": getWindSpeed(data.list[currentKey]),
            "wind_direction": getWindDirection(data.list[currentKey]),
            "hour_time" : extractDetailedTime(data.list[currentKey].dt_txt),
            "hour_index": extractCurrentTime(data.list[currentKey].dt_txt),
        };
    }
   
    /*
     else{
        if(!jsonDoc["BOOM"])jsonDoc["BOOM"]={};
        jsonDoc["BOOM"][extractCurrentTime(data[0].dt_txt)] = {
            "temp" : "1",
            "sunrise" : "2",
            "sunset" : "3",
            "cloud_coverage" : "4",
            "wind_speed": "5",
            "wind_direction": "6"
        };
    }
    */


    while(isNextHourExisting(currentKey,data.list) && dayKey<=limitDays){
        if(!jsonDoc.days)jsonDoc.days={};
        if(!jsonDoc.days[dayK])jsonDoc.days[dayK]={};
        if(!jsonDoc.days[dayK].hours)jsonDoc.days[dayK].hours={};

        jsonDoc.days[dayK].hours[extractCurrentTime(data.list[currentKey].dt_txt)] = {
       "name": getName(data),
            "time": getTime(data),
            "temp": getTemperature(data.list[currentKey]),
            "icon": getIcon(data.list[currentKey]),
            "sky": getSky(data.list[currentKey]),
            "cloud_coverage" : getCloudCoverage(data.list[currentKey]),
            "sunrise" : getSunrise(data),
            "sunset"  : getSunset(data),
            "wind_speed": getWindSpeed(data.list[currentKey]),
            "wind_direction": getWindDirection(data.list[currentKey]),
            "hour_time" : extractDetailedTime(data.list[currentKey].dt_txt),
            "hour_index": extractCurrentTime(data.list[currentKey].dt_txt),
        };
        
       
        if(currentKey == toLoop){
            // Parameters at the day level
            jsonDoc.days[dayK].date = extractCurrentDay(data.list[currentKey].dt_txt);


            //
            dayKey = dayKey + 1;
            dayK = extractCurrentDay(data.list[currentKey+1].dt_txt);
            daywait = howManyMoreToLoop(extractCurrentTime(data.list[currentKey+1].dt_txt));
            console.log(dayKey + " : " + currentKey + " : " + dayK);
            toLoop = daywait + currentKey;

            
        }

        console.log(currentKey);
        currentKey = currentKey+1
    }

    return jsonDoc;

 
}




// ----

/*function getName(data) {
    return data.name;
}
*/

function getName(data) {
    
    return data.city.name.replace("County", "")
}

function getTime(data) {

    var d = new Date()
    var localTime = d.getTime()
    var localOffset = d.getTimezoneOffset()
    var utc = localTime + localOffset
    var time = utc + (1000 * data.city.timezone);
    console.log(data)
    var nd = new Date(time);
 
    return nd.toUTCString().substring(17,22);
}

function getIcon(data) {
    return 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png'
}

function getSky(data) {
    return data.weather[0].main;
}

function getTemperature(data){
    return Math.ceil(data.main.temp);
}

// ---
function getSunrise(data){
    let unixTime = data.city.sunrise;
    const date = new Date(unixTime*1000);
    return date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute:'2-digit'
      });
}

function getSunset(data){
    let unixTime = data.city.sunset;
    const date = new Date(unixTime*1000);
    return date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute:'2-digit'
      });
    
}

// ----

function getCloudCoverage(data){
    return data.clouds.all;
}

// ----

function getWindSpeed(data){
    return data.wind.speed;
}

function getWindDirection(data){
    return data.wind.deg;
}



// ---------------

function extractCurrentTime(textString){
    let time = textString.split(' ');
    let detailedTime = time[1].split(":");
    
    let hour = detailedTime[0];

    if(hour == "00") hour = "0";

    return parseInt(hour);
}

function extractDetailedTime(textString){
    let time = textString.split(' ');
    let detailedTime = time[1];

    return detailedTime;
}

function extractCurrentDay(textString){
    let time = textString.split(' ');
    let detailedTime = time[0].split("-");
    
    let day = detailedTime[2];

    return parseInt(day);
}

function extractCurrentMonth(textString){
    let time = textString.split(' ');
    let detailedTime = time[0].split("-");
    
    let month = detailedTime[1];

    return parseInt(month);
}

function transformMonthIntoDateFormat(month){
    return month-1;
}

function extractCurrentYear(textString){
    let time = textString.split(' ');
    let detailedTime = time[0].split("-");
    
    let year = detailedTime[0];

    return parseInt(year);
}

function howManyMoreToLoop(hour){
    let l = ((24-hour)/3)-1;

    if(hour == 0) l=((24-hour)/3);

    return Math.ceil(l);
}

function isNextHourExisting(currentKey, data){
    if (!data[currentKey]) return false;
    return true;
}


function getCurrentDayRequest(){
    const today = new Date();
    let day = today.getDate();

    return day;
}

function getCurrentDate(){
    return new Date();
}

function checkDaysAreDifferent(dateExtracted){
    return dateExtracted != getCurrentDayRequest();
}



module.exports = router;

// getting the current location? maybe hard, postpone it ?
// treat the data to submit a json with all the necessary information (humidity, temperature, etc.)
/*
{ 
    "humidity" = "",
    "temp" = "",


}}

we need to create methods for the parameters in another file weather_functions.js 
localhost:9000

*/
