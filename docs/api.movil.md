# Api Movil

## Obtener todos los puestas dada un area

__GET__ __/api/movil/puestosDeUnArea/:areasId__


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
      "nombre": "Oficina de gerente general",
      "descripcion": "AA"
    }
  ],
  "codigoEstado": 200
}
```


___



## Obtener un puesto

__PUT__ __/api/movil/area/:areasId/puesto/:puestosId/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| areasId | Number |   ---   |
	
| puestosId | Number |   ---   |
	
| establecimientosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Oficina de gerente general",
    "descripcion": "AA",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "areasId": 1,
    "novedadesSinAtender": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "descripcionAtendida": null,
        "prioridad": "baja",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": false,
        "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
        "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
        "puestosId": 1,
        "inspeccionesId": null
      }
    ],
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "descripcionAtendida": "aaa",
        "prioridad": "media",
        "fecha": "2011-10-01 05:00:00.000 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": true,
        "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
        "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
        "puestosId": 1,
        "inspeccionesId": null
      }
    ],
    "riesgos": [
      {
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
      }
    ],
    "cantidadEmpleados": 1,
    "equiposProteccion": [
      {
        "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
        "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
        "equiposId": 1,
        "puestosId": 1,
        "id": 1,
        "descripcion": "esta hecho",
        "nombre": "Extintor",
        "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
        "cantidad": 1
      }
    ],
    "detallesAccidentes": [
      {
        "id": 1,
        "descripcion": "Se cayó la solución",
        "nombre": "Caída de instrumentos",
        "heridos": "1",
        "atendidoEnEmpresa": 1,
        "muertos": 0,
        "fecha": "2014-05-21 19:27:28.576 +00:00",
        "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
        "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
        "puestosId": 1
      }
    ],
    "detallesCapacitaciones": [
      {
        "nombre": "Joel Rodriguez",
        "id": 1,
        "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
        "tema": "Como hacer que todo valga",
        "areasId": 1,
        "descripcion": "La capacitación fue un éxito",
        "capacitados": [
          {
            "id": 1,
            "nombres": "Carlos",
            "apellidos": "Andres",
            "correo": "ca@hotmail.com",
            "cedula": "0931823447",
            "telefono": "0986901270"
          },
          {
            "nombres": "Elsa",
            "apellidos": "Vega",
            "correo": "vctor_daz@hotmail.com",
            "cedula": "0931823447",
            "telefono": "0986901270"
          }
        ]
      },
      {
        "nombre": "Andres Escobar",
        "id": 2,
        "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
        "tema": "Datos ",
        "areasId": 1,
        "descripcion": "Ensenar como hacer algo",
        "capacitados": []
      }
    ]
  },
  "codigoEstado": 200
}
```


___



## Atender una novedad

__PUT__ __/api/movil/novedad__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  descripcion  | String  |   ---   | 
|  prioridad  | String  |   [alta,media,baja]   | 
|  fotoUrl  | String  |   ---   | 
|  puestosId  | Number  |   ---   | 
|  inspeccionesId  | Number  |   ---   | 

#### Request:

```json
{
  "atendida": true,
  "descripcionAtendida": ""
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

#### ERRORS:
__El Id de la novedad no existe__




_request_

```js
{
  "atendida": true,
  "descripcionAtendida": ""
}
```

_response_

```js
{
  "estado": false,
  "datos": "La novedad con ese id no exite",
  "codigoEstado": 200
}
```
	
	


___



