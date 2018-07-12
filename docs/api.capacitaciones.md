# Api Capacitaciones

## Crear capacitacion

__POST__ __/api/web/capacitaciones__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Joel Rodriguez",
    "descripcion": "La capacitación fue un éxito",
    "tema": "Como hacer que todo valga",
    "fechaCapacitacion": "2018-04-25T04:27:34.000Z",
    "areasId": 1,
    "fechaActualizacion": "2018-07-12T01:22:27.755Z",
    "fechaCreacion": "2018-07-12T01:22:27.755Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar capacitacion

__PUT__ __/api/web/capacitaciones/:capacitacionId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| capacitacionId | Number |   ---   |
	

#### Request:

```json
{
  "nombre": "aa",
  "descripcion": "aaa",
  "tema": "aa",
  "fechaCapacitacion": "2018-04-25T04:27:34Z"
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



## Eliminar capacitacion

__DELETE__ __/api/web/capacitaciones/:capacitacionId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| capacitacionId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



