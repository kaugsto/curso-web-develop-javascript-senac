// //Function nomeada (tradicional)

// // function media (array_numeros){
// // let rs = 0;

// // for (var i = 0; i < array_numeros.length; i++;){
// //     rs += array_numeros[i];
// // }
// // return rs / array_numeros.length;
// // }

// //--------------------------------------------------------------------------------------------------------------------------------

// const media2 = function(array_numeros){
//     let rs = 0;
//     for (var i = 0; i < array_numeros.length ; i++) {
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length;
// }

// //--------------------------------------------------------------------------------------------------------------------------------

// //Arrow Function

// const media3 = (array_numeros) => {
//     let rs = 0;
//     for (var i = 0; i < array_numeros.length ; i++) {
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length;
// }


// //Essa função esta interligada ao forEach do script
// function exibir(cli,p){
//     console.log(cli.nome);
//     console.log(cli.produtos);

// }

// function getUsers(){
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() =>{


//         resolve([
//             {user:"Joao", email:"joao@gmail.com"},
//             {user:"Paulo",email:"paulo@gmail.com"}
//         ])


//     },2000)


//     }); 
// }

// function mostrar(usuarios){
//     console.clear();
//     console.log(usuarios)
// }

// const resultado = getUsers();
// resultado.then(mostrar);

function listarFilmes(){
    return new Promise((resolve, reject) => {
        resolve(listaFilmes);
        reject("Erro ao tentar executar");
    });
}

listarFilmes()
.then((x)=>{
    console.log(x);
}).catch((e)=>{
    console.error(e);
});