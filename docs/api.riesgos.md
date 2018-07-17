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
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
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
    "tipoRiesgo": "Caida de objetos",
    "personasExpuestas": 15,
    "valoracion": "1524",
    "valoracionLiteral": "aa",
    "fecha": "2014-05-21 19:27:28.576 +00:00",
    "porcentajeRiesgo": 2,
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "puestosId": 1
  },
  "codigoEstado": 200
}
```


___



## Obtener riesgos por area

__GET__ __/api/web/riesgos/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "tipoRiesgo": "Caida de objetos",
      "personasExpuestas": 15,
      "valoracion": "1524",
      "valoracionLiteral": "aa",
      "fecha": "2014-05-21 19:27:28.576 +00:00",
      "porcentajeRiesgo": 2,
      "puestosId": 1,
      "puestosNombre": "Oficina de gerente general",
      "areasId": 1,
      "areasNombre": "Gerente General"
    }
  ],
  "codigoEstado": 200
}
```


___



## Obtener riesgos por puestos

__GET__ __/api/web/riesgos/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "tipoRiesgo": "Caida de objetos",
      "personasExpuestas": 15,
      "valoracion": "1524",
      "valoracionLiteral": "aa",
      "fecha": "2014-05-21 19:27:28.576 +00:00",
      "porcentajeRiesgo": 2,
      "puestosId": 1,
      "puestosNombre": "Oficina de gerente general"
    }
  ],
  "codigoEstado": 200
}
```


___



