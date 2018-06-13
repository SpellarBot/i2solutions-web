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
      "fechaCreacion": "2018-06-13 02:26:42.864 +00:00",
      "fechaActualizacion": "2018-06-13 02:26:42.864 +00:00",
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
    "fechaActualizacion": "2018-06-13T02:26:42.980Z",
    "fechaCreacion": "2018-06-13T02:26:42.980Z"
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
    "fechaCreacion": "2018-06-13T02:26:43.132Z",
    "fechaActualizacion": "2018-06-13T02:26:43.132Z",
    "establecimientosId": 1
  },
  "codigoEstado": 200
}
```


___



