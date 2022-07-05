const FIRST_NAME = 'first-name';
const LAST_NAME = 'last-name';
const PHONE = 'phone-number';
const EMAIL = 'email';
const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'confirm-password';


function isValidInput(inputElem) {
    const currentInput = inputElem.getAttribute('name');
    const value = inputElem.value;

    switch (currentInput) {
        case FIRST_NAME:
        case LAST_NAME:
            const nameRG = /^[a-z]{1,20}$/i;
            if (value != false && nameRG.test(value)) return true;
            else return false;

        case PHONE:
            const phoneFormatRG = /^[(]\d{3}[)][\s-]\d{3}[\s-]\d{4}$|^\d{3}[\s-]\d{3}[\s-]\d{4}$/;
            if (value != false && phoneFormatRG.test(value)) return true;
            else return false;

        case EMAIL:
            const emailFormatRG = /^\w+[@]\w+[\.]\w+/;
            if (value != false && emailFormatRG.test(value)) return true;
            else return false;

        case PASSWORD:
            const passwordRG = /[A-Z!@#$%^&*0-9]{3}/;
            if (value != false && passwordRG.test(value)) return true;
            else return false;

        case CONFIRM_PASSWORD:
            const firstPassword = document.querySelector('#input-password').value;
            if (value == firstPassword && value != false) return true;
            else return false;
    }
}


//display error for submition of Form
function invalidMessage(inputType, inputValue) {
    const errorMessages = [
        'First name is required',
        'Invalid first name entered',
        'Last name is required',
        'Invalid last name entered',
        'Phone number is required',
        'Invalid phone number format entered',
        'Email is required',
        'Invalid email entered',
        'At least 8 character is required',
        'Password does not match',
        'Password must contain at least one\n• special character\n• uppercase letter\n•number'
    ]

    switch (inputType) {
        case FIRST_NAME:
            if (inputValue == false) return errorMessages[0];
            else return errorMessages[1];

        case LAST_NAME:
            if (inputValue == false) return errorMessages[2];
            else return errorMessages[3];

        case PHONE:
            if (inputValue == false) return errorMessages[4];
            else return errorMessages[5];

        case EMAIL:
            if (inputValue == false) return errorMessages[6];
            else return errorMessages[7];

        case PASSWORD:
            if (inputValue == false && inputValue.length < 7) return errorMessages[8];
            else if (inputType != document.querySelector('#input-password').value) return errorMessages[10]
            else return errorMessages[9];
    }
}

//user onchange of input returns green icon if valid value, else none
function focusInputValidator(elem, valid) {
    const checkIcon = document.querySelector(`#cb-${elem.getAttribute('name')}`);

    if (valid) return checkIcon.setAttribute('style', 'display: block');
    else return checkIcon.setAttribute('style', 'display: none');

}

function validateForm(inputs) {
    const result = {};

    inputs.forEach((input) => {
        const userInput = input.value;
        const inputType = input.getAttribute('name');

        if (isValidInput(input)) {
            result[inputType] = { value: userInput, valid: true };
            document.querySelector(`#input-${inputType}`).setAttribute('style', 'border: 2px solid var(--valid-highlight)');
        }

        else {
            const errorMessage = invalidMessage(inputType, userInput);
            result[inputType] = { value: errorMessage, valid: false };
            document.querySelector(`#input-${inputType}`).setAttribute('style', 'border: 2px solid var(--invalid-highlight) ');
            displayErrorMessage(inputType, errorMessage);
        }
    });

    console.log(result);
    const allValid = Object.values(result).every(x => x.valid);
    if (allValid) return true;
    return false;
}

function clearStyle(elem) {
    elem.setAttribute('style', 'border: none');
    document.querySelector(`#invalid-${elem.getAttribute('name')}`).textContent = "";
}

function displayErrorMessage(inputType, message) {
    if (inputType == 'confirm-password') return;
    document.querySelector(`#invalid-${inputType}`).textContent = message;
}

export { isValidInput, focusInputValidator, validateForm, clearStyle };