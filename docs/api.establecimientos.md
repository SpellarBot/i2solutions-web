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
      "ruc": "0923651688001",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
      "empresasId": 1
    },
    {
      "id": 2,
      "nombres": "Lira - Barajas",
      "direccion": "0119 Laboy Mercado",
      "ruc": "2023651688001",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
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
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
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



## Datos de establecimientos para front

__GET__ __/api/web/principal/establecimientos/empresas/:empresasId__


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
      "ruc": "0923651688001",
      "direccion": "22050 Felipe Rampa",
      "cantidadAreas": 1,
      "cantidadPuestos": 1,
      "cantidadAccidentes": 1,
      "cantidadCapacitaciones": 1,
      "cantidadPersonas": 1,
      "cantidadNovadadesSinAtender": 2
    }
  ],
  "codigoEstado": 200
}
```


___



## Buscar establecimientos con ruc existente en base de datos

__GET__ __/api/web/establecimientos/buscar/por?ruc=0931823557001,0931823446001__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "0923651688001": true,
    "2023651688001": true,
    "0931823447001": false
  },
  "codigoEstado": 200
}
```


___



