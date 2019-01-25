## Descifra tu Música: Cifrado César.

_"Cifrar significa codificar. El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla."_

## Resumen del proyecto

En este primer proyecto servirá para que el usuario pueda cifrar y descifrar un texto (_mensaje_)indicando un desplazamiento específico de caracteres (_offset_).

##Consideraciones: 
- Proyecto individual.
- El proyecto fue entregado subiendo el código a GitHub (commit/push) y la interfaz fue desplegada usando GitHub pages. 
- Tiempo para completarlo: 2 semanas divididas en 2 sprints (1 entrega cada viernes).
- Uso de Css, HTML y Javascript.


### Comenzando 🚀

## ¿Para quién? 
Este cipher es una herramienta diseñada para personas interesadas en generar códigos que regalarle a sus seguidores, clientes o amigos y que puedan obtener premios.

Los usuarios deberán ingresar la palabra que desean cifrar, sin espacio y sin carácteres especiales para cifrarla.
Después el código será compartido por medio de boletos electrónicos o físicos con una pista para poderlo cambiar. 
Son necesarias estas dos partes (Pista y Código) para poderlo descifrar. 

Mira **Deployment** para conocer como desplegar el proyecto.

## Scripts / Archivos

* `README.md`: Explica cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests(pruebas ) para `cipher.encode()` y `cipher.decode()`.

##Consideraciones Técnicas 
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, yo utilicé [Visual Code](https://code.visualstudio.com/) pero también puedes usar [Atom](https://atom.io/),[Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux como tu Sistema Operativo.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/Laboratoria/cdmx-2019-01-bc-core-am-cipher) de tu cohort, tus _coaches_ te compartirán un _link_ a un repositorio y te 
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.
7. A codear se ha dicho! :rocket:


## Ejecutando las pruebas ⚙️

Si todo ha ido bien, deberías poder ejecutar las pruebas unitarias (unit tests) con el comando npm run test y pasarlas correctamente una vez completado el código.

### Analisis las pruebas 🔩

Las pruebas Unitarias verifican: 
Cipher debería ser un objeto.
Cipher.Encode debería ser una función.
Cipher.Encode debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33'.
Cipher.Decode debería ser una función. 
Cipher.Decode debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33.

Por ejemplo _window.cipher = {}_ para el test ya que cipher se encuentra detro del objeto window. 

## Deployment 📦

Visita el proyecto en [GitHubPages](https://achezeta.github.io/cdmx-2019-01-bc-core-am-cipher/src/index.html)

## Construido con 🛠️

* [Visual Studio Code](https://code.visualstudio.com/).
* [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
* GitHub y GitHub Pages :octocat:

### UX 🔍
La Aplicación se apoya del uso de códigos en boletos y de la aplicación para realizar el canje y creación de dichos códigos: 
Visita el siguiente documento para conocer más del proceso de  [UX Reserch](https://achezeta.github.io/cdmx-2019-01-bc-core-am-cipher/src/index.html)https://docs.google.com/document/d/1kfiqATT_zd25mmglmEIcEatjwm_hwRIAwFUgkzqqusc/edit?usp=sharing)

![Boleto](https://raw.githubusercontent.com/AcheZeta/cdmx-2019-01-bc-core-am-cipher/master/src/assets/1.png)

![webApp](https://raw.githubusercontent.com/AcheZeta/cdmx-2019-01-bc-core-am-cipher/master/src/assets/Screenshot_2019-01-25%20CipherFest.png)

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/Laboratoria/curricula-js/blob/master/CONTRIBUTING.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Expresiones de Gratitud 🎁

* Al gran squad que fue "MemexiCode" 🔥
* A nuetra Jedi Steph. 🌟
* A los coach de Laboratoria. 👩‍💻 👨‍💻
* Al Equipo y compañeras en general. 