/*====================== (2) vars mudança estilo ======================*/
var tamanhoBotao = document.getElementById('tamanho');
var pesoBotao = document.getElementById('peso');
var litroBotao = document.getElementById('litro');
var tituloT = document.getElementById('titulo__t');
var tituloP = document.getElementById('titulo__p');
var tituloL = document.getElementById('titulo__l');
var containerT = document.getElementById('container__t');
var containerP = document.getElementById('container__p');
var containerL = document.getElementById('container__l');


/*====================== (2) eventos mudança estilo ======================*/
tamanhoBotao.addEventListener("click", mudaParaTamanho);
pesoBotao.addEventListener("click", mudaParaPeso);
litroBotao.addEventListener("click", mudaParaLitro);

/*====================== (2) funções mudança estilo ======================*/
function mudaParaTamanho(){
    containerT.classList.remove('escondido')
    containerT.classList.add('visivel')
    containerP.classList.remove('visivel')
    containerP.classList.add('escondido')
    containerL.classList.remove('visivel')
    containerL.classList.add('escondido')

    tamanhoBotao.classList.remove('menu__b')
    tamanhoBotao.classList.add('menu__a')
    pesoBotao.classList.remove('menu__a') 
    pesoBotao.classList.add('menu__b') 
    litroBotao.classList.remove('menu__a')
    litroBotao.classList.add('menu__b')  
    
    document.body.classList.remove('bg__peso')
    document.body.classList.remove('bg__litro')
    document.body.classList.add('bg__tamanho')

    tituloT.classList.remove('escondido')
    tituloT.classList.add('visivel')
    tituloP.classList.remove('visivel')
    tituloP.classList.add('escondido')
    tituloL.classList.remove('visivel')
    tituloL.classList.add('escondido')

    select.classList.remove('bg__peso')
    select.classList.remove('bg__litro')
    select.classList.add('bg__tamanho')

}

function mudaParaPeso(){
    containerP.classList.remove('escondido')
    containerP.classList.add('visivel')
    containerL.classList.remove('visivel')
    containerL.classList.add('escondido')
    containerT.classList.remove('visivel')
    containerT.classList.add('escondido')

    pesoBotao.classList.remove('menu__b')
    pesoBotao.classList.add('menu__a')
    tamanhoBotao.classList.remove('menu__a') 
    tamanhoBotao.classList.add('menu__b') 
    litroBotao.classList.remove('menu__a')
    litroBotao.classList.add('menu__b')

    document.body.classList.remove('bg__tamanho')
    document.body.classList.remove('bg__litro')
    document.body.classList.add('bg__peso')

    tituloP.classList.remove('escondido')
    tituloP.classList.add('visivel')
    tituloT.classList.remove('visivel')
    tituloT.classList.add('escondido')
    tituloL.classList.remove('visivel')
    tituloL.classList.add('escondido')

    select.classList.remove('bg__tamanho')
    select.classList.remove('bg__litro')
    select.classList.add('bg__peso')

}

function mudaParaLitro(){
    containerL.classList.remove('escondido')
    containerL.classList.add('visivel')
    containerP.classList.remove('visivel')
    containerP.classList.add('escondido')
    containerT.classList.remove('visivel')
    containerT.classList.add('escondido')

    litroBotao.classList.remove('menu__b')
    litroBotao.classList.add('menu__a')
    tamanhoBotao.classList.remove('menu__a') 
    tamanhoBotao.classList.add('menu__b') 
    pesoBotao.classList.remove('menu__a')
    pesoBotao.classList.add('menu__b') 
    
    document.body.classList.remove('bg__peso')
    document.body.classList.remove('bg__tamanho')
    document.body.classList.add('bg__litro')

    tituloL.classList.remove('escondido')
    tituloL.classList.add('visivel')
    tituloP.classList.remove('visivel')
    tituloP.classList.add('escondido')
    tituloT.classList.remove('visivel')
    tituloT.classList.add('escondido')

    select.classList.remove('bg__tamanho')
    select.classList.remove('bg__peso')
    select.classList.add('bg__litro')
    
}