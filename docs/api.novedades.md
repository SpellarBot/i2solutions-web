# Api Novedades

## Crear novedad

__POST__ __/api/web/novedades__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "fecha": "2018-07-16T12:08:45.552Z",
    "fotoUrl": "",
    "fueAtendida": false,
    "id": 1,
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "prioridad": "media",
    "puestosId": 1,
    "fechaActualizacion": "2018-07-16T12:08:45.552Z",
    "fechaCreacion": "2018-07-16T12:08:45.552Z"
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
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "descripcionAtendida": null,
    "prioridad": "media",
    "fecha": "2018-07-16 12:08:46.657 +00:00",
    "fotoUrl": "https://imagen.png",
    "fueAtendida": "0",
    "puestosId": 1,
    "fechaCreacion": "2018-07-16 12:08:46.657 +00:00",
    "fechaActualizacion": "2018-07-16 12:08:46.657 +00:00"
  },
  "codigoEstado": 200
}
```


___



## Obtener novedades por establecimiento

__GET__ __/api/web/novedades/establecimientos/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2018-07-16 12:08:46.875 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1,
        "areasId": 1,
        "areasActividad": "gerencia",
        "areasNombre": "Gerente General",
        "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
        "puestosNombre": "Oficina de gerente general"
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2018-07-16 12:08:46.876 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1,
        "areasId": 1,
        "areasActividad": "gerencia",
        "areasNombre": "Gerente General",
        "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
        "puestosNombre": "Oficina de gerente general"
      }
    ]
  },
  "codigoEstado": 200
}
```


___



## Obtener novedades por area

__GET__ __/api/web/novedades/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2018-07-16 12:08:47.037 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2018-07-16 12:08:47.039 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


___



## Obtener novedades por puesto

__GET__ __/api/web/novedades/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "prioridad": "media",
        "fecha": "2018-07-16 12:08:47.198 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "1",
        "puestosId": 1
      }
    ],
    "novedadesNoAtendidas": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "prioridad": "baja",
        "fecha": "2018-07-16 12:08:47.199 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": "0",
        "puestosId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


___



