//Declare mis variables y metí en mis constantes los botones
let message = document.getElementById('mssg');
let offset = document.getElementById('offset');
const code = document.getElementById('code')
const decode = document.getElementById('decode')

//Desde click obtuve el valor de los inputs y llamé la función ENCODE.
code.addEventListener("click", () => {
  let message2 = message.value.toUpperCase();
  let offset2 = offset.value
  const encoder = window.cipher.encode(offset2, message2)
  message.value = encoder

})
//Desde click obtuve el valor de los inputs y llamé la función DECODE.
decode.addEventListener("click", () => {
  let messageD = message.value.toUpperCase();
  let offsetD = offset.value
  const decoder = window.cipher.decode(offsetD, messageD)
  message.value = decoder
})
