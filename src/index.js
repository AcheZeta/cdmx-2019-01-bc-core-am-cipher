let message = document.getElementById('mssg');
let offset = document.getElementById('offset'); 
const code = document.getElementById("code")
const decode = document.getElementById("decode")

 code.addEventListener("click", () => {
        let message2 = message.value.toUpperCase();
        let offset2 = offset.value
   window.cipher.encode(offset2, message2) 
 })
 
 decode.addEventListener("click", () => {
     let messageD = message.value.toUpperCase();
     let offsetD = offset.value
     window.cipher.decode(offsetD, messageD)
     })