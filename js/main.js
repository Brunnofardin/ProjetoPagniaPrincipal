/* ABRINDO E FECHANDO MENU FLUTUANTE */

const iconeBurguer = document.getElementById('burguer');
const menuHamburguer = document.getElementById('menuFlutuante');
const voltarmenuhamburguer = document.getElementById('voltar');

iconeBurguer.addEventListener('click',()=>{
    if(menuHamburguer.style.display == 'none'){
        menuHamburguer.style.display = 'flex'
    }else{
        menuHamburguer.style.display = 'none'
    }
})
voltarmenuhamburguer.addEventListener('click',()=>{
    menuHamburguer.style.display = 'none'
})
window.onresize = ()=>{
    if(window.innerWidth >= 637){
        menuHamburguer.style.display = 'none'
    
    }else{
        menuHamburguer.style.display = 'flex'
    
    }

}


/* PAINEL ADMINISTRATIVO */

const paineladmintrador = document.getElementById('paineladministrador')
const btn_acessaradm = [...document.getElementsByClassName('Acessaradministração')];
const btn_voltaradm = document.getElementById('voltaradm')

btn_acessaradm[0].firstElementChild.addEventListener('click',()=>{
    if(paineladmintrador.style.display == 'flex'){
        paineladmintrador.style.display = 'none'

    }else{
        paineladmintrador.style.display = 'flex'
    }
})
btn_acessaradm[1].addEventListener('click',()=>{
    if(paineladmintrador.style.display == 'flex'){
        paineladmintrador.style.display = 'none'
        
    }else{
        menuHamburguer.style.display = 'none'
        paineladmintrador.style.display = 'flex'
    }
})
btn_voltaradm.addEventListener('click',()=>{
    paineladmintrador.style.display = 'none'
})