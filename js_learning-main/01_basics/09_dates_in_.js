//Date and time methods
//The Date object has a number of methods for working with dates and times.

const myDate = new Date();

console.log(myDate.toString()); // Returns the date and time in a human-readable format, adjusted to the local time zone.

console.log(myDate.toDateString()); // Returns the date portion of the date object in a human-readable format (e.g., "Tue Apr 27 2024").

console.log(myDate.toISOString()); // Returns the date and time in ISO 8601 format (e.g., "2024-04-27T10:00:00.000Z"). This is always in UTC.

console.log(myDate.toLocaleDateString()); // Returns the date portion of the date object in a format appropriate to the locale, based on the system settings.

console.log(myDate.toLocaleString()); // Returns the date and time in a format appropriate to the locale, based on the system settings.

console.log(myDate.toLocaleTimeString()); // Returns the time portion of the date object in a format appropriate to the locale, based on the system settings.

console.log(myDate.toTimeString()); // Returns the time portion of the date object in a human-readable format (e.g., "10:00:00 GMT+0200 (CEST)").

console.log(myDate.toUTCString()); // Returns the date and time in UTC format (e.g., "Tue, 27 Apr 2024 10:00:00 GMT").

console.log(myDate.getTimezoneOffset()); // Returns the difference in minutes between the local time zone and UTC. Positive values indicate time zones west of UTC and negative values indicate time zones east of UTC.


let myCreatedDate = new Date(2002,10,22);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedDate.getTime()/1000);
console.log(Math.round(myTimestamp/1000));

const newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getHours());