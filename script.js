import { inputValidator } from "./validation.mjs";

const form = document.querySelector('.fieldset');
const invalidTextElem = document.querySelectorAll('.invalid-alert');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const inputResult = inputValidator(form);
    const validForm = Object.values(inputResult).every(obj => obj.valid == true);
    console.log(inputResult);
    if (validForm) sendForm();
    else invalidForm(inputResult);
});

function sendForm(){
    alert('Account succesfully created!, well not really but you made it');
}

function invalidForm(inputResult){
    //get element of input and set red if invalid
    //get text alert and set current text to current value
    const arr = Object.entries(inputResult);

    arr.map((arri)=>{
        const input = document.querySelector(`#input-${arri[0]}`);
        const textAlert = document.querySelector(`#invalid-${arri[0]}`);

        if(arri[1].valid){
            input.setAttribute('style','border: 2px solid var(--valid-highlight)');
            textAlert.textContent = "";
        }
        else {
            input.setAttribute('style', 'border: 2px solid var(--invalid-highlight)');
            textAlert.textContent = arri[1].value;
        }
    });
}

