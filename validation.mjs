function inputValidator(formElement){
    const collection = {
        "first-name": {
            value: "",
            valid: false
               },
        "last-name": {
            value: "",
            valid: false
              },
        "phone-number": {
            value: "",
            valid: false
            },
        "email": {
            value: "",
            valid: false
        },
        "password": {
            value: "",
            valid: false
        }
    };

    //validates first name and last name •required, •max of 20 characters
    const nameInput = formElement['first-name'].value;
    const lastInput = formElement['last-name'].value;
    const nameRG = /^[a-z]{1,20}$/i;
    if (nameInput.length != false && nameRG.test(nameInput)) acceptedInputs(nameInput, 'first-name', collection, true);
    else acceptedInputs(invalidMessage(nameInput,"first-name"), 'first-name', collection, false);

    if (lastInput != false && nameRG.test(lastInput)) acceptedInputs(lastInput, 'last-name', collection, true);
    else acceptedInputs(invalidMessage(lastInput, "last-name"), 'last-name', collection, false);

    //validates phone number •required • accepted format (###) ### #### or ### ### ####, space or dash accepted
    const phoneFormat = /^[(]\d{3}[)][\s-]\d{3}[\s-]\d{4}$|^\d{3}[\s-]\d{3}[\s-]\d{4}$/;
    const phoneInput = formElement['phone-number'].value;
    if (phoneInput != false && phoneFormat.test(phoneInput)) acceptedInputs(phoneInput, 'phone-number', collection, true);
    else acceptedInputs(invalidMessage(phoneInput, "phone-number"), 'phone-number', collection, false);

    //validates emails • required •proper email format
    const emailInput = formElement['email'].value;
    const emailFormat = /^\w+[@]\w+[\.]\w+/;
    if (emailInput != false && emailFormat.test(emailInput)) acceptedInputs(emailInput, 'email', collection, true);
    else acceptedInputs(invalidMessage(emailInput, "email"), 'email', collection, false);
     
    //validate pw • required •must match •contain at least one uppercase, special char, and number
    const pwRegex = /[A-Z!@#$%^&*0-9]{3}/;
    const pwInput = formElement['password'].value;
    const secondPwInput = formElement['confirm-password'].value;
    console.log(pwInput);
    console.log(secondPwInput);
    if (pwInput.length > 7) 
        if (pwRegex.test(pwInput))        
            if (pwInput == secondPwInput)
                acceptedInputs(pwInput,'password', collection, true);
            else acceptedInputs(invalidMessage(3, "password"), 'password', collection, false);
        else acceptedInputs(invalidMessage(2, "password"), 'password', collection, false);
    else acceptedInputs(invalidMessage(1, "password"), 'password', collection, false);


    return collection;
}

function acceptedInputs(input, typeOfInput, collection, valid){
    collection[typeOfInput].value = input;
    collection[typeOfInput].valid = valid;
}

//warning messages for invalid inputs
function invalidMessage(input, typeOfInput){
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
        'Password must contain at least one\b• special character\b• uppercase letter\b•number'
    ]

    let message;

    switch(typeOfInput){
        case 'first-name' :
            input == false ? message = errorMessages[0] : message = errorMessages[1];
            break;
        
        case 'last-name' :
            input == false ? message = errorMessages[2] : message = errorMessages[3];
            break;
        
        case 'phone-number' :
            input == false ? message = errorMessages[4] : message = errorMessages[5];
            break;

        case 'email' :
            input == false ? message = errorMessages[6] : message = errorMessages[7];
            break;

        case 'password' :
            if (input == 1)  message = errorMessages[8];
            if (input == 2)  message = errorMessages[10];
            if (input == 3)  message = errorMessages[9];
    }

    return message;
}


export {inputValidator };