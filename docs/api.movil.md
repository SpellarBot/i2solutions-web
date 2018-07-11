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



## Crear una novedad

__POST__ __/api/movil/novedad__


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
  "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
  "prioridad": "media",
  "fotoUrl": "https://imagen.png",
  "fecha": "2018-04-25T04:27:34Z",
  "puestosId": 1,
  "inspeccionId": 1
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "fecha": "2018-07-11T04:32:20.779Z",
    "fueAtendida": false,
    "id": 1,
    "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
    "prioridad": "media",
    "fotoUrl": "https://imagen.png",
    "puestosId": 1,
    "fechaActualizacion": "2018-07-11T04:32:20.779Z",
    "fechaCreacion": "2018-07-11T04:32:20.779Z"
  },
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
    "areaId": 1,
    "cantidadEmpleados": 2,
    "novedadesSinAtender": [
      {
        "id": 2,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL",
        "descripcionAtendida": null,
        "prioridad": "baja",
        "fecha": "2018-07-11 04:32:20.828 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": false,
        "puestosId": 1,
        "fechaCreacion": "2018-07-11 04:32:20.828 +00:00",
        "fechaActualizacion": "2018-07-11 04:32:20.828 +00:00"
      }
    ],
    "novedadesAtendidas": [
      {
        "id": 1,
        "descripcion": "INCREMENTO DE LAS ANOMALÍAS VISUALES, FATIGA MENTAL Y VISUAL, DOLOR DE CABEZA",
        "descripcionAtendida": "Fue atendida",
        "prioridad": "media",
        "fecha": "2018-07-11 04:32:20.827 +00:00",
        "fotoUrl": "https://imagen.png",
        "fueAtendida": true,
        "puestosId": 1,
        "fechaCreacion": "2018-07-11 04:32:20.827 +00:00",
        "fechaActualizacion": "2018-07-11 04:32:20.831 +00:00"
      }
    ],
    "riesgos": [
      {
        "id": 1,
        "tipoRiesgo": "Caida de objetos",
        "personasExpuestas": 15,
        "valoracion": "1524",
        "valoracionLiteral": "aa",
        "fecha": "2018-07-11 04:32:20.814 +00:00",
        "porcentajeRiesgo": 2,
        "fechaCreacion": "2018-07-11 04:32:20.814 +00:00",
        "fechaActualizacion": "2018-07-11 04:32:20.814 +00:00",
        "puestosId": 1
      }
    ],
    "equiposProteccion": [
      {
        "descripcion": "esta hecho",
        "nombre": "Extintor",
        "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg"
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
        "fechaCreacion": "2018-07-11 04:32:20.816 +00:00",
        "fechaActualizacion": "2018-07-11 04:32:20.816 +00:00",
        "puestosId": 1
      }
    ],
    "detallesCapacitaciones": [
      {
        "id": 1,
        "nombre": "Joel Rodriguez",
        "descripcion": "La capacitación fue un éxito",
        "tema": "Como hacer que todo valga",
        "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
        "fechaCreacion": "2018-07-11 04:32:20.826 +00:00",
        "fechaActualizacion": "2018-07-11 04:32:20.826 +00:00",
        "areasId": 1
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



