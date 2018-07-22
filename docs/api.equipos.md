# Api Equipos

## Crear equipo

__POST__ __/api/web/equipos__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombre  | string  |   minLength: 2   | 
|  descripcion  | string  |   minLength: 2   | 
|  fotoUrl  | string  |   url   | 
|  cantidad  | number  |   minimum: 1   | 

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
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
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
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  nombre  | string  |   minLength: 2   | 
|  descripcion  | string  |   minLength: 2   | 
|  fotoUrl  | string  |   url   | 
|  cantidad  | number  |   minimum: 1   | 

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
| equiposId | Number |   ---   |
	
| puestosId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "equiposId": "1",
    "puestosId": "1",
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
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
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z"
  },
  "codigoEstado": 200
}
```


___



## OBTENER EQUIPOS POR AREAS

__GET__ __/api/web/equipos/areas/:areasId__


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
      "descripcion": "esta hecho",
      "nombre": "Extintor",
      "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
      "cantidad": 1,
      "puestosId": 1,
      "puestosNombre": "Oficina de gerente general",
      "areasId": 1,
      "areasNombre": "Gerente General"
    },
    {
      "id": 2,
      "descripcion": "esta hecho",
      "nombre": "Extintor",
      "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
      "cantidad": 1,
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



## OBTENER EQUIPOS POR PUESTOS

__GET__ __/api/web/equipos/puestos/:puestosId__


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
      "descripcion": "esta hecho",
      "nombre": "Extintor",
      "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
      "cantidad": 1,
      "puestosId": 1,
      "puestosNombre": "Oficina de gerente general"
    },
    {
      "id": 2,
      "descripcion": "esta hecho",
      "nombre": "Extintor",
      "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
      "cantidad": 1,
      "puestosId": 1,
      "puestosNombre": "Oficina de gerente general"
    }
  ],
  "codigoEstado": 200
}
```


___



## OBTENER UN EQUIPO

__GET__ __/api/web/equipos/:equiposId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| equiposId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "descripcion": "esta hecho",
    "nombre": "Extintor",
    "fotoUrl": "http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg",
    "cantidad": 1,
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00"
  },
  "codigoEstado": 200
}
```


___



