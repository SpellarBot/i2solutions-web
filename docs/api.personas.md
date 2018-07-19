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
    "telefono": "0986901270",
    "fechaNacimiento": "2014-05-21T19:27:28.576Z",
    "perfilOcupacional": "admin",
    "usuario": "elsa",
    "rol": "admin-i2solutions",
    "fechaActualizacion": "2018-07-19T01:06:16.434Z",
    "fechaCreacion": "2018-07-19T01:06:16.434Z"
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
  "cedula": "0931823447",
  "telefono": "2948373",
  "fechaNacimiento": "2014-05-21T19:27:28.576Z",
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
    "telefono": "0986901270",
    "fechaNacimiento": "2014-05-21T19:27:28.576Z",
    "perfilOcupacional": "admin",
    "usuario": "elsa",
    "rol": "admin-i2solutions",
    "fechaCreacion": "2018-07-19 01:06:16.626 +00:00",
    "fechaActualizacion": "2018-07-19 01:06:16.626 +00:00"
  },
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
    "id": 1,
    "puestosId": "1",
    "personasId": "1",
    "fechaActualizacion": "2018-07-19T01:06:16.686Z",
    "fechaCreacion": "2018-07-19T01:06:16.686Z"
  },
  "codigoEstado": 200
}
```


___



