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
      "descripcion": "AA",
      "nombre": "Oficina de gerente general",
      "cantidadPersonas": 0,
      "cantidadAccidentes": 0,
      "cantidadNovedadesSinAtender": 0,
      "cantidadEquipos": 0,
      "cantidadRiesgos": 0
    },
    {
      "id": 2,
      "descripcion": "AA",
      "nombre": "Oficina de jefe de TTHH",
      "cantidadPersonas": 0,
      "cantidadAccidentes": 0,
      "cantidadNovedadesSinAtender": 0,
      "cantidadEquipos": 0,
      "cantidadRiesgos": 0
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
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
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
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00"
  },
  "codigoEstado": 200
}
```


___



