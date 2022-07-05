import { isValidInput, focusInputValidator, validateForm, clearStyle } from "./validation.mjs";

const form = document.querySelector('.fieldset');
const inputs = document.querySelectorAll('input');


inputs.forEach(input => {
    input.addEventListener('input', (e)=>{
        focusInputValidator(e.target, isValidInput(e.target))
    })
});

inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        clearStyle(e.target);
    })
});

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validateForm(inputs) ? sendForm() : null;
});


function sendForm(){
    alert('All given info accepted, thanks for pretending to apply!');
}



