console.log('arquivo vinculado')

let btnToggleTheme = document.querySelector('.toogleTheme')
let body = document.querySelector('body')
let iframe = document.querySelector('iframe')

btnToggleTheme.onclick = (event) =>{
    body.classList.toggle('dark-theme');
    
}