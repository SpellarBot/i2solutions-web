# Api Accidentes

## Crear accidentes

__POST__ __/api/web/accidentes__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "descripcion": "Se cayó la solución",
    "nombre": "Caída de instrumentos",
    "heridos": 1,
    "atendidoEnEmpresa": true,
    "muertos": 0,
    "fecha": "2014-05-21T19:27:28.576Z",
    "puestosId": 1,
    "fechaActualizacion": "2018-07-14T21:02:55.805Z",
    "fechaCreacion": "2018-07-14T21:02:55.805Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar accidentes

__PUT__ __/api/web/accidentes/:accidentesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| accidentesId | Number |   ---   |
	

#### Request:

```json
{
  "descripcion": "AA",
  "nombre": "aa",
  "heridos": 1,
  "atendidoEnEmpresa": false,
  "muertos": 0,
  "fecha": "2014-05-21T19:27:28.576Z",
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



## Eliminar accidente

__DELETE__ __/api/web/accidentes/:accidentesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| accidentesId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



## Obtener un accidente

__GET__ __/api/web/accidentes/:accidentesId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| accidentesId | Number |   ---   |
	

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
    "fechaCreacion": "2018-07-14 21:02:57.523 +00:00",
    "fechaActualizacion": "2018-07-14 21:02:57.523 +00:00",
    "establecimientosId": 1
  },
  "codigoEstado": 200
}
```


___



