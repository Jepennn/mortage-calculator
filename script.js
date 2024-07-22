

const clearAllFields = document.getElementById("clearAll");
const sumbitForm = document.getElementById("data-form");

const test = document.getElementsByClassName("root");

const html = document.querySelector("body");


//Add all eventListeners and the eventhandlers from the function.js file
clearAllFields.addEventListener("click", clearAll);
sumbitForm.addEventListener("submit", onSubmit);