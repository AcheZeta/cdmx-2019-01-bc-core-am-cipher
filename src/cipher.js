//  cipher
//✓ debería ser un objeto
//cipher.encode
//  ✓ debería ser una función
//  1) debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33
//cipher.decode
//  ✓ debería ser una función
//  2) debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33

window.cipher = {
  encode: (offset2, message2) => {
    offset2 = parseInt(offset2)
    //variable vacia    
   let cifradoC = ""; 
   for (let i=0; i < message2.length; i++)
    {
      let ascii = message2[i].charCodeAt();
      let convertir = (ascii-65+  offset2)%26+65;

      let nuevoCodigo = String.fromCharCode(convertir);

      cifradoC += nuevoCodigo 
    }
    console.log(cifradoC)
    return cifradoC
    },

  decode: () => {
  },
};
