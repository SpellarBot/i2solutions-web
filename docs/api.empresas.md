# Api Empresas

## Obtener todas las empresas

__GET__ __/api/web/empresas__

Obtener todas las empresas de i2Solutions
#### Response:

```json
{
  "estado": true,
  "datos": [
    {
      "id": 1,
      "nombre": "Zapata S.A.",
      "actividadComercial": "Integrado sensible al contexto sistema abierto",
      "razonSocial": "1235468789",
      "fechaCreacion": "2018-06-13 02:26:43.245 +00:00",
      "fechaActualizacion": "2018-06-13 02:26:43.245 +00:00"
    }
  ],
  "codigoEstado": 200
}
```


___



## Crear empresas

__POST__ __/api/web/empresas__

Crear una empresa, esto tambien deberia crear un establecimiento por defecto
#### Request:

```json
{
  "nombre": "Zapata S.A.",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "1235468789",
  "direccion": "22050 Felipe Rampa",
  "ruc": "3245547449"
}
```

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Zapata S.A.",
    "actividadComercial": "Integrado sensible al contexto sistema abierto",
    "razonSocial": "1235468789",
    "fechaActualizacion": "2018-06-13T02:26:43.333Z",
    "fechaCreacion": "2018-06-13T02:26:43.333Z",
    "establecimiento": {
      "id": 1,
      "nombres": "matriz",
      "direccion": "22050 Felipe Rampa",
      "ruc": "3245547449",
      "empresasId": 1,
      "fechaActualizacion": "2018-06-13T02:26:43.335Z",
      "fechaCreacion": "2018-06-13T02:26:43.335Z"
    }
  },
  "codigoEstado": 200
}
```


___



## Actualizar Empresa

__PUT__ __/api/web/empresas/:empresasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| empresasId | Number |   ---   |
	

#### Request:

```json
{
  "id": 1,
  "nombre": "Nombre cambiado",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "1235468789",
  "fechaActualizacion": "2018-06-13T02:26:43.375Z",
  "fechaCreacion": "2018-06-13T02:26:43.375Z"
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
__El Id de la empresa no existe__




_request_

```js
{
  "id": 1,
  "nombre": "Nombre cambiado",
  "actividadComercial": "Integrado sensible al contexto sistema abierto",
  "razonSocial": "1235468789",
  "fechaActualizacion": "2018-06-13T02:26:43.414Z",
  "fechaCreacion": "2018-06-13T02:26:43.414Z"
}
```

_response_

```js
{
  "estado": false,
  "datos": "La empresa con ese id no existe",
  "codigoEstado": 200
}
```
	
	


___



## Obtener una empresa

__GET__ __/api/web/empresas/:empresasId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| empresasId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Zapata S.A.",
    "actividadComercial": "Integrado sensible al contexto sistema abierto",
    "razonSocial": "1235468789",
    "fechaCreacion": "2018-06-13T02:26:43.454Z",
    "fechaActualizacion": "2018-06-13T02:26:43.454Z",
    "establecimientos": [
      {
        "id": 1,
        "nombres": "matriz",
        "direccion": "22050 Felipe Rampa",
        "ruc": "3245547449",
        "fechaCreacion": "2018-06-13 02:26:43.456 +00:00",
        "fechaActualizacion": "2018-06-13 02:26:43.456 +00:00",
        "empresasId": 1
      },
      {
        "id": 2,
        "nombres": "Lira - Barajas",
        "direccion": "0119 Laboy Mercado",
        "ruc": "6886107230",
        "fechaCreacion": "2018-06-13 02:26:43.458 +00:00",
        "fechaActualizacion": "2018-06-13 02:26:43.458 +00:00",
        "empresasId": 1
      }
    ]
  },
  "codigoEstado": 200
}
```


___



