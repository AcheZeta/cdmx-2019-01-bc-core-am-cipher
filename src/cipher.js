//  cipher
//✓ debería ser un objeto
//cipher.encode
//  ✓ debería ser una función
//  1) debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33
//cipher.decode
//  ✓ debería ser una función
//  2) debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33

window.cipher = {
  encode: (offset, mssgValue) => {
   //variable vacia   
   let cifradoC = "";    
   for (let i=0; i<=mssgValue.length; i++)
    {
      const ascii = mssgValue.toUpperCase(i).charCodeAt(i);
      const convertir = (ascii-65+offset)%26+65;
      const nuevoCodigo = String.fromCharCode(convertir);
      cifradoC += nuevoCodigo 
      console.log(cifradoC)
    };
    },

  decode: () => {
  },
};
