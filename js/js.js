
var jogadorEscolha = 0;
var jogadorPontos = 0;
var maquinaEscolha = 0;
var maquinaPontos = 0;
var vencedor = -1;


function jogar(escolha) {
    jogadorEscolha = escolha;
    maquinaEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;


    if ((jogadorEscolha == 1) && (maquinaEscolha == 1)) {
        vencedor = 0;
    }
    else if ((jogadorEscolha == 1) && (maquinaEscolha == 2)) {
        vencedor = 2;

    }
    else if ((jogadorEscolha == 1) && (maquinaEscolha == 3)) {
        vencedor = 1;

    }
    else if ((jogadorEscolha == 2) && (maquinaEscolha == 1)) {
        vencedor = 1;

    }
    else if ((jogadorEscolha == 2) && (maquinaEscolha == 2)) {
        vencedor = 0;
    }
    else if ((jogadorEscolha == 2) && (maquinaEscolha == 3)) {
        vencedor = 2;

    }

    else if ((jogadorEscolha == 3) && (maquinaEscolha == 1)) {
        vencedor = 2;

    }
    else if ((jogadorEscolha == 3) && (maquinaEscolha == 2)) {
        vencedor = 1;

    }
    else if ((jogadorEscolha == 3) && (maquinaEscolha == 3)) {
        vencedor = 0;
    }

    document.getElementById("escolha-jogador-1").classList
        .remove('selecionado');
    document.getElementById("escolha-jogador-2").classList
        .remove('selecionado');
    document.getElementById("escolha-jogador-3").classList
        .remove('selecionado');

    document.getElementById("escolha-maquina-1").classList
        .remove('selecionado');
    document.getElementById("escolha-maquina-2").classList
        .remove('selecionado');
    document.getElementById("escolha-maquina-3").classList
        .remove('selecionado');



    document.getElementById("escolha-jogador-" + jogadorEscolha).classList
        .add('selecionado');
    document.getElementById("escolha-maquina-" + maquinaEscolha).classList
        .add('selecionado');

    if (vencedor == 0) {
        document.getElementById('mensagem').innerHTML = 'Empate';

    }
    else if (vencedor == 1) {
        document.getElementById('mensagem').innerHTML = 'Você Ganhou!';
        jogadorPontos++;
    }
    else if (vencedor == 2) {
        document.getElementById('mensagem').innerHTML = 'Você perdeu!';
        maquinaPontos++;
    }
    document.getElementById('pontos-jogador').innerHTML = jogadorPontos;

    document.getElementById('pontos-maquina').innerHTML = maquinaPontos;

}