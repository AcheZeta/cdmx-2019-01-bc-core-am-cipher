//----------------------------------------/EVENTOS DEL DOM!/----------------------------------------//
//Declaré Message guardar el mensaje a cifrar desde para el input
    const message = document.getElementById('mssg');
 //Tomo la info obtenida del input Offset html
    let offset = document.getElementById('offset');    
//Usé AddEventListener para el botón cifrar y guardamos el tipo dato
document.getElementById("code").addEventListener("click", () => {
//Tome el valor del mensaje y lo pongo en mssgvalue    
    const mssgValue = message.value;
    offset = offset.value      
//Ejecutar la funcion Encode
    window.cipher.encode(offset, mssgValue)
//Uso InnerHTML para verificar mensaje recibido. 
//document.getElementById("root").innerHTML = `Tú mensaje es: ${upperCharMsg}`;
}
)


