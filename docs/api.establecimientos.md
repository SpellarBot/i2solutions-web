# Api Establecimientos

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
  "ruc": "0923651688001",
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
    "ruc": "0923651688001",
    "empresasId": 1,
    "fechaActualizacion": "2018-07-11T04:27:39.528Z",
    "fechaCreacion": "2018-07-11T04:27:39.528Z"
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
  "nombres": "Empresa editada",
  "direccion": "22050 Felipe Rampa",
  "ruc": "0923651688001",
  "empresasId": 1
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
  "ruc": "0923651688001",
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



