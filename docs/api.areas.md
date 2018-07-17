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
      "fechaCreacion": "2018-07-16 02:18:56.104 +00:00",
      "fechaActualizacion": "2018-07-16 02:18:56.104 +00:00",
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
    "fechaActualizacion": "2018-07-16T02:18:56.300Z",
    "fechaCreacion": "2018-07-16T02:18:56.300Z"
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
  "actividad": "AA",
  "nombre": "Mi nombre editado",
  "fotoUrl": "https://image.png",
  "metrosCuadrados": "50",
  "descripcionLugar": "AA"
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
    "fechaCreacion": "2018-07-16 02:18:57.459 +00:00",
    "fechaActualizacion": "2018-07-16 02:18:57.459 +00:00",
    "establecimientosId": 1
  },
  "codigoEstado": 200
}
```


___



## Obtener un areas categorizados por puestos dado un establecimiento

__GET__ __/api/areas/puestos/establecimientos/:establecimientosId__


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
      "nombre": "Gerente General",
      "actividad": "gerencia",
      "descripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "puestos": [
        {
          "cantidadPersonas": 1,
          "cantidadAccidentes": 1,
          "cantidadNovedadesSinAtender": 1,
          "id": 1,
          "nombre": "Oficina de gerente general",
          "descripcion": "AA"
        },
        {
          "cantidadPersonas": 0,
          "cantidadAccidentes": 1,
          "cantidadNovedadesSinAtender": 0,
          "id": 2,
          "nombre": "Oficina de jefe de TTHH",
          "descripcion": "AA"
        }
      ]
    },
    {
      "id": 2,
      "nombre": "Jefe TTHH",
      "actividad": "recursos humanos",
      "descripcionLugar": "Facilis nemo accusamus ipsa nesciunt nobis.",
      "puestos": [
        {
          "cantidadPersonas": 0,
          "cantidadAccidentes": 0,
          "cantidadNovedadesSinAtender": 0,
          "id": 3,
          "nombre": "Oficina de jefe de TTHH",
          "descripcion": "AA"
        }
      ]
    }
  ],
  "codigoEstado": 200
}
```


___



