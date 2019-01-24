## Descifra tu Música: Cifrado César.

_"Cifrar significa codificar. El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla."_

Este Cipher es una herramienta para usuarios y desarrolladores que desean generar códigos que pueden ser canjeados por sus seguidores.

## Comenzando 🚀
Aquí encontraras los pre-requisitos y las intrucciones de Instalación: 📋🔧

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

    *Antes que nada, asegúrate de tener un editor de texto, yo utilicé Visual Code, pero Sublime Text, Atom o cualquier otro de tu preferencia te puede servir.
    *Para ejecutar los comandos a continuación necesitarás una UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash, aunque recomendaría que consideres probar penguin GNU/Linux como tu Sistema Operativo.
    *Haz tu propio fork de este repositorio de tu cohort.
    *Clona tu fork a tu computadora (copia local).
    *Instala las dependencias del proyecto con el comando npm install. Esto asume que has instalado Node.js (que incluye npm).

Mira **Deployment** para conocer como desplegar el proyecto.


## Ejecutando las pruebas ⚙️

Si todo ha ido bien, deberías poder ejecutar las pruebas unitarias (unit tests) con el comando npm run test.

### Analice las pruebas end-to-end 🔩

Las pruebas Unitarias verifican: 
Cipher debería ser un objeto.
Cipher.Encode debería ser una función.
Cipher.Encode debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33'.
Cipher.Decode debería ser una función. 
Cipher.Decode debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33.

Por ejemplo _window.cipher = {}_ para el test ya que cipher se encuentra detro del objeto window. 

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Deployment 📦

Visita el proyecto en [GitHubPages](https://achezeta.github.io/cdmx-2019-01-bc-core-am-cipher/src/index.html)

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Visual Studio Code](https://code.visualstudio.com/).
* Vanilla Javascrip.

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊