

const divCard = document.createElement('div');

//Definir um atributo class para a divcard com o nome de divCard
divCard.setAttribute('class',"divCard");

//criar uma imagem para que ao clicar nas fotos do produtos seja mostrado a foto selecionada
const imgCard = document.createElement('img');
imgCard.setAttribute('id','imgCard');
divCard.appendChild(imgCard);


//foi criado um elemento de HTML para a tag de link(a) para fechar a divCard. Quando o usuário clicar no 
//botão fechar será chamada uma função que recolhe a divCard.

const fechar = document.createElement ('a');
fechar.innerHTML = "Fechar";
fechar.setAttribute('class',"fechar");
divCard.appendChild(fechar);

fechar.onclick = function(){
    document.getElementsByClassName("divCard")[0].style.height = "0vh";
    document.getElementById("imgCard").style.opacity = "0";
}


const body = window.document.body;



function carregarProdutos(){

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Galeria de Produtos";
    header.appendChild(h1);

    const main = document.createElement('main');

    var i = 0;

    while (i < listaProduto.length) {

        var divProduto = document.createElement('div');
        var imgProduto = document.createElement('img');
        var h2NomeProduto = document.createElement('h2');
        var h3MarcaProduto = document.createElement('h3');
        var pPreco = document.createElement('p');
    
        //Adicionamos uma imagem que vem do Array listaProduto.
        imgProduto.setAttribute ("src",listaProduto[i].thumbnail);

        //Adicionamos uma class com nome imgProduto.
        imgProduto.setAttribute ("class", "imgProduto");

        //Adicionamos uma class com nome divProduto.
        divProduto.setAttribute ("class", "divProduto");
        
        /*Basicamente atrelamos um item (title) de um dos objetos({}) do ARRAY[] listaProduto na tag H2 do HTML*/
        h2NomeProduto.innerHTML = listaProduto[i].title;

        /*Basicamente atrelamos um item (brand) de um dos objetos({}) do ARRAY[] listaProduto na tag H3 do HTML*/
        h3MarcaProduto.innerHTML = listaProduto[i].brand;

        /*Basicamente atrelamos um item (price) de um dos objetos({})do ARRAY[] listaProduto na tag p do HTML */
        pPreco.innerHTML = listaProduto[i].price;
    
        divProduto.appendChild(imgProduto);
        divProduto.appendChild(h2NomeProduto);
        divProduto.appendChild(h3MarcaProduto);
        divProduto.appendChild(pPreco);
        
        
        var divMiniatura = document.createElement("div");
        divMiniatura.setAttribute("class","divMiniatura");
        var x = 0;

        while (x < listaProduto[i].images.length){

            var imgMiniatura = document.createElement("img");

            imgMiniatura.setAttribute("src",listaProduto[i].images[x]);
            imgMiniatura.setAttribute("class","imgMiniatura");

            imgMiniatura.addEventListener("click",exibirImagem.bind(this,listaProduto[i].images[x]));
            divMiniatura.appendChild(imgMiniatura);
            x++;
        }
        divProduto.appendChild(divMiniatura);
        main.appendChild(divProduto);

        i++;
    
    }


    body.appendChild(divCard);
    body.appendChild(header);
    body.appendChild(main);
    
}

body.addEventListener("load", carregarProdutos());

function exibirImagem(foto){
    document.getElementsByClassName("divCard")[0].style.height = "40vh";
    document.getElementById('imgCard').src = foto;
    document.getElementById('imgCard').style.opacity = "1";
}