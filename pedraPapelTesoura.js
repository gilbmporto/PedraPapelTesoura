
//Variáveis dos botões abaixo.
var botaoTesoura = document.getElementById("tesoura-botao");
var botaoPapel = document.getElementById("papel-botao");
var botaoPedra = document.getElementById("pedra-botao");

//Variável do botão Jogar.
var botaoJogar = document.getElementById("jogar-botao")

//Nome da Escolha do Jogador.
var nomeEscolhaJogador;

//Variável referente à opção do jogador. 0 = Tesoura, 1 = Papel, 2 = Pedra.
var numEscolhido = 3;

//Variável do número escolhido pelo computador
var numComputador;

//Nome da escolha do computador
var nomeEscolhaComputador;

//Resposta do resultado do jogo.
var respostaJogo = document.getElementById('resultado-jogo');

//Escolha do Jogador em Texto
var escolhaJogadorTxt = document.getElementById('escolhaJogador');

//Escolha do Computador em Texto
var escolhaComputadorTxt = document.getElementById('escolhaComputador');

//Resultado do Jogo em Texto
var resultadoDoJogoTxt = document.getElementById('resultadoEmTexto')

botaoTesoura.addEventListener('click', () => {
    botaoTesoura.style.backgroundColor = 'rgb(26, 78, 92)';
    botaoTesoura.style.color = 'rgb(255, 255, 255)';
    botaoPapel.style.backgroundColor = 'rgb(77, 192, 224)'
    botaoPapel.style.color = 'rgb(0, 0, 0)'
    botaoPedra.style.backgroundColor = 'rgb(77, 192, 224)'
    botaoPedra.style.color = 'rgb(0, 0, 0)'
    numEscolhido = 0;
    nomeEscolhaJogador = 'tesoura';
})

botaoPapel.addEventListener('click', () => {
    botaoPapel.style.backgroundColor = 'rgb(26, 78, 92)';
    botaoPapel.style.color = 'rgb(255, 255, 255)';
    botaoTesoura.style.backgroundColor = 'rgb(77, 192, 224)';
    botaoTesoura.style.color = 'rgb(0, 0, 0)';
    botaoPedra.style.backgroundColor = 'rgb(77, 192, 224)'
    botaoPedra.style.color = 'rgb(0, 0, 0)'
    numEscolhido = 1;
    nomeEscolhaJogador = 'papel';
})

botaoPedra.addEventListener('click', () => {
    botaoPedra.style.backgroundColor = 'rgb(26, 78, 92)';
    botaoPedra.style.color = 'rgb(255, 255, 255)';
    botaoPapel.style.backgroundColor = 'rgb(77, 192, 224)';
    botaoPapel.style.color = 'rgb(0, 0, 0)';
    botaoTesoura.style.backgroundColor = 'rgb(77, 192, 224)';
    botaoTesoura.style.color = 'rgb(0, 0, 0)';
    numEscolhido = 2;
    nomeEscolhaJogador = 'pedra';
})

botaoJogar.addEventListener('click', () => {
    if (numEscolhido === 3) {
        respostaJogo.innerHTML = 'Opa, escolha uma opção acima, por favor.';
    }
    botaoPedra.style.backgroundColor = 'rgb(77, 192, 224)';
    botaoPapel.style.backgroundColor = 'rgb(77, 192, 224)';
    botaoTesoura.style.backgroundColor = 'rgb(77, 192, 224)';
    numComputador = Math.floor(Math.random() * 3)
    if (numComputador === 0) {
        nomeEscolhaComputador = 'tesoura';
    } else if (numComputador === 1) {
        nomeEscolhaComputador = 'papel';
    } else {
        nomeEscolhaComputador = 'pedra';
    }
    if (numEscolhido === numComputador) {
        escolhaJogadorTxt.innerHTML = `Você escolheu ${nomeEscolhaJogador}!`;
        escolhaComputadorTxt.innerHTML = `O computador escolheu ${nomeEscolhaComputador}!`;
        resultadoDoJogoTxt.innerHTML = 'Empate! 🥸';
    } else if (numEscolhido === 0 && numComputador === 1) {
        escolhaJogadorTxt.innerHTML = `Você escolheu ${nomeEscolhaJogador}!`;
        escolhaComputadorTxt.innerHTML = `O computador escolheu ${nomeEscolhaComputador}!`;
        resultadoDoJogoTxt.innerHTML = 'Você ganhou! 😃';
    } else if (numEscolhido === 0 && numComputador === 2) {
        escolhaJogadorTxt.innerHTML = `Você escolheu ${nomeEscolhaJogador}!`;
        escolhaComputadorTxt.innerHTML = `O computador escolheu ${nomeEscolhaComputador}!`;
        resultadoDoJogoTxt.innerHTML = 'Você perdeu! 🥺';
    } else if (numEscolhido === 1 && numComputador === 0) {
        escolhaJogadorTxt.innerHTML = `Você escolheu ${nomeEscolhaJogador}!`;
        escolhaComputadorTxt.innerHTML = `O computador escolheu ${nomeEscolhaComputador}!`;
        resultadoDoJogoTxt.innerHTML = 'Você perdeu! 🥺';
    } else if (numEscolhido === 1 && numComputador === 2) {
        escolhaJogadorTxt.innerHTML = `Você escolheu ${nomeEscolhaJogador}!`;
        escolhaComputadorTxt.innerHTML = `O computador escolheu ${nomeEscolhaComputador}!`;
        resultadoDoJogoTxt.innerHTML = 'Você ganhou! 😃';
    } else if (numEscolhido === 2 && numComputador === 0) {
        escolhaJogadorTxt.innerHTML = `Você escolheu ${nomeEscolhaJogador}!`;
        escolhaComputadorTxt.innerHTML = `O computador escolheu ${nomeEscolhaComputador}!`;
        resultadoDoJogoTxt.innerHTML = 'Você ganhou! 😃';
    } else if (numEscolhido === 2 && numComputador === 1) {
        escolhaJogadorTxt.innerHTML = `Você escolheu ${nomeEscolhaJogador}!`;
        escolhaComputadorTxt.innerHTML = `O computador escolheu ${nomeEscolhaComputador}!`;
        resultadoDoJogoTxt.innerHTML = 'Você perdeu! 🥺';
    }
})
