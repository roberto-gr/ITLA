'use strict'
import * as funciones from '/js/funciones.js';

// Variables
let nuevaTarea = document.querySelector('.nuevaTarea');
let botonCancelar = document.querySelector('.cancelar');
let todasTareas = document.querySelector('.todas');
let botonCompletas = document.querySelector('.completas');
let botonIncompletas = document.querySelector('.incompleto');

// Formulario 
const formulario = document.querySelector('.formulario');
    if(formulario){
        formulario.addEventListener('submit', (e)=>{
            e.preventDefault();
            let titulo = document.querySelector('#titulo').value;
            let descripcion = document.querySelector('#descripcion').value;

            if(titulo.trim() == '' || descripcion.trim() == ''){
                alert('No puedes dejar un campo vacío');
            }else{
                funciones.creadorTareas(titulo, descripcion);
                funciones.guardarDB();

                document.location.href='/index.html';
                // formulario.reset();
            }

        });
    }

    // Redireccionar a Nueva Tarea
    if(nuevaTarea){
        nuevaTarea.addEventListener('click', function(){
            document.location.href='/formulario.html';
        });
    }

    // Redireccionar a Index.html
    if(botonCancelar){
        botonCancelar.addEventListener('click', ()=>{
            document.location.href = '/index.html';
        });
    };

// Boton tareas mostrar todas
    if(todasTareas){
        todasTareas.addEventListener('click', function(){
            funciones.mostrarTodasTareas();
        });
    }
// Boton tareas mostrar completas
    if(botonCompletas){
        botonCompletas.addEventListener('click', ()=>{
            funciones.mostrarCompletas();
        });
    };

// Boton tareas mostrar incompletas
    if(botonIncompletas){
        botonIncompletas.addEventListener('click', function(){
            funciones.mostrarIncompletas();
        });
    };
  