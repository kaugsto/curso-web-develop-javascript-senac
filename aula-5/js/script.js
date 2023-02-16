/*
A função carregarDados é utilizada para carregar e exibir os dados relacionados a idade, cidade e produtos em controles
select do HTML e, para isso estamos usando a estrutura de repetição fazendo contagem de 18 a 90 anos para idad, enquanto
quue para cidade e produtos, usamos o laço for para ler o array de cidades e produtos.
*/


function carregarDados (){

    /* Foi criado constantes como referência aos controles de formulários HTML. A idéia é não ficar reescrevendo o 
    comando document várias vezes.
    */

    //FORMA "ERRADA" E MENOS PRÁTICA dessa forma teríamos que fazer várias vezes document.getetc.o que desejamos Exemplo abaixo:
    //document.getElementById("idade").style.display = "none";
    //document.getElementById("idade").innerHTML = "QualquerCoisa";
     
    
    //FORMA MAIS PRÁTICA PARA INSERIR/EDITAR ALGO NO HTML PELO JS É ATRELANDO A UMA VARIÁVEL IGUAL FOI FEITO ABAIXO:
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const cidade = document.getElementById("cidade");
    const prod = document.getElementById("prod");

    idade.innerHTML = `<option>Selecione a sua idade</option>`;
    /* Para preencher a idade de 18 a 90 anos, fizemos uma estrutura de repetição com for, onde é criado um elemento
    option com a idade de 18 a 90 anos dentro do select da idade
     */


    for(let i = 18; i<=90; i++){
        idade.innerHTML += `<option>${i}</option>`;
    }
    //Foi adicionado um option ao controle select cidade
    cidade.innerHTML = `<option>Selecione uma filial</option>`;

    //Essa estrutura de repetição foi criada para ler todo o conteúdo do array cidades e obter um cidade por vez e 
    //assim criar um controle option para cada cidade e adicionar ao controle select

    for (let i = 0; i<=3; i++){
        cidade.innerHTML += `<option>${cidades[i]}</option>`;
    }
    prod.innerHTML = `<option>Selecione o produto</option>`;
    
    //Nessa estrutura de repetição estamos obtendo os produtos do array produtos exibindo os nomes dos produtos
    //por meio do controle option neste caso o nome do produto é uma propriedade do array produtos assim foi 
    //necessário adicionar um ponto depois do colchetes para acessar essa propriedade tbm foi adicionado ao controle
    //option o atributo value que determina qual o valor da opção selecionada pelo usuário
    //no value foi atribuído o valor do ID e do produto
    for (let i = 0; i<=2; i++){
        prod.innerHTML += `<option value = ${produtos[i].idproduto}>${produtos[i].nomeproduto}</option>`;
    }

}
//Essa função é utilizada para encontrar um determinado produto no array de produtos quando o usuario seleciona
//um produto na página HTML. Ao selecionar o produto, o id do produto é passado via parâmetro para esta função e,
//então é utilizado uma estrutura de repetição para localizar o produto no array e exibi-lo em uma div 
function exibirProduto(id){

    const rsprod = document.getElementById("rsprod");

    //O for realiza uma leitura de ponta a ponta a fim de encontrar o ID passado para a função no array de produtos,
    //comparando o id passado com o id presente no array de produtos. Ao encontrar o id que o usuario passou a estrutura
    //de repetição é forçada a parar com o comando break e os dados do produto são adicionados a div que está na página

    for (let i = 0; i <=2 ; i++){

        if (produtos[i].idproduto == id){
            rsprod.innerHTML = produtos[i].nomeproduto;
            rsprod.innerHTML += produtos[i].marca;
            rsprod.innerHTML += produtos[i].preco;
            break; // Força a parada do laço (for)
        }
    }
}