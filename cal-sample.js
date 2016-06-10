//cal-sample.js - sample app file testing api
var cal_app = require('./cal-app.js'); 

function insertEventSample() {
    cal_app.insertEvent("Chapter Meeting", "2016-05-27T14:00:00+08:00", "2016-05-27T17:00:00+08:00", "drone", "confirmed", "")
        .then(function(json) {
            //success
            console.log(json);
        }, function(err) {
            //failed
            console.log('Error insertEvent: ' + JSON.stringify(err));
        });
}

function listEventSample() {
    cal_app.listBookedEvent("2016-05-24T10:00:00+08:00", "2016-05-29T00:00:00+08:00", "queen-1")
        .then(function(jsonArr) {
            console.log(jsonArr);
        }, function(err) {
            console.log('Error listEvent: ' + JSON.stringify(err));
        });
}

function checkTimeslotBusySample() {
    cal_app.checkTimeslotBusy("2016-05-27T10:00:00+08:00", "2016-05-27T11:00:00+08:00").then(function(eventsJson) {
        console.log(eventsJson);
        if (eventsJson != undefined && eventsJson.length > 0) {
            busyOrFree = 'busy';
        } else {
            busyOrFree = 'free';
        }
        console.log('slot is ' + busyOrFree);
    }, function() {
        console.log('Error checkTimeslot');
    });
}

function listEmptySlotsInDaySample() {
    cal_app.listEmptySlotsInDay("2016-05-24T00:00:00+08:00", "queen-1").then(function(jsonResults) {
        console.log(jsonResults);
    }, function(err) {
        console.log('Error listEmptySlotsInDay: ' + JSON.stringify(err));
    });
}
 
function deleteEventSameple(){
    cal_app.deleteEvent('vglrakdceu6jai4sm5lo5dk3o0').then(function(jsonResults) {
        console.log('delete Event:' + JSON.stringify(jsonResults));
    }, function(err) {
        console.log('Error deleteEvent: ' + JSON.stringify(err));
    });
}

listEventSample();

