

abrir.onclick = () => {
    console.log("clicou");
    fundo.style.backgroundColor = "rgba(0,0,0,0.5)";
    tela.style.top = "0px";
};

fechar.onclick = () => {
    fechar.style.backgroundColor = "rgba(0,0,0,0)";
    tela.style.top = "-600px";
};
