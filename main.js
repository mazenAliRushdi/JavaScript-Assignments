// Get the Unix timestamp for the start of the Unix epoch (January 1, 1970, at 00:00:00 UTC)
const startTimeUnix = 0;

// Add 10 years in milliseconds (approximately)
const tenYearsInMillis = 10 * 365.25 * 24 * 60 * 60 * 1000;

// Calculate the timestamp after 10 years
const futureTimeUnix = startTimeUnix + tenYearsInMillis + 1000; // Add one second (1000 milliseconds)

// Create a new Date object from the future timestamp
const futureDate = new Date(futureTimeUnix);

// Set the hours, minutes, and seconds explicitly to the desired value
futureDate.setUTCHours(0);
futureDate.setUTCMinutes(0);
futureDate.setUTCSeconds(1);
futureDate.setUTCMilliseconds(0);

// Convert back to the local time zone representation for output
console.log(futureDate.toString());
