function troca(){
    // = serve para atrelar 
    // == serve para comparar

    var imagem = document.getElementById("foto").src;

    //Vamos pegar a quantidade de caracteres da variável imagem
    //com comando lenght
    console.log(imagem);

    console.log(imagem.substring(imagem.length - 13));


    console.log(imagem.lenght);

    var rsimg = imagem.substring(imagem.length - 13);

    //MÉTODO OPERADOR TERNÁRIO
    rsimg = rsimg == "img/foto1.jpg" ? "img/foto2.jpg" : "img/foto1.jpg";
    document.getElementById("foto").src = rsimg;
}

function infodata(){

    //Vamos fazer uma instância da classe date().
    //Esta classe possui muitas funções, tais como: getHours, getDate, get Mouth

    const tempo = new Date();
    var datacompleta = tempo.toLocaleDateString();
    var diames = tempo.getDate(); //Traz o dia do mês
    var diasemana = tempo.getDay();  
    var mes = tempo.getMonth();
    var hora = tempo.getHours();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();

    var dias = "";
    
    
    console.log(datacompleta);

    //Desvio de fluxo multiplo com switch case

    //SWITCH PARA DIAS 
    switch(diasemana){

        case 0:
            dias = "Domingo";   
            break;
        case 1:
            dias = "Segunda-feira";
            break;
        case 2:
            dias = "Terça-feira";
            break;
        case 3:
            dias = "Quarta-feira";
            break;
        case 4:
            dias = "Quinta-feira";
            break;
        case 5:
            dias = "Sexta-feira";
            break;
        case 6:
            dias = "Sábado";
            break;
         default:
             alert("Este dia de semana não existe")
             break;
    }

        // console.log("Hoje é %d de %d o dia da semana é %s", diames, mes, dias);


        //SWITCH PARA MÊS
        switch (mes){
            case 0:
                mes = "Janeiro";
                break;
            case 1:
                mes = "Fevereiro";
                break;
            case 2:
                mes = "Março";
                break;
            case 3:
                mes = "Abril";
                break;
            case 4:
                mes = "Maio";
                break;
            case 5:
                mes = "Junho";
                break;
            case 6:
                mes = "Julho";
                break;
            case 7:
                mes = "Agosto";
                break;
            case 8:
                mes = "Setembro";
                break;
            case 9:
                mes = "Outubro";
                break;
            case 10:
                mes = "Novembro";
                break;
            case 11:
                mes = "Dezembro";
                break;
            default:
                alert("Este mês não existe")
            break;
        }
            console.log("Hoje é %d de %s o dia da semana é %s", diames, mes, dias);
    



}