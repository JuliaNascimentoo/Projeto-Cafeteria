/*
Saber quando o usuario clicou o botão  ok
mudar o posicionamento do modal    ok
fazer a mascara ficar visivel      ok
quando clicar na mascara, fechar o modal

*/
const modal= document.querySelector(".modal")
const mascara= document.querySelector(".mascara-modal")

function mostrarModal(){
    modal.style.left='50%'
    mascara.style.visibility='visible'
}

function esconderModal(){
    modal.style.left='-30%'
    mascara.style.visibility='hidden'
}