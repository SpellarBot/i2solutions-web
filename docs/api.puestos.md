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
      "fotoUrl": "http://lorempixel.com/640/480",
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
      "fotoUrl": "http://lorempixel.com/640/480",
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
|  fotoUrl  | String  |   ---   | 
|  areasId  | Number  |   ---   | 

#### Request:

```json
{
  "nombre": "Oficina de gerente general",
  "descripcion": "AA",
  "fotoUrl": "http://lorempixel.com/640/480",
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
    "fotoUrl": "http://lorempixel.com/640/480",
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
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
    "fotoUrl": "http://lorempixel.com/640/480",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00"
  },
  "codigoEstado": 200
}
```


___



