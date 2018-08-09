# Api Matrices

## Crear una matriz

__POST__ __/api/web/matrices__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	
| datos | JSON |   JSON de datos para la matriz   |
	

#### Request:

```json
{
  "establecimientoId": 2,
  "datos": [
    {
      "areaNombre": "Subgerente",
      "puestoNombre": "Jefe de MatriceríaWWW",
      "puestoId": 1,
      "actividad": "DDD",
      "riesgo": "Postura prolongada",
      "riesgoDescripcion": "DDDD",
      "controlesExistentesFuente": "Programa de pausas activas",
      "controlesExistentesMedio": "N.A.",
      "controlesExistentesIndividuo": "Capacitación al personal en autocuidado. Capacitación en higiene postural",
      "ND": 2,
      "NE": 3,
      "NP": 6,
      "interpretacionNP": "Medio",
      "NC": 25,
      "NR": 150,
      "interpretacionNR": "II",
      "aceptabilidad": "Aceptable con control específico",
      "numeroExpuestos": 2,
      "peorConsecuencia": "DDDD",
      "requisitoLegal": false,
      "controlesFuente": "DD",
      "controlesMedio": "DD",
      "controlesIndividuo": "DD"
    },
    {
      "areaNombre": "Gerente General",
      "puestoNombre": "Oficina de gerente general",
      "puestoId": 4,
      "actividad": "SSS",
      "riesgo": "Postura prolongada",
      "riesgoDescripcion": "SSSS",
      "controlesExistentesFuente": "Programa de pausas activas",
      "controlesExistentesMedio": "N.A.",
      "controlesExistentesIndividuo": "Capacitación al personal en autocuidado. Capacitación en higiene postural",
      "ND": 2,
      "NE": 3,
      "NP": 6,
      "interpretacionNP": "Medio",
      "NC": 100,
      "NR": 600,
      "interpretacionNR": "I",
      "aceptabilidad": " No aceptable",
      "numeroExpuestos": 1,
      "peorConsecuencia": "ZZZZZ",
      "requisitoLegal": null,
      "controlesFuente": "DD",
      "controlesMedio": "A",
      "controlesIndividuo": "SDSDSD"
    }
  ]
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "datos": "[{\"areaNombre\":\"Subgerente\",\"puestoNombre\":\"Jefe de MatriceríaWWW\",\"puestoId\":1,\"actividad\":\"DDD\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"DDDD\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":25,\"NR\":150,\"interpretacionNR\":\"II\",\"aceptabilidad\":\"Aceptable con control específico\",\"numeroExpuestos\":2,\"peorConsecuencia\":\"DDDD\",\"requisitoLegal\":false,\"controlesFuente\":\"DD\",\"controlesMedio\":\"DD\",\"controlesIndividuo\":\"DD\"},{\"areaNombre\":\"Gerente General\",\"puestoNombre\":\"Oficina de gerente general\",\"puestoId\":4,\"actividad\":\"SSS\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"SSSS\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":100,\"NR\":600,\"interpretacionNR\":\"I\",\"aceptabilidad\":\" No aceptable\",\"numeroExpuestos\":1,\"peorConsecuencia\":\"ZZZZZ\",\"requisitoLegal\":null,\"controlesFuente\":\"DD\",\"controlesMedio\":\"A\",\"controlesIndividuo\":\"SDSDSD\"}]",
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


___



## Obtener las matrices de un establecimiento

__GET__ __/api/web/matrices/establecimientos/:establecimientosId__


#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "datos": "[{\"areaNombre\":\"Subgerente\",\"puestoNombre\":\"Jefe de MatriceríaWWW\",\"puestoId\":1,\"actividad\":\"DDD\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"DDDD\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":25,\"NR\":150,\"interpretacionNR\":\"II\",\"aceptabilidad\":\"Aceptable con control específico\",\"numeroExpuestos\":2,\"peorConsecuencia\":\"DDDD\",\"requisitoLegal\":false,\"controlesFuente\":\"DD\",\"controlesMedio\":\"DD\",\"controlesIndividuo\":\"DD\"},{\"areaNombre\":\"Gerente General\",\"puestoNombre\":\"Oficina de gerente general\",\"puestoId\":4,\"actividad\":\"SSS\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"SSSS\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":100,\"NR\":600,\"interpretacionNR\":\"I\",\"aceptabilidad\":\" No aceptable\",\"numeroExpuestos\":1,\"peorConsecuencia\":\"ZZZZZ\",\"requisitoLegal\":null,\"controlesFuente\":\"DD\",\"controlesMedio\":\"A\",\"controlesIndividuo\":\"SDSDSD\"}]",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
      "establecimientosId": 1
    }
  ],
  "codigoEstado": 200
}
```


___



## Obtener las matrices de un establecimiento

__GET__ __/api/web/matrices/descargar/:matricesId__

Devuelve archivo en base64
#### Response:

```json
{
  "estado": true,
  "datos": "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",
  "codigoEstado": 200
}
```


___



