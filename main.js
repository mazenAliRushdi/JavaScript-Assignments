const elzero = document.getElementById("elzero");
const elzeroByClassName = document.getElementsByClassName("element")[0];
const elzeroByTagName = document.getElementsByTagName("div")[0];
const elzeroByName = document.querySelector("[name='js']");
const elzeroByNameAll = document.querySelectorAll("[name='js']")[0];

const elzeroQuerySelectorId = document.querySelector("#elzero");
const elzeroQuerySelectorClass = document.querySelector(".element");
const elzeroQuerySelectorAttribute = document.querySelector("[name='js']");
const elzeroQuerySelectorTagName = document.querySelector("div");

const elzeroQuerySelectorAllId = document.querySelectorAll("#elzero")[0];
const elzeroQuerySelectorAllClass = document.querySelectorAll(".element")[0];
const elzeroQuerySelectorAllAttribute =
  document.querySelectorAll("[name='js']")[0];
const elzeroQuerySelectorAllTagName = document.querySelectorAll("div")[0];

const elzeroGetAttribute = document.body.children[0]; // Assuming it's the first child of the body
const elzeroTraversing = document.body.firstChild.nextElementSibling; // Assuming no significant whitespace nodes
