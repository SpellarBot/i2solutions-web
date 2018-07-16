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
      "descripcion": "AA"
    },
    {
      "id": 2,
      "nombre": "Oficina de jefe de TTHH",
      "descripcion": "AA"
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
  "descripcion": "AA",
  "areasId": 1
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 4,
    "nombre": "Oficina de gerente general",
    "descripcion": "AA",
    "fechaActualizacion": "2018-07-16T02:19:07.353Z",
    "fechaCreacion": "2018-07-16T02:19:07.353Z"
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
  "nombre": "AAA",
  "descripcion": "AAA"
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
  "nombre": "Oficina de gerente general",
  "descripcion": "AA"
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
    "descripcion": "AA",
    "fechaCreacion": "2018-07-16 02:19:09.680 +00:00",
    "fechaActualizacion": "2018-07-16 02:19:09.680 +00:00"
  },
  "codigoEstado": 200
}
```


___



