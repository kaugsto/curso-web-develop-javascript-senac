window.document.body.onload = function (){
    //Vamos chamar a função soma com a passagem de 
    //numeros de um array

    // var numeros = [10, 30, 5, 8, 20];
    // soma(numeros);

    // var valores = prompt("Digite números separados por vírgula");
    
    
    //O comando split aplicado a variavel valores é capaz de quebrar os números digitados pelo usuário
    //onde há vírgula e assim gerar um array com esses números.


    // var n = valores.split(",");
    // console.log(n);
    // var np = [];
    //     for (var i = 0 ; i <n.length ; i++) {
    //         np.push(parseInt(n[i]));
    //     }
    
    // console.log(np);
    // maior(np);
    // menor(np);

    const inputNome = document.createElement("input");
    inputNome.setAttribute ("placeholder", "Digite seu nome");
    inputNome.onblur = function () {
        inputNome.value = mensagem(inputNome.value);
        console.log(mensagem(inputNome.value));
        window.document.title = mensagem(inputNome.title);
    };


    window.document.body.appendChild(inputNome);
    
    // var nome = prompt("Digite seu nome");
    // inputNome.value = msg(nome);

    // var ano = prompt("Digite um ano");
    // inputNome.value = anobissexto(ano);

// console.log (Math.round (1 + Math.random() * 254));
window.document.body.innerHTML = paletaCores (50,30);
console.log(paletaCores(0,0));

};




