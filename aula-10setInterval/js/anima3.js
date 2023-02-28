//Aplicando setInterval com função tradicional

function troca(){
    
    console.log('teste')
    //Exemplo caso quiséssemos definir uma variável:
    // let mudardecor = document.querySelector('#div')
    //mudardecor.style.backgroundColor = "yellow"
    
    //Como ñ atribuímos variável o resultado ficou como o exemplo abaixo:
    div.style.backgroundColor = "white"
    div.innerHTML = "<h2>Êo Êo</h2>";
    div.style.textAlign = "center";
}
    window.setInterval(troca,3000);

//LEGAL SABER//

//Podemos definir uma variável e depois atrelar ela a uma div como exemplo let mudardecor = document.queryselec...
//Ou podemos colocar a div diretamente aonde desejamos alterar como exemplo div.style.backgroundColor....
//O RESULTADO É O MESMO!!!!


//Fazendo a mesma coisa porém agora utilizando função ARROW
window.setInterval(()=>{
    console.log('testeII')
    div.style.backgroundColor = 'red';
    div.innerHTML = "<h2>TRICOLOR, TRICOLOR</h2>";
}, 4000)