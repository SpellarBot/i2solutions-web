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
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
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
    "descripcion": null,
    "nombre": null,
    "heridos": null,
    "atendidoEnEmpresa": null,
    "muertos": null,
    "fecha": null,
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "puestosId": 1
  },
  "codigoEstado": 200
}
```


___



## Obtener accidentes por establecimiento

__GET__ __/api/web/accidentes/establecimientos/:establecimientosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| establecimientosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombre": "Caída de instrumentos",
      "descripcion": "Se cayó la solución",
      "heridos": "1",
      "atendidoEnEmpresa": 1,
      "muertos": 0,
      "fecha": "2014-05-21 19:27:28.576 +00:00",
      "puestosId": 1,
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "puestosNombre": "Oficina de gerente general"
    }
  ],
  "codigoEstado": 200
}
```


___



## Obtener accidentes por area

__GET__ __/api/web/accidentes/areas/:areasId__


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
      "nombre": "Caída de instrumentos",
      "descripcion": "Se cayó la solución",
      "heridos": "1",
      "atendidoEnEmpresa": 1,
      "muertos": 0,
      "fecha": "2014-05-21 19:27:28.576 +00:00",
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



## Obtener accidentes por puesto

__GET__ __/api/web/accidentes/puestos/:puestosId__


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
      "nombre": "Caída de instrumentos",
      "descripcion": "Se cayó la solución",
      "heridos": "1",
      "atendidoEnEmpresa": 1,
      "muertos": 0,
      "fecha": "2014-05-21 19:27:28.576 +00:00",
      "puestosId": 1,
      "puestosNombre": "Oficina de gerente general"
    }
  ],
  "codigoEstado": 200
}
```


___



