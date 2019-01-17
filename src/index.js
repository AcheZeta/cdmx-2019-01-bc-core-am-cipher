//----------------------------------------/EVENTOS DEL DOM!/----------------------------------------//
//Declaré Message guardar el mensaje a cifrar desde para el input
let message = document.getElementById('mssg');
//Tomo la info obtenida del input Offset html
let offset = document.getElementById('offset'); 
const code = document.getElementById("code")
const decode = document.getElementById("decode")
//Usé AddEventListener para el botón cifrar y guardamos el tipo dato
code.addEventListener("click", () => {
//Tome el valor del mensaje y lo pongo en mssgvalue    
   let message2 = message.value.toUpperCase();
   let offset2 = offset.value
//Ejecutar la funcion Encode
   window.cipher.encode(offset2, message2)
//Uso InnerHTML para verificar mensaje recibido. 
//document.getElementById("root").innerHTML = `Crifrar`;
}
)

decode.addEventListener("click", () => {
    //Tome el valor del mensaje, del offset y lo pongo en variables    
       let messageD = message.value.toUpperCase();
       let offsetD = offset.value
    //Ejecutar la funcion decode
    window.cipher.decode(offsetD, messageD)
    //document.getElementById("root").innerHTML = `Descrifrar`;
})