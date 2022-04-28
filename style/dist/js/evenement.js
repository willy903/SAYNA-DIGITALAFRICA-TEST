
// Gestion d'évenment click sur le 2 premier bouton
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = changeform1;
btn2.onclick = changeform2;

function changeform1(){
    if(btn1){
        btn1.style.backgroundColor  = 'white';
        btn1.style.color  = '#B11313';
        btn2.style.backgroundColor  = 'transparent';
        btn2.style.color  = 'white';
    }    
}
function changeform2(){
    if(btn1){
        btn2.style.backgroundColor  = 'white';
        btn2.style.color  = '#B11313';
        btn1.style.backgroundColor  = 'transparent';
        btn1.style.color  = 'white';
    }    
}
