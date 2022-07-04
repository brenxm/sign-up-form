function inputValidator(formElement){
    const validCollection = {};
    const invalidCollection = {};

    //validates first name and last name •required, •max of 20 characters
    const nameInput = formElement['first-name'].value;
    const lastInput = formElement['last-name'].value;
    const nameRG = /^[a-z]{1,20}$/i;
    if (nameInput.length != false && nameRG.test(nameInput)) acceptedInputs(nameInput, 'first-name', validCollection);
    else invalidInputs(nameInput, 'first-name', invalidCollection);

    if (lastInput != false && nameRG.test(lastInput)) acceptedInputs(lastInput, 'last-name', validCollection);
    else invalidInputs(lastInput, 'last-name', invalidCollection);

    //validates phone number •required • accepted format (###) ### #### or ### ### ####, space or dash accepted
    const phoneFormat = /^[(]\d{3}[)][\s-]\d{3}[\s-]\d{4}$|^\d{3}[\s-]\d{3}[\s-]\d{4}$/;
    const phoneInput = formElement['phone-number'].value;
    if (phoneInput != false && phoneFormat.test(phoneInput)) acceptedInputs(phoneInput, 'number', validCollection);
    else invalidInputs(phoneInput, 'phone-number', invalidCollection);

    //validates emails • required •proper email format
    const emailInput = formElement['email'].value;
    const emailFormat = /^\w+[@]\w+[\.]\w+/;
    if (emailInput != false && emailFormat.test(emailInput)) acceptedInputs(emailInput, 'email', validCollection);
    else invalidInputs(emailInput, 'email', invalidCollection);
     
    //validate pw • required •must match •contain at least one uppercase, special char, and number
    const pwRegex = /[A-Z!@#$%^&*0-9]{3}/;
    const pwInput = formElement['password'].value;
    const secondPwInput = formElement['confirm-password'].value;
    if (pwInput.length > 7) 
        if (pwRegex.test(pwInput))        
            if (pwInput == secondPwInput)
                acceptedInputs(pwInput,'password', validCollection);
            else invalidInputs (3, 'password', invalidCollection);
        else invalidInputs(2, 'password', invalidCollection);
    else invalidInputs(1, 'password', invalidCollection);


    return { 
        valid: validCollection, 
        invalid: invalidCollection,
        proceedForm: Object.keys(invalidCollection).length == 0 ? true : false
     };    
}

function acceptedInputs(input, typeOfInput, accumulator){
    accumulator[typeOfInput] = input;
}

//warning messages for invalid inputs
function invalidInputs(input, typeOfInput, accumulator){
    const errorMessages = [
        'First name is required', 
        'Invalid first name entered',
        'Last name is required',
        'Invalid last name entered',
        'Phone number is required',
        'Invalid phone number format entered',
        'Email is required',
        'Invalid email entered',
        'Password is required',
        'Password does not match',
        'Password must contain at least one\b• special character\b• uppercase letter\b•number'
    ]
    switch(typeOfInput){
        case 'first-name' :
            input == false ? accumulator[typeOfInput] = errorMessages[0] : accumulator[typeOfInput] = errorMessages[1];
            return;
        
        case 'last-name' :
            input == false ? accumulator[typeOfInput] = errorMessages[2] : accumulator = errorMessages[3];
            return;
        
        case 'phone-number' :
            input == false ? accumulator[typeOfInput] = errorMessages[4] : accumulator = errorMessages[5];
            return;

        case 'email' :
            input == false ? accumulator[typeOfInput] = errorMessages[6] : accumulator = errorMessages[7];
            return;

        case 'password' :
            if (input == 1) return accumulator[typeOfInput] = errorMessages[8];
            if (input == 2) return accumulator[typeOfInput] = errorMessages[9];
            if (input == 3) return accumulator[typeOfInput] = errorMessages[10];
    }
}

function applyInvalidMessage(result, elements){
    console.log(elements);
}

export {inputValidator, applyInvalidMessage };