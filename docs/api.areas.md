# Api Areas

## Obtener todas las areas de un establecimiento

__GET__ __/api/web/areas/establecimientos/:establecimientosId__


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
      "actividad": "gerencia",
      "nombre": "Gerente General",
      "fotoUrl": "http://lorempixel.com/640/480",
      "metrosCuadrados": "20x20",
      "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "fechaCreacion": "2018-07-03 00:40:11.757 +00:00",
      "fechaActualizacion": "2018-07-03 00:40:11.757 +00:00",
      "establecimientosId": 1
    }
  ],
  "codigoEstado": 200
}
```


___



## Crear area

__POST__ __/api/web/areas__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  actividad  | String  |   ---   | 
|  nombre  | String  |   ---   | 
|  fotoUrl  | String  |   ---   | 
|  metrosCuadrados  | String  |   ---   | 
|  descripcionLugar  | String  |   ---   | 
|  establecimientosId  | Number  |   ---   | 

#### Request:

```json
{
  "actividad": "gerencia",
  "nombre": "Gerente General",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "actividad": "gerencia",
    "nombre": "Gerente General",
    "fotoUrl": "http://lorempixel.com/640/480",
    "metrosCuadrados": "20x20",
    "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
    "establecimientosId": 1,
    "fechaActualizacion": "2018-07-03T00:40:11.859Z",
    "fechaCreacion": "2018-07-03T00:40:11.859Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar un area

__PUT__ __/api/web/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  actividad  | String  |   ---   | 
|  nombre  | String  |   ---   | 
|  fotoUrl  | String  |   ---   | 
|  metrosCuadrados  | String  |   ---   | 
|  descripcionLugar  | String  |   ---   | 

#### Request:

```json
{
  "actividad": "gerencia",
  "nombre": "Mi nombre editado",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
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
__El id del area no existe__




_request_

```js
{
  "actividad": "gerencia",
  "nombre": "Mi nombre editado",
  "fotoUrl": "http://lorempixel.com/640/480",
  "metrosCuadrados": "20x20",
  "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
  "establecimientosId": 1
}
```

_response_

```js
{
  "estado": false,
  "datos": "El id del area no existe",
  "codigoEstado": 200
}
```
	
	


___



## Obtener una area

__GET__ __/api/web/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "actividad": "gerencia",
    "nombre": "Gerente General",
    "fotoUrl": "http://lorempixel.com/640/480",
    "metrosCuadrados": "20x20",
    "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
    "fechaCreacion": "2018-07-03T00:40:11.991Z",
    "fechaActualizacion": "2018-07-03T00:40:11.991Z",
    "establecimientosId": 1
  },
  "codigoEstado": 200
}
```


___



## Eliminar area

__DELETE__ __/api/web/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```

#### ERRORS:
__El id del area no existe__




_response_

```js
{
  "estado": false,
  "datos": "areas con es id no existe",
  "codigoEstado": 200
}
```
	
	


___



