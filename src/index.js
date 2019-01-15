//////////////////EVENTOS DEL DOM!//////////////////
//Declaré Message guardar el mensaje a cifrar desde para el input
    const message = document.getElementById('mssg');
//Usé AddEventListener para el botón cifrar y guardamos el tipo dato
document.getElementById("code").addEventListener("click", function(){
//Tome el valor del mensaje y lo pongo en mssgvalue    
    const mssgvalue = message.value
//Tome mssgvalue y convierto a mayúsculas    
    const uppercasemsg = mssgvalue.toUpperCase()
//Tomo uppercasemsg y lo convierto a Ascii
    const mssgascii = uppercasemsg.charCodeAt()    
//Uso InnerHTML para verificar mensaje recibido. 
document.getElementById("root").innerHTML = `Tú mensaje es: ${mssgascii}`
}
)
//Tomo la info obtenida del input Offset html
    let offset = document.getElementById('offset');

