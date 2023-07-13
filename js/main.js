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
    
    }

}

/*CRIANDO TEMPLATES */

const containerpai =document.getElementById('templates')
function CriarTemplate(n){
    for(c = 1;c<=n;c++){
        const container = document.createElement('div')
        container.setAttribute('class','product')
        const secao01 = document.createElement('section')
        secao01.setAttribute('class','seção1')
        const img = document.createElement('img')
        img.setAttribute('src','#')
        secao01.appendChild(img)
        const secao02 = document.createElement('section')
        secao02.setAttribute('class','seção2')
        const h1 = document.createElement('h1')
        const p1 = document.createElement("p")
        const p = document.createElement('p')
        secao02.appendChild(h1)
        secao02.appendChild(p1)
        const secao03 = document.createElement('section')
        secao03.setAttribute('class','seção3')
        const a = document.createElement('a')
        a.setAttribute('href','#')
        a.setAttribute('target','_blank')
        a.innerText='Acesse aqui'
        p.appendChild(a)
        secao03.appendChild(p)
        container.appendChild(secao01)
        container.appendChild(secao02)
        container.appendChild(secao03)
        containerpai.appendChild(container)

    }
}
CriarTemplate(6)

// Editando templates
const templates =[... document.getElementsByClassName("product")]

const secao1 = templates.map((e,i,a)=>{
    return e.firstElementChild
})

const secao2 = templates.map((e,i,a)=>{
    return e.firstElementChild.nextElementSibling
})
const secao3 = templates.map((e,i,a)=>{
    return e.firstElementChild.nextElementSibling.nextElementSibling
})

function modificarsecao0(el,img){
        secao1[el].firstElementChild.src=img
    
}
function modificarsecao01(el,texto){
   secao2[el].firstElementChild.innerHTML=texto

}
function modificarsecao02(el,texto){
    secao2[el].lastElementChild.innerHTML=texto

}
function modificarsecao03(el,link){
    console.log(secao3[el].firstElementChild.firstElementChild.setAttribute('href',link))

}

/*Modificar template 1 */
modificarsecao0(0,'./img/ProjetoIMC.png')
modificarsecao01(0,' Projeto IMC')
modificarsecao02(0,'Projeto indice de massa corporal. Tabela de indices, animações, adptação a  diversos tipos de tela.')
modificarsecao03(0,'https://brunnofardindesouza.github.io/ProjetoImc/')
/*Modificar template 2 */
modificarsecao0(1,'./img/ProjetoLogin.png')
modificarsecao01(1,'Projeto Login')
modificarsecao02(1,'Projeto tela de login. Adpatavel a diversos tipos de telas, requerimentos de campos e animações.')
modificarsecao03(1,'https://brunnofardindesouza.github.io/ProjetoLogin/')