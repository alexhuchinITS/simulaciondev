//Funcion para generar no. aleatorio 






//Manejo de formulario 

//obtener informacion del formulario 
const form= document.getElementById('randomForm');
const resultadosDiv = document.getElementById('resultados');
// capturar el evento del boton del formulario 

form.addEventListener('submit',function(event){
    event.preventDefault(); 
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    //verificar si el valor de cantidad es >0 
    // el valor se diferente de Nan  = por que no hay valores 
    // que sea mayor que 0
    
    if(!isNaN(cantidad) && cantidad >0){
        //se cumple
        alert('se cumple');
    }else {
        // no se cumple
        alert('no se cumple');
    }


})
