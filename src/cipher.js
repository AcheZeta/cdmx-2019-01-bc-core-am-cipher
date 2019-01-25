//Window.cipher es un objeto que contiene la funcion encode y decode.
window.cipher = {

  encode: (offset2, message2) => {
    //La función Encode convierte a números el offset
    offset2 = parseInt(offset2)
    //Declare una función vacía para contener el resultado
    let cifradoC = "";
    //Dentro del bucle for recorre letra por letra
    for (let i = 0; i < message2.length; i++) {
      //Realiza el cambio a ASCII
      let ascii = message2[i].charCodeAt();
      //Con la formula obtiene el resultado de la nueva letra
      let convertir = (ascii - 65 + offset2) % 26 + 65;
      //Devuelve el valor de la nueva letra
      let nuevoCodigo = String.fromCharCode(convertir);
      //Concatena en el string vacío el resultado
      cifradoC += nuevoCodigo
    }
    return cifradoC
  },

  decode: (offsetD, messageD) => {
    offsetD = parseInt(offsetD)
    let descifrado = "";
    for (let i = 0; i < messageD.length; i++) {
      let ascii = messageD[i].charCodeAt();
      let deco = (ascii + 65 - offsetD) % 26 + 65;
      let descod = String.fromCharCode(deco);
      descifrado += descod
    }
    return descifrado
  },
};
