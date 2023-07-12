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
        const p = document.createElement('p')
        secao02.appendChild(h1)
        secao02.appendChild(p)
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

function modificarsecao01(el,img){
        secao1[el].firstElementChild.src=img
    
}
function modificarsecao02(el,texto){
   secao2[el].firstElementChild.innerHTML=texto

}
function modificarsecao03(el,link){
    console.log(secao3[el].firstElementChild.firstElementChild.setAttribute('href',link))

}

// Modificando templates


/*Modificar 1 */
modificarsecao01(0,'https://i6g8k8z4.stackpathcdn.com/wp-content/uploads/2021/07/turistas-em-buenos-aires.jpg')
modificarsecao02(0,' Buenos Aires')
modificarsecao03(0,'https://www.youtube.com/watch?v=Zs238FXKuTw')


/*Modificar 2 */

modificarsecao01(1,'https://s2-autoesporte.glbimg.com/7fbDefzwFWKIJSXO2J_ye_Xevlo=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/K/g/DhmSqxSuWzLeT3svOAzQ/2019-07-12-supraantig.jpg')
modificarsecao02(1,'Supra')
modificarsecao03(1,'https://www.youtube.com/watch?v=GQFIV3u-dTU')
