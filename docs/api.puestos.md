# Api Puestos

## Obtener todos los puestos de un area

__GET__ __/api/web/puestos/areas/:areasId__


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
      "nombre": "Oficina de gerente general",
      "descripcion": ""
    },
    {
      "id": 2,
      "nombre": "Oficina de jefe de TTHH",
      "descripcion": ""
    }
  ],
  "codigoEstado": 200
}
```


___



## Crear un puesto

__POST__ __/api/web/puestos__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  descripcion  | String  |   ---   | 
|  areasId  | Number  |   ---   | 

#### Request:

```json
{
  "nombre": "Oficina de gerente general",
  "descripcion": ""
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Oficina de gerente general",
    "descripcion": "",
    "fechaActualizacion": "2018-06-15T02:51:02.338Z",
    "fechaCreacion": "2018-06-15T02:51:02.338Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar un puesto

__PUT__ __/api/web/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  descripcion  | String  |   ---   | 

#### Request:

```json
{
  "nombre": "Mi nombre editado",
  "descripcion": ""
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

#### ERRORS:
__El id del puestos no existe__




_request_

```js
{
  "nombre": "Mi nombre editado",
  "descripcion": ""
}
```

_response_

```js
{
  "estado": false,
  "datos": "El id del puesto no existe",
  "codigoEstado": 200
}
```
	
	


___



## Obtener un puesto

__GET__ __/api/web/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Oficina de gerente general",
    "descripcion": "",
    "fechaCreacion": "2018-06-15T02:51:02.440Z",
    "fechaActualizacion": "2018-06-15T02:51:02.440Z"
  },
  "codigoEstado": 200
}
```


___



## Eliminar puesto

__DELETE__ __/api/web/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```

#### ERRORS:
__El id del puestos no existe__




_response_

```js
{
  "estado": false,
  "datos": "puesto con es id no existe",
  "codigoEstado": 200
}
```
	
	


___



