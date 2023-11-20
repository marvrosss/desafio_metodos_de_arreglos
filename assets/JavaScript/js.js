const tareas = [
    { id: 1, nombre: "cocinar", completado: false },
    { id: 2, nombre: "limpiar", completado: false },
    { id: 3, nombre: "comer", completado: false }
];
//
const total_tareas = document.querySelector("#total")
const listaTareas = document.querySelector("#lista_tareas")
const realizadas = document.querySelector("#total_realizadas")
function actualizar_pagina() {
    let html = ""
    for (let tarea of tareas) {
        html += `
        <li class="li_tarea">
        <p id="id">${tarea.id}</p>
        <p id="tarea">${tarea.nombre}</p>
        <button id="completar" onclick="cambiar(${tarea.id})">completado</button>
        <button id="eliminar" onclick="eliminar(${tarea.id})">X</button>
        </li>`
    }
    let completados = tareas.filter(tarea => tarea.completado === true)
    listaTareas.innerHTML = html
    total_tareas.innerHTML = "total: " + tareas.length
    realizadas.innerHTML = "realizadaos : " + completados.length
}

actualizar_pagina()

const tareaInput = document.querySelector("#input_tarea")

function agregar() {
    const nuevaTarea = tareaInput.value
    tareas.push({ id: tareas[tareas.length - 1].id + 1, nombre: nuevaTarea, completado: false });
    tareaInput.value = ""
    actualizar_pagina();
}


function eliminar(id) {
    const eliminado = tareas.findIndex((elemento) => elemento.id === id);
    tareas.splice(eliminado, 1)
    actualizar_pagina()
}

function cambiar(id) {
    const cambiado = tareas.findIndex((ele) => ele.id === id);
    tareas[cambiado].completado = true
    tareas[cambiado].nombre = "Listo"
    actualizar_pagina()
}



