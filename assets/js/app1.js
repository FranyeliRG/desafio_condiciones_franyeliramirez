const img = document.querySelector('img')
let haveBorder = false

img.addEventListener('click', function () {
    if(haveBorder === false){
    img.style.border = '2px solid red'
    haveBorder = true
} else{
    img.style.border = 'none'
    haveBorder = false
}
})