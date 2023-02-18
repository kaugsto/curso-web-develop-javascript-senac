// var n = [12, 15, 16, 18, 19, 23]
// // console.log(media(n));
// console.log(media2(n));
// console.log(media3(n));

// const btnMensagem = document.createElement("button");
// btnMensagem.innerHTML = "Mensagem";

// //Função tradicional
// // btnMensagem.onclick = function(){
// // alert("Oi");
// // }

// //Arrow Function
// btnMensagem.onclick = () => alert ("Oi"); // Se fosse na linha debaixo teríamos que usar {}

// const btnMsg = document.createElement("button");
// btnMsg.innerHTML = "Nova Mensagem";
// btnMsg.addEventListener("click", ()=>alert("Oi"));

// //Arrow Function
// info.forEach((cli,p)=>{
//     console.log(cli.nome);
//     console.log(cli.idade);
//     console.log(`A posição do cliente acima é ${p}`);
// })
// //Função anônima
// info.forEach(function(cli,p){
//     console.log(cli.nome);
//     console.log(`A posição é${p}`);
// });

// //Função nomeada (essa função foi construída no campo funções)
// info.forEach(exibir);

// // document.body.appendChild(btnMensagem);
// // document.body.appendChild(btnMsg);

// info.map((cliente,i)=>{
//     var divCli = document.createElement('div');
//     divCli.setAttribute("class","divcli");
//     divCli.innerHTML = `<h2>Nome: ${cliente.nome}</h2>`;
//     divCli.innerHTML += `<p class="idade">Idade:${cliente.idade}</p>`;
//     cliente.produtos.map((prod, ix) => { //usamos map quando trabalhamos com coleções [] 
//         divCli.innerHTML += `<ul>
//                                 <li>${prod.nome}</li>
//                                 <li>${prod.marca}</li>
//                                 <li>${prod.preco}</li>
//                             </ul>`; 
//     })

//     document.body.appendChild(divCli);
    
// });