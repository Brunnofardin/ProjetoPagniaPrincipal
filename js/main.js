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

/*Modificar 1 */


/*Modificar 2 */
