function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    let months = theAge * 12;
    let weeks = months * 4;
    let days = theAge * 365;
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    console.log(`Months Example => ${months} Months`);
    console.log(`Weeks Example => ${weeks} Weeks`);
    console.log(`Days Example => ${days} Days`);
    console.log(`Hours Example => ${hours} Hours`);
    console.log(`Minutes Example => ${minutes} Minutes`);
    console.log(`Seconds Example => ${seconds} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
