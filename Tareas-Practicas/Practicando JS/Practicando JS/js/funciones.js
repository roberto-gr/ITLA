'use strict'

// Funcion para crear Objeto Tareas
let arregloTareas = Array();
let creadorTareas = function(titulo, descripcion){
    let objetoTareas = {
        titulo:titulo, 
        descripcion:descripcion, 
        estado: true
    }

    arregloTareas.push(objetoTareas);

    return objetoTareas;
}

// Funcion para guardar en LocalStorage
let guardarDB = function(){
    if(JSON.parse(localStorage.getItem('tareas'))){
        JSON.parse(localStorage.getItem('tareas')).forEach((elemento, indice, arreglo)=>{
            arregloTareas.push(elemento);
        });
    }

    localStorage.setItem('tareas', JSON.stringify(arregloTareas));
}

// Funcion para mostrar todas las tareas
let seccionListar = document.querySelector('.seccionListar');
let mostrarTodasTareas = function(){
    arregloTareas = JSON.parse(localStorage.getItem('tareas'));
    if(arregloTareas === null){
        arregloTareas = [];
    }else{
        seccionListar.innerHTML = '';
        for(let i of arregloTareas){
            seccionListar.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i class="far fa-check-circle"></i>
            </div>
    
            `;

        }
    }

}

// Funcion para mostrar completas
let mostrarCompletas = function(){
    arregloTareas = JSON.parse(localStorage.getItem('tareas'));
    if(arregloTareas === null){
        arregloTareas = [];
    }else{
        seccionListar.innerHTML = '';
        for(let i of arregloTareas){
            if(i.estado == true){
                seccionListar.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i class="far fa-check-circle"></i>
            </div>
    
            `;

        }
            }
    }
}

// Funcion para mostrar incompletas
let mostrarIncompletas = function(){
    arregloTareas = JSON.parse(localStorage.getItem('tareas'));
    if(arregloTareas === null){
        arregloTareas = [];
    }else{
        seccionListar.innerHTML = '';
        for(let i of arregloTareas){
            if(i.estado == false){
                seccionListar.innerHTML += 
            `
            <div class="alert alert-dark d-flex justify-content-between" role="alert">
                ${i.titulo}
                <i class="far fa-check-circle"></i>
            </div>
    
            `;

        }
            }
    }

}




export{creadorTareas, guardarDB, mostrarTodasTareas, mostrarCompletas, mostrarIncompletas}