# Amigo Secreto - Aplicación de Sorteo

## Descripción

"Amigo Secreto" es una aplicación web simple que permite a los usuarios agregar nombres a una lista y luego realizar un sorteo aleatorio para seleccionar un nombre. Esta herramienta es ideal para organizar juegos de intercambio de regalos, asignar tareas de forma aleatoria o cualquier actividad que requiera una selección al azar entre un grupo de personas.



## Características

- **Agregar Participantes**: Permite ingresar nombres a través de un campo de texto.
- **Validación de Entradas**: Verifica que no se ingresen nombres vacíos.
- **Lista Visual**: Muestra todos los nombres agregados en una lista visible en pantalla.
- **Sorteo Aleatorio**: Selecciona un nombre al azar de la lista con solo un clic.
- **Interfaz Intuitiva**: Diseño sencillo y fácil de usar.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Instalación

No se requiere instalación especial. Simplemente descarga los archivos y ábrelos en tu navegador favorito.

### Pasos para comenzar:

1. Clona este repositorio o descarga los archivos ZIP:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd amigo-secreto
   ```
3. Abre el archivo `index.html` en tu navegador web.

## Uso

### Agregar Nombres

1. Escribe un nombre en el campo de texto "Nombre de amigo".
2. Haz clic en el botón "Adicionar" para agregar el nombre a la lista.
3. El nombre aparecerá en la lista debajo del formulario de entrada.

### Realizar el Sorteo

1. Una vez que hayas agregado todos los nombres deseados, haz clic en el botón "Sortear Amigo".
2. El nombre seleccionado aleatoriamente se mostrará en la sección de resultados.

## Cómo Funciona

La aplicación utiliza JavaScript puro para manejar la lógica del sorteo:

1. Los nombres se almacenan en un array en memoria.
2. Cuando se agrega un nuevo nombre, se valida que no esté vacío y luego se agrega al array y a la lista visual.
3. Al realizar el sorteo, se genera un índice aleatorio utilizando `Math.random()` y `Math.floor()`.
4. Se recupera el nombre correspondiente al índice generado y se muestra en la sección de resultados.

## Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Archivo HTML principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Lógica JavaScript
└── README.md           # Este archivo
```

## Ejemplos de Uso

### Ejemplo 1: Organizar un intercambio de regalos



1. Agrega los nombres de todos los participantes del intercambio.
2. Para cada participante, realiza un sorteo para determinar a quién debe regalar.
3. Asegúrate de no repetir el mismo sorteo para evitar coincidencias.

### Ejemplo 2: Asignar tareas en un equipo



1. Agrega los nombres de los miembros del equipo.
2. Para cada tarea, realiza un sorteo para asignar un responsable.

## Personalización

Puedes personalizar fácilmente esta aplicación modificando los archivos:

- `styles.css` para cambiar la apariencia.
- `script.js` para modificar la lógica o agregar nuevas funcionalidades.
- `index.html` para cambiar la estructura de la página.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`)
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Posibles Mejoras

- Guardar la lista de nombres en el almacenamiento local del navegador.
- Agregar la opción de eliminar nombres individuales de la lista.
- Implementar la funcionalidad de "amigo secreto completo" donde cada persona recibe un nombre diferente.
- Añadir animaciones durante el sorteo para hacerlo más interactivo.
- Implementar la opción de compartir resultados por correo electrónico o redes sociales.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
