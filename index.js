// Calculadora de partida rankeadas
// Dev:Jose tadeu
// Data 24/10/2024
// Função para calcular o desempenho
// Função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador;

function calcularVitorias(vitorias, derrotas){
    // Calcula o saldo de Rankeadas considerando vitórias e derrotas

    let partidaSaldo = vitorias - derrotas
    // Determina o nível com base no saldo de vitórias e derrotas
       let nivel;
       if (partidaSaldo < 10){
           nivel = "Ferro"
       } else if (partidaSaldo <=21){
           nivel = "Bronze"
       } else if (partidaSaldo <=51){
           nivel = "Prata"
       } else if (partidaSaldo <=81){
           nivel = "Ouro"
       } else if (partidaSaldo <=91){
           nivel = "Diamante"
       } else if (partidaSaldo <=101){
           nivel = "Lendário"
       } else {
           // Se partidaSaldo for maior que 100, então é "Imortal"
           nivel = "Imortal"
       }
       
       // Exibe a mensagem de saida
           console.log("O herói tem um saldo de " + partidaSaldo + " vitórias e está no ranking " + nivel)
       }
       calcularVitorias(81, 9)
    