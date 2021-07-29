
/*====================== (1) vars parametro medidas ======================*/
var input = document.getElementById('input');
var resultado = document.getElementById('resultado');
var inputTipo = document.getElementById('input__tipo');
var resultadoTipo = document.getElementById('resultado__tipo');

var inputP = document.getElementById('input__p');
var resultadoP = document.getElementById('resultado__p');
var inputListaP = document.getElementById('input__lista__p');
var resultadoListaP = document.getElementById('resultado__lista__p');

var inputL = document.getElementById('input__l');
var resultadoL = document.getElementById('resultado__l');
var inputListaL = document.getElementById('input__lista__l');
var resultadoListaL = document.getElementById('resultado__lista__l');

/*====================== (1) eventos parametro medidas ======================*/
input.addEventListener("keyup", meuResultado);
inputTipo.addEventListener("change", meuResultado);
resultadoTipo.addEventListener("change", meuResultado);

inputP.addEventListener("keyup", converterPeso);
inputListaP.addEventListener("change", converterPeso);
resultadoListaP.addEventListener("change", converterPeso);

inputL.addEventListener("keyup", converterLitro);
inputListaL.addEventListener("change", converterLitro);
resultadoListaL.addEventListener("change", converterLitro);

/*====================== (1) função parametro medidas ======================*/


    /*========================= (1.1)tamanho =========================*/
function meuResultado(){

    inputTipoValor = inputTipo.value;
    resultadoTipoValor = resultadoTipo.value;

    if(inputTipoValor === "metro" && resultadoTipoValor === "kilometro"){
        resultado.value = Number(input.value) * 0.001;
    }else if(inputTipoValor === "metro" && resultadoTipoValor === "centimetro"){
        resultado.value = Number(input.value) * 100;
    }else if(inputTipoValor === "metro" && resultadoTipoValor === "metro"){
        resultado.value = input.value;
    }

    if(inputTipoValor === "centimetro" && resultadoTipoValor === "kilometro"){
        resultado.value = Number(input.value) * 0.00001;
    }else if(inputTipoValor === "centimetro" && resultadoTipoValor === "centimetro"){
        resultado.value = input.value;
    }else if(inputTipoValor === "centimetro" && resultadoTipoValor === "metro"){
        resultado.value = Number(input.value) * 0.01;
    }

    if(inputTipoValor === "kilometro" && resultadoTipoValor === "kilometro"){
        resultado.value = input.value;
    }else if(inputTipoValor === "kilometro" && resultadoTipoValor === "centimetro"){
        resultado.value = Number(input.value) * 100000;
    }else if(inputTipoValor === "kilometro" && resultadoTipoValor === "metro"){
        resultado.value = Number(input.value) * 1000;
    }
    
}

    /*========================= (1.2)Peso =========================*/

function converterPeso(){
    inputTipoValor = inputListaP.value;
    resultadoTipoValor = resultadoListaP.value;

    if(inputTipoValor === "grama" && resultadoTipoValor === "grama"){
        resultadoP.value = inputP.value;
    }else if(inputTipoValor === "grama" && resultadoTipoValor === "quilograma"){
        resultadoP.value = Number(inputP.value) * 0.001;
    }else if(inputTipoValor === "grama" && resultadoTipoValor === "tonelada"){
        resultadoP.value = Number(inputP.value) *  0.000001;
    }

    if(inputTipoValor === "quilograma" && resultadoTipoValor === "quilograma"){
        resultadoP.value = inputP.value;
    }else if(inputTipoValor === "quilograma" && resultadoTipoValor === "grama"){
        resultadoP.value = Number(inputP.value) * 1000;
    }else if(inputTipoValor === "quilograma" && resultadoTipoValor === "tonelada"){
        resultadoP.value = Number(inputP.value) *  0.001;
    }

    if(inputTipoValor === "tonelada" && resultadoTipoValor === "tonelada"){
        resultadoP.value = inputP.value;
    }else if(inputTipoValor === "tonelada" && resultadoTipoValor === "grama"){
        resultadoP.value = Number(inputP.value) * 0.000001;
    }else if(inputTipoValor === "tonelada" && resultadoTipoValor === "quilograma"){
        resultadoP.value = Number(inputP.value) *  0.001;
    }

}

    /*========================= (1.3)litro =========================*/

    function converterLitro(){

        inputTipoValor = inputListaL.value;
    resultadoTipoValor = resultadoListaL.value;
    console.log(resultadoTipoValor);

    if(inputTipoValor === "mililitro" && resultadoTipoValor === "mililitro"){
        resultadoL.value = inputL.value;
    }else if(inputTipoValor === "mililitro" && resultadoTipoValor === "litro"){
        resultadoL.value = Number(inputL.value) * 0.001;
    }else if(inputTipoValor === "mililitro" && resultadoTipoValor === "metrocubico"){
        resultadoL.value = Number(inputL.value) *  0.000001;
    }

    if(inputTipoValor === "litro" && resultadoTipoValor === "litro"){
        resultadoL.value = inputL.value;
    }else if(inputTipoValor === "litro" && resultadoTipoValor === "mililitro"){
        resultadoL.value = Number(inputL.value) * 1000;
    }else if(inputTipoValor === "litro" && resultadoTipoValor === "metrocubico"){
        resultadoL.value = Number(inputL.value) *  0.001;
    }

    if(inputTipoValor === "metrocubico" && resultadoTipoValor === "metrocubico"){
        resultadoL.value = inputL.value;
    }else if(inputTipoValor === "metrocubico" && resultadoTipoValor === "mililitro"){
        resultadoL.value = Number(inputL.value) * 1000000;
    }else if(inputTipoValor === "metrocubico" && resultadoTipoValor === "litro"){
        resultadoL.value = Number(inputL.value) *  1000;
    }
    
    }

