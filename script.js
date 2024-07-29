// Variable Declarations
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Functions

const clearResults = () => {
    resultsDiv.innerHTML = "";
} // end clearResults

const checkUserInput = () => {
    const userInputValue = userInput.value;
    const alertMessage = "Please provide a phone number";

    // isPhoneNumberValid function
    const isPhoneNumberValid = (phoneNumber) => {
        const phoneNumberRegex = /^(1\s?)?((\d{3})|(\(\d{3}\)))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    
        return phoneNumberRegex.test(phoneNumber);
    } // end isPhoneNumberValid

    if (userInputValue === "") {
        alert(alertMessage);
        return;
    }

    if (isPhoneNumberValid(userInputValue)) {
        resultsDiv.innerHTML += `<p>Valid US number: ${userInputValue}</p>`;
    } else {
        resultsDiv.innerHTML += `<p class="alert">Invalid US number:  ${userInputValue}</p>`;
    }
    return;
} // end checkUserInput

// Event Listeners
checkButton.addEventListener("click", checkUserInput);
clearButton.addEventListener("click", clearResults);

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});