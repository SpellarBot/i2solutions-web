<!-- https://blog.risingstack.com/
  node-js-project-structure-tutorial-node-js-at-scale/ -->

[![Build Status](https://travis-ci.org/joelerll/i2solutions-web.svg?branch=master)](https://travis-ci.org/joelerll/i2solutions-web)
[![Coverage Status](https://coveralls.io/repos/github/joelerll/i2solutions-web/badge.svg?branch=master)](https://coveralls.io/github/joelerll/i2solutions-web?branch=master)
[![codecov](https://codecov.io/gh/joelerll/i2solutions-web/branch/master/graph/badge.svg)](https://codecov.io/gh/joelerll/i2solutions-web)


# I2Solutions Web

https://i2s-app.herokuapp.com/

## Features

## Screenshots

## Documentación
[I2Solutions Documentación](https://i2solutions.gitbook.io/docs)

## Prerrequisitos

Nodejs >= 9.0.0

Mysql >= 3.6

Ubuntu 16.04 LTS

## Setup


## Development

#### Si se corre por primera vez

1. Instalar las depedencias

```sh
yarn install
```

2. Instalar las depedencias en el cliente. Ir a la carpeta __client__ y ejecutar

```sh
yarn install
```

3. Sacar su usuario de node. Para eso abrir el cmd y ejecutar el comando

```sh
node
```

Luego hacer lo siguiente

```sh
const os = require('os')
os.hostname()
'mi-usuario'
```

Esto de devolverá su usario que lo usará en el siguiente paso

4. Cambiar el config file ubicado en __api/config/db/config.js__ para que reconozca la base de datos de development, agregar el username y password de acuerdo a su configuración. Hacer un nuevo __else if__ si es necesario

```js
else if (usuario === 'mi-usuario') {
    return {
      'username': '',
      'password': '',
      'database': 'i2solutions_development',
      'host': '127.0.0.1',
      'logging': false,
      'dialect': 'mysql'
    }
```

5. Cargar con data inicial

```sh
yarn db:init
```

### Aplicación server

1. En la carpeta root del proyecto hacer

```sh
> npm install
```

2. Correr la aplicacion servidor

```sh
> npm run dev #correra en el puerto 3001
```

3. Correr el cliente

```sh
> cd client
> yarn dev # correra en el puerto 3002
```

##### Commits 

[Sprint #] "nombre_historia_usuario" Tarea(s) #

Ej: [Sprint 2] “Consultar Plan Nutricional (paciente)” Tarea #105, #106

__squash commits__

1. Para subir a github se tiene que hacer squash
```sh
```


2. Para subir a heroku hay que forzarlo por el squash si es que se necesite

```sh
git push heroku master --force
```

#### Generar modelos

```sh
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string
```

#### Generar migrate

```sh
sequelize migration:create --name add-email-to-user
```

#### Correr las migraciones

```
yarn db:migrate
```

## Testing

Tener instalado sqlite

```sh
yarn test
```

## Production

Establecer la variables de entorno:

1. HEROKU=true
2. DATABASE_HOST
3. DATABASE_USER
4. DATABASE_PASSWORD

## Authors

Joel Rodriguez

## Links útiles

https://codeburst.io/sequelize-migrations-setting-up-associations-985d29b61ee7

http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html

https://gist.github.com/JoeKarlsson/ebb1c714466ae3de88ae565fa9ba4779

https://spacetelescope.github.io/understanding-json-schema/

http://corpus.hubwiz.com/2/node.js/21105748.html

http://docs.sequelizejs.com/manual/tutorial/migrations.html

https://stackoverflow.com/questions/21105748/sequelize-js-how-to-use-migrations-and-sync

https://github.com/sequelize/cli/blob/master/docs/README.md

https://gist.github.com/JoeKarlsson/ebb1c714466ae3de88ae565fa9ba4779