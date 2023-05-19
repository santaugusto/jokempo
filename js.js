/**
 * Função para lançar os dados e exibir os valores
 */
// Seleciona os elementos que representam os dados do computador
const Computador = document.getElementsByClassName("computador");
// Seleciona os elementos que representam os dados do jogador
const Jogador = document.getElementsByClassName("jogador");
// Inicializa arrays para armazenar os valores dos dados do computador e do jogador
let valoresComputador = [];
let valoresJogador = [];



function sortearlados() {
	
    let somaComputador=0;
    somaComputador = sortear(ladoC);
 

    let somaJogador = 0;
    somaJogador = sortear(ladoJ);
    
    if(somaComputador == 1 &&  somaJogador == 3){
        document.getElementById("resultado").textContent = "Computador venceu!";
        document.getElementById("pontuacao-computador")
    } else if(somaComputador == 2 && somaJogador == 1 ){
        document.getElementById("resultado").textContent = "Computador venceu!";
        document.getElementById("pontuacao-computador")
    } else if( somaComputador == 3 && somaJogador == 2 ){
        document.getElementById("resultado").textContent = "Computador venceu!";
        document.getElementById("pontuacao-computador")
    } else if(somaComputador == 3 &&  somaJogador == 1){
        document.getElementById("resultado").textContent = "Parabens, você venceu!";
    } else if(somaComputador == 1 && somaJogador == 2 ){
        document.getElementById("resultado").textContent = "Parabens, você venceu!";
    } else if( somaComputador == 2 && somaJogador == 3 ){
        document.getElementById("resultado").textContent = "Parabens, você venceu!";
    }else{
        document.getElementById("resultado").textContent = "Houve Empate!";
    }
}
  

function sortear(lado) {
    
    let valor = parseInt(Math.random() * 3) + 1;
    /*condição para mostrar imagem*/
    if(valor==1) 		lado.setAttribute('src','./img/papel.png' )
    else if(valor==2)	lado.setAttribute('src','./img/tesoura.png' )
    else				lado.setAttribute('src','./img/pedra.png' )
    // Armazena o valor do dado no array correspondente
    // Devolve o número sorteado
    return valor;

}

/**
 * Função para resetar o Game!
 */
 function resetar() {
	document.getElementById("pontuacao-computador").textContent = '';
	document.getElementById("pontuacao-jogador").textContent = '';
	document.getElementById("resultado").textContent = '';
	for (let i = 0; i < Computador; i++) {
		// Reseta para '' o valor de todos os dados
		Jogador[i].textContent = '';
		Computador[i].textContent = '';
 	}
}