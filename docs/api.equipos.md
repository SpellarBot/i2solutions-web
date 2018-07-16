# Api Equipos

## Crear equipo

__POST__ __/api/web/equipos__


#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Extintor",
    "descripcion": "esta hecho",
    "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
    "cantidad": 1,
    "fechaActualizacion": "2018-07-16T12:08:42.465Z",
    "fechaCreacion": "2018-07-16T12:08:42.465Z"
  },
  "codigoEstado": 200
}
```


___



## Actualizar equipo

__PUT__ __/api/web/equipos/:equiposId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| equiposId | Number |   ---   |
	

#### Request:

```json
{
  "nombre": "aa",
  "descripcion": "aa",
  "fotoUrl": "https://image.png",
  "cantidad": 1
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



## Eliminar equipo

__DELETE__ __/api/web/equipos/:equiposId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| equiposId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": true,
  "codigoEstado": 200
}
```


___



## ANADIR EQUIPO A UN PUESTO

__GET__ __/api/web/equipos/:equiposId/puestos/:puestosId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| puestosId | Number |   ---   |
	
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "equiposId": "1",
    "puestosId": "1",
    "fechaActualizacion": "2018-07-16T12:08:43.482Z",
    "fechaCreacion": "2018-07-16T12:08:43.482Z"
  },
  "codigoEstado": 200
}
```


___



## ANADIR EQUIPO A UN AREA

__GET__ __/api/web/equipos/:equiposId/areas/:areasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| equiposId | Number |   ---   |
	
| areasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "equiposId": "1",
    "areasId": "1",
    "fechaActualizacion": "2018-07-16T12:08:43.776Z",
    "fechaCreacion": "2018-07-16T12:08:43.776Z"
  },
  "codigoEstado": 200
}
```


___



