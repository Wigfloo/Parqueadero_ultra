const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

function validar1(){
    console.log('Se envio el nombre1');
    formulario1.reset();
    return false;
}

function validar2(){
    console.log('Se envio el nombre2');
    formulario2.reset();
    return false;
}