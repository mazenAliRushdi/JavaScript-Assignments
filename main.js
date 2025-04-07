// Replace with your actual birthdate (year, month - 1, day)
const birthDate = new Date(1985, 3, 15); // Example: April 15, 1985

const now = new Date();
const diffInMilliseconds = now.getTime() - birthDate.getTime();

const seconds = Math.floor(diffInMilliseconds / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);
const months = Math.floor(days / 30.44); // Approximate average days in a month
const years = Math.floor(days / 365.25); // Account for leap years

console.log(`${seconds} Seconds`);
console.log(`${minutes} Minutes`);
console.log(`${hours} Hours`);
console.log(`${days} Days`);
console.log(`${months} Months`);
console.log(`${years} Years`);
