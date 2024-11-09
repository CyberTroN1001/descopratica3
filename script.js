// Calculando o cosseno de um número
var numero = 40;
var coseno = Math.cos(numero);

// Encontrando o valor máximo e mínimo de um conjunto de números
var numeros = [10, 20, 30, 40, 50];
var maximo = Math.max(...numeros);
var minimo = Math.min(...numeros);

// Calculando a potência de um número
var base = 5;
var expoente = 2;
var potencia = Math.pow(base, expoente);

// Gerando um número aleatório entre 0 e 1
var aleatorio = Math.random();

// Exibindo os resultados na página HTML
var respostaDiv = document.getElementById('resposta');
respostaDiv.innerHTML = `
    <p>Cosseno de ${numero}: ${coseno}</p>
    <p>Valor máximo: ${maximo}</p>
    <p>Valor mínimo: ${minimo}</p>
    <p>${base} elevado a ${expoente}: ${potencia}</p>
    <p>Número aleatório entre 0 e 1: ${aleatorio}</p>
`;