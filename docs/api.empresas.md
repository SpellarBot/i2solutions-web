# Api Empresas

## Obtener todas las empresas

__GET__ __/api/web/empresas__

Obtener todas las empresas de i2Solutions
#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombre": "Villareal - Deleón",
      "actividadComercial": "Exclusivo basado en el contexto arquitectura abierta",
      "razonSocial": "1235468789",
      "fechaCreacion": "2018-06-09 18:31:12.835 +00:00",
      "fechaActualizacion": "2018-06-09 18:31:12.835 +00:00"
    }
  ],
  "codigoEstado": 200
}
```


___



## Crear empresas

__POST__ __/api/web/empresas__

Crear una empresa, esto tambien deberia crear un establecimiento por defecto
#### Request:

```json
{
  "nombre": "Villareal - Deleón",
  "actividadComercial": "Exclusivo basado en el contexto arquitectura abierta",
  "razonSocial": "1235468789",
  "direccion": "8260 Sara Quinta",
  "ruc": "3401822014"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Villareal - Deleón",
    "actividadComercial": "Exclusivo basado en el contexto arquitectura abierta",
    "razonSocial": "1235468789",
    "fechaActualizacion": "2018-06-09T18:31:12.965Z",
    "fechaCreacion": "2018-06-09T18:31:12.965Z",
    "establecimiento": {
      "id": 1,
      "nombres": "Villareal - Deleón",
      "direccion": "8260 Sara Quinta",
      "ruc": "3401822014",
      "empresasId": 1,
      "fechaActualizacion": "2018-06-09T18:31:12.967Z",
      "fechaCreacion": "2018-06-09T18:31:12.967Z"
    }
  },
  "codigoEstado": 200
}
```


___



## Obtener una empresa

__GET__ __/api/web/empresas/:empresasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| empresasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Villareal - Deleón",
    "actividadComercial": "Exclusivo basado en el contexto arquitectura abierta",
    "razonSocial": "1235468789",
    "fechaCreacion": "2018-06-09T18:31:13.017Z",
    "fechaActualizacion": "2018-06-09T18:31:13.017Z",
    "establecimientos": [
      {
        "id": 1,
        "nombres": "Galván S.L.",
        "direccion": "8260 Sara Quinta",
        "ruc": "3401822014",
        "fechaCreacion": "2018-06-09 18:31:13.019 +00:00",
        "fechaActualizacion": "2018-06-09 18:31:13.019 +00:00",
        "empresasId": 1
      },
      {
        "id": 2,
        "nombres": "Sanches, Gallegos and Robles",
        "direccion": "60223 Beatriz Colegio",
        "ruc": "8046678813",
        "fechaCreacion": "2018-06-09 18:31:13.021 +00:00",
        "fechaActualizacion": "2018-06-09 18:31:13.021 +00:00",
        "empresasId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


___



