const firstDiv = document.querySelector(".one");
const secondDiv = document.querySelector(".two");

const firstContent = firstDiv.textContent;
const firstTitle = firstDiv.title;

const secondContent = secondDiv.textContent;
const secondTitle = secondDiv.title;

firstDiv.textContent = secondContent;
firstDiv.title = secondTitle;

secondDiv.textContent = firstContent;
secondDiv.title = firstTitle + "Two";
