

//Clear function, clears all input fields
function clearAll(){


    const blueContainer = document.getElementById("blue-container");

    //Clears the blue container
    blueContainer.innerHTML = 
    `<img src="./assets/images/illustration-empty.svg" alt="Image show's no results" srcset="">
      <div id="no-result-container">
        <h2>Results shown here</h2>
        <p>Complete the form and click "calculate reypayments" 
          to see what your montly repayments would be.</p> 
      </div>`;

    //Grabs all input fields    
    const inputValues = document.querySelectorAll("input");

    inputValues.forEach((input) => {
        //checks if radio input
        if (input.type === "radio") {
            input.checked = false;
        } else {
            input.value = "";
        }
    })
}

// Function to calculate the amount
function amountCalculator(mortgageType, loanAmount, loanTimeInYears, interestRate) {
    
    // Monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;

    // Total number of payments (months)
    const totalNumberOfPayments = loanTimeInYears * 12;

    // Calculating the monthly amount using the annuity formula
    const monthlyAmount = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalNumberOfPayments)) / (Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1);

    // Calculating the total amount paid over the life of the loan
    const totalAmount = monthlyAmount * totalNumberOfPayments;

    // Calculating the total interest paid over the life of the loan
    const totalInterest = totalAmount - loanAmount;

    // Assuming monthlyInterestAmount is the interest of the initial loan amount for simplicity
    const monthlyInterestAmount = loanAmount * monthlyInterestRate;


    if(mortgageType === "repayment"){
        
        return {
            totalAmount: totalAmount.toFixed(2), 
            monthlyAmount: monthlyAmount.toFixed(2) 
        };
    }else{
        return {
            totalAmount: totalInterest.toFixed(2), 
            monthlyAmount: monthlyInterestAmount.toFixed(2) 
        };
    }
}



function onSubmit(e){

    //avoids to not summit to the file
    e.preventDefault();

    //Setting upp a easy way to grab data from inputs
    const formData = new FormData(e.target);

    e.target

    //Grabbing data from inputfields
    const loanAmount = formData.get('mortageAmount').replace(/[.,\s]/g, "");
    const loanTimeInYears = formData.get("mortageTerm");
    const interestRate = formData.get("intrestRate");
    const mortageType = formData.get("calc-option");

    const result = document.getElementById("blue-container");


    //Function to calculate the amount (Returns an object)
    const repaymentValues = amountCalculator(mortageType, loanAmount, loanTimeInYears, interestRate);

    // Creates an instance of the number formatter
    const numberFormatter = new Intl.NumberFormat('sv-SE');

    result.innerHTML = `<h3>Your results</h3>
    <p>Your results are shown below based on the information you 
      provided. To adjust the results, edit the form and click "calculate
      repayments" again.
    </p>

    <div class="result-card">
      <div id="monthly">
        <p>Your monthly repayments</p>
        <h1 id="monthly-amount">${numberFormatter.format(repaymentValues.monthlyAmount)}kr</h1>
      </div>

      <div class="divider"></div>

      <div id="total-amount">
        <p>Total you'll repay over the term</p>
        <h3 id="total-amount-value">${numberFormatter.format(repaymentValues.totalAmount)}kr</h3>
      </div>
    </div>`;
}