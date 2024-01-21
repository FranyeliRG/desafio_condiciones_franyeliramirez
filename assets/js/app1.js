const img = document.querySelector('img')
let bandera = true

img.addEventListener('click', function () {
    if(bandera === true){
    img.style.border = '2px solid red'
    bandera = false
} else{
    img.style.border = 'none'
    bandera = true
}
})