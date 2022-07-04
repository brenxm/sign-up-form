const form = document.getElementsByClassName('fieldset');
const submitButton = document.querySelector('button');

console.log('working');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('submitted')});