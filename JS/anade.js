const palabras = [
    "Innovacion",
     "tecnologia", "Desarrollo", "Programacion",
      "Aprendizaje","Creatividad", "Colaboracion", "Soluciones",
      "Automatizacion","Optimizacion"



];

function anade(){
    console.log("Funcion anade llamada");

    const palabraAleatoria = palabras[Math.floor(Math.random()*palabras.length)];

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent=palabraAleatoria;

    const lista = document.getElementById("lista");
    lista.appendChild(nuevoElemento);
}