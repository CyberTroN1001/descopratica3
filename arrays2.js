// Gera os múltiplos de um número
function gerarMultiplos(numero, quantidade) {
    const multiplos = [];
  
    for (var i = 1; i <= quantidade; i++) {
      multiplos.push(numero * i);
    }
  
    return multiplos;
  }
  
  // Cria a matriz vazia
  const matriz = [];
  
  // Preenche a matriz com múltiplos
  for (var i = 2; i <= 5; i++) {
    matriz.push(gerarMultiplos(i, 5));
  }
  
  // Exibe a matriz
  console.table(matriz);