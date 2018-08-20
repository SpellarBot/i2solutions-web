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
      "aceptabilidad": "Aceptable",
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
    "datos": "[{\"areaNombre\":\"Subgerente\",\"puestoNombre\":\"Jefe de MatriceríaWWW\",\"puestoId\":1,\"actividad\":\"DDD\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"DDDD\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":25,\"NR\":150,\"interpretacionNR\":\"II\",\"aceptabilidad\":\"Aceptable con control específico\",\"numeroExpuestos\":2,\"peorConsecuencia\":\"DDDD\",\"requisitoLegal\":false,\"controlesFuente\":\"DD\",\"controlesMedio\":\"DD\",\"controlesIndividuo\":\"DD\"},{\"areaNombre\":\"Gerente General\",\"puestoNombre\":\"Oficina de gerente general\",\"puestoId\":4,\"actividad\":\"SSS\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"SSSS\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":100,\"NR\":600,\"interpretacionNR\":\"I\",\"aceptabilidad\":\" No aceptable\",\"numeroExpuestos\":1,\"peorConsecuencia\":\"ZZZZZ\",\"requisitoLegal\":null,\"controlesFuente\":\"DD\",\"controlesMedio\":\"A\",\"controlesIndividuo\":\"SDSDSD\"},{\"areaNombre\":\"Gerente General\",\"puestoNombre\":\"Oficina de gerente general\",\"puestoId\":4,\"actividad\":\"SSS\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"SSSS\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":100,\"NR\":600,\"interpretacionNR\":\"I\",\"aceptabilidad\":\"Aceptable\",\"numeroExpuestos\":1,\"peorConsecuencia\":\"ZZZZZ\",\"requisitoLegal\":null,\"controlesFuente\":\"DD\",\"controlesMedio\":\"A\",\"controlesIndividuo\":\"SDSDSD\"}]",
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
      "datos": "[{\"areaNombre\":\"Subgerente\",\"puestoNombre\":\"Jefe de MatriceríaWWW\",\"puestoId\":1,\"actividad\":\"DDD\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"DDDD\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":25,\"NR\":150,\"interpretacionNR\":\"II\",\"aceptabilidad\":\"Aceptable con control específico\",\"numeroExpuestos\":2,\"peorConsecuencia\":\"DDDD\",\"requisitoLegal\":false,\"controlesFuente\":\"DD\",\"controlesMedio\":\"DD\",\"controlesIndividuo\":\"DD\"},{\"areaNombre\":\"Gerente General\",\"puestoNombre\":\"Oficina de gerente general\",\"puestoId\":4,\"actividad\":\"SSS\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"SSSS\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":100,\"NR\":600,\"interpretacionNR\":\"I\",\"aceptabilidad\":\" No aceptable\",\"numeroExpuestos\":1,\"peorConsecuencia\":\"ZZZZZ\",\"requisitoLegal\":null,\"controlesFuente\":\"DD\",\"controlesMedio\":\"A\",\"controlesIndividuo\":\"SDSDSD\"},{\"areaNombre\":\"Gerente General\",\"puestoNombre\":\"Oficina de gerente general\",\"puestoId\":4,\"actividad\":\"SSS\",\"riesgo\":\"Postura prolongada\",\"riesgoDescripcion\":\"SSSS\",\"controlesExistentesFuente\":\"Programa de pausas activas\",\"controlesExistentesMedio\":\"N.A.\",\"controlesExistentesIndividuo\":\"Capacitación al personal en autocuidado. Capacitación en higiene postural\",\"ND\":2,\"NE\":3,\"NP\":6,\"interpretacionNP\":\"Medio\",\"NC\":100,\"NR\":600,\"interpretacionNR\":\"I\",\"aceptabilidad\":\"Aceptable\",\"numeroExpuestos\":1,\"peorConsecuencia\":\"ZZZZZ\",\"requisitoLegal\":null,\"controlesFuente\":\"DD\",\"controlesMedio\":\"A\",\"controlesIndividuo\":\"SDSDSD\"}]",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
      "establecimientosId": 1
    }
  ],
  "codigoEstado": 200
}
```


___



