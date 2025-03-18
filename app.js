// Inicializar un array vacío para almacenar los nombres
let amigos = [];

// Obtener referencias a los elementos del DOM
const inputNombre = document.getElementById('nombre');
const btnAdicionar = document.getElementById('adicionar');
const btnSortear = document.getElementById('sortear');
const listaAmigos = document.getElementById('lista-amigos');
const resultadoSorteo = document.getElementById('resultado');

// Agregar evento al botón Adicionar
btnAdicionar.addEventListener('click', agregarAmigo);

// Agregar evento al botón Sortear
btnSortear.addEventListener('click', sortearAmigo);

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input y eliminar espacios en blanco al inicio y final
    const nombre = inputNombre.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar el campo de entrada
    inputNombre.value = '';
    
    // Enfocar el campo para el siguiente nombre
    inputNombre.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
    
    // Mostrar u ocultar el botón de sorteo según si hay amigos en la lista
    if (amigos.length > 0) {
        btnSortear.style.display = 'block';
    } else {
        btnSortear.style.display = 'none';
        // Ocultar el resultado anterior si se queda sin amigos
        resultadoSorteo.innerHTML = '';
    }
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    resultadoSorteo.innerHTML = `
        <h2>Resultado del Sorteo:</h2>
        <p class="amigo-sorteado">${amigoSorteado}</p>
    `;
}
