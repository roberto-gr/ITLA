// localstorage
$(document).ready((e) => {
    let tarea = {
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false
    };

    let descripciones = $("#descripcion");
    let titulos= $("#titulo"); 
    function getTareasEnStorage() {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        if (!tareas) {
            tareas = [];
            localStorage.setItem("tareas", JSON.stringify(tareas));
        }
        return tareas;
    }

    //setTareasEnStorage(tarea);

    let tareas = getTareasEnStorage();
    //para guardar tarea 
    $('#btn-guardar').click(function (e) {
        alert("Datos exitosamente Guardados");
        let tareas = getTareasEnStorage(); 
        
        tareas.push({
            titulo:titulos.val(),
            descripcion:descripciones.val(),
            estado: false
        });
        localStorage.setItem("tareas", JSON.stringify(tareas));  
        titulos.val("");
        descripciones.val("");
        
    });
});
