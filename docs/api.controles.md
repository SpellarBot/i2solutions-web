# Api Controles

## Crear un control

__POST__ __/api/web/controles__


#### Request:

```json
{
  "descripcion": "zzzz",
  "tipo": "fuente",
  "estaImplementado": false,
  "puestosId": 1,
  "riesgosId": 1
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "descripcion": "zzzz",
    "tipo": "fuente",
    "estaImplementado": false,
    "puestosId": 1,
    "riesgosId": 1,
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


___



## Crear un control por un array

__POST__ __/api/web/controles/bulk__


#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "descripcion": "zzzz",
      "estaImplementado": "0",
      "tipo": "fuente",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
      "riesgosId": 1,
      "puestosId": 1
    },
    {
      "id": 2,
      "descripcion": "aa",
      "estaImplementado": "0",
      "tipo": "medio",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
      "riesgosId": 1,
      "puestosId": 1
    }
  ],
  "codigoEstado": 200
}
```


___


