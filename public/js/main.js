const menuPrincipal = document.querySelector('.cabecalho-menu');
const menuBarra = document.querySelector('#menu');
const menuIcone = document.querySelector('.fa-bars')

const menuLinks = document.querySelectorAll('.menu a');

menuBarra.addEventListener('click', abrirMenu);
function abrirMenu(evento) {
    evento.preventDefault()
    menuPrincipal.classList.toggle('abrir-menu')
    menuIcone.classList.toggle('fa-close')
    
    
}

menuLinks.forEach((link) => {
  link.addEventListener('click', abrirMenu)      
})
