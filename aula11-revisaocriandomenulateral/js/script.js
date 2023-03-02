//&equiv = Hamburger
//&times =     X

// == Significa se for igual 
// =  Significa atribuição 

//RESUMO//

//Se tag nav for igual a 0px ou seja se estiver aberta ao clicar na função quero que você feche (-200px).
//Se não, ou seja se for qualquer coisa diferente disso (que é o original definido no CSS). Ao clicar na função
//quero que você abra (0px). 

fechar.onclick = ()=>{ //Atribuindo um evento + uma função (anônima e arrow) na tag fechar do HTML .
    console.log("Oi, ta testando ai ?")
    if (document.querySelector("nav").style.left == "0px"){
        document.querySelector("nav").style.left ="-200px";
        document.querySelector("#fechar").innerHTML = "&equiv;";
        document.querySelector("body").style.backgroundColor = "rgb(56, 56, 211)";
    }else{
        document.querySelector("nav").style.left = "0px";
        document.querySelector("#fechar").innerHTML = "&times;";
        document.querySelector("body").style.background = "darkblue";
    }
}

//!!Outra forma de fazer a mesma aplicação!

// fechar.onclick = ()=>{
//     console.log('testando com outra lógica')
//     if(document.querySelector("nav").style.left == "-200px"){
//         document.querySelector("nav").style.left = "0px";
//         document.querySelector("#fechar").innerHTML = "&times;"
//     }else{
//         document.querySelector("nav").style.left = "-200px";
//         document.querySelector("#fechar").innerHTML = "&equiv;";
//     }
// }