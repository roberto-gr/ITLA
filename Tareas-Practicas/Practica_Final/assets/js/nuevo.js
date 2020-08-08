import * as modulo from './modulo_funciones.js';

$(document).ready((e) => {
    let tareas = modulo.getTareasEnStorage();
    
    let todoMostrado= false;
    let mostrarCompletadas=false;
    let mostrarIncompletadas=false;
    


    
    $('#btn-todo').click(function (e) {
        mostrarCompletadas=false;
        mostrarIncompletadas=false;
        let imagenFondo = $("div.sin-tareas");
        imagenFondo.addClass("ocultar");
        let complete = $(".completas");
        let incomplete=$(".incompletas");
        complete.remove();
        incomplete.remove();

        tareas = modulo.getTareasEnStorage();

            if (tareas.length == 0) {
            return;
            }
        
        if(todoMostrado==false){
        
        for (let i = 0; i < tareas.length; i++) {

            let contenedorTareas = $('article.lista-tareas-contenido');
            contenedorTareas.append(`
                <div class="tarea card shadow col-12 border-0 mb-4">
                    <div class="card-body tarea-contenedor">
                        <h3 class="card-title">${tareas[i].titulo}<i class="fa fa-check-circle-o ${i} tareas"></i></h3>
                        <h3  class="card-title"></h3>
                        <p class="card-text">${tareas[i].descripcion}</p><br>
                        <button type="button" class="btn btn-primary col-3 mr-3" id="${i}">Completada</button>
                        <button type="button" class="btn btn-danger eliminar col-3 mr-4" id="${i}">Borrar</button>
                    </div>
                </div>
            `);
          }
           //
        for(let j=0;j<tareas.length;j++){
                if(tareas[j].estado==true){
                $('.'+j).css("color","green");
                $('.btn-danger').css("color","white","import");
                }
        }

         todoMostrado=true;    
        }//aqui termina if

           
        $('.btn-primary').click(function (e) {
               //este toma el ID del boton para escoger el objeto correcto
                tareas[this.id]={
                    titulo:tareas[this.id].titulo,
                    descripcion:tareas[this.id].descripcion,
                    estado:true
                };
                localStorage.setItem("tareas", JSON.stringify(tareas));
                $('.'+this.id).css("color","green");
                $(".btn-danger").css("color","white","important");


        });
        
        //eliminar tareas
        $('.btn-danger').click(function (e) {
            
            tareas[this.id]={
                    titulo:tareas[this.id].titulo,
                    descripcion:tareas[this.id].descripcion,
                    estado:tareas[this.id].estado
                };
        
            if(confirm("Estas seguro que deseas eliminar elemento?")){  

                //remove item
                tareas.splice(this.id, 1);

               
                localStorage.setItem('tareas', JSON.stringify(tareas));
                location.reload();

             }
        });
    });



    //completas
    $('#btn-completadas').click(function (e) {
        todoMostrado=false;
        mostrarIncompletadas=false;
        tareas = modulo.getTareasEnStorage();

        let htmlTareas = $(".tarea");
        let incompletas = $(".incompletas");
        htmlTareas.remove();
        incompletas.remove();
        let imagenFondo = $("div.sin-tareas");
        imagenFondo.addClass("ocultar");
        tareas = tareas.filter(modulo.filtrarCompletadas);
        let btn = $('#btn-completadas');
        btn.removeClass("btn-light");
        btn.addClass("completado-bg-color");
        if (tareas.length == 0) {
            return;
        }
        

        if(mostrarCompletadas==false){
            
        for (let i = 0; i < tareas.length; i++) {
            let contenedorTareas = $('article.lista-tareas-contenido');
            contenedorTareas.append(`
                <div class="completas  done card shadow col-12 border-0 mb-4">
                    <div class="card-body tarea-contenedor">
                        <h3 class="card-title">${tareas[i].titulo}<i class="fa fa-check-circle-o ${i} tareas"></i></h3>
                        <h3  class="card-title"></h3>
                        <p class="card-text">${tareas[i].descripcion}</p><br>
                    </div>
                </div>
            `);
        }
         
        for(let j=0;j<tareas.length;j++){
                if(tareas[j].estado==true){
                $('.'+j).css("color","green");
                $('.btn-danger').css("color","white","import");
                }
        }
        mostrarCompletadas=true;
      }//aqui temrmina el if
      //para eliminar tareas
        $('.btn-danger').click(function (e) {
            
            tareas[this.id]={
                    titulo:tareas[this.id].titulo,
                    descripcion:tareas[this.id].descripcion,
                    estado:tareas[this.id].estado
                };
        
            if(confirm("Confirmar que deseas eliminar elemento?")){  

                //Array corto
                tareas.splice(this.id, 1);

                //objeto al local storage
                localStorage.setItem('tareas', JSON.stringify(tareas));
             }
        });
    });
    
        //Incompletas

        $('#btn-incompletada').click(function (e) {
        todoMostrado=false;
        mostrarCompletadas=false;
        
        tareas = modulo.getTareasEnStorage();
        let htmlTask = $(".tarea");
        let completadas = $(".completas");
        htmlTask.remove();
        completadas.remove();
        
        let imgFondo = $("div.sin-tareas");
        imgFondo.addClass("ocultar");
        tareas = tareas.filter(modulo.filtrarIncompletadas);
        let btn2 = $('#btn-incompletada');
        btn2.removeClass("btn-light");
        btn2.addClass("completado-bg-color");
        if (tareas.length == 0) {
            return;
        }
        
        if(mostrarIncompletadas==false){
            
        for (let i = 0; i < tareas.length; i++) {
            let contenedorTareas = $('article.lista-tareas-contenido');
            contenedorTareas.append(`
                <div class="incompletas card shadow col-12 border-0 mb-4">
                    <div class="card-body tarea-contenedor">
                        <h3 class="card-title">${tareas[i].titulo}<i class="fa fa-check-circle-o tareas"></i></h3>
                        <h3  class="card-title"></h3>
                        <p class="card-text">${tareas[i].descripcion}</p><br>
                    </div>
                </div>
            `);
        }
        mostrarIncompletadas=true;
      }//fin del if
         
        
    });
});

