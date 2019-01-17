window.cipher = {
  encode: (offset2, message2) => {
    offset2 = parseInt(offset2)  
    let cifradoC = ""; 
      for (let i=0; i < message2.length; i++)
    {
      let ascii = message2[i].charCodeAt();
      let convertir = (ascii-65+  offset2)%26+65;
      let nuevoCodigo = String.fromCharCode(convertir);
      cifradoC += nuevoCodigo 
    }
    return cifradoC
    },

  decode:(offsetD, messageD) => {
      offsetD = parseInt(offsetD)
      let descifrado = ""; 
        for (let i=0; i < messageD.length; i++)
      {
        let ascii = messageD[i].charCodeAt();
        let deco = (ascii+65-offsetD)%26+65;
        let descod = String.fromCharCode(deco);
        descifrado += descod 
      }
      return descifrado
  },
};