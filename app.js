function sortear(){

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let numerosText = quantidade > 1 ? "Números" : "Número";
    let sorteadosText = quantidade > 1 ? "sorteados" : "sorteado";

    if (de >= ate) {

        document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Erro! Campo "Número" deve ser inferior ao campo "Até o número".</label>';
        return;

      }

    if (quantidade > (ate - de + 1)) {

        document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Erro! Campo "Quantidade" deve ser menor ou igual ao intervalo informado nos campos "Do número" e "Até o número".</label>';
        return;

    }
    
    let numerosSorteados = [];
    let numero;

    for (let limite = 0; limite < quantidade; limite++){

        numero = numeroAleatorio(de, ate);

        while(numerosSorteados.includes(numero)){

            numero = numeroAleatorio(de, ate);
        }

        numerosSorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">${numerosText} ${sorteadosText}: ${numerosSorteados} </label>`;

    alterarBotaoReiniciar();

}

function alterarBotaoReiniciar(){
    
    let botaoReiniciar = document.getElementById("btn-reiniciar");

    if (botaoReiniciar.classList.contains("container__botao-desabilitado")){

        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");

    } else {

        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }

}

function reiniciar(){

    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarBotaoReiniciar();

}

function numeroAleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
