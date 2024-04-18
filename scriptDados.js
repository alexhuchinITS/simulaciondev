// funcion lanzar dados

function lanzarDadof() {
    const array = new Uint32Array(1); //solo es 1
    window.crypto.getRandomValues(array); 
    return (array[0] % 6) + 1; //No. entre 1 y 6
}
// Manejo de boton de lanzar dado 
const lanzarDado = document.getElementById('lanzarDado');
const resultados= document.getElementById('resultados'); 
lanzarDado.addEventListener('click',function(){
    const resultadoLanzamiento= lanzarDadof(); 
    resultados.textContent=`EL resultado del dado es:
     ${resultadoLanzamiento}`;
});