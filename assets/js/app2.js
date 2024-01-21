let input = document.querySelector('input', 0)
let h3 = document.querySelector('h3')
let btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let input1 = parseInt(document.querySelector('#input1').value)
    let input2 = parseInt(document.querySelector('#input2').value)
    let input3 = parseInt(document.querySelector('#input3').value)
    let cantidad = input1 + input2 + input3

    if(cantidad <= 10){
        h3.innerHTML = 'Comprar'
    } else{
        h3.innerHTML = 'Alcanzaste el límite máximo de Stickers'
    }
})