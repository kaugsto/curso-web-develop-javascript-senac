// Arquivo de script para função olá
function ola(){
    alert('Olá Mundo')
}

/*
Dentro da página HTML terá um botão com um ID chamado btn click
ao clicar neste botão será chamada a função ola que executa uma mensagem
com o alert
 */

// document.getElementById("btnclick").onclick = ola;

//declarações de variáveis 

var nome;
var numero1, numero2;
var resultado;
nome="";
numero1 = 0;
numero2 = 0;
resultado = 0;

numero1 = prompt("Digite um valor");
numero2 = prompt("Digite outro valor");
resultado = numero1 * numero2;

console.log("A multiplicação entre o valor %d e %d é %e", numero1, numero2, resultado);

