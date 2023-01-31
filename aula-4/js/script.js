//Comparação entre variável e array. Como obter dados de uma variável e uma array

var nome = "Pedro, Paulo";
console.log(nome);

//Exibir apenas o paulo
console.log(nome.substring(6,12));


//Criando um ARRAY para os nomes
const nomes = ["Pedro","Paulo"];
console.log (nomes);

//Exibir apenas o paulo pelo método ARRAY
console.log(nomes[1]);


//IMPORTANTE 
//QUANDO TRABALHAMOS COM ARRAY O IDEAL É DECLARAR A VARIÁVEL COMO CONSTANTE = CONS

//ADICIONANDO MAIS NOMES NO ARRAY
//USAREMOS O COMANDO PUSH (EMPURRAR)
nomes.push ("Roberto");
console.log(nomes);

//Exibir o último nome 
console.log(nomes[nomes.length -1]);

//ADICIONANDO MAIS UM NOME
nomes.push ("Vanessa");
console.log(nomes);
console.log("-------------------------------------------------")

//VAMOS CRIAR 2 OBJETOS DE PRODUTOS DE INFORMÁTICA
// {} significa que é um objeto
prod1 = {
    nome: "Mouse", 
    marca: "Microsoft",
    preco: 150.00
};
prod2 = {
    nome: "Teclado", 
    marca: "Microsoft",
    preco: 180.00
};

//VAMOS CRIAR UM ARRAY DE PRODUTOS
const produtos = [prod1,prod2];
console.log(produtos);

//Exibir produto 01 (prod1)
console.log(produtos[0]);

//Exibir apenas a marca do prod1
console.log(produtos[0].marca);

console.log("------------------------------------------------");

//CRIANDO UM ARRAY DE OBJETOS CLIENTE
// [] significa que é um ARRAY
const clientes = [
{
    nome:"Tadeu",
    idade: "25",
    cidade: "Leme"
},
{
    nome:"Fernanda",
    idade: "38",
    cidade: "Guarulhos"
}
];
console.log(clientes);

//ADICIONANDO MAIS UM CLIENTE
clientes.push({
    nome:"Gustavo",
    idade:"30",
    cidade:"São Paulo"
})
console.log(clientes);

//***************************************************************** */

//Exibir os produtos nas DIVS no navegador

var pnome = produtos[0].nome;
var pmarca = produtos[0].marca;
var ppreco = produtos[0].preco;

// document.getElementById("produto1").innerHTML = pnome;
// document.getElementById("produto1").innerHTML += pmarca;
// document.getElementById("produto1").innerHTML += ppreco;

//CRIAR UMA CONSTANTE PARA EXIBIR OS DADOS DO PRODUTO NA DIV
const saida = "<h2>"+pnome+"</h2><p class='m'>"+pmarca+"</p><p class='p'>"+ppreco+"</p>";
document.getElementById ("produto1").innerHTML = saida;

//Exibir os dados do produto2
//Vamos montar os dados em uma constante usando template string

const saida2 = `<h2>${produtos[1].nome}</h2>
               <p class='m'>${produtos[1].marca}</p>
               <p class='p'>${produtos[1].preco}</p>`;
document.getElementById("produto2").innerHTML = saida2;

for (let i = 1; i <=10; i++){
    console.log(i)
}

for (let bt = 1 ; bt <=10; bt++){
    document.getElementById("caixa").innerHTML +=`<button>Botao${bt}</button>`;
}

