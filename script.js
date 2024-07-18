

//Clear function, clears all input fields
function clearAll(){
    
    const inputValues = document.querySelectorAll("input");

    console.log(inputValues);
    inputValues.forEach((input) => {
        //checks if radio input
        if (input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }
    })
}

function onSubmit(e){

    //avoids to not summit to the file
    e.preventDefault();

    //Setting upp a easy way to grab data from inputs
    const formData = new FormData(e.target);

    e.target

    //Grabbing data from inputfields
    const loanAmount = formData.get('mortageAmount');
    const loanTimeInYears = formData.get("mortageTerm");
    const interestRate = formData.get("intrestRate");
    const mortageType = formData.get("calc-option");

    console.log(loanAmount, loanTimeInYears, interestRate, mortageType);


    // Gör din uträkning här sen och pressentera uträkningen i rätt
    // ställe på skärmen
}










const clearAllFields = document.getElementById("clearAll");
const sumbitForm = document.getElementById("data-form");



//All eventListener 
clearAllFields.addEventListener("click", clearAll);
sumbitForm.addEventListener("submit", onSubmit);