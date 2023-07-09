const paineladmintrador = document.getElementById('paineladministrador')
/* ABRINDO E FECHANDO MENU FLUTUANTE */

const iconeBurguer = document.getElementById('burguer');
const menuHamburguer = document.getElementById('menuFlutuante');
const voltarmenuhamburguer = document.getElementById('voltar');

iconeBurguer.addEventListener('click',()=>{
    if(menuHamburguer.style.display == 'none'){
        menuHamburguer.style.display = 'flex'
        paineladmintrador.style.display ='none'
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

/* APLICAÇÕES DO MENU ADMINISTRATIVO */

const select = document.getElementsByTagName('select')[0];
const selecionar = document.getElementById('selecionar');
const salvaralteracoes = document.getElementById('Salvar');
selecionar.addEventListener("click",()=>{
    const indice = select.selectedIndex
    console.log(indice)
    if(indice == 0){
        AlterarLogo(' Link da imagem da logo')
    }else if(indice == 1){
            AlterarTitulo(' ex : BFinfromática')
          
    }else if(indice == 2){
        AlterarTamanhoFonte(' ex: 16px') 

    }else if(indice == 3){
        AlterarCorFundocabeçalho(' (Cor do cabeçalho) ex: black')
    }else if(indice == 4){
        AlterarCorFundocorpo(' (cor do corpo ) ex: white')
    }else if(indice == 5){
        AlterarCorMousehover(' ex : aqua')             
    }

})
function CriarInput(texto){
    const estilizacao = document.getElementById('estlização')
    const div = document.createElement('div')
    const input = document.createElement('input')
    div.setAttribute('id','divmod')
    input.setAttribute('class','inputs')
    input.placeholder=texto
    div.appendChild(input)
    estilizacao.appendChild(div)
}
function AlterarLogo(texto){
    CriarInput(texto)
}
function AlterarTitulo(texto){
    CriarInput(texto)
}
function AlterarTamanhoFonte(texto){
    CriarInput(texto) 
}
function AlterarCorFundocabeçalho(texto){
    CriarInput(texto) 
}
function AlterarCorFundocorpo(texto){
    CriarInput(texto)   
}
function AlterarCorMousehover(texto){
    CriarInput(texto)  
}
salvaralteracoes.addEventListener('click',()=>{
})