# Api Novedades

## Crear novedad

__POST__ __/api/web/novedades__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "fecha": "2018-07-14T23:21:22.888Z",
    "fotoUrl": "",
    "fueAtendida": false,
    "id": 1,
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "prioridad": "media",
    "puestosId": 1,
    "fechaActualizacion": "2018-07-14T23:21:22.888Z",
    "fechaCreacion": "2018-07-14T23:21:22.888Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar novedad

__PUT__ __/api/web/novedades/:novedadesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| novedadesId | Number |   ---   |
	

#### Request:

```json
{
  "descripcion": "aa",
  "prioridad": "media",
  "fecha": "2014-05-21T19:27:28.576Z",
  "fotoUrl": "https://imagen.png",
  "puestosId": 1
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



## Eliminar novedad

__DELETE__ __/api/web/novedades/:novedadesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| novedadesId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



## Obtener un novedad

__GET__ __/api/web/novedades/:novedadesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| novedadesId | Number |   ---   |
	

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
    "fechaCreacion": "2018-07-14 23:21:24.151 +00:00",
    "fechaActualizacion": "2018-07-14 23:21:24.151 +00:00",
    "establecimientosId": 1
  },
  "codigoEstado": 200
}
```


___



