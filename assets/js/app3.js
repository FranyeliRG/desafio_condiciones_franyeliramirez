const btn = document.querySelector('button')
let par = document.querySelector('p')

btn.addEventListener('click', function () {
    let option1 = document.querySelector('#option1').value
    let option2 = document.querySelector('#option2').value
    let option3 = document.querySelector('#option3').value
    let cantidad = option1 + option2 + option3

    if(cantidad == '911'){
        par.innerHTML = 'Password1 Correcto'
    } else if(cantidad == '714'){
        par.innerHTML = 'Password2 Correcto'
    } else{
        par.innerHTML = 'Password Incorrecto'
    }
})