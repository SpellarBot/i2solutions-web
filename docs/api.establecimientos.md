# Api Establecimientos

## Obtener todos los establecimientos de una empresa

__GET__ __/api/web/establecimientos/:empresasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| empresasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombres": "matriz",
      "direccion": "22050 Felipe Rampa",
      "ruc": "3245547449",
      "fechaCreacion": "2018-06-16 17:54:04.389 +00:00",
      "fechaActualizacion": "2018-06-16 17:54:04.389 +00:00",
      "empresasId": 1
    },
    {
      "id": 2,
      "nombres": "Lira - Barajas",
      "direccion": "0119 Laboy Mercado",
      "ruc": "6886107230",
      "fechaCreacion": "2018-06-16 17:54:04.390 +00:00",
      "fechaActualizacion": "2018-06-16 17:54:04.390 +00:00",
      "empresasId": 1
    }
  ],
  "codigoEstado": 200
}
```


___



## Crear un establecimiento

__POST__ __/api/web/establecimientos__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  direccion  | String  |   ---   | 
|  ruc  | String  |   ---   | 
|  empresasId  | Number  |   ---   | 

#### Request:

```json
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "3245547449",
  "empresasId": 1
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombres": "matriz",
    "direccion": "22050 Felipe Rampa",
    "ruc": "3245547449",
    "empresasId": 1,
    "fechaActualizacion": "2018-06-16T17:54:04.439Z",
    "fechaCreacion": "2018-06-16T17:54:04.439Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar un establecimiento

__PUT__ __/api/web/establecimientos/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombres  | String  |   ---   | 
|  direccion  | String  |   ---   | 
|  ruc  | String  |   ---   | 
|  empresasId  | Number  |   ---   | 

#### Request:

```json
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "3245547449"
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
__El id del establecimiento no exite__




_request_

```js
{
  "nombres": "matriz",
  "direccion": "22050 Felipe Rampa",
  "ruc": "3245547449",
  "empresasId": 1
}
```

_response_

```js
{
  "estado": false,
  "datos": "El id del establecimento no existe",
  "codigoEstado": 200
}
```
	
	


___



## Eliminar Establecimiento

__DELETE__ __/api/web/establecimientos/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```

#### ERRORS:
__El id del establecimiento no exite__




_response_

```js
{
  "estado": false,
  "datos": "establecimientos con es id no existe",
  "codigoEstado": 200
}
```
	
	


___


