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
    console.log(offset, mssgValue)
   //Tome mssgvalue y convierte a mayúsculas & Ascii  
   //  const upperCharMsg = mssgValue.toUpperCase().charCodeAt()
   
   //variable vacia   
   //for (let i=0; i=mssgValue.length; i++)
   // {
  
   
    //};
    },
  decode: () => {
  },
};
