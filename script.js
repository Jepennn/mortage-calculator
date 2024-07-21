

const clearAllFields = document.getElementById("clearAll");
const sumbitForm = document.getElementById("data-form");


//Add all eventListeners and the eventhandlers from the function.js file
clearAllFields.addEventListener("click", clearAll);
sumbitForm.addEventListener("submit", onSubmit);