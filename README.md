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

1. Cargar el sql de prueba inicial

2. Cargar las migraciones
```
yarn db:migrate
```


##### Commits 

[Sprint #] "nombre_historia_usuario" Tarea(s) #

Ej: [Sprint 3] “Consultar Plan Nutricional (paciente)” Tarea #105, #106

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

#### Corre las migraciones

```
yarn db:migrate
```

#### Aplicación server

1. En la carpeta root del proyecto hacer

```sh
> npm install
```

2. Correr la aplicacion servidor

```sh
> npm run dev
```

## Testing


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