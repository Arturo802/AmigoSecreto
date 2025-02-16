// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = {};

//funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

// Validar que el campo no este vacio
if(nombre == ""){
    alert("Por favor, inserte un nombre");
    return; // Detiene la ejecucion de la funcion
}

//Validar que el nombre no este duplicado
if(amigos.includes(nombreAmigo)){
    alert(`El nombre${nombreAmigo}` ya esta en la lista);
    return;
}

//Agregar el nombre al array de amigos
amigos.push(nombreAmigo);

//Limpiar el campo de entrada
inputAmigo.ariaValu = "";

//Actualizar la lista en el HTML
actualizarLista();




}