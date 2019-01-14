//Archivo de Eventos
//Declaramos Message guardar el mensaje a cifrar desde para el input
let message = document.getElementById('mssg');
//usamos AddEventListener para el botón cifrar y guardamos el valor del mensaje.
document.getElementById("code").addEventListener("click", function(){
    document.getElementById("root").innerHTML = `Hola ${message.value}`;
}
)