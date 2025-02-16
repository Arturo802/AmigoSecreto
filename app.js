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


// funcion para actualizar la lista
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
}

// Limpiar el contenido actual de la lista
listaAmigos.innerHTML =""; // Borra cualquier contenido previo dentro del contenedor de la lista

// Recorrer el array con un ciclo for
for(let i=0;i< amigos.length;i++){
    const pa = document.createElement('pa');
    pa.textContent =amigos[i];
    listaAmigos.appendChild(pa);
}

}


// funcion para sortear un  amigo aleatorio
function sortearAmigo(){
    // Valida que haya amigos disponibles
    if(amigos.length==0){
        alert('No hay amigos disponibles para sortear');
        return;
    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random()* amigos.length);

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML =`Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}