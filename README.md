# butler-calendar
simple node js backend built to work with google calendar for a room booking system

### Getting started
To use this, download [node-google-calendar](https://github.com/yuhong90/node-google-calendar) and setup according to instructions.
Once done, download & import `date.js` & `cal-app.js` and replace the `var cal = require('<YOUR_PATH_HERE>/calendar-api.js');` in `cal-app.js` with your path, and you're good to go.

### Samples
To use the `listBookedEvent`, `listEmptySlotsInDay`, `insertEvent` and `deleteEvent` functions, 
view example code in [cal-sample.js](https://github.com/yuhong90/butler-calendar/blob/master/cal-sample.js).
To run: try `npm start` to test the sample functions.
