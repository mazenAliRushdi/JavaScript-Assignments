const xhr = new XMLHttpRequest();
const url = "articles.json";

xhr.open("GET", url);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.responseText); // Print the JSON response
    console.log("Data Loaded");
  } else {
    console.error("Request failed. Returned status of " + xhr.status);
  }
};

xhr.onerror = function () {
  console.error("There was a network error.");
};

xhr.send();
