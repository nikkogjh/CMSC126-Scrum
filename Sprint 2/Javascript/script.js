// get all input data from Contact Form
const form = document.querySelector('form')
const thankYou = document.querySelector('.submitThanks')
const nameInput = document.querySelector('input[name="name"]')
const emailInput = document.querySelector('input[name="email"]')
const messageInput = document.querySelector('textarea[name="message"]')

// array to store all input data
const allInputs = [nameInput, emailInput, messageInput]

//** VALIDATING FUNCTIONS */
// validating function
// checks if input field are empty

let isFormValid = false;
let validateFlag = false;

// function to remove remove red border and error message
const showValid = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
}

// function to show red border and error message
const thisIsInvalid = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
    if (!validateFlag) return;

    // prevents continuous looping
    isFormValid = true;

    // loops through all and checks if it's valid
    allInputs.forEach(element => {
        if (!element.value) {
            element.classList.add("invalid");
            element.nextElementSibling.classList.remove("hidden");
            isFormValid = false;
        } else {
            element.classList.remove("invalid");
            element.nextElementSibling.classList.add("hidden");
            isFormValid = true;
        }
    });
}

// event listener code, when "submit" is clicked
// runs the validateInputs arrow function
form.addEventListener("submit", (e) => {
    // bugfix: prevent refresh when submitting
    e.preventDefault();
    validateFlag = true;
    validateInputs();
    if (isFormValid) {
        // when all input is validated, 
        // removes form and display thank you message
        form.remove()
        thankYou.classList.remove("hidden")
    }
});

// run validator for all inputs
allInputs.forEach((input) =>
    input.addEventListener("input", validateInputs));