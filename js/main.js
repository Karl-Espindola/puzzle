//Declaración de variables

let array_img=[];
let fichas_ordenadas=[0,1,2,3,4,5,6,7,8];
let fichas=[0,1,2,3,4,5,6,7,8];
let num_click=0;
let casilla=0;
let contador=0;
let posicion_1;


//Declaración de funciones

function mover(){
    for(let i=0; i<9; i++){
     document.getElementById("img"+(i+1)).src="img/"+(fichas[i]+1)+".jpg";

     document.getElementById("img"+(i+1)).style="border:none"
    }
}
function seleccionar(casilla){
 
    num_click++;
    
    if(num_click==1){
       
        posicion_1=casilla;
        console.log(casilla);
        
    }
    else if(num_click==2){
        let posicion_2=casilla;
        let intercambio= fichas[posicion_1]
        fichas[posicion_1]=fichas[posicion_2]
        fichas[posicion_2]=intercambio;
        
        
        console.log(fichas);
        mover();
        document.getElementById("img"+(casilla+1)).style.border="4px solid orange"
        
        num_click=0;
    }
    

}
function verificar(){

    for(let i=0; i<9; i++){
        console.log(contador);
        
        if(fichas[i]!=fichas_ordenadas[i]){
            contador++;
            continue
        }
    }
    if(contador!=0){
        alert("Desordenado");
    }
    else{
        alert("ordenado");
    }
    contador=0;
}


function desordenar(){
    fichas=fichas.sort(function(){
        return Math.random()-0.5;
    })
    console.log(fichas);
    mover();
}
function verificar(){

    for(let i=0; i<9; i++){
        console.log(contador);
        
        if(fichas[i]!=fichas_ordenadas[i]){
            contador++;
            continue
        }
    }
    if(contador!=0){
        alert("Desordenado");
    }
    else{
        alert("ordenado");
    }
    contador=0;
}
window.onload=function(){
    desordenar()
}


let btn_veri=document.getElementById("btnVerificar");
btn_veri.addEventListener("click",verificar);








