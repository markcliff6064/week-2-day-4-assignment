// Get the form
const form = document.getElementById("registrationForm");

// Get the input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

// Get the submit button
const submitButton = document.getElementById("submitBtn");


// These variables keep track of whether
// each field is valid
let nameValid = false;
let emailValid = false;
let phoneValid = false;
let passwordValid = false;



// NAME VALIDATION


nameInput.addEventListener("input", function() {

    const name = nameInput.value.trim();

    if (name.length >= 2) {

        nameValid = true;

        document.getElementById("nameIcon").textContent = "✓";

        document.getElementById("nameError").textContent = "";

    } else {

        nameValid = false;

        document.getElementById("nameIcon").textContent = "✗";

        document.getElementById("nameError").textContent =
            "Name must contain at least 2 characters";

    }

    checkForm();

});



// EMAIL VALIDATION


emailInput.addEventListener("input", function() {

    const email = emailInput.value;

    // Find the position of @
    const atPosition = email.indexOf("@");

    // Find a dot after @
    const dotPosition = email.indexOf(".", atPosition);

    if (atPosition > 0 && dotPosition > atPosition + 1) {

        emailValid = true;

        document.getElementById("emailIcon").textContent = "✓";

        document.getElementById("emailError").textContent = "";

    } else {

        emailValid = false;

        document.getElementById("emailIcon").textContent = "✗";

        document.getElementById("emailError").textContent =
            "Email must contain @ and at least one dot after @";

    }

    checkForm();

});



// PHONE VALIDATION


phoneInput.addEventListener("input", function() {

    const phone = phoneInput.value;

    // Check Kenyan phone number format
    const phonePattern = /^0[17]\d{8}$/;

    if (phonePattern.test(phone)) {

        phoneValid = true;

        document.getElementById("phoneIcon").textContent = "✓";

        document.getElementById("phoneError").textContent = "";

    } else {

        phoneValid = false;

        document.getElementById("phoneIcon").textContent = "✗";

        document.getElementById("phoneError").textContent =
            "Phone must be 10 digits starting with 07 or 01";

    }

    checkForm();

});



// PASSWORD VALIDATION


passwordInput.addEventListener("input", function() {

    const password = passwordInput.value;

    // Check password length
    const longEnough = password.length >= 8;

    // Check for uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    // Check for a number
    const hasNumber = /[0-9]/.test(password);


    if (longEnough && hasUppercase && hasNumber) {

        passwordValid = true;

        document.getElementById("passwordIcon").textContent = "✓";

        document.getElementById("passwordError").textContent = "";

    } else {

        passwordValid = false;

        document.getElementById("passwordIcon").textContent = "✗";

        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters, contain 1 uppercase letter and 1 number";

    }

    checkForm();

});



// CHECK ALL FIELDS


function checkForm() {

    /*
        The button is enabled only when
        all four fields are valid.
    */

    if (
        nameValid &&
        emailValid &&
        phoneValid &&
        passwordValid
    ) {

        submitButton.disabled = false;

    } else {

        submitButton.disabled = true;

    }

}


// FORM SUBMISSION


form.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Store form information in an object
    const formData = {

        name: nameInput.value,

        email: emailInput.value,

        phone: phoneInput.value,

        password: passwordInput.value

    };

    // Display the object in the console
    console.log(formData);

});