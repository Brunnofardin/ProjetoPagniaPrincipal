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
const sectionEstilizar = document.getElementById("estlização")


const menu = document.getElementById('menupc');
const flutuante = [...document.getElementsByClassName('m-f')];
const divmod = [...document.getElementsByClassName('divP')];
const voltarflutuante = document.getElementById('voltar');
const textoPadrao = document.getElementById('texto')
const body = document.getElementsByTagName('body')[0]
function CriarDIvs(qtd){
    for(c = 0 ; c<=qtd ; c++ ){
        const inputTxt = document.createElement('input')
        inputTxt.setAttribute('type','text')
        inputTxt.setAttribute('class','inputs')
        const inputRadio = document.createElement('input')
        inputRadio.setAttribute('type','radio')
        inputRadio.setAttribute('class','radio')
        const divPrincipal = document.createElement('div')
        divPrincipal.setAttribute('id','divmod')
        divPrincipal.setAttribute('class','divP')
        const divsecundaria1 = document.createElement('div')
        divsecundaria1.setAttribute('class','ipn-txt')
        const divsecundaria2 = document.createElement('div')
        divsecundaria2.setAttribute('id','ipn-radio')
        
        
        divsecundaria1.appendChild(inputTxt)
        divsecundaria2.appendChild(inputRadio)
        divPrincipal.appendChild(divsecundaria1)
        divPrincipal.appendChild(divsecundaria2)
        sectionEstilizar.appendChild(divPrincipal)
        
    }
    
    
}
CriarDIvs(5)
const elementosInputs = [...document.getElementsByClassName('inputs')]
const elementosRadio = [...document.getElementsByClassName('radio')]
elementosInputs.map((el,i)=>{
    if(i==0){
        el.value=' Cor Principal ex: white'
    }if(i==1){
        el.value=' Cor Secundaria ex: Black'
    }if(i==2){
        el.value =' Cor dos botões ex: aqua'
    }if(i==3){
        el.value='  Fonte ex: 1.3em'
    }if(i==4){
        el.value=' Cor da borda ex: white'
    }if(i==5){
        el.value=' Texto  ex: BFinfromática'
    }

})

salvaralteracoes.addEventListener('click',()=>{
    elementosRadio.filter((el,i)=>{
        if(el.checked){
            if(i==0){
                const cor = el.parentNode.previousSibling.firstChild.value

                btn_voltaradm.style.background=cor
                menu.style.background=cor
                voltarflutuante.style.background=cor
                flutuante.map((el,i)=>{
                    el.style.background=cor
                })

                divmod.map((el)=>{
                    el.style.background=cor

                })

        
            }if(i==1){
                let cor = el.parentNode.previousSibling.firstChild.value
            
            }if(i==2){
            
            }if(i==3){
                
            }if(i==4){
        
            }if(i==5){
                let texto = el.parentNode.previousSibling.firstChild.value
                textoPadrao.innerText=texto
            
            }
        }
    })

})
