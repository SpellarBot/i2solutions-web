# Api Personas

## Crear persona

__POST__ __/api/web/personas__

La clave se genera en el back y enviar el correo dependiendo del rol
#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  apellidos  | String  |   ---   | 
|  correo  | String  |   ---   | 
|  cedula  | String  |   ---   | 
|  telefono  | String  |   0931823448, 2988383   | 
|  fechaNacimiento  | ISOdate  |   ---   | 
|  usuario  | String  |   ?, por definir   | 
|  rol  | String  |  'admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'  | 
|  personasId  | Number  |     | 

#### Response:

```json
{
  "estado": true,
  "datos": {
    "claveCreada": false,
    "creadaDump": false,
    "id": 1,
    "nombres": "Carlos",
    "apellidos": "Andres",
    "correo": "joelerll@gmail.com",
    "cedula": "0100967652",
    "telefono": "0986901270",
    "fechaNacimiento": "1995-05-21T19:27:28.576Z",
    "perfilOcupacional": "Inspector",
    "usuario": "carlos",
    "rol": "inspector-seguridad",
    "resetClaveToken": "abb9cd01d7ec81a55089b21eeea9d4a28a0aba24",
    "fechaActualizacion": "2018-08-01T05:00:00.000Z",
    "fechaCreacion": "2018-08-01T05:00:00.000Z",
    "puestosId": 1
  },
  "codigoEstado": 200
}
```


___



## Actualizar persona

__PUT__ __/api/web/personas/:personasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  apellidos  | String  |   ---   | 
|  correo  | String  |   ---   | 
|  cedula  | String  |   0931823448, 2988383   | 
|  telefono  | String  |   ---   | 
|  fechaNacimiento  | ISOdate  |   ---   | 
|  usuario  | String  |   ?, por definir   | 
|  rol  | String  |  'admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'  | 

#### Request:

```json
{
  "nombres": "Irene",
  "apellidos": "Espinosa",
  "correo": "irenesp@yahoo.com",
  "cedula": "0102051349",
  "telefono": "0986901270",
  "fechaNacimiento": "1995-05-21T19:27:28.576Z",
  "perfilOcupacional": "torno",
  "usuario": "irene",
  "rol": "empleado"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



## Eliminar persona

__DELETE__ __/api/web/personas/:personasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



## Obtener una persona

__GET__ __/api/web/personas/:personasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombres": "Elsa",
    "apellidos": "Vega",
    "correo": "vctor_daz@hotmail.com",
    "cedula": "0931823447",
    "clave": null,
    "telefono": "0986901270",
    "fechaNacimiento": "1995-05-21T19:27:28.576Z",
    "perfilOcupacional": "admin",
    "usuario": "elsa",
    "rol": "admin-i2solutions",
    "claveCreada": 0,
    "creadaDump": 0,
    "resetClaveToken": null,
    "resetClaveExpires": null,
    "fechaCreacion": "2018-08-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2018-08-01 05:00:00.000 +00:00"
  },
  "codigoEstado": 200
}
```


___



## Obtener personas por establecimiento

__GET__ __/api/web/personas/establecimientos/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "1995-05-21T19:27:28.576Z",
      "perfilOcupacional": "admin",
      "usuario": "elsa",
      "rol": "admin-i2solutions",
      "puestosNombre": "Oficina de gerente general",
      "puestosId": 1,
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
    }
  ],
  "codigoEstado": 200
}
```


___



## Obtener personas por area

__GET__ __/api/web/personas/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "1995-05-21T19:27:28.576Z",
      "perfilOcupacional": "admin",
      "usuario": "elsa",
      "rol": "admin-i2solutions",
      "puestosNombre": "Oficina de gerente general",
      "puestosId": 1,
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet."
    }
  ],
  "codigoEstado": 200
}
```


___



## Obtener personas por puesto

__GET__ __/api/web/personas/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombres": "Elsa",
      "apellidos": "Vega",
      "correo": "vctor_daz@hotmail.com",
      "cedula": "0931823447",
      "telefono": "0986901270",
      "fechaNacimiento": "1995-05-21T19:27:28.576Z",
      "perfilOcupacional": "admin",
      "puestosNombre": "Oficina de gerente general",
      "usuario": "elsa",
      "rol": "admin-i2solutions"
    }
  ],
  "codigoEstado": 200
}
```


___



## Anadir una persona a un puesto

__GET__ __/api/web/personas/:personasId/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| personasId | Number |   ---   |
	
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "puestosId": "1",
    "personasId": "1",
    "fechaActualizacion": "2018-08-01T05:00:00.000Z",
    "fechaCreacion": "2018-08-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


___



## Cambiar clave

__PUT__ __/api/web/personas/CambioClave/enviarToken__

Puedo enviar el correo o  el usuario en el body, me acepta cualquiera de los dos para el cambio de clave
#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  correo  | string  |   ---   | 
|  usuario  | string  |   ---   | 

#### Response:

```json
{
  "estado": true,
  "datos": "Revise el correo, se envio el url donde podra hacer el cambio de clave",
  "codigoEstado": 200
}
```


___



## Verificador exitencia correo, cedula, usuario

__GET__ __/api/web/personas/buscar/existenciaDe?cedula=0987654321&correo=joel@gmail.com&usuario=joel__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "cedula": true,
    "usuario": true,
    "correo": true
  },
  "codigoEstado": 200
}
```


___



