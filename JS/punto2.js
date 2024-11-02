const tasaConversion=4100;

function convertir(){

    const dolares=document.getElementById("dolares").value;

    if(dolares>0){

        const pesos = dolares*tasaConversion;

        document.getElementById("resultado").textContent=`${dolares} dolares equivalen a ${pesos.toFixed(2)} pesos.`;

    
    }else{

        alert("por favor, ingrese una cantida valida en dolares");
    }
}