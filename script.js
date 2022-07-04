import { inputValidator, applyInvalidMessage } from "./validation.mjs";

const form = document.querySelector('.fieldset');
const invalidTextElem = document.querySelectorAll('.invalid-alert');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const result = inputValidator(form);
    if (result.proceedForm) return alert('Accepted Form, all valid inputs');

    applyInvalidMessage(result, invalidTextElem);
});
