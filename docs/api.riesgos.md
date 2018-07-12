# Api Riesgos

## Crear riesgo

__POST__ __/api/web/riesgos__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "tipoRiesgo": "Caida de objetos",
    "personasExpuestas": 15,
    "valoracion": "1524",
    "valoracionLiteral": "aa",
    "porcentajeRiesgo": 2,
    "fecha": "2014-05-21T19:27:28.576Z",
    "puestosId": 1,
    "fechaActualizacion": "2018-07-12T23:10:41.743Z",
    "fechaCreacion": "2018-07-12T23:10:41.743Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar riesgo

__PUT__ __/api/web/riesgos/:riesgosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| riesgosId | Number |   ---   |
	

#### Request:

```json
{
  "tipoRiesgo": "aaa",
  "personasExpuestas": 2,
  "valoracion": "1524",
  "valoracionLiteral": "aa",
  "porcentajeRiesgo": 2,
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



## Eliminar riesgo

__DELETE__ __/api/web/riesgos/:riesgosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| riesgosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



## Obtener un riesgo

__GET__ __/api/web/riesgos/:riesgosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| riesgosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "tipoRiesgo": null,
    "personasExpuestas": null,
    "valoracion": null,
    "valoracionLiteral": null,
    "fecha": "2018-07-12 23:10:43.277 +00:00",
    "porcentajeRiesgo": null,
    "fechaCreacion": "2018-07-12 23:10:43.277 +00:00",
    "fechaActualizacion": "2018-07-12 23:10:43.277 +00:00",
    "puestosId": 1
  },
  "codigoEstado": 200
}
```


___



