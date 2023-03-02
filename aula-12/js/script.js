
//&equiv = menu hamburger
//&times = menu X


af.onclick = ()=>{
    
    if(document.querySelector("nav").style.left == "0px"){
        document.querySelector("nav").style.left = "-200px";
        document.querySelector("#af").innerHTML = "&equiv;";  
        document.querySelector("#conteudo").style.marginLeft = "50px";  
    }
    else{
    document.querySelector("nav").style.left = "0px";
    document.querySelector("#af").innerHTML = "&times;";
    document.querySelector("#conteudo").style.marginLeft = "210px";
    }
};

let cm = "https://image.tmdb.org/t/p/w500";

function carregar(pagina){
    var url = `https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=us&page=${pagina}`;
    fetch(url)
    .then((response)=>response.json())
    .then((resultado)=>{
        console.log(resultado.results)
        
        document.querySelector("#conteudo").innerHTML = "";
        
        resultado.results.map((filme,index)=>{
            var caixa = document.createElement("div");
            caixa.setAttribute("class","caixa");
            caixa.setAttribute("onclick",`modal('${filme.backdrop_path}');`);
            var img = document.createElement("img");
            img.setAttribute("src", cm + filme.poster_path);


            var textos = document.createElement("div");
            textos.setAttribute("class","textos");

            var h2 = document.createElement("h2");
            h2.innerHTML = filme.title;

            var p1 = document.createElement("p");
            p1.setAttribute("class","sinopse");

            p1.innerHTML = filme.overview;

            textos.appendChild(h2);
            textos.appendChild(p1);

            caixa.appendChild(img);
            caixa.appendChild(textos);

            document.querySelector("#conteudo").appendChild(caixa);

        })
    })
    .catch((error) => console.error(erro));
}


window.document.body.onload = ()=>{
    carregar(1);
};

let saida = "<nav class=pag><ul>";

for(let i=1 ; i <=20 ; i++){
    saida += `<li><a href="#" onclick=carregar(${i})>${i}</a></li>`;
}

saida += "</ul></nav>";

document.getElementById("paginacao").innerHTML = saida;

window.setTimeout(()=>{
    document.querySelector("#carregando").style.opacity = "0";
    document.querySelector("#carregando").style.display = "none"; // Display none serve para fechar a div!
    document.querySelector("#conteudo").style.opacity = "1";

},5000);

function modal(imagem){
    fundo.style.opacity = "1";
    fundo.style.display = "block";

    setTimeout(()=>{

    
    exibir.style.marginTop = "10%";

    document.querySelector("#exibirImagem").innerHTML = `<img src="${cm+imagem}"/>`;
    document.querySelector("#exibirImagem img").style.width = "100%";
    document.querySelector("#exibirImagem img").style.height = "100%";

},500)

}

fechar.onclick = () => {

    fundo.style.opacity = "0";
    fundo.style.display = "none";

    exibir.style.marginTop = "-400px";
}