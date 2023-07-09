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
CriarTemplate(3)
function modificar(produto,seção,link,texto,imagem){
    const product = document.getElementsByClassName("product")
    if(seção == 1){
        const seção1 = product[produto].firstChild
        seção1.firstChild.src=imagem

    }else if(seção == 2){
        const seção2 = product[produto].firstChild.nextSibling
        seção2.firstChild.innerText=texto

    }else if(seção == 3){
        const seção3 = product[produto].firstChild.nextSibling.nextSibling
        const ahref = seção3.firstChild.firstChild
        ahref.setAttribute('href',link)
        console.log(seção3.firstChild.firstChild)

    }
}
/*Modificar 1 */
modificar(0,1,'','','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1374px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg')

modificar(0,2,'','Monalisa')

modificar(0,3,'https://www.youtube.com/watch?v=_4FnLnKoaGY')

/*Modificar 2 */