// function dizoi(){
//     console.log('oi');
// }

// window.setInterval(dizoi,2000);

// window.setInterval(()=>{
//     console.log('oi');
// },2000);


//SetInterval serve para setar um intervalo para determinada função.
// let x = 1;
// window.setInterval(()=>{
//     console.log(`Contei${x}`);
//     x++;
// },1000);    

const quadro = document.querySelector('#quadro');


// let x = 5;
// let r = 10;
// window.setInterval(()=>{
//     //Alterar os estilos de largura e altura do quadro
//     x += 1;
//     quadro.style.width = `${x}px`;
//     quadro.style.height = `${x}px`;
//     quadro.style.transform = `rotate(${r}deg)`;
//     quadro.style.borderRadius = `${r / 2}px`;
//     r++;
// },100); 

// let pY = -500;

// // window.setInterval(()=>{
// //     console.log(quadro.style.top);
// //     quadro.style.top = `${pY}px`;
// //     if (pY >= 10){
// //         pY = 10;
// //        }   pY += 5;
    
// // }),100000;

// let t = -500;
// const quadroA = window.setInterval(() => {
//     console.log(quadro.style.top);
//     quadro.style.top = `${t}px`;
//     if(t >= 10){
//         window.clearInterval(quadroA);
//     }
//     t += 2;
// },20)

// window.document.body.onmousemove = () => {
//     console.log(event.clientX, event.clientY);
// };

// let pX = 0;
// let pY = 0;

// document.body.onclick = (event) => {
//     const mov = window.setInterval(() => {
//         if(pX == event.clientX){
//     clearInterval(mov);
// }    

//     quadro.style.position = "absolute";
//     quadro.style.top * `${event.clientY - pY}px`;
//     quadro.style.left = `${event.clientX - pX}px`;
// }, 20);
// };

// function relogio(){
//     var tempo = new Date();
//     var hora = tempo.getHours();
//     var minuto = tempo.getMinutes();
//     var segundo = tempo.getSeconds();

//     quadro.innerHTML = `${hora}:${minuto}:${segundo}`;
// }
// window.setInterval(relogio, 1000);  