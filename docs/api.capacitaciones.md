# Api Capacitaciones

## Crear capacitacion

__POST__ __/api/web/capacitaciones__


#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  descripcion  | string  |   minLength: 2   | 
|  tema  | string  |   minLength: 2   | 
|  fechaCapacitacion  | fecha  |   ---   | 
|  areasId  | number  |   minimum: 1   | 

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
    "fechaActualizacion": "2011-10-01T05:00:00.000Z",
    "fechaCreacion": "2011-10-01T05:00:00.000Z",
    "personas": [
      {
        "usuario": "elsa",
        "correo": "vctor_daz@hotmail.com",
        "nombres": "Elsa",
        "apellidos": "Vega",
        "id": 1,
        "rol": "admin-i2solutions",
        "cedula": "0931823447"
      },
      {
        "usuario": "carlos",
        "correo": "ca@hotmail.com",
        "nombres": "Carlos",
        "apellidos": "Andres",
        "id": 2,
        "rol": "inspector-seguridad",
        "cedula": "0931823447"
      }
    ]
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
	

#### Body:
| Name       | Type    | Desc |
| :--------- | :------ | :-------| 
|  descripcion  | string  |   minLength: 2   | 
|  tema  | string  |   minLength: 2   | 
|  fechaCapacitacion  | fecha  |   ---   | 
|  areasId  | number  |   minimum: 1   | 

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



## Obtener una capacitacion

__GET__ __/api/web/capacitaciones/:capacitacionId__


#### Params:
| Name       | Type    | Desc |
| :--------- | :------ | :-------|
| capacitacionId | Number |   ---   |
	

#### Response:

```json
{
  "estado": true,
  "datos": {
    "id": 1,
    "nombre": "Joel Rodriguez",
    "descripcion": "La capacitación fue un éxito",
    "tema": "Como hacer que todo valga",
    "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
    "fechaCreacion": "2011-10-01 05:00:00.000 +00:00",
    "fechaActualizacion": "2011-10-01 05:00:00.000 +00:00",
    "areasId": 1
  },
  "codigoEstado": 200
}
```


___



## Obtener por establecimiento

__GET__ __/api/web/capacitaciones/establecimientos/:establecimientosId__


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
      "nombre": "Joel Rodriguez",
      "id": 1,
      "descripcion": "La capacitación fue un éxito",
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Como hacer que todo valga",
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "personas": [
        {
          "capacitacionesId": 1,
          "usuario": "elsa",
          "correo": "vctor_daz@hotmail.com",
          "nombres": "Elsa",
          "apellidos": "Vega",
          "id": 1,
          "rol": "admin-i2solutions",
          "cedula": "0931823447"
        },
        {
          "capacitacionesId": 1,
          "usuario": "carlos",
          "correo": "ca@hotmail.com",
          "nombres": "Carlos",
          "apellidos": "Andres",
          "id": 2,
          "rol": "inspector-seguridad",
          "cedula": "0931823447"
        }
      ]
    },
    {
      "nombre": "Andres Escobar",
      "id": 2,
      "descripcion": "Ensenar como hacer algo",
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Datos ",
      "areasId": 2,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "personas": []
    },
    {
      "nombre": "Joel Rodriguez",
      "id": 3,
      "descripcion": "La capacitación fue un éxito",
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Como hacer que todo valga",
      "areasId": 1,
      "areasActividad": "gerencia",
      "areasNombre": "Gerente General",
      "areasDescripcionLugar": "Neque incidunt earum quia sint dolorem dolores ut amet.",
      "personas": [
        {
          "capacitacionesId": 3,
          "usuario": "irene",
          "correo": "irenesp@yahoo.com",
          "nombres": "Irene",
          "apellidos": "Espinosa",
          "id": 3,
          "rol": "empleado",
          "cedula": "0931823447"
        }
      ]
    }
  ],
  "codigoEstado": 200
}
```


___



## Obtener por area

__GET__ __/api/web/capacitaciones/areas/:areasId__


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
      "nombre": "Joel Rodriguez",
      "id": 1,
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Como hacer que todo valga",
      "areasId": 1,
      "descripcion": "La capacitación fue un éxito",
      "personas": [
        {
          "capacitacionesId": 1,
          "usuario": "elsa",
          "correo": "vctor_daz@hotmail.com",
          "nombres": "Elsa",
          "apellidos": "Vega",
          "id": 1,
          "rol": "admin-i2solutions",
          "cedula": "0931823447"
        },
        {
          "capacitacionesId": 1,
          "usuario": "carlos",
          "correo": "ca@hotmail.com",
          "nombres": "Carlos",
          "apellidos": "Andres",
          "id": 2,
          "rol": "inspector-seguridad",
          "cedula": "0931823447"
        }
      ]
    },
    {
      "nombre": "Joel Rodriguez",
      "id": 3,
      "fechaCapacitacion": "2018-04-25 04:27:34.000 +00:00",
      "tema": "Como hacer que todo valga",
      "areasId": 1,
      "descripcion": "La capacitación fue un éxito",
      "personas": [
        {
          "capacitacionesId": 3,
          "usuario": "irene",
          "correo": "irenesp@yahoo.com",
          "nombres": "Irene",
          "apellidos": "Espinosa",
          "id": 3,
          "rol": "empleado",
          "cedula": "0931823447"
        }
      ]
    }
  ],
  "codigoEstado": 200
}
```


___



