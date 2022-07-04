import { inputValidator } from "./validation.mjs";

const form = document.querySelector('.fieldset');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(inputValidator(form));
})
