const ourElement = document.querySelector(".our-element");
const paragraphToRemove = document.querySelector("p");

paragraphToRemove.remove();

const startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.title = "Start Element";
startDiv.dataset.value = "Start";
startDiv.textContent = "Start";

const endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.dataset.value = "End";
endDiv.textContent = "End";

ourElement.before(startDiv);
ourElement.after(endDiv);
