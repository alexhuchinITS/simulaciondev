//Funcion para generar no. aleatorio 

function generarNumerosAleatoriosSeguros(length){
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array); 
    return Array.from(array); 
}




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
        //se cumple generar numeros aleatorio por cantidad
        alert('se cumple');
        const numerosAleatorios =generarNumerosAleatoriosSeguros(cantidad); 
        resultadosDiv.innerHTML=`<p>Números aleatorios generados:</p> <ul>`;
        //imprimir el arreglo
        numerosAleatorios.forEach(numero=> {
            resultadosDiv.innerHTML += `<li>${numero}</li>`;

        });
        resultadosDiv.innerHTML += `</ul>`; 
    }else {
        // no se cumple mostrar mensaje que no se cumple
        alert('no se cumple');
    }


})
