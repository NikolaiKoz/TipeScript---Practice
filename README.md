Que es typescript?

Typescript es un lenguaje de programación que compila a javascript, es decir, que es un superconjunto de javascript, es decir, que todo lo que se puede hacer en javascript se puede hacer en typescript, pero typescript tiene algunas características que no tiene javascript, como por ejemplo, la tipificación de variables, la tipificación de funciones, la tipificación de objetos, etc.

Entorno de desarrollo

Para poder trabajar con typescript, necesitamos un entorno de desarrollo, en este caso, usaremos Visual Studio Code, que es un editor de código abierto, que nos permite trabajar con muchos lenguajes de programación, entre ellos, typescript.

Instalación

Para instalar typescript, debemos tener instalado node.js, que es un entorno de ejecución para javascript, y npm, que es el gestor de paquetes de node.js, para instalar typescript, ejecutamos el siguiente comando:

npm i --save-dev @types/node nodemon  ts-node typescript

Ejecución

npx tsc --init --rootDir dist --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true

rimraf



npm i --save-dev rimraf