# Api Riesgos

## Crear riesgo

__POST__ __/api/web/riesgos__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| clasificacion | string |   ---   |
	
| descripcion | string |   ---   |
	
| fecha | Date |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "clasificacion": "Caida de objetos",
    "descripcion": "aa",
    "fecha": "2014-05-21T19:27:28.576Z",
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
| clasificacion | string |   ---   |
	
| descripcion | string |   ---   |
	
| fecha | Date |   ---   |
	

#### Request:

```json
{
  "clasificacion": "Caida de objetos",
  "descripcion": "aa",
  "fecha": "2014-05-21T19:27:28.576Z"
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
    "clasificacion": "Caida de objetos",
    "descripcion": "aa",
    "fecha": "2014-05-21 19:27:28.576 +00:00",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00"
  },
  "codigoEstado": 200
}
```


___



## Obtener todos

__GET__ __/api/web/riesgos__


#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "clasificacion": "Caida de objetos",
      "descripcion": "aa",
      "fecha": "2014-05-21 19:27:28.576 +00:00",
      "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
      "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00"
    }
  ],
  "codigoEstado": 200
}
```


___



