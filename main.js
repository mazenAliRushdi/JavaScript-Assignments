let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// Needed Output(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log([...new Set(myFriends)].sort());
